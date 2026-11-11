import { content } from "@/content/content";

export function Timeline() {
  return (
    <section id="trajetoria" className="flex flex-col gap-8 pt-24">
      <h2 className="display text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-text">
        {content.timelineSection.title}
      </h2>

      <ol className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]">
        {content.timeline.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col gap-2 border-t-2 pt-5 ${
              item.current ? "border-purple" : "border-line-strong"
            }`}
          >
            <span
              className={`font-[family-name:var(--font-jetbrains)] text-[13px] ${
                item.current ? "text-purple-soft" : "text-text-dim"
              }`}
            >
              {item.period}
            </span>
            <p className="text-base font-semibold text-text">{item.title}</p>
            <p className="text-sm">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
