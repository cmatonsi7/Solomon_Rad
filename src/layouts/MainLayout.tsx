import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';
export function MainLayout() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only z-[60] bg-white px-4 py-3 font-medium text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none"><Outlet /></main>
      <Footer />
    </>
  );
}
