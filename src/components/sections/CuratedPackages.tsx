import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const packages = [
  {
    name: "Essence",
    price: "$299",
    featured: false,
    features: [
      { text: "HD Makeup Application", included: true },
      { text: "Classic Hair Styling", included: true },
      { text: "Basic Saree/Drape", included: true },
      { text: "Airbrush Upgrade", included: false },
      { text: "Hair Accessories", included: false },
    ],
    cta: "Select Package",
    ctaStyle: "outline" as const,
  },
  {
    name: "Radiance",
    price: "$499",
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "Airbrush Makeup Mastery", included: true },
      { text: "Editorial Hair Design", included: true },
      { text: "Luxury Lash Enhancement", included: true },
      { text: "Nail Extension Kit", included: true },
      { text: "Trial Consultation", included: true },
    ],
    cta: "Book Radiance",
    ctaStyle: "solid" as const,
  },
  {
    name: "Perfection",
    price: "$799",
    featured: false,
    features: [
      { text: "International Artist Lead", included: true },
      { text: "Airbrush + HD Finish", included: true },
      { text: "Diamond Hair Couture", included: true },
      { text: "Complete Skin Glow Ritual", included: true },
      { text: "Full Day Concierge", included: true },
    ],
    cta: "Select Package",
    ctaStyle: "outline" as const,
  },
];

export function CuratedPackages() {
  return (
    <section id="pricing" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <p className="font-headline text-label font-medium tracking-[0.2em] text-secondary">
            The Bridal Suite
          </p>
          <h2 className="mt-4 font-headline text-3xl font-semibold text-neutral sm:text-4xl md:text-section">
            Curated Packages
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col border px-8 py-10 text-center ${
                pkg.featured
                  ? "border-secondary bg-neutral lg:py-12"
                  : "border-secondary/60 bg-primary-700"
              }`}
            >
              {pkg.badge && (
                <span className="absolute right-0 top-0 bg-secondary px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-neutral">
                  {pkg.badge}
                </span>
              )}

              <h3
                className={`font-headline text-2xl font-semibold ${
                  pkg.featured ? "text-primary" : "text-neutral"
                }`}
              >
                {pkg.name}
              </h3>

              <p
                className={`mt-4 font-headline text-4xl font-semibold md:text-5xl ${
                  pkg.featured ? "text-primary" : "text-secondary"
                }`}
              >
                {pkg.price}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`text-small ${
                      feature.included
                        ? pkg.featured
                          ? "text-primary-400"
                          : "text-neutral/90"
                        : pkg.featured
                          ? "text-primary-200 line-through"
                          : "text-neutral/30 line-through"
                    }`}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                className={`mt-10 inline-flex items-center justify-center px-8 py-3.5 text-label font-semibold tracking-[0.1em] transition-colors ${
                  pkg.ctaStyle === "solid"
                    ? "bg-primary text-neutral hover:bg-primary-700"
                    : "border border-secondary text-secondary hover:bg-secondary hover:text-neutral"
                }`}
              >
                {pkg.cta}
              </WhatsAppLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
