import {
  TAUX_URSSAF_2026,
  TAUX_CFP_2026,
  TAUX_VL_2026,
  ABATTEMENTS_2026,
  ACRE_2026,
  SEUILS_TVA_2026,
  BAREME_IR_2026,
} from './taux2026';

export type TypeActivite =
  | 'vente_marchandises'
  | 'prestations_services_bic'
  | 'prestations_services_bnc'
  | 'liberal_cipav';

export type SituationFoyer = 'celibataire' | 'marie_1_revenu' | 'marie_2_revenus';

export interface ParamsSimulation {
  caMensuel: number;
  typeActivite: TypeActivite;
  acreActif: boolean;
  dateCreation?: Date;
  versementLiberatoire: boolean;
  situationFoyer: SituationFoyer;
  nombreParts: number;
  autresRevenusAnnuels: number;
}

export interface ResultatSimulation {
  caMensuel: number;
  caAnnuel: number;
  cotisationsURSSAF: number;
  cotisationsCFP: number;
  totalCotisations: number;
  reductionACRE: number;
  cotisationsApresACRE: number;
  baseImposable: number;
  impotRevenuMensuel: number;
  revenuNetMensuel: number;
  revenuNetAnnuel: number;
  tauxChargesTotal: number;
  alerteTVA: boolean;
  pourcentageSeuilTVA: number;
  economieACRE: number;
}

function calculerIR(
  revenuAEAnnuel: number,
  autresRevenusAnnuels: number,
  nombreParts: number,
): number {
  const revenuFoyerTotal = revenuAEAnnuel + autresRevenusAnnuels;
  const quotient = revenuFoyerTotal / nombreParts;

  let impotSurQuotient = 0;
  for (const tranche of BAREME_IR_2026) {
    if (quotient > tranche.min) {
      const montantDansLaTranche = Math.min(quotient, tranche.max) - tranche.min;
      impotSurQuotient += montantDansLaTranche * tranche.taux;
    }
  }

  const impotAnnuel = impotSurQuotient * nombreParts;
  const partAE = revenuAEAnnuel / Math.max(revenuFoyerTotal, 1);
  return impotAnnuel * partAE;
}

export function calculer(params: ParamsSimulation): ResultatSimulation {
  const {
    caMensuel,
    typeActivite,
    acreActif,
    dateCreation,
    versementLiberatoire,
    situationFoyer,
    nombreParts,
    autresRevenusAnnuels,
  } = params;

  const caAnnuel = caMensuel * 12;

  // 1. Cotisations URSSAF + CFP
  const tauxURSSAF = TAUX_URSSAF_2026[typeActivite];
  const tauxCFP =
    typeActivite === 'vente_marchandises'
      ? TAUX_CFP_2026.vente_marchandises
      : TAUX_CFP_2026.prestations_services;

  const cotisationsURSSAF = caMensuel * tauxURSSAF;
  const cotisationsCFP = caMensuel * tauxCFP;

  // 2. Réduction ACRE
  let reductionACRE = 0;
  let economieACRE = 0;

  if (acreActif) {
    const juillet2026 = new Date(2026, 6, 1);
    const dateRef = dateCreation ?? new Date();
    const tauxReduction =
      dateRef < juillet2026
        ? ACRE_2026.reduction_avant_juillet
        : ACRE_2026.reduction_apres_juillet;

    reductionACRE = cotisationsURSSAF * tauxReduction;
    economieACRE = reductionACRE * 12;
  }

  const cotisationsApresACRE = cotisationsURSSAF - reductionACRE;
  const totalCotisations = cotisationsApresACRE + cotisationsCFP;

  // 3. Impôt sur le revenu
  let impotRevenuMensuel = 0;
  let baseImposable = 0;
  const abattement = ABATTEMENTS_2026[typeActivite];

  if (versementLiberatoire) {
    const tauxVL = TAUX_VL_2026[typeActivite];
    impotRevenuMensuel = caMensuel * tauxVL;
    baseImposable = caAnnuel * (1 - abattement);
  } else {
    const revenuAEAnnuel = caAnnuel * (1 - abattement);
    baseImposable = revenuAEAnnuel;
    const impotAnnuel = calculerIR(revenuAEAnnuel, autresRevenusAnnuels, nombreParts);
    impotRevenuMensuel = impotAnnuel / 12;
  }

  // 4. Revenu net
  const revenuNetMensuel = caMensuel - totalCotisations - impotRevenuMensuel;
  const revenuNetAnnuel = revenuNetMensuel * 12;
  const tauxChargesTotal =
    caMensuel > 0
      ? ((totalCotisations + impotRevenuMensuel) / caMensuel) * 100
      : 0;

  // 5. Alerte TVA (déclenchée à 80% du seuil)
  const seuilTVA =
    typeActivite === 'vente_marchandises'
      ? SEUILS_TVA_2026.vente_marchandises
      : SEUILS_TVA_2026.prestations_services;

  const alerteTVA = caAnnuel >= seuilTVA * 0.8;
  const pourcentageSeuilTVA = Math.min((caAnnuel / seuilTVA) * 100, 100);

  return {
    caMensuel,
    caAnnuel,
    cotisationsURSSAF,
    cotisationsCFP,
    totalCotisations,
    reductionACRE,
    cotisationsApresACRE,
    baseImposable,
    impotRevenuMensuel,
    revenuNetMensuel,
    revenuNetAnnuel,
    tauxChargesTotal,
    alerteTVA,
    pourcentageSeuilTVA,
    economieACRE,
  };
}
