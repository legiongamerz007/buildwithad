# BuildWithAD

Agency site — **https://buildwithad.dev**

Shopify stores, web apps, and AI development. Static HTML/CSS/JS, deployed via GitHub Pages.

## Local preview

```bash
cd "/Volumes/Data/Personal Data/buildwithad"
python3 -m http.server 8080
```

## Deploy

```bash
git add -A && git commit -m "Your message" && git push origin main
```

GitHub Pages rebuilds in 1–3 minutes on `main` → `buildwithad.dev`.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, services, featured work |
| `portfolio.html` | All 24 Shopify projects (data in `portfolio-data.js`) |
| `services.html` | Shopify, web, AI, MVPs |
| `about.html` | Adeel / BuildWithAD story |
| `contact.html` | Contact form (mailto) |
| `styles.css` | Design system |
| `main.js` | Nav, stats, form |
| `assets/portfolio/` | Compressed store screenshots |
