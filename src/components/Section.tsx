import type { ReactNode } from 'react';
type Tone = 'white' | 'mist' | 'dark' | 'brand';
const tones: Record<Tone, string> = { white: 'bg-white', mist: 'bg-mist', dark: 'bg-ink on-dark text-white/80', brand: 'bg-brand on-dark text-white' };
export function Section({ tone = 'white', children, className = '', id, label }: { tone?: Tone; children: ReactNode; className?: string; id?: string; label?: string }) {
  return <section id={id} aria-label={label} className={`${tones[tone]} section-y ${className}`}><div className="container-site">{children}</div></section>;
}
export function SectionHeading({ eyebrow, title, lead, className = '', as: Tag = 'h2' }: { eyebrow?: string; title: string; lead?: string; className?: string; as?: 'h1' | 'h2' }) {
  return (
    <div className={`reveal max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-h2 font-semibold">{title}</Tag>
      {lead && <p className="mt-4 text-lg leading-relaxed text-steel [.on-dark_&]:text-white/70">{lead}</p>}
    </div>
  );
}
