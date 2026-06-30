import type { LegalDoc } from "./types";

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated: "13 June 2026",
  intro:
    "This Privacy Policy explains how En'nobler (Private) Limited (Company No. PV 00338862) (\"we\", \"us\", \"our\"), operating the En'nobler and Oolo brands, collects, uses, shares, and protects personal data when you use www.en-nobler.com, contact us, or engage our software, QA, AI, and marketing services. We handle personal data in accordance with the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka (the \"PDPA\"), and — where it applies to data of individuals in those regions — the EU/UK General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA).",
  sections: [
    {
      id: "who-we-are",
      heading: "1. Who we are",
      paragraphs: [
        "En'nobler (Private) Limited is a private limited company incorporated in Sri Lanka under the Companies Act, No. 7 of 2007, bearing company number PV 00338862, with its registered office at No. 35, Nisansala, Doowawaththa, Telijjawila, Sri Lanka. We operate two brands: En'nobler (software engineering, QA, and AI services) and Oolo (creative and growth marketing services).",
        "Under the PDPA we act as the \"controller\" of personal data collected through our website and direct client relationships, and we determine the purposes and means of processing that data. Where we process personal data on behalf of a client (for example, end-user data within a system we build or a campaign we run), we act as a \"processor\" under that client's documented instructions and a separate data processing agreement.",
      ],
      sub: [
        {
          heading: "Data protection contact",
          paragraphs: [
            "Questions about this policy or your personal data can be sent to hello@en-nobler.com.",
          ],
        },
      ],
    },
    {
      id: "data-we-collect",
      heading: "2. Information we collect",
      paragraphs: ["We collect the following categories of personal data:"],
      bullets: [
        "Contact and identity data — name, email, phone, company, role, and the content of messages you send us through forms or email.",
        "Application data — where you apply for a role: CV, work history, portfolio links, and any information you choose to share.",
        "Commercial data — project requirements, contracts, billing and payment details, and correspondence relating to services.",
        "Technical and usage data — IP address, device and browser type, pages viewed, referring URLs, and similar analytics data collected via cookies and comparable technologies (see our Cookie Policy).",
        "Client-provided data — personal data contained in systems we develop, test, or market on a client's behalf, processed strictly under the client's instructions.",
      ],
    },
    {
      id: "how-we-use",
      heading: "3. How we use your information",
      paragraphs: ["We use personal data to:"],
      bullets: [
        "Respond to enquiries, prepare proposals, and provide the services you request.",
        "Operate, maintain, secure, and improve our website and services.",
        "Manage contracts, billing, and the business relationship.",
        "Evaluate job applications and manage recruitment.",
        "Send service communications and, where permitted, relevant marketing — which you can opt out of at any time.",
        "Comply with our legal, tax, accounting, and regulatory obligations under Sri Lankan law.",
      ],
    },
    {
      id: "legal-bases",
      heading: "4. Lawful basis for processing",
      paragraphs: [
        "We process personal data only where we have a lawful basis to do so under the PDPA. Depending on the circumstances, our lawful bases include: the performance of a contract with you (to deliver services you request); your consent (for certain marketing and non-essential cookies, which you may withdraw at any time); our legitimate interests in operating, securing, and growing our business in a manner that does not override your rights and freedoms; and compliance with a legal obligation to which we are subject. Where the GDPR applies to processing of data of individuals in the EU/UK, we rely on the equivalent lawful bases under that regulation.",
      ],
    },
    {
      id: "sharing",
      heading: "5. How we share information",
      paragraphs: [
        "We do not sell your personal data. We share it only with: service providers and processors who help us operate (e.g. hosting, email delivery, analytics, payment processing) under appropriate contractual safeguards consistent with the PDPA; professional advisers, auditors, and regulators where required by law; and an acquirer or successor in the event of a business transfer. Each recipient is bound to handle the data consistently with this policy and applicable law.",
      ],
    },
    {
      id: "international-transfers",
      heading: "6. Cross-border data transfers",
      paragraphs: [
        "We may process or store personal data outside Sri Lanka, including where our service providers operate. Where we transfer personal data across borders, we do so in accordance with the cross-border processing provisions of the PDPA and put in place appropriate safeguards. Where personal data of individuals in the EU/UK is transferred, we additionally rely on a recognised transfer mechanism — such as the European Commission's Standard Contractual Clauses, the UK International Data Transfer Agreement, or an adequacy decision — to ensure your data remains protected.",
      ],
    },
    {
      id: "retention",
      heading: "7. Data retention",
      paragraphs: [
        "We keep personal data only for as long as necessary for the purposes set out in this policy, including to meet legal, accounting, or reporting requirements under Sri Lankan law. Enquiry and contact-form data is retained for 6 months from the date of last contact. Recruitment and job application data is retained for 1 year from the close of the relevant recruitment process, unless a candidate is hired (in which case it transfers to the employment record). Contractual and billing records are retained for the period required under applicable Sri Lankan tax and company law. When data is no longer needed, we securely delete or anonymise it.",
      ],
    },
    {
      id: "your-rights",
      heading: "8. Your rights",
      paragraphs: [
        "Subject to the conditions and exemptions in the PDPA, you have the right to be informed about, and to request access to, the personal data we hold about you; to request correction of inaccurate or incomplete data; to request erasure; to withdraw consent where processing is based on consent; and to object to certain processing. To exercise any of these rights, contact us at hello@en-nobler.com. We will respond within the timeframe required by the PDPA.",
        "If you are in the EU/UK, you also have the corresponding rights under the GDPR. If you are a California resident, you have rights under the CCPA/CPRA, including the right to know, delete, and correct your personal information and to opt out of its sale or sharing (we do not sell personal data).",
      ],
    },
    {
      id: "complaints",
      heading: "9. Complaints",
      paragraphs: [
        "If you have a concern about how we handle your personal data, please contact us first at hello@en-nobler.com so we can try to resolve it. You also have the right to lodge a complaint with the Data Protection Authority of Sri Lanka established under the PDPA, or, where applicable, with your local supervisory authority in the EU/UK.",
      ],
    },
    {
      id: "security",
      heading: "10. How we protect your data",
      paragraphs: [
        "We maintain technical and organisational measures appropriate to the risk, as required by the PDPA — including access controls, encryption in transit, secure development and QA practices, and vendor due diligence. No method of transmission or storage is completely secure, but we work to protect your data and to notify you and the Data Protection Authority of a qualifying personal data breach where required by law.",
      ],
    },
    {
      id: "children",
      heading: "11. Children's privacy",
      paragraphs: [
        "Our website and services are intended for businesses and individuals aged 18 and over. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact us and we will delete it.",
      ],
    },
    {
      id: "changes",
      heading: "12. Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The effective date at the top reflects the latest version, and material changes will be highlighted on this page. Please review it periodically.",
      ],
    },
    {
      id: "contact",
      heading: "13. Contact us",
      paragraphs: [
        "For any privacy question or request, contact us at hello@en-nobler.com or by post at En'nobler (Private) Limited, No. 35, Nisansala, Doowawaththa, Telijjawila, Sri Lanka.",
      ],
    },
  ],
};
