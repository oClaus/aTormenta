"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Gear } from "@/types/gear";
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

// --- Componentes Auxiliares ---

// Componente para a Tabela Filtrável de Equipamentos (Veículos)
const GearFilterableTable = ({ allGear }: { allGear: Gear[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome ou Descrição
    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6 w-full relative">
      {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
      <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Veículo
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome, descrição ou origem..."
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
            Exibindo {filteredGear.length} resultado(s) para "{searchTerm}".
          </p>
        )}
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[rgb(var(--bg-card-rgb))]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className="font-display w-[90%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Item</th>
              <th scope="col" className="font-display w-[5%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Preço</th>
              <th scope="col" className="font-display w-[5%] px-4 py-4 text-center text-xs font-bold uppercase tracking-widest">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
            {filteredGear.map((item, index) => {
               const rowClass = index % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30";

               return (
                <tr key={item.id} className={`${rowClass} hover:bg-[rgb(var(--bg-card-rgb))]/60 transition-colors group`}>
                  <td className="px-4 py-4 border-r-2 border-amber-900/10 align-top">
                    <div className="font-display font-bold text-amber-950 text-lg group-hover:text-red-800 transition-colors">{item.name}</div>
                    <div className="text-sm text-amber-950/85 break-words font-serif font-medium mt-1 leading-relaxed">{item.description}</div>
                    <div className="font-display mt-4 text-[10px] inline-block px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {item.origin}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-red-800 font-bold font-serif align-middle border-r-2 border-amber-900/10">{item.price}</td>
                  <td className="px-4 py-4 text-center text-sm text-amber-950/85 font-serif font-medium align-middle">{item.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[rgb(var(--bg-inset-rgb))] italic text-lg border-t-2 border-amber-900/20 flex flex-col items-center gap-3">
            <PageGlyph className="text-amber-950/40" />
            Nenhum veículo encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

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
                  <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Equipamentos
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Veículos</span>
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
                Veículos
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
                  Regras de Veículos
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir características e regras de pilotagem.
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
                <p className="font-medium text-lg leading-relaxed italic mb-6 border-l-4 border-amber-900/30 pl-4 py-2 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r">
                  Carroças carregando repolhos e carruagens carregando princesas. Grandes veleiros singrando os mares e ágeis ornitópteros voando pelos céus. Arton possui diversos veículos, e cada vez mais eles são parte da vida — e das aventuras — dos heróis. Esta seção apresenta regras detalhadas para uso de veículos.
                </p>
              </section>

              {/* Características de Veículos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-6 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Características de Veículos
                </h2>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Tamanho.</strong> O tamanho de um veículo determina o espaço que ele ocupa, bem como seus modificadores de Furtividade e manobras (Tormenta20, p. 107). Além disso, o veículo aplica seu modificador de Furtividade por tamanho nos testes de Pilotagem do piloto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Deslocamento.</strong> Veículos seguem as regras normais para seus tipos de deslocamento, exceto que um veículo com deslocamento de natação se move apenas sobre a água, a menos que sua descrição especifica que ele podem submergir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Defesa.</strong> Indica a dureza dos materiais que compõem o veículo. Se o veículo adiciona um atributo (ou outra característica) do piloto à sua Defesa, ele só recebe esse benefício se estiver em movimento.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Pontos de Vida.</strong> Representam a resistência dos materiais que compõem o veículo. Um veículo reduzido a 0 PV ou menos para de funcionar e, se for reduzido a um total de PV negativos igual à metade de seus pontos de vida máximos, é destruído além de qualquer conserto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Consertando Veículos.</strong> Para consertar um veículo, você gasta 1 hora de trabalho e faz um teste de Ofício (artesão ou outro apropriado) com CD 15. Se passar, recupera 1d8 PV do veículo, +1d8 para cada 5 pontos pelos quais o teste superar a CD. Para cada d8 recuperado, você precisa gastar T$ 10 em materiais. A critério do mestre, várias pessoas podem reparar um veículo ao mesmo tempo, sobretudo se ele for Grande ou maior. Ao contrário de outros objetos, pontos de vida de veículos também podem ser recuperados com habilidades que recuperem PV de construtos, como a magia Transmutar Objetos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <div className="font-medium">
                      <strong className="text-red-800 uppercase tracking-widest text-sm">Tripulação.</strong> Cada veículo exige um ou mais tripulantes, conforme seu tamanho e complexidade.
                      <ul className="space-y-2 mt-4 ml-2 md:ml-4 text-amber-950/90">
                        <li className="flex items-start gap-3">
                          <span className="text-[10px] text-red-800/40 mt-1.5">◆</span>
                          <span><strong className="text-amber-950">Piloto.</strong> Responsável por conduzir o veículo. Todo veículo tripulado precisa de pelo menos um piloto.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[10px] text-red-800/40 mt-1.5">◆</span>
                          <span><strong className="text-amber-950">Copiloto.</strong> Pode fazer testes de Pilotagem para ajudar o piloto, e pode substituí-lo se necessário.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[10px] text-red-800/40 mt-1.5">◆</span>
                          <span><strong className="text-amber-950">Capitão.</strong> Veículos maiores, como navios, geralmente possuem um capitão. Ele desempenha diversas tarefas adequadas ao veículo e pode fazer testes para ajudar os demais tripulantes.</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm italic text-amber-950/70 border-l-2 border-amber-900/20 pl-3">Certos veículos podem ter outros tripulantes especializados, como navegadores, artesãos, canhoneiros, remadores etc. Se a tripulação de um veículo for menor que o necessário, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade do necessário, a penalidade aumenta para –5.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Passageiros e Carga.</strong> Indica quantos passageiros ou espaços de carga o veículo pode transportar. Como regra geral, um passageiro Pequeno ou Médio que não esteja sobrecarregado equivale a 20 espaços de carga de um veículo. Qualquer sobrecarga do passageiro conta no limite de espaços do veículo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Cobertura.</strong> Alguns veículos fornecem cobertura, leve ou total, para seus ocupantes (indicado em sua descrição).</span>
                  </li>
                </ul>
              </section>

              {/* Jogando com Veículos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-6 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Jogando com Veículos
                </h2>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Embarcando.</strong> Embarcar em um veículo geralmente é uma ação de movimento. No caso de veículos maiores, como navios, alcançar posições específicas pode demorar mais tempo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <div className="font-medium">
                      <strong className="text-red-800 uppercase tracking-widest text-sm">Pilotagem.</strong> Para conduzir um veículo em combate ou outras situações ruins (por exemplo, uma estrada esburacada para um veículo terrestre, ou um dia de ventania para um veículo voador) você precisa gastar uma ação de movimento e fazer um teste de Pilotagem contra CD 15. Em situações muito ruins (um bosque embarrado para um veículo terrestre, uma tempestade para um veículo voador), a CD aumenta para 25. Se passar, você avança seu deslocamento. Se falhar, avança metade desse deslocamento. Por fim, se falhar por 5 ou mais, sofre um contratempo.
                      <p className="mt-3 pl-4 border-l-2 border-amber-900/20 text-amber-950/80 text-sm">Um contratempo pode ser perda de vida (2d6 para veículos Médios ou menores, +2d6 por categoria de tamanho acima), uma colisão ou um problema que desabilite uma roda ou incapacite uma das criaturas que puxa o veículo (veja a seguir).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Pilotagem Cuidadosa.</strong> No início de cada rodada, você pode pilotar cuidadosamente. Se fizer isso, nessa rodada o deslocamento do veículo diminui pela metade e você recebe +2 em Pilotagem.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Colisões.</strong> Veículos em movimento podem colidir com obstáculos, como paredes, árvores e outros veículos. Quando uma colisão ocorre, o veículo e seus ocupantes sofrem 1d6 pontos de dano de impacto para cada 3m de deslocamento do veículo (mínimo 1d6). Os ocupantes do veículo podem fazer um teste de Reflexos (CD 20 + o total de dados de dano) para reduzir esse dano à metade. A critério do mestre, obstáculos muito pequenos (três ou mais categorias de tamanho menores que o veículo) ou frágeis (como uma pilha de feno) não causam dano de colisão. Já obstáculos muito grandes (duas ou mais categorias de tamanho maiores que o veículo) podem, além do dano, forçar o veículo a parar completamente ou capotar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Quebrando Rodas.</strong> É possível quebrar ou sabotar as rodas de um veículo ou outras partes necessárias para seu deslocamento, como remos ou velas (veja Ladinagem em Tormenta20, p. 120). Se uma dessas partes for desabilitada, o piloto sofre uma penalidade de –2 em testes de Pilotagem. Se mais da metade dessas partes for desabilitada, o piloto sofre –5 em testes de Pilotagem e o deslocamento do veículo é reduzido à metade. O mestre tem a palavra final sobre quais partes de um veículo interferem em seu deslocamento.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Animais de Tração.</strong> Para veículos puxados por criaturas, a descrição indica quantas delas são necessárias. Se a quantidade de criaturas presentes for menor que o indicado, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade, a penalidade em Pilotagem aumenta para –5 e o deslocamento do veículo é reduzido à metade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Atacar em um Veículo.</strong> O balanço de um veículo em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. A critério do mestre, poderes relacionados a combater em veículos, como Pernas do Mar (Tormenta20, p. 48), podem eliminar essas penalidades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Atropelamento.</strong> Você pode usar uma ação completa para atropelar criaturas. Faça um teste de Pilotagem para conduzir como normal. Se você passar, o veículo percorre até o dobro de seu deslocamento (mínimo 6m) em linha reta, podendo passar pelo espaço ocupado por criaturas menores que ele. Criaturas atropeladas sofrem 1d6 pontos de dano de impacto para cada 1,5m de deslocamento do veículo e ficam caídas (Ref CD igual ao resultado do teste de Pilotagem reduz à metade e evita a condição). Se encontrar uma criatura de tamanho igual ou maior que o seu, em vez de atropelá-la o veículo colide com ela (veja “Colisões”). Veículos Enormes e Colossais são ainda mais perigosos; seus dados de dano mudam respectivamente para d8 e d12.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Aeronaves.</strong> Alguns veículos voadores, como balões, podem ficar parados em pleno ar sem perder sustentação. Já outros (indicados em sua descrição) precisam percorrer pelo menos metade do seu deslocamento a cada rodada para se manter voando. Caso contrário, começam a cair e perder controle; o mestre determina quantas rodadas uma aeronave leva para chegar ao solo (como regra geral, uma queda totalmente livre percorre 150m por rodada). Ao fim disso, a aeronave atinge o chão e sofre dano de queda como normal. Da mesma forma, uma aeronave reduzida a 0 PV ou menos perde a capacidade de voar e cai. Em ambos os casos, o piloto pode fazer um teste de Pilotagem para amortecer queda (veja a perícia Acrobacia).</span>
                  </li>
                </ul>

              </section>

            </div>
          </div>
        </div>

        {/* Tabela Completa e Filtrável */}
        <section className="w-full">
            <h2 className="font-display text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Frota e Embarcações
            </h2>
            <GearFilterableTable allGear={vehicles} />
        </section>
      </main>

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