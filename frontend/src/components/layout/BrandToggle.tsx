import { useNavigate } from "react-router-dom";
import { useBrand } from "@/brand/useBrand";
import { BRANDS } from "@/brand/brand.config";
import { cn } from "@/lib/utils";

/** Pill toggle. Switching navigates to the target brand's home. */
export function BrandToggle() {
  const { brand } = useBrand();
  const navigate = useNavigate();

  return (
    <div className="inline-flex items-center rounded-full border border-hairline bg-surface p-1">
      {(["ennobler", "oolo"] as const).map((b) => {
        const active = brand === b;
        return (
          <button
            key={b}
            onClick={() => navigate(BRANDS[b].base)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
              active ? "bg-accent text-[rgb(var(--brand-accent-fg))]" : "text-muted hover:text-ink",
            )}
            aria-pressed={active}
          >
            {b === "ennobler" ? "IT" : "Marketing"}
          </button>
        );
      })}
    </div>
  );
}
