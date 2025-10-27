"use client";

import { useState } from "react";
import Link from "next/link";
import { origins } from "@/data/origins";
import { formatOrigin } from "@/types/power";

export default function OrigemPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrigins = origins
    .filter(
      (origin) =>
        origin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.source.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          ← Voltar ao Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          🌍 Origem
        </h1>
        <p className="text-gray-400 text-lg">
          Escolha sua origem e descubra o que o torna único. Cada origem oferece benefícios especiais, itens únicos e um poder extraordinário que define seu destino.
        </p>
      </div>

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou fonte..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
      </div>

      {/* Grid de Origens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredOrigins.map((origin) => (
          <div
            key={origin.id}
            className="rounded-lg bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col"
          >
            {/* Nome da Origem */}
            <h3 className="text-xl font-bold text-cyan-300 mb-3">
              {origin.name}
            </h3>

            {/* Descrição */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
              {origin.description}
            </p>

            {/* Itens */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">Itens:</p>
              <div className="flex flex-wrap gap-2">
                {origin.items.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/30 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">Benefícios:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                {origin.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Poder Único */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">
                {origin.uniquePower.name}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {origin.uniquePower.description}
              </p>
            </div>

            {/* Fonte */}
            <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                {formatOrigin(origin.source)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredOrigins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhuma origem encontrada.</p>
        </div>
      )}
    </main>
  );
}