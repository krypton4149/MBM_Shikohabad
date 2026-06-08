import { SafeImage } from "@/components/ui/SafeImage";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { images } from "@/lib/images";

const courses = [
  {
    number: "01",
    title: "Basic to Pro Course",
    description: "Perfect for beginners entering the beauty world.",
  },
  {
    number: "02",
    title: "Bridal Masterclass",
    description: "Focus on high-ticket luxury bridal transformations.",
  },
  {
    number: "03",
    title: "Advanced Hair Styling",
    description: "Master the art of architectural and editorial hair.",
  },
];

type AcademyProps = {
  sectionId?: string;
};

export function Academy({ sectionId = "academy" }: AcademyProps) {
  return (
    <section id={sectionId} className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary-800/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-label font-medium tracking-[0.2em] text-secondary">
              Makeovers by Muskan Academy
            </p>

            <h2 className="mt-4 font-headline text-3xl font-semibold leading-tight text-neutral sm:text-4xl md:text-section">
              Become a Professional Makeup Artist
            </h2>

            <p className="mt-6 max-w-lg text-body leading-relaxed text-primary-200">
              Unlock your artistic potential with our industry-leading certification
              programs. Learn the secrets of luxury bridal transformations and
              advanced techniques from master educators.
            </p>

            <ul className="mt-10 space-y-8">
              {courses.map((course) => (
                <li key={course.number} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary text-label font-medium text-secondary">
                    {course.number}
                  </span>
                  <div>
                    <h3 className="font-body text-body font-semibold text-neutral">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-small text-primary-200">
                      {course.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <WhatsAppLink className="mt-10 inline-flex items-center justify-center rounded-sm bg-secondary px-8 py-3.5 text-label font-semibold tracking-[0.1em] text-neutral shadow-lg transition-colors hover:bg-secondary-500">
              Enroll Today
            </WhatsAppLink>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SafeImage
                src={images.academy.makeup}
                alt="Muskan teaching professional makeup at the academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 left-6 bg-neutral px-6 py-5 shadow-xl md:-bottom-8 md:left-8 md:px-8 md:py-6">
              <p className="font-headline text-3xl font-semibold text-primary md:text-4xl">
                100%
              </p>
              <p className="mt-1 max-w-[140px] text-label font-medium leading-snug tracking-[0.12em] text-primary-400">
                Certified Placement Assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
