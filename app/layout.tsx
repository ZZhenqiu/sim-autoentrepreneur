import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Simulateur Charges Auto-Entrepreneur 2026 — Calcul URSSAF Gratuit',
    template: '%s | SimAutoEntrepreneur.fr',
  },
  description:
    "Calculez vos charges URSSAF, votre revenu net et votre provision impôt en tant qu'auto-entrepreneur en 2026. Taux officiels mis à jour avec le décret n°2026-69 (ACRE). Gratuit, sans inscription.",
  keywords:
    'simulateur charges auto-entrepreneur 2026, calcul URSSAF micro-entrepreneur, revenu net auto-entrepreneur, ACRE 2026',
  openGraph: {
    siteName: 'SimAutoEntrepreneur.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  metadataBase: new URL('https://simautoentrepreneur.fr'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={geist.className}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
