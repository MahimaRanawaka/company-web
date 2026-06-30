import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FaqSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Faq({ data }: { data: FaqSection }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id={data.anchor} className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline">
          {data.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{it.q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-accent" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-muted" />
                  )}
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
