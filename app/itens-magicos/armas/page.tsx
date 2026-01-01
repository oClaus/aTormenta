"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments, specificWeapons } from "@/data/magics";
import { Enchantment, SpecificWeapon } from "@/types/magic";

// --- Componente Auxiliar: Formatação de Texto (Estilo Stone) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\\n');

  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-stone-200"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-stone-400">$1</em>')
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm"><span class="font-bold text-stone-500">❖</span> $1.</p>')
      .replace(/> (.*)/g, '<blockquote class="border-l-2 border-stone-700 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-950/50 rounded-r-md">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-stone-300 font-serif" />
    );
  });
};

// --- Componente 1: Card de Encanto (TEMA ÂMBAR - Magia) ---
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => {
  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-stone-900 border border-stone-800 shadow-lg hover:bg-stone-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(180,83,9,0.15)] hover:border-amber-900/50 text-left h-full flex flex-col">
      {/* Brilho Superior Âmbar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-amber-900/30 transition-colors">
        <h3 className="text-lg md:text-xl font-bold text-stone-200 group-hover:text-amber-500 transition-all break-words font-serif">
          {enchantment.name}
        </h3>
      </div>
      <div className="text-sm flex-grow font-serif text-stone-400 group-hover:text-stone-300 transition-colors">
        {formatTextWithBreaks(enchantment.description)}
      </div>
      <div className="mt-4 pt-2 border-t border-stone-800 text-right">
        <span className="text-[10px] md:text-xs text-stone-600 italic flex justify-end items-center gap-1 font-serif">
          Origem: <span className="text-amber-800/80 font-bold uppercase tracking-wider group-hover:text-amber-700 transition-colors">{enchantment.origin}</span>
        </span>
      </div>
    </div>
  );
};

// --- Componente 2: Card de Arma Específica (TEMA VERMELHO/CARMESIM - Lendário/Combate) ---
const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => {
  return (
    // Fundo ligeiramente mais escuro (Stone-950) para dar peso
    <div className="group relative p-4 md:p-5 rounded-xl bg-stone-950 border border-stone-800 shadow-lg hover:bg-stone-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(153,27,27,0.15)] hover:border-red-900/50 text-left h-full flex flex-col">
      {/* Brilho Superior Vermelho */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-red-900/30 transition-colors flex justify-between items-start gap-2">
        <h3 className="text-lg md:text-xl font-bold text-stone-200 group-hover:text-red-500 transition-all break-words font-serif">
          {weapon.name}
        </h3>
      </div>
      
      <div className="mt-0 mb-3">
        <span className="inline-block px-2 py-0.5 bg-stone-900/80 border border-stone-800 rounded text-[10px] md:text-xs text-red-400 font-serif tracking-wide group-hover:border-red-900/30 transition-colors">
          Preço: T$ {weapon.price}
        </span>
      </div>

      <div className="text-sm pt-1 text-stone-400 flex-grow font-serif group-hover:text-stone-300 transition-colors">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      <div className="mt-4 pt-2 border-t border-stone-800 text-right">
        <span className="text-[10px] md:text-xs text-stone-600 italic font-serif">
          Origem: <span className="text-red-900/80 font-bold uppercase tracking-wider group-hover:text-red-800 transition-colors">{weapon.origin}</span>
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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-4 md:p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-2 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Esquerda: Logo */}
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            {/* Direita: Menu e Botão */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 self-end md:self-auto w-full md:w-auto">
                <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase justify-end">
                    <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                      Início
                    </Link>
                    <span className="text-stone-700">/</span>
                    <Link href="/itens-magicos" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                      Itens Mágicos
                    </Link>
                    <span className="text-stone-700">/</span>
                    <span className="text-red-700">Armas</span>
                </div>

                <button 
                    onClick={scrollToWeapons}
                    className="w-full md:w-auto px-6 py-2 bg-stone-900 border border-stone-700 rounded-sm text-stone-400 hover:bg-stone-800 hover:text-red-500 hover:border-red-900 transition-all font-medium uppercase tracking-wider text-center text-xs sm:text-sm font-serif shadow-sm"
                >
                    Ver Armas ↓
                </button>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal Full Width */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Armas Mágicas
          </h1>
        </div>

        {/* --- Seção 1: Encantos (Tema Âmbar) --- */}
        <section className="mb-16 md:mb-24 w-full relative">
          <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-amber-900/50 to-transparent opacity-50"></div>

          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-amber-700 font-serif mb-6">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-amber-800 rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></span>
            Encantos
          </h2>

          {/* Busca Encantos - ESTILO CAIXA (Âmbar) */}
          <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                Buscar Encantamento
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={enchantmentSearch}
                onChange={(e) => setEnchantmentSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
          </div>

          {filteredEnchantments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredEnchantments.map((enc) => (
                <EnchantmentCard key={enc.id} enchantment={enc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-stone-600 italic border border-dashed border-stone-800 rounded-xl text-sm md:text-base font-serif">
              Nenhum encantamento encontrado com "{enchantmentSearch}".
            </div>
          )}
        </section>

        {/* --- Seção 2: Armas Específicas (Tema Vermelho) --- */}
        <section id="specific-weapons-section" className="w-full pt-8 md:pt-12 pb-12 md:pb-20 border-t border-stone-900">
          <div className="mt-8 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif">
                <span className="w-1.5 md:w-2 h-6 md:h-8 bg-red-900 rounded-full shadow-[0_0_10px_rgba(127,29,29,0.5)]"></span>
                Armas Específicas
            </h2>
          </div>

          {/* Busca Armas - ESTILO CAIXA (Vermelho) */}
          <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                Buscar Arma Lendária
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
          </div>

          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-4 md:gap-6">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-stone-600 italic border border-dashed border-stone-800 rounded-xl text-sm md:text-base font-serif">
              Nenhuma arma encontrada com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>
      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}