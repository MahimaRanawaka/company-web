-- ============================================================
-- En'nobler / Oolo — schema, RLS, indexes
-- ============================================================

create type public.brand as enum ('ennobler', 'oolo');

-- ---------- catalog tables (public read) ----------
create table public.services (
  id uuid primary key default gen_random_uuid(),
  brand public.brand not null,
  slug text not null,
  title text not null,
  summary text not null,
  body text,
  icon text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  unique (brand, slug)
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  brand text not null check (brand in ('ennobler','oolo','joint')),
  slug text not null unique,
  title text not null,
  summary text not null,
  body text,
  cover_url text,
  tags text[] not null default '{}',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table public.pricing_plans (
  id uuid primary key default gen_random_uuid(),
  brand public.brand not null,
  name text not null,
  price text not null,
  cadence text,
  features text[] not null default '{}',
  highlighted boolean not null default false,
  sort_order int not null default 0
);

create table public.job_postings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,
  location text not null,
  employment_type text not null,
  body text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- inbound (public insert, no public read) ----------
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  brand_interest public.brand,
  message text not null,
  created_at timestamptz not null default now()
);

create index on public.services (brand, sort_order);
create index on public.projects (brand, sort_order);
create index on public.pricing_plans (brand, sort_order);
create index on public.job_postings (active);

-- ============================================================
-- Row-Level Security
-- ============================================================
alter table public.services            enable row level security;
alter table public.projects            enable row level security;
alter table public.pricing_plans       enable row level security;
alter table public.job_postings        enable row level security;
alter table public.contact_submissions enable row level security;

-- public read for catalog
create policy "public read services"  on public.services      for select using (true);
create policy "public read projects"  on public.projects      for select using (true);
create policy "public read pricing"   on public.pricing_plans for select using (true);
create policy "public read jobs"      on public.job_postings  for select using (active = true);

-- anyone may submit the contact form; nobody may read it via the anon key
create policy "public insert contact" on public.contact_submissions
  for insert with check (true);

-- (Admin reads/writes go through the service-role key in Edge Functions or
--  an authenticated dashboard; no anon select policy = anon cannot read.)
