import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';
import { solutions, footerExplore } from '@/data/site';
import { CONTACT_EMAIL } from '@/utils/content';
const col = 'text-sm text-white/70 hover:text-white';
export function Footer() {
  return (
    <footer className="on-dark bg-ink text-white/70">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.2fr_1.3fr_1fr_1fr]">
        <div>
          <Logo className="w-44" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">Intelligent security and integration across the Middle East, Africa and Eastern Europe. Turnkey design, installation and lifecycle support.</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/50">Offices</p>
          <ul className="mt-2 space-y-3 text-sm">
            <li><strong className="block font-medium text-white">United Arab Emirates</strong></li>
            <li><strong className="block font-medium text-white">Zimbabwe</strong></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-white hover:underline"><Mail size={16} aria-hidden="true" />{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
        <nav aria-label="Solutions">
          <h2 className="mb-4 text-sm font-semibold text-white">Solutions</h2>
          <ul className="space-y-2.5">{solutions.map((s) => <li key={s.slug}><Link className={col} to={`/solutions/${s.slug}`}>{s.name}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="mb-4 text-sm font-semibold text-white">Company</h2>
          <ul className="space-y-2.5">
            {[['Who We Are', '/who-we-are'], ['Company Story', '/who-we-are/company-story'], ['Vision', '/who-we-are/vision'], ['Leadership & Board', '/who-we-are/leadership-board'], ['Why Solomon Radclyffe', '/who-we-are/why-solomon-radclyffe']].map(([l, h]) => <li key={h}><Link className={col} to={h}>{l}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Explore">
          <h2 className="mb-4 text-sm font-semibold text-white">Explore</h2>
          <ul className="space-y-2.5">{footerExplore.map((l) => <li key={l.href}><Link className={col} to={l.href}>{l.label}</Link></li>)}</ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Solomon Radclyffe. All rights reserved.</p>
          <ul className="flex gap-6"><li><Link className="hover:text-white" to="/privacy-policy">Privacy Policy</Link></li><li><Link className="hover:text-white" to="/terms-of-use">Terms of Use</Link></li></ul>
        </div>
      </div>
    </footer>
  );
}
