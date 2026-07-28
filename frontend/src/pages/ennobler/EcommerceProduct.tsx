import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerEcommerceProduct } from "@/content/misc";

const scrollSections = [
  { id: "section-0", label: "Introduction" },
  { id: "section-1", label: "Overview" },
  { id: "section-2", label: "Features" },
  { id: "section-3", label: "Workflow" },
  { id: "section-4", label: "Product Specs" },
  { id: "section-5", label: "Quality Layer" },
  { id: "section-6", label: "Get Started" },
];

export default function EcommerceProduct() {
  return (
    <>
      <Page content={ennoblerEcommerceProduct} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
