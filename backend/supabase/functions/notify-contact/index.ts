// Supabase Edge Function — sends contact-form notifications via Resend.
// Deploy: supabase functions deploy notify-contact
// Secrets: supabase secrets set RESEND_API_KEY=... CONTACT_TO_EMAIL=... CONTACT_FROM_EMAIL=...

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  brand_interest?: "ennobler" | "oolo";
  message: string;
  website?: string; // honeypot
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // honeypot or missing required fields → no-op success
  if (payload.website || !payload.name || !payload.email || !payload.message) {
    return json({ ok: true });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  const TO = Deno.env.get("CONTACT_TO_EMAIL");
  const FROM = Deno.env.get("CONTACT_FROM_EMAIL") ?? "hello@ennobler.com";
  if (!RESEND_API_KEY || !TO) return json({ error: "Email not configured" }, 500);

  const brand = payload.brand_interest === "oolo" ? "Oolo" : "En'nobler";
  const subject = `New ${brand} enquiry — ${payload.name}`;
  const html = `
    <h2>New contact submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(payload.company ?? "—")}</p>
    <p><strong>Interested in:</strong> ${brand}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: payload.email, subject, html }),
  });

  if (!res.ok) return json({ error: "Email send failed", detail: await res.text() }, 502);
  return json({ ok: true });
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}
