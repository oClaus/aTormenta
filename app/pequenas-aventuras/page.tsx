"use client";

import Link from "next/link";
import { useState } from "react";
import { Adventure } from "@/types/adventure";
import { adventures } from "@/data/adventures";

export default function PequenasAventurasPage() {
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdventures = adventures
    .filter(adventure =>
      adventure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      adventure.theme.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125">
              a-Tormenta
            </h1>
          </Link>

          <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
            <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
              Início
            </Link>
            <span className="text-stone-700">/</span>
            <span className="text-red-700">Pequenas Aventuras</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4">
            Pequenas Aventuras
          </h2>
          <p className="text-stone-400 text-lg">
            Explore histórias épicas e desafios emocionantes
          </p>
        </div>

        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
          <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
            Buscar Aventura
          </label>
          <input
            type="text"
            placeholder="Digite o nome ou tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              onClick={() => setSelectedAdventure(adventure)}
              className="group rounded-xl bg-stone-900 border border-stone-800 cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full h-48 bg-stone-950 overflow-hidden border-b border-stone-800">
                {adventure.image ? (
                  <img
                    src={adventure.image}
                    alt={adventure.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl text-stone-700">
                    📖
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">
                  {adventure.name}
                </h3>

                <span className="text-xs uppercase text-stone-400 mb-2">
                  {adventure.theme}
                </span>

                <p className="text-stone-500 text-sm mt-auto">
                  {adventure.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedAdventure && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedAdventure(null)}
        >
          <div
            className="bg-stone-950 border border-stone-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAdventure(null)}
              className="absolute top-4 right-4 text-stone-500 hover:text-red-500"
            >
              ✕
            </button>

            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4">
                {selectedAdventure.name}
              </h2>

              <p className="text-stone-400 mb-6">
                {selectedAdventure.summary}
              </p>

              {selectedAdventure.sections.map((section, index) => (
                <p key={index} className="mb-4 text-stone-300">
                  {section.content}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence à Jambo Editora.</p>
      </footer>
    </div>
  );
}
