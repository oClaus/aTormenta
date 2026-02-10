"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { alchemy } from "@/data/alchemys";
import { Alchemy, AlchemyType } from "@/types/alchemy";

// Ajustei as cores para terem bom contraste no fundo bege escuro
const typeColorMap = {
  "Preparados": "text-purple-700",      // Laranja queimado
  "Catalisadores": "text-cyan-700",    // Ciano escuro
  "Venenos": "text-emerald-700",       // Verde esmeralda escuro
};


// 2. Componente para a Tabela Filtrável de Alquímicos
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
    // Box de Filtro - Estilo Papel
    <div className="p-4 bg-[#dcc8a9] rounded border-2 border-amber-900/30 shadow-sm">
      <h4 className="text-xs font-bold text-amber-900/70 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as AlchemyType)}
            className={`px-3 py-1 text-xs rounded border transition-colors font-serif font-bold ${
              (filters[key] as string[]).includes(option)
                ? "bg-emerald-800 text-[#efe5d5] border-emerald-900 shadow-inner" // Ativo: Verde escuro com texto claro
                : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-emerald-700 hover:text-emerald-800" // Inativo: Bege com hover verde
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 w-full">
      {/* Barra de Busca - Fundo mais escuro (#dcc8a9) */}
      <div className="relative">
        <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar alquímicos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    // Input com fundo bege médio (#efe5d5)
                    className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Alquimicos */}
      <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg w-full">
        <table className="min-w-full divide-y divide-amber-900/20 text-left font-serif">
          {/* Header mais escuro (#c4b090) com texto verde escuro */}
          <thead className="bg-[#c4b090] text-emerald-900 border-b-2 border-amber-900/30">
            <tr>
              <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Alquímicos</th>
              <th scope="col" className="w-24 px-4 pr-4 py-4 text-right text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredAlchemys.map((alchemy, index) => (
              // Alternância de cores suave: #e6dcc5 (par) e #dbcfb4 (ímpar)
              <tr key={alchemy.id} className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                <td className="px-4 py-3 text-sm font-medium text-amber-950 border-r border-amber-900/20 align-top">
                  <div className="font-bold text-amber-950 font-serif text-lg">{alchemy.name}</div>
                  <div className="text-sm text-amber-900/90 break-words font-serif italic mt-1">{alchemy.description}</div>
                  <div className="mt-2 text-xs font-serif font-bold tracking-wider">
                      <div className={typeColorMap[alchemy.type] || "text-amber-900"}> {alchemy.type}</div>
                  </div>
                  <div className="mt-1 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{alchemy.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-red-900 font-bold font-serif align-top border-r border-amber-900/20">{alchemy.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-amber-950 font-serif align-top">{alchemy.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredAlchemys.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">Nenhum alquímico com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  // A lógica de busca do grid de cards foi removida/não utilizada no return original, 
  // mas mantive o hook caso queira reativar futuramente, conforme pedido para não mudar estrutura.
  const [cardSearchTerm, setCardSearchTerm] = useState("");

  // (FilteredCards logic mantida mas não renderizada, seguindo o padrão original)
  const filteredCards = useMemo(() => {
    const lowerCaseSearch = cardSearchTerm.toLowerCase();
    
    let sorted = [...alchemy].sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );

    if (lowerCaseSearch) {
      sorted = sorted.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }
    return sorted;
  }, [cardSearchTerm]);


  return (
    // Fundo escurecido #e0d2b4
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-emerald-900 selection:text-emerald-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-800 via-red-900 to-black drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/70 hover:text-emerald-800 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-900/70 hover:text-emerald-800 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Alquímicos</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

      {/* Seção de Texto Introdutório */}
      <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 mb-4 drop-shadow-sm">
          Alquímicos
        </h1>
        <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
          <p className="text-lg font-medium">Inclui preparados, catalisadores e venenos.</p>

          <h3 className="text-xl font-bold text-emerald-800 pt-2 border-b border-amber-900/20 pb-1">Preparados</h3>
          <p>Itens de uso único que geram efeitos variados quando usados. A CD para fabricar qualquer preparado é 15.</p>

          <h3 className="text-xl font-bold text-emerald-800 pt-2 border-b border-amber-900/20 pb-1">Catalisadores</h3>
          <p>Substâncias preparadas através de processos alquímicos, catalisadores são itens de uso único que melhoram o efeito de uma magia quando ela é lançada. Você precisa estar empunhando um catalisador para usá-lo e só pode usar um catalisador por vez. Reduções de custo de catalisadores acumulam com outras reduções de custo. Catalisadores que aumentam o dano só funcionam em magias que já causem dano. </p>
          <p>A CD para fabricar qualquer catalisador é 15 e para fabricá-lo você deve ser treinado em Misticismo.</p>

          <h3 className="text-xl font-bold text-emerald-800 pt-2 border-b border-amber-900/20 pb-1">Venenos</h3>
          <p>Substâncias naturais ou preparadas perigosas para seres vivos. Exceto se indicado o contrário, a CD para fabricar qualquer veneno é 20.</p>
          <p><strong className="text-emerald-900">Regras de Venenos:</strong></p>
          <p>Venenos são classificados de acordo com o método de inoculação.</p>
          <p><strong className="text-emerald-900">Contato: </strong>Inoculados via um ataque que acerte (ou se a vítima toca o objeto envenenado). Aplicar um veneno em uma arma exige uma ação de movimento e uma rolagem de 1d6. Se você rolar 1, se envenena acidentalmente (mas veja o poder Venefício). O veneno permanece na arma até acertar um ataque ou até o fim da cena (o que acontecer primeiro).</p>
          <p><strong className="text-emerald-900">Inalação: </strong>Inoculados via respiração. São armazenados em frascos que podem ser arremessados em alcance curto. Quando o frasco se quebra, libera o veneno num cubo com 3m de lado. Todas as criaturas na área são expostas — prender a respiração não impede a inoculação, pois o veneno pode entrar por canais lacrimais, membranas nasais e outras partes do corpo.</p>
          <p><strong className="text-emerald-900">Ingestão: </strong> Inoculados através da ingestão de comida ou bebida.</p>
          <p>Uma criatura exposta a um veneno deve fazer um teste de Fortitude (CD definida pelo aplicador do veneno, atributo-chave Int). Se falhar, sofre o efeito do veneno (efeitos em parênteses afetam vítimas que passem no teste de resistência). Efeitos que não sejam instantâneos, como perda de PV recorrente ou condições, deixam a vítima com a condição envenenada, e curar esta condição encerra quaisquer efeitos de veneno (mas não recupera PV perdidos).</p>
        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6 border-b border-amber-900/30 pb-2">Tabela Completa de Alquímicos</h2>
        <AlchemyFilterableTable allAlchemys={alchemy} />
      </section>
    </main>
    {/* Footer */}
    <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
    </footer>
    </div>
  );
}