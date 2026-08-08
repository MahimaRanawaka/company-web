import { loadGoogleAnalytics } from "./analytics";

const STORAGE_KEY = "cookie-consent";

export type Consent = "granted" | "denied";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

/** Persists the visitor's choice and, if granted, loads GA4 immediately.
 *  Declining never loads anything — there is nothing to "undo". */
export function setConsent(value: Consent) {
  window.localStorage.setItem(STORAGE_KEY, value);
  if (value === "granted") loadGoogleAnalytics();
}
