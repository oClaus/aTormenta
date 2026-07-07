"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// --- Importações de Esotéricos Gerais ---
import { esoteric } from "@/data/esoterics";
import { Gear } from "@/types/gear";

// --- Importações de Esotéricos Mágicos ---
import { enchantments, specificWeapons } from "@/data/magicesoterics";
import { Enchantment, SpecificWeapon } from "@/types/magic";

// --- Helper de Formatação (Padrão Pergaminho) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;
  const lines = text.split('\\n');
  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>')
      .replace(/- (.*?)\./g, '<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><span class="font-medium">$1.</span></div>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>');

    return <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif" />;
  });
};

// --- COMPONENTES DE ESOTÉRICOS GERAIS ---

const GearFilterableTable = ({ allGear }: { allGear: Gear[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6 w-full relative">
      <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
        <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Esotérico
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar equipamento por nome ou descrição..."
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
        {searchTerm && (
          <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
            Exibindo {filteredGear.length} resultado(s) para "{searchTerm}".
          </p>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[#e8dac1]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[#d9c8a9] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="w-[85%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Item</th>
              <th scope="col" className="w-[10%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Preço</th>
              <th scope="col" className="w-[5%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
            {filteredGear.map((item, index) => {
               const rowClass = index % 2 === 0 ? "bg-[#fbf5e6]" : "bg-[#e8dac1]/30";
               
               return (
                <tr key={item.id} className={`${rowClass} hover:bg-[#e8dac1]/60 transition-colors group`}>
                  <td className="px-4 py-4 border-r-2 border-amber-900/10 align-top">
                    <div className="font-bold text-amber-950 font-serif text-lg group-hover:text-red-800 transition-colors">{item.name}</div>
                    <div className="text-sm text-amber-950/85 break-words font-serif font-medium mt-1 leading-relaxed">{item.description}</div>
                    <div className="mt-4 text-[10px] inline-block px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {item.origin}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-red-800 font-bold font-serif align-middle border-r-2 border-amber-900/10">{item.price}</td>
                  <td className="px-4 py-4 text-center text-sm text-amber-950/85 font-serif font-medium align-middle">{item.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[#fbf5e6] italic text-lg border-t-2 border-amber-900/20">
            Nenhum equipamento encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- COMPONENTES DE ESOTÉRICOS MÁGICOS ---

const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => (
  <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
      <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">{enchantment.name}</h3>
    </div>
    <div className="text-sm flex-grow font-serif text-amber-950/85 leading-relaxed font-medium">
      {formatTextWithBreaks(enchantment.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">{enchantment.origin}</span>
    </div>
  </div>
);

const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => (
  <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex flex-col items-start gap-3">
      <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">{weapon.name}</h3>
      <span className="inline-block px-2.5 py-1 bg-[#fbf5e6] border border-amber-900/20 shadow-sm rounded text-[10px] text-red-800 font-bold uppercase tracking-widest">Preço: T$ {weapon.price}</span>
    </div>
    <div className="text-sm pt-1 text-amber-950/85 flex-grow font-serif font-medium leading-relaxed">
      {formatTextWithBreaks(weapon.description)}
    </div>
    <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">{weapon.origin}</span>
    </div>
  </div>
);


// --- PÁGINA PRINCIPAL INTEGRADA ---

export default function EsotericosPage() {
  const [activeTab, setActiveTab] = useState<'gerais' | 'encantos' | 'especificas'>('gerais');
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [magicWeaponSearch, setMagicWeaponSearch] = useState("");

  const filteredEnchantments = useMemo(() => {
    const term = enchantmentSearch.toLowerCase();
    return enchantments.filter(enc => enc.name.toLowerCase().includes(term) || enc.description.toLowerCase().includes(term) || enc.origin.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [enchantmentSearch]);

  const filteredSpecificWeapons = useMemo(() => {
    const term = magicWeaponSearch.toLowerCase();
    return specificWeapons.filter(w => w.name.toLowerCase().includes(term) || w.origin.toLowerCase().includes(term) || w.description.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [magicWeaponSearch]);

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
                <span className="text-red-800">Esotéricos</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-8 md:mb-10 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Esotéricos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Sistema de Abas Unificado */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[#e8dac1] p-2 rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-fit">
            <button 
                onClick={() => setActiveTab('gerais')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'gerais' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Esotéricos Gerais
            </button>
            <button 
                onClick={() => setActiveTab('encantos')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'encantos' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Encantos Mágicos
            </button>
            <button 
                onClick={() => setActiveTab('especificas')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'especificas' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Esotéricos Específicos
            </button>
        </div>

        {/* --- ABA 1: ESOTÉRICOS GERAIS --- */}
        {activeTab === 'gerais' && (
          <div className="animate-in fade-in duration-500">
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
                      Regras Gerais
                    </h2>
                    <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                      Clique para expandir informações sobre uso e fabricação.
                    </p>
                  </div>
                </div>
                <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
                <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-6">
                  <section>
                    <p className="font-medium text-lg leading-relaxed">
                      Itens utilizados por conjuradores para lançar magias de forma mais eficiente. Para usar um esotérico, você precisa empunhá-lo com a mão que usará para gesticular ao lançar a magia. Uma magia só pode receber os benefícios de um esotérico por vez.
                    </p>
                    <div className="mt-6 p-6 bg-[#e8dac1]/50 rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800">
                        <p className="font-bold text-amber-950 italic">
                            A CD para fabricar qualquer esotérico é <span className="text-red-800 text-xl not-italic">20</span> e para fabricá-lo você deve ser treinado em <strong className="text-red-800">Misticismo</strong>.
                        </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Tabela Completa e Filtrável */}
            <section className="w-full">
                <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide border-b-2 border-amber-900/10 pb-2">
                    <span className="text-red-800 text-3xl">❖</span> Acervo Esotérico Geral
                </h2>
                <GearFilterableTable allGear={esoteric} />
            </section>
          </div>
        )}

        {/* --- ABA 2: ENCANTOS MÁGICOS --- */}
        {activeTab === 'encantos' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide border-b-2 border-amber-900/10 pb-2">
              <span className="text-red-800 text-3xl">❖</span>
              Acervo de Encantos
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
              <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Encantamento
              </label>
              <div className="relative">
                  <input 
                      type="text" 
                      placeholder="Nome, descrição ou origem..." 
                      value={enchantmentSearch} 
                      onChange={(e) => setEnchantmentSearch(e.target.value)} 
                      className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm" 
                  />
                  {enchantmentSearch ? (
                    <button 
                      onClick={() => setEnchantmentSearch("")}
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
              {enchantmentSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredEnchantments.length} resultado(s) para "{enchantmentSearch}".
                </p>
              )}
            </div>

            {filteredEnchantments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredEnchantments.map(enc => <EnchantmentCard key={enc.id} enchantment={enc} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <span className="text-4xl opacity-40 mb-4">📜</span>
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum encantamento encontrado com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

        {/* --- ABA 3: ESOTÉRICOS ESPECÍFICOS LENDÁRIOS --- */}
        {activeTab === 'especificas' && (
          <section id="specific-weapons-section" className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide border-b-2 border-amber-900/10 pb-2">
                <span className="text-red-800 text-3xl">❖</span>
                Esotéricos Específicos
            </h2>

            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
              <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Esotérico Específico
              </label>
              <div className="relative">
                  <input 
                      type="text" 
                      placeholder="Nome, descrição ou origem..." 
                      value={magicWeaponSearch} 
                      onChange={(e) => setMagicWeaponSearch(e.target.value)} 
                      className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm" 
                  />
                  {magicWeaponSearch ? (
                    <button 
                      onClick={() => setMagicWeaponSearch("")}
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
              {magicWeaponSearch && (
                <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                  Exibindo {filteredSpecificWeapons.length} resultado(s) para "{magicWeaponSearch}".
                </p>
              )}
            </div>

            {filteredSpecificWeapons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredSpecificWeapons.map(w => <SpecificWeaponCard key={w.id} weapon={w} />)}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <span className="text-4xl opacity-40 mb-4">📜</span>
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum esotérico específico encontrado com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}