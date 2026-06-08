import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={images.services.hero}
        alt="MBM Salon beauty services"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center md:px-10">
        <p className="text-label font-medium tracking-[0.25em] text-secondary">
          Elite Artistry
        </p>

        <h1 className="mt-6 font-headline text-4xl font-medium leading-tight text-neutral sm:text-5xl md:text-hero lg:text-display">
          Exquisite Beauty Services
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-body leading-relaxed text-neutral/85 md:text-lg">
          Where professional mastery meets editorial elegance. Experience the
          pinnacle of luxury salon and academy excellence.
        </p>

        <Link
          href="#collections"
          className="mt-10 inline-flex items-center justify-center rounded-sm bg-neutral px-10 py-3.5 text-label font-semibold tracking-[0.12em] text-primary transition-colors hover:bg-neutral-200"
        >
          View Collections
        </Link>
      </div>

      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-secondary transition-opacity hover:opacity-70"
        aria-label="Scroll to collections"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 animate-bounce" aria-hidden="true">
          <path
            d="M7 10l5 5 5-5M7 14l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
