"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { accessories } from "@/data/acessorios";
import { SpecificAccessory } from "@/types/acessorio";

// --- Componente Auxiliar: Formatação de Texto (CORRIGIDO PARA STONE/SERIF) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Corrigido: slate -> stone e adicionado font-serif
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-stone-200 font-serif"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-stone-400 font-serif">$1</em>')
      // Corrigido: slate -> stone/violet
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm font-serif"><span class="font-bold text-violet-500">❖</span> $1.</p>')
      // Corrigido: slate -> stone, bg-slate -> bg-stone
      .replace(/> (.*)/g, '<blockquote class="border-l-2 border-violet-800 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-900/50 rounded-r-md font-serif">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-stone-300 font-serif" />
    );
  });
};

// --- Componente 2: Card de Acessório (CORRIGIDO PARA STONE/SERIF) ---
const SpecificAccessoryCard = ({ weapon }: { weapon: SpecificAccessory }) => {
  // Cores mantidas mas ajustadas para harmonia com dark mode
  const getSizeColorClass = (size: string) => {
    switch (size) {
      case "Menor":
        return "text-emerald-500"; 
      case "Médio":
        return "text-amber-500";   
      case "Maior":
        return "text-blue-500";    
      default:
        return "text-stone-500";
    }
  };

  const sizeColorClass = getSizeColorClass(weapon.size);

  return (
    // Corrigido: zinc/black -> stone
    <div className="group relative p-4 md:p-5 rounded-xl bg-stone-950 border border-stone-800 shadow-lg hover:bg-stone-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-900/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] text-left h-full flex flex-col">
      
      {/* Efeito de brilho superior */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-violet-900/30 transition-colors flex justify-between items-start gap-2">
        {/* Corrigido: gray -> stone */}
        <h3 className="text-lg md:text-xl font-bold text-stone-200 group-hover:text-violet-400 transition-all break-words font-serif">
          {weapon.name}
        </h3>
      </div>
      
      <div className="mt-1 pb-2">
        {/* Corrigido: zinc -> stone */}
        <span className="inline-block px-2 py-1 bg-stone-900 border border-stone-700 rounded text-[10px] md:text-xs text-stone-300 font-serif font-medium tracking-wide">
          {weapon.price}
        </span>
      </div>

      <div className="text-sm pt-2 text-stone-400 flex-grow font-serif group-hover:text-stone-300 transition-colors">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      {/* --- RODAPÉ --- */}
      <div className="mt-4 pt-2 border-t border-stone-800 flex justify-between items-center gap-4">
        
        {/* Indicador de Tamanho */}
        <span className={`text-[10px] md:text-xs italic font-medium ${sizeColorClass} flex items-center gap-1 font-serif`}>
           <span className={`inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70`}></span>
           {weapon.size}
        </span>

        {/* Origem */}
        <span className="text-[10px] md:text-xs text-stone-600 italic text-right truncate font-serif">
          Origem: <span className="text-violet-900/80 font-bold uppercase tracking-wider group-hover:text-violet-800 transition-colors">{weapon.origin}</span>
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function AcessoriosMagicosPage() {
  const [sizeFilter, setSizeFilter] = useState<"Todos" | "Menor" | "Médio" | "Maior">("Todos");
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return accessories.filter(weapon => {
      // 1. Filtro de Texto
      const matchesSearch = weapon.name.toLowerCase().includes(term) ||
                            weapon.description.toLowerCase().includes(term);
      
      // 2. Filtro de Tamanho
      const matchesSize = sizeFilter === "Todos" || weapon.size === sizeFilter;

      return matchesSearch && matchesSize;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch, sizeFilter]);

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
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/itens-magicos" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Itens Mágicos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Acessórios</span>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-violet-500 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Acessórios
          </h1>
        </div>

        {/* --- Seção de Acessórios --- */}
        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          
          {/* Controles: Título + Filtros */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-6">
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-violet-800 font-serif">
                  <span className="w-1.5 md:w-2 h-6 md:h-8 bg-violet-900 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                  Acessórios
              </h2>

              {/* Filtros de Tamanho - Estilo Stone */}
              <div className="flex flex-wrap gap-2">
                {(["Todos", "Menor", "Médio", "Maior"] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSizeFilter(size)}
                    className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all border font-serif ${
                      sizeFilter === size
                        ? "bg-violet-900 text-stone-100 border-violet-700 shadow-lg"
                        : "bg-stone-900 text-stone-500 border-stone-800 hover:border-violet-800 hover:text-violet-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Busca - ESTILO CAIXA (Violeta) */}
          <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Acessório
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
          </div>

          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificAccessoryCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-stone-600 italic border border-dashed border-stone-800 rounded-xl text-sm md:text-base font-serif">
              Nenhum acessório encontrado {sizeFilter !== "Todos" ? `do tamanho "${sizeFilter}"` : ""} com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}