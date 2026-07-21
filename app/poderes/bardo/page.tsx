"use client";

import { useState } from "react";
import Link from "next/link";
import { powersBardo } from "@/data/powers-bardo";
import { formatOrigin } from "@/types/power";
import ThemeToggle from "@/components/ThemeToggle";

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="26"
      height="26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 29V12C3 6.48 7.48 2 13 2H29"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 21c5 0 8 3 8 8"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

export default function BardoPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersBardo
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(var(--bg-rgb),0.1)' }}>
              a-Tormenta
            </h1>
          </Link>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                Início
              </Link>
              <span className="text-amber-900/40">/</span>
              <Link href="/poderes" className="text-amber-950/70 hover:text-red-800 transition-colors">
                Poderes
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Poderes de Bardo</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Poderes de Bardo
          </h1>
          <div className="flex items-center gap-3 w-full">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent"></div>
          </div>
        </div>

        {/* Acordeão de Introdução — CONTEÚDO DAS REGRAS INALTERADO */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
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
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              <section>
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Músicas de Bardo</h3>
                <p className="font-medium mb-6">Alguns poderes do bardo são Músicas. Esses poderes compartilham as seguintes regras:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[10px] text-red-800/60 mt-1.5">◆</span>
                    <span className="font-medium">Para ativar uma música, você precisa ser treinado em Atuação e empunhar um instrumento musical.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[10px] text-red-800/60 mt-1.5">◆</span>
                    <span className="font-medium">Ativar uma música gasta uma ação padrão e 1 PM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[10px] text-red-800/60 mt-1.5">◆</span>
                    <span className="font-medium">Efeitos de músicas têm alcance curto.</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Poder
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome, descrição ou origem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
            />
            {searchTerm ? (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                title="Limpar busca"
              >
                ✕
              </button>
            ) : (
              <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40" />
            )}
          </div>
          {searchTerm && (
            <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
              Exibindo {filteredPowers.length} resultado(s) para "{searchTerm}".
            </p>
          )}
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10 items-stretch">
          {filteredPowers.map((power) => (
            <div
              key={power.id}
              className="card-grain group relative rounded-md bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--accent-rgb),0.07),transparent_60%),rgb(var(--bg-card-rgb))] border border-amber-900/20 outline outline-1 outline-offset-4 outline-amber-900/5 p-5 md:p-6 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col h-full hover:-translate-y-1 shadow-sm"
            >
              <CornerOrnament className="absolute -top-px -left-px opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Nome do Poder */}
              <h3 className="font-display text-lg font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-2 text-center">
                {power.name}
              </h3>

              {/* Descrição */}
              <div className="flex-1 mb-4">
                <p className="text-amber-950/85 text-sm leading-relaxed text-center">
                  {power.description}
                </p>
              </div>

              {/* Rodapé do Card */}
              <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                  <div className="mb-4 pt-4 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors">
                    <p className="text-xs text-amber-950/70 text-center">
                      <span className="font-display font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
                    </p>
                  </div>
                )}

                {/* Origem */}
                <div className="flex items-center justify-center pt-4 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors">
                  <span className="hex-badge font-display text-[10px] px-3 py-1.5 bg-[rgb(var(--bg-inset-rgb))] border border-[rgb(var(--accent-rgb))]/30 text-amber-950/75 uppercase tracking-widest font-bold">
                    {formatOrigin(power.origin)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPowers.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8">
            <PageGlyph className="text-amber-950/40 mb-4" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhum poder de bardo encontrado.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}