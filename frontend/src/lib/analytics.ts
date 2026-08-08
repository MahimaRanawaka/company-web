const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

/** True only when a real GA4 Measurement ID is configured. Every function
 *  below no-ops when false, so the site behaves identically in local dev
 *  and before the ID is set — mirrors lib/supabase.ts's supabaseEnabled pattern. */
export const analyticsEnabled = Boolean(MEASUREMENT_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

/** Injects gtag.js and initializes GA4. Call only after the visitor has
 *  granted cookie consent — never on page load. Safe to call more than once. */
export function loadGoogleAnalytics() {
  if (!analyticsEnabled || loaded || typeof document === "undefined") return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  // GA4's own pageview fires on init; we send our own per-route event instead
  // (see trackPageView), so disable the automatic one to avoid double-counting.
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (!loaded || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!loaded || !window.gtag) return;
  window.gtag("event", name, params);
}
