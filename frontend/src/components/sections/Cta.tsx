import type { CtaSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { broadcastEngagementModel } from "@/lib/engagementModelSignal";
import { cn } from "@/lib/utils";

export function Cta({ data }: { data: CtaSection }) {
  return (
    <section
      id={data.anchor}
      className={cn("bg-surface pt-14 md:pt-20 lg:pt-24", data.tightBottom ? "pb-6 md:pb-8" : "pb-14 md:pb-20 lg:pb-24")}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {data.eyebrow && <p className="eyebrow mb-3">{data.eyebrow}</p>}
          {data.title && <h2 className="text-3xl md:text-4xl">{data.title}</h2>}
          {data.body && <p className="mx-auto mt-4 max-w-xl text-muted">{data.body}</p>}

          {data.pills && data.pills.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {data.pills.map((p) => (
                <a
                  key={p.label}
                  href={p.to}
                  className="rounded-full border border-hairline bg-canvas px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                  onClick={(e) => {
                    if (p.to.startsWith("#")) {
                      const el = document.getElementById(p.to.slice(1));
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                        history.replaceState(null, "", p.to);
                      }
                    }
                    if (p.model) broadcastEngagementModel(p.model);
                  }}
                >
                  {p.label}
                </a>
              ))}
            </div>
          )}

          {data.cta && (
            <div className="mt-8 flex justify-center">
              <ButtonLink to={data.cta.to} size="lg">
                {data.cta.label}
              </ButtonLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
