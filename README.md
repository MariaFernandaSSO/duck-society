# 🦆 The Duck Society

Blog pessoal da Maria Fernanda — feito com HTML, CSS e JavaScript puro. Hospedado via GitHub Pages.

## Estrutura

```
duck-society/
├── index.html
├── pages/
│   ├── blog.html
│   └── about.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── blog.css
│   │   └── about.css
│   ├── js/
│   │   └── main.js
│   ├── fonts/
│   │   └── mariafernandafont.ttf
│   └── images/
│       ├── avatars/
│       └── ...
└── 404.html
```

## Funcionalidades

- **Navbar única** injetada via JS em todas as páginas
- **i18n** — toggle PT/EN com traduções salvas no `localStorage`
- **Tema claro/escuro** com persistência
- **Controle de tamanho e família da fonte**
- **Blog** com filtros por categoria, data e ordenação
- **Transição suave** entre páginas

## Deploy

O deploy é automático pelo GitHub Pages na branch `main`.

## Licença

MIT
