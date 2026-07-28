import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ooloBizReg } from "@/content/oolo/bizReg";

const scrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "Service Scope" },
  { id: "section-2", label: "What We Help With" },
  { id: "section-3", label: "Launch Journey" },
  { id: "section-4", label: "Free Tools" },
  { id: "section-5", label: "Packages" },
  { id: "section-6", label: "Ecosystem" },
  { id: "section-7", label: "FAQ" },
  { id: "section-8", label: "Get Started" },
];

export default function BizReg() {
  return (
    <>
      <Page content={ooloBizReg} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
