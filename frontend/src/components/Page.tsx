import type { PageContent } from "@/content/types";
import { useDocumentHead } from "@/hooks/useDocumentHead";
import { SectionRenderer } from "./SectionRenderer";
import { Reveal } from "./Reveal";

export function Page({ content }: { content: PageContent }) {
  useDocumentHead(`${content.title} · En'nobler / Oolo`, content.description, content.schema);

  return (
    <>
      {content.sections.map((section, i) => (
        // hero (i 0) renders instantly; later sections reveal with a slight stagger
        <Reveal key={i} delay={i === 0 ? 0 : 80} id={`section-${i}`}>
          <SectionRenderer section={section} />
        </Reveal>
      ))}
    </>
  );
}
