"use client";

import { useState } from "react";
import Link from "next/link";
import { powersClerigo } from "@/data/powers-clerigo";
import { formatOrigin } from "@/types/power";

export default function ClerigoPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersClerigo
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
                <Link href="/" className="text-stone-500 hover:text-yellow-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-yellow-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Clérigo</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 mb-6 drop-shadow-md">
            Poderes de Clérigo
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes de Clérigo:</p>
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
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-900 transition-all font-serif"
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
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-yellow-900/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-yellow-500 mb-3 group-hover:text-yellow-400 transition-colors font-serif">
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
                        <span className="font-bold text-yellow-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
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

        {/* Seção de Informação (Missas) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-serif">Missas</h3>
                <p className="text-stone-300 leading-relaxed font-serif">
                Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras:
                </p>
            </div>

            <div className="space-y-2 text-stone-400 font-serif">
                <p className="text-stone-300 leading-relaxed"><span className="text-yellow-700 font-bold">•</span> Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.</p>
                <p className="text-stone-300 leading-relaxed"><span className="text-yellow-700 font-bold">•</span> Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.</p>
                <p className="text-stone-300 leading-relaxed"><span className="text-yellow-700 font-bold">•</span> Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia.</p>
            </div>
        </div>

        {/* Seção Mestre Celebrante */}
        <div className="mt-8 p-6 sm:p-8 rounded bg-stone-950/50 border border-stone-800/60 shadow-inner w-full">
            <h4 className="text-xl font-bold text-yellow-500 mb-4 font-serif flex items-center gap-2">
               ✨ Mestre Celebrante
            </h4>
            <p className="text-stone-300 leading-relaxed font-serif mb-4">
                O poder <span className="text-stone-200 font-semibold">Mestre Celebrante</span> dobra os benefícios de Missas celebradas pelo personagem. Abaixo detalhamos como isso se aplica às novas missas:
            </p>
            
            <div className="space-y-3 text-stone-400 font-serif border-l-2 border-stone-800 pl-4">
                <p className="text-stone-300 leading-relaxed">
                    <span className="text-yellow-700 font-bold">•</span> Se a Missa fornece um bônus numérico que se aplica por toda sua duração, como o de <span className="italic text-stone-500">Mente Abençoada</span>, esse bônus é dobrado.
                </p>
                <p className="text-stone-300 leading-relaxed">
                    <span className="text-yellow-700 font-bold">•</span> Se fornece uma quantidade de PV ou PM, como <span className="italic text-stone-500">Elevação do Espírito</span>, essa quantidade é dobrada.
                </p>
                <p className="text-stone-300 leading-relaxed">
                    <span className="text-yellow-700 font-bold">•</span> Se permite usar uma habilidade ou receber um benefício uma vez, como <span className="italic text-stone-500">Compartilhar Milagre</span>, esse efeito pode ser usado uma vez adicional pela duração da Missa.
                </p>
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