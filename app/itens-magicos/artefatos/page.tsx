"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { Artifact } from "@/types/artifact";

// --- 1. Formatação de Texto (Estilo Pergaminho) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n'); 

  return lines.map((line, index) => {
    if (!line.trim()) return <div key={index} className="h-4" />;

    let formattedLine = line
      // Negrito -> Âmbar Escuro / Destacado
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-amber-950 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950 font-serif">$1</strong>')
      // Itálico -> Âmbar Médio
      .replace(/\*(.*?)\*/g, '<em class="text-amber-900/90 font-serif">$1</em>')
      // Listas (Bullet points) -> Transforma a linha inteira em um item de lista estilizado
      .replace(/^- (.*)/g, '<p class="mt-2 ml-2 md:ml-4 text-sm font-serif flex items-start"><span class="font-bold text-amber-800 mr-2 mt-[2px]">❖</span><span class="text-amber-950">$1</span></p>')
      // Citações -> Borda Vermelha e Fundo Bege Escuro
      .replace(/^> (.*)/g, '<blockquote class="border-l-4 border-red-900 pl-3 md:pl-4 py-2 my-3 text-sm italic text-amber-900/90 bg-[#dcc8a9]/60 rounded-r-lg shadow-inner font-serif">$1</blockquote>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-1 text-sm md:text-base leading-relaxed text-amber-950 font-serif" 
      />
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-amber-200/70 hover:text-white transition-colors p-2 bg-[#2a231d]/90 rounded-full border border-amber-900/50 hover:bg-red-900/80 hover:border-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.5)] border border-amber-900/50"
        />
      </div>
    </div>
  );
};

// --- 2. Card de Artefato (Tema Pergaminho com Acordeão) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Artifact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Novo estado para controlar o abre/fecha
  const hasImage = !!weapon.image;

  return (
    <>
      <div className="
        group relative p-5 md:p-6 rounded-2xl flex flex-col text-left transition-all duration-300
        
        /* Fundo: Bege escuro alternado */
        bg-[#e6dcc5]
        
        /* Bordas: Âmbar com leve destaque no hover */
        border-2 border-amber-900/20 
        hover:border-amber-900/40
        hover:bg-[#dbcfb4]
        
        /* Sombras */
        shadow-sm hover:shadow-lg
      ">
        {/* Cabeçalho do Card - Agora é clicável (cursor-pointer) */}
        <div 
          className="flex justify-between items-center gap-3 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Título e Ícone de Seta */}
          <div className="flex items-center gap-3 flex-1">
            {/* Seta animada que gira quando abre */}
            <svg 
              className={`w-5 h-5 text-amber-900 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            
            <h3 className="text-xl md:text-2xl font-bold text-amber-950 group-hover:text-red-900 transition-colors break-words tracking-tight font-serif">
              {weapon.name}
            </h3>
          </div>

          {/* Botão Ver Arte */}
          {hasImage && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // MUITO IMPORTANTE: Impede que o clique no botão ative o abre/fecha do card
                setIsModalOpen(true);
              }}
              className="
                flex items-center gap-2 px-3 py-1.5 rounded-full 
                bg-[#dcc8a9] hover:bg-[#c4b090] 
                border border-amber-900/30 hover:border-amber-900/60 
                text-xs font-medium text-amber-950 
                transition-all shrink-0 cursor-pointer shadow-sm font-serif
              "
              title="Visualizar ilustração"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="hidden sm:inline">Ver Arte</span>
            </button>
          )}
        </div>
      
        {/* Conteúdo Expansível (Descrição e Rodapé) - Só renderiza se isOpen for true */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-amber-900/20 animate-in slide-in-from-top-2 fade-in duration-200">
            {/* Descrição */}
            <div className="text-sm md:text-base leading-relaxed font-serif transition-colors">
              {formatTextWithBreaks(weapon.description)}
            </div>
            
            {/* Rodapé */}
            <div className="mt-5 pt-3 border-t border-amber-900/10 flex justify-end items-center">
              <span className="text-xs text-amber-900/80 italic flex items-center gap-1 font-serif">
                <span className="w-1.5 h-1.5 rounded-full bg-red-900/50 inline-block"></span>
                Origem: <span className="text-red-900 font-bold uppercase tracking-widest">{weapon.origin}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && hasImage && (
        <ImageModal 
          src={weapon.image!} 
          alt={weapon.name} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

// --- Página Principal ---

export default function ArmasMagicasPage() {
  const [sizeFilter, setSizeFilter] = useState<"Todos" | "Menor" | "Médio" | "Maior">("Todos");
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return artifacts.filter(weapon => {
      return weapon.name.toLowerCase().includes(term) ||
      weapon.origin.toLowerCase().includes(term) ||
      weapon.description.toLowerCase().includes(term);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch, sizeFilter]);

  return (
    // Fundo da página escurecido: de #f5e6d0 para #e0d2b4
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-amber-900 selection:text-amber-100 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">
      
      {/* Background Effect - tornado um pouco mais denso para "sujar" o fundo */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header Responsivo - Fundo escurecido #d6c6aa */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Esquerda: Logo */}
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-800 via-red-900 to-black drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            {/* Direita: Menu */}
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/itens-magicos" className="text-amber-900/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Itens Mágicos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Artefatos</span>
            </div>
        </div>
      </header>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12"> 
        
        {/* Título e Texto Introdutório - Seção Estilizada */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 border-b-2 border-amber-900/20 pb-4">
              Artefatos
            </h1>
            <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
              <p className="text-lg font-medium italic text-amber-900/90">
                  Um artefato é um item mágico único extremamente poderoso. Normalmente, apenas divindades maiores têm poder para criar estas peças, e elas sempre são forjadas com um propósito específico. Os deuses cuidam para que artefatos caiam nas mãos de seus servos mais poderosos, mas às vezes o destino leva essas peças até aventureiros menores.
              </p>
              <p className="text-lg font-medium italic text-amber-900/90">
                  Artefatos não são simplesmente “outro tipo de item mágico”. São relíquias fabulosas, lendárias. A busca para recuperar ou destruir um deles pode ser a base para uma campanha inteira. Não há tabelas para geração aleatória de artefatos, nem custo para fabricá-los. Esses itens devem entrar em uma campanha apenas por decisão deliberada do mestre.
              </p>
            </div>
        </section>

        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          
          {/* Título da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            <div className="flex flex-col gap-4 max-w-3xl border-b border-amber-900/30 pb-2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 font-serif">
                Relíquias & Artefatos
              </h2>
            </div>
          </div>

          {/* Busca - Barra de Busca com Fundo Bege */}
          <div className="mb-8 p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-950 mb-3 uppercase tracking-wider font-serif">
                Buscar Artefato
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50 mt-3">
                    🔍
                </div>
            </div>
          </div>

          {/* Grid de Cards */}
          {filteredSpecificWeapons.length > 0 ? (
            // AQUI: Mudei o gap de "gap-5 md:gap-8" para "gap-2 md:gap-3"
            <div className="grid grid-cols-1 gap-2 md:gap-3 w-full">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-2 border-dashed border-amber-900/30 rounded-xl text-lg font-serif italic">
              Nenhum artefato encontrado com "{weaponSearch}".
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}