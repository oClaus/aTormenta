"use client";

import { useState } from "react";
import Link from "next/link";
import { God } from "@/types/god";
import { gods } from "@/data/gods";
import { getStatusLabel, getStatusColor } from "@/types/god";

export default function DeusesPage() {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGods = gods
    .filter(
      (god) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        god.beliefs.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  // Nova função para fechar o modal clicando fora
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedGod(null);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-amber-700">Deuses</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Introdução e Explicação - MANTENDO ORDEM DO TEXTO */}
        <div className="mb-12 w-full space-y-6 text-lg leading-relaxed">
            <div>
                <h1 className="text-5xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">
                Deuses
                </h1>
                <p className="text-stone-300">
                Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2">Escolhendo seu deus</h2>
                <p className="text-stone-300 mb-2">Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
                <p className="text-stone-300 mb-2">Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
                <p className="text-stone-300 mb-2">Ao se tornar devoto, você recebe um poder concedido à sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião).</p>
                <p><span className="text-amber-600 font-bold">Multiclasse </span><span className="text-stone-300">No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</span></p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2">Características dos deuses</h2>
                <div className="space-y-2 pl-4 border-l-2 border-stone-800">
                    <p><span className="text-amber-600 font-bold"> Crenças e Objetivos:</span><span className="text-stone-300"> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</span></p>
                    <p><span className="text-amber-600 font-bold"> Símbolo Sagrado:</span><span className="text-stone-300"> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</span></p>
                    <p><span className="text-amber-600 font-bold"> Canalizar Energia:</span><span className="text-stone-300"> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</span></p>
                    <p><span className="text-amber-600 font-bold"> Arma Preferida:</span><span className="text-stone-300"> A arma típica de devotos do deus, importante para certas habilidades e magias.</span></p>
                </div>
            </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
             <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar por nome ou crenças..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Deuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
            {filteredGods.map((god) => (
            <button
                key={god.id}
                onClick={() => setSelectedGod(god)}
                className="group relative rounded overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-left flex flex-col"
            >
                {/* Imagem - FUNDO BRANCO */}
                <div className="w-full h-56 border-b border-stone-800 bg-white flex items-center justify-center relative overflow-hidden">
                    <img
                        src={god.image}
                        alt={god.name}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-stone-200 group-hover:text-amber-500 transition-colors mb-2 font-serif">
                        {god.name}
                    </h3>

                    {/* Status Badge */}
                    {god.status && (
                        <div className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-stone-800 border border-stone-700 mb-3`}>
                        {getStatusLabel(god.status)}
                        </div>
                    )}

                    {/* Descrição Breve */}
                    <p className="text-stone-400 text-sm line-clamp-3 font-serif leading-relaxed">
                        {god.history}
                    </p>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600 group-hover:border-amber-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 group-hover:border-amber-500 transition-colors"></div>
            </button>
            ))}
        </div>

        {filteredGods.length === 0 && (
            <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
            <p className="text-stone-500 text-lg italic">Nenhum deus encontrado nos registros sagrados.</p>
            </div>
        )}

        {/* Modal */}
        {selectedGod && (
            <div 
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
            {/* Container do Modal */}
            <div className="bg-stone-900 border border-stone-700 rounded shadow-[0_0_60px_rgba(0,0,0,0.9)] max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar bg-[url('/noise.png')] relative">
                
                {/* Header do Modal */}
                <div className="sticky top-0 bg-stone-900/95 backdrop-blur border-b border-stone-800 p-6 flex items-start justify-between z-10">
                    <div>
                        <h2 className="text-5xl font-bold text-amber-600 mb-2 font-serif tracking-wide">
                            {selectedGod.name}
                        </h2>
                        {selectedGod.status && (
                            <div className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white bg-stone-800 border border-stone-600`}>
                            {getStatusLabel(selectedGod.status)}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setSelectedGod(null)}
                        className="text-stone-500 hover:text-red-500 text-3xl transition-colors leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-8 md:p-10 space-y-10 font-serif">

                    {/* História */}
                    <div className="bg-stone-950/30 p-6 rounded border border-stone-800 shadow-inner">
                        <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
                             <span>📖</span> História
                        </h3>
                        <p className="text-stone-300 leading-relaxed text-lg whitespace-pre-line">
                        {selectedGod.history}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Crenças e Objetivos */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2">
                                <span>🙏</span> Crenças e Objetivos
                            </h3>
                            <p className="text-stone-400 leading-relaxed">
                            {selectedGod.beliefs}
                            </p>
                        </div>

                        {/* Símbolo Sagrado */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2">
                                <span>✨</span> Símbolo Sagrado
                            </h3>
                            <p className="text-stone-400 leading-relaxed">
                            {selectedGod.sacredSymbol}
                            </p>
                        </div>

                         {/* Canalizar Energia */}
                         <div>
                            <h3 className="text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2">
                                <span>⚡</span> Canalizar Energia
                            </h3>
                            <p className="text-stone-400 leading-relaxed">
                            {selectedGod.channelEnergy}
                            </p>
                        </div>

                        {/* Arma Preferida */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2">
                                <span>🗡️</span> Arma Preferida
                            </h3>
                            <p className="text-stone-400 leading-relaxed">
                            {selectedGod.preferredWeapon}
                            </p>
                        </div>
                    </div>

                    {/* Devotos */}
                    <div className="border-t border-stone-800 pt-8">
                        <h3 className="text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2">
                             <span>👥</span> Devotos
                        </h3>
                        <p className="text-stone-400 leading-relaxed text-lg">
                        {selectedGod.devotees}
                        </p>
                    </div>

                    {/* Poderes Concedidos */}
                    <div>
                        <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2">
                            <span>💫</span> Poderes Concedidos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedGod.grantedPowers.map((power: string, index: number) =>  (
                            <div
                            key={index}
                            className="p-4 rounded bg-stone-950 border border-stone-800 text-stone-300 font-bold hover:border-amber-900/50 transition-colors shadow-sm"
                            >
                            {power}
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Obrigações e Restrições */}
                    <div className="p-6 bg-red-950/10 border border-red-900/30 rounded">
                        <h3 className="text-2xl font-bold text-red-700 mb-3 flex items-center gap-2">
                            <span>⚠️</span> Obrigações e Restrições
                        </h3>
                        <p className="text-stone-400 leading-relaxed">
                        {selectedGod.obligationsRestrictions}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )}
      </main>
       {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}