import { CircleAlert, CircleCheck } from "lucide-react";
import type { ProblemSolutionSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function ProblemSolution({ data }: { data: ProblemSolutionSection }) {
  return (
    <section className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {data.items.map((it, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-hairline">
              <div className="flex-1 bg-surface-2 p-6">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-subtle">
                  <CircleAlert className="h-3.5 w-3.5" aria-hidden />
                  Problem
                </span>
                <h3 className="mt-2 text-lg">{it.problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.problem.body}</p>
                {it.problem.note && (
                  <p className="mt-3 border-l-2 border-hairline pl-3 text-xs italic text-subtle">{it.problem.note}</p>
                )}
              </div>
              <div className="relative flex items-center justify-center border-y border-hairline bg-canvas py-2">
                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[rgb(var(--brand-accent-fg))]">
                  We solve it
                </span>
              </div>
              <div className="flex-1 bg-surface p-6">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <CircleCheck className="h-3.5 w-3.5" aria-hidden />
                  Solution
                </span>
                <h3 className="mt-2 text-lg">{it.solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.solution.body}</p>
                {it.solution.note && (
                  <p className="mt-3 border-l-2 border-accent pl-3 text-xs italic text-subtle">{it.solution.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
