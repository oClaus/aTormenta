"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { conditions } from "@/data/conditions";
import { Condition } from "@/types/condition";
import ThemeToggle from "@/components/ThemeToggle";

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

// --- Formatação de Texto ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-800 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-900/80 font-serif">$1</em>')
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm font-medium"><span class="font-bold text-red-800">◆</span> $1.</p>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-3 md:pl-4 py-2 my-3 text-sm italic text-amber-950 font-medium bg-[rgb(var(--bg-card-rgb))] rounded-r shadow-sm">$1</blockquote>');
    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-900/90 font-serif font-medium" />
    );
  });
};

// --- Card de Condição ---
const ConditionCard = ({ weapon }: { weapon: Condition }) => {
  return (
    <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 flex flex-col text-left w-full shadow-sm hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] hover:-translate-y-1">

      <CornerOrnament className="absolute -top-px -left-px opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Cabeçalho */}
      <div className="mb-3 pb-2 border-b-2 border-amber-900/20 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors">
        <h3 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors break-words tracking-wide drop-shadow-sm">
          {weapon.name}
        </h3>
      </div>

      {/* Descrição */}
      <div className="pt-1 flex-grow">
        {formatTextWithBreaks(weapon.description)}
      </div>

      {/* Rodapé */}
      <div className="mt-4 pt-3 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/25 transition-colors flex justify-between items-center w-full">
        <div>
          {weapon.efeito && (
            <span className="font-display text-[10px] md:text-xs font-bold text-red-800 bg-[rgb(var(--bg-inset-rgb))] px-2 py-1 rounded border border-amber-900/20 uppercase tracking-widest shadow-sm">
              {weapon.efeito}
            </span>
          )}
        </div>
        <span className="text-xs text-amber-900/60 italic flex items-center gap-1 font-medium">
          <span className="text-red-800">◆</span>
          <span className="font-display text-amber-950 font-bold">{weapon.origin}</span>
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---
export default function CondicoesPage() {
  const [weaponSearch, setWeaponSearch] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredConditions = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    return conditions.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.origin.toLowerCase().includes(term) ||
      c.description.toLowerCase().includes(term)
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase">
              <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                Início
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Condições</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12 max-w-screen-xl mx-auto">

        {/* Título */}
        <div className="mb-8 w-full">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Condições
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
        </div>

        {/* Acordeão */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors">
                  Regras de Condições
                </h2>
                <p className="text-sm text-amber-900/60 italic font-bold">
                  Clique para expandir ou recolher as regras básicas.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10 space-y-8">
              <p className="text-amber-950 text-lg font-medium leading-relaxed">
                Condições com os mesmos efeitos não se acumulam; aplique apenas os mais severos. Por exemplo, um personagem desprevenido e vulnerável sofre –5 na Defesa, não –7. A menos que especificado o contrário, condições terminam no fim da cena. Algumas condições possuem um tipo de efeito (veja em "Regras de Jogo").
              </p>
            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="font-display block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Condição
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Nome, descrição ou origem..."
              value={weaponSearch}
              onChange={(e) => setWeaponSearch(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all shadow-sm"
            />
            {weaponSearch ? (
              <button
                onClick={() => setWeaponSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform"
                title="Limpar busca"
              >
                ✕
              </button>
            ) : (
              <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
            )}
          </div>
          {weaponSearch && (
            <p className="text-xs font-medium text-amber-900/70 mt-3 italic">
              Exibindo {filteredConditions.length} resultado(s) para "{weaponSearch}".
            </p>
          )}
        </div>

        {/* Grid */}
        <section className="w-full">
          {filteredConditions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {filteredConditions.map((c) => (
                <ConditionCard key={c.id} weapon={c} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 mt-8 flex flex-col items-center justify-center gap-3">
              <PageGlyph className="text-amber-900/40" />
              <p className="font-display text-lg text-amber-900/60 font-bold italic">
                Nenhuma condição encontrada com "{weaponSearch}".
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center text-sm relative z-10">
        <p className="font-display text-white/60 tracking-wide">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p className="text-white/40 mt-1">Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}