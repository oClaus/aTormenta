"use client";

import Link from "next/link";
import { useState } from "react";
import { Race, isFixedModifier, isFlexibleModifier } from "@/types/race";
import { races } from "@/data/races";
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

function RaceGlyph({ className = "" }: { className?: string }) {
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
      <path d="M12 3c2.5 2 4 5 4 8.5C16 16 14.5 19 12 21c-2.5-2-4-5-4-9.5C8 8 9.5 5 12 3z" />
      <path d="M9 10.5c1 .8 2 1.2 3 1.2s2-.4 3-1.2" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

  const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="mb-12 w-full">
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
    >
      <div className="flex items-center gap-3">
        <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
        <div className="text-left">
          <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors tracking-wide">
            Regras das Raças
          </h2>
          <p className="text-sm text-amber-900/70 italic font-bold">
            Clique para regras e recomendações sobre Raças.
          </p>
        </div>
      </div>
      <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>

    <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isOpen ? 'max-h-[500000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
      
      {/* Contêiner Principal: Padroniza fonte, cor, responsividade e alinhamento */}
      <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
        
        {/* Introdução do Texto */}
        <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Raças</h2>
          <div className="space-y-4">
            <p>As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
            <p>Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.</p>
            <p>Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.</p>
            <p>Quase todas as grandes sagas artonianas são sobre grupos de diferentes raças. Aventureiros aprendem a ver o melhor em cada indivíduo e, ao longo de uma vida de viagens e batalhas, acostumam-se até mesmo ao mais exótico companheiro.</p>
          </div>
        </section>

        <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
          <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Escolhendo sua Raça</h3>
          <div className="space-y-4">
            <p>Após definir seus atributos, é hora de escolher sua raça. Você pode escolher qualquer raça, mas dependendo do seu conceito de personagem, algumas são mais indicadas que outras.</p>
            <p>Se você quiser um personagem bom de briga, por exemplo, minotauro é uma boa escolha. Se gosta de lançar magias, vá de elfo. Já se prefere resolver seus problemas na lábia, escolha qareen. Da mesma forma, algumas raças não são indicadas para certos conceitos. Um trog estudioso provavelmente não será muito competente, assim como um hynne brigão. Humanos são um caso especial — são a raça mais versátil, capazes de se destacar em qualquer carreira. Se estiver em dúvida, vá de humano.</p>
            <p>Como dito acima, todas as raças funcionam para todos os tipos de personagem, e fazer combinações inusitadas pode ser muito divertido. Mas, se você for um jogador iniciante, prefira uma raça que forneça um bônus no atributo principal de sua classe.</p>
          </div>
        </section>

        <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
          <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Características das Raças</h3>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-red-800 mt-1.5 text-[10px]">◆</span>
              <span>Sua raça modifica seus atributos, podendo aumentá-los acima de 4 ou diminuí-los abaixo de –2.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-800 mt-1.5 text-[10px]">◆</span>
              <span>Você possui todas as habilidades de sua raça.</span>
            </li>
          </ul>
        </section>

        <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
          <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Raças Variantes e Crossovers</h3>
          <div className="space-y-4">
            <p>Será apresentado ideias que podem não se encaixar muito bem no cenário canônico de Arton, mas que seriam interessantes de acontecer em outras versões do universo de Tormenta20. Para representar as raças que só funcionam em versões diferentes de Arton, o ícone <strong className="font-sans text-red-800 font-bold">Ω</strong> aparecerá ao lado do nome de cada uma.</p>
            <p>Da mesma forma que fazemos com as classes variantes, o nome da raça apresentada ao lado do nome da variante representa a raça original na qual a variante se baseia.</p>
          </div>
        </section>         
      </div>
    </div>
  </div>
);
};

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">
      
      {/* Background Effect */}
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
                  <span className="text-red-800">Raças</span>
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
            Raças
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full"></div>
        </div>

        {/* Título e Introdução */}
        <div className="mb-12 w-full space-y-8 text-lg leading-relaxed">
          <RulesSection />        
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
        <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
          Buscar Raça
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

        {/* Grid de Raças */}
        <h2 className="font-display text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 tracking-wide">
          {filteredRaces.length} Raças Encontradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 w-full mb-16">
        {filteredRaces.map((race) => (
          <div
            key={race.id}
            onClick={() => setSelectedRace(race)}
            className="card-grain group relative mt-6 rounded-md bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] cursor-pointer flex flex-col"
          >
            <CornerOrnament className="absolute -top-px -left-px z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
            <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
            <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="crest z-20">
              <span>{race.name.charAt(0)}</span>
            </div>

            {/* Fundo da imagem usando a cor mais clara do pergaminho para dar contraste */}
            <div className="relative w-full h-72 rounded-t-md bg-[rgb(var(--portrait-rgb))] border-b border-amber-900/15 overflow-hidden flex items-center justify-center">
              {race.image ? (
                <img
                  src={race.image}
                  alt={race.name}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-95 group-hover:opacity-100"
                />
              ) : (
                <RaceGlyph className="text-[rgb(60,55,50)]/35" />
              )}
            </div>

            <div className="relative p-5 text-center flex-1 flex flex-col justify-between bg-[rgb(var(--bg-card-rgb))]">
              <div className="w-full flex flex-col items-center">
                <h3 className="font-display text-lg font-bold text-amber-950 group-hover:text-red-800 transition-colors mt-1 mb-3 tracking-wide">
                  {race.name}
                </h3>
              </div>

              <div>
                <span className="hex-badge font-display inline-block px-4 py-1.5 bg-[rgb(var(--bg-inset-rgb))] text-xs font-bold uppercase tracking-widest text-amber-950/75 border border-[rgb(var(--accent-rgb))]/30 group-hover:border-[rgb(var(--accent-rgb))]/60 group-hover:text-red-800/90 transition-colors">
                  {race.origin}
                </span>
              </div>
            </div>
          </div>
        ))}
        </div>

        {filteredRaces.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center">
          <PageGlyph className="text-amber-950/40 mb-4" />
          <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
            Nenhuma Raça encontrada nos registros.
          </p>
        </div>
        )}
      </main>

      {/* Modal de Detalhes - ESTILO DE PÁGINA DE LIVRO ANTIGO */}
{selectedRace && (
  <div
    onClick={handleBackdropClick}
    className="fixed inset-0 bg-[rgb(var(--void-rgb))]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
  >
    {/* Container do Modal com textura padronizada */}
    <div className="bg-[rgb(var(--bg-inset-rgb))] border-4 border-double border-amber-900/40 rounded-xl shadow-[0_0_60px_rgba(var(--bg-rgb),0.3)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
      
      {/* Botão de Fechar */}
      <button
        onClick={() => setSelectedRace(null)}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
      >
        ×
      </button>

      {/* Conteúdo do Modal - Herdando fontes e cores */}
      <div className="p-5 md:p-12 font-serif text-amber-950/85">
        
        {/* Cabeçalho da Raça */}
        <div className="mb-8 md:mb-10 text-center border-b-2 border-amber-900/20 pb-6 md:pb-8 mt-4 md:mt-0">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wider uppercase">
              {selectedRace.name}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
              <span className="font-display inline-block text-base md:text-lg font-bold uppercase tracking-[0.2em] text-red-800">
                  {selectedRace.origin}
              </span>
              <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
            </div>
        </div>

        {/* Descrição */}
        <div className="mb-10 p-5 md:p-8 bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl shadow-inner relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-amber-900/20"></div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-2">
            Descrição
          </h3>
          <p className="text-amber-950/90 leading-relaxed whitespace-pre-line text-base md:text-lg font-medium first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-left md:text-justify">
            {selectedRace.description}
          </p>
        </div>
              
              {/* Modificadores de Atributos */}
            <div className="mb-8">
              <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                Modificadores de Atributos
              </h3>
              <div className="space-y-3 md:space-y-4">
                {selectedRace.attributeModifiers.map((mod, index) => {
                  // Se é modificador FIXO
                  if (isFixedModifier(mod)) {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 md:p-5 rounded-xl bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 hover:border-red-800/40 transition-colors shadow-sm"
                      >
                        <p className="text-amber-950/70 font-bold uppercase tracking-widest text-xs md:text-sm">
                          {getAttributeName(mod.attribute)}
                        </p>
                        <p className={`text-2xl md:text-3xl font-bold ${getModifierColor(mod.modifier)}`}>
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
                        className="p-4 md:p-5 rounded-xl bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 shadow-sm"
                      >
                        <p className="text-amber-950/85 leading-relaxed text-base md:text-lg font-medium text-left md:text-justify">
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

            
              {/* Habilidades */}
              <div className="mb-10">
              <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                Habilidades Raciais
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {selectedRace.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="p-4 md:p-5 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 hover:border-red-800/40 transition-colors shadow-sm"
                  >
                    {/* Nome da Habilidade Principal */}
                    <h4 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-2 tracking-wide">
                      {ability.name}
                    </h4>

                    {/* Descrição Principal */}
                    {ability.description && (
                      <p className="text-amber-950/85 text-base md:text-lg leading-relaxed whitespace-pre-line mb-3 font-medium text-left md:text-justify">
                        {ability.description}
                      </p>
                    )}

                    {/* Sub-Habilidades (Opcionais/Escolhas) */}
                    {ability.subAbilities && ability.subAbilities.length > 0 && (
                      <div className="mt-4 pl-4 md:pl-6 border-l-4 border-amber-900/30 space-y-3">
                        {ability.subAbilities.map((sub, subIndex) => (
                          <div key={subIndex} className="bg-[rgb(var(--bg-inset-rgb))] p-4 md:p-5 rounded-lg border border-amber-900/10 shadow-sm">
                            <span className="font-bold text-red-800 mb-2 text-base md:text-lg flex items-center gap-2">
                              <span className="text-[10px] text-red-800/60">◆</span> {sub.name}
                            </span>
                            <span className="block text-amber-950/80 text-base leading-relaxed whitespace-pre-line font-medium text-left md:text-justify">
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
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {selectedRace.longevidade && (
                <div className="p-4 md:p-5 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">Longevidade</div>
                  <div className="text-amber-950 text-lg md:text-xl font-bold">{selectedRace.longevidade}</div>
                </div>
              )}
              {selectedRace.devotos && (
                <div className="p-4 md:p-5 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">Devoção a</div>
                  <div className="text-amber-950 text-lg md:text-xl font-bold">{selectedRace.devotos}</div>
                </div>
              )}
            </div>

            

            {/* Extra */}
            <div className="mb-8 grid grid-cols-1 gap-4">
              {selectedRace.extra && (
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 shadow-inner">
                  <div className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 flex items-center gap-3 tracking-wide border-b-2 border-amber-900/10 pb-2">
                    📜 Conteúdo Extra
                  </div>
                  <div className="text-amber-950/85 text-base md:text-lg leading-relaxed whitespace-pre-line font-medium text-left md:text-justify mt-4">
                    {selectedRace.extra}
                  </div>
                </div>
              )}
            </div>

            {/* IMAGEM (NO FINAL) */}
              {selectedRace.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/20">
                  <h3 className="font-display text-amber-950/50 text-xs md:text-sm uppercase tracking-widest mb-6 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/30 shadow-md bg-[rgb(var(--bg-card-rgb))] max-w-2xl mx-auto">
                    <img
                      src={selectedRace.image}
                      alt={selectedRace.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))]/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </section>
              )}

            {/* Fim do Modal - Decoração */}
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