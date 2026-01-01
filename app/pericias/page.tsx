"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { skills } from "@/data/pericias";
import { Skill, SkillFunction, formatSkillStatus } from "@/types/skill";

// Componente auxiliar para o item da lista expansível (Acordeão - Estilo Stone/Fúcsia)
const SkillAccordionItem = ({ skill }: { skill: Skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-fuchsia-900/50 bg-stone-900">
      {/* Cabeçalho da Perícia (Clicável) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-stone-900 hover:bg-stone-800 transition-colors border-b border-stone-800/50"
      >
        <div className="text-left">
          <h2 className="text-2xl font-bold text-fuchsia-600 font-serif">
            {skill.name}
          </h2>
          {/* USO DA FUNÇÃO REVISADA */}
          <p className="text-sm text-stone-500 mt-1 font-serif uppercase tracking-wide">
            {formatSkillStatus(skill)}
          </p>
        </div>
        <span className={`text-2xl text-fuchsia-700 transform transition-transform duration-300 font-serif ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Conteúdo da Perícia (Expansível) */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-stone-900/50 ${
          isOpen ? "max-h-[2000px] opacity-100 p-6" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="space-y-6">
          {/* Descrição Geral */}
          <p className="text-stone-300 leading-relaxed font-serif">
            {skill.description}
          </p>

          {/* Funções da Perícia */}
          <div className="space-y-4">
            {skill.functions.map((func: SkillFunction, index: number) => (
              <div key={index} className="bg-stone-950 p-5 rounded border border-stone-800 shadow-inner">
                <h4 className="text-lg font-bold text-violet-400 mb-2 font-serif flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                  {func.title}
                </h4>
                <p className="text-stone-400 leading-relaxed font-serif text-sm">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PericiasPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-fuchsia-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Perícias</span>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Seção de Regras e Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full space-y-8">
            
            {/* Header */}
            <div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-fuchsia-500 mb-4 drop-shadow-md">
                Perícias
                </h1>
                <p className="text-stone-300 font-serif text-lg leading-relaxed">
                Perícias medem suas capacidades mundanas. São usadas para realizar todo tipo de façanha, de saltar sobre um desfiladeiro a acertar um monstro com sua espada e decifrar um pergaminho antigo.
                </p>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Escolhendo Perícias
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed">
                Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual à sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe. Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).
                </p>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Usando Perícias
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed">
                A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo.
                </p>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Valor de Perícia
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed mb-4">
                Quando faz um teste de perícia, você soma seu valor de perícia ao resultado do $d20$. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6. Por exemplo, um personagem de 3º nível com Força 4 terá um valor de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu valor com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).
                </p>
                <div className="bg-stone-950 p-4 border-l-4 border-fuchsia-800 rounded-r">
                    <p className="text-stone-300 font-serif italic mb-2">Valor de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</p>
                    <p className="text-stone-500 font-serif text-sm">*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante.</p>
                </div>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Atributo-Chave
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed">
                O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu valor de perícia (veja acima).
                </p>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Treinamento e testes
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed">
                Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.
                </p>
            </div>

            <div className="border-t border-stone-800 pt-6">
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 font-serif">
                Penalidade de Armadura
                </h2>
                <p className="text-stone-400 font-serif leading-relaxed">
                Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo. Veja o Capítulo 3: Equipamento para detalhes.
                </p>
            </div>
        </section>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Perícia
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome da perícia ou função..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Lista de Perícias (Acordeão) */}
        <div className="space-y-4">
            {filteredSkills.map((skill) => (
            <SkillAccordionItem key={skill.id} skill={skill} />
            ))}
        </div>

        {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl font-serif">
            Nenhuma perícia encontrada.
            </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}