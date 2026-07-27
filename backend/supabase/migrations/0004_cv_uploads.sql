-- ============================================================
-- CV uploads — private storage bucket for Careers applications.
-- Files are written by the anon key (public insert, no public
-- read), mirroring contact_submissions. The notify-contact Edge
-- Function reads them back with the service-role key to mint a
-- short-lived signed URL for the notification email.
-- ============================================================

alter table public.contact_submissions
  add column cv_path text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cv-uploads',
  'cv-uploads',
  false,
  10485760, -- 10 MB
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do nothing;

-- anyone may upload a CV; nobody may read/list via the anon key
-- (admin access goes through the service-role key in the Edge Function)
create policy "public insert cv uploads"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'cv-uploads');
