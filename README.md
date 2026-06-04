# Kenric Company — ramon.kenriccompany.com

Single-page marketing & e-commerce site for Kenric Company.  
Built with **Next.js 15** (static export) + **Tailwind CSS**, deployed on **Cloudflare Pages**.

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

---

## Adding Your Product Image

Drop your product box art file into:

```
public/13-week-cashflow-product-box.png
```

The site loads this file from the `public/` folder.

---

## Stripe Payment Link

In `app/page.tsx`, find the **"Purchase Template"** button:

```tsx
<a href="" className="btn-enterprise w-full" ...>
  Purchase Template — $150.00
```

Paste your Stripe Payment Link URL into the empty `href=""`.

---

## Build & Deploy to Cloudflare Pages

### 1. Connect the GitHub repo in Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**
2. Connect to GitHub → select `Ramon-Puente/ramon-kenric-site`
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `20` (set under Environment Variables as `NODE_VERSION=20`)

### 2. Custom Domain

In Cloudflare Pages → your project → **Custom domains** → Add `ramon.kenriccompany.com`.  
Cloudflare will auto-provision an SSL certificate.

### 3. Manual Deploy (optional, via Wrangler CLI)

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name ramon-kenric-site
```

---

## Project Structure

```
.
├── app/
│   ├── globals.css       # Tailwind base + component classes
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Full single-page site
├── public/
│   └── 13-week-cashflow-product-box.png
├── next.config.ts        # Static export config
├── tailwind.config.ts
├── wrangler.toml         # Cloudflare Pages config
└── package.json
```
