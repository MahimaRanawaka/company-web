import { useEffect, useRef, useState } from "react";
import type { StatsSection } from "@/content/types";
import { Container } from "@/components/primitives";
import { cn } from "@/lib/utils";

const COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/** Counts a leading number up from 0 when scrolled into view; non-numeric
 *  values (e.g. "Dropdown") render as-is. Skipped under reduced motion. */
function StatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(target ?? 0);

  useEffect(() => {
    const el = ref.current;
    if (el === null || target === null || target === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 900;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3)))); // ease-out cubic
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl text-ink">
      {target === null ? value : `${n}${suffix}`}
    </div>
  );
}

export function Stats({ data }: { data: StatsSection }) {
  const cols = COLS[data.items.length] ?? "grid-cols-1 sm:grid-cols-3";
  return (
    <section className="border-y border-hairline bg-canvas py-12">
      <Container>
        <div className={cn("grid gap-8 text-center", cols)}>
          {data.items.map((s) => (
            <div key={s.label}>
              <StatValue value={s.value} />
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
