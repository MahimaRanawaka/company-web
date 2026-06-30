import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

/** Wraps children in a fade-up scroll reveal. Thin wrapper over useReveal so
 *  sections (via Page) and ad-hoc elements share one IntersectionObserver. */
export function Reveal({ children, delay = 0, id }: { children: ReactNode; delay?: number; id?: string }) {
  const ref = useReveal<HTMLDivElement>(delay);
  return <div ref={ref} id={id}>{children}</div>;
}
