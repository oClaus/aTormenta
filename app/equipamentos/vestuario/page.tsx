"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { clothing } from "@/data/clothing";
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
      {/* Barra de Busca - Fundo mais escuro (#dcc8a9) */}
      <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar equipamento por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // Input com fundo bege médio (#efe5d5)
            className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 transition-all font-serif shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
              🔍
          </div>
        </div>
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg w-full">
        <table className="min-w-full divide-y divide-amber-900/20 text-left font-serif">
          {/* Header mais escuro (#c4b090) */}
          <thead className="bg-[#c4b090] text-amber-950 border-b-2 border-amber-900/30">
            <tr>
              <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-4 text-right text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredGear.map((item, index) => (
              // Alternância de cores suave: #e6dcc5 (par) e #dbcfb4 (ímpar)
              <tr key={item.id} className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                <td className="px-4 py-3 text-sm font-medium text-amber-950 border-r border-amber-900/20 align-top">
                  <div className="font-bold text-amber-950 font-serif text-lg">{item.name}</div>
                  <div className="text-sm text-amber-900/90 break-words font-serif italic mt-1">{item.description}</div>
                  <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{item.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-red-900 font-bold font-serif align-top border-r border-amber-900/20">{item.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-amber-950 font-serif align-top">{item.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">Nenhum equipamento encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
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
                <span className="text-red-900">Vestuário</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
      
        <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-amber-800 to-red-900 mb-4 drop-shadow-sm">
            Vestuário
          </h1>
        <p className="text-amber-900/90 text-lg font-medium italic">
            Todos os itens desta seção precisam ser vestidos para fornecerem seus benefícios. A CD para fabricar qualquer vestuário é 20.
        </p>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 border-b border-amber-900/30 pb-2">Tabela Completa de Vestuário</h2>
        <GearFilterableTable allGear={clothing} />
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