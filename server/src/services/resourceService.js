import pool from '../config/db.js';
import { formatResource } from '../utils/formatResource.js';
import { validateUrl } from '../utils/validation.js';
import { sendSubmissionNotification } from './emailService.js';

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
  if (filters.exclude) {
    query += ' AND id != ?';
    params.push(filters.exclude);
  }

  query += ' ORDER BY rating DESC, votes DESC';

  const countParams = [...params];
  let countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as count');
  const countCutoff = countQuery.indexOf(' ORDER BY');
  if (countCutoff !== -1) {
    countQuery = countQuery.substring(0, countCutoff);
  }
  const [countResult] = await pool.query(countQuery, countParams);
  const total = countResult[0].count;

  if (filters.limit) {
    query += ' LIMIT ?';
    params.push(filters.limit);
    if (filters.offset) {
      query += ' OFFSET ?';
      params.push(filters.offset);
    }
  }

  const [resources] = await pool.query(query, params);
  return { data: resources.map(formatResource), total };
}

export async function getResourceById(id) {
  const [resources] = await pool.query('SELECT * FROM resources WHERE id = ?', [id]);
  if (resources.length === 0) return null;
  return formatResource(resources[0]);
}

export async function searchResources(searchTerm, filters = {}) {
  const escaped = searchTerm.replace(/[%_]/g, '\\$&');
  const params = [`%${escaped}%`, `%${escaped}%`, `%${escaped}%`];
  const countQuery = `SELECT COUNT(*) as count FROM resources WHERE title LIKE ? OR description LIKE ? OR tags LIKE ?`;
  const [countResult] = await pool.query(countQuery, params);
  const total = countResult[0].count;

  let query = `SELECT * FROM resources WHERE title LIKE ? OR description LIKE ? OR tags LIKE ? ORDER BY rating DESC`;
  if (filters.limit) {
    query += ' LIMIT ?';
    params.push(filters.limit);
    if (filters.offset) {
      query += ' OFFSET ?';
      params.push(filters.offset);
    }
  }

  const [resources] = await pool.query(query, params);
  return { data: resources.map(formatResource), total };
}

export async function getTrendingResources(filters = {}) {
  const params = [];
  const countQuery = `SELECT COUNT(*) as count FROM resources WHERE is_trending = TRUE`;
  const [countResult] = await pool.query(countQuery);
  const total = countResult[0].count;

  let query = 'SELECT * FROM resources WHERE is_trending = TRUE ORDER BY rating DESC';
  if (filters.limit) {
    query += ' LIMIT ?';
    params.push(filters.limit);
    if (filters.offset) {
      query += ' OFFSET ?';
      params.push(filters.offset);
    }
  }

  const [resources] = await pool.query(query, params);
  return { data: resources.map(formatResource), total };
}

export async function getNewResources(filters = {}) {
  const params = [];
  const countQuery = `SELECT COUNT(*) as count FROM resources WHERE is_new = TRUE`;
  const [countResult] = await pool.query(countQuery);
  const total = countResult[0].count;

  let query = 'SELECT * FROM resources WHERE is_new = TRUE ORDER BY created_at DESC';
  if (filters.limit) {
    query += ' LIMIT ?';
    params.push(filters.limit);
    if (filters.offset) {
      query += ' OFFSET ?';
      params.push(filters.offset);
    }
  }

  const [resources] = await pool.query(query, params);
  return { data: resources.map(formatResource), total };
}

export async function voteResource(id, userId) {
  const [existing] = await pool.query(
    'SELECT id FROM resources WHERE id = ?',
    [id]
  );
  if (existing.length === 0) {
    throw new Error('Resource not found');
  }

  if (userId) {
    const [insertResult] = await pool.query(
      'INSERT IGNORE INTO resource_votes (user_id, resource_id) VALUES (?, ?)',
      [userId, id]
    );

    if (insertResult.affectedRows === 0) {
      const [rows] = await pool.query('SELECT votes FROM resources WHERE id = ?', [id]);
      return { voted: false, votes: rows[0].votes };
    }
  }

  const [result] = await pool.query(
    'UPDATE resources SET votes = votes + 1 WHERE id = ?',
    [id]
  );
  const [rows] = await pool.query('SELECT votes FROM resources WHERE id = ?', [id]);
  return { voted: true, votes: rows[0].votes };
}

export async function createResource(data) {
  const { title, url, description, category, subcategory, type, difficulty, tags, email } = data;

  if (!title || !url || !description || !category || !subcategory || !type) {
    throw new Error('Title, URL, description, category, subcategory, and type are required');
  }

  validateUrl(url);

  const tagsJson = tags ? JSON.stringify(tags) : '[]';

  const [result] = await pool.query(
    `INSERT INTO resources (title, url, description, category, subcategory, type, difficulty, tags)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [title, url, description, category, subcategory, type, difficulty || null, tagsJson]
  );

  sendSubmissionNotification(email, title);

  return getResourceById(result.insertId);
}

