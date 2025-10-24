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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Chefes</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Título e Descrição */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">
            ⚔️ Chefes adaptados de outras obras
          </h2>
          <p className="text-gray-400 text-lg">
            Aqui estará inimigos de outras obras prontos para adaptação para seu jogo.
          </p>
        </div>

        {/* Busca */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-red-950/30 to-black border border-red-900/30">
          <label className="block text-sm font-medium text-red-300 mb-2">
            Buscar Chefe
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou tipo de criatura..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-red-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </div>

        {/* Grid de Chefes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBosses.map((boss) => (
            <div
              key={boss.id}
              onClick={() => setSelectedBoss(boss)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] cursor-pointer"
            >
              <div className="aspect-square relative bg-gray-800">
                {boss.image ? (
                  <img
                    src={boss.image}
                    alt={boss.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-6xl">
                👹
                </div>
               )}
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors mb-2">
                  {boss.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{boss.tipo}</span>
                  <span className="px-3 py-1 rounded-full bg-red-900/50 text-red-300 font-semibold">
                    ND {boss.nd}
                  </span>
                </div>
              </div>

              {/* Efeito de brilho neon no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredBosses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nenhum chefe encontrado com os filtros selecionados.</p>
          </div>
        )}

        {/* Seção para adicionar novos chefes */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-red-950/30 to-black border border-red-900/30">
          <h3 className="text-2xl font-bold text-red-300 mb-4">📝 Adicionar Novos Chefes</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para adicionar novos chefes, edite o arquivo 
            <code className="mx-1 px-2 py-1 bg-black/50 rounded text-purple-400 text-sm">data/bosses.ts</code>
            e adicione novos objetos ao array.
          </p>
          <p className="text-gray-400 text-sm">
            Cada chefe deve ter todas as propriedades definidas na interface Boss.
          </p>
        </div>
      </main>

      {/* Modal de Detalhes do Chefe */}
      {selectedBoss && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedBoss(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/50 rounded-2xl max-w-5xl w-full my-8 shadow-[0_0_50px_rgba(239,68,68,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="relative p-6 border-b border-red-900/50">
              <button
                onClick={() => setSelectedBoss(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                {selectedBoss.name}
              </h2>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="text-gray-400">{selectedBoss.tipo}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Tamanho: {selectedBoss.tamanho}</span>
                <span className="text-gray-400">•</span>
                <span className="text-red-400 font-semibold">ND {selectedBoss.nd}</span>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {/* História */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-2 flex items-center gap-2">
                  📖 História
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{selectedBoss.historia}</p>
              </section>

              {/* Dicas */}
              <section className="mb-6 p-4 bg-purple-950/30 rounded-lg border border-purple-900/30">
                <h3 className="text-xl font-bold text-purple-300 mb-2 flex items-center gap-2">
                  💡 Como Usar
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{selectedBoss.dicas}</p>
              </section>

              {/* Estatísticas Principais */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">⚔️ Estatísticas de Combate</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">INICIATIVA</div>
                    <div className="text-2xl font-bold text-white">+{selectedBoss.iniciativa}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">PERCEPÇÃO</div>
                    <div className="text-2xl font-bold text-white">+{selectedBoss.percepcao}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">DEFESA</div>
                    <div className="text-2xl font-bold text-white">{selectedBoss.defesa}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">PV</div>
                    <div className="text-2xl font-bold text-white">{selectedBoss.pv}</div>
                  </div>
                </div>
              </section>

              {/* Resistências */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">🛡️ Resistências</h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">FORT</div>
                    <div className="text-xl font-bold text-white">+{selectedBoss.fort}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">REF</div>
                    <div className="text-xl font-bold text-white">+{selectedBoss.ref}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">VON</div>
                    <div className="text-xl font-bold text-white">+{selectedBoss.von}</div>
                  </div>
                </div>
                {selectedBoss.resistenciaDano && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">RESISTÊNCIA A DANO</div>
                    <div className="text-white">{selectedBoss.resistenciaDano}</div>
                  </div>
                )}
              </section>

              {/* Movimento e Recursos */}
              <section className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">DESLOCAMENTO</div>
                    <div className="text-white">{selectedBoss.deslocamento}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">PONTOS DE MANA</div>
                    <div className="text-white">{selectedBoss.pm}</div>
                  </div>
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">⚡ Ataques</h3>
                {selectedBoss.ataqueCorpoACorpo && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 mb-3">
                    <div className="text-xs text-red-300 font-semibold mb-1">CORPO A CORPO</div>
                    <div className="text-white">{selectedBoss.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedBoss.ataqueDistancia && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">À DISTÂNCIA</div>
                    <div className="text-white">{selectedBoss.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">✨ Habilidades Especiais</h3>
                <div className="space-y-2">
                  {selectedBoss.habilidades.map((hab, index) => (
                    <div key={index} className="p-3 bg-black/30 rounded-lg border border-purple-900/30">
                      <p className="text-gray-300 text-sm">{hab}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Atributos */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">📊 Atributos</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">FOR</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.for}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">DES</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.des}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">CON</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.con}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">INT</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.int}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">SAB</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.sab}</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">CAR</div>
                    <div className="text-xl font-bold text-white">{selectedBoss.car}</div>
                  </div>
                </div>
              </section>

              {/* Perícias */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">🎯 Perícias</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBoss.pericias.map((pericia, index) => (
                    <span key={index} className="px-3 py-1 bg-black/30 rounded-full border border-red-900/30 text-gray-300 text-sm">
                      {pericia}
                    </span>
                  ))}
                </div>
              </section>

              {/* Equipamentos */}
              {selectedBoss.equipamentos.length > 0 && (
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-red-300 mb-3">🗡️ Equipamentos</h3>
                  <div className="space-y-2">
                    {selectedBoss.equipamentos.map((equip, index) => (
                      <div key={index} className="p-2 bg-black/30 rounded-lg border border-red-900/30">
                        <p className="text-gray-300 text-sm">{equip}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tesouro */}
              <section className="p-4 bg-gradient-to-br from-yellow-950/30 to-black border border-yellow-900/30 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300 mb-2 flex items-center gap-2">
                  💰 Tesouro
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedBoss.tesouro}</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}

