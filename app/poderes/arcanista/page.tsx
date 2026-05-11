"use client";

import { useState } from "react";
import Link from "next/link";
import { powersArcanista } from "@/data/powers-arcanista";
import { formatOrigin } from "@/types/power";

export default function ArcanistaPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersArcanista
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

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
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
                <span className="text-red-800">Poderes de Arcanista</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12">

        {/* Título Principal */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Poderes do Arcanista
          </h1>
        </div>

        {/* Acordeão de Introdução */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10">
            <div className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                <h3 className="text-2xl font-bold text-red-800 mb-4 font-serif">Familiares Arcanos</h3>
                <p className="text-amber-900/90 font-medium mb-4 text-justify">
                Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.
                </p>
            </div>
            <div className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                <p><span className="text-red-800 font-bold">Borboleta: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">A CD dos testes de Vontade para resistir a suas magias aumenta em +1.</span></p>
                <p><span className="text-red-800 font-bold">Cobra: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.</span></p>
                <p><span className="text-red-800 font-bold">Coruja: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.</span></p>
                <p><span className="text-red-800 font-bold">Corvo: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</span></p>
                <p><span className="text-red-800 font-bold">Falcão: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Você não pode ser surpreendido e nunca fica desprevenido.</span></p>
                <p><span className="text-red-800 font-bold">Gato: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Você recebe visão no escuro e +2 em Furtividade.</span></p>
                <p><span className="text-red-800 font-bold">Lagarto: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.</span></p>
                <p><span className="text-red-800 font-bold">Morcego: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Você adquire percepção às cegas em alcance curto.</span></p>
                <p><span className="text-red-800 font-bold">Rato: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.</span></p>
                <p><span className="text-red-800 font-bold">Sapo: </span><span className="text-amber-900/90 font-medium mb-4 text-justify">Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).</span></p>
            </div>
            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-[#d9c8a9] border-2 border-amber-900/30 p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-700 transition-colors font-serif">
                {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                <p className="text-amber-900/90 text-sm leading-relaxed font-serif font-medium">
                    {power.description}
                </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                    <p className="text-xs text-amber-900/70 font-serif font-medium">
                        <span className="font-bold text-red-800 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                {/* Origem */}
                <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-900/80 font-serif uppercase tracking-widest shadow-sm font-bold">
                    {formatOrigin(power.origin)}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif bg-[#e8dac1]/50 mt-8">
            <p className="text-lg">Nenhum poder encontrado.</p>
            </div>
        )}

        {/* Seção de Informação (Familiares) */}
        
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}