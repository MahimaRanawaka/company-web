import type { ReactNode } from "react";
import { Icon } from "@/lib/icons";

/* ------------------------------------------------------------------ *
 * Bespoke, hand-coded hero diagrams for service-detail pages — rendered
 * bare (no panel/background) directly on the page surface, sized to
 * fill roughly the same area the old placeholder graphic did.
 *
 * Each entry is a ONE-OFF composition tailored to what that specific
 * service actually does — not a shared template. Do not reuse another
 * service's layout wholesale; design a new scene that fits each
 * service's own story instead.
 * ------------------------------------------------------------------ */

function MiniPanel({
  left,
  top,
  icon,
  label,
  children,
}: {
  left: string;
  top: string;
  icon: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm backdrop-blur"
      style={{ left, top }}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <Icon name={icon} className="h-3.5 w-3.5 text-accent" />
        <span className="font-mono text-[9px] uppercase tracking-wide text-subtle">{label}</span>
      </div>
      {children}
    </div>
  );
}

const DIAGRAMS: Record<string, ReactNode> = {
  "ai-automation-diagram": (
    <>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-accent" preserveAspectRatio="none">
        <g stroke="currentColor" strokeOpacity=".3" strokeWidth="1.4" fill="none">
          <path d="M200 150 L76 58" />
          <path d="M200 150 L324 58" />
          <path d="M200 150 L76 242" />
          <path d="M200 150 L324 242" />
        </g>
      </svg>

      <div className="absolute grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-canvas text-accent shadow-sm" style={{ left: "50%", top: "50%" }}>
        <Icon name="brain" className="h-8 w-8" />
      </div>

      {/* LLM Integration — a short chat exchange */}
      <MiniPanel left="18%" top="19%" icon="bot" label="LLM Integration">
        <div className="flex flex-col gap-1.5">
          <div className="ml-auto h-1.5 w-2/3 rounded-full bg-surface" />
          <div className="h-1.5 w-full rounded-full bg-accent/25" />
          <div className="h-1.5 w-3/4 rounded-full bg-accent/25" />
          <div className="h-1.5 w-1/2 rounded-full bg-accent/25" />
        </div>
      </MiniPanel>

      {/* Process Automation — a 3-step pipeline */}
      <MiniPanel left="82%" top="19%" icon="workflow" label="Automation">
        <div className="flex items-center">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-surface">
            <Icon name="zap" className="h-3 w-3 text-accent" />
          </span>
          <span className="mx-1 h-px flex-1 bg-hairline-strong" />
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-surface">
            <Icon name="settings" className="h-3 w-3 text-accent" />
          </span>
          <span className="mx-1 h-px flex-1 bg-hairline-strong" />
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-accent text-canvas">
            <Icon name="check" className="h-3 w-3" />
          </span>
        </div>
        <div className="mt-1.5 font-mono text-[7px] text-subtle">Trigger → Process → Done</div>
      </MiniPanel>

      {/* Document Intelligence — extracted fields checklist */}
      <MiniPanel left="18%" top="81%" icon="file-text" label="Data Pipeline">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-1.5 flex-1 rounded-full bg-surface" />
              <Icon name="check" className="h-3 w-3 shrink-0 text-accent" />
            </div>
          ))}
        </div>
      </MiniPanel>

      {/* Monitoring — a small live metrics chart */}
      <MiniPanel left="82%" top="81%" icon="activity" label="Monitoring">
        <div className="flex h-8 items-end gap-1">
          {[40, 70, 50, 90, 65, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-accent/40" style={{ height: `${h}%` }} />
          ))}
        </div>
      </MiniPanel>
    </>
  ),

  // Quality Assurance — a central test-suite result card (one caught bug
  // among passing checks, plus a release-readiness footer) with four
  // descriptive coverage panels orbiting it.
  "quality-assurance-diagram": (
    <>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-accent" preserveAspectRatio="none">
        <g stroke="currentColor" strokeOpacity=".3" strokeWidth="1.4" fill="none">
          <path d="M128 100 L76 58" />
          <path d="M272 100 L324 58" />
          <path d="M128 200 L76 242" />
          <path d="M272 200 L324 242" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-hairline bg-canvas/95 p-3.5 shadow-sm backdrop-blur">
        <div className="mb-2 flex items-center gap-1.5">
          <Icon name="shield-check" className="h-4 w-4 text-accent" />
          <span className="font-mono text-[9px] uppercase tracking-wide text-subtle">Test Suite</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-surface" />
            <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-surface" />
            <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-surface" />
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent">
              <Icon name="bug" className="h-2.5 w-2.5 text-canvas" />
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-surface" />
            <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-accent" />
          </div>
        </div>
        <div className="mt-2 border-t border-hairline pt-1.5 font-mono text-[8px] text-subtle">
          3 passed · 1 flaw caught before release
        </div>
      </div>

      <MiniPanel left="18%" top="19%" icon="eye" label="Manual QA">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="h-px flex-1 border-t border-dashed border-hairline-strong" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
          <span className="h-px flex-1 border-t border-dashed border-hairline-strong" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/30" />
        </div>
        <div className="mt-1.5 font-mono text-[7px] text-subtle">Exploratory click paths</div>
      </MiniPanel>

      <MiniPanel left="82%" top="19%" icon="smartphone" label="Mobile QA">
        <div className="flex gap-1.5">
          <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[8px] text-ink">iOS</span>
          <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[8px] text-ink">Android</span>
        </div>
        <div className="mt-1.5 font-mono text-[7px] text-subtle">Real-device matrix</div>
      </MiniPanel>

      <MiniPanel left="18%" top="81%" icon="webhook" label="API Testing">
        <div className="flex items-center justify-between gap-1.5">
          <span className="truncate font-mono text-[8px] text-ink">GET /v1/users</span>
          <span className="shrink-0 rounded bg-accent px-1 py-0.5 font-mono text-[7px] text-canvas">200</span>
        </div>
      </MiniPanel>

      <MiniPanel left="82%" top="81%" icon="gauge" label="Performance">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-surface">
            <div className="h-full w-2/3 rounded-full bg-accent/50" />
          </div>
          <span className="shrink-0 font-mono text-[8px] text-ink">180ms</span>
        </div>
      </MiniPanel>
    </>
  ),

  // Software Development — a full code-editor mockup: file tree, tabs, a
  // real sample function with keyword highlighting, and a passing build bar.
  "software-development-diagram": (
    <div className="absolute inset-[4%] flex overflow-hidden rounded-lg border border-hairline bg-canvas/95 shadow-sm backdrop-blur">
      <div className="hidden w-[24%] shrink-0 flex-col border-r border-hairline bg-surface p-2.5 sm:flex">
        <div className="mb-2 font-mono text-[8px] uppercase tracking-wide text-subtle">Files</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <Icon name="folder" className="h-3 w-3 text-accent" />
            <span className="font-mono text-[8px] text-ink">src</span>
          </div>
          <div className="ml-4 flex items-center gap-1.5">
            <Icon name="file-code" className="h-3 w-3 text-accent" />
            <span className="font-mono text-[8px] text-ink">App.tsx</span>
          </div>
          <div className="ml-4 flex items-center gap-1.5">
            <Icon name="file-code" className="h-3 w-3 text-subtle" />
            <span className="font-mono text-[8px] text-subtle">api.ts</span>
          </div>
          <div className="ml-4 flex items-center gap-1.5">
            <Icon name="file-code" className="h-3 w-3 text-subtle" />
            <span className="font-mono text-[8px] text-subtle">utils.ts</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-1 border-b border-hairline bg-surface px-2.5 py-2">
          <span className="h-2 w-2 rounded-full bg-accent/40" />
          <span className="h-2 w-2 rounded-full bg-accent/25" />
          <span className="h-2 w-2 rounded-full bg-accent/15" />
          <span className="ml-2 rounded-t bg-canvas px-2 py-0.5 font-mono text-[8px] text-ink">App.tsx</span>
          <span className="rounded-t px-2 py-0.5 font-mono text-[8px] text-subtle">api.ts</span>
        </div>
        <div className="flex-1 p-3.5 font-mono text-[9px] leading-relaxed text-ink">
          <div>
            <span className="text-accent">function</span> getUser(id) {"{"}
          </div>
          <div className="pl-4">
            <span className="text-accent">const</span> res = <span className="text-accent">await</span> fetch(url);
          </div>
          <div className="pl-4">
            <span className="text-accent">return</span> res.json();
          </div>
          <div>{"}"}</div>
          <div className="mt-2">
            <span className="text-accent">export default</span> getUser;
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-t border-hairline bg-surface px-3 py-2">
          <Icon name="check-check" className="h-3 w-3 text-accent" />
          <span className="font-mono text-[8px] text-subtle">Build passing · 0 errors · 100% coverage</span>
        </div>
      </div>
    </div>
  ),

  // Web / App Development — a fuller browser mockup: nav bar, hero block,
  // a 3-card row, plus a Lighthouse-style performance badge.
  "web-platform-diagram": (
    <>
      <div className="absolute inset-[4%] overflow-hidden rounded-lg border border-hairline bg-canvas/95 shadow-sm backdrop-blur">
        <div className="flex items-center gap-1 border-b border-hairline bg-surface px-2.5 py-2">
          <span className="h-2 w-2 rounded-full bg-accent/30" />
          <span className="h-2 w-2 rounded-full bg-accent/20" />
          <span className="h-2 w-2 rounded-full bg-accent/15" />
          <span className="ml-2 flex-1 rounded bg-canvas px-2 py-0.5 font-mono text-[8px] text-subtle">yourcompany.com</span>
        </div>
        <div className="flex items-center justify-between border-b border-hairline px-3.5 py-2.5">
          <div className="h-2 w-14 rounded-full bg-accent/30" />
          <div className="flex gap-2">
            <div className="h-1.5 w-7 rounded-full bg-surface" />
            <div className="h-1.5 w-7 rounded-full bg-surface" />
            <div className="h-1.5 w-7 rounded-full bg-surface" />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3.5">
          <div className="h-16 rounded-md bg-surface" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded-md bg-surface" />
            <div className="h-12 rounded-md bg-surface" />
            <div className="h-12 rounded-md bg-surface" />
          </div>
          <div className="h-2 w-2/3 rounded-full bg-surface" />
        </div>
      </div>
      <div
        className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-canvas text-accent shadow-sm"
        style={{ left: "90%", top: "12%" }}
      >
        <span className="font-mono text-[11px] font-medium">98</span>
      </div>
    </>
  ),

  // Mobile App Development — two fuller device mockups (iOS + Android) with
  // list content, a bottom tab bar, and a push-notification badge.
  "mobile-app-diagram": (
    <div className="absolute inset-0 flex items-center justify-center gap-6">
      <div className="relative flex h-[78%] w-[30%] flex-col rounded-2xl border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-hairline-strong" />
        <div className="mb-2 h-2 w-1/2 rounded-full bg-accent/30" />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-8 rounded-md bg-surface" />
          <div className="h-8 rounded-md bg-surface" />
          <div className="h-8 rounded-md bg-surface" />
        </div>
        <div className="mt-2 flex items-center justify-around border-t border-hairline pt-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-2 w-2 rounded-full bg-hairline-strong" />
          <span className="h-2 w-2 rounded-full bg-hairline-strong" />
        </div>
        <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-accent text-canvas">
          <span className="font-mono text-[8px]">1</span>
        </span>
      </div>
      <div className="flex h-[85%] w-[32%] flex-col rounded-2xl border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-hairline-strong" />
        <div className="mb-2 h-2 w-2/3 rounded-full bg-accent/30" />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-8 rounded-md bg-accent/15" />
          <div className="h-8 rounded-md bg-surface" />
          <div className="h-8 rounded-md bg-surface" />
        </div>
        <div className="mt-2 flex items-center justify-around border-t border-hairline pt-2">
          <span className="h-2 w-2 rounded-full bg-hairline-strong" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-2 w-2 rounded-full bg-hairline-strong" />
        </div>
      </div>
    </div>
  ),

  // UI/UX Design — a fuller artboard (header + image block + text lines)
  // with selection handles, a taller layers panel, and a colour-token row.
  "ui-ux-design-diagram": (
    <div className="absolute inset-[4%] flex gap-3">
      <div className="flex flex-1 flex-col rounded-lg border border-hairline bg-canvas/95 p-3.5 shadow-sm">
        <div className="relative flex-1 rounded-md border border-dashed border-hairline-strong bg-surface p-3">
          <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full border border-accent bg-canvas" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-accent bg-canvas" />
          <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full border border-accent bg-canvas" />
          <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full border border-accent bg-canvas" />
          <div className="flex h-full flex-col gap-2">
            <div className="h-3 w-1/3 rounded-full bg-accent/30" />
            <div className="flex-1 rounded-md bg-canvas" />
            <div className="h-2 w-full rounded-full bg-canvas" />
            <div className="h-2 w-2/3 rounded-full bg-canvas" />
          </div>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <span className="h-4 w-4 rounded-full bg-accent" />
          <span className="h-4 w-4 rounded-full bg-accent/60" />
          <span className="h-4 w-4 rounded-full bg-accent/30" />
          <span className="h-4 w-4 rounded-full bg-surface" />
        </div>
      </div>
      <div className="w-[24%] shrink-0 rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <div className="mb-2 font-mono text-[8px] uppercase tracking-wide text-subtle">Layers</div>
        <div className="flex flex-col gap-1.5">
          <div className="h-2 rounded-full bg-accent/30" />
          <div className="h-2 rounded-full bg-surface" />
          <div className="h-2 rounded-full bg-surface" />
          <div className="h-2 rounded-full bg-surface" />
          <div className="h-2 rounded-full bg-surface" />
        </div>
      </div>
    </div>
  ),

  // Cloud / DevOps Support — a linear commit-to-deploy pipeline spanning the
  // full width, plus a small terminal line reporting the live result.
  "cloud-devops-diagram": (
    <div className="absolute inset-[4%] flex flex-col justify-center gap-10">
      <div className="relative h-24 w-full">
        <svg viewBox="0 0 400 160" className="absolute inset-0 h-full w-full text-accent" preserveAspectRatio="none">
          <g stroke="currentColor" strokeOpacity=".3" strokeWidth="1.6">
            <path d="M62 80 L138 80" />
            <path d="M162 80 L238 80" />
            <path d="M262 80 L338 80" />
          </g>
        </svg>
        {[
          { left: "12%", icon: "git-branch", label: "Commit" },
          { left: "37%", icon: "container", label: "Build" },
          { left: "63%", icon: "check-check", label: "Test" },
          { left: "88%", icon: "cloud", label: "Deploy" },
        ].map((s) => (
          <div key={s.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2" style={{ left: s.left, top: "50%" }}>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-hairline bg-canvas text-accent shadow-sm">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <span className="whitespace-nowrap font-mono text-[9px] text-subtle">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="w-full rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <div className="flex items-center gap-1.5 font-mono text-[8px] text-subtle">
          <Icon name="terminal" className="h-3.5 w-3.5 shrink-0 text-accent" />
          <span>Deployed v2.4.1 to production · uptime 99.98%</span>
        </div>
      </div>
    </div>
  ),

  // API Development — a two-pane request/response console with headers,
  // a request body, and a JSON response.
  "api-development-diagram": (
    <div className="absolute inset-[4%] flex gap-3">
      <div className="flex flex-1 flex-col rounded-lg border border-hairline bg-canvas/95 p-3.5 shadow-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-[8px] font-medium text-canvas">POST</span>
          <span className="font-mono text-[8px] text-ink">/v1/orders</span>
        </div>
        <div className="flex flex-col gap-1.5 font-mono text-[8px] text-subtle">
          <div>Authorization: Bearer •••</div>
          <div>Content-Type: application/json</div>
        </div>
        <div className="mt-auto rounded-md bg-surface p-2 font-mono text-[8px] text-subtle">{'{ "sku": "SKU-1042", "qty": 2 }'}</div>
      </div>
      <div className="flex flex-1 flex-col rounded-lg border border-hairline bg-canvas/95 p-3.5 shadow-sm">
        <div className="mb-2.5">
          <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[8px] font-medium text-accent">200 OK</span>
        </div>
        <div className="rounded-md bg-surface p-2 font-mono text-[8px] leading-relaxed text-subtle">
          <div>{"{"}</div>
          <div className="pl-3">
            "status": <span className="text-accent">"confirmed"</span>,
          </div>
          <div className="pl-3">
            "id": <span className="text-accent">"ord_8841"</span>
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </div>
  ),

  // E-Commerce Solutions — a storefront product grid next to a cart panel.
  "ecommerce-diagram": (
    <div className="absolute inset-[4%] flex gap-3">
      <div className="grid flex-1 grid-cols-2 gap-2.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
            <div className="mb-1.5 flex-1 rounded-md bg-surface" />
            <div className="mb-1 h-1.5 w-3/4 rounded-full bg-surface" />
            <span className="font-mono text-[8px] font-medium text-ink">$48.00</span>
          </div>
        ))}
      </div>
      <div className="flex w-[26%] shrink-0 flex-col rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <Icon name="shopping-cart" className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">Cart (3)</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-2/3 rounded-full bg-surface" />
        </div>
        <div className="mt-auto rounded bg-accent px-2 py-1.5 text-center font-mono text-[8px] text-canvas">Checkout</div>
      </div>
    </div>
  ),

  // Digital Transformation — a roadmap: a description card per stage above
  // a timeline, the two upcoming stages left hollow.
  "digital-transformation-diagram": (
    <div className="absolute inset-[4%] flex flex-col justify-center gap-6">
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "Audit", body: "Map current stack" },
          { label: "Roadmap", body: "Prioritise initiatives" },
          { label: "Migrate", body: "Modernise systems" },
          { label: "Scale", body: "Sustain growth" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
            <div className="mb-1 font-mono text-[8px] font-medium text-ink">{s.label}</div>
            <div className="font-mono text-[7px] leading-snug text-subtle">{s.body}</div>
          </div>
        ))}
      </div>
      <div className="relative h-px w-full bg-hairline-strong">
        {[
          { left: 12, filled: true },
          { left: 38, filled: true },
          { left: 63, filled: false },
          { left: 88, filled: false },
        ].map((s, i) => (
          <span
            key={i}
            className={
              s.filled
                ? "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                : "absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-canvas"
            }
            style={{ left: `${s.left}%`, top: "50%" }}
          />
        ))}
      </div>
    </div>
  ),

  // Brand Strategy & Identity — a brand board: mark + wordmark, colour
  // palette, and a type + voice sample.
  "brand-strategy-diagram": (
    <div className="absolute inset-[4%] flex flex-col justify-center gap-5 rounded-lg border border-hairline bg-canvas/95 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-canvas">
          <Icon name="sparkles" className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-28 rounded-full bg-ink/80" />
          <div className="h-1.5 w-16 rounded-full bg-surface" />
        </div>
      </div>
      <div className="flex gap-2">
        <span className="h-6 w-6 rounded-full bg-accent" />
        <span className="h-6 w-6 rounded-full bg-accent/70" />
        <span className="h-6 w-6 rounded-full bg-accent/40" />
        <span className="h-6 w-6 rounded-full bg-ink/80" />
        <span className="h-6 w-6 rounded-full border border-hairline bg-canvas" />
      </div>
      <div className="flex items-baseline gap-3 border-t border-hairline pt-3.5">
        <span className="font-display text-2xl text-ink">Aa</span>
        <span className="font-display text-sm text-subtle">Aa</span>
        <div className="ml-auto flex gap-1.5">
          <span className="rounded-full bg-surface px-2 py-0.5 font-mono text-[8px] text-ink">Bold</span>
          <span className="rounded-full bg-surface px-2 py-0.5 font-mono text-[8px] text-ink">Warm</span>
        </div>
      </div>
    </div>
  ),

  // Social Media Marketing — a post preview next to a weekly content
  // calendar grid.
  "social-media-diagram": (
    <div className="absolute inset-[4%] flex gap-3">
      <div className="flex w-[46%] flex-col rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-5 w-5 shrink-0 rounded-full bg-accent" />
          <div className="h-1.5 w-14 rounded-full bg-surface" />
        </div>
        <div className="mb-2.5 flex-1 rounded-md bg-surface" />
        <div className="flex items-center gap-3 text-accent">
          <Icon name="heart" className="h-3.5 w-3.5" />
          <Icon name="message-circle" className="h-3.5 w-3.5" />
          <Icon name="share-2" className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="flex w-[46%] flex-col rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <Icon name="calendar" className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">This Week</span>
        </div>
        <div className="grid flex-1 grid-cols-7 gap-1">
          {[1, 0, 1, 0, 0, 1, 0].map((on, i) => (
            <span key={i} className={on ? "rounded bg-accent/60" : "rounded bg-surface"} />
          ))}
        </div>
      </div>
    </div>
  ),

  // Content Creation — a reel script panel next to a storyboard frame and
  // three shot thumbnails.
  "content-diagram": (
    <div className="absolute inset-[4%] flex gap-3">
      <div className="flex w-[36%] flex-col rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
        <div className="mb-2.5 flex items-center gap-1.5">
          <Icon name="clapperboard" className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">Reel Script</span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-full rounded-full bg-surface" />
          <div className="h-1.5 w-2/3 rounded-full bg-surface" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        <div className="flex-1 rounded-lg border border-hairline bg-canvas/95 p-2 shadow-sm">
          <div className="h-full rounded-md bg-surface" />
        </div>
        <div className="flex gap-2.5">
          <div className="h-10 flex-1 rounded-md border border-hairline bg-canvas/95 shadow-sm" />
          <div className="h-10 flex-1 rounded-md border border-hairline bg-canvas/95 shadow-sm" />
          <div className="h-10 flex-1 rounded-md border border-hairline bg-canvas/95 shadow-sm" />
        </div>
      </div>
    </div>
  ),

  // Creative Design — a mood-board asset grid: hero visual, colour swatches,
  // a secondary crop, and a file chip.
  "creative-diagram": (
    <div className="absolute inset-[4%] grid grid-cols-3 grid-rows-2 gap-2.5">
      <div className="col-span-2 rounded-lg border border-hairline bg-canvas/95 p-2 shadow-sm">
        <div className="h-full rounded-md bg-accent/20" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-hairline bg-canvas/95 p-2 shadow-sm">
        <span className="h-4 w-4 rounded-full bg-accent" />
        <span className="h-4 w-4 rounded-full bg-ink/80" />
        <span className="h-4 w-4 rounded-full border border-hairline bg-canvas" />
      </div>
      <div className="rounded-lg border border-hairline bg-canvas/95 p-2 shadow-sm">
        <div className="h-full rounded-md bg-surface" />
      </div>
      <div className="col-span-2 flex items-center gap-2 rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <Icon name="image" className="h-4 w-4 shrink-0 text-accent" />
        <span className="truncate font-mono text-[8px] text-subtle">Campaign_v3_final.fig</span>
      </div>
    </div>
  ),

  // Campaign Planning — channel tags above a launch timeline.
  "campaign-diagram": (
    <div className="absolute inset-[4%] flex flex-col justify-center gap-8">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[8px] text-ink">Social</span>
        <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[8px] text-ink">Email</span>
        <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[8px] text-canvas">Paid Ads</span>
        <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[8px] text-ink">Landing Page</span>
      </div>
      <div className="relative h-px w-full bg-hairline-strong">
        {[
          { left: 10, label: "Teaser" },
          { left: 40, label: "Launch" },
          { left: 70, label: "Push" },
          { left: 95, label: "Wrap" },
        ].map((s) => (
          <div key={s.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5" style={{ left: `${s.left}%`, top: "50%" }}>
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="whitespace-nowrap font-mono text-[8px] text-subtle">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  // Digital Growth Support — a traffic trendline, a growth-rate stat, and a
  // next-action recommendation line.
  "digital-growth-diagram": (
    <div className="absolute inset-[4%] flex flex-col gap-3">
      <div className="flex flex-1 gap-3">
        <div className="flex w-[55%] flex-col rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-1.5">
            <Icon name="trending-up" className="h-3.5 w-3.5 text-accent" />
            <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">Traffic</span>
          </div>
          <svg viewBox="0 0 200 60" className="flex-1 text-accent" preserveAspectRatio="none">
            <polyline points="0,50 40,42 80,44 120,20 160,26 200,8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center gap-1.5 rounded-lg border border-hairline bg-canvas/95 p-3 shadow-sm">
          <span className="font-mono text-lg font-medium text-ink">+34%</span>
          <span className="font-mono text-[8px] text-subtle">MoM growth</span>
        </div>
      </div>
      <div className="rounded-lg border border-hairline bg-canvas/95 p-2.5 shadow-sm">
        <div className="flex items-center gap-1.5 font-mono text-[8px] text-subtle">
          <Icon name="lightbulb" className="h-3.5 w-3.5 shrink-0 text-accent" />
          <span>Next: double down on short-form video</span>
        </div>
      </div>
    </div>
  ),

  // Products overview — two ready-built product windows side by side (an
  // E-commerce storefront grid + checkout, a Tourism listing + date picker),
  // tied together with a small QA badge sitting between them.
  "products-overview-diagram": (
    <div className="absolute inset-[4%] flex items-center gap-6">
      <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-hairline bg-canvas/95 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-hairline bg-surface px-2.5 py-2">
          <Icon name="shopping-cart" className="h-3 w-3 text-accent" />
          <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">E-commerce</span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-1.5 p-2.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col gap-1 rounded-md bg-surface p-1.5">
              <div className="aspect-square rounded bg-hairline-strong/50" />
              <div className="h-1 w-3/4 rounded-full bg-hairline-strong/70" />
            </div>
          ))}
        </div>
        <div className="m-2.5 mt-0 rounded bg-accent py-1.5 text-center font-mono text-[8px] text-canvas">Checkout</div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-canvas shadow-sm">
        <Icon name="shield-check" className="h-4 w-4 text-accent" />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-hairline bg-canvas/95 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-hairline bg-surface px-2.5 py-2">
          <Icon name="map-pin" className="h-3 w-3 text-accent" />
          <span className="font-mono text-[8px] uppercase tracking-wide text-subtle">Tourism</span>
        </div>
        <div className="flex-1 p-2.5">
          <div className="mb-1.5 aspect-[16/9] rounded-md bg-surface" />
          <div className="mb-2 h-1 w-2/3 rounded-full bg-hairline-strong/70" />
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-sm ${i === 9 ? "bg-accent" : "bg-surface"}`} />
            ))}
          </div>
        </div>
        <div className="m-2.5 mt-0 rounded bg-accent py-1.5 text-center font-mono text-[8px] text-canvas">Book Now</div>
      </div>
    </div>
  ),
};

export function HeroArt({ name }: { name?: string }) {
  const diagram = name ? DIAGRAMS[name] : undefined;
  if (!diagram) return null;

  return <div className="relative aspect-[4/3]">{diagram}</div>;
}
