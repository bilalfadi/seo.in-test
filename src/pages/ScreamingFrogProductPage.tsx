import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';
import {motion} from 'motion/react';
import {usePageSeo} from '../hooks/usePageSeo';

import {productsBySlug} from '../data/products';

const BUY_NOW_HREF = productsBySlug['screaming-frog-website-audit-tool'].buyHref!;

const PAGE_PATH = '/screaming-frog-website-audit-tool';

const LOGO_SRC =
  'https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=128';

const META = {
  title: 'Screaming Frog Website Audit Tool for SEO Error Checks',
  description:
    'Scan your website with Screaming Frog to find SEO errors, review page data, fix crawl issues, improve internal links, and keep your site technically clean.',
};

const benefitRows = [
  {benefit: 'Fast Site Scanning', helps: 'Reviews many URLs in less time'},
  {benefit: 'Clear SEO Data', helps: 'Shows where website issues exist'},
  {benefit: 'Easier Fixing', helps: 'Helps clean broken links, redirects, and metadata'},
  {benefit: 'Better Structure', helps: 'Supports stronger internal linking and crawl flow'},
  {benefit: 'Useful Reporting', helps: 'Makes audit results easier to understand'},
] as const;

function SectionRule() {
  return <hr className="my-14 border-0 border-t border-white/10 md:my-16" />;
}

export function ScreamingFrogProductPage() {
  usePageSeo({title: META.title, description: META.description, path: PAGE_PATH});

  return (
    <main className="flex-grow bg-black pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 ring-1 ring-white/5">
              <div className="flex min-h-[280px] w-full items-center justify-center bg-gradient-to-b from-white/[0.06] to-transparent p-10 md:min-h-[320px]">
                <img
                  src={LOGO_SRC}
                  alt="Screaming Frog"
                  className="max-h-56 w-auto object-contain"
                  width={224}
                  height={224}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <a
              href={BUY_NOW_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex lg:hidden"
            >
              <Button className="h-12 w-full rounded-xl bg-emerald-600 text-base font-bold hover:bg-emerald-500">
                Buy Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight font-display md:text-4xl lg:text-[2.75rem]">
              Screaming Frog Website Audit Tool
            </h1>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight font-display text-white">$20</span>
                <span className="text-lg text-zinc-500">/month</span>
              </div>
              <span className="mb-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">
                or $110/year
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              Screaming Frog helps you scan websites, detect SEO issues, and improve technical page quality.
            </p>

            <div className="mt-8 hidden flex-col gap-3 lg:flex">
              <a href={BUY_NOW_HREF} target="_blank" rel="noopener noreferrer">
                <Button className="h-14 w-full rounded-xl bg-emerald-600 text-base font-bold hover:bg-emerald-500">
                  Buy Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:hidden">
              <a href={BUY_NOW_HREF} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 w-full rounded-xl bg-emerald-600 font-bold hover:bg-emerald-500">
                  Buy monthly
                </Button>
              </a>
              <a href={BUY_NOW_HREF} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-xl border-white/15 bg-white/5 font-bold hover:bg-white/10"
                >
                  Buy yearly
                </Button>
              </a>
            </div>
          </div>
        </div>

        <SectionRule />

        <section>
          <h2 className="text-2xl font-bold font-display md:text-3xl">Pricing &amp; Features</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <tr>
                  <th className="px-5 py-4">Plan</th>
                  <th className="px-5 py-4">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="text-zinc-300">
                  <td className="px-5 py-4 font-semibold text-white">Monthly</td>
                  <td className="px-5 py-4 text-zinc-400">$20 per month</td>
                </tr>
                <tr className="text-zinc-300">
                  <td className="px-5 py-4 font-semibold text-white">Yearly</td>
                  <td className="px-5 py-4 text-zinc-400">$110 per year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <tr>
                  <th className="px-5 py-4">Benefit</th>
                  <th className="px-5 py-4">How It Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {benefitRows.map((row) => (
                  <tr key={row.benefit} className="text-zinc-300">
                    <td className="px-5 py-4 font-semibold text-white">{row.benefit}</td>
                    <td className="px-5 py-4 text-zinc-400">{row.helps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center">
            <a href={BUY_NOW_HREF} target="_blank" rel="noopener noreferrer">
              <Button className="h-12 rounded-xl bg-emerald-600 px-8 text-base font-bold hover:bg-emerald-500">
                Buy Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        <SectionRule />

        <section>
          <motion.h2
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-2xl font-bold font-display md:text-3xl"
          >
            What Is Screaming Frog Website Audit Tool?
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
              <h3 className="text-lg font-bold font-display text-white">Website Scanning for SEO Errors</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Screaming Frog Website Audit Tool helps you scan your website and find SEO issues that are easy
                to miss manually. It can help you review broken links, page titles, meta descriptions,
                redirects, headings, image issues, and internal links in one place.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
              <h3 className="text-lg font-bold font-display text-white">Quick Review of Page Issues</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Instead of opening every page one by one, Screaming Frog gives you a faster way to review site
                problems. This helps you understand which pages need fixes and which SEO areas need more
                attention.
              </p>
            </article>
          </div>
        </section>

        <SectionRule />

        <section>
          <h2 className="text-2xl font-bold font-display md:text-3xl">
            Key Benefits of Screaming Frog Website Audit Tool
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Finds Website Problems Faster',
                body: 'Screaming Frog saves time by checking many website pages quickly. This makes it useful for SEO audits, website cleanup, and regular site health checks.',
              },
              {
                title: 'Makes SEO Cleanup Easier',
                body: 'The tool gives clear data about common SEO problems. You can use this information to fix broken pages, missing metadata, redirect issues, and weak internal linking more easily.',
              },
              {
                title: 'Helps Improve Page Quality',
                body: 'Screaming Frog helps improve overall page quality by showing what needs to be cleaned, updated, or optimized.',
              },
            ].map(({title, body}) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
                <h3 className="text-lg font-bold font-display text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <SectionRule />

        <section>
          <h2 className="text-2xl font-bold font-display md:text-3xl">
            Why Screaming Frog Is Useful for Website Audits
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
              <h3 className="text-lg font-bold font-display text-white">Clear Crawl Information</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Screaming Frog gives useful crawl information that helps you understand your website better. You
                can see errors, weak pages, and technical issues without guessing.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
              <h3 className="text-lg font-bold font-display text-white">Better Technical SEO Planning</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                With clear audit data, you can plan SEO fixes in a better order. This helps improve website
                structure, crawl quality, and technical performance over time.
              </p>
            </article>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Screaming Frog Website Audit Tool',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Windows, macOS, Linux',
            description: META.description,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '20',
              highPrice: '110',
              offerCount: 2,
            },
          }),
        }}
      />
    </main>
  );
}
