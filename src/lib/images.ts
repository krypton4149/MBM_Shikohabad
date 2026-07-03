/**
 * Central image paths for MBM Salon & Academy.
 * Add new images under public/images/ and reference them here.
 *
 * Folder structure:
 *   public/images/hero/      — hero & banner backgrounds
 *   public/images/gallery/   — portfolio & showcase photos
 *   public/images/services/  — service-related images
 *   public/images/about/     — about section images
 *   public/images/team/      — team & stylist photos
 *   public/images/logo/      — logos & brand assets
 *   public/images/academy/   — academy & course images
 */

export const images = {
  hero: {
    bridal: "/images/hero/Hero_bridal.JPG",
  },
  gallery: {
    img1: "/images/gallery/IMG1.JPG",
    img2: "/images/gallery/IMG2.jpeg",
    img3: "/images/gallery/IMG3.JPG",
    img3Portfolio: "/images/gallery/IMG3-portfolio.JPG",
    haldi: "/images/gallery/Haldi.png",
    bride1: "/images/gallery/bride1.png",
    bride2: "/images/gallery/bride2.png",
    bride3: "/images/gallery/bride3.png",
    b1: "/images/gallery/b1.JPG",
    b2: "/images/gallery/b2.JPG",
    b3: "/images/gallery/b3.JPG",
    whatsapp1: "/images/gallery/whatsapp-bridal.jpeg",
    look1: "/images/gallery/gallery-1.jpg",
    look2: "/images/gallery/gallery-2.jpg",
    look3: "/images/gallery/gallery-3.jpg",
    portfolio1: "/images/gallery/portfolio-1.jpg",
    portfolio2: "/images/gallery/portfolio-2.jpg",
    portfolio3: "/images/gallery/portfolio-3.jpg",
    portfolio4: "/images/gallery/portfolio-4.jpg",
    portfolio5: "/images/gallery/portfolio-5.jpg",
    portfolio6: "/images/gallery/portfolio-6.jpg",
    social1: "/images/gallery/social-1.jpg",
    social2: "/images/gallery/social-2.jpg",
    social3: "/images/gallery/social-3.jpg",
    social4: "/images/gallery/social-4.jpg",
    reel1: "/images/gallery/Reel1.png",
    reel2: "/images/gallery/Reel2.png",
    reel3: "/images/gallery/Reel3.png",
    reel4: "/images/gallery/Reel4.png",
    eng: "/images/gallery/Eng.jpeg",
    eng2: "/images/gallery/Eng2.jpeg",
    eng3: "/images/gallery/Eng3.jpeg",
  },
  services: {
    bridalMakeup: "/images/services/bridal-makeup.jpg",
    hdAirbrush: "/images/services/HdAir.png",
    hairStyling: "/images/services/hair-styling.jpg",
    hero: "/images/services/service.png",
    heroLegacy: "/images/services/services-hero.jpg",
    bridalArtistry: "/images/services/Arist.png",
    hairCouture: "/images/services/hair-couture.jpg",
    hair: "/images/services/Hair.png",
    skinNailCare: "/images/services/skin-nail-care.jpg",
    nail: "/images/services/Nail.JPG",
    whyChoose: "/images/services/Client.png",
  },
  about: {
    main: "/images/about/About.png",
    makeup: "/images/about/about-makeup.jpg",
  },
  team: {
    // Example: founder: "/images/team/founder.jpg",
  },
  logo: {
    main: "/images/logo/logo.png",
  },
  academy: {
    hero: "/images/about/about-makeup.jpg",
    makeup: "/images/academy/Makeup.png",
    studio: "/images/academy/Studio.png",
    studioLighting: "/images/academy/Studio.png",
    model: "/images/academy/Model.png",
    liveSessions: "/images/academy/Model.png",
    product: "/images/academy/Product.png",
    productBar: "/images/academy/Product.png",
  },
} as const;

export type Images = typeof images;
