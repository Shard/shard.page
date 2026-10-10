# [shard.page](https://shard.page)

A small [Astro](https://astro.build) site built with [Bun](https://bun.sh). Paper pinned to a felt board: the home page is the board, and the CV, projects and articles are sheets pinned to it. It ships no client-side JavaScript.

```sh
bun install
bun dev          # http://localhost:4321, drafts included
bun run build    # static output in dist/
bun run preview  # serve dist/
bun run check    # type-check .astro and .ts files
```

## Where things live

| What                       | Where                                   |
| -------------------------- | --------------------------------------- |
| CV jobs, projects, contact | `src/data/site.ts` (one source for every page) |
| Articles                   | `src/content/articles/*.md`             |
| Pages                      | `src/pages/`                            |
| Look and feel              | `src/styles/global.css`                 |
| Static files (icons, images, CNAME, artifacts) | `public/`         |

### Writing an article

Add `src/content/articles/my-post.md`:

```md
---
title: My post
description: One sentence for the list and the RSS feed.
date: 2026-10-10
draft: true
---
```

Drafts show under `bun dev` with a DRAFT stamp and are left out of the build. Set `draft: false` (or remove it) to publish. `style-test.md` is a permanent draft for checking typography.

### Adding a project

Add an entry to `projects` in `src/data/site.ts`. Images go in `public/images/`: use webp at about twice the displayed size.

## Printing the CV

`/cv/` prints to a single A4 page. Print styles at the bottom of `global.css` strip the board, tape, stamps and creases. After changing CV content, check the page count still holds:

```sh
chromium --headless --no-pdf-header-footer --print-to-pdf=cv.pdf http://localhost:4321/cv/
```

## Deploying

`.github/workflows/deploy.yml` builds with Bun and publishes `dist/` to GitHub Pages on every push to `master`. The repository's Pages source must be set to **GitHub Actions**, not "Deploy from a branch".
