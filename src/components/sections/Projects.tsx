import { content } from "@/content/content";
import { StatusChip, TagList } from "../Tag";

const [featured, ...rest] = content.projects;

function HowItWorks({ how }: { how: NonNullable<(typeof featured)["how"]> }) {
  return (
    <div className="flex min-w-0 flex-[1_1_23.75rem] flex-col gap-3.5 rounded-2xl border border-line bg-ground p-7">
      <span className="mono-label text-[11px]">{how.label}</span>
      {how.steps.map((step, index) => {
        const active = index === how.highlight;
        return (
          <div key={step} className="contents">
            {index > 0 && (
              <span
                aria-hidden
                className="h-3.5 w-px self-center bg-line-strong"
              />
            )}
            <div
              className={`flex items-center gap-3.5 rounded-xl border px-4 py-3.5 ${
                active
                  ? "border-purple-ring bg-purple-chip"
                  : "border-line bg-surface"
              }`}
            >
              <span
                className={`font-[family-name:var(--font-jetbrains)] text-xs ${
                  active ? "text-purple-chip-text" : "text-purple-soft"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-text">{step}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="flex flex-col gap-6 pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="display text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-text">
          {content.projectsSection.title}
        </h2>
        <span className="mono-label">{content.projectsSection.note}</span>
      </div>

      <article className="card rounded-[20px] p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <StatusChip>{featured.status}</StatusChip>
          <span className="text-[13px] text-text-dim">{featured.period}</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-10">
          <div className="flex min-w-0 flex-[1_1_21.25rem] flex-col gap-4">
            <h3 className="display text-[clamp(1.375rem,4vw,1.875rem)] font-bold leading-[1.15] text-text">
              {featured.name}
            </h3>
            <p className="text-base leading-[1.7]">{featured.description}</p>
            <ul className="flex flex-col gap-2.5 text-[15px] leading-[1.6]">
              {featured.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[9px] h-1.5 w-1.5 flex-none rounded-[2px] bg-purple-light"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {featured.how && <HowItWorks how={featured.how} />}
        </div>

        <div className="mt-7 border-t border-line pt-5">
          <TagList items={featured.stack} />
          <p className="mt-4 text-xs leading-relaxed text-text-dim">
            {featured.note}
          </p>
        </div>
      </article>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(18.75rem,1fr))]">
        {rest.map((project) => (
          <article
            key={project.id}
            className="card card-hover flex flex-col gap-3.5 rounded-[20px] p-8"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <StatusChip>{project.status}</StatusChip>
              <span className="text-[13px] text-text-dim">{project.period}</span>
            </div>
            <h3 className="display text-[22px] font-bold text-text">
              {project.name}
            </h3>
            <p className="text-[15px] leading-[1.65]">{project.description}</p>
            <p className="mt-auto pt-2 text-[13px] text-text-dim">
              {project.stack.join(" · ")}
            </p>
          </article>
        ))}

        <article className="card flex flex-col gap-3.5 rounded-[20px] border-dashed border-line-strong p-8">
          <span className="mono-label">{content.openSource.label}</span>
          <h3 className="display text-[22px] font-bold text-text">
            {content.openSource.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {content.openSource.repos.map((repo) => (
              <li key={repo.name}>
                <p className="font-[family-name:var(--font-jetbrains)] text-[13px] text-purple-soft">
                  {repo.name}
                </p>
                <p className="mt-0.5 text-sm leading-[1.6]">
                  {repo.description}
                </p>
                <p className="mt-0.5 text-xs text-text-dim">{repo.stack}</p>
              </li>
            ))}
          </ul>
          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-2 text-sm font-medium text-purple-soft transition-colors duration-200 hover:text-text"
          >
            {content.openSource.linkLabel} →
          </a>
        </article>
      </div>
    </section>
  );
}
