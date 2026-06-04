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

Paste your Stripe Payment Link URL into the empty `href=""` on the Purchase Template button.

### Post-purchase redirect (Stripe Dashboard)

1. **Payment Links** → edit your product link → **After payment**
2. Select **Don't show confirmation page**
3. **Redirect URL:**

   ```
   https://ramon.kenriccompany.com/success/
   ```

4. Save

### Excel workbook (required before downloads work)

Place your sanitized file at:

```
public/assets/dl_7f3b9c2a_x91/13_week_cashflow_df761a.xlsx
```

Then commit, push, and redeploy. Success page: `https://ramon.kenriccompany.com/success/`

---

## Deploy (easiest: Cloudflare Pages)

Connect GitHub once; every `git push` to `main` updates the live site. No extra branches or deploy commands.

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Choose repo **Ramon-Puente/ramon-kenric-site**
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variable:** `NODE_VERSION` = `20`
4. **Save and Deploy** — wait for the first build to finish
5. **Custom domains** → add `ramon.kenriccompany.com` (DNS is automatic if the domain is already on Cloudflare)

**Later updates:** edit code locally → `git push` → Cloudflare rebuilds automatically.

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
