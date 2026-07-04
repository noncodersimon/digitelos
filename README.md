# Digitelos

Website for **Digitelos** - websites and digital tools for charities, clubs and
small organisations in Devon and the South West. Live at https://digitelos.co.uk/

See `CLAUDE.md` for project conventions and `docs/copy-deck-2026-07.md` for the
positioning brief and copy deck.

## Structure

```
digitelos/
├── index.html              Home
├── work/index.html         Work (portfolio)
├── services/index.html     Services & prices
├── about/index.html        About Simon
├── contact/index.html      Contact (mailto form)
├── privacy/index.html      Privacy note
├── 404.html                Not-found page
├── css/main.css            Site styles (design tokens at the top)
├── js/main.js              Theme toggle, hero animation, nav, form
├── assets/graphics/        Logo kit, favicons, work previews (SVG)
├── sitemap.xml, robots.txt Local SEO
└── docs/                   Brief, copy deck, design notes
```

## Local preview

No build step - it's a static site. Serve it (root-absolute paths need a server):

```
python3 -m http.server 8000
```

then visit http://localhost:8000

## Deployment

GitHub Pages, deploy from `main`, root folder, custom domain digitelos.co.uk.
`.nojekyll` skips the Jekyll pass; `CNAME` carries the custom domain.
