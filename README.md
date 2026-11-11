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
    page.tsx               navbar, seções e rodapé
    globals.css            design tokens e utilitários
    opengraph-image.tsx    imagem social gerada em build
    sitemap.ts, robots.ts
  components/
    Nav.tsx                monograma, âncoras e LinkedIn
    Tag.tsx                chips de tecnologia e selo de status
    sections/
      Hero.tsx             bento de abertura
      Projects.tsx         projetos e open source
      Timeline.tsx         trajetória
      Skills.tsx           competências
      Contact.tsx          chamada final
  content/content.ts       toda a cópia do site
  lib/env.ts               variáveis de ambiente
```

## Decisões

**Página única com âncoras.** Uma rota, seções empilhadas (`#topo`, `#projetos`, `#trajetoria`, `#competencias`, `#contato`) e a navbar apontando para elas. Substituiu a navegação por abas em novembro de 2026, quando o layout passou a seguir o mockup bento. Como não há estado de aba, não há nada a esconder: todo o conteúdo está no HTML e a página inteira funciona sem JavaScript — o mesmo objetivo que as abas resolviam por outro caminho.

**Layout em bento.** O cabeçalho é uma grade `auto-fit` com mínimo de 260px por célula (`.bento`): a célula do nome ocupa duas colunas, e as demais — o cartão roxo "Agora", os dois números e a stack — se reacomodam sozinhas conforme a largura. Sem breakpoint escrito à mão.

**Os números dos destaques são derivados.** "2 sistemas em produção" e "2 certificações" vêm de `projects.length` e `certifications.length` em `content.ts`, não de literais. Acrescentar um projeto atualiza o destaque sozinho.

**Paleta roxa em tema escuro.** Roxo `#8257e5` sobre fundo `#0e0e11`. Contrastes verificados em AA: 7,99:1 no texto corrido, 5,88:1 nas etiquetas monoespaçadas, 4,73:1 no botão roxo com texto branco.

**O texto sobre o roxo sólido foi corrigido.** O mockup pedia `#ede5ff` e `#f3eeff` dentro do cartão "Agora", que dão 3,88:1 e 4,16:1 — abaixo de AA. O token `--on-purple` usa `#fcfaff`, o tom mais próximo que passa (4,56:1), preservando a intenção de um branco levemente tingido.

## Deploy

Página totalmente estática. Na Vercel, basta importar o repositório: o build não depende de nenhuma variável de ambiente e passa sem `.env`.

O que muda sem as variáveis é só o conteúdo, não o build — vale o mesmo fallback descrito em [Variáveis de ambiente](#variáveis-de-ambiente): o site usa `kaue-carmo.vercel.app` como domínio canônico e omite o e-mail de contato. Para publicar com o e-mail e o domínio reais, cadastre as duas em *Settings → Environment Variables* antes do primeiro build.
