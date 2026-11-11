import { content } from "@/content/content";

export function EducationPanel() {
  return (
    <ul className="bento">
      {content.education.map((item) => (
        <li
          key={item.id}
          className="card col-span-12 flex flex-col rounded-xl p-6 lg:col-span-6"
        >
          <span className="mono-label">{item.period}</span>
          <h2 className="mt-3 text-base font-medium text-text">{item.title}</h2>
          <p className="mt-1 text-sm text-purple-light">{item.org}</p>
          <p className="mt-auto pt-4">
            <span className="inline-block rounded border border-line px-2 py-0.5 text-xs text-text-dim">
              {item.status}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
