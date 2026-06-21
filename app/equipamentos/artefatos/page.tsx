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
      // Negrito -> Vermelho Escuro / Destacado
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      // Itálico -> Âmbar Escuro
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>')
      // Listas (Bullet points) -> Transforma a linha inteira em um item de lista estilizado
      .replace(/^- (.*)/g, '<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><span class="text-amber-950/85 font-medium">$1</span></div>')
      // Citações -> Borda Vermelha e Fundo Pergaminho
      .replace(/^> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm md:text-base italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>');

    return (
      <div 
        key={index} 
        dangerouslySetInnerHTML={{ __html: formattedLine }} 
        className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif font-medium" 
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#2a1810]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-amber-950/40 hover:text-red-800 transition-colors p-2 bg-[#fbf5e6] rounded-full border border-amber-900/20 shadow-sm"
          title="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border-4 border-[#e8dac1]"
        />
      </div>
    </div>
  );
};

// --- 2. Card de Artefato (Tema Pergaminho com Acordeão) ---
const SpecificWeaponCard = ({ weapon }: { weapon: Artifact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasImage = !!weapon.image;

  return (
    <>
      <div className="border-2 border-amber-900/20 rounded-xl shadow-sm mb-4 overflow-hidden w-full bg-[#e8dac1] hover:border-red-800/40 transition-colors group">
        {/* Cabeçalho do Card - Clicável */}
        <button 
          className="w-full text-left p-5 md:p-6 bg-[#e8dac1] hover:bg-[#e8dac1]/80 transition-colors flex justify-between items-center border-b-2 border-transparent group-hover:border-amber-900/10 gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            {/* Ícone de Seta (Gira ao abrir) */}
            <span className={`text-red-800 text-xl md:text-2xl transition-transform duration-300 shrink-0 font-serif ${isOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
            
            <h3 className="text-xl md:text-2xl font-bold text-red-800 group-hover:text-red-700 transition-colors truncate tracking-wide font-serif">
              {weapon.name}
            </h3>
          </div>

          {/* Botão Ver Arte (Fica visível em telas maiores ou quando tem imagem) */}
          {hasImage && (
            <div
              onClick={(e) => {
                e.stopPropagation(); // Impede que abra/feche a sanfona
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-[#fbf5e6] hover:bg-red-800/10 hover:text-red-800 border border-amber-900/20 text-xs md:text-sm font-bold text-amber-950/70 uppercase tracking-widest transition-all shrink-0 cursor-pointer shadow-sm font-serif"
              title="Visualizar ilustração"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span className="hidden sm:inline">Ver Arte</span>
            </div>
          )}
        </button>
      
        {/* Conteúdo Expansível (Descrição e Rodapé) */}
        <div
          className={`transition-all duration-500 ease-in-out bg-[#fbf5e6] ${
            isOpen ? "max-h-[8000px] opacity-100 border-t-2 border-amber-900/10" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 md:p-8">
            {/* Descrição */}
            <div className="text-sm md:text-base leading-relaxed font-serif transition-colors">
              {formatTextWithBreaks(weapon.description)}
            </div>
            
            {/* Rodapé: Origem */}
            <div className="mt-8 pt-4 border-t-2 border-amber-900/10 text-right">
              <span className="text-[10px] px-2 py-1 rounded bg-[#e8dac1] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold inline-block">
                 {weapon.origin}
              </span>
            </div>
          </div>
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

export default function ArtefatosPage() {
  const [weaponSearch, setWeaponSearch] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    
    return artifacts.filter(weapon => {
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
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Artefatos</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto"> 
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
              Artefatos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Artefatos
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir informações sobre as relíquias lendárias.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-6">
              
              <section className="space-y-4 font-medium">
                <p>
                    Um artefato é um item mágico único extremamente poderoso. Normalmente, apenas divindades maiores têm poder para criar estas peças, e elas sempre são forjadas com um propósito específico. Os deuses cuidam para que artefatos caiam nas mãos de seus servos mais poderosos, mas às vezes o destino leva essas peças até aventureiros menores.
                </p>
                <p>
                    Artefatos não são simplesmente “outro tipo de item mágico”. São relíquias fabulosas, lendárias. A busca para recuperar ou destruir um deles pode ser a base para uma campanha inteira. Não há tabelas para geração aleatória de artefatos, nem custo para fabricá-los. Esses itens devem entrar em uma campanha apenas por decisão deliberada do mestre.
                </p>
              </section>

            </div>
          </div>
        </div>

        <section id="specific-weapons-section" className="w-full">
          
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2 flex items-center gap-3">
              <span className="text-red-800 text-3xl">❖</span>
              Relíquias & Artefatos
            </h2>
          </div>

          {/* Busca - ESTILO CAIXA PADRÃO */}
          <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Artefato
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome ou descrição..."
                value={weaponSearch}
                onChange={(e) => setWeaponSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                {weaponSearch ? (
                  <button 
                    onClick={() => setWeaponSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                    title="Limpar busca"
                  >
                    ✕
                  </button>
                ) : (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                      🔍
                  </div>
                )}
            </div>
            {weaponSearch && (
              <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                Exibindo {filteredSpecificWeapons.length} resultado(s) para "{weaponSearch}".
              </p>
            )}
          </div>

          {/* Lista de Acordeões */}
          {filteredSpecificWeapons.length > 0 ? (
            <div className="flex flex-col gap-4 w-full mt-8">
              {filteredSpecificWeapons.map((weapon) => (
                <SpecificWeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum artefato encontrado com "{weaponSearch}".
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}