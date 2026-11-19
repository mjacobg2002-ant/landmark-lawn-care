# Lawn Care Company — demo homepage

A generic demo homepage for a **lawn care / landscaping company**, built by Kind Supply
Digital to show prospects what their new site could look like.

This is a **concept site**: it uses the placeholder name "Lawn Care Company", stock
photography, and placeholder service areas. It has no real phone number, email, address,
logo, social links or reviews, and its estimate form sends and stores nothing.

## What's on the page
Hero · services strip · intro · 6 interactive services (lawn mowing, mulch & bed care,
bush trimming & removal, yard clean-up, fall clean-up, snow removal) · before/after slider
(sample stock pair) · "small details" band · why choose us · seasonal care · gallery ·
local & personal · demo estimate form · final CTA · footer.

## Demo rules
- **noindex** everywhere: robots meta tag in `index.html`, `robots.txt`, and the
  `X-Robots-Tag` header in `vercel.json`. Keep them.
- Small **"Concept by Kind Supply Digital"** label (bottom-left) and footer note. Keep them.
- **No real contact details.** No phone, email, address, `tel:` links or social links.
- **Stock photos only** (`assets/img/`), never a prospect's photos or logo without permission.
- **Form is a placeholder.** Fields have no `name` attributes and submitting only shows a
  "this is a demo" message.

## Personalizing for a prospect
Search-and-replace "Lawn Care Company" with the prospect's name, swap in their real towns,
and only add facts (phone, years, services) confirmed on their own website or Google listing.

## Tech
Static HTML + CSS + vanilla JS. No build step and no dependencies.

```
index.html       # single-page homepage
css/styles.css   # design system + every section
js/main.js       # nav, mobile menu, services swap, before/after, reveals, demo form
assets/img/      # stock photography
```

Local preview: `python -m http.server` in the repo root, then open http://localhost:8000.
