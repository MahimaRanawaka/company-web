import type { PageContent } from "../types";

export const ooloChikku: PageContent = {
  title: "Chikku and the Story",
  sections: [
    // HERO
    {
      type: "hero",
      eyebrow: "Chikku and the Story",
      title: "A Creative Revolution Against a {Soulless Future}.",
      subtitle:
        "Chikku is not just a character. He represents the fight to keep creativity, emotion, and human instinct alive in a world becoming too automated.",
      primaryCta: { label: "Explore the Story", to: "#story-journey" },
      secondaryCta: { label: "Meet the Crew", to: "#crew" },
      chips: ["Creative", "Human", "Bold", "Alive"],
      image: { src: "/heroes/chikku.webp", alt: "Chikku, the Oolo creative mascot, spraying a vivid orange creative burst" },
    },
    // CONCEPT
    {
      type: "prose",
      eyebrow: "01 / Why Chikku Exists",
      title: "Technology needs creativity to stay human.",
      paragraphs: [
        "Chikku represents the core belief behind Oolo: technology is powerful, but without creativity and human sensitivity, brands become cold, generic, and forgettable.",
        "His story shows why creative thinking, emotion, cultural instinct, and strategic storytelling still matter in the age of AI.",
      ],
    },
    // STORY JOURNEY — five acts
    {
      type: "checklist",
      anchor: "story-journey",
      eyebrow: "02 / Story Journey",
      title: "The Chikku storyline in five acts.",
      subtitle: "Each act can later become an illustrated panel or scroll animation.",
      items: [
        { title: "The Living World", body: "Chikku lives in a colourful world where nature, creativity, humour, and human warmth exist together — full of murals, playful inventions, music, and imagination." },
        { title: "The Portal's Warning", body: "Chikku opens a data portal and sees a dark future where AI has erased emotion, colour, imperfection, and creativity. Everything is optimized, but nothing feels alive." },
        { title: "The Decision", body: "Chikku chooses not to reject technology, but to make technology work with creativity. He starts building a rebel creative crew." },
        { title: "The Fight", body: "The system labels them as disruptors. Chikku and the crew use storytelling, design, video, sound, translation, prompt engineering, VFX, and ML to fight soulless automation." },
        { title: "The Endless Stand", body: "The battle never fully ends. As technology evolves, Chikku and his crew keep adapting to protect creativity, emotion, and real brand value." },
      ],
    },
    // CREW
    {
      type: "features",
      anchor: "crew",
      eyebrow: "03 / Meet the Crew",
      title: "Meet Chikku's creative crew.",
      subtitle: "Each crew member represents one creative or technical discipline inside Oolo's marketing world.",
      columns: 4,
      items: [
        { title: "REX — Content Strategist / Story Architect", body: "Builds narratives that reveal the real meaning behind a brand." },
        { title: "SHUTTER — Photographer / Videographer", body: "Captures unscripted truths, moments, and visual proof." },
        { title: "CRASH — Video Editor", body: "Turns chaos into sharp, emotional, story-led motion." },
        { title: "VANDAL — Graphic Designer", body: "Designs bold visuals that cut through noise." },
        { title: "SPIKE — Business Excellence Consultant", body: "Connects creativity to measurable business direction." },
        { title: "CIPHER — Translator", body: "Bridges language, culture, and audience understanding." },
        { title: "IGGY — Creative Director", body: "Shapes the vision and keeps every idea emotionally clear." },
        { title: "YO — Dubbing Artist", body: "Gives campaigns voice, tone, character, and impact." },
        { title: "SYNTH — Music & Audio Producer", body: "Creates sound that moves people and strengthens memory." },
        { title: "SYNTAX — Prompt Engineer", body: "Uses AI as a creative tool without losing human control." },
        { title: "NOVA — VFX Artist", body: "Adds visual energy, illusion, and cinematic imagination." },
        { title: "AXE — ML Engineer", body: "Builds intelligent systems that support creative decisions." },
      ],
    },
    // BRAND MEANING
    {
      type: "features",
      eyebrow: "04 / Real-World Meaning",
      title: "What this means for brands.",
      subtitle: "Connecting the fantasy storyline back to real business and marketing value.",
      columns: 3,
      numbered: true,
      items: [
        { title: "Technology Alone Is Not Enough", body: "Automation can create speed, but without human judgment, brands lose emotion and identity." },
        { title: "Creativity Builds Trust", body: "People connect with brands that feel human, meaningful, culturally aware, and emotionally clear." },
        { title: "Oolo Combines Both", body: "Oolo uses creative strategy, AI-aided execution, and human sensitivity to help brands grow without losing their soul." },
      ],
    },
    // OOLO CONNECTION
    {
      type: "prose",
      anchor: "oolo-connection",
      dark: true,
      eyebrow: "05 / Oolo Connection",
      title: "Chikku is the spirit behind Oolo.",
      paragraphs: [
        "Chikku's story reflects how Oolo works: we do not use technology to replace creativity. We use technology to support ideas, sharpen campaigns, reduce repetitive work, and help brands communicate with more feeling, clarity, and impact.",
      ],
    },
    // FINAL CTA
    {
      type: "cta",
      title: "Build a brand that still feels alive.",
      body: "Turn your ideas into stories, visuals, campaigns, and digital experiences that people remember.",
      cta: { label: "Start a Campaign", to: "/contact" },
    },
  ],
};
