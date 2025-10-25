"use client";

import Link from "next/link";
import { useState } from "react";
import { Food } from "@/types/food";
import { foods } from "@/data/foods";

export default function ComidasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRarity, setSelectedRarity] = useState<string>("todas");

  const rarityColors = {
    comum: "border-gray-500 bg-gray-900/30",
    incomum: "border-green-500 bg-green-900/20",
    raro: "border-blue-500 bg-blue-900/20",
    lendário: "border-purple-500 bg-purple-900/20",
    "final-fantasy": "border-sky-400 bg-sky-900/20",
    monstruosa: "border-amber-800 bg-amber-900/30"
  };

  const rarityGlow = {
    comum: "group-hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]",
    incomum: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    raro: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    lendário: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    "final-fantasy": "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]",
    monstruosa: "group-hover:shadow-[0_0_20px_rgba(146,64,14,0.5)]"
  };

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === "todas" || food.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

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
          <span className="text-gray-400 text-sm">Comidas</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 py-12">
        {/* Título e Descrição */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            🍖 Comidas & Bebidas
          </h2>
          <p className="text-gray-400 text-lg">
            Descubra os alimentos e bebidas disponíveis em Arton, desde simples pães até iguarias lendárias.
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Busca */}
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Buscar
              </label>
              <input
                type="text"
                placeholder="Digite o nome ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            {/* Filtro de Raridade */}
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                Raridade
              </label>
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              >
                <option value="todas">Todas</option>
                <option value="comum">Comum</option>
                <option value="incomum">Incomum</option>
                <option value="raro">Raro</option>
                <option value="lendário">Lendário</option>
                <option value="final-fantasy">Final Fantasy</option>
                <option value="monstruosa">Monstruosa</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Comidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className={`group relative overflow-hidden rounded-xl border-2 ${rarityColors[food.rarity]} ${rarityGlow[food.rarity]} transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="p-6">
                {/* Cabeçalho do Card */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {food.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                    food.rarity === "comum" ? "bg-gray-700 text-gray-200" :
                    food.rarity === "incomum" ? "bg-green-700 text-green-200" :
                    food.rarity === "raro" ? "bg-blue-700 text-blue-200" :
                    food.rarity === "lendário" ? "bg-purple-700 text-purple-200" :
                    food.rarity === "final-fantasy" ? "bg-sky-700 text-sky-100" :
                    food.rarity === "monstruosa" ? "bg-amber-800 text-amber-200" :
                    "bg-gray-700 text-gray-200"
                  }`}>
                    {food.rarity}
                  </span>
                </div>

                {/* Descrição */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {food.description}
                </p>

                {/* CD (Classe de Dificuldade) */}
                {food.cd && (
                  <div className="mb-4 p-3 bg-black/30 rounded-lg border border-pink-900/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-pink-300 font-semibold">CLASSE DE DIFICULDADE</span>
                      <span className="text-2xl font-bold text-pink-400">{food.cd}</span>
                    </div>
                  </div>
                )}

                {/* Efeitos */}
                {food.effects && (
                  <div className="mb-4 p-3 bg-black/30 rounded-lg border border-purple-900/30">
                    <p className="text-xs text-purple-300 font-semibold mb-1">EFEITOS</p>
                    <p className="text-sm text-gray-200">{food.effects}</p>
                  </div>
                )}

                {/* Preço */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-400">Preço</span>
                  <span className="text-lg font-bold text-pink-400">{food.price}</span>
                </div>
              </div>

              {/* Efeito de brilho neon no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredFoods.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nenhuma comida encontrada com os filtros selecionados.</p>
          </div>
        )}

        {/* Seção para adicionar novas comidas */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-pink-900/30">
          <h3 className="text-2xl font-bold text-pink-300 mb-4">📝 Adicionar Novas Comidas</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para adicionar novas comidas, edite o arquivo 
            <code className="mx-1 px-2 py-1 bg-black/50 rounded text-purple-400 text-sm">data/foods.ts</code>
            e adicione novos objetos ao array.
          </p>
          <p className="text-gray-400 text-sm">
            Basta adicionar novos objetos com as propriedades: id, name, description, price, cd, rarity e effects.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}

