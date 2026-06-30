import type { Brand, BrandConfig } from "./types";

export const ENNOBLER: BrandConfig = {
  id: "ennobler",
  name: "En'nobler",
  base: "/ennobler",
  tagline: "Built to ship. Engineered to scale.",
  nav: [
    { label: "Home", to: "/ennobler" },
    {
      label: "Services",
      to: "/ennobler/services",
      children: [
        { label: "AI & Automation", to: "/ennobler/services/ai-automation" },
        { label: "Quality Assurance", to: "/ennobler/services/quality-assurance" },
        { label: "Software Development", to: "/ennobler/services/software-development" },
        { label: "Digital Transformation", to: "/ennobler/services/digital-transformation" },
        { label: "Cloud & DevOps", to: "/ennobler/services/cloud-devops" },
        { label: "UI/UX Design", to: "/ennobler/services/ui-ux-design" },
        { label: "Mobile Apps", to: "/ennobler/services/mobile-app-development" },
        { label: "API Development", to: "/ennobler/services/api-development" },
        { label: "E-Commerce", to: "/ennobler/services/ecommerce-solutions" },
        { label: "Web & Platform Dev", to: "/ennobler/services/web-platform-development" },
      ],
    },
    {
      label: "Product",
      to: "/ennobler/products",
      children: [
        { label: "E-commerce Product", to: "/ennobler/products/ecommerce-product" },
        { label: "Tourism Product", to: "/ennobler/products/tourism-product" },
      ],
    },
    { label: "En'nobler.QaaS", to: "/ennobler/qaas" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Pricing", to: "/ennobler/pricing" },
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  email: "hello@en-nobler.com",
  copyright: "© 2026 En'nobler (Private) Limited. All rights reserved.",
};

export const OOLO: BrandConfig = {
  id: "oolo",
  name: "Oolo",
  base: "/oolo",
  tagline: "Creative-first. Strategy-led. Growth-obsessed.",
  nav: [
    { label: "Home", to: "/oolo" },
    {
      label: "Services",
      to: "/oolo/services",
      children: [
        { label: "Brand Strategy & Identity", to: "/oolo/services/brand-strategy" },
        { label: "Social Media Marketing", to: "/oolo/services/social-media" },
        { label: "Content Creation", to: "/oolo/services/content" },
        { label: "Creative Design", to: "/oolo/services/creative" },
        { label: "Campaign Planning", to: "/oolo/services/campaign" },
        { label: "Digital Growth Support", to: "/oolo/services/digital-growth" },
      ],
    },
    { label: "Business Registration", to: "/oolo/business-registration" },
    { label: "Chikku and the Story", to: "/oolo/chikku" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Pricing", to: "/oolo/pricing" },
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
  ],
  email: "hello@en-nobler.com",
  copyright: "© 2026 En'nobler (Private) Limited. Oolo is a brand of En'nobler (Private) Limited.",
};

export const BRANDS: Record<Brand, BrandConfig> = {
  ennobler: ENNOBLER,
  oolo: OOLO,
};

/** Infer brand from a pathname. Shared routes return null (keep current). */
export function brandFromPath(pathname: string): Brand | null {
  if (pathname === "/ennobler" || pathname.startsWith("/ennobler/")) return "ennobler";
  if (pathname === "/oolo" || pathname.startsWith("/oolo/")) return "oolo";
  return null;
}
