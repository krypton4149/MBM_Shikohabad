import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const programs = [
  {
    badge: "6 Months",
    title: "Basic to Pro Course",
    features: [
      "Skin Prep & Analysis",
      "Global Face Charting",
      "High-Definition Looks",
    ],
  },
  {
    badge: "3 Months",
    title: "Bridal Masterclass",
    features: [
      "Luxury Bridal Finishes",
      "Draping & Styling",
      "Waterproof Techniques",
    ],
  },
  {
    badge: "2 Months",
    title: "Advanced Hair Styling",
    features: [
      "Red Carpet Artistry",
      "Extension Integration",
      "Texture Mastery",
    ],
  },
  {
    badge: "Global Exam",
    title: "Professional Certification",
    features: [
      "International Standards",
      "Business Management",
      "Portfolio Building",
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AcademyPrograms() {
  return (
    <section id="courses" className="bg-surface-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-label font-medium tracking-[0.25em] text-secondary">
              Our Curriculum
            </p>
            <h2 className="mt-4 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
              Academy Programs
            </h2>
          </div>

          <p className="max-w-md text-body leading-relaxed text-primary-400 lg:justify-self-end lg:text-right">
            Each course is meticulously designed to transform passion into
            precision, featuring hands-on training with global luxury brands.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex flex-col border border-primary-100 bg-neutral p-6 shadow-sm md:p-7"
            >
              <span className="inline-flex w-fit bg-secondary-100 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-secondary">
                {program.badge}
              </span>

              <h3 className="mt-5 font-body text-lg font-semibold text-primary">
                {program.title}
              </h3>

              <ul className="mt-5 flex-1 space-y-3">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-small text-primary-400"
                  >
                    <span className="mt-0.5 text-secondary">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <WhatsAppLink className="mt-8 flex w-full items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral transition-colors hover:bg-primary-700">
                Enroll Now
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
