import { Cctv, Fingerprint, ShieldAlert, Car, ScanLine, MonitorCheck, Server, Presentation, Plane, Landmark, Hotel, Building2, Fuel, GraduationCap, Construction, Shield } from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';
// Named imports keep the bundle small (tree-shaken). Add icons here when data/site.ts uses a new name.
const icons: Record<string, LucideIcon> = { Cctv, Fingerprint, ShieldAlert, Car, ScanLine, MonitorCheck, Server, Presentation, Plane, Landmark, Hotel, Building2, Fuel, GraduationCap, Construction };
export function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = icons[name] ?? Shield;
  return <C aria-hidden="true" strokeWidth={1.5} {...p} />;
}
