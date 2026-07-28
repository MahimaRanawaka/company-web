import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { CareerApplicationInput } from "@/lib/schemas";

export function useCareerApplicationMutation() {
  return useMutation({
    mutationFn: async (input: CareerApplicationInput) => {
      // honeypot tripped → silently succeed without storing
      if (input.website) return { ok: true as const };

      if (!supabase) {
        // dev fallback: no backend configured
        await new Promise((r) => setTimeout(r, 600));
        return { ok: true as const, dev: true };
      }

      const { error } = await supabase.from("career_applications").insert({
        name: input.name,
        email: input.email,
        phone: input.phone || null,
        preferred_path: input.preferred_path || null,
        experience_level: input.experience_level || null,
        portfolio_url: input.portfolio_url || null,
        cv_path: input.cv_path || null,
        message: input.message || null,
      });
      if (error) throw error;

      // fire the notification edge function (best-effort)
      await supabase.functions
        .invoke("notify-career-application", { body: input })
        .catch(() => void 0);

      return { ok: true as const };
    },
  });
}
