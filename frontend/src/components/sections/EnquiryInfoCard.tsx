/** Shared right-column "what happens / what we agree" card used alongside
 *  the enquiry forms (PerformanceEnquiry, GeneralEnquiry). */
export function EnquiryInfoCard({
  eyebrow,
  title,
  items,
  note,
  disclaimer,
}: {
  eyebrow?: string;
  title: string;
  items: { title: string; body: string }[];
  note?: { label: string; body: string };
  disclaimer?: string;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-canvas p-5 sm:p-7">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h3 className="mb-5 text-xl">{title}</h3>
      <ul className="space-y-0">
        {items.map((it) => (
          <li key={it.title} className="border-t border-hairline py-3 text-sm first:border-0 first:pt-0">
            <div className="font-semibold text-ink">{it.title}</div>
            <p className="mt-1 leading-relaxed text-muted">{it.body}</p>
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          <strong className="text-ink">{note.label}</strong> {note.body}
        </p>
      )}
      {disclaimer && <p className="mt-3 text-xs leading-relaxed text-subtle">{disclaimer}</p>}
    </div>
  );
}
