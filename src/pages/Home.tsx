import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Section, SectionHeading } from '@/components/Section';
import { SolutionCard, Check } from '@/components/Cards';
import { Picture } from '@/components/Picture';
import { Icon } from '@/components/Icon';
import { Placeholder } from '@/components/Placeholder';
import { CTASection } from '@/components/CTASection';
import { usePageMeta, useJsonLd } from '@/hooks/usePageMeta';
import { copy, SITE_URL, CONTACT_EMAIL } from '@/utils/content';
import { solutions, industries, stats } from '@/data/site';
import { IMG } from '@/data/images';

const c = copy('index');
const [adv, , ind, svc, rel, trusted, tech, team, routes] = c.sections;
export default function Home() {
  usePageMeta(c.title, c.description, '/');
  useJsonLd('ld-org', { '@context': 'https://schema.org', '@type': 'Organization', name: 'Solomon Radclyffe', url: SITE_URL, email: CONTACT_EMAIL, areaServed: ['Middle East', 'Africa', 'Eastern Europe'] });
  return (
    <>
      <Hero variant="full" display title={c.h1} lead={c.lead} image={IMG.homeHero} alt={c.heroImages![0].alt} position="70% center"
        primary={{ label: 'Explore Solutions', to: '/solutions' }} secondary={{ label: 'Speak to an Expert', to: '/contact' }} />

      {/* Positioning: asymmetric split with image */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who we are" title={adv.h2} lead={adv.intro} />
            <ul className="mt-8 space-y-6">
              {adv.items.map((i) => (
                <li key={i.h} className="reveal grid grid-cols-[7rem_1fr] gap-4 border-t border-line pt-5"><h3 className="font-semibold text-brand">{i.h}</h3><p className="text-steel">{i.p}</p></li>
              ))}
            </ul>
          </div>
          <div className="reveal relative"><Picture id={IMG.fieldTeam} alt="Two maintenance workers in navy uniforms examine a tablet inside an unfinished building." className="aspect-[4/3] w-full" />
            <div className="absolute -bottom-5 left-5 hidden bg-brand px-5 py-4 text-white sm:block"><p className="text-3xl font-semibold">2007</p><p className="text-sm text-white">Founded in the UAE</p></div>
          </div>
        </div>
      </Section>

      {/* Solutions grid on dark */}
      <Section tone="dark">
        <SectionHeading eyebrow="Solutions" title={c.sections[1].h2} lead={c.sections[1].intro} />
        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => <div key={s.slug} className="bg-ink"><SolutionCard s={s} index={i} dark /></div>)}
        </div>
      </Section>

      {/* Stats band */}
      <section aria-label="Company facts" className="border-b border-line bg-mist">
        <dl className="container-site grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.filter((s) => s.verified).map((s) => (
            <div key={s.label} className="reveal px-0 py-8 sm:px-8 first:sm:pl-0"><dt className="order-2 mt-1 text-sm text-steel">{s.label}</dt><dd className="text-4xl font-semibold text-ink">{s.value}</dd></div>
          ))}
        </dl>
      </section>

      {/* Industries: sticky heading + ruled list */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Industries" title={ind.h2} lead={ind.intro} />
            <Link to="/industries" className="link-arrow mt-6">All industries <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {industries.map((x) => (
              <li key={x.id} className="reveal flex gap-5 py-5"><Icon name={x.icon} size={28} className="mt-0.5 shrink-0 text-brand" /><div><h3 className="font-semibold">{x.name}</h3><p className="mt-1 text-steel">{x.text}</p></div></li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Services: numbered three-column */}
      <Section tone="mist">
        <SectionHeading eyebrow="Services" title={svc.h2} lead={svc.intro} />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {svc.items.map((i, n) => (
            <article key={i.h} className="reveal border-t-2 border-ink pt-5"><span className="font-mono text-sm text-brand">0{n + 1}</span><h3 className="mt-2 text-h3 font-semibold">{i.h}</h3><p className="mt-3 text-steel">{i.p}</p></article>
          ))}
        </div>
        <Link to="/services" className="link-arrow mt-10">Our delivery process <ArrowRight size={16} aria-hidden="true" /></Link>
      </Section>

      {/* Reliability: image + copy */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Picture id={IMG.camera} alt={rel.images![0].alt} className="reveal aspect-[4/3] w-full lg:order-2" />
          <div><SectionHeading eyebrow="Reliability" title={rel.h2} lead={rel.intro} />
            <Link to="/services" className="btn btn-outline mt-8">Maintenance &amp; support</Link></div>
        </div>
      </Section>

      {/* Credibility */}
      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Credibility" title={trusted.h2} lead={trusted.intro} />
            <p className="reveal mt-6 flex items-start gap-3 text-sm text-steel"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />Client names as previously published on this site. Logos are shown only once usage permission is confirmed.</p>
          </div>
          <div className="reveal">
            <Placeholder title="verified client logos" className="mt-6" />
          </div>
        </div>
      </Section>

      {/* Technology */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div><SectionHeading eyebrow="Technology" title={tech.h2} lead={tech.intro} />
            <Link to="/technology-partners" className="link-arrow mt-6">Technology approach <ArrowRight size={16} aria-hidden="true" /></Link></div>
          <Placeholder title="verified technology partner logos" />
        </div>
      </Section>

      {/* Engineering */}
      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Picture id={IMG.serverRoom} alt="Two IT technicians inspect a tablet beside network server racks in a cable-filled server room." className="reveal aspect-[4/5] max-h-[34rem] w-full" />
          <div>
            <SectionHeading eyebrow="Engineering" title={team.h2} />
            <ul className="mt-8 space-y-4 text-lg text-white">{team.bullets.map((b) => <Check key={b}>{b}</Check>)}</ul>
          </div>
        </div>
      </Section>

      {/* Routes CTA */}
      <Section>
        <SectionHeading title={routes.h2} lead={routes.intro} />
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {routes.items.map((i, n) => (
            <Link key={i.h} to="/contact" className="reveal group flex flex-col bg-white p-7 transition-colors hover:bg-mist">
              <h3 className="text-h3 font-semibold">{i.h}</h3><p className="mt-3 flex-1 text-steel">{i.p}</p>
              <span className="link-arrow mt-6">{['Speak to an Expert', 'Request support', 'Join our team'][n]}<ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection title="Request a consultation" text="Tell us the site, the risk and the timeline. You will speak to the team that would deliver the work." primary="Request a Consultation" tone="dark" />
    </>
  );
}
