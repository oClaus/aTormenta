"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { dangers } from "@/data/dangers";
import { DangerItem } from "@/types/danger";

// --- Componente Auxiliar: Formatação de Texto ---
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
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em><strong>$1</strong></em>')
      // Negrito
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Subtítulos
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold text-red-400 mt-4 mb-2">$1</h3>')
      
      // --- CORREÇÃO AQUI ---
      // Trocamos <p> por <div> para evitar erro de aninhamento (Hydration Error)
      // Se houver um blockquote na mesma linha, o <div> aceita, o <p> não.
      .replace(/- (.*?):/g, '<div class="mt-2 inline-block"><span class="font-bold text-red-300">$1:</span>')
      
      // Blockquote
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-purple-500 pl-4 py-2 my-3 text-sm italic text-gray-400">$1</blockquote>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-1 last:mb-0 text-base leading-relaxed" 
      />
    );
  });
};

// --- Componente Principal: Acordeão de Perigos ---

const DangerAccordion = ({ danger }: { danger: DangerItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Mantido o mb-3 original para espaçamento padrão
    // Adicionado w-full para garantir largura total
    <div className="border border-purple-700/50 rounded-lg shadow-lg mb-3 overflow-hidden w-full">
      {/* Cabeçalho do Acordeão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center"
      >
        <span className="text-xl font-semibold text-purple-300">{danger.name}</span>
        <span className="text-purple-400 text-2xl transform transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Conteúdo do Acordeão */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        } bg-gray-900/80`}
      >
        <div className="text-gray-300 pt-2">
          {formatTextWithBreaks(danger.content)}
        </div>
        <div className="mt-4 pt-2 border-t border-purple-700/30 text-right">
          <span className="text-xs text-gray-500 italic">Categoria: {danger.category}</span>
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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      <header className="p-6 border-b border-purple-900/50 mb-12">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Perigos</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-red-400 to-purple-400 mb-4">
        Perigos
        </h1>
        <p className="text-gray-400 text-lg">
          Aventureiros não precisam se preocupar apenas com monstros e inimigos — Arton é um mundo de problemas!
        </p>
      </div>

      <input
        type="text"
        placeholder="Buscar por nome ou conteúdo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 mb-8 rounded-lg bg-gray-800 border border-purple-700/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
      />

      {/* Container Principal: Mantém w-full para 100% de largura em telas grandes */}
      <div className="w-full">
        {filteredAndGroupedDangers.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-purple-700/20">
            Nenhum perigo encontrado com o termo de busca aplicado.
          </div>
        )}

        {filteredAndGroupedDangers.map((categoryGroup) => (
          <div key={categoryGroup.name} className="mb-8 w-full">
            <h2 className="text-3xl font-bold text-red-400 mb-4 border-b-2 border-red-700/50 pb-2">
              {categoryGroup.name}
            </h2>
            
            {/* CORREÇÃO AQUI: Removi o "flex flex-col gap-3". 
                Agora os itens usam apenas a margem interna do componente (mb-3), 
                comportando-se como no original. */}
            <div>
              {categoryGroup.items.map((danger) => (
                <DangerAccordion key={danger.id} danger={danger} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}