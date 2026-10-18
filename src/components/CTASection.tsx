import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '@/utils/content';
export function CTASection({ title, text, primary = 'Speak to an Expert', to = '/contact', tone = 'brand' }: { title: string; text?: string; primary?: string; to?: string; tone?: 'brand' | 'dark' }) {
  return (
    <section className={`on-dark ${tone === 'brand' ? 'bg-brand' : 'bg-ink-900'} py-16 text-white sm:py-20`} aria-label="Contact call to action">
      <div className="container-site grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <h2 className="text-h2 font-semibold">{title}</h2>
          {text && <p className="mt-4 max-w-2xl text-lg text-white">{text}</p>}
        </div>
        <div className="reveal flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
          <Link to={to} className={`btn ${tone === 'brand' ? 'border-white bg-white !text-ink hover:bg-ink hover:!text-white' : 'btn-primary'}`}>{primary}<ArrowRight size={18} aria-hidden="true" /></Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 py-2 text-white underline-offset-4 hover:underline"><Mail size={18} aria-hidden="true" />{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
}
