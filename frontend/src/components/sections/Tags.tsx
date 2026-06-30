import type { TagsSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";

export function Tags({ data }: { data: TagsSection }) {
  return (
    <section id={data.anchor} className="bg-canvas py-16 md:py-20">
      <Container>
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        {data.title && <h2 className="text-2xl md:text-3xl">{data.title}</h2>}
        {data.subtitle && <p className="mt-2 text-sm text-muted">{data.subtitle}</p>}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {data.items.map((t) => (
            <span key={t} className="rounded-md border border-hairline bg-surface px-4 py-2 text-sm text-muted">
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
