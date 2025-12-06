"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { gear, gearIntroText } from "@/data/gear";
import { Gear } from "@/types/gear";

// --- Componentes Auxiliares ---

// 1. Componente para o Card de Equipamento (Grid)
const GearCard = ({ item }: { item: Gear }) => (
  <div
    className={`group relative rounded-xl overflow-hidden bg-gradient-to-br from-green-950/40 to-black border border-green-500/20 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-left`}
  >
    <h3 className="text-2xl font-bold text-green-300 mb-2 group-hover:text-green-200 transition-colors">
      {item.name}
    </h3>
    <div className="text-xs font-semibold text-gray-400 mb-3">
      Preço: {item.price} • Espaços: {item.spaces}
    </div>
    <p className="text-gray-400 text-sm whitespace-pre-line">
      {item.description}
    </p>
    <div className="mt-4 text-xs text-pink-400">
      Origem: {item.origin}
    </div>
  </div>
);

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
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-green-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
      />

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-green-500/30">
        <table className="min-w-full divide-y divide-green-500/30">
          <thead className="bg-green-900/70 text-green-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Item</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-500/20">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-green-300">
                  {item.name}
                  <div className="text-xs text-gray-500">{item.description}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.price}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.spaces}</td>
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
  // NOVO ESTADO E LÓGICA DE BUSCA PARA O GRID DE CARDS
  const [cardSearchTerm, setCardSearchTerm] = useState("");

  const filteredCards = useMemo(() => {
    const lowerCaseSearch = cardSearchTerm.toLowerCase();
    
    // 1. Ordenação Alfabética
    let sorted = [...gear].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

    // 2. Filtragem por Nome ou Descrição
    if (lowerCaseSearch) {
      sorted = sorted.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return sorted;
  }, [cardSearchTerm]);


  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/equipamentos" className="text-green-400 hover:text-green-300 transition-colors">
          ← Voltar para Equipamentos
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 mb-4">
          🎒 Equipamentos de Aventura
        </h1>
        <p className="text-gray-400 text-lg">
          Itens essenciais para a sobrevivência e sucesso em suas jornadas por Arton.
        </p>
      </div>

      {/* Seção de Texto Introdutório (DIRETO NO COMPONENTE) */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-green-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-3xl font-bold text-green-400 pt-4">Itens Essenciais</h2>
          <p>
            Estes são os itens básicos que todo aventureiro precisa para sobreviver em Arton. Eles variam desde ferramentas simples até suprimentos de emergência.
          </p>

          <h2 className="text-3xl font-bold text-green-400 pt-4">Capacidade de Carga</h2>
          <p>
            Lembre-se que cada item ocupa um certo número de espaços. Gerenciar sua capacidade de carga é crucial para o sucesso de uma aventura.
          </p>
        </div>
      </section>

      {/* Grid de Cards de Equipamentos (Visualização Rápida) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-green-300 mb-6">Visualização Rápida</h2>
        
        {/* Busca para o Grid */}
        <input
          type="text"
          placeholder="Buscar equipamento por nome ou descrição..."
          value={cardSearchTerm}
          onChange={(e) => setCardSearchTerm(e.target.value)}
          className="w-full px-6 py-3 mb-6 rounded-lg bg-gray-800 border border-green-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((item) => (
            <GearCard key={item.id} item={item} />
          ))}
        </div>
        {filteredCards.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50 rounded-xl">Nenhum equipamento encontrado.</div>
        )}
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        <h2 className="text-3xl font-bold text-green-300 mb-6">Tabela Completa de Equipamentos de Aventura</h2>
        <GearFilterableTable allGear={gear} />
      </section>
    </main>
  );
}