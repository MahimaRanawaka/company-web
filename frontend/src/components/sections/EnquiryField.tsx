import type { ReactNode } from "react";

/** Shared input styling for the multi-field enquiry forms (PerformanceEnquiry, GeneralEnquiry). */
export const enquiryFieldClass =
  "h-11 w-full rounded-md border border-hairline bg-surface px-3 text-sm text-ink placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent";
export const enquiryReadonlyFieldClass = "h-11 w-full rounded-md border border-hairline bg-canvas px-3 text-sm text-muted";

export function EnquiryField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
