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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Pequenas Aventuras</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-pink-400 mb-2">📖 Pequenas Aventuras</h2>
          <p className="text-gray-400">Explore histórias épicas e desafios emocionantes</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-purple-300 mb-2">
            Buscar Aventura
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Grid de Aventuras - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              onClick={() => setSelectedAdventure(adventure)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-pink-900/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] cursor-pointer"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-48 bg-gradient-to-b from-pink-900/50 to-black overflow-hidden">
                {adventure.image ? (
                  <img
                    src={adventure.image}
                    alt={adventure.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">📖</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors mb-2">
                  {adventure.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase bg-pink-700/50 text-pink-200 border border-pink-500/50">
                  {adventure.theme}
                </span>
                <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                  {adventure.summary}
                </p>

                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAdventures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma aventura encontrada</p>
          </div>
        )}

        {/* Seção de Informação */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/30">
          <h3 className="text-2xl font-bold text-pink-300 mb-4">📝 Adicionar Novas Aventuras</h3>
          <p className="text-gray-300 leading-relaxed">
            Para adicionar novas aventuras, edite o arquivo <code className="bg-black/50 px-2 py-1 rounded text-pink-400">data/adventures.ts</code> e adicione novos objetos ao array. 
            Cada aventura pode ter uma estrutura diferente com títulos, subtítulos, textos e quebras de linha conforme necessário.
          </p>
        </div>
      </main>

      {/* Modal de Detalhes */}
      {selectedAdventure && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-pink-900/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedAdventure(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 transition-colors z-10"
            >
              <span className="text-3xl">✕</span>
            </button>

            {/* Imagem de Capa no Topo */}
            {selectedAdventure.image && (
              <div className="w-full h-64 overflow-hidden rounded-t-xl">
                <img
                  src={selectedAdventure.image}
                  alt={selectedAdventure.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Conteúdo do Modal */}
            <div className="p-8">
              {/* Título e Tema */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {selectedAdventure.name}
              </h2>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase bg-pink-700/50 text-pink-200 border border-pink-500/50 mb-6">
                {selectedAdventure.theme}
              </span>

              {/* Resumo */}
              <div className="mb-8 p-6 rounded-lg bg-pink-950/30 border border-pink-900/30">
                <h3 className="text-xl font-bold text-pink-300 mb-3">Resumo</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedAdventure.summary}
                </p>
              </div>

              {/* Conteúdo da Aventura */}
              <div className="space-y-4">
                {selectedAdventure.sections.map((section, index) => {
                  if (section.type === "title") {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-pink-400 mt-6 mb-3">
                        {section.content}
                      </h3>
                    );
                  }

                  if (section.type === "subtitle") {
                    return (
                      <h4 key={index} className="text-xl font-bold text-purple-300 mt-4 mb-2">
                        {section.content}
                      </h4>
                    );
                  }

                  if (section.type === "text") {
                    return (
                      <p key={index} className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    );
                  }

                  if (section.type === "break") {
                    return <div key={index} className="h-4"></div>;
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}