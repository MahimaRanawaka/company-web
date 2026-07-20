import { Link } from "react-router-dom";
import type { LinkCardsSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { cn } from "@/lib/utils";

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

const cardClass = "lift rounded-lg border border-hairline bg-canvas p-6 transition-colors hover:border-accent/50";

/** In-page anchors smooth-scroll (matching ButtonLink's behaviour); everything
 *  else routes via react-router <Link>. */
function GuideCard({ to, children }: { to: string; children: React.ReactNode }) {
  if (to.startsWith("#")) {
    return (
      <a
        href={to}
        className={cardClass}
        onClick={(e) => {
          const el = document.getElementById(to.slice(1));
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", to);
          }
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cardClass}>
      {children}
    </Link>
  );
}

export function LinkCards({ data }: { data: LinkCardsSection }) {
  const cols = COLS[data.columns ?? 2];
  return (
    <section id={data.anchor} className="bg-surface py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>
        <div className={cn("grid gap-4", cols)}>
          {data.items.map((it) => (
            <GuideCard key={it.title} to={it.to}>
              <h3 className="text-base font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
            </GuideCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
