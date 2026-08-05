import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerQaas } from "@/content/ennobler/qaas";

const scrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-2", label: "Engagement Model" },
  { id: "section-3", label: "AI Technology" },
  { id: "section-4", label: "Why En'nobler" },
  { id: "section-5", label: "Industries" },
  { id: "section-6", label: "How It Works" },
  { id: "section-7", label: "Get Started" },
];

export default function Qaas() {
  return (
    <>
      <Page content={ennoblerQaas} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
