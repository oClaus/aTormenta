"use client";

import { useState } from "react";
import Link from "next/link";
import { origins } from "@/data/origins";
import { formatOrigin } from "@/types/power";

export default function OrigemPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredOrigins = origins
    .filter(
      (origin) =>
        origin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        origin.source.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
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
                <span className="text-red-800">Origem</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-2">

        {/* Título Principal */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Origem
          </h1>
        </div>

        {/* Acordeão de Introdução (COMEÇA FECHADO) */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras de Origem
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações básicas.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[200000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10">
                <p className="text-amber-900/90 font-medium mb-2 text-justify">Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.</p>
                <p className="text-amber-900/90 font-medium mb-2 text-justify">Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!</p>

                <h3 className="text-2xl font-bold text-red-800 mb-3 border-t-2 border-amber-900/20 pt-4 font-serif">Itens de Origem</h3>
                <p className="text-amber-900/90 font-medium mb-2 text-justify">Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.</p>

                <h3 className="text-2xl font-bold text-red-800 mb-3 border-t-2 border-amber-900/20 pt-4 font-serif">Benefícios de Origem</h3>
                <p className="text-amber-900/90 font-medium mb-2 text-justify">Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais. Você escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais rápidas, escolha apenas perícias.</p>
                
                <p className="text-amber-900/90 font-medium mb-2 text-justify"><span className="text-red-800 font-bold">Perícias: </span><span>Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva. Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.</span></p>
                <p className="text-amber-900/90 font-medium mb-2 text-justify"><span className="text-red-800 font-bold"> Poderes: </span><span>A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus pré-requisitos.</span></p>
                <p className="text-amber-900/90 font-medium mb-2 text-justify"><span className="text-red-800 font-bold">Poder Único: </span><span>Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois benefícios. Apenas personagens com essa origem podem escolher esse poder.</span></p>
                
                <p className="text-amber-900/90 font-medium mb-2 text-justify italic border-l-4 border-red-800 pl-4 bg-[#e8dac1] py-3 rounded-r shadow-sm mt-4">O humano clérigo Pivas, que cresceu isolado nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e uma maleta de medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.</p>
            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Origem
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou fonte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Origens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredOrigins.map((origin) => (
            <div
                key={origin.id}
                className="rounded-xl bg-[#d9c8a9] border-2 border-amber-900/30 p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-sm"
            >
                {/* Nome da Origem */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-700 transition-colors font-serif drop-shadow-sm">
                {origin.name}
                </h3>

                {/* Descrição */}
                <p className="text-amber-900/90 text-sm mb-4 leading-relaxed flex-grow font-serif font-medium">
                {origin.description}
                </p>

                {/* Itens */}
                <div className="mb-4 pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                <p className="text-xs font-bold text-amber-900/60 mb-2 uppercase tracking-wide">Itens:</p>
                <div className="flex flex-wrap gap-2">
                    {origin.items.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-900/80 font-serif font-bold shadow-sm"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </div>

                {/* Benefícios */}
                <div className="mb-4 pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                <p className="text-xs font-bold text-amber-900/60 mb-2 uppercase tracking-wide">Benefícios:</p>
                <ul className="text-xs text-amber-950 font-medium space-y-1 font-serif">
                    {origin.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2 text-red-800 font-bold">•</span>
                        <span>{benefit}</span>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Poder Único */}
                <div className="mb-4 pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                <p className="text-xs font-bold text-red-800 mb-2 font-serif uppercase tracking-wider">
                    {origin.uniquePower.name}
                </p>
                <p className="text-xs text-amber-900/80 leading-relaxed font-serif italic font-medium">
                    {origin.uniquePower.description}
                </p>
                </div>

                {/* Fonte */}
                <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#fbf5e6] text-amber-900/80 font-serif uppercase tracking-widest border border-amber-900/20 font-bold shadow-sm">
                    {formatOrigin(origin.source)}
                </span>
                </div>
            </div>
            ))}
        </div>

        {filteredOrigins.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl text-lg font-serif bg-[#e8dac1]/50 mt-8">
            Nenhuma origem encontrada.
            </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="mt-20 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}