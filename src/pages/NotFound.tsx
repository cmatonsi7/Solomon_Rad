import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';
export default function NotFound() {
  usePageMeta('Page not found | Solomon Radclyffe', 'The page you requested could not be found.', '/404', true);
  return (
    <section className="on-dark bg-ink py-28"><div className="container-site max-w-2xl">
      <p className="eyebrow">Error 404</p><h1 className="mt-3 text-h1 font-semibold">We could not find that page</h1>
      <p className="mt-4 text-lg text-white/70">The address may have changed or been mistyped.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link to="/" className="btn btn-primary">Back to home</Link><Link to="/solutions" className="btn btn-secondary">Explore Solutions</Link><Link to="/contact" className="btn btn-secondary">Contact Our Team</Link></div>
    </div></section>
  );
}
