import { Page } from "@/components/Page";
import type { PageContent } from "@/content/types";

const about: PageContent = {
  title: "About Us",
  sections: [
    // ABOUT HERO
    {
      type: "hero",
      eyebrow: "About En'nobler / Oolo",
      title: "Two capabilities. One team. No silos.",
      subtitle:
        "We sit at the intersection of creative strategy and technical execution — the space most companies try to bridge with handoffs and Slack messages. We built a company that lives there instead.",
      primaryCta: { label: "Our Story", to: "#who" },
      secondaryCta: { label: "What We Do", to: "#what-we-do" },
      image: { src: "/heroes/about.webp", alt: "Byte and Chikku — the En'nobler and Oolo mascots — side by side, engineering and creative intelligence as one team" },
    },
    // INTRO
    {
      type: "prose",
      anchor: "who",
      dark: true,
      eyebrow: "About En'nobler / Oolo",
      title: "We're built for the space between brilliant ideas and the technology that makes them work.",
      paragraphs: [
        "En'nobler / Oolo is a venture of en'nobler PVT LTD — a Sri Lankan company built around a conviction that the next decade of digital business won't be won by those with the loudest creative ideas or the most advanced technology stack. It will be won by those who can put both in the same room and make them talk to each other.",
        "That's the work we do.",
      ],
    },
    // PROBLEM
    {
      type: "prose",
      anchor: "problem",
      eyebrow: "The problem we set out to solve",
      title: "The split between creative work and technical systems is where growth gets lost.",
      paragraphs: [
        "Walk into most digital businesses today and you'll find a familiar split.",
        "On one side, marketing teams produce campaigns that look beautiful, tell strong stories, and connect with audiences — but live disconnected from the technical systems that should be carrying them. Great creative gets stuck inside slow workflows, manual processes, and tools that can't scale.",
        "On the other side, software teams build genuinely useful products — and then watch them struggle to find an audience because the brand story, the positioning, and the go-to-market thinking were treated as someone else's job.",
        "This is the gap we exist in. Marketing without technical infrastructure leaks growth. Software without creative reach loses momentum. Most agencies pick one side and try to refer the other out. We chose to build a company that operates fluently on both.",
      ],
    },
    // PROBLEM → SOLUTION
    {
      type: "problemSolution",
      eyebrow: "The traditional agency model is broken.",
      title: "We solve it differently.",
      subtitle:
        "Three common problems in modern creative and technical delivery — and how En'nobler / Oolo approaches them with human thinking, business context, and smart AI support.",
      items: [
        {
          problem: {
            title: "You're paying for activity, not real outcomes",
            body: "Many teams look busy: more meetings, more deliverables, more dashboards, more content, more code. But activity does not always become growth, adoption, quality, or business clarity.",
            note: "Work is measured by effort instead of the value it creates.",
          },
          solution: {
            title: "We connect every workflow to a business result",
            body: "Before execution starts, we clarify the goal, the audience, the risk, the success measure, and the decision behind the work. Whether it is software, marketing, automation, or brand strategy, output must serve a clear outcome.",
            note: "Human judgement first. AI and automation support the process, not replace the thinking.",
          },
        },
        {
          problem: {
            title: "One delivery model doesn't fit every business",
            body: "Some companies need a fixed project. Some need ongoing capacity. Some need strategic guidance first. Others need a hybrid team that can move between marketing, product, technology, and operations.",
            note: "Rigid agency models force clients into structures that do not match their stage.",
          },
          solution: {
            title: "We shape the engagement around the actual need",
            body: "We can work project-based, retainer-based, dedicated-team, advisory, or hybrid depending on the problem. The model is chosen around scope, speed, risk, budget, and how much ownership the client wants us to carry.",
            note: "Flexible engagement. Structured delivery. Clear ownership from start to finish.",
          },
        },
        {
          problem: {
            title: "AI speed without human leadership scales weak decisions",
            body: "AI can produce faster drafts, faster tests, faster content, and faster workflows. But without human thinking, domain understanding, creativity, and judgement, speed only multiplies confusion.",
            note: "Tools move fast, but they do not understand context, risk, brand, or business impact by themselves.",
          },
          solution: {
            title: "We keep human intelligence at the centre",
            body: "Our process keeps human thinking, subject-matter understanding, structured discipline, creativity, and business assurance at the centre. AI helps us research, scale, test, automate, and measure — while people decide what matters.",
            note: "Human-led. AI-assisted. Measured through quality, clarity, and business value.",
          },
        },
      ],
    },
    // AI
    {
      type: "prose",
      anchor: "ai",
      dark: true,
      eyebrow: "How we think about AI",
      title: "We use AI extensively. We're also clear about what it is and isn't for.",
      paragraphs: [
        "AI doesn't have ideas. It doesn't understand a brand the way a person who has sat with the founder for three hours understands it. It doesn't know which version of a campaign will actually move the people you're trying to reach. What it does — exceptionally well — is take the things humans have decided to do and help us do more of them, faster, with better measurement and tighter iteration.",
        "So our model is straightforward:",
      ],
      bullets: [
        { strong: "Humans lead the creative work.", text: "Strategy, concepts, brand voice, design direction, narrative — these come from people. We don't generate campaigns from a prompt and call it creative." },
        { strong: "AI carries the load.", text: "Once the human decisions are made, we use AI to scale production, automate the repetitive parts of execution, run faster testing cycles, and free our team to spend their time on the work that actually requires judgment." },
        { strong: "The output is more human, not less.", text: "When AI handles the mechanical work, the people on our team have more capacity for the work only people can do. That's the point." },
      ],
    },
    // JOBS
    {
      type: "prose",
      anchor: "jobs",
      eyebrow: "A note on jobs",
      title: "Efficiency and employment do not have to be opposites.",
      paragraphs: [
        "There's a version of the AI conversation that treats efficiency and employment as opposites. We don't.",
        "We're building En'nobler / Oolo as a place where AI creates the room for more skilled work, not less. New roles — AI workflow designers, model-aware strategists, technical-creative hybrids — are emerging because of this shift, and Sri Lanka has the talent to fill them if someone is willing to do the training.",
        "We've built structured workflows, research frameworks, and mentorship pipelines specifically to develop young Sri Lankan talent into these roles. It's slower than just hiring senior people from abroad. It's also the only version of this company we're interested in running.",
      ],
    },
    // WHAT WE DO
    {
      type: "prose",
      anchor: "what-we-do",
      dark: true,
      eyebrow: "What we actually do",
      title: "We bring creative and technical capability under one team.",
      paragraphs: [
        "If you're a marketing-led business that needs technical depth, we're built for you. If you're a product-led business that needs to be seen and understood, we're built for you. If you're somewhere in between trying to make both sides work together, we're especially built for you.",
      ],
      bullets: [
        { strong: "Strategy and brand work", text: "that gives your business a coherent story to tell." },
        { strong: "Digital marketing execution", text: "— content, campaigns, performance, social, SEO — built to scale through AI-assisted workflows." },
        { strong: "Software development", text: "for the products, platforms, and internal tools your business needs to operate." },
        { strong: "The connecting layer", text: "— integrating your marketing systems with your product, your data, and your operations so nothing falls through the cracks between teams." },
      ],
    },
    // WHERE WE'RE GOING
    {
      type: "prose",
      anchor: "where-going",
      eyebrow: "Where we're going",
      title: "We're early. We're Sri Lankan. We're betting on the creative-technical bridge.",
      paragraphs: [
        "We're early. We're Sri Lankan. We're betting that a company designed from the start around the creative-technical bridge — rather than one bolted together from two separate practices — will produce work that the older model simply can't match.",
        "If that's the kind of partner you're looking for, we'd like to hear from you.",
      ],
      signoff: { title: "En'nobler / Oolo", note: "A venture of en'nobler PVT LTD" },
    },
    // FINAL — LET'S TALK + FORM
    {
      type: "contactForm",
      anchor: "final",
      eyebrow: "Let's Talk",
      title: "If this is the kind of partner you are looking for, we'd like to hear from you.",
      body: "Tell us what you are trying to build, grow, fix, test, or connect. No pitch deck required — just a clear conversation about the problem and whether En'nobler / Oolo is the right team to help.",
      variant: "contact",
      secondaryCta: { label: "Book a Strategy Call", to: "/strategy-call" },
    },
  ],
};

export default function About() {
  return <Page content={about} />;
}
