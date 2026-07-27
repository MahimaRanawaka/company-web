import type { PageContent } from "../types";

const DISCLAIMER =
  "Starting prices are guidance only. Final pricing depends on scope, requirements, complexity, timeline, integrations, and QA depth.";

export const ennoblerPricing: PageContent = {
  title: "En'nobler — Pricing",
  sections: [
    {
      type: "hero",
      eyebrow: "Pricing",
      title: "Clear Pricing Models for Software, QA, and Digital Delivery",
      subtitle:
        "Choose a practical engagement model based on how you want to work: a fixed project, an ongoing monthly retainer, a dedicated delivery team, or measurable performance-based outcomes.",
      primaryCta: { label: "Explore Pricing Models", to: "#which-model" },
      secondaryCta: { label: "Talk to us", to: "#contact" },
      chips: ["Project-Based", "Retainer Model", "Team Hiring", "Performance-Based"],
    },
    {
      type: "stats",
      items: [
        { value: "4", label: "Engagement Models" },
        { value: "QaaS", label: "Flexible QA Delivery" },
        { value: "IT", label: "Software & Technology" },
      ],
    },
    // WHICH MODEL
    {
      type: "engagement",
      anchor: "which-model",
      eyebrow: "Which pricing model is best for you?",
      title: "Choose the model that matches your requirement",
      subtitle:
        "Start with how you want to work with En'nobler. Each model below explains when it fits best and takes you directly to the relevant section.",
      plans: [
        {
          badge: "01",
          name: "Project-Based",
          tagline: "Best for clearly defined websites, MVPs, portals, integrations, QA audits, and one-time technical initiatives.",
          features: [],
          cta: { label: "Go to Project Pricing →", to: "#project" },
        },
        {
          badge: "02",
          name: "Retainer Model",
          tagline: "Best for ongoing support, monthly QA, maintenance, technical improvements, and a predictable delivery rhythm.",
          features: [],
          cta: { label: "Go to Retainers →", to: "#retainer" },
        },
        {
          badge: "03",
          name: "Team Hiring",
          tagline: "Best when you need dedicated delivery capacity like a Developer + QA pair, a product pod, or an AI product team.",
          features: [],
          cta: { label: "Go to Team Hiring →", to: "#team" },
        },
        {
          badge: "04",
          name: "Performance-Based",
          tagline: "Best for selected QA or automation engagements with measurable outcomes such as test coverage or defect reduction.",
          features: [],
          cta: { label: "Go to Outcomes →", to: "#performance" },
        },
        {
          badge: "Bundle",
          name: "Bundle Packages",
          tagline: "Best when product build, QA, branding, and the launch campaign should run as one coordinated engagement.",
          features: [],
          cta: { label: "See Bundles →", to: "#bundles" },
        },
      ],
    },
    // PROJECT-BASED
    {
      type: "pricingTable",
      anchor: "project",
      eyebrow: "01 — Project-Based",
      title: "Project-Based Pricing",
      subtitle:
        "Best for clearly defined websites, software builds, MVPs, QA audits, integrations, and digital transformation projects with a fixed scope and timeline.",
      columns: ["Service / Project Type", "Starting Price", "What is included", "Best for"],
      rows: [
        {
          name: "Website / Landing Page",
          price: "From $800",
          body: "Requirement clarification, UI structure, development, basic QA, launch support",
          bestFor: "Small businesses, campaign pages, early-stage brands",
        },
        {
          name: "Business Web Platform",
          price: "From $1,500",
          body: "Discovery, UI/UX, frontend and backend development, QA testing, deployment support",
          bestFor: "Growing businesses and operational platforms",
        },
        {
          name: "MVP / SaaS Product",
          price: "From $3,000",
          body: "Product discovery, scalable architecture, advanced development, QA, release preparation",
          bestFor: "Startups and product teams",
        },
        {
          name: "API / Integration Project",
          price: "Custom",
          body: "API planning, integration development, validation, documentation, QA support",
          bestFor: "Businesses connecting internal or external systems",
        },
        {
          name: "QA Audit / Test Sprint",
          price: "From $1,000",
          body: "QA review, test coverage assessment, defect analysis, release-readiness report",
          bestFor: "Teams seeking QA confidence before release",
        },
      ],
      custom: {
        eyebrow: "Custom",
        title: "Custom Project Package",
        price: "Custom quote",
        body: "For requirements that combine several of the above — or none of them exactly. We scope it as one project and price it as one package.",
        features: ["Any mix of web, product, API, and QA work", "Single scope document and timeline", "Fixed proposal before work starts"],
        ctas: [{ label: "Request Custom Quote", to: "#contact" }],
      },
      disclaimer: DISCLAIMER,
    },
    // RETAINER
    {
      type: "engagement",
      anchor: "retainer",
      eyebrow: "02 — Retainer Model",
      title: "Retainer Model",
      subtitle:
        "Best for businesses that need continuous support, QA coverage, technical improvements, optimization, and a predictable monthly delivery rhythm.",
      tightBottom: true,
      plans: [
        {
          badge: "Support",
          name: "Support Retainer",
          price: "$500 / month",
          tagline: "For ongoing website updates, maintenance, bug fixes, and small improvements.",
          features: ["Monthly support hours", "Bug fixing", "UI/content updates", "Basic QA checks", "Monthly summary"],
          cta: { label: "Explore Packages", to: "/contact" },
        },
        {
          badge: "Growth",
          name: "Growth Retainer",
          price: "$1,000 / month",
          tagline: "For companies that need software improvement and technical support every month.",
          features: ["Website/product updates", "QA support", "Landing page support", "Performance review", "Release assistance"],
          cta: { label: "Explore Packages", to: "/contact" },
          highlighted: true,
          popular: "Most Practical",
        },
        {
          badge: "QaaS",
          name: "QaaS Retainer",
          price: "$2,000 / month",
          tagline: "For SaaS, APIs, AI systems, and release teams that need structured QA month after month.",
          features: ["Regression testing", "API testing", "Automation maintenance", "QA reporting", "Release readiness checks"],
          cta: { label: "Explore QaaS", to: "/ennobler/qaas" },
        },
      ],
    },
    {
      type: "pricingTable",
      custom: {
        eyebrow: "Custom",
        title: "Custom Retainer",
        price: "Custom monthly pricing",
        body: "When support, QA, and product work do not fit neatly into one tier, we build the monthly scope around your actual delivery rhythm.",
        features: ["Hours and coverage set to your load", "Mix support, QA, and improvement work", "Reviewed and adjusted each quarter"],
        ctas: [{ label: "Build My Retainer", to: "#contact" }],
      },
      disclaimer: DISCLAIMER,
    },
    // TEAM HIRING
    {
      type: "engagement",
      anchor: "team",
      eyebrow: "03 — Team Hiring",
      title: "Team Hiring",
      subtitle:
        "Best for companies that need extra delivery capacity without hiring a full internal team — across development, QA, design, automation, and product delivery.",
      tightBottom: true,
      columns: 4,
      plans: [
        {
          badge: "Single",
          name: "Single Specialist",
          price: "From $1,200/month",
          tagline: "One skilled expert for a focused delivery need.",
          features: ["QA Engineer", "UI/UX Designer", "Frontend / Backend Developer", "Cloud / DevOps Specialist"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
        {
          badge: "Core Pair",
          name: "Developer + QA",
          price: "From $3,000/month",
          tagline: "Practical cross-functional delivery for growing product teams.",
          features: ["1 Developer", "1 QA Engineer", "Weekly planning", "Release support"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
        {
          badge: "Pod",
          name: "Product Team",
          price: "From $6,000/month",
          tagline: "A small delivery pod for product, software, and QA work.",
          features: ["Coordinator / PM", "Designer", "Developer", "QA Engineer"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
        {
          badge: "Advanced",
          name: "AI Product Team",
          price: "Custom monthly pricing",
          tagline: "For AI-assisted product or automation-focused delivery needs.",
          features: ["AI Engineer", "Software Developer", "QA Engineer", "Delivery coordination"],
          cta: { label: "Discuss Team", to: "/contact" },
        },
      ],
    },
    {
      type: "pricingTable",
      custom: {
        eyebrow: "Custom",
        title: "Custom Team Composition",
        price: "Custom monthly pricing",
        body: "Pick the exact roles, seniority mix, and engagement length you need — part-time, full-time, or scaling up and down by phase.",
        features: ["Choose roles, seniority, and team size", "Part-time or full-time allocation", "Scale up or down between phases"],
        ctas: [{ label: "Design My Team", to: "#contact" }],
      },
      disclaimer: DISCLAIMER,
    },
    // PERFORMANCE-BASED
    {
      type: "engagement",
      anchor: "performance",
      eyebrow: "04 — Performance-Based",
      title: "Performance-Based Pricing",
      subtitle: "For selected QA and automation engagements where commercial terms can be linked to agreed measurable outcomes.",
      tightBottom: true,
      plans: [
        {
          badge: "Quality",
          name: "Quality Improvement Plan",
          tagline: "Structured around measurable quality outcomes.",
          features: [
            "Test coverage improvement",
            "Defect reduction target",
            "Regression coverage growth",
            "Release confidence improvement",
            "Evidence-based reporting",
          ],
          cta: { label: "Discuss Performance Goals", to: "#perf-form" },
        },
        {
          badge: "Automation",
          name: "Automation Outcome Plan",
          tagline: "Designed to reduce manual effort through automation.",
          features: [
            "Automation coverage target",
            "Manual effort reduction",
            "Cycle-time improvement",
            "Milestone-based reviews",
            "Outcome-linked payment",
          ],
          cta: { label: "Request Outcome Proposal", to: "#perf-form" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Maturity",
          name: "QA Maturity Improvement",
          tagline: "For improving process quality and delivery reliability.",
          features: [
            "QA maturity baseline",
            "Process improvement targets",
            "Release acceleration",
            "Governance and reporting",
            "Custom success model",
          ],
          cta: { label: "Discuss Performance Goals", to: "#perf-form" },
        },
      ],
    },
    {
      type: "pricingTable",
      disclaimer: DISCLAIMER,
    },
    // PERFORMANCE-BASED ENQUIRY
    {
      type: "performanceEnquiry",
      anchor: "perf-form",
      eyebrow: "Performance-Based enquiry",
      title: "Tell us the outcome you want",
      subtitle:
        "This separate form flow is specifically for performance-based QA, automation, and technical outcome discussions. The engagement model is already selected as Performance-Based, so the conversation can focus on your KPI, current baseline, and timeline.",
      engagementModel: "Performance-Based",
      planFieldLabel: "Service Area",
      planOptions: ["QA Improvement", "Test Automation", "Platform Performance"],
      showCompany: false,
      requiredHints: false,
      baselineLabel: "Current Baseline",
      baselinePlaceholder: "e.g. 35% automation coverage",
      kpiLabel: "Expected KPI / Outcome",
      kpiPlaceholder: "Describe the target outcome you want to achieve.",
      timelineLabel: "Target Timeline",
      timelinePlaceholder: "e.g. 6 months",
      showBudget: false,
      showRequirement: false,
      showAdditionalDetails: false,
      submitLabel: "Request Performance-Based Proposal",
      formEyebrow: "Enquiry form",
      formTitle: "Performance-Based Proposal",
      infoEyebrow: "Before we quote",
      infoTitle: "What we agree first.",
      infoItems: [
        {
          title: "The baseline",
          body: "Where your test coverage, defect rate, or automation coverage sits today, measured the same way by both sides.",
        },
        { title: "The measurement method", body: "Which test suite, tool, or report decides whether a result counts." },
        {
          title: "Responsibilities",
          body: "What sits with En'nobler and what stays with your team — environments, test data, releases, sign-off.",
        },
        { title: "The review period", body: "How often results are reviewed and when the commercial component is settled." },
      ],
      infoNote: {
        label: "Typical metrics:",
        body: "test coverage improvement, automation coverage, defect reduction, release confidence, cycle-time improvement, and QA maturity.",
      },
      disclaimer:
        "Performance outcomes are not guaranteed. The commercial model is confirmed only after both parties agree on the baseline, KPI definitions, measurement method, responsibilities, reporting process, and review period.",
    },
    // BUNDLES
    {
      type: "pricingTable",
      anchor: "bundles",
      eyebrow: "Bundle Packages",
      title: "Combined delivery bundles",
      subtitle:
        "For businesses that want product build, quality assurance, and go-to-market handled as one coordinated engagement instead of separate projects.",
      columns: ["Package", "Price", "What's Included"],
      rows: [
        {
          name: "Launch Accelerator",
          price: "$12,000 – $20,000",
          body: "SaaS development + QA setup + Branding + Marketing launch campaign",
        },
      ],
      custom: {
        title: "Want build, QA, and launch handled as one package?",
        body: "Tell us your product stage and target launch date and we'll shape a bundle around it.",
        ctas: [
          { label: "Request Bundle Proposal", to: "#contact" },
          { label: "Talk to us", to: "#contact" },
        ],
      },
      disclaimer: DISCLAIMER,
    },
    // DECISION GUIDE
    {
      type: "linkCards",
      anchor: "guide",
      eyebrow: "Decision Guide",
      title: "Not sure which model fits?",
      subtitle: "A quick guide to which pricing model matches your requirement.",
      columns: 3,
      items: [
        { title: "One-time website, app, MVP, or platform", body: "→ Project-Based", to: "#project" },
        { title: "Continuous website, product, or technical support", body: "→ Retainer Model", to: "#retainer" },
        { title: "Monthly QA support or regression testing", body: "→ QaaS Retainer", to: "#retainer" },
        { title: "Extra developers, QA engineers, or specialists", body: "→ Team Hiring", to: "#team" },
        { title: "Selected QA goals with measurable outcomes", body: "→ Performance-Based", to: "#performance" },
        { title: "Build, QA, branding, and launch together", body: "→ Bundle Packages", to: "#bundles" },
      ],
      footer: {
        body: "Still unsure? Describe the requirement and we'll recommend the model — and tell you if a smaller first engagement makes more sense.",
        cta: { label: "Talk to En'nobler", to: "#contact" },
      },
    },
    // PROCESS
    {
      type: "steps",
      eyebrow: "Process",
      title: "How Pricing Works",
      items: [
        { title: "Understand", body: "We clarify your business goal, technical need, timeline, and expected outcome." },
        { title: "Recommend Model", body: "We suggest project-based, retainer, team hiring, or performance-based pricing." },
        { title: "Define Scope", body: "We confirm deliverables, responsibilities, support level, and measurable success metrics." },
        { title: "Confirm Capacity", body: "We agree on timeline, team involvement, communication rhythm, and delivery checkpoints." },
        { title: "Start Delivery", body: "Work begins with transparent tracking, progress updates, and first review milestones." },
      ],
    },
    // FAQ
    {
      type: "faq",
      eyebrow: "Pricing FAQ",
      title: "Common Pricing Questions",
      items: [
        {
          q: "Are the starting prices fixed?",
          a: "No. Starting prices are indicative only and are finalized after scope review.",
        },
        {
          q: "What changes the final project price?",
          a: "The final price depends on the scope, integrations, timeline, technical complexity, and required QA depth.",
        },
        {
          q: "Can we start with a QA audit?",
          a: "Yes. A QA audit or test sprint can be used as a starting engagement before moving into a retainer or team model.",
        },
        {
          q: "Can QaaS be monthly?",
          a: "Yes. QaaS can be delivered through the monthly retainer model with regression testing, API testing, and QA reporting.",
        },
        {
          q: "Can we hire a Developer + QA team?",
          a: "Yes. Developer + QA is one of the core dedicated team combinations available on a monthly basis.",
        },
        {
          q: "How is performance-based QA measured?",
          a: "It can be measured against agreed KPIs such as test coverage improvement, automation coverage, defect reduction, release confidence, or QA maturity improvement.",
        },
      ],
    },
    // CONTACT
    {
      type: "cta",
      anchor: "contact",
      eyebrow: "Get Started",
      title: "Need Help Choosing a Pricing Structure?",
      body: "Tell us your requirement and we'll recommend whether a fixed project, a monthly retainer, dedicated team hiring, or a performance-based engagement fits best.",
      tightBottom: true,
    },
    {
      type: "features",
      columns: 3,
      compact: true,
      items: [
        {
          title: "Start with a paid discovery sprint",
          body: "A short fixed-fee scoping engagement that ends with a written scope, architecture direction, and QA plan. If you proceed to delivery, the discovery fee is credited toward the project.",
        },
        {
          title: "Scope and price locked before work starts",
          body: "The proposal fixes deliverables, price, timeline, and QA depth. Anything outside it is quoted and approved separately — never added to your invoice silently.",
        },
        {
          title: "Monthly engagements stay flexible",
          body: "Retainers and team hiring are reviewed at agreed checkpoints. Scale up, scale down, or stop at the end of a cycle — no long lock-in.",
        },
      ],
    },
    {
      type: "generalEnquiry",
      tightTop: true,
      modelOptions: [
        "Not sure yet — recommend one",
        "Project-Based",
        "Bundle Package",
        "Retainer Model",
        "Team Hiring",
        "Performance-Based",
      ],
      budgetOptions: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $12,000", "$12,000 – $20,000", "$20,000+", "Not defined yet"],
      startOptions: ["Immediately", "Within 1 month", "1 – 3 months", "Just exploring"],
      formEyebrow: "Enquiry form",
      formTitle: "Request a Proposal",
      requirementLabel: "What do you need built or tested?",
      requirementPlaceholder: "Describe your product, current stage, and what you want to achieve.",
      formNote: "Sending this does not commit you to anything. You will receive a written proposal with fixed scope and price before any work or payment.",
      infoEyebrow: "What happens next",
      infoTitle: "No obligation, no pressure",
      infoItems: [
        { title: "Within 1 business day", body: "We reply and ask any clarifying questions." },
        { title: "A 30-minute call", body: "We walk through scope, constraints, and timeline." },
        { title: "A written proposal", body: "Fixed scope, price, timeline, and QA depth." },
      ],
      infoNote: {
        label: "Prefer email?",
        body: "Write to hello@en-nobler.com and mention the pricing model you are considering.",
      },
    },
  ],
};
