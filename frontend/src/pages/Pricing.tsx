import { useBrand } from "@/brand/useBrand";
import { Page } from "@/components/Page";
import { ennoblerPricing } from "@/content/ennobler/pricing";
import { ooloPricing } from "@/content/oolo/pricing";

export default function Pricing() {
  const { brand } = useBrand();
  return <Page content={brand === "ennobler" ? ennoblerPricing : ooloPricing} />;
}
