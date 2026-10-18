import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { SolutionCard, Check, Steps } from '@/components/Cards';
import { Picture } from '@/components/Picture';
import { Icon } from '@/components/Icon';
import { Placeholder } from '@/components/Placeholder';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';
import { solutions, solutionBySlug, industries } from '@/data/site';
import { IMG } from '@/data/images';

export function SolutionsIndex() {
  const c = copy('solutions');
  usePageMeta(c.title, c.description, '/solutions');
  const [pick, talk, flow, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Solutions' }]} primary={{ label: 'Speak to an Expert', to: '/contact' }} />
      <Section>
        <SectionHeading title={pick.h2} lead={pick.intro} />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">{solutions.map((s, i) => <div key={s.slug} className="bg-white"><SolutionCard s={s} index={i} /></div>)}</div>
      </Section>
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div><SectionHeading eyebrow="Integration" title={talk.h2} lead={talk.intro} />
            <ul className="mt-8 space-y-4 text-lg">{talk.bullets.map((b) => <Check key={b}>{b}</Check>)}</ul></div>
          <Picture id={IMG.controlRoom} alt={talk.images?.[0]?.alt ?? ''} className="reveal aspect-[4/3] w-full" />
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Delivery" title={flow.h2} lead={flow.intro} />
        <div className="mt-10"><Steps steps={flow.items} /></div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}

export function SolutionPage() {
  const { slug = '' } = useParams();
  const s = solutionBySlug(slug);
  if (!s) return <Navigate to="/404" replace />;
  const c = copy(`solutions/${slug}`);
  const [main, cta] = c.sections;
  const talk = copy('solutions').sections[1];
  const lines = copy('services').sections[0].items;
  const sectors = industries.filter((i) => s.sectors.includes(i.id));
  usePageMeta(c.title, c.description, `/solutions/${slug}`);
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={s.image} alt={c.heroImages![0].alt} eyebrow={s.name}
        trail={[{ label: 'Solutions', href: '/solutions' }, { label: s.name }]} primary={{ label: 'Request a Consultation', to: '/contact' }} secondary={{ label: 'All solutions', to: '/solutions' }} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="text-h2 font-semibold">{main.h2}</h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">{main.intro}</p>
            <div className="mt-6 flex items-start gap-4 border-l-2 border-brand bg-mist p-5"><Icon name={s.icon} size={30} className="shrink-0 text-brand" /><p className="text-[0.95rem] text-ink-900"><strong className="font-semibold">Scope.</strong> {s.blurb}</p></div>
          </div>
          <div>
            <p className="eyebrow mb-5">What we design for</p>
            <ul className="divide-y divide-line border-y border-line">
              {main.items.map((i, n) => (
                <li key={i.h} className="reveal grid gap-2 py-7 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-sm text-brand">0{n + 1}</span><div><h3 className="text-h3 font-semibold">{i.h}</h3><p className="mt-2 leading-relaxed text-steel">{i.p}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Technical detail" title="Specifications and reference projects" />
            <Placeholder title={`${s.name}: technical capabilities`} className="mt-8" />
          </div>
          <div>
            <SectionHeading eyebrow="Sectors" title="Where this applies" />
            <ul className="reveal mt-8 divide-y divide-line border-y border-line bg-white">
              {sectors.map((x) => <li key={x.id}><Link to="/industries" className="flex items-center gap-4 px-4 py-4 hover:bg-white/60"><Icon name={x.icon} size={24} className="text-brand" /><span className="font-medium">{x.name}</span><ArrowRight size={16} className="ml-auto text-steel-light" aria-hidden="true" /></Link></li>)}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div><SectionHeading eyebrow="Integration" title={talk.h2} lead={talk.intro} />
            <ul className="mt-6 space-y-4">{talk.bullets.map((b) => <Check key={b}>{b}</Check>)}</ul></div>
          <div><SectionHeading eyebrow="Delivery and support" title="One team from survey to lifecycle" />
            <ul className="reveal mt-6 space-y-5">{lines.map((l) => <li key={l.h}><h3 className="font-semibold">{l.h}</h3><p className="text-steel">{l.p}</p></li>)}</ul>
            <Link to="/services" className="link-arrow mt-6">Our services <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading eyebrow="Related" title="Related solutions" />
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {s.related.map((r) => { const rs = solutionBySlug(r)!; return <div key={r} className="bg-white"><SolutionCard s={rs} index={solutions.indexOf(rs)} /></div>; })}
        </div>
      </Section>
      <CTASection title={cta.h2} text={cta.intro} primary="Request a Consultation" />
    </>
  );
}
