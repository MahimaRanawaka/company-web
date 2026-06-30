import type { ProseSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Prose({ data }: { data: ProseSection }) {
  return (
    <section id={data.anchor} className={cn("py-14 md:py-20 lg:py-24", data.dark ? "bg-surface-2" : "bg-canvas")}>
      <Container>
        <div className="mx-auto max-w-3xl">
          {data.eyebrow && <p className="eyebrow mb-3">{data.eyebrow}</p>}
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">{data.title}</h2>
          <div className="mt-6 space-y-5">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          {data.bullets && (
            <ul className="mt-8 border-t border-hairline">
              {data.bullets.map((b, i) => (
                <li key={i} className="border-b border-hairline py-4 text-[15px] leading-relaxed text-muted">
                  {b.strong && <strong className="font-semibold text-ink">{b.strong} </strong>}
                  {b.text}
                </li>
              ))}
            </ul>
          )}

          {data.signoff && (
            <div className="mt-8 text-lg text-ink">
              <strong className="font-semibold">{data.signoff.title}</strong>
              <em className="mt-1.5 block text-sm not-italic text-muted">{data.signoff.note}</em>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
