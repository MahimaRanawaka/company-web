/**
 * Hand-authored to match supabase/migrations/0001_init.sql.
 * Regenerate with `npm run db:types` once the Supabase CLI is linked.
 */
export type Brand = "ennobler" | "oolo";

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string;
          brand: Brand;
          slug: string;
          title: string;
          summary: string;
          body: string | null;
          icon: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["services"]["Row"], "id" | "created_at" | "sort_order"> &
          Partial<Pick<Database["public"]["Tables"]["services"]["Row"], "sort_order">>;
        Update: Partial<Database["public"]["Tables"]["services"]["Insert"]>;
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          brand: Brand | "joint";
          slug: string;
          title: string;
          summary: string;
          body: string | null;
          cover_url: string | null;
          tags: string[];
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["projects"]["Row"], "id" | "created_at" | "sort_order" | "tags"> &
          Partial<Pick<Database["public"]["Tables"]["projects"]["Row"], "sort_order" | "tags">>;
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
        Relationships: [];
      };
      pricing_plans: {
        Row: {
          id: string;
          brand: Brand;
          name: string;
          price: string;
          cadence: string | null;
          features: string[];
          highlighted: boolean;
          sort_order: number;
        };
        Insert: Omit<Database["public"]["Tables"]["pricing_plans"]["Row"], "id" | "sort_order" | "highlighted" | "features"> &
          Partial<Pick<Database["public"]["Tables"]["pricing_plans"]["Row"], "sort_order" | "highlighted" | "features">>;
        Update: Partial<Database["public"]["Tables"]["pricing_plans"]["Insert"]>;
        Relationships: [];
      };
      job_postings: {
        Row: {
          id: string;
          title: string;
          department: string;
          location: string;
          employment_type: string;
          body: string | null;
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["job_postings"]["Row"], "id" | "created_at" | "active"> &
          Partial<Pick<Database["public"]["Tables"]["job_postings"]["Row"], "active">>;
        Update: Partial<Database["public"]["Tables"]["job_postings"]["Insert"]>;
        Relationships: [];
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          brand_interest: Brand | null;
          message: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["contact_submissions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["contact_submissions"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: { brand: Brand };
    CompositeTypes: Record<string, never>;
  };
}
