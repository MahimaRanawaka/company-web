import type { QaPromoSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

export function QaPromo({ data }: { data: QaPromoSection }) {
  return (
    <section className="bg-surface-2 py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {data.eyebrow && <p className="eyebrow mb-3">{data.eyebrow}</p>}
            <h2 className="text-3xl md:text-4xl">{data.title}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{data.body}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {data.pills.map((p) => (
                <span key={p} className="rounded-full border border-hairline px-4 py-1.5 text-xs text-muted">
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink to={data.cta.to} size="lg">
                {data.cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-canvas">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 120% at 80% 10%, rgb(var(--brand-accent) / 0.22), transparent 60%), repeating-linear-gradient(0deg, rgb(var(--brand-border) / 0.5) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgb(var(--brand-border) / 0.5) 0 1px, transparent 1px 40px)",
              }}
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-canvas/80 px-3 py-1.5 font-mono text-xs text-accent backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> live quality layer
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
