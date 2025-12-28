"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments, specificWeapons } from "@/data/magicarmor";
import { Enchantment, SpecificWeapon } from "@/types/magic";

// --- Componente Auxiliar: Formatação de Texto ---
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

// --- Componente 1: Card de Encanto ---
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => {
  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 shadow-lg hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(203,213,225,0.15)] text-left h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-3 pb-2 border-b border-slate-700/50 group-hover:border-slate-500/50 transition-colors">
        <h3 className="text-lg md:text-xl font-bold text-slate-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all break-words">
          {enchantment.name}
        </h3>
      </div>
      <div className="text-sm flex-grow">
        {formatTextWithBreaks(enchantment.description)}
      </div>
      <div className="mt-4 pt-2 border-t border-slate-700/50 text-right">
        <span className="text-[10px] md:text-xs text-slate-500 italic flex justify-end items-center gap-1">
          Origem: <span className="text-slate-400">{enchantment.origin}</span>
        </span>
      </div>
    </div>
  );
};

// --- Componente 2: Card de Arma Específica ---
const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => {
  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-black/40 backdrop-blur-md border border-zinc-800 shadow-lg hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(161,161,170,0.1)] text-left h-full flex flex-col">
      
      <div className="mb-3 pb-2 border-b border-zinc-800 group-hover:border-zinc-600 transition-colors">
        <h3 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-all break-words">
          {weapon.name}
        </h3>
      </div>
      
      <div className="mt-1 pb-2">
        <span className="inline-block px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-[10px] md:text-xs text-zinc-300 font-mono">
          T$ {weapon.price}
        </span>
      </div>

      <div className="text-sm pt-2 text-zinc-400 flex-grow">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      <div className="mt-4 pt-2 border-t border-zinc-800 text-right">
        <span className="text-[10px] md:text-xs text-zinc-600 italic">
          Origem: {weapon.origin}
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() {
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredEnchantments = useMemo(() => {
    const term = enchantmentSearch.toLowerCase();
    return enchantments.filter(enc => 
      enc.name.toLowerCase().includes(term) ||
      enc.description.toLowerCase().includes(term)
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [enchantmentSearch]);

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    return specificWeapons.filter(weapon => 
      weapon.name.toLowerCase().includes(term) ||
      weapon.description.toLowerCase().includes(term)
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch]);

  const scrollToWeapons = () => {
    const element = document.getElementById('specific-weapons-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                    <span className="text-slate-300">Armaduras & Escudos</span>
                </div>
            </div>
            
            <button 
                onClick={scrollToWeapons}
                className="w-full sm:w-auto xl:ml-auto px-6 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-400 transition-all font-medium uppercase tracking-wider text-center text-xs sm:text-sm"
            >
                Ver Armaduras & Escudos ↓
            </button>
        </div>
      </header>

      {/* Conteúdo Principal Full Width */}
      <div className="w-full">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Armaduras & Escudos
          </h1>
        </div>

        <section className="mb-16 md:mb-24 w-full relative">
          <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-slate-200">
              <span className="w-1.5 md:w-2 h-6 md:h-8 bg-slate-400 rounded-full shadow-[0_0_10px_rgba(148,163,184,0.5)]"></span>
              Encantos
            </h2>
            
            <div className="relative group w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500 group-focus-within:text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar encantamento..."
                value={enchantmentSearch}
                onChange={(e) => setEnchantmentSearch(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-slate-700 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all shadow-inner text-sm md:text-base"
              />
            </div>
          </div>

          {filteredEnchantments.length > 0 ? (
            // Grid Expandido para telas gigantes (3xl e 4xl)
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredEnchantments.map((enc) => (
                <EnchantmentCard key={enc.id} enchantment={enc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-slate-600 italic border border-dashed border-slate-800 rounded-xl text-sm md:text-base">
              Nenhum encantamento encontrado com "{enchantmentSearch}".
            </div>
          )}
        </section>

        {/* --- Seção 2: Armas Específicas --- */}
        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-gray-300">
               <span className="w-1.5 md:w-2 h-6 md:h-8 bg-zinc-600 rounded-full shadow-[0_0_10px_rgba(82,82,91,0.5)]"></span>
               Armas Específicas
            </h2>
            
            <div className="relative group w-full md:w-auto">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-600 group-focus-within:text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar arma lendária..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-zinc-700 text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-inner text-sm md:text-base"
              />
            </div>
          </div>

          {filteredSpecificWeapons.length > 0 ? (
            // Mesmo Grid Expandido aqui
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-zinc-600 italic border border-dashed border-zinc-800 rounded-xl text-sm md:text-base">
              Nenhuma arma encontrada com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>
    </main>
  );
}