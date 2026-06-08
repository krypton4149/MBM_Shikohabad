import { SafeImage } from "@/components/ui/SafeImage";
import { images } from "@/lib/images";

const mainServices = [
  {
    title: "Bridal Makeup",
    subtitle: "Starting from ₹15,000",
    image: images.services.bridalArtistry,
    alt: "Professional bridal makeup artistry",
  },
  {
    title: "HD & Airbrush",
    subtitle: "Flawless Finish",
    image: images.services.hdAirbrush,
    alt: "HD and airbrush makeup application",
    imageClass: "object-cover object-[center_22%]",
  },
  {
    title: "Hair Styling",
    subtitle: "Artistic Design",
    image: images.services.hair,
    alt: "Luxury hair styling and treatments",
    imageClass: "object-cover object-[center_30%]",
  },
];

const additionalServices = [
  {
    label: "Engagement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Reception",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 14c2-4 4-6 8-6s6 2 8 6M6 18h12M9 10V6M15 10V6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="4" r="1" fill="currentColor" />
        <circle cx="16" cy="4" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Hair Treatment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6h10M9 18h10M20 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Skin Care",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-label font-medium tracking-[0.2em] text-secondary">
            Our Expertise
          </p>
          <h2 className="mt-3 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
            Signature Services
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden bg-neutral shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square">
                <SafeImage
                  src={service.image}
                  alt={service.alt}
                  fill
                  className={"imageClass" in service && service.imageClass ? service.imageClass : "object-cover"}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-6 py-8 text-center">
                <h3 className="font-headline text-xl font-semibold text-primary md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-label font-medium tracking-[0.15em] text-secondary">
                  {service.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {additionalServices.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center justify-center gap-3 bg-neutral px-4 py-8 shadow-sm"
            >
              <span className="text-secondary">{service.icon}</span>
              <p className="text-small font-medium text-primary">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
