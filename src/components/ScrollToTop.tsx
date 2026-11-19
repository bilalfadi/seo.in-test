import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/** Scroll to top on route change, or to #hash when present. */
export function ScrollToTop() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({behavior: 'smooth', block: 'start'});
          return true;
        }
        return false;
      };
      if (!scrollToHash()) {
        // Home sections may mount a tick later
        const t = window.setTimeout(scrollToHash, 50);
        return () => window.clearTimeout(t);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
