"use client";

import { useState } from "react";
import { Threat } from "@/types/threat";
import {
  CombatRole,
  CreatureSize,
  ROLE_DESCRIPTIONS,
  CREATURE_FUNCTIONS,
  SPEED_TABLE,
  getParamsForNdAndRole,
  ALL_ND_OPTIONS,
  estimateHabilityCount,
  CreatureParams,
} from "./creature-tables";

// ─────────────────────────────────────────────────────────────────────────────
// Assistente Guiado de Criação/Ajuste de Ameaças
// Baseado em "Manual de Criação de Ameaças", Ameaças de Arton, p. 377-389
// ─────────────────────────────────────────────────────────────────────────────

type WizardMode = "create" | "adjust";
type WizardStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const STEP_LABELS = [
  "Conceito e Nome",
  "Tipo, Tamanho e Papel",
  "Nível de Desafio",
  "Estatísticas de Combate",
  "Ataques",
  "Habilidades",
  "Estatísticas Secundárias",
  "Equipamento e Tesouro",
];

const TYPES = ["Animal", "Construto", "Espírito", "Humanoide", "Monstro", "Morto-Vivo"];
const SIZES: CreatureSize[] = ["Minúsculo", "Pequeno", "Médio", "Grande", "Enorme", "Colossal"];

const SIZE_TO_FAIXA: Record<CreatureSize, "pequeno_menor" | "medio" | "grande_maior"> = {
  "Minúsculo": "pequeno_menor",
  "Pequeno": "pequeno_menor",
  "Médio": "medio",
  "Grande": "grande_maior",
  "Enorme": "grande_maior",
  "Colossal": "grande_maior",
};

const blankThreat = (): Threat => ({
  id: Math.random().toString(36).slice(2, 9),
  name: "", tipo: "Monstro", tamanho: "Médio", papel: "", nd: "1",
  description: "", iniciativa: 0, percepcao: 0, defesa: 10, pv: 10, pm: 0,
  deslocamento: "9m", fort: 0, ref: 0, von: 0,
  for: "10", des: "10", con: "10", int: "10", sab: "10", car: "10",
  habilidades: [], pericias: [], equipamentos: [], tesouro: "Nenhum",
});

type AttackType = "corpoacorpo" | "distancia";

interface AttackEntry {
  id: string;
  tipo: AttackType;
  nome: string;
  qtd: number;          // quantos golpes desse ataque (ex.: "Garras 2x")
  dado: string;         // dado de dano base
  margem: number;       // margem de ameaça: 20 (padrão), 19, 18...
  mult: number;         // multiplicador de crítico: 2, 3, 4
  bonusManual: string;  // vazio = calculado automaticamente pelo ND
  extra: string;        // dano adicional, ex.: "8d6 trevas"
}

const DICE_OPTIONS = ["1d3", "1d4", "1d6", "1d8", "1d10", "1d12", "2d4", "2d6", "2d8", "2d10", "2d12"];
const THREAT_MARGINS = [20, 19, 18, 17, 16, 15];

const newAttack = (tipo: AttackType, nome: string): AttackEntry => ({
  id: Math.random().toString(36).slice(2, 8),
  tipo, nome, qtd: 1, dado: "1d6", margem: 20, mult: 2, bonusManual: "", extra: "",
});

interface WizardState {
  // Passo 0
  nome: string;
  conceito: string;
  // Passo 1
  tipo: string;
  tamanho: CreatureSize;
  combatRole: CombatRole | null;
  functionId: string | null;
  locomotionForm: "bipede" | "quadrupede" | "voador" | "escalador" | "escavador" | "nadador";
  speedTier: "Lento" | "Normal" | "Rápido";
  extraLocomotion: string; // outros deslocamentos secundários, texto livre
  iniciativaBonus: number; // bônus de iniciativa da criatura
  // Passo 2
  nd: string;
  // Passo 3 — ajustes finos (desvios de até 2 níveis)
  ajusteDefesa: number; // em "níveis de ND" de desvio
  ajusteFort: number;
  ajusteRef: number;
  ajusteVon: number;
  resistenciaPrincipal: "fort" | "ref" | "von";
  resistenciaMediana: "fort" | "ref" | "von";
  resistenciaFraca: "fort" | "ref" | "von";
  // Passo 4
  ataques: AttackEntry[];
  // Passo 5
  habilidadesTexto: string; // uma por linha
  // Passo 6
  atributos: { for: string; des: string; con: string; int: string; sab: string; car: string };
  periciasTexto: string;
  // Passo 7
  tesouro: string;
  equipamentosTexto: string;
}

const initialState: WizardState = {
  nome: "",
  conceito: "",
  tipo: "Monstro",
  tamanho: "Médio",
  combatRole: null,
  functionId: null,
  locomotionForm: "bipede",
  speedTier: "Normal",
  extraLocomotion: "",
  iniciativaBonus: 0,
  nd: "1",
  ajusteDefesa: 0,
  ajusteFort: 0,
  ajusteRef: 0,
  ajusteVon: 0,
  resistenciaPrincipal: "fort",
  resistenciaMediana: "ref",
  resistenciaFraca: "von",
  ataques: [newAttack("corpoacorpo", "Garras")],
  habilidadesTexto: "",
  atributos: { for: "10", des: "10", con: "10", int: "10", sab: "10", car: "10" },
  periciasTexto: "",
  tesouro: "Padrão",
  equipamentosTexto: "",
};

// ── Helpers de cálculo ───────────────────────────────────────────────────────

const ND_LEVELS_NUMERIC = ["1/4", "1/2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "S", "S+"];

const shiftNd = (nd: string, steps: number): string => {
  const idx = ND_LEVELS_NUMERIC.indexOf(nd);
  if (idx === -1) return nd;
  const newIdx = Math.max(0, Math.min(ND_LEVELS_NUMERIC.length - 1, idx + steps));
  return ND_LEVELS_NUMERIC[newIdx];
};

// Crítico no formato de Tormenta 20: "19" (margem 19, x2), "x3" (margem 20, x3), "19/x3"
const formatCritical = (margem: number, mult: number): string => {
  if (margem < 20 && mult === 2) return String(margem);
  if (margem < 20) return `${margem}/x${mult}`;
  return `x${mult}`;
};

// Ex.: "Garras 2x +20 (2d6+10, 19)" ou "Mosquete +24 (2d8+16, 18/x3, mais 8d6 trevas)"
const formatAttackText = (a: AttackEntry, valorAtaque: number, bonus: number): string => {
  const dano = `${a.dado}${bonus > 0 ? `+${bonus}` : ""}`;
  const nomeFmt = `${a.nome.trim() || "Ataque"}${a.qtd > 1 ? ` ${a.qtd}x` : ""}`;
  const partes = [dano, formatCritical(a.margem, a.mult)];
  const extra = a.extra.trim().replace(/^mais\s+/i, "");
  if (extra) partes.push(`mais ${extra}`);
  return `${nomeFmt} +${valorAtaque} (${partes.join(", ")})`;
};

// O dano médio da tabela vale para UM ataque completo. Os golpes do mesmo tipo
// (ex.: mordida + 2 garras) dividem esse dano; corpo a corpo e à distância são opções
// separadas, então cada tipo recebe o dano médio inteiro.
const computeAttackBonuses = (entries: AttackEntry[], danoMedio: number): number[] => {
  const hits = entries.reduce((sum, e) => sum + e.qtd, 0);
  const perHit = hits > 0 ? Math.round(danoMedio / hits) : danoMedio;
  return entries.map((e) => {
    const manual = e.bonusManual.trim();
    if (manual !== "" && !Number.isNaN(Number(manual))) return Math.max(0, Math.round(Number(manual)));
    return Math.max(0, perHit - diceAverage(e.dado));
  });
};

const buildAttackTexts = (
  entries: AttackEntry[], valorAtaque: number, danoMedio: number
): Record<AttackType, string | undefined> => {
  const result: Record<AttackType, string | undefined> = { corpoacorpo: undefined, distancia: undefined };
  (["corpoacorpo", "distancia"] as const).forEach((tipo) => {
    const group = entries.filter((e) => e.tipo === tipo);
    if (!group.length) return;
    const bonuses = computeAttackBonuses(group, danoMedio);
    result[tipo] = group.map((e, k) => formatAttackText(e, valorAtaque, bonuses[k])).join(" e ");
  });
  return result;
};

const diceAverage = (dado: string): number => {
  const m = dado.match(/(\d+)d(\d+)/i);
  if (!m) return 0;
  const qty = parseInt(m[1]);
  const sides = parseInt(m[2]);
  return Math.round(qty * (sides + 1) / 2);
};

function AttackGroup({ tipo, titulo, ataques, params, onChange, fc, lc }: {
  tipo: AttackType;
  titulo: string;
  ataques: AttackEntry[];
  params: CreatureParams;
  onChange: (next: AttackEntry[]) => void;
  fc: string;
  lc: string;
}) {
  const group = ataques.filter((a) => a.tipo === tipo);
  const hits = group.reduce((sum, a) => sum + a.qtd, 0);
  const bonuses = computeAttackBonuses(group, params.danoMedio);
  const autoBonuses = computeAttackBonuses(group.map((a) => ({ ...a, bonusManual: "" })), params.danoMedio);

  const patch = (id: string, p: Partial<AttackEntry>) =>
    onChange(ataques.map((a) => (a.id === id ? { ...a, ...p } : a)));
  const remove = (id: string) => onChange(ataques.filter((a) => a.id !== id));
  const add = () => onChange([...ataques, newAttack(tipo, "")]);

  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/60 border-2 border-amber-900/20 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-800">{titulo}</p>
          {hits > 0 && (
            <p className="text-[11px] text-amber-950/55 mt-0.5">
              {hits} golpe{hits > 1 ? "s" : ""} · dano médio por golpe ≈ {Math.round(params.danoMedio / hits)} (total {params.danoMedio})
            </p>
          )}
        </div>
        <button onClick={add}
          className="px-3 py-1.5 rounded-lg border-2 border-dashed border-amber-900/30 text-[11px] font-bold uppercase tracking-widest text-amber-950/60 hover:border-red-800/40 hover:text-red-800 transition-all">
          + Ataque
        </button>
      </div>

      {!group.length && (
        <p className="text-xs text-amber-950/45 italic">Nenhum ataque {tipo === "corpoacorpo" ? "corpo a corpo" : "à distância"}.</p>
      )}

      {group.map((a, k) => (
        <div key={a.id} className="bg-[rgb(var(--bg-rgb))] border border-amber-900/15 rounded-lg p-3 space-y-3">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-end">
            <div>
              <label className={lc}>Nome</label>
              <input className={fc} placeholder="Ex: Mordida, Garras, Espada longa" value={a.nome}
                onChange={(e) => patch(a.id, { nome: e.target.value })} />
            </div>
            <div>
              <label className={lc}>Qtd.</label>
              <select className={fc} value={a.qtd} onChange={(e) => patch(a.id, { qtd: Number(e.target.value) })}>
                {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}x</option>)}
              </select>
            </div>
            <button onClick={() => remove(a.id)} title="Remover ataque"
              className="h-[38px] w-9 flex items-center justify-center rounded-lg border-2 border-amber-900/20 text-amber-950/50 hover:text-red-800 hover:border-red-800/40 transition-all text-sm">✕</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div>
              <label className={lc}>Dado</label>
              <select className={fc} value={a.dado} onChange={(e) => patch(a.id, { dado: e.target.value })}>
                {DICE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={lc}>Bônus de dano</label>
              <input type="number" min={0} className={fc} placeholder={`auto (${autoBonuses[k]})`} value={a.bonusManual}
                onChange={(e) => patch(a.id, { bonusManual: e.target.value })} />
            </div>
            <div>
              <label className={lc}>Margem</label>
              <select className={fc} value={a.margem} onChange={(e) => patch(a.id, { margem: Number(e.target.value) })}>
                {THREAT_MARGINS.map((m) => <option key={m} value={m}>{m === 20 ? "20 (padrão)" : m}</option>)}
              </select>
            </div>
            <div>
              <label className={lc}>Multiplicador</label>
              <select className={fc} value={a.mult} onChange={(e) => patch(a.id, { mult: Number(e.target.value) })}>
                {[2, 3, 4].map((m) => <option key={m} value={m}>x{m}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className={lc}>Dano adicional (opcional)</label>
            <input className={fc} placeholder="Ex: 8d6 trevas" value={a.extra}
              onChange={(e) => patch(a.id, { extra: e.target.value })} />
          </div>

          <p className="text-sm font-bold text-amber-950/85">{formatAttackText(a, params.valorAtaque, bonuses[k])}</p>
        </div>
      ))}

      {hits > 3 && (
        <p className="text-[11px] font-bold text-amber-700">Mais de 3 golpes no mesmo ataque costuma passar do recomendado pelo manual.</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function CreatureWizard({
  mode,
  baseThreat,
  onComplete,
  onCancel,
}: {
  mode: WizardMode;
  baseThreat?: Threat; // usado no modo "adjust"
  onComplete: (threat: Threat) => void;
  onCancel: () => void;
}) {
  const [step, setStep] = useState<WizardStep>(0);
  const [state, setState] = useState<WizardState>(() => {
    if (mode === "adjust" && baseThreat) {
      return {
        ...initialState,
        nome: baseThreat.name || "",
        conceito: baseThreat.description || "",
        tipo: baseThreat.tipo || "Monstro",
        tamanho: (baseThreat.tamanho as CreatureSize) || "Médio",
        nd: baseThreat.nd || "1",
        iniciativaBonus: baseThreat.iniciativa ?? 0,
        atributos: {
          for: String(baseThreat.for), des: String(baseThreat.des), con: String(baseThreat.con),
          int: String(baseThreat.int), sab: String(baseThreat.sab), car: String(baseThreat.car),
        },
        periciasTexto: baseThreat.pericias.join("\n"),
        habilidadesTexto: baseThreat.habilidades.join("\n"),
        tesouro: baseThreat.tesouro || "Padrão",
        equipamentosTexto: baseThreat.equipamentos.join("\n"),
      };
    }
    return initialState;
  });

  const update = (patch: Partial<WizardState>) => setState((s) => ({ ...s, ...patch }));

  const role = state.combatRole ?? "solo";
  const params: CreatureParams | undefined = getParamsForNdAndRole(state.nd, role);

  const goNext = () => setStep((s) => Math.min(7, s + 1) as WizardStep);
  const goBack = () => setStep((s) => Math.max(0, s - 1) as WizardStep);

  // ── Construção final da Threat ──────────────────────────────────────────
  const buildFinalThreat = (): Threat => {
    if (!params) return blankThreat();

    const defesaFinal = params.defesa + state.ajusteDefesa;
    const fortFinal = (state.resistenciaPrincipal === "fort" ? params.resistenciaForte
      : state.resistenciaMediana === "fort" ? params.resistenciaMedia
      : params.resistenciaFraca) + state.ajusteFort;
    const refFinal = (state.resistenciaPrincipal === "ref" ? params.resistenciaForte
      : state.resistenciaMediana === "ref" ? params.resistenciaMedia
      : params.resistenciaFraca) + state.ajusteRef;
    const vonFinal = (state.resistenciaPrincipal === "von" ? params.resistenciaForte
      : state.resistenciaMediana === "von" ? params.resistenciaMedia
      : params.resistenciaFraca) + state.ajusteVon;

    const ataquesTexto = buildAttackTexts(state.ataques, params.valorAtaque, params.danoMedio);

    const speedRow = SPEED_TABLE.find(
      (r) => r.forma === state.locomotionForm &&
        (r.faixaTamanho === "fixo" || r.faixaTamanho === SIZE_TO_FAIXA[state.tamanho])
    );
    const speedValue = speedRow
      ? (state.speedTier === "Lento" ? speedRow.lento : state.speedTier === "Rápido" ? speedRow.rapido : speedRow.normal)
      : "9m";
    const deslocamentoFinal = state.extraLocomotion
      ? `${speedValue}${speedValue.includes("(") ? "" : ""}, ${state.extraLocomotion}`
      : speedValue;

    const fn = CREATURE_FUNCTIONS.find((f) => f.id === state.functionId);

    return {
      id: Math.random().toString(36).slice(2, 9),
      name: state.nome.trim() || "Nova Ameaça",
      tipo: state.tipo,
      tamanho: state.tamanho,
      papel: fn?.label ?? "",
      nd: state.nd,
      description: state.conceito,
      iniciativa: state.iniciativaBonus,
      percepcao: 0,
      defesa: defesaFinal,
      pv: params.pv,
      pm: 0,
      deslocamento: deslocamentoFinal,
      fort: fortFinal,
      ref: refFinal,
      von: vonFinal,
      for: state.atributos.for,
      des: state.atributos.des,
      con: state.atributos.con,
      int: state.atributos.int,
      sab: state.atributos.sab,
      car: state.atributos.car,
      ataqueCorpoACorpo: ataquesTexto.corpoacorpo,
      ataqueDistancia: ataquesTexto.distancia,
      habilidades: state.habilidadesTexto.split("\n").map((s) => s.trim()).filter(Boolean),
      pericias: state.periciasTexto.split("\n").map((s) => s.trim()).filter(Boolean),
      equipamentos: state.equipamentosTexto.split("\n").map((s) => s.trim()).filter(Boolean),
      tesouro: state.tesouro,
      origin: mode === "adjust" ? `Ajustado de ${baseThreat?.name ?? "criatura base"}` : "Assistente Guiado",
    };
  };

  const fc = "w-full bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg px-3 py-2 text-amber-950 font-serif text-sm focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm";
  const lc = "text-[10px] uppercase tracking-widest text-amber-950/60 font-bold mb-1 block";
  const helpText = "text-xs text-amber-950/55 italic leading-relaxed mt-2 border-l-2 border-red-800/30 pl-3";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgb(var(--void-rgb))]/70 backdrop-blur-sm">
      <div className="bg-[rgb(var(--bg-rgb))] border-2 border-amber-900/40 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col font-serif">

        {/* Header */}
        <div className="p-6 border-b-2 border-amber-900/20 bg-[rgb(var(--bg-card-rgb))] rounded-t-2xl">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-red-800 tracking-wide flex items-center gap-2">
              <span>☠</span> {mode === "create" ? "Criar Nova Ameaça" : "Ajustar Ameaça Existente"}
            </h2>
            <button onClick={onCancel} className="text-amber-950/40 hover:text-red-800 text-2xl leading-none transition-colors">✕</button>
          </div>
          {/* Progress steps */}
          <div className="flex items-center gap-1">
            {STEP_LABELS.map((label, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <button
                  onClick={() => setStep(i as WizardStep)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all ${
                    i === step
                      ? "bg-red-800 border-red-900 text-white"
                      : i < step
                      ? "bg-emerald-700/20 border-emerald-700/50 text-emerald-500"
                      : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/40"
                  }`}
                >
                  {i < step ? "✓" : i}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-red-800 mt-2">
            Passo {step}: {STEP_LABELS[step]}
          </p>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex-1 custom-scrollbar">

          {/* ── PASSO 0: Conceito e Nome ──────────────────────────────── */}
          {step === 0 && (
            <div className="space-y-4">
              <p className="text-sm text-amber-950/75 leading-relaxed">
                Pense em como será a ameaça em termos gerais. Uma boa criatura pode ser descrita em poucas
                palavras — por exemplo, um dragão é um "réptil alado que cospe fogo".
              </p>
              <div>
                <label className={lc}>Nome da Criatura *</label>
                <input
                  className={fc}
                  placeholder="Ex: Goblin Xamã"
                  value={state.nome}
                  onChange={(e) => update({ nome: e.target.value })}
                />
              </div>
              <div>
                <label className={lc}>Conceito / Descrição</label>
                <textarea
                  className={`${fc} min-h-[100px] resize-y`}
                  placeholder="Ex: Um pequeno humanoide que canaliza a fúria da natureza, vivendo nas tribos do sul de Arton..."
                  value={state.conceito}
                  onChange={(e) => update({ conceito: e.target.value })}
                />
                <p className={helpText}>
                  Esse texto vira a descrição/história da criatura. O nome acima é o que aparece nos cards de combate.
                </p>
              </div>
              {mode === "adjust" && baseThreat && (
                <div className="bg-amber-800/10 border border-amber-800/20 rounded-xl p-3 text-xs text-amber-950/70">
                  <strong>Criatura base:</strong> {baseThreat.name} (ND {baseThreat.nd}, {baseThreat.tipo})
                </div>
              )}
            </div>
          )}

          {/* ── PASSO 1: Tipo, Tamanho e Papel ────────────────────────── */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className={lc}>Tipo</label>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((t) => (
                    <button key={t} onClick={() => update({ tipo: t })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${
                        state.tipo === t ? "bg-red-800/15 border-red-800/40 text-red-900" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/70 hover:border-amber-700/40"
                      }`}>{t}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className={lc}>Tamanho</label>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((s) => (
                    <button key={s} onClick={() => update({ tamanho: s })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${
                        state.tamanho === s ? "bg-red-800/15 border-red-800/40 text-red-900" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/70 hover:border-amber-700/40"
                      }`}>{s}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className={lc}>Função Narrativa (orienta o papel de combate)</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {CREATURE_FUNCTIONS.map((f) => (
                    <button key={f.id}
                      onClick={() => update({ functionId: f.id, combatRole: f.suggestedRole })}
                      className={`text-left p-3 rounded-xl border-2 transition-all ${
                        state.functionId === f.id ? "bg-red-800/10 border-red-800/40" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/15 hover:border-amber-700/40"
                      }`}>
                      <p className="font-bold text-sm text-red-800">{f.label}</p>
                      <p className="text-[11px] text-amber-950/60 leading-snug mt-0.5">{f.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={lc}>Papel de Combate</label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {(Object.keys(ROLE_DESCRIPTIONS) as CombatRole[]).map((r) => (
                    <button key={r} onClick={() => update({ combatRole: r })}
                      className={`text-left p-3 rounded-xl border-2 transition-all ${
                        state.combatRole === r ? "bg-red-800/10 border-red-800/40" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/15 hover:border-amber-700/40"
                      }`}>
                      <p className="font-bold text-sm text-red-800">{ROLE_DESCRIPTIONS[r].label}</p>
                      <p className="text-[11px] text-amber-950/60 leading-snug mt-0.5">{ROLE_DESCRIPTIONS[r].description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className={lc}>Forma de Locomoção</label>
                  <select className={fc} value={state.locomotionForm} onChange={(e) => update({ locomotionForm: e.target.value as WizardState["locomotionForm"] })}>
                    <option value="bipede">Bípede</option>
                    <option value="quadrupede">Quadrúpede</option>
                    <option value="voador">Voador</option>
                    <option value="escalador">Escalador</option>
                    <option value="escavador">Escavador</option>
                    <option value="nadador">Nadador</option>
                  </select>
                </div>
                <div>
                  <label className={lc}>Velocidade</label>
                  <select className={fc} value={state.speedTier} onChange={(e) => update({ speedTier: e.target.value as WizardState["speedTier"] })}>
                    <option value="Lento">Lento</option>
                    <option value="Normal">Normal</option>
                    <option value="Rápido">Rápido</option>
                  </select>
                </div>
                <div>
                  <label className={lc}>Deslocamento Secundário</label>
                  <input className={fc} placeholder="Ex: voo 12m" value={state.extraLocomotion} onChange={(e) => update({ extraLocomotion: e.target.value })} />
                </div>
              </div>
              <p className={helpText}>
                Deslocamentos abaixo de 6m podem deixar a ameaça fraca; acima de 18m dão vantagem tática
                importante, sobretudo para ataques à distância.
              </p>

              <div>
                <label className={lc}>Bônus de Iniciativa</label>
                <input type="number" className={`${fc} max-w-[140px]`} value={state.iniciativaBonus}
                  onChange={(e) => update({ iniciativaBonus: Number(e.target.value) })} />
                <p className={helpText}>
                  Geralmente igual ao bônus de Destreza da criatura. Criaturas rápidas ou alertas podem
                  ter um bônus adicional.
                </p>
              </div>
            </div>
          )}

          {/* ── PASSO 2: Nível de Desafio ──────────────────────────────── */}
          {step === 2 && (
            <div className="space-y-5">
              <p className="text-sm text-amber-950/75 leading-relaxed">
                O ND representa a experiência e categoria geral de poder da criatura — funciona como
                o "nível de personagem" dela.
              </p>
              <div>
                <label className={lc}>Nível de Desafio (ND)</label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_ND_OPTIONS.map((nd) => (
                    <button key={nd} onClick={() => update({ nd })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${
                        state.nd === nd ? "bg-red-800 border-red-900 text-white" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/70 hover:border-amber-700/40"
                      }`}>{nd}</button>
                  ))}
                </div>
              </div>
              {params && (
                <div className="bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-800 mb-2">
                    Patamar: {params.patamar} · Papel: {ROLE_DESCRIPTIONS[role].label}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">Ataque</p><p className="font-black text-red-800">+{params.valorAtaque}</p></div>
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">Dano Médio</p><p className="font-black text-red-800">{params.danoMedio}</p></div>
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">Defesa</p><p className="font-black text-red-800">{params.defesa}</p></div>
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">PV</p><p className="font-black text-red-800">{params.pv}</p></div>
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">CD Efeito</p><p className="font-black text-red-800">{params.cdEfeitoPadrao}</p></div>
                    <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-lg p-2"><p className="text-[9px] text-amber-950/50 uppercase">Resist.</p><p className="font-black text-red-800 text-xs">{params.resistenciaForte}/{params.resistenciaMedia}/{params.resistenciaFraca}</p></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── PASSO 3: Estatísticas de Combate ──────────────────────── */}
          {step === 3 && params && (
            <div className="space-y-5">
              <p className="text-sm text-amber-950/75 leading-relaxed">
                Distribua os três valores de resistência (forte 80%, média 50%, fraca 20%) entre
                Fortitude, Reflexos e Vontade, e ajuste a Defesa se desejar.
              </p>

              <div>
                <label className={lc}>Distribuição de Resistências</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {(["fort", "ref", "von"] as const).map((attr) => (
                    <div key={attr} className="bg-[rgb(var(--bg-card-rgb))] rounded-xl p-3 border border-amber-900/15">
                      <p className="text-xs font-bold text-red-800 uppercase mb-2">{attr === "fort" ? "Fortitude" : attr === "ref" ? "Reflexos" : "Vontade"}</p>
                      <div className="space-y-1.5">
                        {(["resistenciaPrincipal", "resistenciaMediana", "resistenciaFraca"] as const).map((field) => {
                          const labels = { resistenciaPrincipal: `Forte (${params.resistenciaForte})`, resistenciaMediana: `Média (${params.resistenciaMedia})`, resistenciaFraca: `Fraca (${params.resistenciaFraca})` };
                          const isSelected = state[field] === attr;
                          return (
                            <button key={field}
                              onClick={() => {
                                // Garante atribuição única — troca com quem já tinha esse slot
                                const prevHolder = (Object.keys(labels) as Array<keyof typeof labels>).find((f) => state[f] === attr);
                                const currentValueOfField = state[field];
                                update({
                                  [field]: attr,
                                  ...(prevHolder && prevHolder !== field ? { [prevHolder]: currentValueOfField } : {}),
                                } as Partial<WizardState>);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                                isSelected ? "bg-red-800/20 border-red-800/40 text-red-900" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/15 text-amber-950/60 hover:border-amber-700/40"
                              }`}>
                              {labels[field]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <p className={helpText}>
                  Para criaturas grandes/vigorosas, Fortitude tende a ser a resistência principal. Para
                  pequenas/ágeis, Reflexos. Para mentais/mágicas/intriga, Vontade.
                </p>
              </div>

              <div>
                <label className={lc}>Ajuste Fino de Defesa (±2 níveis de ND)</label>
                <div className="flex items-center gap-3">
                  <input type="range" min={-2} max={2} step={1} value={state.ajusteDefesa}
                    onChange={(e) => update({ ajusteDefesa: Number(e.target.value) })}
                    className="flex-1" />
                  <span className="font-black text-red-800 text-lg w-16 text-center">
                    {params.defesa + state.ajusteDefesa}
                  </span>
                </div>
                <p className={helpText}>
                  Você pode ajustar cada estatística para o valor de 1 ou 2 ND a mais ou a menos,
                  compensando com reduções equivalentes em outra estatística (ex: +Defesa, −Reflexos).
                </p>
              </div>
            </div>
          )}

          {/* ── PASSO 4: Ataques ───────────────────────────────────────── */}
          {step === 4 && params && (
            <div className="space-y-5">
              <p className="text-sm text-amber-950/75 leading-relaxed">
                Valor de ataque (+{params.valorAtaque}) e dano médio ({params.danoMedio}) vêm do ND. Corpo a corpo e à distância são
                opções diferentes: cada uma usa o dano médio inteiro. Os golpes do mesmo tipo (ex.: mordida + duas garras) dividem esse dano.
              </p>

              <AttackGroup tipo="corpoacorpo" titulo="Corpo a corpo" ataques={state.ataques} params={params}
                onChange={(next) => update({ ataques: next })} fc={fc} lc={lc} />
              <AttackGroup tipo="distancia" titulo="À distância" ataques={state.ataques} params={params}
                onChange={(next) => update({ ataques: next })} fc={fc} lc={lc} />

              {(() => {
                const textos = buildAttackTexts(state.ataques, params.valorAtaque, params.danoMedio);
                return (
                  <div className="bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 rounded-xl p-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-800">Resultado na ficha</p>
                    {!textos.corpoacorpo && !textos.distancia && (
                      <p className="text-sm text-amber-950/55 italic">Nenhum ataque definido.</p>
                    )}
                    {textos.corpoacorpo && (
                      <p className="text-sm text-amber-950/85"><span className="font-bold text-red-800">Corpo a corpo: </span>{textos.corpoacorpo}</p>
                    )}
                    {textos.distancia && (
                      <p className="text-sm text-amber-950/85"><span className="font-bold text-red-800">À distância: </span>{textos.distancia}</p>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* ── PASSO 5: Habilidades ───────────────────────────────────── */}
          {step === 5 && params && (
            <div className="space-y-4">
              {(() => {
                const est = estimateHabilityCount(role, params.patamar);
                return (
                  <div className="bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-800 mb-1">Quantidade recomendada</p>
                    <p className="text-sm text-amber-950/80">
                      Entre <strong>{est.min}</strong> e <strong>{est.max}</strong> habilidades para um {ROLE_DESCRIPTIONS[role].label.toLowerCase()} de patamar {params.patamar}.
                    </p>
                  </div>
                );
              })()}
              <p className="text-sm text-amber-950/75 leading-relaxed">
                Pense primeiro no que a criatura faz, depois nas regras. Equilibre habilidades passivas
                (redução de dano, regeneração) com ativas (magias, ataques especiais). A CD padrão para
                resistir é <strong>{params.cdEfeitoPadrao}</strong>.
              </p>
              <div>
                <label className={lc}>Habilidades (uma por linha — use "(X PM)" se custar mana)</label>
                <textarea
                  className={`${fc} min-h-[160px] resize-y`}
                  placeholder={`Garras Venenosas. O alvo deve fazer Fort CD ${params.cdEfeitoPadrao} ou fica envenenado.\nUivo Aterrorizante (2 PM). Todos a 9m ficam abalados.`}
                  value={state.habilidadesTexto}
                  onChange={(e) => update({ habilidadesTexto: e.target.value })}
                />
              </div>
              <p className={helpText}>
                Habilidades de ataque comuns: dano em área, condições. Habilidades de defesa: redução de
                dano, regeneração. Percepção e movimento (visão no escuro, ignorar terreno difícil) evitam
                que o grupo se esconda ou fuja facilmente.
              </p>
            </div>
          )}

          {/* ── PASSO 6: Estatísticas Secundárias ──────────────────────── */}
          {step === 6 && (
            <div className="space-y-5">
              <p className="text-sm text-amber-950/75 leading-relaxed">
                Os atributos não afetam as estatísticas de combate (já definidas pelo ND), mas importam
                para testes de atributo e perícias não listadas.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {(["for", "des", "con", "int", "sab", "car"] as const).map((attr) => (
                  <div key={attr}>
                    <label className={lc}>{attr.toUpperCase()}</label>
                    <input className={fc} value={state.atributos[attr]}
                      onChange={(e) => update({ atributos: { ...state.atributos, [attr]: e.target.value } })} />
                  </div>
                ))}
              </div>
              <div>
                <label className={lc}>Perícias Treinadas (uma por linha)</label>
                <textarea className={`${fc} min-h-[90px] resize-y`} placeholder={"Furtividade +10\nPercepção +5"} value={state.periciasTexto} onChange={(e) => update({ periciasTexto: e.target.value })} />
              </div>
            </div>
          )}

          {/* ── PASSO 7: Equipamento e Tesouro ─────────────────────────── */}
          {step === 7 && (
            <div className="space-y-5">
              <div>
                <label className={lc}>Categoria de Tesouro</label>
                <div className="flex gap-2">
                  {["Nenhum", "Metade", "Padrão", "Dobro"].map((t) => (
                    <button key={t} onClick={() => update({ tesouro: t })}
                      className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                        state.tesouro === t ? "bg-red-800/15 border-red-800/40 text-red-900" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/70"
                      }`}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className={lc}>Equipamentos (um por linha)</label>
                <textarea className={`${fc} min-h-[90px] resize-y`} placeholder={"Espada Longa\nEscudo de Madeira"} value={state.equipamentosTexto} onChange={(e) => update({ equipamentosTexto: e.target.value })} />
              </div>

              {/* Resumo final */}
              <div className="bg-[rgb(var(--void-rgb))] text-white rounded-xl p-5 mt-2">
                <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-3">Resumo da Ficha</p>
                {(() => {
                  const t = buildFinalThreat();
                  return (
                    <div className="space-y-1 text-sm">
                      <p className="font-bold text-base">{t.name} <span className="text-white/50 text-xs">ND {t.nd}</span></p>
                      <p className="text-white/70 text-xs">{t.tipo} · {t.tamanho} · {t.papel}</p>
                      <p className="text-white/85">DEF {t.defesa} · Fort +{t.fort} · Ref +{t.ref} · Von +{t.von} · PV {t.pv}</p>
                      <p className="text-white/85">Iniciativa {t.iniciativa >= 0 ? "+" : ""}{t.iniciativa}</p>
                      <p className="text-white/85">Desl. {t.deslocamento}</p>
                      {t.ataqueCorpoACorpo && <p className="text-white/85">CaC: {t.ataqueCorpoACorpo}</p>}
                      {t.ataqueDistancia && <p className="text-white/85">Dist: {t.ataqueDistancia}</p>}
                      <p className="text-white/60 text-xs">{t.habilidades.length} habilidade(s)</p>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t-2 border-amber-900/20 bg-[rgb(var(--bg-card-rgb))] rounded-b-2xl flex items-center justify-between gap-3">
          <button onClick={onCancel} className="px-5 py-2.5 rounded-xl border-2 border-amber-900/20 text-amber-950/60 font-bold text-xs uppercase tracking-widest hover:border-red-800/40 hover:text-red-800 transition-all">
            Cancelar
          </button>
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button onClick={goBack} className="px-5 py-2.5 rounded-xl border-2 border-amber-900/30 text-amber-950/70 font-bold text-xs uppercase tracking-widest hover:border-amber-700/50 transition-all">
                ← Voltar
              </button>
            )}
            {step < 7 ? (
              <button
                onClick={goNext}
                disabled={step === 0 && !state.nome.trim()}
                className="px-8 py-2.5 bg-red-800 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-900 hover:-translate-y-0.5 transition-all shadow-md disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                Próximo →
              </button>
            ) : (
              <button onClick={() => onComplete(buildFinalThreat())} className="px-8 py-2.5 bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-800 hover:-translate-y-0.5 transition-all shadow-md">
                ✓ {mode === "create" ? "Criar Ameaça" : "Salvar Ajustes"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}