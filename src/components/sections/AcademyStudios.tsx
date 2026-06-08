import Image from "next/image";
import { images } from "@/lib/images";

const studios = [
  {
    title: "Daylight Simulation",
    description: "Industry-standard lighting for perfect color matching.",
    image: images.academy.studio,
    alt: "Makeovers by Muskan state-of-the-art beauty studio",
    tall: true,
    offset: false,
    imageClass: "grayscale",
  },
  {
    title: "Live Model Sessions",
    description: "Real-world experience with professional models.",
    image: images.academy.model,
    alt: "Live model makeup session at the academy",
    tall: false,
    offset: true,
    imageClass: "grayscale",
  },
  {
    title: "Global Product Bar",
    description: "Unrestricted access to premium luxury makeup brands.",
    image: images.academy.product,
    alt: "Premium luxury makeup products at the academy",
    tall: true,
    offset: false,
    imageClass: "grayscale",
  },
];

export function AcademyStudios() {
  return (
    <section className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-label font-medium tracking-[0.25em] text-secondary">
            Our Environment
          </p>
          <h2 className="mt-4 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
            State-of-the-Art Studios
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {studios.map((studio) => (
            <div
              key={studio.title}
              className={studio.offset ? "md:mt-16 lg:mt-20" : ""}
            >
              <div
                className={`relative w-full overflow-hidden bg-primary-100 ${
                  studio.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={studio.image}
                  alt={studio.alt}
                  fill
                  className={`object-cover ${"imageClass" in studio && studio.imageClass ? studio.imageClass : ""}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-6 flex gap-4 border-l-2 border-secondary pl-4">
                <div>
                  <h3 className="font-body text-body font-semibold text-primary">
                    {studio.title}
                  </h3>
                  <p className="mt-2 text-small leading-relaxed text-primary-400">
                    {studio.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
