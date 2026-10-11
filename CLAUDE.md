# Digitelos - project conventions

Digitelos is a software and IT consulting business based in Devon. The live HTML
is canonical. `docs/copy-deck-2026-07.md` and the original design notes are
historical context; do not restore their older positioning or wording.

## Audience and positioning

- Lead with software products and practical IT consulting. Software can serve
  individuals as well as organisations; do not restrict the company proposition
  to local charities, clubs or website customers.
- Working headline: "Thoughtful software. Practical IT expertise."
- Consulting reviews focus on organisational priorities, processes and
  opportunities, alongside service improvement and software planning. Optional
  implementation support has separately agreed scope and fees.
- Do not reintroduce website packages, low-cost widgets or care-plan pricing.
- Products have their own identities. Do not publish an unannounced product's
  name, details or availability without Simon's instruction.
- Market Flows and Pickle Rota are current software examples. Community work is
  secondary. The village hall website has been removed from the portfolio.
- The founder's twenty-plus years of professional IT service management and
  ITIL certification provide context on About. Do not invent staffing, clients,
  accreditations, legal status, product capabilities or security guarantees.

## Tone

- Company-led language: "Digitelos", "we", "our", "you" and "your".
- Serious, friendly and specific. Clear explanations without corporate jargon.
- Avoid "digital transformation", "solutions" and comparisons with page builders.
- Do not use AI language in customer-facing copy.
- Use short hyphens, not em dashes, in rendered copy.

## Design and implementation

- Preserve the Fibonacci spiral logo, hero animation and warm light/dark themes.
- Cobalt and azure lead; vermilion is reserved for primary actions, amber for
  small highlights. Maintain accessible contrast in both themes.
- Mobile-first, lightweight static HTML/CSS/JavaScript. No build is required.
- Animation replay is silent by default; sound requires explicit opt-in.
  Hide and disable sound on mobile layouts and primary touch devices, including
  landscape phones; retain silent replay and the desktop sound option.
  Respect reduced motion. Content and navigation must work without JavaScript.
- Use semantic headings, descriptive links, image alt text and visible focus.
- Contact composes an email locally; it does not submit to a backend. Do not
  imply delivery. Keep the direct email link and no-JavaScript fallback.
- Update titles, descriptions, Open Graph tags, canonical URLs and sitemap
  when changing public pages. The social image is `og-company.png`.

## Structure

Main navigation: Products / Consulting / About / Contact. Logo links home.
`/work/` is Selected work, linked from the footer and lower homepage.
`/services/` redirects to `/consulting/` using static HTML for GitHub Pages.
Footer: company purpose, Devon, selected work, email, phone and privacy.
The privacy notice covers this company website, not every product.

## Location privacy

Use Devon or South Devon for the company location. LocalBusiness structured
information uses Kingsbridge. Do not name Simon's home village as Digitelos's
location. Slapton may appear only in relevant client project descriptions.

## Local checks

From the repository root: `python3 -m http.server 8000`.
Check `node --check js/main.js`, page and asset responses, the services redirect,
mobile navigation, both themes, contact composition and animation sound opt-in.
Do not send email during testing. No application dependency installation is
required. Browser checks may use an existing Playwright/Chromium installation.
