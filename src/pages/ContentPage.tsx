import {Link} from 'react-router-dom';
import {usePageSeo} from '../hooks/usePageSeo';
import type {StaticPage} from '../data/staticPages';

type Props = {
  page: StaticPage;
};

export function ContentPage({page}: Props) {
  const path = `/${page.slug}`;
  usePageSeo({title: page.title, description: page.description, path});

  return (
    <main className="flex-grow bg-black pt-20">
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="mb-6 text-sm text-zinc-500">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {page.kind === 'blog' ? (
            <>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </>
          ) : null}
          <span className="mx-2">/</span>
          <span className="text-zinc-300">{page.heading}</span>
        </p>

        <h1 className="text-3xl font-bold font-display md:text-5xl">{page.heading}</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">{page.description}</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-400">
          {page.paragraphs.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
