---
title: Writing notes in Obsidian
date: 2026-08-04
description: How this site's notes get written in Obsidian and published as plain markdown.
---

This file is plain markdown, no HTML. Open this repo folder as an Obsidian vault, write a note under `_notes/`, and it publishes at `/notes/<slug>/` once pushed to `main`.

Front matter needs three fields:

```yaml
---
title: Your title
date: YYYY-MM-DD
description: One line for the notes index and meta tags.
---
```

Filename format is `YYYY-MM-DD-slug.md` — the date in the filename is for sorting in Obsidian's file list, the `date:` in front matter is what the site actually uses.

Everything below the front matter is normal markdown: headings, links, lists, `code`, blockquotes. No CSS or layout decisions needed, the `note` layout handles those.
