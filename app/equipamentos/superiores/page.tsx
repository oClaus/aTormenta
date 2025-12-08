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

// 1. Tabela de Preço de Melhorias (Tabela 3-7) - Sem alteração
const PriceTable = ({ data }: { data: PriceImprovement[] }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-cyan-500/30">
    <table className="min-w-full divide-y divide-cyan-500/30">
      <caption className="p-4 text-xl font-bold text-cyan-300 bg-cyan-900/50 rounded-t-xl">
        Preço de Melhorias
      </caption>
      <thead className="bg-cyan-900/70 text-cyan-200">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Número de Melhorias</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Aumento no Preço</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Aumento na CD</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-cyan-500/20">
        {data.map((item, index) => (
          <tr key={item.level} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-cyan-300">{item.level}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.priceIncrease}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.cdIncrease}</td>
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

    // Lógica de Filtragem (Mantida)

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
  
  // Total de colunas na tabela principal é 3
  const totalColumns = 3; 

  return (
    <div className="space-y-6">
        {/* Filtros */}
      <div className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
        <h4 className="text-sm font-bold text-cyan-300 mb-2">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedCategory === "Todos"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Todos
          </button>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca */}
      <input type="text"
        placeholder="Buscar melhoria por nome, efeito, descrição ou origem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"/>
      {/* ... Filtros e Busca (Mantidos) ... */}

      <div className="overflow-x-auto shadow-lg rounded-xl border border-cyan-500/30">
        <table className="min-w-full divide-y divide-cyan-500/30 table-fixed">
          <thead className="bg-cyan-900/70 text-cyan-200">
            <tr>
              {/* Larguras e Títulos simplificados para mobile */}
              <th scope="col" className="w-[30%] px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className="hidden sm:inline">Melhoria</span>
                  <span className="sm:hidden">Nome</span>
              </th>
              <th scope="col" className="w-[55%] px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className="hidden sm:inline">Efeito Curto</span>
                  <span className="sm:hidden">Efeito</span>
              </th>
              <th scope="col" className="w-[15%] px-2 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  <span className="hidden sm:inline">Aplicável em</span>
                  <span className="sm:hidden">Categ.</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/20">
            {filteredImprovements.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                  
                  {/* Nome da Melhoria */}
                  <td className="px-2 py-2 text-sm font-medium text-cyan-300 align-top">
                      <div className="font-bold">{item.name}</div>
                  </td>
                  
                  {/* Efeito Curto (Primeiras 50 chars) */}
                  <td className="px-2 py-2 text-sm text-gray-300 align-top">
                      {item.effect.substring(0, 50)}{item.effect.length > 50 ? '...' : ''}
                  </td>
                  
                  {/* Aplicável em (Categorias) */}
                  <td className="px-2 py-2 text-sm text-gray-300 align-top">
                    {item.category.join(", ")}
                  </td>
                </tr>

                {/* LINHA 2: Descrição Detalhada (Expandida) */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                    <td colSpan={totalColumns} className="px-3 py-2 text-xs align-top border-t border-cyan-500/10">
                        <p className="text-gray-200 whitespace-pre-line">
                            {item.description}
                        </p>
                        <div className="mt-1 text-xs text-blue-400">{item.origin}</div>
                    </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {filteredImprovements.length === 0 && (
          <div className="text-center py-8 text-gray-500 bg-gray-900/50">Nenhuma melhoria encontrada com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};

// 3. Tabela de Preço Adicional de Materiais Especiais (Tabela 3-9) - NOVO COMPONENTE
const MaterialPriceTable = ({ allPrices }: { allPrices: MaterialPriceRow[] }) => {
  const [selectedItemCategory, setSelectedItemCategory] = useState<MaterialItemCategory | "Todos">("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // As categorias de item são as chaves da interface, exceto 'material' e 'description'
  const itemCategories: MaterialItemCategory[] = ["Arma", "Armadura Leve", "Armadura Pesada", "Escudo", "Esotéricos"];

  // Filtro de Colunas (Itens)
  const columnsToShow = useMemo(() => {
    if (selectedItemCategory === "Todos") {
      return itemCategories;
    }
    return [selectedItemCategory];
  }, [selectedItemCategory]);
  
  // O número de colunas na tabela é a coluna "Material" + as colunas dinâmicas.
  // Será usado para o colSpan da linha de descrição.
  const totalColumns = 1 + columnsToShow.length; 

  const filteredPrices = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    
    if (!lowerCaseSearch) {
      return allPrices;
    }

    return allPrices.filter(priceRow => {
      // 1. Busca no Nome do Material
      if (priceRow.material.toLowerCase().includes(lowerCaseSearch)) return true;
      
      // 2. Busca na Descrição Principal
      if (priceRow.description.toLowerCase().includes(lowerCaseSearch)) return true;
      
      // 3. Busca na Origem (Se existir e tiver o campo)
      if (priceRow.origin?.toLowerCase().includes(lowerCaseSearch)) return true;

      // Opcional: Busca nas descrições específicas de item
      if (priceRow.description_arma?.toLowerCase().includes(lowerCaseSearch)) return true;
      if (priceRow.description_armadura?.toLowerCase().includes(lowerCaseSearch)) return true;
      if (priceRow.description_escudo?.toLowerCase().includes(lowerCaseSearch)) return true;
      if (priceRow.description_esoterico?.toLowerCase().includes(lowerCaseSearch)) return true;
      
      return false;
    });
  }, [allPrices, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
        <h4 className="text-sm font-bold text-cyan-300 mb-2">Filtrar por Categoria de Item</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedItemCategory("Todos")}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              selectedItemCategory === "Todos"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Todos
          </button>
          {itemCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedItemCategory(category)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                selectedItemCategory === category
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Barra de Busca (NOVA) */}
      <input type="text"
        placeholder="Buscar material por nome, descrição ou origem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2       focus:ring-cyan-500/20 transition-all"/>

      {/* Tabela de Preços de Materiais */}
      <div className="overflow-x-auto shadow-lg rounded-xl border border-cyan-500/30">
        <table className="min-w-full divide-y divide-cyan-500/30">
          <caption className="p-4 text-xl font-bold text-cyan-300 bg-cyan-900/50 rounded-t-xl">
            Preço Adicional de Materiais Especiais
          </caption>
          <thead className="bg-cyan-900/70 text-cyan-200">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Material</th>
              {columnsToShow.map(category => (
                <th key={category} scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-500/20">
            {filteredPrices.map((priceRow, index) => (
              <React.Fragment key={priceRow.material}>
                {/* LINHA 1: Dados Principais */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                  {/* Nome do Material */}
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-cyan-300 align-top">
                    <div className="font-bold">{priceRow.material}</div>
                  </td>
                  {/* Preços Adicionais */}
                  {columnsToShow.map(category => (
                    <td key={category} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300 align-top">
                      {priceRow[category as keyof MaterialPriceRow]}
                    </td>
                  ))}
                </tr>

                {/* LINHA 2: Descrição Detalhada (Expandida) */}
                <tr className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                  <td colSpan={totalColumns} className="px-5 py-2 text-xs align-top border-t border-cyan-500/10">
                    <p className="text-gray-200 whitespace-pre-line"> 
                      {priceRow.description}
                    </p>
                    {priceRow.description_arma && (
                    <p className="text-gray-200 whitespace-pre-line">
                        <span className="font-semibold text-cyan-400 mr-1">Armas: </span> 
                        {priceRow.description_arma}
                    </p>
                        )}
                    {priceRow.description_armadura && (
                    <p className="text-gray-200 whitespace-pre-line">
                        <span className="font-semibold text-cyan-400 mr-1">Armaduras & Escudos: </span> 
                        {priceRow.description_armadura}
                    </p>
                        )}
                    {priceRow.description_escudo && (
                    <p className="text-gray-200 whitespace-pre-line">
                        <span className="font-semibold text-cyan-400 mr-1">Escudos: </span> 
                        {priceRow.description_escudo}
                    </p>
                        )}    
                    {priceRow.description_esoterico && (
                    <p className="text-gray-200 whitespace-pre-line">
                        <span className="font-semibold text-cyan-400 mr-1">Esotéricos: </span> 
                        {priceRow.description_esoterico}
                    </p>
                         )}
                    <div className="mt-1 text-xs text-blue-400">{priceRow.origin}</div>
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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-cyan-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(244,114,182,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/equipamentos" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
            Equipamentos
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Itens Superiores</span>
        </div>
      </header>
      

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-cyan-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400 mb-4">
          Itens Superiores
        </h1>
        <p>Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
        <p>Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>
          <h2 className="text-3xl font-bold text-cyan-400 pt-4">Melhorias </h2>
          <p>Apenas itens das categorias armas, armaduras e escudos, ferramentas, vestuário e esotéricos podem receber melhorias (Outras melhorias são retiradas da Dragão Brasil). As melhorias para cada categoria de item estão listadas na Tabela <strong>Melhorias</strong>. Cada melhoria só pode ser aplicada uma vez a um mesmo item.</p>
        </div>

        <div className="mb-12">
        <PriceTable data={priceImprovements} />
        </div>

        
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Tabela de Melhorias </h2>
        <ImprovementTable allImprovements={improvements} />
      
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Materiais Especiais</h2>

        <p>Armas, armaduras, escudos e esotéricos podem ser feitos ou banhados de um material especial. Para isso, o item precisa ter a melhoria material especial e você precisa pagar o preço extra do material escolhido, conforme a tabela:</p>

        {/* Tabela de Preço Adicional de Materiais Especiais */}
        <MaterialPriceTable allPrices={materialPrices} />

        </section>
    </main>
  );
}