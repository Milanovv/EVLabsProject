export function formatResource(row) {
  return {
    id: row.id,
    category: row.category,
    subcategory: row.subcategory,
    title: row.title,
    url: row.url,
    description: row.description,
    tags: (() => { try { return typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags || []; } catch { return []; } })(),
    type: row.type,
    difficulty: row.difficulty,
    isPremium: Boolean(row.is_premium),
    isTrending: Boolean(row.is_trending),
    isNew: Boolean(row.is_new),
    rating: Number(row.rating),
    votes: row.votes
  };
}