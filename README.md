# BuildWithAD

Agency site for **buildwithad.dev** — Shopify stores, AI solutions, and web apps.

## Stack

Static HTML/CSS/JS — no build step. Hosted on **GitHub Pages** with custom domain.

## Local preview

```bash
cd "/Volumes/Data/Personal Data/buildwithad"
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)

Site is already configured:

| Setting | Value |
|---------|--------|
| Repo | [legiongamerz007/buildwithad](https://github.com/legiongamerz007/buildwithad) |
| Branch | `main` |
| Path | `/` (root) |
| Custom domain | `buildwithad.dev` (via `CNAME`) |
| Live URL | https://buildwithad.dev |

**To publish changes:**

```bash
cd "/Volumes/Data/Personal Data/buildwithad"
git add -A
git commit -m "Your message"
git push origin main
```

GitHub Pages rebuilds in **1–3 minutes**. Check: Repo → Settings → Pages → deployment status.

## Portfolio assets

Shopify screenshots live in `/Volumes/Data/Shopify Portfolio`. Compressed JPEGs are in `assets/portfolio/`. To refresh after adding new screenshots:

1. Add PNGs to the Shopify Portfolio folder
2. Update the `MAP` in a compress script or add entries to `portfolio-data.js`
3. Run `sips` resize (max width 960px JPEG) into `assets/portfolio/`
4. Commit and push

## DNS

`buildwithad.dev` should point to GitHub Pages:

- `A` records → GitHub Pages IPs (see GitHub docs), or
- `CNAME` `www` → `legiongamerz007.github.io`

The repo `CNAME` file contains `buildwithad.dev`.

## Contact

- Email: i.am.adeelee@gmail.com
- LinkedIn: https://www.linkedin.com/in/adeelahmad
