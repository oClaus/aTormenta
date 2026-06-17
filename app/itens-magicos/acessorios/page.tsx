"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { accessories, enchantments } from "@/data/acessorios";
import { SpecificAccessory, Enchantment } from "@/types/acessorio";

// --- Componente Auxiliar: Formatação de Texto (Estilo Pergaminho) ---
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

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif" />
    );
  });
};

// --- Componente 1: Card de Encanto ---
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => {
  return (
    <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
        <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">
          {enchantment.name}
        </h3>
      </div>
      <div className="text-sm flex-grow font-serif text-amber-950/85 leading-relaxed font-medium">
        {formatTextWithBreaks(enchantment.description)}
      </div>
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
        <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">
          {enchantment.origin}
        </span>
      </div>
    </div>
  );
};

// --- Componente 2: Card de Acessório ---
const SpecificAccessoryCard = ({ weapon }: { weapon: SpecificAccessory }) => {
  const getSizeColorClass = (size: string) => {
    switch (size) {
      case "Menor": return "text-emerald-800"; 
      case "Médio": return "text-amber-800";   
      case "Maior": return "text-blue-800";    
      default: return "text-red-800";
    }
  };

  const sizeColorClass = getSizeColorClass(weapon.size);

  return (
    <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full group relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex flex-col items-start gap-3">
        <h3 className="text-xl font-bold text-red-800 font-serif tracking-wide group-hover:text-red-700 transition-colors">
          {weapon.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block px-2.5 py-1 bg-[#fbf5e6] border border-amber-900/20 shadow-sm rounded text-[10px] text-red-800 font-bold uppercase tracking-widest">
            Preço: {weapon.price}
          </span>
          <span className={`inline-block px-2.5 py-1 bg-[#fbf5e6] border border-amber-900/20 shadow-sm rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${sizeColorClass}`}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
            {weapon.size}
          </span>
        </div>
      </div>

      <div className="text-sm pt-1 text-amber-950/85 flex-grow font-serif font-medium leading-relaxed whitespace-pre-line">
        {formatTextWithBreaks(weapon.description)}
      </div>
      
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
        <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">
          {weapon.origin}
        </span>
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function AcessoriosMagicosPage() {
  const [activeTab, setActiveTab] = useState<'encantos' | 'acessorios'>('encantos');
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [sizeFilter, setSizeFilter] = useState<"Todos" | "Menor" | "Médio" | "Maior">("Todos");
  const [weaponSearch, setWeaponSearch] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredEnchantments = useMemo(() => {
      const term = enchantmentSearch.toLowerCase();
      return enchantments.filter(enc => 
        enc.name.toLowerCase().includes(term) ||
        enc.origin.toLowerCase().includes(term) ||
        enc.description.toLowerCase().includes(term)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    }, [enchantmentSearch]);

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    return accessories.filter(weapon => {
      const matchesSearch = weapon.name.toLowerCase().includes(term) ||
      weapon.origin.toLowerCase().includes(term) ||
      weapon.description.toLowerCase().includes(term);
      
      const matchesSize = sizeFilter === "Todos" || weapon.size === sizeFilter;

      return matchesSearch && matchesSize;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch, sizeFilter]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
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
                <Link href="/itens-magicos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Itens Mágicos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Acessórios</span>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Acessórios Mágicos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Sistema de Abas */}
        <div className="flex flex-wrap gap-2 mb-8 bg-[#e8dac1] p-2 rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-fit">
            <button 
                onClick={() => setActiveTab('encantos')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'encantos' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Encantos
            </button>
            <button 
                onClick={() => setActiveTab('acessorios')} 
                className={`px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'acessorios' ? 'bg-red-800 text-[#fbf5e6] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[#e8dac1]/50'}`}
            >
                Acessórios Específicos
            </button>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70 text-red-800">❖</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Acessórios
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir informações sobre funcionamento e categorias.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-4 font-medium">
                <p>
                    Acessórios representam versões mágicas de itens gerais e pertencem às mesmas categorias desses itens. Quando a descrição de um acessório não especificar sua categoria, guie-se por sua descrição e pela lógica. Uma flauta fantasma, por exemplo, é um instrumento musical, enquanto um chapéu do disfarce é um vestuário. O mestre tem a palavra final quanto à categoria de cada acessório. Acessórios mágicos funcionam de forma similar a armas mágicas, podendo ser tanto encantados quanto específicos.
                </p>
                <p>
                    Encantos para acessórios são aplicados a itens gerais (exceto esotéricos). A descrição de cada encanto indica para qual tipo de item ele se aplica.
                </p>
            </div>
          </div>
        </div>

        {/* --- Seção 1: Encantos --- */}
        {activeTab === 'encantos' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide">
              <span className="text-red-800 text-3xl">❖</span>
              Acervo de Encantos
            </h2>

            {/* Busca Encantos */}
            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
              <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                  Buscar Encantamento
              </label>
              <div className="relative">
                  <input
                  type="text"
                  placeholder="Nome ou descrição..."
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
            </div>

            {filteredEnchantments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredEnchantments.map((enc) => (
                  <EnchantmentCard key={enc.id} enchantment={enc} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum encantamento encontrado com o termo aplicado.
                </p>
              </div>
            )}
          </section>
        )}

        {/* --- Seção 2: Acessórios Específicos --- */}
        {activeTab === 'acessorios' && (
          <section className="animate-in fade-in duration-500">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif mb-6 tracking-wide">
              <span className="text-red-800 text-3xl">❖</span>
              Acervo de Acessórios Específicos
            </h2>

            {/* Controles: Busca e Filtro */}
            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full flex flex-col gap-6">
              
              <div>
                <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                    Buscar Acessório
                </label>
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Nome ou descrição..."
                    value={weaponSearch}
                    onChange={(e) => setWeaponSearch(e.target.value)}
                    className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                    />
                    {weaponSearch ? (
                      <button 
                        onClick={() => setWeaponSearch("")}
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

              <div className="pt-6 border-t-2 border-amber-900/10">
                <label className="block text-xs font-bold text-red-800 mb-3 uppercase tracking-widest">
                  Filtrar por Tamanho
                </label>
                <div className="flex flex-wrap gap-2">
                  {(["Todos", "Menor", "Médio", "Maior"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSizeFilter(size)}
                      className={`px-4 py-1.5 rounded-md text-xs uppercase tracking-widest font-bold transition-all border shadow-sm font-serif ${
                        sizeFilter === size
                          ? "bg-red-800 text-[#fbf5e6] border-red-900"
                          : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {filteredSpecificWeapons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredSpecificWeapons.map((weapon) => (
                  <SpecificAccessoryCard key={weapon.id} weapon={weapon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                <p className="text-amber-950/70 text-lg italic tracking-wide">
                  Nenhum acessório encontrado {sizeFilter !== "Todos" ? `do tamanho "${sizeFilter}"` : ""} com o termo aplicado.
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
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}