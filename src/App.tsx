import {Fragment} from 'react';
import {BrowserRouter, StaticRouter, Route, Routes} from 'react-router-dom';
import {SiteLayout} from './layouts/SiteLayout';
import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';
import {ProductPage} from './pages/ProductPage';
import {ContentPage} from './pages/ContentPage';
import {AllToolsPage} from './pages/AllToolsPage';
import {BlogIndexPage} from './pages/BlogIndexPage';
import {PricingPage} from './pages/PricingPage';
import {FAQPage} from './pages/FAQPage';
import {products} from './data/products';
import {staticPages} from './data/staticPages';

export default function App({initialPath = '/'}: {initialPath?: string}) {
  // Same original route tree, rendered using StaticRouter for Astro SSR.
  const routes = (
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="all-tools" element={<AllToolsPage />} />
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FAQPage />} />

          {products.map((product) => {
            const path =
              product.slug === 'screaming-frog-website-audit-tool'
                ? 'screaming-frog-website-audit-tool'
                : `tool/${product.slug}`;
            return (
              <Fragment key={product.slug}>
                <Route path={path} element={<ProductPage product={product} />} />
              </Fragment>
            );
          })}

          {staticPages.map((page) => (
            <Fragment key={page.slug}>
              <Route path={page.slug} element={<ContentPage page={page} />} />
            </Fragment>
          ))}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
  return typeof window === 'undefined'
    ? <StaticRouter location={initialPath}>{routes}</StaticRouter>
    : <BrowserRouter>{routes}</BrowserRouter>;

}
