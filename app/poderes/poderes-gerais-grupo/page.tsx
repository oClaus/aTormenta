"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGeraisGrupo } from "@/data/powers-gerais-grupo";
import { formatOrigin } from "@/types/power";

export default function GeraisPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersGeraisGrupo
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-teal-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-teal-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes Gerais - Grupo</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 mb-6 drop-shadow-md">
            Poderes Gerais - Grupo
            </h1>
            <p className="text-stone-300 text-lg font-serif leading-relaxed">
            Poderes de grupo fornecem bônus maiores que outros poderes; contudo, só funcionam se houver outro personagem com o mesmo poder na cena. Assim, se apenas você comprar um poder de grupo, ele não terá efeito! Muitas vezes, poderes de grupo se tornam mais eficientes de acordo com o número de personagens com o mesmo poder na cena. O pré-requisito de ter um aliado com o mesmo poder na cena nunca pode ser cumprido por NPCs, parceiros e outros coadjuvantes — apenas por personagens jogadores. Também não pode ser cumprido por efeitos que permitam a um personagem usar um poder sem possuí-lo. Em suma, funcionam apenas se dois ou mais membros do grupo efetivamente tiverem escolhido o poder. Caso um membro do grupo morra e um poder de grupo fique inativo, você pode gastar tempo entre aventuras para treinar e trocar o poder, ou esperar que o jogador em questão faça outro personagem com o mesmo poder de grupo.
            </p>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch mb-16">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-teal-900/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-teal-500 mb-3 group-hover:text-teal-400 transition-colors font-serif">
                {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                <p className="text-stone-400 text-sm leading-relaxed font-serif group-hover:text-stone-300">
                    {power.description}
                </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                    <p className="text-xs text-stone-500 font-serif">
                        <span className="font-bold text-teal-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                {/* Origem */}
                <div className="flex items-center justify-end pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-950 border border-stone-700 text-stone-500 font-serif uppercase tracking-widest">
                    {formatOrigin(power.origin)}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl font-serif">
            <p className="text-lg">Nenhum poder encontrado.</p>
            </div>
        )}
      </div>

        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 mb-6 drop-shadow-md">O Dilema do Jogador Ausente</h3>
                <p className="text-stone-300 leading-relaxed font-serif">
                Poderes de grupo são feitos para incentivar a integração e o pensamento tático entre os jogadores. Por isso só funcionam para heróis: não estariam “incentivando a integração” se um só jogador pudesse cumprir os requisitos sozinho. Contudo, isso leva a uma questão: o que fazer com personagens cujos jogadores faltaram à sessão? Se eles estiverem sendo tratados como NPCs, continuam contando para cumprir os pré-requisitos?
                </p>
                <p className="text-stone-300 leading-relaxed font-serif">
                Isso é uma decisão do grupo como um todo, mas aconselhamos a seguinte regra: se o personagem está em risco na sessão (ou seja, se pode morrer ou sofrer consequências negativas, mesmo com o jogador ausente), então deve contar para o pré-requisito. Caso contrário, não.
                </p>
            </div>
        </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}