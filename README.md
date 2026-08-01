# fra-valu-site

Published site for Fravalu, served via GitHub Pages at https://fra-valu.com.

This repo holds **only** the deployed site: `index.html`, images, and vendored JS. No build step — files are served as-is.

## Where things come from

The business/records repo, [`fra-valu`](https://github.com/alvee1994/fra-valu), is the source of truth for:

- **Brand guide**: `brand/guide/fravalu-brand-guide-v1.4.html` — colour, type, voice, imagery rules
- **Brand assets**: `brand/assets/` — logo SVGs/PNGs, generated via `build-assets.py` / `export-png.py`
- Company records, client work, finance (not relevant here, and not public)

That repo is **private** on purpose (client and finance data). This repo is public because GitHub Pages requires a public repo on the plan in use. Only ever commit files meant to be public here — nothing from `fra-valu`'s `finance/`, `clients/`, or `admin/` folders belongs in this repo.

When updating this site's copy or design, check the brand guide in `fra-valu` first rather than inventing new rules.

## Deploy

Push to `main`. GitHub Pages (Settings → Pages, source: `main` branch, root) serves it automatically. Custom domain is set via the `CNAME` file plus DNS records at the registrar (A/ALIAS or CNAME to the GitHub Pages target) — see GitHub's "Managing a custom domain" docs if DNS needs redoing.

Netlify was used previously; this repo replaces that setup entirely.
