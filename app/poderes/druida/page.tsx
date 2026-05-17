"use client";

import { useState } from "react";
import Link from "next/link";
import { powersDruida } from "@/data/powers-druida";
import { formatOrigin } from "@/types/power";

export default function DruidaPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersDruida
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
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
                <Link href="/poderes" className="text-amber-950/70 hover:text-red-800 transition-colors">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poderes de Druida</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Poderes de Druida
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
                  Regras
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              {/* Seção 1: Companheiro Animal */}
              <section>
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Companheiro Animal</h3>
                <p className="font-medium mb-4">
                  Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele. Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação.
                </p>
                <p className="font-medium mb-6">
                  A seguir, alguns exemplos de animais (mas você é livre para escolher outros):
                </p>

                <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Ajudante: </span><span className="font-medium">Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Assassino: </span><span className="font-medium">Lince, onça ou outro animal treinado para abater presas.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Atirador: </span><span className="font-medium">Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Fortão: </span><span className="font-medium">Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Guardião: </span><span className="font-medium">Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Perseguidor: </span><span className="font-medium">Gambá, sabujo ou outro animal farejador.</span></p>
                </div>
              </section>

              {/* Seção 2: Forma Selvagem */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Forma Selvagem</h3>
                <p className="font-medium mb-8">
                  Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam. Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.
                </p>

                <div className="space-y-8">
                  {/* Forma Ágil */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Forma Ágil</h4>
                    <p className="font-medium mb-3">Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.</p>
                    <ul className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Aprimorada:</strong> Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Superior:</strong> Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Forma Feroz */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Forma Feroz</h4>
                    <p className="font-medium mb-3">Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.</p>
                    <ul className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Aprimorada:</strong> Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Superior:</strong> Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Forma Resistente */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Forma Resistente</h4>
                    <p className="font-medium mb-3">Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.</p>
                    <ul className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Aprimorada:</strong> Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Superior:</strong> Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Forma Sorrateira */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Forma Sorrateira</h4>
                    <p className="font-medium mb-3">Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra).</p>
                    <ul className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Aprimorada:</strong> Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Superior:</strong> Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Forma Veloz */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Forma Veloz</h4>
                    <p className="font-medium mb-3">Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.</p>
                    <ul className="space-y-3 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Aprimorada:</strong> Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800">Superior:</strong> Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome, descrição ou origem..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 p-5 md:p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 font-serif"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-800 transition-colors tracking-wide border-b-2 border-amber-900/10 pb-2">
                  {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                  <p className="text-amber-950/85 text-sm md:text-base leading-relaxed font-medium">
                      {power.description}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                  {/* Pré-requisito */}
                  {power.prerequisite && (
                      <div className="mb-4 pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <p className="text-xs md:text-sm text-amber-950/70 font-medium">
                          <span className="font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
                      </p>
                      </div>
                  )}

                  {/* Origem */}
                  <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {formatOrigin(power.origin)}
                      </span>
                  </div>
                </div>
            </div>
            ))}
        </div>

        {/* Empty State */}
        {filteredPowers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum poder de druida encontrado.
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