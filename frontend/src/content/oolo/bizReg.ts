import type { PageContent } from "../types";

export const ooloBizReg: PageContent = {
  title: "Oolo — Business Registration & Launch Support",
  sections: [
    // HERO
    {
      type: "hero",
      eyebrow: "Oolo — Business Registration & Launch Support",
      title: "Start your business with the right foundation, brand, website, and launch plan.",
      subtitle:
        "We help early-stage founders move from idea to registered, branded, digital, and market-ready with one clear startup launch pathway.",
      primaryCta: { label: "View Launch Pathway", to: "#launch-pathway" },
      secondaryCta: { label: "Explore Packages", to: "#packages" },
      facts: [
        { label: "Setup clarity", value: "Registration guidance, document checklist, and next-step direction." },
        { label: "Brand readiness", value: "Logo direction, messaging, profile, and launch identity basics." },
        { label: "Digital launch", value: "Website, social setup, Google profile, and campaign support." },
      ],
    },
    // SERVICE SCOPE — keyword grid
    {
      type: "features",
      eyebrow: "Service Scope",
      title: "A focused page for founders who need more than basic registration.",
      subtitle: "The full business-starting journey — without making Oolo sound like an accounting firm.",
      columns: 3,
      items: [
        { title: "Registration Guidance", body: "Process and document direction." },
        { title: "Name Search", body: "Business name suitability support." },
        { title: "TIN Guidance", body: "Tax registration next steps." },
        { title: "Brand Setup", body: "Identity, message, and profile." },
        { title: "Website Launch", body: "Landing page or starter website." },
        { title: "Marketing Support", body: "Launch posts and campaign plan." },
      ],
    },
    // WHAT WE HELP WITH
    {
      type: "features",
      eyebrow: "What We Help With",
      title: "From business idea to a launch-ready presence.",
      subtitle: "Four practical support areas that connect registration with Oolo and En'nobler.",
      columns: 4,
      numbered: true,
      items: [
        { title: "Business Setup Guidance", body: "We help founders understand registration steps, document needs, business name preparation, and the setup path before they launch." },
        { title: "Brand Identity Setup", body: "We shape the first version of the business identity, including brand direction, basic logo approach, colour logic, messaging, and profile content." },
        { title: "Digital Presence Setup", body: "We support website or landing page creation, social media page setup, Google Business Profile direction, and essential online visibility." },
        { title: "Marketing Launch Kit", body: "We prepare first-month launch communication, launch post ideas, campaign direction, content calendar, and promotional messaging." },
      ],
    },
    // STARTUP LAUNCH JOURNEY
    {
      type: "steps",
      anchor: "launch-pathway",
      eyebrow: "Startup Launch Journey",
      title: "A clear seven-step pathway for new founders.",
      items: [
        { title: "Validate Idea", body: "Clarify the business concept, audience, offer, and basic launch goal." },
        { title: "Check Name", body: "Shortlist business names and prepare for name suitability checks." },
        { title: "Prepare Documents", body: "Guide founders on required information and registration documentation." },
        { title: "Build Brand", body: "Create the first brand identity direction, message, and business profile." },
        { title: "Launch Website", body: "Set up a landing page, starter website, or digital business presence." },
        { title: "Start Campaign", body: "Prepare launch posts, campaign plan, and first-month content direction." },
        { title: "Grow Support", body: "Continue with Oolo marketing support or En'nobler technical services." },
      ],
    },
    // TOOLS & FREE RESOURCES
    {
      type: "features",
      eyebrow: "Tools & Free Resources",
      title: "Useful lead magnets for founders.",
      subtitle: "Future interactive tools, downloadable checklists, or consultation entry points.",
      columns: 3,
      numbered: true,
      items: [
        { title: "Business Name Idea Generator", body: "A simple tool or form to help founders shortlist business names before registration." },
        { title: "Startup Cost Estimator", body: "A guided estimator for basic registration, branding, website, and launch costs." },
        { title: "Website Launch Checklist", body: "Confirm domain, content, service pages, contact flow, and launch readiness." },
        { title: "Marketing Readiness Checklist", body: "A quick readiness check for content, social channels, offer clarity, and campaign assets." },
        { title: "Registration Checklist", body: "A founder-friendly checklist for required details, documents, and registration preparation." },
        { title: "Free Consultation Form", body: "A low-friction inquiry form to understand the founder's idea and recommend the right setup path." },
      ],
    },
    // PACKAGES
    {
      type: "engagement",
      anchor: "packages",
      eyebrow: "Packages",
      title: "Simple package levels, flexible pricing.",
      subtitle: "Help users self-select their need level while keeping pricing flexible for discussion.",
      plans: [
        {
          badge: "Starter",
          name: "Starter Setup",
          tagline: "For founders who mainly need registration guidance and a clear setup checklist.",
          features: ["Business registration guidance", "Document checklist", "Business name support", "Basic consultation form"],
          cta: { label: "Choose Starter", to: "/contact" },
        },
        {
          badge: "Recommended",
          name: "Launch Setup",
          tagline: "For founders who need registration guidance plus brand identity and a starter digital presence.",
          features: ["Registration & setup guidance", "Brand direction & basic identity", "Landing page or starter website", "Social page setup direction", "Launch content basics"],
          cta: { label: "Choose Launch", to: "/contact" },
          highlighted: true,
          popular: "Recommended",
        },
        {
          badge: "Growth",
          name: "Growth Setup",
          tagline: "For businesses that need complete setup, website support, social presence, and launch marketing.",
          features: ["Full setup guidance", "Brand identity & business profile", "Website & social setup", "Launch campaign plan", "First-month content calendar"],
          cta: { label: "Choose Growth", to: "/contact" },
        },
      ],
    },
    // ECOSYSTEM CONNECTION
    {
      type: "features",
      eyebrow: "Ecosystem Connection",
      title: "Setup, technology, and marketing — connected.",
      subtitle: "We guide founders into Oolo for marketing and En'nobler for website, software, platform, automation, and technical support.",
      columns: 3,
      items: [
        { title: "Business Registration & Launch", body: "Founder guidance, setup path, checklist, brand and launch planning." },
        { title: "Oolo", body: "Branding, content, launch campaign, social media, and growth strategy." },
        { title: "En'nobler", body: "Website, software, platform, automation, and technical product development." },
      ],
    },
    // FAQ
    {
      type: "faq",
      anchor: "faq",
      eyebrow: "FAQ",
      title: "Questions founders ask before contacting us.",
      subtitle: "Simple, practical, and focused on trust-building.",
      items: [
        { q: "Can you help me register a business in Sri Lanka?", a: "Yes — we provide guidance and coordination across the registration process, from name checks to document preparation and next steps." },
        { q: "What documents do I need to prepare?", a: "We give you a founder-friendly checklist of the required details and documents based on your business type." },
        { q: "Can you help with a business name?", a: "We help you shortlist names and prepare for business name suitability checks." },
        { q: "Do you provide TIN or tax registration guidance?", a: "We guide you on the tax registration next steps; specialised tax work is coordinated with qualified professionals where needed." },
        { q: "Can you also build my website?", a: "Yes — through En'nobler we can set up a landing page, starter website, or a full digital presence." },
        { q: "Can Oolo help me launch my brand online?", a: "Absolutely. Oolo handles brand identity, launch content, social setup, and your first campaign." },
        { q: "How long does the setup process take?", a: "It depends on the package and your readiness, but our pathway is designed to move from idea to launch as quickly as possible." },
        { q: "Do you provide accounting or only guidance?", a: "We provide guidance and coordination. Where legal, tax, or accounting services are involved, qualified professionals or official partners handle them." },
      ],
    },
    // FINAL CTA
    {
      type: "cta",
      anchor: "final",
      eyebrow: "Launch",
      title: "Ready to start your business?",
      body: "Tell us your idea. We'll help you understand the setup path, digital requirements, brand direction, and launch plan.",
      cta: { label: "Choose a Setup Path", to: "/contact" },
    },
  ],
};
