# MBM Salon & Academy

A luxury salon and academy website built with Next.js, featuring the **Athereal Luxury** design system.

## Design System

### Typography
- **Headings:** Playfair Display (serif)
- **Body & UI:** Poppins (sans-serif)

| Element | Size |
|---------|------|
| Display/Hero | 64px – 72px |
| Section Headlines | 40px – 48px |
| Sub-headlines | 24px – 32px |
| Body Copy | 16px |
| Small/Secondary | 14px |
| Navigation/Labels | 12px – 14px |

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Matte Black | `#0F0F0F` | Backgrounds, primary text, footer |
| Rose Gold | `#D4A373` | Accents, buttons, highlights |
| Soft Beige | `#F8F3EE` | Section backgrounds |
| Pure White | `#FFFFFF` | Clean backgrounds, overlays |

### UI
- **Border Radius:** 4px (sharp, professional)
- **Glassmorphism:** 80% opacity with backdrop blur on navigation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global theme & Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   └── ui/              # Reusable UI components (Button)
└── lib/
    └── theme.ts         # Theme constants
```

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
