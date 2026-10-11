# Digitelos

The Digitelos company website: software products and practical IT consulting.
Static HTML, CSS and JavaScript, published at https://digitelos.co.uk/.

Read `CLAUDE.md` for current project conventions. Live HTML is canonical; the
original copy deck and design notes in `docs/` are historical background.

## Structure

- `index.html`: company overview, software and consulting
- `products/index.html`: Market Flows and Pickle Rota
- `consulting/index.html`: technology reviews, service improvement and planning
- `about/index.html`: company approach and founder background
- `contact/index.html`: enquiries composed in the visitor's email application
- `work/index.html`: secondary selected software and community work
- `privacy/index.html`, `404.html`: website privacy and not-found page
- `services/index.html`: static redirect for the previous services URL
- `css/main.css`, `js/main.js`: styles, themes and interactions
- `assets/graphics/`: existing brand assets, project images and social image
- `docs/social-card.html`: source for the 1200 × 630 company sharing image

## Local development

No install or build step is required. Root-absolute paths need an HTTP server:

```sh
python3 -m http.server 8000
```

Open the server in a browser. Check JavaScript syntax with:

```sh
node --check js/main.js
```

Check the main pages at phone and desktop widths, both themes, mobile navigation,
contact validation and email composition, and animation replay with and without
sound enabled. Reduced-motion and no-JavaScript visitors should see usable content.
The contact form does not send email itself or store enquiries on the website.

The sharing image can be reproduced by serving `docs/social-card.html` in Chromium
at a viewport of 1200 × 630 and saving a screenshot to
`assets/graphics/og-company.png`. Wait for images and fonts before capturing.
Google Fonts requires access to fonts.googleapis.com and fonts.gstatic.com;
normal system font fallbacks are provided.

## Deployment

GitHub Pages deploys from `main`, root folder. `.nojekyll` skips Jekyll and `CNAME`
sets the custom domain. Publishing changes to `main` updates the live site.
The Python development server does not emulate GitHub Pages custom 404 routing.
