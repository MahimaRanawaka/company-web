import type { IconGridSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { Icon } from "@/lib/icons";

export function IconGrid({ data }: { data: IconGridSection }) {
  return (
    <section id={data.anchor} className="bg-surface py-20 md:py-24">
      <Container>
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl">{data.title}</h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {data.items.map((it) => (
            <div
              key={it.name}
              className="lift group rounded-xl border border-hairline bg-canvas p-5 text-center"
            >
              <span className="mb-2.5 inline-flex justify-center text-2xl text-accent transition-transform group-hover:scale-110">
                <Icon name={it.icon} className="h-6 w-6" />
              </span>
              <span className="text-[13px] font-semibold text-ink">{it.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
