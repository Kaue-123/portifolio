import { content } from "@/content/content";
import { TagList } from "../Tag";

export function ProjectsPanel() {
  return (
    <div className="space-y-6">
      {content.projects.map((project) => (
        <article key={project.id} className="card rounded-lg p-6">
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h2 className="text-lg font-medium text-text">{project.name}</h2>
            <span className="mono-label">{project.period}</span>
          </header>

          <p className="mt-2 inline-block rounded border border-purple/40 px-2 py-0.5 text-xs text-purple-light">
            {project.status}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-[1.7] text-text-muted">
            {project.description}
          </p>

          <h3 className="mono-label mt-6">O que fiz</h3>
          <ul className="mt-3 space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-[1.7] text-text-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-purple"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-line pt-5">
            <TagList items={project.stack} />
            <p className="mt-4 text-xs leading-relaxed text-text-dim">
              {project.note}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
