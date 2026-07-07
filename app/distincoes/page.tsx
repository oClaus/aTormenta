"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { distinctions } from "@/data/distinctions";
import { Distinction } from "@/types/distinction";
import ThemeToggle from "@/components/ThemeToggle";

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function KeyGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="4.5" />
      <path d="M11.5 11.5l8 8M17 17l-2 2M19 15l-2 2" />
    </svg>
  );
}

function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 2l2.5 7H22l-6 4.5 2.3 7-6.3-4.6L5.7 21 8 13.5 2 9h7.5z" />
    </svg>
  );
}

function BoltGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M13 2L5 14h5l-1 8 9-12h-5l1-8z" />
    </svg>
  );
}

function NotesGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}

function MedalGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="15" r="6" />
      <path d="M8.5 3.5l1.5 5M15.5 3.5l-1.5 5M7 3.5h10" />
      <circle cx="12" cy="15" r="2.5" />
    </svg>
  );
}

// --- Formatação de Texto (Estilo Pergaminho Padronizado) ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-800 font-bold">$1</em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950/90">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-900/80 font-medium">$1</em>')
      .replace(/### (.*)/g, '<h3 class="font-display text-2xl font-bold text-red-800 mt-6 mb-3 border-b-2 border-amber-900/10 pb-2 tracking-wide">$1</h3>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-base italic text-amber-950/85 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r-xl font-medium shadow-sm">$1</blockquote>');
    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-4 last:mb-0 text-amber-950/85 text-base md:text-lg leading-relaxed font-serif font-medium" />
    );
  });
};

// --- Componente: Seção de Regras (Acordeão) ---
const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
      >
        <div className="flex items-center gap-3">
          <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
          <div className="text-left">
            <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
              Regras de Distinção
            </h2>
            <p className="text-sm text-amber-950/70 italic font-bold">
              Entenda como funcionam a admissão, marcas e poderes.
            </p>
          </div>
        </div>
        <span className={`text-red-800 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
        <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8 font-medium">
          
          {/* Introdução do Texto */}
          <section className="space-y-4">
            <p>
              Arton é um mundo de aventureiros que perseguem os mais diversos caminhos. Entretanto, há aqueles para os quais o trivial não é suficiente — não importa quanto poder venha disso. O sinistro e implacável Cavaleiro do Corvo. O orgulhoso e melancólico arqueiro de Lenórienn. São exemplos de aventureiros que desejam pertencer a algo maior. Eles buscam uma distinção.
            </p>
            <p>
              Distinções são um novo conjunto de regras para Tormenta20. São ligadas a algum elemento específico, como uma organização militar, um grupo de estudiosos, os adeptos de uma filosofia e assim por diante. Os bruxos da Tormenta, os mutagenistas e os médicos de Salistick são ótimos exemplos. Distinções também podem representar o resultado de eventos ou escolhas específicas na história de um personagem. Isso inclui, por exemplo, o chapéu-preto e o gigante furioso.
            </p>
            <p>
              Conquistar uma distinção transforma o personagem, aproxima-o de Arton — de suas organizações, ideologias, divindades... Mais do que cumprir requisitos mecânicos e receber bônus, obter uma distinção é parte da história do aventureiro.
            </p>
          </section>

          {/* Distinções em jogo */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Distinções em jogo</h3>
            <p className="mb-4">
              Em termos de regras, uma distinção é um conjunto de poderes exclusivos, disponíveis apenas para personagens que sejam admitidos entre seus membros. Cada distinção é formada por três elementos: admissão, marca da distinção e poderes da distinção. Algumas oferecem um benefício adicional para personagens que obtenham uma certa quantidade de poderes da distinção.
            </p>
            <p>
              O caminho de uma distinção é árduo — apenas aventureiros com certa bagagem conseguem dominar este tipo de conhecimento. Assim, embora qualquer personagem possa tentar realizar os passos necessários para cumprir os critérios de admissão de uma distinção, apenas aqueles de patamar veterano (ou seja, a partir do 5º nível) ou acima podem obter seus poderes.
            </p>
          </section>

          {/* Admissão */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Admissão</h3>
            <p className="mb-4">
              Admissão é o conjunto de tarefas e requisitos necessários para conquistar uma distinção. De forma geral, envolve ações dentro da história e não critérios puramente mecânicos. Assim, para se tornar um dracomante real é preciso, em jogo, ter contato com um Dragão-Real. A capacidade mecânica de lançar magias não basta.
            </p>
            <p className="mb-4">
              Uma admissão não acontece no passado do personagem. Começar o jogo com um personagem em nível avançado não dá direito a distinções automáticas. Da mesma forma, admissões nunca acontecem "fora de cena", nos intervalos entre as sessões. Ocorrem estritamente na mesa de jogo.
            </p>
            <p className="mb-4">
              Escolher e ingressar em uma distinção deve ser algo especial, um momento-chave na vida de cada personagem. Por isso, cada admissão é descrita de forma a permitir que o mestre a transforme em parte de sua história, como uma aventura para o grupo ou um interlúdio individual. O mestre tem a palavra final sobre como aplicar os critérios de admissão.
            </p>
            <p>
              Cumpridos os critérios de admissão, o candidato passa a fazer parte da distinção. Como isso ocorre varia, mas o personagem recebe sempre a marca da distinção correspondente e ganha acesso a seus poderes.
            </p>
          </section>

          {/* Marca da Distinção */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Marca da Distinção</h3>
            <p>
              Uma habilidade especial recebida automaticamente quando o personagem conquista a distinção.
            </p>
          </section>

          {/* Poderes de distinção */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Poderes de distinção</h3>
            <p className="mb-4">
              Uma lista de poderes exclusivos que podem ser escolhidos como poderes gerais e, assim como esses, podem possuir outros pré-requisitos mecânicos. Poderes de distinção seguem todas as regras para poderes.
            </p>
            <p>
              Muitas distinções têm poderes ou habilidades com efeitos que variam de acordo com o número de "poderes da distinção" que você possui. Quando isso acontece, refere-se apenas aos poderes da distinção específica que fornece esse poder ou habilidade. Mesmo que você tenha mais de uma distinção, esses efeitos nunca contam os poderes das outras. Algumas distinções possuem poderes que podem ser escolhidos mais de uma vez. A cada vez que o poder é escolhido, conta como um poder separado para efeitos baseados na quantidade de poderes da distinção que você possui.
            </p>
          </section>

          {/* Usando distinções */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Usando distinções</h3>
            <p className="mb-4">
              Além de oferecer novas opções para personagens, as distinções criam novas oportunidades narrativas para mestres e jogadores. Isso é o principal ao usar distinções em uma campanha: a história!
            </p>
            <p className="mb-4">
              A disponibilidade de cada distinção depende do tema da campanha e de como a história transcorre. Uma jornada ambientada em Halak-Tûr dificilmente oferecerá uma chance de visitar o Ninho do Corvo, tornando praticamente impossível conquistar a distinção Cavaleiro do Corvo. Por outro lado, os jogadores são encorajados a conversar com o mestre e apresentar seus objetivos de antemão.
            </p>
            <p>
              O que nos leva a outro ponto. Diferente de muitos outros recursos de regras, distinções não são garantidas. Uma distinção não é um direito do personagem, é algo a ser conquistado. E esse processo de conquista ocorre essencialmente através de ideias e ações dentro da narrativa. Uma distinção deve ser a recompensa por esforço, criatividade e construção da história.
            </p>
          </section>

          {/* Aplicando admissões */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Aplicando admissões</h3>
            <p className="mb-4">
              Os critérios de admissão são propositalmente descritos em termos narrativos, não exclusivamente sob a forma de requisitos mecânicos (como ter ou não determinada perícia ou poder). O mestre tem liberdade para aplicá-los da forma que melhor funcionar para seu grupo e campanha.
            </p>
            <p className="mb-4">
              <strong className="text-red-800 uppercase tracking-widest text-sm">Aventuras de admissão.</strong> Certas admissões podem ser resolvidas como uma aventura completa, ou parte de uma aventura. O navio que um capitão do Conclave Pirata deve obter, por exemplo, pode ser conquistado após uma luta contra uma tripulação purista que assolava a costa. Assim, ainda que o teste seja o objetivo de um personagem, o grupo todo poderá participar. Diversas distinções indicarão que há partes da admissão possíveis de serem realizadas pelo grupo todo. O objetivo é facilitar a inclusão desses requisitos sem que os outros jogadores fiquem de lado. Desse modo, todos podem colaborar com o objetivo de um de seus membros.
            </p>
            <p className="mb-4">
              <strong className="text-red-800 uppercase tracking-widest text-sm">Tempo entre aventuras e testes estendidos.</strong> Sempre que possível, as etapas de uma admissão devem ser resolvidas como parte de uma aventura. Entretanto, em alguns casos, a tarefa pode ser exclusiva do candidato, ou pode ser algo em que só alguém com conhecimento apropriado poderia ajudar (como construir a máquina voadora de um aeronauta goblin). Nesses casos, usar uma ação de tempo entre aventuras pode funcionar, mas com moderação. Não resolva toda a admissão usando essa ferramenta. Guarde esse recurso para pequenas partes da admissão ou tarefas bastante objetivas e específicas.
            </p>
            <p className="mb-4">
              Testes estendidos podem ser usados em casos semelhantes, como para resolver desafios propostos por um mentor ou examinador, tal como um teste estendido de Misticismo para demonstrar domínio sobre magia. Funcionam muito bem para representar tarefas complexas dentro de uma etapa maior da admissão.
            </p>
            <p className="mb-4">
              <strong className="text-red-800 uppercase tracking-widest text-sm">História e ideias.</strong> Como já dissemos, o processo de admissão deve ser resolvido dentro da história. Isso inclui a boa e velha interpretação. Nenhuma das mecânicas anteriores permitirá encontrar um mentor automaticamente, por exemplo, a menos que o personagem esteja empenhado nessa tarefa. É preciso visitar locais ligados à distinção, investigar boatos... Como principal interessado em conquistar uma distinção, o jogador é o responsável por dedicar todo o esforço necessário.
            </p>
            <p>
              <strong className="text-red-800 uppercase tracking-widest text-sm">Mentores de distinções.</strong> Algumas distinções exigem a orientação de um mentor. Alguém que conhece os mais variados aspectos da distinção e, sobretudo, que tem vontade, tempo, disposição e paciência para ensinar outras pessoas. Em termos de regras, um mentor deve ser um NPC de pelo menos patamar veterano e possuir no mínimo três poderes da distinção. Distinções que representam organizações formais podem possuir critérios adicionais para que alguém seja considerado um mentor. Em todos os casos, o mestre tem a palavra final.
            </p>
          </section>

          {/* E agora? */}
          <section className="border-t-2 border-amber-900/20 pt-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">E agora?</h3>
            <p className="mb-4">
              Conquistar uma distinção sempre será um marco na história do personagem. Em alguns casos, isso será acompanhado de uma cerimônia formal (como a iniciação de um Cavaleiro do Corvo), enquanto em outros será simplesmente um sentimento de realização profunda. Por fim, algumas distinções promovem verdadeiras transformações físicas no candidato, como o processo de se tornar um gigante furioso.
            </p>
            <p className="mb-4">
              Tornar-se um Cavaleiro do Corvo, por exemplo, significa aceitar o estigma de fora da lei ou mesmo vilão, dedicar sua vida ao combate à Tormenta e perder grande parte de sua individualidade. Mesmo assim, as mudanças promovidas por uma distinção não são obrigações cumpridas a contragosto, mas escolhas conscientes do personagem.
            </p>
            <p>
              Em suma, conquistar uma distinção não significa apenas ter acesso a um novo conjunto de poderes. Ao receber uma distinção, o personagem se torna algo diferente e especial.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

// --- Modal de Detalhes da Distinção ---
const DistinctionModal = ({ distinction, onClose }: { distinction: Distinction; onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 overflow-y-auto bg-[rgb(var(--void-rgb))]/80 backdrop-blur-sm flex justify-center items-start md:items-center p-4"
    >
      <div className="bg-[rgb(var(--bg-inset-rgb))] rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative border-4 border-double border-amber-900/40 font-serif my-8 md:my-0 custom-scrollbar">

        {/* Header do Modal */}
        <div className="sticky top-0 z-20 p-6 bg-[rgb(var(--bg-card-rgb))]/95 border-b-2 border-amber-900/20 flex justify-between items-center backdrop-blur shadow-sm">
          <div>
            <h2 className="font-display text-3xl font-bold text-red-800 tracking-wide uppercase">
              {distinction.name}
            </h2>
            <p className="font-display text-amber-950/70 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
              Origem: {distinction.origin}
            </p>
          </div>
          <button onClick={onClose} className="text-amber-950/40 hover:text-red-800 transition-colors text-4xl leading-none pb-2" title="Fechar">
            &times;
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 md:p-10 flex flex-col gap-10 text-amber-950 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.05)_100%)]">

          {/* Imagem */}
          {distinction.image && (
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md border-2 border-amber-900/20 bg-[rgb(var(--portrait-rgb))]">
              <Image
                src={distinction.image}
                alt={distinction.name}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-700 mix-blend-multiply p-4"
              />
            </div>
          )}

          {/* Introdução */}
          <div className="bg-[rgb(var(--bg-card-rgb))]/50 p-8 rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800">
            <h2 className="font-display text-2xl font-bold text-amber-950 mb-4 border-b-2 border-amber-900/10 pb-2 uppercase tracking-widest flex items-center gap-2">
              <PageGlyph className="text-red-800/70" /> Introdução
            </h2>
            {formatTextWithBreaks(distinction.introduction)}
          </div>

          {/* Admissão */}
          <div>
            <h2 className="font-display text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide flex items-center gap-3">
              <KeyGlyph className="text-red-800/60" /> Admissão
            </h2>
            {formatTextWithBreaks(distinction.admission)}
          </div>

          {/* Marca da Distinção */}
          {distinction.mark && (
            <div className="bg-[rgb(var(--bg-card-rgb))]/50 p-8 rounded-xl border border-amber-900/20 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                <StarGlyph className="text-red-800/60" /> Marca da Distinção
              </h2>
              {formatTextWithBreaks(distinction.mark)}
            </div>
          )}

          {/* Poderes da Distinção */}
          <div>
            <h2 className="font-display text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 tracking-wide flex items-center gap-3">
              <BoltGlyph className="text-red-800/60" /> Poderes da Distinção
            </h2>
            <div className="space-y-6">
              {distinction.powers.map((power, index) => (
                <div key={index} className="bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/10 p-6 rounded-xl hover:border-red-800/30 transition-colors shadow-sm">
                  <h3 className="font-display text-xl font-bold text-amber-950 mb-4 border-b-2 border-amber-900/10 pb-2">
                    {power.name}
                  </h3>
                  {formatTextWithBreaks(power.description)}
                </div>
              ))}
            </div>
          </div>

          {/* Extras */}
          {distinction.extras && (
            <div className="mt-8 pt-8 border-t-4 border-double border-amber-900/20">
              <div className="bg-[rgb(var(--bg-card-rgb))] p-8 rounded-xl border-2 border-amber-900/20 shadow-md">
                <h2 className="font-display text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                  <NotesGlyph className="text-red-800/60" /> Notas & Extras
                </h2>
                {formatTextWithBreaks(distinction.extras)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Card de Distinção ---
const DistinctionCard = ({ distinction, onClick }: { distinction: Distinction; onClick: (d: Distinction) => void }) => {
  return (
    <button onClick={() => onClick(distinction)} className="w-full h-full group text-left outline-none mt-6">
      <div className="card-grain relative h-full bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 rounded-xl overflow-hidden shadow-sm hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col">

        <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

        {/* Imagem */}
        <div className="relative w-full h-56 bg-[rgb(var(--portrait-rgb))] border-b border-amber-900/15 overflow-hidden flex items-center justify-center rounded-t-xl">
          {distinction.image ? (
            <Image
              src={distinction.image}
              alt={distinction.name}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply opacity-90 p-4"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[rgb(60,55,50)]/35">
              <MedalGlyph />
              <span className="font-display text-xs font-bold uppercase tracking-widest mt-2 opacity-60">Sem Ilustração</span>
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex-1 flex flex-col bg-[rgb(var(--bg-card-rgb))] rounded-b-xl">
          <div className="mb-4">
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 group-hover:text-red-700 transition-colors tracking-wide">
              {distinction.name}
            </h3>
          </div>
          <div className="mt-auto pt-4 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors text-right">
            <span className="hex-badge font-display inline-block px-2 py-1 bg-[rgb(var(--bg-inset-rgb))] border border-[rgb(var(--accent-rgb))]/25 text-[10px] uppercase tracking-widest text-amber-950/70 font-bold shadow-sm">
              {distinction.origin}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

// --- Página Principal ---
export default function DistincoesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistinction, setSelectedDistinction] = useState<Distinction | null>(null);

  const filteredDistinctions = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    let result = distinctions;
    if (lowerCaseSearch) {
      result = distinctions.filter(distinction =>
        distinction.name.toLowerCase().includes(lowerCaseSearch) ||
        distinction.origin.toLowerCase().includes(lowerCaseSearch) ||
        distinction.introduction.toLowerCase().includes(lowerCaseSearch) ||
        distinction.admission.toLowerCase().includes(lowerCaseSearch) ||
        distinction.mark.toLowerCase().includes(lowerCaseSearch) ||
        distinction.powers.some(power =>
          power.name.toLowerCase().includes(lowerCaseSearch) ||
          power.description.toLowerCase().includes(lowerCaseSearch)
        ) ||
        (distinction.extras && distinction.extras.toLowerCase().includes(lowerCaseSearch))
      );
    }
    return [...result].sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">Início</Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Distinções</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Distinções
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
          <p className="text-amber-950/85 text-lg font-serif font-medium leading-relaxed">
            Poderes e provações que moldam os heróis de Arton, separando os aventureiros comuns das verdadeiras lendas.
          </p>
        </div>

        <RulesSection />

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Distinção
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome, origem ou conteúdo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all font-serif shadow-sm"
            />
            {searchTerm ? (
              <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg" title="Limpar busca">
                ✕
              </button>
            ) : (
              <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
            )}
          </div>
          {searchTerm && (
            <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
              Exibindo {filteredDistinctions.length} resultado(s) para "{searchTerm}".
            </p>
          )}
        </div>

        {/* Grid */}
        {filteredDistinctions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 items-stretch mb-16">
            {filteredDistinctions.map((d) => (
              <DistinctionCard key={d.id} distinction={d} onClick={setSelectedDistinction} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 font-serif flex flex-col items-center justify-center mt-8 mb-16 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma distinção encontrada com o termo de busca aplicado.
            </p>
          </div>
        )}
      </main>

      {selectedDistinction && (
        <DistinctionModal distinction={selectedDistinction} onClose={() => setSelectedDistinction(null)} />
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}