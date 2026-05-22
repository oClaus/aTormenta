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
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPotions = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return potionsData.filter(
      (p) => p.item.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* --- Header Estilo Pergaminho --- */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
            {/* Logo */}
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">Início</Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/itens-magicos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">Itens Mágicos</Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poções & Pergaminhos</span>
            </div>
        </div>
      </header>

      {/* --- Conteúdo Principal --- */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Poções & Pergaminhos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
            <p className="text-amber-950/85 text-lg font-serif font-medium leading-relaxed">
                Poções e pergaminhos contêm o efeito de uma magia. Quando são ativados, geram o efeito dessa magia e então desaparecem.
            </p>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Uso e Ativação
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir as regras de poções, óleos, granadas e pergaminhos.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
                {/* Classificação */}
                <div className="bg-[#e8dac1]/50 p-4 rounded-xl border border-amber-900/20 text-amber-950/85 text-base font-serif shadow-sm">
                    <span className="font-bold text-red-800 uppercase tracking-widest mr-2">Nota:</span> Poções e pergaminhos são classificados conforme o círculo da magia que contêm: 1º ou 2º (item mágico menor), 3º ou 4º (médio) e 5º (maior).
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mt-4">
                    {/* Seção: Poções */}
                    <section>
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3 font-serif tracking-wide">
                            <span className="text-red-800/60 text-3xl">❖</span>
                            Poções
                        </h2>
                        <p className="text-amber-950/85 font-medium leading-relaxed mb-6 font-serif">
                            Uma poção é um líquido mágico armazenado em um frasco de vidro ou cerâmica. Poções que afetam objetos também são chamadas de <strong className="text-red-800">óleos</strong> e poções que geram efeito em área também são chamadas de <strong className="text-red-800">granadas</strong>.
                        </p>

                        {/* Box de Regra: Ativação Poções */}
                        <div className="relative group rounded-xl bg-[#fbf5e6] border border-amber-900/20 p-6 shadow-sm border-l-4 border-l-red-800">
                            <h3 className="text-xl font-bold text-amber-950 mb-3 uppercase tracking-widest border-b-2 border-amber-900/10 pb-2 font-serif">Ativação</h3>
                            <div className="space-y-4 text-amber-950/85 text-sm md:text-base font-serif font-medium mt-4">
                                <p>
                                    <strong className="text-red-800">Beber:</strong> Para ativar uma poção você deve bebê-la (a poção afeta quem ingeri-la). Isso exige uma <strong className="text-amber-950">ação padrão</strong>.
                                </p>
                                <p>
                                    <strong className="text-red-800">Outros:</strong> Também é possível dar uma poção a uma criatura inconsciente como uma <strong className="text-amber-950">ação completa</strong> ou forçar uma criatura a beber uma poção fazendo a manobra agarrar e então vencendo mais um teste de manobra.
                                </p>
                                <p>
                                    <strong className="text-red-800">Óleos:</strong> Ativar um óleo exige uma <strong className="text-amber-950">ação padrão</strong> para aplicá-lo no objeto que será afetado.
                                </p>
                                <p>
                                    <strong className="text-red-800">Granadas:</strong> Ativar uma granada exige uma <strong className="text-amber-950">ação padrão</strong> para arremessá-la em qualquer ponto em alcance curto (o centro do efeito da magia é o ponto onde a granada foi arremessada).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Seção: Pergaminhos */}
                    <section>
                        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3 font-serif tracking-wide">
                            <span className="text-red-800/60 text-3xl">❖</span>
                            Pergaminhos
                        </h2>
                        <p className="text-amber-950/85 font-medium leading-relaxed mb-6 font-serif">
                            Um pergaminho mágico é uma folha grossa feita de papel, papiro, couro ou outros materiais. Pergaminhos podem conter qualquer magia. Quando as palavras escritas nele são pronunciadas, a magia é ativada e o pergaminho se desfaz em cinzas.
                        </p>

                        {/* Box de Regra: Ativação Pergaminhos */}
                        <div className="relative group rounded-xl bg-[#fbf5e6] border border-amber-900/20 p-6 shadow-sm border-l-4 border-l-red-800">
                            <h3 className="text-xl font-bold text-amber-950 mb-3 uppercase tracking-widest border-b-2 border-amber-900/10 pb-2 font-serif">Ativação</h3>
                            <div className="space-y-4 text-amber-950/85 text-sm md:text-base font-serif font-medium mt-4">
                                <p>
                                    Para ativar um pergaminho você deve lê-lo em voz alta. Isso exige uma <strong className="text-amber-950">ação padrão</strong> ou a ação necessária para lançar a magia, o que for maior.
                                </p>
                                
                                <div className="bg-[#e8dac1]/50 p-4 rounded-lg border border-amber-900/20 shadow-sm mt-4 mb-4">
                                    <p className="italic text-red-900">
                                        ⚠️ Para ler um pergaminho, você deve conhecer a magia escrita nele <strong className="not-italic">ou</strong> passar em um teste de <strong className="text-red-800 not-italic">Misticismo (CD 20 + custo em PM da magia)</strong>.
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
          </div>
        </div>

        {/* --- Parte 2: Busca e Tabela --- */}
        <section className="w-full">
            
            {/* Header da Seção Tabela */}
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-red-800 uppercase tracking-widest flex items-center gap-3 font-serif border-b-2 border-amber-900/20 pb-2">
                    <span className="text-red-800 text-3xl">❖</span>
                    Acervo de Consumíveis
                </h3>
            </div>

            {/* Busca - ESTILO CAIXA PADRÃO */}
            <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
                <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                    Buscar Consumível
                </label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Nome da poção ou efeito..."
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
            </div>

            <div className="bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 overflow-hidden shadow-sm">
                {/* Corpo da Tabela */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-base table-auto font-serif">
                        <thead className="bg-[#d9c8a9] text-xs sm:text-sm uppercase font-bold text-amber-950/80 tracking-widest border-b-2 border-amber-900/20">
                            <tr>
                                <th className="px-6 py-4 border-r-2 border-amber-900/20">Poção / Efeito</th>
                                <th className="px-6 py-4 text-center w-48">Preço</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
                            {filteredPotions.length > 0 ? (
                            filteredPotions.map((row, index) => (
                                <tr key={index} className={`transition-colors hover:bg-[#e8dac1]/50 group ${index % 2 !== 0 ? "bg-[#e8dac1]/30" : ""}`}>
                                    <td className="px-6 py-4 text-amber-950 font-bold group-hover:text-red-800 border-r-2 border-amber-900/10 transition-colors">{row.item}</td>
                                    <td className="px-6 py-4 text-center font-bold text-red-800 whitespace-nowrap">{row.price}</td>
                                </tr>
                            ))
                            ) : (
                            <tr>
                                <td colSpan={2} className="px-6 py-12 text-center text-amber-950/70 italic font-medium">
                                    Nenhuma poção encontrada com o termo "{searchTerm}".
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}