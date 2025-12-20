"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// IMPORTAÇÃO
import { difficulties, difficultiesNote, ruleSections, extendedTests, specialSituations, objectStats } from "@/data/rules";
import { RuleSection, Difficulty, ExtendedTest, SpecialSituation, ObjectStat } from "@/types/rule";

// --- Componentes Auxiliares ---

const DifficultyTable = ({ data }: { data: Difficulty[] }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30 mt-4">
    <table className="min-w-full divide-y divide-red-500/30">
      <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50 rounded-t-xl">
        Tabela: Dificuldades
      </caption>
      <thead className="bg-red-900/70 text-red-200">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Tarefa</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">CD</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Exemplo</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-red-500/20">
        {data.map((item, index) => (
          <tr key={item.task} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-red-300">{item.task}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.cd}</td>
            {/* CORREÇÃO: min-w e whitespace-normal para não quebrar layout em telas menores */}
            <td className="px-4 py-2 text-sm text-gray-300 min-w-[200px] whitespace-normal">{item.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="p-4 text-xs text-gray-400 bg-red-900/50 rounded-b-xl">{difficultiesNote}</p>
  </div>
);

const ExtendedTestTable = ({ data }: { data: ExtendedTest[] }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30 mt-4">
    <table className="min-w-full divide-y divide-red-500/30">
      <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50 rounded-t-xl">
        Tabela: Testes Estendidos
      </caption>
      <thead className="bg-red-900/70 text-red-200">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Sucessos Exigidos</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Complexidade</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Exemplos</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-red-500/20">
        {data.map((item, index) => (
          <tr key={item.successes} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-red-300">{item.successes}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{item.complexity}</td>
            <td className="px-4 py-2 text-sm text-gray-300 min-w-[200px] whitespace-normal">{item.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SpecialSituationsTable = ({ data }: { data: typeof specialSituations }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30 mt-4">
    <table className="min-w-full divide-y divide-red-500/30">
      <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50">
        Tabela: Situações Especiais
      </caption>
      <thead className="bg-red-900/70 text-red-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">Condição</th>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">Modificador</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-red-500/20 bg-gray-900/50">
        <tr className="bg-red-900/20"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-400">O ATACANTE ESTÁ... (no ataque)</td></tr>
        {data.attacker.map((item) => (
          <tr key={item.condition} className="hover:bg-gray-700/50">
            <td className="px-4 py-2 text-sm text-red-300 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-gray-300">{item.modifier}</td>
          </tr>
        ))}
        <tr className="bg-red-900/20"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-400">O ALVO ESTÁ... (na defesa)</td></tr>
        {data.target.map((item) => (
          <tr key={item.condition} className="hover:bg-gray-700/50">
            <td className="px-4 py-2 text-sm text-red-300 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-gray-300">{item.modifier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ObjectStatsTable = ({ data }: { data: typeof objectStats }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-red-500/30 mt-4">
    <table className="min-w-full divide-y divide-red-500/30">
      <caption className="p-4 text-xl font-bold text-red-300 bg-red-900/50">
        Tabela: Estatísticas de Objetos
      </caption>
      <thead className="bg-red-900/70 text-red-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">Exemplo</th>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">Tam.</th>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">Def</th>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">RD</th>
          <th className="px-4 py-3 text-left text-xs font-medium uppercase">PV</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-red-500/20 bg-gray-900/50 text-sm">
        <tr className="bg-red-900/20"><td colSpan={5} className="px-4 py-2 font-bold text-red-400">OBJETOS GERAIS</td></tr>
        {data.geral.map((obj) => (
          <tr key={obj.example} className="hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-2 text-red-300">{obj.example}</td>
            <td className="px-4 py-2 text-gray-300">{obj.size}</td>
            <td className="px-4 py-2 text-gray-300">{obj.def}</td>
            <td className="px-4 py-2 text-gray-300">{obj.rd}</td>
            <td className="px-4 py-2 text-gray-300">{obj.pv}</td>
          </tr>
        ))}
        <tr className="bg-red-900/20"><td colSpan={5} className="px-4 py-2 font-bold text-red-400">ARMAS, ARMADURAS E ESCUDOS*</td></tr>
        {data.equipamento.map((item) => (
          <tr key={item.example} className="hover:bg-gray-700/50 transition-colors">
            <td colSpan={3} className="px-4 py-2 text-red-300">{item.example}</td>
            <td className="px-4 py-2 text-gray-300">{item.rd}</td>
            <td className="px-4 py-2 text-gray-300">{item.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 text-xs text-gray-400 bg-red-900/50 rounded-b-xl italic">
      *Divida por 2 para itens reduzidos, multiplique por 2 para aumentados e por 5 para gigantes.
    </div>
  </div>
);

const RuleAccordionItem = ({ section }: { section: RuleSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (section.id === "testes-comuns") {
      return (
        <>
          <div className="markdown-content">{section.content}</div>
          <DifficultyTable data={difficulties} />
        </>
      );
    }
    
    if (section.id === "Testes Estendidos") {
      return (
        <>
          <div className="markdown-content">{section.content}</div>
          <ExtendedTestTable data={extendedTests} />
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
          <div className="mt-6 flex justify-center w-full">
            <div className="relative group w-full max-w-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              {/* CORREÇÃO: w-full h-auto para a imagem não estourar */}
              <img 
                src="/regras/area.png" 
                alt="Diagrama de Áreas de Efeito" 
                className="relative rounded-lg border border-red-500/30 shadow-2xl w-full h-auto"
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2 italic">
            Diagrama: Tipos de Áreas de Efeito e Posicionamento.
          </p>
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
    <div className="border border-red-500/30 rounded-lg overflow-hidden shadow-lg">
      <button
        className="w-full flex justify-between items-center p-4 bg-red-900/70 hover:bg-red-800/70 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-red-300 text-left pr-4">{section.title}</h3>
        <span className="text-red-300 text-2xl transform transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      {/* CORREÇÃO: Uso de Grid para altura automática sem cortes */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-gray-900/50 text-gray-300">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RegrasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (!lowerCaseSearch) return ruleSections;
    return ruleSections.filter(section => 
      section.title.toLowerCase().includes(lowerCaseSearch) 
    );
  }, [searchTerm]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-4 md:px-8 py-12">
      {/* Container centralizador para telas grandes */}
      <div className="w-full max-w-none px-4 md:px-8 lg:px-12">

        {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Regras do Jogo</span>
        </div>
      </header>

        <div className="mb-12">
          <h1 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 mb-4">
           Regras do Jogo
          </h1>
          <p className="text-gray-400 text-lg">
            Consulta rápida e detalhada das regras básicas de testes, dificuldades e condições.
          </p>
        </div>

        <input
          type="text"
          placeholder="Buscar por título da regra..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 mb-8 rounded-lg bg-gray-800 border border-red-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
        />

        <div className="space-y-4">
          
          {filteredSections.map((section) => (
            <RuleAccordionItem key={section.id} section={section} />
          ))}
          {filteredSections.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-red-500/20">
              Nenhuma regra encontrada com o termo de busca aplicado.
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
          .markdown-content h4 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #f87171;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          .markdown-content strong {
            color: #fca5a5;
          }
          .markdown-content p {
            margin-bottom: 1rem;
            line-height: 1.6;
          }
          .markdown-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
      `}</style>
    </main>
  );
}