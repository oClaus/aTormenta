"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { alchemy, } from "@/data/alchemys";
import { Alchemy, AlchemyType } from "@/types/alchemy";


// 2. Componente para a Tabela Filtrável de Armaduras e Escudos
const AlchemyFilterableTable = ({ allAlchemys }: { allAlchemys: Alchemy[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as AlchemyType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: AlchemyType) => { 
  setFilters(prev => {
    const current = prev[key]; 
    
    if (current.includes(value)) {
      return { ...prev, [key]: current.filter(v => v !== value) as AlchemyType[] };
    } else {
      return { ...prev, [key]: [...current, value] };
    }
  });
};

  const filteredArmors = useMemo(() => {
    let filtered = allAlchemys;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(a => a.name.toLowerCase().includes(lowerCaseSearch));
    }

    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allAlchemys, searchTerm, filters]);

  const allTypes: AlchemyType[] = ["Preparados", "Catalisadores", "Venenos"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-gray-900/50 rounded-lg border border-green-500/20">
      <h4 className="text-sm font-bold text-green-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as AlchemyType)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              (filters[key] as string[]).includes(option)
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Barra de Busca */}
      <input
        type="text"
        placeholder="Buscar armadura ou escudo por nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-green-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
      />

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Alquimicos */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-green-500/30">
        <table className="min-w-full divide-y divide-green-500/30">
          <thead className="bg-green-900/70 text-green-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Alquímicos</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-500/20">
            {filteredArmors.map((alchemy, index) => (
              <tr key={alchemy.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 text-sm font-medium text-green-300">
                  {alchemy.name}
                  <div className="text-xs text-gray-300 break-words">{alchemy.description}</div>
                  <div className="mt-1 text-xs text-gray-500">{alchemy.type}</div>
                  <div className="mt-1 text-xs text-zinc-400">Origem: {alchemy.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-2 text-right text-sm text-gray-300">{alchemy.price}</td>
                <td className="w-20 px-4 pr-4 py-2 text-center text-sm text-gray-300">{alchemy.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredArmors.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50">Nenhuma armadura ou escudo encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  // NOVO ESTADO E LÓGICA DE BUSCA PARA O GRID DE CARDS
  const [cardSearchTerm, setCardSearchTerm] = useState("");

  const filteredCards = useMemo(() => {
    const lowerCaseSearch = cardSearchTerm.toLowerCase();
    
    // 1. Ordenação: Armaduras Leves, Pesadas, Escudos, e depois alfabética
    let sorted = [...alchemy].sort((a, b) => 
    a.name.localeCompare(b.name, "pt-BR")
    );

    // 2. Filtragem por Nome ou Descrição
    if (lowerCaseSearch) {
      sorted = sorted.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return sorted;
  }, [cardSearchTerm]);


  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-teal-300 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/equipamentos" className="text-cyan-400 hover:text-purple-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Alquímicos</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-green-500/20">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mb-4">
          Alquímicos
        </h1>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>Inclui preparados, catalisadores e venenos.</p>

          <h3 className="text-1xl font-bold text-green-300 pt-2">Preparados</h3>
          <p>Itens de uso único que geram efeitos variados quando usados. A CD para fabricar qualquer preparado é 15.</p>

          <h3 className="text-1xl font-bold text-green-300 pt-2">Catalisadores</h3>
          <p>Substâncias preparadas através de processos alquímicos, catalisadores são itens de uso único que melhoram o efeito de uma magia quando ela é lançada. Você precisa estar empunhando um catalisador para usá-lo e só pode usar um catalisador por vez. Reduções de custo de catalisadores acumulam com outras reduções de custo. Catalisadores que aumentam o dano só funcionam em magias que já causem dano. </p>
          <p>A CD para fabricar qualquer catalisador é 15 e para fabricá-lo você deve ser treinado em Misticismo.</p>

          <h3 className="text-1xl font-bold text-green-300 pt-2">Venenos</h3>
          <p>Substâncias naturais ou preparadas perigosas para seres vivos. Exceto se indicado o contrário, a CD para fabricar qualquer veneno é 20.</p>

          
        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        <h2 className="text-3xl font-bold text-green-300 mb-6">Tabela Completa de Alquímicos</h2>
        <AlchemyFilterableTable allAlchemys={alchemy} />
      </section>
    </main>
  );
}