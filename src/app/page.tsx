import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { content } from "@/content/content";

export default function Home() {
  return (
    <div className="mx-auto box-border max-w-[72.5rem] px-6 pb-16">
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Nav />

      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>

      <footer className="mono-label mt-12 flex flex-wrap justify-between gap-3 normal-case">
        <span>
          {content.name} · {content.location}
        </span>
        <span>{content.footerTech}</span>
      </footer>
    </div>
  );
}
