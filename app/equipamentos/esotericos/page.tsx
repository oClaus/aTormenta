"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { esoteric } from "@/data/esoterics";
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
        // MUDANÇA: ROSE - foco: rose-500, ring: rose-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-zinc-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      {/* MUDANÇA: ROSE - borda: rose-500/30 */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-rose-500/30">
        <table className="min-w-full divide-y divide-zinc-500/30">
          {/* MUDANÇA: ROSE - cabeçalho: bg-rose-900/70, texto: text-rose-200 */}
          <thead className="bg-rose-900/70 text-rose-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                {/* MUDANÇA: ROSE - nome do item: text-rose-300 */}
                <td className="px-4 py-2 text-sm font-medium text-rose-300">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
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
      {/* MUDANÇA: ROSE - borda do header: rose-900/50 */}
      <header className="p-6 border-b border-rose-900/50">
        <Link href="/" className="inline-block group">
          {/* MUDANÇA: ROSE - Título principal: rose-400/fuchsia-300/rose-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 via-fuchsia-300 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MUDANÇA: ROSE - links: text-rose-400 */}
          <Link href="/" className="text-rose-400 hover:text-fuchsia-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MUDANÇA: ROSE - links: text-rose-400 */}
          <Link href="/equipamentos" className="text-rose-400 hover:text-fuchsia-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Esotéricos</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MUDANÇA: ROSE - borda: rose-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-rose-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MUDANÇA: ROSE - Título da seção: rose-400/fuchsia-400/rose-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-rose-400 mb-4">
            Esotéricos
          </h1>
        <p>
          Itens utilizados por conjuradores para lançar magias de forma mais eficiente. Para usar um esotérico, você precisa empunhá-lo com a mão que usará para gesticular ao lançar a magia. Uma magia só pode receber os benefícios de um esotérico por vez. A CD para fabricar qualquer esotérico é 20 e para fabricá-lo você deve ser treinado em Misticismo.
        </p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MUDANÇA: ROSE - título da tabela: text-rose-300 */}
        <h2 className="text-3xl font-bold text-rose-300 mb-6">Tabela Completa de Esotéricos</h2>
        <GearFilterableTable allGear={esoteric} />
      </section>
    </main>
  );
}