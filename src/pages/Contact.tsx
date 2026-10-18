import { Mail } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';
import { usePageMeta } from '@/hooks/usePageMeta';
import { copy, CONTACT_EMAIL } from '@/utils/content';

export default function Contact() {
  const c = copy('contact'); usePageMeta(c.title, c.description, '/contact');
  const [form, steps] = c.sections;
  return (
    <>
      <Hero title={c.h1} lead={c.lead} image={c.heroImages?.[0]?.id ?? form.images![0].id} alt={c.heroImages?.[0]?.alt ?? form.images![0].alt} trail={[{ label: 'Contact' }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div><h2 className="text-h2 font-semibold">{form.h2}</h2><p className="mb-8 mt-3 text-lg text-steel">{form.intro}</p><ContactForm /></div>
          <aside className="space-y-10 lg:border-l lg:border-line lg:pl-12">
            <div><h2 className="text-lg font-semibold">Email</h2><a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-flex items-center gap-2 text-brand underline-offset-4 hover:underline"><Mail size={18} aria-hidden="true" />{CONTACT_EMAIL}</a></div>
            <div><h2 className="text-lg font-semibold">Our offices</h2><ul className="mt-3 space-y-1 text-steel"><li>United Arab Emirates</li><li>Zimbabwe</li></ul></div>
            <div><h2 className="text-lg font-semibold">{steps.h2}</h2><ol className="mt-4 space-y-5">{steps.items.map((i, n) => <li key={i.h} className="grid grid-cols-[2rem_1fr] gap-2"><span className="font-semibold text-brand">{n + 1}</span><div><h3 className="font-semibold">{i.h}</h3><p className="text-sm text-steel">{i.p}</p></div></li>)}</ol></div>
          </aside>
        </div>
      </Section>
    </>
  );
}
