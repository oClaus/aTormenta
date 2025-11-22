"use client";

import { useState } from "react";
import Link from "next/link";
import { powerCategories } from "@/data/power-categories";
import { formatOrigin } from "@/types/power";

export default function PodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = powerCategories
    .filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Poderes</span>
        </div>
      </header>


      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          ⚡ Poderes
        </h1>
        <p className="text-gray-400 text-lg">
          Explore poderes e habilidades especiais para suas classes. Cada categoria oferece poderes únicos que melhoram suas capacidades em combate.
        </p>
        
        <h3 className="text-xl font-semibold text-purple-400 mb-2">
          Escolhendo Poderes Gerais
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          Poderes gerais podem ser escolhidos por qualquer personagem, independentemente de sua classe. Eles seguem todas as regras de habilidades. Poderes gerais fornecem mais opções, ao custo de um pouco de complexidade. Usá-los ou não é uma decisão de cada jogador. Algumas raças e origens fornecem poderes gerais. Além disso, sempre que você recebe um poder de classe, pode trocá-lo por um poder geral.
        </p>

        <h3 className="text-xl font-semibold text-purple-400 mb-2">
          Grupos de Poderes
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
          <li>
            <span className="font-semibold text-purple-300">Combate:</span> Poderes que melhoram características relacionadas a combate.
          </li>
          <li>
            <span className="font-semibold text-purple-300">Destino:</span> Poderes que melhoram características não relacionadas a combate.
          </li>
          <li>
            <span className="font-semibold text-purple-300">Magia:</span> Poderes ligados a magias e itens mágicos.
          </li>
          <li>
            <span className="font-semibold text-purple-300">Concedidos:</span> Poderes recebidos por devotos.
          </li>
          <li>
            <span className="font-semibold text-purple-300">Tormenta:</span> Poderes ligados à tempestade rubra.
          </li>
        </ul>
      </div>

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou origem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            href={`/poderes/${category.slug}`}
            className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-950/40 to-black border border-purple-500/20 p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300">
                  {formatOrigin(category.origin)}
                </span>
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhuma categoria encontrada.</p>
        </div>
      )}
    </main>
  );
}