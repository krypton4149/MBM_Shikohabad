"use client";

import { useCallback, useState } from "react";

const stories = [
  {
    quote:
      "The academy didn't just teach me makeup techniques; they taught me the business of beauty. I felt ready for the industry on day one.",
    name: "Sophia Chen",
    meta: "Class of 2023 • Freelance Artist",
  },
  {
    quote:
      "I enrolled in the Basic to Pro course with zero experience. Today I work with premium bridal clients — all thanks to MBM's patient and expert trainers.",
    name: "Sneha Gupta",
    meta: "Class of 2024 • Professional MUA",
  },
  {
    quote:
      "The bridal masterclass gave me the confidence to start my own studio within months of graduating. MBM truly transforms passion into a career.",
    name: "Ananya Verma",
    meta: "Class of 2023 • Salon Owner",
  },
];

function SealIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
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

export function AcademySuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  }, []);

  const story = stories[activeIndex];

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2.5 border border-secondary/30 bg-primary-800 px-4 py-2">
              <span className="text-secondary">
                <SealIcon />
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                100% Placement Assistance
              </span>
            </div>

            <h2 className="mt-8 font-headline text-3xl font-semibold leading-tight text-neutral sm:text-4xl md:text-section">
              The Success Stories of Our Graduates
            </h2>

            <p className="mt-6 max-w-md text-body leading-relaxed text-primary-200">
              Our graduates are working with top fashion brands, celebrity
              stylists, and high-end salons worldwide. Your career starts the
              moment you enter our doors.
            </p>
          </div>

          <article className="relative overflow-hidden border border-primary-400/40 bg-primary-800/60 p-8 md:p-10">
            <span
              className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-headline text-[8rem] font-semibold leading-none text-neutral/5 md:text-[10rem]"
              aria-hidden="true"
            >
              MBM
            </span>

            <span
              className="font-headline text-5xl leading-none text-secondary/40 md:text-6xl"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative mt-4">
              <p className="font-headline text-xl italic leading-relaxed text-neutral md:text-2xl lg:text-[1.65rem] lg:leading-snug">
                {story.quote}
              </p>
            </blockquote>

            <footer className="relative mt-10">
              <p className="text-label font-semibold uppercase tracking-[0.15em] text-secondary">
                {story.name}
              </p>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary-200">
                {story.meta}
              </p>
            </footer>

            <div className="relative mt-10 flex gap-3">
              <button
                type="button"
                onClick={goToPrev}
                className="flex h-10 w-10 items-center justify-center border border-primary-300 text-primary-200 transition-colors hover:border-secondary hover:text-secondary"
                aria-label="Previous story"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center border border-primary-300 text-primary-200 transition-colors hover:border-secondary hover:text-secondary"
                aria-label="Next story"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
