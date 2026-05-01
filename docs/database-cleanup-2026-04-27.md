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

No application code was modified. Only database changes were made:

1. **Database: `resources` table**
   - Removed 187 duplicate rows
   - Added unique index: `idx_unique_resource (title, category)`

2. **Database: `resources_backup` table**
   - Created as safety backup before deletion
   - Contains original 381 records

---

## Testing Recommendations

After deploying this fix:

1. Visit `/search` page - verify resources appear only once
2. Visit `/category?cat=Programming/Development` - check for duplicates
3. Visit HomePage - verify Trending and Recently Added sections
4. Test saving resources - ensure no duplicate saved entries
5. Try adding a duplicate resource via admin/seed - should fail with constraint error

---

## Prevention

The new unique constraint on `(title, category)` ensures:
- No two resources can have the same title in the same category
- Seed scripts will fail if attempting to insert duplicates
- Application logic errors won't create silent duplicates

---

## Rollback Plan

If needed, restore from backup:

```sql
DROP TABLE resources;
RENAME TABLE resources_backup TO resources;
```

**Note:** The backup table `resources_backup` still exists in the database. Drop it after verifying the fix works in production.

---

## Git Commit

This change is ready to be committed and pushed to:
- Repository: `https://github.com/Milanovv/EVLabsProject/commits/main/`
- Recommended commit message: `fix: remove 187 duplicate resources from database`
