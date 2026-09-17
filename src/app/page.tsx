import { Header } from "@/components/Header";
import { Tabs } from "@/components/Tabs";
import { AboutPanel } from "@/components/panels/AboutPanel";
import { ExperiencePanel } from "@/components/panels/ExperiencePanel";
import { EducationPanel } from "@/components/panels/EducationPanel";
import { ProjectsPanel } from "@/components/panels/ProjectsPanel";
import { content } from "@/content/content";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
        <Tabs
          panels={{
            sobre: <AboutPanel />,
            experiencia: <ExperiencePanel />,
            formacao: <EducationPanel />,
            projetos: <ProjectsPanel />,
          }}
        />
      </main>

      <footer className="mx-auto max-w-4xl px-6 pb-12 sm:px-8">
        <div className="border-t border-line pt-6">
          <p className="mono-label">
            {content.name} · {content.location}
          </p>
        </div>
      </footer>
    </>
  );
}
