import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ooloHome } from "@/content/oolo/home";

const scrollSections = [
  { id: "section-0", label: "Intro" },
  { id: "section-3", label: "Partners" },
  { id: "section-5", label: "Problems & Solutions" },
  { id: "section-6", label: "Services" },
  { id: "section-7", label: "How We Work" },
  { id: "section-8", label: "Ecosystem" },
  { id: "section-10", label: "Industries" },
  { id: "section-11", label: "Chikku" },
  { id: "section-12", label: "Case Studies" },
  { id: "section-13", label: "Our Brands" },
  { id: "section-14", label: "Get Started" },
];

export default function OoloHome() {
  return (
    <>
      <Page content={ooloHome} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
