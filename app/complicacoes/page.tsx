"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { complications } from "@/data/complicacoes";
import { Condition } from "@/types/condition";
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

// --- Formatação de Texto (Estilo Pergaminho Padronizado) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;
  const lines = text.split('\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito forte / Itálico
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      // Negrito padrão
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950/90 font-serif">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>')
      // Listas
      .replace(/- (.*?)\./g, '<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><span class="font-medium">$1.</span></div>')
      // Citações
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm md:text-base italic text-amber-950/85 bg-[rgb(var(--bg-inset-rgb))]/60 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>')
      // Destaque para o símbolo de Complicação Comportamental (†)
      .replace(/†/g, '<span class="text-red-800 font-bold text-xl align-middle" title="Complicação Comportamental">†</span>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-3 last:mb-0 text-amber-950/85 text-sm md:text-base leading-relaxed font-serif font-medium" />
    );
  });
};

// --- Componente: Seção de Regras (Acordeão Padronizado) ---
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
              Regras e Definições de Complicações
            </h2>
            <p className="text-sm text-amber-950/70 italic font-bold">
              Clique para expandir como funcionam as restrições, penalidades e ganhos de poderes.
            </p>
          </div>
        </div>
        <span className={`text-red-800 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
        <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-6 font-medium">

          <p>
            Complicações são restrições e penalidades com as quais seu personagem precisa lidar. Quando você cria seu personagem, pode escolher uma complicação para ele (e apenas uma). Se fizer isso, recebe um poder geral extra. Você é livre para escolher o poder, mas deve preencher seus pré-requisitos.
          </p>
          <p>
            Note que você sempre pode criar adversidades pessoais para seu personagem. Nada o impede de jogar com um bárbaro impulsivo ou um nobre pedante, por exemplo. No entanto, complicações oferecem efeitos em regras para representar isso. Traduzir tudo isso em regras tem duas vantagens: primeiro, garante que essa característica “apareça” nas aventuras e tenha peso na história. Segundo, permite que você tenha um poder a mais sem desequilibrar o jogo, o que por sua vez o ajuda a personalizar ainda mais seu personagem.
          </p>
          <p>
            Em termos de regras, complicações contam como habilidades. Se uma complicação impõe uma condição, você a sofre mesmo que seja imune a ela.
          </p>

          <div className="border-t-2 border-amber-900/20 pt-6 mt-2">
            <h3 className="font-display text-2xl font-bold text-red-800 mb-3 tracking-wide">Tipos de complicações</h3>
            <p>
                Assim como poderes, complicações são divididas entre gerais e específicas de cada classe. Sua complicação pode ser escolhida entre a lista geral ou entre a lista de sua classe do 1º nível. Se você tiver uma complicação de classe, só recebe e pode usar o poder proveniente dela se pelo menos metade de seus níveis totais forem nessa classe. Por exemplo, se um arcanista 2/guerreiro 2 que tenha uma complicação de arcanista subir de nível de guerreiro, não poderá usar seu poder geral proveniente da complicação.
            </p>
          </div>

          <div className="border-t-2 border-amber-900/20 pt-6 mt-2">
            <h3 className="font-display text-2xl font-bold text-red-800 mb-3 tracking-wide flex items-center gap-2">
                Complicações comportamentais <span className="text-red-800 text-3xl">†</span>
            </h3>
            <p>
                Certas complicações restringem as ações de um herói, seja por traduzirem uma limitação de sua personalidade, seja por representarem um código ou voto que ele decidiu seguir. Essas complicações são marcadas pelo símbolo <strong className="text-red-800">†</strong>. De forma similar aos Códigos de Honra de certas classes (como cavaleiro e paladino), esse símbolo significa que, se você violar a complicação, perde todos os seus PM e só pode recuperá-los a partir do próximo dia.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Componente: Card de Complicação ---
const ComplicationCard = ({ item }: { item: Condition }) => {
  // Verifica se é comportamental procurando o símbolo na descrição
  const isBehavioral = item.description.includes("†");

  return (
    <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col h-full w-full">

      <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Cabeçalho do Card */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="font-display text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors break-words tracking-wide flex items-center gap-2">
          {item.name}
          {isBehavioral && <span className="text-red-800 text-2xl leading-none -mt-1" title="Complicação Comportamental">†</span>}
        </h3>
      </div>

      {/* Descrição */}
      <div className="flex-grow font-serif">
        {formatTextWithBreaks(item.description)}
      </div>

      {/* Rodapé */}
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 flex justify-between items-center w-full">
        <div>
          {item.efeito && (
            <span className="font-display shrink-0 text-[10px] md:text-xs font-bold text-red-800 bg-[rgb(var(--bg-inset-rgb))] px-2 py-1 rounded border border-amber-900/20 uppercase tracking-widest shadow-sm">
              {item.efeito}
            </span>
          )}
        </div>
        <span className="text-xs text-amber-900/60 italic flex items-center gap-1 font-medium">
          <span className="text-red-800">◆</span>
          <span className="font-display text-amber-950 font-bold">{item.origin}</span>
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function ComplicacoesPage() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const term = search.toLowerCase();

    return complications.filter(item => {
      return item.name.toLowerCase().includes(term) ||
             item.description.toLowerCase().includes(term) ||
             (item.efeito && item.efeito.toLowerCase().includes(term));
    })
    .sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
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
              <span className="text-red-800 whitespace-nowrap">Complicações</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Complicações
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
          <p className="text-amber-950/85 font-medium text-lg leading-relaxed">
            Fraquezas, juramentos e peculiaridades que moldam as imperfeições dos heróis de Arton.
          </p>
        </div>

        {/* Acordeão de Regras */}
        <RulesSection />

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <div className="flex flex-col">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Complicação
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Buscar por nome, classe ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                  title="Limpar busca"
                >
                  ✕
                </button>
              ) : (
                <SearchGlyph className="absolute right-4 text-amber-900/40 pointer-events-none" />
              )}
            </div>
            {search && (
              <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                Exibindo {filteredItems.length} resultado(s) para "{search}".
              </p>
            )}
          </div>
        </div>

        {/* Grid de Complicações */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {filteredItems.map((item) => (
              <ComplicationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma complicação encontrada com o termo aplicado.
            </p>
          </div>
        )}

      </main>

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