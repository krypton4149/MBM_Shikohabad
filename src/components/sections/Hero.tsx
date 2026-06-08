import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden">
      <SafeImage
        src="/images/hero/Hero_bridal.JPG"
        alt="Luxury bridal makeup and beauty"
        fill
        priority
        quality={90}
        className="object-cover object-[75%_center]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-label font-medium tracking-[0.2em] text-secondary">
            Established Excellence
          </p>

          <h1 className="mt-5 font-headline text-4xl font-medium leading-[1.1] text-neutral sm:text-5xl md:text-hero lg:text-display">
            Luxury Bridal Makeup &amp; Beauty{" "}
            <em className="font-medium italic text-secondary">Studio</em>
          </h1>

          <p className="mt-6 max-w-lg text-body leading-relaxed text-neutral/90">
            Transforming Beauty with Elegance, Confidence &amp; Perfection.
            Discover the mastery of artistic strokes and premium care.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppLink className="inline-flex items-center justify-center rounded-sm bg-neutral px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-primary transition-colors hover:bg-neutral-200">
              Book Appointment
            </WhatsAppLink>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-sm border border-neutral px-8 py-3.5 text-label font-medium tracking-[0.1em] text-neutral transition-colors hover:bg-neutral/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
