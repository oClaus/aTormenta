"use client";

import { useState } from "react";
import Link from "next/link";
import {
  initialMoneyTable,
  equipmentCategories,
} from "@/data/equipamentos"; 
import { InitialMoneyEntry, EquipmentCategory } from "@/types/equipment";

// Componente para renderizar a Tabela de Dinheiro Inicial
const InitialMoneyTable = ({ data }: { data: InitialMoneyEntry[] }) => {
  // Divide a tabela em duas colunas para o layout compacto
  const half = Math.ceil(data.length / 2);
  const col1 = data.slice(0, half);
  const col2 = data.slice(half);

  const renderTableBody = (columnData: InitialMoneyEntry[]) => (
    <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6]">
      {columnData.map((row, index) => (
        <tr key={row.level} className={`transition-colors hover:bg-[#e8dac1]/50 ${index % 2 === 0 ? 'bg-[#fbf5e6]' : 'bg-[#e8dac1]/30'}`}>
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
    <div className="shadow-sm rounded-xl border-2 border-amber-900/20 overflow-hidden bg-[#e8dac1]">
      <div className="flex flex-col md:flex-row">
        {/* Coluna 1 */}
        <table className="w-full md:w-1/2 divide-y-2 divide-amber-900/20 border-b-2 md:border-b-0 md:border-r-2 border-amber-900/20">
          <thead className="bg-[#d9c8a9] text-amber-950/80">
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
          <thead className="bg-[#d9c8a9] text-amber-950/80">
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
      className="group relative flex flex-col items-start p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 transition-all duration-300 hover:border-red-800/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] font-serif"
    >
      {/* Container do Ícone com Efeito */}
      <div className="mb-5 p-3 rounded-lg bg-[#fbf5e6] border border-amber-900/20 group-hover:border-red-800/30 transition-colors shadow-sm">
        <IconComponent 
          className="w-8 h-8 md:w-10 md:h-10 text-amber-900/70 group-hover:text-red-800 transition-all duration-300 group-hover:scale-110" 
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 group-hover:text-red-700 transition-colors tracking-wide">
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
                <span className="text-red-800">Equipamentos</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Equipamentos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Introdução (Agora contendo todo o texto e a tabela de dinheiro inicial) */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Equipamentos
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir as regras de carga, dinheiro inicial e moedas.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
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
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Equipamento Inicial</h2>
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
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Personagens de Alto Nível</h2>
                <p className="mb-6">
                  Personagens acima do 1º nível começam com mais dinheiro, conforme a tabela abaixo.
                </p>
                <div className="mb-4 max-w-4xl mx-auto">
                  <InitialMoneyTable data={initialMoneyTable} />
                </div>
              </section>

              {/* Seção 4: Riqueza & Moedas e Comércio */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Riqueza & Moedas</h2>
                <p className="mb-4">
                  O <strong className="text-red-800">Tibar (T$)</strong> é a moeda padrão do Reinado. Trata-se de uma peça redonda de prata com 1,5 cm de diâmetro. A cunhagem traz em um lado o rosto de <strong className="text-red-800">Tibar, o Deus do Comércio</strong> — um rei com cabelos encaracolados e uma joia em forma de olho na coroa; e no outro lado o mesmo rosto, mas sem a coroa. Em Arton, ao jogar “cara ou coroa”, o costume é escolher “coroa ou não coroa”.
                </p>
                <p className="mb-4">
                  A moeda foi criada por <strong className="font-bold text-amber-950">Quindogar Tolliannor</strong>, primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão popular que Tollianor passou a ser conhecido pelo nome de sua criação e ascendeu como <strong className="text-red-800">Deus Menor do Comércio</strong>. Acredita-se que manter um <strong className="font-bold text-amber-950">Tibar</strong> no bolso ou no pescoço (como um amuleto) garante boa fortuna.
                </p>
                <p className="mb-6">
                  Nem todos os reinos seguem o padrão do Tibar. Em alguns lugares, devido à escassez de prata, o <strong className="font-bold text-amber-950">Tibar de cobre (TC)</strong> é usado como moeda padrão. Em outros, o valor do Tibar pode apresentar flutuações. Por padrão, todos os preços de itens e serviços são exibidos em T$. Entretanto, existem duas variações da moeda: o <strong className="font-bold text-amber-950">Tibar de cobre (TC)</strong>, que vale <strong className="font-bold text-amber-950">um décimo do T$</strong>, utilizado por camponeses e plebeus, e o <strong className="font-bold text-amber-950">Tibar de Ouro (TO)</strong>, que vale <strong className="font-bold text-red-800">T$ 10</strong>, utilizado por aristocratas, grandes mercadores e aventureiros poderosos.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Troca & Comércio</h3>
                <p className="mb-4">No Reinado, o comércio é organizado por guildas mercantes. As guildas decidem quem pode vender o quê e o valor dos produtos e serviços que controlam, o que garante um padrão nos preços. Em lugares afastados, ermos ou sob o domínio de tiranos, porém, os preços podem variar muito.</p>
                <p>No geral, personagens podem comprar itens pelos preços listados nas tabelas e vendê-los pela metade desses preços. Em certos lugares, o mestre pode determinar que os itens são mais caros, estão disponíveis em quantidades limitadas ou não estão disponíveis. Comprando ou vendendo, os valores podem ser melhorados através de barganha (veja a perícia Diplomacia).</p>
              </section>

              {/* Seção 5: Usando, Carregando e Carga */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide">Usando & Carregando</h2>
                <p className="mb-6">Equipamento é extremamente útil, mas há um limite de quantos itens você pode usar ou carregar ao mesmo tempo.</p>

                <h3 className="text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Limites de Uso</h3>
                <p className="mb-4">Alguns itens precisam ser empunhados para serem usados. Você pode empunhar apenas um item em cada mão, ou seja, pode empunhar no máximo dois itens ao mesmo tempo. Você pode guardar um item empunhado com uma ação de movimento ou largá-lo no chão com uma ação livre.</p>
                <p className="mb-6">Itens que não são empunhados precisam ser vestidos. Você pode receber os benefícios de no máximo quatro itens vestidos simultaneamente. Vestir ou despir um item é uma ação de movimento (e você ainda precisa gastar outra ação de movimento para guardá-lo ou uma ação livre para largá-lo no chão). Note que esse limite se aplica apenas a itens com benefícios mecânicos.</p>

                <h3 className="text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Limites de Carga</h3>
                <p className="mb-4">A quantidade de equipamento que você pode carregar é medida em espaços de itens. Por padrão, um item ocupa 1 espaço, porém, há exceções:</p>
                
                {/* Bloco formatado para os limites de carga */}
                <div className="p-5 md:p-6 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 shadow-sm border-l-4 border-l-red-800 mb-6">
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

            </div>
          </div>
        </div>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-16 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-6 flex items-center gap-3 tracking-wide">
                <span className="text-red-800 text-3xl">❖</span> Categorias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {equipmentCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
        
      </main>

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