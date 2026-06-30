import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------ *
 * The Two Minds Experience — cinematic dual-brand entry gateway.
 * Dark, full-bleed, no site chrome (mounted standalone at "/").
 * Clean dark canvas idles; focusing a side reveals that brand's
 * character clip (Byte / Chikku) in /public/experience; selecting
 * plays a CSS accent transition, then routes into the brand.
 * ------------------------------------------------------------------ */

type Side = "ennobler" | "oolo";

const BRANDS: Record<Side, {
  name: string; base: string; accent: string; clip: string;
  italic: boolean; kicker: string; tagline: string;
}> = {
  ennobler: {
    name: "En'nobler", base: "/ennobler", accent: "#1474BE", clip: "/experience/ennobler.mp4",
    italic: false, kicker: "Engineering Intelligence", tagline: "Built to ship. Engineered to scale.",
  },
  oolo: {
    name: "Oolo", base: "/oolo", accent: "#F0821E", clip: "/experience/oolo.mp4",
    italic: true, kicker: "Creative Growth Intelligence", tagline: "Creative-first. Strategy-led. Growth-obsessed.",
  },
};

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

export default function TwoMinds() {
  const navigate = useNavigate();
  const reduce = usePrefersReducedMotion();

  const ennRef = useRef<HTMLVideoElement>(null);
  const ooloRef = useRef<HTMLVideoElement>(null);

  const [focus, setFocus] = useState<Side | null>(null);
  const [armed, setArmed] = useState<Side | null>(null);
  const [leaving, setLeaving] = useState<Side | null>(null);

  useEffect(() => { document.title = "En'nobler / Oolo — Choose your intelligence"; }, []);

  // play the focused side's character clip, reset the other (skip if reduced)
  useEffect(() => {
    if (reduce || leaving) return;
    const map: Record<Side, React.RefObject<HTMLVideoElement>> = { ennobler: ennRef, oolo: ooloRef };
    (Object.keys(map) as Side[]).forEach((s) => {
      const v = map[s].current;
      if (!v) return;
      if (focus === s) { v.currentTime = 0; v.play().catch(() => {}); }
      else { v.pause(); }
    });
  }, [focus, leaving, reduce]);

  const select = useCallback((side: Side) => {
    setFocus(side);
    if (reduce) { navigate(BRANDS[side].base); return; }
    setLeaving(side);
    window.setTimeout(() => navigate(BRANDS[side].base), 900);
  }, [navigate, reduce]);

  // first interaction arms, second confirms (tap-tap / Enter-Enter)
  const choose = useCallback((side: Side) => {
    setFocus(side);
    setArmed((cur) => { if (cur === side) { select(side); return cur; } return side; });
  }, [select]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { setFocus("ennobler"); setArmed(null); }
      else if (e.key === "ArrowRight") { setFocus("oolo"); setArmed(null); }
      else if (e.key === "Enter" && focus) { e.preventDefault(); choose(focus); }
      else if (e.key === "Escape") { setArmed(null); setFocus(null); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focus, choose]);

  const tint = focus
    ? `radial-gradient(circle at ${focus === "ennobler" ? "28%" : "72%"} 48%, ${BRANDS[focus].accent}26, transparent 55%)`
    : "transparent";

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-[#080B12] text-[#E8ECF1]">
      {/* dark canvas: subtle technical grid + atmospheric depth */}
      <div aria-hidden className="absolute inset-0" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 40%, transparent 85%)",
      }} />
      <div aria-hidden className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(40,60,90,0.30), transparent 70%)",
      }} />

      {/* brand character clips — revealed on focus */}
      <video ref={ennRef} src={BRANDS.ennobler.clip} muted playsInline loop preload="metadata" aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: focus === "ennobler" && !leaving ? 1 : 0 }} />
      <video ref={ooloRef} src={BRANDS.oolo.clip} muted playsInline loop preload="metadata" aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: focus === "oolo" && !leaving ? 1 : 0 }} />

      {/* legibility scrim + focus tint */}
      <div aria-hidden className="absolute inset-0" style={{
        background:
          "linear-gradient(180deg, rgba(8,11,18,0.72) 0%, rgba(8,11,18,0.35) 38%, rgba(8,11,18,0.55) 72%, rgba(8,11,18,0.9) 100%)",
      }} />
      <div aria-hidden className="absolute inset-0 transition-[background] duration-500" style={{ background: tint }} />

      {/* wordmark */}
      <div className="absolute left-6 top-6 z-20 text-sm font-semibold tracking-tight md:left-10 md:top-8">
        En&rsquo;nobler<span className="text-[#5C6776]"> / Oolo</span>
      </div>

      {/* hover / tap zones (mobile two-step + a11y) */}
      {!leaving && (
        <div className="absolute inset-0 z-10 grid grid-cols-2">
          {(["ennobler", "oolo"] as Side[]).map((s) => (
            <button key={s} aria-label={`Choose ${BRANDS[s].name} — ${BRANDS[s].kicker}`}
              onClick={() => choose(s)} onPointerEnter={() => !reduce && setFocus(s)}
              onFocus={() => setFocus(s)} className="h-full w-full cursor-pointer outline-none" />
          ))}
        </div>
      )}

      {/* centre copy */}
      {!leaving && (
        <div className="pointer-events-none absolute inset-x-0 top-[16%] z-20 px-6 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa0c0]">
            Two intelligences · One company
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl" style={{ letterSpacing: "-0.02em" }}>
            Two sides. One platform.
          </h1>
          <p className="mt-4 text-lg text-[#9AA6B4] md:text-xl">Choose your intelligence.</p>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#6f7c8c]">
            On the left, we build and test technology. On the right, we grow brands.
          </p>
        </div>
      )}

      {/* live side label (on focus) */}
      {focus && !leaving && (
        <div className={`pointer-events-none absolute top-1/2 z-20 hidden -translate-y-1/2 px-2 md:block ${focus === "ennobler" ? "left-10 text-left lg:left-20" : "right-10 text-right lg:right-20"}`}>
          <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BRANDS[focus].accent }}>
            {BRANDS[focus].kicker}
          </div>
          <div className="mt-2 text-3xl font-bold tracking-tight" style={{ fontStyle: BRANDS[focus].italic ? "italic" : "normal" }}>
            {BRANDS[focus].name}
          </div>
          <div className="mt-2 max-w-[16rem] text-sm leading-relaxed text-[#cdd5df]">{BRANDS[focus].tagline}</div>
        </div>
      )}

      {/* choice CTAs */}
      {!leaving && (
        <div className="absolute inset-x-0 bottom-9 z-30 flex flex-col items-center gap-4 px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(["ennobler", "oolo"] as Side[]).map((s) => {
              const b = BRANDS[s];
              return (
                <button key={s} onClick={() => select(s)} onPointerEnter={() => !reduce && setFocus(s)}
                  className="rounded-md border px-5 py-3 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: focus === s ? b.accent : "rgba(255,255,255,0.16)",
                    color: focus === s ? "#fff" : "#9AA6B4",
                    background: focus === s ? `${b.accent}22` : "transparent",
                    fontStyle: b.italic ? "italic" : "normal",
                  }}>
                  Enter {b.name} →
                </button>
              );
            })}
          </div>
          <p className="text-center text-xs text-[#5C6776]">
            {armed
              ? `Confirm to enter ${BRANDS[armed].name} — tap again or press Enter`
              : reduce
                ? "Select a side to continue."
                : "Hover a side or use ← → · Enter to choose · tap a side twice on mobile"}
          </p>
        </div>
      )}

      {/* selection transition — CSS accent wash (no video) */}
      {leaving && (
        <>
          <div aria-hidden className="absolute inset-0 z-30" style={{
            background: `radial-gradient(circle at center, ${BRANDS[leaving].accent}, #080B12 72%)`,
            animation: "twoMindsEnter 900ms ease forwards", opacity: 0,
          }} />
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BRANDS[leaving].accent }}>
                Entering
              </div>
              <div className="mt-2 text-4xl font-bold tracking-tight" style={{ fontStyle: BRANDS[leaving].italic ? "italic" : "normal" }}>
                {BRANDS[leaving].name}
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`@keyframes twoMindsEnter{from{opacity:0;transform:scale(1.08)}to{opacity:1;transform:scale(1)}}`}</style>
    </div>
  );
}
