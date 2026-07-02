# Design notes - Digitelos website

Working design brief. Update as decisions are made.

## Brand foundations
- Mark: Fibonacci spiral logo — kit "Concept B (Construct)" in `assets/graphics/logo/` (see its README.txt)
- Brand spectrum (from the logo kit): `#2B57DB` cobalt → `#17A2E8` azure → `#EF3F18` vermilion → `#F98E12` amber
- Neutrals: ink `#0B0B10`, parchment `#ECEAE1`
- Wordmark typeface: Space Grotesk 700 (loaded from Google Fonts; consider self-hosting in `assets/fonts/`)
- Voice: classical wisdom meets modern IT service management - precise, calm, substantive

## Theming
- Light theme by default; dark theme via the header toggle (persisted in `localStorage` under `digitelos-theme`).
- Semantic tokens (`--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, …) live at the
  top of `css/main.css`; `[data-theme="dark"]` overrides them. Components must use semantic tokens only.
- Accent is cobalt on light, azure on dark (contrast). Focus ring: azure on light, amber on dark.
- The previous single-page site was dark-only with the blue→orange gradient on near-black; the new
  scheme keeps that palette but inverts to warm paper (`#FBFAF6`) as the resting state.

## Audience
- Devon charities and small organisations needing web presence
- SMEs seeking fractional ITSM / AI adoption advisory

## To decide in design pass
- Body typeface to pair with Space Grotesk (currently system-ui)
- Hero concept (previous single-page site used an animated RSVP bubble field - keep, evolve, or replace?)
- Signature element for the new site
- Page structure: single page vs multi-page

## Asset checklist
- [x] Logo SVGs -> `assets/graphics/logo/` (icon, simple icon, mono variants, lockups, app icon)
- [x] Favicon PNGs + maskable + apple-touch -> `assets/graphics/favicon/`; `favicon.ico` + `site.webmanifest` at root
- [x] Social/OG image -> `assets/graphics/og-image.png`
- [ ] Any photography / illustration
