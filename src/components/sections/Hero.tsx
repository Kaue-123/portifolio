import { content } from "@/content/content";
import { TagList } from "../Tag";

function ArrowRight() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Hero() {
  const { hero, now } = content;

  return (
    <section id="topo" className="bento pt-6">
      <div className="card relative overflow-hidden rounded-[20px] p-8 sm:col-span-2 sm:p-12">
        <div aria-hidden className="pointer-events-none">
          <span className="absolute -right-[60px] -top-[60px] h-[260px] w-[260px] rounded-full border border-purple-ring-dim" />
          <span className="absolute right-2.5 top-2.5 h-[120px] w-[120px] rounded-full border border-purple-ring" />
        </div>

        <div className="relative flex flex-col gap-6">
          <span className="mono-label text-purple-soft">{hero.eyebrow}</span>

          <h1 className="display text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-text">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < hero.titleLines.length - 1 ? <span className="sr-only"> </span> : null}
              </span>
            ))}
          </h1>

          <p className="max-w-[35rem] text-[17px] leading-[1.65] text-text-muted">
            {hero.intro}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl bg-purple px-[22px] py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-purple-deep"
            >
              {hero.primaryCta.label}
              <ArrowRight />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-xl border border-line-strong px-[22px] py-3.5 text-[15px] font-medium text-text transition-colors duration-200 hover:border-purple"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 rounded-[20px] bg-purple p-8 text-on-purple">
        <span className="mono-label text-on-purple">{now.label}</span>
        <div className="flex flex-col gap-2">
          <p className="display text-[28px] font-bold leading-[1.15] text-white">
            {now.title}
          </p>
          <p className="text-[15px] leading-[1.55]">{now.summary}</p>
        </div>
        <span className="text-sm">{now.period}</span>
      </div>

      {content.stats.map((stat) => (
        <div
          key={stat.id}
          className="card card-hover flex flex-col gap-1.5 rounded-[20px] p-7"
        >
          <span className="display text-5xl font-bold tracking-[-0.03em] text-text">
            {stat.value}
          </span>
          <span className="text-sm text-text-muted">{stat.label}</span>
        </div>
      ))}

      <div className="card card-hover flex flex-col gap-3.5 rounded-[20px] p-7">
        <h2 className="mono-label">{content.stackLabel}</h2>
        <TagList items={content.stack} />
      </div>
    </section>
  );
}
