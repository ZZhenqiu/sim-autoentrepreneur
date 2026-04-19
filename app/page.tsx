import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Auto-Entrepreneur 2026 — Calcul URSSAF Gratuit',
  description:
    "Calculez vos charges URSSAF, votre revenu net et votre provision impôt en tant qu'auto-entrepreneur en 2026. Taux officiels mis à jour avec le décret n°2026-69 (ACRE). Gratuit, sans inscription.",
  alternates: { canonical: 'https://simautoentrepreneur.fr' },
};

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges auto-entrepreneur 2026
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Taux URSSAF officiels 2026 · Décret ACRE n°2026-69 · Barème IR 2026 · Résultats instantanés
          </p>
        </div>

        <Simulateur />

        {/* Pages métiers */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Simulateurs par métier
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { href: '/simulateur/developpeur-freelance',  label: '💻 Développeur freelance' },
              { href: '/simulateur/graphiste-freelance',    label: '🎨 Graphiste freelance' },
              { href: '/simulateur/consultant-independant', label: '📊 Consultant indépendant' },
              { href: '/simulateur/plombier-artisan',       label: '🔧 Plombier / artisan BTP' },
              { href: '/simulateur/photographe-freelance',  label: '📷 Photographe freelance' },
            ].map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="bg-white border border-gray-100 rounded-xl p-3 text-center text-sm text-gray-700 hover:border-blue-200 hover:shadow-sm transition-all"
              >
                {m.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
