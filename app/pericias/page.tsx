"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { skills } from "@/data/pericias";
import { Skill, SkillFunction, formatSkillStatus } from "@/types/skill";

// Componente auxiliar para o item da lista expansível (Acordeão - Estilo Pergaminho)
const SkillAccordionItem = ({ skill, isSearching }: { skill: Skill; isSearching: boolean }) => {
  // 1. Mudamos o estado inicial para true, assim todas nascem abertas
  const [isOpen, setIsOpen] = useState(true);

  // 2. Efeito que garante que a aba vai abrir caso o jogador digite algo na busca
  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
    }
  }, [isSearching]);

  return (
    <div className="border-2 border-amber-900/30 rounded-xl bg-[#d9c8a9] overflow-hidden shadow-sm transition-all duration-300 hover:border-red-800/50 scroll-mt-24">
      {/* Cabeçalho da Perícia (Clicável) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-[#d9c8a9] hover:bg-[#e8dac1] transition-colors focus:outline-none group"
      >
        <div className="text-left">
          <h2 className="text-2xl font-bold text-amber-950 group-hover:text-red-800 transition-colors drop-shadow-sm font-serif">
            {skill.name}
          </h2>
          <p className="text-sm text-red-800/80 mt-1 font-serif uppercase tracking-wide font-bold">
            {formatSkillStatus(skill)}
          </p>
        </div>
        <span className={`text-2xl text-red-800 transform transition-transform duration-300 font-serif ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Conteúdo da Perícia (Expansível) */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 bg-[#fbf5e6] border-t-2 border-amber-900/20 space-y-6">
            {/* Descrição Geral */}
            <p className="text-amber-900/90 leading-relaxed font-serif font-medium text-lg">
              {skill.description}
            </p>

            {/* Funções da Perícia */}
            <div className="space-y-4">
              {skill.functions.map((func: SkillFunction, index: number) => (
                <div key={index} className="bg-[#e8dac1] p-5 rounded-xl border-2 border-amber-900/20 shadow-sm hover:border-red-800/30 transition-colors">
                  <h4 className="text-lg font-bold text-red-800 mb-2 font-serif flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-800"></span>
                    {func.title}
                  </h4>
                  <p className="text-amber-950 leading-relaxed font-serif text-sm font-medium">
                    {func.description}
                  </p>
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
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
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
                <span className="text-red-800">Perícias</span>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12 max-w-screen-xl mx-auto">
        {/* Seção de Regras e Texto Introdutório */}
        
        {/* Título Principal Solto */}
        <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Perícias
            </h1>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsRulesOpen(!isRulesOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras de Perícias
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as regras básicas.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isRulesOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isRulesOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10 space-y-8">
              
              <p className="text-amber-950 font-medium text-lg leading-relaxed">
                Perícias medem suas capacidades mundanas. São usadas para realizar todo tipo de façanha, de saltar sobre um desfiladeiro a acertar um monstro com sua espada e decifrar um pergaminho antigo.
              </p>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Escolhendo Perícias
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed font-medium">
                  Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual à sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe. Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).
                  </p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Usando Perícias
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed font-medium">
                  A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo.
                  </p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Valor de Perícia
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed mb-4 font-medium">
                  Quando faz um teste de perícia, você soma seu valor de perícia ao resultado do $d20$. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6. Por exemplo, um personagem de 3º nível com Força 4 terá um valor de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu valor com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).
                  </p>
                  <div className="bg-[#e8dac1] p-5 border-l-4 border-red-800 rounded-r-xl shadow-sm border border-amber-900/20">
                      <p className="text-amber-950 font-serif font-bold italic mb-2">Valor de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</p>
                      <p className="text-amber-900/70 font-serif text-sm font-medium">*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante.</p>
                  </div>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Atributo-Chave
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed font-medium">
                  O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu valor de perícia (veja acima).
                  </p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Treinamento e testes
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed font-medium">
                  Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.
                  </p>
              </div>

              <div className="border-t-2 border-amber-900/20 pt-6">
                  <h2 className="text-2xl font-bold text-red-800 mb-3 font-serif">
                  Penalidade de Armadura
                  </h2>
                  <p className="text-amber-900/90 font-serif leading-relaxed font-medium">
                  Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo. Veja o Capítulo 3: Equipamento para detalhes.
                  </p>
              </div>
            </div>
          </div>
        </div>
        

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Perícia
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome da perícia ou função..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
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
                Exibindo {filteredSkills.length} resultado(s) para "{searchTerm}".
              </p>
            )}
        </div>

        {/* Lista de Perícias (Acordeão) */}
        <div className="space-y-4">
            {filteredSkills.map((skill) => (
            <SkillAccordionItem 
              key={skill.id} 
              skill={skill} 
              isSearching={searchTerm.length > 0} 
            />
            ))}
        </div>

        {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif bg-[#e8dac1]/50 mt-8">
               <p className="text-lg">Nenhuma perícia encontrada com o termo buscado.</p>
            </div>
        )}
        
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}