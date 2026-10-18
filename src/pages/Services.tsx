import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { FAQ, Check } from '@/components/Cards';
import { Picture } from '@/components/Picture';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';

const c = copy('services');
const [lines, stages, life, faq, cta] = c.sections;
/** Delivery process assembled only from capabilities the existing site already describes. */
const process = [
  ['Consult', 'Risk advice, threat and vulnerability assessment, security master planning.'],
  ['Survey', 'Existing systems, coverage gaps, power and network routes recorded on site.'],
  ['Design', 'Drawings, device schedules and specifications, with interfaces worked out on paper.'],
  ['Supply', 'Equipment options costed side by side, ready for procurement or board approval.'],
  ['Install & integrate', 'Our own engineers install and configure, including civils, containment and cabling.'],
  ['Test & commission', 'Commissioning with as little disruption to operations as possible.'],
  ['Train & hand over', 'Operators trained, as-built records, drawings and licences handed over.'],
  ['Support & lifecycle', 'Preventive and corrective maintenance under SLAs, with replacement planning.'],
];
export default function Services() {
  usePageMeta(c.title, c.description, '/services');
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Services' }]} primary={{ label: 'Request a Consultation', to: '/contact' }} />
      <Section>
        <SectionHeading eyebrow="Service lines" title={lines.h2} lead={lines.intro} />
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {lines.items.map((i, n) => <article key={i.h} className="reveal bg-white p-8"><span className="font-mono text-sm text-brand">0{n + 1}</span><h3 className="mt-3 text-h3 font-semibold">{i.h}</h3><p className="mt-3 leading-relaxed text-steel">{i.p}</p></article>)}
        </div>
      </Section>
      <Section tone="dark">
        <SectionHeading eyebrow="End-to-end delivery" title="From first survey to end of life" lead="Eight stages, one accountable team." />
        <ol className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([h, p], i) => (
            <li key={h} className="reveal bg-ink p-6"><span className="font-mono text-sm text-brand-light">{String(i + 1).padStart(2, '0')}</span><h3 className="mt-3 text-lg font-semibold text-white">{h}</h3><p className="mt-2 text-sm leading-relaxed text-white/65">{p}</p></li>
          ))}
        </ol>
      </Section>
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div><SectionHeading eyebrow="Your project" title={stages.h2} lead={stages.intro} />
            <ol className="mt-10 space-y-8">{stages.items.map((i, n) => <li key={i.h} className="reveal grid grid-cols-[3rem_1fr] gap-2"><span className="text-3xl font-semibold text-brand">{n + 1}</span><div><h3 className="text-h3 font-semibold">{i.h}</h3><p className="mt-1 text-steel">{i.p}</p></div></li>)}</ol></div>
          <Picture id={stages.images![0].id} alt={stages.images![0].alt} className="reveal aspect-[4/5] w-full" />
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Maintenance & support" title={life.h2} lead={c.sections[2].intro || undefined} />
          <ul className="mt-8 space-y-4 text-lg">{life.bullets.map((b) => <Check key={b}>{b}</Check>)}</ul></div>
          <div className="reveal border border-line bg-white p-8"><p className="text-sm text-steel">Maintenance options</p><p className="mt-2 text-lg font-medium">Preventive, corrective and comprehensive maintenance, remote and on-site, under contract.</p><Link to="/contact" className="btn btn-outline mt-6">Discuss Your Requirements</Link></div></div>
      </Section>
      <Section>
        <SectionHeading eyebrow="FAQ" title={faq.h2} lead={faq.intro} />
        <div className="mt-10 max-w-4xl"><FAQ items={faq.items} /></div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}
