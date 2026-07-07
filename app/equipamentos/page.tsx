"use client";

import { useState } from "react";
import Link from "next/link";
import {
  initialMoneyTable,
  equipmentCategories,
} from "@/data/equipamentos";
import { InitialMoneyEntry, EquipmentCategory } from "@/types/equipment";
import ThemeToggle from "@/components/ThemeToggle";

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

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

// Componente para renderizar a Tabela de Dinheiro Inicial
const InitialMoneyTable = ({ data }: { data: InitialMoneyEntry[] }) => {
  // Divide a tabela em duas colunas para o layout compacto
  const half = Math.ceil(data.length / 2);
  const col1 = data.slice(0, half);
  const col2 = data.slice(half);

  const renderTableBody = (columnData: InitialMoneyEntry[]) => (
    <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
      {columnData.map((row, index) => (
        <tr key={row.level} className={`transition-colors hover:bg-[rgb(var(--bg-card-rgb))]/50 ${index % 2 === 0 ? 'bg-[rgb(var(--bg-inset-rgb))]' : 'bg-[rgb(var(--bg-card-rgb))]/30'}`}>
          <td className="px-6 py-3 whitespace-nowrap text-lg font-bold text-red-800 border-r-2 border-amber-900/10 text-center">
            {row.level}º
          </td>
          <td className="px-6 py-3 whitespace-nowrap text-base text-amber-950/85 font-medium font-serif text-right pr-8">
            {row.money}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="shadow-sm rounded-xl border-2 border-amber-900/20 overflow-hidden bg-[rgb(var(--bg-card-rgb))]">
      <div className="flex flex-col md:flex-row">
        {/* Coluna 1 */}
        <table className="w-full md:w-1/2 divide-y-2 divide-amber-900/20 border-b-2 md:border-b-0 md:border-r-2 border-amber-900/20">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80">
            <tr>
              <th scope="col" className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                Nível
              </th>
              <th scope="col" className="px-6 py-4 text-right pr-8 text-sm font-bold uppercase tracking-widest">
                Dinheiro Inicial (T$)
              </th>
            </tr>
          </thead>
          {renderTableBody(col1)}
        </table>
        {/* Coluna 2 */}
        <table className="w-full md:w-1/2 divide-y-2 divide-amber-900/20">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80">
            <tr>
              <th scope="col" className="px-6 py-4 text-center text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                Nível
              </th>
              <th scope="col" className="px-6 py-4 text-right pr-8 text-sm font-bold uppercase tracking-widest">
                Dinheiro Inicial (T$)
              </th>
            </tr>
          </thead>
          {renderTableBody(col2)}
        </table>
      </div>
    </div>
  );
};

// Componente para o Card de Categoria (Grid)
const CategoryCard = ({ category }: { category: EquipmentCategory }) => {
  const IconComponent = category.icon;

  return (
    <Link
      href={category.href}
      className="card-grain group relative flex flex-col items-start p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 transition-all duration-300 hover:border-red-800/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] font-serif"
    >
      <CornerOrnament className="absolute -top-px -left-px z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Container do Ícone com Efeito */}
      <div className="mb-5 p-3 rounded-lg bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 group-hover:border-red-800/30 transition-colors shadow-sm">
        <IconComponent
          className="w-8 h-8 md:w-10 md:h-10 text-amber-900/70 group-hover:text-red-800 transition-all duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-2 group-hover:text-red-700 transition-colors tracking-wide break-words">
        {category.title}
      </h3>

      <p className="text-amber-950/80 text-sm font-medium leading-relaxed line-clamp-3">
        {category.description}
      </p>

      {/* Indicador de clique suave (Seta) */}
      <div className="absolute bottom-6 right-6 text-amber-900/30 group-hover:text-red-800 text-xl font-bold transition-colors">
         →
      </div>
    </Link>
  );
};


export default function EquipamentosPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
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
                  <span className="text-red-800">Equipamentos</span>
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
            Equipamentos
            </h1>
            <div className="flex items-center gap-3 w-full mb-6">
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
                <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
                <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
              </svg>
              <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
            </div>
        </div>

        {/* Acordeão de Introdução (Agora contendo todo o texto e a tabela de dinheiro inicial) */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Regras de Equipamentos
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir as regras de carga, dinheiro inicial e moedas.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[800000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

              {/* Seção 1: Introdução */}
              <section>
                <p className="font-medium">
                  Espadas afiadas e armaduras resplandecentes. Símbolos sagrados e tomos ancestrais. Ou simplesmente um bom prato de comida!
                  Aventureiros precisam de diversos equipamentos em suas missões. Este capítulo descreve os itens e serviços mundanos encontrados em Arton.
                </p>
              </section>

              {/* Seção 2: Equipamento Inicial */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Equipamento Inicial</h2>
                <p className="mb-4">
                  Personagens de 1º nível começam com os itens fornecidos pela sua origem e os itens a seguir:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span>Uma mochila, um saco de dormir e um traje de viajante.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span>Uma arma simples à sua escolha. Se você tiver proficiência com armas marciais, também começa com uma arma marcial à sua escolha.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span>Uma armadura de couro, couro batido ou gibão de peles, à sua escolha. Se você tiver proficiência com armaduras pesadas, em vez disso pode começar com uma brunea. Se tiver proficiência com escudos, começa também com um escudo leve. <strong className="font-bold text-red-800">Exceção:</strong> arcanistas começam sem armadura.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span>T$ 4d6, que você pode usar para comprar itens ou guardar para usar na aventura.</span>
                  </li>
                </ul>
              </section>

              {/* Seção 3: Personagens de Alto Nível e Tabela */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Personagens de Alto Nível</h2>
                <p className="mb-6">
                  Personagens acima do 1º nível começam com mais dinheiro, conforme a tabela abaixo.
                </p>
                <div className="mb-4 max-w-4xl mx-auto">
                  <InitialMoneyTable data={initialMoneyTable} />
                </div>
              </section>

              {/* Seção 4: Riqueza & Moedas e Comércio */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Riqueza & Moedas</h2>
                <p className="mb-4">
                  O <strong className="text-red-800">Tibar (T$)</strong> é a moeda padrão do Reinado. Trata-se de uma peça redonda de prata com 1,5 cm de diâmetro. A cunhagem traz em um lado o rosto de <strong className="text-red-800">Tibar, o Deus do Comércio</strong> — um rei com cabelos encaracolados e uma joia em forma de olho na coroa; e no outro lado o mesmo rosto, mas sem a coroa. Em Arton, ao jogar “cara ou coroa”, o costume é escolher “coroa ou não coroa”.
                </p>
                <p className="mb-4">
                  A moeda foi criada por <strong className="font-bold text-amber-950">Quindogar Tolliannor</strong>, primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão popular que Tollianor passou a ser conhecido pelo nome de sua criação e ascendeu como <strong className="text-red-800">Deus Menor do Comércio</strong>. Acredita-se que manter um <strong className="font-bold text-amber-950">Tibar</strong> no bolso ou no pescoço (como um amuleto) garante boa fortuna.
                </p>
                <p className="mb-6">
                  Nem todos os reinos seguem o padrão do Tibar. Em alguns lugares, devido à escassez de prata, o <strong className="font-bold text-amber-950">Tibar de cobre (TC)</strong> é usado como moeda padrão. Em outros, o valor do Tibar pode apresentar flutuações. Por padrão, todos os preços de itens e serviços são exibidos em T$. Entretanto, existem duas variações da moeda: o <strong className="font-bold text-amber-950">Tibar de cobre (TC)</strong>, que vale <strong className="font-bold text-amber-950">um décimo do T$</strong>, utilizado por camponeses e plebeus, e o <strong className="font-bold text-amber-950">Tibar de Ouro (TO)</strong>, que vale <strong className="font-bold text-red-800">T$ 10</strong>, utilizado por aristocratas, grandes mercadores e aventureiros poderosos.
                </p>

                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Troca & Comércio</h3>
                <p className="mb-4">No Reinado, o comércio é organizado por guildas mercantes. As guildas decidem quem pode vender o quê e o valor dos produtos e serviços que controlam, o que garante um padrão nos preços. Em lugares afastados, ermos ou sob o domínio de tiranos, porém, os preços podem variar muito.</p>
                <p>No geral, personagens podem comprar itens pelos preços listados nas tabelas e vendê-los pela metade desses preços. Em certos lugares, o mestre pode determinar que os itens são mais caros, estão disponíveis em quantidades limitadas ou não estão disponíveis. Comprando ou vendendo, os valores podem ser melhorados através de barganha (veja a perícia Diplomacia).</p>
              </section>

              {/* Seção 5: Usando, Carregando e Carga */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Usando & Carregando</h2>
                <p className="mb-6">Equipamento é extremamente útil, mas há um limite de quantos itens você pode usar ou carregar ao mesmo tempo.</p>

                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Limites de Uso</h3>
                <p className="mb-4">Alguns itens precisam ser empunhados para serem usados. Você pode empunhar apenas um item em cada mão, ou seja, pode empunhar no máximo dois itens ao mesmo tempo. Você pode guardar um item empunhado com uma ação de movimento ou largá-lo no chão com uma ação livre.</p>
                <p className="mb-6">Itens que não são empunhados precisam ser vestidos. Você pode receber os benefícios de no máximo quatro itens vestidos simultaneamente. Vestir ou despir um item é uma ação de movimento (e você ainda precisa gastar outra ação de movimento para guardá-lo ou uma ação livre para largá-lo no chão). Note que esse limite se aplica apenas a itens com benefícios mecânicos.</p>

                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Limites de Carga</h3>
                <p className="mb-4">A quantidade de equipamento que você pode carregar é medida em espaços de itens. Por padrão, um item ocupa 1 espaço, porém, há exceções:</p>

                {/* Bloco formatado para os limites de carga */}
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-inset-rgb))] rounded-xl border-2 border-amber-900/20 shadow-sm border-l-4 border-l-red-800 mb-6">
                  <ul className="space-y-3 font-medium text-base md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                      <span>Itens muito leves ou pequenos (alquímicos, poções, pergaminhos) ocupam <strong className="text-red-800">meio espaço</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                      <span>Armas de duas mãos, armaduras leves, escudos pesados e criaturas Minúsculas ocupam <strong className="text-red-800">2 espaços</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                      <span>Armaduras pesadas, criaturas Pequenas e outros itens muito pesados ou volumosos (barril ou baú) ocupam <strong className="text-red-800">5 espaços</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                      <span>Itens extremamente pesados ou volumosos (criatura Média) ocupam <strong className="text-red-800">10 espaços</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                      <span>Cada mil moedas, independentemente do tipo, ocupam <strong className="text-red-800">1 espaço</strong>.</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">Você pode carregar <strong className="font-bold">10 espaços +2 por ponto de Força</strong> (ou –1 por ponto de Força negativo). Se ultrapassar esse limite, fica sobrecarregado — sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m. Você não pode carregar mais do que o dobro do seu limite.</p>
                <p>A regra considera que você possui uma mochila onde carregar seu equipamento. A própria mochila não ocupa espaço. De forma similar, recipientes cuja única função seja carregar outros itens não ocupam espaço. Por fim, pequenos itens que não possuem efeito em jogo (cosméticos) não precisam ser considerados.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Itens Mágicos</h2>
                <p className="font-medium mb-4">A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
                <p className="font-medium mb-6">Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>

                <blockquote className="border-l-4 border-red-800 pl-4 py-4 my-6 italic text-amber-950/85 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">
                    Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.
                </blockquote>

                <p className="font-medium">Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>
              </section>

              {/* Usando Itens Mágicos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Usando Itens mágicos</h2>
                <p className="font-medium mb-6">Itens mundanos e mágicos seguem as mesmas regras para acúmulo de bônus e limites de uso e carga. Assim, se um item mundano e um item mágico fornecem um bônus na mesma característica, eles não se acumulam — use apenas o melhor. Da mesma forma, um personagem vestindo dois itens mundanos e dois itens mágicos não receberá os benefícios de um quinto item vestido.</p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Limites de Carga.</strong> Itens mágicos ocupam espaço como itens mundanos. Uma espada longa flamejante, por exemplo, ocupa 1 espaço — o mesmo que uma espada longa mundana. Acessórios ocupam 1 espaço, a menos que sua descrição indique o contrário. Poções e pergaminhos ocupam meio espaço.
                     </span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Ativação e Testes.</strong> Para itens mágicos com habilidades ativadas, você precisa primeiro identificá-los (veja a seguir). A menos que sua descrição diga o contrário, ativar um item mágico é uma ação padrão. Para itens com efeitos que exigem teste de resistência, o atributo usado para definir a CD é indicado na descrição do item (para poções e pergaminhos, é Inteligência, Sabedoria ou Carisma, a escolha do usuário).
                     </span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Itens que lançam magias.</strong> Lançar magias a partir de itens não exige pronunciar palavras mágicas, gesticular ou se concentrar, e magias arcanas lançadas por meio de itens não sofrem limitação pelo uso de armadura. Você pode usar aprimoramentos, mas precisa pagar por eles.
                     </span>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Identificando Itens mágicos.</strong> Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições indicando o que podem fazer; essas podem ser mágicas, mudando para um idioma que você saiba ler, ou exigir fluência em línguas exóticas (veja a perícia Conhecimento). Outros podem não trazer qualquer pista sobre seu funcionamento. Nesse caso, os poderes só ficam claros se você identificar o item. Para isso, use a perícia Misticismo — ou a velha tentativa e erro. Você pode subir naquela vassoura velha e saltar da janela. Se for uma vassoura voadora, você sairá voando. Se não for...
                     </span>
                  </li>
                </ul>
              </section>

              {/* Fabricando Itens Mágicos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Fabricando itens mágicos</h2>
                <p className="font-medium">Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Itens de uso único</h2>
                <p className="font-medium mb-6">Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>

                {/* Box de Exemplo Estilizado */}
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-inset-rgb))] rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800 mb-6 font-medium text-base">
                    <p className="mb-2"><strong className="text-red-800 uppercase tracking-widest text-sm">Magia de 1º círculo (1 PM): </strong>preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</p>
                    <p><strong className="text-red-800 uppercase tracking-widest text-sm">Magia de 3º círculo (6 PM): </strong>preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</p>
                </div>

                <p className="font-medium">Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Itens Permanentes</h3>
                <p className="font-medium mb-6">Armas e armaduras mágicas podem ser encantadas ou específicas. Acessórios são sempre específicos.</p>

                <ul className="space-y-6">
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                        <span className="font-medium">
                            <strong className="text-red-800 uppercase tracking-widest text-sm">Itens Encantados.</strong> Funcionam como itens superiores — mas, em vez de melhorias, possuem encantos. Um item mágico menor possui um encanto, um médio possui dois e um item mágico maior possui três encantos. O preço e a CD do teste de Ofício aumentam de acordo com o número de encantos (veja a tabela abaixo). Bônus por encantos não se acumulam. Um mesmo item pode ser superior e encantado. Some os modificadores de preço e CD no teste de Ofício, e os bônus fornecidos por melhorias e encantos para determinar o bônus do item. Assim, uma espada longa com um encanto tem preço de T$ 18.015. Fabricá-la exige um gasto de T$ 6.005 e um teste de Ofício contra CD 30. Já uma espada longa com quatro melhorias e três encantos (o máximo possível) tem preço de T$ 90.015 (T$ 15 da espada + T$ 18.000 das quatro melhorias, mais T$ 72.000 dos três encantos). Fabricá-la exige um gasto de T$ 30.005 e um teste de Ofício contra CD 60. Apenas os maiores armeiros são capazes de forjar uma arma dessas!
                        </span>
                    </div>

                    {/* --- TABELA DE PREÇO DE ENCANTOS --- */}
                    <div className="my-8 max-w-lg mx-auto bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 overflow-hidden shadow-sm">
                      <div className="bg-[rgb(var(--bg-edge-rgb))] py-3 border-b-2 border-amber-900/20">
                          <h4 className="font-display text-lg font-bold text-center text-amber-950/80 tracking-widest uppercase">Preço de Encantos</h4>
                      </div>
                      <table className="w-full text-center">
                        <thead>
                          <tr className="bg-[rgb(var(--bg-card-rgb))] text-amber-950/70 text-xs sm:text-sm uppercase tracking-widest font-serif font-bold border-b-2 border-amber-900/10">
                            <th className="py-3 px-2 border-r-2 border-amber-900/10">Número<br/>de Encantos</th>
                            <th className="py-3 px-2 border-r-2 border-amber-900/10">Aumento<br/>no Preço</th>
                            <th className="py-3 px-2">Aumento<br/>na CD</th>
                          </tr>
                        </thead>
                        <tbody className="text-amber-950/85 font-serif font-medium bg-[rgb(var(--bg-inset-rgb))]">
                          <tr className="border-b-2 border-amber-900/10 hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
                            <td className="py-3 font-bold text-red-800 border-r-2 border-amber-900/10 text-lg">1</td>
                            <td className="py-3 font-bold border-r-2 border-amber-900/10">+ T$ 18.000</td>
                            <td className="py-3">+10</td>
                          </tr>
                          <tr className="border-b-2 border-amber-900/10 hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors bg-[rgb(var(--bg-card-rgb))]/30">
                            <td className="py-3 font-bold text-red-800 border-r-2 border-amber-900/10 text-lg">2</td>
                            <td className="py-3 font-bold border-r-2 border-amber-900/10">+ T$ 36.000</td>
                            <td className="py-3">+15</td>
                          </tr>
                          <tr className="hover:bg-[rgb(var(--bg-card-rgb))]/50 transition-colors">
                            <td className="py-3 font-bold text-red-800 border-r-2 border-amber-900/10 text-lg">3</td>
                            <td className="py-3 font-bold border-r-2 border-amber-900/10">+ T$ 72.000</td>
                            <td className="py-3">+20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>

                  <li className="flex gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Itens Específicos.</strong> Usam as regras de fabricação de itens de Ofício. O preço de cada item aparece nas tabelas a seguir. A CD do teste de Ofício é dada pela categoria do item: CD 30 para itens menores, CD 40 para médios e CD 50 para itens maiores. Por fim, a perícia usada é determinada pelo tipo de item: Ofício (armeiro) para armas e armaduras e Ofício (artesão) para acessórios. De acordo com o mestre, outros Ofícios podem ser usados para itens específicos — como Ofício (joalheiro) para um anel. Itens específicos não podem receber encantos. Todas as armas e armaduras específicas deste livro são itens maiores.
                     </span>
                  </li>
                  <li className="flex gap-3">
                     <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                     <span className="font-medium">
                        <strong className="text-red-800 uppercase tracking-widest text-sm">Custo em Pontos de Mana.</strong> Para fabricar um item mágico permanente, o personagem deve sacrificar certa quantidade de pontos de mana: 1 PM para itens menores, 2 PM para médios e 3 PM para itens maiores. É essa essência que irá energizar o item. Os pontos de mana são perdidos para sempre. Contudo, caso o personagem destrua um item mágico permanente que criou, recupera os PM sacrificados naquele item. De acordo com o mestre, outras coisas podem ser sacrificadas no lugar de pontos de mana, como ingredientes raros. Porém, encontrar um ingrediente desses é sempre uma tarefa difícil — talvez o objetivo de uma aventura!
                     </span>
                  </li>
                </ul>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Destruindo Itens mágicos</h3>
                <p className="font-medium mb-4">Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
                <p className="font-medium">Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O valor depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu valor ou o do portador.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-16 w-full">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Categorias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {[...equipmentCategories]
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
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