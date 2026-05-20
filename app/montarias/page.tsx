"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { mounts } from "@/data/mounts";
import { Mount } from "@/types/mount";

// --- Componentes Auxiliares ---

// Componente Card de Montaria (Estilo Pergaminho)
const PartnerCard = ({ mount }: { mount: Mount }) => {
  return (
    <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 font-serif h-full group">
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10">
        <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-red-800 font-serif group-hover:text-red-700 transition-colors tracking-wide">{mount.name}</h3>
            <span className="px-2 py-0.5 rounded text-[10px] font-serif uppercase tracking-widest border border-amber-900/20 shadow-sm font-bold bg-[#fbf5e6] text-amber-950/70 whitespace-nowrap">
            {mount.size}
            </span>
        </div>
        <p className="text-sm text-amber-950/70 italic font-serif mt-2 font-medium">{mount.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-amber-950/85 space-y-4 flex-grow font-serif">
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Iniciante
          </p>
          <p className="font-medium leading-relaxed">{mount.benefits.iniciante}</p>
        </div>
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Veterano
          </p>
          <p className="font-medium leading-relaxed">{mount.benefits.veterano}</p>
        </div>
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Mestre
          </p>
          <p className="font-medium leading-relaxed">{mount.benefits.mestre}</p>
        </div>

        {/* Campo Extra Opcional */}
        {mount.extra && (
          <div className="mt-4 p-3 bg-red-800/5 rounded-lg border border-red-800/10 shadow-sm">
            <p className="text-sm text-red-900/80 italic font-medium leading-relaxed">{mount.extra}</p>
          </div>
        )}
      </div>

      {/* Origem */}
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
        <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
            {mount.origin}
        </span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function MontariasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

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
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
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
                <span className="text-red-800">Montarias</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Montarias
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
                  Regras de Montarias
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir as regras de combate montado e parceiros vulneráveis.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Combate Montado</h3>
                <p className="font-medium text-lg mb-6 italic border-l-4 border-amber-900/30 pl-4 py-2 bg-[#e8dac1]/50 rounded-r">
                    Montarias são um tipo específico de parceiro. Elas usam as seguintes regras especiais:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Para usar um parceiro montaria você precisa montar nele. Para passá-lo para outro aliado, precisa desmontar antes. Ambas são ações de movimento.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Uma vez montado, você precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por turno para guiar a montaria. Se passar, recebe os benefícios dela. Se falhar, perde a ação de movimento. Se falhar por 5 ou mais, cai da montaria e sofre 1d6 pontos de dano. Se for treinado em Cavalgar, você recebe os bônus da montaria automaticamente, sem precisar gastar a ação ou fazer o teste.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Se você sofrer dano, deve fazer um teste de Cavalgar (CD igual ao dano). Se falhar, cai da montaria e sofre 1d6 pontos de dano. Se possuir o poder Ginete, você não precisa fazer esse teste.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">Cada parceiro montaria possui uma categoria de tamanho (indicada ao lado do nome do parceiro). Um personagem só pode montar uma montaria maior do que ele mesmo, e enquanto estiver montado usa o tamanho da montaria para efeitos do espaço que ocupa e para modificador de Furtividade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium">O balanço da montaria em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. Se possuir o poder Ginete, você não sofre nenhuma dessas penalidades.</span>
                  </li>
                </ul>

                <p className="font-medium mt-6 pt-6 border-t-2 border-amber-900/10">Montarias podem ser compradas ou recebidas por habilidades. No primeiro caso, são sempre parceiros <strong className="text-red-800">iniciantes</strong>. No segundo, seu poder é definido pela habilidade em questão. Note que embora alguns animais sejam facilmente comprados, como cavalos e trobos, outros são raros. Encontrar um grifo à venda é quase impossível!</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Variante: Parceiros Vulneráveis
                </h1>
                <p className="font-medium italic border-l-4 border-red-800 pl-4 py-2 bg-[#e8dac1]/50 rounded-r">Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
          <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Montaria
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome ou descrição da montaria..."
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
          {searchTerm && (
            <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
              Exibindo {filteredmounts.length} resultado(s) para "{searchTerm}".
            </p>
          )}
        </div>

        {/* Grid de Montarias */}
        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-6 font-serif border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                <span className="text-red-800 text-3xl">❖</span> {filteredmounts.length} Montarias Encontradas
            </h2>
            
            {filteredmounts.length > 0 ? (
                // Removido xl:grid-cols-4 conforme solicitado, limitando a 3 colunas no máximo.
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredmounts.map((mount) => (
                    <PartnerCard key={mount.id} mount={mount} />
                ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                  <span className="text-4xl opacity-40 mb-4">📜</span>
                  <p className="text-amber-950/70 text-lg italic tracking-wide">
                    Nenhuma montaria encontrada com o termo de busca aplicado.
                  </p>
                </div>
            )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}