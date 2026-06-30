/** Structured legal document model. Long-form prose arranged into anchored
 *  sections so the legal pages get a table of contents and deep links.
 *
 *  NOTE: The content in this folder is professionally structured TEMPLATE
 *  text, not legal advice. It must be reviewed by qualified counsel in your
 *  operating jurisdiction before publication, and every [bracketed] field
 *  must be completed with your company's real details. */

export interface LegalSubsection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalSection {
  /** anchor id for the table of contents + deep links */
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  sub?: LegalSubsection[];
}

export interface LegalDoc {
  slug: "privacy" | "terms" | "cookies";
  title: string;
  /** human-readable effective date, e.g. "13 June 2026" */
  updated: string;
  intro: string;
  sections: LegalSection[];
}
