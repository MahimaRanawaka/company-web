export interface CaseStudyDetail {
  slug: string;
  tag: string;
  brand: "ennobler" | "oolo";
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  services: string[];
  cover?: string;
  overview: string;
  sections: {
    title: string;
    body: string;
    bullets?: string[];
    checklist?: string[];
  }[];
  outcome: {
    summary: string;
    points: string[];
  };
  keywords: string[];
}

export const ceylonRagaReserve: CaseStudyDetail = {
  slug: "ceylon-raga-reserve",
  tag: "Oolo Marketing Services",
  brand: "oolo",
  title: "Ceylon Raga Reserve",
  subtitle: "Premium Masala Brew Packaging Design",
  client: "Ceylon Raga Reserve",
  industry: "Premium Tea & Masala Beverage",
  services: [
    "Luxury Packaging Design",
    "Character Design",
    "Handcrafted Illustration",
    "Print-Ready Packaging System",
  ],
  overview:
    "Ceylon Raga Reserve is a premium masala brew brand built around the richness of Sri Lankan heritage, natural ingredients, and luxury tea culture. Our objective was to design more than a beautiful package — we created a premium physical brand experience where every visual detail communicates authenticity, craftsmanship, and quality from the first shelf interaction.",
  sections: [
    {
      title: "Creative Concept: Luxury Meets Sri Lankan Heritage",
      body: "The packaging direction was built around a premium visual language that bridges traditional Sri Lankan craftsmanship with modern luxury aesthetics. The final design uses a rich dark-green and gold visual system to create a sophisticated, high-value appearance while maintaining a strong connection with the origin of the product.",
      bullets: [
        "Sri Lankan spice heritage",
        "Traditional craftsmanship",
        "Royal luxury aesthetics",
        "Natural ingredient storytelling",
        "Modern premium packaging trends",
      ],
    },
    {
      title: "Premium Character Design: Creating Brand Recognition",
      body: "A custom brand character was developed as the central storytelling element of the package. Instead of relying on common tea packaging visuals, we created a unique character identity that represents the brand's core values — making the product instantly recognisable on the shelf.",
      bullets: [
        "Heritage and cultural identity",
        "Premium quality positioning",
        "Trust and authenticity",
        "Traditional knowledge and expertise",
      ],
    },
    {
      title: "Hand-Drawn Artwork: Beyond Generic Illustration",
      body: "Every botanical and spice element was developed through custom hand-drawn artwork rather than generic ingredient images. During research, we discovered that Sri Lankan cinnamon has its own unique identity, history, and characteristics compared to cinnamon from other regions — so we moved beyond generic visuals and focused on representing true Sri Lankan cinnamon authenticity within the artwork.",
      bullets: [
        "Cinnamon (true Sri Lankan variety)",
        "Cardamom",
        "Clove",
        "Ginger",
        "Tea botanicals",
        "Natural spice elements",
      ],
    },
    {
      title: "Packaging Design System",
      body: "The complete box structure was designed as a unified brand experience across all panels.",
      bullets: [
        "Front Panel — brand recognition, premium positioning, character storytelling, product identity",
        "Side Panels — product benefits, preparation instructions, customer guidance",
        "Back Panel — brand story, ingredient information, product details, compliance requirements",
      ],
    },
    {
      title: "High-End Print & Finishing",
      body: "This project was approached as a real packaging production design — not only a digital presentation. The shiny premium packaging appearance was developed with print possibilities in mind.",
      checklist: [
        "Luxury surface appearance",
        "Metallic gold finishing potential",
        "Spot UV enhancement areas",
        "Premium texture applications",
        "Professional packaging export standards",
      ],
    },
    {
      title: "Multi-Language & Content Management",
      body: "The packaging needed to communicate important product information in three languages while maintaining a premium visual hierarchy. The challenge was preserving the complete message without compromising the luxury appearance.",
      bullets: [
        "Three-language content integration",
        "Original client messaging requirements",
        "Translation placement and balance",
        "Typography hierarchy",
        "Information readability at print scale",
      ],
    },
    {
      title: "Production & Compliance Quality Control",
      body: "Before final delivery, a full production-readiness review was performed to ensure the artwork was structured for commercial printing and manufacturing.",
      checklist: [
        "Packaging layout checks",
        "Dieline alignment verification",
        "Print preparation review",
        "Content placement validation",
        "Manufacturing compatibility checks",
      ],
    },
  ],
  outcome: {
    summary:
      "Ceylon Raga Reserve became a packaging experience that goes beyond aesthetics — every visual detail communicates the story, origin, and quality of the product before the first sip.",
    points: [
      "Strategic brand thinking",
      "Character-driven storytelling",
      "Handcrafted illustration system",
      "Sri Lankan ingredient authenticity",
      "Premium print-ready execution",
    ],
  },
  keywords: [
    "premium tea packaging design",
    "tea brand identity design",
    "Sri Lankan packaging design",
    "masala tea packaging",
    "character design",
    "custom illustration packaging",
    "luxury product packaging",
    "print-ready packaging design",
    "food packaging design",
    "brand storytelling design",
  ],
};
