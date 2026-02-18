"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { distinctions } from "@/data/distinctions";
import { Distinction } from "@/types/distinction";

// Função auxiliar para formatar o texto com quebras de linha e formatação básica
// ATUALIZADO: Cores alteradas para o tema Pergaminho (Amber/Red)
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');

  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-800 font-bold">$1</em>') // Negrito e Itálico (Agora Red-800)
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950">$1</strong>') // Negrito (Agora Amber-950)
      .replace(/\*(.*?)\*/g, '<em class="text-amber-900/80">$1</em>') // Itálico (Agora Amber-900/80)
      .replace(/### (.*)/g, '<h3 class="text-2xl font-bold text-amber-800 mt-6 mb-3 font-serif border-b border-amber-900/20 pb-1">$1</h3>') // Subtítulos
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-amber-700 pl-4 py-2 my-4 text-sm italic text-amber-900/80 bg-[#e6d5b8]/50 rounded-r">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-3 last:mb-0 text-amber-900/90 leading-relaxed font-serif" />
    );
  });
};

// --- Componente: Seção de Regras ---
const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded hover:border-amber-700/80 transition-all group shadow-sm hover:shadow-[0_4px_20px_rgba(69,26,3,0.1)]"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-70">📜</span>
          <div className="text-left">
            <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors">
              Regras de Distinção
            </h2>
            <p className="text-sm text-amber-900/60 font-serif italic font-bold">
              Entenda como funcionam a admissão, marcas e poderes.
            </p>
          </div>
        </div>
        <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 bg-[#fbf5e6]/80 border-x-2 border-b-2 border-amber-900/20 rounded-b text-amber-900/90 font-serif leading-relaxed space-y-6 text-lg">
          
          {/* Introdução do Texto */}
          <div className="space-y-4">
            <p>
              Arton é um mundo de aventureiros que perseguem os mais diversos caminhos. Entretanto, há aqueles para os quais o trivial não é suficiente — não importa quanto poder venha disso. O sinistro e implacável Cavaleiro do Corvo. O orgulhoso e melancólico arqueiro de Lenórienn. São exemplos de aventureiros que desejam pertencer a algo maior. Eles buscam uma distinção.
            </p>
            <p>
              Distinções são um novo conjunto de regras para Tormenta20. São ligadas a algum elemento específico, como uma organização militar, um grupo de estudiosos, os adeptos de uma filosofia e assim por diante. Os bruxos da Tormenta, os mutagenistas e os médicos de Salistick são ótimos exemplos. Distinções também podem representar o resultado de eventos ou escolhas específicas na história de um personagem. Isso inclui, por exemplo, o chapéu-preto e o gigante furioso.
            </p>
            <p>
              Conquistar uma distinção transforma o personagem, aproxima-o de Arton — de suas organizações, ideologias, divindades... Mais do que cumprir requisitos mecânicos e receber bônus, obter uma distinção é parte da história do aventureiro.
            </p>
          </div>

          {/* Distinções em jogo */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Distinções em jogo</h3>
            <p className="mb-4">
              Em termos de regras, uma distinção é um conjunto de poderes exclusivos, disponíveis apenas para personagens que sejam admitidos entre seus membros. Cada distinção é formada por três elementos: admissão, marca da distinção e poderes da distinção. Algumas oferecem um benefício adicional para personagens que obtenham uma certa quantidade de poderes da distinção.
            </p>
            <p>
              O caminho de uma distinção é árduo — apenas aventureiros com certa bagagem conseguem dominar este tipo de conhecimento. Assim, embora qualquer personagem possa tentar realizar os passos necessários para cumprir os critérios de admissão de uma distinção, apenas aqueles de patamar veterano (ou seja, a partir do 5º nível) ou acima podem obter seus poderes.
            </p>
          </div>

          {/* Admissão */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Admissão</h3>
            <p className="mb-4">
              Admissão é o conjunto de tarefas e requisitos necessários para conquistar uma distinção. De forma geral, envolve ações dentro da história e não critérios puramente mecânicos. Assim, para se tornar um dracomante real é preciso, em jogo, ter contato com um Dragão-Real. A capacidade mecânica de lançar magias não basta.
            </p>
            <p className="mb-4">
              Uma admissão não acontece no passado do personagem. Começar o jogo com um personagem em nível avançado não dá direito a distinções automáticas. Da mesma forma, admissões nunca acontecem “fora de cena”, nos intervalos entre as sessões. Ocorrem estritamente na mesa de jogo.
            </p>
            <p className="mb-4">
              Escolher e ingressar em uma distinção deve ser algo especial, um momento-chave na vida de cada personagem. Por isso, cada admissão é descrita de forma a permitir que o mestre a transforme em parte de sua história, como uma aventura para o grupo ou um interlúdio individual. O mestre tem a palavra final sobre como aplicar os critérios de admissão.
            </p>
            <p>
              Cumpridos os critérios de admissão, o candidato passa a fazer parte da distinção. Como isso ocorre varia, mas o personagem recebe sempre a marca da distinção correspondente e ganha acesso a seus poderes.
            </p>
          </div>

          {/* Marca da Distinção */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Marca da Distinção</h3>
            <p>
              Uma habilidade especial recebida automaticamente quando o personagem conquista a distinção.
            </p>
          </div>

          {/* Poderes de distinção */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Poderes de distinção</h3>
            <p className="mb-4">
              Uma lista de poderes exclusivos que podem ser escolhidos como poderes gerais e, assim como esses, podem possuir outros pré-requisitos mecânicos. Poderes de distinção seguem todas as regras para poderes.
            </p>
            <p>
              Muitas distinções têm poderes ou habilidades com efeitos que variam de acordo com o número de “poderes da distinção” que você possui. Quando isso acontece, refere-se apenas aos poderes da distinção específica que fornece esse poder ou habilidade. Mesmo que você tenha mais de uma distinção, esses efeitos nunca contam os poderes das outras. Algumas distinções possuem poderes que podem ser escolhidos mais de uma vez. A cada vez que o poder é escolhido, conta como um poder separado para efeitos baseados na quantidade de poderes da distinção que você possui.
            </p>
          </div>

          {/* Usando distinções */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Usando distinções</h3>
            <p className="mb-4">
              Além de oferecer novas opções para personagens, as distinções criam novas oportunidades narrativas para mestres e jogadores. Isso é o principal ao usar distinções em uma campanha: a história!
            </p>
            <p className="mb-4">
              A disponibilidade de cada distinção depende do tema da campanha e de como a história transcorre. Uma jornada ambientada em Halak-Tûr dificilmente oferecerá uma chance de visitar o Ninho do Corvo, tornando praticamente impossível conquistar a distinção Cavaleiro do Corvo. Por outro lado, os jogadores são encorajados a conversar com o mestre e apresentar seus objetivos de antemão.
            </p>
            <p>
              O que nos leva a outro ponto. Diferente de muitos outros recursos de regras, distinções não são garantidas. Uma distinção não é um direito do personagem, é algo a ser conquistado. E esse processo de conquista ocorre essencialmente através de ideias e ações dentro da narrativa. Uma distinção deve ser a recompensa por esforço, criatividade e construção da história.
            </p>
          </div>

          {/* Aplicando admissões */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">Aplicando admissões</h3>
            <p className="mb-4">
              Os critérios de admissão são propositalmente descritos em termos narrativos, não exclusivamente sob a forma de requisitos mecânicos (como ter ou não determinada perícia ou poder). O mestre tem liberdade para aplicá-los da forma que melhor funcionar para seu grupo e campanha.
            </p>
            <p className="mb-4">
              <strong className="text-amber-950">Aventuras de admissão.</strong> Certas admissões podem ser resolvidas como uma aventura completa, ou parte de uma aventura. O navio que um capitão do Conclave Pirata deve obter, por exemplo, pode ser conquistado após uma luta contra uma tripulação purista que assolava a costa. Assim, ainda que o teste seja o objetivo de um personagem, o grupo todo poderá participar. Diversas distinções indicarão que há partes da admissão possíveis de serem realizadas pelo grupo todo. O objetivo é facilitar a inclusão desses requisitos sem que os outros jogadores fiquem de lado. Desse modo, todos podem colaborar com o objetivo de um de seus membros.
            </p>
            <p className="mb-4">
              <strong className="text-amber-950">Tempo entre aventuras e testes estendidos.</strong> Sempre que possível, as etapas de uma admissão devem ser resolvidas como parte de uma aventura. Entretanto, em alguns casos, a tarefa pode ser exclusiva do candidato, ou pode ser algo em que só alguém com conhecimento apropriado poderia ajudar (como construir a máquina voadora de um aeronauta goblin). Nesses casos, usar uma ação de tempo entre aventuras pode funcionar, mas com moderação. Não resolva toda a admissão usando essa ferramenta. Guarde esse recurso para pequenas partes da admissão ou tarefas bastante objetivas e específicas.
            </p>
            <p className="mb-4">
              Testes estendidos podem ser usados em casos semelhantes, como para resolver desafios propostos por um mentor ou examinador, tal como um teste estendido de Misticismo para demonstrar domínio sobre magia. Funcionam muito bem para representar tarefas complexas dentro de uma etapa maior da admissão.
            </p>
            <p className="mb-4">
              <strong className="text-amber-950">História e ideias.</strong> Como já dissemos, o processo de admissão deve ser resolvido dentro da história. Isso inclui a boa e velha interpretação. Nenhuma das mecânicas anteriores permitirá encontrar um mentor automaticamente, por exemplo, a menos que o personagem esteja empenhado nessa tarefa. É preciso visitar locais ligados à distinção, investigar boatos... Como principal interessado em conquistar uma distinção, o jogador é o responsável por dedicar todo o esforço necessário.
            </p>
            <p>
              <strong className="text-amber-950">Mentores de distinções.</strong> Algumas distinções exigem a orientação de um mentor. Alguém que conhece os mais variados aspectos da distinção e, sobretudo, que tem vontade, tempo, disposição e paciência para ensinar outras pessoas. Em termos de regras, um mentor deve ser um NPC de pelo menos patamar veterano e possuir no mínimo três poderes da distinção. Distinções que representam organizações formais podem possuir critérios adicionais para que alguém seja considerado um mentor. Em todos os casos, o mestre tem a palavra final.
            </p>
          </div>

          {/* E agora? */}
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mt-8 mb-4 border-b border-amber-900/20 pb-2">E agora?</h3>
            <p className="mb-4">
              Conquistar uma distinção sempre será um marco na história do personagem. Em alguns casos, isso será acompanhado de uma cerimônia formal (como a iniciação de um Cavaleiro do Corvo), enquanto em outros será simplesmente um sentimento de realização profunda. Por fim, algumas distinções promovem verdadeiras transformações físicas no candidato, como o processo de se tornar um gigante furioso.
            </p>
            <p className="mb-4">
              Tornar-se um Cavaleiro do Corvo, por exemplo, significa aceitar o estigma de fora da lei ou mesmo vilão, dedicar sua vida ao combate à Tormenta e perder grande parte de sua individualidade. Mesmo assim, as mudanças promovidas por uma distinção não são obrigações cumpridas a contragosto, mas escolhas conscientes do personagem.
            </p>
            <p>
              Em suma, conquistar uma distinção não significa apenas ter acesso a um novo conjunto de poderes. Ao receber uma distinção, o personagem se torna algo diferente e especial.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Componente Modal de Detalhes da Distinção ---

const DistinctionModal = ({ distinction, onClose }: { distinction: Distinction, onClose: () => void }) => {
  if (!distinction) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
        onClick={handleBackdropClick}
        // ATUALIZADO: Backdrop escuro marrom/café
        className="fixed inset-0 z-50 overflow-y-auto bg-[#2a1810]/80 backdrop-blur-sm flex justify-center items-start md:items-center p-4 animate-in fade-in duration-200"
    >
      {/* ATUALIZADO: Container com borda dupla, noise, fundo bege */}
      <div className="bg-[#f2e8d5] rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] w-full max-w-6xl max-h-[90vh] overflow-y-auto relative border-4 border-double border-amber-900/40 font-serif bg-[url('/noise.png')] my-8 md:my-0 custom-scrollbar">
        
        {/* Header do Modal */}
        <div className="sticky top-0 z-10 p-6 bg-[#e6d5b8]/95 border-b border-amber-900/20 flex justify-between items-center backdrop-blur shadow-sm">
          <div>
              {/* Gradient Title Amber/Red */}
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 drop-shadow-sm uppercase tracking-wide">
                {distinction.name}
              </h2>
              <p className="text-amber-900/60 text-sm font-bold uppercase tracking-widest mt-1">
                {distinction.origin}
              </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-amber-900/60 hover:text-red-800 transition-colors text-4xl leading-none pb-2"
          >
            &times;
          </button>
        </div>

        {/* Conteúdo da Distinção - Layout de Coluna Única */}
        <div className="p-8 flex flex-col gap-10 text-amber-950">
          
          <div className="space-y-10">
            {/* Imagem da Distinção no MODAL */}
            {distinction.image && (
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-amber-900/30 bg-[#f0e6d2]">
                <Image 
                  src={distinction.image} 
                  alt={distinction.name} 
                  layout="fill" 
                  objectFit="contain" 
                  // Adicionado mix-blend e sepia para parecer impresso
                  className="transition-transform duration-700 mix-blend-multiply filter sepia-[0.3]"
                />
              </div>
            )}

            {/* Introdução */}
            <div className="bg-[#fffaf0] p-6 rounded border border-amber-900/20 shadow-inner">
              <h2 className="text-2xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2 uppercase tracking-wide flex items-center gap-2">
                <span>📜</span> Introdução
              </h2>
              {formatTextWithBreaks(distinction.introduction)}
            </div>

            {/* Admissão */}
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2 uppercase tracking-wide flex items-center gap-2">
                <span>🗝️</span> Admissão
              </h2>
              {formatTextWithBreaks(distinction.admission)}
            </div>

            {/* Marca da Distinção */}
            {distinction.mark && (
                <div className="bg-[#e6d5b8]/40 p-6 rounded border border-amber-900/20">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2 uppercase tracking-wide flex items-center gap-2">
                    <span>✧</span> Marca da Distinção
                </h2>
                {formatTextWithBreaks(distinction.mark)}
                </div>
            )}

            {/* Poderes da Distinção */}
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 uppercase tracking-wide flex items-center gap-2">
                <span>⚡</span> Poderes da Distinção
              </h2>
              <div className="space-y-6">
                {distinction.powers.map((power, index) => (
                  <div key={index} className="bg-[#fbf5e6] border border-amber-900/20 p-6 rounded hover:border-amber-700/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-red-800 mb-3 border-b border-amber-900/10 pb-2">
                        {power.name}
                    </h3>
                    {formatTextWithBreaks(power.description)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seção de Extras (Final da página) */}
          {distinction.extras && (
            <div className="mt-8 pt-8 border-t-2 border-amber-900/10">
                <div className="bg-[#d6cbb5] p-8 rounded-xl border border-amber-900/20 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-amber-900/5 pointer-events-none" aria-hidden="true"></div>
                    <h2 className="text-2xl font-bold text-amber-900 mb-6 border-b border-amber-900/10 pb-2 uppercase tracking-wide relative z-10 flex items-center gap-2">
                        <span>📝</span> Notas & Extras
                    </h2>
                    <div className="text-amber-900/90 text-sm leading-relaxed relative z-10">
                        {formatTextWithBreaks(distinction.extras)}
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Componente Auxiliar: Card de Distinção ---

const DistinctionCard = ({ distinction, onClick }: { distinction: Distinction, onClick: (distinction: Distinction) => void }) => {
  return (
    <button onClick={() => onClick(distinction)} className="w-full h-full group text-left">
      <div className="h-full bg-[#e8dac1] border border-amber-900/30 rounded overflow-hidden shadow-md hover:border-amber-700/80 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
        
        {/* MODIFICADO: Imagem com fundo bege e efeito sépia */}
        <div className="relative w-full h-48 bg-[#f0e6d2] border-b border-amber-900/10 overflow-hidden">
            {distinction.image ? (
            <Image 
                src={distinction.image} 
                alt={distinction.name} 
                layout="fill" 
                objectFit="contain" 
                className="transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply filter sepia-[0.3] opacity-90 p-2"
            />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl text-amber-900/20 bg-[#f0e6d2]">
                    🎖️
                </div>
            )}
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex-1 flex flex-col bg-[#e8dac1]">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors font-serif">
                {distinction.name}
            </h3>
          </div>
          
          <div className="mt-auto pt-3 border-t border-amber-900/10">
            <span className="inline-block px-2 py-1 rounded bg-[#f5e6d0] border border-amber-900/10 text-[10px] uppercase tracking-widest text-amber-900/60 font-bold group-hover:text-amber-800 group-hover:border-amber-900/30 transition-colors">
               {distinction.origin}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

// --- Página Principal de Distinções ---

export default function DistincoesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistinction, setSelectedDistinction] = useState<Distinction | null>(null);

  const filteredDistinctions = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Define a lista base: ou todas as distinções ou as filtradas
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

    // 2. Retorna uma cópia ordenada alfabeticamente pelo nome
    return [...result].sort((a, b) => a.name.localeCompare(b.name));

  }, [searchTerm]);

  return (
    // ATUALIZADO: Tema global bege/âmbar
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header - Estilo Exato da Página de Classes */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Distinções</span>
            </div>
        </div>
      </header>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        <div className="mb-12 p-8 bg-[#e8dac1]/50 rounded border border-amber-900/20 w-full shadow-sm">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-red-800 to-amber-950 mb-6 drop-shadow-sm">
            Distinções
            </h1>
            <p className="text-amber-900/80 text-lg font-serif italic font-medium">
            Poderes e provações que moldam os heróis de Arton, separando os aventureiros comuns das verdadeiras lendas.
            </p>
        </div>

        <RulesSection />

        <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Distinção
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, origem ou conteúdo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* MODIFICADO: Grid de Distinções com máx 5 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch mb-16">
          {filteredDistinctions.map((distinction) => (
            <DistinctionCard key={distinction.id} distinction={distinction} onClick={setSelectedDistinction} />
          ))}
        </div>

        {filteredDistinctions.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif mt-8 bg-[#e8dac1]/50">
            <p className="text-lg">Nenhuma distinção encontrada com o termo de busca aplicado.</p>
            </div>
        )}
      </div>

      {selectedDistinction && (
        <DistinctionModal distinction={selectedDistinction} onClose={() => setSelectedDistinction(null)} />
      )}

      <footer className="mt-20 p-6 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p className="mb-1">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}