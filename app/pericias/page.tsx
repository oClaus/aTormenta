"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { skills } from "@/data/pericias";
import { Skill, SkillFunction, formatSkillStatus } from "@/types/skill"; // Importamos a função formatSkillStatus

// Componente auxiliar para o item da lista expansível (Acordeão)
const SkillAccordionItem = ({ skill }: { skill: Skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-500/30 rounded-xl overflow-hidden shadow-lg">
      {/* Cabeçalho da Perícia (Clicável) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-purple-900/50 hover:bg-purple-800/70 transition-colors"
      >
        <div className="text-left">
          <h2 className="text-2xl font-bold text-purple-300">
            {skill.name}
          </h2>
          {/* USO DA FUNÇÃO REVISADA */}
          <p className="text-sm text-gray-400 mt-1">
            {formatSkillStatus(skill)}
          </p>
        </div>
        <span className="text-2xl text-purple-300 transform transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Conteúdo da Perícia (Expansível) */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 p-5 pt-0" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <div className="pt-4 border-t border-purple-500/30 space-y-6">
          {/* Descrição Geral */}
          <p className="text-gray-300 leading-relaxed">
            {skill.description}
          </p>

          {/* Funções da Perícia */}
          <div className="space-y-4">
            {skill.functions.map((func: SkillFunction, index: number) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-lg font-semibold text-pink-400 mb-2">
                  {func.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
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

  // Lógica de Busca e Filtro (Inalterada, pois já buscava por nome e conteúdo)
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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Perícias</span>
        </div>
      </header>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Perícias
        </h1>
        <p className="text-gray-400 text-lg">Perícias medem suas capacidades mundanas. São usadas para realizar todo tipo de façanha, de saltar sobre um desfiladeiro a acertar um monstro com sua espada e decifrar um pergaminho antigo.</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Escolhendo Perícias
        </h1>
        <p className="text-gray-400 text-lg">Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual à sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe. Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Usando Perícias
        </h1>
        <p className="text-gray-400 text-lg">A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo.</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Valor de Perícia
        </h1>
        <p className="text-gray-400 text-lg">Quando faz um teste de perícia, você soma seu valor de perícia ao resultado do $d20$. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6. Por exemplo, um personagem de 3º nível com Força 4 terá um valor de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu valor com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).</p>
        <p className="text-gray-400 text-lg">Valor de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</p>
        <p className="text-gray-400 text-lg">*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante.</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Atributo-Chave
        </h1>
        <p className="text-gray-400 text-lg">O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu valor de perícia (veja acima).</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Treinamento e testes
        </h1>
        <p className="text-gray-400 text-lg">Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.</p>
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
         Penalidade de Armadura
        </h1>
        <p className="text-gray-400 text-lg">Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo. Veja o Capítulo 3: Equipamento para detalhes.</p>
      </div>


      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome da perícia ou função..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Lista de Perícias (Acordeão) */}
      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <SkillAccordionItem key={skill.id} skill={skill} />
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhuma perícia encontrada.</p>
        </div>
      )}
    </main>
  );
}