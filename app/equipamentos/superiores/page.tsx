"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  priceImprovements,
  improvements,
  materialPrices,
} from "@/data/superior_items";
import {
  Improvement,
  PriceImprovement,
  ItemCategory,
  MaterialPriceRow,
  MaterialItemCategory
} from "@/types/superior_item";

// --- Componentes Auxiliares ---

// 1. Tabela de Preço de Melhorias (Tabela 3-7)
const PriceTable = ({ data }: { data: PriceImprovement[] }) => (
  <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 w-full bg-[#e8dac1]">
    <table className="min-w-full divide-y-2 divide-amber-900/20">
      <caption className="p-4 md:p-5 text-xl font-bold text-red-800 bg-[#e8dac1] border-b-2 border-amber-900/20 uppercase tracking-widest text-left font-serif">
        Tabela: Preço de Melhorias
      </caption>
      <thead className="bg-[#d9c8a9] text-amber-950/80 font-serif">
        <tr>
          <th scope="col" className="px-4 py-3 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Número de Melhorias</th>
          <th scope="col" className="px-4 py-3 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Aumento no Preço</th>
          <th scope="col" className="px-4 py-3 text-center text-xs md:text-sm font-bold uppercase tracking-widest">Aumento na CD</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10 font-serif">
        {data.map((item, index) => (
          <tr key={item.level} className={`transition-colors hover:bg-[#e8dac1]/50 ${index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30"}`}>
            <td className="px-4 py-3 whitespace-nowrap text-base md:text-lg font-bold text-amber-950 text-center border-r-2 border-amber-900/10">{item.level}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-red-800 font-bold text-center border-r-2 border-amber-900/10">{item.priceIncrease}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm md:text-base text-amber-950/85 font-medium text-center">{item.cdIncrease}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 2. Tabela de Melhorias (Tabela 3-8)
const ImprovementTable = ({ allImprovements }: { allImprovements: Improvement[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | "Todos">("Todos");

  const allCategories: ItemCategory[] = [
    "Arma",
    "Armadura",
    "Escudo",
    "Esotérico",
    "Vestuário",
    "Ferramenta",
    "Munição",
    "Qualquer",
  ];

  const filteredImprovements = useMemo(() => {
    let filtered = allImprovements;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(imp => {
        if (selectedCategory === "Qualquer") {
          return imp.category.includes("Qualquer");
        }
        if (selectedCategory === "Munição") {
          return imp.category.includes("Munição");
        }
        return imp.category.includes(selectedCategory) || imp.category.includes("Qualquer");
      });
    }

    if (lowerCaseSearch) {
      filtered = filtered.filter(imp => 
        imp.name.toLowerCase().includes(lowerCaseSearch) ||
        imp.effect.toLowerCase().includes(lowerCaseSearch) ||
        imp.description.toLowerCase().includes(lowerCaseSearch) ||
        imp.origin?.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allImprovements, searchTerm, selectedCategory]);
  
  return (
    <div className="space-y-6">
       
      <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
        <label className="block text-sm font-bold text-amber-950/70 mb-4 uppercase tracking-widest">
            Filtros e Busca
        </label>
        
        <div className="flex flex-col gap-6">
            <div className="p-4 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm">
                <h4 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">Filtrar por Categoria de Item</h4>
                <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setSelectedCategory("Todos")}
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
                    selectedCategory === "Todos"
                        ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                        : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                >
                    Todos
                </button>
                {allCategories.map(category => (
                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
                        selectedCategory === category
                            ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                            : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>

            <div className="relative">
                <input type="text"
                    placeholder="Buscar melhoria por nome, efeito ou descrição..."
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

      <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed">
          <thead className="bg-[#d9c8a9] text-amber-950/80 font-serif">
            <tr>
              <th scope="col" className="w-[20%] px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                  Melhoria & Categorias
              </th>
              <th scope="col" className="w-[80%] px-4 py-4 text-left text-xs md:text-sm font-bold uppercase tracking-widest">
                  Efeito & Descrição Detalhada
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 font-serif">
            {filteredImprovements.map((item, index) => (
              <tr key={item.id} className={`transition-colors hover:bg-[#e8dac1]/50 ${index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30"}`}>
                <td className="px-4 py-4 align-top border-r-2 border-amber-900/10">
                  <div className="text-base md:text-lg font-bold text-amber-950 mb-2">
                      {item.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.category.map((cat, i) => (
                        <span key={i} className="text-[10px] md:text-xs px-2 py-0.5 rounded bg-amber-900/10 border border-amber-900/20 text-amber-950/80 font-bold">
                            {cat}
                        </span>
                    ))}
                  </div>
                  <div className="text-[9px] md:text-[10px] inline-block px-2 py-1 rounded bg-[#e8dac1]/50 border border-amber-900/20 text-amber-950/60 uppercase tracking-widest shadow-sm font-bold">
                      {item.origin}
                  </div>
                </td>
                
                <td className="px-4 py-4 align-top">
                  <div className="text-sm md:text-base text-amber-950/90 font-bold italic mb-2 pb-2 border-b border-amber-900/10">
                      Efeito: {item.effect}
                  </div>
                  <p className="text-sm md:text-base text-amber-950/80 whitespace-pre-line font-medium leading-relaxed">
                      {item.description}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredImprovements.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhuma melhoria encontrada com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Tabela de Preço Adicional de Materiais Especiais (Tabela 3-9) - TOTALMENTE REFEITA
const MaterialPriceTable = ({ allPrices }: { allPrices: MaterialPriceRow[] }) => {
  const [selectedItemCategory, setSelectedItemCategory] = useState<MaterialItemCategory | "Todos">("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const itemCategories: MaterialItemCategory[] = ["Arma", "Armadura Leve", "Armadura Pesada", "Escudo", "Esotéricos"];

  const columnsToShow = useMemo(() => {
    if (selectedItemCategory === "Todos") {
      return itemCategories;
    }
    return [selectedItemCategory];
  }, [selectedItemCategory]);

  const filteredPrices = useMemo(() => {
    let result = [...allPrices];
    const lowerCaseSearch = searchTerm.toLowerCase();
    
    if (lowerCaseSearch) {
      result = result.filter(priceRow => {
        if (priceRow.material.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.origin?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_arma?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_armadura?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_escudo?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_esoterico?.toLowerCase().includes(lowerCaseSearch)) return true;
        return false;
      });
    }

    return result.sort((a, b) => a.material.localeCompare(b.material, "pt-BR"));
  }, [allPrices, searchTerm]);

  return (
    <div className="space-y-6">
      
      {/* Filtros e Busca agrupados num Card */}
      <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
        <label className="block text-sm font-bold text-amber-950/70 mb-4 uppercase tracking-widest">
            Filtros e Busca
        </label>
        
        <div className="flex flex-col gap-6">
            <div className="p-4 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm">
                <h4 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">Filtrar por Categoria de Item</h4>
                <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setSelectedItemCategory("Todos")}
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
                    selectedItemCategory === "Todos"
                        ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                        : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                >
                    Todos
                </button>
                {itemCategories.map(category => (
                    <button
                    key={category}
                    onClick={() => setSelectedItemCategory(category)}
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
                        selectedItemCategory === category
                        ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                        : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                    >
                    {category}
                    </button>
                ))}
                </div>
            </div>

            <div className="relative">
                <input type="text"
                    placeholder="Buscar material por nome ou descrição..."
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

      {/* Tabela de Preços de Materiais */}
      <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed">
          <caption className="p-4 md:p-5 text-xl md:text-2xl font-bold text-red-800 bg-[#e8dac1] border-b-2 border-amber-900/20 uppercase tracking-widest text-left font-serif">
            Tabela: Preço Adicional de Materiais Especiais
          </caption>
          <thead className="bg-[#d9c8a9] text-amber-950/80 font-serif">
            <tr>
              {/* O tamanho da coluna principal foi ajustado para manter a proporção correta */}
              <th scope="col" className="w-[60%] lg:w-[70%] px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                Material & Propriedades
              </th>
              <th scope="col" className="w-[40%] lg:w-[30%] px-4 py-3 text-left md:text-center text-xs md:text-sm font-bold uppercase tracking-widest">
                {selectedItemCategory === "Todos" ? "Custos Adicionais" : `Custo Adicional`}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 font-serif">
            {filteredPrices.map((priceRow, index) => (
              <tr key={priceRow.material} className={`transition-colors hover:bg-[#e8dac1]/50 ${index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30"}`}>
                
                {/* Coluna 1: Nome, Descrição e Efeitos Específicos */}
                <td className="px-4 py-4 align-top border-r-2 border-amber-900/10">
                  <div className="flex flex-col items-start gap-2 mb-3">
                    <span className="text-lg md:text-xl font-bold text-amber-950">
                        {priceRow.material}
                    </span>
                    <span className="text-[9px] md:text-[10px] px-2 py-1 rounded bg-[#e8dac1]/50 border border-amber-900/20 text-amber-950/60 uppercase tracking-widest shadow-sm font-bold">
                        {priceRow.origin}
                    </span>
                  </div>
                  
                  <p className="text-amber-950/85 text-sm md:text-base whitespace-pre-line font-medium leading-relaxed mb-4"> 
                    {priceRow.description}
                  </p>
                  
                  <div className="space-y-2">
                    {priceRow.description_arma && (
                      <p className="text-amber-950/80 text-sm md:text-base whitespace-pre-line font-medium leading-relaxed bg-amber-900/5 p-2 rounded border border-amber-900/10">
                          <span className="font-bold text-red-800 mr-1 uppercase tracking-wide text-xs block mb-1">Armas:</span> 
                          {priceRow.description_arma}
                      </p>
                    )}
                    {priceRow.description_armadura && (
                      <p className="text-amber-950/80 text-sm md:text-base whitespace-pre-line font-medium leading-relaxed bg-amber-900/5 p-2 rounded border border-amber-900/10">
                          <span className="font-bold text-red-800 mr-1 uppercase tracking-wide text-xs block mb-1">Armaduras & Escudos:</span> 
                          {priceRow.description_armadura}
                      </p>
                    )}
                    {priceRow.description_escudo && (
                      <p className="text-amber-950/80 text-sm md:text-base whitespace-pre-line font-medium leading-relaxed bg-amber-900/5 p-2 rounded border border-amber-900/10">
                          <span className="font-bold text-red-800 mr-1 uppercase tracking-wide text-xs block mb-1">Escudos:</span> 
                          {priceRow.description_escudo}
                      </p>
                    )}    
                    {priceRow.description_esoterico && (
                      <p className="text-amber-950/80 text-sm md:text-base whitespace-pre-line font-medium leading-relaxed bg-amber-900/5 p-2 rounded border border-amber-900/10">
                          <span className="font-bold text-red-800 mr-1 uppercase tracking-wide text-xs block mb-1">Esotéricos:</span> 
                          {priceRow.description_esoterico}
                      </p>
                    )}
                  </div>
                </td>

                {/* Coluna 2: Cards de Custos */}
                <td className="px-4 py-4 align-top bg-amber-900/5">
                  <div className="flex flex-col gap-3">
                    {columnsToShow.map(category => {
                      const currentPrice = priceRow[category as keyof MaterialPriceRow];
                      // Se por acaso um material não tiver preço para a categoria, podemos ignorar, mas assumindo que tem:
                      if (!currentPrice || currentPrice === "-") return null;

                      return (
                        <div key={category} className="flex flex-col xl:flex-row justify-between xl:items-center bg-[#fbf5e6] p-3 rounded-lg border border-amber-900/20 shadow-sm transition-transform hover:scale-[1.02]">
                          <span className="text-[10px] md:text-xs font-bold text-amber-950/60 uppercase tracking-wider mb-1 xl:mb-0">
                            {category}
                          </span>
                          <span className="text-sm md:text-base font-bold text-red-800 whitespace-nowrap">
                            {currentPrice}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        {filteredPrices.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhum material encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function SuperiorItemsPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
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
                <span className="text-red-800">Itens Superiores</span>
            </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Itens Superiores
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

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
                  Regras Gerais e Fabricação
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir o guia de fabricação, materiais e a tabela de preços extras.
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
                <p className="font-medium mb-4">Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
                <p className="font-medium">Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Melhorias</h2>
                <p className="font-medium mb-6">Apenas itens das categorias armas, armaduras e escudos, ferramentas, vestuário e esotéricos podem receber melhorias (Outras melhorias são retiradas da Dragão Brasil). As melhorias para cada categoria de item estão listadas na Tabela <strong>Melhorias</strong>. Cada melhoria só pode ser aplicada uma vez a um mesmo item.</p>
                
                <div className="mb-6 max-w-3xl mx-auto">
                    <PriceTable data={priceImprovements} />
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Materiais Especiais</h2>
                <p className="font-medium">Armas, armaduras, escudos e esotéricos podem ser feitos ou banhados de um material especial. Para isso, o item precisa ter a melhoria material especial e você precisa pagar o preço extra do material escolhido.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Fabricando Itens Superiores</h2>
                <p className="font-medium mb-4">Itens superiores só podem ser fabricados por personagens com a habilidade Fabricar Item Superior. A fabricação deles segue a mesma regra de itens normais, porém, de acordo com o número de melhorias, o preço e a CD do teste de Ofício aumentam.</p>
                <p className="font-medium mb-4">Por exemplo, o preço de uma couraça é T$ 500. Fabricá-la exige um gasto de T$ 166 (um terço do preço) e um teste de Ofício contra CD 15. Já o preço de uma couraça com duas melhorias é T$ 3.500 (T$ 500 + T$ 3.000 das duas melhorias). Fabricá-la exige um gasto de T$ 1.166 (um terço do preço) e um teste de Ofício contra CD 25 (15 da CD base + 10 das duas melhorias).</p>
                <p className="font-medium">É possível adicionar melhorias a um item. Você paga a diferença de acordo com o novo número de melhorias. Por exemplo, para adicionar a terceira melhoria a um item que já possui duas, você precisa pagar mais T$ 2.000 (um terço da diferença de três para duas melhorias). Além disso, deve fazer um teste de Ofício contra a CD do número de melhorias que o item passará a ter e, se falhar por 5 ou mais, estraga o item.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Tabela de Melhorias */}
        <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Acervo de Melhorias
            </h2>
            <ImprovementTable allImprovements={improvements} />
        </section>

        {/* Tabela de Materiais Especiais */}
        <section className="w-full">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide pt-8 border-t-2 border-amber-900/20">
                <span className="text-red-800 text-3xl">❖</span> Acervo de Materiais Especiais
            </h2>
            <MaterialPriceTable allPrices={materialPrices} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
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