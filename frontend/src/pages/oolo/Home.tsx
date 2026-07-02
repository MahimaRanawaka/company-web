import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ooloHome } from "@/content/oolo/home";

const scrollSections = [
  { id: "section-0",  label: "Intro" },
  { id: "section-3",  label: "Partners" },
  { id: "section-5",  label: "Problems & Solutions" },
  { id: "section-6",  label: "Services" },
  { id: "section-7",  label: "How We Work" },
  { id: "section-8",  label: "QaaS" },
  { id: "section-9",  label: "Growth" },
  { id: "section-10", label: "Features" },
  { id: "section-11", label: "Get Started" },
  { id: "section-12", label: "Case Studies" },
  { id: "section-13", label: "Our Brands" },
];

export default function OoloHome() {
  return (
    <>
      <Page content={ooloHome} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
