"use client";

import Link from "next/link";
import { useState } from "react";
import { Boss } from "@/types/boss";
import { bosses } from "@/data/bosses";
import ThemeToggle from "@/components/ThemeToggle";

function SwordGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3v12" />
      <path d="M7 9h10" />
      <path d="M10 15h4v4l-2 2-2-2z" />
    </svg>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function OgreGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 8L9 4M18 8l-3-4" />
      <circle cx="12" cy="13" r="7" />
      <circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M9 16.5q3 2 6 0" />
    </svg>
  );
}

function BookGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function BulbGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.2 11l.7 1h5l.7-1A6 6 0 0 0 12 3z" />
    </svg>
  );
}

function ShieldGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3l7 2.5v5.5c0 4.5-3.4 7.7-7 9-3.6-1.3-7-4.5-7-9V5.5z" />
    </svg>
  );
}

function BoltGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M13 2L5 14h5l-1 8 9-12h-5l1-8z" />
    </svg>
  );
}

function SparkleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
    </svg>
  );
}

function ChartGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M4 20h16" />
      <rect x="5" y="14" width="3" height="6" />
      <rect x="10.5" y="9" width="3" height="11" />
      <rect x="16" y="4" width="3" height="16" />
    </svg>
  );
}

function TargetGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CoinGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
    </svg>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

export default function ChefesPage() {
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBosses = bosses.filter(boss =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-edge-rgb))]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="font-display text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3">
              <div className="font-display flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                  <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                      Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <Link href="/mundo-de-arton" className="text-amber-900/60 hover:text-red-700 transition-colors">
                      Mundo de Arton
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Chefes</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Descrição */}
        <div className="mb-12 w-full border-b-2 border-amber-900/20 pb-8">
          <h2 className="font-display text-5xl font-bold text-amber-800 mb-4 flex items-center gap-3">
             <SwordGlyph className="text-red-800 w-9 h-9" /> Chefes adaptados
          </h2>
          <p className="text-amber-900/80 text-lg italic border-l-4 border-amber-900/30 pl-4 font-medium">
            Inimigos de outras obras prontos para adaptação em sua mesa de Tormenta20.
          </p>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
          <label className="font-display block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Chefe no Arquivo
          </label>
          <div className="relative">
             <input
                type="text"
                placeholder="Digite o nome ou tipo de criatura..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all shadow-sm"
            />
            <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40" />
          </div>
        </div>

        {/* Grid de Chefes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
          {filteredBosses.map((boss) => (
            <div
              key={boss.id}
              onClick={() => setSelectedBoss(boss)}
              className="card-grain group relative overflow-hidden rounded bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] cursor-pointer flex flex-col"
            >
              <div className="aspect-square relative bg-[rgb(var(--portrait-rgb))] border-b border-amber-900/15 overflow-hidden flex items-center justify-center">
                {boss.image ? (
                   <img
                    src={boss.image}
                    alt={boss.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-95 group-hover:opacity-100"
                  />
                ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[rgb(60,55,50)]/35 bg-[rgb(var(--portrait-rgb))]">
                    <OgreGlyph className="w-16 h-16" />
                </div>
               )}
               
               <div className="font-display absolute top-2 right-2 px-2 py-1 bg-[rgb(60,55,50)]/80 backdrop-blur-sm border border-white/10 rounded text-xs font-bold text-white/90 uppercase shadow-sm">
                 {boss.tipo}
               </div>
              </div>
              
              <div className="p-5 relative flex-1 flex flex-col justify-between bg-[rgb(var(--bg-card-rgb))]">
                <h3 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-3 leading-tight text-center tracking-wide">
                  {boss.name}
                </h3>
                
                <div className="flex items-center justify-center">
                  <div className="hex-badge font-display px-4 py-1 bg-[rgb(var(--bg-inset-rgb))] border border-[rgb(var(--accent-rgb))]/30 text-red-800 font-bold text-sm tracking-widest shadow-sm">
                    ND {boss.nd}
                  </div>
                </div>

                <CornerOrnament className="absolute -top-px -left-px opacity-0 group-hover:opacity-100 transition-opacity" />
                <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {filteredBosses.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[rgb(var(--bg-card-rgb))]/50">
            <p className="font-display text-amber-900/60 text-lg italic">Nenhum chefe encontrado nos registros antigos.</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes do Chefe - RESTAURADO À LÓGICA ORIGINAL */}
      {selectedBoss && (
        <div
          className="fixed inset-0 bg-[rgb(var(--void-rgb))]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBoss(null)}
        >
          <div
            className="bg-[rgb(var(--bg-inset-rgb))] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(var(--bg-rgb),0.3)] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]"
            onClick={(e) => e.stopPropagation()}
          >
             <button
              onClick={() => setSelectedBoss(null)}
              className="absolute top-6 right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[rgb(var(--bg-card-rgb))] border border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            {/* Header do Modal */}
            <div className="relative p-8 md:p-12 border-b-2 border-amber-900/20 text-center">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wide">
                {selectedBoss.name}
              </h2>
              <div className="font-display flex flex-wrap gap-4 mt-2 justify-center text-sm font-bold uppercase tracking-widest items-center">
                <span className="text-amber-900/70">{selectedBoss.tipo}</span>
                <span className="text-amber-900/30 text-lg">•</span>
                <span className="text-amber-900/70">Tamanho: <span className="text-red-800">{selectedBoss.tamanho}</span></span>
                <span className="text-amber-900/30 text-lg">•</span>
                <span className="px-3 py-1 bg-red-900/10 border border-red-900/30 text-red-800 rounded">ND {selectedBoss.nd}</span>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 md:p-12 font-serif">
              
              {/* História */}
              <section className="mb-10">
                <h3 className="font-display text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2 border-b border-amber-900/20 pb-2">
                  <BookGlyph /> História & Descrição
                </h3>
                <div className="p-6 bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 rounded shadow-inner">
                    <p className="text-amber-900/90 leading-relaxed whitespace-pre-wrap text-lg text-justify">
                        {selectedBoss.historia}
                    </p>
                </div>
              </section>

              {/* Dicas */}
              <section className="mb-10 p-6 bg-[rgb(var(--bg-edge-rgb))] rounded border border-amber-900/20 shadow-sm">
                <h3 className="font-display text-xl font-bold text-amber-900 mb-3 flex items-center gap-2 uppercase tracking-wide text-sm">
                  <BulbGlyph /> Como Usar
                </h3>
                <p className="text-amber-900/80 leading-relaxed whitespace-pre-wrap font-medium">
                    {selectedBoss.dicas}
                </p>
              </section>

              {/* Estatísticas Principais */}
              <section className="mb-10">
                <h3 className="font-display text-2xl font-bold text-red-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2"><SwordGlyph className="w-6 h-6" /> Estatísticas de Combate</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-4 bg-[rgb(var(--bg-card-rgb))] rounded border border-amber-900/20 text-center shadow-md">
                    <div className="font-display text-xs text-amber-900/50 font-bold uppercase mb-2 tracking-wider">INICIATIVA</div>
                    <div className="text-3xl font-bold text-amber-950">+{selectedBoss.iniciativa}</div>
                  </div>
                  <div className="p-4 bg-[rgb(var(--bg-card-rgb))] rounded border border-amber-900/20 text-center shadow-md">
                    <div className="font-display text-xs text-amber-900/50 font-bold uppercase mb-2 tracking-wider">PERCEPÇÃO</div>
                    <div className="text-3xl font-bold text-amber-950">+{selectedBoss.percepcao}</div>
                  </div>
                  <div className="p-4 bg-[rgb(var(--bg-card-rgb))] rounded border border-amber-900/20 text-center shadow-md">
                    <div className="font-display text-xs text-amber-900/50 font-bold uppercase mb-2 tracking-wider">DEFESA</div>
                    <div className="text-3xl font-bold text-amber-950">{selectedBoss.defesa}</div>
                  </div>
                  <div className="p-4 bg-red-900/5 rounded border border-red-900/20 text-center shadow-md">
                    <div className="font-display text-xs text-red-800/70 font-bold uppercase mb-2 tracking-wider">PV (Vida)</div>
                    <div className="text-3xl font-bold text-red-700">{selectedBoss.pv}</div>
                  </div>
                </div>
              </section>

              {/* Resistências */}
              <section className="mb-10">
                <h3 className="font-display text-xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2 flex items-center gap-2"><ShieldGlyph /> Resistências</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-[rgb(var(--bg-inset-rgb))] rounded border border-amber-900/20 flex flex-col items-center">
                    <span className="font-display text-xs text-amber-900/50 font-bold uppercase mb-1">FORTITUDE</span>
                    <span className="text-xl font-bold text-amber-950">+{selectedBoss.fort}</span>
                  </div>
                  <div className="p-3 bg-[rgb(var(--bg-inset-rgb))] rounded border border-amber-900/20 flex flex-col items-center">
                    <span className="font-display text-xs text-amber-900/50 font-bold uppercase mb-1">REFLEXOS</span>
                    <span className="text-xl font-bold text-amber-950">+{selectedBoss.ref}</span>
                  </div>
                  <div className="p-3 bg-[rgb(var(--bg-inset-rgb))] rounded border border-amber-900/20 flex flex-col items-center">
                    <span className="font-display text-xs text-amber-900/50 font-bold uppercase mb-1">VONTADE</span>
                    <span className="text-xl font-bold text-amber-950">+{selectedBoss.von}</span>
                  </div>
                </div>
                {selectedBoss.resistenciaDano && (
                  <div className="p-4 bg-[rgb(var(--bg-card-rgb))]/50 rounded border border-amber-900/20 flex items-start gap-2">
                    <span className="font-display text-amber-800 font-bold text-sm shrink-0 uppercase tracking-wide flex items-center gap-1"><ShieldGlyph className="w-3.5 h-3.5" /> Vantagens:</span>
                    <span className="text-amber-900/80 text-sm font-medium">{selectedBoss.resistenciaDano}</span>
                  </div>
                )}
              </section>

              {/* Movimento e Recursos */}
              <section className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[rgb(var(--bg-inset-rgb))] rounded border border-amber-900/20 flex justify-between items-center px-6 shadow-sm">
                    <span className="font-display text-xs text-amber-900/50 font-bold uppercase tracking-wider">DESLOCAMENTO</span>
                    <span className="text-amber-950 font-bold text-lg">{selectedBoss.deslocamento}</span>
                  </div>
                  <div className="p-4 bg-[rgb(var(--bg-inset-rgb))] rounded border border-blue-800/25 flex justify-between items-center px-6 shadow-sm">
                    <span className="font-display text-xs text-blue-500/80 font-bold uppercase tracking-wider">PONTOS DE MANA</span>
                    <span className="text-blue-500 font-bold text-lg">{selectedBoss.pm}</span>
                  </div>
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-10">
                <h3 className="font-display text-xl font-bold text-red-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2"><BoltGlyph /> Ações & Ataques</h3>
                {selectedBoss.ataqueCorpoACorpo && (
                  <div className="p-5 bg-[rgb(var(--bg-inset-rgb))] rounded border-l-4 border-red-800 mb-4 shadow-sm">
                    <div className="font-display text-xs text-red-800/70 font-bold mb-2 uppercase tracking-widest">CORPO A CORPO</div>
                    <div className="text-amber-950 font-serif text-lg font-medium">{selectedBoss.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedBoss.ataqueDistancia && (
                  <div className="p-5 bg-[rgb(var(--bg-inset-rgb))] rounded border-l-4 border-amber-600 shadow-sm">
                    <div className="font-display text-xs text-amber-800/70 font-bold mb-2 uppercase tracking-widest">À DISTÂNCIA</div>
                    <div className="text-amber-950 font-serif text-lg font-medium">{selectedBoss.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades */}
              <section className="mb-10">
                <h3 className="font-display text-xl font-bold text-amber-800 mb-6 border-b border-amber-900/20 pb-2 flex items-center gap-2"><SparkleGlyph /> Habilidades Especiais</h3>
                <div className="space-y-4">
                  {selectedBoss.habilidades.map((hab, index) => (
                    <div key={index} className="p-5 bg-[rgb(var(--bg-inset-rgb))] rounded border border-amber-900/10 shadow-sm hover:border-amber-900/30 transition-colors">
                      <p className="text-amber-900/90 text-lg leading-relaxed font-medium">
                        <span className="text-red-800 mr-2 font-bold">◆</span>{hab}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Atributos */}
              <section className="mb-10">
                <h3 className="font-display text-xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2 flex items-center gap-2"><ChartGlyph /> Atributos</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {[
                        { l: "FOR", v: selectedBoss.for },
                        { l: "DES", v: selectedBoss.des },
                        { l: "CON", v: selectedBoss.con },
                        { l: "INT", v: selectedBoss.int },
                        { l: "SAB", v: selectedBoss.sab },
                        { l: "CAR", v: selectedBoss.car }
                    ].map((attr) => (
                        <div key={attr.l} className="py-4 bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 rounded flex flex-col items-center shadow-sm">
                            <div className="font-display text-[10px] text-amber-900/50 font-bold mb-1 tracking-wider">{attr.l}</div>
                            <div className="text-2xl font-bold text-amber-950">{attr.v}</div>
                        </div>
                    ))}
                </div>
              </section>

              {/* Perícias e Equipamentos */}
              <section className="mb-10 p-6 bg-[rgb(var(--bg-edge-rgb))]/50 rounded border border-amber-900/20">
                <h3 className="font-display text-lg font-bold text-amber-900 mb-4 uppercase tracking-wide text-sm flex items-center gap-2"><TargetGlyph /> Perícias & Equipamento</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedBoss.pericias.map((pericia, index) => (
                    <span key={index} className="px-3 py-1 bg-[rgb(var(--bg-inset-rgb))] rounded-sm text-amber-900 text-sm border border-amber-900/10 shadow-sm font-bold">
                      {pericia}
                    </span>
                  ))}
                </div>
                {selectedBoss.equipamentos.length > 0 && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-amber-900/10">
                      {selectedBoss.equipamentos.map((equip, index) => (
                        <div key={index} className="text-base text-amber-900/70 italic font-medium flex items-center gap-2">
                             <span className="w-1 h-1 bg-amber-900/50 rounded-full"></span> {equip}
                        </div>
                      ))}
                    </div>
                )}
              </section>

              {/* Tesouro */}
              <section className="p-6 mb-8 bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                <h3 className="font-display text-lg font-bold text-amber-800 mb-3 flex items-center gap-2 uppercase tracking-wide text-sm">
                  <CoinGlyph /> Tesouro
                </h3>
                <p className="text-amber-900/90 text-base leading-relaxed font-medium">{selectedBoss.tesouro}</p>
              </section>
              
              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
                    <span className="text-amber-900/60 text-2xl">❖</span>
                    <div className="h-[2px] w-20 bg-amber-900/60"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center text-white/40 text-sm relative z-10">
        <p className="font-display mb-1 text-white/60 tracking-wide">Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}