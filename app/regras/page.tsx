"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// IMPORTAÇÃO
import { difficulties, difficultiesNote, ruleSections, extendedTests, specialSituations, objectStats } from "@/data/rules";
import { RuleSection, Difficulty, ExtendedTest, SpecialSituation, ObjectStat } from "@/types/rule";


// --- Componentes Auxiliares Estilizados ---

const SpecialSituationsTable = ({ data }: { data: typeof specialSituations }) => (
  <div className="overflow-x-auto shadow-md rounded-xl border-2 border-amber-900/20 mt-4 bg-[#e8dac1]">
    <table className="min-w-full divide-y divide-amber-900/20 font-serif">
      <caption className="p-4 text-xl font-bold text-red-800 bg-[#d9c8a9] border-b-2 border-amber-900/20 text-left uppercase tracking-wide">
        Tabela: Situações Especiais
      </caption>
      <thead className="bg-[#d9c8a9] text-red-800">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Condição</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Modificador</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
        <tr className="bg-[#e8dac1]/80 border-b-2 border-red-800/20"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-800 uppercase tracking-widest">O ATACANTE ESTÁ... (no ataque)</td></tr>
        {data.attacker.map((item) => (
          <tr key={item.condition} className="hover:bg-[#e8dac1] transition-colors">
            <td className="px-4 py-2 text-sm text-amber-950 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-red-700 font-bold">{item.modifier}</td>
          </tr>
        ))}
        <tr className="bg-[#e8dac1]/80 border-b-2 border-red-800/20 border-t-2 border-amber-900/20"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-800 uppercase tracking-widest">O ALVO ESTÁ... (na defesa)</td></tr>
        {data.target.map((item) => (
          <tr key={item.condition} className="hover:bg-[#e8dac1] transition-colors">
            <td className="px-4 py-2 text-sm text-amber-950 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-red-700 font-bold">{item.modifier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ObjectStatsTable = ({ data }: { data: typeof objectStats }) => (
  <div className="overflow-x-auto shadow-md rounded-xl border-2 border-amber-900/20 mt-4 bg-[#e8dac1]">
    <table className="min-w-full divide-y divide-amber-900/20 font-serif">
      <caption className="p-4 text-xl font-bold text-red-800 bg-[#d9c8a9] border-b-2 border-amber-900/20 text-left uppercase tracking-wide">
        Tabela: Estatísticas de Objetos
      </caption>
      <thead className="bg-[#d9c8a9] text-red-800">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Exemplo</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Tam.</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Def</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">RD</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">PV</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6] text-sm">
        <tr className="bg-[#e8dac1]/80 border-b-2 border-red-800/20"><td colSpan={5} className="px-4 py-2 font-bold text-red-800 uppercase tracking-widest">OBJETOS GERAIS</td></tr>
        {data.geral.map((obj) => (
          <tr key={obj.example} className="hover:bg-[#e8dac1] transition-colors">
            <td className="px-4 py-2 text-amber-950 font-medium">{obj.example}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{obj.size}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{obj.def}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{obj.rd}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{obj.pv}</td>
          </tr>
        ))}
        <tr className="bg-[#e8dac1]/80 border-b-2 border-red-800/20 border-t-2 border-amber-900/20"><td colSpan={5} className="px-4 py-2 font-bold text-red-800 uppercase tracking-widest">ARMAS, ARMADURAS E ESCUDOS*</td></tr>
        {data.equipamento.map((item) => (
          <tr key={item.example} className="hover:bg-[#e8dac1] transition-colors">
            <td colSpan={3} className="px-4 py-2 text-amber-950 font-medium">{item.example}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{item.rd}</td>
            <td className="px-4 py-2 text-amber-900/80 font-medium">{item.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 text-xs text-amber-900/70 bg-[#d9c8a9] border-t-2 border-amber-900/20 italic font-medium">
      *Divida por 2 para itens reduzidos, multiplique por 2 para aumentados e por 5 para gigantes.
    </div>
  </div>
);

const RuleAccordionItem = ({ section, isSearching }: { section: RuleSection; isSearching: boolean }) => {
  // Alteração: O estado inicial agora é TRUE, fazendo com que todas as abas nasçam abertas
  const [isOpen, setIsOpen] = useState(true);

  // Alteração: Se o usuário buscar algo, força abrir caso tenha sido fechado manualmente.
  // Sem o 'else', ao apagar a busca, eles continuam abertos!
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
          <div className="mt-8 flex flex-col items-center w-full">
            
            <div className="relative group w-full max-w-2xl bg-[#e8dac1] rounded-lg p-2 border-2 border-amber-900/30 shadow-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-amber-900 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/regras/area.png" 
                alt="Diagrama de Áreas de Efeito" 
                className="relative rounded border border-amber-900/20 w-full h-auto object-contain mix-blend-multiply filter sepia-[0.2]"
              />
            </div>
            <p className="text-center text-xs text-amber-900/70 mt-3 italic font-serif font-bold">
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
    <div id={section.id} className="border-2 border-amber-900/30 rounded bg-[#d9c8a9] overflow-hidden shadow-sm hover:border-red-800/50 transition-all duration-300 scroll-mt-24">
      <button
        className="w-full flex justify-between items-center p-5 bg-[#d9c8a9] hover:bg-[#e8dac1] transition-colors focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors text-left pr-4 font-serif tracking-wide drop-shadow-sm">
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
          <div className="p-6 bg-[#fbf5e6] text-amber-900/90 border-t-2 border-amber-900/20 font-serif">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RegrasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Cria uma versão da sua lista de regras organizada em ordem alfabética (A-Z)
  const sortedSections = useMemo(() => {
    return [...ruleSections].sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  }, []);

  // Aplica o filtro de busca em cima da lista já ordenada
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
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Regras do Jogo</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12 max-w-screen-2xl mx-auto">
        <div className="mb-12 p-8 bg-[#e8dac1] rounded border-2 border-amber-900/30 w-full shadow-sm">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-6 drop-shadow-sm">
            Regras do Jogo
            </h1>
            <p className="text-amber-950 text-lg font-serif leading-relaxed font-medium">
            Consulta rápida e detalhada das regras básicas de testes, dificuldades e condições de Arton.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Menu Lateral / Índice Rápido */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="sticky top-32 p-6 rounded bg-[#d9c8a9] border-2 border-amber-900/30 shadow-sm">
              <h2 className="text-lg font-bold text-red-800 mb-4 uppercase tracking-wider border-b border-amber-900/20 pb-2">
                Índice Rápido
              </h2>
              {/* Desktop View */}
              <ul className="hidden lg:flex flex-col gap-2">
                {sortedSections.map((section) => (
                  <li key={`nav-${section.id}`}>
                    <button
                      onClick={() => setSearchTerm(section.title)}
                      className="text-left w-full text-sm font-medium text-amber-950 hover:text-red-700 hover:bg-[#e8dac1] px-2 py-1.5 rounded transition-colors"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* Mobile View */}
              <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-2 px-2" style={{ scrollbarWidth: 'thin' }}>
                {sortedSections.map((section) => (
                  <button
                    key={`nav-mobile-${section.id}`}
                    onClick={() => setSearchTerm(section.title)}
                    className="flex-shrink-0 bg-[#e8dac1] border border-amber-900/20 px-3 py-1.5 rounded-full text-xs font-bold text-amber-900 hover:bg-red-800 hover:text-white transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Área de Busca e Resultados */}
          <div className="w-full lg:w-3/4">
            <div className="mb-8 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full relative">
                <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                    Buscar Regra
                </label>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Buscar por título ou trecho da regra..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
                    />
                    {searchTerm ? (
                      <button 
                        onClick={() => setSearchTerm("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform"
                        title="Limpar busca"
                      >
                        ✕
                      </button>
                    ) : (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                          🔍
                      </div>
                    )}
                </div>
                {searchTerm && (
                  <p className="text-xs font-medium text-amber-900/70 mt-3 italic">
                    Exibindo {filteredSections.length} resultado(s) para "{searchTerm}".
                  </p>
                )}
            </div>

            <div className="space-y-4 mb-16">
              {filteredSections.map((section) => (
                <RuleAccordionItem 
                  key={section.id} 
                  section={section} 
                  isSearching={searchTerm.length > 0} 
                />
              ))}
              {filteredSections.length === 0 && (
                <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif bg-[#e8dac1]/50">
                  <p className="text-lg">Nenhuma regra encontrada com o termo de busca aplicado.</p>
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
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-family: serif;
            border-bottom: 1px solid rgba(120, 53, 15, 0.2);
            padding-bottom: 0.25rem;
          }
          .markdown-content strong {
            color: #991b1b;
            font-weight: bold;
          }
          .markdown-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: rgba(120, 53, 15, 0.9);
            font-weight: 500;
          }
          .markdown-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            color: rgba(120, 53, 15, 0.8);
            font-weight: 500;
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
          }
          .markdown-content code {
             background-color: rgba(120, 53, 15, 0.1);
             padding: 0.1rem 0.3rem;
             border-radius: 0.25rem;
             color: #991b1b;
             font-size: 0.9em;
             font-weight: bold;
          }
      `}</style>

      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}