import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Graphiste Freelance 2026 — URSSAF BNC',
  description:
    'Calculez vos charges URSSAF en tant que graphiste ou designer freelance auto-entrepreneur en 2026. Taux BNC 25,8%, ACRE, versement libératoire. Résultat instantané.',
  keywords:
    'simulateur charges graphiste freelance 2026, URSSAF graphiste auto-entrepreneur, designer indépendant BNC',
  alternates: { canonical: 'https://simautoentrepreneur.fr/simulateur/graphiste-freelance' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-purple-600 bg-purple-50 border border-purple-100 rounded-full px-3 py-1 mb-4">
            <span>🎨</span><span>Graphiste / Designer freelance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges — Graphiste freelance 2026
          </h1>
          <p className="text-gray-500 max-w-2xl text-base">
            En tant que graphiste ou designer freelance auto-entrepreneur, vous relevez du régime <strong>BNC</strong>.
            Taux de cotisations URSSAF 2026 : <strong>25,8%</strong> du CA.
          </p>
        </div>

        <Simulateur defaultTypeActivite="prestations_services_bnc" defaultCaMensuel={2500} />

        <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Graphiste freelance en auto-entrepreneur : ce qu'il faut savoir</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">BNC ou BIC ?</h3>
              <p>
                La création graphique (logos, identité visuelle, web design) relève des <strong>BNC</strong>.
                Si vous vendez principalement des produits imprimés ou des objets, vous pourriez basculer en BIC.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Abattement forfaitaire</h3>
              <p>
                Le régime micro-BNC applique un abattement de <strong>34%</strong> sur votre CA pour calculer
                votre revenu imposable. C'est moins avantageux que les BIC services (50%), mais plus simple.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Seuil de TVA</h3>
              <p>
                Franchise TVA jusqu'à <strong>36 800 €/an</strong>. Au-delà, vous collectez la TVA
                et pouvez récupérer la TVA sur vos achats (logiciels, matériel, etc.).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Versement libératoire</h3>
              <p>
                Si vos revenus N-2 étaient inférieurs à 28 797 €/part, vous pouvez opter pour le
                versement libératoire IR à <strong>2,2%</strong> du CA — souvent avantageux en début d'activité.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
