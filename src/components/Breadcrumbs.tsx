import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        {trail.map((t, i) => (
          <li key={t.label} className="flex items-center gap-1.5">
            <ChevronRight size={14} aria-hidden="true" />
            {t.href && i < trail.length - 1 ? <Link to={t.href} className="hover:text-white">{t.label}</Link> : <span aria-current="page" className="text-white">{t.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
