"use client";

import Link from "next/link";
import { useState } from "react";
import { GameClass } from "@/types/class";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<GameClass | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClasses = classes
    .filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  // --- NOVA FUNÇÃO: Fecha o modal se clicar no fundo escuro ---
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.target é o elemento clicado
    // e.currentTarget é o elemento que tem o evento (o fundo escuro)
    if (e.target === e.currentTarget) {
      setSelectedClass(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Classes</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-400 mb-2">Classes</h2>
          <p className="text-gray-400">Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e perseguir seus objetivos — com armas, perícias ou magias.</p>
          <h2 className="text-1xl font-bold text-orange-400 mb-2">Escolhendo sua Classe</h2>
          <p className="text-gray-400">A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros. Tormenta20 contém quatorze classes. A tabela a seguir traz um resumo das classes, com uma descrição curta, sugestão de atributo principal, e PV, PM e perícias iniciais.</p>
          <h3 className="text-1xl font-bold text-orange-400 mb-2">Características das Classes</h3>
          <p className="text-gray-400"> Sua classe define seus pontos de vida e pontos de mana, quais perícias são treinadas e quais os tipos de armas e armaduras que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem usar).</p>
          <h3 className="text-1xl font-bold text-orange-400 mb-2">Habilidades e Poderes de Classes</h3>
          <p className="text-gray-400">Você começa o jogo com todas as habilidades do 1º nível da sua classe. Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral. Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento.</p>
          <h3 className="text-1xl font-bold text-orange-400 mb-2">Subindo de Nível</h3>
          <p className="text-gray-400"> Quando acumula XP suficiente você sobe de nível. Quando isso acontece, você ganha três benefícios, seus PV e PM aumentam de acordo com a sua classe. Some sua Constituição aos PV que ganha por nível (mas você sempre ganha pelo menos 1 PV ao subir de nível). Você ganha todas as habilidades do nível alcançado. Consulte a página da sua classe para saber quais. E por fim, seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1. Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para perícias treinadas e o número depois da barra para perícias não treinadas.</p>
          <p className="text-gray-400">Mais informações, sobre Patamares e Multiclasses estão no final da página.</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-purple-300 mb-2">
            Buscar Classe
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Grid de Classes - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] cursor-pointer"
            >
              {/* Imagem de fundo */}
              <div className="relative w-full h-48 bg-gradient-to-b from-green-900/50 to-black overflow-hidden">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🧙</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors mb-2">
                  {cls.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase bg-orange-700/50 text-orange-200 border border-orange-500/50">
                  {cls.origin}
                </span>

                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma classe encontrada</p>
          </div>
        )}

        {/* Seção de Informação */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-yellow-950/30 to-black border border-yellow-900/30">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">Multiclasse</h3>
          <p className="text-gray-300 leading-relaxed">
            Quando sobe de nível, você pode escolher outra classe. Essa opção é conhecida como multiclasse e fornece mais versatilidade, em troca de poder bruto. O qareen Zaled Rayeder, um arcanista de 3º nível, encontra um propósito para seus dons mágicos selvagens na ordem de Khalmyr, o Deus da Justiça. Ao subir para o 4º nível, escolhe um nível de paladino, tornando-se um arcanista 3/paladino 1. Zaled terá as habilidades de um arcanista de 3º nível e de um paladino de 1º nível.</p>
          <p> <span className="text-yellow-300"> Pontos de Vida: </span> <span className="text-gray-300 leading-relaxed">Quando você ganha o primeiro nível em uma nova classe, ganha os PV de um nível subsequente, não do primeiro. Zaled ganha 5 PV pelo primeiro nível de paladino, não 20.</span></p>
          <p> <span className="text-yellow-300"> Pontos de Mana: </span> <span className="text-gray-300 leading-relaxed">Some os PM fornecidos por cada classe para determinar seu montante total.</span></p>
          <p> <span className="text-yellow-300"> Perícias & Proficiências: </span> <span className="text-gray-300 leading-relaxed"> Quando você ganha o primeiro nível em uma nova classe, não ganha as perícias treinadas ou proficiências da nova classe.</span></p>
          <p> <span className="text-yellow-300"> Níveis de Classe e de Personagem: </span> <span className="text-gray-300 leading-relaxed"> Nível de classe são níveis numa classe específica. Já seu nível de personagem é a soma dos níveis de todas as suas classes. Zaled é um arcanista de 3º nível, um paladino de 1º nível e um personagem de 4º nível (a soma dos dois).</span></p>

          <h3 className="text-2xl font-bold text-yellow-300 mb-4">Patamares de Jogo</h3>
          <p className="text-gray-300 leading-relaxed"> As classificações abaixo fornecem uma noção da escala de poder dos personagens e afetam certas habilidades.</p>
          <p><span className="text-yellow-300">Iniciante (1º ao 4º nível):</span><span className="text-gray-300 leading-relaxed"> Aventureiro novato, envolvido em missões locais, como proteger vilas do ataque de bandidos e escoltar caravanas.</span></p>
          <p><span className="text-yellow-300">Veterano (5º ao 10º nível):</span><span className="text-gray-300 leading-relaxed"> Neste patamar, o herói presta serviços importantes a nobres e líderes de guildas.</span></p>
          <p><span className="text-yellow-300">Campeão (11º ao 16º nível):</span><span className="text-gray-300 leading-relaxed"> Já famoso por suas façanhas, o aventureiro trabalha para monarcas e enfrenta grandes vilões e monstros terríveis.</span></p>
          <p><span className="text-yellow-300">Lenda (17º ao 20º nível):</span><span className="text-gray-300 leading-relaxed"> Entre os mais poderosos de Arton, o herói lida com perigos que ameaçam todo o mundo... Ou mesmo toda a realidade!</span></p>

          <h3 className="text-2xl font-bold text-yellow-300 mb-4">Importante lembrar!</h3>
          <p className="text-gray-300 leading-relaxed">
            Aqui temos classes oficiais dos livros mas também da Dragão Brasil, podendo ou não ser disponibilizado em futuros complementos, para utilizar, conversar com mestre da mesa.
          </p>
        </div>
      </main>

      {/* Modal de Detalhes */}
      {selectedClass && (
        <div
          onClick={handleBackdropClick} // 1. Adicionado evento aqui
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          {/* Adicionei 'relative' abaixo para o botão absolute funcionar corretamente */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-orange-900/50 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="text-2xl">✕</span>
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8">
              {/* Título e Origem */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                {selectedClass.name}
              </h2>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase bg-orange-700/50 text-orange-200 border border-orange-500/50 mb-6">
                {selectedClass.origin}
              </span>

              {/* Descrição */}
              <div className="mb-8 p-6 rounded-lg bg-orange-950/30 border border-orange-900/30">
                <h3 className="text-xl font-bold text-orange-300 mb-3">Descrição</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedClass.description}
                </p>
              </div>

              {/* Famosos (se houver) */}
              {selectedClass.famousExamples && selectedClass.famousExamples.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">🌟 {selectedClass.name}s Famosos</h3>
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-300">
                      {selectedClass.famousExamples.join(", ")}
                    </p>
                  </div>
                </div>
              )}

              {/* Características */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">⚔️ Características</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Vida (Base)</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pvBase}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Vida (Por Nível)</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pvPerLevel}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                    <p className="text-gray-400 text-sm mb-2">Pontos de Mana</p>
                    <p className="text-orange-300 font-semibold">
                      {selectedClass.characteristics.pmPerLevel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Perícias */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🎯 Perícias</h3>

                {/* Perícias Obrigatórias */}
                <div className="mb-6">
                  <p className="text-gray-300 mb-3">
                    <span className="font-semibold text-orange-300">
                      Começa com as seguintes perícias:
                    </span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {selectedClass.skills.mandatory.map((skill, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-orange-950/30 border border-orange-900/50"
                      >
                        <p className="text-gray-300 font-semibold text-orange-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perícias Opcionais */}
                <div>
                  <p className="text-gray-300 mb-3">
                    <span className="font-semibold text-orange-300">
                      Escolha mais {selectedClass.skills.optional.count} entre:
                    </span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedClass.skills.optional.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-orange-950/20 border border-orange-900/30"
                      >
                        <p className="text-gray-300">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Proficiência */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🛡️ Proficiência</h3>
                <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-900/30">
                  <p className="text-gray-300">{selectedClass.proficiency}</p>
                </div>
              </div>

              {/* Habilidades */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">✨ Habilidades</h3>
                <div className="space-y-6">
                  {selectedClass.abilities.map((ability, index) => (
                    <div key={index} className="rounded-lg bg-orange-950/20 border border-orange-900/30 overflow-hidden">
                      {/* Título da Habilidade */}
                      <div className="p-4 bg-orange-950/40 border-b border-orange-900/30">
                        <h4 className="text-xl font-bold text-orange-300">{ability.name}</h4>
                      </div>

                      {/* Conteúdo da Habilidade */}
                      <div className="p-4">
                        {/* Descrição Geral (se houver) */}
                        {ability.description && (
                          <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-wrap">
                            {ability.description}
                          </p>
                        )}

                        {/* Sub-Opções (se houver) */}
                        {ability.subAbilities && ability.subAbilities.length > 0 && (
                          <div className="space-y-4 mt-4">
                            {ability.subAbilities.map((subAbility, subIndex) => (
                              <div
                                key={subIndex}
                                className="p-4 rounded-lg "
                              >
                                {/* Título da Sub-Opção */}
                                <h5 className="text-lg font-bold text-orange-200 mb-2">
                                  • {subAbility.name}
                                </h5>
                                {/* Descrição da Sub-Opção */}
                                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                                  {subAbility.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras (se houver) */}
              {selectedClass.extras && selectedClass.extras.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">⭐ Extras</h3>
                  <div className="space-y-4">
                    {selectedClass.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-yellow-950/20 border border-yellow-900/30"
                      >
                        <h4 className="text-yellow-300 font-bold mb-3">{extra.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {extra.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabela de Progressão de Níveis */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">📈 Progressão por Nível</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-orange-900/50">
                        <th className="text-left p-3 text-orange-300 font-bold w-16">Nível</th>
                        <th className="text-left p-3 text-orange-300 font-bold">Habilidades de Classe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedClass.levelProgression.map((progression, index) => (
                        <tr
                          key={index}
                          className={`border-b border-orange-900/30 ${index % 2 === 0 ? 'bg-orange-950/10' : 'bg-transparent'
                            } hover:bg-orange-950/20 transition-colors`}
                        >
                          <td className="p-3 text-orange-300 font-semibold text-center">
                            {progression.level}º
                          </td>
                          <td className="p-3 text-gray-300">
                            {progression.abilities}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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