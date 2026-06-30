import { useState } from "react";
import { X } from "lucide-react";
import { useBrand } from "@/brand/useBrand";

const MESSAGES = {
  ennobler: "Limited — Ongoing website relaunch discount for Enterprise IT.",
  oolo: "Limited — Free growth audit for scaling brands this quarter.",
};

/** Consistent minimal bar across all pages; only the accent text differs. */
export function AnnounceBar() {
  const { brand } = useBrand();
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative flex min-h-10 items-center justify-center bg-surface px-10 py-2 text-center text-[13px] text-muted sm:px-12 sm:py-0">
      <span>
        <strong className="font-semibold text-accent">Limited</strong>
        {MESSAGES[brand].replace("Limited", "")}
      </span>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 grid h-6 w-6 place-items-center rounded-full text-muted hover:bg-canvas hover:text-ink"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
