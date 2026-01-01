"use client";

import { useState } from "react";
import Link from "next/link";
import { powerCategories } from "@/data/power-categories";
import { formatOrigin } from "@/types/power";

export default function PodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = powerCategories
    .filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-md">
             Poderes
            </h1>
            
            <p className="text-stone-300 font-serif text-lg leading-relaxed mb-6">
                Explore poderes e habilidades especiais para suas classes. Cada categoria oferece poderes únicos que melhoram suas capacidades em combate.
            </p>
            
            <h3 className="text-2xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-2 mb-3">
                Escolhendo Poderes Gerais
            </h3>
            <p className="text-stone-400 mb-6 leading-relaxed font-serif">
                Poderes gerais podem ser escolhidos por qualquer personagem, independentemente de sua classe. Eles seguem todas as regras de habilidades. Poderes gerais fornecem mais opções, ao custo de um pouco de complexidade. Usá-los ou não é uma decisão de cada jogador. Algumas raças e origens fornecem poderes gerais. Além disso, sempre que você recebe um poder de classe, pode trocá-lo por um poder geral.
            </p>

            <h3 className="text-2xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-2 mb-3">
                Grupos de Poderes
            </h3>
            <ul className="list-none space-y-2 font-serif text-stone-400">
                <li className="flex gap-2 items-center">
                    <span className="font-bold text-amber-600 uppercase tracking-wide text-sm">Combate:</span> Poderes que melhoram características relacionadas a combate.
                </li>
                <li className="flex gap-2 items-center">
                    <span className="font-bold text-amber-600 uppercase tracking-wide text-sm">Destino:</span> Poderes que melhoram características não relacionadas a combate.
                </li>
                <li className="flex gap-2 items-center">
                    <span className="font-bold text-amber-600 uppercase tracking-wide text-sm">Magia:</span> Poderes ligados a magias e itens mágicos.
                </li>
                <li className="flex gap-2 items-center">
                    <span className="font-bold text-amber-600 uppercase tracking-wide text-sm">Concedidos:</span> Poderes recebidos por devotos.
                </li>
                <li className="flex gap-2 items-center">
                    <span className="font-bold text-amber-600 uppercase tracking-wide text-sm">Tormenta:</span> Poderes ligados à tempestade rubra.
                </li>
            </ul>
        </section>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Categoria
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredCategories.map((category) => (
            <Link
                key={category.id}
                href={`/poderes/${category.slug}`}
                className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-800 p-6 hover:border-amber-900/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,83,9,0.15)] flex flex-col h-full hover:-translate-y-1"
            >
                {/* Background Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-amber-600 mb-3 group-hover:text-amber-500 transition-colors font-serif">
                        {category.name}
                    </h3>
                    <p className="text-stone-400 mb-4 leading-relaxed font-serif text-sm flex-grow">
                        {category.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-stone-950 border border-stone-700 text-stone-500 font-serif uppercase tracking-widest group-hover:text-stone-400">
                        {formatOrigin(category.origin)}
                        </span>
                        <span className="text-amber-700 group-hover:text-amber-500 transition-colors text-xl">
                        →
                        </span>
                    </div>
                </div>
            </Link>
            ))}
        </div>

        {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl font-serif">
            <p className="text-lg">Nenhuma categoria encontrada.</p>
            </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}