import type { PageContent } from "../types";

export const ooloPricing: PageContent = {
  title: "Oolo — Pricing",
  sections: [
    {
      type: "hero",
      eyebrow: "Pricing Models",
      title: "Three simple ways to work with Oolo.",
      subtitle:
        "We keep it to three clear models: project-based, retainer, and team hiring. Pick the one that matches how you want to work — fixed scope, monthly momentum, or dedicated talent.",
      primaryCta: { label: "Explore Models", to: "#models" },
      secondaryCta: { label: "Talk to us", to: "/contact" },
      facts: [
        { label: "Project Based", value: "One-time launch — fixed scope, clear timeline, single delivery goal." },
        { label: "Retainer Model", value: "Monthly support — consistent growth, ongoing brand visibility." },
        { label: "Team Hiring", value: "Dedicated talent — long-term support and flexible capacity." },
      ],
    },
    // PROJECT BASED
    {
      type: "engagement",
      anchor: "models",
      eyebrow: "Model 01 — Project Based",
      title: "One-time marketing projects with fixed scope and clear delivery.",
      subtitle: "Suitable when you already know the need and want a specific creative or marketing output completed.",
      plans: [
        {
          badge: "Starter Project",
          name: "Brand Starter",
          tagline: "For early brands that need basic creative direction and launch-ready brand material.",
          features: ["Brand direction outline", "Basic visual style guide", "Social media starter kit", "Launch content direction"],
          cta: { label: "View Scope", to: "/contact" },
        },
        {
          badge: "Growth Project",
          name: "Campaign Launch",
          tagline: "For brands that need a structured campaign with creative assets, copy, and launch planning.",
          features: ["Campaign concept", "Creative design direction", "Social content set", "Launch calendar"],
          cta: { label: "View Scope", to: "/contact" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Premium Project",
          name: "Full Creative Launch",
          tagline: "For product, service, or business launches that need stronger creative and communication structure.",
          features: ["Brand and campaign strategy", "Copy and creative assets", "Content planning", "Launch review session"],
          cta: { label: "View Scope", to: "/contact" },
        },
      ],
    },
    // RETAINER
    {
      type: "engagement",
      eyebrow: "Model 02 — Retainer Model",
      title: "Monthly marketing support for brands that need steady momentum.",
      subtitle: "Oolo can support planning, content, creative, and improvement every month.",
      plans: [
        {
          badge: "Monthly Basic",
          name: "Social Support",
          tagline: "For brands that need a simple monthly social media presence and consistent creative output.",
          features: ["Monthly content calendar", "Basic creative designs", "Caption support", "Monthly review notes"],
          cta: { label: "View Scope", to: "/contact" },
        },
        {
          badge: "Growth Care",
          name: "Marketing Retainer",
          tagline: "For businesses that need monthly content, campaigns, creative direction, and performance review.",
          features: ["Content calendar and strategy", "Campaign creative support", "Copy and design direction", "Monthly reporting insight"],
          cta: { label: "View Scope", to: "/contact" },
          highlighted: true,
          popular: "Most Popular",
        },
        {
          badge: "Brand Partner",
          name: "Full Growth Partner",
          tagline: "For brands that want Oolo to act as a creative marketing partner across strategy and execution.",
          features: ["Brand and growth planning", "Campaign management support", "Creative lead involvement", "Monthly improvement roadmap"],
          cta: { label: "View Scope", to: "/contact" },
        },
      ],
    },
    // TEAM HIRING
    {
      type: "engagement",
      eyebrow: "Model 03 — Team Hiring",
      title: "Dedicated creative and marketing talent for longer support needs.",
      subtitle: "For businesses that need people, not only packages — flexible talent without hiring full-time immediately.",
      plans: [
        {
          badge: "Creative Role",
          name: "Designer Support",
          tagline: "For businesses that need ongoing visual design and social creative execution.",
          features: ["Graphic design support", "Social media creatives", "Presentation and ad visuals", "Brand asset updates"],
          cta: { label: "View Scope", to: "/contact" },
        },
        {
          badge: "Marketing Role",
          name: "Marketer Support",
          tagline: "For companies that need monthly marketing coordination, planning, and execution assistance.",
          features: ["Marketing coordination", "Campaign planning support", "Content direction", "Weekly progress updates"],
          cta: { label: "View Scope", to: "/contact" },
          highlighted: true,
          popular: "Flexible",
        },
        {
          badge: "Team Setup",
          name: "Creative Growth Team",
          tagline: "For brands that need a small dedicated team combining strategy, content, design, and marketing execution.",
          features: ["Designer + marketer setup", "Creative lead support", "Campaign workflow", "Custom monthly capacity"],
          cta: { label: "View Scope", to: "/contact" },
        },
      ],
    },
    // COMPARE
    {
      type: "features",
      eyebrow: "Compare",
      title: "Compare what each pricing model is meant for.",
      subtitle: "Decide before contacting us.",
      columns: 3,
      items: [
        { title: "Project Based", body: "One-time launch or fixed creative scope · fixed timeline · defined deliverables · best for startups, launches, campaigns." },
        { title: "Retainer Model", body: "Monthly marketing and content support · monthly cycle · continuous planning and execution · best for SMEs and growing brands." },
        { title: "Team Hiring", body: "Dedicated people for ongoing work · monthly or long-term · role-based support capacity · best for companies with internal teams." },
      ],
    },
    // INCLUDED SUPPORT
    {
      type: "features",
      eyebrow: "Included Support",
      title: "What clients can expect from Oolo pricing.",
      columns: 3,
      numbered: true,
      items: [
        { title: "Strategy Direction", body: "Every package starts with understanding the business goal, audience, message, and creative direction." },
        { title: "Creative Execution", body: "Oolo supports visuals, copy, content ideas, campaign assets, and brand communication materials." },
        { title: "Review & Improvement", body: "Retainer and team models can include review cycles, performance insight, and practical improvement recommendations." },
      ],
    },
    // HOW TO CHOOSE
    {
      type: "features",
      eyebrow: "How To Choose",
      title: "A simple guide for selecting the right Oolo pricing model.",
      columns: 3,
      items: [
        { title: "Need one-time work?", body: "Choose Project Based for branding, launch, campaign, or creative asset delivery." },
        { title: "Need monthly support?", body: "Choose Retainer Model for continuous marketing, content, design, and campaign improvement." },
        { title: "Need dedicated people?", body: "Choose Team Hiring for ongoing creative, design, and marketing capacity alongside your team." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Let's Talk",
      title: "Ready to choose how you work with Oolo?",
      body: "Tell us your goal and we'll recommend whether a project, a retainer, or dedicated talent fits best.",
      cta: { label: "Talk to us", to: "/contact" },
    },
  ],
};
