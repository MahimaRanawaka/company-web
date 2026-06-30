# En'nobler / Oolo

Dual-brand company website. One React codebase, two visual identities driven by a single `data-brand` attribute. See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the full design.

## Stack
Vite · React 18 · TypeScript · React Router v6 · Tailwind + shadcn/ui · React Context (brand) · TanStack Query · react-hook-form + zod · Supabase · Resend · Vercel.

## Getting started

```bash
npm install
cp .env.example .env      # fill in Supabase URL + anon key (optional for first run)
npm run dev               # http://localhost:5173
```

The app runs **without Supabase** — catalog hooks fall back to seeded content in
`src/content/seed.ts`, and the contact form resolves to a dev success state. Add
the env vars to switch to live data.

## Supabase

```bash
supabase link --project-ref <ref>
supabase db push                       # applies migrations/0001_init.sql + 0002_seed.sql
supabase functions deploy notify-contact
supabase secrets set RESEND_API_KEY=re_xxx CONTACT_TO_EMAIL=team@... CONTACT_FROM_EMAIL=hello@...
npm run db:types                       # regenerate src/types/database.types.ts
```

RLS: catalog tables are public-read; `contact_submissions` is insert-only for
anon (no read). Admin access uses the service-role key.

## Project structure

```
src/
  brand/        data-brand token system + Context provider + per-brand config
  content/      typed page configs (data-driven) + seed fallback
  components/
    layout/     Header, Footer, BrandToggle, MobileNav (one drawer, both brands)
    sections/   Hero, Stats, Features, ServiceCards, Steps, Cta, Marquee
    ui/         shadcn-style primitives
    SectionRenderer.tsx · Page.tsx
  pages/        thin route components
  hooks/        TanStack Query data hooks (+ contact mutation)
  lib/          supabase, queryClient, zod schemas, utils
  types/        database.types.ts
supabase/       migrations + notify-contact edge function
```

## Adding a page
1. Add a typed `PageContent` config in `src/content/...`.
2. Add a route in `src/router.tsx` pointing at `<Page content={...} />`.

No new components needed for standard marketing pages — the section library
covers them. En'nobler routes force the navy theme, Oolo routes force the warm
theme, shared routes keep the visitor's current brand.

## Deploy
- **Frontend:** Vercel (root = `app/`). `vercel.json` handles SPA rewrites. Set `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`.
- **Backend:** Supabase (migrations + edge function as above).
