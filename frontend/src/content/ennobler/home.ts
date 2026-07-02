import type { PageContent } from "../types";

export const ennoblerHome: PageContent = {
  title: "En'nobler — Engineering Digital Ecosystems",
  sections: [
    // §3 HERO
    {
      type: "hero",
      eyebrow: "En'nobler — Engineering Digital Ecosystems",
      title: "Engineering Quality for the Agentic Era.",
      subtitle:
        "From SaaS stability to AI intelligence and compliance assurance, we design, build, and test the entire stack — so you ship with confidence, not crossed fingers.",
      primaryCta: { label: "Start a Project", to: "/contact" },
      secondaryCta: { label: "Explore En'nobler.QaaS", to: "/ennobler/qaas" },
      chips: ["QA", "AI", "Cloud", "API", "Build"],
      image: {
        src: "/heroes/ennobler.webp",
        alt: "Byte, the En'nobler engineering mascot, holding a glowing intelligence orb amid software architecture panels",
      },
    },
    {
      type: "marquee",
      items: [
        "Built to Ship",
        "Engineered to Scale",
        "Zero Defect Mindset",
        "AI Powered",
        "Always Delivered",
      ],
    },
    // hero stats band
    {
      type: "stats",
      items: [
        { value: "200+", label: "Projects shipped" },
        { value: "3x", label: "Lower defect rate" },
        { value: "40%", label: "Faster delivery" },
      ],
    },
    // §4 PARTNERS
    {
      type: "partners",
      eyebrow: "Trusted by teams shipping at scale",
      logos: [
        { src: "/partners/boc-logo-english.png", alt: "BOC" },
        {
          src: "/partners/boc-paymentgataway-logo-white.jpg",
          alt: "BOC Payment Gateway",
        },
        { src: "/partners/bunny.png", alt: "Bunny" },
        { src: "/partners/chandismaan.png", alt: "Chandismaan" },
        { src: "/partners/ennobler.png", alt: "En'nobler" },
        { src: "/partners/oolo.png", alt: "Oolo" },
        { src: "/partners/leafy.jpeg", alt: "Leafy" },
      ],
    },
    // §4b POWERED BY
    {
      type: "partners",
      eyebrow: "Powered by",
      logos: [
        { src: "/partners/testchimp.png", alt: "TestChimp" },
        { src: "/partners/mobilewright.png", alt: "MobileWright" },
      ],
    },
    // §5 PROBLEM → SOLUTION
    {
      type: "problemSolution",
      eyebrow: "The traditional agency model is broken",
      title: "We solve it differently.",
      subtitle:
        "Three fundamental problems with how digital technology work is delivered today — and how En'nobler fixes each one.",
      items: [
        {
          problem: {
            title: "You're paying for hours, not outcomes",
            body: "Most agencies bill for time, not value. You hope hours add up to results while invoices grow regardless.",
            note: "Unclear delivery value and unpredictable project cost.",
          },
          solution: {
            title: "Milestone-focused delivery",
            body: "We structure delivery around scope, progress checkpoints, visible outputs, and practical business outcomes.",
            note: "Clearer scope, better visibility, stronger accountability.",
          },
        },
        {
          problem: {
            title: "One model does not fit every business",
            body: "Some clients need a fixed project, some need ongoing support, and others need dedicated technical capacity.",
            note: "Rigid engagement models slow down decision-making.",
          },
          solution: {
            title: "Flexible engagement models",
            body: "Choose project-based delivery, monthly retainers, or team hiring based on your stage and technical need.",
            note: "Start small, scale when your business needs more capacity.",
          },
        },
        {
          problem: {
            title: "Speed without QA creates risk",
            body: "AI-aided development can move quickly, but without QA discipline, defects and technical debt scale quietly.",
            note: "Faster delivery can still fail without reliable validation.",
          },
          solution: {
            title: "AI-aided build with QA built in",
            body: "Development, testing, release checks, and continuous improvement work together as one quality ecosystem.",
            note: "Stronger reliability from planning to deployment.",
          },
        },
      ],
    },
    // §6 CORE SERVICES (the six thematic pillars from the wireframe)
    {
      type: "services",
      eyebrow: "Our Core Services",
      title: "Core Technology Services",
      bento: true,
      items: [
        {
          title: "AI-aided Engineering",
          summary:
            "AI-supported planning, development, review, testing, and technical decision-making for faster delivery.",
          to: "/ennobler/services/ai-automation",
          icon: "sparkles",
        },
        {
          title: "Quality Assurance",
          summary:
            "Manual testing, automation, regression checks, API testing, QA strategy, and release validation.",
          to: "/ennobler/services/quality-assurance",
          icon: "shield-check",
        },
        {
          title: "Software Development",
          summary:
            "Custom web systems, internal platforms, dashboards, portals, and scalable business applications.",
          to: "/ennobler/services/software-development",
          icon: "code",
        },
        {
          title: "Digital Transformation",
          summary:
            "Modernize workflows, replace manual processes, and create practical digital systems for business teams.",
          to: "/ennobler/services/digital-transformation",
          icon: "refresh-cw",
        },
        {
          title: "Web / App Development",
          summary:
            "Responsive websites, mobile-friendly interfaces, web apps, admin panels, and user portals.",
          to: "/ennobler/services/web-platform-development",
          icon: "monitor-smartphone",
        },
        {
          title: "Cloud / DevOps Support",
          summary:
            "Deployment, hosting support, CI/CD setup, infrastructure guidance, monitoring, and performance readiness.",
          to: "/ennobler/services/cloud-devops",
          icon: "cloud",
        },
        {
          title: "UI/UX Design",
          summary:
            "User research, wireframing, interface design, design systems, and usability testing for products people enjoy using.",
          to: "/ennobler/services/ui-ux-design",
          icon: "pen-tool",
        },
        {
          title: "Mobile App Development",
          summary:
            "Native and cross-platform mobile apps — from prototype to store launch — with performance and UX built in.",
          to: "/ennobler/services/mobile-app-development",
          icon: "smartphone",
        },
        {
          title: "API Development",
          summary:
            "REST and GraphQL APIs, third-party integrations, connectors, and secure, well-documented service layers.",
          to: "/ennobler/services/api-development",
          icon: "webhook",
        },
        {
          title: "E-Commerce Solutions",
          summary:
            "Online stores, checkout flows, payment integration, and scalable commerce platforms built to convert.",
          to: "/ennobler/services/ecommerce-solutions",
          icon: "shopping-cart",
        },
      ],
    },
    // §7 ENGAGEMENT MODELS
    {
      type: "engagement",
      title: "Choose How to Work With Us",
      subtitle: "Three engagement models. One technology team. Your call.",
      plans: [
        {
          badge: "Project",
          name: "Project-Based",
          tagline: "Fixed scope. Fixed timeline. Delivered.",
          features: [
            "Website / web app build",
            "System design",
            "QA & testing",
            "Launch support",
          ],
          cta: { label: "Start a Project", to: "/contact" },
        },
        {
          badge: "Retainer",
          name: "Monthly Retainer",
          tagline: "Ongoing capacity that scales with you.",
          features: [
            "QA as a Service",
            "Continuous development",
            "Sprint-based delivery",
            "Maintenance & optimization",
          ],
          cta: { label: "Explore Packages", to: "/ennobler/pricing" },
          highlighted: true,
          popular: "Most Popular",
        },
        {
          badge: "Team Hiring",
          name: "Team Hiring",
          tagline: "Dedicated engineers embedded in your team.",
          features: [
            "Developer support",
            "QA specialist support",
            "DevOps support",
            "Product team extension",
          ],
          cta: { label: "Request Proposal", to: "/contact" },
        },
      ],
    },
    // §8 QAAS BAND
    {
      type: "qaPromo",
      eyebrow: "En'nobler.QaaS — Quality as a Service",
      title: "Agentic Era Quality Ecosystem.",
      body: "From SaaS stability to AI workflow validation and compliance assurance, En'nobler.QaaS gives businesses a continuous quality layer for confident product delivery.",
      pills: ["SaaS Core", "Agentic QA", "AI Governance QA", "Enterprise QA"],
      cta: { label: "Explore QaaS", to: "/ennobler/qaas" },
    },
    // §9 PRODUCTS PREVIEW
    {
      type: "productPreview",
      eyebrow: "Products Preview",
      title: "Digital Products Designed for Real Business Use",
      subtitle: "Quick entry points into the En'nobler product ecosystem.",
      items: [
        {
          title: "E-commerce Product",
          body: "A product framework for online selling, product listing, order flow, customer journeys, inventory visibility, and business growth.",
          cta: {
            label: "View E-commerce Product",
            to: "/ennobler/products/ecommerce-product",
          },
        },
        {
          title: "Tourism Product",
          body: "A tourism-focused digital product for bookings, property visibility, experiences, and local business connection.",
          cta: {
            label: "View Tourism Product",
            to: "/ennobler/products/tourism-product",
          },
        },
      ],
    },
    // §10 PROCESS
    {
      type: "steps",
      eyebrow: "How We Deliver Value",
      title: "From Business Need to Reliable Delivery",
      items: [
        {
          title: "Discover",
          body: "We understand your business, users, workflows, and challenges.",
        },
        {
          title: "Plan",
          body: "We define the solution structure, scope, and roadmap.",
        },
        {
          title: "Build",
          body: "We build with quality, transparency, and practical delivery focus.",
        },
        {
          title: "Test & Deploy",
          body: "We validate the solution and deploy with confidence.",
        },
        {
          title: "Support & Grow",
          body: "We provide ongoing improvement, support, and optimization.",
        },
      ],
    },
    // §11 PORTFOLIO
    {
      type: "caseStudies",
      title: "Work That Connects Strategy, Technology, QA, and Growth",
      subtitle:
        "A curated look across En'nobler's engineering and QA ecosystem.",
      filters: [
        "All Work",
        "QA as a Service",
        "Software Development",
        "Product Build",
        "Cloud / DevOps",
      ],
      items: [
        {
          tag: "QA as a Service",
          title: "Platform Stabilization",
          body: "Cut production defects by 3x with a continuous QA layer across releases.",
          metric: "QA Result",
          to: "/portfolio",
        },
        {
          tag: "Software Development",
          title: "Business System Build",
          body: "Replaced manual workflows with a custom platform that scaled with the team.",
          metric: "Dev Result",
          to: "/portfolio",
        },
        {
          tag: "Cloud / DevOps",
          title: "Deployment Pipeline Setup",
          body: "CI/CD, monitoring, and performance readiness for confident, frequent shipping.",
          metric: "Cloud Result",
          to: "/portfolio",
        },
        {
          tag: "Product Build",
          title: "MVP to Market-Ready",
          body: "Product planning, build, testing, launch, and optimization end to end.",
          metric: "Product Result",
          to: "/portfolio",
        },
      ],
    },
    // §12 CROSS-BRAND BRIDGE
    {
      type: "bridge",
      title: "Need marketing growth with strong technology behind it?",
      halves: [
        {
          tag: "En'nobler — IT",
          title: "Build, test, and scale your digital ecosystem.",
          body: "Use En'nobler for software, QA, product delivery, cloud support, and technical execution.",
          cta: { label: "View IT Services", to: "/ennobler/services" },
        },
        {
          tag: "Oolo — Marketing",
          title: "Switch to Oolo for creative and growth support.",
          body: "Oolo supports brand strategy, social media marketing, creative design, campaigns, and digital growth.",
          cta: { label: "Explore Marketing Side", to: "/oolo" },
        },
      ],
    },
    // §13 FINAL CTA
    {
      type: "cta",
      eyebrow: "Let's Build",
      title: "Ship with confidence, not crossed fingers.",
      body: "Start with a clear service discussion and move toward a practical technology solution — response within 24 hours.",
      cta: { label: "Start a Project", to: "/contact" },
    },
  ],
};
