"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments } from "@/data/curseds";
import { Enchantment } from "@/types/cursed";

// --- Componente Auxiliar: Formatação de Texto (Estilo Pergaminho) ---
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;
  const lines = text.split('\\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito forte / Itálico
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      // Negrito padrão
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950/90 font-serif">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>')
      // Listas
      .replace(/- (.*?)\./g, '<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><span class="font-medium">$1.</span></div>')
      // Citações
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm md:text-base italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>')
      // Destaque para o símbolo de Complicação/Maldição Comportamental (†)
      .replace(/†/g, '<span class="text-red-800 font-bold text-xl align-middle" title="Complicação Comportamental">†</span>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-3 last:mb-0 text-amber-950/85 text-sm md:text-base leading-relaxed font-serif font-medium" />
    );
  });
};

// --- Componente: Card de Maldição ---
const EnchantmentCard = ({ enchantment }: { enchantment: Enchantment }) => {
  const isBehavioral = enchantment.description.includes("†");

  return (
    <div className="group relative p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full w-full">
      
      {/* Efeito de Brilho Superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      
      {/* Cabeçalho do Card */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors break-words tracking-wide font-serif flex items-center gap-2">
          {enchantment.name}
          {isBehavioral && <span className="text-red-800 text-2xl leading-none -mt-1" title="Complicação Comportamental">†</span>}
        </h3>
        
        {/* Badge do Tipo (Armas ou Armaduras) */}
        {enchantment.type && (
           <span className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-900/20 bg-[#fbf5e6] text-amber-950/70 uppercase tracking-widest shadow-sm">
             {enchantment.type}
           </span>
        )}
      </div>
    
      {/* Descrição */}
      <div className="flex-grow font-serif">
        {formatTextWithBreaks(enchantment.description)}
      </div>
      
      {/* Rodapé */}
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 flex justify-end items-center w-full">
          <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 italic font-serif uppercase tracking-widest font-bold shadow-sm inline-block">
             Origem: {enchantment.origin}
          </span>
      </div>
    </div>
  );
};

// --- Página Principal ---
export default function ItensAmaldicoadosPage() {
  const [enchantmentSearch, setEnchantmentSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"Todos" | "Armas" | "Armaduras e Escudos">("Todos");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredEnchantments = useMemo(() => {
    const term = enchantmentSearch.toLowerCase();
    
    return enchantments.filter(enc => {
      const matchesSearch = 
          enc.name.toLowerCase().includes(term) ||
          enc.origin.toLowerCase().includes(term) ||
          enc.description.toLowerCase().includes(term);

      const matchesType = typeFilter === "Todos" || enc.type === typeFilter;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  }, [enchantmentSearch, typeFilter]);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Padronizado */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
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
                <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800 whitespace-nowrap">Amaldiçoados</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Itens Amaldiçoados
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
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
                  Regras Gerais e Remoção
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir o funcionamento das maldições, purificação e efeitos narrativos.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8 font-medium">
              
              <section>
                <p className="mb-4">Itens amaldiçoados são objetos mágicos que, por acidente ou de propósito, receberam efeitos negativos que prejudicam seu portador. Esses efeitos são representados por maldições.</p>
                <p>Em termos de regras, uma maldição funciona de forma semelhante a um encanto. Para criar um item amaldiçoado, o mestre escolhe um item qualquer, com ou sem encantos, e adiciona a ele quantas maldições achar apropriado (até um máximo de três).</p>
              </section>

              <section className="border-t-2 border-amber-900/10 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide">Removendo Maldições</h3>
                <p className="mb-4">Uma vez que um personagem use um item amaldiçoado, ele se torna alvo da maldição. Para esse efeito, “usar” significa vestir o item ou empregá-lo para seu propósito (como atacar com uma arma ou usar uma ferramenta para um teste de Ofício). Uma vez que isso aconteça, o personagem não pode mais se livrar do item até se livrar dessa maldição. Se o item é vestido, ele não consegue removê-lo e, se o item é empunhado, ele surge magicamente em sua mão em qualquer situação na qual poderia ser usado (a critério do mestre). A magia Purificação com o aprimoramento de +3 PM permite que o personagem se livre do item. Entretanto, ela não remove a maldição do item em si.</p>
                <p>Para remover a maldição de um item, é necessário usar uma magia como Desejo ou Intervenção Divina. Alternativamente, a maldição pode ser removida por alguma ação específica, como vingar a morte do antigo dono do item ou banhar o item nas águas de uma fonte específica. A forma exata para remover a maldição de cada item fica a cargo do mestre e descobri-la pode ser uma aventura por si só.</p>
              </section>

              <section className="border-t-2 border-amber-900/10 pt-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide">Maldições ou Bênçãos?</h3>
                <p className="mb-4">Certas maldições, como acalentadora e pró-criatura, têm efeitos que poderiam ser usados em prol dos heróis — anular condições negativas e curar dano, nesses casos. O texto diz explicitamente que as maldições não funcionam para isso, o que pode parecer um pouco arbitrário…</p>
                <p className="mb-4">E é arbitrário mesmo! Itens amaldiçoados são feitos para prejudicar o usuário. Não são magia “neutra”, mas efeitos maldosos, irritantes e incômodos. Sempre pedras no sapato, nunca oportunidades. Em princípio, nenhum uso de itens amaldiçoados que beneficie os personagens é válido.</p>
                <p className="mb-4">Contudo, o mestre pode, em raras exceções, permitir que jogadores com ótimas ideias encontrem um uso benéfico para um item amaldiçoado em uma situação específica. Digamos que a guerreira (usando pela primeira vez uma espada pró-criatura) acabou de fazer um acerto crítico e curou todo o dano do ogro que o grupo está enfrentando, sem saber que isso aconteceria. O bardo então faz um teste de Diplomacia (com todas as penalidades por fazer isso em uma rodada) para acalmar o grandalhão, argumentando que tudo não passa de um mal-entendido — afinal, a guerreira acabou de curá-lo!</p>
                <p>Em casos como esses, itens amaldiçoados podem fornecer um bônus ou dar subsídios para um plano. A criatividade é uma das bases do RPG, afinal. Mas eles nunca devem ser fontes constantes e previsíveis de recursos ou efeitos positivos.</p>
              </section>

            </div>
          </div>
        </div>

        {/* --- Seção de Listagem das Maldições --- */}
        <section className="w-full">
          
          {/* Header da Seção com Título e Filtros */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 font-serif tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Acervo de Maldições
            </h2>

            {/* Filtros de Tipo */}
            <div className="flex flex-wrap gap-2">
                {(["Todos", "Armas", "Armaduras e Escudos"] as const).map((type) => (
                    <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`px-4 py-1.5 rounded-md text-xs uppercase tracking-widest font-bold transition-all border shadow-sm font-serif ${
                        typeFilter === type
                        ? "bg-red-800 text-[#fbf5e6] border-red-900"
                        : "bg-[#fbf5e6] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                    >
                    {type}
                    </button>
                ))}
            </div>
          </div>

          {/* Busca - ESTILO CAIXA PADRÃO */}
          <div className="mb-8 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif w-full">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Maldição
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome, descrição ou origem..."
                value={enchantmentSearch}
                onChange={(e) => setEnchantmentSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                {enchantmentSearch ? (
                  <button 
                    onClick={() => setEnchantmentSearch("")}
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
            {enchantmentSearch && (
              <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
                Exibindo {filteredEnchantments.length} resultado(s) para "{enchantmentSearch}".
              </p>
            )}
          </div>

          {/* Grid de Cards limitado a no máximo 3 colunas para manter a legibilidade */}
          {filteredEnchantments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
              {filteredEnchantments.map((enc) => (
                <EnchantmentCard key={enc.id} enchantment={enc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8 mb-16">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma maldição encontrada com os filtros aplicados.
              </p>
            </div>
          )}
        </section>

      </main>
      
      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos sono reservados a editora.
        </p>
      </footer>
    </div>
  );
}