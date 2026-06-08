import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function ServiceCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,115,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary-900" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="font-headline text-3xl font-semibold text-neutral sm:text-4xl md:text-5xl lg:text-section">
          Ready for Perfection?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-body leading-relaxed text-primary-200 md:text-lg">
          Secure your date with Makeovers by Muskan. Our slots fill up months
          in advance for peak wedding seasons.
        </p>

        <WhatsAppLink className="mt-12 inline-flex min-w-[280px] items-center justify-center rounded-sm bg-secondary px-12 py-4 text-label font-semibold tracking-[0.14em] text-neutral transition-colors hover:bg-secondary-500">
          Book Your Transformation
        </WhatsAppLink>
      </div>
    </section>
  );
}
