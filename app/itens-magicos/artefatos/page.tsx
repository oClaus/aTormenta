"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { Artifact } from "@/types/artifact";

// --- 1. Formatação de Texto (Estilo Stone/Grimório) ---
const formatTextWithBreaks = (text: string) => {
  // CORREÇÃO AQUI: Use '\n' em vez de '\\n' para pegar as quebras de linha reais do TS
  const lines = text.split('\n'); 

  return lines.map((line, index) => {
    // Se a linha for vazia (apenas uma quebra extra), renderiza um espaço para manter o layout
    if (!line.trim()) return <div key={index} className="h-4" />;

    let formattedLine = line
      // Negrito -> Stone Claro
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-stone-100 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200 font-serif">$1</strong>')
      // Itálico -> Stone Médio
      .replace(/\*(.*?)\*/g, '<em class="text-stone-400 font-serif">$1</em>')
      // Listas (Bullet points) -> Transforma a linha inteira em um item de lista estilizado
      // Ajustei o regex para pegar a linha toda caso comece com "- "
      .replace(/^- (.*)/g, '<p class="mt-2 ml-2 md:ml-4 text-sm font-serif flex items-start"><span class="font-bold text-amber-600 mr-2 mt-[2px]">❖</span><span>$1</span></p>')
      // Citações -> Borda Âmbar e Fundo Stone
      .replace(/^> (.*)/g, '<blockquote class="border-l-4 border-amber-700 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-900/50 rounded-r-lg shadow-inner font-serif">$1</blockquote>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-1 text-sm md:text-base leading-relaxed text-stone-300 font-serif" 
      />
    );
  });
};

// --- Componente: Modal de Imagem (Lightbox - Estilo Stone) ---
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-stone-400 hover:text-white transition-colors p-2 bg-stone-900/80 rounded-full border border-stone-700 hover:bg-red-900/50 hover:border-red-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_60px_rgba(180,83,9,0.3)] border border-amber-900/30"
        />
      </div>
    </div>
  );
};

// --- 2. Card de Artefato (Tema Grimório/Âmbar) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Artifact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasImage = !!weapon.image;

  return (
    <>
      <div className="
        group relative p-5 md:p-6 rounded-2xl h-full flex flex-col text-left transition-all duration-300
        
        /* Fundo: Stone Escuro */
        bg-stone-950
        
        /* Bordas: Stone com brilho Âmbar no hover */
        border border-stone-800 
        hover:border-amber-900/50 
        
        /* Sombras e Efeitos de Hover */
        shadow-[0_4px_20px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_30px_rgba(180,83,9,0.15)] 
        hover:-translate-y-1
      ">
        {/* Efeito de brilho superior no hover (Âmbar) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Cabeçalho do Card */}
        <div className="mb-4 pb-3 border-b border-stone-800 group-hover:border-amber-900/30 transition-colors flex justify-between items-start gap-3">
          {/* Título */}
          <h3 className="text-xl md:text-2xl font-bold text-stone-200 group-hover:text-amber-500 transition-all break-words tracking-tight font-serif">
            {weapon.name}
          </h3>

          {/* Botão Ver Arte (Estilo Pílula Stone/Âmbar) */}
          {hasImage && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="
                flex items-center gap-2 px-3 py-1.5 rounded-full 
                bg-stone-900 hover:bg-stone-800 
                border border-stone-700 hover:border-amber-700 
                text-xs font-medium text-stone-400 hover:text-amber-500 
                transition-all shrink-0 cursor-pointer shadow-lg font-serif
              "
              title="Visualizar ilustração"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Ver Arte</span>
            </button>
          )}
        </div>
      
        {/* Descrição */}
        <div className="text-sm md:text-base pt-1 text-stone-400 flex-grow leading-relaxed font-serif group-hover:text-stone-300 transition-colors">
          {formatTextWithBreaks(weapon.description)}
        </div>
        
        {/* Rodapé */}
        <div className="mt-5 pt-3 border-t border-stone-800 flex justify-end items-center">
          <span className="text-xs text-stone-500 italic flex items-center gap-1 font-serif">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-700/50 inline-block"></span>
            Origem: <span className="text-amber-800 font-bold uppercase tracking-wider group-hover:text-amber-700">{weapon.origin}</span>
          </span>
        </div>
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
    // Fundo da página Stone Escuro
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (CORRIGIDO: Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Esquerda: Logo */}
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            {/* Direita: Menu */}
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/itens-magicos" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Itens Mágicos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Artefatos</span>
            </div>
        </div>
      </header>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12"> 
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Artefatos
          </h1>
        </div>
        
        {/* Texto Introdutório */}
        <div className="bg-stone-900/50 p-8 rounded border border-stone-800 mb-12">
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">
                Um artefato é um item mágico único extremamente poderoso. Normalmente, apenas divindades maiores têm poder para criar estas peças, e elas sempre são forjadas com um propósito específico. Os deuses cuidam para que artefatos caiam nas mãos de seus servos mais poderosos, mas às vezes o destino leva essas peças até aventureiros menores.
            </p>
            <p className="text-stone-300 text-lg font-serif leading-relaxed">
                Artefatos não são simplesmente “outro tipo de item mágico”. São relíquias fabulosas, lendárias. A busca para recuperar ou destruir um deles pode ser a base para uma campanha inteira. Não há tabelas para geração aleatória de artefatos, nem custo para fabricá-los. Esses itens devem entrar em uma campanha apenas por decisão deliberada do mestre.
            </p>
        </div>

        <section id="specific-weapons-section" className="w-full pt-4 md:pt-8 pb-12 md:pb-20">
          
          {/* Título da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-amber-700 font-serif">
                  <span className="w-1.5 md:w-2 h-6 md:h-8 bg-amber-800 rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></span>
                  Relíquias & Artefatos
              </h2>
            </div>
          </div>

          {/* Busca - ESTILO CAIXA (Âmbar/Vermelho) */}
          <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Artefato
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
          </div>

          {/* Grid de Cards */}
          {filteredSpecificWeapons.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:gap-8 w-full">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 bg-stone-900/50 rounded-xl text-lg font-serif">
              Nenhum artefato encontrado com "{weaponSearch}".
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