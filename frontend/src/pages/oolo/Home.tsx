import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ooloHome } from "@/content/oolo/home";

const scrollSections = [
  { id: "section-0",  label: "Intro" },
  { id: "section-3",  label: "Partners" },
  { id: "section-4",  label: "Problems & Solutions" },
  { id: "section-5",  label: "Services" },
  { id: "section-6",  label: "How We Work" },
  { id: "section-7",  label: "QaaS" },
  { id: "section-8",  label: "Growth" },
  { id: "section-9",  label: "Features" },
  { id: "section-10", label: "Get Started" },
  { id: "section-11", label: "Case Studies" },
  { id: "section-12", label: "Our Brands" },
];

export default function OoloHome() {
  return (
    <>
      <Page content={ooloHome} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
