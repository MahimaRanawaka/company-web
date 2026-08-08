import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { BrandProvider } from "@/brand/BrandProvider";
import { useAnalyticsPageView } from "@/hooks/useAnalyticsPageView";
import { AnnounceBar } from "./AnnounceBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ConsentBanner } from "./ConsentBanner";

function Shell() {
  const { pathname, hash } = useLocation();
  useAnalyticsPageView();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnnounceBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <ConsentBanner />
    </div>
  );
}

/** BrandProvider lives here because it consumes router context (useLocation). */
export function RootLayout() {
  return (
    <BrandProvider>
      <Shell />
    </BrandProvider>
  );
}
