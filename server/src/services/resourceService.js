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

export async function voteResource(id, userId, type) {
  const [existing] = await pool.query(
    'SELECT id FROM resources WHERE id = ?',
    [id]
  );
  if (existing.length === 0) {
    throw new Error('Resource not found');
  }

  const [existingVote] = await pool.query(
    'SELECT id, vote_type FROM resource_votes WHERE user_id = ? AND resource_id = ?',
    [userId, id]
  );

  if (existingVote.length > 0) {
    if (existingVote[0].vote_type === type) {
      await pool.query(
        'DELETE FROM resource_votes WHERE id = ?',
        [existingVote[0].id]
      );
    } else {
      await pool.query(
        'UPDATE resource_votes SET vote_type = ? WHERE id = ?',
        [type, existingVote[0].id]
      );
    }
  } else {
    await pool.query(
      'INSERT INTO resource_votes (user_id, resource_id, vote_type) VALUES (?, ?, ?)',
      [userId, id, type]
    );
  }

  const [total] = await pool.query(
    'SELECT COALESCE(SUM(vote_type), 0) as total FROM resource_votes WHERE resource_id = ?',
    [id]
  );

  await pool.query('UPDATE resources SET votes = ? WHERE id = ?', [total[0].total, id]);

  const sameType = existingVote.length > 0 && existingVote[0].vote_type === type;
  const voted = existingVote.length === 0 || !sameType;
  const voteType = sameType ? null : type;

  return { voted, voteType, votes: total[0].total };
}

export async function getUserVote(resourceId, userId) {
  const [rows] = await pool.query(
    'SELECT vote_type FROM resource_votes WHERE user_id = ? AND resource_id = ?',
    [userId, resourceId]
  );
  return { voteType: rows.length > 0 ? rows[0].vote_type : null };
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

