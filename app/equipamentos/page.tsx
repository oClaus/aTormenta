"use client";

import Link from "next/link";
import {
  initialMoneyTable,
  equipmentCategories,
} from "@/data/equipamentos"; // equipmentIntroText foi removido
import { InitialMoneyEntry, EquipmentCategory } from "@/types/equipment";

// Componente para renderizar a Tabela de Dinheiro Inicial (Inalterado)
const InitialMoneyTable = ({ data }: { data: InitialMoneyEntry[] }) => {
  // Divide a tabela em duas colunas para o layout compacto
  const half = Math.ceil(data.length / 2);
  const col1 = data.slice(0, half);
  const col2 = data.slice(half);

  const renderTableBody = (columnData: InitialMoneyEntry[]) => (
    <tbody className="divide-y divide-gray-700/50">
      {columnData.map((row, index) => (
        <tr key={row.level} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50"}>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-yellow-300">
            {row.level}
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">
            {row.money}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="shadow-lg rounded-xl border border-yellow-500/30 overflow-hidden">
      <div className="flex">
        {/* Coluna 1 */}
        <table className="min-w-1/2 divide-y divide-yellow-500/30 w-1/2">
          <thead className="bg-yellow-900/70 text-yellow-200">
            <tr>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Nível
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Dinheiro Inicial (T$)
              </th>
            </tr>
          </thead>
          {renderTableBody(col1)}
        </table>
        {/* Coluna 2 */}
        <table className="min-w-1/2 divide-y divide-yellow-500/30 w-1/2">
          <thead className="bg-yellow-900/70 text-yellow-200">
            <tr>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Nível
              </th>
              <th scope="col" className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">
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

// Componente para o Card de Categoria (Grid) - Inalterado
const CategoryCard = ({ category }: { category: EquipmentCategory }) => (
  <Link
    href={category.href}
    className={`group relative rounded-xl overflow-hidden bg-gradient-to-br ${category.color}/40 border border-yellow-500/20 p-6 hover:border-yellow-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 text-left`}
  >
    <div className="text-4xl mb-3">{category.icon}</div>
    <h3 className="text-2xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-200 transition-colors">
      {category.title}
    </h3>
    <p className="text-gray-400 text-sm line-clamp-3">
      {category.description}
    </p>
  </Link>
);


export default function EquipamentosPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
          ← Voltar ao Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
          💰 Equipamentos
        </h1>
        <p className="text-gray-400 text-lg">
          Tudo que um aventureiro precisa para sobreviver em Arton.
        </p>
      </div>

      {/* Seção de Texto Introdutório (AGORA DIRETO NO COMPONENTE) */}
      <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-yellow-500/20">
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Espadas afiadas e armaduras resplandecentes. Símbolos sagrados e tomos ancestrais. Ou simplesmente um bom prato de comida!
            Aventureiros precisam de diversos equipamentos em suas missões. Este capítulo descreve os itens e serviços mundanos encontrados em Arton.
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 pt-4">Equipamento Inicial</h2>
          <p>
            Personagens de 1º nível começam com os itens fornecidos pela sua origem e os itens a seguir.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              Uma mochila, um saco de dormir e um traje de viajante.
            </li>
            <li>
              Uma arma simples à sua escolha. Se você tiver proficiência com armas marciais, também começa com uma arma marcial à sua escolha.
            </li>
            <li>
              Uma armadura de couro, couro batido ou gibão de peles, à sua escolha. Se você tiver proficiência com armaduras pesadas, em vez disso pode começar com uma brunea. Se tiver proficiência com escudos, começa também com um escudo leve. Exceção: arcanistas começam sem armadura.
            </li>
            <li>
              T$ 4d6, que você pode usar para comprar itens ou guardar para usar na aventura.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-yellow-400 pt-4">Personagens de Alto Nível</h2>
          <p>
            Personagens acima do 1º nível começam com mais dinheiro, conforme a tabela abaixo.
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 pt-4">Riqueza & Moedas</h2>
          <p>
            O <strong>Tibar (T$)</strong> é a moeda padrão do Reinado. Trata-se de uma peça redonda de prata com 1,5 cm de diâmetro. A cunhagem traz em um lado o rosto de <strong>Tibar, o Deus do Comércio</strong> — um rei com cabelos encaracolados e uma joia em forma de olho na coroa; e no outro lado o mesmo rosto, mas sem a coroa. Em Arton, ao jogar “cara ou coroa”, o costume é escolher “coroa ou não coroa”.
          </p>
          <p>
            A moeda foi criada por <strong>Quindogar Tolliannor</strong>, primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão popular que Tollianor passou a ser conhecido pelo nome de sua criação e ascendeu como <strong>Deus Menor do Comércio</strong>. Acredita-se que manter um <strong>Tibar</strong> no bolso ou no pescoço (como um amuleto) garante boa fortuna.
          </p>
          <p>
            Nem todos os reinos seguem o padrão do Tibar. Em alguns lugares, devido à escassez de prata, o <strong>Tibar de cobre (TC)</strong> é usado como moeda padrão. Em outros, o valor do Tibar pode apresentar flutuações. Por padrão, todos os preços de itens e serviços são exibidos em T$. Entretanto, existem duas variações da moeda: o <strong>Tibar de cobre (TC)</strong>, que vale <strong>um décimo do T$</strong>, utilizado por camponeses e plebeus, e o <strong>Tibar de Ouro (TO)</strong>, que vale <strong>T$ 10</strong>, utilizado por aristocratas, grandes mercadores e aventureiros poderosos.
          </p>
        </div>
      </section>

      {/* Seção da Tabela de Dinheiro Inicial */}
      <section className="mb-12">
        <InitialMoneyTable data={initialMoneyTable} />
      </section>

      {/* Grid de Categorias de Equipamentos */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Categorias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipmentCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
    </main>
  );
}