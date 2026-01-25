"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
// Certifique-se de que o caminho do import abaixo corresponda a onde você salvou o arquivo de dados
import { complications } from "@/data/complicacoes"; 
import { Condition } from "@/types/condition";

// --- 1. Formatação de Texto ---
const formatTextWithBreaks = (text: string) => {
  const lines = text.split('\n');

  return lines.map((line, index) => {
    let formattedLine = line
      // Negrito forte
      .replace(/\*\*\*(.*?)\*\*\*/g, '<em class="text-red-400 drop-shadow-sm font-serif"><strong>$1</strong></em>')
      // Negrito padrão
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-200">$1</strong>')
      // Itálico
      .replace(/\*(.*?)\*/g, '<em class="text-stone-500 font-serif">$1</em>')
      // Listas
      .replace(/- (.*?)\./g, '<p class="mt-1 ml-2 md:ml-4 text-sm"><span class="font-bold text-amber-700">❖</span> $1.</p>')
      // Citações
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-amber-900/50 pl-3 md:pl-4 py-2 my-3 text-sm italic text-stone-400 bg-stone-950/50 rounded-r shadow-inner">$1</blockquote>')
      // Destaque para o símbolo de Complicação Comportamental (†)
      .replace(/†/g, '<span class="text-red-500 font-bold text-xl align-middle" title="Complicação Comportamental">†</span>');

    return (
      <div key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} className="mb-2 last:mb-0 text-sm md:text-base leading-relaxed text-stone-300 font-serif" />
    );
  });
};

// --- Componente: Card de Complicação ---
const ComplicationCard = ({ item }: { item: Condition }) => {
  // Verifica se é comportamental procurando o símbolo na descrição
  const isBehavioral = item.description.includes("†");

  return (
    <div className="
      group relative p-6 rounded bg-stone-900 border border-stone-800 
      hover:border-red-900/50 transition-all duration-300 
      flex flex-col text-left w-full
      hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)]
    ">
      
      {/* Cabeçalho do Card */}
      <div className="mb-3 pb-2 border-b border-stone-800 group-hover:border-red-900/30 transition-colors flex justify-between items-start gap-3">
        <h3 className="text-xl font-bold text-stone-200 group-hover:text-red-500 transition-colors break-words tracking-wide font-serif flex items-center gap-2">
          {item.name}
          {/* Mostra o † no título também se for comportamental */}
          {isBehavioral && <span className="text-red-600 text-lg" title="Complicação Comportamental">†</span>}
        </h3>
        
        {/* Badge do Tipo (Geral ou Classe) */}
        {item.efeito && (
           <span className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded border uppercase tracking-widest ${
             item.efeito === 'Geral' 
               ? 'text-stone-500 border-stone-700 bg-stone-950' 
               : 'text-amber-600 border-amber-900/30 bg-amber-950/10'
           }`}>
             {item.efeito}
           </span>
        )}
      </div>
    
      {/* Descrição */}
      <div className="text-sm md:text-base pt-1 text-stone-400 flex-grow leading-relaxed font-serif">
        {formatTextWithBreaks(item.description)}
      </div>
      
      {/* Rodapé */}
      <div className="mt-4 pt-3 border-t border-stone-800 flex justify-end items-center w-full">
          {/* Lado Direito: Origem */}
          <span className="text-xs text-stone-600 italic flex items-center gap-1 font-serif">
              <span className="text-amber-700">♦</span>
              Origem: <span className="text-stone-500">{item.origin}</span>
          </span>
      </div>

      {/* Detalhes de Canto (Efeito visual) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-700 opacity-50 group-hover:border-red-700 group-hover:opacity-100 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-700 opacity-50 group-hover:border-red-700 group-hover:opacity-100 transition-colors"></div>
    </div>
  );
};

// --- Página Principal ---

export default function ComplicacoesPage() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const term = search.toLowerCase();
    
    return complications.filter(item => {
      return item.name.toLowerCase().includes(term) ||
             item.description.toLowerCase().includes(term) ||
             (item.efeito && item.efeito.toLowerCase().includes(term));
    })
    .sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
  }, [search]);

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
                <span className="text-red-700">Complicações</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12"> 
        
        {/* Título e Texto das Regras */}
        <div className="mb-12 w-full border-b border-stone-800 pb-8">
          <h1 className="text-5xl font-bold text-amber-700 mb-6 drop-shadow-sm">
            Complicações
          </h1>
          
          {/* Caixa de Regras Expansível */}
          <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm w-full">
            <details className="group">
                <summary className="cursor-pointer text-stone-300 text-lg font-bold flex justify-between items-center select-none hover:text-red-500 transition-colors">
                    <span>Regras e Definições de Complicações</span>
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                
                <div className="mt-4 space-y-4 text-stone-400 text-sm md:text-base leading-relaxed border-t border-stone-800 pt-4">
                    <p>
                        Complicações são restrições e penalidades com as quais seu personagem precisa lidar. Quando você cria seu personagem, pode escolher uma complicação para ele (e apenas uma). Se fizer isso, recebe um poder geral extra. Você é livre para escolher o poder, mas deve preencher seus pré-requisitos.
                    </p>
                    <p>
                        Note que você sempre pode criar adversidades pessoais para seu personagem. Nada o impede de jogar com um bárbaro impulsivo ou um nobre pedante, por exemplo. No entanto, complicações oferecem efeitos em regras para representar isso. Traduzir tudo isso em regras tem duas vantagens: primeiro, garante que essa característica “apareça” nas aventuras e tenha peso na história. Segundo, permite que você tenha um poder a mais sem desequilibrar o jogo, o que por sua vez o ajuda a personalizar ainda mais seu personagem.
                    </p>
                    <p>
                        Em termos de regras, complicações contam como habilidades. Se uma complicação impõe uma condição, você a sofre mesmo que seja imune a ela.
                    </p>
                    
                    <h3 className="font-bold text-stone-200 text-lg pt-2 border-t border-stone-800/50 mt-4">Tipos de complicações</h3>
                    <p>
                        Assim como poderes, complicações são divididas entre gerais e específicas de cada classe. Sua complicação pode ser escolhida entre a lista geral ou entre a lista de sua classe do 1º nível. Se você tiver uma complicação de classe, só recebe e pode usar o poder proveniente dela se pelo menos metade de seus níveis totais forem nessa classe. Por exemplo, se um arcanista 2/guerreiro 2 que tenha uma complicação de arcanista subir de nível de guerreiro, não poderá usar seu poder geral proveniente da complicação.
                    </p>

                    <h3 className="font-bold text-stone-200 text-lg pt-2 flex items-center gap-2 border-t border-stone-800/50 mt-4">
                        Complicações comportamentais <span className="text-red-500">†</span>
                    </h3>
                    <p>
                        Certas complicações restringem as ações de um herói, seja por traduzirem uma limitação de sua personalidade, seja por representarem um código ou voto que ele decidiu seguir. Essas complicações são marcadas pelo símbolo <span className="text-red-500 font-bold">†</span>. De forma similar aos Códigos de Honra de certas classes (como cavaleiro e paladino), esse símbolo significa que, se você violar a complicação, perde todos os seus PM e só pode recuperá-los a partir do próximo dia.
                    </p>
                </div>
            </details>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider">
                Buscar Complicação
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Nome, classe ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid/Lista */}
        <section className="w-full">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 w-full">
              {filteredItems.map((item) => (
                <ComplicationCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-stone-800 rounded bg-stone-900/30">
              <p className="text-stone-500 text-lg italic">Nenhuma complicação encontrada com "{search}".</p>
            </div>
          )}
        </section>

      </main>

       {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}