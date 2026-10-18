import { MapPin } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { Placeholder } from '@/components/Placeholder';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';

export default function Where() {
  const c = copy('where-we-operate'); usePageMeta(c.title, c.description, '/where-we-operate');
  const [bases, reach, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Where We Operate' }]} primary={{ label: 'Speak to an Expert', to: '/contact' }} />
      <Section>
        <SectionHeading eyebrow="Our offices" title={bases.h2} lead={bases.intro} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {bases.items.map((i) => <article key={i.h} className="reveal border border-line p-8"><MapPin className="text-brand" aria-hidden="true" /><h3 className="mt-4 text-h3 font-semibold">{i.h}</h3><p className="mt-2 text-steel">{i.p}</p></article>)}
        </div>
        <Placeholder title="office addresses and phone numbers" className="mt-6" />
      </Section>
      <Section tone="dark">
        <SectionHeading eyebrow="Delivery regions" title={reach.h2} lead={reach.intro} />
        <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{reach.items.map((i, n) => <li key={i.h} className="reveal bg-ink p-7"><span className="font-mono text-sm text-brand-light">0{n + 1}</span><h3 className="mt-3 text-h3 font-semibold">{i.h}</h3><p className="mt-2 text-white/65">{i.p}</p></li>)}</ul>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}
