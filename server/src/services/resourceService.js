import pool from '../config/db.js';

export async function getAllResources(filters = {}) {
  let query = 'SELECT * FROM resources WHERE 1=1';
  const params = [];

  if (filters.category) {
    query += ' AND category = ?';
    params.push(filters.category);
  }
  if (filters.subcategory) {
    query += ' AND subcategory = ?';
    params.push(filters.subcategory);
  }
  if (filters.type) {
    query += ' AND type = ?';
    params.push(filters.type);
  }
  if (filters.difficulty) {
    query += ' AND difficulty = ?';
    params.push(filters.difficulty);
  }

  query += ' ORDER BY rating DESC, votes DESC';

  const [resources] = await pool.query(query, params);
  return resources.map(formatResource);
}

export async function getResourceById(id) {
  const [resources] = await pool.query('SELECT * FROM resources WHERE id = ?', [id]);
  if (resources.length === 0) return null;
  return formatResource(resources[0]);
}

export async function searchResources(searchTerm) {
  const [resources] = await pool.query(
    `SELECT * FROM resources 
     WHERE title LIKE ? OR description LIKE ? OR tags LIKE ?
     ORDER BY rating DESC`,
    [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]
  );
  return resources.map(formatResource);
}

export async function getTrendingResources() {
  const [resources] = await pool.query(
    'SELECT * FROM resources WHERE is_trending = TRUE ORDER BY rating DESC'
  );
  return resources.map(formatResource);
}

export async function getNewResources() {
  const [resources] = await pool.query(
    'SELECT * FROM resources WHERE is_new = TRUE ORDER BY created_at DESC'
  );
  return resources.map(formatResource);
}

function formatResource(row) {
  return {
    id: row.id,
    category: row.category,
    subcategory: row.subcategory,
    title: row.title,
    url: row.url,
    description: row.description,
    tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags || [],
    type: row.type,
    difficulty: row.difficulty,
    isPremium: Boolean(row.is_premium),
    isTrending: Boolean(row.is_trending),
    isNew: Boolean(row.is_new),
    rating: Number(row.rating),
    votes: row.votes
  };
}