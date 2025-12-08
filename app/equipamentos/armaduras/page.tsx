"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { armors, } from "@/data/armors";
import { Armor, ArmorType } from "@/types/armors";

// --- Componentes Auxiliares ---

// 1. Componente ArmorCard REMOVIDO

// 2. Componente para a Tabela Filtrável de Armaduras e Escudos (REVISADO PARA MOBILE)
const ArmorFilterableTable = ({ allArmors }: { allArmors: Armor[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as ArmorType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: ArmorType) => { 
    setFilters(prev => {
      const current = prev[key]; 
      
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) as ArmorType[] };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const filteredArmors = useMemo(() => {
    let filtered = allArmors;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome, Descrição e Origem (CORRIGIDO)
    if (lowerCaseSearch) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) || // <- ADICIONADO
        a.origin.toLowerCase().includes(lowerCaseSearch) // <- ADICIONADO
      );
    }

    // 2. Filtrar por Tipo (Leve, Pesada, Escudo)
    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    // Ordenação: Armaduras Leves, Pesadas, Escudos, e depois alfabética
    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allArmors, searchTerm, filters]);

  const allTypes: ArmorType[] = ["Leve", "Pesada", "Escudo"];
  // Total de colunas na tabela é 5
  const totalColumns = 5; 

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
      {/* Barra de Busca (Placeholder Atualizado) */}
      <input
        type="text"
        placeholder="Buscar armadura, escudo por nome, descrição ou origem..."
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
        {/* Adiciona table-fixed para controlar melhor as larguras */}
        <table className="min-w-full divide-y divide-blue-500/30 table-fixed">
          <thead className="bg-blue-900/70 text-blue-200">
            <tr>
              {/* Ajuste as larguras percentuais para a tabela fixa */}
              <th scope="col" className="w-[20%] px-3 py-3 text-left text-xs font-medium uppercase tracking-wider">Armadura / Escudo</th>
              <th scope="col" className="w-[10%] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="w-[15%] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">Bônus Defesa</th>
              <th scope="col" className="w-[15%] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">Penalidade</th>
              <th scope="col" className="w-[10%] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-500/20">
            {filteredArmors.map((armor, index) => (
              <React.Fragment key={armor.id}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                  
                  {/* Nome e Tipo (Alinhado à esquerda) */}
                  <td className="px-3 py-2 text-sm font-medium text-blue-300 align-top">
                    <div className="font-bold">{armor.name}</div>
                    <div className="text-xs text-blue-700">{armor.type}</div>
                  </td>
                  
                  {/* Outras Células (Centralizadas e Alinhadas ao Meio) */}
                  <td className="px-3 py-2 text-sm text-gray-300 text-center align-middle">{armor.price}</td>
                  <td className="px-3 py-2 text-sm text-gray-300 text-center align-middle">+{armor.defenseBonus}</td>
                  <td className="px-3 py-2 text-sm text-gray-300 text-center align-middle">{armor.armorPenalty}</td>
                  <td className="px-3 py-2 text-sm text-gray-300 text-center align-middle">{armor.spaces}</td>
                </tr>

                {/* LINHA 2: Descrição e Origem (Expandida) */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                    <td colSpan={totalColumns} className="px-3 py-2 text-sm align-top border-t border-blue-500/10">
                        {/* Descrição */}
                        <p className="text-gray-300 text-xs whitespace-pre-line mb-1">
                          {armor.description}
                        </p>
                        {/* Origem */}
                        <div className="text-xs text-teal-400">
                          Origem: {armor.origin}
                        </div>
                    </td>
                </tr>
              </React.Fragment>
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
  // Lógica de busca para o Grid REMOVIDA
  // const [cardSearchTerm, setCardSearchTerm] = useState("");
  // const filteredCards = useMemo(() => { ... }, [cardSearchTerm]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
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
          <span className="text-gray-400 text-sm">Armaduras</span>
        </div>
      </header>

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-blue-500/20">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mb-4">
          Armaduras & Escudos
        </h1>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          {/* Armaduras */}
          <h2 className="text-3xl font-bold text-blue-400 pt-4">Armaduras</h2>
          <p>
            Armaduras são classificadas em <strong>leves e pesadas</strong>, de acordo com a sua facilidade de uso e mobilidade.
          </p>

          {/* Armaduras Leves */}
          <h3 className="text-1xl font-bold text-blue-300 pt-2">Armaduras Leves</h3>
          <p>
            Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma <strong>ação completa</strong>.
          </p>

          {/* Armaduras Pesadas */}
          <h3 className="text-1xl font-bold text-blue-300 pt-2">Armaduras Pesadas</h3>
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

      {/* Grid de Cards de Armaduras (Visualização Rápida) - REMOVIDO */}

      {/* Tabela Completa e Filtrável */}
      <section>
        <h2 className="text-3xl font-bold text-blue-300 mb-6">Tabela Completa de Armaduras & Escudos</h2>
        <ArmorFilterableTable allArmors={armors} />
      </section>
    </main>
  );
}