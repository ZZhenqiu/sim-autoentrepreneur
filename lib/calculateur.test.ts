// 5 cas de test pour valider les calculs avant déploiement
// Comparer avec mon-entreprise.urssaf.fr et urssaf.fr

import { calculer, ParamsSimulation, ResultatSimulation } from './calculateur';

interface CasTest {
  description: string;
  params: ParamsSimulation;
  attendu: Partial<ResultatSimulation>;
  toleranceEuros: number;
}

const cas: CasTest[] = [
  {
    // CAS 1 — Brief point de vigilance : BNC 3 000€/mois sans ACRE
    // Attendu : URSSAF = 636€, revenu net ≈ 2 100-2 200€
    description: 'BNC 3 000€/mois, célibataire, sans ACRE, sans VL',
    params: {
      caMensuel: 3000,
      typeActivite: 'prestations_services_bnc',
      acreActif: false,
      versementLiberatoire: false,
      situationFoyer: 'celibataire',
      nombreParts: 1,
      autresRevenusAnnuels: 0,
    },
    attendu: {
      cotisationsURSSAF: 774,         // 3000 × 25.8% — vérifié sur simulateur URSSAF officiel
      cotisationsCFP: 6,              // 3000 × 0.2%
      totalCotisations: 780,
      // IR : 36k × 66% = 23 760€ base → tranche 11% → 1 349€/an → 112€/mois
      // Revenu net = 3000 - 780 - 112 = 2 108€
      revenuNetMensuel: 2108,
    },
    toleranceEuros: 5,
  },
  {
    // CAS 2 — Brief : BNC 4 000€/mois avec ACRE avant juillet 2026 (−50%)
    description: 'BNC 4 000€/mois, ACRE avant juillet 2026 (−50%), sans VL',
    params: {
      caMensuel: 4000,
      typeActivite: 'prestations_services_bnc',
      acreActif: true,
      dateCreation: new Date(2026, 0, 15), // janvier 2026 → avant juillet
      versementLiberatoire: false,
      situationFoyer: 'celibataire',
      nombreParts: 1,
      autresRevenusAnnuels: 0,
    },
    attendu: {
      cotisationsURSSAF: 1032,        // 4000 × 25.8%
      reductionACRE: 516,             // 1032 × 50%
      cotisationsApresACRE: 516,
      economieACRE: 6192,             // 516 × 12
    },
    toleranceEuros: 1,
  },
  {
    // CAS 3 — Vente marchandises 8 000€/mois → alerte TVA
    // Seuil TVA vente = 91 900€ → 8 000 × 12 = 96 000 > 91 900 → alerte 100%
    description: 'Vente marchandises 8 000€/mois — alerte seuil TVA',
    params: {
      caMensuel: 8000,
      typeActivite: 'vente_marchandises',
      acreActif: false,
      versementLiberatoire: false,
      situationFoyer: 'celibataire',
      nombreParts: 1,
      autresRevenusAnnuels: 0,
    },
    attendu: {
      cotisationsURSSAF: 984,         // 8000 × 12.3%
      cotisationsCFP: 8,              // 8000 × 0.1%
      alerteTVA: true,
      pourcentageSeuilTVA: 100,       // plafonné à 100%
    },
    toleranceEuros: 1,
  },
  {
    // CAS 4 — Versement libératoire BNC 2 000€/mois
    description: 'BNC 2 000€/mois avec versement libératoire (2.2%)',
    params: {
      caMensuel: 2000,
      typeActivite: 'prestations_services_bnc',
      acreActif: false,
      versementLiberatoire: true,
      situationFoyer: 'celibataire',
      nombreParts: 1,
      autresRevenusAnnuels: 0,
    },
    attendu: {
      cotisationsURSSAF: 516,         // 2000 × 25.8%
      impotRevenuMensuel: 44,         // 2000 × 2.2% (VL inchangé)
      totalCotisations: 520,          // 516 + 4 (CFP 0.2%)
    },
    toleranceEuros: 1,
  },
  {
    // CAS 5 — Marié 2 parts, BIC services 5 000€/mois
    description: 'BIC services 5 000€/mois, marié 2 parts, sans ACRE',
    params: {
      caMensuel: 5000,
      typeActivite: 'prestations_services_bic',
      acreActif: false,
      versementLiberatoire: false,
      situationFoyer: 'marie_1_revenu',
      nombreParts: 2,
      autresRevenusAnnuels: 0,
    },
    attendu: {
      cotisationsURSSAF: 1060,        // 5000 × 21.2%
      cotisationsCFP: 10,             // 5000 × 0.2%
      totalCotisations: 1070,
    },
    toleranceEuros: 1,
  },
];

// Runner minimal (pas de dépendance externe)
let passed = 0;
let failed = 0;

for (const cas_ of cas) {
  const res = calculer(cas_.params);
  const erreurs: string[] = [];

  for (const [cle, valeurAttendue] of Object.entries(cas_.attendu)) {
    const valeurReelle = res[cle as keyof ResultatSimulation] as number | boolean;
    if (typeof valeurAttendue === 'boolean') {
      if (valeurReelle !== valeurAttendue) {
        erreurs.push(`  ${cle}: attendu ${valeurAttendue}, obtenu ${valeurReelle}`);
      }
    } else if (typeof valeurAttendue === 'number') {
      const diff = Math.abs((valeurReelle as number) - valeurAttendue);
      if (diff > cas_.toleranceEuros) {
        erreurs.push(
          `  ${cle}: attendu ≈${valeurAttendue}€, obtenu ${Math.round(valeurReelle as number)}€ (écart ${Math.round(diff)}€)`
        );
      }
    }
  }

  if (erreurs.length === 0) {
    console.log(`✅ ${cas_.description}`);
    passed++;
  } else {
    console.log(`❌ ${cas_.description}`);
    erreurs.forEach((e) => console.log(e));
    failed++;
  }
}

console.log(`\n${passed}/${passed + failed} tests passés`);

// Affichage détaillé du cas 1 pour vérification manuelle
const r1 = calculer(cas[0].params);
console.log('\n--- Détail cas 1 (BNC 3 000€/mois) ---');
console.log(`CA mensuel       : ${r1.caMensuel}€`);
console.log(`Cotis. URSSAF    : ${Math.round(r1.cotisationsURSSAF)}€`);
console.log(`CFP              : ${Math.round(r1.cotisationsCFP)}€`);
console.log(`Total cotisations: ${Math.round(r1.totalCotisations)}€`);
console.log(`Provision IR     : ${Math.round(r1.impotRevenuMensuel)}€`);
console.log(`Revenu net /mois : ${Math.round(r1.revenuNetMensuel)}€`);
console.log(`Taux charges     : ${r1.tauxChargesTotal.toFixed(1)}%`);
