"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/academy", label: "Academy" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-tertiary">
      <nav className="w-full">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 md:px-10 md:py-6 lg:px-12">
          <BrandLogo variant="navbar" className="justify-self-start" />

          <ul className="hidden items-center gap-10 justify-self-center md:flex lg:gap-14">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label font-medium tracking-[0.12em] text-primary transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden justify-self-end md:block">
            <WhatsAppLink className="rounded-sm bg-primary px-6 py-3 text-label font-medium tracking-[0.1em] text-neutral transition-colors hover:bg-primary-700">
              Book Appointment
            </WhatsAppLink>
          </div>

          <button
            type="button"
            className="col-start-3 justify-self-end md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-primary transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-primary transition-opacity ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-primary transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="w-full border-t border-tertiary-300 px-6 py-6 md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label font-medium tracking-[0.12em] text-primary transition-colors hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <WhatsAppLink
                className="inline-block rounded-sm bg-primary px-6 py-3 text-label font-medium tracking-[0.1em] text-neutral"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </WhatsAppLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
