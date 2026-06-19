"use client";

import { useState } from "react";
import Link from "next/link";
import { powersMistico } from "@/data/powers-mistico";
import { formatOrigin } from "@/types/power";

export default function MisticosPoderesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersMistico
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
                <span className="text-red-800">Poderes de Místico</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Poderes de Místico
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

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[350000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-10">
              
              <section>
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Ditames</h3>
                <p className="font-medium mb-4">
                  O místico expande suas magias conhecidas através de ditames, conjuntos temáticos fechados de conhecimento mágico. Ele não tem acesso a poderes como Conhecimento Mágico, do arcanista, e precisa seguir padrões e tradições estabelecidos há muito tempo e passados de geração a geração.
                </p>
                <p className="font-medium mb-4">
                  Quando você adquire um poder de ditame, se já conhece uma das magias fornecidas pelo poder, pode trocá-la por outra magia de mesmo círculo, desde que essa magia seja de uma de suas escolas permitidas.
                </p>
                <p className="font-medium">
                  Quando você lança uma magia aprendida por meio de um poder de ditame, se estiver em contato com uma expressão natural do seu elemento de volume equivalente a uma criatura Média, o custo dessa magia é reduzido em –1 PM.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Expressão Natural dos Elementos</h3>
                <p className="font-medium mb-6">
                  Alguns poderes fazem referência a expressões naturais de um elemento. Isso quer dizer uma manifestação do elemento que ocorra sem que seja alimentada de magia. Uma fogueira pode servir como uma expressão natural de fogo mesmo que tenha sido acesa com uma Bola de Fogo, mas um ber’baram ou outro elemental não poderia, bem como as chamas da magia Muralha Elemental.
                </p>
                
                <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Luz e Trevas: </span><span className="font-medium">Para luz, expressões naturais são ambientes banhados diretamente pela luz do sol e para trevas são ambientes completamente escuros.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Água: </span><span className="font-medium">Corpos de água como poças, lagos e rios são expressões naturais desde que estejam limpos.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Terra: </span><span className="font-medium">Montanhas e extensões de terra fértil são expressões naturais.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-wide text-sm">Ar: </span><span className="font-medium">Ambientes com ar puro servem como expressões naturais; normalmente, em grandes cidades, tais ambientes são encontrados apenas em altitudes elevadas.</span></p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Manifestações Elementais</h3>
                <p className="font-medium mb-4">
                  Manifestações elementais são pequenos espíritos ligados a um tipo de energia elemental. Um místico que tenha realizado o ritual apropriado, pode se conectar a uma dessas manifestações e invocá-la em seu auxílio. Em termos de regras, manifestações elementais são parceiros que usam as regras a seguir.
                </p>
                <p className="font-medium mb-4">
                  Para usar uma manifestação elemental você precisa primeiro gastar uma ação de movimento e 2 PM para evocá-la. Para isso, você precisa de acesso a uma expressão natural do elemento correspondente. Uma manifestação evocada desaparece no fim da cena.
                </p>
                <p className="font-medium mb-4">
                  Em seu turno, você pode dar uma ordem para a manifestação usando uma ação de movimento. As ações que cada manifestação pode executar são apresentadas em sua descrição. Se a ação tiver um custo em PM, ele deve ser pago por você.
                </p>
                <p className="font-medium mb-8">
                  Para outros usos criativos do parceiro, caso a manifestação precise realizar um teste, considere um modificador igual ao círculo máximo de magias que você pode lançar. Quando ela faz um teste, você pode gastar uma quantidade de PM limitada por sua Sabedoria. Para cada PM gasto, a manifestação recebe +2 nesse teste. Se a situação for condizente com a natureza do parceiro (como pedir que uma manifestação da água apague um incêndio ou que uma manifestação da terra erga algo pesado), ela recebe +5 nesse teste.
                </p>

                {/* Subseção: Água */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Água</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Bolha: </span><span className="font-medium">O elemental envolve seu corpo como uma bolha de água. Você recebe +4 na Defesa e pode respirar normalmente sob a água por uma rodada.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Empurrão Hidráulico (2 PM): </span><span className="font-medium">O elemental dispara um jato de água pressurizado em um alvo em alcance curto. O alvo sofre 3d6 pontos de dano de impacto e fica caído (Fortitude CD Sab reduz o dano à metade e evita a condição).</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Surfar: </span><span className="font-medium">Uma criatura em alcance curto recebe deslocamento de natação 12m por uma rodada.</span></p>
                  </div>
                </div>

                {/* Subseção: Ar */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Ar</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Barreira Eólica: </span><span className="font-medium">Você recebe camuflagem leve contra ataques à distância e +2 em Reflexos por uma rodada.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Conduzir ao Solo: </span><span className="font-medium">Ao contrário de outras ações do elemental, esta é uma reação; você pode lançar Queda Suave, mas apenas em você mesmo.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Planar (2 PM): </span><span className="font-medium">Uma criatura em alcance curto recebe deslocamento de voo 12m por uma rodada.</span></p>
                  </div>
                </div>

                {/* Subseção: Fogo */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Fogo</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Aura de Calor: </span><span className="font-medium">Até sua próxima rodada, inimigos que terminarem seus turnos adjacentes a você sofrem 2d6+2 pontos de dano de fogo.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Chicote de Chamas (2 PM): </span><span className="font-medium">O elemental acerta uma criatura em alcance curto com um jato de chamas que causa 4d6 pontos de dano de fogo (Reflexos CD Sab reduz à metade).</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Labareda Propulsora: </span><span className="font-medium">Uma criatura em alcance curto recebe +10 em testes de Atletismo para correr e saltar por uma rodada.</span></p>
                  </div>
                </div>

                {/* Subseção: Luz */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Luz</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Brilhar: </span><span className="font-medium">Emite luz como uma tocha. Uma criatura dentro do alcance curto fica ofuscada por 1 rodada (Vontade CD Sab nega).</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Curar (2 PM): </span><span className="font-medium">Uma criatura dentro do alcance curto cura 4d8 pontos de vida.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Cegar: </span><span className="font-medium">Uma criatura dentro do alcance curto fica cega por 1 rodada (Vontade CD Sab nega).</span></p>
                  </div>
                </div>

                {/* Subseção: Terra */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Terra</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Arremesso de Rocha (2 PM): </span><span className="font-medium">O elemental arremessa um pedregulho contra um alvo em alcance médio, causando 5d6 pontos de dano de impacto (Reflexos CD Sab evita).</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Muralha: </span><span className="font-medium">Você recebe resistência a corte, impacto e perfuração 10 por uma rodada.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Tunelar: </span><span className="font-medium">Uma criatura dentro do alcance curto recebe deslocamento de escalada (12m) ou escavar (9m) por uma rodada.</span></p>
                  </div>
                </div>

                {/* Subseção: Trevas */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-amber-950 mb-3 uppercase tracking-widest bg-amber-900/10 inline-block px-3 py-1 rounded">Trevas</h4>
                  <div className="space-y-4 pl-4 md:pl-5 border-l-4 border-amber-900/30 text-base md:text-lg text-left">
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Manto Sombrio: </span><span className="font-medium">Uma criatura dentro do alcance curto recebe +10 em testes de Furtividade para se esconder por 1 rodada.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Tentáculo Obscuro (2 PM): </span><span className="font-medium">O elemental agarra uma criatura dentro do alcance médio com seu tentáculo. Faça um teste de Misticismo para agarrar, com um bônus igual ao círculo máximo de magias que pode lançar.</span></p>
                    <p><span className="text-red-800 font-bold tracking-wide text-sm uppercase">Apavorar: </span><span className="font-medium">Uma criatura dentro do alcance curto fica abalada (Vontade CD Sab nega).</span></p>
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
                Nenhum poder de místico encontrado.
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