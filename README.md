# fra-valu-site

Published site for Fravalu, served via GitHub Pages at https://fra-valu.com.

This repo holds **only** the deployed site. It's a Jekyll site — GitHub Pages builds it server-side on every push to `main`, no local build step required to publish.

## Structure

- `index.md` — homepage. Front matter + the hero/capabilities/booking sections, layout in `_layouts/default.html`.
- `_notes/*.md` — plain-markdown notes, one file per note. This is the Obsidian-friendly part: open this repo as an Obsidian vault, write a note under `_notes/`, push. See `_notes/2026-08-04-writing-notes-in-obsidian.md` for the front matter format.
- `notes/index.html` — auto-generated listing of everything in `_notes/`.
- `_layouts/` — `default.html` (site chrome: head, header, footer) and `note.html` (article wrapper for notes).
- `assets/site.css` — site styling, split out of what used to be an inline `<style>` block.
- `open-props.*.css`, images, `CNAME` — vendored/static as before.

## Local preview (optional)

Needs Ruby + Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Not required to publish — GitHub Pages builds the same way on push.

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
