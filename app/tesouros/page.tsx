"use client";

import Link from "next/link";
import { useState } from "react";
import { tesouros } from "@/data/tesouros";
import {
  DIVERSO,
  EQUIPAMENTO_ARMA,
  EQUIPAMENTO_ARMADURA,
  EQUIPAMENTO_ESOTER,
  EQUIPAMENTO_CATEGORIAS,
} from "@/data/itens";
import { RollEntry, SubItem } from "@/types/tesouro";

// ─── helpers ────────────────────────────────────────────────────────────────

function findResult(table: (RollEntry | SubItem)[], roll: number) {
  return table.find((e) => roll >= e.min && roll <= e.max) ?? null;
}

function fmtRange(e: RollEntry | SubItem) {
  if (e.min === e.max) return String(e.min).padStart(2, "0");
  return `${String(e.min).padStart(2, "0")}-${String(e.max).padStart(2, "0")}`;
}

// ─── sub-components ─────────────────────────────────────────────────────────

function RollTable({
  title,
  table,
  selected,
  onSelect,
}: {
  title: string;
  table: (RollEntry | SubItem)[];
  selected: number | null;
  onSelect: (v: number) => void;
}) {
  const hit = selected !== null ? findResult(table, selected) : null;

  return (
    <div className="border border-amber-900/20 rounded overflow-hidden">
      <div className="bg-[#dfccab] px-4 py-2 border-b border-amber-900/20">
        <span className="text-xs font-bold tracking-widest uppercase text-amber-900/60">
          {title}
        </span>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-[#f2e8d5]">
          <tr>
            <th className="px-3 py-2 text-left font-bold text-amber-900/50 w-20 text-xs tracking-wide">
              D%
            </th>
            <th className="px-3 py-2 text-left font-bold text-amber-900/50 text-xs tracking-wide">
              Resultado
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/10">
          {table.map((entry, i) => {
            const isHit =
              selected !== null &&
              selected >= entry.min &&
              selected <= entry.max;
            return (
              <tr
                key={i}
                onClick={() => onSelect(entry.min)}
                className={`
                  cursor-pointer transition-all
                  ${
                    isHit
                      ? "bg-red-800/10 border-l-2 border-red-800"
                      : "hover:bg-[#f2e8d5]/60"
                  }
                `}
              >
                <td
                  className={`px-3 py-2 font-mono font-bold text-xs ${
                    isHit ? "text-red-800" : "text-amber-900/50"
                  }`}
                >
                  {fmtRange(entry)}
                </td>
                <td
                  className={`px-3 py-2 font-medium ${
                    isHit ? "text-red-900 font-bold" : "text-amber-950"
                  }`}
                >
                  {entry.result}
                  {isHit && (
                    <span className="ml-2 text-xs text-red-700 font-normal">
                      ← {selected}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function NumberPad({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold tracking-widest uppercase text-amber-900/50">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={1}
          max={100}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="01–100"
          className="w-28 px-3 py-2 bg-[#f5e6d0] border border-amber-900/30 rounded text-amber-950 font-mono font-bold text-lg text-center focus:outline-none focus:border-red-800/60 focus:ring-1 focus:ring-red-800/30 placeholder:text-amber-900/30"
        />
        <button
          onClick={() => onChange("")}
          className="text-amber-900/30 hover:text-red-800 transition-colors text-xs"
          title="Limpar"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ─── page ───────────────────────────────────────────────────────────────────

type Step = "nd" | "roll" | "result";

export default function TesourosPage() {
  const [step, setStep] = useState<Step>("nd");
  const [selectedND, setSelectedND] = useState<string | null>(null);

  // Rolagem principal
  const [rollDinheiro, setRollDinheiro] = useState("");
  const [rollItens, setRollItens] = useState("");

  // Rolagem de Equipamento (categoria + item)
  const [rollEqCat, setRollEqCat] = useState("");
  const [rollEqItem, setRollEqItem] = useState("");

  // Rolagem de Diverso
  const [rollDiverso, setRollDiverso] = useState("");

  function selectND(nd: string) {
    setSelectedND(nd);
    setStep("roll");
    setRollDinheiro("");
    setRollItens("");
    setRollEqCat("");
    setRollEqItem("");
    setRollDiverso("");
  }

  function reset() {
    setStep("nd");
    setSelectedND(null);
    setRollDinheiro("");
    setRollItens("");
    setRollEqCat("");
    setRollEqItem("");
    setRollDiverso("");
  }

  const tesouro = tesouros.find((t) => t.nd === selectedND) ?? null;

  const dRoll = rollDinheiro !== "" ? parseInt(rollDinheiro, 10) : null;
  const iRoll = rollItens !== "" ? parseInt(rollItens, 10) : null;
  const eqCatRoll = rollEqCat !== "" ? parseInt(rollEqCat, 10) : null;
  const eqItemRoll = rollEqItem !== "" ? parseInt(rollEqItem, 10) : null;
  const divRoll = rollDiverso !== "" ? parseInt(rollDiverso, 10) : null;

  const iResult =
    tesouro && iRoll !== null ? findResult(tesouro.itens, iRoll) : null;
  const needsDiverso = iResult?.result === "Diverso";
  const needsEquip =
    iResult?.result?.startsWith("Equipamento") ?? false;

  

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block group">
            <h1
              className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125"
              style={{ textShadow: "0 1px 2px rgba(69,26,3,0.1)" }}
            >
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
            <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
              Início
            </Link>
            <span className="text-amber-900/40">/</span>
            <span className="text-red-800">Tesouros</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12">

        {/* Título */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-amber-800 mb-4 border-b-2 border-amber-900/20 pb-2">
            Consulta de Tesouro
          </h1>
          <p className="text-amber-900/70 font-medium text-justify leading-relaxed">
            Role os dados na mesa, selecione os valores aqui e consulte o resultado nas tabelas.
            As linhas correspondentes serão destacadas automaticamente.
          </p>
        </div>

        {/* ── STEP: escolha de ND ── */}
        {step === "nd" && (
          <section>
            <h2 className="text-2xl font-bold text-amber-950 border-b border-amber-900/20 pb-2 mb-6">
              1. Escolha o Nível de Desafio
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {tesouros.map((t) => (
                <button
                  key={t.nd}
                  onClick={() => selectND(t.nd)}
                  className="py-4 px-2 bg-[#e8dac1] border-2 border-amber-900/20 rounded shadow-sm
                             hover:border-red-800/50 hover:bg-[#dfccab] hover:shadow-md
                             transition-all text-center font-bold text-amber-950 text-sm tracking-wide"
                >
                  <span className="block text-xs font-normal text-amber-900/40 mb-1">ND</span>
                  {t.nd}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── STEP: rolagem e resultado ── */}
        {(step === "roll" || step === "result") && tesouro && (
          <section className="space-y-8">

            {/* Cabeçalho com ND + botão voltar */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-amber-900/40 mb-1">
                  Nível de Desafio
                </p>
                <h2 className="text-4xl font-bold text-red-800">ND {selectedND}</h2>
              </div>
              <button
                onClick={reset}
                className="px-4 py-2 border border-amber-900/30 rounded text-sm text-amber-900/60
                           hover:text-red-800 hover:border-red-800/40 transition-all font-medium"
              >
                ← Trocar ND
              </button>
            </div>

            {/* ── Rolagem principal ── */}
            <div className="bg-[#e8dac1] border border-amber-900/20 rounded p-6 shadow-sm">
              <h3 className="text-lg font-bold text-amber-950 mb-1">
                2. Insira os resultados dos seus dados
              </h3>
              <p className="text-xs text-amber-900/50 mb-5 tracking-wide">
                Role 2× D% na mesa — um para Dinheiro, outro para Itens — e insira os valores abaixo.
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <NumberPad
                  label="D% — Dinheiro"
                  value={rollDinheiro}
                  onChange={setRollDinheiro}
                />
                <NumberPad
                  label="D% — Itens"
                  value={rollItens}
                  onChange={setRollItens}
                />
              </div>

              {/* Resultado resumido */}
              {(dRoll !== null || iRoll !== null) && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-amber-900/15">
                  {dRoll !== null && tesouro && (
                    <ResultBadge
                      label="Dinheiro"
                      roll={dRoll}
                      result={findResult(tesouro.dinheiro, dRoll)?.result ?? "—"}
                    />
                  )}
                  {iRoll !== null && tesouro && (
                    <ResultBadge
                      label="Itens"
                      roll={iRoll}
                      result={findResult(tesouro.itens, iRoll)?.result ?? "—"}
                    />
                  )}
                </div>
              )}
            </div>

            {/* ── Tabelas principais ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RollTable
                title="Tabela de Dinheiro"
                table={tesouro.dinheiro}
                selected={dRoll}
                onSelect={(v) => setRollDinheiro(String(v))}
              />
              <RollTable
                title="Tabela de Itens"
                table={tesouro.itens}
                selected={iRoll}
                onSelect={(v) => setRollItens(String(v))}
              />
            </div>

            {/* ── Subtabela: Diverso ── */}
            {needsDiverso && (
              <div className="bg-[#e8dac1] border border-amber-900/20 rounded p-6 shadow-sm space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-amber-950 mb-1">
                    3. Item Diverso — role mais um D%
                  </h3>
                  <p className="text-xs text-amber-900/50 tracking-wide">
                    O resultado de Itens foi <strong>Diverso</strong>. Role um D% na Tabela 8-3.
                  </p>
                </div>
                <NumberPad
                  label="D% — Diverso"
                  value={rollDiverso}
                  onChange={setRollDiverso}
                />
                {divRoll !== null && (
                  <ResultBadge
                    label="Item Diverso"
                    roll={divRoll}
                    result={findResult(DIVERSO, divRoll)?.result ?? "—"}
                  />
                )}
                <RollTable
                  title="Tabela 8-3: Itens Diversos"
                  table={DIVERSO}
                  selected={divRoll}
                  onSelect={(v) => setRollDiverso(String(v))}
                />
              </div>
            )}

            {/* ── Subtabela: Equipamento ── */}
            {needsEquip && (
              <div className="bg-[#e8dac1] border border-amber-900/20 rounded p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-950 mb-1">
                    3. Equipamento — duas rolagens
                  </h3>
                  <p className="text-xs text-amber-900/50 tracking-wide">
                    O resultado de Itens foi <strong>Equipamento</strong>. Role dois D%: um para a
                    categoria e outro para o item específico (Tabela 8-4).
                  </p>
                </div>

               

              
              </div>
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}

// ─── badge de resultado ───────────────────────────────────────────────────────

function ResultBadge({
  label,
  roll,
  result,
}: {
  label: string;
  roll: number;
  result: string;
}) {
  const isEmpty = result === "—";
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded border text-sm font-medium
        ${
          isEmpty
            ? "bg-amber-900/5 border-amber-900/15 text-amber-900/50"
            : "bg-red-800/10 border-red-800/30 text-red-900"
        }`}
    >
      <span className="font-mono font-bold text-base">{roll}</span>
      <span className="text-amber-900/30">→</span>
      <span className="font-bold text-xs tracking-widest uppercase text-amber-900/40 mr-1">
        {label}:
      </span>
      <span>{result}</span>
    </div>
  );
}