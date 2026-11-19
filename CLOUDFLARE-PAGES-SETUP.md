# Third website: SEO Group Buy (seogroupbuy.in)

This is a **separate project**. Do not connect or modify repositories for seogbtools.com or seotoolsgroupbuy.us.

## Architecture
Original React components + styles are rendered by **Astro static prerendering**, with client hydration for animations/interactions. Pages CMS edits JSON in `content/products` and `content/pages`, and GitHub commits trigger Cloudflare Pages deploys.

## Deploy
1. Create a NEW GitHub repository for only this ZIP (for example `bilalfadi/seogroupbuy-in-astro-test`).
2. Cloudflare Workers & Pages > Create > Pages > Connect to Git > choose that repository.
3. Framework preset `Astro` (or None); build `npm run build`; output `dist`; branch `main`; root `/`.
4. Cloudflare environment `PUBLIC_PRODUCTION_INDEXABLE=false` (or omit it) on the preview deployment.
5. Verify `*.pages.dev` first. Do **not** point `seogroupbuy.in` to Pages until design, content and SEO are approved.
6. When actually migrating the original domain, set `PUBLIC_PRODUCTION_INDEXABLE=true`, build and then confirm canonical/sitemap/robots metadata.
7. Connect Pages CMS to the new GitHub repo. Its `.pages.yml` collections appear in the editor; edits trigger auto deploy via GitHub.

## Important verification limitations
This conversion has not been npm-installed or browser-tested in this workspace because npm registry DNS/network is unavailable. Check GitHub Actions or Cloudflare build logs, fix any runtime/compilation errors, then visually compare original pages at 1440px and 390px and audit all 77 sitemap routes. Do not claim a pixel-perfect match without that verification.

Never use a Git `--force` push. Existing checkout URLs are intentionally preserved from source until separately verified against live purchase pages.

No lockfile is included because the source lockfile predates Astro dependencies. Cloudflare Pages should install with npm install, not npm ci.
