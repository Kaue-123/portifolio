import { content } from "@/content/content";
import { hasContactEmail } from "@/lib/env";
import { TagList } from "./Tag";

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-purple absolute -right-20 -top-40 h-[30rem] w-[30rem] opacity-60" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-12 pt-16 sm:px-8 sm:pt-20">
        <div className="bento">
          <div className="card card-feature col-span-12 rounded-xl p-7 sm:p-8 lg:col-span-7 lg:row-span-2">
            <p className="mono-label">{content.role}</p>

            <h1 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {content.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={content.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-purple px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-deep"
              >
                LinkedIn
              </a>
              {hasContactEmail && (
                <a
                  href={`mailto:${content.email}`}
                  className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-text-muted transition-colors duration-200 hover:border-purple hover:text-text"
                >
                  {content.email}
                </a>
              )}
            </div>
          </div>

          <div className="card col-span-12 flex flex-col justify-center rounded-xl p-6 sm:col-span-7 lg:col-span-5">
            <h2 className="mono-label">Stack</h2>
            <div className="mt-4">
              <TagList items={content.stack} />
            </div>
          </div>

          <div className="card col-span-12 flex flex-col justify-center rounded-xl p-6 sm:col-span-5 lg:col-span-5">
            <h2 className="mono-label">Localização</h2>
            <p className="mt-3 text-sm text-text">{content.location}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
