import { getCollection } from 'astro:content';

/** Published articles, newest first. Drafts are included only under `astro dev`. */
export async function getArticles() {
  const entries = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
