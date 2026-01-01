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
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Origem</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-6 drop-shadow-md">
            Origem
            </h1>
            <div className="space-y-4 text-stone-300 leading-relaxed font-serif text-lg">
                <p>Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.</p>
                <p>Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!</p>

                <h3 className="text-2xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-2">Itens de Origem</h3>
                <p>Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.</p>

                <h3 className="text-2xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-2">Benefícios de Origem</h3>
                <p>Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais. Você escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais rápidas, escolha apenas perícias.</p>
                
                <p><span className="text-amber-600 font-bold">Perícias: </span><span className="text-stone-400">Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva. Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.</span></p>
                <p><span className="text-amber-600 font-bold"> Poderes:</span><span className="text-stone-400">A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus pré-requisitos.</span></p>
                <p><span className="text-amber-600 font-bold">Poder Único: </span><span className="text-stone-400">Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois benefícios. Apenas personagens com essa origem podem escolher esse poder.</span></p>
                
                <p className="text-stone-300 italic border-l-4 border-amber-700 pl-4 bg-stone-950/30 py-2">O humano clérigo Pivas, que cresceu isolado nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e uma maleta de medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.</p>
            </div>
        </section>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Origem
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou fonte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Origens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredOrigins.map((origin) => (
            <div
                key={origin.id}
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-amber-900/50 hover:shadow-[0_0_20px_rgba(180,83,9,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
                {/* Nome da Origem */}
                <h3 className="text-xl font-bold text-amber-600 mb-3 group-hover:text-amber-500 transition-colors font-serif">
                {origin.name}
                </h3>

                {/* Descrição */}
                <p className="text-stone-400 text-sm mb-4 leading-relaxed flex-grow font-serif group-hover:text-stone-300">
                {origin.description}
                </p>

                {/* Itens */}
                <div className="mb-4 pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                <p className="text-xs font-bold text-stone-500 mb-2 uppercase tracking-wide">Itens:</p>
                <div className="flex flex-wrap gap-2">
                    {origin.items.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-stone-950 border border-stone-700 text-stone-300 font-serif"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </div>

                {/* Benefícios */}
                <div className="mb-4 pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                <p className="text-xs font-bold text-stone-500 mb-2 uppercase tracking-wide">Benefícios:</p>
                <ul className="text-xs text-stone-300 space-y-1 font-serif">
                    {origin.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2 text-amber-700">•</span>
                        <span>{benefit}</span>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Poder Único */}
                <div className="mb-4 pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                <p className="text-xs font-bold text-amber-700 mb-2 font-serif uppercase tracking-wider">
                    {origin.uniquePower.name}
                </p>
                <p className="text-xs text-stone-400 leading-relaxed font-serif italic">
                    {origin.uniquePower.description}
                </p>
                </div>

                {/* Fonte */}
                <div className="flex items-center justify-end pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                <span className="text-[10px] px-2 py-0.5 rounded bg-stone-950 text-stone-500 font-serif uppercase tracking-widest border border-stone-800">
                    {formatOrigin(origin.source)}
                </span>
                </div>
            </div>
            ))}
        </div>

        {filteredOrigins.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl text-lg font-serif">
            Nenhuma origem encontrada.
            </div>
        )}
      </div>
      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}