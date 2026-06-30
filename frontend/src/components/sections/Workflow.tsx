import type { WorkflowSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { Icon } from "@/lib/icons";

export function Workflow({ data }: { data: WorkflowSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-canvas md:p-14">
          <div
            className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgb(var(--brand-accent) / 0.28) 0%, transparent 70%)" }}
          />
          <div className="relative">
            {data.eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{data.eyebrow}</p>}
            <h2 className="max-w-xl font-display text-3xl md:text-4xl">{data.title}</h2>
            {data.subtitle && <p className="mt-4 max-w-2xl text-canvas/60">{data.subtitle}</p>}

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.steps.map((s) => (
                <div key={s.num} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-white/35">{s.num}</div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">{s.body}</p>
                  <span className="mt-4 inline-block rounded-md bg-accent/20 px-2.5 py-1 font-mono text-[10px] text-accent">{s.tag}</span>
                </div>
              ))}
            </div>

            {data.capabilities && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.capabilities.map((c) => (
                  <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-2.5 text-xl text-accent"><Icon name={c.icon} className="h-5 w-5" /></div>
                    <h4 className="text-[13px] font-semibold">{c.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/45">{c.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
