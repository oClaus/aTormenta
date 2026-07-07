"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { alchemy } from "@/data/alchemys";
import { Alchemy, AlchemyType } from "@/types/alchemy";
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

// Ajustei as cores para terem bom contraste no fundo bege claro (pergaminho)
const typeColorMap: Record<string, string> = {
  "Preparados": "text-purple-800",
  "Catalisadores": "text-cyan-800",
  "Venenos": "text-emerald-800",
};

// --- Componentes Auxiliares ---

// Componente para a Tabela Filtrável de Alquímicos
const AlchemyFilterableTable = ({ allAlchemys }: { allAlchemys: Alchemy[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [] as AlchemyType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: AlchemyType) => {
    setFilters(prev => {
      const current = prev[key];

      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) as AlchemyType[] };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const filteredAlchemys = useMemo(() => {
    let filtered = allAlchemys;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(a =>
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    return filtered.sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allAlchemys, searchTerm, filters]);

  const allTypes: AlchemyType[] = ["Preparados", "Catalisadores", "Venenos"];

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border border-amber-900/20 shadow-sm">
      <h4 className="font-display text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as AlchemyType)}
            className={`font-display px-3 py-1.5 text-xs rounded-md transition-colors font-bold uppercase tracking-wide border shadow-sm ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900 shadow-inner"
                : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 w-full relative">
      {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
      <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Alquímico
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome, descrição ou origem..."
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
          <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
            Exibindo {filteredAlchemys.length} resultado(s) para "{searchTerm}".
          </p>
        )}
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Alquímicos */}
      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[rgb(var(--bg-card-rgb))]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="font-display w-[90%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Alquímicos</th>
              <th scope="col" className="font-display w-[5%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Preço</th>
              <th scope="col" className="font-display w-[5%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
            {filteredAlchemys.map((alchemy, index) => {
               const rowClass = index % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30";

               return (
                <tr key={alchemy.id} className={`${rowClass} hover:bg-[rgb(var(--bg-card-rgb))]/60 transition-colors group`}>
                  <td className="px-4 py-4 border-r-2 border-amber-900/10 align-top">
                    <div className="font-display font-bold text-amber-950 text-lg group-hover:text-red-800 transition-colors">{alchemy.name}</div>
                    <div className="text-sm text-amber-950/85 break-words font-serif font-medium mt-1 leading-relaxed">{alchemy.description}</div>
                    <div className="mt-4 flex items-center gap-2">
                        <div className={`font-display text-[10px] inline-block px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 uppercase tracking-widest shadow-sm font-bold ${typeColorMap[alchemy.type] || "text-amber-900"}`}>
                            {alchemy.type}
                        </div>
                        <div className="font-display text-[10px] inline-block px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                            {alchemy.origin}
                        </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-red-800 font-bold font-serif align-middle border-r-2 border-amber-900/10">{alchemy.price}</td>
                  <td className="px-4 py-4 text-center text-sm text-amber-950/85 font-serif font-medium align-middle">{alchemy.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredAlchemys.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[rgb(var(--bg-inset-rgb))] italic text-lg border-t-2 border-amber-900/20 flex flex-col items-center gap-3">
            <PageGlyph className="text-amber-950/40" />
            Nenhum alquímico encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
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
                  <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Equipamentos
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Alquímicos</span>
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
                Alquímicos
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
                  Regras de Alquimia
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir informações sobre preparados, catalisadores e venenos.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              <section>
                <p className="text-lg font-medium mb-6">Inclui preparados, catalisadores e venenos.</p>

                {/* Preparados */}
                <h3 className="font-display text-2xl font-bold text-red-800 pt-4 border-b-2 border-amber-900/10 pb-2 mb-4 tracking-wide">Preparados</h3>
                <p className="font-medium mb-6">Itens de uso único que geram efeitos variados quando usados. A CD para fabricar qualquer preparado é 15.</p>

                {/* Catalisadores */}
                <h3 className="font-display text-2xl font-bold text-red-800 pt-6 border-b-2 border-amber-900/10 pb-2 mb-4 tracking-wide">Catalisadores</h3>
                <p className="font-medium mb-4">Substâncias preparadas através de processos alquímicos, catalisadores são itens de uso único que melhoram o efeito de uma magia quando ela é lançada. Você precisa estar empunhando um catalisador para usá-lo e só pode usar um catalisador por vez. Reduções de custo de catalisadores acumulam com outras reduções de custo. Catalisadores que aumentam o dano só funcionam em magias que já causem dano.</p>
                <p className="font-medium mb-6">A CD para fabricar qualquer catalisador é 15 e para fabricá-lo você deve ser treinado em Misticismo.</p>

                {/* Venenos */}
                <h3 className="font-display text-2xl font-bold text-red-800 pt-6 border-b-2 border-amber-900/10 pb-2 mb-4 tracking-wide">Venenos</h3>
                <p className="font-medium mb-4">Substâncias naturais ou preparadas perigosas para seres vivos. Exceto se indicado o contrário, a CD para fabricar qualquer veneno é 20.</p>

                <p className="font-bold text-amber-950 uppercase tracking-widest mt-6 mb-4">Regras de Venenos:</p>
                <p className="font-medium mb-4">Venenos são classificados de acordo com o método de inoculação.</p>

                <ul className="space-y-4 mb-6 ml-2 md:ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Contato: </strong>Inoculados via um ataque que acerte (ou se a vítima toca o objeto envenenado). Aplicar um veneno em uma arma exige uma ação de movimento e uma rolagem de 1d6. Se você rolar 1, se envenena acidentalmente (mas veja o poder Venefício). O veneno permanece na arma até acertar um ataque ou até o fim da cena (o que acontecer primeiro).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Inalação: </strong>Inoculados via respiração. São armazenados em frascos que podem ser arremessados em alcance curto. Quando o frasco se quebra, libera o veneno num cubo com 3m de lado. Todas as criaturas na área são expostas — prender a respiração não impede a inoculação, pois o veneno pode entrar por canais lacrimais, membranas nasais e outras partes do corpo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ingestão: </strong> Inoculados através da ingestão de comida ou bebida.</span>
                  </li>
                </ul>

                <p className="font-medium border-t-2 border-amber-900/10 pt-6">Uma criatura exposta a um veneno deve fazer um teste de Fortitude (CD definida pelo aplicador do veneno, atributo-chave Int). Se falhar, sofre o efeito do veneno (efeitos em parênteses afetam vítimas que passem no teste de resistência). Efeitos que não sejam instantâneos, como perda de PV recorrente ou condições, deixam a vítima com a condição envenenada, e curar esta condição encerra quaisquer efeitos de veneno (mas não recupera PV perdidos).</p>
              </section>

            </div>
          </div>
        </div>

        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="font-display text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Acervo Alquímico
            </h2>
            <AlchemyFilterableTable allAlchemys={alchemy} />
        </section>
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
    </div>
  );
}