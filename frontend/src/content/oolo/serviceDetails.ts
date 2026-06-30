import type { PageContent } from "../types";

interface OoloService {
  slug: string;
  category: string;
  title: string;
  sub: string;
  scopeTitle: string;
  covers: { title: string; body: string }[];
  process: string[];
  outcomes: string[];
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
        items: s.outcomes.map((title) => ({ title, body: "" })),
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
      { title: "Brand Positioning", body: "Clarify where the brand stands, who it serves, and why customers should choose it." },
      { title: "Voice & Messaging", body: "Define tone, key messages, value propositions, and campaign language." },
      { title: "Visual Direction", body: "Shape logo usage, colors, typography direction, creative references, and style rules." },
      { title: "Brand Launch Setup", body: "Prepare the brand foundation for website, social media, campaigns, and marketing assets." },
    ],
    process: ["Discover business and audience", "Define positioning", "Shape identity direction", "Prepare brand guidelines", "Support launch communication"],
    outcomes: ["Clear brand direction", "Stronger market positioning", "Consistent visual identity", "Better customer trust"],
    ctaTitle: "Need Brand Strategy & Identity support?",
  },
  {
    slug: "social-media",
    category: "Oolo Service Category 02",
    title: "Turn social channels into consistent brand growth touchpoints.",
    sub: "We plan, structure, and guide social media communication so the brand does not post randomly — content direction, platform strategy, campaign rhythm, and audience engagement.",
    scopeTitle: "Social Media Marketing",
    covers: [
      { title: "Platform Strategy", body: "Choose the right platforms and define how the brand should communicate on each one." },
      { title: "Content Calendar", body: "Plan weekly and monthly content themes, post types, and campaign moments." },
      { title: "Audience Engagement", body: "Create content ideas that encourage trust, interaction, and customer interest." },
      { title: "Performance Review", body: "Review reach, engagement, and campaign response to improve the next cycle." },
    ],
    process: ["Audit current social presence", "Define content pillars", "Plan monthly calendar", "Create post direction", "Review and improve"],
    outcomes: ["Consistent posting plan", "Stronger audience engagement", "Clear brand voice", "Better social visibility"],
    ctaTitle: "Need Social Media Marketing support?",
  },
  {
    slug: "content",
    category: "Oolo Service Category 03",
    title: "Create content that explains, attracts, and converts.",
    sub: "We help brands produce purposeful content for digital platforms: captions, campaign messages, reel ideas, storytelling concepts, website content support, and content systems.",
    scopeTitle: "Content Creation",
    covers: [
      { title: "Copywriting", body: "Captions, ad copy, website content direction, campaign lines, and brand messages." },
      { title: "Reels & Short-form Ideas", body: "Concepts for short videos, hooks, scripts, and story-led content formats." },
      { title: "Campaign Content", body: "Content sets for launches, seasonal offers, awareness campaigns, and lead generation." },
      { title: "Storytelling", body: "Humanize the brand through stories, founder messages, customer angles, and creative narratives." },
    ],
    process: ["Identify content goal", "Define audience angle", "Create content ideas", "Prepare copy and direction", "Optimize after feedback"],
    outcomes: ["Better content clarity", "More campaign-ready assets", "Stronger storytelling", "Reduced content confusion"],
    ctaTitle: "Need Content Creation support?",
  },
  {
    slug: "creative",
    category: "Oolo Service Category 04",
    title: "Design visuals that make the brand feel clear, modern, and memorable.",
    sub: "We create digital design direction for social media, campaigns, presentations, ads, brand assets, and promotional materials — visual communication with purpose, not just decoration.",
    scopeTitle: "Creative Design",
    covers: [
      { title: "Social Media Creatives", body: "Post designs, story layouts, carousel structure, and campaign-ready social visuals." },
      { title: "Ad Creatives", body: "Performance-focused static and digital ad concepts for paid campaigns." },
      { title: "Brand Assets", body: "Reusable design elements, templates, icons, and visual components." },
      { title: "Presentation & Promo Design", body: "Pitch visuals, campaign decks, event posters, and promotional materials." },
    ],
    process: ["Understand visual goal", "Set creative direction", "Create design concepts", "Refine visual system", "Prepare final assets"],
    outcomes: ["Cleaner visual identity", "More professional campaigns", "Reusable creative assets", "Better brand recall"],
    ctaTitle: "Need Creative Design support?",
  },
  {
    slug: "campaign",
    category: "Oolo Service Category 05",
    title: "Plan campaigns with structure, message, channel, and outcome clearly connected.",
    sub: "We help businesses plan campaign journeys before execution: objective, audience segment, key message, channel plan, creative requirements, timeline, and success indicators.",
    scopeTitle: "Campaign Planning",
    covers: [
      { title: "Campaign Strategy", body: "Define what the campaign should achieve and how it connects to business goals." },
      { title: "Audience & Message Mapping", body: "Match campaign messages to customer segments, needs, and buying stages." },
      { title: "Channel Planning", body: "Plan where the campaign should run: social, email, landing page, paid media, or offline support." },
      { title: "Launch Timeline", body: "Structure the campaign from teaser to launch, follow-up, and review." },
    ],
    process: ["Set campaign objective", "Map target audience", "Plan message and channels", "Prepare launch assets", "Measure and refine"],
    outcomes: ["Clear campaign direction", "Reduced execution confusion", "Better launch readiness", "More measurable results"],
    ctaTitle: "Need Campaign Planning support?",
  },
  {
    slug: "digital-growth",
    category: "Oolo Service Category 06",
    title: "Support ongoing marketing growth with insight, consistency, and practical improvement.",
    sub: "We support brands after campaigns and content go live — analysis, optimization, content improvement, growth recommendations, and practical marketing support for continuous progress.",
    scopeTitle: "Digital Growth Support",
    covers: [
      { title: "Growth Review", body: "Review marketing activity, content performance, campaign response, and improvement areas." },
      { title: "Optimization Support", body: "Improve messaging, content angles, creative direction, and funnel performance." },
      { title: "Monthly Marketing Direction", body: "Provide ongoing recommendations for what to post, promote, improve, and test next." },
      { title: "Performance Reporting", body: "Summarize progress in a clear, business-friendly format for decision-making." },
    ],
    process: ["Review current performance", "Find improvement gaps", "Recommend growth actions", "Support implementation", "Track next results"],
    outcomes: ["Ongoing improvement", "Better marketing decisions", "Clear monthly direction", "Sustainable brand growth"],
    ctaTitle: "Need Digital Growth Support?",
  },
];

export const ooloServiceDetails: Record<string, PageContent> = Object.fromEntries(
  DATA.map((d) => [d.slug, build(d)]),
);
