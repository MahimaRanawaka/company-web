import { Link } from "react-router-dom";
import type { ServiceCardsSection } from "@/content/types";
import { Eyebrow, SectionShell } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { Icon } from "@/lib/icons";
import { useBrand } from "@/brand/useBrand";
import { useServices } from "@/hooks/useCatalog";
import { ServiceArt } from "./ServiceArt";

export function ServiceCards({ data }: { data: ServiceCardsSection }) {
  const { brand } = useBrand();
  const live = useServices(brand);

  const items =
    data.source === "live"
      ? (live.data ?? []).map((s) => ({ title: s.title, summary: s.summary, to: `/${brand}/services/${s.slug}`, icon: s.icon, illustration: undefined as string | undefined, cardVariant: undefined as "compact" | undefined }))
      : (data.items ?? []);

  return (
    <SectionShell id={data.anchor}>
      {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
      {data.title && <h2 className="mb-10 text-3xl md:text-4xl">{data.title}</h2>}
      <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", data.bento && "[grid-auto-flow:dense]")}>
        {items.map((s, i) => {
          const featured = data.bento && i === 0;
          const compact = !featured && s.cardVariant === "compact";
          const card = (
            <div className={cn("lift group h-full overflow-hidden rounded-lg border border-hairline bg-surface", featured ? "flex flex-col justify-end p-8" : compact ? "p-5" : "p-6")}>
              <ServiceArt name={s.illustration} featured={featured} bold={compact} />
              <div className="relative z-10">
                <div className={cn("flex items-center gap-3", compact ? "mb-3" : "mb-4")}>
                  <span className={cn("grid place-items-center rounded-md bg-canvas", featured ? "h-12 w-12" : compact ? "h-9 w-9" : "h-10 w-10")}>
                    <Icon name={s.icon} className="text-accent" />
                  </span>
                  <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={featured ? "text-2xl md:text-3xl" : "text-lg"}>{s.title}</h3>
                <p className={cn("leading-relaxed text-muted", featured ? "mt-2 max-w-md text-base" : compact ? "mt-1.5 text-sm" : "mt-2 text-sm")}>{s.summary}</p>
                {s.to && <span className={cn("inline-block text-sm font-semibold text-accent", compact ? "mt-3" : "mt-4")}>Learn more →</span>}
              </div>
            </div>
          );
          const span = featured ? "md:col-span-2 lg:row-span-2" : undefined;
          return s.to ? (
            <Link key={s.title} to={s.to} className={span}>
              {card}
            </Link>
          ) : (
            <div key={s.title} className={span}>
              {card}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
