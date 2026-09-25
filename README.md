# DriveZone Nexus: GitHub Pages site

## Deploy
1. Upload everything in this folder (including `CNAME` and `.nojekyll`) to the root of your GitHub repo.
2. Repo > Settings > Pages > Deploy from branch `main` / root.
3. At your domain registrar, point `drivezone.nexus` to GitHub Pages (A records 185.199.108-111.153, or a CNAME for `www`).
4. Tick "Enforce HTTPS" once the certificate is issued.
5. Submit `https://drivezone.nexus/sitemap.xml` in Google Search Console.

## Before launch
- Social links: search `drivezonenexus` in all .html files and replace with your real profile URLs (Facebook, Instagram, X, YouTube).

## Editing
- Styles: `assets/site.css` · Scripts and affiliate links used in search/fit check: `assets/main.js`
- After CSS/JS changes, bump `?v=20260925` in the HTML files so browsers load the new version.
