markdown
# Cedar Stone Website

React + Tailwind frontend, English & Arabic (RTL).

🔗 Live site: https://cedarstonelb.com

## What's here

cedar-stone/
└── frontend/ React 19 + Vite + Tailwind v4. Pages: Home, About, Stone Colors,
Projects, Request Quote. EN/AR via react-i18next (dir flips
automatically). Fully responsive.


### How the "Request Quote" form works

The form is fully functional and requires no backend — it sends submissions
directly via [EmailJS](https://www.emailjs.com/) from the browser. On submit,
`RequestQuote.jsx` calls `emailjs.send()` with the form data, which delivers
it straight to your inbox using an EmailJS email template.

To run this locally or deploy it, you'll need your own EmailJS service,
template, and public key, set as environment variables:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Create a `.env` file in `frontend/` with these values (get them from your
EmailJS dashboard under Email Services / Email Templates / Account).

---

## Running locally

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

---

## Hosting it on your domain

Since this is a static frontend with no backend or database, deployment is
simple — just a static host pointed at your domain.

| Piece | Recommended host | Why |
|---|---|---|
| Frontend (static build) | **Vercel** or **Netlify** | Free tier, auto-deploys from GitHub, trivial custom domain + HTTPS setup |

### Step by step

1. **Push the code to GitHub.**
2. **Deploy the frontend**
   - Vercel: New Project → import the repo → set root directory to `frontend/`.
   - Build command `npm run build`, output directory `dist` (Vercel usually
     detects this automatically for Vite).
   - Add your EmailJS environment variables (`VITE_EMAILJS_SERVICE_ID`,
     `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) in the Vercel
     project settings.
3. **Point your domain at it**
   - In Vercel/Netlify: Project Settings → Domains → add your domain, e.g.
     `cedarstonelb.com`.
   - They'll show you exactly what DNS records to add (usually an `A` record
     or `CNAME`) — add those in your domain registrar's DNS settings.
   - HTTPS certificates are issued automatically once DNS propagates (can
     take up to 24h, usually much faster).

That's the whole path from code to a live site on your domain.
