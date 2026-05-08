"use client";

import Link from "next/link";
import { tesouros } from "@/data/tesouros";

export default function TesourosPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Tesouros</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        
        {/* Introdução */}
        <div className="mb-12 w-full space-y-6 text-lg leading-relaxed">
            <div>
                <h1 className="text-5xl font-bold text-amber-800 mb-6 border-b-2 border-amber-900/20 pb-2">
                Tabelas de Tesouro
                </h1>
                <p className="text-amber-900/80 font-medium text-justify">
                Derrotar monstros e explorar masmorras rende recompensas. Sempre que o grupo vence um encontro, o mestre deve sortear o tesouro fornecido. O valor e o tipo de tesouro variam de acordo com o Nível de Desafio (ND) do encontro. Encontros contra oponentes com equipamento podem gerar o saque das armas e armaduras dos inimigos, além desta tabela.
                </p>
            </div>
        </div>

        {/* Tabelas de Tesouro por ND */}
        <div className="space-y-8 w-full">
            <h2 className="text-3xl font-bold text-amber-950 border-b border-amber-900/20 pb-2 mb-6">
                Tesouro por Nível de Desafio
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {tesouros.map((tesouro) => (
                    <div key={tesouro.nd} className="bg-[#e8dac1] border-2 border-amber-900/30 rounded shadow-[0_4px_20px_rgba(69,26,3,0.05)] overflow-hidden">
                        
                        {/* Header do ND */}
                        <div className="bg-[#dfccab] border-b-2 border-amber-900/20 p-4 text-center">
                            <h3 className="text-2xl font-bold text-red-800 tracking-wider">
                                ND {tesouro.nd}
                            </h3>
                        </div>

                        {/* Corpo das rolagens */}
                        <div className="p-0">
                            {/* Tabela Dinheiro */}
                            <table className="w-full text-left border-b border-amber-900/20">
                                <thead className="bg-[#f2e8d5] text-amber-900/70 text-sm uppercase tracking-wider">
                                    <tr>
                                        <th className="p-3 font-bold w-1/3 border-r border-amber-900/10">D%</th>
                                        <th className="p-3 font-bold">Dinheiro</th>
                                    </tr>
                                </thead>
                                <tbody className="text-amber-950 font-medium divide-y divide-amber-900/10">
                                    {tesouro.dinheiro.map((entry, index) => (
                                        <tr key={`din-${index}`} className="hover:bg-[#f2e8d5]/50 transition-colors">
                                            <td className="p-3 border-r border-amber-900/10 font-bold text-amber-900/60">{entry.roll}</td>
                                            <td className="p-3">{entry.result}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Tabela Itens */}
                            <table className="w-full text-left">
                                <thead className="bg-[#f2e8d5] text-amber-900/70 text-sm uppercase tracking-wider">
                                    <tr>
                                        <th className="p-3 font-bold w-1/3 border-r border-amber-900/10 border-t border-amber-900/10">D%</th>
                                        <th className="p-3 font-bold border-t border-amber-900/10">Itens</th>
                                    </tr>
                                </thead>
                                <tbody className="text-amber-950 font-medium divide-y divide-amber-900/10">
                                    {tesouro.itens.map((entry, index) => (
                                        <tr key={`item-${index}`} className="hover:bg-[#f2e8d5]/50 transition-colors">
                                            <td className="p-3 border-r border-amber-900/10 font-bold text-amber-900/60">{entry.roll}</td>
                                            <td className="p-3">{entry.result}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </main>

       {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}