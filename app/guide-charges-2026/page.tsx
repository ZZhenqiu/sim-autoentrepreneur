import type { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';

export const metadata: Metadata = {
  title: 'Charges Auto-Entrepreneur 2026 : Guide Complet URSSAF, ACRE, TVA',
  description:
    "Tout comprendre sur les charges d'un auto-entrepreneur en 2026 : taux URSSAF par activité, ACRE (décret n°2026-69), versement libératoire, seuils TVA, barème IR. Guide complet avec exemples chiffrés.",
  keywords:
    'charges auto-entrepreneur 2026, taux URSSAF 2026, ACRE 2026, TVA micro-entrepreneur, versement libératoire 2026, barème IR 2026',
  alternates: { canonical: 'https://simautoentrepreneur.fr/guide-charges-2026' },
};

export default function Page() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="mb-2">
            <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">← Retour au simulateur</a>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
            <span>Mis à jour avril 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Charges auto-entrepreneur 2026 :<br />le guide complet
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Taux URSSAF officiels, ACRE, TVA, impôt sur le revenu — tout ce qu'il faut savoir
            pour calculer précisément ce que vous coûte votre activité en auto-entreprise cette année.
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-gray prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-700 prose-p:leading-relaxed max-w-none">

        {/* Intro */}
        <p>
          En 2026, les auto-entrepreneurs (ou micro-entrepreneurs) paient leurs charges sociales selon le régime
          du <strong>micro-social simplifié</strong> : un pourcentage fixe appliqué directement sur le chiffre d'affaires
          encaissé, sans abattement ni déduction de frais réels. Ce système simple a un avantage majeur — si vous ne
          faites pas de CA, vous ne payez rien — mais il présente aussi un piège : le taux apparent peut sembler faible,
          alors que la charge réelle sur votre revenu disponible est bien plus élevée.
        </p>
        <p>
          Ce guide détaille chaque composante de vos charges 2026 : cotisations URSSAF, contribution à la
          formation professionnelle, impôt sur le revenu (barème progressif ou versement libératoire), ACRE,
          et seuils de TVA. À la fin, un simulateur vous permet de calculer votre revenu net en temps réel.
        </p>

        {/* 1. Cotisations URSSAF */}
        <h2>1. Les cotisations URSSAF 2026 : taux par type d'activité</h2>
        <p>
          Les cotisations sociales URSSAF constituent la part la plus importante de vos charges. Elles couvrent
          l'assurance maladie-maternité, la retraite de base et complémentaire, les allocations familiales et
          l'invalidité-décès. En 2026, les taux du régime micro-social sont les suivants :
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-blue-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-800">Type d'activité</th>
                <th className="px-4 py-3 font-semibold text-gray-800 text-right">Taux URSSAF</th>
                <th className="px-4 py-3 font-semibold text-gray-800 text-right">Exemple sur 3 000 €/mois</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Vente de marchandises (BIC)</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-blue-700">12,3 %</td>
                <td className="px-4 py-3 text-right text-gray-600">369 €</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Prestations de services BIC (artisans)</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-blue-700">21,2 %</td>
                <td className="px-4 py-3 text-right text-gray-600">636 €</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-blue-50/40">
                <td className="px-4 py-3 text-gray-700">Prestations de services BNC (prof. libérales)</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-blue-700">25,8 %</td>
                <td className="px-4 py-3 text-right text-gray-600">774 €</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Libéraux CIPAV (taux micro-social)</td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-blue-700">25,8 %*</td>
                <td className="px-4 py-3 text-right text-gray-600">774 €*</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">
            * Taux indicatif pour les professions libérales relevant de la CIPAV. Les cotisations retraite CIPAV sont
            forfaitaires par classe de revenu et s'ajoutent au micro-social. Consultez votre relevé CIPAV.
          </p>
        </div>

        <p>
          Le taux BNC de 25,8% est plus élevé que le taux BIC services (21,2%) car il inclut des cotisations
          retraite complémentaire différentes. Un développeur freelance facturant 5 000 € par mois verse ainsi
          1 290 € de cotisations sociales, soit 15 480 € sur l'année. C'est la charge à anticiper en priorité
          lorsque vous fixez vos tarifs.
        </p>

        {/* 2. CFP */}
        <h2>2. La contribution à la formation professionnelle (CFP)</h2>
        <p>
          En plus des cotisations sociales, vous payez la <strong>contribution à la formation professionnelle</strong> :
          une petite ligne souvent oubliée dans les simulateurs. Elle ouvre droit à des formations financées
          via le Fonds d'Assurance Formation des Non-Salariés (FAF).
        </p>
        <ul>
          <li><strong>0,1%</strong> du CA pour les activités de vente de marchandises</li>
          <li><strong>0,2%</strong> du CA pour les prestations de services (BIC et BNC) et les libéraux</li>
        </ul>
        <p>
          Sur 3 000 € de CA mensuel, c'est 6 € supplémentaires pour une activité BNC — modeste, mais à ne pas oublier
          dans votre taux de charges global (qui atteint ainsi 25,8 + 0,2 = <strong>26%</strong> du CA avant impôt).
        </p>

        {/* 3. Impôt sur le revenu */}
        <h2>3. L'impôt sur le revenu : barème progressif ou versement libératoire ?</h2>
        <p>
          L'impôt sur le revenu n'est pas inclus dans vos cotisations URSSAF : c'est une charge séparée que
          vous devez provisionner chaque mois. En 2026, vous avez le choix entre deux modalités.
        </p>

        <h3>Option 1 — Barème progressif (régime de droit commun)</h3>
        <p>
          Votre CA est d'abord réduit d'un <strong>abattement forfaitaire</strong> (qui représente vos « frais »
          fictifs), puis le revenu restant est ajouté aux autres revenus de votre foyer fiscal et soumis
          au barème par tranches :
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-800">Tranche de revenu (par part)</th>
                <th className="px-4 py-3 font-semibold text-gray-800 text-right">Taux marginal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['0 € — 11 497 €', '0 %'],
                ['11 497 € — 29 315 €', '11 %'],
                ['29 315 € — 83 823 €', '30 %'],
                ['83 823 € — 180 294 €', '41 %'],
                ['Au-delà de 180 294 €', '45 %'],
              ].map(([tranche, taux]) => (
                <tr key={tranche} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{tranche}</td>
                  <td className="px-4 py-3 text-right font-mono font-semibold">{taux}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Les abattements forfaitaires applicables en 2026 :</p>
        <ul>
          <li><strong>71%</strong> pour la vente de marchandises</li>
          <li><strong>50%</strong> pour les prestations de services BIC</li>
          <li><strong>34%</strong> pour les prestations de services BNC et les libéraux</li>
        </ul>
        <p>
          Exemple : un développeur BNC réalisant 48 000 € de CA annuel aura un revenu imposable de
          48 000 × (1 − 34%) = <strong>31 680 €</strong>. Célibataire, il paiera environ 4 100 € d'IR annuel,
          soit environ 340 €/mois à provisionner.
        </p>

        <h3>Option 2 — Versement libératoire de l'impôt (VL)</h3>
        <p>
          Si vos revenus de l'avant-dernière année (N-2) n'ont pas dépassé <strong>28 797 € par part fiscale</strong>,
          vous pouvez opter pour le versement libératoire : un taux fixe prélevé directement sur le CA, en même temps
          que les cotisations sociales. Les taux 2026 :
        </p>
        <ul>
          <li><strong>1%</strong> pour la vente de marchandises</li>
          <li><strong>1,7%</strong> pour les prestations BIC</li>
          <li><strong>2,2%</strong> pour les prestations BNC</li>
        </ul>
        <p>
          Le VL est souvent avantageux en début d'activité (quand les revenus N-2 étaient nuls ou faibles) et pour
          les personnes seules avec un CA modéré. Il devient moins intéressant dès que vous avez un conjoint avec peu
          de revenus (le quotient familial réduit la tranche effective), ou si votre CA annuel vous placerait dans
          la tranche à 0% ou 11% de toute façon.
        </p>
        <p>
          Utilisez le simulateur ci-dessous pour comparer les deux options sur votre situation.
        </p>

        {/* 4. ACRE */}
        <h2>4. L'ACRE 2026 : le changement du décret n°2026-69</h2>
        <p>
          L'<strong>Aide à la Création ou Reprise d'Entreprise (ACRE)</strong> est une exonération partielle
          des cotisations sociales accordée aux créateurs d'entreprise. En 2026, le décret n°2026-69 a modifié
          le taux de réduction selon la date de création :
        </p>

        <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-green-800 mb-1">Création avant le 1er juillet 2026</p>
            <p className="text-3xl font-bold text-green-700 mb-1">−50%</p>
            <p className="text-xs text-green-600">
              Sur les cotisations sociales pendant 12 mois à compter du premier trimestre civil.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-amber-800 mb-1">Création à partir du 1er juillet 2026</p>
            <p className="text-3xl font-bold text-amber-700 mb-1">−25%</p>
            <p className="text-xs text-amber-600">
              Sur les cotisations sociales pendant 12 mois. Taux réduit suite au décret n°2026-69.
            </p>
          </div>
        </div>

        <p>
          Sur un CA de 4 000 €/mois en BNC, l'ACRE avant juillet 2026 représente une économie de{' '}
          <strong>6 192 €/an</strong> (1 032 € × 50% × 12). C'est une aide significative à anticiper
          dans votre business plan. Après juillet, l'économie reste appréciable : <strong>3 096 €/an</strong>.
        </p>
        <p>
          L'ACRE ne s'applique qu'aux cotisations sociales, pas à la CFP ni à l'impôt sur le revenu.
          Elle est accordée automatiquement lors de la création, sous réserve de ne pas avoir bénéficié
          de l'ACRE dans les 3 années précédentes.
        </p>

        {/* 5. TVA */}
        <h2>5. La TVA : franchise en base et seuils 2026</h2>
        <p>
          La grande majorité des auto-entrepreneurs bénéficient de la <strong>franchise en base de TVA</strong> :
          vous ne facturez pas de TVA à vos clients, et vous ne la récupérez pas non plus sur vos achats.
          La mention <em>« TVA non applicable, article 293 B du CGI »</em> doit figurer sur vos factures.
        </p>
        <p>
          Vous perdez la franchise dès que votre CA annuel dépasse les seuils suivants :
        </p>

        <div className="not-prose overflow-x-auto my-4">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-800">Type d'activité</th>
                <th className="px-4 py-3 font-semibold text-gray-800 text-right">Seuil de base</th>
                <th className="px-4 py-3 font-semibold text-gray-800 text-right">Seuil majoré (1 an)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Vente de marchandises</td>
                <td className="px-4 py-3 text-right font-mono">91 900 €</td>
                <td className="px-4 py-3 text-right font-mono text-amber-600">101 000 €</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">Prestations de services et libéraux</td>
                <td className="px-4 py-3 text-right font-mono">36 800 €</td>
                <td className="px-4 py-3 text-right font-mono text-amber-600">39 100 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Si vous dépassez le seuil de base mais restez sous le seuil majoré, vous conservez la franchise
          encore un an. Au-delà du seuil majoré, vous êtes assujetti à la TVA dès le premier jour du mois
          de dépassement. En pratique, pour un freelance BNC facturant régulièrement, le seuil de 36 800 €
          est atteint à <strong>3 067 €/mois</strong> — très rapidement en activité soutenue.
        </p>
        <p>
          Passer à la TVA n'est pas nécessairement un désavantage si vos clients sont des professionnels
          (ils récupèrent la TVA), mais c'est une complexité comptable supplémentaire.
        </p>

        {/* 6. Plafonds */}
        <h2>6. Les plafonds du régime micro 2026</h2>
        <p>
          Le statut auto-entrepreneur n'est accessible que sous certains seuils de CA annuel :
        </p>
        <ul>
          <li><strong>188 700 €/an</strong> pour la vente de marchandises</li>
          <li><strong>77 700 €/an</strong> pour les prestations de services (BIC et BNC) et les libéraux</li>
        </ul>
        <p>
          Si vous dépassez ces seuils deux années consécutives, vous basculez automatiquement au régime réel
          (régime normal de l'IS ou de l'IR avec déclaration de résultats). Pour beaucoup de freelances à
          succès — développeurs, consultants, avocats —, ce plafond de 77 700 € est atteint en moins de deux ans,
          ce qui impose de réfléchir à la structure juridique (SASU, EURL) suffisamment tôt.
        </p>

        {/* 7. Exemple concret */}
        <h2>7. Exemple concret : développeur BNC à 4 000 €/mois</h2>
        <p>
          Voici un exemple complet pour un développeur freelance célibataire, sans ACRE, sans versement
          libératoire, avec un CA de 4 000 €/mois (48 000 €/an) :
        </p>

        <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-5 my-6 font-mono text-sm space-y-1">
          <div className="flex justify-between"><span className="text-gray-600">CA mensuel</span><span className="font-bold">4 000 €</span></div>
          <div className="flex justify-between text-red-500"><span>− Cotisations URSSAF (25,8%)</span><span>1 032 €</span></div>
          <div className="flex justify-between text-red-400"><span>− CFP (0,2%)</span><span>8 €</span></div>
          <div className="border-t border-gray-200 my-2" />
          <div className="flex justify-between font-semibold text-red-600"><span>Total cotisations sociales</span><span>1 040 €</span></div>
          <div className="border-t border-gray-200 my-2" />
          <div className="text-gray-500 text-xs">Base imposable IR : 48 000 × 66% = 31 680 €/an → tranche 11% partielle + 30%</div>
          <div className="flex justify-between text-orange-500"><span>− Provision IR (≈)</span><span>~370 €</span></div>
          <div className="border-t border-gray-300 border-dashed my-2" />
          <div className="flex justify-between text-green-700 font-bold text-base"><span>Revenu net mensuel</span><span>≈ 2 590 €</span></div>
          <div className="flex justify-between text-gray-500"><span>Revenu net annuel</span><span>≈ 31 080 €</span></div>
          <div className="flex justify-between text-gray-500"><span>Taux de charges total</span><span>≈ 35,2%</span></div>
        </div>

        <p>
          Sur 4 000 € facturés, il reste environ <strong>2 590 €</strong> net. C'est la réalité du régime
          micro-BNC : le taux de charges dépasse souvent 35% pour les professions libérales, bien au-delà
          des 25,8% affichés par l'URSSAF (qui ne prend pas en compte l'IR ni la CFP).
        </p>
        <p>
          Avec l'ACRE (création avant juillet 2026), les cotisations tombent à 516 €/mois au lieu de 1 032 €,
          ce qui améliore le revenu net d'environ <strong>516 €/mois</strong> pendant 12 mois.
        </p>

        {/* 8. Optimisation */}
        <h2>8. Comment optimiser sa situation fiscale en auto-entrepreneur</h2>
        <p>
          Quelques leviers à actionner selon votre situation :
        </p>
        <ul>
          <li>
            <strong>Demander l'ACRE dès la création</strong> : l'exonération est automatique mais doit être
            demandée dans les 45 jours suivant le début d'activité. Ne la ratez pas — surtout si vous créez
            avant juillet 2026 pour bénéficier du taux de 50%.
          </li>
          <li>
            <strong>Évaluer le versement libératoire</strong> : si votre CA annuel est inférieur à 30 000 €
            et que vous êtes dans la tranche à 11%, le VL à 2,2% est presque toujours avantageux.
          </li>
          <li>
            <strong>Anticiper le seuil TVA</strong> : si votre CA mensuel dépasse régulièrement 3 000 €,
            vous atteindrez 36 800 €/an en moins d'un an. Intégrez la TVA dans vos devis pour ne pas absorber
            le choc.
          </li>
          <li>
            <strong>Piloter votre CA</strong> : si vous approchez du plafond de 77 700 €, vous avez intérêt
            à facturer en fin d'année ou à anticiper la transition vers une SASU ou EURL.
          </li>
          <li>
            <strong>Comparer avec la SASU</strong> : au-delà de 60 000–80 000 € de CA, une SASU à l'IS
            avec rémunération optimisée peut être nettement plus avantageuse. La page de comparaison
            de statuts vous aidera à le chiffrer.
          </li>
        </ul>

        {/* Simulateur intégré */}
        <h2>Simulateur : calculez votre revenu net</h2>
        <p>
          Utilisez le simulateur ci-dessous pour appliquer ces calculs à votre situation personnelle.
          Ajustez votre CA, votre type d'activité, et comparez avec ou sans ACRE, avec ou sans
          versement libératoire.
        </p>
      </article>

      {/* Simulateur intégré */}
      <div className="bg-gray-50 border-y border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Simulateur />
        </div>
      </div>

      {/* Navigation vers les pages métier */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Simulateurs par métier</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/simulateur/developpeur-freelance',  label: '💻 Développeur freelance' },
            { href: '/simulateur/graphiste-freelance',    label: '🎨 Graphiste freelance' },
            { href: '/simulateur/consultant-independant', label: '📊 Consultant' },
            { href: '/simulateur/plombier-artisan',       label: '🔧 Artisan BTP' },
            { href: '/simulateur/photographe-freelance',  label: '📷 Photographe' },
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
      </div>
    </main>
  );
}
