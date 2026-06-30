import type { PathwaysSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Pathways({ data }: { data: PathwaysSection }) {
  return (
    <section id={data.anchor} className="bg-surface py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {data.cards.map((c) => (
            <div
              key={c.label}
              className={cn(
                "rounded-xl border p-6 sm:p-8",
                c.dark ? "border-ink bg-ink text-canvas" : "border-hairline bg-canvas",
              )}
            >
              <div className={cn("text-[10px] font-semibold uppercase tracking-[0.18em]", c.dark ? "text-canvas/60" : "text-subtle")}>
                {c.label}
              </div>
              <h3 className="mt-3 text-2xl">{c.title}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", c.dark ? "text-canvas/80" : "text-muted")}>{c.body}</p>
              <div className="mt-6 grid grid-cols-2 gap-x-6">
                {c.items.map((it) => (
                  <span
                    key={it}
                    className={cn(
                      "border-t py-2.5 text-sm",
                      c.dark ? "border-canvas/20 text-canvas/80" : "border-hairline text-muted",
                    )}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
