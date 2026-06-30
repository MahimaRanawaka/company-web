import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/primitives";

export interface Crumb {
  label: string;
  to?: string;
}

/** Breadcrumb trail for detail pages (e.g. Services → Category → Page).
 *  The last crumb is the current page (no link). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-hairline bg-canvas">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-sm">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <Fragment key={c.label}>
                <li className="flex items-center">
                  {c.to && !last ? (
                    <Link to={c.to} className="text-muted transition-colors hover:text-accent">
                      {c.label}
                    </Link>
                  ) : (
                    <span className={last ? "font-medium text-ink" : "text-muted"} aria-current={last ? "page" : undefined}>
                      {c.label}
                    </span>
                  )}
                </li>
                {!last && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-subtle" aria-hidden />}
              </Fragment>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
