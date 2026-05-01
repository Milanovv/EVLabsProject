# Database Cleanup - Remove Duplicate Resources

**Date:** April 27, 2026  
**Issue:** Users could see every resource appear 2 times in the application

---

## Problem Description

The SkillPath application was displaying duplicate resources to users. Every resource appeared twice in:
- Search results (`/search`)
- Category pages (`/category`)
- Trending resources (HomePage)
- Recently added resources (HomePage)
- Saved resources (SavedPage)

---

## Root Cause Analysis

After investigation (Step 1 of the diagnostic plan), the issue was identified in the MySQL database:

| Check | Result |
|-------|--------|
| Duplicate IDs | 0 found (all IDs were unique) |
| **Duplicate Titles** | **187 found** (same resource existed multiple times with different IDs) |
| Total Records | 381 |
| Unique IDs | 381 |
| Saved Resources Duplicates | 0 found |

**Example duplicates found:**
- `Framer` appeared **3 times** (IDs: 174, 282, 362)
- `Adobe XD` appeared 2 times (IDs: 92, 280)
- `GitHub` appeared 2 times (IDs: 60, 248)
- `Figma` appeared 2 times (IDs: 11, 279)

**Root Cause:** The seed data was inserted multiple times into the database, or there was a bug in the resource insertion logic that created duplicate entries with different IDs but identical titles and categories.

---

## Solution Applied

### Step 4: Remove Duplicate Resources

**Script:** `server/remove-duplicates.js`

**Action:** Deleted duplicate records keeping only the lowest ID for each `(title, category)` pair.

```sql
DELETE r1 FROM resources r1
INNER JOIN resources r2 
WHERE r1.id > r2.id 
  AND r1.title = r2.title 
  AND r1.category = r2.category
```

**Backup:** Created `resources_backup` table before deletion.

**Result:**
- Deleted: **187 duplicate records**
- Remaining: **194 unique resources**
- Before: 381 records
- After: 194 records

---

### Step 5: Add Unique Constraints

**Script:** `server/add-constraints.js`

**Action:** Added unique constraint on `(title, category)` to prevent future duplicates.

```sql
ALTER TABLE resources 
ADD UNIQUE INDEX idx_unique_resource (title, category)
```

**Result:** 
- ✅ Unique constraint successfully added
- ✅ Database verified - no duplicates remain
- ✅ Future duplicate inserts will now fail with a duplicate key error

---

## Files Modified

### 1. **`src/data/resources.ts`** (Cleaned)
- **Before:** 381 resources (with 187 duplicates)
- **After:** 194 unique resources
- Removed duplicate entries keeping lowest ID for each `(title, category)` pair

### 2. **`server/src/config/db.js`** (Updated)
- Added unique constraint to `resources` table creation:
  ```sql
  UNIQUE KEY idx_unique_resource (title, category)
  ```
- Future `initDatabase()` calls will prevent duplicates

### 3. **`server/seed-data.json`** (New)
- Exported clean resource data from database (194 entries)
- Used by seed script to populate fresh databases

### 4. **`server/scripts/seed.js`** (New)
- Seeds database with resources from `seed-data.json`
- Uses `INSERT IGNORE` to skip duplicates (works with unique constraint)
- Safe to run multiple times

### 5. **Database Changes** (Applied Locally)
- Removed 187 duplicate rows from `resources` table
- Added unique index: `idx_unique_resource (title, category)`
- Backup table `resources_backup` created (381 original records)

---

## For New Developers (Clone & Setup)

### Prerequisites
- MySQL installed and running
- Node.js v16+

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Milanovv/EVLabsProject.git
   cd EVLabsProject
   ```

2. **Configure environment**
   ```bash
   cp server/.env.example server/.env
   # Edit server/.env with your MySQL credentials
   ```

3. **Install dependencies**
   ```bash
   cd server && npm install
   cd .. && npm install
   ```

4. **Initialize database**
   ```bash
   cd server
   node ../seed-data.json # (data is embedded in seed.js)
   node scripts/seed.js
   ```
   Or simply start the server (triggers `initDatabase()`):
   ```bash
   npm start
   ```

5. **Seed the resources**
   ```bash
   node scripts/seed.js
   ```
   - Inserts 194 resources using `INSERT IGNORE`
   - Safe to run multiple times (unique constraint prevents duplicates)

6. **Start the application**
   ```bash
   # Terminal 1: Start backend
   cd server && npm start
   
   # Terminal 2: Start frontend
   cd .. && npm run dev
   ```

### What Gets Created

| Item | Source | Description |
|------|--------|-------------|
| `users` table | `db.js` | Empty (users register via app) |
| `resources` table | `seed.js` + `seed-data.json` | 194 unique resources |
| `categories` table | `db.js` | 16 categories |
| `user_saved_resources` table | `db.js` | Empty (users save via app) |

---

## Testing Recommendations

After cloning and setting up:

1. ✅ Visit `/search` page - verify resources appear only once
2. ✅ Visit `/category?cat=Programming/Development` - check for duplicates
3. ✅ Visit HomePage - verify Trending and Recently Added sections
4. ✅ Register/login - test saving resources (no duplicate saved entries)
5. ✅ Try running `seed.js` twice - should skip duplicates (unique constraint working)

---

## Prevention

The unique constraint on `(title, category)` ensures:

- ✅ No two resources can have the same title in the same category
- ✅ Seed scripts fail gracefully if attempting to insert duplicates (`INSERT IGNORE`)
- ✅ Application logic errors won't create silent duplicates
- ✅ `initDatabase()` now creates tables with the constraint

---

## Rollback Plan

If needed, restore database from backup:

```sql
DROP TABLE resources;
RENAME TABLE resources_backup TO resources;
```

**Note:** The backup table `resources_backup` exists in the original database. Drop it after verifying the fix works:
```sql
DROP TABLE resources_backup;
```

---

## Git Commit History

| Commit | Description |
|--------|-------------|
| `2664fb5` | `docs: add database cleanup documentation` |
| *Pending* | `fix: remove 187 duplicate resources and add unique constraint` |
| *Pending* | `feat: add seed script for database initialization` |

---

## Repository Structure (After Push)

```
EVLabsProject/
├── src/
│   ├── data/
│   │   └── resources.ts          # 194 clean resources (was 381)
│   └── ...
├── server/
│   ├── src/
│   │   └── config/
│   │       └── db.js              # Has unique constraint now
│   ├── scripts/
│   │   └── seed.js               # NEW: Seeds database
│   ├── seed-data.json             # NEW: Clean resource data
│   └── .env                      # NOT in git (use .env.example)
├── docs/
│   └── database-cleanup-2026-04-27.md
└── README.md                      # Update with setup instructions
```
