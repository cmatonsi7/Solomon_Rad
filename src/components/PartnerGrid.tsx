import { partners } from '@/data/partners';
import { Placeholder } from './Placeholder';
export function PartnerGrid() {
  if (partners.length === 0) {
    return (
      <>
        <ul aria-hidden="true" className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }, (_, i) => <li key={i} className="flex aspect-[3/2] items-center justify-center bg-white text-xs text-steel-light">Logo {i + 1}</li>)}
        </ul>
        <Placeholder title="verified partner logos" className="mt-5" />
      </>
    );
  }
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
      {partners.map((p) => <li key={p.name} className="flex aspect-[3/2] items-center justify-center bg-white p-6"><img src={p.logo} alt={p.name} loading="lazy" className="max-h-12 w-auto max-w-full object-contain" /></li>)}
    </ul>
  );
}
