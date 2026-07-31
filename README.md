# Cedar Stone Website

React + Tailwind frontend, Node/Express + MySQL backend, English & Arabic (RTL).

## What's here

```
cedar-stone/
├── frontend/     React 19 + Vite + Tailwind v4. Pages: Home, About, Stone Types,
│                 Projects, Request Quote. EN/AR via react-i18next (dir flips
│                 automatically). Fully responsive.
└── backend/      Express API + MySQL. Schema + a ready-to-use /api/quotes
                  route, not yet called by the frontend (see note below).
```

### Current state of the "Request Quote" form
It's frontend-only right now — it validates and shows a success message, but
doesn't send data anywhere. Nothing to configure until you decide what should
happen on submit. When you're ready:
1. Run the backend (below) and `POST` to `/api/quotes`.
2. In `frontend/src/pages/RequestQuote.jsx`, replace the `console.log` in
   `handleSubmit` with a `fetch('/api/quotes', { method: 'POST', ... })` call.

### Placeholder imagery
The wireframes didn't include final photography, so stone/project images are
currently soft gradient placeholders (`src/components/Swatch.jsx`). Swap them
for real photos in `src/data/stoneTypes.js` and `src/data/projects.js` —
just drop an `<img>` in place of `<Swatch>` once you have the assets.

---

## Running locally

**Frontend**
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

**Backend** (only needed once you wire up the quote form or catalog API)
```bash
cd backend
npm install
cp .env.example .env     # fill in your MySQL credentials
mysql -u root -p cedar_stone < db/schema.sql
npm run dev         # http://localhost:4000
```

---

## Hosting it on your domain

Since you already have a domain, here's the simplest reliable setup — split
the three pieces (frontend, backend, database) across purpose-built hosts,
then point your domain at them with DNS.

| Piece | Recommended host | Why |
|---|---|---|
| Frontend (static build) | **Vercel** or **Netlify** | Free tier, auto-deploys from GitHub, trivial custom domain + HTTPS setup |
| Backend (Node/Express) | **Railway** or **Render** | Free/cheap tier, one-click deploy from GitHub, env vars in a dashboard |
| MySQL database | **Railway MySQL** or **PlanetScale** | Managed MySQL, no server maintenance |

### Step by step

1. **Push the code to GitHub** — one repo with `frontend/` and `backend/` is fine.

2. **Deploy the database first**
   - Railway: New Project → Add MySQL → copy the connection credentials.
   - Run `db/schema.sql` against it (Railway gives you a connect command, or use a GUI like TablePlus/DBeaver).

3. **Deploy the backend**
   - Railway/Render: New Project → Deploy from GitHub → set root directory to `backend/`.
   - Add the env vars from `.env.example`, pointing `DB_*` at the database from step 2.
   - You'll get a URL like `cedar-stone-api.up.railway.app`.

4. **Deploy the frontend**
   - Vercel: New Project → import the repo → set root directory to `frontend/`.
   - Build command `npm run build`, output directory `dist` (Vercel usually detects this automatically for Vite).
   - If/when the quote form is wired up, add an env var for the API URL (e.g. `VITE_API_URL=https://cedar-stone-api.up.railway.app`) and reference it via `import.meta.env.VITE_API_URL` in `RequestQuote.jsx`.

5. **Point your domain at it**
   - In Vercel/Netlify: Project Settings → Domains → add your domain, e.g. `cedarstonelb.com`.
   - They'll show you exactly what DNS records to add (usually an `A` record or `CNAME`) — add those in your domain registrar's DNS settings.
   - HTTPS certificates are issued automatically once DNS propagates (can take up to 24h, usually much faster).
   - Optional: point a subdomain like `api.cedarstonelb.com` at the backend host the same way, so the API also lives on your domain.

That's the whole path from code to a live site on your domain. Happy to walk
through any of these steps in more detail, or help wire up the quote form to
the backend once you know what the client wants it to do.
