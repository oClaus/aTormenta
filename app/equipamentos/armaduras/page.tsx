"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { armors, armorIntroText } from "@/data/armors";
import { Armor, ArmorType } from "@/types/armors";

// --- Componentes Auxiliares ---

// 1. Componente para o Card de Armadura/Escudo (Grid)
const ArmorCard = ({ armor }: { armor: Armor }) => (
  <div
    className={`group relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-950/40 to-black border border-blue-500/20 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-left`}
  >
    <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
      {armor.name}
    </h3>
    <div className="text-xs font-semibold text-gray-400 mb-3">
      <span className="text-blue-400">{armor.type}</span> • Defesa: +{armor.defenseBonus} • Penalidade: {armor.armorPenalty}
    </div>
    <p className="text-gray-400 text-sm whitespace-pre-line">
      {armor.description}
    </p>
    <div className="mt-4 text-xs text-pink-400">
      Origem: {armor.origin}
    </div>
  </div>
);

// 2. Componente para a Tabela Filtrável de Armaduras e Escudos
const ArmorFilterableTable = ({ allArmors }: { allArmors: Armor[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as ArmorType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: ArmorType) => { 
  setFilters(prev => {
    // A tipagem já é conhecida como ArmorType[]
    const current = prev[key]; 
    
    if (current.includes(value)) {
      // Retorna ArmorType[]
      return { ...prev, [key]: current.filter(v => v !== value) as ArmorType[] };
    } else {
      // Retorna ArmorType[]
      return { ...prev, [key]: [...current, value] };
    }
  });
};

  const filteredArmors = useMemo(() => {
    let filtered = allArmors;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome
    if (lowerCaseSearch) {
      filtered = filtered.filter(a => a.name.toLowerCase().includes(lowerCaseSearch));
    }

    // 2. Filtrar por Tipo (Leve, Pesada, Escudo)
    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    // Ordenação: Armaduras Leves, Pesadas, Escudos, e depois alfabética
    return filtered.sort((a, b) => {
      const order = { "Leve": 1, "Pesada": 2, "Escudo": 3 };
      if (order[a.type] !== order[b.type]) {
        return order[a.type] - order[b.type];
      }
      return a.name.localeCompare(b.name, "pt-BR");
    });
  }, [allArmors, searchTerm, filters]);

  const allTypes: ArmorType[] = ["Leve", "Pesada", "Escudo"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-500/20">
      <h4 className="text-sm font-bold text-blue-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as ArmorType)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              (filters[key] as string[]).includes(option)
                ? "bg-blue-600 text-white shadow-md"
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
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-blue-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
      />

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Armaduras */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-blue-500/30">
        <table className="min-w-full divide-y divide-blue-500/30">
          <thead className="bg-blue-900/70 text-blue-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Armaduras e Escudos</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Bônus na Defesa</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Penalidade de Armadura</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-500/20">
            {filteredArmors.map((armor, index) => (
              <tr key={armor.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-blue-300">
                  {armor.name}
                  <div className="text-xs text-gray-500">{armor.type}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{armor.price}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">+{armor.defenseBonus}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{armor.armorPenalty}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{armor.spaces}</td>
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
    let sorted = [...armors].sort((a, b) => {
      const order = { "Leve": 1, "Pesada": 2, "Escudo": 3 };
      if (order[a.type] !== order[b.type]) {
        return order[a.type] - order[b.type];
      }
      return a.name.localeCompare(b.name, "pt-BR");
    });

    // 2. Filtragem por Nome ou Descrição
    if (lowerCaseSearch) {
      sorted = sorted.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return sorted;
  }, [cardSearchTerm]);


  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/equipamentos" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Voltar para Equipamentos
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mb-4">
          🛡️ Armaduras & Escudos
        </h1>
        <p className="text-gray-400 text-lg">
          Detalhes sobre proteção, penalidades e características de todas as armaduras e escudos.
        </p>
      </div>

      {/* Seção de Texto Introdutório (DIRETO NO COMPONENTE) */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-blue-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          {/* Armaduras */}
          <h2 className="text-3xl font-bold text-blue-400 pt-4">Armaduras</h2>
          <p>
            Armaduras são classificadas em <strong>leves e pesadas</strong>, de acordo com a sua facilidade de uso e mobilidade.
          </p>

          {/* Armaduras Leves */}
          <h3 className="text-2xl font-bold text-blue-300 pt-2">Armaduras Leves</h3>
          <p>
            Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma <strong>ação completa</strong>.
          </p>

          {/* Armaduras Pesadas */}
          <h3 className="text-2xl font-bold text-blue-300 pt-2">Armaduras Pesadas</h3>
          <p>
            Feitas de cota de malha ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, <strong>você não aplica sua Destreza na Defesa</strong> e tem seu <strong>deslocamento reduzido em 3m</strong>. Vestir ou remover uma armadura pesada <strong>demora cinco minutos</strong>. <strong>Dormir de armadura pesada deixa você fatigado pelo dia</strong>.
          </p>

          {/* Escudos */}
          <h2 className="text-3xl font-bold text-blue-400 pt-4">Escudos</h2>
          <p>
            Existem escudos <strong>leves</strong> e <strong>pesados</strong>. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma <strong>ação de movimento</strong>.
          </p>

          {/* Ataque com Escudo */}
          <h3 className="text-2xl font-bold text-blue-300 pt-2">Ataque com Escudo</h3>
          <p>
            Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas <strong>perde seu bônus na Defesa até seu próximo turno</strong> se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos <strong>não contam como armas</strong>.
          </p>

          {/* Penalidade por Não Proficiência */}
          <h3 className="text-2xl font-bold text-blue-300 pt-2">Penalidade por Não Proficiência</h3>
          <p>
            Um personagem vestindo uma armadura ou empunhando escudo que não saiba usar aplica a <strong>penalidade da armadura em todas as perícias baseadas em Força e Destreza</strong>.
          </p>

          {/* Características */}
          <h2 className="text-3xl font-bold text-blue-400 pt-4">Características das Armaduras e Escudos</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Preço.</strong> Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.
            </li>
            <li>
              <strong>Bônus na Defesa.</strong> Cada armadura fornece um bônus na Defesa do usuário. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas <strong>não dois escudos</strong>.
            </li>
            <li>
              <strong>Penalidade de Armadura.</strong> Aplique a penalidade de armadura em testes de <strong>Acrobacia, Furtividade e Ladinagem</strong> (e em testes de <strong>Atletismo para natação</strong>). Penalidades de armaduras e escudos se acumulam.
            </li>
            <li>
              <strong>Espaço.</strong> Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.
            </li>
          </ul>
        </div>
      </section>

      {/* Grid de Cards de Armaduras (Visualização Rápida) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Visualização Rápida</h2>
        
        {/* Busca para o Grid */}
        <input
          type="text"
          placeholder="Buscar armadura ou escudo por nome..."
          value={cardSearchTerm}
          onChange={(e) => setCardSearchTerm(e.target.value)}
          className="w-full px-6 py-3 mb-6 rounded-lg bg-gray-800 border border-blue-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((armor) => (
            <ArmorCard key={armor.id} armor={armor} />
          ))}
        </div>
        {filteredCards.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50 rounded-xl">Nenhuma armadura ou escudo encontrado.</div>
        )}
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Tabela Completa de Armaduras & Escudos</h2>
        <ArmorFilterableTable allArmors={armors} />
      </section>
    </main>
  );
}