"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { food } from "@/data/food";
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
        // MUDANÇA: orange - foco: orange-500, ring: orange-500/20
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-zinc-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-orange-500/30">
        <table className="min-w-full divide-y divide-zinc-500/30">
          <thead className="bg-orange-900/70 text-orange-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                {/* MUDANÇA: orange - nome do item: text-orange-300 */}
                <td className="px-4 py-2 text-sm font-medium text-orange-300">
                  {item.name}
                  <div className="text-xs text-gray-300 break-words">{item.description}</div>
                  <div className="mt-1 text-xs text-orange-700">Origem: {item.origin}</div>
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
      {/* MUDANÇA: orange - borda do header: orange-900/50 */}
      <header className="p-6 border-b border-orange-900/50">
        <Link href="/" className="inline-block group">
          {/* MUDANÇA: orange - Título principal: orange-400/fuchsia-300/orange-500 */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-700 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          {/* MUDANÇA: orange - links: text-orange-400 */}
          <Link href="/" className="text-orange-400 hover:text-fuchsia-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          {/* MUDANÇA: orange - links: text-orange-400 */}
          <Link href="/equipamentos" className="text-orange-400 hover:text-fuchsia-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Alimentação</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      {/* MUDANÇA: orange - borda: orange-500/20 */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-orange-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MUDANÇA: orange - Título da seção: orange-400/fuchsia-400/orange-400 */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-400 to-orange-400 mb-4">
            Alimentação
          </h1>
        <p>
          Um prato especial deve ser consumido assim que é comprado ou fabricado. O bônus que ele oferece dura um dia, e você só pode receber um bônus de alimentação por dia.
        </p>
        <p>Para fabricar um prato especial, você precisa de 1 hora e deve realizar um teste de Ofício (cozinheiro) contra CD 15. Você pode optar por sofrer uma penalidade de –5 no teste para fabricar até cinco pratos de uma vez (pagando o custo de todos, claro).</p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        {/* MUDANÇA: orange - título da tabela: text-orange-300 */}
        <h2 className="text-3xl font-bold text-orange-300 mb-6">Tabela Completa de Alimentos</h2>
        <GearFilterableTable allGear={food} />
      </section>

       <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-orange-500/20">
      
        <div className="space-y-4 text-white-300 leading-relaxed">
          {/* MUDANÇA: orange - Título da seção: orange-400/fuchsia-400/orange-400 */}
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-400 to-orange-400 mb-4">Mais informações</h1>
          <h1 className="text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-400 to-orange-400 mb-4">Culinária Sckharjagar</h1>
          <p>As receitas dos pratos com "Culinária Sckharjagar" são conhecidas apenas em Sckharshantallas.</p>
          <p>Dizem até que ensinar um estrangeiro a cozinhá-las seria um crime! Isso não passa de boato, mas incentiva muitos cozinheiros a guardarem suas receitas com todas as forças. Um personagem treinado em Ofício (cozinheiro) pode aprender a fabricar esses pratos ouvindo as instruções, lendo uma receita ou observando sua preparação.</p>

        </div>
      </section>
    </main>
  );
}