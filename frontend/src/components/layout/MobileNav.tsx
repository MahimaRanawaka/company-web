import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useBrand } from "@/brand/useBrand";
import { BrandToggle } from "./BrandToggle";
import { ButtonLink } from "@/components/ui/button";

/** One drawer for BOTH brands (the prototype's En'nobler side lacked one). */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { config } = useBrand();
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(360px,85vw)] flex-col bg-canvas shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline p-4">
          <span className="font-display text-lg">{config.name}</span>
          <button onClick={onClose} aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-md border border-hairline">
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {config.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-surface">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-hairline pl-3">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-3 border-t border-hairline p-4">
          <BrandToggle />
          <ButtonLink to="/contact" size="sm">
            Let's Talk
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
