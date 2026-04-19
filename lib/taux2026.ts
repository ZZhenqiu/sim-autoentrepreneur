// Taux officiels URSSAF 2026 — source : URSSAF + décret n°2026-69

export const TAUX_URSSAF_2026 = {
  vente_marchandises:        0.123,
  prestations_services_bnc:  0.258,  // 25.8% — vérifié sur simulateur URSSAF officiel 2026
  prestations_services_bic:  0.212,
  liberal_cipav:             0.212,
} as const;

export const TAUX_CFP_2026 = {
  vente_marchandises:    0.001,
  prestations_services:  0.002,
  liberal:               0.002,
} as const;

// Versement libératoire IR (optionnel, si revenus N-2 ≤ 28 797€/part)
export const TAUX_VL_2026 = {
  vente_marchandises:        0.01,
  prestations_services_bic:  0.017,
  prestations_services_bnc:  0.022,
  liberal_cipav:             0.022,
} as const;

// Abattements forfaitaires pour calcul IR (si pas de versement libératoire)
export const ABATTEMENTS_2026 = {
  vente_marchandises:        0.71,
  prestations_services_bic:  0.50,
  prestations_services_bnc:  0.34,
  liberal_cipav:             0.34,
} as const;

// ACRE 2026 — décret n°2026-69
// Avant le 01/07/2026 : réduction de 50% des cotisations sociales
// Après le 01/07/2026 : réduction de 25% des cotisations sociales
export const ACRE_2026 = {
  reduction_avant_juillet: 0.50,
  reduction_apres_juillet: 0.25,
  duree_mois: 12,
} as const;

// Seuils TVA 2026
export const SEUILS_TVA_2026 = {
  vente_marchandises:    91900,
  prestations_services:  36800,
  seuil_majore_vente:   101000,
  seuil_majore_services: 39100,
} as const;

// Plafonds CA régime micro 2026
export const PLAFONDS_MICRO_2026 = {
  vente_marchandises:   188700,
  prestations_services:  77700,
} as const;

// Barème IR 2026 (tranches marginales)
export const BAREME_IR_2026 = [
  { min: 0,      max: 11497,      taux: 0    },
  { min: 11497,  max: 29315,      taux: 0.11 },
  { min: 29315,  max: 83823,      taux: 0.30 },
  { min: 83823,  max: 180294,     taux: 0.41 },
  { min: 180294, max: Infinity,   taux: 0.45 },
] as const;
