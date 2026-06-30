import { useState } from "react";
import type { EngagementTabsSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { Icon } from "@/lib/icons";

export function EngagementTabs({ data }: { data: EngagementTabsSection }) {
  const [active, setActive] = useState(data.tabs[0].key);
  const tab = data.tabs.find((t) => t.key === active) ?? data.tabs[0];

  return (
    <section id={data.anchor} className="bg-surface py-20 md:py-24">
      <Container>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl text-3xl md:text-4xl">{data.title}</h2>
        {data.subtitle && <p className="mt-4 max-w-xl text-muted">{data.subtitle}</p>}

        {/* toggle */}
        <div className="mt-8 inline-flex flex-wrap gap-1.5 rounded-full border border-hairline bg-canvas p-1.5">
          {data.tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === t.key ? "bg-ink text-canvas" : "text-muted hover:text-ink",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* description card */}
        <div key={tab.key} className="mt-8 animate-fade-up">
          <div className="flex flex-col gap-5 rounded-xl border border-hairline bg-canvas p-7 sm:flex-row">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-hairline bg-surface text-2xl">
              <Icon name={tab.desc.icon} className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl">{tab.desc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tab.desc.body}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tab.desc.pills.map((p) => (
                  <span key={p} className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-semibold text-accent">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* services grid */}
          {tab.services && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tab.services.map((s) => (
                <div key={s.name} className="lift rounded-xl border border-hairline bg-canvas p-6">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-lg border border-hairline bg-surface text-xl"><Icon name={s.icon} className="h-5 w-5 text-accent" /></div>
                  <h4 className="text-base font-semibold leading-snug">{s.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                  <span className="mt-3 inline-block rounded-full border border-hairline bg-surface px-3 py-1 text-[11px] font-semibold text-accent">{s.tag}</span>
                </div>
              ))}
            </div>
          )}

          {/* performance models grid */}
          {tab.perf && (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {tab.perf.map((p) => (
                <div key={p.title} className="lift rounded-xl border border-hairline bg-canvas p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="max-w-[240px] text-base font-semibold">{p.title}</h4>
                    <span className="text-2xl"><Icon name={p.icon} className="h-6 w-6 text-accent" /></span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.kpis.map((k) => (
                      <span key={k} className="rounded-md bg-surface px-2.5 py-1 font-mono text-[11px] text-accent">{k}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
