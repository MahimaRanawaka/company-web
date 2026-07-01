import type { PageContent } from "./types";

export const portfolioContent: PageContent = {
  title: "Portfolio",
  sections: [
    {
      type: "hero",
      eyebrow: "Portfolio",
      title: "Work That Connects Strategy, Technology, QA, and Growth",
      subtitle:
        "Explore selected software, QA, automation, website, and marketing work designed to help growing businesses build, test, launch, and scale with confidence.",
      primaryCta: { label: "View Selected Work", to: "#work" },
      secondaryCta: { label: "Start a Project", to: "/contact" },
      chips: ["IT Digital Systems", "QA Tested Delivery", "Oolo Creative Growth"],
    },
    {
      type: "pathways",
      eyebrow: "Two Brands. One Team.",
      title: "Software and Marketing Under One Roof",
      subtitle:
        "En'nobler and Oolo operate as a unified team — so your technology and marketing always move together, not in silos.",
      cards: [
        {
          label: "En'nobler — Software & QA",
          title: "We Build and Test Digital Products",
          body: "Custom software development, web systems, mobile applications, automation workflows, and quality assurance — structured for startups and medium enterprises that need reliable, tested delivery.",
          items: ["Software Development & Web Systems", "QA as a Service (QaaS)", "AI & Automation", "Cloud & DevOps"],
          dark: true,
        },
        {
          label: "Oolo — Marketing & Growth",
          title: "We Position and Grow Your Brand",
          body: "Brand strategy, digital campaigns, content creation, and performance marketing — built around your product and business goals so growth is planned, not accidental.",
          items: ["Brand Strategy & Positioning", "Digital Marketing & Campaigns", "Content Creation & SEO", "Campaign Automation"],
        },
      ],
    },
    {
      type: "caseStudies",
      anchor: "work",
      eyebrow: "Featured Work",
      title: "Selected Projects",
      subtitle:
        "How we support growing businesses through software delivery, quality assurance, automation, web experience, and marketing execution.",
      filters: ["All", "En'nobler Software Services", "Quality Assurance", "Oolo Marketing Services"],
      items: [
{ tag: "Oolo Marketing Services", title: "Anime Apparel Concept Design", body: "Three premium streetwear concepts built around iconic anime characters — extracting emotional identity through typography, composition, and print-conscious illustration.", metric: "Apparel Design", to: "/portfolio/anime-apparel-concepts" },
        { tag: "Oolo Marketing Services", title: "Brand Identity Design Collection", body: "Five distinct brand identities across fashion, technology, creative marketing, premium FMCG, and multi-business — each built around strategy, storytelling, and real-world scalability.", metric: "Brand Identity", to: "/portfolio/brand-identity-collection" },
        { tag: "Oolo Marketing Services", title: "Chiku — Brand Character Evolution", body: "A dual-state brand character bridging human creativity and AI intelligence — from graffiti-inspired Orange Chiku to the futuristic Blue Chiku, built for Oolo × Ennobler.", metric: "Brand Identity", to: "/portfolio/chiku-brand-character" },
        { tag: "Oolo Marketing Services", title: "Ceylon Raga Reserve — Premium Masala Brew Packaging", body: "Luxury packaging identity for a premium Sri Lankan masala tea brand — custom character design, hand-drawn botanical spice illustrations, and print-ready production.", metric: "Packaging Design", to: "/portfolio/ceylon-raga-reserve" },
        { tag: "Oolo Marketing Services", title: "BOC WhatsApp Banking Campaign", body: "X Banner design and print production for Bank of Ceylon's WhatsApp Banking promotion — transforming a complex digital service into a clear, lifestyle-driven campaign visual.", metric: "Campaign Design", to: "/portfolio/boc-whatsapp-banking" },
        { tag: "Oolo Marketing Services", title: "Raga Master — 3D Character Design", body: "A half-human, half-animal guardian character transformed from a single reference image into a complete 3D brand asset for the Ceylon Raga Reserve universe.", metric: "3D Character Design", to: "/portfolio/raga-master-character" },
        { tag: "Oolo Marketing Services", title: "AI-Powered Character Campaign Production", body: "A layered AI production workflow combining character-driven storytelling, curiosity-driven hooks, and local cultural strategy to build brand-ready video campaigns.", metric: "AI Campaign", to: "/portfolio/ai-character-campaign" },
        { tag: "Oolo Marketing Services", title: "Ceylon Raga Reserve — Brand Identity & Cultural Campaign", body: "A complete brand universe — character storytelling, multilingual campaigns, and AI-assisted visuals that drove 101K views on day one from zero followers.", metric: "101K Views · Day 1", to: "/portfolio/ceylon-raga-reserve-campaign" },
        { tag: "Oolo Marketing Services", title: "LIAS Halloween Campaign — AI-Assisted Animation", body: "A story-driven Halloween animation built around kindness and student connection — using Sora AI video generation to bring character-led storytelling to social media.", metric: "Animation · AI", to: "/portfolio/lias-halloween-campaign" },
        { tag: "Oolo Marketing Services", title: "Logo Motion — Living Brand Experiences", body: "Two brands, two motion languages — WGM's premium cinematic logo reveal and Oolo's 3D playful universe, each communicating brand personality within seconds.", metric: "Motion Design", to: "/portfolio/logo-motion" },
        { tag: "En'nobler Software Services", title: "Ceylon Raga Reserve — Premium Brand Digital Experience", body: "A complete UI/UX design and engineering project translating a heritage tea brand into a custom digital experience — hand-crafted illustration system, design system, and e-commerce UX.", metric: "UI/UX · Design System", to: "/portfolio/ceylon-raga-reserve-website" },
        { tag: "Quality Assurance", title: "Ceylon Raga Reserve — AI-Assisted QA & Human-Led Validation", body: "A hybrid QA process combining AI-assisted test exploration and human-led validation to ensure a premium branded website met real-world reliability and usability standards.", metric: "QA · AI Testing", to: "/portfolio/ceylon-raga-reserve-qa" },
      ],
    },
    {
      type: "features",
      eyebrow: "Case Study",
      title: "How We Think and Deliver",
      subtitle:
        "Every project starts with understanding the real business problem — and ends with a solution that's tested, measured, and ready to grow.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Problem", body: "The previous structure was unclear, hard to navigate, and did not explain the value quickly." },
        { title: "Process", body: "We mapped user journeys, grouped content, planned wireframes, and validated the flow." },
        { title: "Solution", body: "A clearer page structure with visual hierarchy, stronger CTA placement, and QA-backed delivery." },
        { title: "Outcome", body: "Improved clarity, stronger trust, better project explanation, and smoother user decision-making." },
      ],
    },
    {
      type: "steps",
      eyebrow: "Delivery Method",
      title: "How We Deliver Work",
      items: [
        { title: "Understand", body: "Identify the business goal, user problem, project scope, and delivery expectations." },
        { title: "Design", body: "Create the structure, wireframe, content flow, visual direction, and interaction plan." },
        { title: "Build", body: "Develop the software, website, QA workflow, automation layer, or marketing execution system." },
        { title: "Test & Improve", body: "Validate usability, functionality, performance, content clarity, and release readiness." },
      ],
    },
    {
      type: "features",
      eyebrow: "Who We Support",
      title: "Industries and Teams We Can Support",
      subtitle:
        "Built around startups and medium-level enterprises that need both software execution and marketing support — teams that want better digital systems, stronger QA, clearer brand communication, and practical growth.",
      columns: 4,
      items: [
        { title: "Startups", body: "" },
        { title: "Medium Enterprises", body: "" },
        { title: "Software Product Teams", body: "" },
        { title: "Marketing Teams", body: "" },
        { title: "Digital Service Businesses", body: "" },
        { title: "E-commerce Teams", body: "" },
        { title: "Operations Teams", body: "" },
        { title: "Growth-Focused Brands", body: "" },
      ],
    },
    {
      type: "cta",
      eyebrow: "Quality + Growth Review",
      title: "Every project is reviewed for delivery quality and business impact.",
      body: "En'nobler checks usability, functionality, performance, and technical reliability, while Oolo reviews brand clarity, campaign direction, content flow, and conversion value.",
      cta: { label: "Start a Project", to: "/contact" },
    },
  ],
};
