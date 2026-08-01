# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this repo is

The published, static site for Fravalu — served at https://fra-valu.com via GitHub Pages. `index.html`, `gsap.min.js`, and the headshot images are served exactly as committed. No build step, no package manager.

## Related repo: `fra-valu`

The sibling repo [`fra-valu`](https://github.com/alvee1994/fra-valu) (private) is the source of truth for:

- **Brand guide** — `brand/guide/fravalu-brand-guide-v1.4.html`: colour, type, voice, imagery rules. Check it before changing copy or design here.
- **Brand assets** — `brand/assets/`: logo SVGs/PNGs and the generator scripts that produce them.
- Company/client/finance records — not relevant to this repo and must never be copied here.

If a task here needs brand assets or copy guidance, look in `fra-valu` first rather than inventing new rules or regenerating assets from scratch.

## Publishing

Push to `main` — GitHub Pages serves it directly, no build step. Custom domain is pinned via the `CNAME` file (`fra-valu.com`); DNS is managed at the registrar, pointing to GitHub Pages.

This repo exists specifically so the public site can live in a public repo without exposing `fra-valu`'s private client/finance data — do not merge the two repos back together.

## Formats

Keep to plain HTML/CSS/JS, single-file where practical, matching the existing style in `index.html`.
