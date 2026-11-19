# Third website: seogroupbuy.in — current handoff

Target: a **new independent GitHub repository** `bilalfadi/seogroupbuy-in-astro-test`, with Cloudflare Pages Git integration, Astro static output and Pages CMS.

**Current deployment state:** no new GitHub repository exists and no Cloudflare Pages deployment has been created or confirmed. The first two sites and original live website have not been modified.

**Source checks:** 52 original product entries, 20 additional page/blog entries, 77 URLs exactly matching the preserved sitemap. Original React components, CSS and assets remain present in the Astro project; 4 original duplicate checkout-ID pairs are unchanged on purpose (no fabricated replacements).

**Build status:** not yet validated, because npm/Astro dependencies were unavailable in this execution environment. CI workflow `.github/workflows/verify-cloudflare-build.yml` will run on push and verify `npm run build`, `dist` HTML, server-rendered H1, SEO tags and all 77 expected routes.

## One-time repository setup
1. Create an **empty** new GitHub repository named `seogroupbuy-in-astro-test` under `bilalfadi` (do not initialize README/license). This operation must be performed with GitHub account permissions; the available connector does not support new-repository creation.
2. Upload/push the **contents of this project directory** to `main` (not its outer folder). Keep both other websites/repositories untouched.
3. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git, select the **new** repository. Set build command `npm run build`, output directory `dist`, branch `main`, Node 22, and build variable `PUBLIC_PRODUCTION_INDEXABLE=false`.
4. Confirm Actions build verification succeeds, inspect Cloudflare build logs and `*.pages.dev` preview. Do not point the live domain until screenshot/URL/SEO comparisons are complete.
5. Pages CMS uses `.pages.yml` and edits `content/` JSON in the new repository. Authorize this new repository in Pages CMS separately.

## Strict migration rules
- Preserve original design, text, paths, product IDs, checkout links, brand assets and Google verification. Do not treat a successful build as pixel-perfect visual verification.
- The canonical origin stays `https://seogroupbuy.in` as supplied. Preview builds are `noindex,nofollow`. Production indexing requires an explicit approved release, not a silent variable change.
- No automatic domain cutover; no changes to either earlier website.
