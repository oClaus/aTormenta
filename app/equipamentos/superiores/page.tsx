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
  MaterialType,
  MaterialItemCategory
} from "@/types/superior_item";

// --- Componentes Auxiliares ---

// 1. Tabela de Preço de Melhorias (Tabela 3-7)
const PriceTable = ({ data }: { data: PriceImprovement[] }) => (
  <div className="overflow-x-auto shadow-lg rounded border-2 border-amber-900/40 w-full">
    <table className="min-w-full divide-y divide-amber-900/20">
      <caption className="p-4 text-xl font-bold text-amber-950 bg-[#c4b090] border-b-2 border-amber-900/30 uppercase tracking-widest text-left font-serif">
        Preço de Melhorias
      </caption>
      <thead className="bg-[#c4b090] text-amber-950">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Número de Melhorias</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Aumento no Preço</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Aumento na CD</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10">
        {data.map((item, index) => (
          <tr key={item.level} className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-amber-900 font-serif border-r border-amber-900/20">{item.level}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-amber-900/90 font-serif border-r border-amber-900/20">{item.priceIncrease}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-amber-900/90 font-serif">{item.cdIncrease}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 2. Tabela de Melhorias (Tabela 3-8) - Filtrável e Responsiva
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
  
  const totalColumns = 3; 

  return (
    <div className="space-y-6">
       {/* Filtros */}
      <div className="p-4 bg-[#dcc8a9] rounded border-2 border-amber-900/30 shadow-sm">
        <h4 className="text-xs font-bold text-amber-900/70 uppercase tracking-wider mb-3">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
              selectedCategory === "Todos"
                ? "bg-red-800 text-white border-red-900 shadow-inner"
                : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700 hover:text-amber-800"
            }`}
          >
            Todos
          </button>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
                selectedCategory === category
                    ? "bg-red-800 text-white border-red-900 shadow-inner"
                    : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700 hover:text-amber-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca */}
      <div className="relative">
        <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative">
                <input type="text"
                    placeholder="Buscar melhoria por nome, efeito, descrição ou origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg rounded border-2 border-amber-900/40 w-full">
        <table className="min-w-full divide-y divide-amber-900/20 table-fixed">
          <thead className="bg-[#c4b090] text-amber-950">
            <tr>
              <th scope="col" className="w-[30%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">
                  <span className="hidden sm:inline">Melhoria</span>
                  <span className="sm:hidden">Nome</span>
              </th>
              <th scope="col" className="w-[55%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">
                  <span className="hidden sm:inline">Efeito Curto</span>
                  <span className="sm:hidden">Efeito</span>
              </th>
              <th scope="col" className="w-[15%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                  <span className="hidden sm:inline">Aplicável em</span>
                  <span className="sm:hidden">Categ.</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredImprovements.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* LINHA 1: Dados Principais */}
                <tr className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                  
                  {/* Nome da Melhoria */}
                  <td className="px-2 py-2 text-sm font-medium text-amber-900 align-top font-serif border-r border-amber-900/20">
                      <div className="font-bold">{item.name}</div>
                  </td>
                  
                  {/* Efeito Curto */}
                  <td className="px-2 py-2 text-sm text-amber-900/90 align-top font-serif border-r border-amber-900/20">
                      {item.effect.substring(0, 50)}{item.effect.length > 50 ? '...' : ''}
                  </td>
                  
                  {/* Aplicável em */}
                  <td className="px-2 py-2 text-sm text-amber-900/80 align-top font-serif italic">
                    {item.category.join(", ")}
                  </td>
                </tr>

                {/* LINHA 2: Descrição Detalhada */}
                <tr className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                    <td colSpan={totalColumns} className="px-3 py-2 text-xs align-top border-t border-amber-900/10 pb-4">
                        <p className="text-amber-950 whitespace-pre-line font-serif italic">
                            {item.description}
                        </p>
                        <div className="mt-1 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{item.origin}</div>
                    </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {filteredImprovements.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">Nenhuma melhoria encontrada com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};

// 3. Tabela de Preço Adicional de Materiais Especiais (Tabela 3-9)
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
  
  const totalColumns = 1 + columnsToShow.length; 

  const filteredPrices = useMemo(() => {
    let result = [...allPrices];
    const lowerCaseSearch = searchTerm.toLowerCase();
    
    if (lowerCaseSearch) {
      result = result.filter(priceRow => {
        // 1. Busca no Nome do Material
        if (priceRow.material.toLowerCase().includes(lowerCaseSearch)) return true;
        
        // 2. Busca na Descrição Principal
        if (priceRow.description.toLowerCase().includes(lowerCaseSearch)) return true;
        
        // 3. Busca na Origem
        if (priceRow.origin?.toLowerCase().includes(lowerCaseSearch)) return true;

        // Opcional: Busca nas descrições específicas
        if (priceRow.description_arma?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_armadura?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_escudo?.toLowerCase().includes(lowerCaseSearch)) return true;
        if (priceRow.description_esoterico?.toLowerCase().includes(lowerCaseSearch)) return true;
        
        return false;
      });
    }

    // ALTERAÇÃO: Ordenar alfabeticamente pelo nome do material
    return result.sort((a, b) => a.material.localeCompare(b.material, "pt-BR"));
  }, [allPrices, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="p-4 bg-[#dcc8a9] rounded border-2 border-amber-900/30 shadow-sm">
        <h4 className="text-xs font-bold text-amber-900/70 uppercase tracking-wider mb-3">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedItemCategory("Todos")}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
              selectedItemCategory === "Todos"
                ? "bg-red-800 text-white border-red-900 shadow-inner"
                : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700 hover:text-amber-800"
            }`}
          >
            Todos
          </button>
          {itemCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedItemCategory(category)}
              className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
                selectedItemCategory === category
                  ? "bg-red-800 text-white border-red-900 shadow-inner"
                  : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700 hover:text-amber-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca */}
      <div className="relative">
        <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative">
                <input type="text"
                    placeholder="Buscar material por nome, descrição ou origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>
      </div>

      {/* Tabela de Preços de Materiais */}
      <div className="overflow-x-auto shadow-lg rounded border-2 border-amber-900/40 w-full">
        <table className="min-w-full divide-y divide-amber-900/20">
          <caption className="p-4 text-xl font-bold text-amber-950 bg-[#c4b090] border-b-2 border-amber-900/30 uppercase tracking-widest text-left font-serif">
            Preço Adicional de Materiais Especiais
          </caption>
          <thead className="bg-[#c4b090] text-amber-950">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Material</th>
              {columnsToShow.map(category => (
                <th key={category} scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredPrices.map((priceRow, index) => (
              <React.Fragment key={priceRow.material}>
                {/* LINHA 1: Dados Principais */}
                <tr className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                  {/* Nome do Material */}
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-amber-900 align-top font-serif border-r border-amber-900/20">
                    <div className="font-bold">{priceRow.material}</div>
                  </td>
                  {/* Preços Adicionais */}
                  {columnsToShow.map(category => (
                    <td key={category} className="px-4 py-2 whitespace-nowrap text-sm text-amber-900/90 align-top font-serif border-r border-amber-900/20">
                      {priceRow[category as keyof MaterialPriceRow]}
                    </td>
                  ))}
                </tr>

                {/* LINHA 2: Descrição Detalhada */}
                <tr className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                  <td colSpan={totalColumns} className="px-5 py-2 text-xs align-top border-t border-amber-900/10 pb-4">
                    <p className="text-amber-950 whitespace-pre-line font-serif italic"> 
                      {priceRow.description}
                    </p>
                    {priceRow.description_arma && (
                    <p className="text-amber-950 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-800 mr-1 not-italic">Armas: </span> 
                        {priceRow.description_arma}
                    </p>
                        )}
                    {priceRow.description_armadura && (
                    <p className="text-amber-950 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-800 mr-1 not-italic">Armaduras & Escudos: </span> 
                        {priceRow.description_armadura}
                    </p>
                        )}
                    {priceRow.description_escudo && (
                    <p className="text-amber-950 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-800 mr-1 not-italic">Escudos: </span> 
                        {priceRow.description_escudo}
                    </p>
                        )}    
                    {priceRow.description_esoterico && (
                    <p className="text-amber-950 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-800 mr-1 not-italic">Esotéricos: </span> 
                        {priceRow.description_esoterico}
                    </p>
                          )}
                    <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{priceRow.origin}</div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function SuperiorItemsPage() {

  return (
    // Fundo escurecido #e0d2b4
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-amber-900 selection:text-amber-100 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header */}
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
                <span className="text-red-900">Itens Superiores</span>
            </div>
        </div>
      </header>
      

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
            <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-amber-800 to-red-900 mb-4 drop-shadow-sm">
                Itens Superiores
                </h1>
                <p className="text-lg font-medium">Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
                <p>Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>
                
                <h2 className="text-3xl font-bold text-amber-800 pt-4 border-b border-amber-900/20 pb-2">Melhorias </h2>
                <p>Apenas itens das categorias armas, armaduras e escudos, ferramentas, vestuário e esotéricos podem receber melhorias (Outras melhorias são retiradas da Dragão Brasil). As melhorias para cada categoria de item estão listadas na Tabela <strong>Melhorias</strong>. Cada melhoria só pode ser aplicada uma vez a um mesmo item.</p>
            </div>

            <div className="mb-12 mt-6">
                <PriceTable data={priceImprovements} />
            </div>

            
            <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2">Tabela de Melhorias </h2>
            <ImprovementTable allImprovements={improvements} />
            
            <div className="mt-32 space-y-4 text-amber-950 leading-relaxed font-serif">
                <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2">Materiais Especiais</h2>

                <p>Armas, armaduras, escudos e esotéricos podem ser feitos ou banhados de um material especial. Para isso, o item precisa ter a melhoria material especial e você precisa pagar o preço extra do material escolhido, conforme a tabela:</p>
            </div>

            {/* Tabela de Preço Adicional de Materiais Especiais */}
            <div className="mt-6">
                <MaterialPriceTable allPrices={materialPrices} />
            </div>

            <div className="mt-12 space-y-4 text-amber-950 leading-relaxed font-serif">
                <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2">Fabricando Itens Superiores</h2>
                <p>Itens superiores só podem ser fabricados por personagens com a habilidade Fabricar Item Superior. A fabricação deles segue a mesma regra de itens normais, porém, de acordo com o número de melhorias, o preço e a CD do teste de Ofício aumentam.</p>
                <p>Por exemplo, o preço de uma couraça é T$ 500. Fabricá-la exige um gasto de T$ 166 (um terço do preço) e um teste de Ofício contra CD 15. Já o preço de uma couraça com duas melhorias é T$ 3.500 (T$ 500 + T$ 3.000 das duas melhorias). Fabricá-la exige um gasto de T$ 1.166 (um terço do preço) e um teste de Ofício contra CD 25 (15 da CD base + 10 das duas melhorias).</p>
                <p>É possível adicionar melhorias a um item. Você paga a diferença de acordo com o novo número de melhorias. Por exemplo, para adicionar a terceira melhoria a um item que já possui duas, você precisa pagar mais T$ 2.000 (um terço da diferença de três para duas melhorias). Além disso, deve fazer um teste de Ofício contra a CD do número de melhorias que o item passará a ter e, se falhar por 5 ou mais, estraga o item.</p>
            </div>
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