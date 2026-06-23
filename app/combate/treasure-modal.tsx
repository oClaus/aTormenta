"use client";

import { useState } from "react";
import { tesouros } from "@/data/tesouros";
import {
  DIVERSO,
  EQUIPAMENTO_ARMA, EQUIPAMENTO_ARMADURA, EQUIPAMENTO_ESOTER, EQUIPAMENTO_CATEGORIAS,
  SUPERIOR_ARMA, SUPERIOR_ARMADURA, SUPERIOR_ESOTER, SUPERIOR_CATEGORIAS,
} from "@/data/itens";
import {
  RIQUEZAS,
  ARMAS_MAGICAS, ARMAS_ESPECIFICAS,
  ARMADURAS_MAGICAS, ARMADURAS_ESPECIFICAS,
  POCOES,
  ACESSORIOS_MENORES, ACESSORIOS_MEDIOS, ACESSORIOS_MAIORES,
  type GrauMagico,
} from "@/data/magicos";

// ─────────────────────────────────────────────────────────────────────────────
// Modal compacto de Tesouro — reaproveita a lógica de app/tesouros/page.tsx
// Aberto ao encerrar um combate, com o ND já sugerido.
// ─────────────────────────────────────────────────────────────────────────────

type ResultEntry = { readonly min: number; readonly max: number; readonly result: string };
type LabelEntry = { readonly min: number; readonly max: number; readonly label: string };
type AnyEntry = ResultEntry | LabelEntry;

function findInTable<T extends AnyEntry>(table: readonly T[], roll: number): T | null {
  return table.find((e) => roll >= e.min && roll <= e.max) ?? null;
}

function getDisplay(e: AnyEntry): string {
  if ("result" in e) return e.result as string;
  return (e as LabelEntry).label;
}

function isSuperior(r: string) { return r.startsWith("Superior"); }
function isEquipamento(r: string) { return r.startsWith("Equipamento"); }
function isMagico(r: string) { return r.startsWith("Mágico"); }
function isPocao(r: string) { return /poç(ão|ões)/i.test(r); }
function isRiqueza(r: string) { return /riqueza/i.test(r); }

function grauMagico(r: string): GrauMagico {
  if (r.includes("maior")) return "maior";
  if (r.includes("médio") || r.includes("medio")) return "medio";
  return "menor";
}

function extractNumMelhorias(r: string): number {
  return parseInt(r.match(/(\d+)\s+melhoria/)?.[1] ?? "1", 10);
}

// ── Sub-componentes visuais ──────────────────────────────────────────────────

function NumberPad({ label, hint, value, onChange }: {
  label: string; hint?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 font-serif">
      <label className="text-[11px] font-bold tracking-widest uppercase text-red-800/80">{label}</label>
      {hint && <p className="text-[10px] text-amber-950/60 -mt-0.5 mb-1 font-medium">{hint}</p>}
      <div className="flex items-center gap-2">
        <input
          type="number" min={1} max={100} value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="01–100"
          className="w-28 px-3 py-2 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-red-800 font-mono font-bold text-lg text-center focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 placeholder:text-amber-900/30 shadow-sm transition-all"
        />
        {value && (
          <button onClick={() => onChange("")} className="text-amber-900/40 hover:text-red-800 hover:bg-red-800/10 rounded-full w-6 h-6 flex items-center justify-center transition-colors text-sm" title="Limpar">✕</button>
        )}
      </div>
    </div>
  );
}

function ResultBadge({ label, roll, result, sub }: { label: string; roll: number; result: string; sub?: string }) {
  const empty = result === "—";
  return (
    <div className={`flex flex-wrap items-center gap-2 px-4 py-2.5 rounded-lg border-2 text-sm font-medium font-serif shadow-sm ${
      empty ? "bg-[#e8dac1]/50 border-amber-900/20 text-amber-950/50" : "bg-[#fbf5e6] border-red-800/30 text-red-800"
    }`}>
      <span className="font-mono font-bold text-base px-2 py-0.5 bg-red-800/10 rounded">{roll}</span>
      <span className="text-red-800/40 text-lg">→</span>
      <span className="font-bold text-[10px] tracking-widest uppercase text-amber-950/60">{label}:</span>
      <span className="text-base">{result}</span>
      {sub && <span className="text-xs text-amber-950/70 italic ml-1 border-l border-amber-900/20 pl-2">{sub}</span>}
    </div>
  );
}

function MiniHeader({ title }: { title: string }) {
  return <h4 className="text-base font-bold text-red-800 tracking-wide mb-3">{title}</h4>;
}

function MiniRollTable<T extends AnyEntry>({ table, selected, onSelect, extraCol }: {
  table: readonly T[]; selected: number | null; onSelect?: (v: number) => void; extraCol?: (e: T) => string | null;
}) {
  return (
    <div className="border-2 border-amber-900/15 rounded-lg overflow-hidden shadow-sm bg-[#fbf5e6] max-h-48 overflow-y-auto custom-scrollbar">
      <table className="w-full text-xs">
        <tbody className="divide-y divide-amber-900/10">
          {table.map((entry, i) => {
            const isHit = selected !== null && selected >= entry.min && selected <= entry.max;
            const extra = extraCol ? extraCol(entry) : null;
            return (
              <tr key={i}
                onClick={() => onSelect?.(entry.min)}
                className={`transition-all ${onSelect ? "cursor-pointer" : ""} ${isHit ? "bg-red-800/10 border-l-3 border-l-red-800" : onSelect ? "hover:bg-[#e8dac1]/50" : ""}`}>
                <td className={`px-3 py-1.5 font-mono w-16 ${isHit ? "text-red-800 font-bold" : "text-amber-950/60"}`}>
                  {entry.min === entry.max ? String(entry.min).padStart(2, "0") : `${String(entry.min).padStart(2, "0")}-${String(entry.max).padStart(2, "0")}`}
                </td>
                <td className={`px-3 py-1.5 ${isHit ? "text-red-800 font-bold" : "text-amber-950/85"}`}>{getDisplay(entry)}</td>
                {extraCol && <td className="px-3 py-1.5 text-amber-950/60 hidden sm:table-cell">{extra}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Componente Principal ─────────────────────────────────────────────────────

export default function TreasureModal({
  suggestedNd,
  onClose,
}: {
  suggestedNd?: string;
  onClose: () => void;
}) {
  const [selectedND, setSelectedND] = useState<string | null>(suggestedNd ?? null);
  const [rollDinheiro, setRollDinheiro] = useState("");
  const [rollItens, setRollItens] = useState("");
  const [rollRiqueza, setRollRiqueza] = useState("");
  const [rollDiverso, setRollDiverso] = useState("");
  const [rollEqCat, setRollEqCat] = useState("");
  const [rollEqItem, setRollEqItem] = useState("");
  const [rollSupCat, setRollSupCat] = useState("");
  const [rollSupBase, setRollSupBase] = useState("");
  const [rollSupItem, setRollSupItem] = useState("");
  const [rollPocao, setRollPocao] = useState("");
  const [rollMagCat, setRollMagCat] = useState("");
  const [rollMagItem, setRollMagItem] = useState("");
  const [rollMagEsp, setRollMagEsp] = useState("");

  function clearSubs() {
    setRollRiqueza(""); setRollDiverso("");
    setRollEqCat(""); setRollEqItem("");
    setRollSupCat(""); setRollSupBase(""); setRollSupItem("");
    setRollPocao("");
    setRollMagCat(""); setRollMagItem(""); setRollMagEsp("");
  }

  function selectND(nd: string) {
    setSelectedND(nd);
    setRollDinheiro(""); setRollItens("");
    clearSubs();
  }

  const tesouro = tesouros.find((t) => t.nd === selectedND) ?? null;
  const dRoll = rollDinheiro !== "" ? parseInt(rollDinheiro, 10) : null;
  const iRoll = rollItens !== "" ? parseInt(rollItens, 10) : null;

  const dResult = tesouro && dRoll !== null ? findInTable(tesouro.dinheiro, dRoll) : null;
  const iResult = tesouro && iRoll !== null ? findInTable(tesouro.itens, iRoll) : null;
  const dRes = dResult ? getDisplay(dResult) : "";
  const iRes = iResult ? getDisplay(iResult) : "";

  const needsRiqueza = isRiqueza(dRes);
  const needsDiverso = iRes === "Diverso";
  const needsEquip = isEquipamento(iRes);
  const needsSuperior = isSuperior(iRes);
  const needsPocao = isPocao(iRes);
  const needsMagico = isMagico(iRes);

  const numMelhorias = needsSuperior ? extractNumMelhorias(iRes) : 1;
  const grauMag: GrauMagico = needsMagico ? grauMagico(iRes) : "menor";
  const grauRiq: "menor" | "media" | "maior" =
    dRes.includes("maior") ? "maior" : dRes.includes("médi") ? "media" : "menor";

  // ── Riqueza ──────────────────────────────────────────────────────────────
  const grauLabel = grauRiq === "menor" ? "Menor" : grauRiq === "media" ? "Média" : "Maior";
  type RiqEntry = ResultEntry & { readonly exemplos: string };
  const riquezaTable: RiqEntry[] = RIQUEZAS.flatMap((r) => {
    const col = grauRiq === "menor" ? r.menor : grauRiq === "media" ? r.media : r.maior;
    if (col === "—") return [];
    const parts = col.split("-").map(Number);
    return [{ min: parts[0], max: parts[1] ?? parts[0], result: r.valor, exemplos: r.exemplos } as RiqEntry];
  });
  const riqNum = rollRiqueza !== "" ? parseInt(rollRiqueza, 10) : null;
  const riqHit = riqNum !== null ? findInTable(riquezaTable, riqNum) : null;

  // ── Diverso ──────────────────────────────────────────────────────────────
  const divNum = rollDiverso !== "" ? parseInt(rollDiverso, 10) : null;
  const divRes = divNum !== null ? findInTable(DIVERSO, divNum) : null;

  // ── Equipamento ──────────────────────────────────────────────────────────
  const eqCatNum = rollEqCat !== "" ? parseInt(rollEqCat, 10) : null;
  const eqItemNum = rollEqItem !== "" ? parseInt(rollEqItem, 10) : null;
  const eqCatEntry = eqCatNum !== null ? findInTable(EQUIPAMENTO_CATEGORIAS, eqCatNum) : null;
  const eqSubtable =
    eqCatEntry?.label === "Arma" ? EQUIPAMENTO_ARMA :
    eqCatEntry?.label === "Armadura" ? EQUIPAMENTO_ARMADURA :
    eqCatEntry?.label === "Esotérico" ? EQUIPAMENTO_ESOTER : null;
  const eqItemRes = eqSubtable && eqItemNum !== null ? findInTable(eqSubtable, eqItemNum) : null;

  // ── Superior ─────────────────────────────────────────────────────────────
  const supCatNum = rollSupCat !== "" ? parseInt(rollSupCat, 10) : null;
  const supBaseNum = rollSupBase !== "" ? parseInt(rollSupBase, 10) : null;
  const supItemNum = rollSupItem !== "" ? parseInt(rollSupItem, 10) : null;
  const supCatEntry = supCatNum !== null ? findInTable(SUPERIOR_CATEGORIAS, supCatNum) : null;
  const supBaseTable =
    supCatEntry?.label === "Arma" ? EQUIPAMENTO_ARMA :
    supCatEntry?.label === "Armadura/Escudo" ? EQUIPAMENTO_ARMADURA :
    supCatEntry?.label === "Esotérico" ? EQUIPAMENTO_ESOTER : null;
  const supMelhoriaTable =
    supCatEntry?.label === "Arma" ? SUPERIOR_ARMA :
    supCatEntry?.label === "Armadura/Escudo" ? SUPERIOR_ARMADURA :
    supCatEntry?.label === "Esotérico" ? SUPERIOR_ESOTER : null;
  const supBaseRes = supBaseTable && supBaseNum !== null ? findInTable(supBaseTable, supBaseNum) : null;
  const supItemRes = supMelhoriaTable && supItemNum !== null ? findInTable(supMelhoriaTable, supItemNum) : null;

  // ── Poção ────────────────────────────────────────────────────────────────
  const pocaoNum = rollPocao !== "" ? parseInt(rollPocao, 10) : null;
  const pocaoRes = pocaoNum !== null ? findInTable(POCOES, pocaoNum) : null;

  // ── Mágico ───────────────────────────────────────────────────────────────
  const magCatNum = rollMagCat !== "" ? parseInt(rollMagCat, 10) : null;
  const magItemNum = rollMagItem !== "" ? parseInt(rollMagItem, 10) : null;
  const magEspNum = rollMagEsp !== "" ? parseInt(rollMagEsp, 10) : null;
  type MagCatLabel = "Arma" | "Armadura/Escudo" | "Acessório" | null;
  const magCatLabel: MagCatLabel =
    magCatNum === null ? null :
    magCatNum <= 2 ? "Arma" :
    magCatNum === 3 ? "Armadura/Escudo" :
    magCatNum <= 6 ? "Acessório" : null;
  const magEncantosTable =
    magCatLabel === "Arma" ? ARMAS_MAGICAS :
    magCatLabel === "Armadura/Escudo" ? ARMADURAS_MAGICAS : null;
  const magAcessorioTable =
    magCatLabel === "Acessório"
      ? grauMag === "maior" ? ACESSORIOS_MAIORES : grauMag === "medio" ? ACESSORIOS_MEDIOS : ACESSORIOS_MENORES
      : null;
  const magItemRes =
    magEncantosTable && magItemNum !== null ? findInTable(magEncantosTable, magItemNum) :
    magAcessorioTable && magItemNum !== null ? findInTable(magAcessorioTable, magItemNum) : null;
  const magItemResultStr = magItemRes ? getDisplay(magItemRes) : "";
  const magNeedsEspecifica = magItemResultStr.includes("Tabela 8-9") || magItemResultStr.includes("Tabela 8-11");
  const magEspecificaTable = magItemResultStr.includes("Tabela 8-9") ? ARMAS_ESPECIFICAS : ARMADURAS_ESPECIFICAS;
  const magEspRes = magNeedsEspecifica && magEspNum !== null ? findInTable(magEspecificaTable, magEspNum) : null;
  const magGrauLabel = grauMag === "maior" ? "Maior" : grauMag === "medio" ? "Médio" : "Menor";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a1810]/70 backdrop-blur-sm">
      <div className="bg-[#f5e6d0] border-2 border-amber-900/40 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col font-serif">

        {/* Header */}
        <div className="p-6 border-b-2 border-amber-900/20 bg-[#e8dac1] rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold text-red-800 tracking-wide flex items-center gap-2">
            <span>🎁</span> Tesouro do Combate
          </h2>
          <button onClick={onClose} className="text-amber-950/40 hover:text-red-800 text-2xl leading-none transition-colors">✕</button>
        </div>

        <div className="overflow-y-auto p-6 flex-1 custom-scrollbar space-y-6">

          {/* Passo 1: Escolher ND */}
          {!selectedND ? (
            <div>
              <p className="text-sm text-amber-950/75 mb-4">Escolha o Nível de Desafio do encontro para consultar a Tabela 8-1.</p>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {tesouros.map((t) => (
                  <button key={t.nd} onClick={() => selectND(t.nd)}
                    className="py-3 px-2 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg shadow-sm hover:border-red-800/50 hover:bg-[#e8dac1] transition-all text-center font-bold text-amber-950 text-sm">
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-red-800/60 mb-0.5">ND</span>
                    {t.nd}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* ND selecionado + trocar */}
              <div className="flex items-center justify-between bg-[#e8dac1] p-4 rounded-xl border-2 border-amber-900/20">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-red-800 mb-0.5">Nível de Desafio</p>
                  <h3 className="text-2xl font-bold text-amber-950">ND {selectedND}</h3>
                </div>
                <button onClick={() => setSelectedND(null)} className="px-4 py-2 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-xs text-amber-950/70 hover:text-red-800 hover:border-red-800/50 transition-all font-bold uppercase tracking-wide flex items-center gap-1.5">
                  <span>↺</span> Trocar
                </button>
              </div>

              {/* Rolagem principal */}
              <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5">
                <MiniHeader title="Tabela 8-1: Dinheiro & Itens" />
                <div className="flex flex-wrap gap-5 mb-4">
                  <NumberPad label="D% — Dinheiro" value={rollDinheiro} onChange={setRollDinheiro} />
                  <NumberPad label="D% — Itens" value={rollItens} onChange={setRollItens} />
                </div>
                {(dRoll !== null || iRoll !== null) && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-amber-900/10">
                    {dRoll !== null && <ResultBadge label="Dinheiro" roll={dRoll} result={dRes || "—"} />}
                    {iRoll !== null && <ResultBadge label="Itens" roll={iRoll} result={iRes || "—"} />}
                  </div>
                )}
                {tesouro && (
                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    <MiniRollTable table={tesouro.dinheiro} selected={dRoll} onSelect={(v) => setRollDinheiro(String(v))} />
                    <MiniRollTable table={tesouro.itens} selected={iRoll} onSelect={(v) => setRollItens(String(v))} />
                  </div>
                )}
              </div>

              {/* Riqueza */}
              {needsRiqueza && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5">
                  <MiniHeader title={`Riqueza ${grauLabel}`} />
                  <div className="flex flex-wrap items-end gap-3 mb-3">
                    <NumberPad label="D% — Riqueza" value={rollRiqueza} onChange={setRollRiqueza} />
                    {riqHit && riqNum !== null && <ResultBadge label="Riqueza" roll={riqNum} result={riqHit.result} sub={riqHit.exemplos} />}
                  </div>
                  <MiniRollTable table={riquezaTable} selected={riqNum} onSelect={(v) => setRollRiqueza(String(v))} extraCol={(e) => e.exemplos} />
                </div>
              )}

              {/* Diverso */}
              {needsDiverso && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5">
                  <MiniHeader title="Item Diverso" />
                  <div className="flex flex-wrap items-end gap-3 mb-3">
                    <NumberPad label="D% — Diverso" value={rollDiverso} onChange={setRollDiverso} />
                    {divRes && divNum !== null && <ResultBadge label="Item" roll={divNum} result={getDisplay(divRes)} />}
                  </div>
                  <MiniRollTable table={DIVERSO} selected={divNum} onSelect={(v) => setRollDiverso(String(v))} />
                </div>
              )}

              {/* Equipamento */}
              {needsEquip && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5 space-y-4">
                  <MiniHeader title="Equipamento" />
                  <NumberPad label="D% — Categoria" hint="01-60 Arma · 61-90 Armadura · 91-100 Esotérico" value={rollEqCat} onChange={(v) => { setRollEqCat(v); setRollEqItem(""); }} />
                  <MiniRollTable table={EQUIPAMENTO_CATEGORIAS} selected={eqCatNum} onSelect={(v) => { setRollEqCat(String(v)); setRollEqItem(""); }} />
                  {eqSubtable && eqCatEntry && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label={`D% — ${eqCatEntry.label}`} value={rollEqItem} onChange={setRollEqItem} />
                        {eqItemRes && eqItemNum !== null && <ResultBadge label={eqCatEntry.label} roll={eqItemNum} result={getDisplay(eqItemRes)} />}
                      </div>
                      <MiniRollTable table={eqSubtable} selected={eqItemNum} onSelect={(v) => setRollEqItem(String(v))} />
                    </div>
                  )}
                </div>
              )}

              {/* Superior */}
              {needsSuperior && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5 space-y-4">
                  <MiniHeader title={`Superior (${numMelhorias} melhoria${numMelhorias > 1 ? "s" : ""})`} />
                  <NumberPad label="D% — Categoria" hint="01-60 Arma · 61-90 Armadura/Escudo · 91-100 Esotérico" value={rollSupCat} onChange={(v) => { setRollSupCat(v); setRollSupBase(""); setRollSupItem(""); }} />
                  <MiniRollTable table={SUPERIOR_CATEGORIAS} selected={supCatNum} onSelect={(v) => { setRollSupCat(String(v)); setRollSupBase(""); setRollSupItem(""); }} />
                  {supBaseTable && supCatEntry && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label={`D% — Qual ${supCatEntry.label}?`} value={rollSupBase} onChange={(v) => { setRollSupBase(v); setRollSupItem(""); }} />
                        {supBaseRes && supBaseNum !== null && <ResultBadge label="Item Base" roll={supBaseNum} result={getDisplay(supBaseRes)} />}
                      </div>
                      <MiniRollTable table={supBaseTable} selected={supBaseNum} onSelect={(v) => { setRollSupBase(String(v)); setRollSupItem(""); }} />
                    </div>
                  )}
                  {supMelhoriaTable && supBaseNum !== null && supCatEntry && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label={`D% — Melhoria (${supCatEntry.label})`} value={rollSupItem} onChange={setRollSupItem} />
                        {supItemRes && supItemNum !== null && <ResultBadge label="Melhoria" roll={supItemNum} result={getDisplay(supItemRes)} />}
                      </div>
                      <MiniRollTable table={supMelhoriaTable} selected={supItemNum} onSelect={(v) => setRollSupItem(String(v))} />
                      {numMelhorias > 1 && <p className="text-[10px] font-bold text-red-800/80 uppercase tracking-widest">Para as demais melhorias, role novamente nesta tabela.</p>}
                    </div>
                  )}
                </div>
              )}

              {/* Poção */}
              {needsPocao && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5">
                  <MiniHeader title="Poção" />
                  <div className="flex flex-wrap items-end gap-3 mb-3">
                    <NumberPad label="D% — Poção" value={rollPocao} onChange={setRollPocao} />
                    {pocaoRes && pocaoNum !== null && <ResultBadge label="Poção" roll={pocaoNum} result={getDisplay(pocaoRes)} sub={"preco" in pocaoRes ? String(pocaoRes.preco) : undefined} />}
                  </div>
                  <MiniRollTable table={POCOES} selected={pocaoNum} onSelect={(v) => setRollPocao(String(v))} extraCol={(e) => ("preco" in e ? String(e.preco) : null)} />
                </div>
              )}

              {/* Mágico */}
              {needsMagico && (
                <div className="bg-[#e8dac1]/50 border-2 border-amber-900/20 rounded-xl p-5 space-y-4">
                  <MiniHeader title={`Mágico (${magGrauLabel})`} />
                  <NumberPad label="1d6 — Categoria" hint="1-2 Arma · 3 Armadura/Escudo · 4-6 Acessório" value={rollMagCat} onChange={(v) => { setRollMagCat(v); setRollMagItem(""); setRollMagEsp(""); }} />
                  {magEncantosTable && magCatLabel && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label={`D% — Encanto (${magCatLabel})`} value={rollMagItem} onChange={(v) => { setRollMagItem(v); setRollMagEsp(""); }} />
                        {magItemRes && magItemNum !== null && <ResultBadge label="Encanto" roll={magItemNum} result={getDisplay(magItemRes)} sub={"efeito" in magItemRes ? String(magItemRes.efeito) : undefined} />}
                      </div>
                      <MiniRollTable table={magEncantosTable} selected={magItemNum} onSelect={(v) => { setRollMagItem(String(v)); setRollMagEsp(""); }} extraCol={(e) => ("efeito" in e ? String(e.efeito) : null)} />
                    </div>
                  )}
                  {magAcessorioTable && magCatLabel && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label={`D% — Acessório ${magGrauLabel}`} value={rollMagItem} onChange={setRollMagItem} />
                        {magItemRes && magItemNum !== null && <ResultBadge label="Acessório" roll={magItemNum} result={getDisplay(magItemRes)} sub={"preco" in magItemRes ? String(magItemRes.preco) : undefined} />}
                      </div>
                      <MiniRollTable table={magAcessorioTable} selected={magItemNum} onSelect={(v) => setRollMagItem(String(v))} extraCol={(e) => ("preco" in e ? String(e.preco) : null)} />
                    </div>
                  )}
                  {magNeedsEspecifica && (
                    <div className="pt-3 border-t-2 border-amber-900/10 space-y-3">
                      <p className="text-xs font-medium text-red-800 bg-[#fbf5e6] rounded-lg px-3 py-2 border border-red-800/20">O encanto remete a uma tabela específica. Role mais um D%:</p>
                      <div className="flex flex-wrap items-end gap-3">
                        <NumberPad label="D% — Item Específico" value={rollMagEsp} onChange={setRollMagEsp} />
                        {magEspRes && magEspNum !== null && <ResultBadge label="Item Específico" roll={magEspNum} result={getDisplay(magEspRes)} sub={"preco" in magEspRes ? String(magEspRes.preco) : undefined} />}
                      </div>
                      <MiniRollTable table={magEspecificaTable} selected={magEspNum} onSelect={(v) => setRollMagEsp(String(v))} extraCol={(e) => ("preco" in e ? String(e.preco) : null)} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t-2 border-amber-900/20 bg-[#e8dac1] rounded-b-2xl flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 bg-red-800 text-[#fbf5e6] rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-red-900 transition-all shadow-md">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
