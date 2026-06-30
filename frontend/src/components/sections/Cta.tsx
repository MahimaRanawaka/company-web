import type { CtaSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

export function Cta({ data }: { data: CtaSection }) {
  return (
    <section id={data.anchor} className="bg-surface py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {data.eyebrow && <p className="eyebrow mb-3">{data.eyebrow}</p>}
          <h2 className="text-3xl md:text-4xl">{data.title}</h2>
          {data.body && <p className="mx-auto mt-4 max-w-xl text-muted">{data.body}</p>}
          <div className="mt-8 flex justify-center">
            <ButtonLink to={data.cta.to} size="lg">
              {data.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
