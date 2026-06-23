"use client";

import { useState, useMemo } from "react";
import { Threat } from "@/types/threat";
import {
  GeneratorFilters,
  GeneratedEncounter,
  EncounterDifficulty,
  DIFFICULTY_LABELS,
  CombatRoleFilter,
  generateEncounter,
  extractAvailableTypes,
} from "./encounter-generator";

// ─────────────────────────────────────────────────────────────────────────────
// Modal: Gerador de Encontros Aleatórios
// ─────────────────────────────────────────────────────────────────────────────

const ND_OPTIONS = ["1/4", "1/2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "S", "S+"];

export default function EncounterGeneratorModal({
  pool,
  onAccept,
  onClose,
}: {
  pool: Threat[]; // biblioteca + importadas + personalizadas, combinadas
  onAccept: (entries: { threat: Threat; quantity: number }[]) => void;
  onClose: () => void;
}) {
  const availableTypes = useMemo(() => extractAvailableTypes(pool), [pool]);

  const [partyAvgNd, setPartyAvgNd] = useState(5);
  const [partySize, setPartySize] = useState(4);
  const [difficulty, setDifficulty] = useState<EncounterDifficulty>("medio");
  const [ndMin, setNdMin] = useState("1/4");
  const [ndMax, setNdMax] = useState("10");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [roleFilter, setRoleFilter] = useState<CombatRoleFilter>("qualquer");
  const [preferBoss, setPreferBoss] = useState(false);
  const [surpriseMe, setSurpriseMe] = useState(false);

  const [result, setResult] = useState<GeneratedEncounter | null>(null);
  const [noResultMsg, setNoResultMsg] = useState("");

  const toggleType = (t: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  };

  const roll = () => {
    setNoResultMsg("");
    const filters: GeneratorFilters = {
      ndMin, ndMax,
      types: Array.from(selectedTypes),
      roleFilter,
      surpriseMe,
      partyAvgNd, partySize, difficulty,
      preferSingleStrongCreature: preferBoss,
    };
    const generated = generateEncounter(pool, filters);
    if (!generated) {
      setNoResultMsg("Nenhuma criatura encontrada com esses filtros. Tente ampliar o intervalo de ND ou os tipos.");
      setResult(null);
      return;
    }
    setResult(generated);
  };

  const fc = "w-full bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg px-3 py-2 text-amber-950 font-serif text-sm focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm";
  const lc = "text-[10px] uppercase tracking-widest text-amber-950/60 font-bold mb-1 block";

  const budgetPct = result ? Math.min(100, Math.round((result.totalNdUsed / result.ndBudget) * 100)) : 0;
  const budgetColor = budgetPct > 110 ? "bg-red-700" : budgetPct > 90 ? "bg-amber-600" : "bg-emerald-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1810]/70 backdrop-blur-sm">
      <div className="bg-[#f5e6d0] border-2 border-amber-900/40 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col font-serif">

        {/* Header */}
        <div className="p-6 border-b-2 border-amber-900/20 bg-[#e8dac1] rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold text-red-800 tracking-wide flex items-center gap-2">
            Gerador de Encontros
          </h2>
          <button onClick={onClose} className="text-amber-950/40 hover:text-red-800 text-2xl leading-none transition-colors">✕</button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex-1 custom-scrollbar space-y-5">

          {/* Surpreenda-me */}
          <button
            onClick={() => setSurpriseMe((v) => !v)}
            className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              surpriseMe ? "bg-red-800/15 border-red-800/40" : "bg-[#e8dac1] border-amber-900/20 hover:border-amber-700/40"
            }`}
          >
            <div className="text-left">
              <p className="font-bold text-red-800">Surpreenda-me</p>
              <p className="text-xs text-amber-950/60 mt-0.5">Ignora os filtros de tipo/papel/ND e sorteia livremente, mantendo apenas o orçamento.</p>
            </div>
            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${surpriseMe ? "bg-red-800 border-red-900" : "bg-[#fbf5e6] border-amber-900/30"}`}>
              {surpriseMe && <span className="text-[#fbf5e6] text-xs">✓</span>}
            </span>
          </button>

          {/* Grupo de jogadores */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-800 mb-2">Grupo de Jogadores</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={lc}>ND médio do grupo</label>
                <input type="number" min={1} className={fc} value={partyAvgNd} onChange={(e) => setPartyAvgNd(Number(e.target.value) || 1)} />
              </div>
              <div>
                <label className={lc}>Número de jogadores</label>
                <input type="number" min={1} max={8} className={fc} value={partySize} onChange={(e) => setPartySize(Number(e.target.value) || 1)} />
              </div>
            </div>
          </div>

          {/* Dificuldade */}
          <div>
            <label className={lc}>Dificuldade do Encontro</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(DIFFICULTY_LABELS) as EncounterDifficulty[]).map((d) => (
                <button key={d} onClick={() => setDifficulty(d)}
                  className={`p-2.5 rounded-lg border-2 text-left transition-all ${
                    difficulty === d ? "bg-red-800/15 border-red-800/40" : "bg-[#fbf5e6] border-amber-900/15 hover:border-amber-700/40"
                  }`}>
                  <p className="text-xs font-bold text-red-800">{DIFFICULTY_LABELS[d].label}</p>
                  <p className="text-[10px] text-amber-950/55 leading-snug mt-0.5">{DIFFICULTY_LABELS[d].description}</p>
                </button>
              ))}
            </div>
          </div>

          {!surpriseMe && (
            <>
              {/* Faixa de ND */}
              <div>
                <label className={lc}>Faixa de ND das Criaturas</label>
                <div className="grid grid-cols-2 gap-3">
                  <select className={fc} value={ndMin} onChange={(e) => setNdMin(e.target.value)}>
                    {ND_OPTIONS.map((nd) => <option key={nd} value={nd}>Mín: {nd}</option>)}
                  </select>
                  <select className={fc} value={ndMax} onChange={(e) => setNdMax(e.target.value)}>
                    {ND_OPTIONS.map((nd) => <option key={nd} value={nd}>Máx: {nd}</option>)}
                  </select>
                </div>
              </div>

              {/* Tipos/Temas */}
              <div>
                <label className={lc}>Tema {selectedTypes.size > 0 && `(${selectedTypes.size} selecionados)`}</label>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto custom-scrollbar p-1">
                  {availableTypes.map((t) => (
                    <button key={t} onClick={() => toggleType(t)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${
                        selectedTypes.has(t) ? "bg-red-800/20 border-red-800/40 text-red-900" : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/65 hover:border-amber-700/40"
                      }`}>{t}</button>
                  ))}
                </div>
                <p className="text-[10px] text-amber-950/40 italic mt-1">Nenhum selecionado = todos os temas.</p>
              </div>

              {/* Papel de combate */}
              <div>
                <label className={lc}>Papel de Combate</label>
                <div className="grid grid-cols-4 gap-2">
                  {(["qualquer", "solo", "lacaio", "especial"] as CombatRoleFilter[]).map((r) => (
                    <button key={r} onClick={() => setRoleFilter(r)}
                      className={`px-2 py-2 rounded-lg text-xs font-bold border-2 capitalize transition-all ${
                        roleFilter === r ? "bg-red-800/15 border-red-800/40 text-red-900" : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/65"
                      }`}>{r}</button>
                  ))}
                </div>
              </div>

              {/* Preferir chefão */}
              <button
                onClick={() => setPreferBoss((v) => !v)}
                className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                  preferBoss ? "bg-red-800/15 border-red-800/40" : "bg-[#e8dac1] border-amber-900/20 hover:border-amber-700/40"
                }`}
              >
                <div className="text-left">
                  <p className="font-bold text-sm text-red-800">Priorizar uma Criatura Forte</p>
                  <p className="text-[11px] text-amber-950/60 mt-0.5">Monta o encontro com 1 chefão e, se sobrar orçamento, alguns lacaios.</p>
                </div>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${preferBoss ? "bg-red-800 border-red-900" : "bg-[#fbf5e6] border-amber-900/30"}`}>
                  {preferBoss && <span className="text-[#fbf5e6] text-[10px]">✓</span>}
                </span>
              </button>
            </>
          )}

          {/* Botão sortear */}
          <button onClick={roll}
            className="w-full py-3.5 bg-red-800 text-[#fbf5e6] rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-900 hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center gap-2">
            Sortear Encontro
          </button>

          {noResultMsg && (
            <p className="text-xs text-red-800 font-bold bg-red-800/10 border border-red-800/20 rounded-lg px-3 py-2">{noResultMsg}</p>
          )}

          {/* Resultado */}
          {result && (
            <div className="bg-[#2a1810] text-[#fbf5e6] rounded-xl p-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-1.5">
                  <span className="text-[#fbf5e6]/60">Orçamento de ND usado</span>
                  <span>{result.totalNdUsed} / {result.ndBudget}</span>
                </div>
                <div className="h-2.5 bg-[#1f100a] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${budgetColor}`} style={{ width: `${budgetPct}%` }} />
                </div>
              </div>

              <div className="space-y-2">
                {result.entries.map((entry, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#1f100a] rounded-lg px-3 py-2.5">
                    <div>
                      <p className="font-bold text-sm">{entry.threat.name}</p>
                      <p className="text-[10px] text-[#fbf5e6]/50 uppercase tracking-widest">{entry.threat.tema || entry.threat.tipo} · ND {entry.threat.nd}</p>
                    </div>
                    <span className="text-red-400 font-black text-lg">×{entry.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button onClick={roll}
                  className="flex-1 py-2.5 border-2 border-[#fbf5e6]/20 text-[#fbf5e6]/70 rounded-lg text-xs font-bold uppercase tracking-widest hover:border-[#fbf5e6]/40 hover:text-[#fbf5e6] transition-all">
                  Sortear Outro
                </button>
                <button onClick={() => onAccept(result.entries)}
                  className="flex-1 py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-emerald-800 transition-all">
                  ✓ Usar este Encontro
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}