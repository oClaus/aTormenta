"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { alchemy, } from "@/data/alchemys";
import { Alchemy, AlchemyType } from "@/types/alchemy";

const typeColorMap = {
  "Preparados": "text-amber-500", // Ajustado para Amber para contraste no dark mode
  "Catalisadores": "text-cyan-500", // Ajustado para Cyan para contraste no dark mode
  "Venenos": "text-lime-500",  
};


// 2. Componente para a Tabela Filtrável de Armaduras e Escudos
const AlchemyFilterableTable = ({ allAlchemys }: { allAlchemys: Alchemy[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as AlchemyType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: AlchemyType) => { 
  setFilters(prev => {
    const current = prev[key]; 
    
    if (current.includes(value)) {
      return { ...prev, [key]: current.filter(v => v !== value) as AlchemyType[] };
    } else {
      return { ...prev, [key]: [...current, value] };
    }
  });
};

  const filteredArmors = useMemo(() => {
    let filtered = allAlchemys;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(a => a.name.toLowerCase().includes(lowerCaseSearch));
    }

    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allAlchemys, searchTerm, filters]);

  const allTypes: AlchemyType[] = ["Preparados", "Catalisadores", "Venenos"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-stone-900 rounded border border-stone-800">
      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as AlchemyType)}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif ${
              (filters[key] as string[]).includes(option)
                ? "bg-emerald-800 text-white border-emerald-900 shadow-inner"
                : "bg-stone-950 text-stone-400 border-stone-800 hover:border-emerald-700 hover:text-emerald-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 w-full">
      {/* Barra de Busca */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar alquímicos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-900 transition-all font-serif"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Alquimicos */}
      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800">
          <thead className="bg-stone-900 text-emerald-700">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Alquímicos</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-bold uppercase tracking-wider border-r border-stone-800">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredArmors.map((alchemy, index) => (
              <tr key={alchemy.id} className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-emerald-900/10 transition-colors"}>
                <td className="px-4 py-3 text-sm font-medium text-stone-200 border-r border-stone-800/50 align-top">
                  <div className="font-bold text-emerald-600 font-serif text-lg">{alchemy.name}</div>
                  <div className="text-sm text-stone-400 break-words font-serif italic mt-1">{alchemy.description}</div>
                  <div className="mt-2 text-xs font-serif font-bold tracking-wider">  <div className={typeColorMap[alchemy.type]}> {alchemy.type}</div></div>
                  <div className="mt-1 text-xs text-amber-800 font-bold uppercase tracking-widest">Origem: {alchemy.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-stone-300 font-serif align-top border-r border-stone-800/50">{alchemy.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-stone-300 font-serif align-top">{alchemy.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredArmors.length === 0 && (
          <div className="text-center py-12 text-stone-500 bg-stone-900 border-t border-stone-800 italic">Nenhuma alquímico com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  // NOVO ESTADO E LÓGICA DE BUSCA PARA O GRID DE CARDS
  const [cardSearchTerm, setCardSearchTerm] = useState("");

  const filteredCards = useMemo(() => {
    const lowerCaseSearch = cardSearchTerm.toLowerCase();
    
    // 1. Ordenação: Armaduras Leves, Pesadas, Escudos, e depois alfabética
    let sorted = [...alchemy].sort((a, b) => 
    a.name.localeCompare(b.name, "pt-BR")
    );

    // 2. Filtragem por Nome ou Descrição
    if (lowerCaseSearch) {
      sorted = sorted.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return sorted;
  }, [cardSearchTerm]);


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
                <Link href="/" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/equipamentos" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Alquímicos</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 mb-4 drop-shadow-md">
          Alquímicos
        </h1>
        <div className="space-y-4 text-stone-300 leading-relaxed font-serif">
          <p className="text-lg">Inclui preparados, catalisadores e venenos.</p>

          <h3 className="text-xl font-bold text-emerald-600 pt-2 border-b border-stone-800 pb-1">Preparados</h3>
          <p>Itens de uso único que geram efeitos variados quando usados. A CD para fabricar qualquer preparado é 15.</p>

          <h3 className="text-xl font-bold text-emerald-600 pt-2 border-b border-stone-800 pb-1">Catalisadores</h3>
          <p>Substâncias preparadas através de processos alquímicos, catalisadores são itens de uso único que melhoram o efeito de uma magia quando ela é lançada. Você precisa estar empunhando um catalisador para usá-lo e só pode usar um catalisador por vez. Reduções de custo de catalisadores acumulam com outras reduções de custo. Catalisadores que aumentam o dano só funcionam em magias que já causem dano. </p>
          <p>A CD para fabricar qualquer catalisador é 15 e para fabricá-lo você deve ser treinado em Misticismo.</p>

          <h3 className="text-xl font-bold text-emerald-600 pt-2 border-b border-stone-800 pb-1">Venenos</h3>
          <p>Substâncias naturais ou preparadas perigosas para seres vivos. Exceto se indicado o contrário, a CD para fabricar qualquer veneno é 20.</p>
          <p><strong className="text-stone-100">Regras de Venenos:</strong></p>
          <p>Venenos são classificados de acordo com o método de inoculação.</p>
          <p><strong className="text-stone-100">Contato: </strong>Inoculados via um ataque que acerte (ou se a vítima toca o objeto envenenado). Aplicar um veneno em uma arma exige uma ação de movimento e uma rolagem de 1d6. Se você rolar 1, se envenena acidentalmente (mas veja o poder Venefício). O veneno permanece na arma até acertar um ataque ou até o fim da cena (o que acontecer primeiro).</p>
          <p><strong className="text-stone-100">Inalação: </strong>Inoculados via respiração. São armazenados em frascos que podem ser arremessados em alcance curto. Quando o frasco se quebra, libera o veneno num cubo com 3m de lado. Todas as criaturas na área são expostas — prender a respiração não impede a inoculação, pois o veneno pode entrar por canais lacrimais, membranas nasais e outras partes do corpo.</p>
          <p><strong className="text-stone-100">Ingestão: </strong> Inoculados através da ingestão de comida ou bebida.</p>
          <p>Uma criatura exposta a um veneno deve fazer um teste de Fortitude (CD definida pelo aplicador do veneno, atributo-chave Int). Se falhar, sofre o efeito do veneno (efeitos em parênteses afetam vítimas que passem no teste de resistência). Efeitos que não sejam instantâneos, como perda de PV recorrente ou condições, deixam a vítima com a condição envenenada, e curar esta condição encerra quaisquer efeitos de veneno (mas não recupera PV perdidos).</p>

          
        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 border-b border-stone-800 pb-2">Tabela Completa de Alquímicos</h2>
        <AlchemyFilterableTable allAlchemys={alchemy} />
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