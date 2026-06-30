import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { useBrand } from "@/brand/useBrand";
import { cn } from "@/lib/utils";
import { BrandToggle } from "./BrandToggle";
import { MobileNav } from "./MobileNav";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  const { config } = useBrand();
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/85 backdrop-blur">
        <div className="container flex h-[68px] items-center gap-4">
          <Link to={config.base} className="font-display text-xl tracking-tight">
            {config.name}
          </Link>

          {/* desktop nav — shown at xl where the full item set fits; below that
              the burger drawer is used. No overflow clipping here, so the
              hover dropdowns can escape below the header. */}
          <nav className="hidden flex-1 xl:block">
            <ul className="flex items-center justify-center gap-1">
              {config.nav.map((item) => (
                <li key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    end={item.to === config.base}
                    className={({ isActive }) =>
                      cn(
                        "relative flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink",
                        "after:absolute after:inset-x-2.5 after:-bottom-px after:h-0.5 after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100",
                        isActive && "text-ink after:scale-x-100",
                      )
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </NavLink>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-56 rounded-lg border border-hairline bg-canvas p-2 shadow-lg">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink",
                                pathname === c.to && "text-ink",
                              )}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:block">
              <BrandToggle />
            </div>
            <div className="hidden md:block">
              <ButtonLink to="/contact" variant="outline" size="sm">
                Let's Talk
              </ButtonLink>
            </div>
            <button
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-md border border-hairline xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menu} onClose={() => setMenu(false)} />
    </>
  );
}
