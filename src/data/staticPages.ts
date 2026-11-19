import {getCompetitorMeta} from './competitorMeta';
const cmsPages = import.meta.glob('../../content/pages/*.json', { eager: true, import: 'default' }) as Record<string, Partial<StaticPage>>;
const cmsPageMap = Object.fromEntries(Object.values(cmsPages).map((p) => [p.slug, p]));
import {getPageParagraphs} from './staticPageContent';

export type StaticPage = {
  slug: string;
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  kind: 'static' | 'blog';
};

function page(
  slug: string,
  heading: string,
  description: string,
  kind: 'static' | 'blog',
): StaticPage {
  return {
    slug,
    heading,
    title: `${heading} | SEO Group Buy`,
    description,
    paragraphs: getPageParagraphs(slug, heading),
    kind,
  };
}

const staticPagesRaw: StaticPage[] = [
  page(
    'about-us',
    'About Us',
    'Learn about SEO Group Buy — affordable premium SEO and marketing tools for freelancers and agencies.',
    'static',
  ),
  page(
    'contact-us',
    'Contact Us',
    'Contact SEO Group Buy for tool access, billing, or support questions.',
    'static',
  ),
  page('contact', 'Contact', 'Get in touch with the SEO Group Buy team.', 'static'),
  page(
    'privacy-policy',
    'Privacy Policy',
    'How SEO Group Buy collects, uses, and protects your personal data.',
    'static',
  ),
  page('privacy', 'Privacy', 'Privacy information for SEO Group Buy users.', 'static'),
  page(
    'terms',
    'Terms of Service',
    'Terms of service for SEO Group Buy plans and tool access.',
    'static',
  ),
  page(
    'terms-and-conditions',
    'Terms and Conditions',
    'Terms and conditions for using SEO Group Buy.',
    'static',
  ),
  page(
    'refund-policy',
    'Refund Policy',
    'Refund policy for SEO Group Buy plans and tools.',
    'static',
  ),
  page(
    'affiliate',
    'Affiliate Program',
    'Join the SEO Group Buy affiliate program and earn commission.',
    'static',
  ),
  page('affliate', 'Affiliate', 'Affiliate information for SEO Group Buy partners.', 'static'),
  page('dmca', 'DMCA', 'DMCA notice information for SEO Group Buy.', 'static'),
  page(
    'dmca-complaint',
    'DMCA Complaint',
    'How to submit a DMCA complaint to SEO Group Buy.',
    'static',
  ),
  page(
    'themes-plugins',
    'Themes & Plugins',
    'Themes and plugins access via SEO Group Buy.',
    'static',
  ),
  page(
    'private-accounts',
    'Private Accounts',
    'Private tool accounts available through SEO Group Buy.',
    'static',
  ),
  page(
    'tools-limits',
    'Tool Usage Limits',
    'Learn about tool usage limits on SEO Group Buy.',
    'static',
  ),
  page(
    'blog/ahrefs-group-buy-guide',
    'Ahrefs Group Buy Guide',
    'Guide to Ahrefs group buy pricing, credits, and access.',
    'blog',
  ),
  page(
    'blog/best-group-buy-provider',
    'Best Group Buy Provider',
    'How to choose a reliable group buy provider.',
    'blog',
  ),
  page(
    'blog/group-buy-ai-tools',
    'Group Buy AI Tools',
    'Best group buy AI tools for writing, design, and video.',
    'blog',
  ),
  page(
    'blog/group-buy-seo-tools-guide',
    'Group Buy SEO Tools Guide',
    'Complete guide to group buy SEO tools and pricing.',
    'blog',
  ),
  page(
    'blog/semrush-group-buy-guide',
    'SEMrush Group Buy Guide',
    'Guide to SEMrush group buy access and features.',
    'blog',
  ),
];

export const staticPages: StaticPage[] = staticPagesRaw.map((p) => {
  const meta = getCompetitorMeta(p.slug);
  const computed = meta ? {...p, title: meta.title, description: meta.description} : p;
  const changed = cmsPageMap[p.slug] || {};
  const {description: _sourceDescription, ...safeChanges} = changed;
  return {...computed, ...Object.fromEntries(Object.entries(safeChanges).filter(([k,v]) => v !== '' && v !== null)), description: (changed as any).seoDescription || computed.description};
});

export const staticPagesBySlug = Object.fromEntries(
  staticPages.map((page) => [page.slug, page]),
) as Record<string, StaticPage>;

export const blogPosts = staticPages.filter((p) => p.kind === 'blog');
