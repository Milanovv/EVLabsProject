import bcrypt from 'bcryptjs';
import pool from '../config/db.js';
import { generateToken } from '../middleware/auth.js';

export async function registerUser(email, password, name) {
  const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
  if (existing.length > 0) {
    throw new Error('Email already registered');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
    [email, passwordHash, name]
  );

  const token = generateToken({ id: result.insertId, email });
  return { id: result.insertId, email, name, token };
}

export async function loginUser(email, password) {
  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  if (users.length === 0) {
    throw new Error('Invalid email or password');
  }

  const user = users[0];
  const validPassword = await bcrypt.compare(password, user.password_hash);
  if (!validPassword) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user);
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    isPremium: Boolean(user.is_premium),
    token
  };
}

export async function getUserProfile(userId) {
  const [users] = await pool.query(
    'SELECT id, email, name, is_premium, created_at FROM users WHERE id = ?',
    [userId]
  );
  if (users.length === 0) {
    throw new Error('User not found');
  }
  const user = users[0];
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    isPremium: Boolean(user.is_premium),
    createdAt: user.created_at
  };
}

export async function upgradeToPremium(userId) {
  const [result] = await pool.query(
    'UPDATE users SET is_premium = TRUE WHERE id = ?',
    [userId]
  );
  return result.affectedRows > 0;
}

export async function cancelPremium(userId) {
  const [result] = await pool.query(
    'UPDATE users SET is_premium = FALSE WHERE id = ?',
    [userId]
  );
  return result.affectedRows > 0;
}