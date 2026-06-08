const features = [
  {
    title: "Experienced Artists",
    description:
      "Led by industry veterans with years of experience in celebrity and bridal transformations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Premium Products",
    description:
      "We use only high-end international brands like MAC, Bobby Brown, and Huda Beauty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3l1.5 4.5H18l-3.5 2.5L16 14.5 12 12 8 14.5l1.5-4.5L6 7.5h4.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M5 19h14M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Certified Academy",
    description:
      "Our certifications are recognized nationwide, opening doors to professional opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 10l8-5 8 5v8H4v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Customized Looks",
    description:
      "Every look is uniquely tailored to enhance your natural features and personality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 20c4-8 8-12 16-14M14 4l2 6 6 2-8 8-6-2-2-6 8-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Professional Team",
    description:
      "A dedicated team of experts specializing in hair, skin, and nails.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2 1.5-3.5 4-3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Modern Studio",
    description:
      "Experience luxury in our state-of-the-art studio designed for ultimate comfort.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 20V8l8-4 8 4v12H4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="bg-surface-cool py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <h2 className="text-center font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
          Why Choose Makeovers by Muskan?
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-neutral px-8 py-10 transition-shadow duration-300 hover:shadow-md"
            >
              <span className="text-secondary">{feature.icon}</span>
              <h3 className="mt-5 font-body text-body font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-small leading-relaxed text-primary-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
