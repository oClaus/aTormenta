"use client";

import Link from "next/link";
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
import ThemeToggle from "@/components/ThemeToggle";

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

// ─── tipos locais ─────────────────────────────────────────────────────────────

type ResultEntry = { readonly min: number; readonly max: number; readonly result: string };
type LabelEntry  = { readonly min: number; readonly max: number; readonly label:  string };
type AnyEntry = ResultEntry | LabelEntry;

// ─── helpers ──────────────────────────────────────────────────────────────────

function findInTable<T extends AnyEntry>(table: readonly T[], roll: number): T | null {
  return table.find((e) => roll >= e.min && roll <= e.max) ?? null;
}

function fmtRange(e: AnyEntry) {
  if (e.min === e.max) return String(e.min).padStart(2, "0");
  return `${String(e.min).padStart(2, "0")}-${String(e.max).padStart(2, "0")}`;
}

function getDisplay(e: AnyEntry): string {
  if ("result" in e) return e.result as string;
  return (e as LabelEntry).label;
}

// predicados
function isSuperior(r: string)    { return r.startsWith("Superior"); }
function isEquipamento(r: string) { return r.startsWith("Equipamento"); }
function isMagico(r: string)      { return r.startsWith("Mágico"); }
function isPocao(r: string)       { return /poç(ão|ões)/i.test(r); }
function isRiqueza(r: string)     { return /riqueza/i.test(r); }

function grauMagico(r: string): GrauMagico {
  if (r.includes("maior")) return "maior";
  if (r.includes("médio") || r.includes("medio")) return "medio";
  return "menor";
}

function extractNumMelhorias(r: string): number {
  return parseInt(r.match(/(\d+)\s+melhoria/)?.[1] ?? "1", 10);
}

// ─── NumberPad ────────────────────────────────────────────────────────────────

function NumberPad({
  label, hint, value, onChange,
}: {
  label: string; hint?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-display text-[11px] font-bold tracking-widest uppercase text-red-800/80">{label}</label>
      {hint && <p className="text-[10px] text-amber-950/60 -mt-0.5 mb-1 font-medium">{hint}</p>}
      <div className="flex items-center gap-2">
        <input
          type="number" min={1} max={100} value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="01–100"
          className="w-28 px-3 py-2 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-red-800 font-mono font-bold text-lg text-center focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 placeholder:text-amber-900/30 shadow-sm transition-all"
        />
        {value && (
          <button onClick={() => onChange("")} className="text-amber-900/40 hover:text-red-800 hover:bg-red-800/10 rounded-full w-6 h-6 flex items-center justify-center transition-colors text-sm" title="Limpar">✕</button>
        )}
      </div>
    </div>
  );
}

// ─── RollTable ────────────────────────────────────────────────────────────────

function RollTable<T extends AnyEntry>({
  title, table, selected, onSelect, extraCol,
}: {
  title: string;
  table: readonly T[];
  selected: number | null;
  onSelect?: (v: number) => void;
  extraCol?: (entry: T) => string | null;
}) {
  return (
    <div className="border-2 border-amber-900/20 rounded-xl overflow-hidden shadow-sm bg-[rgb(var(--bg-card-rgb))] font-serif">
      <div className="bg-[rgb(var(--bg-edge-rgb))] px-4 py-3 border-b-2 border-amber-900/20">
        <span className="font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-950/80">{title}</span>
      </div>
      <table className="w-full text-sm table-fixed">
        <thead className="bg-[rgb(var(--bg-card-rgb))]">
          <tr>
            <th className="font-display w-[20%] px-4 py-2.5 text-left text-amber-950/70 text-[10px] uppercase tracking-widest font-bold border-r-2 border-amber-900/10">D%</th>
            <th className={`font-display ${extraCol ? 'w-[40%]' : 'w-[80%]'} px-4 py-2.5 text-left text-amber-950/70 text-[10px] uppercase tracking-widest font-bold ${extraCol ? 'border-r-2 border-amber-900/10' : ''}`}>Resultado</th>
            {extraCol && <th className="font-display w-[40%] px-4 py-2.5 text-left text-amber-950/70 text-[10px] uppercase tracking-widest font-bold hidden sm:table-cell">Detalhe</th>}
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
          {table.map((entry, i) => {
            const isHit = selected !== null && selected >= entry.min && selected <= entry.max;
            const extra = extraCol ? extraCol(entry) : null;
            return (
              <tr
                key={i}
                onClick={() => onSelect?.(entry.min)}
                className={`transition-all ${onSelect ? "cursor-pointer" : ""} ${
                  isHit ? "bg-red-800/10 border-l-4 border-l-red-800" : onSelect ? "hover:bg-[rgb(var(--bg-card-rgb))]/50" : ""
                } ${i % 2 !== 0 && !isHit ? "bg-[rgb(var(--bg-card-rgb))]/20" : ""}`}
              >
                <td className={`px-4 py-2 font-mono text-sm border-r-2 border-amber-900/10 ${isHit ? "text-red-800 font-bold" : "text-amber-950/60 font-medium"}`}>
                  {fmtRange(entry)}
                </td>
                <td className={`px-4 py-2 font-medium ${extraCol ? 'border-r-2 border-amber-900/10' : ''} ${isHit ? "text-red-800 font-bold" : "text-amber-950/85"}`}>
                  <div className="flex items-center justify-between">
                    <span>{getDisplay(entry)}</span>
                    {isHit && <span className="font-display text-[10px] text-red-800/60 font-bold uppercase tracking-widest ml-2 bg-red-800/10 px-2 py-0.5 rounded">Sorteado</span>}
                  </div>
                </td>
                {extraCol && <td className={`px-4 py-2 text-sm hidden sm:table-cell ${isHit ? "text-red-800/90 font-medium" : "text-amber-950/70"}`}>{extra}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── ResultBadge ──────────────────────────────────────────────────────────────

function ResultBadge({ label, roll, result, sub }: { label: string; roll: number; result: string; sub?: string }) {
  const empty = result === "—";
  return (
    <div className={`flex flex-wrap items-center gap-2 px-4 py-2.5 rounded-lg border-2 text-sm font-medium shadow-sm ${
      empty
        ? "bg-[rgb(var(--bg-card-rgb))]/50 border-amber-900/20 text-amber-950/50"
        : "bg-[rgb(var(--bg-inset-rgb))] border-red-800/30 text-red-800"
    }`}>
      <span className="font-mono font-bold text-base px-2 py-0.5 bg-red-800/10 rounded">{roll}</span>
      <span className="text-red-800/40 text-lg">→</span>
      <span className="font-display font-bold text-[10px] tracking-widest uppercase text-amber-950/60">{label}:</span>
      <span className="text-base">{result}</span>
      {sub && <span className="text-xs text-amber-950/70 italic ml-1 border-l border-amber-900/20 pl-2">{sub}</span>}
    </div>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────

function SectionHeader({ step, title, subtitle }: { step: number; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <span className="w-7 h-7 rounded bg-red-800 text-[rgb(var(--bg-inset-rgb))] text-sm font-bold flex items-center justify-center shrink-0 shadow-sm">
          {step}
        </span>
        <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 tracking-wide">{title}</h3>
      </div>
      {subtitle && <p className="text-sm text-amber-950/70 ml-10 font-medium italic">{subtitle}</p>}
    </div>
  );
}

// ─── Seção: Riqueza ───────────────────────────────────────────────────────────

function RiquezaSection({ grau, rollVal, onChange }: {
  grau: "menor" | "media" | "maior"; rollVal: string; onChange: (v: string) => void;
}) {
  const rollNum = rollVal !== "" ? parseInt(rollVal, 10) : null;
  const grauLabel = grau === "menor" ? "Menor" : grau === "media" ? "Média" : "Maior";

  type RiqEntry = ResultEntry & { readonly exemplos: string };
  const tableData: RiqEntry[] = RIQUEZAS.flatMap((r) => {
    const col = grau === "menor" ? r.menor : grau === "media" ? r.media : r.maior;
    if (col === "—") return [];
    const parts = col.split("-").map(Number);
    return [{ min: parts[0], max: parts[1] ?? parts[0], result: r.valor, exemplos: r.exemplos } as RiqEntry];
  });

  const hit = rollNum !== null ? findInTable(tableData, rollNum) : null;

  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader step={3} title={`Tabela 8-2: Riqueza ${grauLabel}`} subtitle="Role um D% para determinar o valor da riqueza encontrada." />
      <div className="flex flex-wrap items-end gap-4">
        <NumberPad label="D% — Riqueza" value={rollVal} onChange={onChange} />
        {hit && rollNum !== null && <ResultBadge label="Riqueza" roll={rollNum} result={hit.result} sub={hit.exemplos} />}
      </div>
      <RollTable
        title={`Tabela 8-2: Riqueza ${grauLabel}`}
        table={tableData}
        selected={rollNum}
        onSelect={(v) => onChange(String(v))}
        extraCol={(e) => e.exemplos}
      />
    </div>
  );
}

// ─── Seção: Diverso ───────────────────────────────────────────────────────────

function DiversoSection({ roll, onChange }: { roll: string; onChange: (v: string) => void }) {
  const n = roll !== "" ? parseInt(roll, 10) : null;
  const res = n !== null ? findInTable(DIVERSO, n) : null;
  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader step={3} title="Item Diverso — Tabela 8-3" subtitle='"Diverso" sorteado. Role um D% na tabela abaixo.' />
      <div className="flex flex-wrap items-end gap-4">
        <NumberPad label="D% — Diverso" value={roll} onChange={onChange} />
        {res && n !== null && <ResultBadge label="Item Diverso" roll={n} result={getDisplay(res)} />}
      </div>
      <RollTable title="Tabela 8-3: Itens Diversos" table={DIVERSO} selected={n} onSelect={(v) => onChange(String(v))} />
    </div>
  );
}

// ─── Seção: Equipamento ───────────────────────────────────────────────────────

function EquipamentoSection({ rollCat, rollItem, onCatChange, onItemChange }: {
  rollCat: string; rollItem: string; onCatChange: (v: string) => void; onItemChange: (v: string) => void;
}) {
  const catNum  = rollCat  !== "" ? parseInt(rollCat,  10) : null;
  const itemNum = rollItem !== "" ? parseInt(rollItem, 10) : null;

  const catEntry = catNum !== null ? findInTable(EQUIPAMENTO_CATEGORIAS, catNum) : null;

  const subtable =
    catEntry?.label === "Arma"      ? EQUIPAMENTO_ARMA :
    catEntry?.label === "Armadura"  ? EQUIPAMENTO_ARMADURA :
    catEntry?.label === "Esotérico" ? EQUIPAMENTO_ESOTER : null;

  const itemRes = subtable && itemNum !== null ? findInTable(subtable, itemNum) : null;

  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader step={3} title="Equipamento — Tabela 8-4" subtitle='"Equipamento" sorteado. Role categoria e depois o item.' />
      <div className="space-y-4">
        <NumberPad label="D% — Categoria" hint="01-60 Arma · 61-90 Armadura · 91-100 Esotérico" value={rollCat} onChange={(v) => { onCatChange(v); onItemChange(""); }} />
        <RollTable title="Categoria" table={EQUIPAMENTO_CATEGORIAS} selected={catNum} onSelect={(v) => { onCatChange(String(v)); onItemChange(""); }} />
      </div>
      {subtable && catEntry && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad label={`D% — ${catEntry.label}`} value={rollItem} onChange={onItemChange} />
            {itemRes && itemNum !== null && <ResultBadge label={catEntry.label} roll={itemNum} result={getDisplay(itemRes)} />}
          </div>
          <RollTable title={`Tabela 8-4: ${catEntry.label}`} table={subtable} selected={itemNum} onSelect={(v) => onItemChange(String(v))} />
        </div>
      )}
    </div>
  );
}

// ─── Seção: Superior ──────────────────────────────────────────────────────────

function SuperiorSection({ 
  numMelhorias, rollCat, rollBase, rollItem, onCatChange, onBaseChange, onItemChange 
}: {
  numMelhorias: number; rollCat: string; rollBase: string; rollItem: string; 
  onCatChange: (v: string) => void; onBaseChange: (v: string) => void; onItemChange: (v: string) => void;
}) {
  const catNum  = rollCat  !== "" ? parseInt(rollCat,  10) : null;
  const baseNum = rollBase !== "" ? parseInt(rollBase, 10) : null;
  const itemNum = rollItem !== "" ? parseInt(rollItem, 10) : null;

  const catEntry = catNum !== null ? findInTable(SUPERIOR_CATEGORIAS, catNum) : null;

  const baseTable =
    catEntry?.label === "Arma"            ? EQUIPAMENTO_ARMA :
    catEntry?.label === "Armadura/Escudo" ? EQUIPAMENTO_ARMADURA :
    catEntry?.label === "Esotérico"       ? EQUIPAMENTO_ESOTER : null;

  const melhoriaTable =
    catEntry?.label === "Arma"            ? SUPERIOR_ARMA :
    catEntry?.label === "Armadura/Escudo" ? SUPERIOR_ARMADURA :
    catEntry?.label === "Esotérico"       ? SUPERIOR_ESOTER : null;

  const baseRes = baseTable && baseNum !== null ? findInTable(baseTable, baseNum) : null;
  const itemRes = melhoriaTable && itemNum !== null ? findInTable(melhoriaTable, itemNum) : null;

  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader
        step={3}
        title={`Superior (${numMelhorias} melhoria${numMelhorias > 1 ? "s" : ""}) — Tabelas 8-4 e 8-5`}
        subtitle="Role a categoria, determine o item base e em seguida suas melhorias."
      />
      <div className="text-sm font-medium text-red-800 bg-[rgb(var(--bg-inset-rgb))] rounded-lg px-4 py-3 border border-red-800/20 shadow-sm flex items-center gap-2">
        <span className="text-red-800/50">❖</span>
        <span>
          Este item possui <strong>{numMelhorias} melhoria{numMelhorias > 1 ? "s" : ""}</strong>.
          {numMelhorias > 1 && " Role a tabela de melhorias uma vez para cada melhoria."}
        </span>
      </div>
      
      <div className="space-y-4 pt-2">
        <NumberPad label="D% — Categoria" hint="01-60 Arma · 61-90 Armadura/Escudo · 91-100 Esotérico" value={rollCat} onChange={(v) => { onCatChange(v); onBaseChange(""); onItemChange(""); }} />
        <RollTable title="Categoria Superior" table={SUPERIOR_CATEGORIAS} selected={catNum} onSelect={(v) => { onCatChange(String(v)); onBaseChange(""); onItemChange(""); }} />
      </div>

      {baseTable && catEntry && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad label={`D% — Qual ${catEntry.label}?`} value={rollBase} onChange={(v) => { onBaseChange(v); onItemChange(""); }} />
            {baseRes && baseNum !== null && <ResultBadge label="Item Base" roll={baseNum} result={getDisplay(baseRes)} />}
          </div>
          <RollTable title={`Tabela 8-4: Equipamento — ${catEntry.label}`} table={baseTable} selected={baseNum} onSelect={(v) => { onBaseChange(String(v)); onItemChange(""); }} />
        </div>
      )}

      {melhoriaTable && baseNum !== null && catEntry && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad label={`D% — Melhoria (${catEntry.label})`} value={rollItem} onChange={onItemChange} />
            {itemRes && itemNum !== null && <ResultBadge label="Melhoria" roll={itemNum} result={getDisplay(itemRes)} />}
          </div>
          <RollTable title={`Tabela 8-5: Melhorias — ${catEntry.label}`} table={melhoriaTable} selected={itemNum} onSelect={(v) => onItemChange(String(v))} />
          {numMelhorias > 1 && <p className="text-[11px] font-bold text-red-800/80 uppercase tracking-widest pt-2 flex items-center gap-1"><span className="text-[8px]">◆</span> Para as demais melhorias, repita a rolagem D% nesta tabela.</p>}
        </div>
      )}
    </div>
  );
}

// ─── Seção: Poções ────────────────────────────────────────────────────────────

function PocaoSection({ roll, onChange }: { roll: string; onChange: (v: string) => void }) {
  const n = roll !== "" ? parseInt(roll, 10) : null;
  const res = n !== null ? findInTable(POCOES, n) : null;
  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader step={3} title="Poção — Tabela 8-12" subtitle='"Poção" sorteada. Role um D% para determinar qual poção encontra.' />
      <div className="flex flex-wrap items-end gap-4">
        <NumberPad label="D% — Poção" value={roll} onChange={onChange} />
        {res && n !== null && (
          <ResultBadge label="Poção" roll={n} result={getDisplay(res)} sub={"preco" in res ? String(res.preco) : undefined} />
        )}
      </div>
      <RollTable
        title="Tabela 8-12: Poções"
        table={POCOES}
        selected={n}
        onSelect={(v) => onChange(String(v))}
        extraCol={(e) => ("preco" in e ? String(e.preco) : null)}
      />
    </div>
  );
}

// ─── Seção: Mágico ────────────────────────────────────────────────────────────

function MagicoSection({ grau, rollCat, rollItem, rollEsp, onCatChange, onItemChange, onEspChange }: {
  grau: GrauMagico;
  rollCat: string; rollItem: string; rollEsp: string;
  onCatChange: (v: string) => void; onItemChange: (v: string) => void; onEspChange: (v: string) => void;
}) {
  const catNum  = rollCat  !== "" ? parseInt(rollCat,  10) : null;
  const itemNum = rollItem !== "" ? parseInt(rollItem, 10) : null;
  const espNum  = rollEsp  !== "" ? parseInt(rollEsp,  10) : null;

  type MagCatLabel = "Arma" | "Armadura/Escudo" | "Acessório" | null;
  const catLabel: MagCatLabel =
    catNum === null    ? null :
    catNum <= 2        ? "Arma" :
    catNum === 3       ? "Armadura/Escudo" :
    catNum <= 6        ? "Acessório" : null;

  const encantosTable =
    catLabel === "Arma"            ? ARMAS_MAGICAS :
    catLabel === "Armadura/Escudo" ? ARMADURAS_MAGICAS : null;

  const acessorioTable =
    catLabel === "Acessório"
      ? grau === "maior" ? ACESSORIOS_MAIORES
        : grau === "medio" ? ACESSORIOS_MEDIOS
        : ACESSORIOS_MENORES
      : null;

  const itemRes =
    encantosTable  && itemNum !== null ? findInTable(encantosTable,  itemNum) :
    acessorioTable && itemNum !== null ? findInTable(acessorioTable, itemNum) : null;

  const itemResultStr = itemRes ? getDisplay(itemRes) : "";
  const needsEspecifica = itemResultStr.includes("Tabela 8-9") || itemResultStr.includes("Tabela 8-11");
  const especificaTable = itemResultStr.includes("Tabela 8-9") ? ARMAS_ESPECIFICAS : ARMADURAS_ESPECIFICAS;
  const espRes = needsEspecifica && espNum !== null ? findInTable(especificaTable, espNum) : null;

  const grauLabel = grau === "maior" ? "Maior" : grau === "medio" ? "Médio" : "Menor";

  return (
    <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm space-y-6">
      <SectionHeader
        step={3}
        title={`Mágico (${grauLabel}) — Tabelas 8-8 a 8-15`}
        subtitle="Role 1d6 para a categoria: 1-2 Arma · 3 Armadura/Escudo · 4-6 Acessório. Depois role D% para o item."
      />

      <div className="space-y-4">
        <NumberPad
          label="1d6 — Categoria"
          hint="1-2 Arma · 3 Armadura/Escudo · 4-6 Acessório"
          value={rollCat}
          onChange={(v) => { onCatChange(v); onItemChange(""); onEspChange(""); }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["1-2 → Arma", "3 → Armadura/Escudo", "4-6 → Acessório"] as const).map((lbl, i) => {
            const active =
              catNum !== null && (
                i === 0 ? catNum <= 2 :
                i === 1 ? catNum === 3 :
                catNum >= 4 && catNum <= 6
              );
            return (
              <div key={i} className={`px-4 py-3 rounded-lg border-2 text-sm text-center font-bold tracking-wide transition-all ${
                active ? "bg-red-800/10 border-red-800/40 text-red-800 shadow-sm" : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/10 text-amber-950/60"
              }`}>{lbl}</div>
            );
          })}
        </div>
      </div>

      {encantosTable && catLabel && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad
              label={`D% — Encanto (${catLabel})`}
              value={rollItem}
              onChange={(v) => { onItemChange(v); onEspChange(""); }}
            />
            {itemRes && itemNum !== null && (
              <ResultBadge
                label="Encanto"
                roll={itemNum}
                result={getDisplay(itemRes)}
                sub={"efeito" in itemRes ? String(itemRes.efeito) : undefined}
              />
            )}
          </div>
          <RollTable
            title={`Tabela ${catLabel === "Arma" ? "8-8" : "8-10"}: Encantos — ${catLabel}`}
            table={encantosTable}
            selected={itemNum}
            onSelect={(v) => { onItemChange(String(v)); onEspChange(""); }}
            extraCol={(e) => ("efeito" in e ? String(e.efeito) : null)}
          />
        </div>
      )}

      {acessorioTable && catLabel && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad label={`D% — Acessório ${grauLabel}`} value={rollItem} onChange={onItemChange} />
            {itemRes && itemNum !== null && (
              <ResultBadge
                label="Acessório"
                roll={itemNum}
                result={getDisplay(itemRes)}
                sub={"preco" in itemRes ? String(itemRes.preco) : undefined}
              />
            )}
          </div>
          <RollTable
            title={`Tabela 8-1${grau === "menor" ? "3" : grau === "medio" ? "4" : "5"}: Acessórios ${grauLabel}s`}
            table={acessorioTable}
            selected={itemNum}
            onSelect={(v) => onItemChange(String(v))}
            extraCol={(e) => ("preco" in e ? String(e.preco) : null)}
          />
        </div>
      )}

      {needsEspecifica && (
        <div className="space-y-4 pt-6 border-t-2 border-amber-900/10">
          <div className="text-sm font-medium text-red-800 bg-[rgb(var(--bg-inset-rgb))] rounded-lg px-4 py-3 border border-red-800/20 shadow-sm flex items-center gap-2">
            <span className="text-red-800/50">❖</span>
            <span>O encanto sorteado remete a uma tabela específica. Role mais um D%:</span>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <NumberPad label="D% — Item Específico" value={rollEsp} onChange={onEspChange} />
            {espRes && espNum !== null && (
              <ResultBadge
                label="Item Específico"
                roll={espNum}
                result={getDisplay(espRes)}
                sub={"preco" in espRes ? String(espRes.preco) : undefined}
              />
            )}
          </div>
          <RollTable
            title={catLabel === "Arma" ? "Tabela 8-9: Armas Específicas" : "Tabela 8-11: Armaduras & Escudos Específicos"}
            table={especificaTable}
            selected={espNum}
            onSelect={(v) => onEspChange(String(v))}
            extraCol={(e) => ("preco" in e ? String(e.preco) : null)}
          />
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TesourosPage() {
  const [selectedND, setSelectedND] = useState<string | null>(null);
  const [isRegrasOpen, setIsRegrasOpen] = useState(false);
  const [rollDinheiro, setRollDinheiro] = useState("");
  const [rollItens,    setRollItens]    = useState("");
  const [rollRiqueza,  setRollRiqueza]  = useState("");
  const [rollDiverso,  setRollDiverso]  = useState("");
  const [rollEqCat,    setRollEqCat]    = useState("");
  const [rollEqItem,   setRollEqItem]   = useState("");
  const [rollSupCat,   setRollSupCat]   = useState("");
  const [rollSupBase,  setRollSupBase]  = useState("");
  const [rollSupItem,  setRollSupItem]  = useState("");
  const [rollPocao,    setRollPocao]    = useState("");
  const [rollMagCat,   setRollMagCat]   = useState("");
  const [rollMagItem,  setRollMagItem]  = useState("");
  const [rollMagEsp,   setRollMagEsp]   = useState("");

  function clearSubs() {
    setRollRiqueza(""); setRollDiverso("");
    setRollEqCat("");   setRollEqItem("");
    setRollSupCat("");  setRollSupBase(""); setRollSupItem("");
    setRollPocao("");
    setRollMagCat("");  setRollMagItem(""); setRollMagEsp("");
  }

  function selectND(nd: string) {
    setSelectedND(nd);
    setRollDinheiro(""); setRollItens("");
    clearSubs();
  }

  function reset() {
    setSelectedND(null);
    setRollDinheiro(""); setRollItens("");
    clearSubs();
  }

  const tesouro = tesouros.find((t) => t.nd === selectedND) ?? null;
  const dRoll = rollDinheiro !== "" ? parseInt(rollDinheiro, 10) : null;
  const iRoll = rollItens    !== "" ? parseInt(rollItens,    10) : null;

  const dResult = tesouro && dRoll !== null ? findInTable(tesouro.dinheiro, dRoll) : null;
  const iResult = tesouro && iRoll !== null ? findInTable(tesouro.itens,    iRoll) : null;
  const dRes = dResult ? getDisplay(dResult) : "";
  const iRes = iResult ? getDisplay(iResult) : "";

  const needsRiqueza  = isRiqueza(dRes);
  const needsDiverso  = iRes === "Diverso";
  const needsEquip    = isEquipamento(iRes);
  const needsSuperior = isSuperior(iRes);
  const needsPocao    = isPocao(iRes);
  const needsMagico   = isMagico(iRes);

  const numMelhorias = needsSuperior ? extractNumMelhorias(iRes) : 1;
  const grauMag: GrauMagico = needsMagico ? grauMagico(iRes) : "menor";
  const grauRiq: "menor" | "media" | "maior" =
    dRes.includes("maior") ? "maior" :
    dRes.includes("médi")  ? "media" : "menor";

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
                  <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Tesouros</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10 md:mb-14">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Consulta de Tesouro
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
          <p className="text-amber-950/85 font-medium text-lg leading-relaxed max-w-3xl">
            Role os dados na mesa, selecione o Nível de Desafio, insira os resultados e consulte as tabelas. As linhas correspondentes serão destacadas automaticamente.
          </p>
        </div>

        {/* Acordeão de Regras */}
        {!selectedND && (
          <div className="mb-12 w-full">
            <button 
              onClick={() => setIsRegrasOpen(!isRegrasOpen)}
              className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
                <div className="text-left">
                  <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                    Regras
                  </h2>
                  <p className="text-sm text-amber-950/70 italic font-bold">
                    Clique para expandir ou recolher as informações.
                  </p>
                </div>
              </div>
              <span className={`text-red-800 text-2xl transition-transform duration-300 ${isRegrasOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isRegrasOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
              <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

                {/* Tesouro em Combate */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Tesouro em Combate</h3>
                  <p className="font-medium mb-4">
                    Para determinar o tesouro de um combate, faça os jogadores rolarem <strong>duas vezes na Tabela 8-1</strong> — uma na coluna <strong>Dinheiro</strong> e outra na coluna <strong>Itens</strong>, na linha equivalente ao ND da criatura derrotada. Se o grupo derrotou mais de uma criatura, role uma vez para cada criatura ou, de acordo com o mestre, uma vez na linha equivalente ao nível de desafio do combate.
                  </p>
                  <div className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Nenhum: </span><span className="font-medium">A criatura não traz tesouro — não use a tabela.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Padrão: </span><span className="font-medium">Tesouro típico; use a tabela sem modificação.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Metade: </span><span className="font-medium">A criatura tem poucos tesouros; use a tabela, mas divida pela metade os resultados rolados na coluna Dinheiro.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Dobro: </span><span className="font-medium">A criatura tem muitos tesouros. Role duas vezes em cada coluna da tabela.</span></p>
                  </div>
                </section>

                {/* Resultados da Tabela */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Resultados da Tabela</h3>
                  <p className="font-bold text-red-800/80 uppercase tracking-widest text-sm mb-3">Dinheiro — Moedas ou Riquezas</p>
                  <div className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 mb-6 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Moedas: </span><span className="font-medium">Descreva o valor ("Vocês encontram 25 TO") ou detalhe mais ("Vocês encontram 25 Tibares de ouro da época do Rei-Imperador Phylidio, o Tranquilo").</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Riquezas: </span><span className="font-medium">O grupo encontra um ou mais itens sem uso prático, mas valiosos. Role 1d% na Tabela 8-2 para determinar o valor de venda de cada riqueza. A tabela traz exemplos de itens e, entre parênteses, quantos espaços eles ocupam.</span></p>
                  </div>
                  <p className="font-bold text-red-800/80 uppercase tracking-widest text-sm mb-3">Itens</p>
                  <div className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Diverso: </span><span className="font-medium">Role na Tabela 8-3 para determinar qual item o grupo encontra.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Equipamento: </span><span className="font-medium">Role 1d6 para o tipo — 1–3) arma; 4–5) armadura ou escudo; 6) esotérico. Então role na Tabela 8-4 para o item específico.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Superior: </span><span className="font-medium">Role para determinar se é arma, armadura/escudo ou esotérico. Para cada melhoria do item, role uma vez na Tabela 8-5.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Poções: </span><span className="font-medium">Role na Tabela 8-12 para determinar qual poção o grupo encontra.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Mágico: </span><span className="font-medium">Role 1d6 — 1–2) arma; 3) armadura/escudo; 4–6) acessório. Consulte as tabelas correspondentes (8-8 a 8-15).</span></p>
                  </div>
                </section>

                {/* Itens Superiores */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Itens Superiores</h3>
                  <p className="font-medium mb-4">
                    Itens superiores funcionam como itens normais, mas possuem <strong>melhorias</strong>. Primeiro determine a categoria (arma, armadura/escudo ou esotérico). Depois, para <strong>cada melhoria</strong> do item, role uma vez na Tabela 8-5. Um mesmo item pode ser superior e encantado ao mesmo tempo.
                  </p>
                  <div className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">¹ Conta como duas melhorias. </span><span className="font-medium">Se o item já possuir uma, role novamente.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">² Material especial — </span><span className="font-medium">role 1d6: 1) aço-rubi · 2) adamante · 3) gelo eterno · 4) madeira Tollon · 5) matéria vermelha · 6) mitral.</span></p>
                  </div>
                </section>

                {/* Itens Mágicos */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Itens Mágicos</h3>
                  <p className="font-medium mb-4">
                    Itens mágicos permanentes são divididos em <strong>menores</strong> (1 encanto), <strong>médios</strong> (2 encantos) e <strong>maiores</strong> (3 encantos). Recebem bônus de PV e RD: <strong>+10</strong> para menores, <strong>+20</strong> para médios e <strong>+40</strong> para maiores.
                  </p>
                  <div className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 mb-6 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Armas Mágicas: </span><span className="font-medium">Role na Tabela 8-4 para o tipo, depois na Tabela 8-8 para os encantos (1× menor, 2× médio, 3× maior). Se rolar "Arma específica", use a Tabela 8-9.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Armaduras Mágicas: </span><span className="font-medium">Use a Tabela 8-10 para encantos. Se rolar "Item específico", use a Tabela 8-11.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Acessórios: </span><span className="font-medium">Tabela 8-13 para menores, 8-14 para médios, 8-15 para maiores.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Custo em PM para fabricar: </span><span className="font-medium">1 PM para menores · 2 PM para médios · 3 PM para maiores. Esses PM são perdidos permanentemente.</span></p>
                  </div>
                  <p className="font-bold text-red-800/80 uppercase tracking-widest text-sm mb-3">Tabela 8-7: Preço de Encantos</p>
                  <div className="border-2 border-amber-900/20 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-[rgb(var(--bg-card-rgb))]">
                        <tr>
                          <th className="font-display px-4 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Nº de Encantos</th>
                          <th className="font-display px-4 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Aumento no Preço</th>
                          <th className="font-display px-4 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Aumento na CD</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
                        <tr><td className="px-4 py-2 font-bold text-amber-950">1</td><td className="px-4 py-2 font-bold text-red-800">+T$ 18.000</td><td className="px-4 py-2 font-medium text-amber-950/80">+10</td></tr>
                        <tr className="bg-[rgb(var(--bg-card-rgb))]/20"><td className="px-4 py-2 font-bold text-amber-950">2</td><td className="px-4 py-2 font-bold text-red-800">+T$ 36.000</td><td className="px-4 py-2 font-medium text-amber-950/80">+15</td></tr>
                        <tr><td className="px-4 py-2 font-bold text-amber-950">3</td><td className="px-4 py-2 font-bold text-red-800">+T$ 72.000</td><td className="px-4 py-2 font-medium text-amber-950/80">+20</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Tesouro em Outras Situações */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Tesouro em Outras Situações</h3>
                  <p className="font-medium mb-4">
                    O mestre pode fornecer tesouros por situações que não envolvam combate — recompensas por atos realizados pelo grupo. A palavra-chave é <strong>"médio"</strong> — os personagens não precisam ganhar esse valor exato. Um grupo de quatro personagens deve vencer <strong>quatro ameaças de ND igual ao seu nível</strong> para subir para o próximo.
                  </p>
                  <p className="font-bold text-red-800/80 uppercase tracking-widest text-sm mb-3">Tabela 8-6: Tesouro Médio por Cena</p>
                  <div className="border-2 border-amber-900/20 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-[rgb(var(--bg-card-rgb))]">
                        <tr>
                          <th className="font-display px-3 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Nível</th>
                          <th className="font-display px-3 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/10">Tesouro</th>
                          <th className="font-display px-3 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Nível</th>
                          <th className="font-display px-3 py-2.5 text-left text-amber-950/60 text-xs font-bold uppercase tracking-widest">Tesouro</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-2 divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
                        {([
                          ["1°","T$ 300","11°","T$ 8.000"],
                          ["2°","T$ 300","12°","T$ 9.000"],
                          ["3°","T$ 400","13°","T$ 13.000"],
                          ["4°","T$ 1.000","14°","T$ 17.000"],
                          ["5°","T$ 1.000","15°","T$ 22.000"],
                          ["6°","T$ 2.000","16°","T$ 22.000"],
                          ["7°","T$ 2.000","17°","T$ 40.000"],
                          ["8°","T$ 3.000","18°","T$ 50.000"],
                          ["9°","T$ 3.000","19°","T$ 60.000"],
                          ["10°","T$ 6.000","20°","T$ 72.000"],
                        ] as [string,string,string,string][]).map(([n1,v1,n2,v2], i) => (
                          <tr key={i} className={i % 2 !== 0 ? "bg-[rgb(var(--bg-card-rgb))]/20" : ""}>
                            <td className="px-3 py-2 font-bold text-amber-950/80">{n1}</td>
                            <td className="px-3 py-2 font-bold text-red-800 border-r-2 border-amber-900/10">{v1}</td>
                            <td className="px-3 py-2 font-bold text-amber-950/80">{n2}</td>
                            <td className="px-3 py-2 font-bold text-red-800">{v2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Recompensas Fora de Jogo */}
                <section>
                  <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Recompensas Fora de Jogo</h3>
                  <p className="font-medium">
                    Você pode premiar não apenas os personagens, mas os próprios jogadores. Dedicação ao jogo (limpar a sala após a partida, comprar os refrigerantes, mandar mensagens para marcar a sessão…) ou outras contribuições podem valer uma recompensa. Conceda <strong>1 PM temporário</strong> ou outro pequeno bônus aos mais prestativos.
                  </p>
                </section>

              </div>
            </div>
          </div>
        )}

        {/* STEP 1: ND */}
        {!selectedND && (
          <section className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-10 shadow-sm">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 border-b-2 border-amber-900/10 pb-3 mb-8 tracking-wide flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-red-800 text-[rgb(var(--bg-inset-rgb))] text-sm font-bold flex items-center justify-center shrink-0 shadow-sm">1</span>
              Escolha o Nível de Desafio
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
              {tesouros.map((t) => (
                <button
                  key={t.nd}
                  onClick={() => selectND(t.nd)}
                  className="font-display py-4 px-2 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-xl shadow-sm hover:border-red-800/50 hover:bg-[rgb(var(--bg-card-rgb))] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] transition-all text-center font-bold text-amber-950 text-base md:text-lg tracking-wide group"
                >
                  <span className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-red-800/60 mb-1 group-hover:text-red-800 transition-colors">ND</span>
                  {t.nd}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* STEPS 2+: rolagem */}
        {selectedND && tesouro && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-[rgb(var(--bg-card-rgb))] p-6 rounded-xl border-2 border-amber-900/30 shadow-sm">
              <div>
                <p className="font-display text-[10px] md:text-xs font-bold tracking-widest uppercase text-red-800 mb-1">Nível de Desafio Selecionado</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950 drop-shadow-sm">ND {selectedND}</h2>
              </div>
              <button
                onClick={reset}
                className="font-display px-5 py-2.5 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-sm text-amber-950/70 hover:text-red-800 hover:border-red-800/50 hover:shadow-sm transition-all font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span className="text-lg leading-none">↺</span> Trocar ND
              </button>
            </div>

            {/* Rolagem principal */}
            <div className="bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl p-6 md:p-8 shadow-sm">
              <SectionHeader step={2} title="Insira os resultados dos dados" subtitle="Role 2× D% na mesa — um para Dinheiro, outro para Itens." />
              <div className="flex flex-wrap gap-6 mb-8">
                <NumberPad label="D% — Dinheiro" value={rollDinheiro} onChange={setRollDinheiro} />
                <NumberPad label="D% — Itens"    value={rollItens}    onChange={setRollItens} />
              </div>
              {(dRoll !== null || iRoll !== null) && (
                <div className="flex flex-wrap gap-3 pt-6 border-t-2 border-amber-900/10">
                  {dRoll !== null && <ResultBadge label="Dinheiro" roll={dRoll} result={dRes || "—"} />}
                  {iRoll !== null && <ResultBadge label="Itens"    roll={iRoll} result={iRes || "—"} />}
                </div>
              )}
            </div>

            {/* Tabelas principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RollTable title="Tabela 8-1: Dinheiro" table={tesouro.dinheiro} selected={dRoll} onSelect={(v) => setRollDinheiro(String(v))} />
              <RollTable title="Tabela 8-1: Itens"    table={tesouro.itens}    selected={iRoll} onSelect={(v) => setRollItens(String(v))} />
            </div>

            {/* Sub-tabelas condicionais */}
            {needsRiqueza  && <RiquezaSection  grau={grauRiq}        rollVal={rollRiqueza}  onChange={setRollRiqueza} />}
            {needsDiverso  && <DiversoSection                        roll={rollDiverso}     onChange={setRollDiverso} />}
            {needsEquip    && <EquipamentoSection rollCat={rollEqCat}  rollItem={rollEqItem}  onCatChange={setRollEqCat}  onItemChange={setRollEqItem} />}
            {needsSuperior && <SuperiorSection  numMelhorias={numMelhorias} rollCat={rollSupCat} rollBase={rollSupBase} rollItem={rollSupItem} onCatChange={setRollSupCat} onBaseChange={setRollSupBase} onItemChange={setRollSupItem} />}
            {needsPocao    && <PocaoSection                          roll={rollPocao}       onChange={setRollPocao} />}
            {needsMagico   && <MagicoSection   grau={grauMag}        rollCat={rollMagCat}   rollItem={rollMagItem}  rollEsp={rollMagEsp} onCatChange={setRollMagCat} onItemChange={setRollMagItem} onEspChange={setRollMagEsp} />}

            {/* Notas */}
            <div className="text-xs md:text-sm text-amber-950/70 border-t-2 border-amber-900/20 pt-6 mt-8 space-y-2 font-medium bg-[rgb(var(--bg-card-rgb))]/30 p-6 rounded-xl">
              <p className="flex items-start gap-2"><span className="text-red-800 font-bold">*</span> Conta com duas melhorias. Se o item já possuir uma, role novamente.</p>
              <p className="flex items-start gap-2"><span className="text-red-800 font-bold">¹</span> Apenas escudos. Para armaduras, role novamente.</p>
              <p className="flex items-start gap-2"><span className="text-red-800 font-bold">²</span> Conta como dois encantos. Para itens menores, role novamente.</p>
              <p className="flex items-start gap-2"><span className="text-red-800 font-bold">Material especial —</span> role 1d6: 1) aço-rubi · 2) adamante · 3) gelo eterno · 4) madeira Tollon · 5) matéria vermelha · 6) mitral.</p>
              <p className="flex items-start gap-2"><span className="text-red-800 font-bold">²⁰</span> Indica anotação especial — consulte o livro para detalhes completos.</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}