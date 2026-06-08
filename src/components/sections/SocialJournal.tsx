import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import {
  INSTAGRAM_REEL_URL,
  INSTAGRAM_REEL_URL_2,
  INSTAGRAM_REEL_URL_3,
  INSTAGRAM_REEL_URL_4,
  INSTAGRAM_URL,
} from "@/lib/contact";
import { images } from "@/lib/images";

const socialImages = [
  {
    src: images.gallery.reel1,
    alt: "Makeovers by Muskan Instagram reel one",
    href: INSTAGRAM_REEL_URL,
    objectPosition: "object-[center_48%]",
    views: "51.4k",
  },
  {
    src: images.gallery.reel2,
    alt: "Makeovers by Muskan Instagram reel two",
    href: INSTAGRAM_REEL_URL_2,
    objectPosition: "object-[center_52%]",
    views: "6263",
  },
  {
    src: images.gallery.reel3,
    alt: "Makeovers by Muskan Instagram reel three",
    href: INSTAGRAM_REEL_URL_3,
    objectPosition: "object-[center_50%]",
    views: "66.2k",
  },
  {
    src: images.gallery.reel4,
    alt: "Makeovers by Muskan Instagram reel four",
    href: INSTAGRAM_REEL_URL_4,
    objectPosition: "object-[center_32%]",
    views: "6501",
  },
];

export function SocialJournal() {
  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-headline text-label font-medium tracking-[0.2em] text-secondary">
              Social Journal
            </p>
            <h2 className="mt-3 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
              Follow our journey
            </h2>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-headline text-2xl font-semibold text-primary transition-colors hover:text-secondary md:text-3xl"
            >
              @mbmsalon_shikohabad
            </Link>
          </div>

          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 self-start md:self-auto"
          >
            <span className="text-label font-medium tracking-[0.12em] text-primary">
              View Instagram Feed
            </span>
            <span className="mt-2 block h-px w-full bg-primary transition-all group-hover:w-[110%]" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 items-stretch gap-4 md:grid-cols-4 md:gap-5">
          {socialImages.map((image) => (
            <Link
              key={image.src}
              href={image.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[9/16] w-full overflow-hidden bg-primary-100"
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${image.objectPosition}`}
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-primary/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-neutral">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="text-label font-semibold tracking-[0.12em]">
                    {image.views} views
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
