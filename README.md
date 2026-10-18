# Solomon Radclyffe: corporate website

React 18 + TypeScript + Vite + Tailwind CSS + React Router + Lucide. Built from the exported Relume site: existing copy, brand blue (`#0B6BE3`), near-black (`#030810`), IBM Plex Sans and the 21 original photos are preserved.

## Local development
```
npm install
cp .env.example .env     # then edit
npm run dev              # http://localhost:5173
```
## Production build and preview
```
npm run build            # type-check, bundle, generate sitemap.xml, robots.txt, 404.html -> dist/
npm run preview
```
## Deployment
`dist/` is a static single-page app. Any static host works if unknown paths rewrite to `/index.html`: `public/_redirects` (Netlify/Cloudflare Pages) and `vercel.json` (Vercel) are included. Set `VITE_SITE_URL` to the live domain **before** building (canonical URLs, Open Graph, sitemap).

## Environment variables (`.env`)
| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Public URL, no trailing slash |
| `VITE_FORM_ENDPOINT` | HTTPS endpoint that accepts the enquiry as JSON (your backend, Formspree, Basin…). **Unset = the form validates, then honestly reports it is not connected and offers the email address. It never fakes success.** |
| `VITE_SHOW_PLACEHOLDERS` | `false` hides the amber placeholder blocks |

Never put API keys in `VITE_*` variables (they are public). Use a form service with a public form ID, or your own server-side endpoint. The form sends a hidden honeypot and an elapsed-time field; the receiving endpoint should reject honeypot hits, apply rate limiting, and ideally add CAPTCHA (e.g. Turnstile).

## Updating content
- Page copy: `src/data/pageContent.json` (extracted from the original site)
- Solutions, industries, navigation, stats, client names: `src/data/site.ts`
- Technology partners (confirmed only): `src/data/partners.ts`
- Case studies: render `CaseStudyCard` with approved data
- Logo: `src/assets/logo-{sm,md}.webp`; favicon `public/favicon.png`; apple-touch icon and social image `public/og-image.jpg` (all generated from the logo)
- Photos: `src/assets/img/<id>-{sm,md,lg}.webp`
- New icons: add to `src/components/Icon.tsx`

## Structure
`src/{components,layouts,pages,routes,data,hooks,utils,styles,assets}`. All pages are lazy-loaded.

## Sitemap
```
/  /solutions  /solutions/{video-surveillance, access-control, intrusion-perimeter-detection,
  anpr-car-park-hostile-vehicle-mitigation, screening-scanning, command-control-centers,
  network-infrastructure-data-center-security, audio-visual-communications}
/who-we-are  /who-we-are/{company-story, vision, leadership-board, why-solomon-radclyffe}
/services  /industries  /clients-projects  /technology-partners  /where-we-operate  /contact
/privacy-policy  /terms-of-use  *(404)
```
URLs match the original site (minus `.html`).

## Content still required (shown as title-only amber placeholders; set `VITE_SHOW_PLACEHOLDERS=false` to hide them)
Verified client logos and permission to name clients; confirmed technology partners and logos; leadership names, titles, bios, photos; fuller company story and vision statement; hub addresses/phones; case studies; technical specifications per solution; legal text (Privacy/Terms are drafts requiring counsel); confirmation of the original site's "15% CAGR" and "0% debt" claims and the "2 continents" stat (omitted here).

## Known limitations
- Client-side rendered: titles/meta update per route in the browser; for best SEO with crawlers that don't run JS, add prerendering later.
- Unknown URLs show the 404 page but return HTTP 200 on static hosting.
- Images appear AI-generated/stock; confirm provenance and do not present as real projects.
# Solomon_Rad
