import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "@/components/primitives";
import { ButtonLink } from "@/components/ui/button";

/** Router errorElement — catches render/loader errors so a thrown exception
 *  shows an on-brand recovery screen instead of a blank page. */
export default function RouteError() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : null;

  return (
    <section className="py-24 md:py-32">
      <Container>
        <p className="eyebrow mb-3">{status ? `Error ${status}` : "Something broke"}</p>
        <h1 className="text-4xl md:text-5xl">Well, this wasn't in the test plan.</h1>
        <p className="mt-4 max-w-md text-muted">
          An unexpected error interrupted this page. Reloading usually does the trick — and if it
          doesn't, we'd genuinely like to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-base font-semibold text-[rgb(var(--brand-accent-fg))] transition-[colors,transform] active:scale-[0.97] hover:bg-accent-hover"
          >
            Reload page
          </button>
          <ButtonLink to="/" variant="outline" size="lg">
            Back to studio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
