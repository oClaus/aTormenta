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
    if (modifier > 0) return "text-green-400";
    if (modifier < 0) return "text-red-400";
    return "text-gray-400";
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-green-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Raças</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Raças</h2>
          <p className="text-gray-400">As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
          <p className="text-gray-400">Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.</p>
          <p className="text-gray-400">Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.</p>
          <p className="text-gray-400">Quase todas as grandes sagas artonianas são sobre grupos de diferentes raças. Aventureiros aprendem a ver o melhor em cada indivíduo e, ao longo de uma vida de viagens e batalhas, acostumam-se até mesmo ao mais exótico companheiro.</p>
          <h3 className="text-1xl font-bold text-green-400 mb-2">Escolhendo sua Raça</h3>
          <p className="text-gray-400">Após definir seus atributos, é hora de escolher sua raça. Você pode escolher qualquer raça, mas dependendo do seu conceito de personagem, algumas são mais indicadas que outras.</p>
          <p className="text-gray-400">Se você quiser um personagem bom de briga, por exemplo, minotauro é uma boa escolha. Se gosta de lançar magias, vá de elfo. Já se prefere resolver seus problemas na lábia, escolha qareen. Da mesma forma, algumas raças não são indicadas para certos conceitos. Um trog estudioso provavelmente não será muito competente, assim como um hynne brigão. Humanos são um caso especial — são a raça mais versátil, capazes de se destacar em qualquer carreira. Se estiver em dúvida, vá de humano.</p>
          <p className="text-gray-400">Como dito acima, todas as raças funcionam para todos os tipos de personagem, e fazer combinações inusitadas pode ser muito divertido. Mas, se você for um jogador iniciante, prefira uma raça que forneça um bônus no atributo principal de sua classe.</p>
          <h3 className="text-1xl font-bold text-green-400 mb-2">Características das Raças</h3>
          <p className="text-gray-400">- Sua raça modifica seus atributos, podendo aumentá-los acima de 4 ou diminuí-los abaixo de –2.</p>
          <p className="text-gray-400">- Você possui todas as habilidades de sua raça.</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-purple-300 mb-2">
            Buscar Raça
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Grid de Raças - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredRaces.map((race) => (
            <div
              key={race.id}
              onClick={() => setSelectedRace(race)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-green-900/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-48 bg-gradient-to-b from-green-900/50 to-black overflow-hidden">
                {race.image ? (
                  <img
                    src={race.image}
                    alt={race.name}
                    className="w-full h-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧝</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors mb-2">
                  {race.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase bg-green-700/50 text-green-200 border border-green-500/50">
                  {race.origin}
                </span>

                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma raça encontrada</p>
          </div>
        )}

        {/* Seção de Informação */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-green-950/30 to-black border border-green-900/30">
          <h3 className="text-2xl font-bold text-green-300 mb-4">📝 Importante lembrar!</h3>
          <p className="text-gray-300 leading-relaxed">
            Aqui temos raças oficiais dos livros e das edições da Dragão Brasil, além disso alguns crossovers de outras obras, para utilização, converse com mestre para encaixar(ou não) na mesa.
          </p>
        </div>
      </main>

      {/* Modal de Detalhes */}
      {selectedRace && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-green-900/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedRace(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="text-2xl">✕</span>
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8">
              {/* Título e Origem */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                {selectedRace.name}
              </h2>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase bg-green-700/50 text-green-200 border border-green-500/50 mb-6">
                {selectedRace.origin}
              </span>

              {/* Descrição */}
              <div className="mb-8 p-6 rounded-lg bg-green-950/30 border border-green-900/30">
                <h3 className="text-xl font-bold text-green-300 mb-3">Descrição</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedRace.description}
                </p>
              </div>

              {/* Habilidades */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">✨ Habilidades Raciais</h3>
                <div className="space-y-3">
                  {selectedRace.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-green-950/20 border border-green-900/30 hover:border-green-500/50 transition-colors"
                    >
                      <p className="text-gray-300 leading-relaxed">{ability}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Longevidade e Devoção*/ }
              <div className="mb-8">
                <div className="space-y-3">
                  {selectedRace.longevidade && (
                  <div className="p-3 bg-black/30 rounded-lg border border-green-500/50">
                    <div className="text-xs text-green-300 font-semibold mb-1">Longevidade</div>
                    <div className="text-white">{selectedRace.longevidade}</div>
                  </div>
                )}
                {selectedRace.devotos && (
                  <div className="p-3 bg-black/30 rounded-lg border border-green-500/50">
                    <div className="text-xs text-green-300 font-semibold mb-1">Devoção a:</div>
                    <div className="text-white">{selectedRace.devotos}</div>
                  </div>
                )}
                </div>
              </div>

              {/* Modificadores de Atributos */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">📊 Modificadores de Atributos</h3>
                <div className="space-y-4">
                  {selectedRace.attributeModifiers.map((mod, index) => {
                    // Se é modificador FIXO
                    if (isFixedModifier(mod)) {
                      return (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-green-950/20 border border-green-900/30 text-center"
                        >
                          <p className="text-gray-400 text-sm mb-2">
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
                          className="p-4 rounded-lg bg-yellow-950/30 border border-yellow-900/50"
                        >
                          <p className="text-yellow-300 leading-relaxed">
                            <span className="font-bold">⚡ Flexível: </span>
                            {mod.description}
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}