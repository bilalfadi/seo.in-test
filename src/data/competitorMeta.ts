import raw from './competitor-meta.json';

export type MetaEntry = {
  title: string;
  description: string;
};

type RawEntry = {
  slug: string;
  title: string;
  description: string;
};

/** Strip competitor site/brand names from meta copy — keep only SEO Group Buy branding. */
function normalizeBrand(text: string): string {
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
    .replace(/\+91\s*73826\s*68269/gi, '+44 7845 432224')
    .replace(/73826\s*68269/g, '447845432224')
    .replace(/\+1\s*520\s*563\s*6362/gi, '+44 7845 432224')
    .replace(/15205636362/g, '447845432224')
    .replace(/\+1\s*226\s*477\s*0722/gi, '+44 7845 432224')
    .replace(/12264770722/g, '447845432224')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const entries = raw as RawEntry[];

export const competitorMetaBySlug = Object.fromEntries(
  entries.map((entry) => [
    entry.slug,
    {
      title: normalizeBrand(entry.title),
      description: normalizeBrand(entry.description),
    },
  ]),
) as Record<string, MetaEntry>;

/** Fix truncated or broken scrape results */
const META_OVERRIDES: Partial<Record<string, MetaEntry>> = {
  'refund-policy': {
    title: 'Refund Policy — 48-Hour Money-Back',
    description:
      'SEO Group Buy refund policy: 100% refund within 48 hours of purchase if your group buy tools do not work as described.',
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions - SEO Group Buy',
    description:
      'Terms and conditions for using SEO Group Buy — account rules, payments, refunds, and acceptable use.',
  },
  'privacy-policy-az': {
    title: 'Privacy Policy - SEO Group Buy',
    description:
      'How SEO Group Buy collects, uses, and protects your data — accounts, payments, cookies, and your privacy rights.',
  },
  'contact-us': {
    title: 'Contact SEO Group Buy — 24/7 Support on WhatsApp, Telegram & Email',
    description:
      'Questions about group buy SEO tools? Contact SEO Group Buy 24/7 on WhatsApp +44 7845 432224, live chat, Telegram or support@seogroupbuy.in.',
  },
};

export function getCompetitorMeta(slug: string, fallback?: MetaEntry): MetaEntry | undefined {
  const hit = META_OVERRIDES[slug] ?? competitorMetaBySlug[slug];
  if (hit?.title && hit?.description) return hit;
  return fallback;
}
