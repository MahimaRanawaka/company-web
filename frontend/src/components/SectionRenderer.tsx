import type { Section } from "@/content/types";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Features } from "./sections/Features";
import { ServiceCards } from "./sections/ServiceCards";
import { Steps } from "./sections/Steps";
import { Cta } from "./sections/Cta";
import { Marquee } from "./sections/Marquee";
import { Partners } from "./sections/Partners";
import { ProblemSolution } from "./sections/ProblemSolution";
import { Engagement } from "./sections/Engagement";
import { QaPromo } from "./sections/QaPromo";
import { ProductPreview } from "./sections/ProductPreview";
import { CaseStudies } from "./sections/CaseStudies";
import { Bridge } from "./sections/Bridge";
import { Prose } from "./sections/Prose";
import { Pathways } from "./sections/Pathways";
import { Panels } from "./sections/Panels";
import { Checklist } from "./sections/Checklist";
import { OpenRoles } from "./sections/OpenRoles";
import { ContactFormView } from "./sections/ContactFormSection";
import { EngagementTabs } from "./sections/EngagementTabs";
import { Workflow } from "./sections/Workflow";
import { WhyGrid } from "./sections/WhyGrid";
import { IconGrid } from "./sections/IconGrid";
import { Funnel } from "./sections/Funnel";
import { Testimonials } from "./sections/Testimonials";
import { Tags } from "./sections/Tags";
import { Faq } from "./sections/Faq";
import { CtaFinal } from "./sections/CtaFinal";

export function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "hero":
      return <Hero data={section} />;
    case "stats":
      return <Stats data={section} />;
    case "features":
      return <Features data={section} />;
    case "services":
      return <ServiceCards data={section} />;
    case "steps":
      return <Steps data={section} />;
    case "cta":
      return <Cta data={section} />;
    case "marquee":
      return <Marquee data={section} />;
    case "partners":
      return <Partners data={section} />;
    case "problemSolution":
      return <ProblemSolution data={section} />;
    case "engagement":
      return <Engagement data={section} />;
    case "qaPromo":
      return <QaPromo data={section} />;
    case "productPreview":
      return <ProductPreview data={section} />;
    case "caseStudies":
      return <CaseStudies data={section} />;
    case "bridge":
      return <Bridge data={section} />;
    case "prose":
      return <Prose data={section} />;
    case "pathways":
      return <Pathways data={section} />;
    case "panels":
      return <Panels data={section} />;
    case "checklist":
      return <Checklist data={section} />;
    case "openRoles":
      return <OpenRoles data={section} />;
    case "contactForm":
      return <ContactFormView data={section} />;
    case "engagementTabs":
      return <EngagementTabs data={section} />;
    case "workflow":
      return <Workflow data={section} />;
    case "whyGrid":
      return <WhyGrid data={section} />;
    case "iconGrid":
      return <IconGrid data={section} />;
    case "funnel":
      return <Funnel data={section} />;
    case "testimonials":
      return <Testimonials data={section} />;
    case "tags":
      return <Tags data={section} />;
    case "faq":
      return <Faq data={section} />;
    case "ctaFinal":
      return <CtaFinal data={section} />;
    default: {
      const _never: never = section;
      return _never;
    }
  }
}
