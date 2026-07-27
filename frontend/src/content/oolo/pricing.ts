import type { PageContent } from "../types";

const DISCLAIMER =
  "Starting prices are provided as general guidance. Final pricing may vary depending on scope, quantity, complexity, timeline, production requirements, revisions, and campaign needs.";

export const ooloPricing: PageContent = {
  title: "Oolo — Pricing",
  sections: [
    {
      type: "hero",
      eyebrow: "Pricing",
      title: "Four flexible ways to work with Oolo.",
      subtitle:
        "We keep the pricing clear: project-based, monthly retainer, dedicated team, and performance-based. Choose the model that matches your scope, continuity, capacity, or agreed measurable outcomes.",
      primaryCta: { label: "Explore Models", to: "#models" },
      secondaryCta: { label: "Talk to us", to: "#final" },
      chips: ["Project-Based", "Monthly Retainer", "Dedicated Team", "Performance-Based"],
    },
    {
      type: "stats",
      items: [
        { value: "4", label: "Engagement Models" },
        { value: "AI", label: "AI-Aided Creative Delivery" },
        { value: "Marketing", label: "Brand, Content & Growth" },
      ],
    },
    // MODELS OVERVIEW
    {
      type: "engagement",
      anchor: "models",
      eyebrow: "Pricing Models",
      title: "Choose how you want to work with Oolo.",
      subtitle:
        "Four engagement models, plus one combined bundle. Pick the one that matches your current marketing need, delivery style, and growth objective.",
      plans: [
        {
          badge: "Model 01",
          name: "Project-Based",
          tagline:
            "Best for one-time branding, campaign, design, video, AI creative, or launch requirements with a fixed scope and timeline.",
          features: ["Fixed scope", "Clear timeline", "Defined delivery outcome"],
          cta: { label: "Explore Projects", to: "#project-based" },
        },
        {
          badge: "Model 02",
          name: "Monthly Retainer",
          tagline: "Best for brands that need continuous content, campaigns, platform management, and ongoing growth support.",
          features: ["Monthly execution", "Consistent output", "Ongoing optimisation"],
          cta: { label: "View Retainers", to: "#retainer-model" },
          highlighted: true,
          popular: "Most Popular",
        },
        {
          badge: "Model 03",
          name: "Dedicated Team",
          tagline: "Best for businesses that need ongoing access to creative, multimedia, marketing, and strategic specialists.",
          features: ["Dedicated talent", "Flexible capacity", "Long-term collaboration"],
          cta: { label: "Explore Teams", to: "#team-hiring" },
        },
        {
          badge: "Model 04",
          name: "Performance-Based",
          tagline:
            "Best for selected marketing engagements where commercial terms are linked to agreed KPIs and measurable outcomes.",
          features: ["Agreed performance baseline", "Measurable KPIs", "Outcome-linked commercial model"],
          cta: { label: "View Performance Model", to: "#performance-based" },
        },
        {
          badge: "Bundle",
          name: "Bundle Packages",
          tagline: "Best when the build, QA, branding, and launch campaign should run as one coordinated engagement.",
          features: ["One combined scope", "Single timeline", "Delivered with En'nobler"],
          cta: { label: "See Bundles", to: "#bundles" },
        },
      ],
    },
    // PROJECT-BASED
    {
      type: "pricingTable",
      anchor: "project-based",
      eyebrow: "Project Based",
      title: "One-time marketing projects with fixed scope and clear delivery.",
      subtitle: "Choose a clearly defined creative or marketing service with an estimated starting price and a direct next step.",
      columns: ["Service", "Starting Price", "What's Included"],
      rows: [
        { name: "Logo Design", price: "$300–$800", body: "Logo concepts, selected variations, and a basic brand guide." },
        {
          name: "Brand Identity System",
          price: "$1,200–$4,000",
          body: "Logo system, colours, typography, and practical visual guidelines.",
        },
        {
          name: "Website UI Design",
          price: "$1,500–$6,000",
          body: "UX structure, responsive UI screens, and an interactive prototype.",
        },
        {
          name: "Ad Creative Pack",
          price: "$400–$1,200",
          body: "5–10 static, motion, or AI-aided advertisement creatives across agreed formats.",
        },
        {
          name: "Video / Reel Production",
          price: "$120–$300 each",
          body: "Short-form video, motion graphics, editing, and social-ready delivery.",
        },
        {
          name: "AI Video / AI Advertisement",
          price: "From $500",
          body: "AI-assisted concept development, visual generation, editing, and campaign adaptation.",
        },
        {
          name: "Landing Page Design",
          price: "$800–$2,500",
          body: "Conversion-focused page design with UX structure and a copy outline.",
        },
      ],
      custom: {
        eyebrow: "Custom",
        title: "Custom Creative Project",
        price: "Custom quote",
        body: "For launches that combine several services above — or a creative requirement that is not on the list at all. We scope it as one project and quote it as one package.",
        features: [
          "Any mix of brand, design, video, and campaign work",
          "One scope, one timeline, one price",
          "Revision rounds agreed upfront",
        ],
        ctas: [{ label: "Request Custom Quote", to: "#enquiry-form", model: "Project-Based" }],
      },
      disclaimer: DISCLAIMER,
    },
    // RETAINER
    {
      type: "engagement",
      anchor: "retainer-model",
      eyebrow: "Retainer Model",
      title: "Monthly marketing support for brands that need steady momentum.",
      subtitle:
        "Choose a consistent monthly engagement for content production, campaign support, platform management, and continuous creative improvement.",
      tightBottom: true,
      plans: [
        {
          badge: "Starter",
          name: "Starter Growth",
          price: "$1,200 / month",
          tagline: "Consistent foundational content and platform support for growing brands.",
          features: [
            "8 short-form videos",
            "20 social media posts",
            "Monthly content planning",
            "Management of 1 platform",
            "Basic creative reporting",
            "AI-aided creative support where suitable",
          ],
          cta: { label: "Book Scoping Call", to: "/contact" },
        },
        {
          badge: "Growth",
          name: "Growth Accelerator",
          price: "$2,500 / month",
          tagline: "Higher content volume, campaign execution, and structured growth support.",
          features: [
            "12–16 short-form videos",
            "30 social media posts",
            "Campaign and funnel strategy",
            "Ad creative development",
            "Management of 2 platforms",
            "Monthly performance report",
            "AI-assisted video and advertisement production",
          ],
          cta: { label: "Book Scoping Call", to: "/contact" },
          highlighted: true,
          popular: "Most Popular",
        },
        {
          badge: "Scale",
          name: "Scale Engine",
          price: "$5,000 / month",
          tagline: "Full-scale content, paid media, optimisation, and reporting support for ambitious growth.",
          features: [
            "20+ videos or reels",
            "Multi-format campaign content",
            "Paid advertising support",
            "Funnel optimisation",
            "Conversion analytics",
            "Management of up to 3 platforms",
            "Ongoing AI-aided creative experimentation",
          ],
          cta: { label: "Talk to Growth Team", to: "/contact" },
        },
      ],
    },
    // RETAINER — CUSTOM BAND
    {
      type: "pricingTable",
      custom: {
        eyebrow: "Custom",
        title: "Custom Retainer",
        price: "Custom monthly pricing",
        body: "When your content volume, channel mix, or campaign calendar does not fit one of the three tiers, we build the monthly scope around what you actually publish.",
        features: ["Output volume set to your calendar", "Choose your platforms and formats", "Reviewed and rebalanced each quarter"],
        ctas: [{ label: "Build My Retainer", to: "#enquiry-form", model: "Monthly Retainer" }],
      },
      disclaimer: DISCLAIMER,
    },
    // TEAM HIRING
    {
      type: "engagement",
      anchor: "team-hiring",
      eyebrow: "Team Hiring",
      title: "Dedicated creative and marketing talent for long-term support needs.",
      subtitle:
        "For businesses that need flexible access to creative, multimedia, marketing, and growth specialists without building a full internal team.",
      tightBottom: true,
      plans: [
        {
          badge: "Creative Support",
          name: "Creative Support Team",
          price: "From $3,500/month",
          tagline: "Ongoing brand and content support for businesses that need consistent creative output.",
          features: ["Graphic Designer", "Content Creator", "Copywriting support", "Social media creatives", "Brand consistency support"],
          cta: { label: "Talk to Sales", to: "/contact" },
        },
        {
          badge: "Multimedia Support",
          name: "Multimedia Support Team",
          price: "From $5,000/month",
          tagline: "A focused multimedia team for short-form video, motion design, and AI-aided visual production.",
          features: ["Video Editor", "Motion Designer", "Graphic Designer", "Short-form video production", "AI-aided visual production"],
          cta: { label: "Talk to Sales", to: "/contact" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Growth Team",
          name: "Marketing Growth Team",
          price: "From $7,500/month",
          tagline: "Embedded marketing capacity for planning, campaign support, content execution, and monthly optimisation.",
          features: ["Marketing Strategist", "Content Specialist", "Designer", "Campaign support", "Monthly optimisation"],
          cta: { label: "Talk to Sales", to: "/contact" },
        },
        {
          badge: "Operating Team",
          name: "Full Growth Operating Team",
          price: "From $12,000/month",
          tagline: "End-to-end creative and marketing support for brands that need a dedicated long-term growth function.",
          features: [
            "Dedicated marketing lead",
            "Creative and multimedia team",
            "Campaign management",
            "Paid media support",
            "Analytics and optimisation",
            "AI-driven growth experiments",
          ],
          cta: { label: "Talk to Sales", to: "/contact" },
        },
        {
          badge: "Custom",
          name: "Custom Team Composition",
          price: "Custom monthly pricing",
          tagline:
            "Pick the exact roles, seniority mix, and engagement length you need — part-time, full-time, or scaling up around a launch and back down afterwards.",
          features: ["Choose roles, seniority, and team size", "Part-time or full-time allocation", "Scale up or down between campaigns"],
          cta: { label: "Design My Team", to: "#enquiry-form", model: "Dedicated Team" },
        },
      ],
    },
    // TEAM HIRING — DISCLAIMER
    {
      type: "pricingTable",
      disclaimer: DISCLAIMER,
    },
    // PERFORMANCE-BASED
    {
      type: "engagement",
      anchor: "performance-based",
      eyebrow: "Performance-Based",
      title: "Performance-based marketing aligned with agreed business outcomes.",
      subtitle:
        "Available for selected engagements where the scope, baseline, attribution model, responsibilities, and KPIs can be clearly agreed. Pricing is not charged purely on a per-lead basis.",
      tightBottom: true,
      plans: [
        {
          badge: "Campaign Performance",
          name: "Campaign Performance Plan",
          price: "Base fee + agreed performance component",
          tagline: "For selected campaigns with measurable goals and clearly defined attribution.",
          features: ["Conversion-rate improvement", "Cost-per-acquisition improvement", "Campaign engagement", "Qualified traffic growth", "Funnel performance"],
          cta: { label: "Discuss Performance Goals", to: "#perf-form" },
        },
        {
          badge: "Content Growth",
          name: "Content Growth Plan",
          price: "Custom KPI-based pricing",
          tagline: "For brands seeking measurable improvement from consistent content and campaign execution.",
          features: ["Reach and engagement improvement", "Video completion rate", "Audience growth", "Content-driven website traffic", "Campaign interaction"],
          cta: { label: "Request Performance Proposal", to: "#perf-form" },
          highlighted: true,
          popular: "KPI Focused",
        },
        {
          badge: "Growth Optimisation",
          name: "Growth Optimisation Partnership",
          price: "Custom commercial model",
          tagline: "For longer-term growth engagements with an agreed baseline, attribution method, and review process.",
          features: ["Funnel conversion", "Return on ad spend", "Customer acquisition efficiency", "Revenue contribution", "Campaign growth targets"],
          cta: { label: "Talk to Growth Team", to: "#perf-form" },
        },
      ],
    },
    // PERFORMANCE-BASED — DISCLAIMER
    {
      type: "pricingTable",
      disclaimer:
        "Performance outcomes are not guaranteed. The commercial model is confirmed only after both parties agree on the baseline, KPI definitions, attribution method, responsibilities, reporting process, and review period.",
    },
    // PERFORMANCE-BASED ENQUIRY
    {
      type: "performanceEnquiry",
      anchor: "perf-form",
      eyebrow: "Performance-Based enquiry",
      title: "Tell us the outcome you want.",
      subtitle:
        "This form is dedicated to performance-based marketing enquiries. The engagement model is already selected, so the conversation can focus on your KPI, current baseline, attribution, and timeline.",
      serviceContext: "Marketing",
      engagementModel: "Performance-Based",
      planOptions: ["Campaign Performance Plan", "Content Growth Plan", "Growth Optimisation Partnership", "Not sure yet — recommend one"],
      formEyebrow: "Enquiry form",
      formTitle: "Performance-Based Proposal",
      infoEyebrow: "Before we quote",
      infoTitle: "What we agree first.",
      infoItems: [
        {
          title: "The baseline",
          body: "Where your conversion rate, CPA, reach, or ROAS sits today, measured the same way by both sides.",
        },
        { title: "The attribution model", body: "Which platform, tool, or report decides whether a result counts." },
        {
          title: "Responsibilities",
          body: "What sits with Oolo and what stays with your team — budget, approvals, landing pages, sales follow-up.",
        },
        { title: "The review period", body: "How often results are reviewed and when the commercial component is settled." },
      ],
      infoNote: {
        label: "Typical metrics:",
        body: "conversion-rate improvement, cost-per-acquisition, return on ad spend, qualified traffic, engagement, video completion rate, audience growth, and funnel performance.",
      },
      disclaimer:
        "Performance outcomes are not guaranteed. The commercial model is confirmed only after both parties agree on the baseline, KPI definitions, attribution method, responsibilities, reporting process, and review period.",
    },
    // BUNDLES
    {
      type: "pricingTable",
      anchor: "bundles",
      eyebrow: "Bundle Packages",
      title: "Combined delivery bundles.",
      subtitle:
        "For brands that want the product built, tested, branded, and launched as one coordinated engagement instead of separate projects — delivered together with En'nobler.",
      columns: ["Package", "Price", "What's Included"],
      rows: [
        {
          name: "Launch Accelerator",
          price: "$12,000 – $20,000",
          body: "SaaS development + QA setup + Branding + Marketing launch campaign",
        },
      ],
      custom: {
        title: "Want the build, the brand, and the launch handled as one package?",
        body: "Tell us your product stage and target launch date and we will shape a bundle around it, with a single scope and a single timeline.",
        ctas: [
          { label: "Request Bundle Proposal", to: "#enquiry-form", model: "Bundle Package" },
          { label: "Talk to us", to: "#final" },
        ],
      },
      disclaimer: DISCLAIMER,
    },
    // COMPARISON
    {
      type: "features",
      anchor: "comparison",
      eyebrow: "Comparison",
      title: "Compare what each pricing model is meant for.",
      subtitle: "Choose the option that aligns with how much support you need.",
      columns: 4,
      items: [
        {
          title: "Project-Based",
          body: "Fixed deliverable · Fixed timeline · One-time payment · Best for clearly defined creative projects.",
        },
        {
          title: "Monthly Retainer",
          body: "Ongoing monthly execution · Recurring support · Monthly pricing · Best for consistent content and campaigns.",
        },
        {
          title: "Dedicated Team",
          body: "Embedded marketing capacity · Long-term collaboration · Monthly team pricing · Best for ongoing delivery needs.",
        },
        {
          title: "Performance-Based",
          body: "Agreed measurable outcomes · Base fee plus KPI component · Custom commercial structure · Best for selected measurable campaigns.",
        },
      ],
    },
    // WHAT IS INCLUDED
    {
      type: "features",
      eyebrow: "What is Included",
      title: "What clients can expect from Oolo pricing.",
      columns: 3,
      numbered: true,
      items: [
        {
          title: "Strategic Clarity",
          body: "Each engagement begins with a clear objective, audience, scope, deliverables, and success direction so expectations remain transparent from the start.",
        },
        {
          title: "Consistent Creative Delivery",
          body: "Brand-aligned design, content, video, campaigns, and AI-aided creative support are delivered through the selected engagement model.",
        },
        {
          title: "Flexible, Transparent Support",
          body: "Choose a fixed project, monthly retainer, dedicated team, or performance-based model with clear deliverables, reviews, and room to adapt as needs evolve.",
        },
      ],
    },
    // DECISION GUIDE
    {
      type: "linkCards",
      anchor: "decision-guide",
      eyebrow: "Decision Guide",
      title: "A simple guide for selecting the right Oolo pricing model.",
      columns: 3,
      items: [
        {
          title: "Need a one-time creative project?",
          body: "Choose Project-Based for branding, launch, campaign, design, video, or other fixed-scope creative delivery.",
          to: "#project-based",
        },
        {
          title: "Need steady monthly marketing support?",
          body: "Choose Monthly Retainer for continuous content, campaign execution, platform support, and ongoing optimisation.",
          to: "#retainer-model",
        },
        {
          title: "Need dedicated creative or marketing talent?",
          body: "Choose Dedicated Team for embedded design, multimedia, marketing, and strategic delivery capacity.",
          to: "#team-hiring",
        },
        {
          title: "Have measurable campaign or growth goals?",
          body: "Choose Performance-Based for selected engagements linked to clearly agreed KPIs, baselines, and responsibilities.",
          to: "#performance-based",
        },
        {
          title: "Launching a product, not just a campaign?",
          body: "Choose Bundle Packages when the build, QA, branding, and launch campaign should be delivered as one engagement.",
          to: "#bundles",
        },
        {
          title: "Not sure which model fits?",
          body: "Describe the requirement and we will recommend the model — including whether a smaller first project makes more sense.",
          to: "#enquiry-form",
        },
      ],
    },
    // FAQ
    {
      type: "faq",
      anchor: "faq",
      eyebrow: "Pricing FAQ",
      title: "Common questions about working with Oolo.",
      subtitle: "Clear answers about project pricing, retainers, teams, AI-aided creative work, and performance-based engagements.",
      items: [
        {
          q: "Are project prices fixed?",
          a: "The listed figures are starting ranges for guidance. Final pricing is confirmed after reviewing scope, quantity, complexity, timeline, revisions, and production requirements.",
        },
        {
          q: "What affects the final project price?",
          a: "Pricing may change based on deliverable volume, campaign complexity, platforms, creative formats, production needs, revision rounds, urgency, and required strategic support.",
        },
        {
          q: "Can monthly retainers be customised?",
          a: "Yes. Retainers can be adjusted after scoping to match content volume, channel mix, campaign activity, reporting needs, and the level of ongoing support required.",
        },
        {
          q: "Are the video and post quantities fixed?",
          a: "The quantities define the standard package scope. They may be rebalanced when different formats require significantly different levels of production effort.",
        },
        {
          q: "Does Oolo provide AI video and AI advertisement services?",
          a: "Yes. Oolo can support AI-aided concept development, visual generation, video production, creative adaptation, and advertising assets where suitable for the brand and campaign.",
        },
        {
          q: "Can we hire a dedicated creative or marketing team?",
          a: "Yes. Dedicated options can include designers, content specialists, video editors, motion designers, marketers, strategists, and campaign support based on the agreed team structure.",
        },
        {
          q: "How does performance-based pricing work?",
          a: "It is available for selected engagements where both parties agree on the baseline, KPI definitions, attribution method, responsibilities, reporting process, and review period.",
        },
        {
          q: "Is performance-based pricing charged per lead?",
          a: "No. It is not automatically a pay-per-lead model. The commercial structure may include a base fee plus an agreed KPI-linked component.",
        },
        {
          q: "What KPIs can be used?",
          a: "Possible measures include conversion-rate improvement, acquisition efficiency, qualified traffic, engagement, video completion, funnel performance, audience growth, or return on ad spend.",
        },
        {
          q: "Can we start with a smaller project?",
          a: "Yes. A focused one-time creative project can be used to begin the relationship before moving to a retainer, dedicated team, or selected performance-based engagement.",
        },
      ],
    },
    // FINAL CTA
    {
      type: "cta",
      anchor: "final",
      eyebrow: "Get Started",
      title: "Ready to choose how you work with Oolo?",
      body: "Tell us your marketing requirement and we will recommend the most suitable project, retainer, team, bundle, or performance-based model.",
      pills: [
        { label: "Project-Based", to: "#enquiry-form", model: "Project-Based" },
        { label: "Bundle Package", to: "#enquiry-form", model: "Bundle Package" },
        { label: "Monthly Retainer", to: "#enquiry-form", model: "Monthly Retainer" },
        { label: "Dedicated Team", to: "#enquiry-form", model: "Dedicated Team" },
        { label: "Performance-Based", to: "#enquiry-form", model: "Performance-Based" },
      ],
      tightBottom: true,
    },
    {
      type: "features",
      columns: 3,
      compact: true,
      items: [
        {
          title: "Start with a paid discovery sprint",
          body: "A short fixed-fee scoping engagement that ends with a written creative direction, channel plan, and deliverable list. If you proceed to delivery, the discovery fee is credited toward the project.",
        },
        {
          title: "Scope, revisions, and price agreed upfront",
          body: "The proposal fixes deliverables, revision rounds, timeline, and price. Anything outside it is quoted and approved separately — never added to your invoice silently.",
        },
        {
          title: "Monthly engagements stay flexible",
          body: "Retainers and dedicated teams are reviewed at agreed checkpoints. Scale up for a launch, scale down after it, or stop at the end of a cycle — no long lock-in.",
        },
      ],
    },
    {
      type: "generalEnquiry",
      anchor: "enquiry-form",
      tightTop: true,
      modelOptions: [
        "Not sure yet — recommend one",
        "Project-Based",
        "Bundle Package",
        "Monthly Retainer",
        "Dedicated Team",
        "Performance-Based",
      ],
      budgetOptions: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $12,000", "$12,000 – $20,000", "$20,000+", "Not defined yet"],
      startOptions: ["Immediately", "Within 1 month", "1 – 3 months", "Just exploring"],
      formEyebrow: "Enquiry form",
      formTitle: "Request a proposal.",
      formNote: "Sending this does not commit you to anything. You will receive a written proposal with fixed scope, revision rounds, and price before any work or payment.",
      infoEyebrow: "What happens next",
      infoTitle: "No obligation, no pressure.",
      infoItems: [
        { title: "Within 1 business day", body: "We reply and ask any clarifying questions about scope and timeline." },
        { title: "A 30-minute call", body: "We walk through the brief, the channels, and what success looks like." },
        { title: "A written proposal", body: "Fixed scope, deliverables, revision rounds, timeline, and price." },
      ],
      infoNote: {
        label: "Prefer email?",
        body: "Write to hello@en-nobler.com and mention the pricing model you are considering.",
      },
    },
  ],
};
