# Portfólio — Kauê Carmo Carneiro

Portfólio pessoal organizado em abas: sobre, experiência, formação e projetos.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

Sem dependências de runtime além do framework. As animações usam CSS + `IntersectionObserver`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000.

```bash
npm run build && npm start   # build de produção
npx tsc --noEmit             # checagem de tipos
npx eslint src               # lint
```

## Editando o conteúdo

Todo o texto do site vive em [`src/content/content.ts`](src/content/content.ts). Nenhum componente precisa ser alterado para atualizar a cópia.

## Variáveis de ambiente

Contato e domínio ficam fora do código versionado, em `.env` (já ignorado pelo git). Use `.env.example` como referência:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=seu-email@exemplo.com
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Enquanto `NEXT_PUBLIC_CONTACT_EMAIL` estiver vazio, o site não exibe nenhum endereço de e-mail nem o inclui nos dados estruturados — o contato passa a ser só pelo LinkedIn.

O prefixo `NEXT_PUBLIC_` é obrigatório: a página é estática, então o valor entra no HTML em tempo de build. Isso é adequado para um e-mail de contato, que é público por natureza — mas nunca coloque segredo em variável com esse prefixo.

### Antes de publicar

1. **E-mail e domínio** — o `.env` vale só para o ambiente local; o site publicado lê as variáveis cadastradas na Vercel (ver [Deploy](#deploy)).
2. **Nomes de sistemas** — os sistemas do trabalho estão anonimizados. Se houver autorização do empregador, é possível usar os nomes reais.

## Estrutura

```
src/
  app/
    layout.tsx             metadata, fontes, JSON-LD
    page.tsx               cabeçalho + abas
    globals.css            design tokens e utilitários
    opengraph-image.tsx    imagem social gerada em build
    sitemap.ts, robots.ts
  components/
    Header.tsx             nome, resumo, stack e contato
    Tabs.tsx               navegação por abas (padrão ARIA)
    Tag.tsx                chips de tecnologia
    panels/                conteúdo de cada aba
  content/content.ts       toda a cópia do site
  lib/env.ts               variáveis de ambiente
```

## Decisões

**Navegação por abas.** Sobre, Experiência, Formação e Projetos em painéis que trocam sem recarregar. Segue o padrão ARIA de tablist: setas esquerda/direita, Home e End navegam entre abas.

**Todos os painéis no HTML.** O conteúdo das quatro abas é renderizado no HTML e os inativos são ocultados por CSS sob a classe `js-ready`. Buscadores indexam tudo e a página continua legível sem JavaScript.

**Layout em bento.** Cabeçalho e painéis são grades de 12 colunas (`.bento`) com células de larguras alternadas, em vez de cards uniformes empilhados. As larguras vêm de arrays de spans nos componentes (`SKILL_SPANS`, `PROJECT_SPANS`), não do `content.ts` — o conteúdo não carrega decisão de layout. Cada par de células fecha as 12 colunas, e tudo colapsa para uma coluna abaixo de `lg`.

**Paleta roxa.** Roxo `#8257e5` sobre fundo `#121214`, no estilo Rocketseat. Contraste em AA: 4,73:1 no botão roxo com texto branco, 5,33:1 no roxo claro sobre o fundo.

## Deploy

Página totalmente estática. Na Vercel, basta importar o repositório: o build não depende de nenhuma variável de ambiente e passa sem `.env`.

O que muda sem as variáveis é só o conteúdo, não o build — vale o mesmo fallback descrito em [Variáveis de ambiente](#variáveis-de-ambiente): o site usa `kaue-carmo.vercel.app` como domínio canônico e omite o e-mail de contato. Para publicar com o e-mail e o domínio reais, cadastre as duas em *Settings → Environment Variables* antes do primeiro build.
