import { content } from "@/content/content";

export function EducationPanel() {
  return (
    <ul className="space-y-4">
      {content.education.map((item) => (
        <li key={item.id} className="card rounded-lg p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="text-base font-medium text-text">{item.title}</h2>
            <span className="mono-label">{item.period}</span>
          </div>
          <p className="mt-1 text-sm text-purple-light">{item.org}</p>
          <p className="mt-3 inline-block rounded border border-line px-2 py-0.5 text-xs text-text-dim">
            {item.status}
          </p>
        </li>
      ))}
    </ul>
  );
}
