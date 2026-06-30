import { useBrand } from "@/brand/useBrand";
import { Page } from "@/components/Page";
import { ennoblerServices } from "@/content/ennobler/services";
import { ooloServices } from "@/content/oolo/services";

export default function Services() {
  const { brand } = useBrand();
  return <Page content={brand === "ennobler" ? ennoblerServices : ooloServices} />;
}
