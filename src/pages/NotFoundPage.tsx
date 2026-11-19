import {Home} from 'lucide-react';
import {Link} from 'react-router-dom';
import {usePageSeo} from '../hooks/usePageSeo';

export function NotFoundPage() {
  usePageSeo({
    title: 'Page not found | SEO Group Buy',
    description: 'This page could not be found.',
    path: '/',
    robots: 'noindex, follow',
    omitCanonical: true,
  });

  return (
    <main className="flex-grow px-4 pt-28 pb-20">
      <div className="container mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">404</p>
        <h1 className="mt-3 text-3xl font-bold font-display md:text-4xl">Page not found</h1>
        <p className="mt-4 text-zinc-400">
          This URL is not part of our site. Use the home page or the menu to continue.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700"
        >
          <Home className="h-5 w-5" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
