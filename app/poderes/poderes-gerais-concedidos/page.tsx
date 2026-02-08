"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGeraisConcedido } from "@/data/powers-gerais-concedido";
import { formatOrigin } from "@/types/power";

export default function GeraisPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersGeraisConcedido
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  // --- FUNÇÃO AUXILIAR PARA FORMATAR O TEXTO ---
  // Mantida a lógica, mas atualizadas as classes de cor (Teal -> Red/Amber) para combinar com o tema
  const renderDescription = (text: string) => {
    if (!text) return null;

    // Divide o texto pelas quebras de linha (\n) vindas do JSON
    return text.split("\n").map((line, index) => {
      // Se a linha estiver vazia (apenas \n\n), cria um espaçamento visual
      if (line.trim() === "") {
        return <div key={index} className="h-2" />;
      }

      // Se a linha tiver "**" (markdown de negrito), formatamos como título
      if (line.includes("**")) {
        const cleanLine = line.replace(/\*\*/g, ""); // Remove os asteriscos
        return (
          // Cor alterada de teal-400 para red-800 para combinar com o tema
          <strong key={index} className="block mt-2 mb-1 text-red-800 font-sans tracking-wide">
            {cleanLine}
          </strong>
        );
      }

      // Linhas normais de texto
      return (
        <span key={index} className="block mb-1">
          {line}
        </span>
      );
    });
  };

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
                <span className="text-red-800">Poderes Gerais - Concedido</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-[#e8dac1]/50 rounded border border-amber-900/20 shadow-sm w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-800 mb-6 border-b-2 border-amber-900/10 pb-4">
            Poderes Gerais - Concedido
            </h1>
            <p className="text-amber-900/80 text-lg font-medium leading-relaxed">
            Todos os poderes desta seção possuem como pré-requisito ser devoto de um dos deuses indicados. O atributo-chave desses poderes é Sabedoria.
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

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch mb-16">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded bg-[#d9c8a9] border border-amber-900/30 p-6 hover:border-amber-700/80 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Cabeçalho do Card com Detalhe de Diamante */}
                <div className="w-full flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-amber-900/40 rotate-45 group-hover:bg-red-600 transition-colors duration-300"></div>
                      <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors font-serif tracking-wide">
                        {power.name}
                      </h3>
                </div>

                {/* Descrição - Chamando a função auxiliar */}
                <div className="flex-1 mb-4 text-amber-900/80 text-sm leading-relaxed font-medium text-justify">
                  {renderDescription(power.description)}
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t border-amber-900/10 group-hover:border-amber-900/20 transition-colors">
                    <p className="text-xs text-amber-900/70 font-serif">
                        <span className="font-bold text-amber-800 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                {/* Origem */}
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
            <p className="text-lg">Nenhum poder encontrado.</p>
            </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}