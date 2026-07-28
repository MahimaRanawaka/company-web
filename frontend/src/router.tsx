import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";

import StudioLanding from "@/pages/StudioLanding";
import TwoMinds from "@/pages/TwoMinds";
import EnnoblerHome from "@/pages/ennobler/Home";
import Qaas from "@/pages/ennobler/Qaas";
import Products from "@/pages/ennobler/Products";
import EcommerceProduct from "@/pages/ennobler/EcommerceProduct";
import TourismProduct from "@/pages/ennobler/TourismProduct";
import OoloHome from "@/pages/oolo/Home";
import BizReg from "@/pages/oolo/BizReg";
import Chikku from "@/pages/oolo/Chikku";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Careers from "@/pages/Careers";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import StrategyCall from "@/pages/StrategyCall";
import NotFound from "@/pages/NotFound";
import RouteError from "@/pages/RouteError";
import Legal from "@/pages/Legal";

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
      { path: "/ennobler/products", element: <Products /> },
      { path: "/ennobler/products/ecommerce-product", element: <EcommerceProduct /> },
      { path: "/ennobler/products/tourism-product", element: <TourismProduct /> },
      { path: "/ennobler/qaas", element: <Qaas /> },
      { path: "/ennobler/pricing", element: <Pricing /> },

      // Oolo
      { path: "/oolo", element: <OoloHome /> },
      { path: "/oolo/services", element: <Services /> },
      { path: "/oolo/services/:slug", element: <ServiceDetail /> },
      { path: "/oolo/business-registration", element: <BizReg /> },
      { path: "/oolo/chikku", element: <Chikku /> },
      { path: "/oolo/pricing", element: <Pricing /> },

      // Shared (brand-aware layout)
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:slug", element: <CaseStudyDetail /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contact /> },
      { path: "/strategy-call", element: <StrategyCall /> },
      { path: "/legal/:slug", element: <Legal /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
