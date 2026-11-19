import raw from '../src/data/competitor-meta.json' with {type: 'json'};

const BRAND_RE =
  /toolz\s*buy|digitavision|azad\s*seo|azadseo(?:\.com)?|toolzbuy(?:\.com)?|digitavision(?:\.com)?/gi;

function normalizeBrand(text) {
  return text
    .replace(/ToolzBuy/g, 'SEO Group Buy')
    .replace(/Toolzbuy/g, 'SEO Group Buy')
    .replace(/Azad Seo Tools/gi, 'SEO Group Buy')
    .replace(/AzadSeo Tools/gi, 'SEO Group Buy')
    .replace(/DigitaVision/g, 'SEO Group Buy')
    .replace(/Azadseo\.com/gi, 'seogroupbuy.in')
    .replace(/support@SEO Group Buy\.com/gi, 'support@seogroupbuy.in')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const issues = [];
for (const entry of raw) {
  const title = normalizeBrand(entry.title);
  const description = normalizeBrand(entry.description);
  if (BRAND_RE.test(title)) {
    issues.push({slug: entry.slug, field: 'title', value: title});
    BRAND_RE.lastIndex = 0;
  }
  if (BRAND_RE.test(description)) {
    issues.push({slug: entry.slug, field: 'description', value: description.slice(0, 140)});
    BRAND_RE.lastIndex = 0;
  }
}

if (issues.length) {
  console.log('LEFTOVER COMPETITOR BRANDS:', JSON.stringify(issues, null, 2));
  process.exit(1);
}
console.log(`OK — ${raw.length} meta entries, no competitor site names after normalize.`);
