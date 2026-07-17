"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { useState } from "react";
import { images } from "@/lib/images";

const filters = ["All", "Bridal", "Reception", "Haldi"] as const;
type Filter = (typeof filters)[number];

const galleryItems = [
  {
    id: 1,
    image: images.gallery.be2,
    alt: "MBM bridal makeup look with traditional jewelry",
    category: "bridal" as const,
    objectPosition: "object-[center_28%]",
  },
  {
    id: 2,
    image: images.gallery.img2,
    alt: "Reception bridal makeup and styling",
    category: "reception" as const,
    objectPosition: "object-[center_22%]",
  },
  {
    id: 3,
    image: images.gallery.b2,
    alt: "Haldi ceremony bridal look",
    category: "haldi" as const,
    objectPosition: "object-[center_28%]",
  },
];

const bridalItems = [
  {
    id: 4,
    image: images.gallery.bride1,
    alt: "MBM bridal makeup look one",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 5,
    image: images.gallery.b2,
    alt: "MBM bridal makeup look two",
    objectPosition: "object-[center_28%]",
  },
  {
    id: 6,
    image: images.gallery.b3,
    alt: "MBM bridal makeup look three",
    objectPosition: "object-[center_32%]",
  },
  {
    id: 7,
    image: images.gallery.be1,
    alt: "MBM bridal makeup look four",
    objectPosition: "object-[center_30%]",
  },
  {
    id: 8,
    image: images.gallery.be2,
    alt: "MBM bridal makeup look five",
    objectPosition: "object-[center_28%]",
  },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredItems =
    activeFilter === "Bridal"
      ? bridalItems
      : activeFilter === "All"
        ? galleryItems
        : galleryItems.filter(
            (item) => item.category === activeFilter.toLowerCase()
          );

  return (
    <section id="gallery" className="bg-surface-cool py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-label font-medium tracking-[0.2em] text-secondary">
              Gallery of Perfection
            </p>
            <h2 className="mt-3 font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
              Our Masterpieces
            </h2>
          </div>

          <ul className="flex flex-wrap gap-6 md:gap-8">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-label font-medium tracking-[0.15em] transition-colors ${
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

        <div
          className={`mt-12 gap-4 md:gap-6 ${
            filteredItems.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative aspect-[4/5] overflow-hidden ${
                filteredItems.length === 1 ? "w-full max-w-sm" : "w-full"
              }`}
            >
              <SafeImage
                src={item.image}
                alt={item.alt}
                fill
                className={`object-cover ${item.objectPosition}`}
                sizes={
                  filteredItems.length === 1
                    ? "(max-width: 768px) 90vw, 448px"
                    : "(max-width: 768px) 100vw, 33vw"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
