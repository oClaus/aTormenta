"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { music } from "@/data/music";
import { Gear } from "@/types/gear";

// --- Componentes Auxiliares ---

// 2. Componente para a Tabela Filtrável de Equipamentos
const GearFilterableTable = ({ allGear }: { allGear: Gear[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome ou Descrição
    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Barra de Busca */}
      <input
        type="text"
        placeholder="Buscar equipamento por nome ou descrição..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // MODIFICADO: yellow-500/30 -> fuchsia-500/30, amber-500 -> pink-500, ring-amber-500/20 -> ring-pink-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-fuchsia-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-fuchsia-500/30">
        <table className="min-w-full divide-y divide-fuchsia-500/30">
          {/* MODIFICADO: yellow-900/70 -> pink-900/70, yellow-200 -> fuchsia-200 */}
          <thead className="bg-pink-900/70 text-fuchsia-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          {/* MODIFICADO: yellow-500/20 -> fuchsia-500/20 */}
          <tbody className="divide-y divide-fuchsia-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                {/* MODIFICADO: text-yellow-300 -> text-pink-300 */}
                <td className="px-4 py-2 text-sm font-medium text-pink-300">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  {/* MODIFICADO: text-amber-400 -> text-rose-400 */}
                  <div className="mt-1 text-xs text-rose-400">Origem: {item.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-2 text-right text-sm text-gray-300">{item.price}</td>
                <td className="w-20 px-4 pr-4 py-2 text-center text-sm text-gray-300">{item.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50">Nenhum equipamento encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-teal-900/50">
        <Link href="/" className="inline-block group">
          {/* MODIFICADO: yellow-400/orange-300/yellow-500 -> pink-400/fuchsia-300/pink-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-300 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MODIFICADO: text-cyan-400 -> text-indigo-400 */}
          <Link href="/" className="text-indigo-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MODIFICADO: text-cyan-400 -> text-indigo-400 */}
          <Link href="/equipamentos" className="text-indigo-400 hover:text-purple-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Instrumentos Musicais</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MODIFICADO: border-yellow-500/20 -> border-fuchsia-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-fuchsia-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MODIFICADO: yellow-400/amber-400/yellow-400 -> pink-400/fuchsia-400/pink-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-400 mb-4">
            Instrumentos Musicais
          </h1>
        <p>
          Alguns itens da categoria ferramentas são instrumentos musicais. Tais itens são de grande importância para bardos e possuem as regras a seguir:
        </p>
        <p >
          • Você precisa empunhar um instrumento musical com as duas mãos para receber seus benefícios e para usar Músicas de Bardo .
        </p>
        <p >
          • Instrumentos musicais podem ser usados como esotéricos por bardos (permitindo que lance magias usando a mão que empunha o instrumento).
        </p>
        <p >
          • Instrumentos musicais podem receber melhorias de ferramentas (contam como itens ligados a Atuação) e de esotéricos (mas afetam apenas magias
            lançadas por bardos).
        </p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MODIFICADO: text-yellow-300 -> text-pink-300 */}
        <h2 className="text-3xl font-bold text-pink-300 mb-6">Tabela Completa de Instrumento Musicais</h2>
        <GearFilterableTable allGear={music} />
      </section>
    </main>
  );
}