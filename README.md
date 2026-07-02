# Digitelos

Modern website for **Digitelos** - IT service management consultancy and web services for charities and small organisations in Devon.

## Structure

```
digitelos/
├── index.html              Main site page
├── css/
│   └── main.css            Site styles (design tokens at the top)
├── js/
│   └── main.js             Interactions and animation
├── assets/
│   ├── graphics/
│   │   ├── logo/           Logo files (SVG preferred, plus PNG exports)
│   │   └── favicon/        Favicon and app icons
│   └── fonts/              Self-hosted webfonts (if any)
└── docs/
    └── design-notes.md     Design decisions, palette, typography
```

## Brand

- Logo: Fibonacci spiral mark
- Palette: cobalt / azure / vermilion / amber (sampled from the logo)
- See `docs/design-notes.md` for the working design brief

## Local preview

No build step - it's a static site. Open `index.html` directly, or serve it:

```
python3 -m http.server 8000
```

then visit http://localhost:8000

## Deployment

Suitable for GitHub Pages, Krystal hosting, or any static host. For GitHub
Pages: Settings → Pages → deploy from `main` branch, root folder.
