"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  damageProgressionTable,
  weapons,
} from "@/data/weapons"; // weaponIntroText foi removido
import { Weapon, DamageProgression, WeaponProficiency, WeaponGrip, DamageType } from "@/types/weapon";

// --- Componentes Auxiliares ---

// 1. Componente para renderizar a Tabela de Dano de Armas (Inalterado)
const DamageTable = ({ data }: { data: DamageProgression[][] }) => {
  const headers = data[0].map(d => d.step);

  return (
    <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30">
      <table className="min-w-full divide-y divide-red-500/30">
        <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50 rounded-t-xl">
          Tabela 3-2: Dano de Armas
        </caption>
        <thead className="bg-red-900/70 text-red-200">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-red-500/20">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 whitespace-nowrap text-sm text-center text-gray-300">
                  {cell.damage}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 2. Componente para o Card de Arma (Grid) - Inalterado
const WeaponCard = ({ weapon }: { weapon: Weapon }) => (
  <div
    className={`group relative rounded-xl overflow-hidden bg-gradient-to-br from-red-950/40 to-black border border-red-500/20 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-left`}
  >
    <h3 className="text-2xl font-bold text-red-300 mb-2 group-hover:text-red-200 transition-colors">
      {weapon.name}
    </h3>
    <div className="text-xs font-semibold text-gray-400 mb-3">
      {weapon.proficiency} • {weapon.grip} • {weapon.type}
    </div>
    <p className="text-gray-400 text-sm whitespace-pre-line">
      {weapon.description}
    </p>
    <div className="mt-4 text-xs text-pink-400">
      Origem: {weapon.origin}
    </div>
  </div>
);

// 3. Componente para a Tabela Filtrável de Armas (Inalterado)
const WeaponFilterableTable = ({ allWeapons }: { allWeapons: Weapon[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    proficiency: [] as WeaponProficiency[],
    grip: [] as WeaponGrip[],
    type: [] as DamageType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => {
      const current = prev[key] as string[];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const filteredWeapons = useMemo(() => {
    let filtered = allWeapons;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome
    if (lowerCaseSearch) {
      filtered = filtered.filter(w => w.name.toLowerCase().includes(lowerCaseSearch));
    }

    // 2. Filtrar por Proficiência
    if (filters.proficiency.length > 0) {
      filtered = filtered.filter(w => filters.proficiency.includes(w.proficiency));
    }

    // 3. Filtrar por Empunhadura
    if (filters.grip.length > 0) {
      filtered = filtered.filter(w => filters.grip.includes(w.grip));
    }

    // 4. Filtrar por Tipo de Dano
    if (filters.type.length > 0) {
      filtered = filtered.filter(w => filters.type.includes(w.type));
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allWeapons, searchTerm, filters]);

  const allProficiencies: WeaponProficiency[] = ["Simples", "Marcial", "Exótica", "Fogo"];
  const allGrips: WeaponGrip[] = ["Leve", "Uma Mão", "Duas Mãos"];
  const allDamageTypes: DamageType[] = ["Corte", "Perfuração", "Impacto"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-gray-900/50 rounded-lg border border-red-500/20">
      <h4 className="text-sm font-bold text-red-300 mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-600 text-white shadow-md"
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
        placeholder="Buscar arma por nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-red-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
      />

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderFilterGroup("Proficiência", allProficiencies, "proficiency")}
        {renderFilterGroup("Empunhadura", allGrips, "grip")}
        {renderFilterGroup("Tipo de Dano", allDamageTypes, "type")}
      </div>

      {/* Tabela de Armas */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30">
        <table className="min-w-full divide-y divide-red-500/30">
          <thead className="bg-red-900/70 text-red-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Preço</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Dano</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Crítico</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Alcance</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-500/20">
            {filteredWeapons.map((weapon, index) => (
              <tr key={weapon.id} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-red-300">
                  {weapon.name}
                  <div className="text-xs text-gray-500">{weapon.proficiency} • {weapon.grip}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.price}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.damage}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.critical}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.range}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.type}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{weapon.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredWeapons.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50">Nenhuma arma encontrada com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmasPage() {
  // NOVO ESTADO E LÓGICA DE BUSCA PARA O GRID DE CARDS
  const [cardSearchTerm, setCardSearchTerm] = useState("");

  const filteredCards = useMemo(() => {
    const lowerCaseSearch = cardSearchTerm.toLowerCase();
    
    // 1. Ordenação Alfabética
    let sorted = [...weapons].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

    // 2. Filtragem por Nome ou Descrição
    if (lowerCaseSearch) {
      sorted = sorted.filter(w => 
        w.name.toLowerCase().includes(lowerCaseSearch) ||
        w.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return sorted;
  }, [cardSearchTerm]);


  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/equipamentos" className="text-red-400 hover:text-red-300 transition-colors">
          ← Voltar para Equipamentos
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 mb-4">
          ⚔️ Armas
        </h1>
        <p className="text-gray-400 text-lg">
          Detalhes sobre proficiência, propósito, empunhadura e as estatísticas de combate de cada arma.
        </p>
      </div>

      {/* Seção de Texto Introdutório (AGORA DIRETO NO COMPONENTE) */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-red-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Armas são classificadas de acordo com a proficiência necessária para usá-la (simples, marciais, exóticas ou de fogo), propósito (ataque corpo a corpo ou à distância) e empunhadura (leve, uma mão ou duas mãos).
          </p>

          <h2 className="text-3xl font-bold text-red-400 pt-4">Proficiência</h2>
          <p>
            <strong>Armas Simples.</strong> Armas de manejo fácil, como adagas, clavas e lanças. Todos os personagens sabem usar armas simples.
          </p>
          <p>
            <strong>Armas Marciais.</strong> Espadas, machados e outras armas de uso específico de combatentes. Bárbaros, bardos, bucaneiros, caçadores, cavaleiros, guerreiros, nobres e paladinos sabem usar armas marciais.
          </p>
          <p>
            <strong>Armas Exóticas.</strong> Armas difíceis de dominar, como a corrente de espinhos e a espada bastarda. Exigem treinamento específico.
          </p>
          <p>
            <strong>Armas de Fogo.</strong> Armas de pólvora são raras em Arton, por isso exigem treinamento específico.
          </p>
          <p>
            <strong>Penalidade por Não Proficiência.</strong> Se você atacar com uma arma com a qual não seja proficiente, sofre –5 nos testes de ataque.
            Todas as criaturas são proficientes em ataques desarmados e em suas armas naturais (veja quadro).
          </p>

          <h2 className="text-3xl font-bold text-red-400 pt-4">Propósito</h2>
          <p>
            <strong>Corpo a Corpo.</strong> Podem ser usadas para atacar alvos adjacentes. Para atacar com uma arma de combate corpo a corpo, faça um teste de Luta. Quando você ataca com uma arma corpo a corpo, soma sua Força às rolagens de dano.
          </p>
          <p>
            <strong>Ataque à Distância.</strong> Podem ser usadas para atacar alvos adjacentes ou à distância. Para atacar com uma arma de combate à distância, faça um teste de Pontaria. São subdivididas em de arremesso e de disparo.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Arremesso.</strong> A própria arma é atirada, como uma adaga ou azagaia. Sacar uma arma de arremesso é uma ação de movimento. Quando você ataca com uma arma de arremesso, soma sua Força às rolagens de dano.
            </li>
            <li>
              <strong>Disparo.</strong> A arma dispara um projétil, como um arco atira flechas. Sacar a munição de uma arma de disparo é uma ação livre. Recarregar uma arma de disparo exige as duas mãos. Quando ataca com uma arma de disparo, não soma nenhum valor de atributo às rolagens de dano.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-red-400 pt-4">Empunhadura</h2>
          <p>
            <strong>Leve.</strong> Esta arma é usada com uma mão e se beneficia do poder Acuidade com Arma.
          </p>
          <p>
            <strong>Uma mão.</strong> Esta arma é usada com uma mão, deixando a outra mão livre para outros fins.
          </p>
          <p>
            <strong>Duas mãos.</strong> Esta arma é usada com as duas mãos. Livrar uma mão é uma ação livre. Reempunhá-la é uma ação de movimento (ou livre, se você puder sacá-la dessa forma).
          </p>
        </div>
      </section>

      {/* Seção da Tabela de Dano de Armas */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-red-400 mb-6">Tabela de Dano</h2>
        <DamageTable data={damageProgressionTable} />
      </section>

      {/* Grid de Cards de Armas (AGORA COM BUSCA E ORDENAÇÃO) */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-red-400 mb-6">Visualização Rápida</h2>
        
        {/* Barra de Busca para o Grid */}
        <input
          type="text"
          placeholder="Buscar arma por nome ou descrição..."
          value={cardSearchTerm}
          onChange={(e) => setCardSearchTerm(e.target.value)}
          className="w-full px-6 py-3 mb-6 rounded-lg bg-gray-800 border border-red-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </div>
        {filteredCards.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50 rounded-xl">Nenhuma arma encontrada com o termo de busca.</div>
        )}
      </section>

      {/* Tabela Filtrável de Armas */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-red-400 mb-6">Tabela Completa de Armas</h2>
        <WeaponFilterableTable allWeapons={weapons} />
      </section>
      
    </main>
  );
}