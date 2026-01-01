"use client";

import Link from "next/link";
import { useState } from "react";
import { Race, isFixedModifier, isFlexibleModifier } from "@/types/race";
import { races } from "@/data/races";

export default function RacasPage() {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRaces = races
    .filter(race =>
      race.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      race.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  // Função para obter a cor do modificador
  const getModifierColor = (modifier: number) => {
    if (modifier > 0) return "text-emerald-400";
    if (modifier < 0) return "text-red-500";
    return "text-stone-500";
  };

  // Função para formatar o modificador
  const formatModifier = (modifier: number) => {
    if (modifier > 0) return `+${modifier}`;
    return modifier.toString();
  };

  // Função para obter o nome do atributo
  const getAttributeName = (attr: string) => {
    const names: { [key: string]: string } = {
      for: "Força",
      des: "Destreza",
      con: "Constituição",
      int: "Inteligência",
      sab: "Sabedoria",
      car: "Carisma"
    };
    return names[attr] || attr;
  };

  // --- FUNÇÃO: Fecha o modal se clicar no fundo escuro ---
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedRace(null);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Raças</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução */}
        <div className="mb-12 w-full space-y-8 text-lg leading-relaxed">
            <div>
                <h2 className="text-4xl font-bold text-emerald-600 mb-3 border-b border-stone-800 pb-2">Raças</h2>
                <p className="text-stone-300">As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
                <p className="text-stone-300 mt-4">Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.</p>
                <p className="text-stone-300 mt-4">Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.</p>
                <p className="text-stone-300 mt-4">Quase todas as grandes sagas artonianas são sobre grupos de diferentes raças. Aventureiros aprendem a ver o melhor em cada indivíduo e, ao longo de uma vida de viagens e batalhas, acostumam-se até mesmo ao mais exótico companheiro.</p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-3">Escolhendo sua Raça</h3>
                <p className="text-stone-300">Após definir seus atributos, é hora de escolher sua raça. Você pode escolher qualquer raça, mas dependendo do seu conceito de personagem, algumas são mais indicadas que outras.</p>
                <p className="text-stone-300 mt-4">Se você quiser um personagem bom de briga, por exemplo, minotauro é uma boa escolha. Se gosta de lançar magias, vá de elfo. Já se prefere resolver seus problemas na lábia, escolha qareen. Da mesma forma, algumas raças não são indicadas para certos conceitos. Um trog estudioso provavelmente não será muito competente, assim como um hynne brigão. Humanos são um caso especial — são a raça mais versátil, capazes de se destacar em qualquer carreira. Se estiver em dúvida, vá de humano.</p>
                <p className="text-stone-300 mt-4">Como dito acima, todas as raças funcionam para todos os tipos de personagem, e fazer combinações inusitadas pode ser muito divertido. Mas, se você for um jogador iniciante, prefira uma raça que forneça um bônus no atributo principal de sua classe.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-3">Características das Raças</h3>
                <p className="text-stone-300">- Sua raça modifica seus atributos, podendo aumentá-los acima de 4 ou diminuí-los abaixo de –2.</p>
                <p className="text-stone-300">- Você possui todas as habilidades de sua raça.</p>
            </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
          <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
            Buscar Raça
          </label>
           <div className="relative">
             <input
                type="text"
                placeholder="Digite o nome ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-900 transition-all font-serif"
            />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                🔍
            </div>
          </div>
        </div>

        {/* Grid de Raças */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mb-16">
          {filteredRaces.map((race) => (
            <div
              key={race.id}
              onClick={() => setSelectedRace(race)}
              className="group relative overflow-hidden rounded bg-stone-900 border border-stone-800 hover:border-emerald-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col"
            >
              {/* Imagem de fundo - FUNDO BRANCO PARA IMAGEM INTEIRA */}
              <div className="relative w-full h-64 bg-white border-b border-stone-800 overflow-hidden flex items-center justify-center">
                {race.image ? (
                  <img
                    src={race.image}
                    alt={race.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl text-stone-300">🧝</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-stone-900">
                 <div className="w-full flex flex-col items-center">
                    {/* Decorative Diamond */}
                    <div className="w-2 h-2 bg-emerald-900/40 rotate-45 mb-2 group-hover:bg-emerald-500 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold text-stone-200 group-hover:text-emerald-500 transition-colors mb-3 font-serif tracking-wide">
                    {race.name}
                    </h3>
                </div>
                
                <div>
                    <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-stone-950 text-stone-500 border border-stone-800 group-hover:border-emerald-900/50 group-hover:text-emerald-700 transition-colors">
                    {race.origin}
                    </span>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600 group-hover:border-emerald-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 group-hover:border-emerald-500 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredRaces.length === 0 && (
          <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
            <p className="text-stone-500 text-lg italic">Nenhuma raça encontrada</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes - ESTILO DE PÁGINA DE LIVRO ANTIGO */}
      {selectedRace && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          {/* Container do Modal com textura */}
          <div className="bg-stone-900 border-2 border-stone-700 rounded-lg shadow-[0_0_60px_rgba(0,0,0,1)] max-w-3xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedRace(null)}
              className="absolute top-6 right-6 text-stone-500 hover:text-red-600 transition-colors z-10 bg-stone-950/80 border border-stone-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1"
            >
              ×
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8 md:p-12 font-serif">
              
              {/* Cabeçalho da Raça */}
              <div className="mb-10 text-center border-b-2 border-stone-800 pb-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 to-emerald-800 mb-4 tracking-wide">
                    {selectedRace.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[1px] w-12 bg-emerald-800"></div>
                    <span className="inline-block text-lg font-bold uppercase tracking-[0.2em] text-emerald-700">
                        {selectedRace.origin}
                    </span>
                    <div className="h-[1px] w-12 bg-emerald-800"></div>
                  </div>
              </div>

              {/* Descrição */}
              <div className="mb-10 p-6 bg-stone-950/40 border border-stone-800 rounded shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-800/30"></div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                    <span>📖</span> Descrição
                </h3>
                <p className="text-stone-300 leading-relaxed whitespace-pre-line text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-800 first-letter:mr-2 first-letter:float-left">
                  {selectedRace.description}
                </p>
              </div>

              {/* Habilidades */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-stone-800 pb-2 flex items-center gap-2">
                    <span>✨</span> Habilidades Raciais
                </h3>
                <div className="space-y-4">
                  {selectedRace.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-5 bg-stone-950/50 rounded border border-stone-800 hover:border-emerald-800/30 transition-colors"
                    >
                      <p className="text-stone-300 text-lg leading-relaxed">{ability}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Longevidade e Devoção */}
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedRace.longevidade && (
                  <div className="p-5 bg-stone-950 rounded border border-stone-800">
                    <div className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Longevidade</div>
                    <div className="text-stone-300 text-lg font-bold">{selectedRace.longevidade}</div>
                  </div>
                )}
                {selectedRace.devotos && (
                  <div className="p-5 bg-stone-950 rounded border border-stone-800">
                    <div className="text-xs text-emerald-600 font-bold uppercase tracking-widest mb-2">Devoção a</div>
                    <div className="text-stone-300 text-lg font-bold">{selectedRace.devotos}</div>
                  </div>
                )}
              </div>

              {/* Modificadores de Atributos */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-6 border-b border-stone-800 pb-2 flex items-center gap-2">
                    <span>📊</span> Modificadores de Atributos
                </h3>
                <div className="space-y-4">
                  {selectedRace.attributeModifiers.map((mod, index) => {
                    // Se é modificador FIXO
                    if (isFixedModifier(mod)) {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-5 rounded bg-stone-950 border border-stone-800 hover:bg-stone-900 transition-colors"
                        >
                          <p className="text-stone-400 font-bold uppercase tracking-widest text-sm">
                            {getAttributeName(mod.attribute)}
                          </p>
                          <p className={`text-3xl font-bold ${getModifierColor(mod.modifier)}`}>
                            {formatModifier(mod.modifier)}
                          </p>
                        </div>
                      );
                    }

                    // Se é modificador FLEXÍVEL
                    if (isFlexibleModifier(mod)) {
                      return (
                        <div
                          key={index}
                          className="p-5 rounded bg-stone-950 border border-emerald-900/30"
                        >
                          <p className="text-emerald-400 leading-relaxed text-lg">
                            <span className="font-bold uppercase tracking-wide text-emerald-600 mr-2">⚡ Flexível:</span>
                            {mod.description}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
              
              {/* Fim do Modal - Decoração */}
              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[1px] w-20 bg-emerald-800"></div>
                    <span className="text-emerald-800 text-2xl">❖</span>
                    <div className="h-[1px] w-20 bg-emerald-800"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}