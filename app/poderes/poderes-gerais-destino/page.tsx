"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGeraisDestino } from "@/data/powers-gerais-destino"; // Verifique se este caminho está correto no seu projeto
import { formatOrigin } from "@/types/power"; // Verifique se este caminho está correto

// Dados extraídos da imagem
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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50 mb-12">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/poderes" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Poderes
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Poderes Gerais - Destino</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Poderes Gerais - Destino
        </h1>
      </div>

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou origem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Grid de Poderes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch mb-16">
        {filteredPowers.map((power) => (
          <div
            key={power.id}
            className="rounded-lg bg-gradient-to-br from-purple-950/20 to-black border border-purple-500/20 p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-purple-300 mb-3">{power.name}</h3>

            <div className="flex-1 mb-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                {power.description}
              </p>
            </div>

            <div className="mt-auto">
              {power.prerequisite && (
                <div className="mb-4 pt-4 border-t border-purple-500/20">
                  <p className="text-xs text-purple-400">
                    <span className="font-semibold">Pré-requisito:</span> {power.prerequisite}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300">
                  {formatOrigin(power.origin)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPowers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum poder encontrado.</p>
        </div>
      )}

      {/* --- INÍCIO DA TABELA DE PROGRESSÃO --- */}
      <section className="mb-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Tabela de Benefícios - Ao Sabor do Destino</h3>
        
        <div className="overflow-hidden rounded-xl border border-purple-500/30 shadow-lg shadow-purple-900/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-purple-900/40 text-purple-200 uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 border-b border-purple-500/20">Nível</th>
                <th className="px-6 py-4 border-b border-purple-500/20">Benefício</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/10 bg-gray-900/50">
              {progressionData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`transition-colors hover:bg-purple-500/10 ${index % 2 === 0 ? 'bg-purple-900/5' : 'bg-transparent'}`}
                >
                  <td className="px-6 py-3 font-semibold text-purple-300">{row.level}</td>
                  <td className="px-6 py-3 text-gray-300">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* --- FIM DA TABELA DE PROGRESSÃO --- */}

      {/* Seção de Informação */}
      <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Importante lembrar!</h3>
        <p className="text-gray-300 leading-relaxed">
          Aqui temos poderes oficiais dos livros mas também da Dragão Brasil, podendo ou não ser disponibilizado em futuros complementos, para utilizar, conversar com mestre da mesa.
        </p>
      </div>
    </main>
  );
}