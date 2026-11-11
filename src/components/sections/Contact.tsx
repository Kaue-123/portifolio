import { content } from "@/content/content";
import { hasContactEmail } from "@/lib/env";

export function Contact() {
  return (
    <section
      id="contato"
      className="card mt-24 flex flex-wrap items-center justify-between gap-6 rounded-3xl p-10 sm:px-12 sm:py-14"
    >
      <div className="flex max-w-[35rem] flex-col gap-2.5">
        <h2 className="display text-[clamp(1.625rem,4vw,2.25rem)] font-bold text-text">
          {content.contact.title}
        </h2>
        <p className="text-base leading-[1.6]">{content.contact.text}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={content.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-purple px-[22px] py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-purple-deep"
        >
          LinkedIn
        </a>
        {hasContactEmail && (
          <a
            href={`mailto:${content.email}`}
            className="rounded-xl border border-line-strong px-[22px] py-3.5 text-[15px] font-medium text-text transition-colors duration-200 hover:border-purple"
          >
            {content.email}
          </a>
        )}
      </div>
    </section>
  );
}
