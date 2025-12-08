"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { services } from "@/data/services";
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
        // MUDANÇA: fuchsia - foco: fuchsia-500, ring: fuchsia-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-zinc-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-fuchsia-500/30">
        <table className="min-w-full divide-y divide-zinc-500/30">
          <thead className="bg-fuchsia-900/70 text-fuchsia-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 text-sm font-medium text-fuchsia-100">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  <div className="mt-1 text-xs text-fuchsia-400">{item.origin}</div>
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
      {/* MUDANÇA: fuchsia - borda do header: fuchsia-900/50 */}
      <header className="p-6 border-b border-fuchsia-900/50">
        <Link href="/" className="inline-block group">
          {/* MUDANÇA: fuchsia - Título principal: fuchsia-400/fuchsia-300/fuchsia-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 via-stone-300 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MUDANÇA: fuchsia - links: text-fuchsia-400 */}
          <Link href="/" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MUDANÇA: fuchsia - links: text-fuchsia-400 */}
          <Link href="/equipamentos" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Serviços</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MUDANÇA: fuchsia - borda: fuchsia-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-fuchsia-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MUDANÇA: fuchsia - Título da seção: fuchsia-400/fuchsia-400/fuchsia-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-stone-700 to-fuchsia-300 mb-4">
            Serviços
          </h1>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MUDANÇA: fuchsia - título da tabela: text-fuchsia-300 */}
        <h2 className="text-3xl font-bold text-fuchsia-200 mb-6">Tabela Completa de Serviços</h2>
        <GearFilterableTable allGear={services} />
      </section>
    </main>
  );
}