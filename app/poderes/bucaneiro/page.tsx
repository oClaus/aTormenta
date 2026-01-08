"use client";

import { useState } from "react";
import Link from "next/link";
import { powersBucaneiro } from "@/data/powers-bucaneiro";
import { formatOrigin } from "@/types/power";

export default function BucaneiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersBucaneiro
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
                <Link href="/" className="text-stone-500 hover:text-cyan-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-cyan-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Bucaneiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 mb-6 drop-shadow-md">
            Poderes de Bucaneiro
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes dos bucaneiro:</p>
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
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-cyan-900/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-cyan-500 mb-3 group-hover:text-cyan-400 transition-colors font-serif">
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
                        <span className="font-bold text-cyan-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
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

        {/* Seção de Informação (Bravatas & Tabela) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-8">
            
            {/* Texto das Bravatas */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold text-cyan-500 mb-4 font-serif">Bravatas</h3>
                    <p className="text-stone-300 leading-relaxed font-serif">
                    Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as seguintes regras:
                    </p>
                </div>

                <div className="space-y-2 text-stone-400 font-serif border-l-2 border-stone-800 pl-4">
                    <p className="text-stone-300 leading-relaxed"><span className="text-cyan-700 font-bold">•</span> Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-cyan-700 font-bold">•</span> Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-cyan-700 font-bold">•</span> Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima.</p>
                </div>
            </div>

            <div className="border-t border-stone-800 my-8"></div>

            {/* TABELA 1-17: INTRODUÇÃO CALOROSA */}
            <div>
                <h4 className="text-lg font-bold text-center text-stone-200 uppercase tracking-widest mb-4 font-serif">
                    Tabela Introdução Calorosa
                </h4>
                
                <div className="overflow-x-auto rounded border border-stone-800 shadow-md">
                    <table className="w-full text-left border-collapse text-sm">
                        <thead className="bg-stone-950 text-cyan-500 uppercase tracking-wider text-xs">
                            <tr>
                                <th className="p-4 font-bold border-b border-stone-800">Apresentação</th>
                                <th className="p-4 font-bold border-b border-stone-800">Ação</th>
                                <th className="p-4 font-bold border-b border-stone-800">Benefício</th>
                                <th className="p-4 font-bold border-b border-stone-800">Exemplo</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800 bg-stone-900/30 font-serif text-stone-300">
                            <tr className="hover:bg-stone-800/50 transition-colors">
                                <td className="p-4 font-medium text-stone-200">Saudação educada</td>
                                <td className="p-4">Livre</td>
                                <td className="p-4">1 PM temporário</td>
                                <td className="p-4 italic text-stone-400">“Olá!”</td>
                            </tr>
                            <tr className="hover:bg-stone-800/50 transition-colors bg-stone-900/50">
                                <td className="p-4 font-medium text-stone-200">Apresentar o próprio nome</td>
                                <td className="p-4">Movimento</td>
                                <td className="p-4">+2 em perícias baseadas em Carisma</td>
                                <td className="p-4 italic text-stone-400">“Meu nome é Lorthan.”</td>
                            </tr>
                            <tr className="hover:bg-stone-800/50 transition-colors">
                                <td className="p-4 font-medium text-stone-200">Declarar uma ligação pessoal</td>
                                <td className="p-4">Padrão</td>
                                <td className="p-4">+2 em rolagens de dano</td>
                                <td className="p-4 italic text-stone-400">“Vocês roubaram a colheita dos camponeses.”</td>
                            </tr>
                            <tr className="hover:bg-stone-800/50 transition-colors bg-stone-900/50">
                                <td className="p-4 font-medium text-stone-200">Revelar seu objetivo na cena</td>
                                <td className="p-4">Completa</td>
                                <td className="p-4">Pode rolar novamente um único teste de perícia recém-feito</td>
                                <td className="p-4 italic text-stone-400">“Eu vim aqui para puni-los!”</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

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