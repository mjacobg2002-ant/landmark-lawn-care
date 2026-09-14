# M León Landscaping LLC — Homepage

A homepage for **M León Landscaping LLC** (West Hartford, CT). Built on the
premium single-page template originally created for LandMark Lawn Care, fully
rebranded and re-content-ed for M León using the company's real Facebook photos
and business details.

## Business details (from the M León Facebook page)

- **Name:** M León Landscaping LLC
- **Owner:** Michel Sanchez
- **Phone:** (860) 515-9334
- **Location / service area:** West Hartford & Greater Hartford, CT
- **Facebook:** https://www.facebook.com/profile.php?id=61558333536457
- **Positioning:** Free estimates · weekly & bi-weekly service
- **Services (7, per the profile logo):** Lawn Mowing · Yard Clean-Up ·
  Bush Removal · Trim Bushes · Mulch · Fall Clean-Up · Snow Removal —
  presented on the site as **6 grouped cards** (Bush Trimming & Removal combined,
  Mulch shown as "Mulch & Bed Care").

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
assets/img/mleon/    # original full-size photos pulled from the Facebook page
```

## Brand assets

- **`assets/img/logo-lion.png`** — the M León lion emblem, extracted and cleanly
  circle-masked from the company's own "Lawn Mowing Service" flyer. This is the
  real brand mark, paired with an "M León / Landscaping LLC" wordmark lockup in the
  nav and footer.
- Palette is green (forest / leaf / lime accents) drawn from the logo and the
  company's green branding.

### Photography — all real M León work (pulled from Facebook)

- `hero-lawn.jpg` — commercial mower on a large striped lawn (hero + gallery + final CTA)
- `mow-action.jpg` — mowing a striped lawn (Lawn Mowing service)
- `rockbed-after.jpg` — fresh decorative stone bed (Mulch & Bed Care + before/after "after")
- `cleanup-before.jpg` — cleared/overgrown area (Yard Clean-Up + before/after "before")
- `sod-install.jpg`, `lawn-stripes-1/2/3.jpg`, `mower-yellow.jpg` — striped lawns
  and equipment used across services, intro, transform, local, and portfolio.

## Notes / things to confirm before publishing

- **Snow Removal** currently uses an equipment/lawn photo as a placeholder — no
  winter photo was on the Facebook page. Swap for a real snow-removal photo when
  available (see comment in the Services section).
- **Email** — none listed on Facebook, so no email is shown on the site (the
  estimate form still collects the customer's email).
- **Estimate form** — front-end only; connect to a mail/CRM service to go live.
- The original LandMark logo/photos and history remain in git history.

## SEO

Single `<h1>`, logical `<h2>` hierarchy, descriptive alt text, meta description
covering all services, and LocalBusiness JSON-LD (West Hartford, CT).
