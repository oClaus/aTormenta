"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { armors, } from "@/data/armors";
import { Armor, ArmorType } from "@/types/armors";

// --- Componentes Auxiliares ---

// 1. Componente ArmorCard REMOVIDO

// 2. Componente para a Tabela Filtrável de Armaduras e Escudos (NO ESTILO STONE/AMBER)
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

    // 1. Filtrar por Nome, Descrição e Origem
    if (lowerCaseSearch) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 2. Filtrar por Tipo (Leve, Pesada, Escudo)
    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    // Ordenação
    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allArmors, searchTerm, filters]);

  const allTypes: ArmorType[] = ["Leve", "Pesada", "Escudo"];
  const totalColumns = 5; 

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-stone-900 rounded border border-stone-800">
      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as ArmorType)}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-white border-red-900 shadow-inner"
                : "bg-stone-950 text-stone-400 border-stone-800 hover:border-amber-700 hover:text-amber-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 w-full">
      {/* Barra de Busca */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar armadura, escudo por nome, descrição ou origem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Armaduras */}
      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800 table-fixed">
          <thead className="bg-stone-900 text-amber-700">
            <tr>
              <th scope="col" className="w-[20%] px-3 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Armadura / Escudo</th>
              <th scope="col" className="w-[10%] px-3 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-stone-800">Preço</th>
              <th scope="col" className="w-[15%] px-3 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-stone-800">Bônus Defesa</th>
              <th scope="col" className="w-[15%] px-3 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-stone-800">Penalidade</th>
              <th scope="col" className="w-[10%] px-3 py-3 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredArmors.map((armor, index) => (
              <React.Fragment key={armor.id}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                  
                  {/* Nome e Tipo */}
                  <td className="px-3 py-3 text-sm font-medium text-stone-200 align-top border-r border-stone-800/50">
                    <div className="font-bold text-amber-600 font-serif text-lg">{armor.name}</div>
                    <div className="text-xs text-stone-500 mt-1 uppercase tracking-wide font-bold">{armor.type}</div>
                  </td>
                  
                  {/* Outras Células */}
                  <td className="px-3 py-3 text-sm text-stone-300 text-center align-middle border-r border-stone-800/50 font-serif">{armor.price}</td>
                  <td className="px-3 py-3 text-sm text-stone-300 text-center align-middle border-r border-stone-800/50 font-serif">+{armor.defenseBonus}</td>
                  <td className="px-3 py-3 text-sm text-stone-300 text-center align-middle border-r border-stone-800/50 font-serif">{armor.armorPenalty}</td>
                  <td className="px-3 py-3 text-sm text-stone-300 text-center align-middle font-serif">{armor.spaces}</td>
                </tr>

                {/* LINHA 2: Descrição e Origem */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                    <td colSpan={totalColumns} className="px-4 py-2 text-sm align-top border-t border-stone-800/30 pb-4">
                        <div className="pl-2 border-l-2 border-stone-700 ml-1">
                            {/* Descrição */}
                            <p className="text-stone-400 text-sm whitespace-pre-line mb-1 font-serif italic">
                              {armor.description}
                            </p>
                            {/* Origem */}
                            <div className="text-xs text-amber-800 font-bold uppercase tracking-widest mt-2">
                              Origem: {armor.origin}
                            </div>
                        </div>
                    </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {filteredArmors.length === 0 && (
          <div className="text-center py-12 text-stone-500 bg-stone-900 border-t border-stone-800 italic">Nenhuma armadura ou escudo encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - 100% Width */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/equipamentos" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Armaduras</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <div className="space-y-6 text-stone-300 leading-relaxed text-lg font-serif">
                <h1 className="text-5xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">
                  Armaduras & Escudos
                </h1>

                {/* Armaduras */}
                <h2 className="text-3xl font-bold text-amber-700 pt-4 mb-2">Armaduras</h2>
                <p>
                  Armaduras são classificadas em <strong className="text-stone-100">leves e pesadas</strong>, de acordo com a sua facilidade de uso e mobilidade.
                </p>

                {/* Armaduras Leves */}
                <h3 className="text-xl font-bold text-amber-600 pt-2">Armaduras Leves</h3>
                <p>
                  Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma <strong className="text-stone-100">ação completa</strong>.
                </p>

                {/* Armaduras Pesadas */}
                <h3 className="text-xl font-bold text-amber-600 pt-2">Armaduras Pesadas</h3>
                <p>
                  Feitas de cota de malha ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, <strong className="text-stone-100">você não aplica sua Destreza na Defesa</strong> e tem seu <strong className="text-stone-100">deslocamento reduzido em 3m</strong>. Vestir ou remover uma armadura pesada <strong className="text-stone-100">demora cinco minutos</strong>. <strong className="text-stone-100">Dormir de armadura pesada deixa você fatigado pelo dia</strong>.
                </p>

                {/* Escudos */}
                <h2 className="text-3xl font-bold text-amber-700 pt-4 mb-2">Escudos</h2>
                <p>
                  Existem escudos <strong className="text-stone-100">leves</strong> e <strong className="text-stone-100">pesados</strong>. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma <strong className="text-stone-100">ação de movimento</strong>.
                </p>

                {/* Ataque com Escudo */}
                <h3 className="text-2xl font-bold text-amber-600 pt-2">Ataque com Escudo</h3>
                <p>
                  Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas <strong className="text-stone-100">perde seu bônus na Defesa até seu próximo turno</strong> se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos <strong className="text-stone-100">não contam como armas</strong>.
                </p>

                {/* Penalidade por Não Proficiência */}
                <h3 className="text-2xl font-bold text-amber-600 pt-2">Penalidade por Não Proficiência</h3>
                <p>
                  Um personagem vestindo uma armadura ou empunhando escudo que não saiba usar aplica a <strong className="text-stone-100">penalidade da armadura em todas as perícias baseadas em Força e Destreza</strong>.
                </p>

                {/* Características */}
                <h2 className="text-3xl font-bold text-amber-700 pt-4 mb-2">Características das Armaduras e Escudos</h2>
                <ul className="list-disc ml-6 space-y-2 marker:text-amber-700">
                  <li>
                    <strong className="text-stone-100">Preço.</strong> Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.
                  </li>
                  <li>
                    <strong className="text-stone-100">Bônus na Defesa.</strong> Cada armadura fornece um bônus na Defesa do usuário. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas <strong className="text-stone-100">não dois escudos</strong>.
                  </li>
                  <li>
                    <strong className="text-stone-100">Penalidade de Armadura.</strong> Aplique a penalidade de armadura em testes de <strong className="text-stone-100">Acrobacia, Furtividade e Ladinagem</strong> (e em testes de <strong className="text-stone-100">Atletismo para natação</strong>). Penalidades de armaduras e escudos se acumulam.
                  </li>
                  <li>
                    <strong className="text-stone-100">Espaço.</strong> Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.
                  </li>
                </ul>
            </div>
        </section>

        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Tabela Completa de Armaduras & Escudos</h2>
            <ArmorFilterableTable allArmors={armors} />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}