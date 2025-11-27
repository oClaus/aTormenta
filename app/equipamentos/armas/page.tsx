"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  damageProgressionTable,
  weapons,
} from "@/data/weapons";
import { Weapon, DamageProgression, WeaponProficiency, WeaponGrip, DamageType, WeaponPurpose } from "@/types/weapon";

// --- Componentes Auxiliares ---

// 1. Componente para renderizar a Tabela de Dano de Armas
const DamageTable = ({ data }: { data: DamageProgression[][] }) => {
  const headers = data[0].map(d => d.step);

  return (
    <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30">
      <table className="min-w-full divide-y divide-red-500/30">
        <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50 rounded-t-xl">
          Tabela Dano de Armas
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

// 2. Componente para o Card de Arma (Grid) - AGORA EXIBE O PROPÓSITO
const WeaponCard = ({ weapon }: { weapon: Weapon }) => (
  <div
    className={`group relative rounded-xl overflow-hidden bg-gradient-to-br from-red-950/40 to-black border border-red-500/20 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 text-left`}
  >
    <h3 className="text-2xl font-bold text-red-300 mb-2 group-hover:text-red-200 transition-colors">
      {weapon.name}
    </h3>
    <div className="text-xs font-semibold text-gray-400 mb-3">
      {weapon.proficiency} • {weapon.grip} • {weapon.type} • <span className="text-red-400">{weapon.purpose}</span>
    </div>
    <p className="text-gray-400 text-sm whitespace-pre-line">
      {weapon.description}
    </p>
    <div className="mt-4 text-xs text-pink-400">
      Origem: {weapon.origin}
    </div>
  </div>
);

// 3. Componente para a Tabela Filtrável de Armas - AGORA COM FILTRO DE PROPÓSITO
const WeaponFilterableTable = ({ allWeapons }: { allWeapons: Weapon[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    proficiency: [] as WeaponProficiency[],
    grip: [] as WeaponGrip[],
    type: [] as DamageType[],
    purpose: [] as WeaponPurpose[], // NOVO FILTRO
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

    // 5. Filtrar por Propósito (NOVO)
    if (filters.purpose.length > 0) {
      filtered = filtered.filter(w => filters.purpose.includes(w.purpose));
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allWeapons, searchTerm, filters]);

  const allProficiencies: WeaponProficiency[] = ["Simples", "Marcial", "Exótica", "Fogo"];
  const allGrips: WeaponGrip[] = ["Leve", "Uma Mão", "Duas Mãos"];
  const allDamageTypes: DamageType[] = ["Corte", "Perfuração", "Impacto", "Corte/Perfuração"];
  const allPurposes: WeaponPurpose[] = ["Corpo a Corpo", "Distância", "Munição"]; // NOVO

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {renderFilterGroup("Proficiência", allProficiencies, "proficiency")}
        {renderFilterGroup("Empunhadura", allGrips, "grip")}
        {renderFilterGroup("Tipo de Dano", allDamageTypes, "type")}
        {renderFilterGroup("Propósito", allPurposes, "purpose")} {/* NOVO FILTRO */}
      </div>

      {/* Tabela de Armas */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30">
        <table className="min-w-full divide-y divide-red-500/30">
          <thead className="bg-red-900/70 text-red-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Propósito</th>
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
                <td className="px-4 py-2 whitespace-nowrap text-sm text-red-400">{weapon.purpose}</td> {/* NOVA CÉLULA */}
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
       {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
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
          <span className="text-gray-400 text-sm">Armas</span>
        </div>
      </header>
      

      {/* Header */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-red-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 mb-4">
          Armas
        </h1>
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
          </p>
          <p>
            Todas as criaturas são proficientes em ataques desarmados e em suas armas naturais (veja quadro).
          </p>

          <h2 className="text-3xl font-bold text-red-400 pt-4">Propósito</h2>
          <p>
            <strong>Corpo a Corpo.</strong> Podem ser usadas para atacar alvos adjacentes. Para atacar com uma arma de combate corpo a corpo, faça um teste de Luta. Quando você ataca com uma arma corpo a corpo, soma sua Força às rolagens de dano.
          </p>
          <p>
            <strong>Ataque à Distância.</strong> Podem ser usadas para atacar alvos adjacentes ou à distância. Para atacar com uma arma de combate à distância, faça um teste de Pontaria. São subdivididas em de arremesso e de disparo:
          </p>
          <p className="ml-4">
            • <strong>Arremesso.</strong> A própria arma é atirada, como uma adaga ou azagaia. Sacar uma arma de arremesso é uma ação de movimento. Quando você ataca com uma arma de arremesso, soma sua Força às rolagens de dano.
          </p>
          <p className="ml-4">
            • <strong>Disparo.</strong> A arma dispara um projétil, como um arco atira flechas. Sacar a munição de uma arma de disparo é uma ação livre. Recarregar uma arma de disparo exige as duas mãos. Quando ataca com uma arma de disparo, não soma nenhum valor de atributo às rolagens de dano.
          </p>

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

          <h2 className="text-3xl font-bold text-red-400 pt-4">Características das Armas</h2>
          <p>
    <strong>Preço.</strong> Inclui acessórios básicos, como bainhas para lâminas e aljavas para flechas.
  </p>
  <p>
    <strong>Dano.</strong> Quando você acerta um ataque, rola o dano indicado (acrescente modificadores, se houver). O resultado é subtraído dos pontos de vida do alvo. O dano na tabela se refere a armas normais, para criaturas Pequenas e Médias. Veja a Tabela Dano de Armas para armas menores ou maiores.
  </p>
  <p>
    <strong>Crítico.</strong> Quando você acerta um ataque rolando um 20 natural (ou seja, o dado mostra um 20), faz um acerto crítico. Neste caso, multiplique os dados de dano por 2. Bônus numéricos e dados extras (como pela habilidade Ataque Furtivo) não são multiplicados. Certas armas fazem críticos em margem maior que 20 ou multiplicam o dano por um valor maior que 2.
    <p className="ml-4">
      • <strong>19.</strong> A arma tem margem de ameaça 19 ou 20.
    </p>
    <p className="ml-4">
      • <strong>18.</strong> A arma tem margem de ameaça 18, 19 ou 20.
    </p>
    <p className="ml-4">
      • <strong>x2, x3, x4.</strong> A arma causa dano dobrado, triplicado ou quadruplicado em caso de acerto crítico.
    </p>
    <p className="ml-4">
      • <strong>19/x3.</strong> A arma tem margem de ameaça 19 ou 20 e causa dano triplicado em caso de acerto crítico.
    </p>
  </p>
  <p>
    <strong>Alcance.</strong> Armas com alcance podem ser usadas para ataques à distância. As categorias de alcance são curto (9m), médio (30m) e longo (90m). Você pode atacar dentro do alcance sem sofrer penalidades. Você pode atacar até o dobro do alcance, mas sofre –5 no teste de ataque. Armas sem alcance podem ser arremessadas em alcance curto com –5 no teste de ataque.
  </p>
  <p>
    <strong>Tipo.</strong> Armas tipicamente causam dano por corte (C), impacto (I) ou perfuração (P). Certas criaturas são resistentes ou imunes a certos tipos de dano.
  </p>
  <p>
    <strong>Espaço.</strong> Quantos espaços a arma ocupa, importante para a capacidade de carga do personagem.
  </p>

  <h3 className="text-2xl font-bold text-red-400 pt-4">Habilidades de Armas</h3>
  <p>
    Algumas armas possuem uma ou mais das habilidades a seguir.
  </p>
  <ul>
    <li>
      <strong>Adaptável.</strong> Uma arma de uma mão com esta habilidade pode ser usada com as duas mãos para aumentar seu dano em um passo.
    </li>
    <li>
      <strong>Ágil.</strong> Pode ser usada com Acuidade com Arma, mesmo não sendo uma arma leve.
    </li>
    <li>
      <strong>Alongada.</strong> Dobra o alcance natural do atacante, mas não permite atacar um adversário adjacente.
    </li>
    <li>
      <strong>Desbalanceada.</strong> Impõe uma penalidade de –2 em testes de ataque.
    </li>
    <li>
      <strong>Dupla.</strong> Pode ser usada com Estilo de Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve. Cada “ponta” conta como uma arma separada.
    </li>
    <li>
      <strong>Versátil.</strong> Fornece bônus em uma ou mais manobras (cumulativo com outros bônus de itens), conforme a arma.
    </li>
  </ul>

  <h3 className="text-2xl font-bold text-red-400 pt-4">Passos de Dano</h3>
  <p>
    Alguns efeitos podem aumentar ou diminuir o dano da arma em um ou mais “passos”. Consulte a Tabela Dano de Armas.
  </p>

  {/* Tabela de Dano de Armas */}
      <div className="mb-12">
        <DamageTable data={damageProgressionTable} />
      </div>

  <h3 className="text-2xl font-bold text-red-400 pt-4">Ataques Desarmados & Armas Naturais</h3>
  <p>
    Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal ($1d3$ pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado.
  </p>
  <p>
    Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.
  </p>
        </div>
      </section>

      

      {/* Grid de Cards de Armas (Visualização Rápida) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-red-300 mb-6">Visualização Rápida</h2>
        
        {/* Busca para o Grid */}
        <input
          type="text"
          placeholder="Buscar arma por nome ou descrição..."
          value={cardSearchTerm}
          onChange={(e) => setCardSearchTerm(e.target.value)}
          className="w-full px-6 py-3 mb-6 rounded-lg bg-gray-800 border border-red-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((weapon) => (
            <WeaponCard key={weapon.id} weapon={weapon} />
          ))}
        </div>
        {filteredCards.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50 rounded-xl">Nenhuma arma encontrada.</div>
        )}
      </section>

      {/* Tabela Completa e Filtrável */}
      <section>
        <h2 className="text-3xl font-bold text-red-300 mb-6">Tabela Completa de Armas</h2>
        <WeaponFilterableTable allWeapons={weapons} />
      </section>
    </main>
  );
}