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
        { tag: "En'nobler Software Services", title: "Corporate Website Transformation", body: "Redesigned a company website structure with stronger navigation, clearer service positioning, better content flow, and QA-supported delivery validation.", metric: "UI/UX · Web · QA", to: "/contact", cover: "/showcase/cover-ennobler.webp" },
        { tag: "Quality Assurance", title: "QA Process Improvement System", body: "Structured testing workflow for release confidence, defect tracking, and regression coverage.", metric: "QA Result", to: "/contact", cover: "/showcase/cover-qa.webp" },
        { tag: "Oolo Marketing Services", title: "Digital Growth Campaign System", body: "Connected campaign planning, automation, analytics, and performance review into one workflow.", metric: "Growth Result", to: "/contact", cover: "/showcase/cover-oolo.webp" },
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
