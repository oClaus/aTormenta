"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { enchantments } from "@/data/curseds";
import { Enchantment } from "@/types/cursed";
import ThemeToggle from "@/components/ThemeToggle";

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

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
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-sm md:text-base italic text-amber-950/85 bg-[rgb(var(--bg-inset-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">$1</blockquote>')
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
    <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full w-full">

      <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Cabeçalho do Card */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="font-display text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors break-words tracking-wide flex items-center gap-2">
          {enchantment.name}
          {isBehavioral && <span className="text-red-800 text-2xl leading-none -mt-1" title="Complicação Comportamental">†</span>}
        </h3>

        {/* Badge do Tipo (Armas ou Armaduras) */}
        {enchantment.type && (
           <span className="font-display shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-900/20 bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 uppercase tracking-widest shadow-sm">
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
          <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 italic uppercase tracking-widest font-bold shadow-sm inline-block">
             Origem: {enchantment.origin}
          </span>
      </div>
    </div>
  );
};

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

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
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Padronizado */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
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
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Itens Amaldiçoados
          </h1>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Regras Gerais e Remoção
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir o funcionamento das maldições, purificação e efeitos narrativos.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8 font-medium">

              <section>
                <p className="mb-4">Itens amaldiçoados são objetos mágicos que, por acidente ou de propósito, receberam efeitos negativos que prejudicam seu portador. Esses efeitos são representados por maldições.</p>
                <p>Em termos de regras, uma maldição funciona de forma semelhante a um encanto. Para criar um item amaldiçoado, o mestre escolhe um item qualquer, com ou sem encantos, e adiciona a ele quantas maldições achar apropriado (até um máximo de três).</p>
              </section>

              <section className="border-t-2 border-amber-900/10 pt-6">
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide">Removendo Maldições</h3>
                <p className="mb-4">Uma vez que um personagem use um item amaldiçoado, ele se torna alvo da maldição. Para esse efeito, “usar” significa vestir o item ou empregá-lo para seu propósito (como atacar com uma arma ou usar uma ferramenta para um teste de Ofício). Uma vez que isso aconteça, o personagem não pode mais se livrar do item até se livrar dessa maldição. Se o item é vestido, ele não consegue removê-lo e, se o item é empunhado, ele surge magicamente em sua mão em qualquer situação na qual poderia ser usado (a critério do mestre). A magia Purificação com o aprimoramento de +3 PM permite que o personagem se livre do item. Entretanto, ela não remove a maldição do item em si.</p>
                <p>Para remover a maldição de um item, é necessário usar uma magia como Desejo ou Intervenção Divina. Alternativamente, a maldição pode ser removida por alguma ação específica, como vingar a morte do antigo dono do item ou banhar o item nas águas de uma fonte específica. A forma exata para remover a maldição de cada item fica a cargo do mestre e descobri-la pode ser uma aventura por si só.</p>
              </section>

              <section className="border-t-2 border-amber-900/10 pt-6">
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide">Maldições ou Bênçãos?</h3>
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
            <h2 className="font-display text-2xl sm:text-3xl font-bold flex items-center gap-3 text-red-800 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Acervo de Maldições
            </h2>

            {/* Filtros de Tipo */}
            <div className="flex flex-wrap gap-2">
                {(["Todos", "Armas", "Armaduras e Escudos"] as const).map((type) => (
                    <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`font-display px-4 py-1.5 rounded-md text-xs uppercase tracking-widest font-bold transition-all border shadow-sm ${
                        typeFilter === type
                        ? "bg-red-800 text-[rgb(var(--bg-inset-rgb))] border-red-900"
                        : "bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 border-amber-900/20 hover:border-red-800/50 hover:text-red-800"
                    }`}
                    >
                    {type}
                    </button>
                ))}
            </div>
          </div>

          {/* Busca - ESTILO CAIXA PADRÃO */}
          <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Maldição
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome, descrição ou origem..."
                value={enchantmentSearch}
                onChange={(e) => setEnchantmentSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
                  <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
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
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 mb-16 gap-3">
              <PageGlyph className="text-amber-950/40" />
              <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                Nenhuma maldição encontrada com os filtros aplicados.
              </p>
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos sono reservados a editora.
        </p>
      </footer>
    </div>
  );
}