import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { LegalDoc, LegalSection } from "@/content/legal/types";
import { Container } from "@/components/primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/** Renders a structured legal document: breadcrumb, header with effective
 *  date, a sticky table of contents, and a readable single-column body.
 *  Built for long-form legal prose (privacy, terms, cookies). */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  useEffect(() => {
    document.title = `${doc.title} · En'nobler / Oolo`;
  }, [doc.title]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Legal" }, { label: doc.title }]} />

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl">{doc.title}</h1>
            <p className="mt-3 text-sm text-subtle">Last updated: {doc.updated}</p>
            <p className="mt-6 leading-relaxed text-muted">{doc.intro}</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[220px_1fr]">
            {/* table of contents */}
            <aside className="hidden lg:block">
              <nav aria-label="Table of contents" className="sticky top-[88px]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                  On this page
                </p>
                <ul className="space-y-1.5 border-l border-hairline">
                  {doc.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={smoothTo(s.id)}
                        className="-ml-px block border-l border-transparent py-0.5 pl-4 text-sm text-muted transition-colors hover:border-accent hover:text-ink"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* body */}
            <div className="max-w-2xl">
              {doc.sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}

              <div className="mt-12 rounded-xl border border-hairline bg-surface p-6 text-sm text-muted">
                Looking for something else? Visit our{" "}
                <Link to="/contact" className="font-semibold text-accent">
                  contact page
                </Link>{" "}
                or review the related{" "}
                <Link to="/legal/privacy" className="font-semibold text-accent">
                  Privacy
                </Link>
                ,{" "}
                <Link to="/legal/terms" className="font-semibold text-accent">
                  Terms
                </Link>
                , and{" "}
                <Link to="/legal/cookies" className="font-semibold text-accent">
                  Cookie
                </Link>{" "}
                policies.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Section({ section }: { section: LegalSection }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-t border-hairline py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl md:text-2xl">{section.heading}</h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-muted">
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.sub?.map((sub, i) => (
        <div key={i} className="mt-5">
          <h3 className="text-base font-semibold text-ink">{sub.heading}</h3>
          {sub.paragraphs?.map((p, j) => (
            <p key={j} className="mt-2 leading-relaxed text-muted">
              {p}
            </p>
          ))}
          {sub.bullets && (
            <ul className="mt-3 space-y-2">
              {sub.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

const smoothTo = (id: string) => (e: React.MouseEvent) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
};
