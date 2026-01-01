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
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Pequenas Aventuras</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        
        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-md">
                Pequenas Aventuras
            </h2>
            <p className="text-stone-400 text-lg font-serif">Explore histórias épicas e desafios emocionantes</p>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Aventura
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Digite o nome ou tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Aventuras - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              onClick={() => setSelectedAdventure(adventure)}
              className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(180,83,9,0.2)] cursor-pointer flex flex-col h-full"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-48 bg-stone-950 overflow-hidden border-b border-stone-800">
                {adventure.image ? (
                  <img
                    src={adventure.image}
                    alt={adventure.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter sepia-[0.3] group-hover:sepia-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl text-stone-700 group-hover:text-amber-700 transition-colors">📖</div>
                )}
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-60"></div>
              </div>

              {/* Conteúdo */}
              <div className="relative p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-200 group-hover:text-amber-500 transition-colors mb-3 font-serif leading-tight">
                  {adventure.name}
                </h3>
                
                <div className="mb-3">
                    <span className="inline-block px-2 py-1 rounded bg-stone-950 border border-stone-700 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                    {adventure.theme}
                    </span>
                </div>
                
                <p className="text-stone-500 text-sm mt-auto line-clamp-3 font-serif italic">
                  {adventure.summary}
                </p>

                {/* Efeito de brilho superior no hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {filteredAdventures.length === 0 && (
          <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl">
            <p className="text-lg">Nenhuma aventura encontrada</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedAdventure && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-stone-950 border border-stone-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedAdventure(null)}
              className="absolute top-4 right-4 text-stone-500 hover:text-red-500 transition-colors z-20 bg-stone-900/80 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Imagem de Capa no Topo */}
            {selectedAdventure.image && (
              <div className="w-full h-64 md:h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10"></div>
                <img
                  src={selectedAdventure.image}
                  alt={selectedAdventure.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            )}

            {/* Conteúdo do Modal */}
            <div className={`p-8 ${selectedAdventure.image ? '-mt-20 relative z-20' : ''}`}>
              {/* Título e Tema */}
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-amber-600 to-red-500 bg-clip-text text-transparent mb-4 font-serif drop-shadow-sm">
                {selectedAdventure.name}
              </h2>
              <span className="inline-block px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-stone-900 border border-stone-700 text-stone-400 mb-8">
                {selectedAdventure.theme}
              </span>

              {/* Resumo */}
              <div className="mb-10 p-6 rounded-lg bg-stone-900/50 border border-stone-800">
                <h3 className="text-xl font-bold text-amber-700 mb-3 uppercase tracking-wide font-serif">Resumo</h3>
                <p className="text-stone-300 leading-relaxed font-serif italic">
                  {selectedAdventure.summary}
                </p>
              </div>

              {/* Conteúdo da Aventura */}
              <div className="space-y-6 font-serif">
                {selectedAdventure.sections.map((section, index) => {
                  if (section.type === "title") {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-amber-600 mt-8 mb-4 border-b border-stone-800 pb-2">
                        {section.content}
                      </h3>
                    );
                  }

                  if (section.type === "subtitle") {
                    return (
                      <h4 key={index} className="text-xl font-bold text-stone-200 mt-6 mb-2">
                        {section.content}
                      </h4>
                    );
                  }

                  if (section.type === "text") {
                    return (
                      <p key={index} className="text-stone-400 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    );
                  }

                  if (section.type === "break") {
                    return <div key={index} className="h-6 border-b border-stone-800/30 w-1/2 mx-auto my-6"></div>;
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}