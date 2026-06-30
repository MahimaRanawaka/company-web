import { useBrand } from "@/brand/useBrand";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { Image } from "@/components/Image";

export default function NotFound() {
  const { brand, config } = useBrand();
  const copy =
    brand === "oolo"
      ? {
          head: "This campaign never launched.",
          sub: "The page you're after isn't here — but the growth ideas are one click away.",
          art: "/heroes/404-oolo.webp",
          alt: "Chikku, the Oolo mascot, shrugging at a blank wall — page not found",
        }
      : {
          head: "This page failed code review.",
          sub: "The route you requested doesn't exist in the build. Let's get you back to something that ships.",
          art: "/heroes/404-ennobler.webp",
          alt: "Byte, the En'nobler mascot, puzzled with broken circuit lines — page not found",
        };
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Error 404</p>
            <h1 className="text-4xl md:text-5xl">{copy.head}</h1>
            <p className="mt-4 text-muted">{copy.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={config.base} size="lg">
                Back to {config.name}
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="lg">
                Talk to us
              </ButtonLink>
            </div>
          </div>
          <Image
            src={copy.art}
            alt={copy.alt}
            aspect="4/3"
            eager
            className="order-first md:order-none"
          />
        </div>
      </Container>
    </section>
  );
}
