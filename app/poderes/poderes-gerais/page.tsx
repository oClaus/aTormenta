"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGerais } from "@/data/powers-gerais"; // <-- 1. Mudar para powersGerais
import { formatOrigin } from "@/types/power";

// 2. Mudar nome da função
export default function GeraisPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Usar powersGerais
  const filteredPowers = powersGerais 
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/poderes" className="text-purple-400 hover:text-purple-300 transition-colors">
          ← Voltar aos Poderes
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        {/* 3. Mudar o Título da Página */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          ⚡ Poderes Gerais
        </h1>
        <p className="text-gray-400 text-lg">
          Poderes disponíveis para todas as classes, oferecendo melhorias gerais de combate e defesa.
        </p>
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

      {/* Grid de Poderes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {/* ... (o resto do código permanece o mesmo) ... */}
      </div>

      {filteredPowers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum poder encontrado.</p>
        </div>
      )}
    </main>
  );
}
