import type { CtaFinalSection } from "@/content/types";
import { Container, RichTitle } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaFinal({ data }: { data: CtaFinalSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center text-canvas sm:py-16 md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgb(var(--brand-accent) / 0.30) 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <RichTitle text={data.title} className="font-display text-4xl text-canvas md:text-5xl" />
            {data.body && <p className="mx-auto mt-5 max-w-md text-canvas/60">{data.body}</p>}

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {data.ctas.map((c, i) => (
                <ButtonLink
                  key={c.label}
                  to={c.to}
                  className={cn(
                    "border",
                    (c.variant ?? (i === 0 ? "white" : "outline")) === "white"
                      ? "border-white bg-white text-ink hover:opacity-90"
                      : "border-white/35 bg-transparent text-canvas hover:bg-white/10",
                  )}
                >
                  {c.label}
                </ButtonLink>
              ))}
            </div>

            {data.stats && (
              <div className="mt-10 flex flex-wrap justify-center gap-10">
                {data.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl leading-none text-canvas">{s.value}</div>
                    <div className="mt-1.5 text-xs text-canvas/45">{s.label}</div>
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
