"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments } from "@/data/curseds";
import { Enchantment } from "@/types/cursed";

// --- Componente Auxiliar: Formatação de Texto ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\\n');

  return lines.map((line, index) => {
    let formattedLine = line
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-stone-200 font-serif"><strong>$1</strong></em>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-stone-400 font-serif">$1</em>')
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm font-serif"><span class="font-bold text-violet-500">❖</span> $1.</p>')
      .replace(/> (.*)/g, '<blockquote class="border-l-2 border-violet-800 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-900/50 rounded-r-md font-serif">$1</blockquote>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-stone-300 font-serif" />
    );
  });
};

// --- Componente 1: Card de Encanto 
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => {
  return (
    <div className="group relative p-4 md:p-5 rounded-xl bg-stone-900 border border-stone-800 shadow-lg hover:bg-stone-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(180,83,9,0.15)] hover:border-sky-900/50 text-left h-full flex flex-col">
      {/* Brilho Superior Âmbar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-sky-900/30 transition-colors">
        <h3 className="text-lg md:text-xl font-bold text-stone-200 group-hover:text-sky-500 transition-all break-words font-serif">
          {enchantment.name}
        </h3>
        {/* Mostra o tipo no card também para facilitar a identificação visual */}
        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            {enchantment.type}
        </span>
      </div>
      <div className="text-sm flex-grow font-serif text-stone-400 group-hover:text-stone-300 transition-colors">
        {formatTextWithBreaks(enchantment.description)}
      </div>
      <div className="mt-4 pt-2 border-t border-stone-800 text-right">
        <span className="text-[10px] md:text-xs text-stone-600 italic flex justify-end items-center gap-1 font-serif">
          <span className="text-sky-800/80 font-bold uppercase tracking-wider group-hover:text-sky-700 transition-colors">{enchantment.origin}</span>
        </span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function AcessoriosMagicosPage() {
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  // Adicionado o estado para o filtro de Tipo
  const [typeFilter, setTypeFilter] = useState<"Todos" | "Armas" | "Armaduras e Escudos">("Todos");

  const filteredEnchantments = useMemo(() => {
      const term = enchantmentSearch.toLowerCase();
      
      return enchantments.filter(enc => {
        // Lógica de filtro por texto
        const matchesSearch = 
            enc.name.toLowerCase().includes(term) ||
            enc.origin.toLowerCase().includes(term) ||
            enc.description.toLowerCase().includes(term);

        // Lógica de filtro por tipo
        const matchesType = typeFilter === "Todos" || enc.type === typeFilter;

        return matchesSearch && matchesType;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    }, [enchantmentSearch, typeFilter]); // Adicionado typeFilter nas dependências

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo */}
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
                <Link href="/itens-magicos" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Itens Mágicos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Amaldiçoados</span>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">
        
        {/* Título da Página */}
        <div className="mb-10 md:mb-16 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-violet-500 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">
             Itens Amaldiçoados
          </h1>
        </div>

        {/* Texto Introdutório */}
        <div className="bg-stone-900/50 p-8 rounded border border-stone-800 mb-12">
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Itens amaldiçoados são objetos mágicos que, por acidente ou de propósito, receberam efeitos negativos que prejudicam seu portador. Esses efeitos são representados por maldições.</p>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Em termos de regras, uma maldição funciona de forma semelhante a um encanto. Para criar um item amaldiçoado, o mestre escolhe um item qualquer, com ou sem encantos, e adiciona a ele quantas maldições achar apropriado (até um máximo de três).</p>
        </div>
        <div className="bg-stone-900/50 p-8 rounded border border-stone-800 mb-12">
        <h1 className="text-1xl sm:text-1xl md:text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-violet-500 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">Removendo Maldições</h1>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Uma vez que um personagem use um item amaldiçoado, ele se torna alvo da maldição. Para esse efeito, “usar” significa vestir o item ou empregá-lo para seu propósito (como atacar com uma arma ou usar uma ferramenta para um teste de Ofício). Uma vez que isso aconteça, o personagem não pode mais se livrar do item até se livrar dessa maldição. Se o item é vestido, ele não consegue removê-lo e, se o item é empunhado, ele surge magicamente em sua mão em qualquer situação na qual poderia ser usado (a critério do mestre). A magia Purificação com o aprimoramento de +3 PM permite que o personagem se livre do item. Entretanto, ela não remove a maldição do item em si.</p>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Para remover a maldição de um item, é necessário usar uma magia como Desejo ou Intervenção Divina. Alternativamente, a maldição pode ser removida por alguma ação específica, como vingar a morte do antigo dono do item ou banhar o item nas águas de uma fonte específica. A forma exata para remover a maldição de cada item fica a cargo do mestre e descobri-la pode ser uma aventura por si só.</p>
        </div>

        <div className="bg-stone-900/50 p-8 rounded border border-stone-800 mb-12">
        <h1 className="text-1xl sm:text-1xl md:text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-violet-500 to-red-500 mb-4 md:mb-6 drop-shadow-lg leading-tight">Maldições ou Bênçãos?</h1>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Certas maldições, como acalentadora e pró-criatura, têm efeitos que poderiam ser usados em prol dos heróis — anular condições negativas e curar dano, nesses casos. O texto diz explicitamente que as maldições não funcionam para isso, o que pode parecer um pouco arbitrário…</p>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">E é arbitrário mesmo! Itens amaldiçoados são feitos para prejudicar o usuário. Não são magia “neutra”, mas efeitos maldosos, irritantes e incômodos. Sempre pedras no sapato, nunca oportunidades. Em princípio, nenhum uso de itens amaldiçoados que beneficie os personagens é válido.</p>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Contudo, o mestre pode, em raras exceções, permitir que jogadores com ótimas ideias encontrem um uso benéfico para um item amaldiçoado em uma situação específica. Digamos que a guerreira (usando pela primeira vez uma espada pró-criatura) acabou de fazer um acerto crítico e curou todo o dano do ogro que o grupo está enfrentando, sem saber que isso aconteceria. O bardo então faz um teste de Diplomacia (com todas as penalidades por fazer isso em uma rodada) para acalmar o grandalhão, argumentando que tudo não passa de um mal-entendido — afinal, a guerreira acabou de curá-lo!</p>
            <p className="text-stone-300 text-lg font-serif mb-4 leading-relaxed">Em casos como esses, itens amaldiçoados podem fornecer um bônus ou dar subsídios para um plano. A criatividade é uma das bases do RPG, afinal. Mas eles nunca devem ser fontes constantes e previsíveis de recursos ou efeitos positivos.</p>
        </div>

        {/* --- Seção 1: Encantos (Com Filtros Integrados) --- */}
        <section className="mb-16 md:mb-24 w-full relative">
          <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-sky-900/50 to-transparent opacity-50"></div>

          {/* Header da Seção com Título e Filtros */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-sky-700 font-serif">
                <span className="w-1.5 md:w-2 h-6 md:h-8 bg-sky-800 rounded-full shadow-[0_0_10px_rgba(180,83,9,0.5)]"></span>
                Maldições
            </h2>

            {/* Filtros de Tipo (Estilo importado da antiga seção de acessórios, ajustado para a paleta Sky/Blue desta seção) */}
            <div className="flex flex-wrap gap-2">
                {(["Todos", "Armas", "Armaduras e Escudos"] as const).map((type) => (
                    <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`px-4 py-1.5 rounded-sm text-xs uppercase tracking-wider font-bold transition-all border font-serif ${
                        typeFilter === type
                        ? "bg-sky-900 text-stone-100 border-sky-700 shadow-lg" // Ativo (Sky)
                        : "bg-stone-900 text-stone-500 border-stone-800 hover:border-sky-800 hover:text-sky-400" // Inativo
                    }`}
                    >
                    {type}
                    </button>
                ))}
            </div>
          </div>

          {/* Busca Encantos */}
          <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                Buscar Maldição
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome, descrição ou origem..."
                value={enchantmentSearch}
                onChange={(e) => setEnchantmentSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
          </div>

          {/* Grid de Cards */}
          {filteredEnchantments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
              {filteredEnchantments.map((enc) => (
                <EnchantmentCard key={enc.id} enchantment={enc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 text-stone-600 italic border border-dashed border-stone-800 rounded-xl text-sm md:text-base font-serif">
              Nenhum encantamento encontrado para os filtros atuais.
            </div>
          )}
        </section>

      </div>
      
      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}