"use client";

import Link from "next/link";
import { useState } from "react";
import { Boss } from "@/types/boss";
import { bosses } from "@/data/bosses";

export default function ChefesPage() {
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBosses = bosses.filter(boss =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.tipo.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - 100% Width */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Chefes</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Descrição */}
        <div className="mb-12 w-full border-b border-stone-800 pb-8">
          <h2 className="text-5xl font-bold text-red-700 mb-4 flex items-center gap-3">
             <span className="text-3xl text-stone-600">⚔️</span> Chefes adaptados de outras obras
          </h2>
          <p className="text-stone-400 text-lg italic border-l-4 border-amber-900/50 pl-4">
            Aqui estará inimigos de outras obras prontos para adaptação para seu jogo.
          </p>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
          <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
            Buscar Chefe no Arquivo
          </label>
          <div className="relative">
             <input
                type="text"
                placeholder="Digite o nome ou tipo de criatura..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                🔍
            </div>
          </div>
        </div>

        {/* Grid de Chefes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
          {filteredBosses.map((boss) => (
            <div
              key={boss.id}
              onClick={() => setSelectedBoss(boss)}
              className="group relative overflow-hidden rounded bg-stone-900 border border-stone-800 hover:border-red-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div className="aspect-square relative bg-black border-b border-stone-800">
                {boss.image ? (
                  <>
                    <img
                        src={boss.image}
                        alt={boss.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 filter saturate-40 group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                  </>
                ) : (
                <div className="absolute inset-0 flex items-center justify-center text-stone-700 text-6xl bg-stone-950">
                    👹
                </div>
               )}
               
               {/* Decorative Corner */}
               <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm border border-stone-700 rounded text-xs font-bold text-stone-300 uppercase">
                 {boss.tipo}
               </div>
              </div>
              
              <div className="p-5 relative">
                <h3 className="text-xl font-bold text-stone-200 group-hover:text-red-500 transition-colors mb-3 leading-tight text-center font-serif">
                  {boss.name}
                </h3>
                
                <div className="flex items-center justify-center">
                  <div className="px-4 py-1 rounded bg-stone-950 border border-stone-800 group-hover:border-red-900 text-stone-400 group-hover:text-red-400 font-bold text-sm tracking-widest transition-colors">
                    ND {boss.nd}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredBosses.length === 0 && (
          <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
            <p className="text-stone-500 text-lg italic">Nenhum chefe encontrado nos registros antigos.</p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes do Chefe */}
      {selectedBoss && (
        <div
          className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedBoss(null)}
        >
          <div
            className="bg-stone-900 border border-stone-700 rounded shadow-[0_0_50px_rgba(0,0,0,0.9)] max-w-5xl w-full my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="relative p-8 border-b border-stone-800 bg-stone-950/50">
              <button
                onClick={() => setSelectedBoss(null)}
                className="absolute top-4 right-4 text-stone-500 hover:text-red-500 transition-colors text-2xl"
              >
                ✕
              </button>
              <h2 className="text-4xl font-bold text-red-700 mb-2 font-serif">
                {selectedBoss.name}
              </h2>
              <div className="flex flex-wrap gap-3 mt-2 text-sm font-bold uppercase tracking-wide">
                <span className="text-stone-400">{selectedBoss.tipo}</span>
                <span className="text-stone-600">•</span>
                <span className="text-stone-400">Tamanho: <span className="text-amber-700">{selectedBoss.tamanho}</span></span>
                <span className="text-stone-600">•</span>
                <span className="px-2 py-0.5 bg-red-900/20 border border-red-900/50 text-red-500 rounded">ND {selectedBoss.nd}</span>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 max-h-[75vh] overflow-y-auto custom-scrollbar bg-[url('/noise.png')]">
              
              {/* História */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-amber-700 mb-3 flex items-center gap-2 font-serif border-b border-stone-800 pb-1">
                  📖 História
                </h3>
                <p className="text-stone-300 leading-relaxed whitespace-pre-wrap font-serif text-lg">
                    {selectedBoss.historia}
                </p>
              </section>

              {/* Dicas */}
              <section className="mb-8 p-6 bg-stone-950 rounded border border-stone-800 shadow-inner">
                <h3 className="text-xl font-bold text-amber-600 mb-3 flex items-center gap-2">
                  💡 Como Usar
                </h3>
                <p className="text-stone-400 leading-relaxed whitespace-pre-wrap">
                    {selectedBoss.dicas}
                </p>
              </section>

              {/* Estatísticas Principais */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-red-700 mb-4 font-serif border-b border-stone-800 pb-1">⚔️ Estatísticas de Combate</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-stone-950 rounded border border-stone-800 text-center">
                    <div className="text-xs text-stone-500 font-bold uppercase mb-1">INICIATIVA</div>
                    <div className="text-2xl font-bold text-stone-200">+{selectedBoss.iniciativa}</div>
                  </div>
                  <div className="p-4 bg-stone-950 rounded border border-stone-800 text-center">
                    <div className="text-xs text-stone-500 font-bold uppercase mb-1">PERCEPÇÃO</div>
                    <div className="text-2xl font-bold text-stone-200">+{selectedBoss.percepcao}</div>
                  </div>
                  <div className="p-4 bg-stone-950 rounded border border-stone-800 text-center">
                    <div className="text-xs text-stone-500 font-bold uppercase mb-1">DEFESA</div>
                    <div className="text-2xl font-bold text-stone-200">{selectedBoss.defesa}</div>
                  </div>
                  <div className="p-4 bg-red-950/20 rounded border border-red-900/30 text-center">
                    <div className="text-xs text-red-500 font-bold uppercase mb-1">PV (Vida)</div>
                    <div className="text-2xl font-bold text-red-500">{selectedBoss.pv}</div>
                  </div>
                </div>
              </section>

              {/* Resistências */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-amber-700 mb-4 font-serif border-b border-stone-800 pb-1">🛡️ Resistências</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-stone-950/50 rounded border border-stone-800 flex flex-col items-center">
                    <span className="text-xs text-stone-500 font-bold uppercase">FORT</span>
                    <span className="text-xl font-bold text-stone-300">+{selectedBoss.fort}</span>
                  </div>
                  <div className="p-3 bg-stone-950/50 rounded border border-stone-800 flex flex-col items-center">
                    <span className="text-xs text-stone-500 font-bold uppercase">REF</span>
                    <span className="text-xl font-bold text-stone-300">+{selectedBoss.ref}</span>
                  </div>
                  <div className="p-3 bg-stone-950/50 rounded border border-stone-800 flex flex-col items-center">
                    <span className="text-xs text-stone-500 font-bold uppercase">VON</span>
                    <span className="text-xl font-bold text-stone-300">+{selectedBoss.von}</span>
                  </div>
                </div>
                {selectedBoss.resistenciaDano && (
                  <div className="p-4 bg-stone-800/40 rounded border border-stone-700 flex items-start gap-2">
                    <span className="text-amber-600 font-bold text-sm shrink-0">🛡️ Vantagens:</span>
                    <span className="text-stone-300 text-sm">{selectedBoss.resistenciaDano}</span>
                  </div>
                )}
              </section>

              {/* Movimento e Recursos */}
              <section className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-950/30 rounded border border-stone-800 flex justify-between items-center px-6">
                    <span className="text-xs text-stone-500 font-bold uppercase">DESLOCAMENTO</span>
                    <span className="text-stone-200 font-bold">{selectedBoss.deslocamento}</span>
                  </div>
                  <div className="p-4 bg-blue-950/10 rounded border border-blue-900/20 flex justify-between items-center px-6">
                    <span className="text-xs text-blue-400 font-bold uppercase">PONTOS DE MANA</span>
                    <span className="text-blue-300 font-bold">{selectedBoss.pm}</span>
                  </div>
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-red-600 mb-4 font-serif border-b border-red-900/30 pb-1">⚡ Ações & Ataques</h3>
                {selectedBoss.ataqueCorpoACorpo && (
                  <div className="p-4 bg-stone-800/40 rounded border-l-4 border-red-800 mb-3">
                    <div className="text-xs text-red-400 font-bold mb-1 uppercase tracking-wide">CORPO A CORPO</div>
                    <div className="text-stone-200 font-serif text-lg">{selectedBoss.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedBoss.ataqueDistancia && (
                  <div className="p-4 bg-stone-800/40 rounded border-l-4 border-stone-600">
                    <div className="text-xs text-stone-400 font-bold mb-1 uppercase tracking-wide">À DISTÂNCIA</div>
                    <div className="text-stone-200 font-serif text-lg">{selectedBoss.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-amber-700 mb-4 font-serif border-b border-stone-800 pb-1">✨ Habilidades Especiais</h3>
                <div className="space-y-3">
                  {selectedBoss.habilidades.map((hab, index) => (
                    <div key={index} className="p-4 bg-stone-950 rounded border border-stone-800 shadow-sm">
                      <p className="text-stone-300 text-sm leading-relaxed">{hab}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Atributos */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-amber-700 mb-4 font-serif border-b border-stone-800 pb-1">📊 Atributos</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {[
                        { l: "FOR", v: selectedBoss.for },
                        { l: "DES", v: selectedBoss.des },
                        { l: "CON", v: selectedBoss.con },
                        { l: "INT", v: selectedBoss.int },
                        { l: "SAB", v: selectedBoss.sab },
                        { l: "CAR", v: selectedBoss.car }
                    ].map((attr) => (
                        <div key={attr.l} className="py-3 bg-stone-900 border border-stone-800 rounded flex flex-col items-center">
                            <div className="text-[10px] text-stone-500 font-bold mb-1">{attr.l}</div>
                            <div className="text-xl font-bold text-stone-200">{attr.v}</div>
                        </div>
                    ))}
                </div>
              </section>

              {/* Perícias e Equipamentos */}
              <section className="mb-8 p-5 bg-stone-900/50 rounded border border-stone-800">
                <h3 className="text-lg font-bold text-stone-400 mb-3 uppercase tracking-wide text-sm">🎯 Perícias & Equipamento</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedBoss.pericias.map((pericia, index) => (
                    <span key={index} className="px-3 py-1 bg-stone-800 rounded text-stone-300 text-sm border border-stone-700">
                      {pericia}
                    </span>
                  ))}
                </div>
                {selectedBoss.equipamentos.length > 0 && (
                   <div className="space-y-1 mt-3 pt-3 border-t border-stone-800">
                      {selectedBoss.equipamentos.map((equip, index) => (
                        <div key={index} className="text-sm text-stone-500 italic">• {equip}</div>
                      ))}
                   </div>
                )}
              </section>

              {/* Tesouro */}
              <section className="p-5 mb-8 bg-gradient-to-r from-amber-950/20 to-stone-900 border border-amber-900/30 rounded">
                <h3 className="text-lg font-bold text-amber-600 mb-2 flex items-center gap-2 uppercase tracking-wide text-sm">
                  💰 Tesouro
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">{selectedBoss.tesouro}</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}