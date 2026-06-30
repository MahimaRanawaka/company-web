/** Cursor-tracked spotlight for .lift cards: one delegated listener keeps
 *  --mx/--my updated on the hovered card; CSS paints the accent glow. */
export function initSpotlight() {
  if (window.matchMedia("(pointer: coarse)").matches) return; // touch: skip
  document.addEventListener(
    "pointermove",
    (e) => {
      const card = (e.target as Element).closest?.(".lift") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}
