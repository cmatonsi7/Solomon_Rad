import { SHOW_PLACEHOLDERS } from '@/utils/content';
import { Info } from 'lucide-react';
/** Clearly marked content gap. Hidden in production when VITE_SHOW_PLACEHOLDERS=false. */
export function Placeholder({ title, className = '' }: { title: string; className?: string }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div role="note" className={`border border-dashed border-amber-500 bg-amber-50 p-5 text-sm text-amber-900 ${className}`}>
      <p className="flex items-center gap-2 font-semibold"><Info size={16} aria-hidden="true" /> Content placeholder: {title}</p>
    </div>
  );
}
