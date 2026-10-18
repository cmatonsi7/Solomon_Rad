import raw from '@/data/pageContent.json';

export interface Item { h: string; p: string; n?: string }
export interface Sec { h2: string; intro: string; items: Item[]; bullets: string[]; images?: { id: string; alt: string }[] }
export interface PageCopy {
  title: string; description: string; h1: string; lead: string; sections: Sec[];
  heroImages?: { id: string; alt: string }[];
}
const all = raw as unknown as Record<string, PageCopy>;
export const copy = (slug: string): PageCopy => {
  const c = all[slug];
  if (!c) throw new Error(`No content for ${slug}`);
  return c;
};
export const SHOW_PLACEHOLDERS = import.meta.env.VITE_SHOW_PLACEHOLDERS !== 'false';
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.example.com';
export const CONTACT_EMAIL = 'info@solomonradclyffe.com';
