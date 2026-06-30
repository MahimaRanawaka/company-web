import { useState } from "react";
import { Link } from "react-router-dom";
import type { CaseStudiesSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function CaseStudies({ data }: { data: CaseStudiesSection }) {
  const [active, setActive] = useState(data.filters[0]);
  const items =
    active === data.filters[0]
      ? data.items
      : data.items.filter((c) => c.tag.toLowerCase() === active.toLowerCase());

  return (
    <section id={data.anchor} className="bg-surface py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {data.filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active === f
                  ? "border-accent bg-accent text-[rgb(var(--brand-accent-fg))]"
                  : "border-hairline text-muted hover:text-ink",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Container>

      {/* horizontal snap track */}
      <div className="mx-auto max-w-[1400px] overflow-x-auto px-6 pb-4 [scrollbar-width:none]">
        {/* key on the active filter re-runs the fade when the set changes */}
        <div key={active} className="flex snap-x gap-5 animate-fade-up motion-reduce:animate-none">
          {items.map((c) => (
            <article
              key={c.title}
              className="lift w-80 flex-none snap-start overflow-hidden rounded-xl border border-hairline bg-canvas"
            >
              <div className="relative h-44 overflow-hidden" style={{ background: "linear-gradient(140deg, rgb(var(--brand-accent) / 0.22), rgb(var(--brand-accent-hover) / 0.12))" }}>
                {c.cover && (
                  <img src={c.cover} alt="" loading="lazy" decoding="async" draggable={false} className="h-full w-full object-cover" />
                )}
                <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-canvas">
                  {c.metric}
                </span>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-subtle">{c.tag}</div>
                <h3 className="mt-1.5 text-base">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.body}</p>
                <Link to={c.to} className="mt-4 inline-block border-t border-hairline pt-3 text-sm font-semibold text-accent">
                  View case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
