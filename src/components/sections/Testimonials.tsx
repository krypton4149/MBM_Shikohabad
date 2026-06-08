"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_PLAY_INTERVAL = 5000;

const testimonials = [
  {
    quote:
      "Choosing MBM for my wedding was the best decision. The HD makeup was so light and flawless that it lasted throughout the ceremony without any touch-ups. I felt like a queen!",
    name: "Priya Sharma",
    role: "Happy Bride",
  },
  {
    quote:
      "The academy training transformed my career completely. The hands-on bridal masterclass gave me the confidence to start my own studio within months of graduating.",
    name: "Ananya Verma",
    role: "Academy Graduate",
  },
  {
    quote:
      "From engagement to reception, every look was perfectly tailored. The team understood my vision and delivered beyond expectations every single time.",
    name: "Kavya Singh",
    role: "Reception Client",
  },
  {
    quote:
      "My haldi ceremony look was absolutely stunning. The floral jewelry styling and soft glam makeup received so many compliments from every guest at the event.",
    name: "Riya Patel",
    role: "Haldi Bride",
  },
  {
    quote:
      "I enrolled in the Basic to Pro course with zero experience. Today I work with premium bridal clients — all thanks to MBM's patient and expert trainers.",
    name: "Sneha Gupta",
    role: "Professional MUA",
  },
  {
    quote:
      "The airbrush makeup for my reception was unbelievably smooth. It photographed beautifully and stayed fresh through the entire evening celebration.",
    name: "Meera Joshi",
    role: "Reception Bride",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-secondary"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.25 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    pauseAutoPlay();
    goToPrev();
  }, [goToPrev, pauseAutoPlay]);

  const handleNext = useCallback(() => {
    pauseAutoPlay();
    goToNext();
  }, [goToNext, pauseAutoPlay]);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, goToNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    };
  }, [handlePrev, handleNext]);

  const slideWidth = 100 / testimonials.length;

  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <span
          className="font-headline text-6xl leading-none text-secondary md:text-7xl"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div
          className="mt-6 w-full overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${activeIndex * slideWidth}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="shrink-0 px-2"
                style={{ width: `${slideWidth}%` }}
              >
                <blockquote>
                  <p className="font-headline text-lg italic leading-relaxed text-primary md:text-xl lg:text-2xl">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div className="mt-8">
                  <Stars />
                </div>

                <p className="mt-8 text-label font-semibold tracking-[0.15em] text-primary">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-label font-medium tracking-[0.15em] text-primary-300">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-sm border border-secondary/30 p-2 text-secondary transition-all hover:bg-secondary/10 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="Previous review"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  pauseAutoPlay();
                  goTo(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-secondary"
                    : "w-2 bg-secondary/30 hover:bg-secondary/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="rounded-sm p-2 text-secondary transition-all hover:bg-secondary/10 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="Next review"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
      </div>
    </section>
  );
}
