# AGENTS.md

## Project Overview
SkillPath — monorepo with React+Vite frontend (`src/`) and Express+MySQL backend (`server/`). Both are ESM (`"type": "module"`).

## Essential Commands
```bash
# Frontend
npm run dev          # Vite dev server
npm run build        # Production build
npm run lint         # ESLint (TS + React)

# Backend
cd server
npm start            # node src/index.js (auto-creates DB + tables)
npm run dev          # node --watch src/index.js
npm test             # vitest run (15 tests: validation + formatResource)
node scripts/seed.js # Populate 194 resources (run after backend starts once)
```

## Architecture
- **Entrypoints:** `src/main.tsx` (frontend), `server/src/index.js` (backend)
- **Routing:** `src/App.tsx` — `<BrowserRouter>` + `<UserProvider>` wrap `<App>` in `main.tsx`
- **API client:** `src/services/api.ts` — fetches with JWT from `localStorage`, uses `import.meta.env.VITE_API_URL || '/api'`
- **Auth flow:** Register/login returns JWT → stored in `localStorage` → `UserContext` fetches `/auth/me` on mount
- **DB schema:** 5 tables — `users`, `categories`, `resources`, `user_saved_resources`, `resource_votes` (auto-created via `initDatabase()` in `server/src/config/db.js`)
- **Vote tracking:** Per-user via `resource_votes` table; `INSERT IGNORE` prevents double-voting; route requires auth.
- **Pagination:** List endpoints (`GET /resources`, `/search`, `/trending`, `/new`) accept `limit` & `offset` query params, return `{ data, total }`.
- **Email notifications:** Optional SMTP via `nodemailer` — configure `SMTP_HOST`/`SMTP_USER`/`SMTP_PASS`/`NOTIFICATION_EMAIL` in `server/.env` to enable submission notifications.
- **Tags storage:** JSON string in DB → parsed in `formatResource()` in both `resourceService.js` and `saveService.js`
- **Path aliases:** `@/` → `./src` (Vite + tsconfig)

## Key Quirks
- **seed.js on Windows:** The auto-run guard (`import.meta.url.endsWith(process.argv[1])`) fails because Node's URL uses forward slashes while Windows uses backslashes. Use `import('./scripts/seed.js')` or the `decodeURIComponent` fix to work around.
- **CORS:** Reads `ALLOWED_ORIGINS` env var (comma-separated). Empty var = no origin allowed except no-origin requests.
- **JWT:** Default fallback `'your-secret-key-change-in-production'`. Must set `JWT_SECRET` in production.
- **Resource id:2** is intentionally absent in frontend `src/data/resources.ts` (freeCodeCamp was removed — data source has ids 1,3,4... not contiguous).
- **Premium blur:** CSS class `blur-title` applied when `resource.isPremium && !userIsPremium`. Card title text is blurred.
- **Premium blur:** CSS class `blur-title` applied when `resource.isPremium && !userIsPremium`. Card title text is blurred.
- **DB init:** Backend auto-creates database and tables on every start (`CREATE TABLE IF NOT EXISTS`).
- **`server/.env`** is gitignored; copy `server/.env.example` to set it up.
- **`dist/`** is gitignored locally but tracked in the remote repo.

## Style Conventions
- Custom Tailwind dark theme (`background: #0B1020`, `text: #F8FAFC`, accent colors). No light mode.
- Components: `cn()` utility from `@/lib/utils` (clsx + tailwind-merge) for class merging.
- Button variants: `default`, `secondary`, `ghost`, `outline`, `link`, `gold`. Sizes: `sm`, `default`, `lg`, `xl`, `icon`.
- `@radix-ui/react-slot` via `asChild` prop on Button (shadcn/ui pattern).
- Framer Motion for staggered card animations (`delay: index * 0.05`).
- TypeScript strict: `noUnusedLocals: true`, `noUnusedParameters: true`, `@typescript-eslint/no-unused-vars: warn` (with `argsIgnorePattern: ^_`), `@typescript-eslint/no-explicit-any: warn`.
- Category and type badges use colors defined in tailwind config (`category-*`, `type-*`).
- ESLint react-refresh rule warns on non-component exports (allowConstantExport: true).

## Project Structure
```
src/
  components/  -- Navbar, Footer, ResourceCard, ui/button
  pages/       -- 13 pages re-exported via index.ts
  contexts/    -- UserContext (useUser hook)
  data/        -- resources.ts (static resource array, deprecated)
  types.ts     -- Resource, ResourceType, Category interfaces
  constants.ts -- categories, subcategories, typeLabels, getCategoryColor
  services/    -- api.ts (auth + resources API client)
  lib/         -- utils.ts (cn helper)
server/
  src/
    config/    -- db.js (pool + initDatabase)
    routes/    -- auth.js, resources.js
    services/  -- authService, resourceService, saveService, emailService
    middleware/ -- auth.js (JWT verify + generate)
    utils/     -- validation.js (email, password, URL), formatResource.js
  scripts/     -- seed.js
```

## Vercel Deployment
- `vercel.json` rewrites all routes to `index.html` (SPA).
- Backend not deployed via Vercel; required separately.
