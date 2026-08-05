# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this repo is

The published site for Fravalu — served at https://fra-valu.com via GitHub Pages. It's a Jekyll site: GitHub Pages builds it server-side on push to `main`, no local build step required to publish. See `README.md` for the file layout (`index.md`, `_writing/`, `_layouts/`, `assets/site.css`).

`_writing/*.md` is written for editing in Obsidian — open this repo as a vault, write plain markdown with front matter (`title`, `date`, `description`), push. No date in the filename; `date:` is set once at creation and never edited afterward. Don't hand-write HTML for post content; the `post` layout handles presentation. Published at `/posts/`.

## Related repo: `fra-valu`

The sibling repo [`fra-valu`](https://github.com/alvee1994/fra-valu) (private) is the source of truth for:

- **Brand guide** — `brand/guide/fravalu-brand-guide-v2.0.html`: colour, type, voice, imagery rules. Check it before changing copy or design here.
- **Brand assets** — `brand/assets/`: logo SVGs/PNGs and the generator scripts that produce them.
- Company/client/finance records — not relevant to this repo and must never be copied here.

If a task here needs brand assets or copy guidance, look in `fra-valu` first rather than inventing new rules or regenerating assets from scratch.

## Publishing

Push to `main` — GitHub Pages builds the Jekyll site and serves it, no local build step needed. Custom domain is pinned via the `CNAME` file (`fra-valu.com`); DNS is managed at the registrar, pointing to GitHub Pages.

This repo exists specifically so the public site can live in a public repo without exposing `fra-valu`'s private client/finance data — do not merge the two repos back together.

## Formats

Homepage chrome (`index.md`, `_layouts/`) stays plain HTML/CSS embedded in Liquid templates, matching the existing style. Post content (`_writing/*.md`) is plain markdown, no raw HTML — that's the part meant to be written in Obsidian.
