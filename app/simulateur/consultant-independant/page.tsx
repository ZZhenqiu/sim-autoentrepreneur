import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Consultant Indépendant 2026 — URSSAF BNC',
  description:
    'Calculez vos charges URSSAF en tant que consultant indépendant auto-entrepreneur en 2026. Taux BNC 25,8%, ACRE, versement libératoire. Résultat instantané.',
  keywords:
    'simulateur charges consultant indépendant 2026, URSSAF consultant auto-entrepreneur, micro-entrepreneur conseil BNC',
  alternates: { canonical: 'https://simautoentrepreneur.fr/simulateur/consultant-independant' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 rounded-full px-3 py-1 mb-4">
            <span>📊</span><span>Consultant indépendant</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges — Consultant indépendant 2026
          </h1>
          <p className="text-gray-500 max-w-2xl text-base">
            Conseil en management, RH, marketing, stratégie… En auto-entrepreneur, vous relevez du
            régime <strong>BNC</strong>. Taux URSSAF 2026 : <strong>25,8%</strong> du CA.
          </p>
        </div>

        <Simulateur defaultTypeActivite="prestations_services_bnc" defaultCaMensuel={5000} />

        <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Consultant indépendant en auto-entrepreneur : ce qu'il faut savoir</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Plafond de CA critique</h3>
              <p>
                Le plafond micro-BNC est de <strong>77 700 €/an</strong>. Beaucoup de consultants
                dépassent ce seuil rapidement. Au-delà, il faut basculer en régime réel.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">TJM et seuil TVA</h3>
              <p>
                Avec un TJM de 400–600 €, un consultant facturant 15 jours/mois atteint vite les
                <strong> 36 800 €/an</strong> de franchise TVA. Anticipez ce passage dans vos négociations tarifaires.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Auto-entrepreneur ou portage ?</h3>
              <p>
                Le portage salarial offre une protection sociale plus complète (chômage notamment)
                mais prélève 10–15% du CA en frais de gestion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">ACRE et lancement</h3>
              <p>
                L'ACRE réduit vos cotisations de <strong>50%</strong> la première année (si création
                avant juillet 2026) ou <strong>25%</strong> après. Une économie significative pour
                les hauts TJM.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
