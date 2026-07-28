import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ooloChikku } from "@/content/oolo/chikku";

const scrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "Why Chikku Exists" },
  { id: "section-2", label: "Story Journey" },
  { id: "section-3", label: "Meet the Crew" },
  { id: "section-4", label: "Real-World Meaning" },
  { id: "section-5", label: "Oolo Connection" },
  { id: "section-6", label: "Get Started" },
];

export default function Chikku() {
  return (
    <>
      <Page content={ooloChikku} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
