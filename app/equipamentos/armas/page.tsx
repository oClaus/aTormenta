"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// Importações de Armas Gerais
import { damageProgressionTable, weapons } from "@/data/weapons";
import { Weapon, DamageProgression, WeaponProficiency, WeaponGrip, DamageType, WeaponPurpose } from "@/types/weapon";
import { formatOrigin } from "@/types/power";

// Importações de Armas Mágicas
import { enchantments, specificWeapons } from "@/data/magics";
import { Enchantment, SpecificWeapon } from "@/types/magic";
import ThemeToggle from "@/components/ThemeToggle";

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

// --- Helpers de Formatação ---

// Helper Original da Página de Armas
const formatTextWithBold = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-red-800">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

// Helper da Página de Magias (Estilo Pergaminho)
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;
  const lines = text.split('\\n');
  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>')
      .replace(/- (.*?)\./g, '<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><span class="font-medium">$1.</span></div>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm italic text-amber-950/85 bg-[rgb(var(--bg-inset-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>');

    return <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif" />;
  });
};


// --- COMPONENTES DE ARMAS GERAIS ---

const DamageTable = ({ data }: { data: DamageProgression[][] }) => {
  const headers = data[0].map(d => d.step);

  return (
    <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm bg-[rgb(var(--bg-card-rgb))]">
      <table className="min-w-full divide-y-2 divide-amber-900/20 font-serif">
        <caption className="font-display p-4 text-xl font-bold text-red-800 bg-[rgb(var(--bg-edge-rgb))] border-b-2 border-amber-900/20 uppercase tracking-widest text-left">
          Tabela Dano de Armas
        </caption>
        <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80 border-b-2 border-amber-900/20">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="font-display px-4 py-3 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20 last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`transition-colors hover:bg-[rgb(var(--bg-card-rgb))]/50 ${rowIndex % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30"}`}>
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

    if (lowerCaseSearch) {
      filtered = filtered.filter(w => w.name.toLowerCase().includes(lowerCaseSearch) ||
        w.description.toLowerCase().includes(lowerCaseSearch) ||
        w.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (filters.proficiency.length > 0) {
      filtered = filtered.filter(w => filters.proficiency.includes(w.proficiency));
    }
    if (filters.grip.length > 0) {
      filtered = filtered.filter(w => filters.grip.includes(w.grip));
    }
    if (filters.type.length > 0) {
      filtered = filtered.filter(w => filters.type.includes(w.type));
    }
    if (filters.purpose.length > 0) {
      filtered = filtered.filter(w => filters.purpose.includes(w.purpose));
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allWeapons, searchTerm, filters]);

  const allProficiencies: WeaponProficiency[] = ["Simples", "Marcial", "Exótica", "Fogo"];
  const allGrips: WeaponGrip[] = ["Leve", "Uma Mão", "Duas Mãos"];
  const allDamageTypes: DamageType[] = ["Corte", "Perfuração", "Impacto", "Corte/Perfuração", "Impacto/Perfuração", "Ácido", "Essência"];
  const allPurposes: WeaponPurpose[] = ["Corpo a Corpo", "Distância", "Munição"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border border-amber-900/20 shadow-sm">
      <h4 className="font-display text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option)}
            className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner"
                : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
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
      <div className="relative">
        <div className="p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Arma
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar arma por nome, descrição ou origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
                  <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
                )}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8">
        {renderFilterGroup("Proficiência", allProficiencies, "proficiency")}
        {renderFilterGroup("Empunhadura", allGrips, "grip")}
        {renderFilterGroup("Tipo de Dano", allDamageTypes, "type")}
        {renderFilterGroup("Propósito", allPurposes, "purpose")}
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[rgb(var(--bg-card-rgb))]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="font-display w-[20%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Nome</th>
              <th scope="col" className="font-display w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Propósito</span><span className="sm:hidden">Prop.</span></th>
              <th scope="col" className="font-display w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Preço</span><span className="sm:hidden">T$</span></th>
              <th scope="col" className="font-display w-[8%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Dano</th>
              <th scope="col" className="font-display w-[9%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Crítico</span><span className="sm:hidden">Crit.</span></th>
              <th scope="col" className="font-display w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Alcance</span><span className="sm:hidden">Alc.</span></th>
              <th scope="col" className="font-display w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Tipo</th>
              <th scope="col" className="font-display w-[5%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest"><span className="hidden sm:inline">Espaços</span><span className="sm:hidden">Esp.</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
            {filteredWeapons.map((weapon, index) => {
              const rowClass = index % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30";
              return (
                <tr
                  key={weapon.id}
                  onClick={() => setSelectedWeapon(weapon)}
                  className={`${rowClass} hover:bg-[rgb(var(--bg-card-rgb))]/60 transition-colors cursor-pointer group`}
                  title="Clique para ver os detalhes da arma"
                >
                  <td className="px-4 py-3 text-sm font-medium text-amber-950 align-middle border-r-2 border-amber-900/10">
                    <div className="font-display font-bold text-amber-950 text-lg group-hover:text-red-800 transition-colors">
                      {weapon.name}
                    </div>
                    <div className="font-display text-[10px] text-amber-950/60 mt-0.5 uppercase tracking-widest font-bold">
                        {weapon.proficiency} • {weapon.grip}
                    </div>
                  </td>
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
          <div className="text-center py-12 text-amber-950/70 bg-[rgb(var(--bg-inset-rgb))] italic text-lg border-t-2 border-amber-900/20 flex flex-col items-center gap-3">
            <PageGlyph className="text-amber-950/40" />
            Nenhuma arma encontrada com os filtros aplicados.
          </div>
        )}
      </div>

      {selectedWeapon && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-[rgb(var(--void-rgb))]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedWeapon(null)}
          />
          <div
            className="relative w-full max-w-md h-full bg-[rgb(var(--bg-inset-rgb))] border-l-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          >
            <div className="bg-[rgb(var(--bg-card-rgb))] border-b-2 border-amber-900/20 p-6 flex justify-between items-start z-10 shadow-sm">
              <div>
                <h2 className="font-display text-3xl font-bold text-red-800 drop-shadow-sm tracking-wide">{selectedWeapon.name}</h2>
                <div className="font-display text-[10px] font-bold text-amber-950/60 uppercase tracking-widest mt-1">
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

            <div className="p-6 overflow-y-auto flex-grow space-y-6 custom-scrollbar">
              <div className="grid grid-cols-2 gap-4 bg-[rgb(var(--bg-card-rgb))]/50 p-5 rounded-xl border-2 border-amber-900/20 shadow-sm">
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Dano / Crítico</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedWeapon.damage} <span className="text-amber-950/70 text-sm">({selectedWeapon.critical})</span></span>
                </div>
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Preço</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedWeapon.price}</span>
                </div>
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Tipo de Dano</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.type}</span>
                </div>
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Alcance</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.range}</span>
                </div>
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Propósito</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.purpose}</span>
                </div>
                <div>
                  <span className="font-display block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Espaços</span>
                  <span className="font-bold text-amber-950/85">{selectedWeapon.spaces}</span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 flex items-center gap-3 tracking-wide">
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                  Descrição
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                </h3>
                <p className="text-amber-950/85 text-base leading-relaxed whitespace-pre-wrap font-medium">
                  {formatTextWithBold(selectedWeapon.description)}
                </p>

                {selectedWeapon.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/10">
                  <h3 className="font-display text-amber-950/50 text-[10px] uppercase tracking-widest mb-4 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/20 shadow-sm bg-[rgb(var(--portrait-rgb))] max-w-2xl mx-auto p-4 flex justify-center">
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

            <div className="bg-[rgb(var(--bg-card-rgb))] p-5 border-t-2 border-amber-900/20 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-center">
              <div className="font-display text-[10px] px-3 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] font-bold text-amber-950/70 uppercase tracking-widest text-center shadow-sm border border-amber-900/20">
                {formatOrigin(selectedWeapon.origin)}
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </div>
  );
};


// --- COMPONENTES DE ARMAS MÁGICAS ---

const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => (
  <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full">
    <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
      <h3 className="font-display text-xl font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors break-words">{enchantment.name}</h3>
    </div>
    <div className="text-sm flex-grow font-serif text-amber-950/85 leading-relaxed font-medium">
      {formatTextWithBreaks(enchantment.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 italic uppercase tracking-widest font-bold shadow-sm inline-block">{enchantment.origin}</span>
    </div>
  </div>
);

const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => (
  <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full">
    <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
    <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex flex-col items-start gap-3">
      <h3 className="font-display text-xl font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors break-words">{weapon.name}</h3>
      <span className="font-display inline-block px-2.5 py-1 bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 shadow-sm rounded text-[10px] text-red-800 font-bold uppercase tracking-widest">Preço: T$ {weapon.price}</span>
    </div>
    <div className="text-sm pt-1 text-amber-950/85 flex-grow font-serif font-medium leading-relaxed">
      {formatTextWithBreaks(weapon.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 italic uppercase tracking-widest font-bold shadow-sm inline-block">{weapon.origin}</span>
    </div>
  </div>
);


// --- PÁGINA PRINCIPAL INTEGRADA ---

export default function ArmasPage() {
  const [activeTab, setActiveTab] = useState<'gerais' | 'encantos' | 'especificas'>('gerais');
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [magicWeaponSearch, setMagicWeaponSearch] = useState("");

  const filteredEnchantments = useMemo(() => {
    const term = enchantmentSearch.toLowerCase();
    return enchantments.filter(enc => enc.name.toLowerCase().includes(term) || enc.description.toLowerCase().includes(term) || enc.origin.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [enchantmentSearch]);

  const filteredSpecificWeapons = useMemo(() => {
    const term = magicWeaponSearch.toLowerCase();
    return specificWeapons.filter(w => w.name.toLowerCase().includes(term) || w.origin.toLowerCase().includes(term) || w.description.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [magicWeaponSearch]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
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
              <ThemeToggle />
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-8 md:mb-10 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Armas
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
        </div>

        {/* Sistema de Abas Unificado */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[rgb(var(--bg-card-rgb))] p-2 rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-fit">
            <button
                onClick={() => setActiveTab('gerais')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'gerais' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Armas Gerais
            </button>
            <button
                onClick={() => setActiveTab('encantos')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'encantos' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Encantos Mágicos
            </button>
            <button
                onClick={() => setActiveTab('especificas')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'especificas' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Armas Específicas
            </button>
        </div>

        {/* --- ABA 1: ARMAS GERAIS --- */}
        {activeTab === 'gerais' && (
          <div className="animate-in fade-in duration-500">
            {/* Acordeão de Introdução (Regras e Tabela de Dano) */}
            <div className="mb-12 w-full">
              <button
                onClick={() => setIsIntroOpen(!isIntroOpen)}
                className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
                  <div className="text-left">
                    <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                      Regras de Armas
                    </h2>
                    <p className="text-sm text-amber-950/70 italic font-bold">
                      Clique para expandir proficiências, habilidades e a tabela de dano.
                    </p>
                  </div>
                </div>
                <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
                <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

                  <section>
                    <p className="font-medium mb-6">
                        Armas são classificadas de acordo com a proficiência necessária para usá-la (simples, marciais, exóticas ou de fogo), propósito (ataque corpo a corpo ou à distância) e empunhadura (leve, uma mão ou duas mãos).
                    </p>
                  </section>

                  {/* Proficiência */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Proficiência</h2>
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
                    <p className="font-medium mt-6 italic text-amber-950/70 border-l-4 border-amber-900/30 pl-4 py-2 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r">
                        Todas as criaturas são proficientes em ataques desarmados e em suas armas naturais (veja quadro).
                    </p>
                  </section>

                  {/* Propósito */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Propósito</h2>
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
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Empunhadura</h2>
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
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Características das Armas</h2>
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
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Habilidades de Armas</h2>
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
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Passos de Dano</h2>
                    <p className="font-medium mb-6">
                        Alguns efeitos podem aumentar ou diminuir o dano da arma em um ou mais “passos”. Consulte a Tabela Dano de Armas.
                    </p>

                    <div className="w-full">
                        <DamageTable data={damageProgressionTable} />
                    </div>
                  </section>

                  {/* Ataques Desarmados & Armas Naturais */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Ataques Desarmados & Armas Naturais</h2>
                    <p className="font-medium mb-4">
                        Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal (1d3 pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado.
                    </p>
                    <p className="font-medium">
                        Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.
                    </p>
                  </section>

                  {/* Munições */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Munições</h2>
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

            {/* Tabela Completa e Filtrável de Armas Comuns */}
            <section className="w-full">
                <h2 className="font-display text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                    <span className="text-red-800 text-3xl">❖</span> Arsenal Geral
                </h2>
                <WeaponFilterableTable allWeapons={weapons} />
            </section>
          </div>
        )}

        {/* --- ABA 2: ENCANTOS MÁGICOS --- */}
        {activeTab === 'encantos' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="font-display text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 mb-6 tracking-wide">
              <span className="text-red-800 text-3xl">❖</span>
              Acervo de Encantos
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
              <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Encantamento
              </label>
              <div className="relative">
                  <input
                      type="text"
                      placeholder="Nome, descrição ou origem..."
                      value={enchantmentSearch}
                      onChange={(e) => setEnchantmentSearch(e.target.value)}
                      className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                  />
                  {enchantmentSearch ? (
                    <button
                      onClick={() => setEnchantmentSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                      title="Limpar busca"
                    >
                      ✕
                    </button>
                  ) : (
                    <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
                  )}
              </div>
              {enchantmentSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredEnchantments.length} resultado(s) para "{enchantmentSearch}".
                </p>
              )}
            </div>

            {filteredEnchantments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                {filteredEnchantments.map(enc => <EnchantmentCard key={enc.id} enchantment={enc} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
                <PageGlyph className="text-amber-950/40" />
                <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum encantamento encontrado com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

        {/* --- ABA 3: ARMAS ESPECÍFICAS LENDÁRIAS --- */}
        {activeTab === 'especificas' && (
          <section id="specific-weapons-section" className="animate-in fade-in duration-500">
            <h2 className="font-display text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 mb-6 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span>
                Armas Específicas
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
              <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Arma Específicas
              </label>
              <div className="relative">
                  <input
                      type="text"
                      placeholder="Nome, descrição ou origem..."
                      value={magicWeaponSearch}
                      onChange={(e) => setMagicWeaponSearch(e.target.value)}
                      className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                  />
                  {magicWeaponSearch ? (
                    <button
                      onClick={() => setMagicWeaponSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                      title="Limpar busca"
                    >
                      ✕
                    </button>
                  ) : (
                    <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
                  )}
              </div>
              {magicWeaponSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredSpecificWeapons.length} resultado(s) para "{magicWeaponSearch}".
                </p>
              )}
            </div>

            {filteredSpecificWeapons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
                {filteredSpecificWeapons.map(w => <SpecificWeaponCard key={w.id} weapon={w} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
                <PageGlyph className="text-amber-950/40" />
                <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                  Nenhuma arma específica encontrada com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}