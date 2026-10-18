import { useRef, useState, type FormEvent } from 'react';
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { CONTACT_EMAIL } from '@/utils/content';

const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim();
const TYPES = ['New project or consultation', 'Support on an existing system', 'Maintenance or service contract', 'Careers', 'Something else'];
type Values = { name: string; company: string; email: string; phone: string; country: string; type: string; message: string };
const empty: Values = { name: '', company: '', email: '', phone: '', country: '', type: '', message: '' };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.company.trim()) e.company = 'Enter your company or organisation.';
  if (!v.email.trim()) e.email = 'Enter your business email.';
  else if (!emailRe.test(v.email.trim())) e.email = 'Enter a valid email address, for example name@company.com.';
  if (v.phone && !/^[+()\d\s.-]{6,20}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number, or leave it blank.';
  if (!v.country.trim()) e.country = 'Enter the country where the site is.';
  if (!v.type) e.type = 'Select the type of enquiry.';
  if (v.message.trim().length < 10) e.message = 'Tell us a little about the site or project (at least 10 characters).';
  return e;
}

export function ContactForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unconfigured'>('idle');
  const started = useRef(Date.now());
  const honey = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus('idle');
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    if (honey.current?.value) { setStatus('success'); return; } // bots: silently drop
    if (!ENDPOINT) { setStatus('unconfigured'); return; }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...v, source: 'website-contact', elapsedMs: Date.now() - started.current }),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success'); setV(empty);
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div role="status" className="border border-brand/30 bg-brand-tint p-8">
        <CheckCircle2 className="text-brand" size={32} aria-hidden="true" />
        <h3 className="mt-4 text-h3 font-semibold">Thank you. Your enquiry has reached our team.</h3>
        <p className="mt-2 text-steel">We will be in touch shortly.</p>
      </div>
    );
  }
  const err = (k: keyof Values) => errors[k];
  const common = (k: keyof Values) => ({ id: `f-${k}`, 'aria-invalid': !!err(k), 'aria-describedby': err(k) ? `e-${k}` : undefined, value: v[k], onChange: set(k), className: `field ${err(k) ? '!border-red-600' : ''}` });
  const Field = ({ k, label, required, hint, children }: { k: keyof Values; label: string; required?: boolean; hint?: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-medium text-ink">{label}{required && <span aria-hidden="true" className="text-red-700"> *</span>}{hint && <span className="font-normal text-steel"> ({hint})</span>}</label>
      {children}
      {err(k) && <p id={`e-${k}`} className="mt-1.5 text-sm text-red-700">{err(k)}</p>}
    </div>
  );
  const errList = Object.values(errors);
  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form" className="space-y-5">
      {errList.length > 0 && (
        <div ref={summary} tabIndex={-1} role="alert" className="border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          <p className="font-semibold">Please fix {errList.length === 1 ? 'this field' : `these ${errList.length} fields`}:</p>
          <ul className="mt-1 list-disc pl-5">{errList.map((m) => <li key={m}>{m}</li>)}</ul>
        </div>
      )}
      <p className="text-sm text-steel">Fields marked <span className="text-red-700">*</span> are required.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field k="name" label="Full name" required><input {...common('name')} type="text" autoComplete="name" required /></Field>
        <Field k="company" label="Company" required><input {...common('company')} type="text" autoComplete="organization" required /></Field>
        <Field k="email" label="Business email" required><input {...common('email')} type="email" autoComplete="email" inputMode="email" required /></Field>
        <Field k="phone" label="Phone" hint="optional"><input {...common('phone')} type="tel" autoComplete="tel" inputMode="tel" /></Field>
        <Field k="country" label="Country" required><input {...common('country')} type="text" autoComplete="country-name" required /></Field>
        <Field k="type" label="Enquiry type" required>
          <select {...common('type')} required><option value="">Select…</option>{TYPES.map((t) => <option key={t}>{t}</option>)}</select>
        </Field>
      </div>
      <Field k="message" label="Tell us about the site or project" required><textarea {...common('message')} rows={6} required /></Field>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label>Leave this field empty<input ref={honey} type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {(status === 'error' || status === 'unconfigured') && (
        <div role="alert" className="flex gap-3 border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          <AlertTriangle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{status === 'unconfigured'
            ? <>This form is not connected to a mail service yet, so your message has not been sent. Please email us directly at <a className="font-medium underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>
            : <>Something went wrong sending that. Please try again, or email <a className="font-medium underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will pick it up from there.</>}</p>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary min-w-[10rem] disabled:opacity-70">
          {status === 'sending' ? <><Loader2 className="animate-spin" size={18} aria-hidden="true" />Sending…</> : 'Send enquiry'}
        </button>
        <p className="text-sm text-steel">We use your details only to respond to this enquiry.</p>
      </div>
    </form>
  );
}
