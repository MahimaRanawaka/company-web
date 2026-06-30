import type { Database } from "@/types/database.types";

type Service = Database["public"]["Tables"]["services"]["Row"];
type Project = Database["public"]["Tables"]["projects"]["Row"];
type Plan = Database["public"]["Tables"]["pricing_plans"]["Row"];
type Job = Database["public"]["Tables"]["job_postings"]["Row"];

const now = "2026-01-01T00:00:00Z";

/** Fallback content so the UI renders before Supabase is connected.
 *  Mirrors supabase/migrations/0002_seed.sql. */
export const SEED_SERVICES: Service[] = [
  { id: "s1", brand: "ennobler", slug: "ai-automation", title: "AI & Automation Solutions", summary: "Custom AI models, LLM integrations, and workflow automation that cut manual effort and unlock new capabilities.", body: null, icon: "sparkles", sort_order: 1, created_at: now },
  { id: "s2", brand: "ennobler", slug: "quality-assurance", title: "Software Quality Assurance", summary: "Manual and automated testing across web, mobile, and APIs — so bugs get caught before your users do.", body: null, icon: "shield-check", sort_order: 2, created_at: now },
  { id: "s3", brand: "ennobler", slug: "software-development", title: "Custom Software Development", summary: "End-to-end software engineering for complex business problems — from architecture to production-ready delivery.", body: null, icon: "code", sort_order: 3, created_at: now },
  { id: "s4", brand: "ennobler", slug: "digital-transformation", title: "IT Consulting & Digital Transformation", summary: "Strategic guidance to modernize legacy systems, define roadmaps, and align your tech stack with business goals.", body: null, icon: "refresh-cw", sort_order: 4, created_at: now },
  { id: "s5", brand: "ennobler", slug: "cloud-devops", title: "Cloud & DevOps Solutions", summary: "Cloud-native infrastructure, CI/CD pipelines, and DevOps practices that speed up delivery and reduce downtime.", body: null, icon: "cloud", sort_order: 5, created_at: now },
  { id: "s6", brand: "ennobler", slug: "ui-ux-design", title: "UI/UX & Product Design", summary: "Research-led design that turns complex workflows into intuitive, delightful product experiences users love.", body: null, icon: "pen-tool", sort_order: 6, created_at: now },
  { id: "s7", brand: "ennobler", slug: "mobile-app-development", title: "Mobile App Development", summary: "Native and cross-platform mobile apps for iOS and Android — built for performance, retention, and growth.", body: null, icon: "smartphone", sort_order: 7, created_at: now },
  { id: "s8", brand: "ennobler", slug: "api-development", title: "API Development & Integrations", summary: "Well-documented, secure REST and GraphQL APIs — plus third-party integrations that keep your systems connected.", body: null, icon: "webhook", sort_order: 8, created_at: now },
  { id: "s9", brand: "ennobler", slug: "ecommerce-solutions", title: "E-Commerce Solutions", summary: "Full-featured online stores with smooth checkout, inventory management, and integrations built to drive conversions.", body: null, icon: "shopping-cart", sort_order: 9, created_at: now },
  { id: "s10", brand: "ennobler", slug: "web-platform-development", title: "Web & Platform Development", summary: "High-performance web platforms built for speed, scalability, and seamless user experience across all devices.", body: null, icon: "monitor-smartphone", sort_order: 10, created_at: now },
  { id: "o1", brand: "oolo", slug: "brand-strategy", title: "Brand Strategy & Identity", summary: "Positioning, narrative, and identity that stands out.", body: null, icon: "palette", sort_order: 1, created_at: now },
  { id: "o2", brand: "oolo", slug: "social-media", title: "Social Media Marketing", summary: "Always-on social that builds an audience and converts.", body: null, icon: "share-2", sort_order: 2, created_at: now },
  { id: "o3", brand: "oolo", slug: "content", title: "Content Creation", summary: "Editorial, video, and design that earns attention.", body: null, icon: "pen-tool", sort_order: 3, created_at: now },
  { id: "o4", brand: "oolo", slug: "creative", title: "Creative Design", summary: "Campaign-grade creative across every channel.", body: null, icon: "sparkles", sort_order: 4, created_at: now },
  { id: "o5", brand: "oolo", slug: "campaign", title: "Campaign Planning", summary: "Integrated campaigns mapped to measurable goals.", body: null, icon: "megaphone", sort_order: 5, created_at: now },
  { id: "o6", brand: "oolo", slug: "digital-growth", title: "Digital Growth Support", summary: "Paid, SEO, and lifecycle growth that compounds.", body: null, icon: "trending-up", sort_order: 6, created_at: now },
];

export const SEED_PROJECTS: Project[] = [
  { id: "p1", brand: "ennobler", slug: "fintech-platform", title: "Fintech Platform Rebuild", summary: "Re-architected a payments platform for 10x scale.", body: null, cover_url: null, tags: ["Platform", "Cloud"], sort_order: 1, created_at: now },
  { id: "p2", brand: "oolo", slug: "dtc-launch", title: "DTC Brand Launch", summary: "0→1 brand and growth engine for a new consumer label.", body: null, cover_url: null, tags: ["Brand", "Growth"], sort_order: 2, created_at: now },
  { id: "p3", brand: "joint", slug: "retail-omnichannel", title: "Omnichannel Retail", summary: "Engineering + marketing in lockstep for a retail rollout.", body: null, cover_url: null, tags: ["Joint", "Campaign"], sort_order: 3, created_at: now },
];

export const SEED_PLANS: Plan[] = [
  { id: "ep1", brand: "ennobler", name: "Pilot", price: "$5k", cadence: "/ project", features: ["Scoped MVP", "QA included", "2-week sprints"], highlighted: false, sort_order: 1 },
  { id: "ep2", brand: "ennobler", name: "Build", price: "$15k", cadence: "/ month", features: ["Dedicated squad", "CI/CD + cloud", "Roadmap ownership"], highlighted: true, sort_order: 2 },
  { id: "ep3", brand: "ennobler", name: "Scale", price: "Custom", cadence: null, features: ["Multi-team delivery", "SLAs", "Compliance"], highlighted: false, sort_order: 3 },
  { id: "op1", brand: "oolo", name: "Project Based", price: "$3k", cadence: "/ project", features: ["One-time campaign", "Creative + copy", "Launch support"], highlighted: false, sort_order: 1 },
  { id: "op2", brand: "oolo", name: "Retainer Model", price: "$8k", cadence: "/ month", features: ["Always-on growth", "Content + paid", "Monthly reporting"], highlighted: true, sort_order: 2 },
  { id: "op3", brand: "oolo", name: "Team Hiring", price: "Custom", cadence: null, features: ["Embedded creatives", "Dedicated strategist", "Flexible scope"], highlighted: false, sort_order: 3 },
];

export const SEED_JOBS: Job[] = [
  { id: "j1", title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", employment_type: "Full-time", body: null, active: true, created_at: now },
  { id: "j2", title: "Growth Marketer", department: "Marketing", location: "Hybrid", employment_type: "Full-time", body: null, active: true, created_at: now },
  { id: "j3", title: "Brand Designer", department: "Creative", location: "Remote", employment_type: "Contract", body: null, active: true, created_at: now },
];
