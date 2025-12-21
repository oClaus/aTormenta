"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { mounts } from "@/data/mounts";
import { Mount } from "@/types/mount";

// --- Componentes Auxiliares ---

// Componente Card de Parceiro
const PartnerCard = ({ mount }: { mount: Mount }) => {
  return (
    <div className="p-4 rounded-xl bg-gray-800/70 border border-amber-700/30 shadow-lg flex flex-col">
      {/* Header */}
      <div className="mb-3 pb-2 border-b border-amber-700/30">
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-amber-200">{mount.name}</h3>
            <span className="text-sm font-medium text-amber-600/80">
            {mount.size}
            </span>
        </div>
        
        <p className="text-sm text-gray-400 italic">{mount.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-gray-300 space-y-3 flex-grow">
        <div>
          <p className="font-bold text-amber-500">Iniciante:</p>
          <p>{mount.benefits.iniciante}</p>
        </div>
        <div>
          <p className="font-bold text-amber-500">Veterano:</p>
          <p>{mount.benefits.veterano}</p>
        </div>
        <div>
          <p className="font-bold text-amber-500">Mestre:</p>
          <p>{mount.benefits.mestre}</p>
        </div>
      </div>

      {/* Campo Extra Opcional */}
        {mount.extra && (
          <div className="mt-2 p-2 bg-amber-900/20 rounded border border-amber-700/10">
            <p className="text-sm text-gray-300 space-y-3 flex-grow">{mount.extra}</p>
          </div>
        )}

      {/* Origem */}
      <div className="mt-3 pt-2 border-t border-amber-700/20 text-right">
        <span className="text-xs text-gray-500 italic">Origem: {mount.origin}</span>
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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-stone-900 to-black text-gray-100 px-6 py-12">

      {/* Header */}
      <header className="p-6 border-b border-amber-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-200 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(180,83,9,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(180,83,9,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-amber-400 hover:text-orange-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Montarias</span>
        </div>
      </header>

      {/* Header */}
      {/* Seção de Regras */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-300 to-amber-500 mb-4">Montarias & Combate Montado</h1>

        <div className="bg-amber-900/10 border-amber-600 p-6 rounded-r-lg">
          <p className="text-sm text-amber-200/80 mb-6 italic">Montarias são um tipo específico de parceiro. Elas usam as seguintes regras especiais:</p>
          
          <ul className="space-y-4 list-disc ml-5 text-amber-600">
            <li className="text-gray-300">
              <strong className="text-amber-500">•</strong> Para usar um parceiro montaria você precisa montar nele. Para passá-lo para outro aliado, precisa desmontar antes. Ambas são ações de movimento.
            </li>
            <li className="text-gray-300">
              <strong className="text-amber-500">•</strong> Uma vez montado, você precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por turno para guiar a montaria. Se passar, recebe os benefícios dela. Se falhar, perde a ação de movimento. Se falhar por 5 ou mais, cai da montaria e sofre 1d6 pontos de dano. Se for treinado em Cavalgar, você recebe os bônus da montaria automaticamente, sem precisar gastar a ação ou fazer o teste.
            </li>
            <li className="text-gray-300">
              <strong className="text-amber-500">•</strong> Se você sofrer dano, deve fazer um teste de Cavalgar (CD igual ao dano). Se falhar, cai da montaria e sofre 1d6 pontos de dano. Se possuir o poder Ginete, você não precisa fazer esse teste.
            </li>
            <li className="text-gray-300">
              <strong className="text-amber-500">•</strong> Cada parceiro montaria possui uma categoria de tamanho (indicada ao lado do nome do parceiro). Um personagem só pode montar uma montaria maior do que ele mesmo, e enquanto estiver montado usa o tamanho da montaria para efeitos do espaço que ocupa e para modificador de Furtividade.
            </li>
            <li className="text-gray-300">
              <strong className="text-amber-500">•</strong> O balanço da montaria em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. Se possuir o poder Ginete, você não sofre nenhuma dessas penalidades.
            </li>
          </ul>

          <div className="mt-8 pt-4 border-t border-amber-700/30 text-gray-300">
            <p>Montarias podem ser compradas ou recebidas por habilidades. No primeiro caso, são sempre parceiros <span className="text-amber-400 font-bold">iniciantes</span>. No segundo, seu poder é definido pela habilidade em questão. Note que embora alguns animais sejam facilmente comprados, como cavalos e trobos, outros são raros. Encontrar um grifo à venda é quase impossível!</p>
          </div>
        </div>
      </div>

      {/* Barra de Busca */}
      <input
        type="text"
        placeholder="Buscar por nome ou descrição da montaria..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 mb-8 rounded-lg bg-gray-800 border border-amber-700/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
      />

      {/* Grid de Parceiros */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-400 mb-4">
          {filteredmounts.length} Montarias Encontrados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredmounts.map((mount) => (
            <PartnerCard key={mount.id} mount={mount} />
          ))}
        </div>
        {filteredmounts.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-amber-700/20">
            Nenhuma montaria encontrada com o termo de busca aplicado.
          </div>
        )}
      </div>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-300 to-amber-500 mb-4">Variante: Parceiros Vulneráveis</h1>

        <div className="bg-amber-900/10 border-amber-600 p-6 rounded-r-lg">
        <p>Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
        </div>
      </div>
      
    </main>
  );
}