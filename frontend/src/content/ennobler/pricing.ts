import type { PageContent } from "../types";

export const ennoblerPricing: PageContent = {
  title: "En'nobler — Pricing",
  sections: [
    {
      type: "hero",
      eyebrow: "Pricing",
      title: "Clear Pricing Models for Software, QA, and Growth Delivery",
      subtitle:
        "Choose a practical engagement model based on how you want to work: a fixed project, an ongoing monthly retainer, or hired delivery capacity. Starting prices give a clear entry point while the final scope is confirmed after review.",
      primaryCta: { label: "Explore Pricing Models", to: "#models" },
      secondaryCta: { label: "Talk to us", to: "/contact" },
    },
    {
      type: "stats",
      items: [
        { value: "3", label: "Engagement Models" },
        { value: "QaaS", label: "Optional Outcomes" },
        { value: "IT + Oolo", label: "Software & Marketing" },
      ],
    },
    // PROJECT-BASED
    {
      type: "engagement",
      anchor: "models",
      eyebrow: "01 — Project-Based",
      title: "Project-Based Pricing",
      subtitle:
        "Best for clearly defined websites, software builds, MVPs, QA audits, launch campaigns, and digital transformation projects with a fixed scope and timeline. Starting prices are a guide; final pricing depends on scope, complexity, timeline, integrations, and QA depth.",
      plans: [
        {
          badge: "Starter",
          name: "Starter Project — from $800",
          tagline: "For small websites, landing pages, early-stage systems, or focused digital improvements.",
          features: ["Requirement clarification", "Basic UI/UX structure", "Core development", "Basic QA validation", "Launch support"],
          cta: { label: "Start a Project", to: "/contact" },
        },
        {
          badge: "Growth",
          name: "Growth Project — from $1,500",
          tagline: "For growing companies that need a complete website, product MVP, service portal, or campaign-ready digital experience.",
          features: ["Discovery and planning", "UI/UX design", "Frontend and backend development", "QA testing", "Deployment support"],
          cta: { label: "Start a Project", to: "/contact" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Custom",
          name: "Custom Build — from $3,000",
          tagline: "For complex platforms, integrations, automation workflows, multi-service builds, or enterprise-level requirements.",
          features: ["Custom technical planning", "Scalable architecture", "Advanced development", "Integration support", "Post-launch improvement plan"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
      ],
    },
    // RETAINER
    {
      type: "engagement",
      eyebrow: "02 — Retainer Model",
      title: "Retainer Model",
      subtitle:
        "Best for businesses that need continuous support, QA coverage, technical improvements, marketing execution, optimization, and a predictable monthly delivery rhythm.",
      plans: [
        {
          badge: "Support",
          name: "Support Retainer — from $500/mo",
          tagline: "For ongoing website updates, maintenance, bug fixes, and small improvements.",
          features: ["Monthly support hours", "Bug fixing", "UI/content updates", "Basic QA checks", "Monthly summary"],
          cta: { label: "Explore Packages", to: "/contact" },
        },
        {
          badge: "Growth",
          name: "Growth Retainer — from $1,000/mo",
          tagline: "For companies that need software improvement and marketing support every month.",
          features: ["Website/product updates", "QA support", "Landing page support", "SEO/content support", "Analytics review"],
          cta: { label: "Explore Packages", to: "/contact" },
          highlighted: true,
          popular: "Most practical",
        },
        {
          badge: "QaaS",
          name: "QaaS Retainer — from $2,000/mo",
          tagline: "For SaaS, APIs, AI systems, and release teams that need structured QA month after month.",
          features: ["Regression testing", "API testing", "Automation maintenance", "QA reporting", "Release readiness checks"],
          cta: { label: "Explore QaaS", to: "/ennobler/qaas" },
        },
      ],
    },
    // TEAM HIRING
    {
      type: "engagement",
      eyebrow: "03 — Team Hiring",
      title: "Team Hiring",
      subtitle:
        "Best for companies that need extra delivery capacity without hiring a full internal team — across development, QA, design, automation, and marketing roles.",
      plans: [
        {
          badge: "Single",
          name: "Single Specialist — from $1,200/mo",
          tagline: "One skilled expert for a focused delivery need.",
          features: ["QA Engineer", "UI/UX Designer", "Frontend / Backend Developer", "Marketing Specialist", "Flexible support scope"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
        {
          badge: "Pod",
          name: "Delivery Pod — from $3,500/mo",
          tagline: "A small cross-functional team for product, software, QA, or growth delivery.",
          features: ["Project coordinator", "Designer", "Developer", "QA engineer", "Marketing support"],
          cta: { label: "Request Proposal", to: "/contact" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Extended",
          name: "Extended Partner Team — from $6,000/mo",
          tagline: "Long-term team support for companies that need software, QA, automation, and marketing execution.",
          features: ["Dedicated team structure", "Weekly planning", "Delivery management", "QA governance", "Strategic reporting"],
          cta: { label: "Request Proposal", to: "/contact" },
        },
      ],
    },
    // DECISION GUIDE
    {
      type: "features",
      eyebrow: "Decision Guide",
      title: "Not sure which model fits?",
      subtitle: "A quick guide to which pricing model matches your requirement.",
      columns: 3,
      items: [
        { title: "One-time website, app, MVP, or platform", body: "→ Project-Based" },
        { title: "Continuous website, product, or marketing support", body: "→ Retainer Model" },
        { title: "Monthly QA support or regression testing", body: "→ Retainer / QaaS" },
        { title: "Extra developers, QA engineers, or marketers", body: "→ Team Hiring" },
        { title: "Selected QA goals with measurable outcomes", body: "→ QaaS note under the selected model" },
        { title: "Software and marketing together", body: "→ Growth Retainer / Bundle" },
      ],
    },
    // QAAS PRICING
    {
      type: "features",
      eyebrow: "En'nobler.QaaS",
      title: "QaaS Pricing Fits Within the Three Main Models",
      subtitle:
        "Quality Assurance as a Service can be a project-based QA audit, a monthly QA retainer, or dedicated QA team hiring. Outcome-based success metrics can be added as a measurement note, not a separate model.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Fixed QA Audit", body: "For QA process review, pre-release test sprint, security review, performance audit, or test coverage assessment." },
        { title: "Monthly QA Retainer", body: "For regression testing, API testing, automation maintenance, QA reporting, and release confidence checks." },
        { title: "Dedicated QA Team", body: "For embedded QA engineers, SDETs, QA managers, and long-term quality ownership inside the client workflow." },
        { title: "Optional Outcome Metrics", body: "Measurable goals such as defect reduction, release acceleration, automation coverage, or QA maturity improvement, discussed as an added success metric." },
      ],
    },
    // BUNDLES
    {
      type: "engagement",
      eyebrow: "Software + Marketing",
      title: "Bundle Options for Technology and Growth",
      subtitle: "For clients who need both digital delivery and growth execution — software, QA, automation, and marketing in one engagement.",
      plans: [
        {
          badge: "Launch",
          name: "Launch Bundle — from $1,000",
          tagline: "For new brands, websites, landing pages, or product launches.",
          features: ["Website or landing page", "Brand-aligned UI", "Basic QA", "Launch content", "Initial campaign setup"],
          cta: { label: "Talk to us", to: "/contact" },
        },
        {
          badge: "Growth",
          name: "Growth Bundle — from $1,500/mo",
          tagline: "For improving an existing product, website, campaign, or digital workflow.",
          features: ["Product improvements", "QA testing", "SEO/content support", "Analytics review", "Landing page updates"],
          cta: { label: "Talk to us", to: "/contact" },
          highlighted: true,
          popular: "Software + marketing",
        },
        {
          badge: "Scale",
          name: "Scale Bundle — from $3,000/mo",
          tagline: "For long-term software, QA, automation, and marketing execution.",
          features: ["Product growth", "QA ecosystem", "Marketing operations", "Automation support", "Monthly strategy review"],
          cta: { label: "Talk to us", to: "/contact" },
        },
      ],
    },
    // PROCESS
    {
      type: "steps",
      eyebrow: "Process",
      title: "How Pricing Works",
      items: [
        { title: "Understand", body: "We clarify your business goal, technical need, timeline, and expected outcome." },
        { title: "Recommend Model", body: "We suggest project-based, retainer, team hiring, or bundle pricing based on your requirement." },
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
        { q: "Are the starting prices fixed?", a: "No. Starting prices give a clear entry point. The final quote depends on scope, complexity, timeline, integrations, content needs, QA depth, and required team capacity." },
        { q: "Can software and marketing be combined?", a: "Yes. You can combine software development, QA, automation, content, SEO, landing pages, and campaign support through a bundle or monthly retainer." },
        { q: "Can we start with a small scope?", a: "Yes. Begin with a small project, QA audit, landing page, or support retainer and expand into a larger engagement when the requirement grows." },
        { q: "Do retainers require long contracts?", a: "Retainer terms can be adjusted based on your requirement. Scope, monthly capacity, reporting rhythm, and support level are confirmed before starting." },
        { q: "Can we hire only one specialist?", a: "Yes. Team hiring can start with one developer, QA engineer, UI/UX designer, or marketing specialist. A delivery pod can be created later if more capacity is needed." },
        { q: "Where does QaaS pricing fit?", a: "QaaS fits inside all three models: project-based QA audits, monthly QA retainers, or dedicated QA team hiring for long-term product quality support." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Get started",
      title: "Need Help Choosing a Pricing Structure?",
      body: "Tell us your requirement and we'll recommend whether a fixed project, a monthly retainer, or team hiring capacity fits best.",
      cta: { label: "Talk to us", to: "/contact" },
    },
  ],
};
