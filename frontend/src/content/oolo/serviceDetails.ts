import type { PageContent } from "../types";

interface OoloService {
  slug: string;
  category: string;
  title: string;
  sub: string;
  scopeTitle: string;
  covers: { title: string; body: string; icon?: string }[];
  process: string[];
  outcomes: { title: string; icon?: string }[];
  /** "inline": trial layout for the outcomes cards — small icon left of title, single row */
  outcomesLayout?: "inline";
  ctaTitle: string;
}

function build(s: OoloService): PageContent {
  return {
    title: `Oolo — ${s.scopeTitle}`,
    sections: [
      {
        type: "hero",
        eyebrow: s.category,
        title: s.title,
        subtitle: s.sub,
        secondaryCta: { label: "Back to Services", to: "/oolo/services" },
        chips: ["Strategy", "Creative", "Growth"],
      },
      {
        type: "features",
        anchor: "scope",
        eyebrow: "What This Service Covers",
        title: `${s.scopeTitle} Service Scope`,
        subtitle: "The main content blocks, card structure, and conversion flow for this Oolo service category.",
        columns: 4,
        numbered: true,
        items: s.covers,
      },
      {
        type: "steps",
        anchor: "process",
        eyebrow: "Process",
        title: "How Oolo Delivers This Service",
        items: s.process.map((title) => ({ title, body: "" })),
      },
      {
        type: "features",
        anchor: "outcomes",
        eyebrow: "Expected Value",
        title: "What Clients Should Gain",
        subtitle: "The practical business value of this service, not just a list of activities.",
        columns: 4,
        dark: true,
        layout: s.outcomesLayout,
        items: s.outcomes.map((o) => ({ title: o.title, body: "", icon: o.icon })),
      },
      {
        type: "cta",
        title: s.ctaTitle,
        body: "From service understanding into pricing, portfolio, or a direct conversation with Oolo.",
        cta: { label: "Let's Talk", to: "/contact" },
      },
    ],
  };
}

const DATA: OoloService[] = [
  {
    slug: "brand-strategy",
    category: "Oolo Service Category 01",
    title: "Build a brand people understand, remember, and trust.",
    sub: "We define the strategic foundation of your brand: positioning, voice, visual direction, messaging, and market fit — turning raw business ideas into a clear brand system.",
    scopeTitle: "Brand Strategy & Identity",
    covers: [
      { title: "Brand Positioning", body: "Clarify where the brand stands, who it serves, and why customers should choose it.", icon: "target" },
      { title: "Voice & Messaging", body: "Define tone, key messages, value propositions, and campaign language.", icon: "message-square" },
      { title: "Visual Direction", body: "Shape logo usage, colors, typography direction, creative references, and style rules.", icon: "palette" },
      { title: "Brand Launch Setup", body: "Prepare the brand foundation for website, social media, campaigns, and marketing assets.", icon: "rocket" },
    ],
    process: ["Discover business and audience", "Define positioning", "Shape identity direction", "Prepare brand guidelines", "Support launch communication"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Clear brand direction", icon: "compass" },
      { title: "Stronger market positioning", icon: "trending-up" },
      { title: "Consistent visual identity", icon: "palette" },
      { title: "Better customer trust", icon: "heart-handshake" },
    ],
    ctaTitle: "Need Brand Strategy & Identity support?",
  },
  {
    slug: "social-media",
    category: "Oolo Service Category 02",
    title: "Turn social channels into consistent brand growth touchpoints.",
    sub: "We plan, structure, and guide social media communication so the brand does not post randomly — content direction, platform strategy, campaign rhythm, and audience engagement.",
    scopeTitle: "Social Media Marketing",
    covers: [
      { title: "Platform Strategy", body: "Choose the right platforms and define how the brand should communicate on each one.", icon: "share-2" },
      { title: "Content Calendar", body: "Plan weekly and monthly content themes, post types, and campaign moments.", icon: "calendar" },
      { title: "Audience Engagement", body: "Create content ideas that encourage trust, interaction, and customer interest.", icon: "heart-handshake" },
      { title: "Performance Review", body: "Review reach, engagement, and campaign response to improve the next cycle.", icon: "bar-chart-3" },
    ],
    process: ["Audit current social presence", "Define content pillars", "Plan monthly calendar", "Create post direction", "Review and improve"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Consistent posting plan", icon: "calendar" },
      { title: "Stronger audience engagement", icon: "heart-handshake" },
      { title: "Clear brand voice", icon: "message-square" },
      { title: "Better social visibility", icon: "eye" },
    ],
    ctaTitle: "Need Social Media Marketing support?",
  },
  {
    slug: "content",
    category: "Oolo Service Category 03",
    title: "Create content that explains, attracts, and converts.",
    sub: "We help brands produce purposeful content for digital platforms: captions, campaign messages, reel ideas, storytelling concepts, website content support, and content systems.",
    scopeTitle: "Content Creation",
    covers: [
      { title: "Copywriting", body: "Captions, ad copy, website content direction, campaign lines, and brand messages.", icon: "pen-tool" },
      { title: "Reels & Short-form Ideas", body: "Concepts for short videos, hooks, scripts, and story-led content formats.", icon: "clapperboard" },
      { title: "Campaign Content", body: "Content sets for launches, seasonal offers, awareness campaigns, and lead generation.", icon: "megaphone" },
      { title: "Storytelling", body: "Humanize the brand through stories, founder messages, customer angles, and creative narratives.", icon: "book-open" },
    ],
    process: ["Identify content goal", "Define audience angle", "Create content ideas", "Prepare copy and direction", "Optimize after feedback"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Better content clarity", icon: "file-text" },
      { title: "More campaign-ready assets", icon: "package" },
      { title: "Stronger storytelling", icon: "book-open" },
      { title: "Reduced content confusion", icon: "circle-check" },
    ],
    ctaTitle: "Need Content Creation support?",
  },
  {
    slug: "creative",
    category: "Oolo Service Category 04",
    title: "Design visuals that make the brand feel clear, modern, and memorable.",
    sub: "We create digital design direction for social media, campaigns, presentations, ads, brand assets, and promotional materials — visual communication with purpose, not just decoration.",
    scopeTitle: "Creative Design",
    covers: [
      { title: "Social Media Creatives", body: "Post designs, story layouts, carousel structure, and campaign-ready social visuals.", icon: "image" },
      { title: "Ad Creatives", body: "Performance-focused static and digital ad concepts for paid campaigns.", icon: "megaphone" },
      { title: "Brand Assets", body: "Reusable design elements, templates, icons, and visual components.", icon: "package" },
      { title: "Presentation & Promo Design", body: "Pitch visuals, campaign decks, event posters, and promotional materials.", icon: "presentation" },
    ],
    process: ["Understand visual goal", "Set creative direction", "Create design concepts", "Refine visual system", "Prepare final assets"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Cleaner visual identity", icon: "palette" },
      { title: "More professional campaigns", icon: "megaphone" },
      { title: "Reusable creative assets", icon: "package" },
      { title: "Better brand recall", icon: "sparkles" },
    ],
    ctaTitle: "Need Creative Design support?",
  },
  {
    slug: "campaign",
    category: "Oolo Service Category 05",
    title: "Plan campaigns with structure, message, channel, and outcome clearly connected.",
    sub: "We help businesses plan campaign journeys before execution: objective, audience segment, key message, channel plan, creative requirements, timeline, and success indicators.",
    scopeTitle: "Campaign Planning",
    covers: [
      { title: "Campaign Strategy", body: "Define what the campaign should achieve and how it connects to business goals.", icon: "target" },
      { title: "Audience & Message Mapping", body: "Match campaign messages to customer segments, needs, and buying stages.", icon: "users" },
      { title: "Channel Planning", body: "Plan where the campaign should run: social, email, landing page, paid media, or offline support.", icon: "route" },
      { title: "Launch Timeline", body: "Structure the campaign from teaser to launch, follow-up, and review.", icon: "clock" },
    ],
    process: ["Set campaign objective", "Map target audience", "Plan message and channels", "Prepare launch assets", "Measure and refine"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Clear campaign direction", icon: "compass" },
      { title: "Reduced execution confusion", icon: "circle-check" },
      { title: "Better launch readiness", icon: "rocket" },
      { title: "More measurable results", icon: "bar-chart-3" },
    ],
    ctaTitle: "Need Campaign Planning support?",
  },
  {
    slug: "digital-growth",
    category: "Oolo Service Category 06",
    title: "Support ongoing marketing growth with insight, consistency, and practical improvement.",
    sub: "We support brands after campaigns and content go live — analysis, optimization, content improvement, growth recommendations, and practical marketing support for continuous progress.",
    scopeTitle: "Digital Growth Support",
    covers: [
      { title: "Growth Review", body: "Review marketing activity, content performance, campaign response, and improvement areas.", icon: "trending-up" },
      { title: "Optimization Support", body: "Improve messaging, content angles, creative direction, and funnel performance.", icon: "sliders-horizontal" },
      { title: "Monthly Marketing Direction", body: "Provide ongoing recommendations for what to post, promote, improve, and test next.", icon: "compass" },
      { title: "Performance Reporting", body: "Summarize progress in a clear, business-friendly format for decision-making.", icon: "bar-chart-3" },
    ],
    process: ["Review current performance", "Find improvement gaps", "Recommend growth actions", "Support implementation", "Track next results"],
    outcomesLayout: "inline",
    outcomes: [
      { title: "Ongoing improvement", icon: "trending-up" },
      { title: "Better marketing decisions", icon: "brain" },
      { title: "Clear monthly direction", icon: "calendar" },
      { title: "Sustainable brand growth", icon: "leaf" },
    ],
    ctaTitle: "Need Digital Growth Support?",
  },
];

export const ooloServiceDetails: Record<string, PageContent> = Object.fromEntries(
  DATA.map((d) => [d.slug, build(d)]),
);
