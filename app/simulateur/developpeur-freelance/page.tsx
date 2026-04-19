import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Développeur Freelance 2026 — URSSAF BNC',
  description:
    'Calculez vos charges URSSAF en tant que développeur freelance auto-entrepreneur en 2026. Taux BNC 25,8%, ACRE, versement libératoire. Résultat instantané, sans inscription.',
  keywords:
    'simulateur charges développeur freelance 2026, URSSAF développeur auto-entrepreneur, BNC informatique',
  alternates: { canonical: 'https://simautoentrepreneur.fr/simulateur/developpeur-freelance' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
            <span>💻</span><span>Développeur / Intégrateur freelance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges — Développeur freelance 2026
          </h1>
          <p className="text-gray-500 max-w-2xl text-base">
            En tant que développeur freelance auto-entrepreneur, vous relevez du régime <strong>BNC</strong>.
            Taux de cotisations URSSAF 2026 : <strong>25,8%</strong> du CA.
          </p>
        </div>

        <Simulateur defaultTypeActivite="prestations_services_bnc" defaultCaMensuel={4000} />

        <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Développeur freelance en auto-entrepreneur : ce qu'il faut savoir</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Régime fiscal applicable</h3>
              <p>
                Le développement web et logiciel est classé en <strong>BNC</strong> (Bénéfices Non Commerciaux).
                Le taux URSSAF 2026 est de <strong>25,8%</strong> du CA encaissé.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Plafond de CA à respecter</h3>
              <p>
                Le régime micro-BNC vous impose un plafond de <strong>77 700 € de CA annuel</strong>.
                Au-delà, vous basculez en régime réel.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Seuil de franchise TVA</h3>
              <p>
                Tant que votre CA reste sous <strong>36 800 €/an</strong>, vous êtes en franchise de TVA.
                Passé ce seuil, vous devez facturer la TVA à vos clients (20% en général).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">ACRE et création</h3>
              <p>
                Si vous créez votre activité en 2026, l'ACRE réduit vos cotisations de <strong>50%</strong>
                (si création avant juillet) ou <strong>25%</strong> (si création à partir de juillet) pendant 12 mois.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
