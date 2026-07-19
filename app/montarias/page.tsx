"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { mounts } from "@/data/mounts";
import { Mount } from "@/types/mount";
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

// --- Componentes Auxiliares ---

// Componente Card de Montaria (Estilo Pergaminho)
const PartnerCard = ({ mount }: { mount: Mount }) => {
  return (
    <div className="card-grain group relative p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col transition-all duration-300 hover:-translate-y-1 h-full">
      <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10">
        <div className="flex justify-between items-start gap-2">
            <h3 className="font-display text-xl font-bold text-red-800 group-hover:text-red-700 transition-colors tracking-wide break-words">{mount.name}</h3>
            <span className="font-display px-2 py-0.5 rounded text-[10px] uppercase tracking-widest border border-amber-900/20 shadow-sm font-bold bg-[rgb(var(--bg-inset-rgb))] text-amber-950/70 whitespace-nowrap">
            {mount.size}
            </span>
        </div>
        <p className="text-sm text-amber-950/70 italic font-serif mt-2 font-medium">{mount.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-amber-950/85 space-y-4 flex-grow">
        <div className="bg-[rgb(var(--bg-inset-rgb))]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-display font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Iniciante
          </p>
          <p className="font-medium leading-relaxed">{mount.benefits.iniciante}</p>
        </div>
        <div className="bg-[rgb(var(--bg-inset-rgb))]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-display font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Veterano
          </p>
          <p className="font-medium leading-relaxed">{mount.benefits.veterano}</p>
        </div>
        <div className="bg-[rgb(var(--bg-inset-rgb))]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-display font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
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
        <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
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
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
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
                  <span className="text-red-800">Montarias</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            Montarias
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
                  Regras de Montarias
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir as regras de combate montado e parceiros vulneráveis.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              <section>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Combate Montado</h3>
                <p className="font-medium text-lg mb-6 italic border-l-4 border-amber-900/30 pl-4 py-2 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r">
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
                <h1 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Montaria Especial: Dragão
                </h1>
                <p className="font-medium border-amber-900/10">Dragões, mesmo os jovens, são criaturas orgulhosas e de personalidade forte. Assim, para se tornar o cavaleiro de um dragão, um personagem precisa primeiro conquistar sua amizade e, sobretudo, seu respeito! Isso significa que um dragão montaria não pode simplesmente ser escolhido como opção de uma habilidade (como o poder Parceiro). Conquistar um dragão deve fazer parte da história e ser a recompensa por ações do personagem durante o jogo. Os detalhes exatos de como isso ocorre dependem de cada campanha, mas, em geral, envolvem encontrar um dragão e conquistar seu respeito por meio de um favor, demonstração de poder ou qualquer ato que mostre ao dragão que você é digno de ser seu cavaleiro.</p>
                <p className="font-medium border-amber-900/10">Um dragão jovem conta como dois parceiros para efeitos do limite de parceiros que você pode ter. Isso significa que um personagem de nível 4 ou menor dificilmente poderá ter um dragão jovem como parceiro, a menos que consiga aumentar seu limite de parceiros ou escolha o poder Coração de Dragão.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Treinando Montarias Selvagens
                </h1>
                <p className="font-medium border-amber-900/10">As duas formas mais comuns para um personagem obter uma montaria é por meio de uma habilidade, como Companheiro Animal e Montaria Sagrada, ou usando tibares para comprar um cavalo, trobo ou outra das montarias comumente disponíveis nos mercados de Arton. Entretanto, existe outra maneira: treinar uma criatura selvagem.</p>
                <p className="font-medium border-amber-900/10">O primeiro passo para treinar uma criatura é domá-la. Para isso, você precisa capturar a criatura (por meio de uma armadilha, magia etc.) ou derrotá-la em combate. Após isso, deve fazer um teste de Adestramento (CD 15 + ND da criatura). Se passar, você doma a criatura e pode começar a treiná-la. Se falhar, a criatura é muito selvagem para ser treinada.</p>
                <p className="font-medium border-amber-900/10">Uma vez que a criatura seja domada, é hora de começar seu treinamento. Isso é um teste estendido de Adestramento (CD 15 + ND da criatura), no qual é necessário um total de sucessos igual a 3 + ND da criatura antes de 3 falhas. Cada teste representa um dia de trabalho e você recebe um bônus cumulativo de +1 para cada sucesso consecutivo. Se passar no teste estendido, transforma a criatura em um parceiro montaria iniciante. Se falhar, precisa começar o treinamento do início.</p>
                <p className="font-medium border-amber-900/10">Treinar uma criatura selvagem exige tempo e dedicação. O treinador se torna responsável pela criatura e deve cuidar de sua alimentação, saúde e segurança. Além disso, precisa passar tempo suficiente a seu lado para que ela se acostume com sua presença. Por isso, durante o período de treinamento, você sofre uma penalidade de –2 em testes de perícia e sua recuperação de PM por descanso diminui em um nível.</p>
                <p className="font-medium border-amber-900/10">A critério do mestre, estas regras também podem ser usadas para treinar outros tipos de parceiros irracionais (como um animal perseguidor ou vigilante).</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Montarias para Cavaleiros e Paladinos
                </h1>
                <p className="font-medium border-amber-900/10">A critério do mestre, quando um personagem recebe uma montaria específica (como o cavalo de guerra concedido por Caminho do Cavaleiro), pode escolher outro tipo de montaria. Se permitir essa opção, o mestre pode limitar os tipos de montarias disponíveis para cada habilidade ou pedir que o personagem cumpra algum requisito adicional para receber a montaria, como viajar até uma região específica ou encontrar um filhote e treiná-lo desde jovem.</p>

              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Variante: Parceiros Vulneráveis
                </h1>
                <p className="font-medium italic border-l-4 border-red-800 pl-4 py-2 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r">Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Montaria
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome ou descrição da montaria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
              <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mb-6 border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                <span className="text-red-800 text-3xl">❖</span> {filteredmounts.length} Montarias Encontradas
            </h2>

            {filteredmounts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredmounts.map((mount) => (
                    <PartnerCard key={mount.id} mount={mount} />
                ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
                  <PageGlyph className="text-amber-950/40" />
                  <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
                    Nenhuma montaria encontrada com o termo de busca aplicado.
                  </p>
                </div>
            )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}