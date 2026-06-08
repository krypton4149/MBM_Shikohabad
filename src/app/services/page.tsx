import { ServicesHero } from "@/components/sections/ServicesHero";
import { OurSpecialties } from "@/components/sections/OurSpecialties";
import { CuratedPackages } from "@/components/sections/CuratedPackages";
import { ServiceWhyChoose } from "@/components/sections/ServiceWhyChoose";
import { ServiceCta } from "@/components/sections/ServiceCta";

export const metadata = {
  title: "Services | Makeovers by Muskan Beauty Studio",
  description:
    "Explore exquisite beauty services — bridal makeup, HD & airbrush, hair styling, and luxury salon treatments at Makeovers by Muskan Beauty Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <OurSpecialties />
      <CuratedPackages />
      <ServiceWhyChoose />
      <ServiceCta />
    </>
  );
}
