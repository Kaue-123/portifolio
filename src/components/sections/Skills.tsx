import { content } from "@/content/content";

export function Skills() {
  return (
    <section id="competencias" className="flex flex-col gap-8 pt-24">
      <h2 className="display text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-text">
        {content.skillsSection.title}
      </h2>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]">
        {content.skills.map((group) => (
          <div
            key={group.group}
            className="card card-hover flex flex-col gap-3 rounded-2xl p-6"
          >
            <p className="font-semibold text-text">{group.group}</p>
            <p className="text-sm leading-[1.7]">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
