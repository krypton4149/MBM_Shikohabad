import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { SocialJournal } from "@/components/sections/SocialJournal";
import { PortfolioCta } from "@/components/sections/PortfolioCta";

export const metadata = {
  title: "Portfolio | Makeovers by Muskan Beauty Studio",
  description:
    "Explore the gallery of perfection — curated bridal, engagement, reception, haldi, and editorial beauty work by Makeovers by Muskan Beauty Studio.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioGallery />
      <SocialJournal />
      <PortfolioCta />
    </>
  );
}
