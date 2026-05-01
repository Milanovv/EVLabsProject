# SkillPath (EVLabs Project)

A curated knowledge hub for professional resources in Programming, Design, Marketing, Product Management, Business, Sales, and Community building.

## Features

- **Resource Discovery** - Browse 194+ curated resources across 16 categories
- **Smart Search** - Find tutorials, tools, plugins, and FAQs quickly
- **User Authentication** - Register, login, premium subscriptions via Stripe
- **Save Resources** - Bookmark resources for later reference
- **Category Filtering** - Filter by subcategory, type, and difficulty
- **Responsive Design** - Works on desktop and mobile

## Prerequisites

- **Node.js** v16+ installed
- **MySQL** server installed and running
- **Git** for cloning the repository

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Milanovv/EVLabsProject.git
cd EVLabsProject
```

### 2. Install Dependencies

```bash
# Frontend dependencies
npm install

# Backend dependencies
cd server
npm install
cd ..
```

### 3. Configure Environment

```bash
cd server
cp .env.example .env
# Edit .env with your MySQL credentials and JWT secret
```

**Example `.env` configuration:**
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=skillpath
JWT_SECRET=your-super-secret-key-change-this
PORT=3001
```

### 4. Set Up Database

```bash
cd server
npm start
```

This will automatically:
- Create the `skillpath` database
- Create required tables (`users`, `resources`, `user_saved_resources`)
- Add unique constraint to prevent duplicate resources

### 5. Seed the Database

```bash
cd server
node scripts/seed.js
```

This populates the database with **194 curated resources** across 16 categories.

### 6. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm start
# Server runs on http://localhost:3001
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
# App runs on http://localhost:5173 (or shown port)
```

Visit `http://localhost:5173` to start using SkillPath!

---

## Project Structure

```
EVLabsProject/
├── src/                    # Frontend (React + TypeScript + Vite)
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components (Home, Search, Category, etc.)
│   ├── data/            # Static data (resources.ts with 194 resources)
│   ├── services/        # API client for backend
│   ├── contexts/        # React contexts (UserContext)
│   └── lib/             # Utilities
├── server/                 # Backend (Node.js + Express + MySQL)
│   ├── src/
│   │   ├── config/     # Database configuration
│   │   ├── routes/     # API routes (auth, resources)
│   │   └── services/   # Business logic
│   ├── scripts/           # Database seed scripts
│   └── .env                # Environment config (NOT in git)
├── docs/                   # Documentation
│   └── database-cleanup-2026-04-27.md
├── public/                 # Static assets
└── README.md              # This file
```

---

## Database Schema

The application uses MySQL with these tables:

| Table | Description |
|-------|-------------|
| `users` | User accounts, authentication, premium status |
| `resources` | Curated resources (194 entries, unique constraint on title+category) |
| `user_saved_resources` | Saved/bookmarked resources per user |

**Backup:** The `resources_backup` table contains the original 381 entries (before duplicate removal).

---

## Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend
```bash
cd server
npm start             # Start server with auto-database init
node scripts/seed.js  # Seed database with resources
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/premium` - Upgrade to premium
- `POST /api/auth/cancel` - Cancel premium

### Resources
- `GET /api/resources` - Get all resources (with filters)
- `GET /api/resources/search?q=query` - Search resources
- `GET /api/resources/trending` - Get trending resources
- `GET /api/resources/new` - Get newly added resources
- `GET /api/resources/saved` - Get user's saved resources (auth required)
- `POST /api/resources/:id/save` - Save a resource (auth required)
- `DELETE /api/resources/:id/save` - Unsave a resource (auth required)

---

## Categories (16 Total)

1. Programming/Development
2. UI/UX Design
3. Marketing
4. Product and Project Management
5. Business and Finance
6. Sales and Growth
7. Events and Community
8. Web and App Building
9. UI Assets and Creative
10. Content Creation
11. AI and Automation
12. Business Growth
13. API and Backend
14. Knowledge and Learning
15. Security and Privacy
16. Unsafe Sites

Each category has 6 subcategories:
- Guides and Tutorials
- Video Tutorials
- Tools and Softwares
- Plugins and Extensions
- FAQs and Basics
- Common Mistakes/Issues

---

## Documentation

For details on the duplicate resource fix and database cleanup, see:
- [docs/database-cleanup-2026-04-27.md](docs/database-cleanup-2026-04-27.md)

**Key points:**
- Removed 187 duplicate resources (kept lowest ID per title)
- Added unique constraint: `UNIQUE KEY idx_unique_resource (title, category)`
- Created seed script for easy database population

---

## Troubleshooting

### "Can't connect to database"
- Ensure MySQL server is running
- Check credentials in `server/.env`
- Verify database `skillpath` exists

### "Duplicate resources found"
- Unique constraint prevents this now
- If upgrading from old version, run: `node server/scripts/seed.js` (uses INSERT IGNORE)

### "Build fails"
- Ensure Node.js v16+
- Delete `node_modules/` and run `npm install` again
- Check for TypeScript errors in console

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

[Add your license here - MIT, Apache 2.0, etc.]

---

## Contact

- **Repository:** https://github.com/Milanovv/EVLabsProject
- **Issues:** https://github.com/Milanovv/EVLabsProject/issues

---

**Made with ❤️ for the developer community**
