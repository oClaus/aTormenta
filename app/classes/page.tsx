"use client";

import Link from "next/link";
import { useState } from "react";
import { GameClass } from "@/types/class";
import { classes } from "@/data/classes";
import ThemeToggle from "@/components/ThemeToggle";

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="26"
      height="26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 29V12C3 6.48 7.48 2 13 2H29"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 21c5 0 8 3 8 8"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function WizardGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 20l6-15 2 4 2-4 6 15" />
      <path d="M9 9l3 2 3-2" />
      <circle cx="12" cy="5.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

     {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="font-display text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(var(--bg-rgb),0.1)' }}>
                  a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3">
              <div className="font-display flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                  <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors">
                    Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Classes</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título Principal Solto */}
        <div className="mb-10 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider">
            Classes
          </h1>
          {/* Detalhe visual opcional: linha de capítulo */}
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full"></div>
        </div>

        {/* Acordeão de Introdução/Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors tracking-wide">
                  Regras de Classes
                </h2>
                <p className="text-sm text-amber-900/70 italic font-bold">
                  Clique para expandir ou recolher as regras básicas sobre classes.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[500000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            
            {/* Contêiner Principal: Padroniza fonte, cor, alinhamento e entrelinhas para todos os textos internos */}
            <div className="p-8 sm:p-10 font-serif text-amber-950/85 text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium text-lg">
                  Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e perseguir seus objetivos — com armas, perícias ou magias.
                </p>
              </section>
              
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide">Escolhendo sua Classe</h2>
                <p>A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros. Tormenta20 contém quatorze classes. A tabela a seguir traz um resumo das classes, com uma descrição curta, sugestão de atributo principal, e PV, PM e perícias iniciais.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Características das Classes</h3>
                <p>Sua classe define seus pontos de vida e pontos de mana, quais perícias são treinadas e quais os tipos de armas e armaduras que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem usar).</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Habilidades e Poderes de Classes</h3>
                <p>Você começa o jogo com todas as habilidades do 1º nível da sua classe. Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral. Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Subindo de Nível</h3>
                <div className="space-y-4">
                  <p>Quando acumula XP suficiente você sobe de nível. Quando isso acontece, você ganha três benefícios, seus PV e PM aumentam de acordo com a sua classe. Some sua Constituição aos PV que ganha por nível (mas você sempre ganha pelo menos 1 PV ao subir de nível). Você ganha todas as habilidades do nível alcançado. Consulte a página da sua classe para saber quais. E por fim, seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1. Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para perícias treinadas e o número depois da barra para perícias não treinadas.</p>
                  <p className="text-red-800/90 italic font-bold">Mais informações sobre Patamares e Multiclasses estão no final da página.</p>
                </div>
              </section>
              
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Multiclasse</h3>
                <p className="mb-6">Quando sobe de nível, você pode escolher outra classe. Essa opção é conhecida como multiclasse e fornece mais versatilidade, em troca de poder bruto. O qareen Zaled Rayeder, um arcanista de 3º nível, encontra um propósito para seus dons mágicos selvagens na ordem de Khalmyr, o Deus da Justiça. Ao subir para o 4º nível, escolhe um nível de paladino, tornando-se um arcanista 3/paladino 1. Zaled terá as habilidades de um arcanista de 3º nível e de um paladino de 1º nível.</p>
                
                <div className="space-y-4 pl-5 border-l-4 border-amber-900/30 text-base text-left">
                  <p><span className="text-red-800 font-bold">Pontos de Vida:</span> Quando você ganha o primeiro nível em uma nova classe, ganha os PV de um nível subsequente, não do primeiro. Zaled ganha 5 PV pelo primeiro nível de paladino, não 20.</p>
                  <p><span className="text-red-800 font-bold">Pontos de Mana:</span> Some os PM fornecidos por cada classe para determinar seu montante total.</p>
                  <p><span className="text-red-800 font-bold">Perícias & Proficiências:</span> Quando você ganha o primeiro nível em uma nova classe, não ganha as perícias treinadas ou proficiências da nova classe.</p>
                  <p><span className="text-red-800 font-bold">Níveis de Classe e de Personagem:</span> Nível de classe são níveis numa classe específica. Já seu nível de personagem é a soma dos níveis de todas as suas classes. Zaled é um arcanista de 3º nível, um paladino de 1º nível e um personagem de 4º nível (a soma dos dois).</p>
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Patamares de Jogo</h3>
                <p className="mb-6">As classificações abaixo fornecem uma noção da escala de poder dos personagens e afetam certas habilidades.</p>
                
                <div className="space-y-3 text-base text-left">
                  <p className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-lg border border-amber-900/20 shadow-sm"><span className="text-amber-950 font-bold">Iniciante (1º ao 4º nível):</span> Aventureiro novato, envolvido em missões locais, como proteger vilas do ataque de bandidos e escoltar caravanas.</p>
                  <p className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-lg border border-amber-900/20 shadow-sm"><span className="text-amber-700 font-bold">Veterano (5º ao 10º nível):</span> Neste patamar, o herói presta serviços importantes a nobres e líderes de guildas.</p>
                  <p className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-lg border border-amber-900/20 shadow-sm"><span className="text-red-800 font-bold">Campeão (11º ao 16º nível):</span> Já famoso por suas façanhas, o aventureiro trabalha para monarcas e enfrenta grandes vilões e monstros terríveis.</p>
                  <p className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-lg border border-purple-900/20 shadow-sm"><span className="text-purple-500 font-bold">Lenda (17º ao 20º nível):</span> Entre os mais poderosos de Arton, o herói lida com perigos que ameaçam todo o mundo... Ou mesmo toda a realidade!</p>
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Classes Variantes</h3>
                <div className="space-y-4">
                  <p>As classes de Tormenta20 são versáteis, típicas e abrangentes. Representam a grande maioria dos aventureiros de Arton — são classes básicas.</p>
                  <p>Contudo, existem outros tipos de aventureiros. Heróis que se dedicam a um aspecto específico de seu caminho, abrindo mão de conhecimentos, habilidades e poderes genéricos. Suas personalidades não se adaptam ao treinamento “comum”. Eles procuram se concentrar em áreas e tarefas específicas. Adotam classes variantes.</p>
                  <p>Classes variantes são modificações de suas versões básicas; as características e habilidades descritas aqui substituem as da classe básica (aquelas não listadas não fazem parte da variante). Exceto por isso, a classe variante funciona como sua contraparte básica: usa a mesma lista de poderes e serve para cumprir quaisquer pré-requisitos que exijam a classe básica. Não é possível fazer multiclasse entre uma classe básica e uma de suas variantes — para todos os efeitos, ambas são a mesma classe.</p>
                  <p>A escolha por uma classe variante deve ser feita na criação do personagem ou ao alcançar o 1º nível da classe. Uma vez feita, não pode ser mudada. Nesta página, serão as classes representadas por <span className="font-bold italic">"Nome da Classe (Classe Base)"</span>.</p>
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Classes Divinas</h3>
                <p className="mb-6">O livro básico Tormenta20 descreve as classes básicas dedicadas aos deuses (clérigo, druida e paladino) em termos gerais. Em Deuses, foi adicionado descrições específicas para personagens dessas classes — e também do novo frade — dedicadas para cada divindade. Esse conteúdo estará como "Regras Especiais & Notas" na página dessas classes.</p>
                
                <div className="space-y-4 pl-5 border-l-4 border-amber-900/30 text-base text-left">
                  <p><span className="text-red-800 font-bold">Indumentária:</span> Vestimenta típica para o devoto. Usar outras vestes não viola as Obrigações & Restrições, mas pode influenciar testes sociais com outros devotos da mesma divindade.</p>
                  <p><span className="text-red-800 font-bold">Fundamentalistas:</span> Enquanto um devoto normal às vezes questiona sua divindade, até mesmo desafiando-a, o fundamentalista é um seguidor extremo de seus ideais, beirando o fanatismo. Ele acredita que outros devotos são infiéis, que sua igreja tem sido liberal e tolerante demais! Não apenas segue as Obrigações & Restrições padrão à risca, mas também adota dogmas muito mais rígidos. A recompensa divina por tamanha lealdade é maior, assim como o castigo por falhar em cumprir essa doutrina severa.</p>
                  <p>Um fundamentalista recebe um poder concedido adicional, mas, além das Obrigações & Restrições de sua divindade, deve seguir também seus dogmas. Se violar qualquer deles, perde seus pontos de mana e habilidades de classe divina, só podendo recuperá-los a partir do próximo dia (habilidades são recuperadas após um descanso). Se violar obrigações ou dogmas de novo na mesma aventura, só pode recuperar os PM e habilidades após cumprir uma penitência — que deve ser imposta por outro fundamentalista do mesmo deus. Além disso, fundamentalistas usam apenas a arma favorita de sua divindade. Utilizar qualquer outra arma configura violação de seus dogmas.</p>
                  <p className="italic text-amber-900/70 text-sm">Note que alguns dogmas fundamentalistas os tornam inviáveis como personagens jogadores, servindo melhor a NPCs.</p>
                  <p><span className="text-red-800 font-bold">Outros Fundamentalistas:</span> Quase todos os fundamentalistas em Arton são clérigos, druidas, frades e paladinos: essas são as classes mais próximas dos deuses. São os “mais devotos dos devotos”, por assim dizer. Por isso, embora existam devotos de outras classes, fundamentalistas são muitíssimo raros — mas não impossíveis. É o proverbial leigo que “ensina o evangelho ao vigário”, considera os clérigos frouxos e tolerantes, acredita saber mais sobre sua religião que o próprio sumo-sacerdote! Quase todos são simples fanfarrões — mas, algumas vezes, os deuses decidem retribuir seu fervor com milagres reais.</p>
                  <p>Um devoto fundamentalista que não seja clérigo, druida, frade ou paladino pode escolher seu dogma entre essas classes, conforme a afinidade. Por exemplo, um guerreiro devoto fundamentalista de Azgher pode adotar o dogma do clérigo (atacar e destruir devotos de Tenebra) ou do paladino (idem, e também atacar e destruir necromantes e mortos-vivos). O benefício mecânico é o mesmo (um poder concedido a mais), bem como a punição por violações. Dogmas de paladinos tendem a ser mais rigorosos, mas o jogador pode escolhê-los como desafio de interpretação.</p>
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">“Posso servir a mais de uma divindade?”</h3>
                <div className="space-y-4">
                  <p>Sim. Mas sem poderes, espertinho! Ser devoto significa lealdade e devoção totais para com uma divindade. Os poderes concedidos são uma forma de recompensa divina para aqueles que concordam em atuar como servos de um deus. Apenas um.</p>
                  <p>Qualquer personagem pode seguir as Obrigações & Restrições de duas ou mais divindades, simplesmente como demonstração de respeito. No entanto, embora essa atitude tenha alguma chance de atrair simpatia pontual — por parte das próprias divindades ou de seus devotos —, não concede quaisquer poderes concedidos.</p>
                </div>
              </section>
                
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-xl font-bold text-red-800 mb-4 tracking-wide">Nova Regra: Devoção Ampla</h3>
                <p>Clérigos e frades do Panteão, druidas de Arton e paladinos do bem não recebem poderes concedidos. Em compensação, por sua devoção ampla, recebem +2 PM por patamar.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Classe
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite o nome ou origem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
            />
            <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40" />
          </div>
        </div>

        {/* Grid de Classes */}
        <h2 className="font-display text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 tracking-wide">
          {filteredClasses.length} Classes Encontradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 w-full mb-16">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="card-grain group relative mt-6 rounded-md bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] cursor-pointer flex flex-col"
            >
              <CornerOrnament className="absolute -top-px -left-px z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="crest z-20">
                <span>{cls.name.charAt(0)}</span>
              </div>

              {/* Fundo da imagem usando a cor mais clara do pergaminho para dar contraste */}
              <div className="relative w-full h-72 rounded-t-md bg-[rgb(var(--portrait-rgb))] border-b border-amber-900/15 overflow-hidden flex items-center justify-center">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-95 group-hover:opacity-100"
                  />
                ) : (
                  <WizardGlyph className="text-[rgb(60,55,50)]/35" />
                )}
              </div>

              <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-[rgb(var(--bg-card-rgb))]">
                <div className="w-full flex flex-col items-center">
                  <h3 className="font-display text-lg font-bold text-amber-950 group-hover:text-red-800 transition-colors mt-1 mb-3 tracking-wide">
                    {cls.name}
                  </h3>
                </div>

                <div>
                  {/* Tag de origem em formato de selo hexagonal */}
                  <span className="hex-badge font-display inline-block px-4 py-1.5 bg-[rgb(var(--bg-inset-rgb))] text-xs font-bold uppercase tracking-widest text-amber-950/75 border border-[rgb(var(--accent-rgb))]/30 group-hover:border-[rgb(var(--accent-rgb))]/60 group-hover:text-red-800/90 transition-colors">
                    {cls.origin}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center">
          <PageGlyph className="text-amber-950/40 mb-4" />
          <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
            Nenhuma classe encontrada nos registros.
          </p>
        </div>
      )}
      </main>

      {/* Modal de Detalhes */}
      {selectedClass && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[rgb(var(--void-rgb))]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          {/* Fundo do modal padronizado com a cor mais clara do pergaminho e borda dupla */}
          <div className="bg-[rgb(var(--bg-inset-rgb))] border-4 border-double border-amber-900/40 rounded-xl shadow-[0_0_60px_rgba(var(--bg-rgb),0.3)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
            
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            {/* Contêiner principal herda a fonte e a cor padrão do compêndio */}
            <div className="p-5 md:p-12 font-serif text-amber-950/85">
              
              {/* Cabeçalho da Classe */}
              <div className="mb-8 md:mb-10 text-center border-b-2 border-amber-900/20 pb-6 md:pb-8 mt-4 md:mt-0">
                  {/* Texto responsivo: menor no celular, maior no desktop */}
                  <h2 className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wider uppercase">
                    {selectedClass.name}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
                    <span className="font-display inline-block text-base md:text-lg font-bold uppercase tracking-[0.2em] text-red-800">
                        {selectedClass.origin}
                    </span>
                    <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
                  </div>
              </div>

              {/* Descrição - FIX MOBILE: Paddings menores no celular e texto alinhado à esquerda no mobile (justificado apenas no desktop) */}
              <div className="mb-10 p-5 md:p-8 bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-amber-900/20"></div>
                <p className="text-amber-950/90 leading-relaxed whitespace-pre-line text-base md:text-lg first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-left md:text-justify">
                  {selectedClass.description}
                </p>
              </div>

              {/* Famosos */}
              {selectedClass.famousExamples && selectedClass.famousExamples.length > 0 && (
                <div className="mb-10 text-center px-4">
                  <h3 className="font-display text-sm md:text-base font-bold text-amber-900/50 mb-2 uppercase tracking-widest flex items-center justify-center gap-2">
                    Nomes Grandiosos
                  </h3>
                    <p className="text-amber-700/90 text-lg md:text-xl italic font-bold">
                      "{selectedClass.famousExamples.join(", ")}."
                    </p>
                </div>
              )}

              {/* Características Principais */}
              <div className="mb-12">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-6 text-center border-b-2 border-amber-900/20 pb-2 tracking-wide">Características de Classe</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="p-4 md:p-5 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 text-center shadow-sm">
                    <p className="font-display text-amber-950/60 text-xs font-bold uppercase tracking-widest mb-2">PV Iniciais</p>
                    <p className="text-red-800 text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                    {selectedClass.characteristics.pvBase}
                    </p>
                      <p className="text-amber-900/60 text-xs mt-1 font-bold">+ Mod. Constituição</p>
                  </div>
                  <div className="p-4 md:p-5 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 text-center shadow-sm">
                    <p className="font-display text-amber-950/60 text-xs font-bold uppercase tracking-widest mb-2">PV por Nível</p>
                    <p className="text-red-800 text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                      {selectedClass.characteristics.pvPerLevel}
                    </p>
                    <p className="text-amber-900/60 text-xs mt-1 font-bold">+ Mod. Constituição</p>
                  </div>
                  <div className="p-4 md:p-5 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/20 text-center shadow-sm">
                    <p className="font-display text-amber-950/60 text-xs font-bold uppercase tracking-widest mb-2">PM por Nível</p>
                    <p className="text-blue-500 text-3xl md:text-4xl font-bold flex items-center justify-center gap-1">
                    {selectedClass.characteristics.pmPerLevel}
                    </p>
                      <p className="text-amber-900/60 text-xs mt-1 font-bold">Pontos de Mana</p>
                  </div>
                </div>
              </div>

              {/* Perícias */}
              <div className="mb-8">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                    Perícias
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                        <p className="font-display text-amber-950/60 mb-3 text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-800/80 rotate-45"></span> Começa com:
                        </p>
                        <ul className="space-y-2">
                            {selectedClass.skills.mandatory.map((skill, index) => (
                            <li key={index} className="flex items-center gap-2 text-amber-950 font-bold text-lg">
                                <span className="text-red-800/70">✓</span> {skill}
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="font-display text-amber-950/60 mb-3 text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-900/40 rotate-45"></span> Escolha mais <span className="text-red-800 text-lg">{selectedClass.skills.optional.count}</span> entre: 
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {selectedClass.skills.optional.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1.5 rounded-lg bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 text-amber-950/80 text-sm md:text-base font-medium shadow-sm">
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                  </div>
              </div>

              {/* Proficiências */}
              <div className="mb-12">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                    Proficiências
                  </h3>
                  <div className="p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border-2 border-amber-900/20 shadow-inner flex items-start gap-4">
                    <p className="text-amber-950 text-base md:text-lg leading-relaxed font-bold">
                        {selectedClass.proficiency}
                    </p>
                  </div>
              </div>

              {/* Botão de Poderes */}
              {selectedClass.powersUrl && (
                <div className="mb-14">
                  <Link 
                    href={selectedClass.powersUrl} 
                    className="group block w-full text-center py-5 bg-[#7f1d1d] text-white rounded-xl border-2 border-[#450a0a] shadow-md hover:bg-[#991b1b] hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="font-display text-lg md:text-xl font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
                        Ver Poderes de {selectedClass.name}
                    </span>
                    <div className="font-display text-xs text-white/60 mt-1 uppercase tracking-widest">Clique para acessar a lista completa</div>
                  </Link>
                </div>
              )}

              {/* Habilidades de Classe */}
              <div className="mb-12">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-6 md:mb-8 text-center border-b-2 border-amber-900/20 pb-2 tracking-wide">Habilidades de Classe</h3>
                <div className="space-y-6 md:space-y-8">
                  {selectedClass.abilities.map((ability, index) => (
                    <div key={index} className="relative group">
                      {/* Cards de habilidades com rounded-xl e border-2 */}
                      <div className="rounded-xl bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 overflow-hidden shadow-sm hover:border-[rgb(var(--accent-rgb))]/50 transition-colors">
                        <div className="p-4 md:p-5 bg-[rgb(var(--bg-card-rgb))] border-b-2 border-amber-900/20">
                          <h4 className="font-display text-xl md:text-2xl font-bold text-red-800 tracking-wide">{ability.name}</h4>
                        </div>

                        <div className="p-5 md:p-6 bg-[url('/noise.png')]">
                          {ability.description && (
                            <p className="text-amber-950/85 leading-relaxed whitespace-pre-wrap text-base md:text-lg text-left md:text-justify">
                              {ability.description}
                            </p>
                          )}

                          {ability.subAbilities && ability.subAbilities.length > 0 && (
                            <div className="space-y-6 mt-6 md:mt-8">
                              {ability.subAbilities.map((subAbility, subIndex) => (
                                <div key={subIndex} className="pl-4 md:pl-6 border-l-4 border-amber-900/30">
                                  <h5 className="font-display text-lg md:text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                                      <span className="text-[10px] text-red-800/60">◆</span> {subAbility.name}
                                  </h5>
                                  <p className="text-amber-950/80 text-base leading-relaxed whitespace-pre-wrap text-left md:text-justify">
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

              {/* Extras/Regras Especiais - FIX MOBILE: Cores mais orgânicas, margens internas menores no mobile */}
              {selectedClass.extras && selectedClass.extras.length > 0 && (
                <div className="mb-12 p-5 md:p-8 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 shadow-inner">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide border-b-2 border-amber-900/10 pb-4">
                    ❖ Regras Especiais & Notas
                  </h3>
                  
                  <div className="space-y-8">
                    {selectedClass.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="pb-6 border-b border-amber-900/10 last:border-0"
                      >
                        <h4 className="font-display text-amber-950 font-bold text-lg md:text-xl mb-3">{extra.title}</h4>
                        
                        {extra.description && (
                          <p className="text-amber-950/85 text-base md:text-lg leading-relaxed whitespace-pre-line mb-6 text-left md:text-justify">
                            {extra.description}
                          </p>
                        )}

                        {extra.sections && (
                          <div className="space-y-4 md:space-y-6 mt-4 pl-2 md:pl-4 border-l-2 border-amber-900/20">
                            {extra.sections.map((section, sIndex) => (
                              // Ajuste no mobile: Paddings menores e fundo alinhado à página
                              <div key={sIndex} className="bg-[rgb(var(--bg-inset-rgb))] p-4 md:p-5 rounded-lg border border-amber-900/10 shadow-sm">
                                <h5 className="font-display text-red-800 font-bold text-base md:text-lg mb-2 uppercase tracking-wider">
                                  {section.title}
                                </h5>
                                
                                {section.intro && (
                                  <p className="text-amber-950/85 text-base leading-relaxed whitespace-pre-line mb-4 md:mb-6 text-left md:text-justify">
                                    {section.intro}
                                  </p>
                                )}

                                <dl className="space-y-3">
                                  {section.content.map((item, cIndex) => (
                                    <div key={cIndex} className="group flex flex-col sm:block">
                                      <dt className="text-amber-950 font-bold sm:inline text-base">
                                        {item.name}:
                                      </dt>
                                      <dd className="text-amber-950/80 sm:inline sm:ml-2 text-base leading-relaxed text-left md:text-justify">
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
                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                Tabela de Progressão
                </h3>
                <div className="overflow-x-auto rounded-xl border-2 border-amber-900/30 shadow-sm">
                  {/* Tabela min-w para garantir que não amasse as palavras no mobile */}
                  <table className="w-full text-left min-w-[500px]">
                    <thead>
                      <tr className="bg-[rgb(var(--bg-card-rgb))] border-b-2 border-amber-900/30">
                        <th className="font-display p-3 md:p-4 text-amber-950/70 font-bold w-20 md:w-24 uppercase text-xs md:text-sm tracking-widest border-r-2 border-amber-900/30 text-center">Nível</th>
                        <th className="font-display p-3 md:p-4 text-amber-950/70 font-bold uppercase text-xs md:text-sm tracking-widest">Habilidades Adquiridas</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[rgb(var(--bg-inset-rgb))] divide-y divide-amber-900/10">
                      {selectedClass.levelProgression.map((progression, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? 'bg-[rgb(var(--bg-inset-rgb))]' : 'bg-[rgb(var(--bg-card-rgb))]'} hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors`}
                        >
                          <td className="p-3 md:p-4 text-red-800 font-bold text-center border-r-2 border-amber-900/20 text-base md:text-lg">
                            {progression.level}º
                          </td>
                          <td className="p-3 md:p-4 text-amber-950/85 text-base md:text-lg">
                            {progression.abilities}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* IMAGEM (NO FINAL) */}
              {selectedClass.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/20">
                  <h3 className="font-display text-amber-950/50 text-xs md:text-sm uppercase tracking-widest mb-6 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/30 shadow-md bg-[rgb(var(--bg-card-rgb))] max-w-2xl mx-auto">
                    <img
                      src={selectedClass.image}
                      alt={selectedClass.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))]/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </section>
              )}
              
              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[2px] w-12 md:w-20 bg-amber-900/60"></div>
                    <span className="text-red-800/60 text-xl md:text-2xl">❖</span>
                    <div className="h-[2px] w-12 md:w-20 bg-amber-900/60"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}