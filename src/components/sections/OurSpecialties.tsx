import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { images } from "@/lib/images";

const specialties = [
  {
    title: "Bridal Artistry",
    subtitle: "HD & Airbrush Specialists",
    image: images.services.bridalArtistry,
    alt: "Professional bridal makeup artistry",
    services: [
      "Classic Bridal Signature",
      "Modern HD Glow",
      "Premium Airbrush Mastery",
    ],
  },
  {
    title: "Hair Couture",
    subtitle: "Styling & Treatments",
    image: images.services.hair,
    alt: "Luxury hair styling and treatments",
    services: [
      "Editorial Hair Styling",
      "Luxury Keratin Therapy",
      "Sculpted Bridal Updos",
    ],
    imageClass: "object-cover object-[center_30%]",
  },
  {
    title: "Skin & Nail Care",
    subtitle: "Precision & Pampering",
    image: images.services.nail,
    alt: "Signature nail artistry and manicure",
    services: [
      "Luminous Facial Rituals",
      "Signature Nail Artistry",
      "Pedicure Spa Luxe",
    ],
  },
];

export function OurSpecialties() {
  return (
    <section id="collections" className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
            Our Specialties
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-secondary" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {specialties.map((specialty) => (
            <article key={specialty.title} className="bg-neutral">
              <div className="relative aspect-[4/3] overflow-hidden">
                <SafeImage
                  src={specialty.image}
                  alt={specialty.alt}
                  fill
                  className={"imageClass" in specialty && specialty.imageClass ? specialty.imageClass : "object-cover"}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="px-4 py-8 text-center md:px-6">
                <h3 className="font-headline text-2xl font-semibold text-primary">
                  {specialty.title}
                </h3>
                <p className="mt-2 text-label font-medium tracking-[0.15em] text-secondary">
                  {specialty.subtitle}
                </p>

                <ul className="mt-6 space-y-2">
                  {specialty.services.map((service) => (
                    <li key={service} className="text-small text-primary-400">
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-8 inline-block font-headline text-label font-medium tracking-[0.12em] text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-secondary hover:decoration-secondary"
                >
                  Discover More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
