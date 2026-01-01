"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { conditions } from "@/data/conditions";
import { Condition } from "@/types/condition";

// --- 1. Formatação de Texto (Melhorada para Leitura) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n'); // Ajuste leve: geralmente JSON vem com \n, mas se seu dado tiver \\n literal, mantenha '\\n'

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito agora é Branco Gelo para alto contraste
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-white drop-shadow-sm"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-100">$1</strong>')
      // Itálico agora é um azul claro suave
      .replace(/\*(.*?)\*/g, '<em class="text-slate-400">$1</em>')
      // Listas com ícone azul ciano
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm"><span class="font-bold text-cyan-500">❖</span> $1.</p>')
      // Citações com fundo azulado sutil
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-indigo-500 pl-3 md:pl-4 py-2 my-3 text-sm italic text-slate-300 bg-indigo-950/30 rounded-r-lg shadow-inner">$1</blockquote>');

    return (
      // O texto padrão agora é slate-300 (mais claro que o antigo cinza)
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-slate-300" />
    );
  });
};

// --- Componente: Modal de Imagem (Lightbox) ---
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-red-500/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_60px_rgba(79,70,229,0.3)] border border-indigo-500/30"
        />
      </div>
    </div>
  );
};

// --- 2. Card de Artefato (Tema Midnight Blue) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Condition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="
        group relative p-5 md:p-6 rounded-2xl h-full flex flex-col text-left transition-all duration-300
        
        /* Fundo Midnight: Gradiente sutil de Azul Escuro para Preto Azulado */
        bg-gradient-to-br from-slate-900/90 via-[#0f172a]/95 to-indigo-950/90 
        backdrop-blur-md
        
        /* Bordas: Azul Indigo sutil que brilha no hover */
        border border-indigo-500/20 
        hover:border-indigo-400/50 
        
        /* Sombras e Efeitos de Hover */
        shadow-[0_4px_20px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] 
        hover:-translate-y-1
      ">
        
        {/* Cabeçalho do Card */}
        <div className="mb-4 pb-3 border-b border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors flex justify-between items-start gap-3">
          {/* Título mais claro e com leve tom azulado */}
          <h3 className="text-xl md:text-2xl font-bold text-indigo-100 group-hover:text-white transition-all break-words tracking-tight">
            {weapon.name}
          </h3>
        </div>
      
        {/* Descrição (Cor ajustada na função helper) */}
        <div className="text-sm md:text-base pt-1 text-slate-300/90 flex-grow leading-relaxed font-light">
          {formatTextWithBreaks(weapon.description)}
        </div>
        
        {/* Rodapé - ALTERADO AQUI */}
        <div className="mt-5 pt-3 border-t border-indigo-500/20 flex justify-between items-center w-full">
            
            {/* Lado Esquerdo: Efeito (Se houver) */}
            <div>
              {weapon.efeito && (
                <span className="text-[10px] md:text-xs font-bold text-cyan-300 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-500/30 uppercase tracking-wider shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  {weapon.efeito}
                </span>
              )}
            </div>

            {/* Lado Direito: Origem */}
            <span className="text-xs text-indigo-400/70 italic flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 inline-block"></span>
                Origem: <span className="text-indigo-300">{weapon.origin}</span>
            </span>
        </div>
      </div>
    </>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() {
  const [sizeFilter, setSizeFilter] = useState<"Todos" | "Menor" | "Médio" | "Maior">("Todos");
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return conditions.filter(weapon => {
      return weapon.name.toLowerCase().includes(term) ||
             weapon.description.toLowerCase().includes(term);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch, sizeFilter]);

  return (
    // Fundo da página ajustado para combinar (Azul Profundo)
    <main className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050b14] to-black text-slate-200 px-4 sm:px-8 md:px-12 py-8 md:py-12 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="w-full p-4 md:p-6 border-b border-indigo-900/30 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 mb-8 md:mb-12 shadow-lg shadow-indigo-900/10">
        <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link href="/" className="inline-block group">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-200 via-white to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500">
                    a-Tormenta
                  </h1>
                </Link>
                
                <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-medium">
                    <Link href="/" className="text-indigo-400 hover:text-indigo-200 transition-colors whitespace-nowrap">
                      Início
                    </Link>
                    <span className="text-indigo-700">/</span>
                    <span className="text-indigo-200">Condições</span>
                </div>
            </div>
        </div>
      </header>

      <div className="w-full"> 
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-300 mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(79,70,229,0.4)] leading-tight">
            Condições
          </h1>
        </div>
        <div><p className="text-indigo-200/70 text-lg font-light">Condições com os mesmos efeitos não se acumulam; aplique apenas os mais severos. Por exemplo, um personagem desprevenido e vulnerável sofre –5 na Defesa, não –7. A menos que especificado o contrário, condições terminam no fim da cena. Algumas condições possuem um tipo de efeito (veja em "Regras de Jogo").</p></div>

        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-indigo-100">
                  <span className="w-1.5 md:w-2 h-6 md:h-8 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></span>
                  Condições
              </h2>
            </div>
            
            <div className="relative group w-full md:w-auto">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-indigo-400 group-focus-within:text-indigo-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar condição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/50 border border-indigo-500/30 text-indigo-100 placeholder-indigo-500/50 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner text-sm md:text-base"
              />
            </div>
          </div>

          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:gap-8 w-full">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-indigo-400/60 italic border border-dashed border-indigo-900/50 bg-indigo-950/10 rounded-xl text-lg">
              Nenhuma condição encontrada com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>
    </main>
  );
}