"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Threat } from "@/types/threat";
import { Condition } from "@/types/condition";
import { threats as allThreats } from "@/data/threats";
import { conditions as allConditions } from "@/data/conditions";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlayerParticipant {
  id: string;
  name: string;
  type: "player";
  initiativeRoll: number;
  conditions: string[];
}

interface MonsterParticipant {
  id: string;
  name: string;
  type: "monster";
  initiativeRoll: number;
  threat: Threat;
  pvMax: number;
  pvCurrent: number;
  pmMax: number;
  pmCurrent: number;
  conditions: string[];
}

type Participant = PlayerParticipant | MonsterParticipant;
type CombatPhase = "setup" | "rolling" | "combat";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const uid = () => Math.random().toString(36).slice(2, 9);

const extractPmCost = (text: string): number | null => {
  // Cobre: (2 PM), [2 PM], "2 PM", "custa 2 PM", "gasta 2 PM", "2PM"
  const patterns = [
    /\(\s*(\d+)\s*PM\s*\)/i,   // (2 PM)
    /\[\s*(\d+)\s*PM\s*\]/i,   // [2 PM]
    /custo?\s*[:\s]\s*(\d+)\s*PM/i, // custo: 2 PM
    /gasta?\s+(\d+)\s*PM/i,    // gasta 2 PM
    /(\d+)\s*PM\b/i,           // 2 PM  ou  2PM (fallback)
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) return parseInt(m[1]);
  }
  return null;
};

const getHabilityTitle = (hab: string): string => hab.split(/[.(]/)[0].trim();

const conditionById = (id: string): Condition | undefined =>
  allConditions.find((c) => c.id === id);

const POSITIVE_CONDITIONS = new Set([
  "abencoado", "absorvendo", "alentado", "audacioso", "disposto",
  "fortalecido", "intrepido", "leve", "poderoso", "prevenido",
  "relaxado", "restaurando", "veloz", "vigoroso",
]);

// Template de monstro em branco para o formulário personalizado
const blankThreat = (): Threat => ({
  id: uid(),
  name: "",
  tipo: "Monstro",
  tamanho: "Médio",
  papel: "",
  nd: "1",
  description: "",
  iniciativa: 0,
  percepcao: 0,
  defesa: 10,
  pv: 10,
  pm: 0,
  deslocamento: "9m",
  fort: 0,
  ref: 0,
  von: 0,
  for: "10",
  des: "10",
  con: "10",
  int: "10",
  sab: "10",
  car: "10",
  habilidades: [],
  pericias: [],
  equipamentos: [],
  tesouro: "Nenhum",
});

// ─── Tooltip de Condição (tags nos cards) ────────────────────────────────────

function ConditionTag({ conditionId, onRemove }: { conditionId: string; onRemove: () => void }) {
  const [open, setOpen] = useState(false);
  const cond = conditionById(conditionId);
  if (!cond) return null;
  const isPositive = POSITIVE_CONDITIONS.has(conditionId);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={onRemove}
        title="Clique para remover"
        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all select-none ${
          isPositive
            ? "bg-emerald-700/15 border-emerald-700/30 text-emerald-900 hover:bg-emerald-700/30"
            : "bg-red-800/15 border-red-800/30 text-red-900 hover:bg-red-800/30"
        }`}
      >
        {cond.name} ✕
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-1 z-[60] w-64 bg-[#2a1810] text-[#fbf5e6] text-xs rounded-xl p-3 shadow-2xl border border-amber-900/40 pointer-events-none">
          <p className="font-bold text-amber-400 mb-1">{cond.name}</p>
          {cond.efeito && <p className="text-amber-400/50 text-[10px] mb-1.5 uppercase tracking-widest">{cond.efeito}</p>}
          <p className="leading-relaxed text-[#fbf5e6]/80 whitespace-pre-line">{cond.description}</p>
        </div>
      )}
    </div>
  );
}

// ─── Seletor de Condições Inline (dentro do card) ────────────────────────────

function ConditionSelector({
  active,
  onToggle,
}: {
  active: string[];
  onToggle: (id: string) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = allConditions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-2 bg-[#e8dac1]/70 border border-amber-900/20 rounded-xl p-3">
      <input
        autoFocus
        type="text"
        placeholder="Buscar condição..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-1.5 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950 placeholder-amber-900/35 font-serif text-xs focus:outline-none focus:border-red-800/50 mb-2"
      />

      <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto custom-scrollbar">
        {filtered.map((c) => {
          const isActive = active.includes(c.id);
          const isPos = POSITIVE_CONDITIONS.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => onToggle(c.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold border-2 transition-all ${
                isActive
                  ? isPos
                    ? "bg-emerald-700/25 border-emerald-700/50 text-emerald-900"
                    : "bg-red-800/25 border-red-800/50 text-red-900"
                  : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/65 hover:border-amber-700/50"
              }`}
            >
              {isActive ? "✓ " : ""}{c.name}
            </button>
          );
        })}
        {!filtered.length && (
          <p className="text-xs text-amber-950/30 italic py-1 w-full text-center">Nenhuma encontrada.</p>
        )}
      </div>
    </div>
  );
}

// ─── Modal de Edição de Monstro ───────────────────────────────────────────────

function EditMonsterModal({
  monster,
  onSave,
  onClose,
}: {
  monster: MonsterParticipant;
  onSave: (updated: MonsterParticipant) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState({ ...monster.threat });
  const [pvMax, setPvMax] = useState(monster.pvMax);
  const [pmMax, setPmMax] = useState(monster.pmMax);

  const fc = "w-full bg-[#fbf5e6] border-2 border-amber-900/30 rounded-lg px-3 py-2 text-amber-950 font-serif focus:outline-none focus:border-red-800/60 text-sm";
  const lc = "text-[10px] uppercase tracking-widest text-amber-950/50 font-bold font-serif mb-1 block";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#f5e6d0] border-2 border-amber-900/40 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-5 border-b-2 border-amber-900/20 flex items-center justify-between">
          <h2 className="text-xl font-bold text-red-800 font-serif">Editar: {monster.threat.name}</h2>
          <button onClick={onClose} className="text-amber-950/40 hover:text-red-800 text-2xl leading-none">✕</button>
        </div>
        <div className="overflow-y-auto p-5 flex flex-col gap-4 custom-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            <div><label className={lc}>Nome</label><input className={fc} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} /></div>
            <div><label className={lc}>ND</label><input className={fc} value={draft.nd} onChange={(e) => setDraft({ ...draft, nd: e.target.value })} /></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className={lc}>PV Máximo</label><input type="number" className={fc} value={pvMax} onChange={(e) => setPvMax(Number(e.target.value))} /></div>
            <div><label className={lc}>PM Máximo</label><input type="number" className={fc} value={pmMax} onChange={(e) => setPmMax(Number(e.target.value))} /></div>
            <div><label className={lc}>Defesa</label><input type="number" className={fc} value={draft.defesa} onChange={(e) => setDraft({ ...draft, defesa: Number(e.target.value) })} /></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className={lc}>Fort</label><input type="number" className={fc} value={draft.fort} onChange={(e) => setDraft({ ...draft, fort: Number(e.target.value) })} /></div>
            <div><label className={lc}>Ref</label><input type="number" className={fc} value={draft.ref} onChange={(e) => setDraft({ ...draft, ref: Number(e.target.value) })} /></div>
            <div><label className={lc}>Von</label><input type="number" className={fc} value={draft.von} onChange={(e) => setDraft({ ...draft, von: Number(e.target.value) })} /></div>
          </div>
          <div><label className={lc}>Ataque Corpo a Corpo</label><input className={fc} value={draft.ataqueCorpoACorpo ?? ""} onChange={(e) => setDraft({ ...draft, ataqueCorpoACorpo: e.target.value })} /></div>
          <div><label className={lc}>Ataque à Distância</label><input className={fc} value={draft.ataqueDistancia ?? ""} onChange={(e) => setDraft({ ...draft, ataqueDistancia: e.target.value })} /></div>
          <div>
            <label className={lc}>Habilidades (uma por linha)</label>
            <textarea className={`${fc} min-h-[100px] resize-y`} value={draft.habilidades.join("\n")} onChange={(e) => setDraft({ ...draft, habilidades: e.target.value.split("\n") })} />
          </div>
        </div>
        <div className="p-5 border-t-2 border-amber-900/20 flex gap-3 justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border-2 border-amber-900/30 text-amber-950/70 font-serif font-bold hover:border-amber-700/60 transition-all">Cancelar</button>
          <button
            onClick={() => {
              onSave({ ...monster, threat: draft as Threat, pvMax, pvCurrent: Math.min(monster.pvCurrent, pvMax), pmMax, pmCurrent: Math.min(monster.pmCurrent, pmMax) });
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-red-800 text-[#fbf5e6] font-serif font-bold hover:bg-red-900 transition-all shadow-md"
          >Salvar</button>
        </div>
      </div>
    </div>
  );
}

// ─── Card de Participante ─────────────────────────────────────────────────────

function ParticipantCard({
  participant,
  isActive,
  onUpdate,
  onEdit,
  onRemove,
  onLog,
}: {
  participant: Participant;
  isActive: boolean;
  onUpdate: (p: Participant) => void;
  onEdit?: () => void;
  onRemove: () => void;
  onLog: (msg: string) => void;
}) {
  const [dmgInput, setDmgInput] = useState("");
  const [healInput, setHealInput] = useState("");
  const [showCondSelector, setShowCondSelector] = useState(false);

  const isMonster = participant.type === "monster";
  const m = isMonster ? (participant as MonsterParticipant) : null;

  const pvPct = m ? Math.round((m.pvCurrent / m.pvMax) * 100) : 100;
  const pvColor = pvPct > 60 ? "bg-emerald-700" : pvPct > 30 ? "bg-amber-600" : "bg-red-700";
  const pmPct = m && m.pmMax > 0 ? Math.round((m.pmCurrent / m.pmMax) * 100) : 0;

  const applyDamage = () => {
    if (!m) return;
    const v = parseInt(dmgInput);
    if (!v || v <= 0) return;
    const newPv = Math.max(0, m.pvCurrent - v);
    onLog(`💥 ${m.name} sofreu ${v} de dano → ${newPv}/${m.pvMax} PV${newPv === 0 ? " — INCAPACITADO!" : ""}`);
    onUpdate({ ...m, pvCurrent: newPv });
    setDmgInput("");
  };

  const applyHeal = () => {
    if (!m) return;
    const v = parseInt(healInput);
    if (!v || v <= 0) return;
    const newPv = Math.min(m.pvMax, m.pvCurrent + v);
    onLog(`💚 ${m.name} curou ${newPv - m.pvCurrent} PV → ${newPv}/${m.pvMax} PV`);
    onUpdate({ ...m, pvCurrent: newPv });
    setHealInput("");
  };

  const useAbility = (hab: string) => {
    if (!m) return;
    const cost = extractPmCost(hab);
    const title = getHabilityTitle(hab);
    if (cost !== null) {
      if (m.pmCurrent < cost) {
        onLog(`⚠ ${m.name} não tem PM para "${title}" (precisa ${cost}, tem ${m.pmCurrent})`);
        return;
      }
      const newPm = m.pmCurrent - cost;
      onLog(`🔵 ${m.name} usou "${title}" (−${cost} PM) → ${newPm}/${m.pmMax} PM`);
      onUpdate({ ...m, pmCurrent: newPm });
    } else {
      onLog(`⚡ ${m.name} usou "${title}"`);
    }
  };

  const toggleCondition = (condId: string) => {
    const has = participant.conditions.includes(condId);
    const cond = conditionById(condId);
    if (!cond) return;
    onLog(has ? `🔓 ${participant.name}: "${cond.name}" removida` : `🔒 ${participant.name}: "${cond.name}" aplicada`);
    onUpdate({
      ...participant,
      conditions: has ? participant.conditions.filter((c) => c !== condId) : [...participant.conditions, condId],
    });
  };

  const ic = "w-20 bg-[#fbf5e6] border-2 border-amber-900/25 rounded-lg px-2 py-1.5 text-amber-950 font-serif text-sm focus:outline-none focus:border-red-800/60 text-center";

  return (
    <div className={`relative bg-[#f5e6d0] border-2 rounded-2xl transition-all duration-300 font-serif overflow-visible ${
      isActive
        ? "border-red-700 shadow-[0_0_0_3px_rgba(185,28,28,0.2),0_4px_24px_rgba(185,28,28,0.12)]"
        : "border-amber-900/25 shadow-md"
    }`}>
      {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 via-amber-600 to-red-800 rounded-t-2xl" />}

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-2 ${
              isActive ? "bg-red-800 border-red-900 text-[#fbf5e6]" : "bg-[#e8dac1] border-amber-900/30 text-amber-950/70"
            }`}>
              {isMonster ? "☠" : "⚔"}
            </span>
            <div className="min-w-0">
              <h3 className="font-bold text-amber-950 text-base leading-tight truncate">{participant.name}</h3>
              {m && <p className="text-xs text-amber-950/50">{m.threat.tipo} · ND {m.threat.nd}</p>}
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs text-amber-950/50 font-bold bg-[#e8dac1] px-2 py-1 rounded-lg border border-amber-900/20">INI {participant.initiativeRoll}</span>
            {isMonster && onEdit && (
              <button onClick={onEdit} title="Editar criatura" className="w-7 h-7 flex items-center justify-center rounded-lg border-2 border-amber-900/20 bg-[#e8dac1] text-amber-950/50 hover:text-red-800 hover:border-red-800/40 transition-all text-xs">✎</button>
            )}
            <button onClick={onRemove} title="Remover" className="w-7 h-7 flex items-center justify-center rounded-lg border-2 border-amber-900/20 bg-[#e8dac1] text-amber-950/40 hover:text-red-800 hover:border-red-800/40 transition-all text-xs">✕</button>
          </div>
        </div>

        {/* Stats (monstros) */}
        {m && (
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mb-3 text-[11px] font-bold">
            <span className="text-amber-950/50">DEF <span className="text-amber-950/80">{m.threat.defesa}</span></span>
            <span className="text-amber-950/50">Fort <span className="text-amber-950/80">+{m.threat.fort}</span></span>
            <span className="text-amber-950/50">Ref <span className="text-amber-950/80">+{m.threat.ref}</span></span>
            <span className="text-amber-950/50">Von <span className="text-amber-950/80">+{m.threat.von}</span></span>
            {m.threat.percepcao > 0 && <span className="text-amber-950/50">Percepção <span className="text-amber-950/80">+{m.threat.percepcao}</span></span>}
            <span className="text-amber-950/50">Desl. <span className="text-amber-950/80">{m.threat.deslocamento}</span></span>
          </div>
        )}

        {/* Barras PV / PM */}
        {m && (
          <div className="space-y-2 mb-3">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-amber-950/50">PV</span>
                <span className={m.pvCurrent === 0 ? "text-red-700 font-black" : "text-amber-950/70"}>
                  {m.pvCurrent} / {m.pvMax}{m.pvCurrent === 0 ? " — INCAPACITADO" : ""}
                </span>
              </div>
              <div className="h-2.5 bg-amber-900/15 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${pvColor}`} style={{ width: `${pvPct}%` }} />
              </div>
            </div>
            {m.pmMax > 0 && (
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-blue-800/60">PM</span>
                  <span className="text-blue-800/70">{m.pmCurrent} / {m.pmMax}</span>
                </div>
                <div className="h-2 bg-blue-900/10 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-blue-700 transition-all duration-500" style={{ width: `${pmPct}%` }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Condições ativas */}
        {participant.conditions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {participant.conditions.map((cid) => (
              <ConditionTag key={cid} conditionId={cid} onRemove={() => toggleCondition(cid)} />
            ))}
          </div>
        )}

        {/* Dano / Cura / Condição */}
        {m && (
          <div className="flex gap-2 flex-wrap mb-3">
            <div className="flex items-center gap-1.5">
              <input type="number" min="0" placeholder="Dano" value={dmgInput}
                onChange={(e) => setDmgInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyDamage()}
                className={ic} />
              <button onClick={applyDamage} className="px-3 py-1.5 bg-red-800 text-[#fbf5e6] rounded-lg text-xs font-black hover:bg-red-900 transition-all">Dano</button>
            </div>
            <div className="flex items-center gap-1.5">
              <input type="number" min="0" placeholder="Cura" value={healInput}
                onChange={(e) => setHealInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyHeal()}
                className={ic} />
              <button onClick={applyHeal} className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg text-xs font-black hover:bg-emerald-800 transition-all">Curar</button>
            </div>
            <button
              onClick={() => setShowCondSelector((v) => !v)}
              className={`px-3 py-1.5 rounded-lg border-2 text-xs font-bold transition-all ${
                showCondSelector
                  ? "border-red-800/40 bg-red-800/10 text-red-900"
                  : "border-amber-900/25 text-amber-950/60 hover:border-amber-700/50"
              }`}
            >
              {showCondSelector ? "▲ Condições" : "+ Condição"}
            </button>
          </div>
        )}

        {/* Botão condição players */}
        {!m && (
          <div className="mb-2">
            <button
              onClick={() => setShowCondSelector((v) => !v)}
              className={`px-3 py-1.5 rounded-lg border-2 text-xs font-bold transition-all ${
                showCondSelector
                  ? "border-red-800/40 bg-red-800/10 text-red-900"
                  : "border-amber-900/25 text-amber-950/60 hover:border-amber-700/50"
              }`}
            >
              {showCondSelector ? "▲ Condições" : "+ Condição"}
            </button>
          </div>
        )}

        {/* Seletor de condições inline */}
        {showCondSelector && (
          <ConditionSelector active={participant.conditions} onToggle={toggleCondition} />
        )}

        {/* Habilidades — sempre visíveis */}
        {m && m.threat.habilidades.length > 0 && (
          <div className="border-t border-amber-900/15 pt-3 mt-3">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-2">Habilidades</p>
            <div className="space-y-2">
              {m.threat.habilidades.map((hab, i) => {
                const cost = extractPmCost(hab);
                const title = getHabilityTitle(hab);
                const canUse = cost === null || m.pmCurrent >= cost;
                const rest = hab.replace(title, "").replace(/^[.:\s]+/, "").trim();
                return (
                  <div key={i} className="flex items-start gap-2 group">
                    <button
                      onClick={() => useAbility(hab)}
                      disabled={cost !== null && !canUse}
                      className={`shrink-0 mt-0.5 px-2.5 py-1 rounded-lg text-[11px] font-black border-2 transition-all ${
                        cost !== null
                          ? canUse
                            ? "bg-blue-700/15 border-blue-700/40 text-blue-900 hover:bg-blue-700/25 cursor-pointer"
                            : "bg-[#e8dac1] border-amber-900/15 text-amber-950/30 cursor-not-allowed"
                          : "bg-amber-900/10 border-amber-900/25 text-amber-950/60 hover:bg-amber-900/20 cursor-pointer"
                      }`}
                    >
                      {cost !== null ? `−${cost} PM` : "Usar"}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-amber-950/85 font-semibold leading-snug">{title}</p>
                      {rest && (
                        <p className="text-[11px] text-amber-950/50 leading-snug mt-0.5 line-clamp-2 group-hover:line-clamp-none transition-all">{rest}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Ataques */}
        {m && (m.threat.ataqueCorpoACorpo || m.threat.ataqueDistancia) && (
          <div className="border-t border-amber-900/15 pt-3 mt-3">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-1.5">Ataques</p>
            {m.threat.ataqueCorpoACorpo && (
              <p className="text-xs text-amber-950/75 mb-1"><span className="text-red-800 font-bold">CaC: </span>{m.threat.ataqueCorpoACorpo}</p>
            )}
            {m.threat.ataqueDistancia && (
              <p className="text-xs text-amber-950/75"><span className="text-red-800 font-bold">Dist: </span>{m.threat.ataqueDistancia}</p>
            )}
          </div>
        )}

        {/* Perícias */}
        {m && m.threat.pericias.length > 0 && (
          <div className="border-t border-amber-900/15 pt-3 mt-3">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-1">Perícias</p>
            <p className="text-[11px] text-amber-950/65">{m.threat.pericias.join(" · ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Formulário de Monstro Personalizado ─────────────────────────────────────

function CustomMonsterForm({ onAdd }: { onAdd: (m: MonsterParticipant) => void }) {
  const [open, setOpen] = useState(false);
  const [t, setT] = useState<Threat>(blankThreat());
  const [ini, setIni] = useState(0);

  const fc = "w-full bg-[#fbf5e6] border-2 border-amber-900/25 rounded-lg px-2.5 py-1.5 text-amber-950 font-serif text-sm focus:outline-none focus:border-red-800/50";
  const lc = "text-[9px] uppercase tracking-widest text-amber-950/40 font-bold mb-0.5 block";

  const handleAdd = () => {
    if (!t.name.trim()) return;
    const monster: MonsterParticipant = {
      id: uid(),
      name: t.name.trim(),
      type: "monster",
      initiativeRoll: ini,
      threat: { ...t, id: uid() },
      pvMax: t.pv,
      pvCurrent: t.pv,
      pmMax: t.pm ?? 0,
      pmCurrent: t.pm ?? 0,
      conditions: [],
    };
    onAdd(monster);
    setT(blankThreat());
    setIni(0);
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full py-2 mt-2 border-2 border-dashed border-amber-900/30 text-amber-950/50 rounded-xl text-sm font-bold hover:border-red-800/40 hover:text-red-800/70 transition-all"
      >
        + Monstro Personalizado
      </button>
    );
  }

  return (
    <div className="mt-3 bg-[#fbf5e6] border-2 border-amber-900/25 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-bold text-red-800">☠ Novo Monstro</p>
        <button onClick={() => setOpen(false)} className="text-amber-950/40 hover:text-red-800 text-lg leading-none">✕</button>
      </div>

      {/* Nome e básicos */}
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2"><label className={lc}>Nome *</label><input className={fc} placeholder="Nome do monstro" value={t.name} onChange={(e) => setT({ ...t, name: e.target.value })} /></div>
        <div><label className={lc}>Tipo</label><input className={fc} placeholder="Ex: Monstro" value={t.tipo} onChange={(e) => setT({ ...t, tipo: e.target.value })} /></div>
        <div><label className={lc}>ND</label><input className={fc} placeholder="1" value={t.nd} onChange={(e) => setT({ ...t, nd: e.target.value })} /></div>
      </div>

      {/* Combate */}
      <div className="grid grid-cols-3 gap-2">
        <div><label className={lc}>PV</label><input type="number" className={fc} value={t.pv} onChange={(e) => setT({ ...t, pv: Number(e.target.value) })} /></div>
        <div><label className={lc}>PM</label><input type="number" className={fc} value={t.pm ?? 0} onChange={(e) => setT({ ...t, pm: Number(e.target.value) })} /></div>
        <div><label className={lc}>Defesa</label><input type="number" className={fc} value={t.defesa} onChange={(e) => setT({ ...t, defesa: Number(e.target.value) })} /></div>
      </div>

      {/* Resistências */}
      <div className="grid grid-cols-4 gap-2">
        <div><label className={lc}>Iniciativa</label><input type="number" className={fc} value={t.iniciativa} onChange={(e) => setT({ ...t, iniciativa: Number(e.target.value) })} /></div>
        <div><label className={lc}>Fort</label><input type="number" className={fc} value={t.fort} onChange={(e) => setT({ ...t, fort: Number(e.target.value) })} /></div>
        <div><label className={lc}>Ref</label><input type="number" className={fc} value={t.ref} onChange={(e) => setT({ ...t, ref: Number(e.target.value) })} /></div>
        <div><label className={lc}>Von</label><input type="number" className={fc} value={t.von} onChange={(e) => setT({ ...t, von: Number(e.target.value) })} /></div>
      </div>

      {/* Movimento e Iniciativa rolada */}
      <div className="grid grid-cols-2 gap-2">
        <div><label className={lc}>Deslocamento</label><input className={fc} placeholder="9m" value={t.deslocamento} onChange={(e) => setT({ ...t, deslocamento: e.target.value })} /></div>
        <div><label className={lc}>Iniciativa rolada</label><input type="number" className={fc} value={ini} onChange={(e) => setIni(Number(e.target.value))} /></div>
      </div>

      {/* Ataques */}
      <div><label className={lc}>Ataque Corpo a Corpo</label><input className={fc} placeholder="Ex: +5 (1d8+3 de dano)" value={t.ataqueCorpoACorpo ?? ""} onChange={(e) => setT({ ...t, ataqueCorpoACorpo: e.target.value })} /></div>
      <div><label className={lc}>Ataque à Distância</label><input className={fc} placeholder="Ex: +3 (1d6+1 de dano)" value={t.ataqueDistancia ?? ""} onChange={(e) => setT({ ...t, ataqueDistancia: e.target.value })} /></div>

      {/* Habilidades */}
      <div>
        <label className={lc}>Habilidades (uma por linha — use "(X PM)" para custo)</label>
        <textarea
          className={`${fc} min-h-[72px] resize-y`}
          placeholder={"Garras Venenosas. O alvo deve fazer Fort CD 15 ou fica envenenado.\nUivo Aterrorizante (2 PM). Todos a 9m ficam abalados."}
          value={t.habilidades.join("\n")}
          onChange={(e) => setT({ ...t, habilidades: e.target.value.split("\n") })}
        />
      </div>

      <button
        onClick={handleAdd}
        disabled={!t.name.trim()}
        className="w-full py-2 bg-red-800 text-[#fbf5e6] rounded-xl font-black text-sm hover:bg-red-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Adicionar ao Combate
      </button>
    </div>
  );
}

// ─── Seletor de Criaturas ─────────────────────────────────────────────────────

function CreatureSelector({ selected, onToggle }: { selected: Set<string>; onToggle: (id: string) => void }) {
  const [search, setSearch] = useState("");
  const filtered = [...allThreats]
    .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  return (
    <div className="flex flex-col gap-2">
      <input type="text" placeholder="Buscar criatura..." value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 bg-[#fbf5e6] border-2 border-amber-900/30 rounded-xl text-amber-950 placeholder-amber-900/40 font-serif focus:outline-none focus:border-red-800/60 text-sm"
      />
      <div className="h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {filtered.map((t) => (
          <button key={t.id} onClick={() => onToggle(t.id)}
            className={`w-full text-left px-3 py-2 rounded-xl border-2 font-serif transition-all flex items-center gap-2 text-sm ${
              selected.has(t.id)
                ? "bg-red-800/10 border-red-800/50 text-red-900"
                : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/80 hover:border-amber-700/40"
            }`}
          >
            {selected.has(t.id) && <span className="text-red-800 shrink-0 text-xs">✓</span>}
            <span className="font-bold flex-1 truncate">{t.name}</span>
            <span className="text-xs opacity-50 shrink-0">ND {t.nd}</span>
          </button>
        ))}
        {!filtered.length && <p className="text-center text-amber-950/40 italic py-6 text-sm">Nenhuma criatura encontrada.</p>}
      </div>
    </div>
  );
}

// ─── Página Principal ─────────────────────────────────────────────────────────

export default function CombatePage() {
  const [phase, setPhase] = useState<CombatPhase>("setup");
  const [selectedThreatIds, setSelectedThreatIds] = useState<Set<string>>(new Set());
  // Monstros personalizados adicionados no setup (já como MonsterParticipant sem iniciativa rolada)
  const [customMonsters, setCustomMonsters] = useState<MonsterParticipant[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editingMonster, setEditingMonster] = useState<MonsterParticipant | null>(null);
  const [round, setRound] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [rollValues, setRollValues] = useState<Record<string, number>>({});
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerIni, setNewPlayerIni] = useState("");

  const activeCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === "combat" && activeCardRef.current) {
      activeCardRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex, phase]);

  const toggleThreat = (id: string) => {
    setSelectedThreatIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setParticipants((prev) => [
      ...prev,
      { id: uid(), name: newPlayerName.trim(), type: "player", initiativeRoll: parseInt(newPlayerIni) || 0, conditions: [] },
    ]);
    setNewPlayerName("");
    setNewPlayerIni("");
  };

  const addCustomMonster = (m: MonsterParticipant) => {
    setCustomMonsters((prev) => [...prev, m]);
  };

  const goToRolling = () => {
    const libraryMonsters: MonsterParticipant[] = Array.from(selectedThreatIds).map((id) => {
      const t = allThreats.find((x) => x.id === id)!;
      return {
        id: uid(), name: t.name, type: "monster",
        initiativeRoll: t.iniciativa, threat: t,
        pvMax: t.pv, pvCurrent: t.pv,
        pmMax: t.pm ?? 0, pmCurrent: t.pm ?? 0,
        conditions: [],
      };
    });
    const all: Participant[] = [...participants, ...libraryMonsters, ...customMonsters];
    setParticipants(all);
    const rolls: Record<string, number> = {};
    all.forEach((p) => {
      rolls[p.id] = p.type === "monster"
        ? (p as MonsterParticipant).threat.iniciativa
        : (p as PlayerParticipant).initiativeRoll;
    });
    setRollValues(rolls);
    setPhase("rolling");
  };

  const startCombat = () => {
    const updated = participants.map((p) => ({ ...p, initiativeRoll: rollValues[p.id] ?? 0 }));
    const sorted = [...updated].sort((a, b) => b.initiativeRoll - a.initiativeRoll);
    setParticipants(sorted);
    setRound(1);
    setActiveIndex(0);
    setLog([`⚔ Combate iniciado — Rodada 1. Turno de ${sorted[0].name}.`]);
    setPhase("combat");
  };

  const nextTurn = () => {
    const next = (activeIndex + 1) % participants.length;
    const newRound = next === 0 ? round + 1 : round;
    if (next === 0) addLog(`━━━ Rodada ${newRound} ━━━`);
    addLog(`▶ Turno de ${participants[next].name}`);
    setActiveIndex(next);
    setRound(newRound);
  };

  const addLog = (msg: string) => setLog((prev) => [msg, ...prev].slice(0, 80));

  const updateParticipant = (updated: Participant) =>
    setParticipants((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const removeParticipant = (id: string) => {
    const p = participants.find((x) => x.id === id);
    if (p) addLog(`🚫 ${p.name} removido do combate`);
    setParticipants((prev) => {
      const next = prev.filter((x) => x.id !== id);
      setActiveIndex((ai) => Math.min(ai, Math.max(0, next.length - 1)));
      return next;
    });
  };

  const saveEditedMonster = (updated: MonsterParticipant) => {
    setParticipants((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    addLog(`✎ ${updated.name} editado`);
  };

  const endCombat = () => {
    if (!confirm("Encerrar o combate?")) return;
    setParticipants([]);
    setCustomMonsters([]);
    setSelectedThreatIds(new Set());
    setRound(1);
    setActiveIndex(0);
    setLog([]);
    setPhase("setup");
  };

  const playersAdded = participants.filter((p) => p.type === "player");

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block group">
            <h1 className="text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: "0 1px 2px rgba(69,26,3,0.1)" }}>
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
            <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors">Início</Link>
            <span className="text-amber-900/40">/</span>
            <Link href="/ameacas" className="text-amber-950/70 hover:text-red-800 transition-colors">Ameaças</Link>
            <span className="text-amber-900/40">/</span>
            <span className="text-red-800">Combate</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8">

        {/* ── SETUP ─────────────────────────────────────────────── */}
        {phase === "setup" && (
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 border-b-2 border-amber-900/20 pb-4 tracking-wider drop-shadow-sm">Preparar Combate</h2>
              <p className="text-amber-950/70 italic text-lg border-l-4 border-red-800/60 pl-4 font-medium">Adicione os jogadores e selecione as criaturas para o encontro.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jogadores */}
              <div className="bg-[#e8dac1] border-2 border-amber-900/30 rounded-2xl p-5 shadow-md">
                <h3 className="text-xl font-bold text-red-800 mb-1 tracking-wide">⚔ Jogadores</h3>
                <p className="text-xs text-amber-950/40 italic mb-4 border-b-2 border-amber-900/20 pb-3">Apenas nome e iniciativa — sem PV.</p>
                <div className="space-y-2 mb-4">
                  <input type="text" placeholder="Nome do personagem" value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                    className="w-full px-3 py-2 bg-[#fbf5e6] border-2 border-amber-900/25 rounded-xl text-amber-950 placeholder-amber-900/40 font-serif text-sm focus:outline-none focus:border-red-800/60"
                  />
                  <input type="number" placeholder="Resultado da Iniciativa (d20 + bônus)" value={newPlayerIni}
                    onChange={(e) => setNewPlayerIni(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                    className="w-full px-3 py-2 bg-[#fbf5e6] border-2 border-amber-900/25 rounded-xl text-amber-950 placeholder-amber-900/40 font-serif text-sm focus:outline-none focus:border-red-800/60"
                  />
                  <button onClick={addPlayer} className="w-full py-2 bg-amber-900 text-[#fbf5e6] rounded-xl font-bold text-sm hover:bg-amber-950 transition-all">
                    + Adicionar Jogador
                  </button>
                </div>
                <div className="space-y-1.5">
                  {playersAdded.map((p) => (
                    <div key={p.id} className="flex items-center justify-between px-3 py-2 bg-[#fbf5e6] rounded-xl border border-amber-900/20 text-sm">
                      <span className="font-bold">{p.name}</span>
                      <span className="text-amber-950/50 text-xs">INI {p.initiativeRoll}</span>
                      <button onClick={() => setParticipants((prev) => prev.filter((x) => x.id !== p.id))} className="text-amber-900/40 hover:text-red-800 text-xs ml-2">✕</button>
                    </div>
                  ))}
                  {!playersAdded.length && <p className="text-center text-amber-950/30 italic text-sm py-4">Nenhum jogador adicionado.</p>}
                </div>
              </div>

              {/* Criaturas da biblioteca + personalizadas */}
              <div className="bg-[#e8dac1] border-2 border-amber-900/30 rounded-2xl p-5 shadow-md flex flex-col">
                <h3 className="text-xl font-bold text-red-800 mb-1 tracking-wide">
                  ☠ Criaturas {(selectedThreatIds.size + customMonsters.length) > 0 && `(${selectedThreatIds.size + customMonsters.length})`}
                </h3>
                <p className="text-xs text-amber-950/40 italic mb-3 border-b-2 border-amber-900/20 pb-3">Biblioteca ou crie um monstro personalizado.</p>

                {/* Monstro personalizado — acima da lista */}
                <CustomMonsterForm onAdd={addCustomMonster} />

                {/* Monstros personalizados já adicionados */}
                {customMonsters.length > 0 && (
                  <div className="mt-3 space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-1">Personalizados</p>
                    {customMonsters.map((m) => (
                      <div key={m.id} className="flex items-center justify-between px-3 py-1.5 bg-red-800/10 rounded-xl border border-red-800/25 text-sm">
                        <span className="font-bold text-red-900 truncate">{m.name}</span>
                        <span className="text-amber-950/50 text-xs shrink-0 ml-2">{m.pvMax} PV · ND {m.threat.nd}</span>
                        <button onClick={() => setCustomMonsters((prev) => prev.filter((x) => x.id !== m.id))} className="text-amber-900/40 hover:text-red-800 text-xs ml-2 shrink-0">✕</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Divisor */}
                <div className="mt-3 mb-2 border-t-2 border-amber-900/20 pt-3">
                  <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-2">Biblioteca</p>
                  <CreatureSelector selected={selectedThreatIds} onToggle={toggleThreat} />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={goToRolling}
                disabled={playersAdded.length === 0 && selectedThreatIds.size === 0 && customMonsters.length === 0}
                className="px-10 py-4 bg-red-800 text-[#fbf5e6] rounded-2xl font-black text-xl tracking-widest uppercase hover:bg-red-900 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Rolar Iniciativas →
              </button>
            </div>
          </div>
        )}

        {/* ── ROLLING ───────────────────────────────────────────── */}
        {phase === "rolling" && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 border-b-2 border-amber-900/20 pb-4 tracking-wider drop-shadow-sm">Iniciativas</h2>
              <p className="text-amber-950/70 italic text-lg border-l-4 border-red-800/60 pl-4 font-medium">Confirme o resultado final de cada participante (d20 + bônus).</p>
            </div>
            <div className="space-y-3 mb-8">
              {participants.map((p) => {
                const bonus = p.type === "monster" ? (p as MonsterParticipant).threat.iniciativa : null;
                return (
                  <div key={p.id} className="flex items-center gap-4 bg-[#e8dac1] border-2 border-amber-900/25 rounded-2xl p-4 shadow-sm">
                    <span className="text-xl shrink-0">{p.type === "monster" ? "☠" : "⚔"}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-amber-950 truncate">{p.name}</div>
                      {bonus !== null && <div className="text-xs text-amber-950/50">Bônus: {bonus >= 0 ? "+" : ""}{bonus}</div>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-amber-950/40 font-bold">Total:</span>
                      <input type="number"
                        value={rollValues[p.id] ?? 0}
                        onChange={(e) => setRollValues((prev) => ({ ...prev, [p.id]: parseInt(e.target.value) || 0 }))}
                        className="w-20 text-center px-2 py-2 bg-[#fbf5e6] border-2 border-amber-900/30 rounded-xl font-black text-lg text-amber-950 focus:outline-none focus:border-red-800/60"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 justify-between">
              <button onClick={() => { setParticipants((prev) => prev.filter((p) => p.type === "player")); setPhase("setup"); }}
                className="px-6 py-3 border-2 border-amber-900/30 rounded-xl font-bold text-amber-950/70 hover:border-amber-700/60 transition-all">
                ← Voltar
              </button>
              <button onClick={startCombat}
                className="px-10 py-3 bg-red-800 text-[#fbf5e6] rounded-2xl font-black text-lg tracking-widest uppercase hover:bg-red-900 transition-all shadow-lg">
                ⚔ Iniciar Combate
              </button>
            </div>
          </div>
        )}

        {/* ── COMBAT ────────────────────────────────────────────── */}
        {phase === "combat" && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#2a1810] text-[#fbf5e6] rounded-2xl px-6 py-4 shadow-xl">
              <div className="flex items-center gap-5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#fbf5e6]/40 font-bold">Rodada</div>
                  <div className="text-4xl font-black text-red-400">{round}</div>
                </div>
                <div className="w-px h-10 bg-[#fbf5e6]/10" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#fbf5e6]/40 font-bold">Turno de</div>
                  <div className="text-xl font-bold">{participants[activeIndex]?.name ?? "—"}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={nextTurn} className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-black tracking-wider uppercase rounded-xl transition-all shadow-md text-sm">
                  Encerrar Turno →
                </button>
                <button onClick={endCombat} className="px-5 py-3 border-2 border-[#fbf5e6]/20 text-[#fbf5e6]/60 hover:text-[#fbf5e6] hover:border-[#fbf5e6]/40 font-bold rounded-xl transition-all text-sm">
                  Encerrar
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-3">
                {participants.map((p, i) => (
                  <div key={p.id} ref={i === activeIndex ? activeCardRef : null}>
                    <ParticipantCard
                      participant={p}
                      isActive={i === activeIndex}
                      onUpdate={updateParticipant}
                      onEdit={p.type === "monster" ? () => setEditingMonster(p as MonsterParticipant) : undefined}
                      onRemove={() => removeParticipant(p.id)}
                      onLog={addLog}
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#2a1810] rounded-2xl p-4 shadow-xl sticky top-4">
                <h3 className="text-[10px] uppercase tracking-widest text-[#fbf5e6]/40 font-bold mb-3 border-b border-[#fbf5e6]/10 pb-2">📜 Log de Combate</h3>
                <div className="space-y-1.5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {log.map((entry, i) => (
                    <p key={i} className={`text-xs font-medium leading-snug ${i === 0 ? "text-[#fbf5e6]/90" : "text-[#fbf5e6]/40"}`}>{entry}</p>
                  ))}
                  {!log.length && <p className="text-xs text-[#fbf5e6]/20 italic">Nenhum evento ainda.</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {editingMonster && (
        <EditMonsterModal monster={editingMonster} onSave={saveEditedMonster} onClose={() => setEditingMonster(null)} />
      )}

      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm tracking-widest uppercase font-bold">Compêndio Tormenta RPG © 2025</p>
        <p className="text-[#e8dac1]/40 text-xs tracking-wide">Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}