import { Page } from "@/components/Page";
import { ScrollMap } from "@/components/ScrollMap";
import { ennoblerTourismProduct } from "@/content/misc";

const scrollSections = [
  { id: "section-0", label: "Introduction" },
  { id: "section-1", label: "What's Inside" },
  { id: "section-2", label: "Get Started" },
];

export default function TourismProduct() {
  return (
    <>
      <Page content={ennoblerTourismProduct} />
      <ScrollMap sections={scrollSections} />
    </>
  );
}
