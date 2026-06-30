import type { FunnelSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function Funnel({ data }: { data: FunnelSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-20 md:py-24">
      <Container>
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl">{data.title}</h2>
        {data.subtitle && <p className="mt-4 max-w-xl text-muted">{data.subtitle}</p>}

        <div className="mt-10 divide-y divide-hairline border-t border-hairline">
          {data.steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-6 py-10 md:flex-row md:gap-10">
              <div className="select-none font-display text-5xl leading-none text-hairline md:w-20 md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span key={c} className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
