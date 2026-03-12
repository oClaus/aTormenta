"use client";

import React, { useState, useMemo } from "react";
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
    <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg bg-[#dcc8a9]">
      <table className="min-w-full divide-y divide-amber-900/20 font-serif">
        <caption className="p-4 text-xl font-bold text-red-900 bg-[#c4b090] border-b-2 border-amber-900/30 uppercase tracking-widest text-left">
          Tabela Dano de Armas
        </caption>
        <thead className="bg-[#c4b090] text-red-900 border-b-2 border-amber-900/30">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20 last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/10">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`transition-colors hover:bg-[#c9bb9e] ${rowIndex % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 whitespace-nowrap text-sm text-center text-amber-950 font-serif border-r border-amber-900/20 last:border-r-0">
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

// 2. Componente para a Tabela Filtrável de Armas

const WeaponFilterableTable = ({ allWeapons }: { allWeapons: Weapon[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null); // NOVO ESTADO
  const [filters, setFilters] = useState({
    proficiency: [] as WeaponProficiency[],
    grip: [] as WeaponGrip[],
    type: [] as DamageType[],
    purpose: [] as WeaponPurpose[],
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
      filtered = filtered.filter(w => w.name.toLowerCase().includes(lowerCaseSearch) ||
        w.description.toLowerCase().includes(lowerCaseSearch) || 
        w.origin.toLowerCase().includes(lowerCaseSearch) 
      );
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

    // 5. Filtrar por Propósito
    if (filters.purpose.length > 0) {
      filtered = filtered.filter(w => filters.purpose.includes(w.purpose));
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allWeapons, searchTerm, filters]);

  const allProficiencies: WeaponProficiency[] = ["Simples", "Marcial", "Exótica", "Fogo"];
  const allGrips: WeaponGrip[] = ["Leve", "Uma Mão", "Duas Mãos"];
  const allDamageTypes: DamageType[] = ["Corte", "Perfuração", "Impacto", "Corte/Perfuração", "Impacto/Perfuração", "Ácido"];
  const allPurposes: WeaponPurpose[] = ["Corpo a Corpo", "Distância", "Munição"]; 
  
  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-[#dcc8a9] rounded border-2 border-amber-900/30 shadow-sm">
      <h4 className="text-xs font-bold text-amber-900/70 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option)}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-[#efe5d5] border-red-900 shadow-inner"
                : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-red-700 hover:text-red-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 w-full relative">
      {/* Barra de Busca */}
      <div className="relative">
        <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar arma por nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {renderFilterGroup("Proficiência", allProficiencies, "proficiency")}
        {renderFilterGroup("Empunhadura", allGrips, "grip")}
        {renderFilterGroup("Tipo de Dano", allDamageTypes, "type")}
        {renderFilterGroup("Propósito", allPurposes, "purpose")}
      </div>

      {/* Tabela de Armas - LINHAS ÚNICAS E CLICÁVEIS */}
      <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg w-full">
        <table className="min-w-full divide-y divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[#c4b090] text-red-900 border-b-2 border-amber-900/30">
            <tr>
              <th scope="col" className="w-[20%] px-3 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Nome</th>
              <th scope="col" className="w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20"><span className="hidden sm:inline">Propósito</span><span className="sm:hidden">Prop.</span></th>
              <th scope="col" className="w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20"><span className="hidden sm:inline">Preço</span><span className="sm:hidden">T$</span></th>
              <th scope="col" className="w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Dano</th>
              <th scope="col" className="w-[9%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20"><span className="hidden sm:inline">Crítico</span><span className="sm:hidden">Crit.</span></th>
              <th scope="col" className="w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20"><span className="hidden sm:inline">Alcance</span><span className="sm:hidden">Alc.</span></th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Tipo</th>
              <th scope="col" className="w-[5%] px-3 py-4 text-center text-xs font-bold uppercase tracking-wider"><span className="hidden sm:inline">Espaços</span><span className="sm:hidden">Esp.</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredWeapons.map((weapon, index) => {
              const rowClass = index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]";
              
              return (
                <tr 
                  key={weapon.id} 
                  onClick={() => setSelectedWeapon(weapon)}
                  className={`${rowClass} hover:bg-[#c9bb9e] transition-colors cursor-pointer group`}
                  title="Clique para ver os detalhes da arma"
                >
                  {/* Nome e Tags (Linha Única) */}
                  <td className="px-3 py-3 text-sm font-medium text-amber-950 align-middle border-r border-amber-900/20">
                    <div className="font-bold text-amber-950 font-serif text-lg group-hover:text-red-900 transition-colors">
                      {weapon.name}
                    </div>
                    <div className="text-xs text-amber-900/70 mt-0.5 uppercase tracking-wide font-bold">
                        {weapon.proficiency} • {weapon.grip}
                    </div>
                  </td>
                  
                  {/* Outras Células */}
                  <td className="px-3 py-3 text-sm text-amber-950 text-center align-middle border-r border-amber-900/20 font-serif">{weapon.purpose}</td>
                  <td className="px-3 py-3 text-sm text-red-900 font-bold text-center align-middle border-r border-amber-900/20 font-serif">{weapon.price}</td>
                  <td className="px-3 py-3 text-sm text-red-900 font-bold text-center align-middle border-r border-amber-900/20 font-serif">{weapon.damage}</td>
                  <td className="px-3 py-3 text-sm text-amber-950 text-center align-middle border-r border-amber-900/20 font-serif">{weapon.critical}</td>
                  <td className="px-3 py-3 text-sm text-amber-950 text-center align-middle border-r border-amber-900/20 font-serif">{weapon.range}</td>
                  <td className="px-3 py-3 text-sm text-amber-950 text-center align-middle border-r border-amber-900/20 font-serif">{weapon.type}</td>
                  <td className="px-3 py-3 text-sm text-amber-950 text-center align-middle font-serif">{weapon.spaces}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {filteredWeapons.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">
            Nenhuma arma encontrada com os filtros aplicados.
          </div>
        )}
      </div>

      {/* PAINEL LATERAL (DRAWER) - EXIBE APENAS SE UMA ARMA ESTIVER SELECIONADA */}
      {selectedWeapon && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Fundo Escuro (Overlay) - Clica para fechar */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedWeapon(null)}
          />

          {/* O Painel em si */}
          <div 
            className="relative w-full max-w-md h-full bg-[#e6dcc5] border-l-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          >
            {/* Cabeçalho do Painel */}
            <div className="bg-[#c4b090] border-b-2 border-amber-900/30 p-6 flex justify-between items-start z-10">
              <div>
                <h2 className="text-3xl font-bold text-red-900 drop-shadow-sm">{selectedWeapon.name}</h2>
                <div className="text-sm font-bold text-amber-900/70 uppercase tracking-widest mt-1">
                  {selectedWeapon.proficiency} • {selectedWeapon.grip}
                </div>
              </div>
              <button
                onClick={() => setSelectedWeapon(null)}
                className="text-amber-900 hover:text-red-900 hover:bg-amber-900/10 p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8 font-sans"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            {/* Corpo do Painel (Rolável) */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6">
              
              {/* Grid de Atributos */}
              <div className="grid grid-cols-2 gap-4 bg-[#dbcfb4] p-4 rounded border border-amber-900/20 shadow-inner">
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Dano / Crítico</span>
                  <span className="font-bold text-red-900 text-lg">{selectedWeapon.damage} <span className="text-amber-950 text-sm">({selectedWeapon.critical})</span></span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Preço</span>
                  <span className="font-bold text-red-900 text-lg">{selectedWeapon.price}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Tipo de Dano</span>
                  <span className="font-bold text-amber-950">{selectedWeapon.type}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Alcance</span>
                  <span className="font-bold text-amber-950">{selectedWeapon.range}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Propósito</span>
                  <span className="font-bold text-amber-950">{selectedWeapon.purpose}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-amber-900/60 font-bold tracking-wider">Espaços</span>
                  <span className="font-bold text-amber-950">{selectedWeapon.spaces}</span>
                </div>
              </div>

              {/* Descrição Narrativa */}
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                  Descrição
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                </h3>
                <p className="text-amber-950 leading-relaxed italic whitespace-pre-line bg-[#dcc8a9]/30 p-4 rounded border-l-2 border-red-800">
                  {selectedWeapon.description}
                </p>
              </div>
            </div>

            {/* Rodapé do Painel (Origem) */}
            <div className="bg-[#dcc8a9] p-4 border-t-2 border-amber-900/30 mt-auto">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-widest text-center opacity-80">
                Origem: {selectedWeapon.origin}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilo embutido para a animação do Drawer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </div>
  );
};


// --- Página Principal ---

export default function ArmasPage() {
  return (
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-red-900 selection:text-red-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header - 100% Width */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-800 via-red-900 to-black drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/70 hover:text-red-800 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-900/70 hover:text-red-800 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Armas</span>
            </div>
        </div>
      </header>
      

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Conteúdo de Texto */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
            <div className="space-y-6 text-amber-950 leading-relaxed text-lg font-serif">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-teal-800 to-red-900 mb-6 border-b border-amber-900/30 pb-2 drop-shadow-sm">
                Armas
                </h1>
                <p>
                    Armas são classificadas de acordo com a proficiência necessária para usá-la (simples, marciais, exóticas ou de fogo), propósito (ataque corpo a corpo ou à distância) e empunhadura (leve, uma mão ou duas mãos).
                </p>

                <h2 className="text-3xl font-bold text-red-900 pt-4 mb-2 border-b border-amber-900/20 pb-1">Proficiência</h2>
                <p>
                    <strong className="text-red-900">Armas Simples.</strong> Armas de manejo fácil, como adagas, clavas e lanças. Todos os personagens sabem usar armas simples.
                </p>
                <p>
                    <strong className="text-red-900">Armas Marciais.</strong> Espadas, machados e outras armas de uso específico de combatentes. Bárbaros, bardos, bucaneiros, caçadores, cavaleiros, guerreiros, nobres e paladinos sabem usar armas marciais.
                </p>
                <p>
                    <strong className="text-red-900">Armas Exóticas.</strong> Armas difíceis de dominar, como a corrente de espinhos e a espada bastarda. Exigem treinamento específico.
                </p>
                <p>
                    <strong className="text-red-900">Armas de Fogo.</strong> Armas de pólvora são raras em Arton, por isso exigem treinamento específico.
                </p>
                <p>
                    <strong className="text-red-900">Penalidade por Não Proficiência.</strong> Se você atacar com uma arma com a qual não seja proficiente, sofre –5 nos testes de ataque.
                </p>
                <p>
                    Todas as criaturas são proficientes em ataques desarmados e em suas armas naturais (veja quadro).
                </p>

                <h2 className="text-3xl font-bold text-red-900 pt-4 mb-2 border-b border-amber-900/20 pb-1">Propósito</h2>
                <p>
                    <strong className="text-red-900">Corpo a Corpo.</strong> Podem ser usadas para atacar alvos adjacentes. Para atacar com uma arma de combate corpo a corpo, faça um teste de Luta. Quando você ataca com uma arma corpo a corpo, soma sua Força às rolagens de dano.
                </p>
                <p>
                    <strong className="text-red-900">Ataque à Distância.</strong> Podem ser usadas para atacar alvos adjacentes ou à distância. Para atacar com uma arma de combate à distância, faça um teste de Pontaria. São subdivididas em de arremesso e de disparo:
                </p>
                <p className="ml-4 border-l-2 border-red-800 pl-4">
                    <strong className="text-red-800">Arremesso.</strong> A própria arma é atirada, como uma adaga ou azagaia. Sacar uma arma de arremesso é uma ação de movimento. Quando você ataca com uma arma de arremesso, soma sua Força às rolagens de dano.
                </p>
                <p className="ml-4 border-l-2 border-red-800 pl-4">
                    <strong className="text-red-800">Disparo.</strong> A arma dispara um projétil, como um arco atira flechas. Sacar a munição de uma arma de disparo é uma ação livre. Recarregar uma arma de disparo exige as duas mãos. Quando ataca com uma arma de disparo, não soma nenhum valor de atributo às rolagens de dano.
                </p>

                <h2 className="text-3xl font-bold text-red-900 pt-4 mb-2 border-b border-amber-900/20 pb-1">Empunhadura</h2>
                <p>
                    <strong className="text-red-900">Leve.</strong> Esta arma é usada com uma mão e se beneficia do poder Acuidade com Arma.
                </p>
                <p>
                    <strong className="text-red-900">Uma mão.</strong> Esta arma é usada com uma mão, deixando a outra mão livre para outros fins.
                </p>
                <p>
                    <strong className="text-red-900">Duas mãos.</strong> Esta arma é usada com as duas mãos. Livrar uma mão é uma ação livre. Reempunhá-la é uma ação de movimento (ou livre, se você puder sacá-la dessa forma).
                </p>

                <h2 className="text-3xl font-bold text-red-900 pt-4 mb-2 border-b border-amber-900/20 pb-1">Características das Armas</h2>
                <p>
                    <strong className="text-red-900">Preço.</strong> Inclui acessórios básicos, como bainhas para lâminas e aljavas para flechas.
                </p>
                <p>
                    <strong className="text-red-900">Dano.</strong> Quando você acerta um ataque, rola o dano indicado (acrescente modificadores, se houver). O resultado é subtraído dos pontos de vida do alvo. O dano na tabela se refere a armas normais, para criaturas Pequenas e Médias. Veja a Tabela Dano de Armas para armas menores ou maiores.
                </p>
                <p>
                    <strong className="text-red-900">Crítico.</strong> Quando você acerta um ataque rolando um 20 natural (ou seja, o dado mostra um 20), faz um acerto crítico. Neste caso, multiplique os dados de dano por 2. Bônus numéricos e dados extras (como pela habilidade Ataque Furtivo) não são multiplicados. Certas armas fazem críticos em margem maior que 20 ou multiplicam o dano por um valor maior que 2.
                </p>
                <p className="ml-4 text-sm text-amber-900/90"><strong className="text-red-800">19.</strong> A arma tem margem de ameaça 19 ou 20.</p>
                <p className="ml-4 text-sm text-amber-900/90"><strong className="text-red-800">18.</strong> A arma tem margem de ameaça 18, 19 ou 20.</p>
                <p className="ml-4 text-sm text-amber-900/90"><strong className="text-red-800">x2, x3, x4.</strong> A arma causa dano dobrado, triplicado ou quadruplicado em caso de acerto crítico.</p>
                <p className="ml-4 text-sm text-amber-900/90"><strong className="text-red-800">19/x3.</strong> A arma tem margem de ameaça 19 ou 20 e causa dano triplicado em caso de acerto crítico.</p>
                
                <p>
                    <strong className="text-red-900">Alcance.</strong> Armas com alcance podem ser usadas para ataques à distância. As categorias de alcance são curto (9m), médio (30m) e longo (90m). Você pode atacar dentro do alcance sem sofrer penalidades. Você pode atacar até o dobro do alcance, mas sofre –5 no teste de ataque. Armas sem alcance podem ser arremessadas em alcance curto com –5 no teste de ataque.
                </p>
                <p>
                    <strong className="text-red-900">Tipo.</strong> Armas tipicamente causam dano por corte (C), impacto (I) ou perfuração (P). Certas criaturas são resistentes ou imunes a certos tipos de dano.
                </p>
                <p>
                    <strong className="text-red-900">Espaço.</strong> Quantos espaços a arma ocupa, importante para a capacidade de carga do personagem.
                </p>

                <h3 className="text-2xl font-bold text-red-900 pt-4 mb-2">Habilidades de Armas</h3>
                <p>
                    Algumas armas possuem uma ou mais das habilidades a seguir.
                </p>
                <ul className="list-disc ml-6 space-y-2 marker:text-red-900">
                    <li>
                    <strong className="text-red-900">Adaptável.</strong> Uma arma de uma mão com esta habilidade pode ser usada com as duas mãos para aumentar seu dano em um passo.
                    </li>
                    <li>
                    <strong className="text-red-900">Ágil.</strong> Pode ser usada com Acuidade com Arma, mesmo não sendo uma arma leve.
                    </li>
                    <li>
                    <strong className="text-red-900">Alongada.</strong> Dobra o alcance natural do atacante, mas não permite atacar um adversário adjacente.
                    </li>
                    <li>
                    <strong className="text-red-900">Desbalanceada.</strong> Impõe uma penalidade de –2 em testes de ataque.
                    </li>
                    <li>
                    <strong className="text-red-900">Dupla.</strong> Pode ser usada com Estilo de Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve. Cada “ponta” conta como uma arma separada.
                    </li>
                    <li>
                    <strong className="text-red-900">Versátil.</strong> Fornece bônus em uma ou mais manobras (cumulativo com outros bônus de itens), conforme a arma.
                    </li>
                    <li>
                    <strong className="text-red-900">Ocultável.</strong> O tamanho e/ou formato da arma tornam mais fácil escondê-la. Ela fornece +5 em testes de Ladinagem para ocultá-la. A adaga é uma arma ocultável.
                    </li>
                    <li>
                    <strong className="text-red-900">Surpreendente.</strong> Uma vez por cena, se você sacar a arma como ação livre e usá-la para atacar no mesmo turno, o oponente fica desprevenido contra esse ataque.
                    </li>
                </ul>

                <h3 className="text-2xl font-bold text-red-900 pt-4 mb-2">Passos de Dano</h3>
                <p>
                    Alguns efeitos podem aumentar ou diminuir o dano da arma em um ou mais “passos”. Consulte a Tabela Dano de Armas.
                </p>

                {/* Tabela de Dano de Armas */}
                <div className="mb-12 w-full">
                    <DamageTable data={damageProgressionTable} />
                </div>

                <h3 className="text-2xl font-bold text-red-900 pt-4 mb-2">Ataques Desarmados & Armas Naturais</h3>
                <p>
                    Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal (1d3 pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado.
                </p>
                <p>
                    Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.
                </p>

                <h3 className="text-2xl font-bold text-red-900 pt-4 mb-2">Munições</h3>
                <p>
                    Projéteis usados em armas de disparo. Munição é vendida em pacotes com projéteis suficientes para 20 ataques. Sempre que você faz um ataque com uma arma de disparo, a munição é perdida, independentemente de o ataque acertar ou não.
                </p>
                <p>
                    Pacotes de munições podem receber melhorias e encantos como armas (mas efeitos de munições não acumulam com os da arma de disparo). O aumento no preço de um pacote de munição superior ou mágico é metade do aumento de uma arma (uma munição com uma melhoria, por exemplo, custa +T$ 150, em vez de +T$ 300).
                </p>
            </div>
        </section>
      
        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="text-3xl font-bold text-red-900 mb-6 border-b border-amber-900/30 pb-2">Tabela Completa de Armas</h2>
            <WeaponFilterableTable allWeapons={weapons} />
        </section>
      </main>
       {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}