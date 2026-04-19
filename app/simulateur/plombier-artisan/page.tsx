import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Plombier Artisan BTP 2026 — URSSAF BIC',
  description:
    'Calculez vos charges URSSAF en tant que plombier, électricien ou artisan BTP auto-entrepreneur en 2026. Taux BIC services 21,2%, ACRE. Résultat instantané.',
  keywords:
    'simulateur charges plombier artisan 2026, URSSAF artisan BTP auto-entrepreneur, micro-entrepreneur bâtiment BIC',
  alternates: { canonical: 'https://simautoentrepreneur.fr/simulateur/plombier-artisan' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-orange-700 bg-orange-50 border border-orange-100 rounded-full px-3 py-1 mb-4">
            <span>🔧</span><span>Plombier / Artisan BTP</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges — Artisan BTP 2026
          </h1>
          <p className="text-gray-500 max-w-2xl text-base">
            Plombier, électricien, menuisier, carreleur… En auto-entrepreneur, les artisans du bâtiment
            relèvent du régime <strong>BIC services</strong>. Taux URSSAF 2026 : <strong>21,2%</strong> du CA.
          </p>
        </div>

        <Simulateur defaultTypeActivite="prestations_services_bic" defaultCaMensuel={3500} />

        <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Artisan BTP en auto-entrepreneur : ce qu'il faut savoir</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">BIC services ou vente ?</h3>
              <p>
                Si vous fournissez principalement de la main-d'œuvre (pose, réparation), vous êtes
                en <strong>BIC services</strong> (21,2%). Si vous revendez du matériel sans pose,
                c'est de la vente (12,3%). Pour un plombier standard : BIC services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Assurance décennale obligatoire</h3>
              <p>
                Les artisans du bâtiment sont soumis à l'assurance décennale, même en auto-entreprise.
                Son coût (500–2 000 €/an) est à déduire de votre revenu net réel.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Plafond de CA</h3>
              <p>
                Le plafond micro-BIC services est de <strong>77 700 €/an</strong>. Anticipez le
                passage au régime réel et inscrivez-vous à la chambre des métiers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Stage préalable à l'installation</h3>
              <p>
                Les artisans du bâtiment doivent suivre un stage de préparation à l'installation (SPI)
                auprès de la chambre des métiers, compatible avec l'ACRE.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
