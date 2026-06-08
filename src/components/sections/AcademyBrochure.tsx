"use client";

import { FormEvent, useState } from "react";
import {
  ACADEMY_EMAIL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  buildBrochureRequestMessage,
  buildWhatsAppUrl,
} from "@/lib/contact";

const courses = [
  "Basic to Pro Course",
  "Bridal Masterclass",
  "Advanced Hair Styling",
  "Professional Certification",
];

export function AcademyBrochure() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const sendToWhatsApp = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      setError("Please enter your full name.");
      return;
    }

    if (!trimmedPhone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!course) {
      setError("Please select a course.");
      return;
    }

    setError("");

    const message = buildBrochureRequestMessage(trimmedName, trimmedPhone, course);
    const url = buildWhatsAppUrl(message);
    window.location.href = url;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendToWhatsApp();
  };

  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid overflow-hidden shadow-lg lg:grid-cols-2">
          <div className="bg-primary px-8 py-12 md:px-12 md:py-16">
            <h2 className="font-headline text-3xl font-semibold text-neutral sm:text-4xl">
              Request Course Brochure
            </h2>

            <p className="mt-6 max-w-md text-body leading-relaxed text-primary-200">
              Receive a detailed PDF outlining our curriculum, fee structure, and
              upcoming batch dates.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href={`mailto:${ACADEMY_EMAIL}`}
                className="flex items-center gap-3 text-body text-neutral transition-colors hover:text-secondary"
              >
                <span className="text-secondary">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                {ACADEMY_EMAIL}
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-body text-neutral transition-colors hover:text-secondary"
              >
                <span className="text-secondary">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between bg-neutral px-8 py-12 md:px-12 md:py-16"
          >
            <div className="space-y-8">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border-0 border-b border-primary-200 bg-transparent py-3 text-body text-primary placeholder:text-primary-300 autofill:bg-neutral autofill:shadow-[inset_0_0_0px_1000px_#ffffff] focus:border-primary focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full border-0 border-b border-primary-200 bg-transparent py-3 text-body text-primary placeholder:text-primary-300 autofill:bg-neutral autofill:shadow-[inset_0_0_0px_1000px_#ffffff] focus:border-primary focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="sr-only">Course interest</span>
                <select
                  name="course"
                  required
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  className="w-full appearance-none border-0 border-b border-primary-200 bg-transparent bg-[length:12px] bg-[right_0_center] bg-no-repeat py-3 text-body text-primary focus:border-primary focus:outline-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%234d4d4d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  }}
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  {courses.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              {error && (
                <p className="text-small text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-12 w-full rounded-sm bg-primary px-8 py-4 text-label font-semibold tracking-[0.14em] text-neutral transition-colors hover:bg-primary-700"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
