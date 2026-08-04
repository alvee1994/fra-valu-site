---
title: Writing posts in Obsidian
date: 2026-08-04
description: How posts on this site get written in Obsidian and published as plain markdown.
---

This file is plain markdown, no HTML. Open this repo folder as an Obsidian vault, write a post under `_writing/`, and it publishes at `/posts/<slug>/` once pushed to `main`.

Front matter needs three fields:

```yaml
---
title: Your title
date: YYYY-MM-DD
description: One line for the posts index and meta tags.
---
```

Filename is just the slug, e.g. `writing-notes-in-obsidian.md` — no date prefix. The `date:` field is the only date the site uses, for sorting and display. Set it once, when you write the post, and don't touch it again: it's a creation date, not a last-edited date. If you later revise the post, the date stays where it started.

Everything below the front matter is normal markdown: headings, links, lists, `code`, blockquotes. No CSS or layout decisions needed, the `post` layout handles those.
