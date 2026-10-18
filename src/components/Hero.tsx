import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Picture } from './Picture';
import { Breadcrumbs } from './Breadcrumbs';

interface Props {
  title: string; lead: string; image: string; alt: string; eyebrow?: string;
  trail?: { label: string; href?: string }[];
  primary?: { label: string; to: string }; secondary?: { label: string; to: string };
  variant?: 'full' | 'split'; display?: boolean; position?: string;
}
export function Hero({ title, lead, image, alt, eyebrow, trail, primary, secondary, variant = 'split', display, position }: Props) {
  const T = display ? 'text-display' : 'text-h1';
  const ctas = (primary || secondary) && (
    <div className="mt-8 flex flex-wrap gap-3">
      {primary && <Link to={primary.to} className="btn btn-primary">{primary.label}<ArrowRight size={18} aria-hidden="true" /></Link>}
      {secondary && <Link to={secondary.to} className="btn btn-secondary">{secondary.label}</Link>}
    </div>
  );
  if (variant === 'full') {
    return (
      <section className="on-dark relative isolate overflow-hidden bg-ink">
        <Picture id={image} alt={alt} priority sizes="100vw" position={position} className="absolute inset-0 -z-10 h-full w-full opacity-90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/65 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
        <div className="container-site flex min-h-[min(46rem,86svh)] items-center py-20 sm:py-28">
          <div className="max-w-2xl">
            {trail && <Breadcrumbs trail={trail} />}
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className={`${T} font-semibold`}>{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{lead}</p>
            {ctas}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="on-dark overflow-hidden bg-ink">
      <div className="container-site grid items-stretch gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-0">
        <div className="flex flex-col justify-center lg:py-24">
          {trail && <Breadcrumbs trail={trail} />}
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className={`${T} font-semibold`}>{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{lead}</p>
          {ctas}
        </div>
        <div className="relative min-h-[16rem] lg:-mr-10 lg:min-h-[30rem]">
          <Picture id={image} alt={alt} priority position={position} sizes="(min-width:1024px) 48vw, 100vw" className="h-full w-full max-h-[26rem] lg:absolute lg:inset-0 lg:max-h-none" />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink/60 to-transparent lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
