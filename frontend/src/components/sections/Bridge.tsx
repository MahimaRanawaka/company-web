import type { BridgeSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

export function Bridge({ data }: { data: BridgeSection }) {
  return (
    <section className="bg-canvas py-20 md:py-24">
      <Container>
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-3xl md:text-4xl">{data.title}</h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {data.halves.map((h) => (
            <div key={h.tag} className="rounded-xl border border-hairline bg-surface p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-subtle">{h.tag}</div>
              <h3 className="mt-3 text-xl">{h.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{h.body}</p>
              <div className="mt-6">
                <ButtonLink to={h.cta.to} variant="outline">
                  {h.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
