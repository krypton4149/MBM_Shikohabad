import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

const MAX_WIDTH = {
  hero: 1920,
  gallery: 1400,
  services: 1200,
  about: 1200,
  academy: 1200,
  logo: 512,
};

function getMaxWidth(relativePath) {
  const folder = relativePath.split(path.sep)[0];
  return MAX_WIDTH[folder] ?? 1400;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeFile(filePath) {
  const relativePath = path.relative(IMAGES_DIR, filePath);
  const maxWidth = getMaxWidth(relativePath);
  const before = (await fs.stat(filePath)).size;

  const image = sharp(filePath, { failOn: "none" });
  const metadata = await image.metadata();

  if (!metadata.width) {
    console.log(`skip (unreadable): ${relativePath}`);
    return;
  }

  const pipeline = image.rotate().resize({
    width: Math.min(metadata.width, maxWidth),
    withoutEnlargement: true,
  });

  if (/\.png$/i.test(filePath)) {
    await pipeline
      .png({ quality: 82, compressionLevel: 9, palette: true })
      .toFile(`${filePath}.tmp`);
  } else {
    await pipeline
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(`${filePath}.tmp`);
  }

  await fs.rename(`${filePath}.tmp`, filePath);
  const after = (await fs.stat(filePath)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);

  console.log(
    `${relativePath}: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (${saved}% smaller)`
  );
}

const files = await walk(IMAGES_DIR);
console.log(`Optimizing ${files.length} images...`);

for (const file of files) {
  await optimizeFile(file);
}

console.log("Done.");
