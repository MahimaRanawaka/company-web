import type { HeroSection } from "@/content/types";
import { Container, RichTitle } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";
import { Image, MediaFrame } from "@/components/Image";
import { HeroArt } from "./HeroArt";

export function Hero({ data }: { data: HeroSection }) {
  return (
    <section className="bg-canvas py-12 md:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            {data.eyebrow && <p className="eyebrow mb-4">{data.eyebrow}</p>}
            <RichTitle
              as="h1"
              text={data.title}
              className="text-3xl md:text-6xl"
            />
            {data.subtitle && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                {data.subtitle}
              </p>
            )}
            {(data.primaryCta || data.secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {data.primaryCta && (
                  <ButtonLink
                    to={data.primaryCta.to}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.primaryCta.label}
                  </ButtonLink>
                )}
                {data.secondaryCta && (
                  <ButtonLink
                    to={data.secondaryCta.to}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {data.secondaryCta.label}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>

          {data.heroArt ? (
            <div className="animate-fade-up">
              <HeroArt name={data.heroArt} />
            </div>
          ) : data.image ? (
            data.imageUnframed ? (
              data.imageGroundShadow ? (
                <div className="relative animate-fade-up">
                  {data.imageGroundShadow.map((s, i) => (
                    <div
                      key={i}
                      aria-hidden
                      className="absolute rounded-full bg-black/25 blur-md"
                      style={{
                        left: `${s.left}%`,
                        bottom: `${s.bottom}%`,
                        width: `${s.width}%`,
                        height: `${s.height}%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                  ))}
                  <div className="relative">
                    <Image src={data.image.src} alt={data.image.alt} aspect="4/3" eager />
                  </div>
                </div>
              ) : data.imageShadow ? (
                <div className="animate-fade-up shadow-[0_1px_2px_rgba(15,27,38,0.10),0_20px_32px_-8px_rgba(15,27,38,0.16)]">
                  <Image src={data.image.src} alt={data.image.alt} aspect="4/3" eager />
                </div>
              ) : (
                <Image src={data.image.src} alt={data.image.alt} aspect="4/3" eager className="animate-fade-up" />
              )
            ) : (
              <MediaFrame className="animate-fade-up">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  aspect="4/3"
                  eager
                />
              </MediaFrame>
            )
          ) : data.facts && data.facts.length > 0 ? (
            <ul className="flex flex-col gap-5">
              {data.facts.map((f) => (
                <li key={f.label} className="border-l-2 border-accent pl-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle">
                    {f.label}
                  </div>
                  <div className="mt-1.5 text-[15px] text-ink">{f.value}</div>
                </li>
              ))}
            </ul>
          ) : (
            <HeroVisual chips={data.chips ?? []} />
          )}
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({ chips }: { chips: string[] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-surface-2">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 120% at 20% 10%, rgb(var(--brand-accent) / 0.25), transparent 60%), radial-gradient(120% 120% at 90% 90%, rgb(var(--brand-accent-hover) / 0.2), transparent 55%)",
        }}
      />
      {chips.map((c, i) => (
        <span
          key={c}
          className="absolute rounded-full border border-hairline bg-canvas/70 px-3 py-1 font-mono text-xs text-ink backdrop-blur"
          style={{
            top: `${12 + ((i * 17) % 68)}%`,
            left: `${14 + ((i * 23) % 70)}%`,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
