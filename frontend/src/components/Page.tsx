import { useEffect } from "react";
import type { PageContent } from "@/content/types";
import { SectionRenderer } from "./SectionRenderer";
import { Reveal } from "./Reveal";

export function Page({ content }: { content: PageContent }) {
  useEffect(() => {
    document.title = `${content.title} · En'nobler / Oolo`;
  }, [content.title]);

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
