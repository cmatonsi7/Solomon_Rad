const modules = import.meta.glob('../assets/img/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export type ImgSize = 'sm' | 'md' | 'lg';
export const imageUrl = (id: string, size: ImgSize): string =>
  modules[`../assets/img/${id.slice(0, 8)}-${size}.webp`] ?? '';

/** Intrinsic aspect ratios (w, h of the original files) to prevent layout shift. */
const portrait = new Set(['3e19e90a', '4f12248e', 'd4aba242']);
export const imageDims = (full: string): [number, number] => {
  const id = full.slice(0, 8);
  return portrait.has(id) ? [848, 1264] : id === '49fc00ca' ? [1264, 848] : [1376, 768];
};

export const IMG = {
  controlRoom: '9f97cb65',
  homeHero: '9f97cb65',
  wall: 'fbe125c3',
  consoles: 'd655fdf6',
  plaza: '01d9d39a',
  airport: '091c32b7',
  dataHall: 'b430952e',
  perimeter: 'aab2466b',
  skyline: 'ea3200da',
  meeting: '49fc00ca',
  boardroom: '8d44d557',
  serverRoom: 'd4aba242',
  cabinet: '4f12248e',
  fieldTeam: 'f65d1848',
  racks: '4f9210de',
  camera: 'c4045ade',
  anpr: '6fb751f9',
  screening: 'd3df1f0b',
  turnstile: 'd7b70510',
  survey: '0685a2b8',
  lab: '3e19e90a',
  ops: '22d2e9eb',
} as const;
