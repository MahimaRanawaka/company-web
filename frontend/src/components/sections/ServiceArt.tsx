import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 * Per-service decorative line art. Each motif is authored once on a
 * 112x112 canvas in `currentColor`, so it inherits the brand accent
 * (En'nobler blue / Oolo orange) and renders at two scales:
 *   - featured tile → large, over a fading technical grid
 *   - standard card → small motif bleeding off the top-right corner
 * Purely decorative: aria-hidden and pointer-events-none.
 * ------------------------------------------------------------------ */

const MOTIFS: Record<string, ReactNode> = {
  // AI-aided Engineering — neural / node graph
  "node-network": (
    <>
      <g stroke="currentColor" strokeOpacity=".3" strokeWidth="1.2" fill="none">
        <path d="M18 78 L42 46 M42 46 L58 60 M58 60 L92 34 M18 78 L48 92 M48 92 L58 60 M42 46 L34 18 M92 34 L104 66" />
      </g>
      <circle cx="58" cy="60" r="14" fill="none" stroke="currentColor" strokeOpacity=".2" />
      <g fill="currentColor">
        <circle cx="58" cy="60" r="5" fillOpacity=".9" />
        <circle cx="42" cy="46" r="3.4" fillOpacity=".55" />
        <circle cx="92" cy="34" r="3.4" fillOpacity=".55" />
        <circle cx="18" cy="78" r="3" fillOpacity=".4" />
        <circle cx="48" cy="92" r="3" fillOpacity=".4" />
        <circle cx="34" cy="18" r="2.4" fillOpacity=".28" />
        <circle cx="104" cy="66" r="2.4" fillOpacity=".28" />
      </g>
    </>
  ),

  // Quality Assurance — shield, check, test matrix
  "shield-matrix": (
    <>
      <path
        d="M56 18 L86 30 V52 c0 20-14 30-30 36 -16-6-30-16-30-36 V30 Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".22"
        strokeWidth="1.4"
      />
      <path
        d="M44 54 l9 9 18-20"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".55"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="currentColor" fillOpacity=".18">
        <rect x="18" y="96" width="9" height="9" rx="2" />
        <rect x="33" y="96" width="9" height="9" rx="2" />
        <rect x="48" y="96" width="9" height="9" rx="2" />
        <rect x="63" y="96" width="9" height="9" rx="2" />
      </g>
    </>
  ),

  // Software Development — code brackets
  "code-brackets": (
    <>
      <g
        fill="none"
        stroke="currentColor"
        strokeOpacity=".3"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 34 L22 54 L40 74" />
        <path d="M74 34 L92 54 L74 74" />
      </g>
      <path d="M64 26 L50 82" stroke="currentColor" strokeOpacity=".45" strokeWidth="2.2" strokeLinecap="round" />
      <g fill="currentColor" fillOpacity=".14">
        <rect x="20" y="92" width="26" height="6" rx="3" />
        <rect x="52" y="92" width="40" height="6" rx="3" />
      </g>
    </>
  ),

  // Digital Transformation — refresh cycle over legacy → modern blocks
  "refresh-cycle": (
    <>
      <g fill="none" stroke="currentColor" strokeOpacity=".28" strokeWidth="2" strokeLinecap="round">
        <path d="M86 44 a30 30 0 1 0 4 22" />
        <path d="M86 24 v20 h-20" />
      </g>
      <g fill="currentColor">
        <rect x="30" y="50" width="16" height="16" rx="3" fillOpacity=".18" />
        <rect x="56" y="50" width="16" height="16" rx="3" fillOpacity=".45" />
      </g>
      <path d="M48 58 h6" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),

  // Web / App Development — browser + handset
  "browser-device": (
    <>
      <rect x="16" y="26" width="64" height="48" rx="5" fill="none" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.6" />
      <line x1="16" y1="38" x2="80" y2="38" stroke="currentColor" strokeOpacity=".22" strokeWidth="1.4" />
      <g fill="currentColor" fillOpacity=".35">
        <circle cx="23" cy="32" r="1.8" />
        <circle cx="29" cy="32" r="1.8" />
      </g>
      <rect x="66" y="54" width="28" height="44" rx="5" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.6" />
      <line x1="75" y1="60" x2="85" y2="60" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.6" strokeLinecap="round" />
      <g fill="currentColor" fillOpacity=".14">
        <rect x="24" y="48" width="22" height="4" rx="2" />
        <rect x="24" y="58" width="32" height="4" rx="2" />
      </g>
    </>
  ),

  // Cloud / DevOps — cloud over a CI/CD pipeline
  "cloud-pipeline": (
    <>
      <path
        d="M32 54 a14 14 0 0 1 27-5 11 11 0 0 1 17 9 10 10 0 0 1-3 19 H38 a12 12 0 0 1-6-23 Z"
        fill="currentColor"
        fillOpacity=".08"
        stroke="currentColor"
        strokeOpacity=".3"
        strokeWidth="1.5"
      />
      <path
        d="M22 94 c10-14 22 14 32 0 c10-14 22 14 30 0"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".38"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <g fill="currentColor" fillOpacity=".45">
        <circle cx="22" cy="94" r="2.4" />
        <circle cx="84" cy="94" r="2.4" />
      </g>
    </>
  ),

  // UI/UX Design — artboard with a bezier path + handles
  "pen-artboard": (
    <>
      <rect x="18" y="22" width="76" height="60" rx="5" fill="none" stroke="currentColor" strokeOpacity=".22" strokeWidth="1.4" />
      <path
        d="M30 68 C 44 30, 68 84, 84 40"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <rect x="26" y="64" width="7" height="7" rx="1.5" fillOpacity=".6" />
        <rect x="80" y="36" width="7" height="7" rx="1.5" fillOpacity=".6" />
      </g>
      <g fill="currentColor" fillOpacity=".14">
        <rect x="26" y="92" width="30" height="5" rx="2.5" />
        <rect x="62" y="92" width="18" height="5" rx="2.5" />
      </g>
    </>
  ),

  // Mobile App Development — handset with a touch ripple
  "phone-touch": (
    <>
      <rect x="34" y="18" width="46" height="76" rx="8" fill="none" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.6" />
      <line x1="50" y1="26" x2="64" y2="26" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.6" strokeLinecap="round" />
      <g fill="none" stroke="currentColor">
        <circle cx="57" cy="58" r="9" strokeOpacity=".3" />
        <circle cx="57" cy="58" r="16" strokeOpacity=".16" />
      </g>
      <circle cx="57" cy="58" r="4" fill="currentColor" fillOpacity=".75" />
      <g fill="currentColor" fillOpacity=".2">
        <rect x="44" y="82" width="26" height="4" rx="2" />
      </g>
    </>
  ),

  // API Development — hub with connectors / endpoints
  "api-endpoints": (
    <>
      <rect x="42" y="42" width="30" height="30" rx="6" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" />
      <g fill="none" stroke="currentColor" strokeOpacity=".32" strokeWidth="1.4" strokeLinecap="round">
        <path d="M14 34 H32 L42 46" />
        <path d="M14 82 H32 L42 68" />
        <path d="M100 34 H82 L72 46" />
        <path d="M100 82 H82 L72 68" />
        <path d="M57 16 V42" />
      </g>
      <g fill="currentColor" fillOpacity=".5">
        <circle cx="14" cy="34" r="2.6" />
        <circle cx="14" cy="82" r="2.6" />
        <circle cx="100" cy="34" r="2.6" />
        <circle cx="100" cy="82" r="2.6" />
        <circle cx="57" cy="16" r="2.6" />
      </g>
      <circle cx="57" cy="57" r="4" fill="currentColor" fillOpacity=".6" />
    </>
  ),

  // E-Commerce — cart + price tag
  "cart-tags": (
    <>
      <g fill="none" stroke="currentColor" strokeOpacity=".32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 24 H30 L38 66 H80 L88 38 H34" />
        <circle cx="42" cy="82" r="5" />
        <circle cx="74" cy="82" r="5" />
      </g>
      <g transform="rotate(-18 66 34)">
        <rect x="52" y="20" width="30" height="20" rx="4" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.4" />
        <circle cx="59" cy="30" r="2.4" fill="currentColor" fillOpacity=".65" />
      </g>
    </>
  ),

  // Brand Strategy & Identity — palette with colour swatches + a brand mark
  "palette-swatches": (
    <>
      <path
        d="M56 20 a36 36 0 1 0 22 64 c4-3 2-9-3-9 h-6 a10 10 0 0 1-9-14 l2-4 a8 8 0 0 0-6-11 A36 36 0 0 0 56 20 Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".26"
        strokeWidth="1.6"
      />
      <g fill="currentColor">
        <circle cx="40" cy="42" r="5.5" fillOpacity=".55" />
        <circle cx="66" cy="34" r="5.5" fillOpacity=".4" />
        <circle cx="82" cy="52" r="5.5" fillOpacity=".28" />
        <circle cx="44" cy="66" r="5.5" fillOpacity=".7" />
      </g>
      <path d="M30 92 L30 78 L44 78 Z" fill="currentColor" fillOpacity=".18" />
    </>
  ),

  // Social Media Marketing — device with radiating share connections
  "social-network": (
    <>
      <rect x="30" y="18" width="40" height="70" rx="7" fill="none" stroke="currentColor" strokeOpacity=".28" strokeWidth="1.6" />
      <line x1="30" y1="72" x2="70" y2="72" stroke="currentColor" strokeOpacity=".22" strokeWidth="1.4" />
      <g stroke="currentColor" strokeOpacity=".28" strokeWidth="1.2" fill="none">
        <path d="M64 32 L92 20 M64 48 L98 48 M64 64 L92 82" />
      </g>
      <g fill="currentColor">
        <circle cx="92" cy="20" r="4" fillOpacity=".5" />
        <circle cx="98" cy="48" r="4" fillOpacity=".65" />
        <circle cx="92" cy="82" r="4" fillOpacity=".4" />
        <circle cx="64" cy="48" r="5" fillOpacity=".85" />
      </g>
    </>
  ),

  // Content Creation — stacked content cards with an active edit cursor
  "content-blocks": (
    <>
      <g fill="currentColor">
        <rect x="16" y="58" width="60" height="34" rx="6" fillOpacity=".08" stroke="currentColor" strokeOpacity=".2" strokeWidth="1.4" />
        <rect x="28" y="44" width="60" height="34" rx="6" fillOpacity=".12" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.4" />
      </g>
      <g stroke="currentColor" strokeOpacity=".4" strokeWidth="1.6" strokeLinecap="round">
        <line x1="40" y1="58" x2="72" y2="58" />
        <line x1="40" y1="68" x2="64" y2="68" />
      </g>
      <path
        d="M78 34 L90 22 L98 30 L86 42 L76 44 Z"
        fill="currentColor"
        fillOpacity=".2"
        stroke="currentColor"
        strokeOpacity=".55"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </>
  ),

  // Creative Design — artboard with a layered burst of shapes
  "creative-burst": (
    <>
      <rect x="18" y="20" width="76" height="60" rx="6" fill="none" stroke="currentColor" strokeOpacity=".2" strokeWidth="1.4" />
      <circle cx="56" cy="50" r="16" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.3" />
      <path
        d="M56 30 L60 44 L74 50 L60 56 L56 70 L52 56 L38 50 L52 44 Z"
        fill="currentColor"
        fillOpacity=".5"
      />
      <g fill="currentColor" fillOpacity=".3">
        <circle cx="26" cy="70" r="2.6" />
        <circle cx="86" cy="30" r="2.6" />
      </g>
    </>
  ),

  // Campaign Planning — megaphone broadcasting over a schedule grid
  "megaphone-waves": (
    <>
      <path
        d="M20 60 V44 l30-14 v44 l-30-14 Z"
        fill="currentColor"
        fillOpacity=".16"
        stroke="currentColor"
        strokeOpacity=".4"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M28 60 v14 a6 6 0 0 0 12 0 v-8" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M58 38 a20 20 0 0 1 0 24" strokeOpacity=".3" strokeWidth="1.4" />
        <path d="M64 30 a30 30 0 0 1 0 40" strokeOpacity=".18" strokeWidth="1.4" />
      </g>
      <g fill="currentColor" fillOpacity=".2">
        <rect x="78" y="70" width="9" height="9" rx="2" />
        <rect x="91" y="70" width="9" height="9" rx="2" fillOpacity=".4" />
      </g>
    </>
  ),

  // Digital Growth Support — upward trend line over bar chart
  "growth-arrow": (
    <>
      <g fill="currentColor">
        <rect x="20" y="66" width="12" height="24" rx="2" fillOpacity=".18" />
        <rect x="40" y="54" width="12" height="36" rx="2" fillOpacity=".28" />
        <rect x="60" y="38" width="12" height="52" rx="2" fillOpacity=".4" />
      </g>
      <path
        d="M20 62 L42 44 L58 54 L94 22"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M80 22 H94 V36" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

const GRID =
  "linear-gradient(rgb(var(--brand-text) / 0.05) 1px, transparent 1px)," +
  "linear-gradient(90deg, rgb(var(--brand-text) / 0.05) 1px, transparent 1px)";
const GRID_FADE = "linear-gradient(to bottom, black 0%, black 30%, transparent 88%)";

/** Deterministic pseudo-random in [0,1) from a string seed, so the ambient
 *  particle field is stable per-service rather than jittering on re-render. */
function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  return () => {
    h = (Math.imul(1103515245, h) + 12345) | 0;
    return ((h >>> 0) % 10000) / 10000;
  };
}

/** A sparse field of dots + a couple of long connecting lines, scattered
 *  across the full featured canvas — ambient texture, not tied to any one
 *  service, so the featured tile reads as "rich" whichever card is first. */
function ParticleField({ seed }: { seed: string }) {
  const rand = seededRandom(seed);
  const points = Array.from({ length: 14 }, () => ({
    x: 40 + rand() * 680,
    y: 30 + rand() * 200,
    r: 1.6 + rand() * 2.6,
    o: 0.12 + rand() * 0.3,
  }));
  return (
    <svg viewBox="0 0 760 320" className="absolute inset-x-0 top-0 h-[70%] w-full" preserveAspectRatio="xMidYMid slice">
      <g stroke="currentColor" strokeOpacity=".08" strokeWidth="1">
        <line x1={points[0].x} y1={points[0].y} x2={points[3].x} y2={points[3].y} />
        <line x1={points[5].x} y1={points[5].y} x2={points[9].x} y2={points[9].y} />
        <line x1={points[2].x} y1={points[2].y} x2={points[11].x} y2={points[11].y} />
      </g>
      <g fill="currentColor">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fillOpacity={p.o} />
        ))}
      </g>
    </svg>
  );
}

export function ServiceArt({ name, featured, bold }: { name?: string; featured?: boolean; bold?: boolean }) {
  const motif = name ? MOTIFS[name] : undefined;
  if (!motif) return null;

  // Featured tile: grid + soft accent bloom + ambient particles behind a
  // large rendering of the service's own motif. Fills the freed-up space
  // with more graphic, not more copy.
  if (featured) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: GRID,
            backgroundSize: "26px 26px",
            maskImage: GRID_FADE,
            WebkitMaskImage: GRID_FADE,
          }}
        />
        <div className="absolute inset-0 text-accent">
          <div
            className="absolute right-0 top-0 h-full w-full"
            style={{
              background:
                "radial-gradient(46% 60% at 78% 8%, rgb(var(--brand-accent) / 0.12), transparent 70%)",
            }}
          />
          <ParticleField seed={name ?? "service"} />
          <div className="absolute right-6 top-4 flex h-[62%] items-start justify-end">
            <svg viewBox="0 0 112 112" className="h-full max-h-64 w-auto drop-shadow-sm">
              <circle cx="56" cy="56" r="54" fill="none" stroke="currentColor" strokeOpacity=".08" />
              <circle cx="56" cy="56" r="66" fill="none" stroke="currentColor" strokeOpacity=".05" />
              {motif}
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Trial: bigger, fainter, bolder-stroked motif bleeding off the top-right corner.
  if (bold) {
    return (
      <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-accent opacity-[0.14] [&_path]:stroke-[3]">
        <svg viewBox="0 0 112 112" className="h-full w-full">
          {motif}
        </svg>
      </div>
    );
  }

  // Standard card: small motif inset from the top-right corner.
  return (
    <div aria-hidden className="pointer-events-none absolute right-4 top-4 h-20 w-20 text-accent">
      <svg viewBox="0 0 112 112" className="h-full w-full">
        {motif}
      </svg>
    </div>
  );
}
