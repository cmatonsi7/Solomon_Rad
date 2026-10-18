import { copy } from '@/utils/content';
import { IMG } from './images';

export interface Solution {
  slug: string; name: string; icon: string; blurb: string; image: string; sectors: string[]; related: string[];
}
const home = copy('index');
const blurbs = home.sections[1].items.slice(0, 8);
const meta: Omit<Solution, 'name' | 'blurb'>[] = [
  { slug: 'video-surveillance', icon: 'Cctv', image: IMG.wall, sectors: ['aviation', 'finance', 'hospitality', 'energy', 'education', 'infrastructure'], related: ['command-control-centers', 'intrusion-perimeter-detection', 'access-control'] },
  { slug: 'access-control', icon: 'Fingerprint', image: IMG.turnstile, sectors: ['finance', 'hospitality', 'towers', 'education'], related: ['video-surveillance', 'screening-scanning', 'command-control-centers'] },
  { slug: 'intrusion-perimeter-detection', icon: 'ShieldAlert', image: IMG.perimeter, sectors: ['aviation', 'energy', 'infrastructure'], related: ['video-surveillance', 'anpr-car-park-hostile-vehicle-mitigation', 'command-control-centers'] },
  { slug: 'anpr-car-park-hostile-vehicle-mitigation', icon: 'Car', image: IMG.anpr, sectors: ['aviation', 'towers', 'infrastructure'], related: ['access-control', 'intrusion-perimeter-detection', 'video-surveillance'] },
  { slug: 'screening-scanning', icon: 'ScanLine', image: IMG.screening, sectors: ['aviation'], related: ['access-control', 'anpr-car-park-hostile-vehicle-mitigation', 'command-control-centers'] },
  { slug: 'command-control-centers', icon: 'MonitorCheck', image: IMG.consoles, sectors: ['aviation', 'energy'], related: ['video-surveillance', 'audio-visual-communications', 'network-infrastructure-data-center-security'] },
  { slug: 'network-infrastructure-data-center-security', icon: 'Server', image: IMG.dataHall, sectors: ['finance', 'infrastructure'], related: ['command-control-centers', 'video-surveillance', 'access-control'] },
  { slug: 'audio-visual-communications', icon: 'Presentation', image: IMG.boardroom, sectors: ['education', 'energy'], related: ['command-control-centers', 'network-infrastructure-data-center-security', 'access-control'] },
];
export const solutions: Solution[] = meta.map((m, i) => ({ ...m, name: blurbs[i].h, blurb: blurbs[i].p }));
export const solutionBySlug = (s: string) => solutions.find((x) => x.slug === s);

export interface Industry { id: string; name: string; icon: string; text: string }
const ind = copy('industries').sections[0].items;
const indMeta = [['aviation', 'Plane'], ['finance', 'Landmark'], ['hospitality', 'Hotel'], ['towers', 'Building2'], ['energy', 'Fuel'], ['education', 'GraduationCap'], ['infrastructure', 'Construction']];
export const industries: Industry[] = indMeta.map(([id, icon], i) => ({ id, icon, name: ind[i].h, text: ind[i].p }));

export const navigation = [
  { label: 'Solutions', href: '/solutions', children: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })) },
  { label: 'Who We Are', href: '/who-we-are', children: [
    { label: 'Company Story', href: '/who-we-are/company-story' },
    { label: 'Vision', href: '/who-we-are/vision' },
    { label: 'Leadership & Board', href: '/who-we-are/leadership-board' },
    { label: 'Why Solomon Radclyffe', href: '/who-we-are/why-solomon-radclyffe' },
  ] },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Clients & Projects', href: '/clients-projects' },
  { label: 'Technology Partners', href: '/technology-partners' },
] as const;

export const footerExplore = [
  { label: 'Services', href: '/services' }, { label: 'Industries', href: '/industries' },
  { label: 'Technology Partners', href: '/technology-partners' }, { label: 'Clients & Projects', href: '/clients-projects' },
  { label: 'Where We Operate', href: '/where-we-operate' }, { label: 'Contact', href: '/contact' },
];

/** Verified-by-site facts only. Figures flagged verified:false are NOT rendered until confirmed. */
export const stats = [
  { value: '2007', label: 'Founded in the UAE as RGS Global Security', verified: true },
  { value: '2', label: 'Our offices: UAE and Zimbabwe', verified: true },
  { value: '50+', label: 'Years of combined experience on our board', verified: true },
];
export const clientNames = ['Dubai Airports', 'Etihad Airways', 'Microsoft', 'Cisco', 'Goldman Sachs', 'Morgan Stanley', 'Halliburton', 'NYU', 'Atlantis', 'Cameron', 'Group Five'];
export const partnerCategories = copy('technology-partners').sections[0].items;

export const routes = [
  '/', '/solutions', ...solutions.map((s) => `/solutions/${s.slug}`), '/who-we-are', '/who-we-are/company-story',
  '/who-we-are/vision', '/who-we-are/leadership-board', '/who-we-are/why-solomon-radclyffe', '/services', '/industries',
  '/clients-projects', '/technology-partners', '/where-we-operate', '/contact', '/privacy-policy', '/terms-of-use',
];
