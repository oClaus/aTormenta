"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { clothing } from "@/data/clothing";
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
        // MODIFICADO: zinc-500/30 (base), slate-500 (foco) -> teal-500 (borda/foco), ring-teal-500/20 (ring)
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-zinc-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      {/* MODIFICADO: border-slate-500/30 -> border-teal-500/30 */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-teal-500/30">
        {/* MODIFICADO: divide-zinc-500/30 -> divide-zinc-500/30 (mantido o zinc para as linhas internas) */}
        <table className="min-w-full divide-y divide-zinc-500/30">
          {/* MODIFICADO: bg-slate-900/70 -> bg-teal-900/70, text-zinc-200 -> text-teal-200 */}
          <thead className="bg-teal-900/70 text-teal-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          {/* MODIFICADO: divide-zinc-500/20 -> divide-zinc-500/20 */}
          <tbody className="divide-y divide-zinc-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                {/* MODIFICADO: text-zinc-300 -> text-teal-300 */}
                <td className="px-4 py-2 text-sm font-medium text-teal-300">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  {/* MODIFICADO: text-slate-400 -> text-zinc-400 (Origem mais discreta) */}
                  <div className="mt-1 text-xs text-zinc-400">Origem: {item.origin}</div>
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
      {/* MODIFICADO: border-teal-900/50 (Mantido) */}
      <header className="p-6 border-b border-teal-900/50">
        <Link href="/" className="inline-block group">
          {/* MODIFICADO: zinc-400/slate-300/zinc-500 -> teal-400/cyan-300/teal-500 (Destaque principal) */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MODIFICADO: text-zinc-400 -> text-teal-400 */}
          <Link href="/" className="text-teal-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MODIFICADO: text-zinc-400 -> text-teal-400 */}
          <Link href="/equipamentos" className="text-teal-400 hover:text-purple-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Vestuário</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MODIFICADO: border-zinc-500/20 -> border-teal-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-teal-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MODIFICADO: zinc-400/slate-400/zinc-400 -> teal-400/cyan-400/teal-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mb-4">
            Vestuário
          </h1>
        <p>
          Todos os itens desta seção precisam ser vestidos para fornecerem seus benefícios. A CD para fabricar qualquer vestuário é 20.
        </p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MODIFICADO: text-zinc-300 -> text-teal-300 */}
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Tabela Completa de Vestuário</h2>
        <GearFilterableTable allGear={clothing} />
      </section>
    </main>
  );
}