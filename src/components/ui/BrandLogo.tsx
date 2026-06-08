import Image from "next/image";
import Link from "next/link";
import { BRAND_INITIALS, BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand";
import { images } from "@/lib/images";

type BrandLogoProps = {
  variant?: "navbar" | "footer" | "image";
  href?: string;
  className?: string;
};

export function BrandLogo({
  variant = "navbar",
  href = "/",
  className = "",
}: BrandLogoProps) {
  if (variant === "image") {
    return (
      <Link href={href} className={`inline-block ${className}`}>
        <Image
          src={images.logo.main}
          alt={`${BRAND_NAME} ${BRAND_TAGLINE}`}
          width={120}
          height={120}
          className="h-auto w-24 md:w-28"
        />
      </Link>
    );
  }

  const isFooter = variant === "footer";

  if (variant === "navbar") {
    return (
      <Link href={href} className={`group inline-flex items-center gap-3 ${className}`}>
        <span className="font-headline text-2xl font-semibold leading-none tracking-[0.1em] text-primary md:text-3xl">
          M<span className="text-secondary">B</span>M
        </span>

        <span className="hidden h-8 w-px bg-secondary/30 sm:block" />

        <span className="hidden min-w-0 sm:block">
          <span className="block text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary md:text-[0.68rem]">
            {BRAND_NAME}
          </span>
          <span className="mt-1 block text-[0.55rem] font-medium uppercase tracking-[0.28em] text-primary-400 md:text-[0.58rem]">
            {BRAND_TAGLINE}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className={`group inline-block ${className}`}>
      <span className="block font-headline text-3xl font-semibold leading-none tracking-[0.08em] text-neutral md:text-4xl">
        M<span className="text-secondary">B</span>M
      </span>

      <span className="mt-2 block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-neutral/90 md:text-[0.68rem]">
        {BRAND_NAME}
      </span>

      <span className="mt-1.5 flex items-center gap-2">
        <span className="h-px flex-1 bg-secondary/50" />
        <span className="h-1 w-1 rounded-full bg-secondary" />
        <span className="h-px flex-1 bg-secondary/50" />
      </span>

      <span className="mt-1.5 block text-[0.58rem] font-medium uppercase tracking-[0.32em] text-neutral/70 md:text-[0.62rem]">
        {BRAND_TAGLINE}
      </span>
    </Link>
  );
}
