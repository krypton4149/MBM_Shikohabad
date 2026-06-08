import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BRAND_FULL } from "@/lib/brand";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  WHATSAPP_URL,
} from "@/lib/contact";

const footerLinks = {
  services: [
    { label: "Bridal Makeup", href: "/services" },
    { label: "HD & Airbrush", href: "/services" },
    { label: "Hair Styling", href: "/services" },
    { label: "Party Makeovers", href: "/services" },
  ],
  academy: [
    { label: "Basic to Pro Course", href: "/academy#courses" },
    { label: "Bridal Masterclass", href: "/academy#courses" },
    { label: "Advanced Hair Styling", href: "/academy#courses" },
    { label: "Enroll Today", href: WHATSAPP_URL, whatsapp: true },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "WhatsApp", href: WHATSAPP_URL },
];

export function Footer() {
  return (
    <footer className="bg-primary text-neutral">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-4 text-small text-neutral-300">
              Premier beauty destination in Shikohabad — bridal makeup, HD
              artistry, hair styling, and certified academy training.
            </p>
            <Link
              href={`tel:${PHONE_NUMBER}`}
              className="mt-4 block text-small text-neutral-300 transition-colors hover:text-secondary"
            >
              {PHONE_DISPLAY}
            </Link>
            <p className="mt-1 text-small text-neutral-400">
              Shikohabad, Uttar Pradesh
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label text-neutral-400 transition-colors hover:text-secondary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-label font-semibold text-secondary">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-small text-neutral-300 transition-colors hover:text-neutral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label font-semibold text-secondary">Academy</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  {"whatsapp" in link && link.whatsapp ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-neutral-300 transition-colors hover:text-neutral"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-small text-neutral-300 transition-colors hover:text-neutral"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label font-semibold text-secondary">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-small text-neutral-300 transition-colors hover:text-neutral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-400 pt-8 md:flex-row">
          <p className="text-small text-neutral-400">
            &copy; {new Date().getFullYear()} {BRAND_FULL}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-small text-neutral-400 hover:text-neutral">
              Privacy Policy
            </Link>
            <Link href="#" className="text-small text-neutral-400 hover:text-neutral">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
