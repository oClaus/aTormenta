"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// --- Dados da Tabela (Mantidos intocados) ---
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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* --- Header Estilo Grimório --- */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Logo */}
            <Link href="/" className="inline-block group">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">Início</Link>
                <span className="text-stone-700">/</span>
                <Link href="/itens-magicos" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">Itens Mágicos</Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poções & Pergaminhos</span>
            </div>
        </div>
      </header>

      {/* --- Conteúdo Principal --- */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">
        
        {/* Título da Página */}
        <div className="mb-10 text-center md:text-left">
           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-6 drop-shadow-lg leading-tight">
            Poções & Pergaminhos
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl leading-relaxed border-b border-stone-800 pb-6 font-serif italic">
            Poções e pergaminhos contêm o efeito de uma magia. Quando são ativados, geram o efeito dessa magia e então desaparecem.
          </p>
        </div>

        {/* 🛠️ CORREÇÃO DE LAYOUT: 
            Adicionei este container 'flex flex-col gap-20'.
            Ele garante que a parte de cima (Texto) fique separada da parte de baixo (Tabela),
            criando um espaço rígido de 'gap-20' entre elas.
        */}
        <div className="flex flex-col gap-20">

            {/* --- Parte 1: Texto e Regras (Cima) --- */}
            <div className="space-y-12">
                
                {/* Classificação */}
                <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 text-stone-400 text-sm font-serif">
                <span className="font-bold text-amber-600 uppercase tracking-wide not-italic mr-2">Nota:</span> Poções e pergaminhos são classificados conforme o círculo da magia que contêm: 1º ou 2º (item mágico menor), 3º ou 4º (médio) e 5º (maior).
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Seção: Poções */}
                    <section>
                    <h2 className="text-3xl font-bold text-amber-700 mb-4 flex items-center gap-3 font-serif">
                        <span className="w-1.5 h-8 bg-amber-800 rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></span>
                        Poções
                    </h2>
                    <p className="text-stone-300 leading-relaxed mb-6 font-serif">
                        Uma poção é um líquido mágico armazenado em um frasco de vidro ou cerâmica. Poções que afetam objetos também são chamadas de <em className="text-stone-100 font-bold">óleos</em> e poções que geram efeito em área também são chamadas de <em className="text-stone-100 font-bold">granadas</em>.
                    </p>

                    {/* Box de Regra: Ativação Poções */}
                    <div className="relative group rounded-xl overflow-hidden bg-stone-900/50 border border-stone-800 p-6 shadow-lg">
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-700/50"></div>
                        <h3 className="text-xl font-bold text-stone-200 mb-3 uppercase tracking-wider border-b border-stone-800 pb-2 font-serif">Ativação</h3>
                        <div className="space-y-3 text-stone-400 text-sm md:text-base font-serif">
                            <p>
                            <strong className="text-amber-600">Beber:</strong> Para ativar uma poção você deve bebê-la (a poção afeta quem ingeri-la). Isso exige uma <strong className="text-stone-200">ação padrão</strong>.
                            </p>
                            <p>
                            <strong className="text-amber-600">Outros:</strong> Também é possível dar uma poção a uma criatura inconsciente como uma <strong className="text-stone-200">ação completa</strong> ou forçar uma criatura a beber uma poção fazendo a manobra agarrar e então vencendo mais um teste de manobra.
                            </p>
                            <p>
                            <strong className="text-amber-600">Óleos:</strong> Ativar um óleo exige uma <strong className="text-stone-200">ação padrão</strong> para aplicá-lo no objeto que será afetado.
                            </p>
                            <p>
                            <strong className="text-amber-600">Granadas:</strong> Ativar uma granada exige uma <strong className="text-stone-200">ação padrão</strong> para arremessá-la em qualquer ponto em alcance curto (o centro do efeito da magia é o ponto onde a granada foi arremessada).
                            </p>
                        </div>
                    </div>
                    </section>

                    {/* Seção: Pergaminhos */}
                    <section>
                    <h2 className="text-3xl font-bold text-amber-700 mb-4 flex items-center gap-3 font-serif">
                        <span className="w-1.5 h-8 bg-amber-800 rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></span>
                        Pergaminhos
                    </h2>
                    <p className="text-stone-300 leading-relaxed mb-6 font-serif">
                        Um pergaminho mágico é uma folha grossa feita de papel, papiro, couro ou outros materiais. Pergaminhos podem conter qualquer magia. Quando as palavras escritas nele são pronunciadas, a magia é ativada e o pergaminho se desfaz em cinzas.
                    </p>

                    {/* Box de Regra: Ativação Pergaminhos */}
                    <div className="relative group rounded-xl overflow-hidden bg-stone-900/50 border border-stone-800 p-6 shadow-lg">
                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-700/50"></div>
                        <h3 className="text-xl font-bold text-stone-200 mb-3 uppercase tracking-wider border-b border-stone-800 pb-2 font-serif">Ativação</h3>
                        <div className="space-y-3 text-stone-400 text-sm md:text-base font-serif">
                            <p>
                            Para ativar um pergaminho você deve lê-lo em voz alta. Isso exige uma <strong className="text-stone-200">ação padrão</strong> ou a ação necessária para lançar a magia, o que for maior.
                            </p>
                            
                            <div className="bg-stone-950 p-3 rounded border border-stone-800">
                            <p className="italic">
                            ⚠️ Para ler um pergaminho, você deve conhecer a magia escrita nele <strong>ou</strong> passar em um teste de <strong className="text-amber-600 not-italic">Misticismo (CD 20 + custo em PM da magia)</strong>.
                            </p>
                            </div>

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
                
                {/* Header da Seção Tabela */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-amber-700 uppercase tracking-wider flex items-center gap-3 font-serif border-b border-stone-800 pb-2">
                        <span className="text-stone-500">📜</span>
                        Tabela de Poções
                    </h3>
                </div>

                {/* Busca */}
                <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
                    <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                        Buscar Consumível
                    </label>
                    <div className="relative">
                        <input
                        type="text"
                        placeholder="Nome da poção ou efeito..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                            🔍
                        </div>
                    </div>
                </div>

                <div className="bg-stone-950 rounded-xl border border-stone-800 overflow-hidden shadow-2xl">
                {/* Corpo da Tabela */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-base table-auto">
                    <thead className="bg-stone-900 text-xs sm:text-sm uppercase font-bold text-amber-700 tracking-wider font-serif">
                        <tr>
                        <th className="px-6 py-4 border-r border-stone-800">Poção / Efeito</th>
                        <th className="px-6 py-4 text-right w-48">Preço</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800 font-serif">
                        {filteredPotions.length > 0 ? (
                        filteredPotions.map((row, index) => (
                            <tr key={index} className="hover:bg-stone-900/50 transition-colors group">
                            <td className="px-6 py-3 text-stone-300 group-hover:text-amber-500 font-medium border-r border-stone-800/50">{row.item}</td>
                            <td className="px-6 py-3 text-right font-mono text-stone-400 group-hover:text-stone-200 whitespace-nowrap">{row.price}</td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td colSpan={2} className="px-6 py-12 text-center text-stone-500 italic">
                            Nenhuma poção encontrada com o termo "{searchTerm}".
                            </td>
                        </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                
                {/* Footer da Tabela */}
                <div className="p-3 border-t border-stone-800 bg-stone-900 text-[10px] sm:text-xs text-center text-stone-500 font-serif uppercase tracking-widest">
                    Tormenta20
                </div>
                </div>
            </section>
        
        </div> {/* Fim do Flex Wrapper */}

      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}