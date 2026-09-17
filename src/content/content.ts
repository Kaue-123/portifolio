import { env } from "@/lib/env";

export const content = {
  name: "Kauê Carmo Carneiro",
  role: "Desenvolvedor Full-Stack",
  location: "São Paulo, Brasil",
  email: env.contactEmail,
  linkedin: "https://www.linkedin.com/in/kau%C3%AA-carmo-carneiro-3957022a3/",

  seo: {
    title: "Kauê Carmo Carneiro — Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor full-stack. Node.js, TypeScript, NestJS, Golang, Angular, Docker e AWS. Tecnólogo em Análise e Desenvolvimento de Sistemas.",
    url: env.siteUrl,
  },

  intro:
    "Desenvolvedor full-stack desde maio de 2024, trabalhando com Node.js, TypeScript e NestJS em sistemas de compliance trabalhista. Tecnólogo em Análise e Desenvolvimento de Sistemas.",

  stack: ["Node.js", "TypeScript", "NestJS", "Golang", "Angular", "Docker", "AWS"],

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

  certifications: [
    {
      id: "mcp",
      name: "Model Context Protocol (MCP)",
      issuer: "Anthropic",
    },
    {
      id: "claude-code",
      name: "Claude Code",
      issuer: "Anthropic",
    },
  ],

  projects: [
    {
      id: "monitoramento",
      name: "Sistema de monitoramento de notificações trabalhistas",
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
      stack: ["NestJS", "TypeScript", "Node.js", "Filas", "Docker", "SQL", "AWS"],
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
  ],

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
} as const;

export type Content = typeof content;
