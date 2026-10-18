import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { Picture } from '@/components/Picture';
import { Icon } from '@/components/Icon';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';
import { industries, solutions } from '@/data/site';
import { IMG } from '@/data/images';

const c = copy('industries');
export default function Industries() {
  usePageMeta(c.title, c.description, '/industries');
  const [list, fail, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Industries' }]} primary={{ label: 'Discuss Your Requirements', to: '/contact' }} />
      <Section>
        <SectionHeading eyebrow="Sectors" title={list.h2} lead={list.intro} />
        <div className="mt-12 space-y-px bg-line">
          {industries.map((x, n) => {
            const rel = solutions.filter((s) => s.sectors.includes(x.id));
            return (
              <article key={x.id} id={x.id} className="reveal grid gap-6 bg-white py-8 md:grid-cols-[4rem_1fr_1.2fr] md:gap-10">
                <Icon name={x.icon} size={40} className="text-brand" />
                <div><p className="font-mono text-xs text-steel-light">0{n + 1}</p><h3 className="mt-1 text-h3 font-semibold">{x.name}</h3><p className="mt-2 leading-relaxed text-steel">{x.text}</p></div>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-steel-light">Relevant solutions</p>
                  <ul className="mt-3 flex flex-wrap gap-2">{rel.map((s) => <li key={s.slug}><Link to={`/solutions/${s.slug}`} className="inline-block border border-line px-3 py-1.5 text-sm hover:border-brand hover:text-brand">{s.name}</Link></li>)}</ul></div>
              </article>
            );
          })}
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Picture id={IMG.perimeter} alt={fail.images![0].alt} className="reveal aspect-[4/3] w-full" />
          <div><SectionHeading eyebrow="Risk" title={fail.h2} lead={fail.intro} /></div>
        </div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}
