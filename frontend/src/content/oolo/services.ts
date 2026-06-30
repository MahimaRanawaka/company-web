import type { PageContent } from "../types";

export const ooloServices: PageContent = {
  title: "Oolo — Marketing Services",
  sections: [
    {
      type: "hero",
      eyebrow: "Oolo — Marketing Services",
      title: "Creative marketing services built for brands that need clarity, content, and growth.",
      subtitle:
        "Oolo helps businesses turn ideas into stronger brand communication, sharper digital presence, and campaign systems that can be planned, launched, measured, and improved.",
      primaryCta: { label: "Explore Services", to: "#core-services" },
      secondaryCta: { label: "How We Work", to: "#how-we-work" },
      image: { src: "/showcase/oolo-services.webp", alt: "Creative growth marketing — flowing brand and campaign systems with a rising growth curve" },
    },
    {
      type: "features",
      eyebrow: "What We Do",
      title: "One marketing service page, six clear areas.",
      subtitle: "A fast understanding of Oolo's marketing scope before the detailed service cards.",
      columns: 3,
      items: [
        { title: "Brand Strategy", body: "Positioning, voice, identity." },
        { title: "Social Media", body: "Planning, posting, growth." },
        { title: "Content Creation", body: "Copy, reels, story ideas." },
        { title: "Creative Design", body: "Posters, ads, assets." },
        { title: "Campaign Planning", body: "Launches and promotions." },
        { title: "Growth Support", body: "Insights and optimisation." },
      ],
    },
    {
      type: "services",
      anchor: "core-services",
      eyebrow: "Our Core Services",
      title: "Marketing services shaped around real business communication.",
      items: [
        { title: "Brand Strategy & Identity", summary: "We define your brand voice, market position, message direction, visual identity logic, and the communication foundation that makes every campaign feel consistent.", to: "/oolo/services/brand-strategy", icon: "palette" },
        { title: "Social Media Marketing", summary: "We plan platform-specific content, monthly calendars, campaign themes, posting direction, and engagement ideas that keep your brand active and relevant.", to: "/oolo/services/social-media", icon: "share-2" },
        { title: "Content Creation", summary: "We create campaign copy, captions, content angles, reels concepts, storytelling ideas, and structured messaging for social, web, and promotional channels.", to: "/oolo/services/content", icon: "pen-tool" },
        { title: "Creative Design", summary: "We support digital posters, ad creatives, campaign visuals, brand assets, presentation visuals, and social media design systems.", to: "/oolo/services/creative", icon: "sparkles" },
        { title: "Campaign Planning", summary: "We plan and structure awareness campaigns, launch campaigns, lead generation campaigns, seasonal promotions, and offer-based marketing activities.", to: "/oolo/services/campaign", icon: "megaphone" },
        { title: "Digital Growth Support", summary: "We review campaign performance, content response, audience signals, and marketing gaps to recommend practical improvements for the next phase.", to: "/oolo/services/digital-growth", icon: "trending-up" },
      ],
    },
    {
      type: "steps",
      anchor: "how-we-work",
      eyebrow: "How We Work",
      title: "A simple process clients can understand quickly.",
      items: [
        { title: "Discover", body: "We understand the business, audience, competitors, brand presence, and key growth objective." },
        { title: "Plan", body: "We define the marketing direction, campaign structure, content approach, and creative roadmap." },
        { title: "Create", body: "We prepare messages, visuals, content ideas, campaign assets, and platform-ready marketing material." },
        { title: "Launch", body: "We support campaign rollout, publishing plans, content scheduling, and promotional execution." },
        { title: "Improve", body: "We review results, collect insights, refine direction, and shape the next marketing action." },
      ],
    },
    {
      type: "features",
      eyebrow: "Who We Support",
      title: "Practical marketing support for brands that need stronger visibility.",
      columns: 3,
      items: [
        { title: "Startups", body: "Launch visibility, brand basics, and growth campaigns." },
        { title: "Local Businesses", body: "Clear digital presence and practical promotional content." },
        { title: "E-commerce", body: "Product campaigns, creative testing, and conversion content." },
        { title: "Tourism & Hospitality", body: "Destination stories, offers, seasonal campaigns, and visuals." },
        { title: "Education", body: "Awareness campaigns, enrolment content, and credibility messaging." },
        { title: "Professional Services", body: "Trust-building content and lead-focused communication." },
      ],
    },
    {
      type: "features",
      eyebrow: "Why Choose Oolo",
      title: "Creative work connected to business outcomes.",
      subtitle: "Not only a design team — a creative marketing partner that connects strategy, brand expression, content, and growth direction.",
      columns: 4,
      items: [
        { title: "Strategic + Creative", body: "We connect creative ideas with business goals, audience needs, and campaign intent." },
        { title: "Brand-Focused Thinking", body: "Every output is shaped around brand identity, market position, tone of voice, and recall." },
        { title: "Content That Connects", body: "Messages that feel clear, relevant, and easy for the right audience to understand." },
        { title: "Growth-Oriented Support", body: "We help brands improve visibility, engagement, communication quality, and campaign direction over time." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Pricing",
      title: "Need a marketing support plan?",
      body: "Oolo supports project-based work, monthly retainers, or campaign-based marketing needs. Find the structure that fits your stage.",
      cta: { label: "View Pricing", to: "/oolo/pricing" },
    },
  ],
};
