export const theme = {
  colors: {
    primary: "#0F0F0F",
    secondary: "#D4A373",
    tertiary: "#F8F3EE",
    surfaceCool: "#F9F9F9",
    surfaceWarm: "#FAF7F2",
    neutral: "#FFFFFF",
  },
  fonts: {
    headline: "var(--font-playfair), 'Playfair Display', Georgia, serif",
    body: "var(--font-poppins), 'Poppins', system-ui, sans-serif",
  },
  fontSize: {
    display: "4.5rem", // 72px
    hero: "4rem", // 64px
    section: "2.75rem", // 44px
    subhead: "1.75rem", // 28px
    body: "1rem", // 16px
    small: "0.875rem", // 14px
    label: "0.75rem", // 12px
  },
  borderRadius: {
    sm: "4px",
    md: "4px",
    lg: "4px",
  },
} as const;

export type Theme = typeof theme;
