"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { skills } from "@/data/pericias";
import { Skill, SkillFunction, formatSkillStatus } from "@/types/skill";
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

// Componente auxiliar para o item da lista expansível (Acordeão - Estilo Pergaminho)
const SkillAccordionItem = ({ skill, isSearching }: { skill: Skill; isSearching: boolean }) => {
  // Mudamos o estado inicial para true, assim todas nascem abertas
  const [isOpen, setIsOpen] = useState(true);

  // Efeito que garante que a aba vai abrir caso o jogador digite algo na busca
  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
    }
  }, [isSearching]);

  return (
    <div className="border-2 border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))] overflow-hidden shadow-sm transition-all duration-300 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] scroll-mt-24">
      {/* Cabeçalho da Perícia (Clicável) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))] hover:bg-[rgb(var(--bg-card-rgb))]/80 transition-colors focus:outline-none group"
      >
        <div className="text-left">
          <h2 className="font-display text-xl md:text-2xl font-bold text-red-800 transition-colors drop-shadow-sm tracking-wide">
            {skill.name}
          </h2>
          <p className="font-display text-[10px] md:text-xs text-amber-950/60 mt-1 uppercase tracking-widest font-bold">
            {formatSkillStatus(skill)}
          </p>
        </div>
        <span className={`text-2xl text-red-800 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Conteúdo da Perícia (Expansível) */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 md:p-8 bg-[rgb(var(--bg-inset-rgb))] border-t-2 border-amber-900/20 space-y-6 md:space-y-8">
            {/* Descrição Geral */}
            <p className="text-amber-950/85 leading-relaxed font-medium text-base md:text-lg">
              {skill.description}
            </p>

            {/* Funções da Perícia */}
            <div className="space-y-4">
              {skill.functions.map((func: SkillFunction, index: number) => (
                <div key={index} className="bg-[rgb(var(--bg-card-rgb))]/50 p-5 md:p-6 rounded-xl border border-amber-900/20 shadow-sm hover:border-red-800/30 transition-colors">
                  <h4 className="font-display text-lg font-bold text-red-800 mb-2 flex items-start gap-2 tracking-wide uppercase">
                    <span className="text-[10px] text-red-800/60 mt-1.5">◆</span>
                    {func.title}.
                  </h4>
                  <p className="text-amber-950/85 leading-relaxed text-sm md:text-base font-medium md:pl-5">
                    {func.description}
                  </p>

                  {/* Renderização condicional da Tabela */}
                  {func.table && (
                    <div className="mt-4 mb-4 overflow-hidden rounded-lg border border-amber-900/20 md:ml-5 bg-[rgb(var(--bg-inset-rgb))] shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            {func.table.headers.map((header, idx) => (
                              <th key={idx} className="font-display p-2 md:p-3 font-bold uppercase tracking-widest text-sm text-center text-red-800 border-b-2 border-amber-900/20">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {func.table.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="text-amber-950/85 text-sm md:text-base even:bg-[rgb(var(--bg-card-rgb))]/40 odd:bg-transparent">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="p-2 md:p-3 text-center font-medium border-t border-amber-900/10">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Renderização condicional do Rodapé (Texto pós-tabela) */}
                  {func.footer && (
                    <p className="text-amber-950/85 leading-relaxed text-sm md:text-base font-medium md:pl-5 mt-4">
                      {func.footer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PericiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  // Lógica de Busca e Filtro
  const filteredSkills = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (!lowerCaseSearch) {
      return skills.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    }

    return skills
      .filter((skill) => {
        // 1. Busca por Nome da Perícia
        if (skill.name.toLowerCase().includes(lowerCaseSearch)) {
          return true;
        }

        // 2. Busca por Conteúdo das Funções
        const functionMatch = skill.functions.some((func) =>
          func.title.toLowerCase().includes(lowerCaseSearch) ||
          func.description.toLowerCase().includes(lowerCaseSearch)
        );

        return functionMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [searchTerm]);

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
                  <span className="text-red-800">Perícias</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Perícias
          </h1>
          <div className="flex items-center gap-3 w-full">
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
            onClick={() => setIsRulesOpen(!isRulesOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Regras de Perícias
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir ou recolher as regras básicas.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isRulesOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isRulesOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              <p className="font-medium text-lg leading-relaxed">
                Perícias medem suas capacidades mundanas. São usadas para realizar todo tipo de façanha, de saltar sobre um desfiladeiro a acertar um monstro com sua espada e decifrar um pergaminho antigo.
              </p>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Escolhendo Perícias
                  </h2>
                  <p className="font-medium">
                  Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual à sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe. Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).
                  </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Usando Perícias
                  </h2>
                  <p className="font-medium">
                  A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo.
                  </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Valor de Perícia
                  </h2>
                  <p className="font-medium mb-6">
                  Quando faz um teste de perícia, você soma seu valor de perícia ao resultado do 1d20. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6. Por exemplo, um personagem de 3º nível com Força 4 terá um valor de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu valor com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).
                  </p>

                  {/* Caixa de destaque padronizada */}
                  <div className="p-6 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800">
                      <p className="text-amber-950 font-bold italic mb-3 text-lg">Valor de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</p>
                      <p className="text-amber-950/70 text-sm font-medium">*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante.</p>
                  </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Atributo-Chave
                  </h2>
                  <p className="font-medium">
                  O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu valor de perícia (veja acima).
                  </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Treinamento e testes
                  </h2>
                  <p className="font-medium">
                  Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.
                  </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Penalidade de Armadura
                  </h2>
                  <p className="font-medium">
                  Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo.
                  </p>
              </section>

            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Perícia
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome da perícia ou função..."
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
                Exibindo {filteredSkills.length} resultado(s) para "{searchTerm}".
              </p>
            )}
        </div>

        {/* Lista de Perícias (Acordeão) */}
        <div className="space-y-6">
            {filteredSkills.map((skill) => (
            <SkillAccordionItem
              key={skill.id}
              skill={skill}
              isSearching={searchTerm.length > 0}
            />
            ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
              <PageGlyph className="text-amber-950/40" />
              <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma perícia encontrada com o termo buscado.
              </p>
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
    </div>
  );
}