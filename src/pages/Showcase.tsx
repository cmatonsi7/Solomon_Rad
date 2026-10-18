import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { Picture } from '@/components/Picture';
import { Placeholder } from '@/components/Placeholder';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { PartnerGrid } from '@/components/PartnerGrid';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';
import { clientNames } from '@/data/site';

export function Clients() {
  const c = copy('clients-projects'); usePageMeta(c.title, c.description, '/clients-projects');
  const [who, env, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Clients & Projects' }]} primary={{ label: 'Speak to an Expert', to: '/contact' }} />
      <Section>
        <SectionHeading eyebrow="Project categories" title={who.h2} lead={who.intro} />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{who.items.map((i) => <article key={i.h} className="reveal bg-white p-7"><h3 className="text-h3 font-semibold">{i.h}</h3><p className="mt-2 text-steel">{i.p}</p></article>)}</div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><SectionHeading eyebrow="Clients" title="Organisations we have worked with" lead="Names as previously published on this site; subject to client confirmation before logos are used." />
            <ul className="reveal mt-6 flex flex-wrap gap-2">{clientNames.map((n) => <li key={n} className="border border-line bg-white px-3.5 py-2 text-sm font-medium">{n}</li>)}</ul></div>
          <Placeholder title="verified client logos" />
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><Picture id={env.images![0].id} alt={env.images![0].alt} className="reveal aspect-[4/3] w-full" /><SectionHeading eyebrow="Environments" title={env.h2} lead={env.intro} /></div>
      </Section>
      <Section tone="mist">
        <SectionHeading eyebrow="Case studies" title="Selected projects" />
        <div className="mt-10 grid gap-6 md:grid-cols-2"><CaseStudyCard /><CaseStudyCard /></div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}

export function Partners() {
  const c = copy('technology-partners'); usePageMeta(c.title, c.description, '/technology-partners');
  const [cats, spec, plat, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Technology Partners' }]} primary={{ label: 'Discuss Your Requirements', to: '/contact' }} />
      <Section>
        <SectionHeading eyebrow="Technologies" title={cats.h2} lead={cats.intro} />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{cats.items.map((i) => <article key={i.h} className="reveal bg-white p-7"><h3 className="text-h3 font-semibold">{i.h}</h3><p className="mt-2 text-steel">{i.p}</p></article>)}</div>
      </Section>
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20"><Picture id={spec.images![0].id} alt={spec.images![0].alt} className="reveal aspect-[4/5] max-h-[30rem] w-full" /><SectionHeading eyebrow="Approach" title={spec.h2} lead={spec.intro} /></div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Platforms" title={plat.h2} lead={plat.intro} />
        <div className="mt-10"><PartnerGrid /></div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}
