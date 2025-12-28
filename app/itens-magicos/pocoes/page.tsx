"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// --- Dados da Tabela (Sem a coluna D%) ---
type PotionRow = {
  item: string;
  price: string;
};

const potionsData: PotionRow[] = [
  { item: "Abençoar Alimentos (óleo)", price: "T$ 30" },
  { item: "Área Escorregadia (granada)", price: "T$ 30" },
  { item: "Arma Mágica (óleo)", price: "T$ 30" },
  { item: "Compreensão", price: "T$ 30" },
  { item: "Curar Ferimentos (2d8+2 PV)", price: "T$ 30" },
  { item: "Disfarce Ilusório", price: "T$ 30" },
  { item: "Escuridão (óleo)", price: "T$ 30" },
  { item: "Luz (óleo)", price: "T$ 30" },
  { item: "Névoa (granada)", price: "T$ 30" },
  { item: "Primor Atlético", price: "T$ 30" },
  { item: "Proteção Divina", price: "T$ 30" },
  { item: "Resistência a Energia", price: "T$ 30" },
  { item: "Sono", price: "T$ 30" },
  { item: "Suporte Ambiental", price: "T$ 30" },
  { item: "Tranca Arcana (óleo)", price: "T$ 30" },
  { item: "Visão Mística", price: "T$ 30" },
  { item: "Vitalidade Fantasma", price: "T$ 30" },
  { item: "Escudo da Fé (aprimoramento para duração cena)", price: "T$ 120" },
  { item: "Alterar Tamanho", price: "T$ 270" },
  { item: "Aparência Perfeita", price: "T$ 270" },
  { item: "Armamento da Natureza (óleo)", price: "T$ 270" },
  { item: "Bola de Fogo (granada)", price: "T$ 270" },
  { item: "Camuflagem Ilusória", price: "T$ 270" },
  { item: "Concentração de Combate (aprimoramento para duração cena)", price: "T$ 270" },
  { item: "Curar Ferimentos (4d8+4 PV)", price: "T$ 270" },
  { item: "Físico Divino", price: "T$ 270" },
  { item: "Mente Divina", price: "T$ 270" },
  { item: "Metamorfose", price: "T$ 270" },
  { item: "Purificação", price: "T$ 270" },
  { item: "Velocidade", price: "T$ 270" },
  { item: "Vestimenta da Fé (óleo)", price: "T$ 270" },
  { item: "Voz Divina", price: "T$ 270" },
  { item: "Arma Mágica (óleo; aprimoramento para bônus +3)", price: "T$ 750" },
  { item: "Curar Ferimentos (7d8+7 PV)", price: "T$ 1.080" },
  { item: "Físico Divino (aprimoramento para três atributos)", price: "T$ 1.080" },
  { item: "Invisibilidade (aprimoramento para duração cena)", price: "T$ 1.080" },
  { item: "Bola de Fogo (granada; aprimoramento para 10d6 de dano)", price: "T$ 1.470" },
  { item: "Curar Ferimentos (11d8+11 PV)", price: "T$ 3.000" },
];

export default function PocoesPergaminhosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPotions = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return potionsData.filter(
      (p) => p.item.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <main className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-black text-gray-200 px-4 sm:px-8 md:px-12 py-8 md:py-12 selection:bg-slate-500 selection:text-white overflow-x-hidden">
      
      {/* --- Header Estilo Prata --- */}
      <header className="w-full p-4 md:p-6 border-b border-slate-800/60 backdrop-blur-sm sticky top-0 z-50 bg-black/40 md:bg-black/20 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 mb-8 md:mb-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link href="/" className="inline-block group">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-slate-300 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                    a-Tormenta
                  </h1>
                </Link>
                <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
                    <Link href="/" className="text-slate-500 hover:text-slate-200 transition-colors whitespace-nowrap">Início</Link>
                    <span className="text-slate-700">/</span>
                    <Link href="/itens-magicos" className="text-slate-500 hover:text-slate-200 transition-colors whitespace-nowrap">Itens Mágicos</Link>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-300">Consumíveis</span>
                </div>
            </div>
        </div>
      </header>

      {/* --- Conteúdo Principal --- */}
      <div className="w-full">
        <div className="mb-10 text-center md:text-left">
           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-6 drop-shadow-lg leading-tight">
            Poções & Pergaminhos
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed border-b border-slate-800/50 pb-6">
            Poções e pergaminhos contêm o efeito de uma magia. Quando são ativados, geram o efeito dessa magia e então desaparecem.
          </p>
        </div>

        {/* --- Parte 1: Texto e Regras (Cima) --- */}
        <div className="space-y-12 mb-16">
            
            {/* Classificação */}
            <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30 text-slate-300 text-sm italic">
              <span className="font-bold text-slate-200 not-italic">Nota:</span> Poções e pergaminhos são classificados conforme o círculo da magia que contêm: 1º ou 2º (item mágico menor), 3º ou 4º (médio) e 5º (maior).
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Seção: Poções */}
                <section>
                <h2 className="text-3xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-slate-400 rounded-full shadow-[0_0_10px_rgba(148,163,184,0.5)]"></span>
                    Poções
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                    Uma poção é um líquido mágico armazenado em um frasco de vidro ou cerâmica. Poções que afetam objetos também são chamadas de <em className="text-white font-serif">óleos</em> e poções que geram efeito em área também são chamadas de <em className="text-white font-serif">granadas</em>.
                </p>

                {/* Box de Regra: Ativação Poções */}
                <div className="relative group rounded-xl overflow-hidden bg-black/40 border border-slate-700/50 p-6 shadow-lg h-full">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-500/50"></div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">Ativação</h3>
                    <div className="space-y-3 text-slate-400 text-sm md:text-base">
                        <p>
                        <strong className="text-slate-200">Beber:</strong> Para ativar uma poção você deve bebê-la (a poção afeta quem ingeri-la). Isso exige uma <strong className="text-white">ação padrão</strong>.
                        </p>
                        <p>
                        <strong className="text-slate-200">Outros:</strong> Também é possível dar uma poção a uma criatura inconsciente como uma <strong className="text-white">ação completa</strong> ou forçar uma criatura a beber uma poção fazendo a manobra agarrar e então vencendo mais um teste de manobra.
                        </p>
                        <p>
                        <strong className="text-slate-200">Óleos:</strong> Ativar um óleo exige uma <strong className="text-white">ação padrão</strong> para aplicá-lo no objeto que será afetado.
                        </p>
                        <p>
                        <strong className="text-slate-200">Granadas:</strong> Ativar uma granada exige uma <strong className="text-white">ação padrão</strong> para arremessá-la em qualquer ponto em alcance curto (o centro do efeito da magia é o ponto onde a granada foi arremessada).
                        </p>
                    </div>
                </div>
                </section>

                {/* Seção: Pergaminhos */}
                <section>
                <h2 className="text-3xl font-bold text-slate-200 mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-slate-400 rounded-full shadow-[0_0_10px_rgba(148,163,184,0.5)]"></span>
                    Pergaminhos
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                    Um pergaminho mágico é uma folha grossa feita de papel, papiro, couro ou outros materiais. Pergaminhos podem conter qualquer magia. Quando as palavras escritas nele são pronunciadas, a magia é ativada e o pergaminho se desfaz em cinzas.
                </p>

                {/* Box de Regra: Ativação Pergaminhos */}
                <div className="relative group rounded-xl overflow-hidden bg-black/40 border border-slate-700/50 p-6 shadow-lg h-full">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-500/50"></div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 uppercase tracking-wider border-b border-slate-800 pb-2">Ativação</h3>
                    <div className="space-y-3 text-slate-400 text-sm md:text-base">
                        <p>
                        Para ativar um pergaminho você deve lê-lo em voz alta. Isso exige uma <strong className="text-white">ação padrão</strong> ou a ação necessária para lançar a magia, o que for maior.
                        </p>
                        <p className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
                        ⚠️ Para ler um pergaminho, você deve conhecer a magia escrita nele <strong>ou</strong> passar em um teste de <strong className="text-slate-200">Misticismo (CD 20 + custo em PM da magia)</strong>.
                        </p>
                        <p>
                        Quando ativa um pergaminho, você toma quaisquer decisões exigidas pela magia, como se a tivesse lançado, e aplica efeitos que se aplicariam às suas próprias magias. Caso conheça a magia, pode aplicar aprimoramentos nela, pagando o custo em pontos de mana deles (você paga apenas o custo dos aprimoramentos, não o custo básico da magia).
                        </p>
                    </div>
                </div>
                </section>
            </div>
        </div>

        {/* --- Parte 2: Tabela (Baixo) --- */}
        <section className="w-full">
             {/* Header da Tabela + Busca */}
             <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-4 gap-4 pb-2 border-b border-slate-800/50">
                  <h3 className="text-2xl font-bold text-slate-200 uppercase tracking-wider flex items-center gap-3">
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Tabela de Poções
                  </h3>
                
                  {/* Input de Busca na Tabela */}
                  <div className="relative w-full md:w-80">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar poção..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-black/40 border border-slate-700 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors shadow-inner"
                    />
                  </div>
              </div>

            <div className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-black/50">
              {/* Corpo da Tabela */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-base">
                  <thead className="bg-slate-800/80 text-xs sm:text-sm uppercase font-semibold text-slate-400 tracking-wider">
                    <tr>
                      <th className="px-6 py-4 border-b border-slate-700">Poção / Efeito</th>
                      <th className="px-6 py-4 border-b border-slate-700 text-right w-48">Preço</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filteredPotions.length > 0 ? (
                      filteredPotions.map((row, index) => (
                        <tr key={index} className="hover:bg-slate-800/40 transition-colors group">
                          <td className="px-6 py-3 text-slate-300 group-hover:text-white font-medium">{row.item}</td>
                          <td className="px-6 py-3 text-right font-mono text-slate-400 group-hover:text-slate-200 whitespace-nowrap">{row.price}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="px-6 py-12 text-center text-slate-500 italic">
                          Nenhuma poção encontrada com o termo "{searchTerm}".
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              {/* Footer da Tabela */}
              <div className="p-3 border-t border-slate-700/50 bg-slate-900/80 text-[10px] sm:text-xs text-center text-slate-600">
                Tormenta20 - Tabela 8-12
              </div>
            </div>
        </section>

      </div>
    </main>
  );
}