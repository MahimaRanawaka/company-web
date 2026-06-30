import type { PageContent } from "../types";

export const ennoblerServices: PageContent = {
  title: "En'nobler — Services",
  sections: [
    {
      type: "hero",
      eyebrow: "Services",
      title: "Specialized services for engineering, quality, and digital transformation.",
      subtitle:
        "A focused set of engineering, quality, automation, and transformation services designed to help businesses build reliable digital products and scalable technology systems.",
      primaryCta: { label: "Start a Project", to: "/contact" },
      secondaryCta: { label: "See Our Work", to: "/portfolio" },
      chips: ["Engineering", "QA", "Cloud", "AI"],
      image: { src: "/showcase/ennobler-services.webp", alt: "Software engineering systems — connected architecture, modules, and reliability" },
    },
    {
      type: "services",
      eyebrow: "What We Do",
      title: "Our Core Services",
      source: "live",
    },
    {
      type: "steps",
      eyebrow: "How We Deliver Value",
      title: "From business need to reliable delivery",
      items: [
        { title: "Discover", body: "We understand your business, users, workflows, and challenges." },
        { title: "Plan", body: "We define the right solution structure, scope, and roadmap." },
        { title: "Build", body: "We build with quality, transparency, and practical delivery focus." },
        { title: "Test & Deploy", body: "We validate the solution and deploy with confidence." },
        { title: "Support & Grow", body: "We provide ongoing improvement, support, and optimization." },
      ],
    },
    {
      type: "features",
      eyebrow: "Our operating model",
      title: "Human-Synchronized AI-Aided Workflow",
      subtitle:
        "AI accelerates every part of our delivery — but it is always synchronized to human direction. Four qualities our engineers bring that no AI can replicate.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Critical Thinking", body: "Evaluating complexity, trade-offs, and context that data alone cannot surface." },
        { title: "Intuition", body: "Reading what a client or a user actually needs — beyond what they say." },
        { title: "Creativity", body: "Generating ideas that are genuinely new — not recombinations of what already exists." },
        { title: "Adaptation", body: "Responding to change in real time — pivoting when the plan meets reality." },
      ],
    },
    {
      type: "cta",
      eyebrow: "Start a project",
      title: "Ready to Build Something Great?",
      body: "Tell us what you are working on — we will scope it, staff it, and ship it. From a single feature to a full product build, we move fast without cutting corners.",
      cta: { label: "Get Started", to: "/contact" },
    },
  ],
};
