-- ============================================================
-- Length limits on contact_submissions — server-side guard
-- against oversized inserts via the public REST API (client
-- Zod validation can be bypassed by calling the API directly).
-- ============================================================

alter table public.contact_submissions
  add constraint contact_name_len    check (char_length(name) <= 120),
  add constraint contact_email_len   check (char_length(email) <= 254),
  add constraint contact_company_len check (company is null or char_length(company) <= 120),
  add constraint contact_message_len check (char_length(message) <= 8000);
