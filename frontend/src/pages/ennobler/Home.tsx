import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerHome } from "@/content/ennobler/home";

const scrollSections = [
  { id: "section-0", label: "Intro" },
  { id: "section-3", label: "Partners" },
  { id: "section-4", label: "Problems & Solutions" },
  { id: "section-5", label: "Services" },
  { id: "section-6", label: "How To Work With Us" },
  { id: "section-7", label: "QaaS" },
  { id: "section-8", label: "Products" },
  { id: "section-9", label: "Process" },
  { id: "section-10", label: "Case Studies" },
  { id: "section-11", label: "Our Brands" },
  { id: "section-12", label: "Get Started" },
];

export default function EnnoblerHome() {
  return (
    <>
      <Page content={ennoblerHome} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
