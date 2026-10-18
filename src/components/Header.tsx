import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigation } from '@/data/site';
import { Logo } from './Logo';

type NavItem = (typeof navigation)[number];
function Dropdown({ item }: { item: Extract<NavItem, { children: readonly unknown[] }> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const loc = useLocation();
  const id = `menu-${item.label.replace(/\W+/g, '-').toLowerCase()}`;
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const active = loc.pathname.startsWith(item.href);
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onBlur={(e) => { if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false); }}
      onKeyDown={(e) => { if (e.key === 'Escape' && open) { setOpen(false); btn.current?.focus(); } }}>
      <button ref={btn} type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-3 py-2 text-[0.93rem] font-medium hover:text-brand ${active ? 'text-brand' : 'text-ink-900'}`}>
        {item.label}<ChevronDown size={15} aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div id={id} hidden={!open} className="absolute left-0 top-full z-50 w-72 pt-2">
        <ul className="border border-line bg-white py-2 shadow-lg">
          <li><Link to={item.href} className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-mist">{item.label} overview</Link></li>
          {item.children.map((c) => (
            <li key={c.href}><NavLink to={c.href} className={({ isActive }) => `block px-4 py-2.5 text-sm hover:bg-mist hover:text-brand ${isActive ? 'text-brand' : 'text-ink-900'}`}>{c.label}</NavLink></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [mobile, setMobile] = useState(false);
  const [group, setGroup] = useState<string | null>(null);
  const loc = useLocation();
  useEffect(() => { setMobile(false); setGroup(null); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setMobile(false);
    document.addEventListener('keydown', k);
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [mobile]);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-site flex h-24 items-center justify-between gap-6">
        <Link to="/" aria-label="Solomon Radclyffe home"><Logo className="w-[6.5rem] sm:w-[7.5rem]" /></Link>
        <nav aria-label="Primary" className="hidden items-center xl:flex">
          {navigation.map((n) => 'children' in n
            ? <Dropdown key={n.label} item={n} />
            : <NavLink key={n.href} to={n.href} className={({ isActive }) => `px-3 py-2 text-[0.93rem] font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-ink-900'}`}>{n.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn btn-primary hidden !min-h-[40px] !px-4 !py-2 sm:inline-flex">Speak to an Expert</Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center text-ink xl:hidden" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile ? 'Close menu' : 'Open menu'} onClick={() => setMobile((m) => !m)}>
            {mobile ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!mobile} className="fixed inset-x-0 bottom-0 top-24 overflow-y-auto overscroll-contain bg-white xl:hidden">
        <nav aria-label="Mobile" className="container-site py-4">
          <ul className="divide-y divide-line">
            {navigation.map((n) => (
              <li key={n.label}>
                {'children' in n ? (
                  <>
                    <button type="button" aria-expanded={group === n.label} onClick={() => setGroup(group === n.label ? null : n.label)} className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-ink">
                      {n.label}<ChevronDown size={20} aria-hidden="true" className={`transition-transform ${group === n.label ? 'rotate-180' : ''}`} />
                    </button>
                    <ul hidden={group !== n.label} className="pb-3 pl-3">
                      <li><Link to={n.href} className="block py-2.5 text-brand">{n.label} overview</Link></li>
                      {n.children.map((c) => <li key={c.href}><Link to={c.href} className="block py-2.5 text-ink-900">{c.label}</Link></li>)}
                    </ul>
                  </>
                ) : <Link to={n.href} className="block py-4 text-lg font-medium text-ink">{n.label}</Link>}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary mt-6 w-full">Speak to an Expert</Link>
        </nav>
      </div>
    </header>
  );
}
