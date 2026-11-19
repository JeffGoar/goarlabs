# goarlabs.com

The site for **Goar Labs**, Jeff Goar's studio in Palm Harbor, Florida: client app and web work
(the Studio), plus the products and companies Goar Labs runs (bsbl.io, Sandlot Culture).

Live at **[goarlabs.com](https://goarlabs.com)**. The old domain, goar.dev, redirects here.

## Structure

```
├── index.html                  # Homepage: Studio, products, work, contact
├── studio/index.html           # The Studio: client services, work, contact (goar.dev lands here)
├── about.html                  # Jeff: background, expertise, career timeline
├── 404.html                    # Not-found page
├── assets/
│   ├── site.css                # The one shared stylesheet: tokens, header, footer, every section
│   ├── brand/                  # Logo (SVG + PNG), LABS block, favicon, social avatar
│   ├── about/                  # Portrait
│   └── work/<slug>/            # Case study screenshots (WebP)
├── work/
│   ├── case-study.css          # Case study template, layered on site.css
│   ├── bsbl-io.html
│   ├── goar-photography.html
│   ├── east-lake-classic.html
│   └── bandogram.html
├── _redirects                  # Cloudflare Pages redirects (essays and the Life Event Tool moved to jeffgoar.com)
├── og-image.png                # Social preview image (1200×630)
├── robots.txt
└── sitemap.xml
```

## What goes where

goarlabs.com is the business: client work (the Studio), products and project enquiries. jeffgoar.com is
Jeff: career history, essays and web toys. The test: would it stay with Goar Labs if the company were sold,
or follow Jeff to a new job? The essays and the Life Event Tool case study moved to jeffgoar.com in
November 2026; `_redirects` sends their old addresses there.

## Brand

- **Logo:** the GOAR wordmark from GOAR Photography (traced, unchanged) plus a solid LABS block.
  The A inside the block is GOAR's own crossbar-less A. Files are in `assets/brand/`.
- **One color at a time:** the logo is always a single color: ink, white, or one venture's color.
  Below about 40 px wide use the block alone; at favicon size use the G.
- **Venture colors** (fills and accents, never body text on white):
  Studio `#FF5A1F` (ink text on it) · bsbl.io `#2F5BFF` · Sandlot Culture `#1F7A4D` · Ink `#121212` · Panel `#F3F3F1`.
- **Type:** Urbanist (headlines) and Figtree (body), from Google Fonts. JetBrains Mono for code.

Every page shares the same header and footer markup; when you change one, change them all
(`grep -l "site-header" -r .`).

## Adding a case study

Copy `work/east-lake-classic.html` to `work/<slug>.html`, set its accent on the `<main class="cs">`
tag (`--accent` and `--on-accent`), put screenshots in `assets/work/<slug>/` (WebP, 1440×900 desktop
and 780×1560 phone captures of the live site), and keep the section order:

1. Header: eyebrow, title, one-line lede, and a Role / Timeline / Stack / Links grid
2. Hero screenshot (browser frame) and phone screenshot
3. `01` The problem · `02` My role · `03` Stack · `04` Architecture (`.flow` lanes of `.node`s)
4. `05` Key features (`.feature-grid` screenshots and `.feature-list`)
5. `06` Hard problems (`.card` with an optional `<pre>` snippet, ≤12 lines, quoted from the real code)
6. `07` Results (`.stats` + prose), then the CTA and previous/next links

Only use numbers you can trace to the code, the data or the live site. Anything that still needs
a real figure is marked with an HTML comment starting `TODO(jeff):`. List them with `grep -rn "TODO(jeff)" work/`.
Add the page to `sitemap.xml` and a card to the Work section of `index.html`.

## Stack and hosting

- Plain HTML and CSS, no build step and no dependencies.
- Hosted on **Cloudflare Pages**, project `goarlabs` (account "Goar.Dev"), connected to this repo.
  Every push to `main` deploys to goarlabs.com; every other branch gets a preview at
  `<branch>.goarlabs.pages.dev`. No build command; the repo root is served as-is.
- DNS and email are on Cloudflare:
  - goarlabs.com and www are proxied CNAMEs to `goarlabs.pages.dev`; a redirect rule sends www to the bare domain (301).
  - goar.dev and www.goar.dev redirect (301) to the Studio page, goarlabs.com/studio/. Pages that existed on
    goar.dev (about and the case studies) redirect to the same page on goarlabs.com, and its essays go straight
    to jeffgoar.com/writing/, so old links keep working.
  - Email Routing forwards jeff@goarlabs.com and jeff@goar.dev to Jeff's inbox.

## TODO

- [ ] Wire the contact form to a form service: set `FORM_ENDPOINT` in `index.html` (it currently opens a pre-filled email to jeff@goarlabs.com)
- [ ] Fill in the `TODO(jeff)` figures in the case studies
- [ ] Decide whether bsbl.io is a Goar Labs product or a personal research project, and make the case study and bsbl.io's own disclaimer agree
- [ ] Add privacy-friendly analytics (Cloudflare Web Analytics, GoatCounter, or Plausible)
- [ ] Add a newsletter once there's a regular posting cadence
