import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

const Home = lazy(() => import('@/pages/Home'));
const Solutions = lazy(() => import('@/pages/Solutions').then((m) => ({ default: m.SolutionsIndex })));
const Solution = lazy(() => import('@/pages/Solutions').then((m) => ({ default: m.SolutionPage })));
const Who = lazy(() => import('@/pages/Company').then((m) => ({ default: m.WhoWeAre })));
const Story = lazy(() => import('@/pages/Company').then((m) => ({ default: m.CompanyStory })));
const Vision = lazy(() => import('@/pages/Company').then((m) => ({ default: m.Vision })));
const Leadership = lazy(() => import('@/pages/Company').then((m) => ({ default: m.Leadership })));
const Why = lazy(() => import('@/pages/Company').then((m) => ({ default: m.Why })));
const Services = lazy(() => import('@/pages/Services'));
const Industries = lazy(() => import('@/pages/Industries'));
const Clients = lazy(() => import('@/pages/Showcase').then((m) => ({ default: m.Clients })));
const Partners = lazy(() => import('@/pages/Showcase').then((m) => ({ default: m.Partners })));
const Where = lazy(() => import('@/pages/Where'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('@/pages/Legal').then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import('@/pages/NotFound'));

const router = createBrowserRouter([{
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/solutions', element: <Solutions /> },
    { path: '/solutions/:slug', element: <Solution /> },
    { path: '/who-we-are', element: <Who /> },
    { path: '/who-we-are/company-story', element: <Story /> },
    { path: '/who-we-are/vision', element: <Vision /> },
    { path: '/who-we-are/leadership-board', element: <Leadership /> },
    { path: '/who-we-are/why-solomon-radclyffe', element: <Why /> },
    { path: '/services', element: <Services /> },
    { path: '/industries', element: <Industries /> },
    { path: '/clients-projects', element: <Clients /> },
    { path: '/technology-partners', element: <Partners /> },
    { path: '/where-we-operate', element: <Where /> },
    { path: '/contact', element: <Contact /> },
    { path: '/privacy-policy', element: <Privacy /> },
    { path: '/terms-of-use', element: <Terms /> },
    { path: '*', element: <NotFound /> },
  ],
}]);
export function AppRoutes() {
  return <Suspense fallback={<div className="min-h-[60vh] bg-ink" aria-busy="true" />}><RouterProvider router={router} /></Suspense>;
}
