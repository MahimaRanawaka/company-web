import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getConsent } from "@/lib/consent";
import { loadGoogleAnalytics, trackPageView } from "@/lib/analytics";

/** Loads GA4 once if consent was already granted on a previous visit, and
 *  fires a page_view event on every route change. Call once near the root
 *  of each standalone route tree (RootLayout's Shell, and TwoMinds, since
 *  TwoMinds is mounted outside RootLayout at "/"). */
export function useAnalyticsPageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (getConsent() === "granted") loadGoogleAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
}
