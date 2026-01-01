"use client";

import { useState } from "react";
import Link from "next/link";
import { powersVampiro } from "@/data/powers-vampiro";
import { formatOrigin } from "@/types/power";

export default function VampiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersVampiro
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
                <Link href="/" className="text-stone-500 hover:text-red-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-red-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Vampiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500 mb-6 drop-shadow-md">
            Poderes de Vampiro
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes exclusivos da classe Vampiro (Somente Dragão Brasil):</p>
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
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
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
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-red-900/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors font-serif">
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
                        <span className="font-bold text-red-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
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

        {/* Seção de Informação (Sede de Sangue) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-red-500 mb-4 font-serif">Sede de Sangue</h3>
                <p className="text-stone-300 leading-relaxed font-serif mb-4">
                Para sobreviver, um vampiro precisa consumir sangue de uma criatura viva, preferencialmente um ser inteligente. Isso torna a vida de vampiros heróicos particularmente desafiadora, ainda que muitos encontrem formas de saciar sua fome de formas mais “humanas”.
                </p>
                <p className="text-stone-300 leading-relaxed font-serif">
                Um vampiro precisa consumir no mínimo uma “dose” de sangue por semana para se manter saudável (vampiros mais poderosos podem precisar de mais sangue para saciar sua fome e manter seu vigor). Uma “dose” é o equivalente a 1 litro de sangue, ou drenar 2d6 pontos de vida de um ser vivo. A origem do sangue determina seus efeitos sob o vampiro.
                </p>
            </div>

            <div className="space-y-4 text-stone-400 font-serif border-t border-stone-800 pt-4">
                <p><span className="text-red-400 font-bold"> Animal </span><span className="text-stone-300 leading-relaxed">Uma fonte relativamente abundante de alimento, o sangue de animais é consumido por vampiros que, por qualquer razão, não podem ou não querem se alimentar de criaturas inteligentes. Entretanto, ele é menos nutritivo; um vampiro que se alimenta dessa forma fica fraco até ingerir sangue de outros tipos de criaturas.</span></p>
                <p><span className="text-red-400 font-bold"> Espírito </span><span className="text-stone-300 leading-relaxed">O mais valioso dos alimentos, o sangue de espíritos transmite consigo parte do poder místico da criatura. Quando se alimenta de sangue de um espírito, o vampiro é infundido de energia mágica por um dia. Nessa condição, seu total de PM aumenta em +2 por patamar da criatura e ele recebe +2 na CD de suas habilidades mágicas.</span></p>
                <p><span className="text-red-400 font-bold"> Humanoide </span><span className="text-stone-300 leading-relaxed">Este é o alimento tradicional de vampiros, e a base de sua dieta. Alimenta sem penalidades, mas não fornece benefícios adicionais.</span></p>
                <p><span className="text-red-400 font-bold"> Monstro </span><span className="text-stone-300 leading-relaxed">Mais vigoroso que o sangue de humanoides, o sangue de monstros carrega uma fração de sua força e selvageria. Quando se alimenta dessa forma, o vampiro entra em um estado de excitação feral por um dia. Nesse estado, ele recebe +1 em Força mas sofre –2 em testes de perícias baseadas em Carisma (exceto Intimidação).</span></p>
            </div>

            <p className="text-stone-300 leading-relaxed font-serif pt-4 border-t border-stone-800">
            Vampiros também drenam sangue como forma de criar outros vampiros. Se um vampiro drenar sangue suficiente de um humanoide ou monstro para matá-lo, a vítima se erguerá como um vampiro na próxima noite e deverá vencer um teste de Vontade oposto contra o vampiro ou ficará sob o controle dele até que ele a liberte ou seja destruído.
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