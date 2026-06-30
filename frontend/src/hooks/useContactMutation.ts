import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { ContactInput } from "@/lib/schemas";

export function useContactMutation() {
  return useMutation({
    mutationFn: async (input: ContactInput) => {
      // honeypot tripped → silently succeed without storing
      if (input.website) return { ok: true as const };

      if (!supabase) {
        // dev fallback: no backend configured
        await new Promise((r) => setTimeout(r, 600));
        return { ok: true as const, dev: true };
      }

      const { error } = await supabase.from("contact_submissions").insert({
        name: input.name,
        email: input.email,
        company: input.company || null,
        brand_interest: input.brand_interest ?? null,
        message: input.message,
      });
      if (error) throw error;

      // fire the notification edge function (best-effort)
      await supabase.functions
        .invoke("notify-contact", { body: input })
        .catch(() => void 0);

      return { ok: true as const };
    },
  });
}
