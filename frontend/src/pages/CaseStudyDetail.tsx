import { useParams, Link, Navigate } from "react-router-dom";
import { Container, Eyebrow } from "@/components/primitives";
import { ceylonRagaReserve } from "@/content/caseStudies/ceylon-raga-reserve";
import type { CaseStudyDetail } from "@/content/caseStudies/ceylon-raga-reserve";
import { chiku } from "@/content/caseStudies/chiku";
import { animeApparelConcepts } from "@/content/caseStudies/anime-apparel-concepts";
import { brandIdentityCollection } from "@/content/caseStudies/brand-identity-collection";
import { bocWhatsappBanking } from "@/content/caseStudies/boc-whatsapp-banking";
import { ragaMasterCharacter } from "@/content/caseStudies/raga-master-character";
import { aiCharacterCampaign } from "@/content/caseStudies/ai-character-campaign";
import { ceylonRagaReserveCampaign } from "@/content/caseStudies/ceylon-raga-reserve-campaign";
import { liasHalloweenCampaign } from "@/content/caseStudies/lias-halloween-campaign";
import { logoMotion } from "@/content/caseStudies/logo-motion";
import { ceylonRagaReserveWebsite } from "@/content/caseStudies/ceylon-raga-reserve-website";
import { ceylonRagaReserveQA } from "@/content/caseStudies/ceylon-raga-reserve-qa";

const allCaseStudies: CaseStudyDetail[] = [ceylonRagaReserve, chiku, animeApparelConcepts, brandIdentityCollection, bocWhatsappBanking, ragaMasterCharacter, aiCharacterCampaign, ceylonRagaReserveCampaign, liasHalloweenCampaign, logoMotion, ceylonRagaReserveWebsite, ceylonRagaReserveQA];

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = allCaseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/portfolio" replace />;

  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
          <Link
            to="/portfolio"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            ← Back to Portfolio
          </Link>
            <Eyebrow>{cs.tag}</Eyebrow>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">{cs.title}</h1>
            <p className="mt-2 text-xl text-accent font-medium">{cs.subtitle}</p>

            {/* Meta strip */}
            <div className="mt-8 border-t border-hairline pt-6">
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-subtle">Client</div>
                  <div className="mt-1 text-sm">{cs.client}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-subtle">Industry</div>
                  <div className="mt-1 text-sm">{cs.industry}</div>
                </div>
              </div>
              <div className="mt-4 w-full">
                <div className="text-xs font-semibold uppercase tracking-wider text-subtle">Services</div>
                <div className="mt-1 -ml-2.5 flex flex-wrap gap-1.5">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-hairline px-2.5 py-0.5 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover image placeholder */}
      {cs.cover && (
        <div className="h-64 w-full overflow-hidden md:h-96">
          <img src={cs.cover} alt={cs.title} className="h-full w-full object-cover" />
        </div>
      )}

      {/* Overview */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Project Overview</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-muted">{cs.overview}</p>
          </div>
        </Container>
      </section>

      {/* Sections */}
      {cs.sections.map((section, i) => (
        <section
          key={i}
          className={`py-12 md:py-16 ${i % 2 === 1 ? "bg-surface" : "bg-canvas"}`}
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-semibold md:text-3xl">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{section.body}</p>

              {section.bullets && (
                <ul className="mt-5 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.checklist && (
                <ul className="mt-5 space-y-2">
                  {section.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-0.5 text-accent">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* Outcome */}
      <section className="bg-ink py-16 text-canvas md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3 text-accent">Outcome</p>
            <p className="mt-4 text-lg leading-relaxed opacity-80">{cs.outcome.summary}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {cs.outcome.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-sm opacity-80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold">Have a similar project in mind?</h2>
            <p className="mt-3 text-muted">Let's talk about how we can create a premium brand experience for you.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-[rgb(var(--brand-accent-fg))] hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-hairline px-6 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
              >
                View More Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
