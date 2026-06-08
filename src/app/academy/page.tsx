import { AcademyHero } from "@/components/sections/AcademyHero";
import { AcademyPrograms } from "@/components/sections/AcademyPrograms";
import { AcademySuccessStories } from "@/components/sections/AcademySuccessStories";
import { AcademyStudios } from "@/components/sections/AcademyStudios";
import { AcademyBrochure } from "@/components/sections/AcademyBrochure";

export const metadata = {
  title: "Academy | Makeovers by Muskan Beauty Studio",
  description:
    "Become a professional makeup artist with Makeovers by Muskan Academy. Industry-leading certification programs in bridal makeup, HD artistry, and advanced hair styling.",
};

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <AcademyPrograms />
      <AcademySuccessStories />
      <AcademyStudios />
      <AcademyBrochure />
    </>
  );
}
