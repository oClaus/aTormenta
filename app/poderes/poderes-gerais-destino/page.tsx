"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGeraisDestino } from "@/data/powers-gerais-destino";
import { formatOrigin } from "@/types/power";

// Dados da Tabela existente (Ao Sabor do Destino)
const progressionData = [
  { level: "6º", benefit: "+2 em uma perícia" },
  { level: "7º", benefit: "+1 na Defesa" },
  { level: "8º", benefit: "+1 nas rolagens de dano" },
  { level: "9º", benefit: "+1 em um atributo" },
  { level: "11º", benefit: "+2 em uma perícia" },
  { level: "12º", benefit: "+2 na Defesa" },
  { level: "13º", benefit: "+2 nas rolagens de dano" },
  { level: "14º", benefit: "+1 em um atributo" },
  { level: "16º", benefit: "+2 em uma perícia" },
  { level: "17º", benefit: "+3 na Defesa" },
  { level: "18º", benefit: "+3 nas rolagens de dano" },
  { level: "19º", benefit: "+1 em um atributo" },
];

// Dados da NOVA Tabela (Bravata) extraídos da imagem
const bravataData = [
  { benefit: '“Eu sei lutar.” +1 em testes de ataque', cd: "15" },
  { benefit: '“Eu sei lutar muito bem.” +2 em testes de ataque', cd: "20" },
  { benefit: '“Por Anilatir, como eu luto bem!” +3 em testes de ataque', cd: "25" },
  { benefit: '“Ninguém toca em mim.” +2 na Defesa', cd: "20" },
  { benefit: '“Nada me afeta.” +5 em testes de resistência', cd: "20" },
  { benefit: '“Eu sei fazer isso.” Torna-se treinado em uma perícia', cd: "17" },
  { benefit: '“Eu sou bom demais!” Pode usar um poder cujos pré-requisitos você cumpra', cd: "22" },
];

export default function GeraisPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersGeraisDestino
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/poderes" className="text-amber-900/60 hover:text-red-700 transition-colors">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poderes Gerais - Destino</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-[#e8dac1]/50 rounded border border-amber-900/20 shadow-sm w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6 border-b-2 border-amber-900/10 pb-4">
            Poderes Gerais - Destino
            </h1>
            <p className="text-amber-900/80 text-lg font-medium leading-relaxed">
              Poderes ligados à sorte, determinação e ao próprio tecido da realidade.
            </p>
        </div>

        {/* Busca */}
        <div className="mb-8 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes - ALTERAÇÃO AQUI: bg-[#d9c8a9] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch mb-16">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded bg-[#d9c8a9] border border-amber-900/30 p-6 hover:border-amber-700/80 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                <div className="w-full flex items-center gap-2 mb-3">
                     <div className="w-2 h-2 bg-amber-900/40 rotate-45 group-hover:bg-red-600 transition-colors duration-300"></div>
                     <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors font-serif tracking-wide">
                        {power.name}
                     </h3>
                </div>

                <div className="flex-1 mb-4">
                    <p className="text-amber-900/80 text-sm leading-relaxed font-medium text-justify">
                        {power.description}
                    </p>
                </div>

                <div className="mt-auto">
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t border-amber-900/10 group-hover:border-amber-900/20 transition-colors">
                    <p className="text-xs text-amber-900/70 font-serif">
                        <span className="font-bold text-amber-800 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                <div className="flex items-center justify-end pt-4 border-t border-amber-900/10 group-hover:border-amber-900/20 transition-colors">
                    <span className="inline-block px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest bg-[#f5e6d0] text-amber-900/60 border border-amber-900/10 group-hover:border-amber-900/30 group-hover:text-amber-800 transition-colors">
                    {formatOrigin(power.origin)}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 italic border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-lg">Nenhum poder encontrado nos registros.</p>
            </div>
        )}

        {/* TABELA 1: Ao Sabor do Destino */}
        <section className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center uppercase tracking-wide border-b border-amber-900/20 pb-2">
                Tabela de Benefícios - Ao Sabor do Destino
            </h3>
            
            <div className="overflow-hidden rounded border-2 border-amber-900/30 shadow-sm">
                <table className="w-full text-left font-serif">
                    <thead className="bg-[#e6d5b8] text-amber-900 uppercase font-bold tracking-wider border-b-2 border-amber-900/30">
                        <tr>
                            <th className="px-6 py-4 border-r border-amber-900/20 text-center">Nível</th>
                            <th className="px-6 py-4">Benefício</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#fffbf2] divide-y divide-amber-900/10">
                        {progressionData.map((row, index) => (
                            <tr key={index} className={`transition-colors hover:bg-amber-100 ${index % 2 === 0 ? 'bg-[#fffbf2]' : 'bg-[#f9f2e0]'}`}>
                                <td className="px-6 py-3 font-bold text-red-900 text-center border-r border-amber-900/20 text-lg">{row.level}</td>
                                <td className="px-6 py-3 text-amber-950/90 font-medium">{row.benefit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* TABELA 2: Bravata */}
        <section className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center uppercase tracking-wide border-b border-amber-900/20 pb-2">
                Tabela: Meditação Autoafirmativa
            </h3>
            
            <div className="overflow-hidden rounded border-2 border-amber-900/30 shadow-sm">
                <table className="w-full text-left font-serif">
                    <thead className="bg-[#e6d5b8] text-amber-900 uppercase font-bold tracking-wider border-b-2 border-amber-900/30">
                        <tr>
                            <th className="px-6 py-4 w-3/4 border-r border-amber-900/20">Benefício</th>
                            <th className="px-6 py-4 text-center">CD</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#fffbf2] divide-y divide-amber-900/10">
                        {bravataData.map((row, index) => (
                            <tr key={index} className={`transition-colors hover:bg-amber-100 ${index % 2 === 0 ? 'bg-[#fffbf2]' : 'bg-[#f9f2e0]'}`}>
                                <td className="px-6 py-3 text-amber-950/90 font-medium italic border-r border-amber-900/20">{row.benefit}</td>
                                <td className="px-6 py-3 font-bold text-red-900 text-center text-lg">{row.cd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}