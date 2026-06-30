import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { BrandProvider } from "@/brand/BrandProvider";
import { AnnounceBar } from "./AnnounceBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

function Shell() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnnounceBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
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
