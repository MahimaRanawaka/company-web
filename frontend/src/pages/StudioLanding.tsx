import { Link } from "react-router-dom";
import { Container } from "@/components/primitives";

export default function StudioLanding() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <p className="eyebrow mb-4">One studio · Two brands</p>
        <h1 className="max-w-3xl text-4xl md:text-6xl">
          Engineering and creativity, under one roof.
        </h1>
        <p className="mt-5 max-w-xl text-muted">Choose where you're headed.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Pick
            to="/ennobler"
            name="En'nobler"
            kind="IT & Engineering"
            blurb="SaaS, QA, AI, cloud and full-stack product engineering."
          />
          <Pick
            to="/oolo"
            name="Oolo"
            kind="Marketing & Creative"
            blurb="Brand, content, campaigns and growth that compounds."
          />
        </div>
      </Container>
    </section>
  );
}

function Pick({ to, name, kind, blurb }: { to: string; name: string; kind: string; blurb: string }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-accent sm:p-8"
    >
      <span className="eyebrow">{kind}</span>
      <h2 className="mt-3 text-3xl">{name}</h2>
      <p className="mt-3 text-sm text-muted">{blurb}</p>
      <span className="mt-6 inline-block text-sm font-semibold text-accent">
        Explore {name} →
      </span>
    </Link>
  );
}
