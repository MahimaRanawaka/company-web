import { useEffect, useRef, type RefObject } from "react";

/* One shared IntersectionObserver for every revealed element. */
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer!.unobserve(e.target);
          }
        }
      },
      // huge top margin: elements jumped past (anchor links, history
      // restore) count as seen instead of staying hidden above the fold
      { rootMargin: "9999px 0px -10% 0px", threshold: 0.05 },
    );
  }
  return observer;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fade-up scroll reveal for any element. Returns a ref to attach. The
 *  `.reveal` class (and thus the hidden initial state) is only applied from
 *  JS once we know motion is allowed, so content is never trapped invisible.
 *  `delay` staggers siblings (ms). Honors prefers-reduced-motion. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0,
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    el.style.setProperty("--reveal-delay", `${delay}ms`);
    el.classList.add("reveal");
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, [delay]);

  return ref;
}
