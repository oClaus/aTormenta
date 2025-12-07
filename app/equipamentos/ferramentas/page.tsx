"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tool } from "@/data/tools";
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
        // MODIFICADO: yellow-500/30 -> indigo-500/30, amber-500 -> purple-500, ring-amber-500/20 -> ring-purple-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-indigo-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-purple-500/30">
        {/* MODIFICADO: yellow-500/30 -> indigo-500/30 */}
        <table className="min-w-full divide-y divide-indigo-500/30">
          {/* MODIFICADO: yellow-900/70 -> purple-900/70, yellow-200 -> indigo-200 */}
          <thead className="bg-purple-900/70 text-indigo-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          {/* MODIFICADO: yellow-500/20 -> indigo-500/20 */}
          <tbody className="divide-y divide-indigo-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                {/* MODIFICADO: text-yellow-300 -> text-indigo-300 */}
                <td className="px-4 py-2 text-sm font-medium text-indigo-300">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  {/* MODIFICADO: text-amber-400 -> text-violet-400 */}
                  <div className="mt-1 text-xs text-violet-400">Origem: {item.origin}</div>
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
          {/* MODIFICADO: yellow-400/orange-300/yellow-500 -> indigo-400/purple-300/indigo-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MODIFICADO: text-cyan-400 -> text-violet-400 */}
          <Link href="/" className="text-violet-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MODIFICADO: text-cyan-400 -> text-violet-400 */}
          <Link href="/equipamentos" className="text-violet-400 hover:text-purple-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Ferramentas</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MODIFICADO: border-yellow-500/20 -> border-indigo-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-indigo-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MODIFICADO: yellow-400/amber-400/yellow-400 -> indigo-400/purple-400/indigo-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 mb-4">
            Ferramentas
          </h1>
        <p>
          Itens desta categoria afetam testes de perícia, eliminando penalidades ou fornecendo bônus. A CD para fabricar qualquer ferramenta é 20.
        </p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MODIFICADO: text-yellow-300 -> text-indigo-300 */}
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">Tabela Completa de Equipamentos de Aventura</h2>
        <GearFilterableTable allGear={tool} />
      </section>
    </main>
  );
}