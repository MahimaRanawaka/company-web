import type { MarqueeSection } from "@/content/types";

export function Marquee({ data }: { data: MarqueeSection }) {
  const items = [...data.items, ...data.items]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden border-y border-hairline bg-surface py-2.5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {t}
            <span className="text-accent">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
