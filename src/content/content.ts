import { env } from "@/lib/env";

// Declarados fora do objeto para que os números dos destaques venham do
// tamanho das listas, em vez de serem repetidos à mão.
const projects = [
  {
    id: "monitoramento",
    name: "Monitoramento de notificações trabalhistas",
    period: "maio de 2024 — atual",
    status: "Em produção",
    description:
      "Consulta de forma automatizada o portal do Domicílio Eletrônico Trabalhista, detecta notificações novas e dispara alertas para a equipe de compliance.",
    contributions: [
      "Desenvolvimento de funcionalidades e manutenção do sistema em produção.",
      "Monorepo NestJS com API, front, worker e pacotes compartilhados.",
      "Consultas e alertas processados de forma assíncrona via filas.",
      "Containerização dos serviços com Docker.",
    ],
    // O passo em destaque é o que explica o desenho do sistema.
    how: {
      label: "Como funciona",
      steps: [
        "Portal DET (fonte externa)",
        "Worker NestJS consulta e compara",
        "Fila de processamento assíncrono",
        "Alerta para a equipe de compliance",
      ],
      highlight: 2,
    },
    stack: ["NestJS", "TypeScript", "Filas", "Docker", "SQL", "AWS"],
    note: "Sistema proprietário. Sem repositório público nem dados de clientes.",
  },
  {
    id: "certidoes",
    name: "Gerador automatizado de certidões",
    period: "2024 — 2025",
    status: "Em produção",
    description:
      "Automatiza a emissão de certidões negativas de débito (CNDs), substituindo um processo manual e repetitivo.",
    contributions: [
      "Participação em implementações dentro do time.",
      "Automação de fluxo dependente de portal externo.",
    ],
    stack: ["Node.js", "TypeScript", "SQL", "Docker"],
    note: "Sistema proprietário. Sem repositório público nem dados de clientes.",
  },
] as const;

const certifications = [
  { id: "mcp", name: "Model Context Protocol (MCP)", issuer: "Anthropic" },
  { id: "claude-code", name: "Claude Code", issuer: "Anthropic" },
] as const;

export const content = {
  name: "Kauê Carmo Carneiro",
  shortName: "Kauê Carmo",
  monogram: "KC",
  role: "Desenvolvedor Full-Stack",
  location: "São Paulo, Brasil",
  email: env.contactEmail,
  linkedin: "https://www.linkedin.com/in/kau%C3%AA-carmo-carneiro-3957022a3/",
  github: "https://github.com/Kaue-123",

  seo: {
    title: "Kauê Carmo Carneiro — Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor full-stack. Node.js, TypeScript, NestJS, Golang, Angular, Docker e AWS. Tecnólogo em Análise e Desenvolvimento de Sistemas.",
    url: env.siteUrl,
  },

  nav: [
    { href: "#projetos", label: "Projetos" },
    { href: "#trajetoria", label: "Trajetória" },
    { href: "#competencias", label: "Competências" },
  ],

  hero: {
    eyebrow: "Desenvolvedor Full-Stack · São Paulo",
    // Duas linhas para a quebra do título não depender da largura da tela.
    titleLines: ["Kauê Carmo", "Carneiro"],
    intro:
      "Desenvolvedor full-stack desde maio de 2024, trabalhando com Node.js, TypeScript e NestJS em sistemas de compliance trabalhista.",
    primaryCta: { href: "#projetos", label: "Ver projetos" },
    secondaryCta: { href: "#contato", label: "Entrar em contato" },
  },

  intro:
    "Desenvolvedor full-stack desde maio de 2024, trabalhando com Node.js, TypeScript e NestJS em sistemas de compliance trabalhista. Tecnólogo em Análise e Desenvolvimento de Sistemas.",

  now: {
    label: "Agora",
    title: "Desenvolvedor Júnior",
    summary:
      "Monitoramento de notificações trabalhistas em NestJS, filas e Docker.",
    period: "maio de 2024 — atual",
  },

  stats: [
    { id: "sistemas", value: projects.length, label: "sistemas em produção" },
    {
      id: "certificacoes",
      value: certifications.length,
      label: "certificações Anthropic (MCP e Claude Code)",
    },
  ],

  stack: ["Node.js", "TypeScript", "NestJS", "Golang", "Angular", "Docker", "AWS"],
  stackLabel: "Stack principal",

  projectsSection: {
    title: "Projetos",
    note: "Sistemas proprietários · sem dados de clientes",
  },

  projects,

  openSource: {
    label: "Open source",
    title: "Projetos públicos no GitHub",
    repos: [
      {
        name: "darf-utils",
        description:
          "Lê PDFs de DARF, extrai CNPJ, razão social e período de apuração por regex e renomeia os arquivos em lote.",
        stack: "Python · PyMuPDF · Tkinter",
      },
      {
        name: "cortar_pdf",
        description:
          "Recorta uma área fixa da primeira página de um PDF ajustando trimbox e mediabox, e envia para impressão.",
        stack: "Python · PyPDF2 · Tkinter",
      },
      {
        name: "xlsxConvert",
        description:
          "Converte planilhas .xlsx em JSON, normalizando datas do Excel e descartando colunas vazias.",
        stack: "TypeScript · SheetJS",
      },
      {
        name: "extractHtml",
        description:
          "API que extrai dados de cálculo de arquivos HTML e persiste em banco relacional.",
        stack: "TypeScript · Fastify · Cheerio · TypeORM",
      },
      {
        name: "api-cadastro-usuario",
        description:
          "API de cadastro de usuários com validação por schema, senha em hash e ORM sobre MariaDB.",
        stack: "TypeScript · Fastify · Prisma · Zod",
      },
    ],
    linkLabel: "github.com/Kaue-123",
  },

  timelineSection: { title: "Trajetória" },

  // Em ordem cronológica. `current` marca a entrada em curso, que recebe o
  // traço roxo no topo.
  timeline: [
    {
      id: "tecnico",
      period: "2021 — 2023",
      title: "Técnico em Informática para Internet",
      detail: "Etec Professor Adhemar Batista Heméritas",
      current: false,
    },
    {
      id: "ads",
      period: "2024 — 2025",
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      detail: "Universidade Cruzeiro do Sul",
      current: false,
    },
    {
      id: "dev-junior",
      period: "maio de 2024 — atual",
      title: "Desenvolvedor Júnior",
      detail:
        "Tempo integral, presencial. Monitoramento trabalhista, CNDs, automações com IA e ponte entre operação e time técnico.",
      current: true,
    },
  ],

  // NÃO RENDERIZADO pelo desenho atual: a trajetória mostra a versão condensada
  // em `timeline`. Mantido porque é texto escrito à mão que não existe em outro
  // lugar — se o layout voltar a ter uma seção de experiência detalhada, é aqui.
  experience: [
    {
      id: "dev-junior",
      title: "Desenvolvedor Júnior",
      org: "Empresa de tecnologia",
      period: "maio de 2024 — atual",
      type: "Tempo integral, presencial",
      bullets: [
        "Desenvolvimento e manutenção de um sistema de monitoramento de notificações trabalhistas, construído em NestJS com estrutura de monorepo (API, front, worker e pacotes compartilhados).",
        "Processamento assíncrono via filas para automação de consultas e disparo de alertas.",
        "Containerização dos serviços com Docker.",
        "Participação em implementações no sistema de geração automatizada de certidões negativas de débito.",
        "Uso de ferramentas de IA para acelerar automações internas e reduzir tarefas manuais nos processos de monitoramento.",
        "Apoio à rotina de monitoramento e comunicação com clientes sobre notificações recebidas, atuando entre a operação e o time técnico.",
      ],
      stack: ["NestJS", "TypeScript", "Node.js", "Docker", "SQL", "AWS", "Angular"],
    },
  ],

  education: [
    {
      id: "ads",
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      org: "Universidade Cruzeiro do Sul",
      period: "fevereiro de 2024 — novembro de 2025",
      status: "Concluído",
    },
    {
      id: "tecnico",
      title: "Técnico em Informática para Internet",
      org: "Etec Professor Adhemar Batista Heméritas",
      period: "2021 — dezembro de 2023",
      status: "Concluído",
    },
  ],

  certifications,

  skillsSection: { title: "Competências" },

  skills: [
    {
      group: "Linguagens",
      items: ["TypeScript", "JavaScript", "Golang", "PHP", "Python"],
    },
    {
      group: "Back-end",
      items: ["Node.js", "NestJS", "APIs REST", "Filas", "Processamento assíncrono"],
    },
    {
      group: "Front-end",
      items: ["Angular", "React", "HTML", "CSS"],
    },
    {
      group: "Dados e infraestrutura",
      items: ["Bancos SQL", "Docker", "AWS", "Monorepo"],
    },
  ],

  contact: {
    title: "Vamos conversar?",
    text: "Aberto a novas ideias e colaborações.",
  },

  footerTech: "Next.js · TypeScript · Tailwind",
} as const;

export type Content = typeof content;
