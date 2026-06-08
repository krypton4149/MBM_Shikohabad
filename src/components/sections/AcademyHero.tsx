import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { images } from "@/lib/images";

export function AcademyHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden bg-neutral">
      <Image
        src={images.academy.hero}
        alt="Makeup artist applying professional makeup"
        fill
        priority
        className="object-cover object-[70%_center] grayscale"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-neutral from-35% via-neutral/90 via-55% to-neutral/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral/30 via-transparent to-neutral/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="text-label font-medium tracking-[0.25em] text-secondary">
            Master the Art of Beauty
          </p>

          <h1 className="mt-6 font-headline text-4xl font-semibold leading-[1.15] text-primary sm:text-5xl md:text-hero lg:text-display">
            Start Your Journey as a{" "}
            <em className="font-medium italic">Professional</em> Makeup Artist
          </h1>

          <p className="mt-6 max-w-lg text-body leading-relaxed text-primary-400 md:text-lg">
            Join the elite ranks of Makeovers by Muskan graduates. Our academy provides the
            technical mastery and industry insight needed to excel in the global
            beauty market.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#courses"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral transition-colors hover:bg-primary-700"
            >
              Explore Courses
              <span aria-hidden="true">→</span>
            </Link>
            <WhatsAppLink className="inline-flex items-center justify-center rounded-sm border border-primary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-neutral">
              Request Brochure
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
