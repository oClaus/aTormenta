"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { mounts } from "@/data/mounts";
import { Mount } from "@/types/mount";

// --- Componentes Auxiliares ---

// Componente Card de Parceiro (Estilo Stone/Amber)
const PartnerCard = ({ mount }: { mount: Mount }) => {
  return (
    <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-900/50 shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="mb-3 pb-2 border-b border-stone-800">
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-amber-600 font-serif">{mount.name}</h3>
            <span className="text-sm font-medium text-stone-500 font-serif uppercase tracking-wide">
            {mount.size}
            </span>
        </div>
        
        <p className="text-sm text-stone-400 italic font-serif mt-1">{mount.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-stone-300 space-y-3 flex-grow font-serif">
        <div>
          <p className="font-bold text-amber-700 uppercase text-xs tracking-wider mb-0.5">Iniciante:</p>
          <p>{mount.benefits.iniciante}</p>
        </div>
        <div>
          <p className="font-bold text-amber-700 uppercase text-xs tracking-wider mb-0.5">Veterano:</p>
          <p>{mount.benefits.veterano}</p>
        </div>
        <div>
          <p className="font-bold text-amber-700 uppercase text-xs tracking-wider mb-0.5">Mestre:</p>
          <p>{mount.benefits.mestre}</p>
        </div>
      </div>

      {/* Campo Extra Opcional */}
        {mount.extra && (
          <div className="mt-3 p-3 bg-stone-950/50 rounded border border-stone-800">
            <p className="text-sm text-stone-400 italic font-serif">{mount.extra}</p>
          </div>
        )}

      {/* Origem */}
      <div className="mt-4 pt-2 border-t border-stone-800 text-right">
        <span className="text-xs text-stone-600 italic font-serif uppercase tracking-wider">Origem: {mount.origin}</span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function MontariasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredmounts = useMemo(() => {
    let filtered = mounts;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // Filtrar por Busca (Nome, Descrição, Benefícios)
    if (lowerCaseSearch) {
      filtered = filtered.filter(mount => 
        mount.name.toLowerCase().includes(lowerCaseSearch) ||
        mount.description.toLowerCase().includes(lowerCaseSearch) ||
        mount.benefits.iniciante.toLowerCase().includes(lowerCaseSearch) ||
        mount.benefits.veterano.toLowerCase().includes(lowerCaseSearch) ||
        mount.origin.toLowerCase().includes(lowerCaseSearch) ||
        mount.benefits.mestre.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
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
                <span className="text-red-700">Montarias</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Seção de Regras */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-6 drop-shadow-md">
            Montarias & Combate Montado
            </h1>

            <div className="space-y-4 text-stone-300 font-serif leading-relaxed">
                <p className="text-lg text-stone-400 mb-6 italic border-l-4 border-amber-700 pl-4 bg-stone-950/30 py-2">
                    Montarias são um tipo específico de parceiro. Elas usam as seguintes regras especiais:
                </p>
                
                <ul className="space-y-4 list-none ml-2">
                    <li className="flex gap-3">
                        <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                        <span>Para usar um parceiro montaria você precisa montar nele. Para passá-lo para outro aliado, precisa desmontar antes. Ambas são ações de movimento.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                        <span>Uma vez montado, você precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por turno para guiar a montaria. Se passar, recebe os benefícios dela. Se falhar, perde a ação de movimento. Se falhar por 5 ou mais, cai da montaria e sofre 1d6 pontos de dano. Se for treinado em Cavalgar, você recebe os bônus da montaria automaticamente, sem precisar gastar a ação ou fazer o teste.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                        <span>Se você sofrer dano, deve fazer um teste de Cavalgar (CD igual ao dano). Se falhar, cai da montaria e sofre 1d6 pontos de dano. Se possuir o poder Ginete, você não precisa fazer esse teste.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                        <span>Cada parceiro montaria possui uma categoria de tamanho (indicada ao lado do nome do parceiro). Um personagem só pode montar uma montaria maior do que ele mesmo, e enquanto estiver montado usa o tamanho da montaria para efeitos do espaço que ocupa e para modificador de Furtividade.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                        <span>O balanço da montaria em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. Se possuir o poder Ginete, você não sofre nenhuma dessas penalidades.</span>
                    </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-stone-800 text-stone-400">
                    <p>Montarias podem ser compradas ou recebidas por habilidades. No primeiro caso, são sempre parceiros <span className="text-amber-600 font-bold">iniciantes</span>. No segundo, seu poder é definido pela habilidade em questão. Note que embora alguns animais sejam facilmente comprados, como cavalos e trobos, outros são raros. Encontrar um grifo à venda é quase impossível!</p>
                </div>
            </div>
        </section>

        {/* Barra de Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Montaria
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome ou descrição da montaria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Parceiros */}
        <div className="mb-12">
            <h2 className="text-xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2 font-serif uppercase tracking-wide">
            {filteredmounts.length} Montarias Encontradas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredmounts.map((mount) => (
                <PartnerCard key={mount.id} mount={mount} />
            ))}
            </div>
            {filteredmounts.length === 0 && (
            <div className="text-center py-12 text-stone-500 bg-stone-900 border border-stone-800 rounded-xl italic font-serif">
                Nenhuma montaria encontrada com o termo de busca aplicado.
            </div>
            )}
        </div>

        {/* Variante */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-sm font-serif">
            Variante: Parceiros Vulneráveis
            </h1>

            <div className="text-stone-300 font-serif leading-relaxed">
            <p>Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
            </div>
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