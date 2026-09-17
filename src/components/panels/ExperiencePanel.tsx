import { content } from "@/content/content";
import { TagList } from "../Tag";

export function ExperiencePanel() {
  return (
    <div className="space-y-6">
      {content.experience.map((job) => (
        <article key={job.id} className="card rounded-lg p-6">
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg font-medium text-text">{job.title}</h2>
            <span className="mono-label">{job.period}</span>
          </header>
          <p className="mt-1 text-sm text-purple-light">{job.org}</p>
          <p className="mt-0.5 text-xs text-text-dim">{job.type}</p>

          <ul className="mt-5 space-y-2.5">
            {job.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-[1.7] text-text-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-purple"
                />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-line pt-5">
            <TagList items={job.stack} />
          </div>
        </article>
      ))}
    </div>
  );
}
