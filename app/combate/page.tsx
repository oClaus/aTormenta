"use client";

import { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
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
  const patterns = [
    /\(\s*(\d+)\s*PM\s*\)/i,
    /\[\s*(\d+)\s*PM\s*\]/i,
    /custo?\s*[:\s]\s*(\d+)\s*PM/i,
    /gasta?\s+(\d+)\s*PM/i,
    /(\d+)\s*PM\b/i,
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

const blankThreat = (): Threat => ({
  id: uid(), name: "", tipo: "Monstro", tamanho: "Médio", papel: "", nd: "1",
  description: "", iniciativa: 0, percepcao: 0, defesa: 10, pv: 10, pm: 0,
  deslocamento: "9m", fort: 0, ref: 0, von: 0,
  for: "10", des: "10", con: "10", int: "10", sab: "10", car: "10",
  habilidades: [], pericias: [], equipamentos: [], tesouro: "Nenhum",
});

// ─── Importar XLSX ────────────────────────────────────────────────────────────

const parseXlsxThreats = (file: File): Promise<Threat[]> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const wb = XLSX.read(e.target?.result, { type: "binary" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows: any[] = XLSX.utils.sheet_to_json(ws, { range: 3, defval: "" });
        const splitPipe = (v: any) =>
          String(v || "").split("|").map((s: string) => s.trim()).filter(Boolean);
        const threats: Threat[] = rows
          .filter((r) => (r["name *"] || r["name"] || "").toString().trim())
          .map((r) => ({
            id: String(r["id"] || uid()).trim() || uid(),
            name: String(r["name *"] || r["name"] || "").trim(),
            tipo: String(r["tipo"] || "Monstro").trim(),
            tamanho: String(r["tamanho"] || "Médio").trim(),
            papel: String(r["papel"] || "").trim(),
            nd: String(r["nd"] || "1").trim(),
            description: String(r["description"] || "").trim(),
            iniciativa: Number(r["iniciativa"]) || 0,
            percepcao: Number(r["percepcao"]) || 0,
            defesa: Number(r["defesa *"] ?? r["defesa"]) || 10,
            pv: Number(r["pv *"] ?? r["pv"]) || 1,
            pm: Number(r["pm"]) || 0,
            deslocamento: String(r["deslocamento"] || "9m").trim(),
            fort: Number(r["fort *"] ?? r["fort"]) || 0,
            ref: Number(r["ref *"] ?? r["ref"]) || 0,
            von: Number(r["von *"] ?? r["von"]) || 0,
            resistenciaDano: String(r["resistenciaDano"] || "").trim() || undefined,
            for: String(r["FOR"] || "10"),
            des: String(r["DES"] || "10"),
            con: String(r["CON"] || "10"),
            int: String(r["INT"] || "10"),
            sab: String(r["SAB"] || "10"),
            car: String(r["CAR"] || "10"),
            ataqueCorpoACorpo: String(r["ataqueCorpoACorpo"] || "").trim() || undefined,
            ataqueDistancia: String(r["ataqueDistancia"] || "").trim() || undefined,
            habilidades: splitPipe(r["habilidades"]),
            pericias: splitPipe(r["pericias"]),
            equipamentos: splitPipe(r["equipamentos"]),
            tesouro: String(r["tesouro"] || "Nenhum").trim(),
            origin: String(r["origin"] || "Planilha").trim(),
          }));
        resolve(threats);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsBinaryString(file);
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
        className={`px-2.5 py-1 rounded-md text-[11px] font-bold border transition-all select-none shadow-sm flex items-center gap-1 ${
          isPositive
            ? "bg-emerald-700/15 border-emerald-700/30 text-emerald-900 hover:bg-emerald-700/30 hover:border-emerald-700/50"
            : "bg-red-800/15 border-red-800/30 text-red-900 hover:bg-red-800/30 hover:border-red-800/50"
        }`}
      >
        {cond.name} <span className="opacity-60 hover:opacity-100 ml-1">✕</span>
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-2 z-[60] w-64 bg-[#2a1810] text-[#fbf5e6] text-xs rounded-xl p-4 shadow-2xl border-2 border-amber-900/40 pointer-events-none font-serif">
          <p className="font-bold text-red-400 mb-1.5 text-sm">{cond.name}</p>
          {cond.efeito && <p className="text-amber-400/70 text-[10px] mb-2 uppercase tracking-widest font-bold">{cond.efeito}</p>}
          <p className="leading-relaxed text-[#fbf5e6]/80 whitespace-pre-line">{cond.description}</p>
        </div>
      )}
    </div>
  );
}

// ─── Seletor de Condições Inline ─────────────────────────────────────────────

function ConditionSelector({ active, onToggle }: { active: string[]; onToggle: (id: string) => void }) {
  const [search, setSearch] = useState("");
  const filtered = allConditions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mt-3 bg-[#e8dac1]/70 border-2 border-amber-900/20 rounded-xl p-4 shadow-inner">
      <input
        autoFocus
        type="text"
        placeholder="Buscar condição..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950 placeholder-amber-900/40 font-serif text-xs focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all mb-3 shadow-sm"
      />
      <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar pr-2">
        {filtered.map((c) => {
          const isActive = active.includes(c.id);
          const isPos = POSITIVE_CONDITIONS.has(c.id);
          return (
            <button
              key={c.id}
              onClick={() => onToggle(c.id)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-bold border-2 transition-all shadow-sm flex items-center gap-1 ${
                isActive
                  ? isPos
                    ? "bg-emerald-700/25 border-emerald-700/50 text-emerald-900"
                    : "bg-red-800/25 border-red-800/50 text-red-900"
                  : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/70 hover:border-amber-700/50 hover:text-amber-950"
              }`}
            >
              {isActive ? "✓ " : ""}{c.name}
            </button>
          );
        })}
        {!filtered.length && <p className="text-xs text-amber-950/50 italic py-2 w-full text-center">Nenhuma encontrada.</p>}
      </div>
    </div>
  );
}

// ─── Modal de Edição de Monstro ───────────────────────────────────────────────

function EditMonsterModal({ monster, onSave, onClose }: {
  monster: MonsterParticipant;
  onSave: (updated: MonsterParticipant) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState({ ...monster.threat });
  const [pvMax, setPvMax] = useState(monster.pvMax);
  const [pmMax, setPmMax] = useState(monster.pmMax);

  const fc = "w-full bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg px-4 py-2.5 text-amber-950 font-serif focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all text-sm shadow-sm";
  const lc = "text-[10px] uppercase tracking-widest text-amber-950/60 font-bold font-serif mb-1 block";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1810]/60 backdrop-blur-sm">
      <div className="bg-[#e8dac1] border-2 border-amber-900/40 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col font-serif">
        <div className="p-6 border-b-2 border-amber-900/20 flex items-center justify-between bg-[#fbf5e6] rounded-t-xl">
          <h2 className="text-xl md:text-2xl font-bold text-red-800 tracking-wide">Editar: {monster.threat.name}</h2>
          <button onClick={onClose} className="text-amber-950/40 hover:text-red-800 text-2xl leading-none transition-colors">✕</button>
        </div>
        <div className="overflow-y-auto p-6 flex flex-col gap-5 custom-scrollbar bg-[#e8dac1]/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div><label className={lc}>Nome</label><input className={fc} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} /></div>
            <div><label className={lc}>ND</label><input className={fc} value={draft.nd} onChange={(e) => setDraft({ ...draft, nd: e.target.value })} /></div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div><label className={lc}>PV Máximo</label><input type="number" className={fc} value={pvMax} onChange={(e) => setPvMax(Number(e.target.value))} /></div>
            <div><label className={lc}>PM Máximo</label><input type="number" className={fc} value={pmMax} onChange={(e) => setPmMax(Number(e.target.value))} /></div>
            <div><label className={lc}>Defesa</label><input type="number" className={fc} value={draft.defesa} onChange={(e) => setDraft({ ...draft, defesa: Number(e.target.value) })} /></div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div><label className={lc}>Fort</label><input type="number" className={fc} value={draft.fort} onChange={(e) => setDraft({ ...draft, fort: Number(e.target.value) })} /></div>
            <div><label className={lc}>Ref</label><input type="number" className={fc} value={draft.ref} onChange={(e) => setDraft({ ...draft, ref: Number(e.target.value) })} /></div>
            <div><label className={lc}>Von</label><input type="number" className={fc} value={draft.von} onChange={(e) => setDraft({ ...draft, von: Number(e.target.value) })} /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div><label className={lc}>Ataque Corpo a Corpo</label><input className={fc} value={draft.ataqueCorpoACorpo ?? ""} onChange={(e) => setDraft({ ...draft, ataqueCorpoACorpo: e.target.value })} /></div>
            <div><label className={lc}>Ataque à Distância</label><input className={fc} value={draft.ataqueDistancia ?? ""} onChange={(e) => setDraft({ ...draft, ataqueDistancia: e.target.value })} /></div>
          </div>
          <div>
            <label className={lc}>Habilidades (uma por linha)</label>
            <textarea className={`${fc} min-h-[120px] resize-y`} value={draft.habilidades.join("\n")} onChange={(e) => setDraft({ ...draft, habilidades: e.target.value.split("\n") })} />
          </div>
        </div>
        <div className="p-6 border-t-2 border-amber-900/20 flex gap-4 justify-end bg-[#fbf5e6] rounded-b-xl">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border-2 border-amber-900/30 text-amber-950/70 font-serif font-bold hover:border-red-800 hover:text-red-800 hover:bg-red-800/5 transition-all">Cancelar</button>
          <button
            onClick={() => { onSave({ ...monster, threat: draft as Threat, pvMax, pvCurrent: Math.min(monster.pvCurrent, pvMax), pmMax, pmCurrent: Math.min(monster.pmCurrent, pmMax) }); onClose(); }}
            className="px-8 py-2.5 rounded-xl bg-red-800 text-[#fbf5e6] font-serif font-bold hover:bg-red-900 hover:-translate-y-0.5 transition-all shadow-md"
          >Salvar Alterações</button>
        </div>
      </div>
    </div>
  );
}

// ─── Card de Participante ─────────────────────────────────────────────────────

function ParticipantCard({ participant, isActive, onUpdate, onEdit, onRemove, onLog }: {
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
      if (m.pmCurrent < cost) { onLog(`⚠ ${m.name} não tem PM para "${title}" (precisa ${cost}, tem ${m.pmCurrent})`); return; }
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
    onUpdate({ ...participant, conditions: has ? participant.conditions.filter((c) => c !== condId) : [...participant.conditions, condId] });
  };

  const ic = "w-20 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg px-3 py-2 text-amber-950 font-serif text-sm font-bold focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 text-center shadow-sm transition-all";

  return (
    <div className={`relative border-2 rounded-2xl transition-all duration-300 font-serif overflow-visible ${
      isActive
        ? "bg-[#fbf5e6] border-red-800 shadow-[0_0_0_3px_rgba(153,27,27,0.1),0_4px_24px_rgba(153,27,27,0.15)] transform scale-[1.01]"
        : "bg-[#e8dac1] border-amber-900/25 shadow-sm hover:shadow-md hover:border-amber-900/40"
    }`}>
      {isActive && <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-800 via-amber-600 to-red-800 rounded-t-xl" />}

      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-4 border-b-2 border-amber-900/10 pb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 ${
              isActive ? "bg-red-800 border-red-900 text-[#fbf5e6]" : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/50"
            }`}>{isMonster ? "☠" : "⚔"}</span>
            <div className="min-w-0">
              <h3 className={`font-bold text-lg md:text-xl leading-tight truncate tracking-wide ${isActive ? "text-red-800" : "text-amber-950"}`}>{participant.name}</h3>
              {m && <p className="text-xs text-amber-950/60 font-medium mt-0.5">{m.threat.tipo} <span className="mx-1">•</span> ND {m.threat.nd}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] md:text-xs text-amber-950/70 font-bold bg-[#fbf5e6] px-2.5 py-1.5 rounded-md border border-amber-900/20 shadow-sm uppercase tracking-widest">INI {participant.initiativeRoll}</span>
            {isMonster && onEdit && (
              <button onClick={onEdit} title="Editar criatura" className="w-8 h-8 flex items-center justify-center rounded-md border border-amber-900/20 bg-[#fbf5e6] text-amber-950/50 hover:text-red-800 hover:border-red-800/40 hover:bg-red-800/5 transition-all text-sm shadow-sm">✎</button>
            )}
            <button onClick={onRemove} title="Remover" className="w-8 h-8 flex items-center justify-center rounded-md border border-amber-900/20 bg-[#fbf5e6] text-amber-950/50 hover:text-red-800 hover:border-red-800/40 hover:bg-red-800/5 transition-all text-sm shadow-sm">✕</button>
          </div>
        </div>

        {/* Stats */}
        {m && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs font-bold bg-[#fbf5e6]/50 p-3 rounded-xl border border-amber-900/10">
            <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">DEF <span className="text-red-800 text-xs ml-0.5">{m.threat.defesa}</span></span>
            <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">Fort <span className="text-red-800 text-xs ml-0.5">+{m.threat.fort}</span></span>
            <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">Ref <span className="text-red-800 text-xs ml-0.5">+{m.threat.ref}</span></span>
            <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">Von <span className="text-red-800 text-xs ml-0.5">+{m.threat.von}</span></span>
            {m.threat.percepcao > 0 && <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">Percepção <span className="text-red-800 text-xs ml-0.5">+{m.threat.percepcao}</span></span>}
            <span className="text-amber-950/50 uppercase tracking-widest text-[10px]">Desl. <span className="text-red-800 text-xs ml-0.5">{m.threat.deslocamento}</span></span>
          </div>
        )}

        {/* Barras PV / PM */}
        {m && (
          <div className="space-y-3 mb-5">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5 uppercase tracking-widest">
                <span className="text-amber-950/50 text-[10px]">Pontos de Vida</span>
                <span className={m.pvCurrent === 0 ? "text-red-800 font-black" : "text-amber-950/80"}>
                  {m.pvCurrent} / {m.pvMax}{m.pvCurrent === 0 ? " — INCAPACITADO" : ""}
                </span>
              </div>
              <div className="h-3 bg-[#fbf5e6] border border-amber-900/10 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full rounded-full transition-all duration-500 ${pvColor}`} style={{ width: `${pvPct}%` }} />
              </div>
            </div>
            {m.pmMax > 0 && (
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5 uppercase tracking-widest">
                  <span className="text-blue-800/60 text-[10px]">Pontos de Mana</span>
                  <span className="text-blue-800/80">{m.pmCurrent} / {m.pmMax}</span>
                </div>
                <div className="h-2.5 bg-[#fbf5e6] border border-amber-900/10 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full rounded-full bg-blue-700 transition-all duration-500" style={{ width: `${pmPct}%` }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Condições ativas */}
        {participant.conditions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {participant.conditions.map((cid) => (
              <ConditionTag key={cid} conditionId={cid} onRemove={() => toggleCondition(cid)} />
            ))}
          </div>
        )}

        {/* Dano / Cura / Condição */}
        {m && (
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <input type="number" min="0" placeholder="0" value={dmgInput}
                onChange={(e) => setDmgInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyDamage()}
                className={ic} />
              <button onClick={applyDamage} className="px-4 py-2 bg-red-800 text-[#fbf5e6] rounded-lg text-xs uppercase tracking-widest font-black hover:bg-red-900 hover:-translate-y-0.5 transition-all shadow-sm">Dano</button>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="0" placeholder="0" value={healInput}
                onChange={(e) => setHealInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyHeal()}
                className={ic} />
              <button onClick={applyHeal} className="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs uppercase tracking-widest font-black hover:bg-emerald-800 hover:-translate-y-0.5 transition-all shadow-sm">Curar</button>
            </div>
            <button
              onClick={() => setShowCondSelector((v) => !v)}
              className={`px-4 py-2 rounded-lg border-2 text-xs uppercase tracking-widest font-bold transition-all shadow-sm ${
                showCondSelector ? "border-red-800/40 bg-red-800/10 text-red-900" : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/60 hover:border-amber-700/50 hover:text-amber-950"
              }`}
            >{showCondSelector ? "▲ Ocultar" : "+ Condição"}</button>
          </div>
        )}

        {!m && (
          <div className="mb-2">
            <button
              onClick={() => setShowCondSelector((v) => !v)}
              className={`px-4 py-2 rounded-lg border-2 text-xs uppercase tracking-widest font-bold transition-all shadow-sm ${
                showCondSelector ? "border-red-800/40 bg-red-800/10 text-red-900" : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/60 hover:border-amber-700/50 hover:text-amber-950"
              }`}
            >{showCondSelector ? "▲ Ocultar" : "+ Condição"}</button>
          </div>
        )}

        {showCondSelector && <ConditionSelector active={participant.conditions} onToggle={toggleCondition} />}

        {/* Habilidades */}
        {m && m.threat.habilidades.length > 0 && (
          <div className="border-t-2 border-amber-900/10 pt-4 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-3 flex items-center gap-1"><span className="text-[8px] text-red-800/40">◆</span> Habilidades</p>
            <div className="space-y-3">
              {m.threat.habilidades.map((hab, i) => {
                const cost = extractPmCost(hab);
                const title = getHabilityTitle(hab);
                const canUse = cost === null || m.pmCurrent >= cost;
                const rest = hab.replace(title, "").replace(/^[.:\s]+/, "").trim();
                return (
                  <div key={i} className="flex items-start gap-3 group bg-[#fbf5e6]/50 p-2.5 rounded-xl border border-amber-900/5 hover:border-amber-900/20 transition-colors">
                    <button
                      onClick={() => useAbility(hab)}
                      disabled={cost !== null && !canUse}
                      className={`shrink-0 mt-0.5 px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest font-black border-2 transition-all shadow-sm ${
                        cost !== null
                          ? canUse
                            ? "bg-blue-700/10 border-blue-700/30 text-blue-900 hover:bg-blue-700/20 hover:border-blue-700/50 cursor-pointer"
                            : "bg-[#e8dac1] border-amber-900/10 text-amber-950/30 cursor-not-allowed"
                          : "bg-[#fbf5e6] border-amber-900/20 text-amber-950/60 hover:border-red-800/40 hover:text-red-800 cursor-pointer"
                      }`}
                    >{cost !== null ? `−${cost} PM` : "Usar"}</button>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-sm text-red-800 font-bold leading-snug">{title}</p>
                      {rest && <p className="text-xs text-amber-950/70 font-medium leading-relaxed mt-1 line-clamp-2 group-hover:line-clamp-none transition-all">{rest}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Ataques */}
        {m && (m.threat.ataqueCorpoACorpo || m.threat.ataqueDistancia) && (
          <div className="border-t-2 border-amber-900/10 pt-4 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-2 flex items-center gap-1"><span className="text-[8px] text-red-800/40">◆</span> Ataques</p>
            <div className="space-y-1.5">
              {m.threat.ataqueCorpoACorpo && <p className="text-sm text-amber-950/80 font-medium"><span className="text-red-800 font-bold text-xs uppercase tracking-widest">Corpo-a-corpo: </span>{m.threat.ataqueCorpoACorpo}</p>}
              {m.threat.ataqueDistancia && <p className="text-sm text-amber-950/80 font-medium"><span className="text-red-800 font-bold text-xs uppercase tracking-widest">Distância: </span>{m.threat.ataqueDistancia}</p>}
            </div>
          </div>
        )}

        {/* Perícias */}
        {m && m.threat.pericias.length > 0 && (
          <div className="border-t-2 border-amber-900/10 pt-4 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-amber-950/40 font-bold mb-1.5 flex items-center gap-1"><span className="text-[8px] text-red-800/40">◆</span> Perícias</p>
            <p className="text-xs text-amber-950/70 font-bold leading-relaxed">{m.threat.pericias.join(" · ")}</p>
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

  const fc = "w-full bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg px-3 py-2 text-amber-950 font-serif text-sm focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm";
  const lc = "text-[10px] uppercase tracking-widest text-amber-950/60 font-bold mb-1 block";

  const handleAdd = () => {
    if (!t.name.trim()) return;
    onAdd({
      id: uid(), name: t.name.trim(), type: "monster", initiativeRoll: ini,
      threat: { ...t, id: uid() },
      pvMax: t.pv, pvCurrent: t.pv,
      pmMax: t.pm ?? 0, pmCurrent: t.pm ?? 0,
      conditions: [],
    });
    setT(blankThreat()); setIni(0); setOpen(false);
  };

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="w-full py-3 mt-2 border-2 border-dashed border-amber-900/30 text-amber-950/60 bg-[#fbf5e6]/50 rounded-xl text-xs uppercase tracking-widest font-bold hover:border-red-800/40 hover:text-red-800 hover:bg-[#fbf5e6] transition-all">
        + Monstro Personalizado
      </button>
    );
  }

  return (
    <div className="mt-4 bg-[#e8dac1] border-2 border-amber-900/20 rounded-xl p-5 shadow-sm space-y-4 font-serif">
      <div className="flex items-center justify-between border-b-2 border-amber-900/10 pb-3 mb-2">
        <p className="text-base font-bold text-red-800 tracking-wide flex items-center gap-2"><span>☠</span> Novo Monstro</p>
        <button onClick={() => setOpen(false)} className="text-amber-950/40 hover:text-red-800 text-xl leading-none transition-colors">✕</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2"><label className={lc}>Nome *</label><input className={fc} placeholder="Nome do monstro" value={t.name} onChange={(e) => setT({ ...t, name: e.target.value })} /></div>
        <div><label className={lc}>Tipo</label><input className={fc} placeholder="Ex: Monstro" value={t.tipo} onChange={(e) => setT({ ...t, tipo: e.target.value })} /></div>
        <div><label className={lc}>ND</label><input className={fc} placeholder="1" value={t.nd} onChange={(e) => setT({ ...t, nd: e.target.value })} /></div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div><label className={lc}>PV</label><input type="number" className={fc} value={t.pv} onChange={(e) => setT({ ...t, pv: Number(e.target.value) })} /></div>
        <div><label className={lc}>PM</label><input type="number" className={fc} value={t.pm ?? 0} onChange={(e) => setT({ ...t, pm: Number(e.target.value) })} /></div>
        <div><label className={lc}>Defesa</label><input type="number" className={fc} value={t.defesa} onChange={(e) => setT({ ...t, defesa: Number(e.target.value) })} /></div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div><label className={lc}>Inic.</label><input type="number" className={fc} value={t.iniciativa} onChange={(e) => setT({ ...t, iniciativa: Number(e.target.value) })} /></div>
        <div><label className={lc}>Fort</label><input type="number" className={fc} value={t.fort} onChange={(e) => setT({ ...t, fort: Number(e.target.value) })} /></div>
        <div><label className={lc}>Ref</label><input type="number" className={fc} value={t.ref} onChange={(e) => setT({ ...t, ref: Number(e.target.value) })} /></div>
        <div><label className={lc}>Von</label><input type="number" className={fc} value={t.von} onChange={(e) => setT({ ...t, von: Number(e.target.value) })} /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><label className={lc}>Desloc.</label><input className={fc} placeholder="9m" value={t.deslocamento} onChange={(e) => setT({ ...t, deslocamento: e.target.value })} /></div>
        <div><label className={lc}>Inic. Rolada</label><input type="number" className={fc} value={ini} onChange={(e) => setIni(Number(e.target.value))} /></div>
      </div>
      <div><label className={lc}>Ataque Corpo a Corpo</label><input className={fc} placeholder="Ex: +5 (1d8+3 de dano)" value={t.ataqueCorpoACorpo ?? ""} onChange={(e) => setT({ ...t, ataqueCorpoACorpo: e.target.value })} /></div>
      <div><label className={lc}>Ataque à Distância</label><input className={fc} placeholder="Ex: +3 (1d6+1 de dano)" value={t.ataqueDistancia ?? ""} onChange={(e) => setT({ ...t, ataqueDistancia: e.target.value })} /></div>
      <div>
        <label className={lc}>Habilidades (uma por linha — use "(X PM)" para custo)</label>
        <textarea className={`${fc} min-h-[90px] resize-y`}
          placeholder={"Garras Venenosas. O alvo deve fazer Fort CD 15 ou fica envenenado.\nUivo Aterrorizante (2 PM). Todos a 9m ficam abalados."}
          value={t.habilidades.join("\n")}
          onChange={(e) => setT({ ...t, habilidades: e.target.value.split("\n") })}
        />
      </div>
      <button onClick={handleAdd} disabled={!t.name.trim()}
        className="w-full py-3 mt-2 bg-red-800 text-[#fbf5e6] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-900 hover:-translate-y-0.5 transition-all shadow-md disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
        Adicionar ao Combate
      </button>
    </div>
  );
}

// ─── Seletor de Criaturas ─────────────────────────────────────────────────────

function CreatureSelector({ selected, onToggle, extra = [] }: {
  selected: Set<string>;
  onToggle: (id: string) => void;
  extra?: Threat[];
}) {
  const [search, setSearch] = useState("");
  const allEntries = [...allThreats, ...extra];
  const filtered = allEntries
    .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="flex flex-col gap-3 font-serif mt-2">
      <input type="text" placeholder="Buscar criatura na biblioteca..." value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-xl text-amber-950 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 text-sm transition-all shadow-sm"
      />
      <div className="h-72 overflow-y-auto space-y-1.5 pr-2 custom-scrollbar border-2 border-amber-900/10 p-2 rounded-xl bg-[#e8dac1]/50">
        {filtered.map((t) => (
          <button key={t.id} onClick={() => onToggle(t.id)}
            className={`w-full text-left px-4 py-2.5 rounded-lg border-2 transition-all flex items-center gap-3 text-sm shadow-sm ${
              selected.has(t.id)
                ? "bg-red-800/10 border-red-800/40 text-red-900"
                : "bg-[#fbf5e6] border-amber-900/10 text-amber-950/85 hover:border-amber-900/30 hover:bg-[#f5e6d0]"
            }`}
          >
            {selected.has(t.id) ? <span className="text-red-800 shrink-0 text-sm font-bold">✓</span> : <span className="w-3 shrink-0" />}
            <span className="font-bold flex-1 truncate">{t.name}</span>
            <div className="flex items-center gap-1.5 shrink-0">
              {extra.some((e) => e.id === t.id) && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-700/15 border border-emerald-700/30 px-1.5 py-0.5 rounded">xlsx</span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-950/50 bg-[#e8dac1] px-2 py-0.5 rounded">ND {t.nd}</span>
            </div>
          </button>
        ))}
        {!filtered.length && <p className="text-center text-amber-950/50 italic py-8 text-sm">Nenhuma criatura encontrada.</p>}
      </div>
    </div>
  );
}

// ─── Página Principal ─────────────────────────────────────────────────────────

export default function CombatePage() {
  const [phase, setPhase] = useState<CombatPhase>("setup");
  const [selectedThreatIds, setSelectedThreatIds] = useState<Set<string>>(new Set());
  const [customMonsters, setCustomMonsters] = useState<MonsterParticipant[]>([]);
  const [importedThreats, setImportedThreats] = useState<Threat[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editingMonster, setEditingMonster] = useState<MonsterParticipant | null>(null);
  const [round, setRound] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [rollValues, setRollValues] = useState<Record<string, number>>({});
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerIni, setNewPlayerIni] = useState("");
  const [importError, setImportError] = useState("");

  const activeCardRef = useRef<HTMLDivElement>(null);
  const xlsxInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === "combat" && activeCardRef.current) {
      activeCardRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex, phase]);

  const toggleThreat = (id: string) => {
    setSelectedThreatIds((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setParticipants((prev) => [...prev, { id: uid(), name: newPlayerName.trim(), type: "player", initiativeRoll: parseInt(newPlayerIni) || 0, conditions: [] }]);
    setNewPlayerName(""); setNewPlayerIni("");
  };

  const exportXlsx = () => {
    // Combina criaturas do compêndio + importadas + personalizadas
    const allEntries: Threat[] = [
      ...allThreats,
      ...importedThreats,
      ...customMonsters.map((m) => m.threat),
    ];

    const header = [
      "id","name *","tipo","tamanho","papel","nd",
      "pv *","pm","defesa *","iniciativa","percepcao","deslocamento","resistenciaDano","tesouro",
      "fort *","ref *","von *","description",
      "FOR","DES","CON","INT","SAB","CAR",
      "ataqueCorpoACorpo","ataqueDistancia",
      "habilidades","pericias","equipamentos","origin",
    ];

    const rows = allEntries.map((t) => ({
      "id": t.id,
      "name *": t.name,
      "tipo": t.tipo,
      "tamanho": t.tamanho,
      "papel": t.papel ?? "",
      "nd": t.nd,
      "pv *": t.pv,
      "pm": t.pm ?? 0,
      "defesa *": t.defesa,
      "iniciativa": t.iniciativa,
      "percepcao": t.percepcao,
      "deslocamento": t.deslocamento,
      "resistenciaDano": t.resistenciaDano ?? "",
      "tesouro": t.tesouro,
      "fort *": t.fort,
      "ref *": t.ref,
      "von *": t.von,
      "description": t.description,
      "FOR": String(t.for),
      "DES": String(t.des),
      "CON": String(t.con),
      "INT": String(t.int),
      "SAB": String(t.sab),
      "CAR": String(t.car),
      "ataqueCorpoACorpo": t.ataqueCorpoACorpo ?? "",
      "ataqueDistancia": t.ataqueDistancia ?? "",
      "habilidades": t.habilidades.join("|"),
      "pericias": t.pericias.join("|"),
      "equipamentos": t.equipamentos.join("|"),
      "origin": t.origin ?? "Compêndio",
    }));

    // Monta planilha: 3 linhas decorativas + cabeçalho + dados
    const decorRows = [
      ["\u2694  TORMENTA 20 — Compêndio de Criaturas  ☠"],
      ["Preencha os dados · Habilidades separadas por | (pipe) · PM 0 = sem magias"],
      [],
    ];
    const wsData = [
      ...decorRows,
      header,
      ...rows.map((r) => header.map((k) => (r as any)[k])),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const colWidths = [14,22,18,12,14,8,8,8,8,8,8,14,16,16,8,8,8,30,8,8,8,8,8,8,24,24,40,28,24,16];
    ws["!cols"] = colWidths.map((w) => ({ wch: w }));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Criaturas");
    XLSX.writeFile(wb, "criaturas_tormenta.xlsx");
  };

  const handleXlsxImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportError("");
    try {
      const threats = await parseXlsxThreats(file);
      if (!threats.length) { setImportError("Nenhuma criatura encontrada na planilha."); return; }
      setImportedThreats(threats);
      // Auto-seleciona todas as criaturas importadas
      setSelectedThreatIds((prev) => {
        const next = new Set(prev);
        threats.forEach((t) => next.add(t.id));
        return next;
      });
    } catch {
      setImportError("Erro ao ler o arquivo. Use o modelo oficial.");
    }
    e.target.value = "";
  };

  const goToRolling = () => {
    const fullLibrary = [...allThreats, ...importedThreats];
    const libraryMonsters: MonsterParticipant[] = Array.from(selectedThreatIds).map((id) => {
      const t = fullLibrary.find((x) => x.id === id)!;
      return { id: uid(), name: t.name, type: "monster", initiativeRoll: t.iniciativa, threat: t, pvMax: t.pv, pvCurrent: t.pv, pmMax: t.pm ?? 0, pmCurrent: t.pm ?? 0, conditions: [] };
    });
    const all: Participant[] = [...participants, ...libraryMonsters, ...customMonsters];
    setParticipants(all);
    const rolls: Record<string, number> = {};
    all.forEach((p) => { rolls[p.id] = p.type === "monster" ? (p as MonsterParticipant).threat.iniciativa : (p as PlayerParticipant).initiativeRoll; });
    setRollValues(rolls);
    setPhase("rolling");
  };

  const startCombat = () => {
    const updated = participants.map((p) => ({ ...p, initiativeRoll: rollValues[p.id] ?? 0 }));
    const sorted = [...updated].sort((a, b) => b.initiativeRoll - a.initiativeRoll);
    setParticipants(sorted); setRound(1); setActiveIndex(0);
    setLog([`⚔ Combate iniciado — Rodada 1. Turno de ${sorted[0].name}.`]);
    setPhase("combat");
  };

  const nextTurn = () => {
    const next = (activeIndex + 1) % participants.length;
    const newRound = next === 0 ? round + 1 : round;
    if (next === 0) addLog(`━━━ Rodada ${newRound} ━━━`);
    addLog(`▶ Turno de ${participants[next].name}`);
    setActiveIndex(next); setRound(newRound);
  };

  const addLog = (msg: string) => setLog((prev) => [msg, ...prev].slice(0, 80));
  const updateParticipant = (updated: Participant) => setParticipants((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const removeParticipant = (id: string) => {
    const p = participants.find((x) => x.id === id);
    if (p) addLog(`🚫 ${p.name} removido do combate`);
    setParticipants((prev) => { const next = prev.filter((x) => x.id !== id); setActiveIndex((ai) => Math.min(ai, Math.max(0, next.length - 1))); return next; });
  };

  const saveEditedMonster = (updated: MonsterParticipant) => {
    setParticipants((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    addLog(`✎ ${updated.name} editado`);
  };

  const endCombat = () => {
    if (!confirm("Encerrar o combate?")) return;
    setParticipants([]); setCustomMonsters([]); setImportedThreats([]);
    setSelectedThreatIds(new Set()); setRound(1); setActiveIndex(0); setLog([]);
    setPhase("setup");
  };

  const playersAdded = participants.filter((p) => p.type === "player");

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: "0 1px 2px rgba(69,26,3,0.1)" }}>
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
            <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">Início</Link>
            <span className="text-amber-900/40">/</span>
            <Link href="/ameacas" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">Ameaças</Link>
            <span className="text-amber-900/40">/</span>
            <span className="text-red-800 whitespace-nowrap">Combate</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pb-20">

        {/* ── SETUP ─────────────────────────────────────────────── */}
        {phase === "setup" && (
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 md:mb-14">
              <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm tracking-wider">Preparar Combate</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6" />
              <p className="text-amber-950/85 font-medium text-lg leading-relaxed max-w-3xl">Adicione os jogadores e selecione as criaturas para iniciar a rolagem de iniciativas do encontro.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Jogadores */}
              <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-fit">
                <h3 className="text-2xl font-bold text-red-800 mb-2 tracking-wide flex items-center gap-3">
                  <span className="text-red-800/60 text-2xl">⚔</span> Jogadores
                </h3>
                <p className="text-sm text-amber-950/60 italic mb-6 border-b-2 border-amber-900/10 pb-4 font-medium">Insira nome e bônus de iniciativa.</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-amber-950/60 font-bold mb-1 block">Nome do Personagem</label>
                    <input type="text" placeholder="Ex: Khalmyr" value={newPlayerName}
                      onChange={(e) => setNewPlayerName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                      className="w-full px-4 py-2.5 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-xl text-amber-950 placeholder-amber-900/40 font-serif text-sm focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-amber-950/60 font-bold mb-1 block">Rolagem Final de Iniciativa</label>
                    <input type="number" placeholder="Resultado d20 + Bônus" value={newPlayerIni}
                      onChange={(e) => setNewPlayerIni(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                      className="w-full px-4 py-2.5 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-xl text-amber-950 placeholder-amber-900/40 font-serif text-sm focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                    />
                  </div>
                  <button onClick={addPlayer} className="w-full py-3 mt-2 bg-[#fbf5e6] text-amber-950/70 border-2 border-amber-900/20 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-red-800/40 hover:text-red-800 hover:bg-[#e8dac1] transition-all shadow-sm">
                    + Adicionar Jogador
                  </button>
                </div>
                <div className="space-y-2 flex-grow">
                  {playersAdded.map((p) => (
                    <div key={p.id} className="flex items-center justify-between px-4 py-3 bg-[#e8dac1] rounded-xl border border-amber-900/20 text-sm shadow-sm">
                      <span className="font-bold text-amber-950 text-base">{p.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-amber-950/60 font-bold text-[10px] bg-[#fbf5e6] px-2 py-1 rounded border border-amber-900/10 uppercase tracking-widest">INI {p.initiativeRoll}</span>
                        <button onClick={() => setParticipants((prev) => prev.filter((x) => x.id !== p.id))} className="text-amber-900/40 hover:text-red-800 text-sm w-6 h-6 flex items-center justify-center bg-[#fbf5e6] rounded border border-amber-900/10 transition-colors">✕</button>
                      </div>
                    </div>
                  ))}
                  {!playersAdded.length && (
                    <div className="text-center bg-[#e8dac1]/50 border-2 border-dashed border-amber-900/20 rounded-xl py-8">
                      <p className="text-amber-950/50 italic text-sm font-medium">Nenhum jogador na mesa.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Criaturas */}
              <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col h-fit">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-red-800 tracking-wide flex items-center gap-3">
                    <span className="text-red-800/60 text-2xl">☠</span> Ameaças
                  </h3>
                  {(selectedThreatIds.size + customMonsters.length) > 0 && (
                    <span className="bg-red-800 text-[#fbf5e6] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {selectedThreatIds.size + customMonsters.length} Selecionadas
                    </span>
                  )}
                </div>
                <p className="text-sm text-amber-950/60 italic mb-4 border-b-2 border-amber-900/10 pb-4 font-medium">Adicione do acervo ou crie ameaças customizadas.</p>

                {/* Botões de planilha */}
                <div className="flex gap-2 mb-4">
                  <input ref={xlsxInputRef} type="file" accept=".xlsx,.xls" onChange={handleXlsxImport} className="hidden" />
                  <button
                    onClick={() => xlsxInputRef.current?.click()}
                    className="flex-1 py-2.5 flex items-center justify-center gap-2 border-2 border-dashed border-amber-700/40 text-amber-950/60 bg-[#fbf5e6]/60 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-red-800/50 hover:text-red-800 hover:bg-[#fbf5e6] transition-all shadow-sm"
                  >
                    📥 Importar Planilha
                  </button>
                  <a
                    href="/criaturas_tormenta.xlsx"
                    download
                    title="Baixar modelo de planilha"
                    className="py-2.5 px-4 flex items-center justify-center gap-1.5 border-2 border-amber-900/20 text-amber-950/50 bg-[#fbf5e6]/60 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-emerald-700/50 hover:text-emerald-800 hover:bg-[#fbf5e6] transition-all shadow-sm whitespace-nowrap"
                  >
                    📄 Modelo
                  </a>
                </div>

                {/* Feedback importação */}
                {importError && (
                  <p className="text-xs text-red-800 font-bold bg-red-800/10 border border-red-800/20 rounded-lg px-3 py-2 mb-3">{importError}</p>
                )}
                {importedThreats.length > 0 && (
                  <div className="flex items-center justify-between px-3 py-2 bg-emerald-700/10 border border-emerald-700/25 rounded-xl mb-4">
                    <span className="text-emerald-800 text-xs font-bold">✓ {importedThreats.length} criatura{importedThreats.length > 1 ? "s" : ""} adicionada{importedThreats.length > 1 ? "s" : ""} automaticamente</span>
                    <button onClick={() => { setImportedThreats([]); setSelectedThreatIds((prev) => { const next = new Set(prev); importedThreats.forEach((t) => next.delete(t.id)); return next; }); }} className="text-emerald-800/50 hover:text-red-800 text-xs font-bold ml-3">✕ Limpar</button>
                  </div>
                )}

                {/* Monstro personalizado */}
                <CustomMonsterForm onAdd={(m) => setCustomMonsters((prev) => [...prev, m])} />

                {/* Monstros personalizados adicionados */}
                {customMonsters.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-red-800/80 font-bold mb-2 flex items-center gap-1"><span className="text-[8px] text-red-800/40">◆</span> Personalizados Adicionados</p>
                    {customMonsters.map((m) => (
                      <div key={m.id} className="flex items-center justify-between px-4 py-3 bg-[#fbf5e6] rounded-xl border border-red-800/20 text-sm shadow-sm">
                        <div className="flex flex-col">
                          <span className="font-bold text-red-800 truncate">{m.name}</span>
                          <span className="text-amber-950/50 text-[10px] font-bold uppercase tracking-widest mt-0.5">{m.pvMax} PV · ND {m.threat.nd}</span>
                        </div>
                        <button onClick={() => setCustomMonsters((prev) => prev.filter((x) => x.id !== m.id))} className="text-amber-900/40 hover:text-red-800 text-sm w-6 h-6 flex items-center justify-center bg-[#e8dac1] rounded border border-amber-900/20 transition-colors">✕</button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Biblioteca */}
                <div className="mt-6 border-t-2 border-amber-900/10 pt-5 flex-grow flex flex-col">
                  <p className="text-[10px] uppercase tracking-widest text-red-800/80 font-bold mb-2 flex items-center gap-1"><span className="text-[8px] text-red-800/40">◆</span> Acervo do Compêndio</p>
                  <CreatureSelector selected={selectedThreatIds} onToggle={toggleThreat} extra={importedThreats} />
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center border-t-2 border-amber-900/10 pt-10">
              <button
                onClick={goToRolling}
                disabled={playersAdded.length === 0 && selectedThreatIds.size === 0 && customMonsters.length === 0}
                className="px-12 py-4 bg-red-800 text-[#fbf5e6] rounded-xl font-bold text-lg tracking-widest uppercase hover:bg-red-900 hover:-translate-y-1 transition-all shadow-lg disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center gap-3"
              >
                Rolar Iniciativas <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ── ROLLING ───────────────────────────────────────────── */}
        {phase === "rolling" && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 md:mb-14 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm tracking-wider">Iniciativas</h2>
              <p className="text-amber-950/85 font-medium text-lg">Confirme e ajuste o resultado final de cada participante.</p>
            </div>
            <div className="space-y-4 mb-10 bg-[#e8dac1]/50 p-6 md:p-8 rounded-2xl border-2 border-amber-900/20 shadow-sm">
              {participants.map((p) => {
                const bonus = p.type === "monster" ? (p as MonsterParticipant).threat.iniciativa : null;
                return (
                  <div key={p.id} className="flex items-center gap-4 bg-[#fbf5e6] border-2 border-amber-900/10 rounded-xl p-4 md:p-5 shadow-sm hover:border-amber-900/30 transition-colors">
                    <span className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 border-2 shadow-sm ${p.type === "monster" ? "bg-red-800 text-[#fbf5e6] border-red-900" : "bg-[#e8dac1] text-amber-950/60 border-amber-900/20"}`}>
                      {p.type === "monster" ? "☠" : "⚔"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-amber-950 text-lg md:text-xl truncate tracking-wide">{p.name}</div>
                      {bonus !== null && <div className="text-[10px] md:text-xs text-amber-950/50 font-bold uppercase tracking-widest mt-1 bg-[#e8dac1] inline-block px-2 py-0.5 rounded border border-amber-900/10">Bônus original: {bonus >= 0 ? "+" : ""}{bonus}</div>}
                    </div>
                    <div className="flex flex-col items-center gap-1 shrink-0 bg-[#e8dac1]/50 p-2 rounded-lg border border-amber-900/10">
                      <span className="text-[10px] text-amber-950/60 font-bold uppercase tracking-widest">Total</span>
                      <input type="number"
                        value={rollValues[p.id] ?? 0}
                        onChange={(e) => setRollValues((prev) => ({ ...prev, [p.id]: parseInt(e.target.value) || 0 }))}
                        className="w-16 md:w-20 text-center px-2 py-1.5 bg-[#fbf5e6] border-2 border-amber-900/30 rounded-md font-black text-lg md:text-xl text-red-800 focus:outline-none focus:border-red-800/60 focus:ring-1 focus:ring-red-800/50 shadow-inner"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t-2 border-amber-900/10 pt-8">
              <button onClick={() => { setParticipants((prev) => prev.filter((p) => p.type === "player")); setPhase("setup"); }}
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-amber-900/30 bg-[#e8dac1] rounded-xl font-bold text-amber-950/70 hover:border-red-800/50 hover:text-red-800 transition-all uppercase tracking-widest text-sm">
                ← Voltar
              </button>
              <button onClick={startCombat}
                className="w-full sm:w-auto px-10 py-3.5 bg-red-800 text-[#fbf5e6] rounded-xl font-black text-sm tracking-widest uppercase hover:bg-red-900 hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-3">
                <span className="text-xl">⚔</span> Iniciar Combate
              </button>
            </div>
          </div>
        )}

        {/* ── COMBAT ────────────────────────────────────────────── */}
        {phase === "combat" && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#2a1810] text-[#fbf5e6] rounded-2xl p-6 md:p-8 shadow-2xl border-b-4 border-red-800 sticky top-28 z-40">
              <div className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col items-center bg-[#1f100a] px-5 py-3 rounded-xl border border-red-900/30 shadow-inner">
                  <div className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1">Rodada</div>
                  <div className="text-4xl md:text-5xl font-black text-[#fbf5e6] drop-shadow-md">{round}</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#fbf5e6]/20 to-transparent hidden sm:block" />
                <div className="flex flex-col">
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-[#fbf5e6]/50 font-bold mb-1">Turno Atual</div>
                  <div className="text-2xl md:text-3xl font-bold text-red-400 tracking-wide">{participants[activeIndex]?.name ?? "—"}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <button onClick={nextTurn} className="w-full sm:w-auto px-8 py-3.5 bg-red-800 hover:bg-red-700 text-[#fbf5e6] font-black tracking-widest uppercase rounded-xl transition-all shadow-[0_0_15px_rgba(153,27,27,0.4)] hover:shadow-[0_0_25px_rgba(153,27,27,0.6)] text-xs md:text-sm flex items-center justify-center gap-2">
                  Encerrar Turno <span>→</span>
                </button>
                <button onClick={endCombat} className="w-full sm:w-auto px-6 py-3.5 border-2 border-[#fbf5e6]/10 bg-[#1f100a] text-[#fbf5e6]/60 hover:text-red-400 hover:border-red-900/50 font-bold uppercase tracking-widest rounded-xl transition-all text-xs md:text-sm">
                  Encerrar Luta
                </button>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 gap-8 items-start">
              <div className="xl:col-span-2 space-y-5">
                {participants.map((p, i) => (
                  <div key={p.id} ref={i === activeIndex ? activeCardRef : null}>
                    <ParticipantCard
                      participant={p} isActive={i === activeIndex}
                      onUpdate={updateParticipant}
                      onEdit={p.type === "monster" ? () => setEditingMonster(p as MonsterParticipant) : undefined}
                      onRemove={() => removeParticipant(p.id)}
                      onLog={addLog}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#2a1810] rounded-2xl p-6 shadow-xl sticky top-64 border border-amber-900/40">
                <h3 className="text-xs uppercase tracking-widest text-red-400 font-bold mb-4 border-b-2 border-red-900/30 pb-3 flex items-center gap-2">
                  <span className="text-lg opacity-80">📜</span> Log de Combate
                </h3>
                <div className="space-y-3 max-h-[55vh] overflow-y-auto custom-scrollbar pr-2">
                  {log.map((entry, i) => (
                    <div key={i} className={`text-xs md:text-sm font-medium leading-relaxed font-serif p-2.5 rounded-lg ${i === 0 ? "bg-[#1f100a] text-[#fbf5e6] border border-red-900/30 shadow-sm" : "text-[#fbf5e6]/50 border border-transparent"}`}>
                      {entry}
                    </div>
                  ))}
                  {!log.length && <p className="text-sm text-[#fbf5e6]/30 italic font-serif p-4 text-center">Nenhum evento registrado ainda.</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {editingMonster && (
        <EditMonsterModal monster={editingMonster} onSave={saveEditedMonster} onClose={() => setEditingMonster(null)} />
      )}

      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif text-[#e8dac1]/60 text-sm flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 tracking-widest uppercase font-bold text-xs md:text-sm">Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs</p>
        <p className="text-xs tracking-wide opacity-50">Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}