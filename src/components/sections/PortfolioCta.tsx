import Link from "next/link";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function PortfolioCta() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="font-headline text-3xl font-semibold text-neutral sm:text-4xl md:text-section">
          Get This Look – Book Now
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-body leading-relaxed text-primary-200">
          Every look in our gallery is a bespoke creation tailored to your unique
          vision. Secure your session with our master artists today and experience
          the perfection of Makeovers by Muskan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppLink className="inline-flex items-center justify-center rounded-sm bg-secondary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-primary transition-colors hover:bg-secondary-500">
            Schedule Consultation
          </WhatsAppLink>

          <Link
            href="/services#pricing"
            className="inline-flex items-center justify-center rounded-sm border border-secondary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-secondary transition-colors hover:bg-secondary/10"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
        <div className="h-px bg-primary-400" />
      </div>
    </section>
  );
}
