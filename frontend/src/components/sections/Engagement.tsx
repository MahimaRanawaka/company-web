import { Check } from "lucide-react";
import type { EngagementSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { broadcastEngagementModel } from "@/lib/engagementModelSignal";
import { cn } from "@/lib/utils";

const LG_WIDTH: Record<3 | 4, string> = {
  3: "lg:w-[calc(33.333%-1rem)]",
  4: "lg:w-[calc(25%-1.125rem)]",
};

export function Engagement({ data }: { data: EngagementSection }) {
  const lgWidth = LG_WIDTH[data.columns ?? 3];
  return (
    <section
      id={data.anchor}
      className={cn("bg-canvas pt-20 md:pt-24", data.tightBottom ? "pb-6 md:pb-8" : "pb-20 md:pb-24")}
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {data.plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex w-full flex-col rounded-xl border p-7 md:w-[calc(50%-0.75rem)]",
                lgWidth,
                p.highlighted
                  ? "border-accent bg-surface-2 shadow-lg md:-translate-y-3"
                  : "border-hairline bg-surface",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--brand-accent-fg))]">
                  {p.popular}
                </span>
              )}
              <span className="mb-3 inline-flex w-fit rounded-full border border-hairline px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                {p.badge}
              </span>
              <h3 className="text-xl">{p.name}</h3>
              {p.price && <div className="mt-1.5 text-lg font-semibold text-ink">{p.price}</div>}
              <p className="mt-1.5 text-sm italic text-muted">{p.tagline}</p>
              <ul className="my-6 flex-1 space-y-0">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 border-b border-hairline py-2.5 text-sm text-muted last:border-0">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                to={p.cta.to}
                className="w-full"
                variant={p.highlighted ? "primary" : "outline"}
                onClick={p.cta.model ? () => broadcastEngagementModel(p.cta.model!) : undefined}
              >
                {p.cta.label}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
