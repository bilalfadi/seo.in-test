import {Hero} from '../components/Hero';
import {LogoCloud} from '../components/LogoCloud';
import {PriceComparison} from '../components/PriceComparison';
import {AccessShowcase} from '../components/AccessShowcase';
import {WhyChoose} from '../components/WhyChoose';
import {ToolGrid} from '../components/ToolGrid';
import {SystemStatus} from '../components/SystemStatus';
import {Process} from '../components/Process';
import {Testimonials} from '../components/Testimonials';
import {Pricing} from '../components/Pricing';
import {FAQ} from '../components/FAQ';
import {usePageSeo} from '../hooks/usePageSeo';
import {DEFAULT_META} from '../seo/site';

export function HomePage() {
  usePageSeo({
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    path: DEFAULT_META.path,
  });

  return (
    <main className="flex-grow">
      <Hero />
      <LogoCloud />
      <PriceComparison />
      <AccessShowcase />
      <WhyChoose />
      <ToolGrid />
      <SystemStatus />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}
