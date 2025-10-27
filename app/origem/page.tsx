"use client";

import { useState } from "react";
import Link from "next/link";
import { origins } from "@/data/origins";
import { formatOrigin } from "@/types/power";

export default function OrigemPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrigins = origins
    .filter(
      (origin) =>
        origin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.source.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Origem</span>
        </div>
      </header>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Origem
        </h1>
        <p className="text-gray-400 text-lg">Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.</p>
        <p className="text-gray-400 text-lg">Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!</p>

        <h3 className="text-1xl font-bold text-cyan-400 mb-2">Itens de Origem</h3>
        <p className="text-gray-400 text-lg">Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.</p>

        

        <h3 className="text-1xl font-bold text-cyan-400 mb-2">Benefícios de Origem</h3>
        <p className="text-gray-400 text-lg">Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais. Você escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais rápidas, escolha apenas perícias.</p>
        <p><span className="text-cyan-300">Perícias: </span><span className="text-gray-400 leading-relaxed">Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva. Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.</span></p>
        <p><span className="text-cyan-300"> Poderes:</span><span className="text-gray-400 leading-relaxed">A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus pré-requisitos.</span></p>
        <p><span className="text-cyan-300">Poder Único: </span><span className="text-gray-400 leading-relaxed">Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois benefícios. Apenas personagens com essa origem podem escolher esse poder.</span></p>
        <p className="text-gray-400 text-lg">O humano clérigo Pivas, que cresceu isolado nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e uma maleta de medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.</p>

      </div>

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou fonte..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
      </div>

      {/* Grid de Origens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredOrigins.map((origin) => (
          <div
            key={origin.id}
            className="rounded-lg bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col"
          >
            {/* Nome da Origem */}
            <h3 className="text-xl font-bold text-cyan-300 mb-3">
              {origin.name}
            </h3>

            {/* Descrição */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
              {origin.description}
            </p>

            {/* Itens */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">Itens:</p>
              <div className="flex flex-wrap gap-2">
                {origin.items.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-cyan-900/30 border border-cyan-500/30 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">Benefícios:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                {origin.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Poder Único */}
            <div className="mb-4 pt-4 border-t border-cyan-500/20">
              <p className="text-xs font-semibold text-cyan-400 mb-2">
                {origin.uniquePower.name}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                {origin.uniquePower.description}
              </p>
            </div>

            {/* Fonte */}
            <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
              <span className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300">
                {formatOrigin(origin.source)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredOrigins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhuma origem encontrada.</p>
        </div>
      )}
    </main>
  );
}