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

// 1. Tabela de Preço de Melhorias (Tabela 3-7) - Estilo Stone
const PriceTable = ({ data }: { data: PriceImprovement[] }) => (
  <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
    <table className="min-w-full divide-y divide-stone-800">
      <caption className="p-4 text-xl font-bold text-amber-700 bg-stone-900 border-b border-stone-800 uppercase tracking-widest text-left font-serif">
        Preço de Melhorias
      </caption>
      <thead className="bg-stone-900 text-amber-700">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Número de Melhorias</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Aumento no Preço</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Aumento na CD</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800">
        {data.map((item, index) => (
          <tr key={item.level} className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-amber-600 font-serif border-r border-stone-800/50">{item.level}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-stone-300 font-serif border-r border-stone-800/50">{item.priceIncrease}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-stone-300 font-serif">{item.cdIncrease}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 2. Tabela de Melhorias (Tabela 3-8) - Filtrável e Responsiva - Estilo Stone
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
      <div className="p-4 bg-stone-900 rounded border border-stone-800">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
              selectedCategory === "Todos"
                ? "bg-red-800 text-white border-red-900 shadow-inner"
                : "bg-stone-950 text-stone-400 border-stone-800 hover:border-amber-700 hover:text-amber-600"
            }`}
          >
            Todos
          </button>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
                selectedCategory === category
                    ? "bg-red-800 text-white border-red-900 shadow-inner"
                    : "bg-stone-950 text-stone-400 border-stone-800 hover:border-amber-700 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca */}
      <div className="relative">
          <input type="text"
            placeholder="Buscar melhoria por nome, efeito, descrição ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
          />
           <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800 table-fixed">
          <thead className="bg-stone-900 text-amber-700">
            <tr>
              <th scope="col" className="w-[30%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                  <span className="hidden sm:inline">Melhoria</span>
                  <span className="sm:hidden">Nome</span>
              </th>
              <th scope="col" className="w-[55%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                  <span className="hidden sm:inline">Efeito Curto</span>
                  <span className="sm:hidden">Efeito</span>
              </th>
              <th scope="col" className="w-[15%] px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                  <span className="hidden sm:inline">Aplicável em</span>
                  <span className="sm:hidden">Categ.</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredImprovements.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                  
                  {/* Nome da Melhoria */}
                  <td className="px-2 py-2 text-sm font-medium text-amber-600 align-top font-serif border-r border-stone-800/50">
                      <div className="font-bold">{item.name}</div>
                  </td>
                  
                  {/* Efeito Curto */}
                  <td className="px-2 py-2 text-sm text-stone-300 align-top font-serif border-r border-stone-800/50">
                      {item.effect.substring(0, 50)}{item.effect.length > 50 ? '...' : ''}
                  </td>
                  
                  {/* Aplicável em */}
                  <td className="px-2 py-2 text-sm text-stone-400 align-top font-serif italic">
                    {item.category.join(", ")}
                  </td>
                </tr>

                {/* LINHA 2: Descrição Detalhada */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                    <td colSpan={totalColumns} className="px-3 py-2 text-xs align-top border-t border-stone-800/30 pb-4">
                        <p className="text-stone-400 whitespace-pre-line font-serif italic">
                            {item.description}
                        </p>
                        <div className="mt-1 text-xs text-amber-800 font-bold uppercase tracking-widest">{item.origin}</div>
                    </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {filteredImprovements.length === 0 && (
          <div className="text-center py-12 text-stone-500 bg-stone-900 border-t border-stone-800 italic">Nenhuma melhoria encontrada com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};

// 3. Tabela de Preço Adicional de Materiais Especiais (Tabela 3-9) - Estilo Stone
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
      <div className="p-4 bg-stone-900 rounded border border-stone-800">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedItemCategory("Todos")}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
              selectedItemCategory === "Todos"
                ? "bg-red-800 text-white border-red-900 shadow-inner"
                : "bg-stone-950 text-stone-400 border-stone-800 hover:border-amber-700 hover:text-amber-600"
            }`}
          >
            Todos
          </button>
          {itemCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedItemCategory(category)}
              className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
                selectedItemCategory === category
                  ? "bg-red-800 text-white border-red-900 shadow-inner"
                  : "bg-stone-950 text-stone-400 border-stone-800 hover:border-amber-700 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca */}
      <div className="relative">
        <input type="text"
            placeholder="Buscar material por nome, descrição ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      {/* Tabela de Preços de Materiais */}
      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800">
          <caption className="p-4 text-xl font-bold text-amber-700 bg-stone-900 border-b border-stone-800 uppercase tracking-widest text-left font-serif">
            Preço Adicional de Materiais Especiais
          </caption>
          <thead className="bg-stone-900 text-amber-700">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Material</th>
              {columnsToShow.map(category => (
                <th key={category} scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredPrices.map((priceRow, index) => (
              <React.Fragment key={priceRow.material}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                  {/* Nome do Material */}
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-amber-600 align-top font-serif border-r border-stone-800/50">
                    <div className="font-bold">{priceRow.material}</div>
                  </td>
                  {/* Preços Adicionais */}
                  {columnsToShow.map(category => (
                    <td key={category} className="px-4 py-2 whitespace-nowrap text-sm text-stone-300 align-top font-serif border-r border-stone-800/50">
                      {priceRow[category as keyof MaterialPriceRow]}
                    </td>
                  ))}
                </tr>

                {/* LINHA 2: Descrição Detalhada */}
                <tr className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                  <td colSpan={totalColumns} className="px-5 py-2 text-xs align-top border-t border-stone-800/30 pb-4">
                    <p className="text-stone-400 whitespace-pre-line font-serif italic"> 
                      {priceRow.description}
                    </p>
                    {priceRow.description_arma && (
                    <p className="text-stone-400 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-700 mr-1 not-italic">Armas: </span> 
                        {priceRow.description_arma}
                    </p>
                        )}
                    {priceRow.description_armadura && (
                    <p className="text-stone-400 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-700 mr-1 not-italic">Armaduras & Escudos: </span> 
                        {priceRow.description_armadura}
                    </p>
                        )}
                    {priceRow.description_escudo && (
                    <p className="text-stone-400 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-700 mr-1 not-italic">Escudos: </span> 
                        {priceRow.description_escudo}
                    </p>
                        )}    
                    {priceRow.description_esoterico && (
                    <p className="text-stone-400 whitespace-pre-line font-serif italic mt-1">
                        <span className="font-semibold text-amber-700 mr-1 not-italic">Esotéricos: </span> 
                        {priceRow.description_esoterico}
                    </p>
                          )}
                    <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest">{priceRow.origin}</div>
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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
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
                <span className="text-red-700">Itens Superiores</span>
            </div>
        </div>
      </header>
      

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <div className="space-y-4 text-stone-300 leading-relaxed font-serif">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-md">
                Itens Superiores
                </h1>
                <p className="text-lg">Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
                <p>Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>
                
                <h2 className="text-3xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-2">Melhorias </h2>
                <p>Apenas itens das categorias armas, armaduras e escudos, ferramentas, vestuário e esotéricos podem receber melhorias (Outras melhorias são retiradas da Dragão Brasil). As melhorias para cada categoria de item estão listadas na Tabela <strong>Melhorias</strong>. Cada melhoria só pode ser aplicada uma vez a um mesmo item.</p>
            </div>

            <div className="mb-12 mt-6">
                <PriceTable data={priceImprovements} />
            </div>

            
            <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Tabela de Melhorias </h2>
            <ImprovementTable allImprovements={improvements} />
            
            {/* ALTERAÇÃO: Aumentei o espaçamento aqui de mt-12 para mt-32 */}
            <div className="mt-32 space-y-4 text-stone-300 leading-relaxed font-serif">
                <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Materiais Especiais</h2>

                <p>Armas, armaduras, escudos e esotéricos podem ser feitos ou banhados de um material especial. Para isso, o item precisa ter a melhoria material especial e você precisa pagar o preço extra do material escolhido, conforme a tabela:</p>
            </div>

            {/* Tabela de Preço Adicional de Materiais Especiais */}
            <div className="mt-6">
                <MaterialPriceTable allPrices={materialPrices} />
            </div>

            <div className="mt-12 space-y-4 text-stone-300 leading-relaxed font-serif">
                <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Fabricando Itens Superiores</h2>
                <p>Itens superiores só podem ser fabricados por personagens com a habilidade Fabricar Item Superior. A fabricação deles segue a mesma regra de itens normais, porém, de acordo com o número de melhorias, o preço e a CD do teste de Ofício aumentam.</p>
                <p>Por exemplo, o preço de uma couraça é T$ 500. Fabricá-la exige um gasto de T$ 166 (um terço do preço) e um teste de Ofício contra CD 15. Já o preço de uma couraça com duas melhorias é T$ 3.500 (T$ 500 + T$ 3.000 das duas melhorias). Fabricá-la exige um gasto de T$ 1.166 (um terço do preço) e um teste de Ofício contra CD 25 (15 da CD base + 10 das duas melhorias).</p>
                <p>É possível adicionar melhorias a um item. Você paga a diferença de acordo com o novo número de melhorias. Por exemplo, para adicionar a terceira melhoria a um item que já possui duas, você precisa pagar mais T$ 2.000 (um terço da diferença de três para duas melhorias). Além disso, deve fazer um teste de Ofício contra a CD do número de melhorias que o item passará a ter e, se falhar por 5 ou mais, estraga o item.</p>
            </div>
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