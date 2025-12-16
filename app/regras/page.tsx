"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
// Removido o import do ReactMarkdown
import { difficulties, difficultiesNote, ruleSections } from "@/data/rules";
import { RuleSection, Difficulty } from "@/types/rule";

// --- Componentes Auxiliares ---

// Componente para renderizar a Tabela de Dificuldades (Sem Alteração)
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
            <td className="px-4 py-2 text-sm text-gray-300">{item.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="p-4 text-xs text-gray-400 bg-red-900/50 rounded-b-xl">{difficultiesNote}</p>
  </div>
);

// Componente de Item do Acordeão
const RuleAccordionItem = ({ section }: { section: RuleSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Renderiza o conteúdo, substituindo a Tabela de Dificuldades se presente
  const renderContent = () => {
    
    // Se a seção for "TESTES COMUNS", injeta a tabela
    if (section.id === "testes-comuns") {
      return (
        <>
          {/* O conteúdo é um ReactNode (JSX), então renderizamos diretamente */}
          <div className="markdown-content">{section.content}</div> 
          <DifficultyTable data={difficulties} />
        </>
      );
    }

    // Para todas as outras seções, renderiza o conteúdo (que é JSX)
    return <div className="markdown-content">{section.content}</div>;
  };

  return (
    <div className="border border-red-500/30 rounded-lg overflow-hidden shadow-lg">
      <button
        className="w-full flex justify-between items-center p-4 bg-red-900/70 hover:bg-red-800/70 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-red-300">{section.title}</h3>
        <span className="text-red-300 text-2xl transform transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-900/50 text-gray-300">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function RegrasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (!lowerCaseSearch) {
      return ruleSections;
    }

    // A busca por conteúdo agora precisa de uma forma de converter o ReactNode em string para pesquisa.
    // Para simplificar, vamos manter a pesquisa focada em TÍTULOS.
    return ruleSections.filter(section => 
      section.title.toLowerCase().includes(lowerCaseSearch)
    );
    // Nota: Se você precisar pesquisar o conteúdo, precisará armazenar a versão em texto puro separadamente.
  }, [searchTerm]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-red-400 hover:text-red-300 transition-colors">
          ← Voltar para o Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-red-400 mb-4">
          🎲 Regras do Jogo
        </h1>
        <p className="text-gray-400 text-lg">
          Consulta rápida e detalhada das regras básicas de testes, dificuldades e condições.
        </p>
      </div>

      {/* Barra de Busca */}
      <input
        type="text"
        placeholder="Buscar por título da regra..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 mb-8 rounded-lg bg-gray-800 border border-red-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
      />

      {/* Acordeão de Regras */}
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

      {/* Estilos substituídos por Tailwind/JSX nos dados */}
      {/* Nota: Mantenha este <style> se você realmente precisar forçar a formatação
         de elementos HTML que agora estão no seu arquivo de dados. */}
      <style jsx global>{`
         .markdown-content h4 {
           font-size: 1.25rem; /* text-xl */
           font-weight: 700; /* font-bold */
           color: #f87171; /* text-red-400 */
           margin-top: 1rem;
           margin-bottom: 0.5rem;
         }
         .markdown-content strong {
           color: #fca5a5; /* text-red-300 */
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