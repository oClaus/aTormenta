"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// --- Importações de Armaduras Gerais ---
import { armors } from "@/data/armors";
import { Armor, ArmorType } from "@/types/armors";

// --- Importações de Armaduras Mágicas ---
import { enchantments, specificWeapons } from "@/data/magicarmor";
import { Enchantment, SpecificWeapon } from "@/types/magic";

// --- Helpers de Formatação ---

// Helper Original da Página de Armaduras (Gerais)
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
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>');

    return <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif" />;
  });
};

// --- COMPONENTES DE ARMADURAS GERAIS (MANTIDOS INTOCADOS) ---

const ArmorFilterableTable = ({ allArmors }: { allArmors: Armor[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArmor, setSelectedArmor] = useState<Armor | null>(null);
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

    if (lowerCaseSearch) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allArmors, searchTerm, filters]);

  const allTypes: ArmorType[] = ["Leve", "Pesada", "Escudo"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm">
      <h4 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as ArmorType)}
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
      <div className="relative">
        <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Armadura/Escudo
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar proteção por nome, descrição ou origem..."
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[#d9c8a9] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="w-[30%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Armadura / Escudo</th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Preço</th>
              <th scope="col" className="w-[20%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Bônus Defesa</th>
              <th scope="col" className="w-[20%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Penalidade</th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
            {filteredArmors.map((armor, index) => {
               const rowClass = index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30";
               
               return (
                <tr 
                  key={armor.id}
                  onClick={() => setSelectedArmor(armor)}
                  className={`${rowClass} hover:bg-[#e8dac1]/60 transition-colors cursor-pointer group`}
                  title="Clique para ver os detalhes da armadura"
                >
                  <td className="px-4 py-3 text-sm font-medium text-amber-950 align-middle border-r-2 border-amber-900/10">
                    <div className="font-bold text-amber-950 font-serif text-lg group-hover:text-red-800 transition-colors">{armor.name}</div>
                    <div className="text-[10px] text-amber-950/60 mt-0.5 uppercase tracking-widest font-bold">{armor.type}</div>
                  </td>
                  <td className="px-3 py-3 text-sm text-red-800 font-bold text-center align-middle border-r-2 border-amber-900/10 font-serif">{armor.price}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">+{armor.defenseBonus}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{armor.armorPenalty}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle font-serif font-medium">{armor.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredArmors.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhuma armadura ou escudo encontrado com os filtros aplicados.
          </div>
        )}
      </div>

      {selectedArmor && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-[#2a1810]/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedArmor(null)}
          />
          <div 
            className="relative w-full max-w-md h-full bg-[#fbf5e6] border-l-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          >
            <div className="bg-[#e8dac1] border-b-2 border-amber-900/20 p-6 flex justify-between items-start z-10 shadow-sm">
              <div>
                <h2 className="text-3xl font-bold text-red-800 drop-shadow-sm tracking-wide">{selectedArmor.name}</h2>
                <div className="text-[10px] font-bold text-amber-950/60 uppercase tracking-widest mt-1">
                  {selectedArmor.type}
                </div>
              </div>
              <button
                onClick={() => setSelectedArmor(null)}
                className="text-amber-950/70 hover:text-red-800 hover:bg-amber-900/10 border-2 border-transparent hover:border-amber-900/20 p-2 rounded-full transition-all flex items-center justify-center w-10 h-10 font-sans text-xl pb-3 shadow-sm"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow space-y-6 custom-scrollbar bg-[url('/noise.png')]">
              <div className="grid grid-cols-2 gap-4 bg-[#e8dac1]/50 p-5 rounded-xl border-2 border-amber-900/20 shadow-sm">
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Preço</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedArmor.price}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Bônus Defesa</span>
                  <span className="font-bold text-amber-950/85 text-lg">+{selectedArmor.defenseBonus}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Penalidade</span>
                  <span className="font-bold text-amber-950/85">{selectedArmor.armorPenalty}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Espaços</span>
                  <span className="font-bold text-amber-950/85">{selectedArmor.spaces}</span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-3 tracking-wide">
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                  Descrição
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                </h3>
                <p className="text-amber-950/85 text-base leading-relaxed whitespace-pre-wrap font-medium">
                  {formatTextWithBold(selectedArmor.description)}
                </p>
                
                {selectedArmor.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/10">
                  <h3 className="text-amber-950/50 text-[10px] uppercase tracking-widest mb-4 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/20 shadow-sm bg-[#e8dac1]/50 max-w-2xl mx-auto p-4 flex justify-center">
                    <img
                      src={selectedArmor.image}
                      alt={selectedArmor.name}
                      className="w-full h-auto object-contain mix-blend-multiply max-h-48"
                    />
                  </div>
                </section>
              )}
              </div>
            </div>

            <div className="bg-[#e8dac1] p-5 border-t-2 border-amber-900/20 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-center">
              <div className="text-[10px] px-3 py-1 rounded bg-[#fbf5e6] font-bold text-amber-950/70 uppercase tracking-widest text-center shadow-sm border border-amber-900/20">
                Origem: {selectedArmor.origin}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// --- COMPONENTES DE ARMADURAS MÁGICAS ---

const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => (
  <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
      <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">{enchantment.name}</h3>
    </div>
    <div className="text-sm flex-grow font-serif text-amber-950/85 leading-relaxed font-medium">
      {formatTextWithBreaks(enchantment.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">{enchantment.origin}</span>
    </div>
  </div>
);

const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => (
  <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex flex-col items-start gap-3">
      <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">{weapon.name}</h3>
      <span className="inline-block px-2.5 py-1 bg-[#fbf5e6] border border-amber-900/20 shadow-sm rounded text-[10px] text-red-800 font-bold uppercase tracking-widest">Preço: T$ {weapon.price}</span>
    </div>
    <div className="text-sm pt-1 text-amber-950/85 flex-grow font-serif font-medium leading-relaxed">
      {formatTextWithBreaks(weapon.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">{weapon.origin}</span>
    </div>
  </div>
);


// --- PÁGINA PRINCIPAL INTEGRADA ---

export default function ArmadurasPage() {
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
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
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
                <span className="text-red-800">Armaduras</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-8 md:mb-10 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Armaduras & Escudos
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Sistema de Abas Unificado */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#e8dac1] p-2 rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-fit">
            <button 
                onClick={() => setActiveTab('gerais')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'gerais' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Armaduras Gerais
            </button>
            <button 
                onClick={() => setActiveTab('encantos')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'encantos' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Encantos
            </button>
            <button 
                onClick={() => setActiveTab('especificas')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'especificas' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Armaduras Específicas
            </button>
        </div>

        {/* --- ABA 1: ARMADURAS GERAIS --- */}
        {activeTab === 'gerais' && (
          <div className="animate-in fade-in duration-500">
            {/* Acordeão de Regras */}
            <div className="mb-12 w-full">
              <button 
                onClick={() => setIsIntroOpen(!isIntroOpen)}
                className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl opacity-70">📜</span>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                      Regras de Defesa
                    </h2>
                    <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                      Clique para expandir as regras de armaduras, escudos e penalidades.
                    </p>
                  </div>
                </div>
                <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
                <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
                  
                  {/* Armaduras */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Armaduras</h2>
                    <p className="font-medium mb-6">
                      Armaduras são classificadas em <strong className="text-red-800">leves e pesadas</strong>, de acordo com a sua facilidade de uso e mobilidade.
                    </p>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armaduras Leves.</strong> Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma <strong className="text-red-800">ação completa</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armaduras Pesadas.</strong> Feitas de cota de malha ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, <strong className="text-red-800">você não aplica sua Destreza na Defesa</strong> e tem seu <strong className="text-red-800">deslocamento reduzido em 3m</strong>. Vestir ou remover uma armadura pesada <strong className="text-red-800">demora cinco minutos</strong>. <strong className="text-red-800">Dormir de armadura pesada deixa você fatigado pelo dia</strong>.</span>
                      </li>
                    </ul>
                  </section>

                  {/* Escudos */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Escudos</h2>
                    <p className="font-medium mb-6">
                      Existem escudos <strong className="text-red-800">leves</strong> e <strong className="text-red-800">pesados</strong>. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma <strong className="text-red-800">ação de movimento</strong>.
                    </p>

                    <div className="space-y-4 ml-2 md:ml-4 border-l-4 border-amber-900/20 pl-4">
                      <h3 className="text-xl font-bold text-amber-950 uppercase tracking-wide">Ataque com Escudo</h3>
                      <p className="font-medium">
                        Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas <strong className="text-red-800">perde seu bônus na Defesa até seu próximo turno</strong> se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos <strong className="text-red-800">não contam como armas</strong>.
                      </p>
                    </div>
                  </section>

                  {/* Penalidade por Não Proficiência */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Penalidade por Não Proficiência</h2>
                    <p className="font-medium">
                      Um personagem vestindo uma armadura ou empunhando escudo que não saiba usar aplica a <strong className="text-red-800">penalidade da armadura em todas as perícias baseadas em Força e Destreza</strong>.
                    </p>
                  </section>

                  {/* Características */}
                  <section className="border-t-2 border-amber-900/20 pt-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Características das Armaduras e Escudos</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Preço.</strong> Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Bônus na Defesa.</strong> Cada armadura fornece um bônus na Defesa do usuário. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas <strong className="text-red-800">não dois escudos</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Penalidade de Armadura.</strong> Aplique a penalidade de armadura em testes de <strong className="text-red-800">Acrobacia, Furtividade e Ladinagem</strong> (e em testes de <strong className="text-red-800">Atletismo para natação</strong>). Penalidades de armaduras e escudos se acumulam.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Espaço.</strong> Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.</span>
                      </li>
                    </ul>
                  </section>

                </div>
              </div>
            </div>

            {/* Tabela Completa e Filtrável (Componente Intocado) */}
            <section className="w-full">
                <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                    <span className="text-red-800 text-3xl">❖</span> Armaduras & Escudos Gerais
                </h2>
                <ArmorFilterableTable allArmors={armors} />
            </section>
          </div>
        )}

        {/* --- ABA 2: ENCANTOS MÁGICOS --- */}
        {activeTab === 'encantos' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide">
              <span className="text-red-800 text-3xl">❖</span>
              Acervo de Encantos
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
              <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Encantamento
              </label>
              <div className="relative">
                  <input 
                      type="text" 
                      placeholder="Nome, descrição ou origem..." 
                      value={enchantmentSearch} 
                      onChange={(e) => setEnchantmentSearch(e.target.value)} 
                      className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm" 
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
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                        🔍
                    </div>
                  )}
              </div>
              {enchantmentSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredEnchantments.length} resultado(s) para "{enchantmentSearch}".
                </p>
              )}
            </div>

            {filteredEnchantments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredEnchantments.map(enc => <EnchantmentCard key={enc.id} enchantment={enc} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <span className="text-4xl opacity-40 mb-4">📜</span>
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum encantamento encontrado com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

        {/* --- ABA 3: ARMADURAS ESPECÍFICAS LENDÁRIAS --- */}
        {activeTab === 'especificas' && (
          <section id="specific-weapons-section" className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span>
                Armaduras & Escudos Específicos
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
              <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Armaduras & Escudos Específicos
              </label>
              <div className="relative">
                  <input 
                      type="text" 
                      placeholder="Nome, descrição ou origem..." 
                      value={magicWeaponSearch} 
                      onChange={(e) => setMagicWeaponSearch(e.target.value)} 
                      className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm" 
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
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                        🔍
                    </div>
                  )}
              </div>
              {magicWeaponSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredSpecificWeapons.length} resultado(s) para "{magicWeaponSearch}".
                </p>
              )}
            </div>

            {filteredSpecificWeapons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredSpecificWeapons.map(w => <SpecificWeaponCard key={w.id} weapon={w} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <span className="text-4xl opacity-40 mb-4">📜</span>
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhuma Armaduras & Escudos Específicos encontrada com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

      </main>

      {/* Estilo para animação do Drawer mantido */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />

      {/* Footer */}
      <footer className=" mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}