"use client";

import Link from "next/link";
import { useState } from "react";
import { GameClass } from "@/types/class";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<GameClass | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClasses = classes
    .filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.origin.toLowerCase().includes(searchTerm.toLowerCase())
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
          <span className="text-gray-400 text-sm">Classes</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-400 mb-2">🧙 Classes</h2>
          <p className="text-gray-400">Escolha sua classe e domine suas habilidades únicas</p>
        </div>

        {/* Texto Introdutório com Regras */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-orange-950/30 to-black border border-orange-900/30">
          <h3 className="text-xl font-bold text-orange-300 mb-3">📖 Sobre as Classes</h3>
          <p className="text-gray-300 leading-relaxed">
            As classes definem o papel do seu personagem no mundo de Tormenta. Cada classe possui suas próprias habilidades, 
            características e perícias. Escolha a classe que melhor se adequa ao seu estilo de jogo e ao conceito do seu personagem. 
            Você pode aprender mais sobre cada classe clicando no card correspondente abaixo.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-purple-300 mb-2">
            Buscar Classe
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Grid de Classes - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] cursor-pointer"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-48 bg-gradient-to-b from-orange-900/50 to-black overflow-hidden">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧙</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors mb-2">
                  {cls.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase bg-orange-700/50 text-orange-200 border border-orange-500/50">
                  {cls.origin}
                </span>

                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma classe encontrada</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-orange-900/50 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="text-2xl">✕</span>
            </button>

            {/* Imagem de Capa no Topo */}
            {selectedClass.image && (
              <div className="w-full bg-black rounded-t-xl overflow-hidden flex items-center justify-center">
                <img
                  src={selectedClass.image}
                  alt={selectedClass.name}
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
            )}

            {/* Conteúdo do Modal */}
            <div className="p-8">
              {/* Título e Origem */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                {selectedClass.name}
              </h2>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase bg-orange-700/50 text-orange-200 border border-orange-500/50 mb-6">
                {selectedClass.origin}
              </span>

              {/* Descrição */}
              <div className="mb-8 p-6 rounded-lg bg-orange-950/30 border border-orange-900/30">
                <h3 className="text-xl font-bold text-orange-300 mb-3">Descrição</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedClass.description}
                </p>
              </div>

              {/* Famosos (se houver) */}
              {selectedClass.famousExamples && selectedClass.famousExamples.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🌟 {selectedClass.name}s Famosos</h3>
                <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                <p className="text-gray-300">
                    {selectedClass.famousExamples.join(", ")}
                </p>
                </div>
              </div>
              )}

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">⚔️ Características</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Vida (Base)</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pvBase}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Vida (Por Nível)</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pvPerLevel}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Mana</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pmPerLevel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Perícias */}
            <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">🎯 Perícias</h3>
            
            {/* Perícias Obrigatórias */}
            <div className="mb-6">
                <p className="text-gray-300 mb-3">
                <span className="font-semibold text-orange-300">
                    {selectedClass.skills.mandatory.description}:
                </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {selectedClass.skills.mandatory.skills.map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-orange-950/30 border border-orange-900/50">
                    <p className="text-gray-300 font-semibold text-orange-300">{skill}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Perícias Opcionais */}
            <div>
                <p className="text-gray-300 mb-3">
                <span className="font-semibold text-orange-300">
                    {selectedClass.skills.optional.description}:
                </span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedClass.skills.optional.skills.map((skill, index) => (
                    <div key={index} className="p-3 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-300">{skill}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>

              {/* Proficiência */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🛡️ Proficiência</h3>
                <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                  <p className="text-gray-300">{selectedClass.proficiency}</p>
                </div>
              </div>

              {/* Habilidades */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">✨ Habilidades da Classe</h3>
                <div className="space-y-4">
                  {selectedClass.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30"
                    >
                      <h4 className="text-orange-300 font-bold mb-2">{ability.name}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras (se houver) */}
              {selectedClass.extras && selectedClass.extras.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">⭐ Extras</h3>
                  <div className="space-y-4">
                    {selectedClass.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-yellow-950/20 border border-yellow-900/30"
                      >
                        <h4 className="text-yellow-300 font-bold mb-3">{extra.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {extra.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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