# 🦆 The Duck Society — Blog da Maria Fernanda

Blog pessoal feito com HTML, CSS e JS puro. Hospedado via GitHub Pages.

## Estrutura

```
duck-society/
├── index.html              ← Home
├── pages/
│   ├── blog.html           ← Lista de posts
│   └── about.html          ← Sobre mim
├── css/
│   ├── global.css          ← Reset, variáveis, navbar, footer, animações
│   ├── home.css            ← Estilos da home
│   ├── blog.css            ← Estilos da página de blog
│   └── about.css           ← Estilos da página about
├── js/
│   └── main.js             ← Navbar dinâmica, i18n, tema claro/escuro
└── resources/
  ├── fonts/
  │   └── mariafernandafont.ttf
  └── images/
    ├── duck-head.svg
    ├── duck-full-size.svg
    ├── duck_about.svg
    └── avatars/
        ├── avatar_home.svg
        ├── avatar_about.svg
        └── avatar_blog.svg
```

## Funcionalidades

- **Navbar única** — centralizada no `main.js`, injetada em todas as páginas
- **Toggle de idioma** — PT/EN com traduções salvas no `localStorage`
- **Toggle de tema** — claro/escuro, também persistido
- **Navbar fixa** — `position: sticky` no topo ao scrollar

## Fonte

A fonte customizada `mariafernandafont.ttf` está em `resources/fonts/`.
Para trocar, substitua o arquivo e ajuste o `@font-face` em `css/global.css`.

## Como adicionar um post

1. Crie um arquivo HTML em `pages/posts/nome-do-post.html`
2. Adicione o card correspondente em `pages/blog.html`
3. Adicione o item na lista de últimos posts em `index.html`

## Personalização

- **Cores:** edite as variáveis CSS em `css/global.css` (`:root` / `[data-theme="light"]`)
- **Avatares:** troque os SVGs em `resources/images/avatars/`

## Deploy no GitHub Pages

1. Suba o projeto para um repositório público no GitHub
2. Vá em **Settings → Pages**
3. Selecione a branch `main` e a pasta `/root`
4. Pronto! Seu site estará em `https://seu-usuario.github.io/nome-do-repo`
