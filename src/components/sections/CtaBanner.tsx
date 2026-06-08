import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function CtaBanner() {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="font-headline text-3xl font-semibold text-neutral sm:text-4xl md:text-section">
          Ready For Your Dream Look?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body text-neutral/90">
          Let our experts craft the perfect look for your most special day.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppLink className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral transition-colors hover:bg-primary-700">
            Book Appointment
          </WhatsAppLink>
          <WhatsAppLink className="inline-flex items-center justify-center rounded-sm border border-neutral px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral transition-colors hover:bg-neutral/10">
            WhatsApp Now
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
