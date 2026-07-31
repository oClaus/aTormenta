"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { regreiroQAs } from "@/data/regreiro";
import { RegreiroQA, formatMagazine } from "@/types/regreiro";
import ThemeToggle from "@/components/ThemeToggle";

// --- Ícones ---

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

function ScalesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3v17" />
      <path d="M6 7h12" />
      <path d="M6 7l-3.2 6.2a3.2 3.2 0 0 0 6.4 0L6 7z" />
      <path d="M18 7l-3.2 6.2a3.2 3.2 0 0 0 6.4 0L18 7z" />
      <path d="M8 20h8" />
      <circle cx="12" cy="4.4" r="1.3" fill="rgb(var(--accent-rgb))" stroke="none" />
    </svg>
  );
}

function GavelGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M14 4l6 6" />
      <path d="M9.5 8.5l6 6" />
      <path d="M4 21l7-7" />
      <path d="M11.5 4.5l3.5 3.5" />
      <path d="M4.5 15l4.5 4.5" />
      <path d="M2 21h10" />
    </svg>
  );
}

// --- Formatação de texto (mesma convenção usada nas páginas de Perigos/Ameaças) ---

const formatTextWithBreaks = (text: string) => {
  if (!text) return null;

  const lines = text.split(/\r\n|\n|\\n/);

  return lines.map((line, index) => {
    if (line.trim() === "") {
      return <div key={index} className="h-4" />;
    }

    let formattedLine = line;

    if (formattedLine.startsWith("> ")) {
      formattedLine = `<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-base italic text-amber-950/85 bg-[rgb(var(--bg-inset-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">${formattedLine.substring(2)}</blockquote>`;
    } else if (formattedLine.startsWith("- ")) {
      formattedLine = `<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><div class="flex-1">${formattedLine.substring(2)}</div></div>`;
    }

    formattedLine = formattedLine
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>');

    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: formattedLine }}
        className="mb-2 last:mb-0 text-base md:text-lg leading-relaxed text-amber-950/85 font-serif font-medium"
      />
    );
  });
};

// Prévia em texto puro pro card da grade (sem markdown/quebras) — só pra caber no card.
function getPreviewText(text: string, maxLength = 170): string {
  const plain = text
    .replace(/\\n|\r\n|\n/g, " ")
    .replace(/^>\s*/gm, "")
    .replace(/^-\s*/gm, "")
    .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).trim() + "…";
}

// Busca sem acento e sem exigir o texto exato
function normalize(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// --- Card da Grade ---
// Mostra a pergunta (prévia). Clicar no card abre o modal com pergunta+resposta completas.
// O ícone da balança revela a resposta ali mesmo, sem abrir o modal.
// "Revelar Todas" (na busca) faz isso em todos os cards de uma vez.

const QACard = ({
  item,
  revealAll,
  onOpen,
}: {
  item: RegreiroQA;
  revealAll: boolean;
  onOpen: (item: RegreiroQA) => void;
}) => {
  const [localOpen, setLocalOpen] = useState(false);
  const answerVisible = revealAll || localOpen;

  return (
    <div
      onClick={() => onOpen(item)}
      className="card-grain group relative rounded-xl border-2 border-amber-900/20 shadow-sm overflow-hidden w-full bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <CornerOrnament className="absolute -top-px -left-px opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="p-5 md:p-6">
        <p className="text-amber-950/85 text-base leading-relaxed font-serif font-medium">
          {getPreviewText(item.question)}
        </p>

        {answerVisible && (
          <div className="mt-4 pt-4 border-t-2 border-amber-900/10">
            {formatTextWithBreaks(item.answer)}
          </div>
        )}

        <div className="mt-4 pt-4 flex items-center justify-between gap-3 border-t border-amber-900/10">
          <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold">
            {formatMagazine(item.magazineNumber)}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLocalOpen(!localOpen);
            }}
            title={answerVisible ? "Ocultar resposta aqui" : "Revelar resposta aqui"}
            className="shrink-0 rounded-full p-1.5 hover:bg-[rgb(var(--bg-inset-rgb))] transition-colors"
          >
            <ScalesIcon
              className={`transition-all duration-500 ${answerVisible ? "rotate-180 opacity-100" : "opacity-45"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Modal de leitura completa ---

const QAModal = ({ item, onClose }: { item: RegreiroQA; onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-amber-900/30 bg-[rgb(var(--bg-card-rgb))] shadow-2xl p-6 md:p-10"
      >
        <CornerOrnament className="absolute -top-px -left-px opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-70 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-800 hover:scale-110 transition-transform text-xl font-bold w-9 h-9 flex items-center justify-center rounded-full hover:bg-[rgb(var(--bg-inset-rgb))]"
          title="Fechar"
        >
          ✕
        </button>

        <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold inline-block mb-6">
          {formatMagazine(item.magazineNumber)}
        </span>

        <div className="text-amber-950/85">{formatTextWithBreaks(item.question)}</div>

        <div className="flex items-center gap-3 my-6">
          <ScalesIcon className="opacity-60 shrink-0" />
          <div className="h-px flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.4)] to-transparent" />
        </div>

        <div className="text-amber-950/85">{formatTextWithBreaks(item.answer)}</div>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function TribunalRegreiroPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMagazine, setSelectedMagazine] = useState<string>("all");
  const [revealAll, setRevealAll] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [modalItem, setModalItem] = useState<RegreiroQA | null>(null);

  const availableMagazines = useMemo(() => {
    const nums = Array.from(new Set(regreiroQAs.map((q) => q.magazineNumber)));
    return nums.sort((a, b) => b - a);
  }, []);

  const filteredItems = useMemo(() => {
    const term = normalize(searchTerm);

    return regreiroQAs
      .filter((item) => {
        const matchesSearch =
          normalize(item.question).includes(term) ||
          normalize(item.answer).includes(term) ||
          normalize(formatMagazine(item.magazineNumber)).includes(term);

        const matchesMagazine =
          selectedMagazine === "all" || item.magazineNumber === Number(selectedMagazine);

        return matchesSearch && matchesMagazine;
      })
      .sort((a, b) => b.magazineNumber - a.magazineNumber);
  }, [searchTerm, selectedMagazine]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              a-Tormenta
            </h1>
          </Link>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                Início
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Tribunal Regreiro</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <div className="flex items-center gap-4 mb-3">
            <ScalesIcon className="w-9 h-9 opacity-80" />
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-red-800 drop-shadow-sm tracking-wider"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              Supremo Tribunal Regreiro
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
          <p className="text-amber-950/85 text-lg font-medium leading-relaxed">
            A cada edição da revista Dragão Brasil, dúvidas de regras enviadas por leitores viram
            questões oficiais respondidas pelo Tribunal — e quem pergunta ganha, por um instante,
            o título de conselheiro.
          </p>
        </div>

        {/* Acordeão de Introdução */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <GavelGlyph className="text-red-800/70 shrink-0" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Como funciona
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir ou recolher.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${
              isIntroOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-transparent"
            }`}
          >
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed">
              <p className="font-medium">
                Cada card abaixo mostra o início de uma pergunta enviada por um leitor. Clique nele
                para abrir a pergunta e a resposta completas, ou clique só no ícone da balança pra
                revelar a resposta ali mesmo, sem abrir nada. Se preferir ver todas de uma vez, use
                o botão &quot;Revelar Todas&quot; na busca. O filtro de edição ajuda a olhar só uma
                Dragão Brasil específica.
              </p>
            </div>
          </div>
        </div>

        {/* Busca e Filtros */}
        <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Pergunta
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por uma palavra ou tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                  title="Limpar busca"
                >
                  ✕
                </button>
              ) : (
                <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
              )}
            </div>
          </div>

          <div className="md:w-56">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Edição
            </label>
            <select
              value={selectedMagazine}
              onChange={(e) => setSelectedMagazine(e.target.value)}
              className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm font-medium"
            >
              <option value="all">Todas as edições</option>
              {availableMagazines.map((num) => (
                <option key={num} value={num}>
                  {formatMagazine(num)}
                </option>
              ))}
            </select>
          </div>

          <div className="md:w-56">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Respostas
            </label>
            <button
              onClick={() => setRevealAll(!revealAll)}
              className={`w-full flex items-center justify-center gap-3 px-5 py-3 rounded-lg border-2 transition-all font-display text-xs font-bold uppercase tracking-widest ${
                revealAll
                  ? "bg-red-800/10 border-red-800/40 text-red-800"
                  : "bg-[rgb(var(--bg-inset-rgb))] border-amber-900/20 text-amber-950/70 hover:border-red-800/30"
              }`}
            >
              <ScalesIcon className={`transition-transform duration-500 ${revealAll ? "rotate-180" : ""}`} />
              {revealAll ? "Todas Reveladas" : "Revelar Todas"}
            </button>
          </div>
        </div>

        {/* Contagem */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-2xl font-bold text-red-800 uppercase tracking-wide">
            {filteredItems.length} Pergunta{filteredItems.length !== 1 ? "s" : ""} Encontrada
            {filteredItems.length !== 1 ? "s" : ""}
          </h2>
        </div>

        {/* Grade de Resultados */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma pergunta encontrada.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredItems.map((item) => (
              <QACard key={item.id} item={item} revealAll={revealAll} onOpen={setModalItem} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>

      {modalItem && <QAModal item={modalItem} onClose={() => setModalItem(null)} />}
    </div>
  );
}