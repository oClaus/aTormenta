"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { accessories } from "@/data/acessorios";
import { SpecificAccessory } from "@/types/acessorio";

const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\\n');

  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-slate-200"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-slate-400">$1</em>')
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm"><span class="font-bold text-slate-400">❖</span> $1.</p>')
      .replace(/> (.*)/g, '<blockquote class="border-l-2 border-slate-500 pl-3 md:pl-4 py-2 my-3 text-sm italic text-slate-400 bg-slate-800/30 rounded-r-md">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-slate-300" />
    );
  });
};

// --- Componente 2: Card de Acessório (ATUALIZADO) ---
const SpecificWeaponCard = ({ weapon }: { weapon: SpecificAccessory }) => {
  // Função auxiliar para definir a cor baseada no tamanho
  // Usamos cores um pouco mais suaves (500) para não destoar do tema escuro
  const getSizeColorClass = (size: string) => {
    switch (size) {
      case "Menor":
        return "text-emerald-500"; // Verde
      case "Médio":
        return "text-amber-500";   // Amarelo/Âmbar
      case "Maior":
        return "text-blue-500";    // Azul
      default:
        return "text-zinc-600";
    }
  };

  const sizeColorClass = getSizeColorClass(weapon.size);

  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-black/40 backdrop-blur-md border border-zinc-800 shadow-lg hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(161,161,170,0.1)] text-left h-full flex flex-col">
      
      <div className="mb-3 pb-2 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors flex justify-between items-start gap-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-all break-words">
          {weapon.name}
        </h3>
        {/* REMOVI O BADGE DE TAMANHO AQUI NO TOPO JÁ QUE ELE VAI PARA BAIXO */}
      </div>
      
      <div className="mt-1 pb-2">
        <span className="inline-block px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-[10px] md:text-xs text-zinc-300 font-mono">
          {weapon.price}
        </span>
      </div>

      <div className="text-sm pt-2 text-zinc-400 flex-grow">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      {/* --- RODAPÉ ATUALIZADO --- */}
      {/* Mudamos de 'text-right' para 'flex justify-between items-center' */}
      <div className="mt-4 pt-2 border-t border-zinc-800 flex justify-between items-center gap-4">
        
        {/* NOVO: Indicador de Tamanho na esquerda com cor dinâmica */}
        {/* Mantém o padrão: text-[10px] md:text-xs italic */}
        <span className={`text-[10px] md:text-xs italic font-medium ${sizeColorClass} flex items-center gap-1`}>
           {/* Opcional: Adicionar um pequeno ícone ou ponto colorido antes do texto para destacar mais */}
           <span className={`inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70`}></span>
           {weapon.size}
        </span>

        {/* Origem na direita (mantido o padrão) */}
        <span className="text-[10px] md:text-xs text-zinc-600 italic text-right truncate">
          Origem: {weapon.origin}
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() {
  // Estado para o filtro de tamanho: "Todos" ou um dos tamanhos específicos
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
    <main className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-black text-gray-200 px-4 sm:px-8 md:px-12 py-8 md:py-12 selection:bg-slate-500 selection:text-white overflow-x-hidden">
      
      {/* Header Responsivo 100% Width */}
      <header className="w-full p-4 md:p-6 border-b border-slate-800/60 backdrop-blur-sm sticky top-0 z-50 bg-black/40 md:bg-black/20 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 mb-8 md:mb-12">
        <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link href="/" className="inline-block group">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-slate-300 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                    a-Tormenta
                  </h1>
                </Link>
                
                <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
                    <Link href="/" className="text-slate-500 hover:text-slate-200 transition-colors whitespace-nowrap">
                      Início
                    </Link>
                    <span className="text-slate-700">/</span>
                    <Link href="/itens-magicos" className="text-slate-500 hover:text-slate-200 transition-colors whitespace-nowrap">
                      Itens Mágicos
                    </Link>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-300">Acessórios</span>
                </div>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal Full Width */}
      <div className="w-full">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Acessórios
          </h1>
        </div>

        {/* --- Seção 2: Armas Específicas --- */}
        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 md:w-2 h-6 md:h-8 bg-zinc-600 rounded-full shadow-[0_0_10px_rgba(82,82,91,0.5)]"></span>
                  Acessórios
              </h2>

              {/* === NOVOS BOTÕES DE FILTRO === */}
              <div className="flex flex-wrap gap-2">
                {(["Todos", "Menor", "Médio", "Maior"] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSizeFilter(size)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-all border ${
                      sizeFilter === size
                        ? "bg-zinc-200 text-black border-zinc-200 font-medium shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        : "bg-black/40 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group w-full md:w-auto">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-600 group-focus-within:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar acessório..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-zinc-700 text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-inner text-sm md:text-base"
              />
            </div>
          </div>

          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-zinc-600 italic border border-dashed border-zinc-800 rounded-xl text-sm md:text-base">
              Nenhum acessório encontrado {sizeFilter !== "Todos" ? `do tamanho "${sizeFilter}"` : ""} com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>
    </main>
  );
}