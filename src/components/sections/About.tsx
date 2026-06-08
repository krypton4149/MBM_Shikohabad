import Image from "next/image";
import { images } from "@/lib/images";

const stats = [
  { title: "500+", subtitle: "Happy Brides" },
  { title: "Certified", subtitle: "Makeup Academy" },
  { title: "Elite", subtitle: "Beauty Experts" },
  { title: "Modern", subtitle: "Beauty Studio" },
];

export function About() {
  return (
    <section id="about" className="bg-neutral py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-primary-200" />
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={images.about.main}
                alt="Professional makeup artistry at Makeovers by Muskan"
                fill
                className="object-cover object-[center_32%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="font-headline text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-section">
              About Makeovers by Muskan
            </h2>

            <p className="mt-6 text-body leading-relaxed text-primary-400">
              Makeovers by Muskan Beauty Studio is a premier beauty destination in Shikohabad
              specializing in Bridal Makeup, HD Makeup, Airbrush Makeup, Hair Styling,
              Party Makeovers, and Professional Makeup Education. We believe that
              perfection is not just a standard, but a promise to every individual who
              walks through our doors.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat) => (
                <div key={stat.subtitle}>
                  <p className="font-headline text-2xl font-medium text-secondary md:text-3xl">
                    {stat.title}
                  </p>
                  <p className="mt-1 text-label font-medium tracking-[0.15em] text-primary-400">
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
