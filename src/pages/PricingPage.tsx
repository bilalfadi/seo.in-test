import {Link} from 'react-router-dom';
import {Pricing} from '../components/Pricing';
import {usePageSeo} from '../hooks/usePageSeo';

export function PricingPage() {
  usePageSeo({
    title: 'Pricing Plans',
    description:
      'Compare SEO Group Buy plans — Lite $10/mo, Growth Starter $15/mo, Ahrefs Power Bundle $25/mo, Writer Toolkit, and more. Affordable group buy SEO tool access.',
    path: '/pricing',
  });

  return (
    <main className="flex-grow bg-black pt-20">
      <div className="container mx-auto px-4 pt-10">
        <p className="mb-4 text-sm text-zinc-500">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">Pricing</span>
        </p>
        <h1 className="text-4xl font-bold font-display md:text-5xl">Pricing Plans</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Choose the plan that fits your work. Pay monthly, keep it simple, and upgrade anytime as your
          projects grow.
        </p>
      </div>
      <Pricing showIntro={false} />
    </main>
  );
}
