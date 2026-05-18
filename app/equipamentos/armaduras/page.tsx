"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { armors } from "@/data/armors";
import { Armor, ArmorType } from "@/types/armors";

// --- Componentes Auxiliares ---

// Função auxiliar para transformar **texto** em negrito no React
const formatTextWithBold = (text: string) => {
  if (!text) return null;

  // O Regex divide a string onde encontrar **qualquer coisa**, mantendo o delimitador
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    // Se a parte começar e terminar com **, aplicamos o negrito
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-red-800">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Caso contrário, retorna o texto normal
    return part;
  });
};


// 2. Componente para a Tabela Filtrável de Armaduras e Escudos
const ArmorFilterableTable = ({ allArmors }: { allArmors: Armor[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArmor, setSelectedArmor] = useState<Armor | null>(null); // NOVO ESTADO (Para o Drawer)
  const [filters, setFilters] = useState({
    type: [] as ArmorType[],
  });

  const handleFilterChange = (key: keyof typeof filters, value: ArmorType) => { 
    setFilters(prev => {
      const current = prev[key]; 
      
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) as ArmorType[] };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const filteredArmors = useMemo(() => {
    let filtered = allArmors;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome, Descrição e Origem
    if (lowerCaseSearch) {
      filtered = filtered.filter(a => 
        a.name.toLowerCase().includes(lowerCaseSearch) ||
        a.description.toLowerCase().includes(lowerCaseSearch) ||
        a.origin.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 2. Filtrar por Tipo (Leve, Pesada, Escudo)
    if (filters.type.length > 0) {
      filtered = filtered.filter(a => filters.type.includes(a.type));
    }

    // Ordenação
    return filtered.sort((a, b) => 
      a.name.localeCompare(b.name, "pt-BR")
    );
  }, [allArmors, searchTerm, filters]);

  const allTypes: ArmorType[] = ["Leve", "Pesada", "Escudo"];
  const totalColumns = 5; 

  const renderFilterGroup = (title: string, options: string[], key: keyof typeof filters) => (
    <div className="p-4 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm">
      <h4 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFilterChange(key, option as ArmorType)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors font-serif font-bold uppercase tracking-wide border shadow-sm ${
              (filters[key] as string[]).includes(option)
                ? "bg-red-800 text-[#fbf5e6] border-red-900 shadow-inner"
                : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
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
      {/* Barra de Busca */}
      <div className="relative">
        <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Armadura/Escudo
            </label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar arma por nome, descrição ou origem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                      🔍
                  </div>
                )}
            </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
        {renderFilterGroup("Tipo", allTypes, "type")}
      </div>

      {/* Tabela de Armaduras - LINHAS CLICÁVEIS */}
      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[#d9c8a9] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="w-[30%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Armadura / Escudo</th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Preço</th>
              <th scope="col" className="w-[20%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Bônus Defesa</th>
              <th scope="col" className="w-[20%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Penalidade</th>
              <th scope="col" className="w-[15%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
            {filteredArmors.map((armor, index) => {
               const rowClass = index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30";
               
               return (
                <tr 
                  key={armor.id}
                  onClick={() => setSelectedArmor(armor)}
                  className={`${rowClass} hover:bg-[#e8dac1]/60 transition-colors cursor-pointer group`}
                  title="Clique para ver os detalhes da armadura"
                >
                  
                  {/* Nome e Tipo */}
                  <td className="px-4 py-3 text-sm font-medium text-amber-950 align-middle border-r-2 border-amber-900/10">
                    <div className="font-bold text-amber-950 font-serif text-lg group-hover:text-red-800 transition-colors">{armor.name}</div>
                    <div className="text-[10px] text-amber-950/60 mt-0.5 uppercase tracking-widest font-bold">{armor.type}</div>
                  </td>
                  
                  {/* Outras Células */}
                  <td className="px-3 py-3 text-sm text-red-800 font-bold text-center align-middle border-r-2 border-amber-900/10 font-serif">{armor.price}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">+{armor.defenseBonus}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle border-r-2 border-amber-900/10 font-serif font-medium">{armor.armorPenalty}</td>
                  <td className="px-3 py-3 text-sm text-amber-950/85 text-center align-middle font-serif font-medium">{armor.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredArmors.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhuma armadura ou escudo encontrado com os filtros aplicados.
          </div>
        )}
      </div>

      {/* PAINEL LATERAL (DRAWER) - EXIBE APENAS SE UMA ARMADURA ESTIVER SELECIONADA */}
      {selectedArmor && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Fundo Escuro (Overlay) - Clica para fechar */}
          <div 
            className="absolute inset-0 bg-[#2a1810]/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedArmor(null)}
          />

          {/* O Painel em si */}
          <div 
            className="relative w-full max-w-md h-full bg-[#fbf5e6] border-l-4 border-double border-amber-900/40 shadow-2xl flex flex-col font-serif transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          >
            {/* Cabeçalho do Painel */}
            <div className="bg-[#e8dac1] border-b-2 border-amber-900/20 p-6 flex justify-between items-start z-10 shadow-sm">
              <div>
                <h2 className="text-3xl font-bold text-red-800 drop-shadow-sm tracking-wide">{selectedArmor.name}</h2>
                <div className="text-[10px] font-bold text-amber-950/60 uppercase tracking-widest mt-1">
                  {selectedArmor.type}
                </div>
              </div>
              <button
                onClick={() => setSelectedArmor(null)}
                className="text-amber-950/70 hover:text-red-800 hover:bg-amber-900/10 border-2 border-transparent hover:border-amber-900/20 p-2 rounded-full transition-all flex items-center justify-center w-10 h-10 font-sans text-xl pb-3 shadow-sm"
                aria-label="Fechar detalhes"
              >
                ✕
              </button>
            </div>

            {/* Corpo do Painel (Rolável) */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6 custom-scrollbar bg-[url('/noise.png')]">
              
              {/* Grid de Atributos */}
              <div className="grid grid-cols-2 gap-4 bg-[#e8dac1]/50 p-5 rounded-xl border-2 border-amber-900/20 shadow-sm">
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Preço</span>
                  <span className="font-bold text-amber-950 text-lg">{selectedArmor.price}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Bônus Defesa</span>
                  <span className="font-bold text-amber-950/85 text-lg">+{selectedArmor.defenseBonus}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Penalidade</span>
                  <span className="font-bold text-amber-950/85">{selectedArmor.armorPenalty}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-red-800 font-bold tracking-widest mb-1">Espaços</span>
                  <span className="font-bold text-amber-950/85">{selectedArmor.spaces}</span>
                </div>
              </div>

              {/* Descrição Narrativa */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-3 tracking-wide">
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                  Descrição
                  <span className="h-px bg-amber-900/20 flex-grow"></span>
                </h3>
                <p className="text-amber-950/85 text-base leading-relaxed whitespace-pre-wrap font-medium">
                  {formatTextWithBold(selectedArmor.description)}
                </p>
                
                {/* Imagem (Se existir) */}
                {selectedArmor.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/10">
                  <h3 className="text-amber-950/50 text-[10px] uppercase tracking-widest mb-4 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/20 shadow-sm bg-[#e8dac1]/50 max-w-2xl mx-auto p-4 flex justify-center">
                    <img
                      src={selectedArmor.image}
                      alt={selectedArmor.name}
                      className="w-full h-auto object-contain mix-blend-multiply max-h-48"
                    />
                  </div>
                </section>
              )}
              </div>
            </div>

            {/* Rodapé do Painel (Origem) */}
            <div className="bg-[#e8dac1] p-5 border-t-2 border-amber-900/20 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-center">
              <div className="text-[10px] px-3 py-1 rounded bg-[#fbf5e6] font-bold text-amber-950/70 uppercase tracking-widest text-center shadow-sm border border-amber-900/20">
                Origem: {selectedArmor.origin}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilo embutido para a animação do Drawer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />

    </div>
  );
};


// --- Página Principal ---

export default function ArmadurasPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Armaduras</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Armaduras & Escudos
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Defesa
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir as regras de armaduras, escudos e penalidades.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              {/* Armaduras */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Armaduras</h2>
                <p className="font-medium mb-6">
                  Armaduras são classificadas em <strong className="text-red-800">leves e pesadas</strong>, de acordo com a sua facilidade de uso e mobilidade.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armaduras Leves.</strong> Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma <strong className="text-red-800">ação completa</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Armaduras Pesadas.</strong> Feitas de cota de malha ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, <strong className="text-red-800">você não aplica sua Destreza na Defesa</strong> e tem seu <strong className="text-red-800">deslocamento reduzido em 3m</strong>. Vestir ou remover uma armadura pesada <strong className="text-red-800">demora cinco minutos</strong>. <strong className="text-red-800">Dormir de armadura pesada deixa você fatigado pelo dia</strong>.</span>
                  </li>
                </ul>
              </section>

              {/* Escudos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Escudos</h2>
                <p className="font-medium mb-6">
                  Existem escudos <strong className="text-red-800">leves</strong> e <strong className="text-red-800">pesados</strong>. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma <strong className="text-red-800">ação de movimento</strong>.
                </p>

                <div className="space-y-4 ml-2 md:ml-4 border-l-4 border-amber-900/20 pl-4">
                  <h3 className="text-xl font-bold text-amber-950 uppercase tracking-wide">Ataque com Escudo</h3>
                  <p className="font-medium">
                    Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas <strong className="text-red-800">perde seu bônus na Defesa até seu próximo turno</strong> se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos <strong className="text-red-800">não contam como armas</strong>.
                  </p>
                </div>
              </section>

              {/* Penalidade por Não Proficiência */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Penalidade por Não Proficiência</h2>
                <p className="font-medium">
                  Um personagem vestindo uma armadura ou empunhando escudo que não saiba usar aplica a <strong className="text-red-800">penalidade da armadura em todas as perícias baseadas em Força e Destreza</strong>.
                </p>
              </section>

              {/* Características */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Características das Armaduras e Escudos</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Preço.</strong> Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Bônus na Defesa.</strong> Cada armadura fornece um bônus na Defesa do usuário. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas <strong className="text-red-800">não dois escudos</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Penalidade de Armadura.</strong> Aplique a penalidade de armadura em testes de <strong className="text-red-800">Acrobacia, Furtividade e Ladinagem</strong> (e em testes de <strong className="text-red-800">Atletismo para natação</strong>). Penalidades de armaduras e escudos se acumulam.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Espaço.</strong> Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </div>

        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Proteções
            </h2>
            <ArmorFilterableTable allArmors={armors} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}