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

## Design pass decisions (2026-07)
- **Typography**: Space Grotesk 500/700 (display/headings, matches wordmark) + Inter 400/500/600 (body)
  + Fraunces italic ~430 as an accent face for single emphasised words and the "télos" motif.
- **Structure**: single page — hero → services (6 cards) → approach (3 steps) → about → contact.
- **Hero / signature element**: "chaos → calm" story. Line-art clutter of legacy tech (cables,
  punch card, floppy, CRT, cassette, plug, cog, papers) auto-plays on load: holds ~1.25s,
  converges into the golden-ratio scaffold + Fibonacci spiral (brand gradient stroke, drawn via
  stroke-dashoffset), then a Devon spring hedgerow blooms around the edges — cow parsley,
  primroses, red campion, bluebells, a foxglove spike, fern, grasses and blossom — and sways
  gently. Replay button appears after the sequence (~8.5s total); `prefers-reduced-motion`
  gets the calm end-state instantly.
- **Motion language**: transform/opacity only; settle 2.4s, spiral draws 3.1s, hedgerow blooms
  4.2s–6.3s with a slight overshoot curve; scroll reveals 0.7s staggered 90ms (gated behind
  `.js` so content is never hidden without JavaScript). Ambient glow drift behind the hero.
- **Hedgerow palette**: flower tokens (`--flower-primrose/campion/foxglove/bluebell/white`)
  sit alongside the sage greens as naturalistic supporting hues, tuned per theme.
- **Approach numerals** walk the spectrum: 01 cobalt (azure in dark), 02 vermilion, 03 amber.
- **Supporting hue**: botanical sage greens (`--stem`, `--leaf-*` tokens) exist only for the
  organic-life motif; they are not part of the core brand spectrum.
- **Contact**: mailto info@digitelos.co.uk only — no form for launch.

## Asset checklist
- [x] Logo SVGs -> `assets/graphics/logo/` (icon, simple icon, mono variants, lockups, app icon)
- [x] Favicon PNGs + maskable + apple-touch -> `assets/graphics/favicon/`; `favicon.ico` + `site.webmanifest` at root
- [x] Social/OG image -> `assets/graphics/og-image.png`
- [ ] Any photography / illustration
