import { useParams } from "react-router-dom";
import { useBrand } from "@/brand/useBrand";
import { useServices } from "@/hooks/useCatalog";
import { Page } from "@/components/Page";
import { Container, Eyebrow } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { Cta } from "@/components/sections/Cta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnchorNav, stopsFromSections } from "@/components/AnchorNav";
import { ennoblerServiceDetails } from "@/content/ennobler/serviceDetails";
import { ooloServiceDetails } from "@/content/oolo/serviceDetails";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { brand, config } = useBrand();

  // Rich, wireframe-parity content when available.
  const map = brand === "ennobler" ? ennoblerServiceDetails : ooloServiceDetails;
  const rich = slug ? map[slug] : undefined;

  if (rich) {
    // label this service from the brand nav children, falling back to the page title
    const navLabel =
      config.nav
        .find((n) => n.label === "Services")
        ?.children?.find((c) => c.to.endsWith(`/${slug}`))?.label ?? rich.title;
    const stops = stopsFromSections(rich.sections);
    return (
      <>
        <Breadcrumbs
          items={[
            { label: config.name, to: config.base },
            { label: "Services", to: `${config.base}/services` },
            { label: navLabel },
          ]}
        />
        <AnchorNav stops={stops} />
        <Page content={rich} />
      </>
    );
  }

  // Fallback: minimal page from the live services catalog.
  return <GenericServiceDetail />;
}

function GenericServiceDetail() {
  const { slug } = useParams();
  const { brand, config } = useBrand();
  const { data } = useServices(brand);
  const service = data?.find((s) => s.slug === slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: config.name, to: config.base },
          { label: "Services", to: `${config.base}/services` },
          { label: service?.title ?? "Service" },
        ]}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{config.name} · Service</Eyebrow>
            <h1 className="text-4xl md:text-5xl">{service?.title ?? "Service"}</h1>
            <p className="mt-5 text-lg text-muted">{service?.summary}</p>
            <div className="mt-8">
              <ButtonLink to="/contact" size="lg">
                Start a Project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <Cta
        data={{
          type: "cta",
          title: "Let's scope it together.",
          body: "A short call is the fastest way to a clear plan.",
          cta: { label: "Talk to us", to: "/contact" },
        }}
      />
    </>
  );
}
