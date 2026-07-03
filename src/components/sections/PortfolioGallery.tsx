"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { useState } from "react";
import { images } from "@/lib/images";

const filters = [
  "All",
  "Bridal",
  "Engagement",
  "Reception",
  "Haldi",
  "Editorial",
] as const;

type Filter = (typeof filters)[number];

const portfolioItems = [
  {
    id: 1,
    image: images.gallery.img1,
    alt: "Bridal makeup with traditional jewelry and emerald accessories",
    category: "bridal",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 2,
    image: images.gallery.img2,
    alt: "Reception bridal makeup and styling",
    category: "reception",
    objectPosition: "object-[center_22%]",
  },
  {
    id: 3,
    image: images.gallery.haldi,
    alt: "Haldi ceremony bridal look",
    category: "haldi",
    objectPosition: "object-[center_28%]",
  },
  {
    id: 4,
    image: images.gallery.bride1,
    alt: "MBM bridal makeup look one",
    category: "bridal",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 5,
    image: images.gallery.bride2,
    alt: "MBM bridal makeup look two",
    category: "bridal",
    objectPosition: "object-[center_28%]",
  },
  {
    id: 6,
    image: images.gallery.bride3,
    alt: "MBM bridal makeup look three",
    category: "bridal",
    objectPosition: "object-[center_32%]",
  },
  {
    id: 7,
    image: images.gallery.whatsapp1,
    alt: "MBM Salon bridal transformation",
    category: "bridal",
  },
  {
    id: 8,
    image: images.gallery.eng,
    alt: "Engagement makeup look by MBM Beauty Studio",
    category: "engagement",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 9,
    image: images.gallery.eng2,
    alt: "Engagement makeup and styling by MBM",
    category: "engagement",
    objectPosition: "object-[center_28%]",
  },
  {
    id: 10,
    image: images.gallery.eng3,
    alt: "Engagement beauty look by Makeovers by Muskan",
    category: "engagement",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 13,
    image: images.gallery.b1,
    alt: "MBM bridal makeup look four",
    category: "bridal",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 14,
    image: images.gallery.b2,
    alt: "MBM bridal makeup look five",
    category: "bridal",
    objectPosition: "object-[center_28%]",
  },
  {
    id: 15,
    image: images.gallery.b3,
    alt: "MBM bridal makeup look six",
    category: "bridal",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 11,
    image: images.services.bridalArtistry,
    alt: "Professional bridal makeup artistry",
    category: "editorial",
  },
  {
    id: 12,
    image: images.services.hdAirbrush,
    alt: "HD and airbrush makeup application",
    category: "editorial",
    objectPosition: "object-[center_22%]",
  },


];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeFilter.toLowerCase()
        );

  return (
    <section className="bg-surface-cool py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-label font-medium tracking-[0.2em] text-secondary">
            Curated Excellence
          </p>

          <h1 className="mt-4 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
            The Gallery of Perfection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-body leading-relaxed text-primary-400">
            Explore our editorial-grade mastery through a curated lens. Each image
            represents a commitment to precision, beauty, and the individual
            essence of our clientele.
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-label font-medium tracking-[0.12em] transition-colors ${
                    activeFilter === filter
                      ? "border-b border-secondary pb-1 text-primary"
                      : "text-primary-300 hover:text-primary-400"
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-primary-100"
            >
              <SafeImage
                src={item.image}
                alt={item.alt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                  "objectPosition" in item && item.objectPosition ? item.objectPosition : ""
                }`}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
