"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments, specificWeapons } from "@/data/magics";
import { Enchantment, SpecificWeapon } from "@/types/magic";

// --- Formatação de Texto (Estilo Pergaminho) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;
  const lines = text.split('\\n');
  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif">$1</em>')
      .replace(/- (.*?)\./g, '<div class="mt-2 flex items-start gap-2"><span class="text-red-800/60 mt-1.5 text-[10px]">◆</span><span class="font-medium">$1.</span></div>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>');

    return <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-amber-950/85 font-serif" />;
  });
};

// --- Card de Encanto ---
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => (
  <div className="p-5 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 group">
    <div className="mb-3 pb-2 border-b-2 border-amber-900/10">
      <h3 className="text-lg font-bold text-red-800 font-serif tracking-wide">{enchantment.name}</h3>
    </div>
    <div className="text-sm flex-grow font-serif text-amber-950/85 leading-relaxed font-medium">
      {formatTextWithBreaks(enchantment.description)}
    </div>
    <div className="mt-4 pt-2 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] text-amber-950/60 italic font-serif uppercase tracking-widest font-bold">{enchantment.origin}</span>
    </div>
  </div>
);

// --- Card de Arma Específica ---
const SpecificWeaponCard = ({ weapon }: { weapon: SpecificWeapon }) => (
  <div className="p-5 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 group">
    <div className="mb-3 pb-2 border-b-2 border-amber-900/10">
      <h3 className="text-lg font-bold text-red-800 font-serif tracking-wide">{weapon.name}</h3>
      <span className="inline-block mt-2 px-2 py-0.5 bg-[#fbf5e6] border border-amber-900/20 rounded text-[10px] text-red-800 font-bold uppercase tracking-widest">Preço: T$ {weapon.price}</span>
    </div>
    <div className="text-sm pt-1 text-amber-950/85 flex-grow font-serif font-medium">
      {formatTextWithBreaks(weapon.description)}
    </div>
    <div className="mt-4 pt-2 border-t-2 border-amber-900/10 text-right">
      <span className="text-[10px] text-amber-950/60 italic font-serif uppercase tracking-widest font-bold">{weapon.origin}</span>
    </div>
  </div>
);

// --- Página Principal ---
export default function ArmasMagicasPage() {
  const [activeTab, setActiveTab] = useState<'encantos' | 'armas'>('encantos');
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [weaponSearch, setWeaponSearch] = useState("");

  const filteredEnchantments = useMemo(() => {
    const term = enchantmentSearch.toLowerCase();
    return enchantments.filter(enc => enc.name.toLowerCase().includes(term) || enc.description.toLowerCase().includes(term) || enc.origin.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [enchantmentSearch]);

  const filteredSpecificWeapons = useMemo(() => {
    const term = weaponSearch.toLowerCase();
    return specificWeapons.filter(w => w.name.toLowerCase().includes(term) || w.origin.toLowerCase().includes(term) || w.description.toLowerCase().includes(term)).sort((a, b) => a.name.localeCompare(b.name));
  }, [weaponSearch]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-12 sticky top-0">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group"><h1 className="text-3xl font-bold tracking-widest uppercase text-red-800 drop-shadow-sm">a-Tormenta</h1></Link>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Link href="/" className="text-amber-950/70 hover:text-red-800">Início</Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Armas Mágicas</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pb-20">
        <h1 className="text-5xl font-bold text-red-800 mb-10 drop-shadow-sm tracking-wider">Armas Mágicas</h1>

        {/* Sistema de Abas */}
        <div className="flex gap-2 mb-8 bg-[#e8dac1] p-1.5 rounded-xl border-2 border-amber-900/20 w-fit">
            <button onClick={() => setActiveTab('encantos')} className={`px-6 py-2 rounded-lg font-bold uppercase text-xs tracking-widest transition-all ${activeTab === 'encantos' ? 'bg-red-800 text-[#fbf5e6]' : 'text-amber-950/70 hover:text-red-800'}`}>Encantos</button>
            <button onClick={() => setActiveTab('armas')} className={`px-6 py-2 rounded-lg font-bold uppercase text-xs tracking-widest transition-all ${activeTab === 'armas' ? 'bg-red-800 text-[#fbf5e6]' : 'text-amber-950/70 hover:text-red-800'}`}>Armas Lendárias</button>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'encantos' ? (
          <section>
            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-inner">
                <input type="text" placeholder="Buscar encantamento..." value={enchantmentSearch} onChange={(e) => setEnchantmentSearch(e.target.value)} className="w-full px-4 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950 focus:border-red-800/50 outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEnchantments.map(enc => <EnchantmentCard key={enc.id} enchantment={enc} />)}
            </div>
          </section>
        ) : (
          <section>
            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-inner">
                <input type="text" placeholder="Buscar arma lendária..." value={weaponSearch} onChange={(e) => setWeaponSearch(e.target.value)} className="w-full px-4 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950 focus:border-red-800/50 outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSpecificWeapons.map(w => <SpecificWeaponCard key={w.id} weapon={w} />)}
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif text-[#e8dac1]/60 text-sm">
        <p>Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs</p>
      </footer>
    </div>
  );
}