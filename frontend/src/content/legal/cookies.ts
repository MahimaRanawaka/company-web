import type { LegalDoc } from "./types";

export const cookiesDoc: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  updated: "13 June 2026",
  intro:
    "This Cookie Policy explains how En'nobler (Private) Limited (Company No. PV 00338862), operating the En'nobler and Oolo brands, uses cookies and similar technologies on www.en-nobler.com. It should be read together with our Privacy Policy and reflects our obligations under the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka.",
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What are cookies?",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to remember your preferences, and to provide information to site owners. We also use similar technologies such as local storage, pixels, and tags, which we refer to collectively as \"cookies\" in this policy.",
      ],
    },
    {
      id: "types",
      heading: "2. Types of cookies we use",
      sub: [
        {
          heading: "Strictly necessary",
          paragraphs: [
            "Required for the website to function — for example, remembering your brand selection (En'nobler or Oolo) and security features. These cannot be switched off in our systems and do not require your consent.",
          ],
        },
        {
          heading: "Analytics / performance",
          paragraphs: [
            "Help us understand how visitors use the site so we can improve it — for example, which pages are visited and how people navigate. We use privacy-respecting analytics that do not track individuals across sites.",
          ],
        },
        {
          heading: "Functional",
          paragraphs: [
            "Remember choices you make (such as language or region preferences) to provide a more personalised experience.",
          ],
        },
        {
          heading: "Marketing",
          paragraphs: [
            "Used to measure campaign effectiveness and, where applicable, deliver relevant content. These are set only with your explicit consent.",
          ],
        },
      ],
    },
    {
      id: "managing",
      heading: "3. How to manage cookies",
      paragraphs: [
        "You can control and manage cookies directly through your browser settings. All major browsers allow you to view, block, or delete cookies — typically under Settings → Privacy or Settings → Security. Useful guides for the most common browsers:",
      ],
      bullets: [
        "Google Chrome: Settings → Privacy and security → Cookies and other site data",
        "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data",
        "Microsoft Edge: Settings → Cookies and site permissions → Cookies and site data",
        "Safari: Preferences → Privacy → Manage Website Data",
      ],
    },
    {
      id: "opt-out",
      heading: "4. Opting out by email",
      paragraphs: [
        "If you prefer not to manage cookies through your browser, you can contact us at hello@en-nobler.com to request that we limit non-essential data collection associated with your use of our website. We will respond within 10 business days.",
      ],
    },
    {
      id: "third-party-cookies",
      heading: "5. Third-party cookies",
      paragraphs: [
        "Some cookies may be set by third-party services we use, such as analytics or embedded content providers. Those providers are responsible for their own cookies, and we recommend reviewing their privacy and cookie policies. A current list of the third parties we use is available on request at hello@en-nobler.com.",
      ],
    },
    {
      id: "changes",
      heading: "6. Changes to this policy",
      paragraphs: [
        "We may update this Cookie Policy as our use of cookies evolves. The effective date at the top reflects the latest version.",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact us",
      paragraphs: [
        "Questions about our use of cookies can be sent to hello@en-nobler.com or by post to En'nobler (Private) Limited, No. 35, Nisansala, Doowawaththa, Telijjawila, Sri Lanka.",
      ],
    },
  ],
};
