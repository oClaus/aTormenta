"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  damageProgressionTable,
  weapons,
} from "@/data/weapons";
import { Weapon, DamageProgression, WeaponProficiency, WeaponGrip, DamageType, WeaponPurpose } from "@/types/weapon";
import { formatOrigin } from "@/types/power";

// --- Componentes Auxiliares ---

// Função auxiliar para transformar **texto** em negrito no React
const formatTextWithBold = (text: string) => {
  if (!text) return null;

  // O Regex divide a string onde encontrar **qualquer coisa**, mantendo o delimitador
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    // Se a parte começar e terminar com **, aplicamos o negrito
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-red-800">
          {part.slice(2, -2)} {/* Remove os dois primeiros e os dois últimos caracteres (os **) */}
        </strong>
      );
    }
    // Caso contrário, retorna o texto normal
    return part;
  });
};

// 1. Componente para renderizar a Tabela de Dano de Armas
const DamageTable = ({ data }: { data: DamageProgression[][] }) => {
  const headers = data[0].map(d => d.step);

  return (
    <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm bg-[#e8dac1]">
      <table className="min-w-full divide-y-2 divide-amber-900/20 font-serif">
        <caption className="p-4 text-xl font-bold text-red-800 bg-[#d9c8a9] border-b-2 border-amber-900/20 uppercase tracking-widest text-left">
          Tabela Dano de Armas
        </caption>
        <thead className="bg-[#d9c8a9] text-amber-950/80 border-b-2 border-amber-900/20">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20 last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`transition-colors hover:bg-[#e8dac1]/50 ${rowIndex % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30"}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-center text-amber-950 font-bold border-r-2 border-amber-900/10 last:border-r-0">
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
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
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
    <div className="p-4 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm">
      <h4 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
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
        <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Arma
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar arma por nome, descrição ou origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                {searchTerm ? (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                    title="Limpar busca"
                  >
                    ✕
                  </button>
                ) : (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                      🔍
                  </div>
                )}
            </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8">
        {renderFilterGroup("Proficiência", allProficiencies, "proficiency")}
        {renderFilterGroup("Empunhadura", allGrips, "grip")}
        {renderFilterGroup("Tipo de Dano", allDamageTypes, "type")}
        {renderFilterGroup("Propósito", allPurposes, "purpose")}
      </div>

      {/* Tabela de Armas - LINHAS ÚNICAS E CLICÁVEIS */}
      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[#d9c8a9] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="w-[20%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Nome</th>
              <th scope="col" className="w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Propósito</span><span className="sm:hidden">Prop.</span></th>
              <th scope="col" className="w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Preço</span><span className="sm:hidden">T$</span></th>
              <th scope="col" className="w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Dano</th>
              <th scope="col" className="w-[9%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Crítico</span><span className="sm:hidden">Crit.</span></th>
              <th scope="col" className="w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Alcance</span><span className="sm:hidden">Alc.</span></th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Tipo</th>
              <th scope="col" className="w-[5%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest"><span className="hidden sm:inline">Espaços</span><span className="sm:hidden">Esp.</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
            {filteredWeapons.map((weapon, index) => {
              const rowClass = index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30";
              
              return (
                <tr 
                  key={weapon.id} 
                  onClick={() => setSelectedWeapon(weapon)}
                  className={`${rowClass} hover:bg-[#e8dac1]/60 transition-colors cursor-pointer group`}
                  title="Clique para ver os detalhes da arma"
                >
                  {/* Nome e Tags (Linha Única) */}
                  <td className="px-4 py-3 text-sm font-medium text-amber-950 align-middle border-r-2 border-amber-900/10">
                    <div className="font-bold text-amber-950 font-serif text-lg group-hover:text-red-800 transition-colors">
                      {weapon.name}
                    </div>
                    <div className="text-[10px] text-amber-950/60 mt-0.5 uppercase tracking-widest font-bold">
                        {weapon.proficiency} • {weapon.grip}
                    </div>
                  </td>
                  
                  {/* Outras Células */}
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{weapon.purpose}</td>
                  <td className="px-3 py-3 text-sm text-red-800 font-bold text-center align-middle border-r-2 border-amber-900/10 font-serif">{weapon.price}</td>
                  <td className="px-3 py-3 text-sm text-red-800 font-bold text-center align-middle border-r-2 border-amber-900/10 font-serif">{weapon.damage}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{weapon.critical}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{weapon.range}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{weapon.type}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle font-serif font-medium">{weapon.spaces}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {filteredWeapons.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhuma arma encontrada com os filtros aplicados.
          </div>
        )}
      </div>

      {/* PAINEL LATERAL (DRAWER) - EXIBE APENAS SE UMA ARMA ESTIVER SELECIONADA */}
      {selectedWeapon && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Fundo Escuro (Overlay) - Clica para fechar */}
          <div 
            className="absolute inset-0 bg-[#2a1810]/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedWeapon(null)}
          />

          {/* O Painel em si */}
          <div 
            className="relative w-full max-w-md h-full bg-[#fbf5e6] border-l-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          >
            {/* Cabeçalho do Painel */}
            <div className="bg-[#e8dac1] border-b-2 border-amber-900/20 p-6 flex justify-between items-start z-10 shadow-sm">
              <div>
                <h2 className="text-3xl font-bold text-red-800 drop-shadow-sm tracking-wide">{selectedWeapon.name}</h2>
                <div className="text-[10px] font-bold text-amber-950/60 uppercase tracking-widest mt-1">
                  {selectedWeapon.proficiency} • {selectedWeapon.grip}
                </div>
              </div>
              <button
                onClick={() => setSelectedWeapon(null)}
                className="text-amber-950/70 hover:text-red-800 hover:bg-amber-900/10 border-2 border-transparent hover:border-amber-900/20 p-2 rounded-full transition-all flex items-center justify-center w-10 h-10 font-sans text-xl pb-3 shadow-sm"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            {/* Corpo do Painel (Rolável) */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6 custom-scrollbar bg-[url('/noise.png')]">
              
              {/* Grid de Atributos */}
              <div className="grid grid-cols-2 gap-4 bg-[#e8dac1]/50 p-5 rounded-xl border-2 border-amber-900/20 shadow-sm">
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Dano / Crítico</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedWeapon.damage} <span className="text-amber-950/70 text-sm">({selectedWeapon.critical})</span></span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Preço</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedWeapon.price}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Tipo de Dano</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.type}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Alcance</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.range}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Propósito</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.purpose}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Espaços</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.spaces}</span>
                </div>
              </div>

              {/* Descrição Narrativa */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-3 tracking-wide">
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                  Descrição
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                </h3>
                <p className="text-amber-950/85 text-base leading-relaxed whitespace-pre-wrap font-medium">
                  {formatTextWithBold(selectedWeapon.description)}
                </p>
                
                {/* Imagem (Se existir) */}
                {selectedWeapon.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/10">
                  <h3 className="text-amber-950/50 text-[10px] uppercase tracking-widest mb-4 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/20 shadow-sm bg-[#e8dac1]/50 max-w-2xl mx-auto p-4 flex justify-center">
                    <img
                      src={selectedWeapon.image}
                      alt={selectedWeapon.name}
                      className="w-full h-auto object-contain mix-blend-multiply max-h-48"
                    />
                  </div>
                </section>
              )}
              </div>
            </div>

            {/* Rodapé do Painel (Origem) */}
            <div className="bg-[#e8dac1] p-5 border-t-2 border-amber-900/20 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-center">
              <div className="text-[10px] px-3 py-1 rounded bg-[#fbf5e6] font-bold text-amber-950/70 uppercase tracking-widest text-center shadow-sm border border-amber-900/20">
                {formatOrigin(selectedWeapon.origin)}
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
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Armas</span>
            </div>
        </div>
      </header>
      

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Armas
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Introdução (Regras e Tabela de Dano) */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Armas
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir proficiências, habilidades e a tabela de dano.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium mb-6">
                    Armas são classificadas de acordo com a proficiência necessária para usá-la (simples, marciais, exóticas ou de fogo), propósito (ataque corpo a corpo ou à distância) e empunhadura (leve, uma mão ou duas mãos).
                </p>
              </section>

              {/* Proficiência */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Proficiência</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armas Simples.</strong> Armas de manejo fácil, como adagas, clavas e lanças. Todos os personagens sabem usar armas simples.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armas Marciais.</strong> Espadas, machados e outras armas de uso específico de combatentes. Bárbaros, bardos, bucaneiros, caçadores, cavaleiros, guerreiros, nobres e paladinos sabem usar armas marciais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armas Exóticas.</strong> Armas difíceis de dominar, como a corrente de espinhos e a espada bastarda. Exigem treinamento específico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armas de Fogo.</strong> Armas de pólvora são raras em Arton, por isso exigem treinamento específico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Penalidade por Não Proficiência.</strong> Se você atacar com uma arma com a qual não seja proficiente, sofre –5 nos testes de ataque.</span>
                  </li>
                </ul>
                <p className="font-medium mt-6 italic text-amber-950/70 border-l-4 border-amber-900/30 pl-4 py-2 bg-[#e8dac1]/50 rounded-r">
                    Todas as criaturas são proficientes em ataques desarmados e em suas armas naturais (veja quadro).
                </p>
              </section>

              {/* Propósito */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Propósito</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Corpo a Corpo.</strong> Podem ser usadas para atacar alvos adjacentes. Para atacar com uma arma de combate corpo a corpo, faça um teste de Luta. Quando você ataca com uma arma corpo a corpo, soma sua Força às rolagens de dano.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ataque à Distância.</strong> Podem ser usadas para atacar alvos adjacentes ou à distância. Para atacar com uma arma de combate à distância, faça um teste de Pontaria. São subdivididas em de arremesso e de disparo:</span>
                  </li>
                </ul>
                
                <div className="ml-4 md:ml-8 mt-4 space-y-4">
                    <p className="font-medium border-l-2 border-red-800 pl-4">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Arremesso.</strong> A própria arma é atirada, como uma adaga ou azagaia. Sacar uma arma de arremesso é uma ação de movimento. Quando você ataca com uma arma de arremesso, soma sua Força às rolagens de dano.
                    </p>
                    <p className="font-medium border-l-2 border-red-800 pl-4">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Disparo.</strong> A arma dispara um projétil, como um arco atira flechas. Sacar a munição de uma arma de disparo é uma ação livre. Recarregar uma arma de disparo exige as duas mãos. Quando ataca com uma arma de disparo, não soma nenhum valor de atributo às rolagens de dano.
                    </p>
                </div>
              </section>

              {/* Empunhadura */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Empunhadura</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Leve.</strong> Esta arma é usada com uma mão e se beneficia do poder Acuidade com Arma.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Uma mão.</strong> Esta arma é usada com uma mão, deixando a outra mão livre para outros fins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Duas mãos.</strong> Esta arma é usada com as duas mãos. Livrar uma mão é uma ação livre. Reempunhá-la é uma ação de movimento (ou livre, se você puder sacá-la dessa forma).</span>
                  </li>
                </ul>
              </section>

              {/* Características das Armas */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Características das Armas</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Preço.</strong> Inclui acessórios básicos, como bainhas para lâminas e aljavas para flechas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Dano.</strong> Quando você acerta um ataque, rola o dano indicado (acrescente modificadores, se houver). O resultado é subtraído dos pontos de vida do alvo. O dano na tabela se refere a armas normais, para criaturas Pequenas e Médias. Veja a Tabela Dano de Armas para armas menores ou maiores.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Crítico.</strong> Quando você acerta um ataque rolando um 20 natural (ou seja, o dado mostra um 20), faz um acerto crítico. Neste caso, multiplique os dados de dano por 2. Bônus numéricos e dados extras (como pela habilidade Ataque Furtivo) não são multiplicados. Certas armas fazem críticos em margem maior que 20 ou multiplicam o dano por um valor maior que 2.</span>
                  </li>
                </ul>

                <div className="ml-4 md:ml-10 mt-4 space-y-2 text-sm text-amber-950/85">
                    <p className="font-medium"><strong className="text-red-800 font-bold">19.</strong> A arma tem margem de ameaça 19 ou 20.</p>
                    <p className="font-medium"><strong className="text-red-800 font-bold">18.</strong> A arma tem margem de ameaça 18, 19 ou 20.</p>
                    <p className="font-medium"><strong className="text-red-800 font-bold">x2, x3, x4.</strong> A arma causa dano dobrado, triplicado ou quadruplicado em caso de acerto crítico.</p>
                    <p className="font-medium"><strong className="text-red-800 font-bold">19/x3.</strong> A arma tem margem de ameaça 19 ou 20 e causa dano triplicado em caso de acerto crítico.</p>
                </div>

                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Alcance.</strong> Armas com alcance podem ser usadas para ataques à distância. As categorias de alcance são curto (9m), médio (30m) e longo (90m). Você pode atacar dentro do alcance sem sofrer penalidades. Você pode atacar até o dobro do alcance, mas sofre –5 no teste de ataque. Armas sem alcance podem ser arremessadas em alcance curto com –5 no teste de ataque.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Tipo.</strong> Armas tipicamente causam dano por corte (C), impacto (I) ou perfuração (P). Certas criaturas são resistentes ou imunes a certos tipos de dano.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Espaço.</strong> Quantos espaços a arma ocupa, importante para a capacidade de carga do personagem.</span>
                  </li>
                </ul>
              </section>

              {/* Habilidades de Armas */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Habilidades de Armas</h2>
                <p className="font-medium mb-6">Algumas armas possuem uma ou mais das habilidades a seguir.</p>
                
                <ul className="space-y-4 pl-2 md:pl-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Adaptável.</strong> Uma arma de uma mão com esta habilidade pode ser usada com as duas mãos para aumentar seu dano em um passo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ágil.</strong> Pode ser usada com Acuidade com Arma, mesmo não sendo uma arma leve.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Alongada.</strong> Dobra o alcance natural do atacante, mas não permite atacar um adversário adjacente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Desbalanceada.</strong> Impõe uma penalidade de –2 em testes de ataque.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Dupla.</strong> Pode ser usada com Estilo de Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve. Cada “ponta” conta como uma arma separada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Versátil.</strong> Fornece bônus em uma ou mais manobras (cumulativo com outros bônus de itens), conforme a arma.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ocultável.</strong> O tamanho e/ou formato da arma tornam mais fácil escondê-la. Ela fornece +5 em testes de Ladinagem para ocultá-la. A adaga é uma arma ocultável.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Surpreendente.</strong> Uma vez por cena, se você sacar a arma como ação livre e usá-la para atacar no mesmo turno, o oponente fica desprevenido contra esse ataque.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Híbrida.</strong> Uma arma híbrida possui dois ou mais modos de uso. Quando usa a arma, você considera apenas as características do modo que está usando e aplica apenas habilidades e efeitos que afetem este modo. Trocar de modo normalmente é uma ação de movimento (ou livre, se você tiver Saque Rápido). Aplicar melhorias e encantos em uma arma híbrida custa o dobro do preço em tibares.</span>
                  </li>
                </ul>
              </section>

              {/* Passos de Dano & Tabela */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Passos de Dano</h2>
                <p className="font-medium mb-6">
                    Alguns efeitos podem aumentar ou diminuir o dano da arma em um ou mais “passos”. Consulte a Tabela Dano de Armas.
                </p>
                
                <div className="w-full">
                    <DamageTable data={damageProgressionTable} />
                </div>
              </section>

              {/* Ataques Desarmados & Armas Naturais */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Ataques Desarmados & Armas Naturais</h2>
                <p className="font-medium mb-4">
                    Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal (1d3 pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado.
                </p>
                <p className="font-medium">
                    Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.
                </p>
              </section>

              {/* Munições */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Munições</h2>
                <p className="font-medium mb-4">
                    Projéteis usados em armas de disparo. Munição é vendida em pacotes com projéteis suficientes para 20 ataques. Sempre que você faz um ataque com uma arma de disparo, a munição é perdida, independentemente de o ataque acertar ou não.
                </p>
                <p className="font-medium">
                    Pacotes de munições podem receber melhorias e encantos como armas (mas efeitos de munições não acumulam com os da arma de disparo). O aumento no preço de um pacote de munição superior ou mágico é metade do aumento de uma arma (uma munição com uma melhoria, por exemplo, custa +T$ 150, em vez de +T$ 300).
                </p>
              </section>

            </div>
          </div>
        </div>

        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Arsenal
            </h2>
            <WeaponFilterableTable allWeapons={weapons} />
        </section>

      </main>

      {/* Footer */}
      <footer className=" mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}