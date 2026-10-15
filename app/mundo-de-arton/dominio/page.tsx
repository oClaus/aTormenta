"use client";

import { useState, useMemo, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { dominioConstrucoes } from "@/data/dominio-construcoes";
import { DomainConstruction, PericiaConstrucao } from "@/types/dominio-construcoes";
import { dominioEventos } from "@/data/dominio-eventos";
import { DomainEvent } from "@/types/dominio-eventos";
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

function Corners() {
  return (
    <>
      <CornerOrnament className="absolute -top-px -left-px opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </>
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

function CastleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M4 21V10M20 21V10M4 10V6h3v2h2V6h3v2h2V6h3v4" />
      <path d="M4 21h16" />
      <path d="M10 21v-5h4v5" />
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

// Busca sem acento e sem exigir o texto exato
function normalize(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getPreviewText(text: string, maxLength = 150): string {
  const plain = text.replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).trim() + "…";
}

// --- Acordeão genérico para as seções de regras ---

const RuleAccordion = ({
  icon,
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
        style={!open ? { borderRadius: "0.75rem" } : undefined}
      >
        <div className="flex items-center gap-3">
          <span className="text-red-800/70 shrink-0">{icon}</span>
          <div className="text-left">
            <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
              {title}
            </h2>
            {subtitle && <p className="text-sm text-amber-950/70 italic font-bold">{subtitle}</p>}
          </div>
        </div>
        <span className={`text-red-800 text-2xl shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${
          open ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg leading-relaxed flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Tabela de referência, no estilo "Tabela 8-X" do livro ---

const RuleTable = ({
  tableNumber,
  title,
  headers,
  rows,
  footnote,
}: {
  tableNumber: string;
  title: string;
  headers: string[];
  rows: (string | number)[][];
  footnote?: string;
}) => (
  <div className="mb-12 w-full rounded-xl border-2 border-amber-900/30 bg-[rgb(var(--bg-card-rgb))] shadow-sm overflow-hidden">
    <div className="text-center py-4 px-4 border-b-2 border-double border-amber-900/30 bg-[rgb(var(--bg-inset-rgb))]">
      <h3 className="font-display text-base md:text-xl font-bold text-red-800 uppercase tracking-wide flex items-center justify-center gap-3">
        <span>❖</span> {tableNumber}: {title} <span>❖</span>
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm md:text-base">
        <thead>
          <tr className="bg-red-800">
            {headers.map((h, i) => (
              <th
                key={i}
                className="font-display text-xs uppercase tracking-widest font-bold text-left px-4 py-3 text-amber-50 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-[rgb(var(--bg-card-rgb))]" : "bg-[rgb(var(--bg-inset-rgb))]"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-amber-950/85 font-medium whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {footnote && (
      <div className="px-4 py-3 text-xs italic text-amber-950/60 border-t border-amber-900/10 font-serif">
        {footnote}
      </div>
    )}
  </div>
);

// --- Modal genérico de detalhe ---

const DetailModal = ({
  onClose,
  eyebrow,
  title,
  children,
}: {
  onClose: () => void;
  eyebrow?: ReactNode;
  title: string;
  children: ReactNode;
}) => {
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

        {eyebrow}

        <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 pr-10">{title}</h3>

        <div className="text-amber-950/85 text-base md:text-lg leading-relaxed font-serif font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Card de Construção (grade) ---

const ConstructionCard = ({
  item,
  onOpen,
}: {
  item: DomainConstruction;
  onOpen: (c: DomainConstruction) => void;
}) => (
  <div
    onClick={() => onOpen(item)}
    className="card-grain group relative rounded-xl border-2 border-amber-900/20 shadow-sm overflow-hidden bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer p-5 md:p-6"
  >
    <Corners />
    <div className="flex justify-between items-start gap-3 mb-2">
      <h3 className="font-display text-lg font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors">
        {item.name}
      </h3>
      <span className="shrink-0 w-12 h-12 rounded-full border-2 border-amber-900/20 bg-[rgb(var(--bg-inset-rgb))] flex items-center justify-center font-display text-xs font-bold text-amber-950/80">
        {item.cost} LO
      </span>
    </div>
    <span className="inline-block font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold mb-3">
      {item.pericia}
    </span>
    <p className="text-amber-950/70 text-sm leading-relaxed">{item.benefit}</p>
    {item.prerequisite && (
      <p className="mt-3 text-xs italic text-amber-950/50">Requer: {item.prerequisite}</p>
    )}
  </div>
);

// --- Card de Evento (grade) ---

const EventCard = ({ item, onOpen }: { item: DomainEvent; onOpen: (e: DomainEvent) => void }) => (
  <div
    onClick={() => onOpen(item)}
    className="card-grain group relative rounded-xl border-2 border-amber-900/20 shadow-sm overflow-hidden bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer p-5 md:p-6"
  >
    <Corners />
    <div className="flex justify-between items-start gap-3 mb-3">
      <h3 className="font-display text-lg font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors">
        {item.name}
      </h3>
      <span className="shrink-0 min-w-12 h-12 px-2 rounded-full border-2 border-amber-900/20 bg-[rgb(var(--bg-inset-rgb))] flex items-center justify-center font-display text-[11px] font-bold text-amber-950/80">
        {item.diceRange}
      </span>
    </div>
    <p className="text-amber-950/70 text-sm leading-relaxed">{getPreviewText(item.description)}</p>
  </div>
);

// --- Página Principal ---

export default function DominioPage() {
  const [constructionSearch, setConstructionSearch] = useState("");
  const [selectedPericia, setSelectedPericia] = useState<string>("all");
  const [eventSearch, setEventSearch] = useState("");
  const [modalConstruction, setModalConstruction] = useState<DomainConstruction | null>(null);
  const [modalEvent, setModalEvent] = useState<DomainEvent | null>(null);

  const pericias: PericiaConstrucao[] = ["Nobreza", "Guerra", "Enganação", "Religião", "Misticismo"];

  const filteredConstructions = useMemo(() => {
    const term = normalize(constructionSearch);
    return dominioConstrucoes
      .filter((c) => {
        const matchesSearch =
          normalize(c.name).includes(term) ||
          normalize(c.benefit).includes(term) ||
          normalize(c.description).includes(term);
        const matchesPericia = selectedPericia === "all" || c.pericia === selectedPericia;
        return matchesSearch && matchesPericia;
      })
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [constructionSearch, selectedPericia]);

  const filteredEvents = useMemo(() => {
    const term = normalize(eventSearch);
    return dominioEventos.filter(
      (e) => normalize(e.name).includes(term) || normalize(e.description).includes(term)
    );
  }, [eventSearch]);

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
              <Link href="/mundo-de-arton" className="text-amber-950/70 hover:text-red-800 transition-colors">
                Mundo de Arton
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Domínio</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <div className="flex items-center gap-4 mb-3">
            <CastleIcon className="w-9 h-9 opacity-80" />
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-red-800 drop-shadow-sm tracking-wider"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              Domínio
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
            Em Ghanor, aventureiros podem ascender a posições de poder e autoridade. Um herói que
            defenda uma aldeia do ataque de bandidos pode assumir a responsabilidade de protegê-la
            contra ameaças futuras, tornando-se senhor dessa terra. De forma similar, um aventureiro
            que realize um serviço para um rei pode ser recompensado com um título de nobreza e a
            autoridade sobre um feudo. Seja qual for o caminho, mais cedo ou mais tarde muitos heróis
            trocam acampamentos nos ermos por quartos em palácios e explorações de masmorras por
            bailes da corte. Esses aventureiros descobrem que suas novas vidas como regentes são mais
            luxuosas... Mas não menos perigosas.
          </p>
        </div>

        {/* Tornando-se Regente */}
        <RuleAccordion icon={<CastleIcon className="w-5 h-5" />} title="Tornando-se Regente" defaultOpen>
          <p className="font-medium">
            Um regente é o senhor de um domínio, responsável pela proteção de uma terra e do povo que
            lá habita, com autoridade sobre ambos. Há duas formas de se tornar um regente: criar um
            domínio ou conquistar um já existente. Ambos os caminhos envolvem uma aventura — a ascensão
            de um personagem a regente pode mudar a dinâmica de uma campanha e não deve acontecer sem
            o envolvimento do mestre.
          </p>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Criando um Domínio
            </h3>
            <p className="font-medium">
              Para criar um domínio, você precisa possuir terras virgens — que pode conquistar como
              parte de uma aventura. Então deve gastar uma ação de domínio, T$ 5.000 e fazer um teste
              de Nobreza (CD 20). Se passar, cria um domínio de nível 1, com corte inexistente,
              popularidade tolerável e sem tesouro ou construções. Se falhar, pode tentar novamente,
              gastando mais uma ação de domínio e T$ 5.000.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Conquistando um Domínio
            </h3>
            <p className="font-medium">
              Você pode conquistar um domínio como recompensa por uma aventura. Por exemplo, se você
              derrotou um tirano que escravizava seu povo, pode tomar o lugar dele como senhor daquelas
              terras. As estatísticas de um domínio existente são definidas pelo mestre.
            </p>
          </div>
        </RuleAccordion>

        {/* Características de um Domínio */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Características de um Domínio">
          <p className="font-medium">
            Um domínio é uma divisão política de terras, governada por um regente. Um domínio
            geralmente possui de 30 a 100 km de largura — o que significa que um viajante a pé leva de
            um a três dias para atravessá-lo — mas as dimensões exatas não são importantes. Domínios
            possuem as seguintes características.
          </p>
          <ul className="space-y-4">
            {[
              ["Nome do Domínio", "Pode ser um nome próprio (Cartalla, Marnesse, Orveil...) ou um que remeta a uma característica do lugar (Pico da Neblina, Ponte de Pedra, Dois Troncos...). No caso de um novo domínio, cabe ao personagem batizá-lo."],
              ["Regente", "O nome do regente do domínio."],
              ["Nível", "Uma medida geral da população, do desenvolvimento e da prosperidade do domínio."],
              ["Terreno", "O tipo de terreno do domínio."],
              ["Corte", "O tamanho e a qualidade do centro de poder do domínio."],
              ["Popularidade", "A popularidade do regente frente ao povo do domínio."],
              ["Fortificação", "A capacidade defensiva do domínio."],
              ["Tesouro", 'O tesouro do domínio, medido em lingotes de ouro (LO). Um LO vale T$ 1.000. Embora o tesouro seja medido em lingotes, pode existir na forma de moedas, joias, tapeçarias, sacas de grãos etc. Você não pode usar LO para comprar itens comuns, tampouco pode usar T$ para gastos de domínio. Para converter dinheiro em lingotes e vice-versa, veja a ação finanças.'],
              ["Construções", "Prédios e outras propriedades que fornecem benefícios para o regente ou para o domínio."],
              ["Unidades Militares", "Também chamadas de tropas, são usadas para proteger o domínio de ataques e para acompanhar o regente em aventuras."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </RuleAccordion>

        {/* Níveis de Domínio */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Níveis de Domínio">
          <p className="font-medium">
            O nível de um domínio define quanto você ganha com impostos e seu máximo de construções, e
            opera em uma escala de 1 a 7. Você pode subir o nível do domínio com a ação governar.
          </p>
          <ul className="space-y-4">
            {[
              ["Nível 0", "Terras ermas, desertas ou abandonadas, sem população residente. Não constitui um domínio."],
              ["Níveis 1 e 2", "Terras esparsamente povoadas, com fazendas e povoados. Os habitantes são camponeses, lenhadores, caçadores e curandeiros. As notícias chegam através de mercadores ambulantes — quando chegam. A aparição de um nobre ou de um grupo de aventureiros é um grande evento. Na verdade, até a feira da colheita é um grande evento! A população varia de 1.000 a 2.500 pessoas."],
              ["Níveis 3 a 5", "Terras povoadas, com mercados permanentes e pequenas indústrias. As notícias chegam mais rápido, através de bardos. Nobres visitam com frequência e provavelmente haverá pelo menos um grupo de aventureiros residente. A população varia de 5 a 25 mil pessoas."],
              ["Níveis 6 e 7", "Terras densamente povoadas, com guildas e indústrias prósperas. Todos os tipos de pessoas podem ser encontrados, incluindo alquimistas, escribas e outros tipos mais refinados. Nobres e heróis famosos moram aqui e as pessoas estão acostumadas a interagir com eles. As notícias chegam através de emissários reais ou mesmo através de magos com bolas de cristal — embora mascates e bardos ainda sejam a melhor fonte de fofocas e rumores. A população varia de 50 a 100 mil pessoas."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-medium">
            O terreno do domínio limita o nível máximo e o potencial mágico do domínio, além de ser
            requisito para certas construções. A tabela a seguir traz os tipos de terrenos e os
            limites de cada um.
          </p>
        </RuleAccordion>

        <RuleTable
          tableNumber="Tabela 8-9"
          title="Terrenos"
          headers={["Terreno", "Nível Máximo", "Potencial Mágico"]}
          rows={[
            ["Colinas", "5", "5"],
            ["Deserto", "4", "6"],
            ["Floresta", "4 (6 para elfos)", "6"],
            ["Montanha", "3", "7"],
            ["Pântano", "3", "7"],
            ["Planície", "6", "4"],
            ["Subterrâneo", "2 (6 para anões)", "8"],
            ["Rio ou mar", "+1", "–"],
            ["Elemento místico*", "–", "+1"],
          ]}
          footnote="*Como um cemitério de dragões, um bosque de fadas..."
        />

        {/* Corte e Conselheiros */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Corte e Conselheiros">
          <p className="font-medium">
            O lugar de onde você governa seu domínio. Existem quatro categorias de corte, que definem
            quão bem ela funciona (e quão bem você vive). Categorias baixas impõem penalidades em
            testes de ações de domínio; já categorias altas fornecem acesso a conselheiros e ações
            extras. Cortes possuem um custo de manutenção, definido pela categoria. O custo deve ser
            pago a cada turno de domínio.
          </p>
          <ul className="space-y-4">
            {[
              ["Inexistente", "Você governa o domínio onde e quando consegue — nos fundos de uma taverna, em cima de uma carroça... Possui a ajuda de amigos ou, no máximo, servos pagos de seu próprio bolso. Manutenção: 0 LO. –2 em ações de domínio."],
              ["Pobre", "Base de operações equivalente a um salão, com alguns servos (criado, cozinheiro, escriba). Manutenção: 1 LO. Sem modificadores."],
              ["Comum", "A corte possui uma estrutura completa, com salas de audiência, escritórios e diversos servos, incluindo músicos, tutores, caçadores etc. Pode sediar reuniões, cerimônias e eventuais bailes. Os agentes e servos do regente são conhecidos pelo povo e as pessoas comuns interagem mais com eles do que com o próprio regente em questões do dia a dia. Manutenção: 3 LO. Fornece um conselheiro."],
              ["Rica", "Mais do que uma única sede, a corte é uma rede de prédios espalhados pelo domínio, com um exército de servos e sua própria burocracia. O povo trata os membros da corte como figuras de autoridade e interage com o regente apenas em situações urgentes. Manutenção: 5 LO. Fornece três conselheiros e uma ação de domínio extra por turno."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Conselheiros
            </h3>
            <p className="font-medium mb-4">
              Se você possui uma corte comum ou rica, recebe um ou três conselheiros, respectivamente.
              Cada conselheiro permite que você faça testes de uma perícia como se fosse treinado nela
              (fornecendo o bônus de treinamento), mas apenas para ações de domínio. Quando sua corte
              chega ao nível necessário, você recebe o(s) conselheiro(s) automaticamente. A seguir está
              a lista de conselheiros e suas respectivas perícias:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ["Bispo", "Religião"],
                ["Capitão da Guarda", "Guerra"],
                ["Castelão", "Nobreza"],
                ["Embaixador", "Diplomacia"],
                ["Espião", "Enganação"],
                ["Falcoeiro", "Sobrevivência"],
                ["Mago da Corte", "Misticismo"],
                ["Magistrado", "Investigação"],
                ["Menestrel", "Atuação"],
              ].map(([role, skill]) => (
                <span
                  key={role}
                  className="font-display text-xs px-3 py-1.5 rounded-full bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 text-amber-950/80 font-bold"
                >
                  {role} <span className="text-red-800/70">({skill})</span>
                </span>
              ))}
            </div>
          </div>
        </RuleAccordion>

        {/* Popularidade e Fortificação */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Popularidade e Fortificação">
          <p className="font-medium">
            Existem cinco categorias de popularidade. De acordo com a categoria, você pode receber um
            modificador em testes de ações de domínio.
          </p>
          <ul className="space-y-4">
            {[
              ["Adorado", "Você é amado por seus súditos. Se caminhar pelas ruas, as pessoas irão gritar seu nome e lhe dar bolos de presente. +2 em ações de domínio."],
              ["Popular", "Você é estimado pelo povo. Se caminhar pelas ruas, as pessoas irão cumprimentá-lo com afeição e deferência. +1 em ações de domínio."],
              ["Tolerado", "Os habitantes do domínio o tratam com o respeito devido. Se caminhar pelas ruas, alguns irão agradecer pela última obra pública, enquanto outros irão reclamar dos impostos. Sem modificador."],
              ["Impopular", "As pessoas cumprem seus decretos de má vontade e fazem piadas com seu nome. Se caminhar pelas ruas, receberá reclamações e olhares feios. –2 em ações de domínio."],
              ["Odiado", "O povo considera-o um tolo, um tirano ou ambos. Caminhar pelas ruas não é uma boa ideia, mas se fizer isso, as pessoas irão xingá-lo e arremessar ovos podres em você. –5 em ações de domínio. Se a popularidade baixar para menos do que odiado, uma revolta ocorre."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Fortificação
            </h3>
            <p className="font-medium">
              Uma medida das defesas do domínio contra bandidos, exércitos inimigos e monstros. É
              definido pelas construções defensivas do domínio, como torres de vigia, muralhas, fossos
              e castelos. É igual à soma do valor de Fortificação de todas as construções e é aplicada
              como um bônus nos testes de Guerra do regente feitos para defender o domínio de ataques.
            </p>
          </div>
        </RuleAccordion>

        {/* Construções */}
        <div className="mb-6 flex items-center gap-3 mt-14">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-3xl font-bold text-red-800 uppercase tracking-wide">
            Construções
          </h2>
        </div>
        <p className="text-amber-950/85 text-lg font-medium leading-relaxed mb-8">
          Para adquirir uma construção, veja a seção &quot;Turnos de Domínio&quot;. Você só pode
          erguer construções cujos pré-requisitos cumpra, e pode ter um número máximo de construções
          igual a três vezes o nível de seu domínio. A perícia necessária para cada construção, assim
          como seu custo, estão indicados abaixo. Os efeitos da construção se aplicam imediatamente.
        </p>

        <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Construção
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por nome ou efeito..."
                value={constructionSearch}
                onChange={(e) => setConstructionSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              {constructionSearch ? (
                <button
                  onClick={() => setConstructionSearch("")}
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
              Perícia
            </label>
            <select
              value={selectedPericia}
              onChange={(e) => setSelectedPericia(e.target.value)}
              className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm font-medium"
            >
              <option value="all">Todas as perícias</option>
              {pericias.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-800 text-2xl">❖</span>
          <h3 className="font-display text-xl font-bold text-red-800 uppercase tracking-wide">
            {filteredConstructions.length} Construç{filteredConstructions.length !== 1 ? "ões" : "ão"} Encontrada
            {filteredConstructions.length !== 1 ? "s" : ""}
          </h3>
        </div>

        {filteredConstructions.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma construção encontrada.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-14">
            {filteredConstructions.map((c) => (
              <ConstructionCard key={c.id} item={c} onOpen={setModalConstruction} />
            ))}
          </div>
        )}

        {/* Unidades Militares */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Unidades Militares">
          <p className="font-medium">
            Unidades militares são tropas sob comando de um regente. Cada unidade representa dez
            combatentes (por exemplo, 10 arqueiros, 10 cavaleiros etc.).
          </p>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Adquirindo Unidades
            </h3>
            <p className="font-medium">
              Unidades são adquiridas através da ação de domínio recrutar tropas. Cada vez que faz
              essa ação, você pode recrutar um número máximo de tropas igual ao nível do domínio.
              Nenhum teste é necessário, mas você precisa possuir determinadas construções e gastar
              lingotes de ouro. As construções e o custo em LO variam de acordo com a unidade.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Usando Unidades
            </h3>
            <p className="font-medium">
              Unidades podem ser usadas para defender um domínio e para lutar ao lado do regente em
              aventuras. Quando um domínio é atacado, pelo resultado de um evento aleatório ou como
              parte de uma aventura, as unidades entram em ação. Batalhas envolvendo domínios podem
              ser resolvidas como combates normais — nesse caso, as unidades funcionam como capangas —
              ou com regras simplificadas (veja &quot;Batalhas&quot;). Nessas regras, o Poder da unidade — uma
              medida geral da eficácia da tropa no campo de batalha — se torna uma estatística
              relevante.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Unidades em Aventuras
            </h3>
            <p className="font-medium">
              Ao partir para uma aventura, um regente pode levar unidades consigo. Nesse caso, elas
              funcionam como capangas. Unidades militares não contam em seu limite de parceiros. Em vez
              disso, o máximo de unidades que você pode levar é igual ao nível do seu domínio. Você
              pode usar cada unidade em apenas uma cena. Após isso, elas retornam para o domínio, tendo
              cumprido seu dever para com o regente, e só poderão ser usadas novamente a partir da
              próxima aventura.
            </p>
          </div>
        </RuleAccordion>

        <RuleTable
          tableNumber="Tabela 8-11"
          title="Unidades Militares"
          headers={["Tropa", "Construção", "Custo", "Manutenção", "Poder", "Desl.", "Defesa", "Dano"]}
          rows={[
            ["Camponeses", "—", "¹", "—", "1/2", "9m", "10", "1d6"],
            ["Milícia", "Campo de treinamento", "1 LO", "0,25 LO", "1", "9m", "16", "1d8+1"],
            ["Bandidos", "Esconderijo", "2 LO", "0,5 LO", "1", "9m", "15", "2d6"],
            ["Guardas", "Torre de guarnição", "2 LO", "0,5 LO", "2", "6m", "19", "1d8+2"],
            ["Arqueiros", "Pista de arquearia", "2 LO", "0,5 LO", "2", "9m", "15", "1d8²"],
            ["Cães de guerra", "Canil", "2 LO", "0,25 LO", "2", "15m", "14", "1d6+3"],
            ["Cavaleiros", "Pista de justas", "6 LO", "1 LO", "5", "12m", "24", "1d8+3³"],
          ]}
          footnote="¹Veja a ação convocar camponeses. ²Pode causar dano a criaturas em alcance médio. ³Se causarem dano na mesma rodada em que ficarem adjacentes ao alvo, causam +1d8 pontos de dano."
        />

        <RuleTable
          tableNumber="Tabela 8-12"
          title="Impostos"
          headers={["Nível", "Descrição", "Baixos (LO)", "Médios (LO)", "Altos (LO)"]}
          rows={[
            ["0", "Ermos", "–", "–", "–"],
            ["1", "Aldeia", "1", "1d3", "1d3+1"],
            ["2", "Vilarejo", "1d3", "1d3+1", "2d4"],
            ["3", "Vila pequena ou feudo", "1d4", "2d4", "2d6"],
            ["4", "Vila grande ou baronato", "1d6", "2d4+1", "2d6+2"],
            ["5", "Cidade pequena ou condado", "1d8", "2d6", "2d8+2"],
            ["6", "Cidade grande ou ducado", "1d10", "2d6+1", "2d10+2"],
            ["7", "Metrópole ou reino pequeno", "1d12", "2d8+1", "2d12+2"],
          ]}
        />

        {/* Turnos de Domínio */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Turnos de Domínio">
          <p className="font-medium">
            Domínios não são estáticos. Com o passar do tempo, reinos fazem alianças e entram em
            guerra, prosperam e decaem. Esses eventos grandiosos ocorrem nos turnos de domínio. Um
            turno de domínio acontece no fim de cada aventura, desde que haja pelo menos um regente no
            grupo. De acordo com o mestre, um turno de domínio pode ocorrer no meio de uma aventura,
            desde que tempo suficiente transcorra na história — geralmente, pelo menos uma estação
            (três meses). Sempre que um turno de domínio acontece, o regente deve resolver as
            seguintes etapas.
          </p>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Etapa Um: Eventos
            </h3>
            <p className="font-medium">
              Se o seu domínio for de nível 3 ou maior, role 1d% e consulte a tabela de Eventos (mais
              abaixo nesta página) — domínios de nível 1 ou 2 ainda são muito pequenos e pacatos para
              serem afetados por eventos aleatórios. Caso role um evento, ele afetará o seu domínio
              neste turno.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Etapa Dois: Impostos
            </h3>
            <p className="font-medium">
              Decida se vai cobrar impostos baixos, médios ou altos. Então role na Tabela 8-12 seus
              ganhos, de acordo com o nível do domínio e os impostos cobrados. Role também os ganhos de
              quaisquer construções que você possua que forneçam um rendimento. Após determinar seus
              ganhos, pague os custos de manutenção de sua corte e de suas unidades militares. Se não
              pagar a manutenção de sua corte, ela baixa uma categoria e o caos temporário no governo
              impõe –5 em todas as ações de domínio neste turno. Se não pagar a manutenção de uma
              unidade militar, você perde essa tropa. Por fim, se cobrou impostos baixos, aumente sua
              popularidade em uma categoria. Se cobrou impostos altos, diminua-a em uma categoria.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Etapa Três: Ações
            </h3>
            <p className="font-medium mb-4">
              Você pode fazer duas ações de domínio. Isso conta como sua ação de interlúdio. Algumas
              ações exigem um teste de perícia e/ou o gasto de uma quantidade de lingotes de ouro. No
              caso de ações que exigem um teste e um gasto, este deve ser pago mesmo que a ação falhe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Aumentar Corte",
                  pericia: "Nobreza (CD 20)",
                  custo: "1 LO (ou 0 LO)",
                  text: "Você contrata servos e cortesãos, aumentando sua corte em uma categoria. Esta ação também pode ser usada para trocar um conselheiro ou diminuir sua corte em uma categoria. Essas opções gastam uma ação e exigem o teste de perícia, mas não gastam LO.",
                },
                {
                  name: "Construir",
                  pericia: "Definida pela construção (CD 20 + nível do domínio)",
                  custo: "Definido pela construção",
                  text: "Você ergue uma construção — de novas fazendas para aumentar sua colheita a uma muralha para proteger suas terras.",
                },
                {
                  name: "Convocar Camponeses",
                  pericia: "Nenhum teste necessário",
                  custo: "1 LO",
                  text: "Você faz o povo pegar em armas para defender suas terras. Esta ação gera 1d6 unidades de camponeses, mas diminui sua popularidade em uma categoria. As tropas ficam disponíveis até o fim do turno.",
                },
                {
                  name: "Extorquir",
                  pericia: "Intimidação (CD 20 + nível do domínio)",
                  custo: "—",
                  text: "Você cobra impostos abusivos e ilegais. Isso fornece 1d6 LO + nível do domínio, mas diminui sua popularidade em uma categoria.",
                },
                {
                  name: "Festival",
                  pericia: "Atuação (CD 20 + nível do domínio)",
                  custo: "1 LO",
                  text: "Você organiza uma festa ou cerimônia para alegrar o povo. Sua popularidade aumenta em uma categoria.",
                },
                {
                  name: "Finanças",
                  pericia: "Nobreza (CD 20)",
                  custo: "—",
                  text: "Você converte seu dinheiro pessoal em lingotes de ouro para usar em seu domínio — ou o contrário. A conversão ocorre à taxa de T$ 1.000 para 1 LO.",
                },
                {
                  name: "Governar",
                  pericia: "Nobreza (CD 20 + duas vezes o próximo nível do domínio)",
                  custo: "5 LO x o próximo nível do domínio",
                  text: "Você atende a demandas de seus súditos, fazendo suas terras prosperarem. Seu domínio sobe um nível. Por exemplo, para subir um domínio de nível 2 para 3, você precisa fazer um teste de Nobreza contra CD 26 e gastar 15 LO. Você só pode fazer esta ação uma vez por turno de domínio.",
                },
                {
                  name: "Recrutar Tropas",
                  pericia: "Nenhum teste necessário",
                  custo: "Definido pela unidade militar",
                  text: "Você recruta uma ou mais unidades militares (até um máximo igual ao nível do domínio por ação), para as quais possua a construção correspondente.",
                },
              ].map((acao) => (
                <div
                  key={acao.name}
                  className="rounded-lg border-2 border-amber-900/15 bg-[rgb(var(--bg-card-rgb))] p-4"
                >
                  <h4 className="font-display text-base font-bold text-red-800 mb-2">{acao.name}</h4>
                  <p className="text-xs text-amber-950/60 mb-1">
                    <strong className="text-amber-950/80">Perícia:</strong> {acao.pericia}
                  </p>
                  <p className="text-xs text-amber-950/60 mb-3">
                    <strong className="text-amber-950/80">Custo:</strong> {acao.custo}
                  </p>
                  <p className="text-sm font-medium">{acao.text}</p>
                </div>
              ))}
            </div>
          </div>
        </RuleAccordion>

        {/* Domínios Místicos */}
        <RuleAccordion icon={<PageGlyph className="w-5 h-5" />} title="Domínios Místicos">
          <p className="font-medium">
            Um domínio comum representa vilas, cidades e castelos, com suas fazendas, mercados e
            oficinas. Mas esse não é o único tipo de domínio existente nos reinos. Torres de magos,
            mosteiros de clérigos e lugares similares também podem ser domínios. Embora não possuam
            súditos residentes (pelo menos não em quantidade significativa), são centros de energias
            arcanas ou divinas, capazes de influenciar as terras ao redor. Tais lugares são chamados de
            domínios místicos e podem assumir diversas formas: uma torre de cristal, uma mansão de
            ossos, um palácio de folhas... Quando cria um domínio, se possuir níveis em uma classe
            conjuradora (bardo, clérigo, druida ou mago), você pode escolher que ele seja um domínio
            místico em vez de um normal. Domínios místicos não possuem população, mas fornecem enormes
            poderes a seus regentes. Em termos de regras, funcionam como domínios normais, com as
            seguintes exceções.
          </p>
          <ul className="space-y-4">
            {[
              ["Menos Dinheiro", "Domínios místicos não possuem colheitas, comércio ou indústria — consequentemente, não geram impostos. Eles ainda rendem dinheiro, proveniente de poções fabricadas pelo regente, gemas preciosas expelidas pela própria terra ou qualquer outra coisa que o jogador invente e o mestre aprove. Entretanto, o valor é menor que o de um domínio normal. Em termos de regras, domínios místicos rendem 1 LO por nível por turno."],
              ["Sem População", "Como domínios místicos não possuem população, também não possuem a característica popularidade. Não há pessoas lá para gostar ou desgostar do regente!"],
              ["Construções Restritas", "Domínios místicos só podem ter construções que exijam testes de Misticismo ou Religião para serem construídas."],
              ["Poderes Mágicos", "O regente de um domínio místico recebe um número de pontos de mana extras igual ao nível do domínio elevado ao quadrado. Assim, um domínio de nível 1 fornece 1 PM, um domínio de nível 2 fornece 4 PM, um domínio de nível 3 fornece 9 PM e assim por diante. Os pontos de mana são ganhos mesmo que o regente esteja fora do domínio."],
              ["Potencial Mágico", "O nível máximo de um domínio místico é determinado pelo terreno onde ele se encontra."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
              Misturando Domínios
            </h3>
            <p className="font-medium">
              É possível ter um domínio normal e um místico na mesma terra. Conduza cada domínio de
              forma separada — cada um possui seu próprio nível e outras características. Eles podem
              ser governados por regentes diferentes ou pelo mesmo. Se você for regente do domínio
              normal e do místico, recebe o dinheiro e os benefícios das construções de ambos.
              Entretanto, continua tendo apenas duas ações por turno de domínio, que precisará dividir
              entre ambos. Ser um rei mago não é fácil! Além disso, a presença da civilização afeta a
              força mágica da terra. Por conta disso, se uma torre coexiste com um domínio normal, o
              nível máximo da torre é igual ao potencial mágico do terreno menos o nível do domínio. Por
              exemplo, se uma colina (potencial mágico 5) tiver um domínio de nível 3, poderá ter uma
              torre de no máximo nível 2! Isso explica por que muitos magos e feiticeiros preferem se
              isolar da civilização e erguer suas torres nos ermos. Note que domínios élficos não
              diminuem o potencial mágico da terra.
            </p>
          </div>
        </RuleAccordion>

        {/* Eventos Aleatórios */}
        <div className="mb-6 flex items-center gap-3 mt-14">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-3xl font-bold text-red-800 uppercase tracking-wide">
            Eventos Aleatórios
          </h2>
        </div>
        <p className="text-amber-950/85 text-lg font-medium leading-relaxed mb-8">
          Há duas maneiras de resolver eventos aleatórios. A mais simples, aconselhada para campanhas
          em que domínios são mais pano de fundo do que palco principal, é com um teste de perícia,
          quando isso é possível (indicado no próprio evento) — a CD do teste é 25 + o nível do
          domínio. Nem todos os eventos podem ser resolvidos com um teste; nesses casos, o efeito
          ocorre automaticamente. A outra maneira, mais detalhada, envolve transformar os eventos em
          cenas — ou mesmo aventuras completas — jogadas como parte da sessão.
        </p>

        <RuleTable
          tableNumber="Tabela 8-13"
          title="Eventos"
          headers={["d%", "Evento"]}
          rows={dominioEventos.map((e) => [e.diceRange, e.name])}
        />

        <div className="mb-8 relative max-w-md">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Evento
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Busque por nome ou efeito..."
              value={eventSearch}
              onChange={(e) => setEventSearch(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
            />
            {eventSearch ? (
              <button
                onClick={() => setEventSearch("")}
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

        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <ScalesIcon className="opacity-40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhum evento encontrado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-14">
            {filteredEvents.map((e) => (
              <EventCard key={e.id} item={e} onOpen={setModalEvent} />
            ))}
          </div>
        )}

        {/* Batalhas */}
        <RuleAccordion icon={<GavelGlyph className="w-5 h-5" />} title="Batalhas">
          <p className="font-medium">
            Batalhas envolvendo domínios são resolvidas com um teste oposto de Guerra entre o regente e
            o líder inimigo. O teste possui os modificadores a seguir.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
              <span className="font-medium">
                <strong className="font-display text-red-800">Poder.</strong> Some o Poder das unidades
                de cada exército. Outros personagens (que não o comandante do exército) podem ajudar na
                batalha, fornecendo Poder de acordo com seu patamar: 1 para iniciante; 2 para veterano,
                5 para campeão e 10 para lenda. O comandante do exército com maior Poder recebe um
                bônus em seu teste de Guerra igual à diferença entre os valores de Poder.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
              <span className="font-medium">
                <strong className="font-display text-red-800">Fortificação.</strong> O regente soma a
                Fortificação do domínio em seu teste de Guerra.
              </span>
            </li>
          </ul>
          <blockquote className="border-l-4 border-red-800 pl-4 py-3 my-2 text-base italic text-amber-950/85 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">
            Exemplo: um domínio com duas unidades de milícia (Poder total igual a 2) e uma paliçada
            (Fortificação 2) é atacado por saqueadores com Poder 5. Como o Poder dos atacantes é três
            pontos maior que o Poder do defensor, os atacantes recebem +3 no teste de Guerra. Porém, o
            defensor recebe +2 em seu teste pela Fortificação do domínio.
          </blockquote>
          <p className="font-medium">
            Após calcular os modificadores, faça o teste oposto e veja abaixo a consequência para o
            domínio.
          </p>
          <ul className="space-y-3">
            {[
              ["Regente vence por 10+", "Vitória total! Invasores são repelidos e você ganha espólios de 1d6 LO."],
              ["Regente vence por 5+", "Vitória! Invasores são repelidos."],
              ["Regente vence", "Invasores são repelidos, mas ao custo de vidas. O domínio perde 1d3 unidades."],
              ["Regente perde", "Invasores saqueiam a terra. O domínio perde 1d3+1 unidades e 2d6 LO."],
              ["Regente perde por 5+", "Invasores queimam propriedades. O domínio perde 1d4+1 unidades, 3d6 LO e uma construção aleatória."],
              ["Regente perde por 10+", "Invasores massacram o povo. O domínio perde 2d4+1 unidades, 4d6 LO, uma construção aleatória e um nível."],
            ].map(([label, text]) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
                <span className="font-medium">
                  <strong className="font-display text-red-800">{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </RuleAccordion>

        {/* Revoltas */}
        <RuleAccordion icon={<GavelGlyph className="w-5 h-5" />} title="Revoltas">
          <p className="font-medium">
            Se a qualquer momento a popularidade do regente baixar para menos do que odiado, ela fica
            nessa categoria e uma revolta se inicia. Enquanto a revolta durar, os impostos do domínio
            são reduzidos a 0 LO e uma construção aleatória é destruída no final de cada turno. A
            revolta termina se a popularidade aumentar para impopular ou maior.
          </p>
        </RuleAccordion>

        {/* Domínios e o Grupo — callout */}
        <div className="mt-14 mb-10 p-6 md:p-8 rounded-xl border-2 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))] shadow-sm relative">
          <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 text-center uppercase tracking-wide">
            ❖ Domínios e o Grupo ❖
          </h3>
          <p className="font-medium text-amber-950/85 leading-relaxed text-center md:text-justify">
            Por padrão, apenas o regente pode realizar ações de domínio e se beneficiar das
            construções. Porém, de acordo com o mestre, outros personagens podem auxiliar o regente,
            seja fazendo suas próprias ações de domínio, seja fazendo testes de ajuda para fornecer
            bônus às ações do regente. Em ambos os casos, isso gasta uma ação de interlúdio. De forma
            similar, o mestre pode permitir que outros aventureiros se beneficiem das construções —
            neste caso, cada construção fornece seu benefício apenas para um personagem. Com essa
            opção, é possível considerar que o domínio pertence a todos os personagens, em vez de
            apenas a um, e que o grupo o governa como um conselho.
          </p>
        </div>
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

      {modalConstruction && (
        <DetailModal
          onClose={() => setModalConstruction(null)}
          title={modalConstruction.name}
          eyebrow={
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold">
                {modalConstruction.pericia}
              </span>
              <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold">
                {modalConstruction.cost} LO
              </span>
              {modalConstruction.prerequisite && (
                <span className="font-display text-[10px] px-2 py-1 rounded bg-red-800/10 border border-red-800/30 text-red-800 uppercase tracking-widest font-bold">
                  Requer: {modalConstruction.prerequisite}
                </span>
              )}
            </div>
          }
        >
          {modalConstruction.description}
        </DetailModal>
      )}

      {modalEvent && (
        <DetailModal
          onClose={() => setModalEvent(null)}
          title={modalEvent.name}
          eyebrow={
            <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/60 uppercase tracking-widest font-bold inline-block mb-6">
              d% {modalEvent.diceRange}
            </span>
          }
        >
          {modalEvent.description}
        </DetailModal>
      )}
    </div>
  );
}
