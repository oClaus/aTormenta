"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { dangers } from "@/data/dangers";
import { DangerItem } from "@/types/danger";

// --- Componente Auxiliar: Formatação de Texto (Estilo Pergaminho Corrigido) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;

  // 1. Split robusto para pegar qualquer tipo de quebra de linha
  const lines = text.split(/\r\n|\n|\\n/);

  return lines.map((line, index) => {
    if (line.trim() === "") {
      return <div key={index} className="h-4" />;
    }

    let formattedLine = line;

    // 2. Processar blocos estruturais PRIMEIRO (no início da linha)
    if (formattedLine.startsWith("> ")) {
      formattedLine = `<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-base italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">${formattedLine.substring(2)}</blockquote>`;
    } 
    else if (formattedLine.startsWith("### ")) {
      formattedLine = `<h3 class="text-xl md:text-2xl font-bold text-red-800 mt-6 mb-3 font-serif tracking-wide border-b-2 border-amber-900/10 pb-1">${formattedLine.substring(4)}</h3>`;
    } 
    else if (formattedLine.startsWith("- ")) {
      // Cria a estrutura flexbox para alinhar o losango com o texto multilinha
      formattedLine = `<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><div class="flex-1">${formattedLine.substring(2)}</div></div>`;
    }

    // 3. Aplicar estilos inline DEPOIS (Negrito+Itálico, Negrito, Itálico)
    formattedLine = formattedLine
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-2 last:mb-0 text-base md:text-lg leading-relaxed text-amber-950/85 font-serif font-medium" 
      />
    );
  });
};

// --- Componente Principal: Acordeão de Perigos (Estilo Pergaminho) ---
const DangerAccordion = ({ danger }: { danger: DangerItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-amber-900/20 rounded-xl shadow-sm mb-4 overflow-hidden w-full bg-[#e8dac1] hover:border-red-800/40 transition-colors group">
      {/* Cabeçalho do Acordeão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-6 bg-[#e8dac1] hover:bg-[#e8dac1]/80 transition-colors flex justify-between items-center border-b-2 border-transparent group-hover:border-amber-900/10"
      >
        <span className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">{danger.name}</span>
        <span className={`text-red-800 text-2xl transition-transform duration-300 font-serif ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Conteúdo do Acordeão */}
      <div
        className={`transition-all duration-500 ease-in-out bg-[#fbf5e6] ${
          isOpen ? "max-h-[8000px] opacity-100 border-t-2 border-amber-900/10" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 md:p-8">
            <div className="text-amber-950/85 font-serif">
            {formatTextWithBreaks(danger.content)}
            </div>
            
            {/* Categoria */}
            <div className="mt-8 pt-4 border-t-2 border-amber-900/10 text-right">
                <span className="text-[10px] px-2 py-1 rounded bg-[#e8dac1] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold inline-block">
                    {danger.category}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function PerigosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndGroupedDangers = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    
    const filtered = dangers.filter(danger => 
      danger.name.toLowerCase().includes(lowerCaseSearch) ||
      danger.content.toLowerCase().includes(lowerCaseSearch)
    );

    const grouped = filtered.reduce((acc, danger) => {
      const category = danger.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(danger);
      return acc;
    }, {} as Record<string, DangerItem[]>);

    return Object.keys(grouped).sort().map(category => ({
      name: category,
      items: grouped[category],
    }));
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Perigos</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal & Intro */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Perigos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
            <p className="text-amber-950/85 text-lg font-serif font-medium leading-relaxed">
              Aventureiros não precisam se preocupar apenas com monstros e inimigos — Arton é um mundo cheio de armadilhas, doenças, climas extremos e outros problemas!
            </p>
        </div>

        {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
          <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Perigo
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome ou conteúdo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                  🔍
              </div>
            )}
          </div>
        </div>

        {/* Container Principal */}
        <div className="w-full">
            {filteredAndGroupedDangers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <span className="text-4xl opacity-40 mb-4">📜</span>
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum perigo encontrado com o termo de busca aplicado.
                </p>
            </div>
            )}

            {filteredAndGroupedDangers.map((categoryGroup) => (
            <div key={categoryGroup.name} className="mb-12 w-full">
                <h2 className="text-3xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 font-serif uppercase tracking-wide flex items-center gap-3">
                  <span className="text-red-800 text-3xl">❖</span>
                  {categoryGroup.name}
                </h2>
                
                <div className="space-y-4">
                {categoryGroup.items.map((danger) => (
                    <DangerAccordion key={danger.id} danger={danger} />
                ))}
                </div>
            </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}