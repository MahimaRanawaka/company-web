import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Brand } from "@/brand/types";
import { SEED_JOBS, SEED_PLANS, SEED_PROJECTS, SEED_SERVICES } from "@/content/seed";

export function useServices(brand: Brand) {
  return useQuery({
    queryKey: ["services", brand],
    queryFn: async () => {
      if (!supabase) return SEED_SERVICES.filter((s) => s.brand === brand);
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("brand", brand)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
    placeholderData: SEED_SERVICES.filter((s) => s.brand === brand),
  });
}

export function useProjects(brand?: Brand | "joint") {
  return useQuery({
    queryKey: ["projects", brand ?? "all"],
    queryFn: async () => {
      if (!supabase) return brand ? SEED_PROJECTS.filter((p) => p.brand === brand) : SEED_PROJECTS;
      let q = supabase.from("projects").select("*").order("sort_order");
      if (brand) q = q.eq("brand", brand);
      const { data, error } = await q;
      if (error) throw error;
      return data;
    },
    placeholderData: brand ? SEED_PROJECTS.filter((p) => p.brand === brand) : SEED_PROJECTS,
  });
}

export function usePricing(brand: Brand) {
  return useQuery({
    queryKey: ["pricing", brand],
    queryFn: async () => {
      if (!supabase) return SEED_PLANS.filter((p) => p.brand === brand);
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .eq("brand", brand)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
    placeholderData: SEED_PLANS.filter((p) => p.brand === brand),
  });
}

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      if (!supabase) return SEED_JOBS;
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    placeholderData: SEED_JOBS,
  });
}
