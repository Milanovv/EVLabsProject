import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillpath',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

export async function initDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS skillpath`);
  await connection.query(`USE skillpath`);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      is_premium BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      icon VARCHAR(50),
      color VARCHAR(50),
      description TEXT
    )
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS resources (
      id INT PRIMARY KEY AUTO_INCREMENT,
      category VARCHAR(255) NOT NULL,
      subcategory VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      url VARCHAR(500) NOT NULL,
      description TEXT,
      tags TEXT,
      type VARCHAR(50),
      difficulty VARCHAR(50),
      is_premium BOOLEAN DEFAULT FALSE,
      is_trending BOOLEAN DEFAULT FALSE,
      is_new BOOLEAN DEFAULT FALSE,
      rating DECIMAL(3,2) DEFAULT 0,
      votes INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY idx_unique_resource (title, category)
    )
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS user_saved_resources (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      resource_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (resource_id) REFERENCES resources(id) ON DELETE CASCADE,
      UNIQUE KEY unique_save (user_id, resource_id)
    )
  `);

  await connection.end();
  console.log('Database initialized successfully');
}