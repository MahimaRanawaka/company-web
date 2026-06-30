import { useState } from "react";
import type { OpenRolesSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OpenRoles({ data }: { data: OpenRolesSection }) {
  const [active, setActive] = useState(data.filters[0]);
  const roles =
    active === data.filters[0]
      ? data.roles
      : data.roles.filter((r) => r.areas.some((a) => a.toLowerCase() === active.toLowerCase()));

  return (
    <section id={data.anchor} className="bg-surface py-14 md:py-20 lg:py-24">
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
                "rounded-full border px-4 py-2 text-sm transition-colors",
                active === f
                  ? "border-accent bg-accent text-[rgb(var(--brand-accent-fg))]"
                  : "border-hairline text-muted hover:text-ink",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div key={active} className="mx-auto grid max-w-4xl gap-5 animate-fade-up motion-reduce:animate-none md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.title} className="lift rounded-xl border border-hairline bg-canvas p-5 sm:p-7">
              <h3 className="text-xl">{r.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.meta.map((m) => (
                  <span key={m} className="rounded-full border border-hairline px-2.5 py-1 text-[11px] text-muted">
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{r.body}</p>
              <div className="mt-5">
                <ButtonLink to={r.applyTo} variant="outline" size="sm">
                  Apply Now
                </ButtonLink>
              </div>
            </div>
          ))}
          {roles.length === 0 && (
            <p className="col-span-full text-center text-sm text-muted">No open roles in this area right now — send your CV anyway.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
