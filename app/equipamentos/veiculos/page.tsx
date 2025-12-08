"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
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
        // MUDANÇA: lime - foco: lime-500, ring: lime-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-zinc-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-lime-500/30">
        <table className="min-w-full divide-y divide-zinc-500/30">
          <thead className="bg-lime-900/70 text-lime-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 text-sm font-medium text-lime-100">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  <div className="mt-1 text-xs text-lime-400">{item.origin}</div>
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
      {/* MUDANÇA: lime - borda do header: lime-900/50 */}
      <header className="p-6 border-b border-lime-900/50">
        <Link href="/" className="inline-block group">
          {/* MUDANÇA: lime - Título principal: lime-400/fuchsia-300/lime-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-lime-400 via-stone-300 to-lime-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MUDANÇA: lime - links: text-lime-400 */}
          <Link href="/" className="text-lime-400 hover:text-fuchsia-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MUDANÇA: lime - links: text-lime-400 */}
          <Link href="/equipamentos" className="text-lime-400 hover:text-fuchsia-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Veículos</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MUDANÇA: lime - borda: lime-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-lime-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MUDANÇA: lime - Título da seção: lime-400/fuchsia-400/lime-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-200 via-stone-700 to-lime-300 mb-4">
            Veículos
          </h1>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MUDANÇA: lime - título da tabela: text-lime-300 */}
        <h2 className="text-3xl font-bold text-lime-200 mb-6">Tabela Completa de Veículos</h2>
        <GearFilterableTable allGear={vehicles} />
      </section>
    </main>
  );
}