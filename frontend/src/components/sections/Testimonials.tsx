import type { TestimonialsSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function Testimonials({ data }: { data: TestimonialsSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-14 md:py-20 lg:py-24">
      <Container>
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl">{data.title}</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data.items.map((t) => (
            <figure key={t.author} className="lift rounded-xl border border-hairline bg-surface p-7">
              <div className="mb-3.5 tracking-[2px] text-accent" aria-label={`${t.rating ?? 5} out of 5`}>
                {"★".repeat(t.rating ?? 5)}
              </div>
              <blockquote className="text-[15px] italic leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <div className="text-sm font-semibold text-ink">{t.author}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
