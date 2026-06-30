import type { StepsSection } from "@/content/types";
import { Eyebrow, SectionShell } from "@/components/primitives";
import { cn } from "@/lib/utils";

// literal classes so Tailwind JIT keeps them
const LG_COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function Steps({ data }: { data: StepsSection }) {
  const lg = LG_COLS[Math.min(Math.max(data.items.length, 2), 5)] ?? "lg:grid-cols-4";
  return (
    <SectionShell id={data.anchor}>
      {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
      {data.title && <h2 className="mb-10 text-3xl md:text-4xl">{data.title}</h2>}
      <ol className={cn("grid gap-6 sm:grid-cols-2", lg)}>
        {data.items.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-hairline bg-surface p-6">
            <span className="gradient-em font-display text-3xl not-italic">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-base">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
