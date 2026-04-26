import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const categories = [
  { name: 'Programming/Development', slug: 'programming-development', icon: '</>', color: '#22D3EE', description: 'Programming languages, frameworks, and development tools' },
  { name: 'UI/UX Design', slug: 'ui-ux-design', icon: '◐', color: '#A855F7', description: 'Design tools, principles, and user experience' },
  { name: 'Marketing', slug: 'marketing', icon: '📈', color: '#F97316', description: 'Digital marketing, SEO, and content strategies' },
  { name: 'Product and Project Management', slug: 'product-project-management', icon: '⚡', color: '#6366F1', description: 'Product management and agile methodologies' },
  { name: 'Business and Finance', slug: 'business-finance', icon: '💰', color: '#10B981', description: 'Business planning, accounting, and financial tools' },
  { name: 'Sales and Growth', slug: 'sales-growth', icon: '🚀', color: '#F43F5E', description: 'Sales strategies and growth hacking' },
  { name: 'Events and Community', slug: 'events-community', icon: '📅', color: '#FBBF24', description: 'Event planning and community building' },
  { name: 'Web and App Building', slug: 'web-app-building', icon: '🌐', color: '#06B6D4', description: 'No-code and visual website builders' },
  { name: 'UI Assets and Creative', slug: 'ui-assets-creative', icon: '🎨', color: '#EC4899', description: 'Design resources, icons, and creative tools' },
  { name: 'Content Creation', slug: 'content-creation', icon: '📹', color: '#EF4444', description: 'Video editing and content creation tools' },
  { name: 'AI and Automation', slug: 'ai-automation', icon: '🤖', color: '#8B5CF6', description: 'AI-powered tools and automation' },
  { name: 'Business Growth', slug: 'business-growth', icon: '📊', color: '#F59E0B', description: 'Startup tools and growth platforms' },
  { name: 'API and Backend', slug: 'api-backend', icon: '⚙️', color: '#14B8A6', description: 'Backend services and API tools' },
  { name: 'Knowledge and Learning', slug: 'knowledge-learning', icon: '📚', color: '#6366F1', description: 'Learning platforms and education' },
  { name: 'Security and Privacy', slug: 'security-privacy', icon: '🔒', color: '#10B981', description: 'Security tools and privacy awareness' },
];

const resources = [
  ['Programming/Development', 'Guides and Tutorials', 'MDN Web Docs', 'https://developer.mozilla.org/', 'Complete reference for web technologies.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.9, 1250],
  ['Programming/Development', 'Guides and Tutorials', 'freeCodeCamp', 'https://www.freecodecamp.org/learn/', 'Hands-on programming platform.', '["Beginner","Free"]', 'tutorial', 'Beginner', 0, 1, 0, 4.9, 1200],
  ['Programming/Development', 'Tools and Softwares', 'Visual Studio Code', 'https://code.visualstudio.com/', 'Lightweight code editor.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.9, 2100],
  ['UI/UX Design', 'Tools and Softwares', 'Figma', 'https://www.figma.com/', 'Collaborative design tool.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.9, 1500],
  ['Marketing', 'Tools and Softwares', 'Google Analytics', 'https://analytics.google.com/', 'Website traffic analytics.', '["Essential","Free"]', 'tool', 'Intermediate', 0, 1, 0, 4.8, 720],
  ['Product and Project Management', 'Tools and Softwares', 'Notion', 'https://www.notion.so/', 'Notes and productivity.', '["Essential","Free"]', 'tool', 'Beginner', 0, 1, 0, 4.8, 1100],
  ['Business and Finance', 'Tools and Softwares', 'Stripe', 'https://stripe.com/', 'Online payment processing.', '["Free"]', 'tool', 'Intermediate', 0, 1, 0, 4.8, 860],
  ['AI and Automation', 'Tools and Softwares', 'ChatGPT', 'https://chat.openai.com/', 'AI assistant.', '["Paid"]', 'tool', 'Beginner', 1, 1, 0, 4.8, 820],
];

async function migrate() {
  console.log('Starting migration...');
  
  try {
    // Insert categories
    console.log('Inserting categories...');
    for (const cat of categories) {
      await pool.execute(
        'INSERT IGNORE INTO categories (name, slug, icon, color, description) VALUES (?, ?, ?, ?, ?)',
        [cat.name, cat.slug, cat.icon, cat.color, cat.description]
      );
    }
    console.log(`Inserted ${categories.length} categories`);
    
    // Insert resources
    console.log('Inserting resources...');
    for (const r of resources) {
      await pool.execute(
        'INSERT IGNORE INTO resources (category, subcategory, title, url, description, tags, type, difficulty, is_premium, is_trending, is_new, rating, votes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        r
      );
    }
    console.log(`Inserted ${resources.length} resources`);
    
    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error.message);
  }
  
  await pool.end();
}

migrate();