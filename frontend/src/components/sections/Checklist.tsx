import type { ChecklistSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function Checklist({ data }: { data: ChecklistSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="mx-auto max-w-3xl border-t border-hairline">
          {data.items.map((it, i) => (
            <div key={it.title} className="grid grid-cols-[3rem_1fr] gap-6 border-b border-hairline py-6 md:grid-cols-[5rem_1fr]">
              <span className="pt-1 font-mono text-xs tracking-widest text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl">{it.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
