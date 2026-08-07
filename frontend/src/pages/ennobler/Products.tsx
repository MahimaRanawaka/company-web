import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerProducts } from "@/content/misc";

const scrollSections = [
  { id: "section-0", label: "Overview" },
  { id: "section-1", label: "Our Products" },
  { id: "section-3", label: "Why Start Here" },
  { id: "section-4", label: "What You Get" },
  { id: "section-5", label: "Get Started" },
];

export default function Products() {
  return (
    <>
      <Page content={ennoblerProducts} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
