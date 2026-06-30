import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("container", className)}>{children}</div>;
}

export function SectionShell({
  className,
  alt,
  id,
  children,
}: {
  className?: string;
  alt?: boolean;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-14 md:py-20 lg:py-24", alt ? "bg-surface" : "bg-canvas", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

/** Renders a title where text wrapped in {curly braces} becomes a gradient <em>. */
export function RichTitle({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <Tag className={cn("text-3xl leading-tight md:text-4xl", className)}>
      {parts.map((p, i) =>
        p.startsWith("{") && p.endsWith("}") ? (
          <em key={i} className="gradient-em [font-style:inherit]">
            {p.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </Tag>
  );
}
