import { content } from "@/content/content";
import { TagList } from "../Tag";

export function AboutPanel() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mono-label">Competências</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {content.skills.map((group) => (
            <div key={group.group} className="card rounded-lg p-5">
              <h3 className="text-sm font-medium text-text">{group.group}</h3>
              <div className="mt-3">
                <TagList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mono-label">Certificações</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {content.certifications.map((item) => (
            <li key={item.id} className="card rounded-lg p-5">
              <p className="text-sm font-medium text-text">{item.name}</p>
              <p className="mt-1 text-xs text-text-dim">{item.issuer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
