"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Gear } from "@/types/gear";

// --- Componentes Auxiliares ---

// 2. Componente para a Tabela Filtrável de Equipamentos
const GearFilterableTable = ({ allGear }: { allGear: Gear[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome ou Descrição
    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6 w-full">
      {/* Barra de Busca */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar equipamento por nome ou descrição..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800">
          <thead className="bg-stone-900 text-amber-700">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-bold uppercase tracking-wider border-r border-stone-800">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                <td className="px-4 py-3 text-sm font-medium text-stone-200 border-r border-stone-800/50 align-top">
                  <div className="font-bold text-amber-600 font-serif text-lg">{item.name}</div>
                  <div className="text-sm text-stone-400 break-words font-serif italic mt-1">{item.description}</div>
                  <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest">{item.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-stone-300 font-serif align-top border-r border-stone-800/50">{item.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-stone-300 font-serif align-top">{item.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-stone-500 bg-stone-900 border-t border-stone-800 italic">Nenhum equipamento encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
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
                <span className="text-red-700">Veículos</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
      
        <div className="space-y-4 text-stone-300 leading-relaxed font-serif">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-md">
            Veículos
          </h1>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Tabela Completa de Veículos</h2>
        <GearFilterableTable allGear={vehicles} />
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