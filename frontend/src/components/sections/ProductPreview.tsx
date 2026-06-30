import type { ProductPreviewSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

export function ProductPreview({ data }: { data: ProductPreviewSection }) {
  return (
    <section className="bg-surface py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {data.items.map((p) => (
            <div key={p.title} className="lift flex flex-col rounded-xl border border-hairline bg-canvas p-8">
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{p.body}</p>
              <div className="mt-6">
                <ButtonLink to={p.cta.to} variant="outline">
                  {p.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
