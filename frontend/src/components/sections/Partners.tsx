import type { PartnersSection } from "@/content/types";

export function Partners({ data }: { data: PartnersSection }) {
  const hasImages = data.logos.some((l) => typeof l !== "string");

  if (hasImages) {
    return (
      <section className="border-y border-hairline bg-surface py-12">
        {data.eyebrow && (
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
            {data.eyebrow}
          </p>
        )}
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-8 px-6">
          {data.logos.map((logo, i) =>
            typeof logo === "string" ? (
              <span key={i} className="text-base font-semibold tracking-tight text-muted/70">
                {logo}
              </span>
            ) : (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-16 max-w-[160px] object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            ),
          )}
        </div>
      </section>
    );
  }

  // Fallback: scrolling marquee for text-only logos
  const logos = [...data.logos, ...data.logos];
  return (
    <section className="border-y border-hairline bg-surface py-10">
      {data.eyebrow && (
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
          {data.eyebrow}
        </p>
      )}
      <div className="edge-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap motion-reduce:animate-none">
          {logos.map((l, i) => (
            <span
              key={`${l}-${i}`}
              className="text-base font-semibold tracking-tight text-muted/70 transition-colors hover:text-ink"
            >
              {typeof l === "string" ? l : l.alt}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
