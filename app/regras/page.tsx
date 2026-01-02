"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// IMPORTAÇÃO
import { difficulties, difficultiesNote, ruleSections, extendedTests, specialSituations, objectStats } from "@/data/rules";
import { RuleSection, Difficulty, ExtendedTest, SpecialSituation, ObjectStat } from "@/types/rule";

// --- Componentes Auxiliares Estilizados ---

const DifficultyTable = ({ data }: { data: Difficulty[] }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-stone-800 mt-4 bg-stone-900">
    <table className="min-w-full divide-y divide-stone-800 font-serif">
      <caption className="p-4 text-xl font-bold text-red-500 bg-stone-950 border-b border-stone-800 text-left uppercase tracking-wide">
        Tabela: Dificuldades
      </caption>
      <thead className="bg-stone-950 text-red-600">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Tarefa</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">CD</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Exemplo</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800">
        {data.map((item, index) => (
          <tr key={item.task} className={index % 2 === 0 ? "bg-stone-900" : "bg-stone-900/50 hover:bg-stone-800 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-stone-300">{item.task}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-red-400 font-bold">{item.cd}</td>
            <td className="px-4 py-2 text-sm text-stone-400 min-w-[200px] whitespace-normal italic">{item.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="p-4 text-xs text-stone-500 bg-stone-950 border-t border-stone-800 italic">{difficultiesNote}</p>
  </div>
);

const ExtendedTestTable = ({ data }: { data: ExtendedTest[] }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-stone-800 mt-4 bg-stone-900">
    <table className="min-w-full divide-y divide-stone-800 font-serif">
      <caption className="p-4 text-xl font-bold text-red-500 bg-stone-950 border-b border-stone-800 text-left uppercase tracking-wide">
        Tabela: Testes Estendidos
      </caption>
      <thead className="bg-stone-950 text-red-600">
        <tr>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Sucessos Exigidos</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Complexidade</th>
          <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Exemplos</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800">
        {data.map((item, index) => (
          <tr key={item.successes} className={index % 2 === 0 ? "bg-stone-900" : "bg-stone-900/50 hover:bg-stone-800 transition-colors"}>
            <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-stone-300">{item.successes}</td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-red-400">{item.complexity}</td>
            <td className="px-4 py-2 text-sm text-stone-400 min-w-[200px] whitespace-normal italic">{item.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SpecialSituationsTable = ({ data }: { data: typeof specialSituations }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-stone-800 mt-4 bg-stone-900">
    <table className="min-w-full divide-y divide-stone-800 font-serif">
      <caption className="p-4 text-xl font-bold text-red-500 bg-stone-950 border-b border-stone-800 text-left uppercase tracking-wide">
        Tabela: Situações Especiais
      </caption>
      <thead className="bg-stone-950 text-red-600">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Condição</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Modificador</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800 bg-stone-900">
        <tr className="bg-stone-950/50 border-b border-red-900/30"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-500 uppercase tracking-widest">O ATACANTE ESTÁ... (no ataque)</td></tr>
        {data.attacker.map((item) => (
          <tr key={item.condition} className="hover:bg-stone-800 transition-colors">
            <td className="px-4 py-2 text-sm text-stone-300 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-red-400 font-bold">{item.modifier}</td>
          </tr>
        ))}
        <tr className="bg-stone-950/50 border-b border-red-900/30 border-t border-stone-800"><td colSpan={2} className="px-4 py-2 text-xs font-bold text-red-500 uppercase tracking-widest">O ALVO ESTÁ... (na defesa)</td></tr>
        {data.target.map((item) => (
          <tr key={item.condition} className="hover:bg-stone-800 transition-colors">
            <td className="px-4 py-2 text-sm text-stone-300 font-medium">{item.condition}</td>
            <td className="px-4 py-2 text-sm text-red-400 font-bold">{item.modifier}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ObjectStatsTable = ({ data }: { data: typeof objectStats }) => (
  <div className="overflow-x-auto shadow-lg rounded-xl border border-stone-800 mt-4 bg-stone-900">
    <table className="min-w-full divide-y divide-stone-800 font-serif">
      <caption className="p-4 text-xl font-bold text-red-500 bg-stone-950 border-b border-stone-800 text-left uppercase tracking-wide">
        Tabela: Estatísticas de Objetos
      </caption>
      <thead className="bg-stone-950 text-red-600">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Exemplo</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Tam.</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">Def</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">RD</th>
          <th className="px-4 py-3 text-left text-xs font-bold uppercase">PV</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-stone-800 bg-stone-900 text-sm">
        <tr className="bg-stone-950/50 border-b border-red-900/30"><td colSpan={5} className="px-4 py-2 font-bold text-red-500 uppercase tracking-widest">OBJETOS GERAIS</td></tr>
        {data.geral.map((obj) => (
          <tr key={obj.example} className="hover:bg-stone-800 transition-colors">
            <td className="px-4 py-2 text-stone-300 font-medium">{obj.example}</td>
            <td className="px-4 py-2 text-stone-400">{obj.size}</td>
            <td className="px-4 py-2 text-stone-400">{obj.def}</td>
            <td className="px-4 py-2 text-stone-400">{obj.rd}</td>
            <td className="px-4 py-2 text-stone-400">{obj.pv}</td>
          </tr>
        ))}
        <tr className="bg-stone-950/50 border-b border-red-900/30 border-t border-stone-800"><td colSpan={5} className="px-4 py-2 font-bold text-red-500 uppercase tracking-widest">ARMAS, ARMADURAS E ESCUDOS*</td></tr>
        {data.equipamento.map((item) => (
          <tr key={item.example} className="hover:bg-stone-800 transition-colors">
            <td colSpan={3} className="px-4 py-2 text-stone-300 font-medium">{item.example}</td>
            <td className="px-4 py-2 text-stone-400">{item.rd}</td>
            <td className="px-4 py-2 text-stone-400">{item.pv}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 text-xs text-stone-500 bg-stone-950 border-t border-stone-800 italic">
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
          <div className="mt-8 flex flex-col items-center w-full">
            
            <div className="relative group w-full max-w-2xl bg-white rounded-lg p-2 border border-stone-800 shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-stone-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="/regras/area.png" 
                alt="Diagrama de Áreas de Efeito" 
                className="relative rounded border border-stone-200 w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-xs text-stone-500 mt-3 italic font-serif">
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
    <div className="border border-stone-800 rounded bg-stone-900 overflow-hidden shadow-md hover:border-red-900/50 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center p-5 bg-stone-900 hover:bg-stone-800 transition-colors focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-stone-200 group-hover:text-red-500 transition-colors text-left pr-4 font-serif tracking-wide">
            {section.title}
        </h3>
        <span className={`text-red-600 text-2xl transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 bg-stone-950 text-stone-300 border-t border-stone-800 font-serif">
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
                <Link href="/" className="text-stone-500 hover:text-red-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Regras do Jogo</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-500 mb-6 drop-shadow-md">
            Regras do Jogo
            </h1>
            <p className="text-stone-300 text-lg font-serif leading-relaxed">
            Consulta rápida e detalhada das regras básicas de testes, dificuldades e condições de Arton.
            </p>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Regra
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por título da regra..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {filteredSections.map((section) => (
            <RuleAccordionItem key={section.id} section={section} />
          ))}
          {filteredSections.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl font-serif">
              <p className="text-lg">Nenhuma regra encontrada com o termo de busca aplicado.</p>
            </div>
          )}
        </div>
      </main>

      {/* Styles for Markdown Content */}
      <style jsx global>{`
          .markdown-content h4 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #ef4444; /* red-500 */
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-family: serif;
            border-bottom: 1px solid #292524; /* stone-800 */
            padding-bottom: 0.25rem;
          }
          .markdown-content strong {
            color: #f87171; /* red-400 */
            font-weight: bold;
          }
          .markdown-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #d6d3d1; /* stone-300 */
          }
          .markdown-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            color: #a8a29e; /* stone-400 */
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
          }
          .markdown-content code {
             background-color: #292524;
             padding: 0.1rem 0.3rem;
             border-radius: 0.25rem;
             color: #ef4444;
             font-size: 0.9em;
          }
      `}</style>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}