"use client";

import Link from "next/link";
import { useState } from "react";
import { GameClass } from "@/types/class";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<GameClass | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredClasses = classes
    .filter(cls =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedClass(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
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
                <span className="text-red-800">Classes</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título Principal Solto */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Classes
          </h1>
        </div>

        {/* Acordeão de Introdução/Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras de Classes
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as regras básicas.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10 space-y-8 text-lg leading-relaxed">
              
              <div>
                  <p className="text-amber-950 font-medium">Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e perseguir seus objetivos — com armas, perícias ou magias.</p>
              </div>
              
              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">Escolhendo sua Classe</h2>
                  <p className="text-amber-900/90 font-medium">A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros. Tormenta20 contém quatorze classes. A tabela a seguir traz um resumo das classes, com uma descrição curta, sugestão de atributo principal, e PV, PM e perícias iniciais.</p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Características das Classes</h3>
                  <p className="text-amber-900/90 font-medium">Sua classe define seus pontos de vida e pontos de mana, quais perícias são treinadas e quais os tipos de armas e armaduras que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem usar).</p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Habilidades e Poderes de Classes</h3>
                  <p className="text-amber-900/90 font-medium text-justify">Você começa o jogo com todas as habilidades do 1º nível da sua classe. Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral. Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento.</p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Subindo de Nível</h3>
                  <p className="text-amber-900/90 font-medium mb-4 text-justify">Quando acumula XP suficiente você sobe de nível. Quando isso acontece, você ganha três benefícios, seus PV e PM aumentam de acordo com a sua classe. Some sua Constituição aos PV que ganha por nível (mas você sempre ganha pelo menos 1 PV ao subir de nível). Você ganha todas as habilidades do nível alcançado. Consulte a página da sua classe para saber quais. E por fim, seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1. Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para perícias treinadas e o número depois da barra para perícias não treinadas.</p>
                  <p className="text-red-800 italic font-bold">Mais informações, sobre Patamares e Multiclasses estão no final da página.</p>
              </div>
              
              <div className="border-t-2 border-amber-900/20 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Multiclasse</h3>
                <p className="text-amber-900/90 font-medium mb-4 text-justify">
                    Quando sobe de nível, você pode escolher outra classe. Essa opção é conhecida como multiclasse e fornece mais versatilidade, em troca de poder bruto. O qareen Zaled Rayeder, um arcanista de 3º nível, encontra um propósito para seus dons mágicos selvagens na ordem de Khalmyr, o Deus da Justiça. Ao subir para o 4º nível, escolhe um nível de paladino, tornando-se um arcanista 3/paladino 1. Zaled terá as habilidades de um arcanista de 3º nível e de um paladino de 1º nível.
                </p>
                <div className="space-y-3 pl-4 border-l-4 border-amber-900/30 text-base">
                    <p> <span className="text-red-700 font-bold"> Pontos de Vida: </span> <span className="text-amber-900/70">Quando você ganha o primeiro nível em uma nova classe, ganha os PV de um nível subsequente, não do primeiro. Zaled ganha 5 PV pelo primeiro nível de paladino, não 20.</span></p>
                    <p> <span className="text-red-700 font-bold"> Pontos de Mana: </span> <span className="text-amber-900/70">Some os PM fornecidos por cada classe para determinar seu montante total.</span></p>
                    <p> <span className="text-red-700 font-bold"> Perícias & Proficiências: </span> <span className="text-amber-900/70"> Quando você ganha o primeiro nível em uma nova classe, não ganha as perícias treinadas ou proficiências da nova classe.</span></p>
                    <p> <span className="text-red-700 font-bold"> Níveis de Classe e de Personagem: </span> <span className="text-amber-900/70"> Nível de classe são níveis numa classe específica. Já seu nível de personagem é a soma dos níveis de todas as suas classes. Zaled é um arcanista de 3º nível, um paladino de 1º nível e um personagem de 4º nível (a soma dos dois).</span></p>
                </div>
            </div>

            <div className="border-t-2 border-amber-900/20 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Patamares de Jogo</h3>
                <p className="text-amber-900/90 font-medium mb-4 text-justify"> As classificações abaixo fornecem uma noção da escala de poder dos personagens e afetam certas habilidades.</p>
                <div className="space-y-3 text-base">
                    <p className="p-3 bg-[#fbf5e6] rounded border border-amber-900/20 shadow-sm"><span className="text-amber-950 font-bold">Iniciante (1º ao 4º nível):</span><span className="text-amber-900/70"> Aventureiro novato, envolvido em missões locais, como proteger vilas do ataque de bandidos e escoltar caravanas.</span></p>
                    <p className="p-3 bg-[#fbf5e6] rounded border border-amber-900/20 shadow-sm"><span className="text-amber-600 font-bold">Veterano (5º ao 10º nível):</span><span className="text-amber-900/70"> Neste patamar, o herói presta serviços importantes a nobres e líderes de guildas.</span></p>
                    <p className="p-3 bg-[#fbf5e6] rounded border border-amber-900/20 shadow-sm"><span className="text-red-700 font-bold">Campeão (11º ao 16º nível):</span><span className="text-amber-900/70"> Já famoso por suas façanhas, o aventureiro trabalha para monarcas e enfrenta grandes vilões e monstros terríveis.</span></p>
                    <p className="p-3 bg-[#fbf5e6] rounded border border-purple-900/20 shadow-sm"><span className="text-purple-800 font-bold">Lenda (17º ao 20º nível):</span><span className="text-amber-900/70"> Entre os mais poderosos de Arton, o herói lida com perigos que ameaçam todo o mundo... Ou mesmo toda a realidade!</span></p>
                </div>
            </div>

            <div className="border-t-2 border-amber-900/20 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Classes Variantes</h3>
                <p className="text-amber-900/80 font-medium mb-3 text-justify"> As classes de Tormenta20 são versáteis, típicas e abrangentes. Representam a grande maioria dos aventureiros de Arton — são classes básicas.</p>
                <p className="text-amber-900/80 font-medium mb-3 text-justify"> Contudo, existem outros tipos de aventureiros. Heróis que se dedicam a um aspecto específico de seu caminho, abrindo mão de conhecimentos, habilidades e poderes genéricos. Suas personalidades não se adaptam ao treinamento “comum”. Eles procuram se concentrar em áreas e tarefas específicas. Adotam classes variantes.</p>
                <p className="text-amber-900/80 font-medium mb-3 text-justify"> Classes variantes são modificações de suas versões básicas; as características e habilidades descritas aqui substituem as da classe básica (aquelas não listadas não fazem parte da variante). Exceto por isso, a classe variante funciona como sua contraparte básica: usa a mesma lista de poderes e serve para cumprir quaisquer pré-requisitos que exijam a classe básica. Não é possível fazer multiclasse entre uma classe básica e uma de suas variantes — para todos os efeitos, ambas são a mesma classe.</p>
                <p className="text-amber-900/80 font-medium mb-3 text-justify"> A escolha por uma classe variante deve ser feita na criação do personagem ou ao alcançar o 1º nível da classe. Uma vez feita, não pode ser mudada. Nesta página, serão as classes representadas por "Nome da Classe (Classe Base)"</p>
            </div>

            <div className="border-t-2 border-amber-900/20 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Classes Divinas</h3>
                <p className="text-amber-900/80 font-medium mb-3 text-justify"> O livro básico Tormenta20 descreve as classes básicas dedicadas aos deuses (clérigo, druida e paladino) em termos gerais. Em Deuses, foi adicionado descrições específicas para personagens dessas classes — e também do novo frade — dedicadas para cada divindade. Esse conteúdo estará como "Regras Especiais & Notas" na página dessas classes.</p>
                <div className="space-y-3 pl-4 border-l-4 border-amber-900/30 text-base">
                    <p> <span className="text-red-700 font-bold"> Indumentária: </span> <span className="text-amber-900/70">Vestimenta típica para o devoto. Usar outras vestes não viola as Obrigações & Restrições, mas pode influenciar testes sociais com outros devotos da mesma divindade.</span></p>
                    <p> <span className="text-red-700 font-bold"> Fundamentalistas: </span> <span className="text-amber-900/70">Enquanto um devoto normal às vezes questiona sua divindade, até mesmo desafiando-a, o fundamentalista é um seguidor extremo de seus ideais, beirando o fanatismo. Ele acredita que outros devotos são infiéis, que sua igreja tem sido liberal e tolerante demais! Não apenas segue as Obrigações & Restrições padrão à risca, mas também adota dogmas muito mais rígidos. A recompensa divina por tamanha lealdade é maior, assim como o castigo por falhar em cumprir essa doutrina severa.</span></p>
                    <p className="text-amber-900/80 font-medium text-justify"> Um fundamentalista recebe um poder concedido adicional, mas, além das Obrigações & Restrições de sua divindade, deve seguir também seus dogmas. Se violar qualquer deles, perde seus pontos de mana e habilidades de classe divina, só podendo recuperá-los a partir do próximo dia (habilidades são recuperadas após um descanso). Se violar obrigações ou dogmas de novo na mesma aventura, só pode recuperar os PM e habilidades após cumprir uma penitência — que deve ser imposta por outro fundamentalista do mesmo deus. Além disso, fundamentalistas usam apenas a arma favorita de sua divindade. Utilizar qualquer outra arma configura violação de seus dogmas.</p>
                    <p className="text-amber-900/80 font-medium text-justify"> Note que alguns dogmas fundamentalistas os tornam inviáveis como personagens jogadores, servindo melhor a NPCs.</p>
                    <p> <span className="text-red-700 font-bold"> Outros Fundamentalistas: </span> <span className="text-amber-900/70">Quase todos os fundamentalistas em Arton são clérigos, druidas, frades e paladinos: essas são as classes mais próximas dos deuses. São os “mais devotos dos devotos”, por assim dizer. Por isso, embora existam devotos de outras classes, fundamentalistas são muitíssimo raros — mas não impossíveis. É o proverbial leigo que “ensina o evangelho ao vigário”, considera os clérigos frouxos e tolerantes, acredita saber mais sobre sua religião que o próprio sumo-sacerdote! Quase todos são simples fanfarrões — mas, algumas vezes, os deuses decidem retribuir seu fervor com milagres reais.</span></p>
                    <p className="text-amber-900/80 font-medium mb-6 text-justify"> Um devoto fundamentalista que não seja clérigo, druida, frade ou paladino pode escolher seu dogma entre essas classes, conforme a afinidade. Por exemplo, um guerreiro devoto fundamentalista de Azgher pode adotar o dogma do clérigo (atacar e destruir devotos de Tenebra) ou do paladino (idem, e também atacar e destruir necromantes e mortos-vivos). O benefício mecânico é o mesmo (um poder concedido a mais), bem como a punição por violações. Dogmas de paladinos tendem a ser mais rigorosos, mas o jogador pode escolhê-los como desafio de interpretação.</p>
                </div>

                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">“Posso servir a mais de uma divindade?”</h3>
                <p className="text-amber-900/90 font-medium mb-4 text-justify"> Sim. Mas sem poderes, espertinho! Ser devoto significa lealdade e devoção totais para com uma divindade. Os poderes concedidos são uma forma de recompensa divina para aqueles que concordam em atuar como servos de um deus. Apenas um.</p>
                <p className="text-amber-900/90 font-medium mb-4 text-justify"> Qualquer personagem pode seguir as Obrigações & Restrições de duas ou mais divindades, simplesmente como demonstração de respeito. No entanto, embora essa atitude tenha alguma chance de atrair simpatia pontual — por parte das próprias divindades ou de seus devotos —, não concede quaisquer poderes concedidos.</p>

                <h3 className="text-2xl font-bold text-red-800 mb-3 font-serif">Nova Regra: Devoção Ampla</h3>
                <p className="text-amber-900/90 font-medium mb-4 text-justify"> Clérigos e frades do Panteão, druidas de Arton e paladinos do bem não recebem poderes concedidos. Em compensação, por sua devoção ampla, recebem +2 PM por patamar.</p>
            </div>

            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Classe
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

        {/* Grid de Classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mb-16">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="group relative overflow-hidden rounded bg-[#e8dac1] border border-amber-900/30 hover:border-amber-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] cursor-pointer flex flex-col"
            >
              <div className="relative w-full h-64 bg-[#f0e6d2] border-b border-amber-900/10 overflow-hidden flex items-center justify-center">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply filter sepia-[0.3] opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="text-6xl text-amber-900/20">🧙</div>
                )}
              </div>

              <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-[#e8dac1]">
                 <div className="w-full flex flex-col items-center">
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-600 transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-3 font-serif tracking-wide">
                    {cls.name}
                    </h3>
                </div>
                
                <div>
                    <span className="inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest bg-[#f5e6d0] text-amber-900/60 border border-amber-900/10 group-hover:border-amber-900/30 group-hover:text-amber-800 transition-colors">
                    {cls.origin}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhuma classe encontrada nos registros.</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedClass && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          <div className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-6 right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[#e8dac1] border border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            <div className="p-8 md:p-12 font-serif">
              
              {/* Cabeçalho da Classe */}
              <div className="mb-10 text-center border-b-2 border-amber-900/20 pb-8">
                  <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wide">
                    {selectedClass.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                    <span className="inline-block text-lg font-bold uppercase tracking-[0.2em] text-red-800">
                        {selectedClass.origin}
                    </span>
                    <div className="h-[1px] w-12 bg-amber-900/40"></div>
                  </div>
              </div>

              {/* Descrição */}
              <div className="mb-10 p-6 border border-amber-900/20 rounded shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-900/20"></div>
                <p className="text-amber-900/90 font-medium leading-relaxed whitespace-pre-line text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-justify">
                  {selectedClass.description}
                </p>
              </div>

              {/* Famosos */}
              {selectedClass.famousExamples && selectedClass.famousExamples.length > 0 && (
                <div className="mb-10 text-center">
                  <h3 className="text-lg font-bold text-amber-900/50 mb-3 uppercase tracking-widest flex items-center justify-center gap-2">
                    Nomes Grandiosos
                  </h3>
                    <p className="text-amber-700 text-xl italic font-bold">
                      "{selectedClass.famousExamples.join(", ")}."
                    </p>
                </div>
              )}

              {/* Características Principais */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-amber-800 mb-6 text-center border-b border-amber-900/20 pb-2">Características de Classe</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded bg-[#e8dac1] border border-amber-900/20 text-center shadow-md">
                    <p className="text-amber-900/60 text-xs font-bold uppercase tracking-wider mb-2">PV Iniciais</p>
                    <p className="text-red-700 text-4xl font-bold flex items-center justify-center gap-1">
                    {selectedClass.characteristics.pvBase}
                    </p>
                      <p className="text-amber-900/50 text-xs mt-1">+ Mod. Constituição</p>
                  </div>
                  <div className="p-5 rounded bg-[#e8dac1] border border-amber-900/20 text-center shadow-md">
                    <p className="text-amber-900/60 text-xs font-bold uppercase tracking-wider mb-2">PV por Nível</p>
                    <p className="text-red-700 text-4xl font-bold flex items-center justify-center gap-1">
                      {selectedClass.characteristics.pvPerLevel}
                    </p>
                    <p className="text-amber-900/50 text-xs mt-1">+ Mod. Constituição</p>
                  </div>
                  <div className="p-5 rounded bg-[#e8dac1] border border-amber-900/20 text-center shadow-md">
                    <p className="text-amber-900/60 text-xs font-bold uppercase tracking-wider mb-2">PM por Nível</p>
                    <p className="text-blue-700 text-4xl font-bold flex items-center justify-center gap-1">
                    {selectedClass.characteristics.pmPerLevel}
                    </p>
                      <p className="text-amber-900/50 text-xs mt-1">Pontos de Mana</p>
                  </div>
                </div>
              </div>

              {/* --- ALTERAÇÃO 1: PERÍCIAS (Largura total, topo) --- */}
              <div className="mb-8">
                 <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2">
                    Perícias
                 </h3>
                 <div className="grid grid-cols-1 gap-6">
                    <div>
                        <p className="text-amber-900/50 mb-3 text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-700 rotate-45"></span> Começa com:
                        </p>
                        <ul className="space-y-2">
                            {selectedClass.skills.mandatory.map((skill, index) => (
                            <li key={index} className="flex items-center gap-2 text-amber-950 font-bold text-lg">
                                <span className="text-amber-600">✓</span> {skill}
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-amber-900/50 mb-3 text-sm uppercase tracking-wide font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-900/40 rotate-45"></span> Escolha mais <span className="text-amber-600 text-lg">{selectedClass.skills.optional.count}</span> entre: 
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {selectedClass.skills.optional.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 rounded-sm bg-[#fbf5e6] border border-amber-900/20 text-amber-900/70 text-sm shadow-sm">
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                 </div>
              </div>

              {/* --- ALTERAÇÃO 1 (CONTINUAÇÃO): PROFICIÊNCIAS (Largura total, DEPOIS de perícias) --- */}
              <div className="mb-12">
                  <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2">
                    Proficiências
                  </h3>
                  <div className="p-6 bg-[#e8dac1]/50 rounded border border-amber-900/20 shadow-inner flex items-start gap-4">
                    <p className="text-amber-950 text-lg leading-relaxed font-bold">
                        {selectedClass.proficiency}
                    </p>
                  </div>
              </div>

              {/* --- ALTERAÇÃO 2: BOTÃO SÓLIDO (VERMELHO SANGUE) --- */}
              {selectedClass.powersUrl && (
                <div className="mb-14">
                  <Link 
                    href={selectedClass.powersUrl} 
                    className="group block w-full text-center py-5 bg-[#7f1d1d] text-amber-50 rounded-sm border-2 border-[#450a0a] shadow-md hover:bg-[#991b1b] hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="text-xl font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
                        Ver Poderes de {selectedClass.name}
                    </span>
                    <div className="text-xs text-amber-200/60 mt-1 uppercase tracking-wider">Clique para acessar a lista completa</div>
                  </Link>
                </div>
              )}

              {/* Habilidades de Classe */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center border-b border-amber-900/20 pb-2">Habilidades de Classe</h3>
                <div className="space-y-8">
                  {selectedClass.abilities.map((ability, index) => (
                    <div key={index} className="relative group">
              
                      <div className="ml-1 rounded-r bg-[#fbf5e6] border border-amber-900/20 overflow-hidden shadow-sm hover:border-amber-700/50 transition-colors">
                        <div className="p-5 bg-[#e8dac1] border-b border-amber-900/10">
                          <h4 className="text-2xl font-bold text-red-800">{ability.name}</h4>
                        </div>

                        <div className="p-6 bg-[url('/noise.png')]">
                          {ability.description && (
                            <p className="text-amber-900/90 leading-relaxed whitespace-pre-wrap text-lg font-medium">
                              {ability.description}
                            </p>
                          )}

                          {ability.subAbilities && ability.subAbilities.length > 0 && (
                            <div className="space-y-6 mt-8">
                              {ability.subAbilities.map((subAbility, subIndex) => (
                                <div key={subIndex} className="pl-6 border-l-4 border-amber-900/30">
                                  <h5 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2">
                                     <span className="text-xs text-amber-600">◆</span> {subAbility.name}
                                  </h5>
                                  <p className="text-amber-900/80 text-base leading-relaxed whitespace-pre-wrap font-medium">
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

              {/* --- ALTERAÇÃO 3: EXTRAS/REGRAS ESPECIAIS (Cor ajustada para marrom/pergaminho escuro, sem roxo) --- */}
              {selectedClass.extras && selectedClass.extras.length > 0 && (
                <div className="mb-12 p-6 bg-[#d6cbb5] rounded border border-amber-900/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                   📜 Regras Especiais & Notas
                  </h3>
                  
                  <div className="space-y-8">
                    {selectedClass.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="pb-6 border-b border-amber-900/10 last:border-0"
                      >
                        <h4 className="text-amber-950 font-bold text-xl mb-3">{extra.title}</h4>
                        
                        {extra.description && (
                          <p className="text-amber-900/90 text-base leading-relaxed whitespace-pre-line mb-6 font-medium">
                            {extra.description}
                          </p>
                        )}

                        {extra.sections && (
                          <div className="space-y-6 mt-4 pl-4 border-l-2 border-amber-900/20">
                            {extra.sections.map((section, sIndex) => (
                              <div key={sIndex} className="bg-[#e6d5b8] p-4 rounded border border-amber-900/10">
                                <h5 className="text-amber-800 font-bold text-lg mb-2 uppercase tracking-wide">
                                  {section.title}
                                </h5>
                                
                                {section.intro && (
                                  <p className="text-amber-900/90 text-base leading-relaxed whitespace-pre-line mb-6 font-medium">
                                    {section.intro}
                                  </p>
                                )}

                                <dl className="space-y-3">
                                  {section.content.map((item, cIndex) => (
                                    <div key={cIndex} className="group">
                                      <dt className="text-amber-900 font-bold inline text-base">
                                        {item.name}:
                                      </dt>
                                      <dd className="text-amber-900/80 inline ml-2 text-base leading-relaxed font-medium">
                                        {item.description}
                                      </dd>
                                    </div>
                                  ))}
                                </dl>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabela de Progressão de Níveis */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2">
                Tabela de Progressão
                </h3>
                <div className="overflow-x-auto rounded border-2 border-amber-900/30 shadow-sm">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#e6d5b8] border-b-2 border-amber-900/30">
                        <th className="p-4 text-amber-900 font-bold w-24 uppercase text-sm tracking-wider border-r-2 border-amber-900/30 text-center">Nível</th>
                        <th className="p-4 text-amber-900 font-bold uppercase text-sm tracking-wider">Habilidades Adquiridas</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#fffbf2] divide-y divide-amber-900/10">
                      {selectedClass.levelProgression.map((progression, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-[#fffbf2]' : 'bg-[#f9f2e0]'} hover:bg-amber-100 transition-colors`}
                        >
                          <td className="p-4 text-red-900 font-bold text-center border-r-2 border-amber-900/20 text-lg">
                            {progression.level}º
                          </td>
                          <td className="p-4 text-amber-950/90 text-lg font-medium">
                            {progression.abilities}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
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
        <p className="mb-1">Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}