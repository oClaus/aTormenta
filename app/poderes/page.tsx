"use client";

import { useState } from "react";
import Link from "next/link";
import { powerCategories } from "@/data/power-categories";
import { formatOrigin } from "@/types/power";

export default function PodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredCategories = powerCategories
    .filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
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
                <span className="text-red-800">Poderes</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
             Poderes
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full"></div>
        </div>

        {/* Acordeão de Introdução */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações e categorias.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium">
                    Explore poderes e habilidades especiais para suas classes. Cada categoria oferece poderes únicos que melhoram suas capacidades em combate.
                </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                    Escolhendo Poderes Gerais
                </h3>
                <p className="font-medium">
                    Poderes gerais podem ser escolhidos por qualquer personagem, independentemente de sua classe. Eles seguem todas as regras de habilidades. Poderes gerais fornecem mais opções, ao custo de um pouco de complexidade. Usá-los ou não é uma decisão de cada jogador. Algumas raças e origens fornecem poderes gerais. Além disso, sempre que você recebe um poder de classe, pode trocá-lo por um poder geral.
                </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                    Grupos de Poderes
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Combate:</strong> Poderes que melhoram características relacionadas a combate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Destino:</strong> Poderes que melhoram características não relacionadas a combate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Magia:</strong> Poderes ligados a magias e itens mágicos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Concedidos:</strong> Poderes recebidos por devotos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Tormenta:</strong> Poderes ligados à tempestade rubra.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Raça:</strong> São caracterizados por possuírem como pré-requisito pertencer a uma raça específica.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm bg-[#e8dac1] px-2 py-1 rounded shadow-sm border border-amber-900/10 mr-2 inline-block mb-1 md:mb-0">Grupo:</strong> Poderes de grupo fornecem bônus maiores que outros poderes; contudo, só funcionam se houver outro personagem com o mesmo poder na cena.</span>
                    </li>
                </ul>
              </section>

            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Categoria
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome, descrição ou origem..."
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
                Exibindo {filteredCategories.length} resultado(s) para "{searchTerm}".
              </p>
            )}
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredCategories.map((category) => (
            <Link
                key={category.id}
                href={`/poderes/${category.slug}`}
                className="group relative rounded-xl overflow-hidden bg-[#e8dac1] border-2 border-amber-900/30 p-5 md:p-6 hover:border-red-800/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col h-full hover:-translate-y-1 shadow-sm font-serif"
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-800 transition-colors tracking-wide border-b-2 border-amber-900/10 pb-2">
                        {category.name}
                    </h3>
                    <div className="flex-1 mb-4">
                        <p className="text-amber-950/85 leading-relaxed text-sm md:text-base font-medium">
                            {category.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                        <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {formatOrigin(category.origin)}
                        </span>
                        <span className="text-red-800 group-hover:text-red-600 transition-colors text-xl font-bold">
                        →
                        </span>
                    </div>
                </div>
            </Link>
            ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma categoria encontrada.
              </p>
            </div>
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