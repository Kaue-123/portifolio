import { content } from "@/content/content";

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 py-6">
      <a
        href="#topo"
        className="flex items-center gap-3 text-text no-underline"
      >
        <span className="display grid h-10 w-10 place-items-center rounded-[10px] bg-purple text-[15px] font-bold text-white">
          {content.monogram}
        </span>
        <span className="display text-[15px] font-semibold">
          {content.shortName}
        </span>
      </a>

      <div className="flex flex-wrap items-center gap-1">
        {content.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3.5 py-3 text-sm text-text-muted transition-colors duration-200 hover:text-text"
          >
            {item.label}
          </a>
        ))}
        <a
          href={content.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 rounded-[10px] border border-line-strong px-[18px] py-3 text-sm font-medium text-text transition-colors duration-200 hover:border-purple"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
