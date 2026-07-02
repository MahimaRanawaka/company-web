/** Data-driven page model. A page = ordered list of typed Sections that the
 *  SectionRenderer maps to brand-token-styled components. */

export interface HeroSection {
  type: "hero";
  eyebrow?: string;
  title: string;
  /** wrap part of the title in <em> via {em} markers, e.g. "Growth that {Compounds}" */
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  chips?: string[];
  /** right-column fact tiles (replaces the chip visual when present) */
  facts?: { label: string; value: string }[];
  /** right-column hero key-art (highest-priority visual; e.g. brand mascot art) */
  image?: { src: string; alt: string };
}

export interface StatsSection {
  type: "stats";
  items: { value: string; label: string }[];
}

export interface ServiceCardsSection {
  type: "services";
  anchor?: string;
  eyebrow?: string;
  title?: string;
  /** when omitted, the page pulls live services for the brand */
  items?: { title: string; summary: string; to?: string; icon?: string }[];
  source?: "live";
  /** bento layout: first card renders as a large featured tile */
  bento?: boolean;
}

export interface FeatureGridSection {
  type: "features";
  anchor?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: { title: string; body: string; icon?: string }[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  dark?: boolean;
  /** bento layout: first item spans two columns as a featured tile */
  bento?: boolean;
}

export interface StepsSection {
  type: "steps";
  anchor?: string;
  eyebrow?: string;
  title?: string;
  items: { title: string; body: string }[];
}

export interface CtaSection {
  type: "cta";
  anchor?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  cta: { label: string; to: string };
}

export interface MarqueeSection {
  type: "marquee";
  items: string[];
}

/** §4 — logo / trust strip */
export interface PartnersSection {
  type: "partners";
  eyebrow?: string;
  logos: (string | { src: string; alt: string })[];
}

/** §5 — paired problem → solution cards */
export interface ProblemSolutionSection {
  type: "problemSolution";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: {
    problem: { title: string; body: string; note?: string };
    solution: { title: string; body: string; note?: string };
  }[];
}

/** §7 — engagement / plan cards (inline on the landing page) */
export interface EngagementSection {
  type: "engagement";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  plans: {
    badge: string;
    name: string;
    tagline: string;
    features: string[];
    cta: { label: string; to: string };
    highlighted?: boolean;
    popular?: string;
  }[];
}

/** §8 — QaaS promo band */
export interface QaPromoSection {
  type: "qaPromo";
  eyebrow?: string;
  title: string;
  body: string;
  pills: string[];
  cta: { label: string; to: string };
}

/** §9 — product preview cards */
export interface ProductPreviewSection {
  type: "productPreview";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; body: string; cta: { label: string; to: string } }[];
}

/** §11 — portfolio / case-study carousel with filters */
export interface CaseStudiesSection {
  type: "caseStudies";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  filters: string[];
  limit?: number;
  viewAllTo?: string;
  items: { tag: string; title: string; body: string; metric: string; to: string; cover?: string }[];
}

/** §12 — cross-brand bridge */
export interface BridgeSection {
  type: "bridge";
  title: string;
  halves: { tag: string; title: string; body: string; cta: { label: string; to: string } }[];
}

/** Long-form editorial section (alternating light/dark), with optional list + signoff. */
export interface ProseSection {
  type: "prose";
  anchor?: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: { strong?: string; text: string }[];
  dark?: boolean;
  signoff?: { title: string; note: string };
}

/** Two (or more) pathway cards with a label + role list. */
export interface PathwaysSection {
  type: "pathways";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: { label: string; title: string; body: string; items: string[]; dark?: boolean }[];
}

/** Side-by-side panels (e.g. En'nobler vs Oolo career areas), each a list of items with tags. */
export interface PanelsSection {
  type: "panels";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  panels: { eyebrow: string; title: string; items: { title: string; body: string; tags: string[] }[] }[];
}

/** Numbered editorial rows (candidate qualities, principles…). */
export interface ChecklistSection {
  type: "checklist";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; body: string }[];
}

/** Filterable open-roles grid with apply links. */
export interface OpenRolesSection {
  type: "openRoles";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  filters: string[];
  /** `areas` lists every filter a role belongs to (besides the "All" filter). */
  roles: { title: string; areas: string[]; meta: string[]; body: string; applyTo: string }[];
}

/** Embedded lead / application form (posts via the contact mutation). */
export interface ContactFormSection {
  type: "contactForm";
  anchor?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  variant?: "contact" | "apply";
  secondaryCta?: { label: string; to: string };
}

/** Tabbed engagement-model switcher (each tab = description + a grid of cards). */
export interface EngagementTabsSection {
  type: "engagementTabs";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tabs: {
    key: string;
    label: string;
    accent?: "blue" | "teal" | "amber" | "coral";
    desc: { icon: string; title: string; body: string; pills: string[] };
    services?: { icon: string; name: string; body: string; tag: string }[];
    perf?: { title: string; icon: string; body: string; kpis: string[] }[];
  }[];
}

/** Dark AI/technology layer: tagged workflow steps + capability cards. */
export interface WorkflowSection {
  type: "workflow";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: { num: string; title: string; body: string; tag: string }[];
  capabilities?: { icon: string; title: string; body: string }[];
}

/** "Why us" grid: a featured accent card + numbered/stat cards. */
export interface WhyGridSection {
  type: "whyGrid";
  anchor?: string;
  eyebrow?: string;
  title: string;
  featured: { title: string; body: string; cta?: { label: string; to: string } };
  cards: { num: string; title: string; body: string }[];
}

/** Icon grid (e.g. industries served). */
export interface IconGridSection {
  type: "iconGrid";
  anchor?: string;
  eyebrow?: string;
  title: string;
  items: { icon: string; name: string }[];
}

/** Numbered funnel steps with chips. */
export interface FunnelSection {
  type: "funnel";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: { title: string; body: string; chips: string[] }[];
}

/** Rated testimonial cards. */
export interface TestimonialsSection {
  type: "testimonials";
  anchor?: string;
  eyebrow?: string;
  title: string;
  items: { quote: string; author: string; role: string; rating?: number }[];
}

/** FAQ accordion. */
export interface FaqSection {
  type: "faq";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { q: string; a: string }[];
}

/** Tag/keyword list (e.g. tech stack). */
export interface TagsSection {
  type: "tags";
  anchor?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: string[];
}

/** Dark final CTA band with optional mini-stats. */
export interface CtaFinalSection {
  type: "ctaFinal";
  anchor?: string;
  title: string;
  body?: string;
  ctas: { label: string; to: string; variant?: "white" | "outline" }[];
  stats?: { value: string; label: string }[];
}

export type Section =
  | HeroSection
  | StatsSection
  | ServiceCardsSection
  | FeatureGridSection
  | StepsSection
  | CtaSection
  | MarqueeSection
  | PartnersSection
  | ProblemSolutionSection
  | EngagementSection
  | QaPromoSection
  | ProductPreviewSection
  | CaseStudiesSection
  | BridgeSection
  | ProseSection
  | PathwaysSection
  | PanelsSection
  | ChecklistSection
  | OpenRolesSection
  | ContactFormSection
  | EngagementTabsSection
  | WorkflowSection
  | WhyGridSection
  | IconGridSection
  | FunnelSection
  | TestimonialsSection
  | TagsSection
  | FaqSection
  | CtaFinalSection;

export interface PageContent {
  title: string;
  sections: Section[];
}
