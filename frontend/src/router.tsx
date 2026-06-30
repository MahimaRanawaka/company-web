import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";

import StudioLanding from "@/pages/StudioLanding";
import TwoMinds from "@/pages/TwoMinds";
import EnnoblerHome from "@/pages/ennobler/Home";
import OoloHome from "@/pages/oolo/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Careers from "@/pages/Careers";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import StrategyCall from "@/pages/StrategyCall";
import NotFound from "@/pages/NotFound";
import RouteError from "@/pages/RouteError";
import Legal from "@/pages/Legal";
import { Page } from "@/components/Page";
import {
  ennoblerProducts,
  ennoblerEcommerceProduct,
  ennoblerTourismProduct,
} from "@/content/misc";
import { ennoblerQaas } from "@/content/ennobler/qaas";
import { ooloBizReg } from "@/content/oolo/bizReg";
import { ooloChikku } from "@/content/oolo/chikku";

export const router = createBrowserRouter([
  // Pre-landing "Two Minds" experience — standalone, no site chrome.
  { path: "/", element: <TwoMinds />, errorElement: <RouteError /> },
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      { path: "/studio", element: <StudioLanding /> },

      // En'nobler
      { path: "/ennobler", element: <EnnoblerHome /> },
      { path: "/ennobler/services", element: <Services /> },
      { path: "/ennobler/services/:slug", element: <ServiceDetail /> },
      { path: "/ennobler/products", element: <Page content={ennoblerProducts} /> },
      { path: "/ennobler/products/ecommerce-product", element: <Page content={ennoblerEcommerceProduct} /> },
      { path: "/ennobler/products/tourism-product", element: <Page content={ennoblerTourismProduct} /> },
      { path: "/ennobler/qaas", element: <Page content={ennoblerQaas} /> },
      { path: "/ennobler/pricing", element: <Pricing /> },

      // Oolo
      { path: "/oolo", element: <OoloHome /> },
      { path: "/oolo/services", element: <Services /> },
      { path: "/oolo/services/:slug", element: <ServiceDetail /> },
      { path: "/oolo/business-registration", element: <Page content={ooloBizReg} /> },
      { path: "/oolo/chikku", element: <Page content={ooloChikku} /> },
      { path: "/oolo/pricing", element: <Pricing /> },

      // Shared (brand-aware layout)
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contact /> },
      { path: "/strategy-call", element: <StrategyCall /> },
      { path: "/legal/:slug", element: <Legal /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
