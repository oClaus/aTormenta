"use client";

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
    <tbody className="divide-y divide-stone-800">
      {columnData.map((row, index) => (
        <tr key={row.level} className={index % 2 === 0 ? "bg-stone-900/40" : "bg-stone-900/70"}>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-amber-600 border-r border-stone-800 text-center">
            {row.level}º
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-stone-300 font-serif text-right pr-8">
            {row.money}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="shadow-xl rounded border border-stone-800 overflow-hidden bg-stone-950">
      <div className="flex flex-col md:flex-row">
        {/* Coluna 1 */}
        <table className="w-full md:w-1/2 divide-y divide-stone-800 border-b md:border-b-0 md:border-r border-stone-800">
          <thead className="bg-stone-900 border-b border-stone-800 text-stone-500">
            <tr>
              <th scope="col" className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                Nível
              </th>
              <th scope="col" className="px-4 py-3 text-right pr-8 text-xs font-bold uppercase tracking-wider">
                Dinheiro Inicial (T$)
              </th>
            </tr>
          </thead>
          {renderTableBody(col1)}
        </table>
        {/* Coluna 2 */}
        <table className="w-full md:w-1/2 divide-y divide-stone-800">
          <thead className="bg-stone-900 border-b border-stone-800 text-stone-500">
            <tr>
              <th scope="col" className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                Nível
              </th>
              <th scope="col" className="px-4 py-3 text-right pr-8 text-xs font-bold uppercase tracking-wider">
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
const CategoryCard = ({ category }: { category: EquipmentCategory }) => (
  <Link
    href={category.href}
    className={`group relative rounded bg-stone-900 border border-stone-800 p-6 hover:border-amber-700/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-left hover:-translate-y-1`}
  >
    <div className="text-4xl mb-3 text-stone-400 group-hover:text-amber-500 transition-colors">{category.icon}</div>
    <h3 className="text-2xl font-bold text-stone-200 mb-2 group-hover:text-amber-500 transition-colors font-serif">
      {category.title}
    </h3>
    <p className="text-stone-400 text-sm line-clamp-3 font-serif leading-relaxed">
      {category.description}
    </p>
    
    {/* Detalhes de Canto */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stone-700 opacity-0 group-hover:border-amber-600 group-hover:opacity-100 transition-all"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-700 opacity-0 group-hover:border-amber-600 group-hover:opacity-100 transition-all"></div>
  </Link>
);


export default function EquipamentosPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - 100% Width */}
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
                <span className="text-amber-700">Equipamentos</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Header da Página */}
        <div className="mb-12 w-full">
            <h1 className="text-5xl font-bold text-amber-700 mb-8 border-b border-stone-800 pb-4">
            Equipamentos
            </h1>

            {/* Grid de Categorias de Equipamentos */}
            <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold text-stone-200 mb-6 flex items-center gap-2">
                <span className="text-amber-700">❖</span> Categorias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {equipmentCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
                ))}
            </div>
            </section>

            <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <div className="space-y-6 text-stone-300 leading-relaxed text-lg font-serif">
                <p>
                Espadas afiadas e armaduras resplandecentes. Símbolos sagrados e tomos ancestrais. Ou simplesmente um bom prato de comida!
                Aventureiros precisam de diversos equipamentos em suas missões. Este capítulo descreve os itens e serviços mundanos encontrados em Arton.
                </p>

                <h2 className="text-3xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-1">Equipamento Inicial</h2>
                <p>
                Personagens de 1º nível começam com os itens fornecidos pela sua origem e os itens a seguir:
                </p>
                <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                    <span className="text-amber-600">➤</span>
                    <span>Uma mochila, um saco de dormir e um traje de viajante.</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-amber-600">➤</span>
                    <span>Uma arma simples à sua escolha. Se você tiver proficiência com armas marciais, também começa com uma arma marcial à sua escolha.</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-amber-600">➤</span>
                    <span>Uma armadura de couro, couro batido ou gibão de peles, à sua escolha. Se você tiver proficiência com armaduras pesadas, em vez disso pode começar com uma brunea. Se tiver proficiência com escudos, começa também com um escudo leve. Exceção: arcanistas começam sem armadura.</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-amber-600">➤</span>
                    <span>T$ 4d6, que você pode usar para comprar itens ou guardar para usar na aventura.</span>
                </li>
                </ul>

                <h2 className="text-3xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-1">Personagens de Alto Nível</h2>
                <p>
                Personagens acima do 1º nível começam com mais dinheiro, conforme a tabela abaixo.
                </p>

                {/* Seção da Tabela de Dinheiro Inicial */}
                <section className="mb-12 max-w-4xl">
                <InitialMoneyTable data={initialMoneyTable} />
                </section>

                <h2 className="text-3xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-1">Riqueza & Moedas</h2>
                <p>
                O <strong className="text-stone-100">Tibar (T$)</strong> é a moeda padrão do Reinado. Trata-se de uma peça redonda de prata com 1,5 cm de diâmetro. A cunhagem traz em um lado o rosto de <strong className="text-amber-600">Tibar, o Deus do Comércio</strong> — um rei com cabelos encaracolados e uma joia em forma de olho na coroa; e no outro lado o mesmo rosto, mas sem a coroa. Em Arton, ao jogar “cara ou coroa”, o costume é escolher “coroa ou não coroa”.
                </p>
                <p>
                A moeda foi criada por <strong className="text-stone-100">Quindogar Tolliannor</strong>, primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão popular que Tollianor passou a ser conhecido pelo nome de sua criação e ascendeu como <strong className="text-amber-600">Deus Menor do Comércio</strong>. Acredita-se que manter um <strong className="text-stone-100">Tibar</strong> no bolso ou no pescoço (como um amuleto) garante boa fortuna.
                </p>
                <p>
                Nem todos os reinos seguem o padrão do Tibar. Em alguns lugares, devido à escassez de prata, o <strong className="text-stone-100">Tibar de cobre (TC)</strong> é usado como moeda padrão. Em outros, o valor do Tibar pode apresentar flutuações. Por padrão, todos os preços de itens e serviços são exibidos em T$. Entretanto, existem duas variações da moeda: o <strong className="text-stone-100">Tibar de cobre (TC)</strong>, que vale <strong className="text-red-500">um décimo do T$</strong>, utilizado por camponeses e plebeus, e o <strong className="text-stone-100">Tibar de Ouro (TO)</strong>, que vale <strong className="text-amber-500">T$ 10</strong>, utilizado por aristocratas, grandes mercadores e aventureiros poderosos.
                </p>

                <h3 className="text-2xl font-bold text-amber-700 pt-4 mb-2">Troca & Comércio</h3>
                <p>No Reinado, o comércio é organizado por guildas mercantes. As guildas decidem quem pode vender o quê e o valor dos produtos e serviços que controlam, o que garante um padrão nos preços. Em lugares afastados, ermos ou sob o domínio de tiranos, porém, os preços podem variar muito.</p>
                <p>No geral, personagens podem comprar itens pelos preços listados nas tabelas e vendê-los pela metade desses preços. Em certos lugares, o mestre pode determinar que os itens são mais caros, estão disponíveis em quantidades limitadas ou não estão disponíveis. Comprando ou vendendo, os valores podem ser melhorados através de barganha (veja a perícia Diplomacia).</p>

                <h3 className="text-3xl font-bold text-amber-700 pt-4 border-b border-stone-800 pb-1">Usando & Carregando</h3>
                <p>Equipamento é extremamente útil, mas há um limite de quantos itens você pode usar ou carregar ao mesmo tempo.</p>

                <h3 className="text-2xl font-bold text-amber-700 pt-4 mb-2">Limites de Uso</h3>
                <p>Alguns itens precisam ser empunhados para serem usados. Você pode empunhar apenas um item em cada mão, ou seja, pode empunhar no máximo dois itens ao mesmo tempo. Você pode guardar um item empunhado com uma ação de movimento ou largá-lo no chão com uma ação livre.</p>
                <p>Itens que não são empunhados precisam ser vestidos. Você pode receber os benefícios de no máximo quatro itens vestidos simultaneamente. Vestir ou despir um item é uma ação de movimento (e você ainda precisa gastar outra ação de movimento para guardá-lo ou uma ação livre para largá-lo no chão). Note que esse limite se aplica apenas a itens com benefícios mecânicos.</p>

                <h3 className="text-2xl font-bold text-amber-700 pt-4 mb-2">Limites de Carga</h3>
                <p>A quantidade de equipamento que você pode carregar é medida em espaços de itens. Por padrão, um item ocupa 1 espaço, porém, há exceções:</p>
                <ul className="list-none space-y-2 ml-4 bg-stone-950 p-4 rounded border border-stone-800 text-sm md:text-lg">
                <li className="flex items-start gap-2"><span className="text-stone-500">•</span> Itens muito leves ou pequenos (alquímicos, poções, pergaminhos) ocupam meio espaço.</li>
                <li className="flex items-start gap-2"><span className="text-stone-500">•</span> Armas de duas mãos, armaduras leves, escudos pesados e criaturas Minúsculas ocupam 2 espaços.</li>
                <li className="flex items-start gap-2"><span className="text-stone-500">•</span> Armaduras pesadas, criaturas Pequenas e outros itens muito pesados ou volumosos (barril ou baú) ocupam 5 espaços.</li>
                <li className="flex items-start gap-2"><span className="text-stone-500">•</span> Itens extremamente pesados ou volumosos (criatura Média) ocupam 10 espaços.</li>
                <li className="flex items-start gap-2"><span className="text-stone-500">•</span> Cada mil moedas, independentemente do tipo, ocupam 1 espaço.</li>
                </ul>
                <p>Você pode carregar 10 espaços +2 por ponto de Força (ou –1 por ponto de Força negativo). Se ultrapassar esse limite, fica sobrecarregado — sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m. Você não pode carregar mais do que o dobro do seu limite.</p>
                <p>A regra considera que você possui uma mochila onde carregar seu equipamento. A própria mochila não ocupa espaço. De forma similar, recipientes cuja única função seja carregar outros itens não ocupam espaço. Por fim, pequenos itens que não possuem efeito em jogo (cosméticos) não precisam ser considerados.</p>
            </div>
            </section>
        </div>
        
      </main>
       {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}