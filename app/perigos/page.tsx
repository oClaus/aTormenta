"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { dangers } from "@/data/dangers";
import { DangerItem } from "@/types/danger";

// --- Componente Auxiliar: Formatação de Texto (Estilo Stone) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;

  // 1. Split robusto para pegar qualquer tipo de quebra de linha
  const lines = text.split(/\r\n|\n|\\n/);

  return lines.map((line, index) => {
    if (line.trim() === "") {
      return <div key={index} className="h-4" />;
    }

    let formattedLine = line
      // Negrito e Itálico
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-stone-200 font-serif"><strong>$1</strong></em>')
      // Negrito
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200 font-serif">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-stone-400 font-serif">$1</em>')
      // Subtítulos (Red)
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-red-700 mt-4 mb-2 font-serif">$1</h3>')
      
      // --- CORREÇÃO AQUI ---
      // Div para evitar Hydration Error com blockquote
      .replace(/- (.*?):/g, '<div class="mt-2 inline-block"><span class="font-bold text-red-600 font-serif">$1:</span>')
      
      // Blockquote (Stone/Red)
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-900/50 rounded-r-md font-serif">$1</blockquote>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-1 last:mb-0 text-base leading-relaxed text-stone-300 font-serif" 
      />
    );
  });
};

// --- Componente Principal: Acordeão de Perigos (Estilo Stone/Red) ---

const DangerAccordion = ({ danger }: { danger: DangerItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Estilo Stone Box
    <div className="border border-stone-800 rounded-lg shadow-lg mb-3 overflow-hidden w-full bg-stone-900 hover:border-red-900/50 transition-colors">
      {/* Cabeçalho do Acordeão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 bg-stone-900 hover:bg-stone-800 transition-colors flex justify-between items-center border-b border-stone-800/50"
      >
        <span className="text-xl font-bold text-red-700 font-serif">{danger.name}</span>
        <span className="text-red-800 text-2xl transform transition-transform duration-300 font-serif">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Conteúdo do Acordeão */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
        } bg-stone-950/30`}
      >
        <div className="text-stone-300 pt-2 font-serif">
          {formatTextWithBreaks(danger.content)}
        </div>
        <div className="mt-4 pt-2 border-t border-stone-800 text-right">
          <span className="text-xs text-stone-500 italic font-serif uppercase tracking-wider">Categoria: {danger.category}</span>
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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-red-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Perigos</span>
            </div>
        </div>
      </header>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-700 to-red-500 mb-4 drop-shadow-md">
            Perigos
            </h1>
            <p className="text-stone-300 text-lg font-serif">
            Aventureiros não precisam se preocupar apenas com monstros e inimigos — Arton é um mundo de problemas!
            </p>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Perigo
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome ou conteúdo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Container Principal */}
        <div className="w-full">
            {filteredAndGroupedDangers.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic bg-stone-900 border border-stone-800 rounded-xl font-serif">
                Nenhum perigo encontrado com o termo de busca aplicado.
            </div>
            )}

            {filteredAndGroupedDangers.map((categoryGroup) => (
            <div key={categoryGroup.name} className="mb-12 w-full">
                <h2 className="text-3xl font-bold text-red-700 mb-6 border-b border-stone-800 pb-2 font-serif uppercase tracking-wide flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-800 rounded-full"></span>
                  {categoryGroup.name}
                </h2>
                
                <div>
                {categoryGroup.items.map((danger) => (
                    <DangerAccordion key={danger.id} danger={danger} />
                ))}
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}