import pool from '../config/db.js';
import { formatResource } from '../utils/formatResource.js';

export async function saveResource(userId, resourceId) {
  const [existing] = await pool.query(
    'SELECT id FROM user_saved_resources WHERE user_id = ? AND resource_id = ?',
    [userId, resourceId]
  );
  
  if (existing.length > 0) {
    return { saved: true };
  }
  
  await pool.query(
    'INSERT INTO user_saved_resources (user_id, resource_id) VALUES (?, ?)',
    [userId, resourceId]
  );
  
  return { saved: true };
}

export async function unsaveResource(userId, resourceId) {
  await pool.query(
    'DELETE FROM user_saved_resources WHERE user_id = ? AND resource_id = ?',
    [userId, resourceId]
  );
  
  return { saved: false };
}

export async function getSavedResources(userId) {
  const [resources] = await pool.query(
    `SELECT r.* FROM resources r
     INNER JOIN user_saved_resources sr ON r.id = sr.resource_id
     WHERE sr.user_id = ?
     ORDER BY sr.created_at DESC`,
    [userId]
  );
  
  return resources.map(formatResource);
}

export async function isResourceSaved(userId, resourceId) {
  const [existing] = await pool.query(
    'SELECT id FROM user_saved_resources WHERE user_id = ? AND resource_id = ?',
    [userId, resourceId]
  );
  
  return existing.length > 0;
}

