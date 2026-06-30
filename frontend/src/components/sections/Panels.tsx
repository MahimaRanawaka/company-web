import type { PanelsSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function Panels({ data }: { data: PanelsSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.panels.map((panel) => (
            <div key={panel.title} className="overflow-hidden rounded-xl border border-hairline bg-surface">
              <div className="bg-ink px-5 py-5 text-canvas sm:px-7 sm:py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/60">{panel.eyebrow}</p>
                <h3 className="mt-1.5 text-2xl">{panel.title}</h3>
              </div>
              <ul className="px-5 sm:px-7">
                {panel.items.map((it) => (
                  <li key={it.title} className="border-b border-hairline py-5 last:border-0">
                    <h4 className="text-base">{it.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <span key={t} className="rounded-full border border-hairline bg-canvas px-2.5 py-1 text-[11px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
