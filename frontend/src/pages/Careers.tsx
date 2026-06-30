import { Page } from "@/components/Page";
import type { PageContent } from "@/content/types";

const careers: PageContent = {
  title: "Careers",
  sections: [
    // HERO
    {
      type: "hero",
      eyebrow: "Careers at En'nobler / Oolo",
      title: "Build the future with En'nobler / Oolo",
      subtitle:
        "Join a team where technology, creativity, strategy, and quality come together to solve real business problems. We're building a workplace for people who want to learn deeply, think differently, and create meaningful digital impact.",
      primaryCta: { label: "View Open Roles", to: "#open-roles" },
      secondaryCta: { label: "Send Your CV", to: "#apply" },
      chips: ["Learn", "Build", "Test", "Grow", "Ship"],
    },
    // WHY WORK WITH US — 4 values
    {
      type: "features",
      eyebrow: "Why Work With Us",
      title: "Why Work With Us",
      subtitle:
        "We create a practical learning environment where people can grow across technology, quality, business, design, and marketing.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Learn Through Real Projects", body: "Work on practical client-style assignments, internal systems, QA workflows, software concepts, marketing assets, and business documentation." },
        { title: "Work Across Business Domains", body: "As your role grows, you may be exposed to industries such as education, healthcare, e-commerce, fintech, tourism, and enterprise operations." },
        { title: "Use Modern Workflows", body: "Build habits around structured documentation, design systems, QA processes, automation support, collaboration tools, and delivery tracking." },
        { title: "Be Part of a Dual-Brand Vision", body: "Contribute to En'nobler's technology and QA ecosystem while understanding how Oolo's marketing and creative work connects to growth." },
      ],
    },
    // CAREER PATHWAYS
    {
      type: "pathways",
      anchor: "career-paths",
      eyebrow: "Career Structure",
      title: "Career Pathways",
      subtitle:
        "Our opportunities are arranged into clear pathways so candidates can easily understand where they fit: En'nobler for IT, QA, and business-focused roles; Oolo for marketing, brand, and creative roles; and internships for early-career learning.",
      cards: [
        {
          label: "En'nobler — IT / QA",
          title: "Technology, Quality Assurance, Product, and Business Analysis",
          body: "For candidates who want to work with software development, QA, testing, business requirements, product thinking, technical documentation, and digital systems.",
          items: ["Software Development", "Quality Assurance", "Business Analysis", "Product Support"],
          dark: true,
        },
        {
          label: "Oolo — Marketing / Creative",
          title: "Digital Marketing, Content, Brand, and Creative Execution",
          body: "For candidates who want to work with campaign planning, brand communication, digital content, marketing research, creative direction, and growth support.",
          items: ["Digital Marketing", "Content Strategy", "Brand Research", "Creative Support"],
        },
      ],
    },
    // CAREER AREAS — 2 panels
    {
      type: "panels",
      anchor: "career-areas",
      eyebrow: "Career Areas",
      title: "Career Areas",
      subtitle: "Explore the different professional paths available across our technology and creative ecosystem.",
      panels: [
        {
          eyebrow: "En'nobler Careers",
          title: "IT, QA, Product & Business Analysis",
          items: [
            { title: "Technology & Development", body: "For candidates interested in frontend, backend, full-stack development, web systems, APIs, and technical implementation.", tags: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Intern"] },
            { title: "Quality Assurance", body: "For candidates interested in manual testing, regression testing, test case writing, automation concepts, bug reporting, and QA documentation.", tags: ["QA Engineer", "QA Intern", "Automation Tester", "QaaS Analyst"] },
            { title: "Business Analysis & Product Support", body: "For candidates interested in requirements, user flows, SRS writing, stakeholder communication, wireframe review, and product logic.", tags: ["Business Analyst Intern", "Junior BA", "Product Analyst", "Project Coordinator"] },
          ],
        },
        {
          eyebrow: "Oolo Careers",
          title: "Marketing, Brand, Content & Creative",
          items: [
            { title: "Digital Marketing", body: "For candidates interested in campaign planning, social media support, competitor research, marketing funnels, and performance thinking.", tags: ["Digital Marketing Intern", "Marketing Assistant", "Campaign Support"] },
            { title: "Content & Brand Communication", body: "For candidates interested in content ideas, brand voice, copy structure, audience research, and communication planning.", tags: ["Content Strategist", "Copy Assistant", "Brand Research Intern"] },
            { title: "UI/UX & Creative Support", body: "For candidates interested in wireframes, layout planning, visual direction, design systems, and creative web experience support.", tags: ["UI/UX Designer", "Product Designer Intern", "Creative Assistant"] },
          ],
        },
      ],
    },
    // INTERNSHIPS
    {
      type: "features",
      eyebrow: "Internships & Early-Career Training",
      title: "Start your professional journey with practical experience",
      subtitle:
        "Our internship and early-career opportunities are designed for students, fresh graduates, beginners, and career switchers who want practical exposure to real workplace expectations. Selected candidates may receive mentor guidance, structured tasks, documentation practice, and project-style learning based on their chosen path.",
      columns: 3,
      items: [
        { title: "Mentor-Guided Support", body: "For candidates who need practical direction, task feedback, and guidance from experienced team members while improving their workplace readiness." },
        { title: "Academic Internship", body: "For students who need internship exposure as part of their academic programme or university requirement, with structured tasks, progress tracking, and practical learning support." },
        { title: "Non-Academic Internship", body: "For fresh graduates, juniors, beginners, or career switchers who want real-world exposure outside an academic requirement." },
      ],
    },
    // OPEN ROLES
    {
      type: "openRoles",
      anchor: "open-roles",
      eyebrow: "Open Roles",
      title: "Open Roles",
      subtitle: "Browse current opportunities across our technology, QA, business, design, and marketing teams.",
      filters: ["All", "IT", "Oolo", "Internships"],
      roles: [
        { title: "Business Analyst Intern", areas: ["IT", "Internships"], meta: ["En'nobler", "Internship / Training", "Remote / Hybrid"], body: "Support requirement gathering, SRS documentation, user flow writing, wireframe review, client-style analysis, and project coordination.", applyTo: "#apply" },
        { title: "QA Intern", areas: ["IT", "Internships"], meta: ["En'nobler.QaaS", "Internship / Training", "Remote / Hybrid"], body: "Support test case writing, manual testing, regression checks, bug reporting, QA documentation, and basic automation awareness.", applyTo: "#apply" },
        { title: "UI/UX Design Intern", areas: ["IT", "Oolo", "Internships"], meta: ["En'nobler / Oolo", "Internship / Training", "Remote / Hybrid"], body: "Support wireframes, layout planning, user journey mapping, design system updates, page structure, and visual experience improvements.", applyTo: "#apply" },
        { title: "Digital Marketing Intern", areas: ["Oolo", "Internships"], meta: ["Oolo", "Internship / Training", "Remote / Hybrid"], body: "Assist with campaign ideas, content planning, brand research, competitor analysis, social media support, and marketing documentation.", applyTo: "#apply" },
      ],
    },
    // HIRING PROCESS — 5 steps
    {
      type: "steps",
      eyebrow: "Hiring Process",
      title: "Our Hiring Process",
      items: [
        { title: "Submit Application", body: "Candidate submits CV, portfolio, or basic details through the Careers Page." },
        { title: "Initial Review", body: "The team checks role fit, interest area, skills, and learning potential." },
        { title: "Short Interview", body: "A short discussion helps us understand goals, availability, and expectations." },
        { title: "Task / Assessment", body: "Depending on the role, candidates may receive a small practical task." },
        { title: "Final Confirmation", body: "Selected candidates receive confirmation, onboarding details, and next steps." },
      ],
    },
    // LIFE — 3 experience cards
    {
      type: "features",
      eyebrow: "Life at En'nobler / Oolo",
      title: "The experience of working here",
      subtitle:
        "We're building a workplace where people can learn deeply, communicate clearly, and contribute to meaningful digital work across technology, QA, product, design, and marketing.",
      columns: 3,
      dark: true,
      items: [
        { title: "Collaborative Work Culture", body: "We encourage open communication, structured teamwork, and shared learning across En'nobler and Oolo. People are expected to ask questions, share ideas, and support the quality of the work together." },
        { title: "Learning-Focused Environment", body: "Our work environment is designed for people who want to improve through real tasks, review sessions, documentation practice, mentor feedback, and practical exposure to business problems." },
        { title: "Innovation-Driven Mindset", body: "We value people who are curious about modern tools, AI-supported workflows, better delivery methods, and the connection between creative thinking and technical execution." },
      ],
    },
    // CANDIDATE QUALITIES — 6 rows
    {
      type: "checklist",
      anchor: "qualities",
      eyebrow: "Candidate Qualities",
      title: "The kind of people we look for",
      subtitle: "We're looking for people with the right attitude, learning mindset, communication habits, and responsibility to grow with the team.",
      items: [
        { title: "Willing to Learn", body: "Open to improving through feedback, research, practice, and exposure to new tools or workflows." },
        { title: "Clear in Communication", body: "Able to explain updates, blockers, questions, and work progress in a simple and professional way." },
        { title: "Responsible With Deadlines", body: "Understands time, ownership, task completion, and the importance of following through on agreed work." },
        { title: "Open to Feedback", body: "Can accept correction positively and use it to improve quality, clarity, and confidence." },
        { title: "Comfortable With Documentation", body: "Ready to work with notes, requirements, reports, test cases, content drafts, or structured project documents." },
        { title: "Curious About Real Business Problems", body: "Interested in understanding why a task matters, who it helps, and how the final work creates business value." },
      ],
    },
    // APPLY
    {
      type: "contactForm",
      anchor: "apply",
      eyebrow: "Apply Now",
      title: "Ready to grow with us?",
      body: "Whether you are applying for En'nobler IT, En'nobler.QaaS, Oolo Marketing, or an internship pathway, share your details and tell us where you want to grow.",
      variant: "apply",
    },
  ],
};

export default function Careers() {
  return <Page content={careers} />;
}
