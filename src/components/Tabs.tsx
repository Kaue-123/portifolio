"use client";

import { useEffect, useRef, useState } from "react";

export type TabId = "sobre" | "experiencia" | "formacao" | "projetos";

export const TABS: { id: TabId; label: string }[] = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "projetos", label: "Projetos" },
];

type Props = {
  panels: Record<TabId, React.ReactNode>;
};

export function Tabs({ panels }: Props) {
  const [active, setActive] = useState<TabId>("sobre");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = TABS.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    const target = TABS[next];
    setActive(target.id);
    tabRefs.current[target.id]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Seções do portfólio"
        className="flex gap-1 overflow-x-auto border-b border-line"
      >
        {TABS.map((tab, index) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`relative whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 sm:px-5 ${
                isActive
                  ? "text-text"
                  : "text-text-dim hover:text-text-muted"
              }`}
            >
              {tab.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-opacity duration-200 ${
                  isActive ? "bg-purple opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          data-active={tab.id === active}
          className="tab-panel pt-10 focus-visible:outline-none"
        >
          {panels[tab.id]}
        </div>
      ))}
    </div>
  );
}
