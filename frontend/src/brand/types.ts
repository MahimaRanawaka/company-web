export type Brand = "ennobler" | "oolo";

export interface NavItem {
  label: string;
  to: string;
  /** optional dropdown children (e.g. Services) */
  children?: { label: string; to: string }[];
}

export interface BrandConfig {
  id: Brand;
  name: string;
  /** path prefix for this brand's section, e.g. "/ennobler" */
  base: string;
  tagline: string;
  nav: NavItem[];
  socials: { label: string; href: string }[];
  /** public contact email (copy-to-clipboard in the footer) */
  email: string;
  copyright: string;
}
