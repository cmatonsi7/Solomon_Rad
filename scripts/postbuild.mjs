// Generates sitemap.xml and static 404.html fallback into dist/. Route list mirrors src/data/site.ts.
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
const src = readFileSync('src/data/site.ts', 'utf8');
const slugs = [...src.matchAll(/slug: '([a-z-]+)'/g)].map((m) => m[1]);
const base = (process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '');
const paths = ['/', '/solutions', ...slugs.map((s) => `/solutions/${s}`), '/who-we-are', '/who-we-are/company-story', '/who-we-are/vision', '/who-we-are/leadership-board', '/who-we-are/why-solomon-radclyffe', '/services', '/industries', '/clients-projects', '/technology-partners', '/where-we-operate', '/contact'];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p === '/' ? '' : p}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync('dist/sitemap.xml', xml);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
copyFileSync('dist/index.html', 'dist/404.html');
console.log(`sitemap: ${paths.length} URLs`);
