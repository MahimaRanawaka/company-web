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
  /** renders `image` bare — no MediaFrame border/background/padding */
  imageUnframed?: boolean;
  /** adds soft blurred contact-shadow ellipses under a figure's feet — one
   *  entry per figure, positioned in % of the rendered image box. */
  imageGroundShadow?: {
    left: number;
    bottom: number;
    width: number;
    height: number;
  }[];
  /** adds a soft layered drop-shadow around the whole (unframed) image */
  imageShadow?: boolean;
  /** CSS aspect-ratio for the image box, e.g. "4/3" (default) or the image's
   *  own pixel ratio (e.g. "1744/2019") to avoid cropping a tall figure */
  imageAspect?: string;
  /** caps the rendered width of an unframed image (e.g. "380px") so a tall
   *  figure doesn't stretch the hero section's height */
  imageMaxWidth?: string;
  /** raw Tailwind grid-template-columns utility for the text/image split,
   *  e.g. "lg:grid-cols-[0.85fr_1.15fr]" to give the image more room; default is an even 2-col split */
  gridColumns?: string;
  /** hand-coded "connected dashboard" diagram (see HeroArt.tsx) — takes
   *  priority over `image` when set */
  heroArt?: string;
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
  items?: {
    title: string;
    summary: string;
    to?: string;
    icon?: string;
    illustration?: string;
    /** "compact": trial style — tighter card spacing + a bigger, fainter, bolder-stroked watermark */
    cardVariant?: "compact";
  }[];
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
  /** reduces top and bottom padding — use when tight-spaced sections sandwich this one */
  compact?: boolean;
  /** "split": icon sits left of title+body instead of stacked above it.
   *  "inline": compact single-row tile — icon left of title only, no body. */
  layout?: "split" | "inline";
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
  title?: string;
  body?: string;
  cta?: { label: string; to: string };
  /** quick-select pills rendered below the body (replaces `cta` when set).
   *  `model`, if present, is broadcast so a paired generalEnquiry form can
   *  preselect its Engagement Model field. */
  pills?: { label: string; to: string; model?: string }[];
  /** reduces bottom padding — use when a tight-spaced section immediately follows */
  tightBottom?: boolean;
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
  /** reduces bottom padding — use when a tight-spaced band (e.g. pricingTable's
   *  standalone custom band) immediately follows this section */
  tightBottom?: boolean;
  /** max cards per row on wide screens; default 3 */
  columns?: 3 | 4;
  plans: {
    badge: string;
    name: string;
    /** optional bold price line rendered between name and tagline, e.g. "$1,200 / month" */
    price?: string;
    tagline: string;
    features: string[];
    /** `model`, when set, preselects the Engagement Model field on a paired
     *  generalEnquiry form elsewhere on the same page (see engagementModelSignal). */
    cta: { label: string; to: string; model?: string };
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
  /** right-column visual; falls back to a decorative grid panel when omitted */
  image?: { src: string; alt: string };
  /** CSS aspect-ratio for the image box, e.g. "4/3" (default) or "4/5" for a taller crop */
  imageAspect?: string;
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
  items: {
    tag: string;
    title: string;
    body: string;
    metric: string;
    to: string;
    cover?: string;
  }[];
}

/** §12 — cross-brand bridge */
export interface BridgeSection {
  type: "bridge";
  title: string;
  halves: {
    tag: string;
    title: string;
    body: string;
    cta: { label: string; to: string };
  }[];
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
  cards: {
    label: string;
    title: string;
    body: string;
    items: string[];
    dark?: boolean;
  }[];
}

/** Side-by-side panels (e.g. En'nobler vs Oolo career areas), each a list of items with tags. */
export interface PanelsSection {
  type: "panels";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  panels: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string; tags: string[] }[];
  }[];
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
  roles: {
    title: string;
    areas: string[];
    meta: string[];
    body: string;
    applyTo: string;
  }[];
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
  featured: {
    title: string;
    body: string;
    cta?: { label: string; to: string };
  };
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
  steps: {
    title: string;
    body: string;
    chips: string[];
    /** optional plain stacked list rendered between body and chips, e.g.
     *  "Label — detail" lines (bolds the part before the em dash) */
    list?: string[];
  }[];
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

/** Grid of clickable cards that link to page anchors or routes (e.g. a pricing decision guide). */
export interface LinkCardsSection {
  type: "linkCards";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  columns?: 2 | 3;
  items: { title: string; body: string; to: string }[];
  /** optional closing note + button rendered centered below the grid */
  footer?: { body: string; cta: { label: string; to: string } };
}

/** Data table (e.g. project-based service pricing) with an optional trailing
 *  "custom quote" band and a fine-print disclaimer. */
export interface PricingTableSection {
  type: "pricingTable";
  anchor?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** omit both to render only the custom band (e.g. a standalone "Custom Retainer" note).
   *  3 entries for [Service, Price, Included]; 4 to add a trailing "Best for" column. */
  columns?: [string, string, string] | [string, string, string, string];
  rows?: { name: string; price: string; body: string; bestFor?: string }[];
  custom?: {
    eyebrow?: string;
    title: string;
    price?: string;
    body: string;
    features?: string[];
    /** `model`, when set, preselects the Engagement Model field on a paired
     *  generalEnquiry form elsewhere on the same page (see engagementModelSignal). */
    ctas: { label: string; to: string; model?: string }[];
  };
  disclaimer?: string;
}

/** Structured lead-capture form (baseline, KPI, timeline, budget…) paired
 *  side-by-side with a "what we agree first" info card. Posts through the
 *  same contact pipeline as the simpler contactForm section. */
export interface PerformanceEnquirySection {
  type: "performanceEnquiry";
  anchor?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** first readonly context field; omit to show only engagementModel */
  serviceContext?: string;
  engagementModel: string;
  /** label for the plan/service-area select; default "Selected Performance Plan" */
  planFieldLabel?: string;
  planOptions: string[];
  /** default true — Phone Number field */
  showPhone?: boolean;
  /** default true — Company field */
  showCompany?: boolean;
  /** default true — shows a red "*" on Phone/Company/Baseline/Timeline/Requirement */
  requiredHints?: boolean;
  /** default "Current Performance Baseline" */
  baselineLabel?: string;
  baselinePlaceholder?: string;
  /** default "Expected KPI" */
  kpiLabel?: string;
  kpiPlaceholder?: string;
  /** default "Target Timeline" */
  timelineLabel?: string;
  timelinePlaceholder?: string;
  /** default true — Monthly Media Budget field */
  showBudget?: boolean;
  /** default true — a separate free-text requirement field beyond the KPI field */
  showRequirement?: boolean;
  /** default "Campaign or Marketing Requirement" */
  requirementLabel?: string;
  requirementPlaceholder?: string;
  /** default true — Additional Details field */
  showAdditionalDetails?: boolean;
  /** default "Request Performance Proposal" */
  submitLabel?: string;
  formEyebrow?: string;
  formTitle: string;
  infoEyebrow?: string;
  infoTitle: string;
  infoItems: { title: string; body: string }[];
  infoNote?: { label: string; body: string };
  disclaimer?: string;
}

/** General lead-capture form (budget, timeline, source…) paired side-by-side
 *  with a "what happens next" info card. Posts through the same contact
 *  pipeline as the simpler contactForm section. */
export interface GeneralEnquirySection {
  type: "generalEnquiry";
  anchor?: string;
  /** section-level intro header; omit when a preceding section already introduces this block */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  modelOptions: string[];
  budgetOptions: string[];
  startOptions: string[];
  /** default "Full Name" */
  nameLabel?: string;
  formEyebrow?: string;
  formTitle: string;
  formNote?: string;
  /** default "What do you want to achieve?" */
  requirementLabel?: string;
  requirementPlaceholder?: string;
  /** default "Send Enquiry" */
  submitLabel?: string;
  infoEyebrow?: string;
  infoTitle: string;
  infoItems: { title: string; body: string }[];
  infoNote?: { label: string; body: string };
  /** reduces top padding — use when a tight-spaced section immediately precedes this one */
  tightTop?: boolean;
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
  | CtaFinalSection
  | LinkCardsSection
  | PricingTableSection
  | PerformanceEnquirySection
  | GeneralEnquirySection;

export interface PageContent {
  title: string;
  /** meta description for this page, ~150-160 chars; omit to leave it unset */
  description?: string;
  /** page-specific JSON-LD (e.g. a Service block); the site-wide Organization
   *  schema is always added on top of this, not instead of it */
  schema?: object | object[];
  sections: Section[];
}
