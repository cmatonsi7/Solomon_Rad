import { Placeholder } from './Placeholder';
export interface CaseStudy { title: string; sector: string; location?: string; scope: string[]; outcome: string; image?: string }
/** Reusable case-study layout. Pass approved data only; with no data it renders a marked placeholder. */
export function CaseStudyCard({ study }: { study?: CaseStudy }) {
  if (!study) return <Placeholder title="approved case study" />;
  return (
    <article className="border border-line bg-white p-6">
      <p className="eyebrow">{study.sector}{study.location ? ` · ${study.location}` : ''}</p>
      <h3 className="mt-2 text-h3 font-semibold">{study.title}</h3>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-steel">{study.scope.map((s) => <li key={s}>{s}</li>)}</ul>
      <p className="mt-4 border-t border-line pt-4">{study.outcome}</p>
    </article>
  );
}
