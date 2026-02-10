"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { liturgico } from "@/data/liturgical";
import { Liturgical, LiturgicalType } from "@/types/liturgico";

// Mapeamento de cores ajustado para os tipos litúrgicos
const typeColorMap: Record<LiturgicalType, string> = {
  "Acessório Maior": "text-purple-700",       
  "Acessório menor": "text-cyan-700",         
  "Arma específica maior": "text-red-700",    
  "Acessório médio": "text-indigo-700",
  "Armadura específica média": "text-blue-700",
  "Arma específica média": "text-emerald-700",
  "Arma específica menor ": "text-teal-700",  
};

// 2. Componente para a Tabela Filtrável de Litúrgicos
const LiturgicalFilterableTable = ({ allItems }: { allItems: Liturgical[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as LiturgicalType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: LiturgicalType) => { 
    setFilters(prev => {
      const current = prev[key]; 
      
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) as LiturgicalType[] };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const filteredItems = useMemo(() => {
    let filtered = allItems;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (filters.type.length > 0) {
      filtered = filtered.filter(item => filters.type.includes(item.type));
    }

    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allItems, searchTerm, filters]);

  // Lista exata conforme seu Type definition
  const allTypes: LiturgicalType[] = [
    "Acessório Maior", 
    "Acessório menor", 
    "Arma específica maior", 
    "Acessório médio", 
    "Armadura específica média", 
    "Arma específica média", 
    "Arma específica menor "
  ];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    // Box de Filtro - Estilo Papel - Agora ocupa 100% da largura disponível
    <div className="p-4 bg-[#dcc8a9] rounded border-2 border-amber-900/30 shadow-sm w-full">
      <h4 className="text-xs font-bold text-amber-900/70 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as LiturgicalType)}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
              (filters[key] as string[]).includes(option)
                ? "bg-emerald-800 text-[#efe5d5] border-emerald-900 shadow-inner" // Ativo
                : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-emerald-700 hover:text-emerald-800" // Inativo
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
        <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar itens litúrgicos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>
      </div>

      {/* Filtros - Agora ocupa largura total */}
      <div className="w-full">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Litúrgicos */}
      <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg w-full">
        <table className="min-w-full divide-y divide-amber-900/20 text-left font-serif">
          {/* Header */}
          <thead className="bg-[#c4b090] text-emerald-900 border-b-2 border-amber-900/30">
            <tr>
              <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Litúrgicos</th>
              <th scope="col" className="w-24 px-4 pr-4 py-4 text-right text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Preço</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredItems.map((item, index) => (
              <tr key={item.id} className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                <td className="px-4 py-3 text-sm font-medium text-amber-950 border-r border-amber-900/20 align-top">
                  <div className="font-bold text-amber-950 font-serif text-lg">{item.name}</div>
                  <div className="text-sm text-amber-900/90 break-words font-serif italic mt-1">{item.description}</div>
                  <div className="mt-2 text-xs font-serif font-bold tracking-wider">
                      <span className={typeColorMap[item.type] || "text-amber-900"}> {item.type}</span>
                  </div>
                  <div className="mt-1 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{item.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-red-900 font-bold font-serif align-top border-r border-amber-900/20">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">
            Nenhum item litúrgico encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function LiturgicosPage() {
  
  return (
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-emerald-900 selection:text-emerald-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

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
                <Link href="/" className="text-amber-900/70 hover:text-emerald-800 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-900/70 hover:text-emerald-800 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Litúrgicos </span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 mb-4 drop-shadow-sm">
          Litúrgicos 
        </h1>
        <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
          <p className="text-lg font-medium">Itens litúrgicos são itens mágicos imbuídos de poder divino. Mais do que meros objetos encantados, são símbolos de fé. Cada item litúrgico é associado a um deus e possui afinidade com seus devotos — alguns funcionam apenas com estes devotos, enquanto outros se tornam mais fortes nas mãos destes. De forma similar, um item litúrgico só pode ser fabricado por devotos da divindade em questão.</p>
          <p className="text-lg font-medium">Itens litúrgicos não podem ser identificados com Misticismo, apenas com Religião. Se você for devoto do deus associado ao item, recebe +5 em testes para identificá-lo.</p>
        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6 border-b border-amber-900/30 pb-2">Tabela Completa de Itens Litúrgicos</h2>
        <LiturgicalFilterableTable allItems={liturgico} />
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