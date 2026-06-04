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

## Deploy to GitHub Pages (go live)

### 1. Enable GitHub Pages (one-time, in the browser)

1. Open **https://github.com/Ramon-Puente/ramon-kenric-site/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Save. The workflow in `.github/workflows/deploy-github-pages.yml` runs on every push to `main`.

### 2. Trigger the first deploy

Push to `main` (or run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**).

When the workflow finishes, the site is published. Default URL:

**https://ramon-puente.github.io/ramon-kenric-site/**

### 3. Custom domain `ramon.kenriccompany.com` (recommended)

The repo includes `public/CNAME` so the built site advertises your domain.

1. On the same **Pages** settings page, under **Custom domain**, enter: `ramon.kenriccompany.com` → **Save**.
2. In **Cloudflare** (DNS for `kenriccompany.com`), add:
   - **Type:** `CNAME`
   - **Name:** `ramon`
   - **Target:** `ramon-puente.github.io`
   - **Proxy status:** DNS only (grey cloud) until GitHub shows the domain as verified; you can enable proxy later if needed.
3. Wait a few minutes for DNS and GitHub’s HTTPS certificate (check **Pages** settings for a green check).

Live URL: **https://ramon.kenriccompany.com**

### 4. Check deployment status

- **Actions:** https://github.com/Ramon-Puente/ramon-kenric-site/actions  
- Green check on **Deploy to GitHub Pages** = live.

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
