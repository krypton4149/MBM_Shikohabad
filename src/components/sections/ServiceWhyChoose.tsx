import { SafeImage } from "@/components/ui/SafeImage";
import { images } from "@/lib/images";

const features = [
  {
    title: "Premium Product Kit",
    description:
      "Exclusively using MAC, Huda Beauty, Charlotte Tilbury, and Estée Lauder for flawless results.",
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
    title: "Expert Certified Artists",
    description:
      "Our team consists of academy-certified experts with years of experience in high-fashion and bridal artistry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 20h8M10 14v2M14 14v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M12 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Bespoke Consultations",
    description:
      "We tailor every look to your unique features, personality, and the specific lighting of your event.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 19l1.5-1.5M19 19l-1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function ServiceWhyChoose() {
  return (
    <section className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-secondary" />
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-secondary" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <SafeImage
                src={images.services.whyChoose}
                alt="Muskan providing bespoke bridal consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-label font-medium tracking-[0.2em] text-secondary">
              Uncompromising Standards
            </p>

            <h2 className="mt-4 font-headline text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-section">
              Why Discerning Clients Choose Makeovers by Muskan
            </h2>

            <p className="mt-6 text-body leading-relaxed text-primary-400">
              We believe that beauty is an art form. Our commitment to perfection is
              reflected in every brushstroke and every precision cut. We exclusively use
              world-renowned products to ensure a finish that is as durable as it is
              breathtaking.
            </p>

            <ul className="mt-10 space-y-8">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-5">
                  <span className="mt-1 shrink-0 text-secondary">{feature.icon}</span>
                  <div>
                    <h3 className="font-body text-body font-semibold text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-small leading-relaxed text-primary-400">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
