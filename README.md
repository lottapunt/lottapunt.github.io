# ShowAI — English website

A fully English, static and responsive website for `showai.eu`. It requires no paid CMS, database or hosting package.

## Before publishing

1. Open `assets/script.js`.
2. Replace `YOUR-EMAIL-HERE` with the email address visitors may use.
3. Open `privacy.html` and add the final email address, trading name and a concrete retention period.
4. Recheck all legal content against the official sources before publication.

## Preview locally

Open `index.html` in a browser.

## Publish free with GitHub Pages

1. Create a free GitHub account and a public repository, for example `showai-site`.
2. Upload every file and folder from this package to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Enter `www.showai.eu` under **Custom domain**.
6. In the Vimexx DNS panel, create a CNAME record:
   - Host/name: `www`
   - Target: `<your-github-username>.github.io`
7. Redirect `showai.eu` to `https://www.showai.eu` in Vimexx.
8. Enable **Enforce HTTPS** in GitHub Pages once available.

## Main files

- `index.html` — homepage
- `article-50.html` — Article 50 knowledge-base page
- `code-of-practice.html` — Code of Practice knowledge-base page
- `human-review.html` — human-review knowledge-base page
- `why-documentation-matters.html` — penalties, documentation and business-risk knowledge-base page
- `privacy.html` — privacy information
- `assets/styles.css` — design and responsive layout
- `assets/script.js` — mobile navigation and contact form
- `assets/favicon.svg` — logo/favicon
- `assets/og-image.png` — social sharing image
- `CNAME` — custom domain setting for GitHub Pages

## Cookies and analytics

This version does not place tracking cookies and does not use analytics. Update the privacy and cookie information before adding either.


## Knowledge base update — 13 July 2026

This version adds:

- `learn.html`: a dedicated knowledge-base landing page;
- a fully rewritten, source-based first publication: `article-50.html`;
- Article and breadcrumb structured data;
- canonical URLs, review dates and primary-source notes;
- homepage and site-wide navigation to the knowledge base;
- updated sitemap entries.

The first publication is titled **“What is Article 50 of the EU AI Act?”** and uses official EU sources only.
