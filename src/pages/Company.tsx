import { Link } from 'react-router-dom';
import { ArrowRight, UserRound } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { Steps, Check } from '@/components/Cards';
import { Picture } from '@/components/Picture';
import { Placeholder } from '@/components/Placeholder';
import { CTASection } from '@/components/CTASection';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy } from '@/utils/content';
import { stats } from '@/data/site';
import { IMG } from '@/data/images';

const trail = (l: string) => [{ label: 'Who We Are', href: '/who-we-are' }, { label: l }];
export function WhoWeAre() {
  const c = copy('who-we-are'); usePageMeta(c.title, c.description, '/who-we-are');
  const [, story, team, cta] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages![0].id} alt={c.heroImages![0].alt} trail={[{ label: 'Who We Are' }]} primary={{ label: 'Speak to an Expert', to: '/contact' }} />
      <section aria-label="Company facts" className="border-b border-line bg-mist"><dl className="container-site grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.filter((s) => s.verified).map((s) => <div key={s.label} className="px-0 py-8 sm:px-8 first:sm:pl-0"><dd className="text-4xl font-semibold">{s.value}</dd><dt className="mt-1 text-sm text-steel">{s.label}</dt></div>)}</dl></section>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div><SectionHeading eyebrow="Our story" title={story.h2} lead={story.intro} />
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/who-we-are/company-story" className="link-arrow">Company story <ArrowRight size={16} aria-hidden="true" /></Link><Link to="/who-we-are/why-solomon-radclyffe" className="link-arrow ml-4">Why Solomon Radclyffe <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
          <Picture id={IMG.serverRoom} alt={story.images![0].alt} className="reveal aspect-[4/5] max-h-[32rem] w-full" />
        </div>
      </Section>
      <Section tone="mist"><SectionHeading eyebrow="Delivery" title={team.h2} lead={team.intro} /><div className="mt-10"><Steps steps={team.items} /></div></Section>
      <CTASection title={cta.h2} text={cta.intro} />
    </>
  );
}

export function CompanyStory() {
  const c = copy('who-we-are/company-story'); usePageMeta(c.title, c.description, '/who-we-are/company-story');
  const w = copy('who-we-are').sections;
  return (
    <>
      <Hero title="Company story" lead="From RGS Global Security in 2007 to a multi-continent security integrator with offices in the UAE and Zimbabwe." image={IMG.skyline} alt="Nighttime skyline beside a waterfront, with illuminated towers and curving highways filled with light trails." trail={trail('Company Story')} />
      <Section>
        <ol className="mx-auto max-w-3xl border-l-2 border-brand pl-8">
          {[['2007', 'Founded in the UAE as RGS Global Security.'], ['2010', 'Expansion into Africa as RGS Africa.'], ['Today', w[1].intro.split('. ').slice(-1)[0]]].map(([y, t]) => (
            <li key={y} className="reveal relative pb-10 last:pb-0"><span className="absolute -left-[2.6rem] top-1 h-3 w-3 bg-brand" aria-hidden="true" /><p className="font-mono text-sm text-brand">{y}</p><p className="mt-1 text-xl text-ink">{t}</p></li>
          ))}
        </ol>
      </Section>
      <Section tone="mist"><div className="grid gap-8 lg:grid-cols-2"><Placeholder title="fuller company history" /><Placeholder title="milestones and project history" /></div></Section>
      <CTASection title="Tell us what you are protecting" text="A single conversation is usually enough to tell you whether we are the right integrator for the site." />
    </>
  );
}

export function Vision() {
  const c = copy('who-we-are/vision'); usePageMeta(c.title, c.description, '/who-we-are/vision');
  const talk = copy('solutions').sections[1];
  return (
    <>
      <Hero title="Our vision" lead="The thinking behind intelligent integration: one coordinated security picture instead of disconnected systems." image={IMG.consoles} alt="Security operations room with consoles facing a large video wall." trail={trail('Vision')} />
      <Section><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Integration" title={talk.h2} lead={talk.intro} /><ul className="mt-8 space-y-4 text-lg">{talk.bullets.map((b) => <Check key={b}>{b}</Check>)}</ul></div></Section>
      <Section tone="mist"><div className="mx-auto max-w-3xl"><Placeholder title="formal vision and mission statement" /></div></Section>
      <CTASection title="Discuss Your Requirements" text="Bring a drawing, an address or a system you have inherited." />
    </>
  );
}

export function Leadership() {
  const c = copy('who-we-are/leadership-board'); usePageMeta(c.title, c.description, '/who-we-are/leadership-board');
  return (
    <>
      <Hero title="Leadership & board" lead="A privately held group with a global board of 50+ years' combined experience." image={IMG.meeting} alt="Three professionals discuss documents and a laptop around a table in a bright glass-walled office." trail={trail('Leadership & Board')} />
      <Section>
        <SectionHeading eyebrow="Board and leadership" title="The people accountable for delivery" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="border border-line bg-white">
              <div className="flex aspect-[4/5] items-center justify-center bg-mist text-steel-light"><UserRound size={64} strokeWidth={1} aria-hidden="true" /><span className="sr-only">Photo to be supplied</span></div>
              <div className="p-5"><p className="font-semibold text-steel">Name to be supplied</p><p className="text-sm text-steel-light">Title to be supplied</p><p className="mt-3 text-sm text-steel-light">Verified biography to be supplied.</p></div>
            </li>
          ))}
        </ul>
        <Placeholder title="leadership and board profiles" className="mt-8" />
      </Section>
      <CTASection title="Speak to an Expert" text="You will hear back from the team that would deliver the work." />
    </>
  );
}

export function Why() {
  const c = copy('who-we-are/why-solomon-radclyffe'); usePageMeta(c.title, c.description, '/who-we-are/why-solomon-radclyffe');
  const sv = copy('services'); const faq = sv.sections[3].items;
  const reasons = [
    ['Self-financed and privately held', 'One privately held group and one board, with one standard of delivery across every office.'],
    ['Vendor independent', faq[1].p],
    ['Accountable across the lifecycle', sv.sections[0].intro],
    ['Engineers from the first conversation', faq[3].p],
  ];
  return (
    <>
      <Hero title="Why Solomon Radclyffe" lead="Self-financed, vendor-independent and accountable across the full lifecycle: the case for appointing us as your systems integrator." image={IMG.fieldTeam} alt="Two maintenance workers in navy uniforms examine a tablet inside an unfinished building." trail={trail('Why Solomon Radclyffe')} primary={{ label: 'Request a Consultation', to: '/contact' }} />
      <Section><div className="grid gap-px border border-line bg-line md:grid-cols-2">{reasons.map(([h, p], n) => <article key={h} className="reveal bg-white p-8"><span className="font-mono text-sm text-brand">0{n + 1}</span><h2 className="mt-3 text-h3 font-semibold">{h}</h2><p className="mt-3 leading-relaxed text-steel">{p}</p></article>)}</div></Section>
      <Section tone="mist"><Placeholder title="differentiators requiring evidence" /></Section>
      <CTASection title="Tell us what you are protecting" />
    </>
  );
}
