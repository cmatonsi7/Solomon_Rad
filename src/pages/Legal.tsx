import { Section } from '@/components/Section';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Placeholder } from '@/components/Placeholder';
import { CONTACT_EMAIL } from '@/utils/content';

function Legal({ title, path, intro, sections }: { title: string; path: string; intro: string; sections: [string, React.ReactNode][] }) {
  usePageMeta(`${title} | Solomon Radclyffe`, intro, path, true);
  return (
    <>
      <div className="on-dark bg-ink py-14"><div className="container-site"><h1 className="text-h1 font-semibold">{title}</h1><p className="mt-3 max-w-2xl text-white/70">{intro}</p></div></div>
      <Section><div className="mx-auto max-w-3xl">
        <div role="note" className="mb-10 border border-amber-500 bg-amber-50 p-5 text-amber-900"><strong>Draft for legal review.</strong> This page is a structural draft and is not an approved company policy. Do not publish without review by qualified legal counsel.</div>
        {sections.map(([h, body]) => <section key={h} className="mb-9"><h2 className="text-h3 font-semibold">{h}</h2><div className="mt-2 leading-relaxed text-steel">{body}</div></section>)}
      </div></Section>
    </>
  );
}
const tbd = (t: string) => <Placeholder title={t} />;
export function Privacy() {
  return <Legal title="Privacy Policy" path="/privacy-policy" intro="How Solomon Radclyffe handles personal information submitted through this website. Draft pending legal review." sections={[
    ['Who we are', <p>Solomon Radclyffe. Contact: <a className="text-brand underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. {`Registered legal entity name and address to be supplied.`}</p>],
    ['Information the contact form collects', <p>Full name, company, business email, phone number (optional), country, enquiry type and message. We use these details only to respond to your enquiry.</p>],
    ['Legal basis, retention and sharing', tbd('legal basis, retention periods and recipients')],
    ['Cookies and analytics', tbd('cookie and analytics disclosure (none have been configured in this build)')],
    ['Your rights and international transfers', tbd('rights by jurisdiction (UAE, Zimbabwe and other regions served)')],
  ]} />;
}
export function Terms() {
  return <Legal title="Terms of Use" path="/terms-of-use" intro="Conditions for using this website. Draft pending legal review." sections={[
    ['Use of this website', tbd('acceptable use terms')], ['Intellectual property', tbd('ownership of content and trademarks')],
    ['Information and liability', tbd('disclaimers and limitation of liability')], ['Governing law', tbd('governing law and jurisdiction')],
  ]} />;
}
