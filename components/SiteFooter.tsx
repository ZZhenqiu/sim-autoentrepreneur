export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      {/* Disclaimer légal — bien visible */}
      <div className="bg-amber-50 border-b border-amber-100 py-3 px-4">
        <p className="max-w-6xl mx-auto text-xs text-amber-800 text-center">
          <strong>Résultats indicatifs.</strong> Ce simulateur fournit des estimations basées sur les taux
          officiels URSSAF 2026. Il ne tient pas compte de votre situation personnelle complète (revenus
          antérieurs, statut de votre foyer fiscal, régimes spéciaux, cotisations minimales…).{' '}
          <strong>Consultez un expert-comptable</strong> pour une simulation précise et personnalisée.
        </p>
      </div>

      {/* Liens et crédits */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-sm">
          <div>
            <p className="font-semibold text-gray-700 mb-2">Simulateur</p>
            <ul className="space-y-1 text-gray-500">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Simulateur général</a></li>
              <li><a href="/simulateur/developpeur-freelance" className="hover:text-blue-600 transition-colors">Développeur freelance</a></li>
              <li><a href="/simulateur/graphiste-freelance" className="hover:text-blue-600 transition-colors">Graphiste freelance</a></li>
              <li><a href="/simulateur/consultant-independant" className="hover:text-blue-600 transition-colors">Consultant</a></li>
              <li><a href="/simulateur/plombier-artisan" className="hover:text-blue-600 transition-colors">Artisan BTP</a></li>
              <li><a href="/simulateur/photographe-freelance" className="hover:text-blue-600 transition-colors">Photographe</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">Ressources</p>
            <ul className="space-y-1 text-gray-500">
              <li><a href="/guide-charges-2026" className="hover:text-blue-600 transition-colors">Guide charges 2026</a></li>
              <li><a href="/comparaison-statuts" className="hover:text-blue-600 transition-colors">Comparer les statuts</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-gray-700 mb-2">Sources officielles</p>
            <ul className="space-y-1 text-gray-500 text-xs">
              <li>Taux URSSAF 2026 (taux micro-social)</li>
              <li>Décret n°2026-69 (ACRE — modification taux)</li>
              <li>Barème IR 2026 (LFI 2026)</li>
              <li>Seuils TVA 2026 (franchise en base)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 SimAutoEntrepreneur.fr — Outil gratuit, sans inscription</p>
          <p>Mis à jour avril 2026</p>
        </div>
      </div>
    </footer>
  );
}
