# En'nobler / Oolo — Architecture

Dual-brand company website. One codebase, two visual identities (En'nobler = IT/navy/upright; Oolo = Marketing/warm/italic), shared structural pages (Portfolio, About, Careers, Contact).

## 1. Stack

| Layer | Choice |
|---|---|
| Build | Vite + React 18 + TypeScript |
| Routing | React Router v6 (data router) |
| Styling | Tailwind CSS + shadcn/ui + CSS variables for brand theming |
| Client state | React Context (`BrandProvider`) |
| Server state | TanStack Query |
| Forms | react-hook-form + zod (`@hookform/resolvers`) |
| Backend | Supabase (Postgres, Auth, Storage, RLS) |
| Email | Supabase Edge Function → Resend |
| Hosting | Vercel (FE) + Supabase (BE) |

## 2. Brand system (the core architectural decision)

Both brands share **structure** and differ only in **tokens**. We never fork components per brand.

- `<html data-brand="ennobler|oolo">` drives everything.
- `tokens.css` defines `--brand-*` variables under `[data-brand="…"]` selectors (canvas, surface, text, accent, font, heading-style). Tailwind maps these via `theme.extend.colors` using `rgb(var(--brand-bg) / <alpha-value>)`.
- `BrandProvider` (Context) owns the active brand, persists to `localStorage`, syncs the `data-brand` attribute, and is also derived from the route (En'nobler routes force `ennobler`, Oolo routes force `oolo`; shared routes keep the last-chosen brand).
- Typography: Fraunces (display) + DM Sans (body). En'nobler headings upright `opsz 72`; Oolo headings italic `opsz 144` — controlled by a single `--brand-heading-style` + utility classes.

```
src/brand/
  tokens.css          # :root + [data-brand] CSS variables
  BrandProvider.tsx   # context, localStorage, <html data-brand> sync
  useBrand.ts         # hook
  brand.config.ts     # nav items, dropdown services, taglines, socials per brand
```

## 3. Routing

`createBrowserRouter` with a single `<RootLayout>` (Header + Outlet + Footer). Brand is resolved per-route.

```
/                       → StudioLanding (brand picker / pre-landing)
/ennobler               → en/Home
/ennobler/services      → en/Services (+ /:slug detail)
/ennobler/products      → en/Products (+ /:slug)
/ennobler/qaas
/ennobler/pricing
/oolo                   → oolo/Home
/oolo/services          → oolo/Services (+ /:slug detail)
/oolo/business-registration
/oolo/chikku
/oolo/pricing
/portfolio              → shared (brand-aware layout)
/about                  → shared
/careers                → shared
/contact                → shared (the form → Supabase)
*                       → NotFound
```

Brand inference: a thin `brandFromPath()` util + `<BrandRoute brand="…">` wrapper that sets brand on mount. Shared routes use `<BrandRoute keep>`.

## 4. Content model (how 31 pages stay maintainable)

Pages are **data-driven**. Page content is typed config consumed by a small library of section components — no hand-written JSX per marketing page.

```
src/content/
  types.ts            # Section union: Hero | FeatureGrid | ServiceCards | Stats |
                      #   Steps | Pricing | CaseGrid | CTA | LogoStrip | Marquee
  ennobler/*.ts       # page configs (home, services, …)
  oolo/*.ts
  shared/*.ts

src/components/sections/  # one component per Section type, brand-token styled
src/components/SectionRenderer.tsx  # switch(section.type)
```

A marketing page = `<Page sections={config} />`. Detail pages (`/services/:slug`) look the content up by slug. This makes porting the remaining prototype pages mechanical (fill config, not build UI).

## 5. Data layer (Supabase + TanStack Query)

Postgres tables (RLS on all; public read where noted):

| Table | Purpose | Read |
|---|---|---|
| `services` | both brands' service catalog (brand, slug, title, summary, body, icon, order) | public |
| `projects` | portfolio items (brand, tags, cover, summary, body) | public |
| `pricing_plans` | tiers per brand | public |
| `job_postings` | careers (dept, location, type, body, active) | public (active only) |
| `contact_submissions` | inbound form | insert public, select admin-only |

- Anon key in the browser; **RLS** enforces: public `select` on catalog tables, public `insert` on `contact_submissions` (no select), authenticated admin for everything else.
- TanStack Query wraps reads: `useServices(brand)`, `useProjects(filter)`, `usePricing(brand)`, `useJobs()`. Query keys include brand. Static-ish content can also be seeded into `src/content` as fallback so the site renders without DB.
- `src/lib/supabase.ts` — typed client from generated `database.types.ts`.

## 6. Contact form flow

`/contact` → react-hook-form + zod (`contactSchema`) → `useMutation` → `supabase.from('contact_submissions').insert()` → DB trigger / direct call to **Edge Function** `notify-contact` → Resend sends an email to the team and an auto-reply to the user. Inline success/error UI; honeypot + basic rate-limit on the function.

```
supabase/
  migrations/0001_init.sql      # tables, RLS policies, indexes
  functions/notify-contact/index.ts   # Deno + Resend
  config.toml
```

## 7. Directory layout

```
app/
  index.html
  package.json  vite.config.ts  tsconfig.json
  tailwind.config.ts  postcss.config.js  components.json (shadcn)
  .env.example
  src/
    main.tsx  App.tsx  router.tsx
    brand/        # brand system (see §2)
    content/      # page + section configs (see §4)
    components/
      ui/         # shadcn primitives
      layout/     # Header, Footer, BrandToggle, MobileNav (one drawer, both brands)
      sections/   # Hero, ServiceCards, … (see §4)
      SectionRenderer.tsx  Page.tsx
    pages/        # route components (thin; compose Page + content)
    hooks/        # useServices, useProjects, …
    lib/          # supabase.ts, queryClient.ts, utils.ts (cn)
    types/        # database.types.ts, app types
  supabase/       # migrations + edge functions
```

## 8. Key decisions / fixes carried from the prototype

- **One mobile drawer for both brands** (the prototype's En'nobler side had none → horizontal overflow). `MobileNav` is brand-token styled, reused everywhere.
- **Consistent announcement bar + marquee** as single components with brand tokens.
- **No invisible text**: tokens guarantee `--brand-text` always contrasts `--brand-bg`; sections never hardcode colors.
- Accessibility: focus rings via `--brand-accent`, `prefers-reduced-motion` respected in motion components.

## 9. Build order (implementation)

1. ✅ Scaffold config (Vite/TS/Tailwind/shadcn) + tokens + BrandProvider.
2. ✅ RootLayout: Header, Footer, BrandToggle, MobileNav.
3. ✅ Section library + SectionRenderer + Page.
4. ✅ Router + StudioLanding + En'nobler Home + Oolo Home.
5. ✅ Supabase client, schema migration, types, hooks.
6. ✅ Contact form + Edge Function.
7. ⏳ Port remaining page configs (mechanical) + Services/Portfolio/Pricing/Careers wired to Supabase.
8. ⏳ Auth-gated admin for submissions/jobs (optional phase 2).
```
```
