import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { portfolioContent } from "@/content/portfolio";

const scrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "Two Brands" },
  { id: "section-2", label: "Selected Work" },
  { id: "section-3", label: "How We Deliver" },
  { id: "section-4", label: "Delivery Method" },
  { id: "section-5", label: "Who We Support" },
  { id: "section-6", label: "Get Started" },
];

export default function Portfolio() {
  return (
    <>
      <Page content={portfolioContent} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
