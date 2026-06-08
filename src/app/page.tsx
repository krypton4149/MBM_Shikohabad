import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Academy } from "@/components/sections/Academy";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Academy />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <CtaBanner />
    </>
  );
}
