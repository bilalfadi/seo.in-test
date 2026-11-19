import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(__dirname, '../src/data/competitor-meta.json');

/** Strip competitor site/brand names from meta copy — keep only SEO Group Buy branding. */
export function stripCompetitorBrands(text) {
  return text
    .replace(/azadseo\.com/gi, 'seogroupbuy.in')
    .replace(/toolzbuy\.com/gi, 'seogroupbuy.in')
    .replace(/digitavision\.com/gi, 'seogroupbuy.in')
    .replace(/support@toolzbuy\.com/gi, 'support@seogroupbuy.in')
    .replace(/ToolzBuy/gi, 'SEO Group Buy')
    .replace(/DigitaVision/gi, 'SEO Group Buy')
    .replace(/Azad\s*Seo\s*Tools/gi, 'SEO Group Buy')
    .replace(/AzadSeo/gi, 'SEO Group Buy')
    .replace(/Azadseo/gi, 'SEO Group Buy')
    .replace(/SEO Group Buy\.com/gi, 'seogroupbuy.in')
    .replace(/support@SEO Group Buy\.com/gi, 'support@seogroupbuy.in')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const BRAND_RE =
  /toolz\s*buy|digitavision|azad\s*seo|azadseo(?:\.com)?|toolzbuy(?:\.com)?|digitavision(?:\.com)?/gi;

const rawText = fs.readFileSync(jsonPath, 'utf8').replace(/^\uFEFF/, '');
const raw = JSON.parse(rawText);

for (const entry of raw) {
  entry.title = stripCompetitorBrands(entry.title);
  entry.description = stripCompetitorBrands(entry.description);
}

const leaks = [];
for (const entry of raw) {
  for (const field of ['title', 'description']) {
    BRAND_RE.lastIndex = 0;
    if (BRAND_RE.test(entry[field])) {
      leaks.push({slug: entry.slug, field, value: entry[field]});
    }
  }
}

if (leaks.length) {
  console.error('Still found competitor brands:', leaks);
  process.exit(1);
}

fs.writeFileSync(jsonPath, JSON.stringify(raw, null, 4) + '\n', 'utf8');
console.log(`Sanitized ${raw.length} meta entries in competitor-meta.json`);
