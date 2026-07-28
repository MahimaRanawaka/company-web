import { useBrand } from "@/brand/useBrand";
import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerServices } from "@/content/ennobler/services";
import { ooloServices } from "@/content/oolo/services";

const ennoblerScrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "Core Services" },
  { id: "section-2", label: "How We Work" },
  { id: "section-3", label: "Our Approach" },
  { id: "section-4", label: "Get Started" },
];

const ooloScrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "What We Do" },
  { id: "section-2", label: "Core Services" },
  { id: "section-3", label: "How We Work" },
  { id: "section-4", label: "Who We Support" },
  { id: "section-5", label: "Why Choose Oolo" },
  { id: "section-6", label: "Get Started" },
];

export default function Services() {
  const { brand } = useBrand();
  const isEnnobler = brand === "ennobler";
  return (
    <>
      <Page content={isEnnobler ? ennoblerServices : ooloServices} />
      <ScrollMap sections={isEnnobler ? ennoblerScrollSections : ooloScrollSections} />
    </>
  );
}
