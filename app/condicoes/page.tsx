"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { conditions } from "@/data/conditions";
import { Condition } from "@/types/condition";

// --- 1. Formatação de Texto (Mantida, apenas ajuste de cores para o tema) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito forte
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-400 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      // Negrito padrão
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-stone-500 font-serif">$1</em>')
      // Listas
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm"><span class="font-bold text-amber-700">❖</span> $1.</p>')
      // Citações
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-amber-900/50 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-950/50 rounded-r shadow-inner">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-stone-300 font-serif" />
    );
  });
};

// --- Componente: Modal de Imagem (Mantido) ---
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

// --- 2. Card de Condição (Ajustado para o Grid) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Condition }) => {
  return (
    <div className="
      group relative p-6 rounded bg-stone-900 border border-stone-800 
      hover:border-red-900/50 transition-all duration-300 
      flex flex-col text-left w-full
      hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)]
    ">
      
      {/* Cabeçalho do Card */}
      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-red-900/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="text-xl font-bold text-stone-200 group-hover:text-red-500 transition-colors break-words tracking-wide font-serif">
          {weapon.name}
        </h3>
      </div>
    
      {/* Descrição */}
      <div className="text-sm md:text-base pt-1 text-stone-400 flex-grow leading-relaxed font-serif">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      {/* Rodapé */}
      <div className="mt-4 pt-3 border-t border-stone-800 flex justify-between items-center w-full">
          {/* Lado Esquerdo: Efeito */}
          <div>
            {weapon.efeito && (
              <span className="text-[10px] md:text-xs font-bold text-amber-600 bg-stone-950 px-2 py-1 rounded border border-stone-800 uppercase tracking-widest">
                {weapon.efeito}
              </span>
            )}
          </div>

          {/* Lado Direito: Origem */}
          <span className="text-xs text-stone-600 italic flex items-center gap-1 font-serif">
              <span className="text-amber-700">♦</span>
              Origem: <span className="text-stone-500">{weapon.origin}</span>
          </span>
      </div>

      {/* Detalhes de Canto */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-700 opacity-50 group-hover:border-red-700 group-hover:opacity-100 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-700 opacity-50 group-hover:border-red-700 group-hover:opacity-100 transition-colors"></div>
    </div>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() { // Mantendo o nome da função conforme seu original
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return conditions.filter(weapon => {
      return weapon.name.toLowerCase().includes(term) ||
             weapon.description.toLowerCase().includes(term);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - IDÊNTICO ÀS OUTRAS PÁGINAS */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Condições</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12"> 
        
        {/* Título e Texto - 100% WIDTH */}
        <div className="mb-12 w-full border-b border-stone-800 pb-8">
          <h1 className="text-5xl font-bold text-amber-700 mb-6 drop-shadow-sm">
            Condições
          </h1>
          <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm w-full">
            <p className="text-stone-300 text-lg leading-relaxed">
                Condições com os mesmos efeitos não se acumulam; aplique apenas os mais severos. Por exemplo, um personagem desprevenido e vulnerável sofre –5 na Defesa, não –7. A menos que especificado o contrário, condições terminam no fim da cena. Algumas condições possuem um tipo de efeito (veja em "Regras de Jogo").
            </p>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA (Igual outras páginas) */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                Buscar Condição
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

        {/* Grid/Lista de Condições */}
        <section className="w-full">
          {filteredSpecificWeapons.length > 0 ? (
            // Grid-cols-1 com gap reduzido para evitar espaçamento excessivo
            <div className="grid grid-cols-1 gap-4 w-full">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
              <p className="text-stone-500 text-lg italic">Nenhuma condição encontrada com "{weaponSearch}".</p>
            </div>
          )}
        </section>

      </main>

       {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}