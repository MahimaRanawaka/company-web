import { Check } from "lucide-react";
import type { PricingTableSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { broadcastEngagementModel } from "@/lib/engagementModelSignal";
import { cn } from "@/lib/utils";

export function PricingTable({ data }: { data: PricingTableSection }) {
  const hasHeader = Boolean(data.eyebrow || data.title);
  const hasTable = Boolean(data.rows && data.rows.length > 0);

  return (
    <section
      id={data.anchor}
      className={cn("bg-canvas", hasTable || hasHeader ? "py-20 md:py-24" : "pb-20 pt-0 md:pb-24")}
    >
      <Container>
        {hasHeader && (
          <div className="mx-auto mb-10 max-w-2xl text-center">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            {data.title && <h2 className="text-3xl md:text-4xl">{data.title}</h2>}
            {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
          </div>
        )}

        {hasTable && data.columns && (
          <div className="overflow-x-auto rounded-lg border border-hairline bg-surface">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hairline bg-surface-2">
                  {data.columns.map((col) => (
                    <th key={col} className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-subtle">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows!.map((r) => (
                  <tr key={r.name} className="border-b border-hairline last:border-0">
                    <td className="px-5 py-4 align-top text-base font-semibold text-ink">{r.name}</td>
                    <td className="whitespace-nowrap px-5 py-4 align-top text-sm font-semibold text-ink">{r.price}</td>
                    <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted">{r.body}</td>
                    {data.columns!.length === 4 && (
                      <td className="px-5 py-4 align-top text-sm leading-relaxed text-muted">{r.bestFor}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data.custom && (
          <div className={cn("grid gap-6 rounded-lg border border-hairline bg-surface p-6 md:grid-cols-[1.1fr_1fr_auto] md:items-center md:p-8", hasTable && "mt-4")}>
            <div>
              {data.custom.eyebrow && (
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-subtle">{data.custom.eyebrow}</div>
              )}
              <h3 className="text-xl">{data.custom.title}</h3>
              {data.custom.price && <div className="mt-1.5 text-lg font-semibold text-ink">{data.custom.price}</div>}
              <p className="mt-2 text-sm leading-relaxed text-muted">{data.custom.body}</p>
            </div>
            {data.custom.features && data.custom.features.length > 0 && (
              <ul className="space-y-0">
                {data.custom.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 border-t border-hairline py-2.5 text-sm text-muted first:border-0">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-3 md:flex-col">
              {data.custom.ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.label}
                  to={cta.to}
                  variant={i === 0 ? "primary" : "outline"}
                  className="w-full"
                  onClick={cta.model ? () => broadcastEngagementModel(cta.model!) : undefined}
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        )}

        {data.disclaimer && (
          <p className="mt-4 rounded-md border border-hairline bg-surface-2 px-4 py-3 text-xs leading-relaxed text-muted">
            {data.disclaimer}
          </p>
        )}
      </Container>
    </section>
  );
}
