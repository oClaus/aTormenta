"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// IMPORTAÇÃO
import { difficulties, difficultiesNote, ruleSections, extendedTests, specialSituations, objectStats } from "@/data/rules";
import { RuleSection, Difficulty, ExtendedTest, SpecialSituation, ObjectStat } from "@/types/rule";
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

// --- Componentes Auxiliares Estilizados ---

const SpecialSituationsTable = ({ data }: { data: typeof specialSituations }) => (
  <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 mt-6 bg-[rgb(var(--bg-card-rgb))] font-serif">
    <table className="min-w-full divide-y-2 divide-amber-900/20">
      <caption className="font-display p-4 md:p-5 text-xl md:text-2xl font-bold text-red-800 bg-[rgb(var(--bg-card-rgb))] border-b-2 border-amber-900/20 text-left uppercase tracking-wide">
        Tabela: Situações Especiais
      </caption>
      <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80">
        <tr>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Condição</th>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Modificador</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
        <tr className="bg-[rgb(var(--bg-card-rgb))]/50 border-b-2 border-amber-900/20"><td colSpan={2} className="font-display px-4 py-3 text-xs md:text-sm font-bold text-red-800 uppercase tracking-widest">O ATACANTE ESTÁ... (no ataque)</td></tr>
        {data.attacker.map((item) => (
          <tr key={item.condition} className="hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
            <td className="px-4 py-3 text-sm md:text-base text-amber-950/85 font-medium">{item.condition}</td>
            <td className="px-4 py-3 text-sm md:text-base text-red-800 font-bold">{item.modifier}</td>
          </tr>
        ))}
        <tr className="bg-[rgb(var(--bg-card-rgb))]/50 border-b-2 border-amber-900/20 border-t-2 border-amber-900/20"><td colSpan={2} className="font-display px-4 py-3 text-xs md:text-sm font-bold text-red-800 uppercase tracking-widest">O ALVO ESTÁ... (na defesa)</td></tr>
        {data.target.map((item) => (
          <tr key={item.condition} className="hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
            <td className="px-4 py-3 text-sm md:text-base text-amber-950/85 font-medium">{item.condition}</td>
            <td className="px-4 py-3 text-sm md:text-base text-red-800 font-bold">{item.modifier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ObjectStatsTable = ({ data }: { data: typeof objectStats }) => (
  <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 mt-6 bg-[rgb(var(--bg-card-rgb))] font-serif">
    <table className="min-w-full divide-y-2 divide-amber-900/20">
      <caption className="font-display p-4 md:p-5 text-xl md:text-2xl font-bold text-red-800 bg-[rgb(var(--bg-card-rgb))] border-b-2 border-amber-900/20 text-left uppercase tracking-wide">
        Tabela: Estatísticas de Objetos
      </caption>
      <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80">
        <tr>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Exemplo</th>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Tam.</th>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Def</th>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">RD</th>
          <th className="font-display px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">PV</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))] text-sm md:text-base">
        <tr className="bg-[rgb(var(--bg-card-rgb))]/50 border-b-2 border-amber-900/20"><td colSpan={5} className="font-display px-4 py-3 font-bold text-red-800 uppercase tracking-widest text-xs md:text-sm">OBJETOS GERAIS</td></tr>
        {data.geral.map((obj) => (
          <tr key={obj.example} className="hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
            <td className="px-4 py-3 text-amber-950/85 font-medium">{obj.example}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{obj.size}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{obj.def}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{obj.rd}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{obj.pv}</td>
          </tr>
        ))}
        <tr className="bg-[rgb(var(--bg-card-rgb))]/50 border-b-2 border-amber-900/20 border-t-2 border-amber-900/20"><td colSpan={5} className="font-display px-4 py-3 font-bold text-red-800 uppercase tracking-widest text-xs md:text-sm">ARMAS, ARMADURAS E ESCUDOS*</td></tr>
        {data.equipamento.map((item) => (
          <tr key={item.example} className="hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
            <td colSpan={3} className="px-4 py-3 text-amber-950/85 font-medium">{item.example}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{item.rd}</td>
            <td className="px-4 py-3 text-amber-950/70 font-medium">{item.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 md:p-5 text-xs md:text-sm text-amber-950/70 bg-[rgb(var(--bg-edge-rgb))]/50 border-t-2 border-amber-900/20 italic font-medium">
      *Divida por 2 para itens reduzidos, multiplique por 2 para aumentados e por 5 para gigantes.
    </div>
  </div>
);

const RuleAccordionItem = ({ section, isSearching }: { section: RuleSection; isSearching: boolean }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
    }
  }, [isSearching]);

  const renderContent = () => {
    if (section.id === "testes-gerais") {
      return (
        <>
          <div className="markdown-content">{section.content}</div>
        </>
      );
    }

    if (section.id === "testes-estendidos") {
      return (
        <>
          <div className="markdown-content">{section.content}</div>
        </>
      );
    }

    if (section.id === "situacoes-especiais") {
    return (
      <>
        <div className="markdown-content">{section.content}</div>
        <SpecialSituationsTable data={specialSituations} />
      </>
    );
  }

    if (section.id === "alvos-areas") {
      return (
        <>
          <div className="markdown-content">{section.content}</div>
          <div className="mt-10 flex flex-col items-center w-full">
            <div className="relative group w-full max-w-2xl bg-[rgb(var(--bg-inset-rgb))] rounded-xl p-3 md:p-4 border-2 border-amber-900/20 shadow-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-amber-900 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <img
                src="/regras/area.png"
                alt="Diagrama de Áreas de Efeito"
                className="relative rounded-lg border-2 border-amber-900/10 w-full h-auto object-contain mix-blend-multiply filter sepia-[0.2]"
              />
            </div>
            <p className="text-center text-xs md:text-sm text-amber-950/60 mt-4 italic font-display font-bold tracking-wide">
              Diagrama: Tipos de Áreas de Efeito e Posicionamento no Grid.
            </p>
          </div>
        </>
      );
    }

    if (section.id === "quebrando-objetos") {
    return (
      <>
        <div className="markdown-content">{section.content}</div>
        <ObjectStatsTable data={objectStats} />
      </>
    );
  }

    return <div className="markdown-content">{section.content}</div>;
  };

  return (
    <div id={section.id} className="border-2 border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))] overflow-hidden shadow-sm hover:border-red-800/40 transition-all duration-300 scroll-mt-24 mb-6">
      <button
        className="w-full flex justify-between items-center p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))] hover:bg-[rgb(var(--bg-card-rgb))]/80 transition-colors focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-display text-xl md:text-2xl font-bold text-amber-950 group-hover:text-red-800 transition-colors text-left pr-4 tracking-wide drop-shadow-sm">
            {section.title}
        </h3>
        <span className={`text-red-800 text-2xl transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 md:p-8 bg-[rgb(var(--bg-inset-rgb))] text-amber-950/85 text-base md:text-lg text-left md:text-justify border-t-2 border-amber-900/20 font-serif leading-relaxed">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RegrasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedSections = useMemo(() => {
    return [...ruleSections].sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  }, []);

  const filteredSections = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (!lowerCaseSearch) return sortedSections;

    return sortedSections.filter(section => {
      const matchTitle = section.title.toLowerCase().includes(lowerCaseSearch);
      const matchContent = typeof section.content === 'string' && section.content.toLowerCase().includes(lowerCaseSearch);
      return matchTitle || matchContent;
    });
  }, [searchTerm, sortedSections]);

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
                  <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Regras do Jogo</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 p-6 md:p-8 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/30 w-full shadow-sm">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-4 tracking-wider drop-shadow-sm">
              Regras do Jogo
            </h1>
            <p className="text-amber-950/85 text-lg leading-relaxed font-medium">
              Consulta rápida e detalhada das regras básicas de testes, dificuldades e condições de Arton.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Menu Lateral / Índice Rápido */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="sticky top-32 p-5 md:p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-sm">
              <h2 className="font-display text-lg font-bold text-red-800 mb-4 uppercase tracking-widest border-b-2 border-amber-900/20 pb-2">
                Índice Rápido
              </h2>
              {/* Desktop View */}
              <ul className="hidden lg:flex flex-col gap-2">
                {sortedSections.map((section) => (
                  <li key={`nav-${section.id}`}>
                    <button
                      onClick={() => setSearchTerm(section.title)}
                      className="text-left w-full text-sm md:text-base font-medium text-amber-950/85 hover:text-red-800 hover:bg-[rgb(var(--bg-inset-rgb))] px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-amber-900/10"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile View */}
              <div className="flex lg:hidden overflow-x-auto gap-3 pb-2 -mx-2 px-2" style={{ scrollbarWidth: 'thin' }}>
                {sortedSections.map((section) => (
                  <button
                    key={`nav-mobile-${section.id}`}
                    onClick={() => setSearchTerm(section.title)}
                    className="flex-shrink-0 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 px-4 py-2 rounded-lg text-sm font-bold text-amber-950/80 hover:border-red-800/50 hover:text-red-800 transition-colors shadow-sm"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Área de Busca e Resultados */}
          <div className="w-full lg:w-3/4">

            {/* Search Bar */}
            <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full relative">
                <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                    Buscar Regra
                </label>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Buscar por título ou trecho da regra..."
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
                {searchTerm && (
                  <p className="text-sm font-medium text-amber-950/70 mt-3 italic tracking-wide">
                    Exibindo {filteredSections.length} resultado(s) para "{searchTerm}".
                  </p>
                )}
            </div>

            <div className="space-y-6 mb-16">
              {filteredSections.map((section) => (
                <RuleAccordionItem
                  key={section.id}
                  section={section}
                  isSearching={searchTerm.length > 0}
                />
              ))}

              {/* Empty State Padronizado */}
              {filteredSections.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center gap-3">
                  <PageGlyph className="text-amber-950/40" />
                  <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                    Nenhuma regra encontrada nos manuscritos de Arton.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
          .markdown-content h4 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #991b1b;
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-family: var(--font-cinzel), Cambria, serif;
            border-bottom: 2px solid rgba(120, 53, 15, 0.2);
            padding-bottom: 0.5rem;
            letter-spacing: 0.025em;
          }
          .markdown-content strong {
            color: #991b1b;
            font-weight: bold;
          }
          .markdown-content p {
            margin-bottom: 1.25rem;
            line-height: 1.75;
            color: rgb(var(--ink-rgb) / 0.85);
            font-weight: 500;
          }
          .markdown-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1.25rem;
            color: rgb(var(--ink-rgb) / 0.85);
            font-weight: 500;
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
          }
          .markdown-content code {
             background-color: rgba(120, 53, 15, 0.1);
             padding: 0.15rem 0.4rem;
             border-radius: 0.375rem; /* rounded-md */
             color: #991b1b;
             font-size: 0.9em;
             font-weight: bold;
             border: 1px solid rgba(120, 53, 15, 0.15);
          }
      `}</style>

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
    </div>
  );
}