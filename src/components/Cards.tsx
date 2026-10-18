import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Icon } from './Icon';
import type { Solution } from '@/data/site';

export function SolutionCard({ s, index, dark }: { s: Solution; index: number; dark?: boolean }) {
  return (
    <Link to={`/solutions/${s.slug}`} className={`reveal group flex h-full flex-col border p-6 transition-colors duration-200 ${dark ? 'border-white/10 hover:border-brand-light hover:bg-white/[0.04]' : 'border-line bg-white hover:border-brand'}`}>
      <div className="flex items-start justify-between">
        <Icon name={s.icon} size={34} className={dark ? 'text-brand-light' : 'text-brand'} />
        <span className={`font-mono text-xs ${dark ? 'text-white/60' : 'text-steel-light'}`}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={`mt-8 text-h3 font-semibold ${dark ? '!text-white' : ''}`}>{s.name}</h3>
      <p className={`mt-3 flex-1 text-[0.95rem] leading-relaxed ${dark ? 'text-white/65' : 'text-steel'}`}>{s.blurb}</p>
      <span className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${dark ? 'text-brand-light' : 'text-brand'}`}>Explore<ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
    </Link>
  );
}
export function FAQ({ items }: { items: { h: string; p: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((q) => (
        <details key={q.h} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
            {q.h}<span aria-hidden="true" className="text-2xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-steel">{q.p}</p>
        </details>
      ))}
    </div>
  );
}
export function Steps({ steps }: { steps: { h: string; p: string }[] }) {
  return (
    <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.h} className="reveal bg-white p-6">
          <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-3 text-h3 font-semibold">{s.h}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-steel">{s.p}</p>
        </li>
      ))}
    </ol>
  );
}
export function Check({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-brand" /><span>{children}</span></li>;
}
