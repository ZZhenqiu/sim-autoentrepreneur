import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparaison Auto-Entrepreneur vs SASU vs EURL 2026',
  description:
    'Comparez les charges et avantages des statuts auto-entrepreneur, SASU et EURL en 2026. Quel statut choisir selon votre CA et votre situation ? Guide en cours de rédaction.',
  alternates: { canonical: 'https://simautoentrepreneur.fr/comparaison-statuts' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="mb-2">
          <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
        </div>

        <div className="inline-flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-8">
          <span>Bientôt disponible</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comparaison des statuts 2026
        </h1>
        <p className="text-xl text-gray-500 mb-6 max-w-xl mx-auto">
          Auto-entrepreneur · SASU · EURL
        </p>
        <p className="text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
          Cette page comparera en détail les charges, la protection sociale et la fiscalité
          des trois principaux statuts pour les indépendants en France. Calculs basés sur votre
          CA réel, avec des seuils de bascule recommandés selon votre activité.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
          {[
            {
              statut: 'Auto-entrepreneur',
              avantage: 'Simplicité maximale, charges au prorata du CA, zéro comptable obligatoire',
              limite: 'Plafond à 77 700 €/an, taux de charges élevé sur les BNC, pas d\'assurance chômage',
              couleur: 'blue',
            },
            {
              statut: 'SASU',
              avantage: 'Optimisation de la rémunération (salaire + dividendes), accès au chômage possible',
              limite: 'Comptabilité obligatoire, charges fixes (expert-comptable 1 500–3 000 €/an)',
              couleur: 'purple',
            },
            {
              statut: 'EURL',
              avantage: 'Régime TNS moins chargé que SASU sur certains niveaux de rémunération',
              limite: 'Cotisations minimales même sans revenus, gestion plus complexe',
              couleur: 'indigo',
            },
          ].map((s) => (
            <div key={s.statut} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className={`text-sm font-bold text-${s.couleur}-700 mb-3`}>{s.statut}</p>
              <p className="text-xs text-green-700 mb-2"><strong>Avantage :</strong> {s.avantage}</p>
              <p className="text-xs text-red-600"><strong>Limite :</strong> {s.limite}</p>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Simuler mes charges auto-entrepreneur →
        </a>
      </div>
    </main>
  );
}
