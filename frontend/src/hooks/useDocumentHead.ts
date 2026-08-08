import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.en-nobler.com";

function setOrRemoveMeta(name: string, content?: string) {
  const existing = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!content) {
    existing?.remove();
    return;
  }
  const el = existing ?? document.createElement("meta");
  el.setAttribute("name", name);
  el.setAttribute("content", content);
  if (!existing) document.head.appendChild(el);
}

function setCanonical(href: string) {
  const existing = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const el = existing ?? document.createElement("link");
  el.setAttribute("rel", "canonical");
  el.setAttribute("href", href);
  if (!existing) document.head.appendChild(el);
}

/** Site-wide Organization schema — present on every page. `sameAs` is
 *  deliberately omitted: the social links in brand.config.ts are still
 *  placeholder platform homepages (linkedin.com, x.com, github.com), not
 *  real company profile URLs, so listing them here would be false data. */
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "En'nobler / Oolo",
  alternateName: ["En'nobler", "Oolo"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo/ennobler.webp`,
  email: "hello@en-nobler.com",
  description:
    "En'nobler / Oolo is a dual-brand studio: En'nobler builds and QA-tests software, Oolo runs creative growth marketing.",
};

/** Replaces every script tag this hook manages with the current set, so
 *  route changes don't accumulate stale or duplicate JSON-LD blocks. */
function setStructuredData(schemas: object[]) {
  document.querySelectorAll('script[data-managed-jsonld="true"]').forEach((el) => el.remove());
  for (const schema of schemas) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-managed-jsonld", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

/** Single place every route's head metadata is managed: document.title, an
 *  optional meta description, a canonical link derived from the current
 *  path, and JSON-LD structured data (the site-wide Organization schema
 *  plus an optional page-specific schema, e.g. a Service block on QaaS).
 *  Call once per page component. Clears anything left over from the
 *  previous route when the new page doesn't supply it. `schema` should be
 *  a stable module-level object/array, not an inline literal, so the effect
 *  doesn't re-run every render. */
export function useDocumentHead(title: string, description?: string, schema?: object | object[]) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    setOrRemoveMeta("description", description);
    setCanonical(`${SITE_URL}${pathname}`);
    const extra = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    setStructuredData([ORGANIZATION_SCHEMA, ...extra]);
  }, [title, description, pathname, schema]);
}
