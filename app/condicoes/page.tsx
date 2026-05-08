"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { conditions } from "@/data/conditions";
import { Condition } from "@/types/condition";

// --- 1. Formatação de Texto (Cores atualizadas para o Pergaminho) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito forte
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-800 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      // Negrito padrão
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-amber-900/80 font-serif">$1</em>')
      // Listas
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm font-medium"><span class="font-bold text-red-800">❖</span> $1.</p>')
      // Citações
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-3 md:pl-4 py-2 my-3 text-sm italic text-amber-950 font-medium bg-[#e8dac1] rounded-r shadow-sm">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-900/90 font-serif font-medium" />
    );
  });
};

// --- Componente: Modal de Imagem (Mantido Original) ---
const ImageModal = ({ src, alt, onClose }: { src: string, alt: string, onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center bg-stone-900 border-2 border-stone-800 rounded p-1 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-stone-500 hover:text-red-500 transition-colors p-2 bg-stone-950 border border-stone-800 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain rounded filter sepia-[0.2]"
        />
      </div>
    </div>
  );
};

// --- 2. Card de Condição (Visual de Pergaminho) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Condition }) => {
  return (
    <div className="
      group relative p-6 rounded-xl bg-[#d9c8a9] border-2 border-amber-900/30 
      hover:border-red-800/50 transition-all duration-300 
      flex flex-col text-left w-full shadow-sm
      hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] hover:-translate-y-1
    ">
      
      {/* Cabeçalho do Card */}
      <div className="mb-3 pb-2 border-b-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors break-words tracking-wide font-serif drop-shadow-sm">
          {weapon.name}
        </h3>
      </div>
    
      {/* Descrição */}
      <div className="pt-1 flex-grow">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      {/* Rodapé */}
      <div className="mt-4 pt-3 border-t-2 border-amber-900/10 flex justify-between items-center w-full">
          {/* Lado Esquerdo: Efeito */}
          <div>
            {weapon.efeito && (
              <span className="text-[10px] md:text-xs font-bold text-red-800 bg-[#fbf5e6] px-2 py-1 rounded border border-amber-900/20 uppercase tracking-widest shadow-sm">
                {weapon.efeito}
              </span>
            )}
          </div>

          {/* Lado Direito: Origem */}
          <span className="text-xs text-amber-900/60 italic flex items-center gap-1 font-serif font-medium">
              <span className="text-red-800">♦</span>
              <span className="text-amber-950 font-bold">{weapon.origin}</span>
          </span>
      </div>

      {/* Detalhes de Canto */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-900/40 opacity-0 group-hover:opacity-100 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/40 opacity-0 group-hover:opacity-100 transition-colors"></div>
    </div>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() { 
  const [weaponSearch, setWeaponSearch] = useState("");
  // Estado do acordeão iniciando fechado
  const [isIntroOpen, setIsIntroOpen] = useState(false); 

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return conditions.filter(weapon => {
      return weapon.name.toLowerCase().includes(term) ||
             weapon.origin.toLowerCase().includes(term) ||
             weapon.description.toLowerCase().includes(term);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Condições</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12 max-w-screen-xl mx-auto"> 
        
        {/* Título Principal */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Condições
          </h1>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras de Condições
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as regras básicas.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10 space-y-8">
              <p className="text-amber-950 text-lg font-medium leading-relaxed">
                Condições com os mesmos efeitos não se acumulam; aplique apenas os mais severos. Por exemplo, um personagem desprevenido e vulnerável sofre –5 na Defesa, não –7. A menos que especificado o contrário, condições terminam no fim da cena. Algumas condições possuem um tipo de efeito (veja em "Regras de Jogo").
              </p>
            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Condição
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome, descrição ou origem..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                      🔍
                  </div>
                )}
            </div>
            {weaponSearch && (
              <p className="text-xs font-medium text-amber-900/70 mt-3 italic">
                Exibindo {filteredSpecificWeapons.length} resultado(s) para "{weaponSearch}".
              </p>
            )}
        </div>

        {/* Grid/Lista de Condições */}
        <section className="w-full">
          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif bg-[#e8dac1]/50 mt-8">
              <p className="text-lg">Nenhuma condição encontrada com "{weaponSearch}".</p>
            </div>
          )}
        </section>

      </main>

       {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}