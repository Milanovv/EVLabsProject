import bcrypt from 'bcryptjs';
import pool from '../config/db.js';
import { generateToken } from '../middleware/auth.js';
import { validateEmail, validatePassword } from '../utils/validation.js';

export async function registerUser(email, password, name) {
  validateEmail(email);
  validatePassword(password);

  const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
  if (existing.length > 0) {
    throw new Error('Email already registered');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
    [email, passwordHash, name]
  );

  const [rows] = await pool.query(
    'SELECT id, email, name, role FROM users WHERE id = ?',
    [result.insertId]
  );
  const user = rows[0];
  const token = generateToken({ id: user.id, email: user.email, role: user.role });
  return { id: user.id, email: user.email, name: user.name, role: user.role, token };
}

export async function checkEmailExists(email) {
  const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
  return { exists: rows.length > 0 };
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

  const token = generateToken({ id: user.id, email: user.email, role: user.role });
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    isPremium: Boolean(user.is_premium),
    role: user.role,
    token
  };
}

export async function getUserProfile(userId) {
  const [users] = await pool.query(
    'SELECT id, email, name, is_premium, role, created_at FROM users WHERE id = ?',
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
    role: user.role,
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