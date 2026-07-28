-- ============================================================
-- Career applications — split out of contact_submissions into
-- their own table with real columns (phone, preferred path,
-- experience level, portfolio, CV) instead of overloading the
-- generic contact fields (company, message) that were built for
-- the business enquiry form.
-- ============================================================

create table public.career_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  preferred_path text,
  experience_level text,
  portfolio_url text,
  cv_path text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.career_applications enable row level security;

-- anyone may submit an application; nobody may read it via the anon key
-- (admin access goes through the service-role key in the Edge Function or
--  an authenticated dashboard)
create policy "public insert career applications" on public.career_applications
  for insert with check (true);

-- server-side guard against oversized inserts via the public REST API
alter table public.career_applications
  add constraint career_name_len           check (char_length(name) <= 120),
  add constraint career_email_len          check (char_length(email) <= 254),
  add constraint career_phone_len          check (phone is null or char_length(phone) <= 40),
  add constraint career_preferred_path_len check (preferred_path is null or char_length(preferred_path) <= 120),
  add constraint career_experience_len     check (experience_level is null or char_length(experience_level) <= 60),
  add constraint career_portfolio_len      check (portfolio_url is null or char_length(portfolio_url) <= 200),
  add constraint career_message_len        check (message is null or char_length(message) <= 2000);

-- cv_path now lives exclusively on career_applications
alter table public.contact_submissions drop column if exists cv_path;
