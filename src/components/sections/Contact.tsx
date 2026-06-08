import Link from "next/link";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { PHONE_NUMBER } from "@/lib/contact";

const STUDIO_ADDRESS =
  "Krishna Nagar, Manipuri chauraha, near bajaj agency, Shikohabad, Uttar Pradesh - 283135";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?sca_esv=ec2d4dc29b45d0e3&sxsrf=ANbL-n4AhOj2k5jrSi6-0vIL9du6YbqlEw:1780743258327&biw=1660&bih=831&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd2XVCl2S3Q5MQ35V1kjIKvA&daddr=Krishna+Nagar,+Manipuri+chauraha,+near+bajaj+agency,+Shikohabad,+Uttar+Pradesh+283135";

const GOOGLE_MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Krishna Nagar, Manipuri chauraha, near bajaj agency, Shikohabad, Uttar Pradesh 283135"
)}&hl=en&z=15&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="bg-surface-cool py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary sm:text-4xl md:text-section">
              Contact Us
            </h2>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <span className="mt-1 text-secondary">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-body text-body font-semibold text-primary">Our Studio</h3>
                  <Link
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block max-w-md text-body leading-relaxed text-primary-400 transition-colors hover:text-secondary"
                  >
                    {STUDIO_ADDRESS}
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 text-secondary">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M12 7v5l3 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-body text-body font-semibold text-primary">Opening Hours</h3>
                  <p className="mt-2 text-body text-primary-400">
                    Mon - Sun: 10:00 AM - 08:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral transition-colors hover:bg-primary-700"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005.5 5.5L17 13l4 1.5v3a2 2 0 01-2.2 2 16 16 0 01-14.8-14.8A2 2 0 016.5 4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Call Now
              </Link>

              <WhatsAppLink className="inline-flex items-center gap-3 rounded-sm border border-primary bg-neutral px-6 py-3.5 text-label font-semibold tracking-[0.1em] text-primary transition-colors hover:bg-tertiary">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M7 18l-1 3 3-1 10-10a3 3 0 00-4.2-4.2L5 17z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 7a6 6 0 017 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden bg-primary-100">
            <iframe
              title="MBM Salon & Academy location map"
              src={GOOGLE_MAPS_EMBED}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <Link
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 rounded-sm bg-neutral px-4 py-2 text-small font-medium text-primary shadow-md transition-colors hover:bg-tertiary"
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
