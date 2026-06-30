import { Link } from "react-router-dom";
import type { ServiceCardsSection } from "@/content/types";
import { Eyebrow, SectionShell } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { Icon } from "@/lib/icons";
import { useBrand } from "@/brand/useBrand";
import { useServices } from "@/hooks/useCatalog";

export function ServiceCards({ data }: { data: ServiceCardsSection }) {
  const { brand } = useBrand();
  const live = useServices(brand);

  const items =
    data.source === "live"
      ? (live.data ?? []).map((s) => ({ title: s.title, summary: s.summary, to: `/${brand}/services/${s.slug}`, icon: s.icon }))
      : (data.items ?? []);

  return (
    <SectionShell id={data.anchor}>
      {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
      {data.title && <h2 className="mb-10 text-3xl md:text-4xl">{data.title}</h2>}
      <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", data.bento && "[grid-auto-flow:dense]")}>
        {items.map((s, i) => {
          const featured = data.bento && i === 0;
          const card = (
            <div className={cn("lift group h-full rounded-lg border border-hairline bg-surface", featured ? "flex flex-col justify-end p-8" : "p-6")}>
              <div className="mb-4 flex items-center gap-3">
                <span className={cn("grid place-items-center rounded-md bg-canvas", featured ? "h-12 w-12" : "h-10 w-10")}>
                  <Icon name={s.icon} className="text-accent" />
                </span>
                <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={featured ? "text-2xl md:text-3xl" : "text-lg"}>{s.title}</h3>
              <p className={cn("mt-2 leading-relaxed text-muted", featured ? "max-w-md text-base" : "text-sm")}>{s.summary}</p>
              {s.to && <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>}
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
