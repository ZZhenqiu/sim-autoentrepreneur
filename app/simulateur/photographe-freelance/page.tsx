import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Simulateur Charges Photographe Freelance 2026 — URSSAF BNC',
  description:
    'Calculez vos charges URSSAF en tant que photographe freelance auto-entrepreneur en 2026. Taux BNC 25,8%, ACRE, versement libératoire. Résultat instantané.',
  keywords:
    'simulateur charges photographe freelance 2026, URSSAF photographe auto-entrepreneur, micro-entrepreneur photographie BNC',
  alternates: { canonical: 'https://simautoentrepreneur.fr/simulateur/photographe-freelance' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 mb-4">
            <span>📷</span><span>Photographe freelance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simulateur de charges — Photographe freelance 2026
          </h1>
          <p className="text-gray-500 max-w-2xl text-base">
            Photographe de mariage, corporate, reportage, studio… En auto-entrepreneur,
            vous relevez du régime <strong>BNC</strong>. Taux URSSAF 2026 : <strong>25,8%</strong> du CA.
          </p>
        </div>

        <Simulateur defaultTypeActivite="prestations_services_bnc" defaultCaMensuel={2000} />

        <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Photographe freelance en auto-entrepreneur : ce qu'il faut savoir</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">BNC ou droits d'auteur ?</h3>
              <p>
                La prestation photo (reportage, mariage, corporate) est en <strong>BNC</strong>.
                La cession de droits d'auteur sur vos images peut relever d'un régime distinct
                (Agessa / Maison des artistes).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Amortissement du matériel</h3>
              <p>
                En micro-régime, vous ne pouvez pas déduire vos frais réels. L'abattement forfaitaire
                de <strong>34%</strong> est censé les couvrir. Si vos frais dépassent 34% du CA,
                le régime réel devient plus avantageux.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Saisonnalité et irrégularité</h3>
              <p>
                Le régime auto-entrepreneur est bien adapté à un CA irrégulier : vous ne payez
                des cotisations que sur le CA réellement encaissé.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Seuil TVA et tarifs</h3>
              <p>
                Avec un seuil de franchise TVA à <strong>36 800 €/an</strong>, intégrez la TVA dans
                vos devis dès que vous approchez de ce seuil pour éviter une surprise fiscale.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
