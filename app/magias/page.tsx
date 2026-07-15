"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { spells } from "@/data/spells";
import { Spell, SpellType, SpellSchool } from "@/types/speel";
import { formatOrigin } from "@/types/power";
import ThemeToggle from "@/components/ThemeToggle";

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

// --- Estilo por Tipo de Magia ---
// Usa cores fora da escala amber-*/stone-* (remapeadas no globals.css para o
// tom de pergaminho do site, o que deixava os selos ilegíveis). O "accent" é
// usado nos brilhos radiais e no selo de círculo, para dar uma cara mais
// mística a cada tipo de magia.
function getSpellTypeStyle(type: SpellType) {
  switch (type) {
    case "Arcana":
      return {
        badge: "bg-purple-100 text-purple-900 border-purple-300",
        accent: "147, 51, 234", // roxo arcano
      };
    case "Divina":
      return {
        badge: "bg-yellow-100 text-yellow-900 border-yellow-300",
        accent: "202, 138, 4", // dourado divino
      };
    case "Universal":
    default:
      return {
        badge: "bg-sky-100 text-sky-900 border-sky-300",
        accent: "2, 132, 199", // azul etéreo
      };
  }
}

// --- Constantes de Filtro ---
const ALL_SPELL_TYPES: SpellType[] = ["Arcana", "Divina", "Universal"];
const ALL_SPELL_SCHOOLS: [
  "Abjuração",
  "Adivinhação",
  "Convocação",
  "Encantamento",
  "Evocação",
  "Ilusão",
  "Necromancia",
  "Transmutação"
] = [
  "Abjuração",
  "Adivinhação",
  "Convocação",
  "Encantamento",
  "Evocação",
  "Ilusão",
  "Necromancia",
  "Transmutação",
];
const ALL_CIRCLES: number[] = [1, 2, 3, 4, 5];

// --- Funções Auxiliares ---
const createUrlSafeId = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
};

const renderTextWithBold = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-red-800 font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// --- Componente: Modal da Magia (A Tela que abre) ---
const SpellModal = ({ spell, onClose }: { spell: Spell; onClose: () => void }) => {
  const safeId = createUrlSafeId(spell.id);
  const typeStyle = getSpellTypeStyle(spell.type);

  const copiarLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${safeId}`;
    navigator.clipboard.writeText(url);
    alert(`Link para ${spell.name} copiado!`);
  };

  const handleModalClick = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgb(var(--void-rgb))]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10 rounded-xl bg-[rgb(var(--bg-inset-rgb))] border-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif custom-scrollbar"
        onClick={handleModalClick}
      >
        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={copiarLink}
            className="p-2 bg-[rgb(var(--bg-card-rgb))] hover:bg-amber-900/20 rounded-full text-amber-950/70 hover:text-red-800 transition-colors border border-amber-900/20 shadow-sm"
            title="Copiar link direto para esta magia"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-[rgb(var(--bg-card-rgb))] hover:bg-red-800/10 rounded-full text-amber-950/70 hover:text-red-800 transition-colors border border-amber-900/20 shadow-sm"
            title="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          className="h-1 w-12 mb-6 rounded-full"
          style={{ backgroundColor: `rgba(${typeStyle.accent}, 0.5)` }}
        ></div>

        <div className="mb-6 pb-4 border-b-2 border-amber-900/10 pr-24 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-red-800 tracking-wide">{spell.name}</h3>
            <div className="flex justify-start items-center gap-3 text-sm mt-4 flex-wrap">
              <span className={`font-display px-2.5 py-1 rounded text-xs uppercase tracking-widest border font-bold shadow-sm ${typeStyle.badge}`}>
                {spell.type}
              </span>
              <span className="text-amber-950/70 italic font-serif font-bold text-base">
                {spell.school}
              </span>
            </div>
          </div>
          {/* Selo do Círculo */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full border-2 shrink-0 bg-[rgb(var(--bg-card-rgb))] shadow-sm"
            style={{ borderColor: `rgba(${typeStyle.accent}, 0.5)` }}
          >
            <span className="font-display font-bold text-lg" style={{ color: `rgb(${typeStyle.accent})` }}>
              {spell.circle}°
            </span>
          </div>
        </div>

        <div className="text-base text-amber-950/85 space-y-2 mb-8 bg-[rgb(var(--bg-card-rgb))]/50 p-6 rounded-xl border border-amber-900/20 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p><strong className="font-display text-red-800 uppercase tracking-widest text-[11px] block mb-0.5">Execução</strong> <span className="font-medium">{spell.execution}</span></p>
            <p><strong className="font-display text-red-800 uppercase tracking-widest text-[11px] block mb-0.5">Alcance</strong> <span className="font-medium">{spell.range}</span></p>
            <p><strong className="font-display text-red-800 uppercase tracking-widest text-[11px] block mb-0.5">Alvo/Área</strong> <span className="font-medium">{spell.target}</span></p>
            <p><strong className="font-display text-red-800 uppercase tracking-widest text-[11px] block mb-0.5">Duração</strong> <span className="font-medium">{spell.duration}</span></p>
            <p className="md:col-span-2"><strong className="font-display text-red-800 uppercase tracking-widest text-[11px] block mb-0.5">Resistência</strong> <span className="font-medium">{spell.resistance}</span></p>
          </div>
        </div>

        <div className="text-base md:text-lg text-amber-950/85 mb-8 flex-grow leading-relaxed font-medium" style={{ whiteSpace: 'pre-wrap' }}>
          {renderTextWithBold(spell.description)}
        </div>

        {spell.enhancements && spell.enhancements.length > 0 && (
          <div className="mt-auto pt-6 border-t-2 border-amber-900/10">
            <h4 className="font-display text-lg font-bold text-red-800 mb-4 tracking-wide flex items-center gap-2">
              <span className="text-red-800/60 text-xl">❖</span> Aprimoramentos
            </h4>
            <ul className="text-sm md:text-base text-amber-950/85 divide-y divide-amber-900/10 bg-[rgb(var(--bg-card-rgb))]/30 rounded-xl border border-amber-900/20 p-4" >
          {spell.enhancements.map((enh, index) => (
            <li key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-3 py-3 first:pt-1 last:pb-1">
              <span className="font-bold text-red-800 whitespace-nowrap">{enh.cost}:</span>
              <span className="italic leading-relaxed font-medium whitespace-pre-wrap" >{enh.effect}</span>
            </li>
          ))}
        </ul>
          </div>
        )}

        <div className="mt-8 pt-4 border-t-2 border-amber-900/20 text-right">
          <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">{formatOrigin(spell.origin)}</span>
        </div>
      </div>
    </div>
  );
};

// --- Componente: Card da Magia (Tamanho Integral e Clicável) ---
const SpellCard = ({ spell, onClick }: { spell: Spell; onClick: () => void }) => {
  const safeId = createUrlSafeId(spell.id);
  const typeStyle = getSpellTypeStyle(spell.type);

  const copiarLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${safeId}`;
    navigator.clipboard.writeText(url);
    alert(`Link para ${spell.name} copiado!`);
  };

  return (
    <div
      id={safeId}
      onClick={onClick}
      className="card-grain p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 outline outline-1 outline-offset-4 outline-amber-900/5 hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col transition-all duration-300 hover:-translate-y-1 scroll-mt-32 relative group cursor-pointer h-full"
      style={{ backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(${typeStyle.accent}, 0.08), transparent 60%)` }}
      role="button"
      tabIndex={0}
      title="Clique para abrir em destaque"
    >
      <CornerOrnament className="absolute -top-px -left-px z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Botão de copiar link */}
      <button
        onClick={copiarLink}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-[rgb(var(--bg-inset-rgb))] hover:bg-red-800/10 rounded-full text-amber-950/70 hover:text-red-800 z-10 border border-amber-900/20 shadow-sm"
        title="Copiar link direto para esta magia"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </button>

      <div className="relative z-10 mb-4 pb-3 border-b-2 border-amber-900/10 pr-8 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors tracking-wide break-words">{spell.name}</h3>
          <div className="flex items-center gap-2 text-sm mt-3 flex-wrap">
            <span className={`font-display px-2 py-0.5 rounded text-[10px] uppercase tracking-widest border shadow-sm font-bold ${typeStyle.badge}`}>
              {spell.type}
            </span>
            <span className="text-amber-950/60 italic font-serif font-bold text-xs">
              {spell.school}
            </span>
          </div>
        </div>
        {/* Selo do Círculo */}
        <div
          className="flex items-center justify-center w-11 h-11 rounded-full border-2 shrink-0 bg-[rgb(var(--bg-inset-rgb))] shadow-sm"
          style={{ borderColor: `rgba(${typeStyle.accent}, 0.5)` }}
        >
          <span className="font-display font-bold text-sm" style={{ color: `rgb(${typeStyle.accent})` }}>
            {spell.circle}°
          </span>
        </div>
      </div>

      <div className="relative z-10 text-sm text-amber-950/85 space-y-1 mb-4 font-medium">
        <p><strong className="font-display text-red-800 uppercase tracking-widest text-[10px]">Execução:</strong> {spell.execution}</p>
        <p><strong className="font-display text-red-800 uppercase tracking-widest text-[10px]">Alcance:</strong> {spell.range}</p>
        <p><strong className="font-display text-red-800 uppercase tracking-widest text-[10px]">Alvo/Área:</strong> {spell.target}</p>
        <p><strong className="font-display text-red-800 uppercase tracking-widest text-[10px]">Duração:</strong> {spell.duration}</p>
        <p><strong className="font-display text-red-800 uppercase tracking-widest text-[10px]">Resistência:</strong> {spell.resistance}</p>
      </div>

      <div className="relative z-10 text-sm text-amber-950/80 mb-4 flex-grow leading-relaxed font-medium" style={{ whiteSpace: 'pre-wrap' }}>
        {renderTextWithBold(spell.description)}
      </div>

      {spell.enhancements && spell.enhancements.length > 0 && (
      <div className="relative z-10 mt-2 pt-3 border-t border-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]/50 p-3 rounded-lg border border-amber-900/5">
        <p className="font-display text-[10px] font-bold text-red-800 mb-2 uppercase tracking-widest flex items-center gap-1">
            <span className="text-red-800/50">❖</span> Aprimoramentos
        </p>
        <ul className="text-xs text-amber-950/85 divide-y divide-amber-900/10">
          {spell.enhancements.map((enh, index) => (
            <li key={index} className="flex flex-col gap-0.5 py-1.5 first:pt-0 last:pb-0">
              <span className="font-bold text-red-800 whitespace-nowrap">{enh.cost}:</span>
              <span className="italic leading-relaxed font-medium whitespace-pre-wrap">{enh.effect}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

      <div className="relative z-10 mt-4 pt-4 border-t-2 border-amber-900/10 flex justify-between items-center">
        <span className="text-xs font-bold text-red-800 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Abrir em destaque <span className="text-[10px]">⤢</span>
        </span>
        <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">{formatOrigin(spell.origin)}</span>
      </div>
    </div>
  );
};

export default function MagiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<SpellType | "Todos">("Todos");
  const [selectedSchools, setSelectedSchools] = useState<SpellSchool[]>([]);
  const [selectedCircle, setSelectedCircle] = useState<number | "Todos">("Todos");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const [activeSpell, setActiveSpell] = useState<Spell | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const foundSpell = spells.find(s => createUrlSafeId(s.id) === hash);
        setActiveSpell(foundSpell || null);

        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setActiveSpell(null);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const openSpellModal = (spell: Spell) => {
    setActiveSpell(spell);
    window.history.pushState(null, '', `#${createUrlSafeId(spell.id)}`);
  };

  const closeSpellModal = () => {
    setActiveSpell(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const toggleSchool = (school: SpellSchool) => {
    setSelectedSchools(prevSchools =>
      prevSchools.includes(school) ? prevSchools.filter(s => s !== school) : [...prevSchools, school]
    );
  };

  const filteredSpells = useMemo(() => {
    let filtered = spells;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (selectedType !== "Todos") filtered = filtered.filter(spell => spell.type === selectedType);
    if (selectedSchools.length > 0) filtered = filtered.filter(spell => selectedSchools.includes(spell.school));
    if (selectedCircle !== "Todos") filtered = filtered.filter(spell => spell.circle === selectedCircle);

    if (lowerCaseSearch) {
      filtered = filtered.filter(spell =>
        spell.name.toLowerCase().includes(lowerCaseSearch) ||
        spell.description.toLowerCase().includes(lowerCaseSearch) ||
        spell.origin.toLowerCase().includes(lowerCaseSearch) ||
        spell.school.toLowerCase().includes(lowerCaseSearch) ||
        spell.type.toLowerCase().includes(lowerCaseSearch) ||
        spell.execution.toLowerCase().includes(lowerCaseSearch) ||
        spell.range.toLowerCase().includes(lowerCaseSearch) ||
        spell.target.toLowerCase().includes(lowerCaseSearch) ||
        spell.duration.toLowerCase().includes(lowerCaseSearch) ||
        spell.resistance.toLowerCase().includes(lowerCaseSearch) ||
        (spell.enhancements && spell.enhancements.some(enh => enh.effect.toLowerCase().includes(lowerCaseSearch)))
      );
    }

    return filtered.sort((a, b) => {
      if (a.circle !== b.circle) return a.circle - b.circle;
      return a.name.localeCompare(b.name, "pt-BR");
    });
  }, [searchTerm, selectedType, selectedSchools, selectedCircle]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {activeSpell && (
        <SpellModal spell={activeSpell} onClose={closeSpellModal} />
      )}

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
             <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
                  <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Magias</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                Magias
            </h1>
            <div className="flex items-center gap-3 w-full mb-6">
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
                <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
                <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
              </svg>
              <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
            </div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Regras das Magias
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para acessar as regras de como funcionam as Magias.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[80000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              <section>
                <p className="font-medium text-lg leading-relaxed mb-6">Dádiva da deusa Wynna, a magia é a força mais poderosa de Arton, capaz de produzir efeitos diversos. Uma magia pode criar uma bola de fogo ou curar ferimentos; fazer alguém adormecer ou distorcer o próprio tempo e espaço. Esta página traz as regras para lançar magias, além da lista e descrição de todas elas.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Classificação</h2>
                <p className="font-medium mb-4">Todas as magias são classificadas em tipos (arcana ou divina) e círculos (do 1º ao 5º).</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Magia Arcana: </strong>Manipula diretamente as energias do mundo, permitindo ao conjurador violar as leis naturais e alterar a realidade. Este tipo de mágica pode ser dominado por estudo ou aptidão natural. Seus efeitos costumam ser impressionantes, destruidores e fantásticos — como produzir relâmpagos, metamorfosear criaturas, transportar por longas distâncias e criar imagens ilusórias.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Magia Divina: </strong>Provém de uma causa ou entidade poderosa — normalmente um deus maior. Através da devoção a essa causa ou entidade, o conjurador recebe poder mágico. A magia divina geralmente envolve proteção, fortalecimento e cura.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Círculos: </strong>Magias são divididas em círculos, do 1º ao 5º. Quanto mais alto o círculo da magia, mais poderosa ela é. Magias de 1º círculo são pouco mais que truques, mal excedendo capacidades mundanas. Já magias de 5º círculo podem invocar chuvas de meteoros, parar o tempo e até mesmo realizar desejos!</span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Atributo-chave</h2>
                <p className="font-medium mb-4">A magia é intensa em Arton e pode ser dominada de várias formas.</p>
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Inteligência: </strong>Atributo-chave dos bruxos e magos. Eles seguem métodos e fórmulas antigas, herméticas, registradas em livros e pergaminhos. Para eles, magia é ciência.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Sabedoria: </strong>Atributo-chave dos clérigos e druidas. É a magia espiritual, baseada no contato com os deuses e a percepção da natureza. Para eles, magia é fé.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Carisma: </strong>Atributo-chave dos bardos e feiticeiros. Eles invocam seu próprio poder interior, alimentando magias com autoconfiança e força de personalidade. Para eles, magia é arte.</span>
                  </li>
                </ul>
                <p className="font-medium">O atributo-chave afeta seus pontos de mana e a CD dos testes de resistência para resistir a suas magias.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Aprendendo Magias</h2>
                <p className="font-medium">Sua classe diz que tipo de magia você pode lançar: arcanistas e bardos lançam magias arcanas; clérigos e druidas lançam magias divinas. Sua classe também diz com quantas magias você começa e quantas ganha por nível. Algumas habilidades permitem que você aprenda magias novas. Caso a habilidade não diga qual magia você aprende, você pode escolher qualquer magia de um tipo e círculo que possa lançar.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Lançando Magias</h2>
                <p className="font-medium mb-4">Magias são habilidades mágicas e seguem todas as regras impostas no jogo.</p>
                <p className="font-medium mb-6"><strong className="text-red-800 uppercase tracking-widest text-sm">Custo em PM: </strong>Lançar uma magia exige gastar uma ação (varia de magia para magia) e pontos de mana (de acordo com o círculo da magia).</p>

                <div className="w-full lg:w-1/3 overflow-x-auto rounded-xl border-2 border-amber-900/20 mb-8 shadow-sm bg-[rgb(var(--bg-card-rgb))]">
                    <table className="min-w-full divide-y-2 divide-amber-900/20">
                        <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80">
                        <tr>
                            <th className="font-display px-6 py-4 text-center text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Círculo</th>
                            <th className="font-display px-6 py-4 text-center text-sm font-bold uppercase tracking-widest">Custo</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
                        {[{ c: "1°", cost: "1 PM" }, { c: "2°", cost: "3 PM" }, { c: "3°", cost: "6 PM" }, { c: "4°", cost: "10 PM" }, { c: "5°", cost: "15 PM" }].map((row, i) => (
                            <tr key={i} className={`transition-colors hover:bg-[rgb(var(--bg-card-rgb))]/50 ${i % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30"}`}>
                                <td className="px-6 py-3 font-bold text-red-800 text-center border-r-2 border-amber-900/10 text-lg">{row.c}</td>
                                <td className="px-6 py-3 text-amber-950/85 font-bold text-center">{row.cost}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p className="font-medium mb-4"><strong className="text-red-800 uppercase tracking-widest text-sm">Gestos e Palavras: </strong>Lançar uma magia envolve pronunciar palavras mágicas e gesticular com pelo menos uma mão livre. É um ato chamativo, perceptível por aqueles ao redor. Um conjurador amordaçado ou incapaz de usar as mãos não pode lançar magias.</p>
                <p className="font-medium mb-4"><strong className="text-red-800 uppercase tracking-widest text-sm">Concentração: </strong>Lançar uma magia também exige calma e concentração. Por isso, um conjurador em situação difícil deve passar em um teste de Vontade. Se falhar no teste a magia é perdida, mas os PM são gastos mesmo assim.</p>

                <ul className="space-y-4 mb-6 ml-2 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ser ferido durante a execução da magia: </strong>CD igual ao dano. Para magias que exigem uma ação padrão ou menos, o conjurador só pode ser ferido durante a execução se for atacado como uma reação ou se estiver sofrendo dano contínuo (por chamas ou veneno, por exemplo).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Condição ruim: </strong>CD 15 + custo em PM da magia. Exemplos incluem movimento vigoroso, como montado a galope, caído ou em uma tempestade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Condição terrível: </strong>CD 20 + custo em PM da magia. Exemplos incluem movimento violento, como uma carroça desgovernada, agarrado ou em um terremoto.</span>
                  </li>
                </ul>
                <p className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armaduras e Magia Arcana: </strong>O uso de armaduras atrapalha os gestos necessários para lançar magias arcanas. Lançar uma magia arcana usando armadura exige um teste de Misticismo (CD 20 + o custo em PM da magia). O teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta PM. Magias lançadas por habilidades de raça, poderes ou itens mágicos não sofrem esta limitação.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Aprimoramentos</h2>
                <p className="font-medium mb-4">Algumas magias permitem gastar mais pontos de mana ao serem lançadas para aumentar seu efeito. Estas opções são chamadas de aprimoramentos.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Limite de PM: </strong>Como qualquer habilidade com custo variável, o máximo de PM que você pode gastar ao lançar uma magia obedece às regras para gasto de PM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Aprimoramentos Cumulativos: </strong>Para aprimoramentos que aumentam um valor (o texto começa com a palavra “aumenta”), você pode gastar aquela quantidade de PM várias vezes para acumular o aumento. A magia Bola de Fogo causa 6d6 pontos de dano e tem um aprimoramento que aumenta esse dano em +2d6 por +2 PM. Um arcanista de 11º nível pode gastar até 11 PM ao lançar essa magia, causando 14d6 pontos de dano.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Aprimoramentos que Mudam Magias: </strong>Alguns aprimoramentos alteram a descrição da magia (o texto começa com a palavra “muda”). Nesse caso, a magia continua igual em tudo, exceto a parte mudada pelo aprimoramento. Mudanças na mesma característica da magia nunca se acumulam.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Truque: </strong>Este aprimoramento transforma a magia em uma versão mais simples e reduz seu custo em PM para zero. Truques não podem ser usados em conjunto com outros aprimoramentos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Pré-requisitos: </strong>Alguns aprimoramentos exigem que você seja capaz de lançar magias de determinado círculo. Para magias de classe, você deve cumprir o requisito com a classe com a qual aprendeu a magia. Para magias aprendidas de outra forma, você não tem como cumprir esses pré-requisitos.</span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Escolas</h2>
                <p className="font-medium mb-4">Todas as magias, sejam arcanas ou divinas, pertencem a uma escola. A escolha de uma magia indica como ela utiliza e manipula energia.</p>
                <p className="font-medium mb-6">Escolas de magia contam como tipos de efeitos, o que indica sua relação com outros efeitos. Por exemplo, um bônus em testes de resistência contra ilusões se aplica contra quaisquer magias de ilusão.</p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Abjuração (Abjur): </strong>Magias de proteção, que anulam outras magias ou expulsam criaturas invocadas de volta a seus planos de existência nativos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Adivinhação (Adiv): </strong>Magias de detecção ou que vasculham passado e futuro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Convocação (Conv): </strong>Magias que transportam matéria. Esse transporte é realizado através do Éter Entre Mundos; por isso, qualquer efeito que bloqueia viagens etéreas também impede convocações. Criaturas convocadas surgem em uma superfície desocupada e, quando destruídas, desaparecem e são devolvidas a seus mundos nativos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Encantamento (Encan): </strong>Magias que afetam a mente. Todas as magias de encantamento são efeitos mentais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Evocação (Evoc): </strong>Magias que manipulam ou geram energia pura. Ácido, eletricidade, fogo e frio são as energias geradas pelos quatro elementos, respectivamente terra, ar, fogo e água. Magias de fogo funcionam sob a água, mas criam vapor quente em vez de chamas abertas. Luz é energia positiva, cuja manifestação é capaz de iluminar, curar e causar dano de luz. Por fim, essência é energia mágica pura.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ilusão: </strong>Essas magias fazem outros perceberem algo que não existe ou ignorarem algo real. Todas as magias de ilusão são efeitos mentais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Necromancia (Necro): </strong>Magias que canalizam energia negativa, criando escuridão, drenando a força vital de criaturas vivas e criando mortos-vivos. Magias de necromancia são efeitos de trevas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Transmutação (Trans): </strong>Magias que alteram as propriedades físicas de uma criatura ou objeto.</span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Execução</h2>
                <p className="font-medium mb-4">A ação necessária para lançar a magia.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ação Livre: </strong>Você só pode lançar uma magia com execução de ação livre por rodada. Isso inclui magias afetadas por habilidades como Magia Acelerada.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Reação: </strong>Magias com execução de reação só podem ser lançadas em reação àquilo contra o qual se aplicam (por exemplo, uma magia que fornece bônus na Defesa pode ser lançada em reação a um ataque).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ação Completa: </strong>No caso de magias com execução maior do que uma ação completa, você fica desprevenido enquanto estiver lançando a magia.</span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Alcance</h2>
                <p className="font-medium">Indica a distância máxima a partir do conjurador que a magia alcança.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Efeito</h2>
                <p className="font-medium">Determina se a magia afeta um alvo, uma área ou cria algo.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Duração</h2>
                <p className="font-medium">A duração indica por quanto tempo a magia mantém seu efeito. Quando ela termina, a energia mágica se dissipa e a magia acaba. Uma magia permanente ainda pode ser dissipada para encerrar sua duração.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Resistência</h2>
                <p className="font-medium mb-4">Magias prejudiciais normalmente permitem que seus alvos façam um teste de resistência para evitar ou reduzir seus efeitos.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Dificuldade: </strong>A CD do teste de resistência contra uma magia é 10 + metade do nível do personagem + atributo-chave da magia. (Samira é uma qareen feiticeira de 8º nível com Carisma 5. A CD para resistir a suas magias é 19 (10 +4 +5 = 19).)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Sucesso em Testes de Resistência: </strong>Uma criatura que passe em seu teste contra uma magia sem efeitos óbvios sente um tipo de formigamento ou força hostil, mas não pode deduzir a natureza exata do ataque. O conjurador também sente que a magia falhou — não é possível fingir ter sido enfeitiçado por Enfeitiçar, pois o conjurador saberá. No entanto, você não sabe se um alvo passou em um teste de resistência contra magias de área ou efeito.</span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Custos Especiais</h2>
                <p className="font-medium">Algumas magias poderosas exigem outros custos além de pontos de mana. Se uma magia possuir custo especial, isso estará indicado no fim do texto descritivo dela.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Anulando Magias</h2>
                <p className="font-medium mb-4">Você pode anular uma magia conjurada por outra pessoa, fazendo uma contramágica. Para isso, use a ação preparar para agir quando uma criatura lançar uma magia. Nesse instante, você deve lançar uma magia que possa anular a magia original.</p>
                <p className="font-medium mb-4">Normalmente, uma magia só pode ser anulada por outra igual — se um inimigo lança Bola de Fogo, você deve lançar outra Bola de Fogo para anulá-la. Mas algumas magias podem anular outras: por exemplo, Luz anula Escuridão (e vice-versa). Em caso de dúvida, cabe ao mestre julgar se uma magia anula outra. Como regra geral, uma magia nunca pode anular outra de círculo maior.</p>
                <p className="font-medium mb-4">Dissipar Magia é uma exceção — pode ser usada para anular qualquer magia (mesmo de círculos maiores), mas você deve fazer um teste de Misticismo oposto por Misticismo ou Vontade de quem está lançando a magia (o que for maior). Se você vencer, seu Dissipar Magia funciona como contramágica.</p>
                <p className="font-medium">Tanto a magia anulada quanto a usada como contramágica desfazem-se instantaneamente.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">“Mas é outro deus!”</h2>
                <p className="font-medium mb-4">Algumas magias trazem o nome de um deus no título. Isso significa que a magia é tipicamente ofertada (ou foi criada) por aquela divindade. Mas então, sendo devoto de outra fé, ainda posso aprendê-la e lançá-la?</p>
                <p className="font-medium mb-4">A resposta é sim. Embora existam rivalidades e inimizades, deuses maiores ainda formam um Panteão, são irmãos unidos sob uma mesma liderança. Poderes divinos são exclusivos, mas magias não (exceto quando sua descrição diz o contrário). Além disso, apesar de suas naturezas díspares, deuses são orgulhosos e vaidosos. Ficam satisfeitos quando devotos de outros entoam seu nome, recorrem a seus milagres. A divindade padroeira, contudo, talvez se aborreça um pouquinho...</p>
                <p className="font-medium">Como regra opcional, quando você lança uma magia com o nome de um deus inimigo ou rival, o mestre pode estabelecer que essa transgressão cobra um pequeno preço. Se falhar em um teste de Religião (CD 20) para conseguir perdão adequado, você sofre –2 em seu próximo teste de perícia e recebe uma breve visão de sua divindade, levemente desapontada...</p>
              </section>

            </div>
          </div>
        </div>

        {/* Filtros e Busca */}
        <section id="secao-magias" className="mb-12 p-6 md:p-8 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] space-y-8">
            <div>
                <label className="font-display block text-sm font-bold text-amber-950/70 mb-4 uppercase tracking-widest">Buscar Magia</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar por nome, descrição, escola ou efeito..."
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

            <div className="space-y-6">
                <div>
                    <h4 className="font-display text-xs font-bold text-red-800 mb-3 uppercase tracking-widest">Tipo de Magia</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedType("Todos")} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedType === "Todos" ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>Todos</button>
                        {ALL_SPELL_TYPES.map(type => (
                            <button key={type} onClick={() => setSelectedType(type)} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedType === type ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>{type}</button>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-display text-xs font-bold text-red-800 mb-3 uppercase tracking-widest">Escola de Magia</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedSchools([])} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedSchools.length === 0 ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>Todas</button>
                        {ALL_SPELL_SCHOOLS.map(school => (
                            <button key={school} onClick={() => toggleSchool(school)} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedSchools.includes(school) ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>{school}</button>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-display text-xs font-bold text-red-800 mb-3 uppercase tracking-widest">Círculo</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedCircle("Todos")} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedCircle === "Todos" ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>Todos</button>
                        {ALL_CIRCLES.map(circle => (
                            <button key={circle} onClick={() => setSelectedCircle(circle)} className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${selectedCircle === circle ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner" : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"}`}>{circle}º</button>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Grid de Magias */}
        <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mb-6 border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                <span className="text-red-800 text-3xl">❖</span> {filteredSpells.length} Magias Encontradas
            </h2>

            {filteredSpells.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-stretch">
                    {filteredSpells.map((spell) => (
                        <SpellCard
                        key={spell.id}
                        spell={spell}
                        onClick={() => openSpellModal(spell)}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
                  <PageGlyph className="text-amber-950/40" />
                  <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                    Nenhuma magia encontrada com os filtros aplicados.
                  </p>
                </div>
            )}
        </div>
      </main>

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