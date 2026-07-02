import type { PageContent } from "../types";

/** Ported from "Oolo landing 3.html" (marketing side) to full wireframe parity. */
export const ooloHome: PageContent = {
  title: "Oolo — Creative Growth Marketing",
  sections: [
    // §3 HERO
    {
      type: "hero",
      eyebrow: "Oolo — Creative Growth Marketing",
      title: "Growth That {Compounds}. Campaigns That Convert.",
      subtitle:
        "Strategy-led campaigns, creative execution, and performance marketing — built to scale the brands that mean business.",
      primaryCta: { label: "Start a Campaign", to: "/contact" },
      secondaryCta: { label: "See What We Do", to: "/oolo/services" },
      chips: ["Campaign", "Brand", "Content", "Growth", "Audience"],
      image: { src: "/heroes/oolo.webp", alt: "Chikku, the Oolo creative-growth mascot, holding a spray can amid upward growth arrows" },
    },
    { type: "marquee", items: ["Creative First", "Strategy Led", "Growth Obsessed", "Brand Forward", "Always Shipping"] },
    // hero stats band
    {
      type: "stats",
      items: [
        { value: "150+", label: "Brands scaled" },
        { value: "4.2x", label: "Avg. ROAS" },
        { value: "60%", label: "Faster to market" },
      ],
    },
    // §4 PARTNERS
    {
      type: "partners",
      eyebrow: "Trusted by brands growing with Oolo",
      logos: [
        { src: "/partners/boc-logo-english.png", alt: "BOC" },
        { src: "/partners/boc-paymentgataway-logo-white.jpg", alt: "BOC Payment Gateway" },
      ],
    },
    // §5 PROBLEM → SOLUTION
    {
      type: "problemSolution",
      eyebrow: "The old marketing playbook is dead",
      title: "We solve it differently.",
      subtitle:
        "Three reasons most marketing agencies fail your brand — and how Oolo does it right.",
      items: [
        {
          problem: {
            title: "You're getting vanity metrics, not revenue",
            body: "Agencies celebrate impressions and reach while your sales funnel leaks. Clicks without conversions aren't growth.",
            note: "78% of brands say their agency couldn't tie spend to revenue.",
          },
          solution: {
            title: "Revenue-first campaigns, every time",
            body: "We track every campaign to pipeline and revenue. Milestone payments tied to conversion KPIs — just growth you can see.",
            note: "4.2x average ROAS across Oolo-managed campaigns.",
          },
        },
        {
          problem: {
            title: "Creative that looks generic, not built for your brand",
            body: "Cookie-cutter templates, stock imagery, ignored brand guidelines. The result: content that could be anyone's and moves no one.",
            note: "64% of consumers disengage from brand content they find generic.",
          },
          solution: {
            title: "Distinctive creative, AI-refined at scale",
            body: "Strategy-led creative with your brand DNA at its core. Structured creative systems produce and test more useful variants, faster.",
            note: "60% faster time-to-market with AI-aided creative production.",
          },
        },
        {
          problem: {
            title: "Siloed channels, no unified strategy",
            body: "SEO says one thing, paid says another, social does its own thing. No one owns the full funnel and customers feel the disconnect.",
            note: "Only 14% of brands say their marketing channels work in sync.",
          },
          solution: {
            title: "One integrated growth engine across every channel",
            body: "Paid, organic, social, email, and content — all coordinated under a single strategy layer so your message compounds, not cancels.",
            note: "Clients see 2x lift in brand recall within 90 days.",
          },
        },
      ],
    },
    // §6 CORE SERVICES (mirrors the Services dropdown)
    {
      type: "services",
      eyebrow: "Our Core Services",
      title: "Creative Growth Services",
      bento: true,
      items: [
        { title: "Brand Strategy & Identity", summary: "Positioning, messaging, visual identity, and brand systems that make you instantly recognisable and impossible to ignore.", to: "/oolo/services/brand-strategy", icon: "palette" },
        { title: "Social Media Marketing", summary: "Channel strategy, content calendars, community management, and paid social that turns followers into customers.", to: "/oolo/services/social-media", icon: "share-2" },
        { title: "Content Creation", summary: "Copy, video, graphics, and editorial built around your brand voice — produced at scale, not as one-offs.", to: "/oolo/services/content", icon: "pen-tool" },
        { title: "Creative Design", summary: "Campaign creative, ad sets, landing visuals, and design systems engineered to convert, not just to look good.", to: "/oolo/services/creative", icon: "sparkles" },
        { title: "Campaign Planning", summary: "End-to-end campaign architecture — goals, channels, budgets, and timelines mapped to measurable outcomes.", to: "/oolo/services/campaign", icon: "megaphone" },
        { title: "Digital Growth Support", summary: "SEO, performance marketing, funnel optimisation, and analytics that compound traffic into pipeline.", to: "/oolo/services/digital-growth", icon: "trending-up" },
      ],
    },
    // §7 ENGAGEMENT MODELS
    {
      type: "engagement",
      title: "Choose How to Work With Us",
      subtitle: "Three engagement models. One growth team. Your call.",
      plans: [
        {
          badge: "Campaign",
          name: "Campaign Sprint",
          tagline: "Launch fast. Learn faster.",
          features: ["Paid media launch", "Landing page & creative", "Performance reporting"],
          cta: { label: "Start a Campaign", to: "/contact" },
        },
        {
          badge: "Retainer",
          name: "Growth Retainer",
          tagline: "Ongoing growth that compounds month after month.",
          features: ["Full-funnel strategy", "Content & creative production", "Paid + organic management"],
          cta: { label: "Explore Packages", to: "/oolo/pricing" },
          highlighted: true,
          popular: "Most Popular",
        },
        {
          badge: "Embedded",
          name: "Embedded Team",
          tagline: "Dedicated marketers inside your team.",
          features: ["Brand overhaul", "GTM strategy & execution", "Market expansion", "Ongoing content operations"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
      ],
    },
    // §7 AI-AIDED MARKETING ECOSYSTEM
    {
      type: "qaPromo",
      eyebrow: "Oolo — Creative Growth Marketing",
      title: "Creative Growth Marketing Ecosystem.",
      body: "From brand positioning to paid performance and content at scale — we use AI to move faster, test smarter, and compound your growth. Four pillars, one growth engine.",
      pills: ["Brand & Strategy", "Paid Performance", "Content at Scale", "Analytics & Optimisation"],
      cta: { label: "Get Free Growth Audit", to: "/contact" },
    },
    // §8 METRICS
    {
      type: "stats",
      items: [
        { value: "150+", label: "Brands Scaled" },
        { value: "4.2x", label: "Average ROAS" },
        { value: "60%", label: "Faster to Market" },
        { value: "100%", label: "Client Retention" },
      ],
    },
    // §8A INDUSTRIES
    {
      type: "features",
      eyebrow: "Industries",
      title: "Industries We Help Grow",
      subtitle:
        "The markets Oolo understands — without creating separate pages for every sector.",
      columns: 3,
      numbered: true,
      bento: true,
      items: [
        { title: "E-commerce", body: "Product launches, paid campaigns, conversion funnels, creative testing, and customer retention content." },
        { title: "IT / SaaS", body: "Positioning, launch campaigns, content systems, founder-led marketing, and product growth communication." },
        { title: "Fintech", body: "Trust-led campaigns, user education, product explainers, lead generation, and credibility-focused content." },
        { title: "Startups & SMEs", body: "Brand identity, launch visibility, social content, campaign planning, and practical growth support." },
      ],
    },
    // §8B CHIKKU STORY
    {
      type: "cta",
      anchor: "chikku",
      eyebrow: "Chikku and the Story",
      title: "A brand story built around human creativity.",
      body: "Chikku is the character-led entry point into Oolo's creative world — a simple way to explain imagination, brand storytelling, and how human creativity guides every campaign.",
      cta: { label: "Read the Story", to: "/oolo/chikku" },
    },
    // §9 PORTFOLIO
    {
      type: "caseStudies",
      title: "The Proof in Motion",
      subtitle: "A curated look at recent brand wins across our creative growth marketing ecosystem.",
      filters: ["All Work", "Brand Strategy", "Character Design", "Campaign"],
      limit: 3,
      viewAllTo: "/portfolio",
      items: [
        {
          tag: "Brand Strategy",
          title: "Ceylon Raga Reserve — Brand Identity & Cultural Campaign System",
          body: "Building a complete brand universe for a new premium tea category — character-led storytelling, AI-assisted creative workflow, and a teaser-to-reveal campaign that reached 101K views on day one.",
          metric: "Brand Strategy · Campaign",
          to: "/portfolio/ceylon-raga-reserve-campaign",
        },
        {
          tag: "Character Design",
          title: "Raga Master — 3D Character Design & Concept Development",
          body: "Designing a complete 3D brand character for Ceylon Raga Reserve — from initial concept through costume, accessories, and a full character universe built to anchor a long-term brand identity.",
          metric: "Character · 3D Design",
          to: "/portfolio/raga-master-character",
        },
        {
          tag: "Campaign",
          title: "LIAS Halloween Campaign — AI-Assisted Animation",
          body: "A warmth-first Halloween campaign for a student community brand — 'A Little Kindness Creates a Bigger Celebration' brought to life through AI-assisted character animation and storytelling.",
          metric: "Animation · Campaign",
          to: "/portfolio/lias-halloween-campaign",
        },
      ],
    },
    // §10 CROSS-BRAND BRIDGE
    {
      type: "bridge",
      title: "Marketing strategy vs. IT power? Get both.",
      halves: [
        {
          tag: "Oolo — Marketing",
          title: "Creative-first, strategy-led growth.",
          body: "From paid performance to brand strategy and content at scale — one growth engine that compounds your engineering investment.",
          cta: { label: "View Marketing Services", to: "/oolo/services" },
        },
        {
          tag: "En'nobler — IT",
          title: "Switch to En'nobler: build & test your full tech ecosystem.",
          body: "Robust IT infrastructure and QA that compounds your marketing investment — build to test to scale, under a single delivery model.",
          cta: { label: "Switch to IT", to: "/ennobler" },
        },
      ],
    },
    // §11 FINAL CTA
    {
      type: "cta",
      eyebrow: "Let's Grow",
      title: "Grow with strategy, not guesswork.",
      body: "Book a free 30-minute growth audit. See how brands scale 4x faster with creative growth marketing.",
      cta: { label: "Start a Campaign", to: "/contact" },
    },
  ],
};
