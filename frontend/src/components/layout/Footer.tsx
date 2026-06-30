import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, type LucideIcon, Twitter } from "lucide-react";
import { useBrand } from "@/brand/useBrand";
import { Container } from "@/components/primitives";
import { CopyEmail } from "@/components/CopyEmail";

/** Map a social label to its monoline icon (X reuses the Twitter glyph). */
const SOCIAL_ICONS: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  X: Twitter,
  GitHub: Github,
  Instagram: Instagram,
};

export function Footer() {
  const { config } = useBrand();
  return (
    <footer className="border-t border-hairline bg-surface py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl">{config.name}</div>
            <p className="mt-3 max-w-xs text-sm text-muted">{config.tagline}</p>
            <div className="mt-4">
              <CopyEmail email={config.email} />
            </div>
            <ul className="mt-5 flex gap-2.5">
              {config.socials.map((s) => {
                const SocialIcon = SOCIAL_ICONS[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {SocialIcon ? <SocialIcon className="h-4 w-4" aria-hidden /> : <span className="text-xs">{s.label}</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <FooterCol
            title="Services"
            links={config.nav.find((n) => n.label === "Services")?.children ?? []}
            className="col-span-2 md:col-span-1"
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Portfolio", to: "/portfolio" },
              { label: "About Us", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Privacy Policy", to: "/legal/privacy" },
              { label: "Terms of Service", to: "/legal/terms" },
              { label: "Cookie Policy", to: "/legal/cookies" },
            ]}
          />
        </div>
        <p className="mt-12 border-t border-hairline pt-6 text-xs text-subtle">{config.copyright}</p>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { label: string; to: string }[]; className?: string }) {
  return (
    <div className={className}>
      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-subtle">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-muted hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
