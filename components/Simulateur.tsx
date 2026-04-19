'use client';

import { useState, useMemo } from 'react';
import { calculer, TypeActivite, SituationFoyer, ParamsSimulation } from '@/lib/calculateur';

const TYPES_ACTIVITE: { value: TypeActivite; label: string }[] = [
  { value: 'prestations_services_bnc', label: 'Services BNC (prof. libérale)' },
  { value: 'prestations_services_bic', label: 'Services BIC (artisan/commerçant)' },
  { value: 'vente_marchandises',        label: 'Vente de marchandises' },
  { value: 'liberal_cipav',             label: 'Libéral CIPAV' },
];

function fmt(n: number, decimals = 0): string {
  return n.toLocaleString('fr-FR', { maximumFractionDigits: decimals });
}

interface Props {
  defaultTypeActivite?: TypeActivite;
  defaultCaMensuel?: number;
}

export default function Simulateur({
  defaultTypeActivite = 'prestations_services_bnc',
  defaultCaMensuel = 3000,
}: Props) {
  const [caMensuel, setCaMensuel] = useState(defaultCaMensuel);
  const [typeActivite, setTypeActivite] = useState<TypeActivite>(defaultTypeActivite);
  const [acreActif, setAcreActif] = useState(false);
  const [dateCreationStr, setDateCreationStr] = useState('2026-01-01');
  const [versementLiberatoire, setVersementLiberatoire] = useState(false);
  const [situationFoyer, setSituationFoyer] = useState<SituationFoyer>('celibataire');
  const [nombreParts, setNombreParts] = useState(1);
  const [autresRevenus, setAutresRevenus] = useState(0);

  const params: ParamsSimulation = useMemo(() => ({
    caMensuel,
    typeActivite,
    acreActif,
    dateCreation: acreActif ? new Date(dateCreationStr) : undefined,
    versementLiberatoire,
    situationFoyer,
    nombreParts,
    autresRevenusAnnuels: autresRevenus,
  }), [caMensuel, typeActivite, acreActif, dateCreationStr, versementLiberatoire, situationFoyer, nombreParts, autresRevenus]);

  const r = useMemo(() => calculer(params), [params]);

  const acreAvantJuillet = acreActif && new Date(dateCreationStr) < new Date(2026, 6, 1);
  const isCipav = typeActivite === 'liberal_cipav';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Formulaire */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">Votre situation</h2>

        {/* CA mensuel */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">CA mensuel</label>
            <span className="text-sm font-bold text-blue-600">{fmt(caMensuel)} €</span>
          </div>
          <input
            type="range"
            min={0}
            max={15000}
            step={100}
            value={caMensuel}
            onChange={(e) => setCaMensuel(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0 €</span><span>15 000 €</span>
          </div>
        </div>

        {/* Type d'activité */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type d'activité</label>
          <select
            value={typeActivite}
            onChange={(e) => setTypeActivite(e.target.value as TypeActivite)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {TYPES_ACTIVITE.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          {isCipav && (
            <p className="text-xs text-amber-600 mt-1.5 flex items-start gap-1">
              <span>⚠️</span>
              <span>
                Les cotisations CIPAV (retraite, invalidité) varient selon votre classe de revenu.
                Ce simulateur applique le taux micro-social standard — <strong>résultat indicatif</strong>.
                Consultez votre relevé CIPAV pour une simulation précise.
              </span>
            </p>
          )}
        </div>

        {/* ACRE */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Bénéficiaire ACRE</label>
              <p className="text-xs text-gray-400">Aide à la création d'entreprise</p>
            </div>
            <button
              onClick={() => setAcreActif(!acreActif)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${acreActif ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${acreActif ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
          {acreActif && (
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Date de création de l'entreprise</label>
              <input
                type="date"
                value={dateCreationStr}
                onChange={(e) => setDateCreationStr(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className={`text-xs mt-1 ${acreAvantJuillet ? 'text-green-600' : 'text-amber-600'}`}>
                {acreAvantJuillet
                  ? '→ Réduction ACRE de 50% (création avant juillet 2026)'
                  : '→ Réduction ACRE de 25% (décret n°2026-69, après juillet 2026)'}
              </p>
            </div>
          )}
        </div>

        {/* Versement libératoire */}
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium text-gray-700">Versement libératoire IR</label>
            <p className="text-xs text-gray-400">Si revenus N-2 ≤ 28 797 €/part</p>
          </div>
          <button
            onClick={() => setVersementLiberatoire(!versementLiberatoire)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${versementLiberatoire ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${versementLiberatoire ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* Situation foyer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Situation fiscale</label>
          <select
            value={situationFoyer}
            onChange={(e) => setSituationFoyer(e.target.value as SituationFoyer)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="celibataire">Célibataire / séparé(e)</option>
            <option value="marie_1_revenu">Marié(e) — 1 seul revenu</option>
            <option value="marie_2_revenus">Marié(e) — 2 revenus</option>
          </select>
        </div>

        {/* Nombre de parts */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Quotient familial</label>
            <span className="text-sm font-bold text-blue-600">{nombreParts} part{nombreParts > 1 ? 's' : ''}</span>
          </div>
          <input
            type="range"
            min={1}
            max={4}
            step={0.5}
            value={nombreParts}
            onChange={(e) => setNombreParts(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span><span>4</span>
          </div>
        </div>

        {/* Autres revenus */}
        {situationFoyer !== 'celibataire' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Autres revenus annuels du foyer
            </label>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={500}
                value={autresRevenus}
                onChange={(e) => setAutresRevenus(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-2 text-sm text-gray-400">€</span>
            </div>
          </div>
        )}
      </div>

      {/* Résultats */}
      <div className="space-y-4">
        {/* Bannière CIPAV */}
        {isCipav && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex gap-2 text-sm text-amber-800">
            <span className="shrink-0">⚠️</span>
            <span>
              <strong>Résultat indicatif — profil CIPAV.</strong> Les cotisations retraite CIPAV
              sont forfaitaires par classe de revenu et ne sont pas incluses dans le micro-social.
              Ce simulateur affiche uniquement les prélèvements du régime micro.
            </span>
          </div>
        )}

        {/* Carte principale résultats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Résultats mensuels</h2>

          <div className="space-y-3">
            <Row label="CA mensuel" value={`${fmt(r.caMensuel)} €`} />
            <div className="border-t border-gray-100 pt-3 space-y-2">
              <Row
                label="Cotisations URSSAF"
                value={`${fmt(r.cotisationsApresACRE)} €`}
                sub={`(${(r.cotisationsApresACRE / Math.max(r.caMensuel, 1) * 100).toFixed(1)}% du CA)`}
                color="text-red-500"
              />
              <Row
                label="Formation prof. (CFP)"
                value={`${fmt(r.cotisationsCFP)} €`}
                sub={`(${(r.cotisationsCFP / Math.max(r.caMensuel, 1) * 100).toFixed(1)}% du CA)`}
                color="text-red-400"
              />
            </div>
            <div className="border-t border-gray-100 pt-3 space-y-2">
              <Row label="Total cotisations" value={`${fmt(r.totalCotisations)} €`} bold color="text-red-600" />
              <Row
                label={versementLiberatoire ? 'Versement libératoire IR' : 'Provision impôt'}
                value={`${fmt(r.impotRevenuMensuel)} €`}
                color="text-orange-500"
              />
            </div>
            <div className="border-t-2 border-gray-200 pt-3 space-y-2">
              <Row
                label="Revenu net mensuel"
                value={`${fmt(r.revenuNetMensuel)} €`}
                bold
                large
                color={r.revenuNetMensuel >= 0 ? 'text-green-600' : 'text-red-600'}
              />
              <Row
                label="Revenu net annuel"
                value={`${fmt(r.revenuNetAnnuel)} €`}
                color={r.revenuNetAnnuel >= 0 ? 'text-green-600' : 'text-red-600'}
              />
              <Row
                label="Taux de charges total"
                value={`${r.tauxChargesTotal.toFixed(1)} %`}
                color="text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Bloc ACRE */}
        {acreActif && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🎁</span>
              <div>
                <p className="text-sm font-semibold text-green-800">Économie ACRE</p>
                <p className="text-2xl font-bold text-green-700">+{fmt(r.economieACRE)} €/an</p>
                <p className="text-xs text-green-600 mt-1">
                  Réduction de {acreAvantJuillet ? '50%' : '25%'} sur vos cotisations sociales pendant 12 mois
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Barre TVA */}
        <div className={`rounded-2xl p-4 border ${r.alerteTVA ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-100'}`}>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">Seuil de franchise TVA</p>
            <span className={`text-sm font-bold ${r.alerteTVA ? 'text-amber-700' : 'text-gray-600'}`}>
              {r.pourcentageSeuilTVA.toFixed(0)} %
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all ${r.pourcentageSeuilTVA >= 100 ? 'bg-red-500' : r.alerteTVA ? 'bg-amber-500' : 'bg-blue-500'}`}
              style={{ width: `${Math.min(r.pourcentageSeuilTVA, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {fmt(r.caAnnuel)} € / {typeActivite === 'vente_marchandises' ? '91 900' : '36 800'} € par an
          </p>
          {r.alerteTVA && (
            <p className="text-xs text-amber-700 font-medium mt-2">
              ⚠️ Attention : vous approchez ou dépassez le seuil de franchise TVA.
            </p>
          )}
        </div>

        {/* Liens affiliation */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-sm text-gray-600 mb-3 font-medium">
            Automatisez vos déclarations URSSAF mensuelles :
          </p>
          <div className="space-y-2">
            <a
              href="VOTRE_LIEN_INDY"
              className="flex items-center justify-between w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 text-sm text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Essayer Indy gratuitement <span>→ 2 mois offerts</span>
            </a>
            <a
              href="VOTRE_LIEN_DOUGS"
              className="flex items-center justify-between w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 text-sm text-blue-700 font-medium hover:bg-blue-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrir Dougs <span>→</span>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center px-2">
          Les résultats sont des estimations indicatives. Consultez un expert-comptable pour une simulation précise adaptée à votre situation personnelle.
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  sub,
  bold,
  large,
  color = 'text-gray-800',
}: {
  label: string;
  value: string;
  sub?: string;
  bold?: boolean;
  large?: boolean;
  color?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className={`text-sm text-gray-600 ${bold ? 'font-semibold' : ''}`}>{label}</span>
      <span className={`font-semibold ${color} ${large ? 'text-xl' : 'text-sm'} ${bold ? 'font-bold' : ''} whitespace-nowrap`}>
        {value}
        {sub && <span className="text-xs text-gray-400 ml-1 font-normal">{sub}</span>}
      </span>
    </div>
  );
}
