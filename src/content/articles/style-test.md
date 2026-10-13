---
title: Style test
description: A draft that exercises every piece of article typography. It only shows up under bun dev.
date: 2026-10-10
tags: [meta]
draft: true
---

This is a **draft** article. It never ships, because drafts are left out of `bun run build`. It exists so the article layout can be checked while writing: paragraphs, headings, lists, quotes, code and images.

Body text is set in Newsreader and headings in Fraunces. A paragraph like this one should sit comfortably at around sixty-five characters a line, with enough leading that a long read on paper-coloured background doesn't feel cramped. Here is [an inline link](https://shard.page/) and some `inline code` for comparison.

## A second-level heading

Lists are fairly plain:

- Fold creases are CSS gradients, not images
- Paper grain is a tiny tiled SVG noise
- The page ships no client-side JavaScript

1. Write the post in Markdown
2. Set `draft: false`
3. Push to `master`

### A third-level heading

> Blockquotes get a rule down the left edge and a slightly larger italic setting, for pulling a line out of the flow.

```ts
// Code blocks use the Rosé Pine Dawn theme, which already looks like paper.
export const fold = (sheet: HTMLElement, panels = 3) => {
  sheet.style.setProperty('--panels', String(panels));
  return sheet;
};
```

A table, for the odd comparison:

| Thing    | Weight  | Notes                  |
| -------- | ------- | ---------------------- |
| Fonts    | ~95 KB  | Two variable serifs    |
| Textures | < 1 KB  | Inline SVG noise       |
| Scripts  | 0 KB    | Nothing to hydrate     |

---

![The WrathBench results chart](/images/wrathbench.webp)

That's the lot.
