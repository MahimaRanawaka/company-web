import type { PageContent } from "../types";

export const ennoblerQaas: PageContent = {
  title: "En'nobler.QaaS — Quality Assurance as a Service",
  sections: [
    // HERO
    {
      type: "hero",
      eyebrow: "Quality Assurance as a Service · Powered by AI",
      title: "Ship software that {earns trust.}",
      subtitle:
        "End-to-end QA for product teams who can't afford to get it wrong. From a single sprint to an embedded team — we test so you can move fast with confidence.",
      primaryCta: { label: "Explore our services", to: "#engagement" },
      secondaryCta: { label: "See how it works", to: "#how-it-works" },
      chips: ["Plan", "Execute", "Explore", "Evolve"],
      image: { src: "/showcase/qaas.webp", alt: "QA dashboard preview — passing test runs, code coverage, defect trend, and CI/CD pipeline" },
    },
    // HERO STATS BAR
    {
      type: "stats",
      items: [
        { value: "40%", label: "Fewer defect escapes" },
        { value: "10×", label: "Faster test authoring" },
        { value: "80%", label: "More coverage" },
        { value: "72h", label: "To first results" },
      ],
    },
    // ENGAGEMENT MODEL
    {
      type: "engagementTabs",
      anchor: "engagement",
      eyebrow: "Engagement Model",
      title: "The right QA model for your stage",
      subtitle:
        "One-off projects, ongoing coverage, embedded teams, or pure performance-based — choose how you want to work with us.",
      tabs: [
        {
          key: "project",
          label: "Project-Based",
          accent: "blue",
          desc: {
            icon: "target",
            title: "Fixed scope. Fixed cost. Clear deliverables.",
            body: "Ideal for pre-launch audits, release sign-offs, security testing, and one-time assessments. Define the scope together, we deliver a structured engagement with milestone check-ins and a formal sign-off report.",
            pills: ["Scoped in 48h", "Clear deliverables", "No ongoing commitment", "Starts from $2,500"],
          },
          services: [
            { icon: "search", name: "QA Audit & Process Review", body: "Scored maturity assessment of your current QA practices, tooling, and coverage gaps. Delivered as an actionable report with a prioritised roadmap.", tag: "Fixed deliverable" },
            { icon: "shield-check", name: "Security Penetration Testing", body: "OWASP-aligned pen testing across your app, API, network, and cloud surfaces. Findings report with severity ratings and a remediation roadmap.", tag: "Scoped engagement" },
            { icon: "rocket", name: "Pre-Release Test Sprint", body: "Manual and AI-augmented test execution against a defined build. Defect triage, regression sign-off, and a go/no-go recommendation.", tag: "Per sprint" },
            { icon: "smartphone", name: "Mobile App Testing (iOS/Android)", body: "End-to-end functional, compatibility, and UX validation across a real device matrix. Covers OS versions, screen sizes, and network conditions.", tag: "Per release" },
            { icon: "landmark", name: "Architecture Inspection", body: "Static review of application architecture for testability, performance bottlenecks, and quality risks — before a line of test code is written.", tag: "Fixed scope" },
            { icon: "bar-chart-3", name: "Performance Engineering Audit", body: "Load, stress, and endurance testing on a target release. Bottleneck identification, capacity planning, and tuning recommendations.", tag: "Fixed engagement" },
            { icon: "database", name: "Data Warehouse & ETL Testing", body: "Validate data pipelines, transformation logic, and warehouse integrity for a bounded migration or build project.", tag: "Per project" },
            { icon: "list-checks", name: "Test Coverage Review", body: "Assess existing test suites against requirements, identify gaps, redundant coverage, and priority areas. Delivered with a coverage heatmap.", tag: "Fixed fee" },
            { icon: "file-text", name: "QA Technical Writing", body: "Test plans, strategies, traceability matrices, and process runbooks. Documentation your team will actually use.", tag: "Per deliverable" },
          ],
        },
        {
          key: "retainer",
          label: "Retainer",
          accent: "teal",
          desc: {
            icon: "refresh-cw",
            title: "Predictable QA capacity, month after month.",
            body: "A pre-agreed block of hours or scope, renewing each month. Best for teams shipping regularly who need consistent QA coverage without the overhead of hiring. Scales up or down with your roadmap.",
            pills: ["Monthly SLA", "Scales with velocity", "Dedicated QA contact", "Monthly reporting"],
          },
          services: [
            { icon: "repeat", name: "Regression Testing Factory", body: "Weekly or per-sprint regression cycles against your evolving codebase. AI-assisted test execution with zero ramp-up each cycle.", tag: "Monthly block" },
            { icon: "lightbulb", name: "Advisory Support Subscription", body: "On-call QA leadership: strategy guidance, process coaching, tool selection, and decision support — async or live.", tag: "Monthly retainer" },
            { icon: "cloud", name: "QA Environment Management", body: "Ongoing management of test environments: provisioning, configuration drift prevention, and data refresh cadences synced to your sprints.", tag: "Monthly SLA" },
            { icon: "bot", name: "Automation Suite Maintenance", body: "Keep your automation healthy — update selectors, fix flaky tests, refactor as the UI evolves. Backed by AI-powered test repair.", tag: "Monthly hours" },
            { icon: "lock", name: "Continuous Security Testing", body: "Monthly security regression, vulnerability scanning, and OWASP checks against evolving application surfaces.", tag: "Monthly fixed" },
            { icon: "clipboard-list", name: "Test Design on Demand", body: "Standing capacity for test case design and maintenance as features ship. Scenarios stored as code, always in sync with your repo.", tag: "Monthly hours" },
            { icon: "hard-drive", name: "Test Data Management", body: "Continuous provisioning and masking of production-safe test data sets, refreshed to match sprint requirements automatically.", tag: "Monthly managed" },
            { icon: "smartphone", name: "Device Lab Access", body: "Monthly access to a managed real-device matrix for compatibility runs across OS/browser/device combinations.", tag: "Monthly subscription" },
          ],
        },
        {
          key: "dedicated",
          label: "Dedicated Team",
          accent: "amber",
          desc: {
            icon: "users",
            title: "An embedded QA team that becomes yours.",
            body: "Senior QA engineers, leads, and managers fully integrated into your squads — your processes, your tools, your sprint ceremonies. Onboards in days, not months. Scales without HR overhead.",
            pills: ["Onboards in 72h", "Your tools & processes", "Scales up or down", "Per seat/month"],
          },
          services: [
            { icon: "users-round", name: "Embedded QA Engineers", body: "Mid and senior QA engineers in your standups, writing test cases, executing and reporting — fully integrated with your squad.", tag: "Per seat/month" },
            { icon: "crown", name: "QA Manager on Demand", body: "An experienced QA lead who owns strategy, manages the team, interfaces with stakeholders, and drives QA culture across your org.", tag: "Per seat/month" },
            { icon: "settings-2", name: "Automation Engineers (SDET)", body: "Dedicated SDETs who build, maintain, and extend your test automation framework — in Playwright, Cypress, Selenium, or your stack.", tag: "Per seat/month" },
            { icon: "shield", name: "Security QA Specialist", body: "A dedicated security tester embedded in your engineering org, shifting security testing left into every PR and sprint cycle.", tag: "Per seat/month" },
            { icon: "trending-up", name: "Performance Engineers", body: "Dedicated performance and load testing specialists running continuous capacity planning, profiling, and optimisation cycles.", tag: "Per seat/month" },
            { icon: "building-2", name: "TCoE Build & Run", body: "Stand up a full Test Centre of Excellence — governance, tooling standards, metrics dashboards, and a self-sustaining QA organisation.", tag: "Programme pricing" },
            { icon: "zap", name: "Agile QA Integration", body: "QA embedded from story grooming to retrospective — BDD practices, shift-left testing, and CI/CD quality gates as code.", tag: "Per team/month" },
            { icon: "ruler", name: "BA & Business Assurance", body: "Business analysts and assurance testers who validate requirements and UAT alignment, embedded in your delivery stream.", tag: "Per seat/month" },
          ],
        },
        {
          key: "performance",
          label: "Performance-Based",
          accent: "coral",
          desc: {
            icon: "zap",
            title: "Pay for outcomes, not hours.",
            body: "Our fee is partially or fully tied to measurable quality outcomes. We set a baseline together, define the success metric, and our commercial model rewards us only when you win. No vanity KPIs — just real, contractually committed results.",
            pills: ["Outcome-linked fees", "Shared risk model", "Contractual commitments", "Baseline + bonus structure"],
          },
          perf: [
            { title: "Defect Escape Reduction", icon: "bug", body: "Baseline your current P1/P2 escape rate to production. We target a contractual reduction — typically 35–50% in 90 days. Our fee scales with the improvement achieved.", kpis: ["Defect escape rate", "P1/P2 incidents", "Measured monthly"] },
            { title: "Release Cycle Acceleration", icon: "gauge", body: "We commit to a defined improvement in QA gate duration — e.g. 30% faster cycle time. Base retainer plus a success bonus tied to sprint-over-sprint velocity improvement.", kpis: ["QA gate duration", "Cycle time delta", "Sprint-over-sprint"] },
            { title: "Automation Coverage Target", icon: "bot", body: "We start from your current automation coverage. We hit an agreed target — e.g. 70% meaningful coverage in 6 months. Payment structured as milestone tranches.", kpis: ["% automated coverage", "Suite reliability", "Flaky test rate"] },
            { title: "SLA Compliance Assurance", icon: "scroll", body: "For regulated industries — we underwrite a quality SLA. If your product fails defined quality benchmarks post-release, we absorb remediation cost up to a capped amount.", kpis: ["SLA breach incidents", "Audit readiness", "Compliance score"] },
            { title: "Crowdsourced Bug Bounty", icon: "target", body: "Pay-per-valid-defect using our vetted tester community. You set severity weights, we assign bounty values. Only pay for confirmed, accepted bugs. Capped total exposure.", kpis: ["Per valid bug found", "Severity-weighted", "Capped exposure"] },
            { title: "Quality Maturity Uplift", icon: "trending-up", body: "A structured 12-week programme to move your QA maturity from assessed baseline to a defined target level. Fee tied to maturity scorecard milestones achieved.", kpis: ["Maturity level delta", "Process adoption", "Milestone gates"] },
          ],
        },
      ],
    },
    // TECHNOLOGY LAYER
    {
      type: "workflow",
      anchor: "technology",
      eyebrow: "AI-Powered Technology Layer",
      title: "Human expertise, autonomous intelligence.",
      subtitle:
        "We combine certified QA engineers with an autonomous testing platform — AI plans tests, closes coverage gaps from real user behaviour, and keeps your suite aligned with your codebase automatically.",
      steps: [
        { num: "01 / Plan", title: "AI-assisted test planning", body: "User stories and test scenarios authored with AI help — stored as structured Markdown, version-controlled alongside your code and accessible to both humans and agents.", tag: "Kanban · Git sync · AI brainstorm" },
        { num: "02 / Execute", title: "Smart test execution on every PR", body: "On every pull request, AI fills coverage gaps, provisions isolated environments, sets up fixtures, generates tests for new scenarios, and links them back to requirements in code.", tag: "Playwright · SmartTests · CI/CD" },
        { num: "03 / Explore", title: "Exploratory agents catch UX bugs", body: "AI agents walk through your app guided by test scenarios — finding visual regressions, accessibility gaps, localization issues, form errors, and layout breakages scripts would miss.", tag: "Visual · A11y · Localization · Forms" },
        { num: "04 / Evolve", title: "Real user data closes coverage gaps", body: "Production usage data is compared against test runs to surface untested real-world behaviours. The AI continuously evolves your test suite based on what users actually do.", tag: "RUM insights · Coverage delta · Auto-evolve" },
      ],
      capabilities: [
        { icon: "clipboard-list", title: "Test Planning as Code", body: "Scenarios live as .md files in your repo — version-controlled, agent-readable, and organised like source code. No more spreadsheets or disconnected tools." },
        { icon: "drama", title: "AI + Playwright Hybrid Tests", body: "Standard Playwright scripts with natural-language AI steps mixed in where scripted steps become brittle. Fast and scalable, with agentic flexibility where it matters." },
        { icon: "radio-tower", title: "Real User Coverage Insights", body: "Instrument your app to track real production event sequences. Compare against test coverage to identify what real users do that your tests don't cover yet." },
      ],
    },
    // WHY ENNOBLER
    {
      type: "whyGrid",
      anchor: "why",
      eyebrow: "Why En'nobler",
      title: "QA that pays for itself.",
      featured: {
        title: "The only QAaS provider that puts skin in the game.",
        body: "Traditional QA vendors bill hours regardless of outcomes. We offer performance-linked engagements where our commercial success is tied directly to your quality metrics improving.",
        cta: { label: "See performance models →", to: "#engagement" },
      },
      cards: [
        { num: "72h", title: "Onboarding, not onboarding theatre", body: "Most QA vendors take weeks to get a single tester productive. We have your first test results within 72 hours of scope sign-off. No lengthy discovery phases, no padded timelines." },
        { num: "AI", title: "Human judgment backed by autonomous intelligence", body: "Our engineers are backed by an AI platform that plans, executes, and evolves tests autonomously — giving you 10× the coverage at the same cost as a traditional manual team." },
        { num: "Sri Lanka", title: "Global QA expertise, strategic timezone advantage", body: "Based in Colombo — we overlap with Asia-Pacific, Middle East, and European business hours, making us ideal for round-the-clock testing cycles across global release teams." },
        { num: "0", title: "Zero lock-in, full transparency", body: "Every artefact we produce — test plans, scripts, reports — is yours from day one. No proprietary formats, no vendor lock-in. Built in your stack, stored in your repo." },
      ],
    },
    // INDUSTRIES
    {
      type: "iconGrid",
      anchor: "industries",
      eyebrow: "Industries We Serve",
      title: "Built for every vertical that ships software.",
      items: [
        { icon: "banknote", name: "Finance & Banking" },
        { icon: "heart-pulse", name: "Healthcare" },
        { icon: "shopping-cart", name: "E-Commerce" },
        { icon: "gamepad-2", name: "Gaming" },
        { icon: "graduation-cap", name: "E-Learning" },
        { icon: "radio-tower", name: "Telecoms" },
        { icon: "plane", name: "Travel & Leisure" },
        { icon: "tv", name: "Media & Entertainment" },
        { icon: "factory", name: "Manufacturing" },
        { icon: "landmark", name: "Government" },
        { icon: "truck", name: "Logistics" },
        { icon: "rocket", name: "SaaS & Startups" },
      ],
    },
    // HOW IT WORKS
    {
      type: "funnel",
      anchor: "how-it-works",
      eyebrow: "How It Works",
      title: "From first call to first results in 72 hours.",
      subtitle:
        "Our funnel is built to move fast. No multi-week discovery, no proposal theatre. Just structured onboarding that gets quality results into your hands immediately.",
      steps: [
        { title: "Free 30-minute QA audit call", body: "We ask the right questions about your product, tech stack, release velocity, and current pain points. No sales pitch — just a structured discovery that gives you immediate value, whether you engage with us or not. We'll identify your top 3 risk areas on the call.", chips: ["30 minutes", "No commitment", "Immediate insights"] },
        { title: "Tailored scope & engagement model", body: "Based on your stage, team size, and risk profile, we propose the right engagement model — project, retainer, dedicated, or performance-based. You get a clear scope document within 24 hours, with transparent pricing and zero hidden fees.", chips: ["24h turnaround", "Transparent pricing", "Choose your model"] },
        { title: "Rapid onboarding & first results", body: "We integrate with your tools (Jira, Linear, GitHub, Slack), access your codebase, and start producing test plans and initial findings within 72 hours. No weeks of setup. No lengthy knowledge transfer sessions before any testing begins.", chips: ["72h to first results", "Your toolchain", "AI-assisted setup"] },
        { title: "Continuous improvement loop", body: "Every cycle, our AI platform analyses real user behaviour, test results, and coverage data to evolve your test suite. Monthly quality reports with plain-English insights, not just dashboards. Quarterly maturity reviews to keep raising the bar.", chips: ["Monthly QA reports", "RUM-informed testing", "Quarterly reviews"] },
      ],
    },
    // TESTIMONIALS
    {
      type: "testimonials",
      eyebrow: "Client Results",
      title: "What happens when QA stops being an afterthought.",
      items: [
        { quote: "We went from dreading release day to shipping confidently every two weeks. The defect escape rate dropped by 44% in the first quarter, which directly impacted our NPS score.", author: "Arjun Mehta", role: "CTO, FinTech SaaS · Series B", rating: 5 },
        { quote: "The dedicated team model meant we had senior QA engineers in our standups from day one. They felt like our own hires — but we could scale down instantly after a big launch.", author: "Sarah Chen", role: "VP Engineering · E-Commerce Platform", rating: 5 },
        { quote: "The performance-based model was the deciding factor. We'd been burned by QA vendors before. Knowing their fee was tied to our defect reduction made the decision easy.", author: "Omar Al-Hassan", role: "Product Director · Healthcare App", rating: 5 },
      ],
    },
    // FINAL CTA
    {
      type: "ctaFinal",
      anchor: "contact",
      title: "Stop hoping your software works. {Know that it does.}",
      body: "Get a free 30-minute QA audit call. We'll identify your top three quality risks and recommend the right engagement model — no commitment, no pitch, just clarity.",
      ctas: [
        { label: "Book a free audit call →", to: "mailto:hello@en-nobler.com", variant: "white" },
        { label: "Explore services", to: "#engagement", variant: "outline" },
      ],
      stats: [
        { value: "72h", label: "To first results" },
        { value: "$0", label: "Cost to audit" },
        { value: "100%", label: "Artefacts are yours" },
      ],
    },
  ],
};
