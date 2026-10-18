import sm from '@/assets/logo-sm.webp';
import md from '@/assets/logo-md.webp';
/** Master logo. Transparent PNG-derived WebP; reads on white (header) and on the dark footer thanks to its built-in glow. */
export function Logo({ className = '' }: { className?: string }) {
  return <img src={sm} srcSet={`${sm} 420w, ${md} 840w`} sizes="160px" alt="Solomon Radclyffe: Intelligent Integration Solutions" width={420} height={Math.round(420 * 0.6547020818377602)} className={`block h-auto ${className}`} />;
}
