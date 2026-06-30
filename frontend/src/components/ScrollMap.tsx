import { useEffect, useState } from "react";

interface ScrollSection {
  id: string;
  label: string;
}

export function ScrollMap({ sections }: { sections: ScrollSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ behavior: "smooth", top });
  }

  return (
    <div
      className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-2 md:flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label panel — slides in on hover */}
      <div
        className={`overflow-hidden transition-all duration-200 ${
          hovered ? "w-36 opacity-100" : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-h-72 overflow-y-auto rounded-lg border border-hairline bg-canvas py-1 shadow-lg">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full px-3 py-1.5 text-left text-xs transition-colors hover:bg-surface ${
                  isActive ? "font-semibold text-accent" : "text-muted"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lines indicator — always visible */}
      <div className="flex flex-col gap-2.5">
        {sections.map(({ id }) => {
          const isActive = active === id;
          return (
            <div
              key={id}
              className={`h-px rounded-full transition-all duration-300 ${
                isActive ? "w-5 bg-accent" : "w-3 bg-muted opacity-40"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
