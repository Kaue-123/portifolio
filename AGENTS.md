# AGENTS.md

Portfólio pessoal em Next.js 16 (App Router), React 19, TypeScript e Tailwind v4.
Página única, estática, sem dependência de runtime além do framework.

O [README](README.md) cobre stack, como rodar e estrutura de pastas. Este arquivo
cobre só o que um agente precisa saber antes de editar.

## Invariantes

**Texto do site vive em `src/content/content.ts`.** Mudança de cópia — experiência,
formação, certificações, projetos, competências — é mudança nesse arquivo. Se você se
pegou editando um componente para trocar uma palavra, o lugar está errado.

**Os quatro painéis são sempre renderizados no HTML.** `Tabs.tsx` monta todos e marca
o estado em `data-active`; o CSS esconde os inativos sob a classe `js-ready`, que só
entra depois da hidratação (`globals.css:100`). Isso é o que mantém o conteúdo
indexável e legível sem JavaScript. Não troque por renderização condicional — o
`{active === id && <Panel />}` apaga três quartos da página para buscador e para
quem está sem JS.

**As abas seguem o padrão ARIA de tablist.** `role="tablist"`/`tab`/`tabpanel`,
`aria-selected`, `aria-controls`, roving `tabIndex`, e setas esquerda/direita + Home
e End em `onKeyDown`. Ao mexer em `Tabs.tsx`, preserve os quatro.

**Cores saem dos tokens, não de valores literais.** Os tokens estão em `@theme inline`
(`globals.css:22`) e se usam pelas classes Tailwind correspondentes: `bg-ground`,
`text-text-muted`, `bg-purple`. A paleta é verificada em contraste AA (4,73:1 no botão
roxo, 5,33:1 no roxo claro sobre o fundo) — um hex novo escapa dessa verificação.

**Nada de segredo em `NEXT_PUBLIC_`.** As duas variáveis existentes são públicas por
natureza e entram no HTML em tempo de build. `src/lib/env.ts` dá fallback para as duas,
então o projeto roda e builda sem `.env` — não suponha que falta configuração.
Sem `NEXT_PUBLIC_CONTACT_EMAIL`, o site omite o e-mail de propósito (`hasContactEmail`).

## Conteúdo sensível

Os sistemas do trabalho estão **anonimizados** em `content.ts` ("sistema de
monitoramento de notificações trabalhistas", "Empresa de tecnologia"). É deliberado.
Não substitua por nomes reais de empregador, cliente ou produto sem o Kauê pedir.

## Verificação

Não há suíte de testes. Antes de entregar:

```bash
npm run build     # compila, checa tipos e gera as rotas estáticas
npx eslint src
```

Mudança visual pede olhar a página: `npm run dev` em http://localhost:3000.

## Commits

Conventional commits em português, **sem acento no assunto** — é a convenção do
histórico (`feat: centraliza conteudo do site em arquivo unico`). O corpo, quando
existe, explica o porquê e pode ter acento.

## `CLAUDE.md`

É gerado pelo `next dev`, que reescreve o bloco `nextjs-agent-rules` a cada execução.
Ele só referencia este arquivo (`@AGENTS.md`). Se aparecer modificado no `git status`
sem que você tenha tocado nele, foi o `next dev` — commite junto em vez de reverter.
