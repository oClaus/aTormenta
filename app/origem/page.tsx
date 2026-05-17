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

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Origens</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Origens
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full"></div>
        </div>

        {/* Acordeão de Introdução */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Origem
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações básicas.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium mb-4">
                  Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.
                </p>
                <p className="font-medium">
                  Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!
                </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Itens de Origem
                </h3>
                <p className="font-medium">
                  Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.
                </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Benefícios de Origem
                </h3>
                <p className="font-medium mb-6">
                  Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais. Você escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais rápidas, escolha apenas perícias.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">
                      <strong className="text-red-800 uppercase tracking-wide text-sm">Perícias:</strong> Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva. Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">
                      <strong className="text-red-800 uppercase tracking-wide text-sm">Poderes:</strong> A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus pré-requisitos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">
                      <strong className="text-red-800 uppercase tracking-wide text-sm">Poder Único:</strong> Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois benefícios. Apenas personagens com essa origem podem escolher esse poder.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 p-4 md:p-6 bg-[#fbf5e6] rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800">
                  <p className="italic text-amber-950/85">
                    O humano clérigo Pivas, que cresceu isolado nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e uma maleta de medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Origem
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome, descrição ou fonte..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Origens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredOrigins.map((origin) => (
            <div
                key={origin.id}
                className="rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 p-5 md:p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 font-serif"
            >
                {/* Nome da Origem */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-800 transition-colors tracking-wide border-b-2 border-amber-900/10 pb-2">
                  {origin.name}
                </h3>

                {/* Descrição */}
                <div className="mb-4">
                  <p className="text-amber-950/85 text-sm md:text-base leading-relaxed font-medium">
                    {origin.description}
                  </p>
                </div>

                {/* Bloco de Informações Dinâmicas (Itens, Benefícios, Poder Único) */}
                <div className="flex flex-col flex-1 gap-4">
                  
                  {/* Itens */}
                  {origin.items && origin.items.length > 0 && (
                    <div className="pt-3 border-t border-amber-900/10">
                      <p className="text-xs font-bold text-red-800 mb-2 uppercase tracking-widest">Itens</p>
                      <div className="flex flex-wrap gap-2">
                          {origin.items.map((item, index) => (
                          <span
                              key={index}
                              className="text-xs px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/80 font-bold shadow-sm"
                          >
                              {item}
                          </span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Benefícios */}
                  {origin.benefits && origin.benefits.length > 0 && (
                    <div className="pt-3 border-t border-amber-900/10">
                      <p className="text-xs font-bold text-red-800 mb-2 uppercase tracking-widest">Benefícios</p>
                      <ul className="text-sm md:text-base text-amber-950/85 font-medium space-y-1">
                          {origin.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                              <span className="text-[10px] text-red-800/60 mt-1">◆</span>
                              <span>{benefit}</span>
                          </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* Poder Único - CORRIGIDO AQUI PARA NÃO APARECER QUANDO NÃO TIVER NOME */}
                  {origin.uniquePower && origin.uniquePower.name && (
                    <div className="pt-3 border-t border-amber-900/10 mt-auto">
                      <p className="text-xs font-bold text-red-800 mb-1 uppercase tracking-widest">
                          Poder Único: {origin.uniquePower.name}
                      </p>
                      <p className="text-sm text-amber-950/75 leading-relaxed font-medium">
                          {origin.uniquePower.description}
                      </p>
                    </div>
                  )}

                </div>

                {/* Rodapé (Fonte) */}
                <div className="mt-4 pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors flex items-center justify-end">
                  <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                    {formatOrigin(origin.source)}
                  </span>
                </div>

            </div>
            ))}
        </div>

        {/* Empty State */}
        {filteredOrigins.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma origem encontrada.
              </p>
            </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}