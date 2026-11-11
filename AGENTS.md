# AGENTS.md

Portfólio pessoal em Next.js 16 (App Router), React 19, TypeScript e Tailwind v4.
Página única, estática, sem dependência de runtime além do framework.

O [README](README.md) cobre stack, como rodar e estrutura de pastas. Este arquivo
cobre só o que um agente precisa saber antes de editar.

## Invariantes

**Texto do site vive em `src/content/content.ts`.** Mudança de cópia — projetos, trajetória, competências, rótulos de seção, textos da navbar — é mudança nesse arquivo. Se você se pegou editando um componente para trocar uma palavra, o lugar está errado.

**Página única, sem estado de navegação.** As seções são `#topo`, `#projetos`, `#trajetoria`, `#competencias` e `#contato`, e a navbar aponta para elas por âncora. Não reintroduza abas, roteamento ou renderização condicional de seção: o conteúdo inteiro no HTML é o que mantém a página indexável e utilizável sem JavaScript. Hoje nenhum componente precisa de `"use client"` — se um passar a precisar, isso é sinal de rever o desenho antes de aceitar.

**Âncora e `id` andam juntos.** Os `href` ficam em `content.nav` e os `id` nas seções. Renomear um sem o outro quebra a navegação em silêncio — não há erro de build para isso.

**Os números dos destaques são derivados.** `stats` em `content.ts` usa `projects.length` e `certifications.length`. Não troque por literal: o destaque passa a mentir assim que a lista mudar.

**Cores saem dos tokens, não de valores literais.** Os tokens estão em `:root` e `@theme inline` (`globals.css`), e se usam pelas classes Tailwind correspondentes: `bg-ground`, `text-text-muted`, `bg-purple`, `text-on-purple`. A paleta é verificada em contraste AA — um hex novo escapa da verificação.

**Texto sobre o roxo sólido usa `--on-purple`.** O branco puro ou um tingido mais forte que `#fcfaff` reprova em AA sobre `#8257e5` (o limite é 4,5:1 e `#fcfaff` dá 4,56:1). Não escureça o roxo nem clareie o texto sem recalcular.

**Classes próprias ficam em `@layer components`.** `.mono-label`, `.display`, `.card` e `.bento` estão dentro dessa camada em `globals.css`. Fora de camada elas vencem os utilitários do Tailwind, e um `text-purple-soft` no JSX passa a ser ignorado em silêncio — foi exatamente o que aconteceu com o rótulo "Agora" antes da correção.

**Nada de segredo em `NEXT_PUBLIC_`.** As duas variáveis existentes são públicas por natureza e entram no HTML em tempo de build. `src/lib/env.ts` dá fallback para as duas, então o projeto roda e builda sem `.env` — não suponha que falta configuração. Sem `NEXT_PUBLIC_CONTACT_EMAIL`, a seção de contato mostra só o LinkedIn, de propósito (`hasContactEmail`).

## Conteúdo sensível

Os sistemas do trabalho estão **anonimizados** em `content.ts` ("Monitoramento de
notificações trabalhistas", "Empresa de tecnologia"). É deliberado. Não substitua por
nomes reais de empregador, cliente ou produto sem o Kauê pedir.

`content.experience` **não é renderizado** pelo desenho atual — a trajetória mostra a
versão condensada em `content.timeline`. Está no arquivo porque é texto escrito à mão
que não existe em outro lugar, e marcado com comentário. Não apague por parecer morto.

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
