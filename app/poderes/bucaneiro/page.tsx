"use client";

import { useState } from "react";
import Link from "next/link";
import { powersBucaneiro } from "@/data/powers-bucaneiro";
import { formatOrigin } from "@/types/power";

export default function BucaneiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersBucaneiro
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
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
                <Link href="/poderes" className="text-amber-950/70 hover:text-red-800 transition-colors">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poderes de Bucaneiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Poderes de Bucaneiro
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
                  Clique para expandir ou recolher as informações.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              {/* Seção 1: Bravatas */}
              <section>
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Bravatas</h3>
                <p className="font-medium mb-6">
                  Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as seguintes regras:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima.</span>
                  </li>
                </ul>
              </section>

              {/* Seção 2: TABELA 1-17: INTRODUÇÃO CALOROSA (Agora devidamente separada) */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h4 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">
                  Tabela: Introdução Calorosa
                </h4>
                
                <div className="overflow-x-auto shadow-sm rounded-xl border-2 border-amber-900/20 bg-[#e8dac1]">
                  <table className="min-w-full divide-y-2 divide-amber-900/20">
                    <thead className="bg-[#d9c8a9] text-amber-950/80">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Apresentação</th>
                        <th className="px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Ação</th>
                        <th className="px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Benefício</th>
                        <th className="px-4 py-3 text-left text-xs md:text-sm font-bold uppercase tracking-widest">Exemplo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6] text-sm md:text-base">
                      <tr className="hover:bg-[#e8dac1]/50 transition-colors">
                        <td className="px-4 py-3 text-amber-950/85 font-bold border-r-2 border-amber-900/10">Saudação educada</td>
                        <td className="px-4 py-3 text-amber-950/70 font-medium border-r-2 border-amber-900/10">Livre</td>
                        <td className="px-4 py-3 text-red-800 font-bold border-r-2 border-amber-900/10">1 PM temporário</td>
                        <td className="px-4 py-3 italic text-amber-900/70">“Olá!”</td>
                      </tr>
                      <tr className="bg-[#e8dac1]/30 hover:bg-[#e8dac1]/50 transition-colors">
                        <td className="px-4 py-3 text-amber-950/85 font-bold border-r-2 border-amber-900/10">Apresentar o próprio nome</td>
                        <td className="px-4 py-3 text-amber-950/70 font-medium border-r-2 border-amber-900/10">Movimento</td>
                        <td className="px-4 py-3 text-red-800 font-bold border-r-2 border-amber-900/10">+2 em perícias baseadas em Carisma</td>
                        <td className="px-4 py-3 italic text-amber-900/70">“Meu nome é Lorthan.”</td>
                      </tr>
                      <tr className="hover:bg-[#e8dac1]/50 transition-colors">
                        <td className="px-4 py-3 text-amber-950/85 font-bold border-r-2 border-amber-900/10">Declarar uma ligação pessoal</td>
                        <td className="px-4 py-3 text-amber-950/70 font-medium border-r-2 border-amber-900/10">Padrão</td>
                        <td className="px-4 py-3 text-red-800 font-bold border-r-2 border-amber-900/10">+2 em rolagens de dano</td>
                        <td className="px-4 py-3 italic text-amber-900/70">“Vocês roubaram a colheita dos camponeses.”</td>
                      </tr>
                      <tr className="bg-[#e8dac1]/30 hover:bg-[#e8dac1]/50 transition-colors">
                        <td className="px-4 py-3 text-amber-950/85 font-bold border-r-2 border-amber-900/10">Revelar seu objetivo na cena</td>
                        <td className="px-4 py-3 text-amber-950/70 font-medium border-r-2 border-amber-900/10">Completa</td>
                        <td className="px-4 py-3 text-red-800 font-bold border-r-2 border-amber-900/10">Pode rolar novamente um único teste de perícia recém-feito</td>
                        <td className="px-4 py-3 italic text-amber-900/70">“Eu vim aqui para puni-los!”</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome, descrição ou origem..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 p-5 md:p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 font-serif"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-800 transition-colors tracking-wide border-b-2 border-amber-900/10 pb-2">
                  {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                  <p className="text-amber-950/85 text-sm md:text-base leading-relaxed font-medium">
                      {power.description}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                  {/* Pré-requisito */}
                  {power.prerequisite && (
                      <div className="mb-4 pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <p className="text-xs md:text-sm text-amber-950/70 font-medium">
                          <span className="font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
                      </p>
                      </div>
                  )}

                  {/* Origem */}
                  <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {formatOrigin(power.origin)}
                      </span>
                  </div>
                </div>
            </div>
            ))}
        </div>

        {/* Empty State */}
        {filteredPowers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum poder de bucaneiro encontrado.
              </p>
            </div>
        )}
      </div>

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