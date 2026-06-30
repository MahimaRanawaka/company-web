import type { WhyGridSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

export function WhyGrid({ data }: { data: WhyGridSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl">{data.title}</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6 rounded-xl bg-accent p-6 text-[rgb(var(--brand-accent-fg))] sm:p-8 md:col-span-2 md:flex-row md:items-center">
            <h3 className="max-w-md font-display text-2xl leading-tight md:text-3xl">{data.featured.title}</h3>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-[rgb(var(--brand-accent-fg))]/80">{data.featured.body}</p>
              {data.featured.cta && (
                <ButtonLink to={data.featured.cta.to} variant="ghost" size="sm" className="mt-4 bg-white/15 text-[rgb(var(--brand-accent-fg))] hover:bg-white/25">
                  {data.featured.cta.label}
                </ButtonLink>
              )}
            </div>
          </div>

          {data.cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-hairline bg-surface p-6 sm:p-8">
              <div className="mb-2 font-display text-5xl leading-none text-accent">{c.num}</div>
              <h3 className="mt-3 text-lg">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
