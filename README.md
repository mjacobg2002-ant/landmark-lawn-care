# LandMark Lawn Care — Homepage Concept

A premium homepage **concept build** for LandMark Lawn Care, created as a client
presentation. This is the homepage shell only — not the full production site.

## Run it

No build step. Any static server works:

```bash
cd landmark-lawn-care
python3 -m http.server 8080
# open http://localhost:8080
```

Or just open `index.html` in a browser.

## Structure

```
index.html          # single-page homepage (all sections)
css/styles.css       # design system + every section
js/main.js           # nav, mobile menu, services swap, before/after, reveals, form
assets/img/          # imagery
```

## Brand assets

- **`assets/img/logo.svg`** — refined vector recreation of the existing LandMark
  logo (wordmark with the tree replacing the "A", red→green gradient, tracked
  "LAWN CARE", green underline). Scalable, transparent, crisp on retina. This is
  embedded inline in the page as a reusable `<symbol id="landmark-logo">` so it
  inherits the page's serif webfont (Tinos ≈ Times New Roman Bold, matching the
  original letterforms).
- **`assets/img/logo-original.jpg`** — the client's original logo, kept as the
  source of truth / reference. The logo was **not redrawn or reinvented** — the
  refined SVG preserves its proportions, colors, typography, and the tree mark.

### Photography

- `work-hillside-stripes.jpg`, `work-stripes-mower.jpg` — **real LandMark work**
  (client-provided). Used in the hero, services, before/after, and portfolio.
- `residential-home.jpg`, `property-exterior.jpg`, `mulch-beds.jpg`,
  `hero-property.jpg`, `lush-lawn.jpg` — free-license editorial property/landscape
  photography (Unsplash) used as tasteful, clearly-replaceable placeholders for a
  premium look. Swap in real LandMark photos as they become available.

## Things intentionally left for the client to confirm

- **Phone / email** — none invented. Only the provided Facebook link is used.
- **Service area** — not invented.
- **Owner name & business history** — kept generic (no fabricated family story or
  years in business). See the HTML comment in the "Local" section.
- **Before/After slider** — architecture is complete; currently uses a
  representative treatment. Drop in a paired before/after photo set to show a real
  transformation.
- **Estimate form** — front-end only; connect to a mail/CRM service to go live.

## SEO

Single `<h1>`, logical `<h2>` hierarchy, descriptive alt text, meta description
covering all services, LocalBusiness JSON-LD. Structured so each service can grow
into its own SEO page later.
