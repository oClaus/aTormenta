"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGerais } from "@/data/powers-gerais";
import { formatOrigin } from "@/types/power";

export default function GeraisPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersGerais
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
          <span className="text-gray-400 text-sm">Poderes Gerais</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Poderes do Arcanista
        </h1>
        <p className="text-gray-400 text-lg">Poderes compartilhados de todas as classes:</p>
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
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-yellow-900/30">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Familiares Arcanos</h3>
        <p className="text-gray-300 leading-relaxed">
          Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.
        </p>

        <p><span className="text-purple-300">Borboleta </span><span className="text-gray-300 leading-relaxed">A CD dos testes de Vontade para resistir a suas magias aumenta em +1.</span></p>
        <p><span className="text-purple-300">Cobra </span><span className="text-gray-300 leading-relaxed">A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.</span></p>
        <p><span className="text-purple-300">Coruja </span><span className="text-gray-300 leading-relaxed">Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.</span></p>
        <p><span className="text-purple-300">Corvo </span><span className="text-gray-300 leading-relaxed">Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</span></p>
        <p><span className="text-purple-300">Falcão </span><span className="text-gray-300 leading-relaxed">Você não pode ser surpreendido e nunca fica desprevenido.</span></p>
        <p><span className="text-purple-300">Gato </span><span className="text-gray-300 leading-relaxed">Você recebe visão no escuro e +2 em Furtividade.</span></p>
        <p><span className="text-purple-300">Lagarto </span><span className="text-gray-300 leading-relaxed">A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.</span></p>
        <p><span className="text-purple-300">Morcego </span><span className="text-gray-300 leading-relaxed">Você adquire percepção às cegas em alcance curto.</span></p>
        <p><span className="text-purple-300">Rato </span><span className="text-gray-300 leading-relaxed">Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.</span></p>
        <p><span className="text-purple-300">Sapo </span><span className="text-gray-300 leading-relaxed">Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).</span></p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4">Importante lembrar!</h3>
        <p className="text-gray-300 leading-relaxed">
          Aqui temos poderes oficiais dos livros mas também da Dragão Brasil, podendo ou não ser disponibilizado em futuros complementos, para utilizar, conversar com mestre da mesa.
        </p>
      </div>
    </main>
  );
}
