# ShowAI multilingual website

This static GitHub Pages website is available in English, Dutch, German and French.

## Structure

- `/en/` English
- `/nl/` Dutch
- `/de/` German
- `/fr/` French
- `/assets/` shared styling, script, logo and social image
- root `index.html` redirects visitors based on browser language

## Publish on GitHub Pages

1. Back up the current repository.
2. Delete or replace the existing website files.
3. Upload the **contents** of this folder to the repository root.
4. Keep `CNAME` in the root; it contains `www.showai.eu`.
5. Commit directly to the `main` branch.
6. In Settings → Pages, keep `main` and `/(root)`.
7. Wait for the Pages deployment to finish.

## Contact

The contact form opens the visitor's email application and addresses the message to `contactshowai@gmail.com`. Change this in `assets/script.js` and in each language's `privacy.html` if needed.

## Editing

Each language has separate HTML files. Edit the matching file in each language folder to keep translations aligned. Shared visual changes belong in `assets/styles.css`.

## Legal note

The site contains general information and explicit disclaimers. Verify legal content and application dates periodically against the official sources linked in the Insights article.

## Founder section added

The four homepages now include a translated founder section with Lotta Punt's photo and personal story.

Before publishing, replace this placeholder LinkedIn URL in all four homepage files:

```text
https://www.linkedin.com/in/your-profile/
```

Files containing the placeholder:

- `en/index.html`
- `nl/index.html`
- `de/index.html`
- `fr/index.html`

The portrait is stored at `assets/lotta-punt.jpg`.
