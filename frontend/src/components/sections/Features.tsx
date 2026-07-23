import type { FeatureGridSection } from "@/content/types";
import { Container, Eyebrow } from "@/components/primitives";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/utils";

const COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function Features({ data }: { data: FeatureGridSection }) {
  const cols = COLS[data.columns ?? 3];
  return (
    <section
      id={data.anchor}
      className={cn(data.compact ? "py-6 md:py-8" : "py-20 md:py-24", data.dark ? "bg-surface-2" : "bg-surface")}
    >
      <Container>
        {(data.eyebrow || data.title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            {data.title && <h2 className="text-3xl md:text-4xl">{data.title}</h2>}
            {data.subtitle && <p className="mt-4 text-muted">{data.subtitle}</p>}
          </div>
        )}
        <div className={cn("grid gap-6", cols)}>
          {data.items.map((f, i) =>
            data.layout === "inline" ? (
              <div
                key={f.title}
                className={cn(
                  "lift flex items-center gap-4 rounded-lg border border-hairline bg-canvas p-6",
                  data.bento && i === 0 && "sm:col-span-2",
                )}
              >
                {f.icon && (
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-accent">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                )}
                <h3 className="text-lg">{f.title}</h3>
              </div>
            ) : data.layout === "split" ? (
              <div
                key={f.title}
                className={cn(
                  "lift flex items-start gap-4 rounded-lg border border-hairline bg-canvas p-6",
                  data.bento && i === 0 && "sm:col-span-2 md:p-8",
                )}
              >
                {f.icon && (
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-accent">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                )}
                <div>
                  <h3 className="text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </div>
            ) : (
              <div
                key={f.title}
                className={cn(
                  "lift rounded-lg border border-hairline bg-canvas p-6",
                  data.bento && i === 0 && "sm:col-span-2 md:p-8",
                )}
              >
                {f.icon ? (
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-surface text-accent">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                ) : (
                  data.numbered && (
                    <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline font-mono text-xs text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )
                )}
                <h3 className="text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
