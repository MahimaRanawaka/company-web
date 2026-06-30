import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { Brand, BrandConfig } from "./types";
import { BRANDS, brandFromPath } from "./brand.config";

interface BrandContextValue {
  brand: Brand;
  config: BrandConfig;
  setBrand: (b: Brand) => void;
  toggle: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const BrandContext = createContext<BrandContextValue | null>(null);

const STORAGE_KEY = "eo:brand";

function initialBrand(): Brand {
  const fromPath = brandFromPath(window.location.pathname);
  if (fromPath) return fromPath;
  const stored = localStorage.getItem(STORAGE_KEY) as Brand | null;
  return stored === "oolo" || stored === "ennobler" ? stored : "ennobler";
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [brand, setBrandState] = useState<Brand>(initialBrand);

  const setBrand = useCallback((b: Brand) => {
    setBrandState(b);
    localStorage.setItem(STORAGE_KEY, b);
  }, []);

  // Route-driven brand: en/oolo routes force their brand; shared routes keep current.
  useEffect(() => {
    const fromPath = brandFromPath(location.pathname);
    if (fromPath && fromPath !== brand) setBrand(fromPath);
  }, [location.pathname, brand, setBrand]);

  // Sync the <html data-brand> attribute that drives all tokens.
  useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
  }, [brand]);

  const value = useMemo<BrandContextValue>(
    () => ({
      brand,
      config: BRANDS[brand],
      setBrand,
      toggle: () => setBrand(brand === "ennobler" ? "oolo" : "ennobler"),
    }),
    [brand, setBrand],
  );

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}
