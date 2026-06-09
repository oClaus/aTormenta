"use client";

import { useState } from "react";
import Link from "next/link";
import { powersSamurai } from "@/data/powers-samurai";
import { formatOrigin } from "@/types/power";

export default function SamuraiPowersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersSamurai
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
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/poderes" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800 whitespace-nowrap">Samurai</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Intro */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
              Poderes de Samurai
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
            <p className="text-amber-950/85 text-lg font-serif font-medium max-w-3xl leading-relaxed">
              Acervo de poderes e habilidades exclusivas da classe Samurai.
            </p>
        </div>

        {/* Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                {searchTerm ? (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                    title="Limpar busca"
                  >
                    ✕
                  </button>
                ) : (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                      🔍
                  </div>
                )}
            </div>
            {searchTerm && (
              <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                Exibindo {filteredPowers.length} resultado(s) para "{searchTerm}".
              </p>
            )}
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch mb-16">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="group relative p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full"
            >
                {/* Efeito de Brilho Superior */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                {/* Nome do Poder */}
                <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                  <h3 className="text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors font-serif tracking-wide">
                  {power.name}
                  </h3>
                </div>

                {/* Descrição */}
                <div className="flex-1 mb-6">
                  <p className="text-amber-950/85 text-sm leading-relaxed font-serif font-medium">
                      {power.description}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto flex flex-col gap-4">
                  {/* Pré-requisito */}
                  {power.prerequisite && (
                      <div className="pt-3 border-t-2 border-amber-900/10">
                        <p className="text-xs text-amber-950/70 font-serif font-medium">
                            <span className="font-bold text-red-800 uppercase tracking-widest text-[10px]">Pré-requisito:</span> {power.prerequisite}
                        </p>
                      </div>
                  )}

                  {/* Origem */}
                  <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/10">
                      <span className="text-[10px] px-2.5 py-1 rounded-md bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">
                      {formatOrigin(power.origin)}
                      </span>
                  </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum poder encontrado com o termo aplicado.
              </p>
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}