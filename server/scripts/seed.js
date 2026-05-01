import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '.env') });

const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillpath'
};

async function seedDatabase() {
  let connection;
  
  try {
    connection = await mysql.createConnection(config);
    console.log('Connected to database:', config.database);
    
    // Read seed data
    const seedPath = resolve(__dirname, '../seed-data.json');
    if (!fs.existsSync(seedPath)) {
      console.error('❌ seed-data.json not found. Run export-json.js first.');
      process.exit(1);
    }
    
    const resources = JSON.parse(fs.readFileSync(seedPath, 'utf-8'));
    console.log(`📦 Found ${resources.length} resources to seed`);
    
    // Insert resources (ignore duplicates due to unique constraint)
    let inserted = 0;
    let skipped = 0;
    
    for (const resource of resources) {
      try {
        await connection.query(`
          INSERT IGNORE INTO resources 
          (id, category, subcategory, title, url, description, tags, type, difficulty, is_premium, is_trending, is_new, rating, votes)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          resource.id,
          resource.category,
          resource.subcategory,
          resource.title,
          resource.url,
          resource.description,
          JSON.stringify(resource.tags),
          resource.type,
          resource.difficulty,
          resource.isPremium ? 1 : 0,
          resource.isTrending ? 1 : 0,
          resource.isNew ? 1 : 0,
          resource.rating,
          resource.votes
        ]);
        inserted++;
      } catch (err) {
        // Skip duplicates
        skipped++;
      }
    }
    
    console.log(`✅ Seed complete: ${inserted} inserted, ${skipped} skipped`);
    
    // Verify
    const [count] = await connection.query('SELECT COUNT(*) as total FROM resources');
    console.log(`📊 Total resources in database: ${count[0].total}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed.');
    }
  }
}

seedDatabase();
