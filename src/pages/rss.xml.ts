import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticles } from '../lib/articles';
import { profile } from '../data/site';

export async function GET(context: APIContext) {
  const articles = await getArticles();
  return rss({
    title: `${profile.name} · Articles`,
    description: 'Articles and notes by Mark Beukers.',
    site: context.site!,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/articles/${a.id}/`,
    })),
  });
}
