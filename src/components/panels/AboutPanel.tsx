import { content } from "@/content/content";
import { TagList } from "../Tag";

// Zigue-zague do bento: cada par de células fecha as 12 colunas (7+5, depois 5+7).
const SKILL_SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function AboutPanel() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mono-label">Competências</h2>
        <div className="bento mt-4">
          {content.skills.map((group, index) => (
            <div
              key={group.group}
              className={`card col-span-12 rounded-xl p-6 sm:col-span-6 ${
                SKILL_SPANS[index % SKILL_SPANS.length]
              }`}
            >
              <h3 className="text-sm font-medium text-text">{group.group}</h3>
              <div className="mt-4">
                <TagList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mono-label">Certificações</h2>
        <ul className="bento mt-4">
          {content.certifications.map((item) => (
            <li
              key={item.id}
              className="card col-span-12 rounded-xl p-6 sm:col-span-6"
            >
              <p className="text-sm font-medium text-text">{item.name}</p>
              <p className="mt-1 text-xs text-text-dim">{item.issuer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
