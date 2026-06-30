import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/** Brand tokens are CSS variables (see src/brand/tokens.css), so a single
 *  Tailwind palette serves both brands — switching `data-brand` reskins
 *  everything with no per-brand class forking. */
const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        canvas: withAlpha("--brand-canvas"),
        surface: withAlpha("--brand-surface"),
        "surface-2": withAlpha("--brand-surface-2"),
        "surface-3": withAlpha("--brand-surface-3"),
        ink: withAlpha("--brand-text"),
        muted: withAlpha("--brand-text-muted"),
        subtle: withAlpha("--brand-text-subtle"),
        accent: withAlpha("--brand-accent"),
        "accent-hover": withAlpha("--brand-accent-hover"),
        hairline: withAlpha("--brand-border"),
        "hairline-strong": withAlpha("--brand-border-strong"),
        // shadcn semantic aliases mapped onto brand tokens
        background: withAlpha("--brand-canvas"),
        foreground: withAlpha("--brand-text"),
        border: withAlpha("--brand-border"),
        input: withAlpha("--brand-border"),
        ring: withAlpha("--brand-accent"),
        primary: { DEFAULT: withAlpha("--brand-accent"), foreground: withAlpha("--brand-accent-fg") },
      },
      fontFamily: {
        // single-voice sans (Linear-style): display and body share Inter,
        // differentiated by weight/tracking, not family
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: { lg: "12px", md: "8px", sm: "4px" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
