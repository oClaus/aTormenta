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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
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
          <span className="text-gray-400 text-sm">Poderes de Vampiro</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Poderes de Vampiro
        </h1>
        <p className="text-gray-400 text-lg">Poderes exclusivos da classe Vampiro (Somente Dragão Brasil):</p>
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

      {/* Grid de Poderes - items-stretch para garantir que cards tenham mesma altura */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
        {filteredPowers.map((power) => (
          <div
            key={power.id}
            className="rounded-lg bg-gradient-to-br from-purple-950/20 to-black border border-purple-500/20 p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col h-full"
          >
            {/* Nome do Poder */}
            <h3 className="text-xl font-bold text-purple-300 mb-3">{power.name}</h3>

            {/* Descrição: wrapper flex-1 para ocupar espaço e empurrar o footer */}
            <div className="flex-1 mb-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                {power.description}
              </p>
            </div>

            {/* Rodapé com mt-auto para ficar sempre no final do card */}
            <div className="mt-auto">
              {/* Pré-requisito (se houver) */}
              {power.prerequisite && (
                <div className="mb-4 pt-4 border-t border-purple-500/20">
                  <p className="text-xs text-purple-400">
                    <span className="font-semibold">Pré-requisito:</span> {power.prerequisite}
                  </p>
                </div>
              )}

              {/* Origem */}
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

      {/* Seção de Informação */}
      {/* Seção de Informação */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-yellow-900/30">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Sede de Sangue</h3>
        <p className="text-gray-300 leading-relaxed">Para sobreviver, um vampiro precisa consumir sangue de uma criatura viva, preferencialmente um ser inteligente. Isso torna a vida de vampiros heróicos particularmente desafiadora, ainda que muitos encontrem formas de saciar sua fome de formas mais “humanas”.</p>
        <p className="text-gray-300 leading-relaxed">Um vampiro precisa consumir no mínimo uma “dose” de sangue por semana para se manter saudável (vampiros mais poderosos podem precisar de mais sangue para saciar sua fome e manter seu vigor). Uma “dose” é o equivalente a 1 litro de sangue, ou drenar 2d6 pontos de vida de um ser vivo. A origem do sangue determina seus efeitos sob o vampiro.</p>

        <p><span className="text-purple-300"> Animal </span><span className="text-gray-300 leading-relaxed">Uma fonte relativamente abundante de alimento, o sangue de animais é consumido por vampiros que, por qualquer razão, não podem ou não querem se alimentar de criaturas inteligentes. Entretanto, ele é menos nutritivo; um vampiro que se alimenta dessa forma fica fraco até ingerir sangue de outros tipos de criaturas.</span></p>
        <p><span className="text-purple-300"> Espírito </span><span className="text-gray-300 leading-relaxed">O mais valioso dos alimentos, o sangue de espíritos transmite consigo parte do poder místico da criatura. Quando se alimenta de sangue de um espírito, o vampiro é infundido de energia mágica por um dia. Nessa condição, seu total de PM aumenta em +2 por patamar da criatura e ele recebe +2 na CD de suas habilidades mágicas.</span></p>
        <p><span className="text-purple-300"> Humanoide </span><span className="text-gray-300 leading-relaxed">Este é o alimento tradicional de vampiros, e a base de sua dieta. Alimenta sem penalidades, mas não fornece benefícios adicionais.</span></p>
        <p><span className="text-purple-300"> Monstro </span><span className="text-gray-300 leading-relaxed">Mais vigoroso que o sangue de humanoides, o sangue de monstros carrega uma fração de sua força e selvageria. Quando se alimenta dessa forma, o vampiro entra em um estado de excitação feral por um dia. Nesse estado, ele recebe +1 em Força mas sofre –2 em testes de perícias baseadas em Carisma (exceto Intimidação).</span></p>

        <p className="text-gray-300 leading-relaxed">Vampiros também drenam sangue como forma de criar outros vampiros. Se um vampiro drenar sangue suficiente de um humanoide ou monstro para matá-lo, a vítima se erguerá como um vampiro na próxima noite e deverá vencer um teste de Vontade oposto contra o vampiro ou ficará sob o controle dele até que ele a liberte ou seja destruído.</p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4">Importante lembrar!</h3>
        <p className="text-gray-300 leading-relaxed">
          Aqui temos poderes oficiais da Dragão Brasil, podendo ou não ser disponibilizado em futuros complementos, para utilizar, conversar com mestre da mesa.
        </p>
      </div>
      
    </main>
  );
}
