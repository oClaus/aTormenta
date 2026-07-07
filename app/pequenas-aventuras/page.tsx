"use client";

import Link from "next/link";
import { useState } from "react";
import { Adventure, AdventureSection } from "@/types/adventure";
import { adventures } from "@/data/adventures";

export default function PequenasAventurasPage() {
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdventures = adventures
    .filter(adventure =>
      adventure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      adventure.theme.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedAdventure(null);
    }
  };

  // Função auxiliar para renderizar as seções de acordo com o tipo
  const renderSection = (section: AdventureSection, index: number) => {
    // Renderiza divisórias (breaks)
    if (section.type === "break") {
      return (
        <div key={index} className="flex items-center justify-center gap-4 opacity-40 my-10">
          <div className="h-[2px] w-16 bg-amber-900"></div>
          <span className="text-red-800 text-2xl font-serif">❖</span>
          <div className="h-[2px] w-16 bg-amber-900"></div>
        </div>
      );
    }

    // Para outros tipos, se não houver conteúdo, não renderiza nada
    if (!section.content) return null;
    const content = section.content.trim();
    if (!content) return null;

    // Renderiza Títulos e Subtítulos
    if (section.type === "title") {
      return (
        <h3 key={index} className="text-3xl font-bold text-red-800 mb-6 mt-10 font-serif tracking-wide">
          {content}
        </h3>
      );
    }

    if (section.type === "subtitle") {
      return (
        <h4 key={index} className="text-2xl font-bold text-amber-950 mb-4 mt-8 border-b-2 border-amber-900/10 pb-2 font-serif flex items-center gap-2">
          <span className="text-red-800 text-xl">◆</span> {content}
        </h4>
      );
    }

    // Renderiza Textos Normais (Em blocos de pergaminho)
    return (
      <div key={index} className="relative group mb-6">
        <div className="rounded-xl bg-[#fbf5e6] border-2 border-amber-900/10 overflow-hidden shadow-sm hover:border-red-800/30 transition-colors">
          <div className="p-6 md:p-8">
            <p className="text-amber-950/85 leading-relaxed whitespace-pre-wrap text-base md:text-lg font-medium font-serif">
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Padronizado */}
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
                <Link href="/mundo-de-arton" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Mundo de Arton
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800 whitespace-nowrap">Pequenas Aventuras</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título e Introdução */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Pequenas Aventuras
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
            <p className="text-amber-950/85 text-lg font-serif font-medium max-w-3xl leading-relaxed">
                Explore histórias épicas e desafios emocionantes prontos para jogar.
            </p>
        </div>

        {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Aventura
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Digite o nome ou tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                {searchTerm ? (
                  <button 
                    onClick={() => setSearchTerm("")}
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
            {searchTerm && (
              <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                Exibindo {filteredAdventures.length} resultado(s) para "{searchTerm}".
              </p>
            )}
        </div>

        {/* Grid de Aventuras */}
        {filteredAdventures.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full mb-16 items-stretch">
            {filteredAdventures.map((adventure) => (
                <div
                key={adventure.id}
                onClick={() => setSelectedAdventure(adventure)}
                className="group relative overflow-hidden rounded-xl bg-[#e8dac1] border-2 border-amber-900/20 hover:border-red-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] cursor-pointer flex flex-col h-full"
                >
                
                {/* Efeito de Brilho Superior */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                <div className="relative w-full h-48 md:h-56 bg-[#fbf5e6] border-b-2 border-amber-900/10 overflow-hidden flex items-center justify-center">
                    {adventure.image ? (
                    <img
                        src={adventure.image}
                        alt={adventure.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply filter sepia-[0.2] opacity-90 group-hover:opacity-100"
                    />
                    ) : (
                    <div className="flex flex-col items-center text-amber-900/20">
                        <span className="text-6xl mb-2">📖</span>
                        <span className="text-xs font-bold uppercase tracking-widest">Sem Capa</span>
                    </div>
                    )}
                </div>

                <div className="relative p-6 flex-1 flex flex-col bg-[#e8dac1]">
                    <div className="w-full flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[8px] text-red-800/60">◆</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-950/60 group-hover:text-red-800 transition-colors">
                                {adventure.theme}
                            </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-red-800 group-hover:text-red-700 transition-colors mb-3 font-serif tracking-wide leading-tight">
                            {adventure.name}
                        </h3>

                        <p className="text-amber-950/80 text-sm leading-relaxed line-clamp-3 mb-4 font-medium italic">
                            {adventure.summary}
                        </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8 mb-16">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma aventura encontrada com o termo aplicado.
              </p>
            </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedAdventure && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
        >
          <div className="bg-[#f5e6d0] border-4 border-double border-amber-900/40 rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar">
            
            {/* Header Sticky do Modal */}
            <div className="sticky top-0 z-20 w-full flex justify-end p-4 bg-gradient-to-b from-[#f5e6d0] to-transparent pointer-events-none">
                <button
                onClick={() => setSelectedAdventure(null)}
                className="text-amber-950/40 hover:text-red-800 transition-colors bg-[#fbf5e6] border-2 border-amber-900/20 rounded-full w-10 h-10 flex items-center justify-center text-3xl pb-1 shadow-sm pointer-events-auto"
                title="Fechar"
                >
                ×
                </button>
            </div>

            <div className="px-6 pb-12 pt-4 md:px-12 font-serif -mt-10">
              
              {/* Cabeçalho da Aventura */}
              <div className="mb-10 text-center border-b-2 border-amber-900/20 pb-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-red-950 mb-6 tracking-wide leading-tight drop-shadow-sm">
                    {selectedAdventure.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[2px] w-12 bg-amber-900/20"></div>
                    <span className="inline-block text-sm md:text-base font-bold uppercase tracking-[0.2em] text-red-800 bg-[#e8dac1]/50 px-4 py-1.5 rounded-lg border border-amber-900/10">
                        {selectedAdventure.theme}
                    </span>
                    <div className="h-[2px] w-12 bg-amber-900/20"></div>
                  </div>
              </div>

              {/* Descrição / Resumo Inicial */}
              <div className="mb-12 p-8 bg-[#fbf5e6] border-2 border-amber-900/10 rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-800/70"></div>
                <p className="text-amber-950/85 font-medium leading-relaxed whitespace-pre-line text-lg first-letter:text-6xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-3 first-letter:float-left text-justify">
                  {selectedAdventure.summary}
                </p>
              </div>

              {/* Seções da Aventura Renderizadas de Forma Dinâmica */}
              <div className="w-full">
                {selectedAdventure.sections.map((section, index) => renderSection(section, index))}
              </div>

              <div className="mt-16 flex items-center justify-center gap-4 opacity-40">
                    <div className="h-[2px] w-24 bg-amber-900"></div>
                    <span className="text-red-800 text-3xl">❖</span>
                    <div className="h-[2px] w-24 bg-amber-900"></div>
              </div>

            </div>
          </div>
        </div>
      )}

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