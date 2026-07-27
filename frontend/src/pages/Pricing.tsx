import { useBrand } from "@/brand/useBrand";
import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerPricing } from "@/content/ennobler/pricing";
import { ooloPricing } from "@/content/oolo/pricing";

const ennoblerScrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-2", label: "Which Model" },
  { id: "section-3", label: "Project-Based" },
  { id: "section-4", label: "Retainer" },
  { id: "section-6", label: "Team Hiring" },
  { id: "section-8", label: "Performance-Based" },
  { id: "section-11", label: "Bundles" },
  { id: "section-12", label: "Decision Guide" },
  { id: "section-13", label: "How Pricing Works" },
  { id: "section-14", label: "FAQ" },
  { id: "section-15", label: "Get Started" },
];

const ooloScrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-2", label: "Which Model" },
  { id: "section-3", label: "Project-Based" },
  { id: "section-4", label: "Retainer" },
  { id: "section-6", label: "Team Hiring" },
  { id: "section-8", label: "Performance-Based" },
  { id: "section-11", label: "Bundles" },
  { id: "section-12", label: "Comparison" },
  { id: "section-14", label: "Decision Guide" },
  { id: "section-15", label: "FAQ" },
  { id: "section-16", label: "Get Started" },
];

export default function Pricing() {
  const { brand } = useBrand();
  const isEnnobler = brand === "ennobler";
  return (
    <>
      <Page content={isEnnobler ? ennoblerPricing : ooloPricing} />
      <ScrollMap sections={isEnnobler ? ennoblerScrollSections : ooloScrollSections} />
    </>
  );
}
