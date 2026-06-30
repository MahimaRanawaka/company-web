import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

/** Central icon resolver. Content supplies an `icon` string that is one of:
 *   - a kebab-case lucide name  ("shield-check" → <ShieldCheck/>)
 *   - an emoji / arbitrary glyph ("🎯")          → rendered as text
 *   - undefined / unknown                        → fallback lucide icon
 *  This keeps every `icon` field across the content layer rendering through
 *  a single, predictable path with a guaranteed fallback. */

const FALLBACK: Icons.LucideIcon = Icons.Sparkles;

/** Curated map of the kebab names actually used in content — explicit so a
 *  rename in lucide can't silently fall back, and so the audit has a source
 *  of truth. Unlisted kebab names still resolve via the dynamic lookup. */
const MAP: Record<string, Icons.LucideIcon> = {
  sparkles: Icons.Sparkles,
  "shield-check": Icons.ShieldCheck,
  code: Icons.Code,
  "refresh-cw": Icons.RefreshCw,
  "monitor-smartphone": Icons.MonitorSmartphone,
  cloud: Icons.Cloud,
  "pen-tool": Icons.PenTool,
  smartphone: Icons.Smartphone,
  webhook: Icons.Webhook,
  "shopping-cart": Icons.ShoppingCart,
  palette: Icons.Palette,
  "share-2": Icons.Share2,
  megaphone: Icons.Megaphone,
  "trending-up": Icons.TrendingUp,
};

const toPascal = (kebab: string) =>
  kebab.replace(/(^\w|-\w)/g, (m) => m.replace("-", "").toUpperCase());

/** True when the string is a kebab/lowercase lucide-style token (ASCII letters,
 *  digits, hyphens) rather than an emoji or other glyph. */
const isLucideName = (s: string) => /^[a-z][a-z0-9-]*$/.test(s);

export function resolveLucide(name?: string | null): Icons.LucideIcon | null {
  if (!name || !isLucideName(name)) return null;
  return MAP[name] ?? (Icons as unknown as Record<string, Icons.LucideIcon>)[toPascal(name)] ?? FALLBACK;
}

export function Icon({
  name,
  className,
  emojiClassName,
}: {
  name?: string | null;
  /** applied to the lucide <svg> */
  className?: string;
  /** applied to the wrapping <span> when the value is an emoji/glyph */
  emojiClassName?: string;
}) {
  // emoji / arbitrary glyph → render as text, preserving existing visuals
  if (name && !isLucideName(name)) {
    return (
      <span className={emojiClassName} aria-hidden>
        {name}
      </span>
    );
  }
  const Cmp = resolveLucide(name) ?? FALLBACK;
  return <Cmp className={cn("h-5 w-5", className)} aria-hidden />;
}
