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

  // Função para obter a cor do modificador (Ajustada para fundo claro)
  const getModifierColor = (modifier: number) => {
    if (modifier > 0) return "text-emerald-700"; // Verde mais escuro para fundo claro
    if (modifier < 0) return "text-red-700";     // Vermelho escuro
    return "text-amber-900/50";                  // Neutro
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
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Raças</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução */}
        <div className="mb-12 w-full space-y-8 text-lg leading-relaxed">
            <div>
                <h2 className="text-4xl font-bold text-amber-800 mb-3 border-b-2 border-amber-900/20 pb-2">Raças</h2>
                <p className="text-amber-900/80 font-medium">As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
                <p className="text-amber-900/80 font-medium mt-4">Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.</p>
                <p className="text-amber-900/80 font-medium mt-4">Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.</p>
                <p className="text-amber-900/80 font-medium mt-4">Quase todas as grandes sagas artonianas são sobre grupos de diferentes raças. Aventureiros aprendem a ver o melhor em cada indivíduo e, ao longo de uma vida de viagens e batalhas, acostumam-se até mesmo ao mais exótico companheiro.</p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Escolhendo sua Raça</h3>
                <p className="text-amber-900/80 font-medium">Após definir seus atributos, é hora de escolher sua raça. Você pode escolher qualquer raça, mas dependendo do seu conceito de personagem, algumas são mais indicadas que outras.</p>
                <p className="text-amber-900/80 font-medium mt-4">Se você quiser um personagem bom de briga, por exemplo, minotauro é uma boa escolha. Se gosta de lançar magias, vá de elfo. Já se prefere resolver seus problemas na lábia, escolha qareen. Da mesma forma, algumas raças não são indicadas para certos conceitos. Um trog estudioso provavelmente não será muito competente, assim como um hynne brigão. Humanos são um caso especial — são a raça mais versátil, capazes de se destacar em qualquer carreira. Se estiver em dúvida, vá de humano.</p>
                <p className="text-amber-900/80 font-medium mt-4">Como dito acima, todas as raças funcionam para todos os tipos de personagem, e fazer combinações inusitadas pode ser muito divertido. Mas, se você for um jogador iniciante, prefira uma raça que forneça um bônus no atributo principal de sua classe.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Características das Raças</h3>
                <p className="text-amber-900/80 font-medium">- Sua raça modifica seus atributos, podendo aumentá-los acima de 4 ou diminuí-los abaixo de –2.</p>
                <p className="text-amber-900/80 font-medium">- Você possui todas as habilidades de sua raça.</p>
            </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Raça
          </label>
           <div className="relative">
             <input
               type="text"
               placeholder="Digite o nome ou origem..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
            />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
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
              className="group relative overflow-hidden rounded bg-[#e8dac1] border border-amber-900/30 hover:border-amber-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] cursor-pointer flex flex-col"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-64 bg-[#f0e6d2] border-b border-amber-900/10 overflow-hidden flex items-center justify-center">
                {race.image ? (
                  <img
                    src={race.image}
                    alt={race.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply filter sepia-[0.3] opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="text-6xl text-amber-900/20">🧝</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-[#e8dac1]">
                 <div className="w-full flex flex-col items-center">
                    {/* Decorative Diamond */}
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-600 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-3 font-serif tracking-wide">
                    {race.name}
                    </h3>
                </div>
                
                <div>
                    <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#f5e6d0] text-amber-900/60 border border-amber-900/10 group-hover:border-amber-900/30 group-hover:text-amber-800 transition-colors">
                    {race.origin}
                    </span>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredRaces.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhuma raça encontrada</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes - ESTILO DE PÁGINA DE LIVRO ANTIGO */}
      {selectedRace && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          {/* Container do Modal com textura */}
          <div className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-3xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedRace(null)}
              className="absolute top-6 right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[#e8dac1] border border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8 md:p-12 font-serif">
              
              {/* Cabeçalho da Raça */}
              <div className="mb-10 text-center border-b-2 border-amber-900/20 pb-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wide">
                    {selectedRace.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                    <span className="inline-block text-lg font-bold uppercase tracking-[0.2em] text-red-800">
                        {selectedRace.origin}
                    </span>
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                  </div>
              </div>

              {/* Descrição */}
              <div className="mb-10 p-6 bg-[#fffaf0] border border-amber-900/20 rounded shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-900/20"></div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <span>📖</span> Descrição
                </h3>
                <p className="text-amber-900/90 font-medium leading-relaxed whitespace-pre-line text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-justify">
                  {selectedRace.description}
                </p>
              </div>

              {/* Habilidades */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2">
                  <span>✨</span> Habilidades Raciais
                </h3>
                
                <div className="space-y-6">
                  {selectedRace.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-5 bg-[#e8dac1] rounded border border-amber-900/20 hover:border-amber-700/50 transition-colors shadow-sm"
                    >
                      {/* Nome da Habilidade Principal */}
                      <h4 className="text-xl font-bold text-red-800 mb-2 font-serif">
                        {ability.name}
                      </h4>

                      {/* Descrição Principal */}
                      {ability.description && (
                        <p className="text-amber-900/90 text-lg leading-relaxed whitespace-pre-line mb-3 font-medium">
                          {ability.description}
                        </p>
                      )}

                      {/* Sub-Habilidades (Opcionais/Escolhas) */}
                      {ability.subAbilities && ability.subAbilities.length > 0 && (
                        <div className="mt-4 pl-4 border-l-4 border-amber-900/30 space-y-3">
                          {ability.subAbilities.map((sub, subIndex) => (
                            <div key={subIndex} className="bg-[#fbf5e6] p-3 rounded border border-amber-900/10">
                              <span className="block font-bold text-amber-950 mb-1 text-base flex items-center gap-2">
                                <span className="text-xs text-amber-600">◆</span> {sub.name}
                              </span>
                              <span className="block text-amber-900/80 text-md leading-relaxed whitespace-pre-line font-medium">
                                {sub.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Longevidade e Devoção */}
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {selectedRace.longevidade && (
                  <div className="p-5 bg-[#e8dac1] rounded border border-amber-900/20 shadow-sm">
                    <div className="text-xs text-amber-900/60 font-bold uppercase tracking-widest mb-2">Longevidade</div>
                    <div className="text-amber-950 text-lg font-bold">{selectedRace.longevidade}</div>
                  </div>
                )}
                {selectedRace.devotos && (
                  <div className="p-5 bg-[#e8dac1] rounded border border-amber-900/20 shadow-sm">
                    <div className="text-xs text-amber-900/60 font-bold uppercase tracking-widest mb-2">Devoção a</div>
                    <div className="text-amber-950 text-lg font-bold">{selectedRace.devotos}</div>
                  </div>
                )}
              </div>

              {/* Modificadores de Atributos */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2">
                    <span>📊</span> Modificadores de Atributos
                </h3>
                <div className="space-y-4">
                  {selectedRace.attributeModifiers.map((mod, index) => {
                    // Se é modificador FIXO
                    if (isFixedModifier(mod)) {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-5 rounded bg-[#fbf5e6] border border-amber-900/20 hover:bg-[#e8dac1] transition-colors shadow-sm"
                        >
                          <p className="text-amber-900/70 font-bold uppercase tracking-widest text-sm">
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
                          className="p-5 rounded bg-[#fbf5e6] border border-amber-900/20 shadow-sm"
                        >
                          <p className="text-amber-900 leading-relaxed text-lg font-medium">
                            <span className="font-bold uppercase tracking-wide text-amber-700 mr-2"></span>
                            {mod.description}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>

              {/* Extra */}
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-1 gap-6">
                {selectedRace.extra && (
                  <div className="p-5 bg-[#d6cbb5] rounded border border-amber-900/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                    <div className="text-xs text-amber-900 font-bold uppercase tracking-widest mb-2">Conteúdo Extra</div>
                    <div className="text-amber-900/90 text-lg leading-relaxed whitespace-pre-line font-medium">{selectedRace.extra}</div>
                  </div>
                )}
              </div>

              {/* Fim do Modal - Decoração */}
              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
                    <span className="text-amber-900/60 text-2xl">❖</span>
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}