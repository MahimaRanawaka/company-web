import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnchorStop {
  id: string;
  label: string;
}

/** Sticky "on this page" sub-nav with scroll-spy. Highlights the section
 *  whose anchor is nearest the top of the viewport. Smooth-scrolls on click
 *  (instant under reduced motion). Hidden on small screens. */
export function AnchorNav({ stops }: { stops: AnchorStop[] }) {
  const [active, setActive] = useState(stops[0]?.id);
  // stable dependency: only rebind when the set of ids actually changes
  const ids = stops.map((s) => s.id).join("|");

  useEffect(() => {
    if (!ids) return;
    const idList = ids.split("|");
    // position-based scroll-spy: the active section is the last one whose top
    // has passed an offset line just below the sticky header. Robust across
    // environments (plain scroll events) and exact at the top/bottom edges.
    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = 140; // sticky header (68) + sub-nav + breathing room
      let current = idList[0];
      for (const id of idList) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // near the page bottom, pin the last stop (short final sections)
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = idList[idList.length - 1];
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  if (stops.length < 2) return null;

  const go = (id: string) => (e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="On this page" className="sticky top-[68px] z-30 hidden border-b border-hairline bg-canvas/85 backdrop-blur lg:block">
      <div className="container flex items-center gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        <span className="mr-2 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">On this page</span>
        {stops.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={go(s.id)}
            aria-current={active === s.id ? "true" : undefined}
            className={cn(
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              active === s.id ? "bg-surface font-medium text-accent" : "text-muted hover:text-ink",
            )}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/** Derive sub-nav stops from a page's sections: any section carrying an
 *  `anchor` becomes a stop, labelled by its title/eyebrow. */
type SectionLike = { type: string; anchor?: string; title?: string; eyebrow?: string };

export function stopsFromSections(sections: readonly SectionLike[]): AnchorStop[] {
  return sections
    .filter((s): s is SectionLike & { anchor: string } => Boolean(s.anchor))
    .map((s) => ({ id: s.anchor, label: s.title ?? s.eyebrow ?? s.anchor }));
}
