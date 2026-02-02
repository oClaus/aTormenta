"use client";

import Link from "next/link";
import { useState } from "react";
import { Adventure } from "@/types/adventure";
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

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Pequenas Aventuras</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução */}
        <div className="mb-12 w-full space-y-4 text-lg leading-relaxed text-center md:text-left">
            <div>
                <h2 className="text-4xl font-bold text-amber-800 mb-3 border-b-2 border-amber-900/20 pb-2 inline-block md:block w-full">
                    Pequenas Aventuras
                </h2>
                <p className="text-amber-900/80 font-medium text-xl">
                    Explore histórias épicas e desafios emocionantes.
                </p>
            </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Aventura
          </label>
           <div className="relative">
             <input
                type="text"
                placeholder="Digite o nome ou tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
            />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
               🔍
             </div>
          </div>
        </div>

        {/* Grid de Aventuras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mb-16">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              onClick={() => setSelectedAdventure(adventure)}
              className="group relative overflow-hidden rounded bg-[#e8dac1] border border-amber-900/30 hover:border-amber-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-[#f0e6d2] border-b border-amber-900/10 overflow-hidden flex items-center justify-center">
                {adventure.image ? (
                  <img
                    src={adventure.image}
                    alt={adventure.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply filter sepia-[0.3] opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="text-6xl text-amber-900/20">📖</div>
                )}
              </div>

              <div className="relative p-5 flex-1 flex flex-col justify-between bg-[#e8dac1]">
                 <div className="w-full flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-amber-900/40 rotate-45 group-hover:bg-red-600 transition-colors duration-300"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-900/60 group-hover:text-amber-800 transition-colors">
                            {adventure.theme}
                        </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-3 font-serif tracking-wide leading-tight">
                    {adventure.name}
                    </h3>

                    <p className="text-amber-900/70 text-sm leading-relaxed line-clamp-3 mb-4">
                        {adventure.summary}
                    </p>
                </div>
                
                {/* Decoration Corners */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredAdventures.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhuma aventura encontrada nos registros.</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedAdventure && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          <div className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            <button
              onClick={() => setSelectedAdventure(null)}
              className="absolute top-6 right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[#e8dac1] border border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            <div className="p-8 md:p-12 font-serif">
              
              {/* Cabeçalho da Aventura */}
              <div className="mb-10 text-center border-b-2 border-amber-900/20 pb-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wide leading-tight">
                    {selectedAdventure.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                    <span className="inline-block text-lg font-bold uppercase tracking-[0.2em] text-red-800">
                        {selectedAdventure.theme}
                    </span>
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                  </div>
              </div>

              {/* Descrição / Resumo */}
              <div className="mb-10 p-6 bg-[#fffaf0] border border-amber-900/20 rounded shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-900/20"></div>
                <p className="text-amber-900/90 font-medium leading-relaxed whitespace-pre-line text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-justify">
                  {selectedAdventure.summary}
                </p>
              </div>

              {/* Seções da Aventura */}
              <div className="space-y-8">
                {selectedAdventure.sections.map((section, index) => (
                    <div key={index} className="relative group">
                        {/* Estilo similar às Habilidades de Classe */}
                        <div className="ml-1 rounded-r bg-[#fbf5e6] border border-amber-900/20 overflow-hidden shadow-sm hover:border-amber-700/50 transition-colors">
                            <div className="p-6 bg-[url('/noise.png')]">
                                <p className="text-amber-900/90 leading-relaxed whitespace-pre-wrap text-lg font-medium">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
                    <span className="text-amber-900/60 text-2xl">❖</span>
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}