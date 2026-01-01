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
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-amber-700">Classes</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução - MANTENDO A ORDEM EXATA DO TEXTO ORIGINAL */}
        <div className="mb-12 w-full space-y-8 text-lg leading-relaxed">
            <div>
                <h2 className="text-4xl font-bold text-amber-700 mb-3 border-b border-stone-800 pb-2">Classes</h2>
                <p className="text-stone-300">Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e perseguir seus objetivos — com armas, perícias ou magias.</p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-3">Escolhendo sua Classe</h2>
                <p className="text-stone-300">A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros. Tormenta20 contém quatorze classes. A tabela a seguir traz um resumo das classes, com uma descrição curta, sugestão de atributo principal, e PV, PM e perícias iniciais.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-3">Características das Classes</h3>
                <p className="text-stone-300">Sua classe define seus pontos de vida e pontos de mana, quais perícias são treinadas e quais os tipos de armas e armaduras que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem usar).</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-3">Habilidades e Poderes de Classes</h3>
                <p className="text-stone-300">Você começa o jogo com todas as habilidades do 1º nível da sua classe. Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral. Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-3">Subindo de Nível</h3>
                <p className="text-stone-300 mb-4">Quando acumula XP suficiente você sobe de nível. Quando isso acontece, você ganha três benefícios, seus PV e PM aumentam de acordo com a sua classe. Some sua Constituição aos PV que ganha por nível (mas você sempre ganha pelo menos 1 PV ao subir de nível). Você ganha todas as habilidades do nível alcançado. Consulte a página da sua classe para saber quais. E por fim, seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1. Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para perícias treinadas e o número depois da barra para perícias não treinadas.</p>
                <p className="text-stone-400 italic font-bold">Mais informações, sobre Patamares e Multiclasses estão no final da página.</p>
            </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
          <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
            Buscar Classe
          </label>
           <div className="relative">
             <input
                type="text"
                placeholder="Digite o nome ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
            />
             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                🔍
            </div>
          </div>
        </div>

        {/* Grid de Classes - Ordenado Alfabeticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mb-16">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="group relative overflow-hidden rounded bg-stone-900 border border-stone-800 hover:border-amber-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col"
            >
              {/* Imagem de fundo - FUNDO BRANCO SOLICITADO */}
              <div className="relative w-full h-64 bg-white border-b border-stone-800 overflow-hidden flex items-center justify-center">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.name}
                    // Removido filtros de opacidade/saturação para ficar nítido no fundo branco
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl text-stone-300">🧙</div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-stone-900">
                 {/* ADICIONADO: 'w-full flex flex-col items-center' para forçar centralização */}
                 <div className="w-full flex flex-col items-center">
                    {/* Decorative Diamond */}
                    {/* Pode remover o mx-auto, pois o items-center do pai já centraliza, mas deixei limpo abaixo */}
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-amber-500 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold text-stone-200 group-hover:text-amber-500 transition-colors mb-3 font-serif tracking-wide">
                    {cls.name}
                    </h3>
                </div>
                
                <div>
                    <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-stone-950 text-stone-500 border border-stone-800 group-hover:border-amber-900/50 group-hover:text-amber-700 transition-colors">
                    {cls.origin}
                    </span>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600 group-hover:border-amber-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 group-hover:border-amber-500 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
            <p className="text-stone-500 text-lg italic">Nenhuma classe encontrada nos registros.</p>
          </div>
        )}

        {/* Seção de Informação Extra - MANTENDO A ORDEM DO TEXTO ORIGINAL */}
        <div className="mt-16 space-y-12 w-full text-lg leading-relaxed p-8 rounded bg-stone-900/50 border border-stone-800">
            
            <div>
                <h3 className="text-3xl font-bold text-amber-700 mb-4 border-b border-stone-800 pb-2">Multiclasse</h3>
                <p className="text-stone-300 mb-6">
                    Quando sobe de nível, você pode escolher outra classe. Essa opção é conhecida como multiclasse e fornece mais versatilidade, em troca de poder bruto. O qareen Zaled Rayeder, um arcanista de 3º nível, encontra um propósito para seus dons mágicos selvagens na ordem de Khalmyr, o Deus da Justiça. Ao subir para o 4º nível, escolhe um nível de paladino, tornando-se um arcanista 3/paladino 1. Zaled terá as habilidades de um arcanista de 3º nível e de um paladino de 1º nível.
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-amber-900/30 text-base">
                    <p> <span className="text-amber-600 font-bold"> Pontos de Vida: </span> <span className="text-stone-400">Quando você ganha o primeiro nível em uma nova classe, ganha os PV de um nível subsequente, não do primeiro. Zaled ganha 5 PV pelo primeiro nível de paladino, não 20.</span></p>
                    <p> <span className="text-amber-600 font-bold"> Pontos de Mana: </span> <span className="text-stone-400">Some os PM fornecidos por cada classe para determinar seu montante total.</span></p>
                    <p> <span className="text-amber-600 font-bold"> Perícias & Proficiências: </span> <span className="text-stone-400"> Quando você ganha o primeiro nível em uma nova classe, não ganha as perícias treinadas ou proficiências da nova classe.</span></p>
                    <p> <span className="text-amber-600 font-bold"> Níveis de Classe e de Personagem: </span> <span className="text-stone-400"> Nível de classe são níveis numa classe específica. Já seu nível de personagem é a soma dos níveis de todas as suas classes. Zaled é um arcanista de 3º nível, um paladino de 1º nível e um personagem de 4º nível (a soma dos dois).</span></p>
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-bold text-amber-700 mb-4 border-b border-stone-800 pb-2">Patamares de Jogo</h3>
                <p className="text-stone-300 mb-6"> As classificações abaixo fornecem uma noção da escala de poder dos personagens e afetam certas habilidades.</p>
                <div className="space-y-3 text-base">
                    <p className="p-2 bg-stone-950 rounded border border-stone-800"><span className="text-stone-200 font-bold">Iniciante (1º ao 4º nível):</span><span className="text-stone-400"> Aventureiro novato, envolvido em missões locais, como proteger vilas do ataque de bandidos e escoltar caravanas.</span></p>
                    <p className="p-2 bg-stone-950 rounded border border-stone-800"><span className="text-amber-600 font-bold">Veterano (5º ao 10º nível):</span><span className="text-stone-400"> Neste patamar, o herói presta serviços importantes a nobres e líderes de guildas.</span></p>
                    <p className="p-2 bg-stone-950 rounded border border-stone-800"><span className="text-red-500 font-bold">Campeão (11º ao 16º nível):</span><span className="text-stone-400"> Já famoso por suas façanhas, o aventureiro trabalha para monarcas e enfrenta grandes vilões e monstros terríveis.</span></p>
                    <p className="p-2 bg-stone-950 rounded border border-stone-800"><span className="text-purple-500 font-bold">Lenda (17º ao 20º nível):</span><span className="text-stone-400"> Entre os mais poderosos de Arton, o herói lida com perigos que ameaçam todo o mundo... Ou mesmo toda a realidade!</span></p>
                </div>
            </div>
        </div>
      </main>

      {/* Modal de Detalhes - ESTILO DE PÁGINA DE LIVRO ANTIGO */}
      {selectedClass && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          {/* Container do Modal com textura */}
          <div className="bg-stone-900 border-2 border-stone-700 rounded-lg shadow-[0_0_60px_rgba(0,0,0,1)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-6 right-6 text-stone-500 hover:text-red-600 transition-colors z-10 bg-stone-950/80 border border-stone-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1"
            >
              ×
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8 md:p-12 font-serif">
              
              {/* Cabeçalho da Classe */}
              <div className="mb-10 text-center border-b-2 border-stone-800 pb-8">
                  <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-800 mb-4 tracking-wide">
                    {selectedClass.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-amber-800/50"></div>
                    <span className="inline-block text-lg font-bold uppercase tracking-[0.2em] text-amber-700">
                        {selectedClass.origin}
                    </span>
                    <div className="h-[1px] w-12 bg-amber-800/50"></div>
                  </div>
              </div>

              {/* Descrição */}
              <div className="mb-10 p-6 bg-stone-950/40 border border-stone-800 rounded shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-800/30"></div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
                    <span>📖</span> Descrição
                </h3>
                <p className="text-stone-300 leading-relaxed whitespace-pre-line text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-2 first-letter:float-left">
                  {selectedClass.description}
                </p>
              </div>

              {/* Famosos */}
              {selectedClass.famousExamples && selectedClass.famousExamples.length > 0 && (
                <div className="mb-10 text-center">
                  <h3 className="text-lg font-bold text-stone-500 mb-3 uppercase tracking-widest flex items-center justify-center gap-2">
                    <span>🌟</span> Exemplos Famosos
                  </h3>
                    <p className="text-amber-600 text-xl italic font-bold">
                      "{selectedClass.famousExamples.join(", ")}."
                    </p>
                </div>
              )}

              {/* Características Principais (Cards) */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-amber-800 mb-6 text-center border-b border-stone-800 pb-2">⚔️ Características de Classe</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded bg-stone-950 border border-stone-800 text-center shadow-md">
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-wider mb-2">PV Iniciais</p>
                    <p className="text-red-600 text-4xl font-bold flex items-center justify-center gap-1">
                        <span>❤</span> {selectedClass.characteristics.pvBase}
                    </p>
                     <p className="text-stone-600 text-xs mt-1">+ Mod. Constituição</p>
                  </div>
                  <div className="p-5 rounded bg-stone-950 border border-stone-800 text-center shadow-md">
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-wider mb-2">PV por Nível</p>
                    <p className="text-red-500 text-4xl font-bold">
                      +{selectedClass.characteristics.pvPerLevel}
                    </p>
                    <p className="text-stone-600 text-xs mt-1">+ Mod. Constituição</p>
                  </div>
                  <div className="p-5 rounded bg-stone-950 border border-stone-800 text-center shadow-md">
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-wider mb-2">PM por Nível</p>
                    <p className="text-blue-500 text-4xl font-bold flex items-center justify-center gap-1">
                       <span>✨</span> {selectedClass.characteristics.pmPerLevel}
                    </p>
                     <p className="text-stone-600 text-xs mt-1">Pontos de Mana</p>
                  </div>
                </div>
              </div>

              {/* Perícias e Proficiências (Duas Colunas) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Coluna da Esquerda: Perícias */}
                  <div>
                    <h3 className="text-2xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2 flex items-center gap-2">
                        <span>🎯</span> Perícias
                    </h3>
                    
                    <div className="mb-6">
                        <p className="text-stone-400 mb-3 text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-700 rotate-45"></span> Treinamento Inicial Obrigatório:
                        </p>
                        <ul className="space-y-2">
                            {selectedClass.skills.mandatory.map((skill, index) => (
                            <li key={index} className="flex items-center gap-2 text-stone-200 font-bold text-lg">
                                <span className="text-amber-600">✓</span> {skill}
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-stone-400 mb-3 text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-stone-600 rotate-45"></span> Escolha mais <span className="text-amber-500 text-lg">{selectedClass.skills.optional.count}</span>:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {selectedClass.skills.optional.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-stone-950 border border-stone-800 text-stone-400 text-sm">
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Coluna da Direita: Proficiências */}
                  <div>
                     <h3 className="text-2xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2 flex items-center gap-2">
                        <span>🛡️</span> Proficiências
                    </h3>
                    <div className="p-6 bg-stone-950/50 rounded border border-stone-800 shadow-inner flex items-start gap-4">
                        <span className="text-4xl">⚔️</span>
                        <p className="text-stone-300 text-lg leading-relaxed font-bold">
                            {selectedClass.proficiency}
                        </p>
                    </div>
                  </div>
              </div>

              {/* Habilidades de Classe */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center border-b border-stone-800 pb-2">✨ Habilidades de Classe</h3>
                <div className="space-y-8">
                  {selectedClass.abilities.map((ability, index) => (
                    <div key={index} className="relative group">
                      {/* Marcador lateral */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-700 via-amber-900 to-stone-900 rounded-l"></div>
                      
                      <div className="ml-1 rounded-r bg-stone-900 border border-stone-800 overflow-hidden shadow-sm hover:border-amber-800/50 transition-colors">
                        {/* Título da Habilidade */}
                        <div className="p-5 bg-stone-950 border-b border-stone-800">
                          <h4 className="text-2xl font-bold text-amber-600">{ability.name}</h4>
                        </div>

                        {/* Conteúdo da Habilidade */}
                        <div className="p-6 bg-[url('/noise.png')]">
                          {/* Descrição Geral */}
                          {ability.description && (
                            <p className="text-stone-300 leading-relaxed whitespace-pre-wrap text-lg">
                              {ability.description}
                            </p>
                          )}

                          {/* Sub-Opções */}
                          {ability.subAbilities && ability.subAbilities.length > 0 && (
                            <div className="space-y-6 mt-8">
                              {ability.subAbilities.map((subAbility, subIndex) => (
                                <div key={subIndex} className="pl-6 border-l-4 border-stone-800">
                                  <h5 className="text-xl font-bold text-amber-700 mb-2 flex items-center gap-2">
                                     <span className="text-xs">◆</span> {subAbility.name}
                                  </h5>
                                  <p className="text-stone-400 text-base leading-relaxed whitespace-pre-wrap">
                                    {subAbility.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras/Regras Especiais */}
              {selectedClass.extras && selectedClass.extras.length > 0 && (
                <div className="mb-12 p-6 bg-purple-950/10 rounded border border-purple-900/30">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                      <span>⭐</span> Regras Especiais & Notas
                  </h3>
                  <div className="space-y-6">
                    {selectedClass.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-purple-900/20 last:border-0"
                      >
                        <h4 className="text-purple-300 font-bold text-lg mb-2">{extra.title}</h4>
                        <p className="text-stone-400 text-base leading-relaxed whitespace-pre-line">
                          {extra.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabela de Progressão de Níveis */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2 flex items-center gap-2">
                    <span>📈</span> Tabela de Progressão
                </h3>
                <div className="overflow-x-auto rounded border border-stone-800 shadow-xl">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-stone-950 border-b border-stone-800">
                        <th className="p-4 text-amber-600 font-bold w-24 uppercase text-sm tracking-wider border-r border-stone-800 text-center">Nível</th>
                        <th className="p-4 text-amber-600 font-bold uppercase text-sm tracking-wider">Habilidades Adquiridas</th>
                      </tr>
                    </thead>
                    <tbody className="bg-stone-900 divide-y divide-stone-800">
                      {selectedClass.levelProgression.map((progression, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-stone-900/50' : 'bg-stone-900'} hover:bg-amber-900/10 transition-colors`}
                        >
                          <td className="p-4 text-stone-200 font-bold text-center border-r border-stone-800 text-lg">
                            {progression.level}º
                          </td>
                          <td className="p-4 text-stone-300 text-lg">
                            {progression.abilities}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Fim do Modal - Decoração */}
              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[1px] w-20 bg-amber-800"></div>
                    <span className="text-amber-800 text-2xl">❖</span>
                    <div className="h-[1px] w-20 bg-amber-800"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}