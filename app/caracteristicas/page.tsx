"use client";

import Link from "next/link";
import {
  creatureSizeTable,
  creatureSizeTableFootnote,
} from "@/data/caracteristicas";

export default function CaracteristicasPage() {
    

  return (
    
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Características</span>
        </div>
      </header>
      

      {/* Main Content */}
        {/* Título e Introdução */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Pontos de Vida • PV</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">Pontos de vida são uma medida de seu vigor físico, tolerância a dor e experiência em combate. Eles indicam a quantidade de dano que você pode sofrer antes de cair inconsciente. Enquanto tiver pelo menos 1 ponto de vida, você pode agir e lutar normalmente. Se ficar com 0 ou menos PV, você cai inconsciente e sangrando.</p>
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Pontos de Mana • PM</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">Pontos de mana são uma medida de sua energia, determinação e força interior. Eles indicam quantas habilidades você consegue usar. Você não pode gastar mais pontos de mana do que tem, mas não sofre penalidades por ficar com 0 ou menos PM.</p>
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Recuperando PV e PM</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">Com uma noite de descanso (pelo menos oito horas de sono), você recupera PV e PM de acordo com seu nível e condições de descanso.</p>
            <p className="text-gray-400 leading-relaxed text-lg"> - Ruim: Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim.</p>
            <p className="text-gray-400 leading-relaxed text-lg"> - Normal: Recuperação igual ao nível. Dormir em uma estalagem comum constitui condição normal.</p>
            <p className="text-gray-400 leading-relaxed text-lg"> - Confortável: Recuperação igual ao dobro do nível.</p>
            <p className="text-gray-400 leading-relaxed text-lg"> - Luxuosa: Recuperação igual ao triplo do nível.Exemplo: Helior, elfo caçador de 7º nível, recupera 7 PV e 7 PM com uma noite de sono numa estalagem. Mas, como vive com o pé na estrada, dormindo ao relento, se acostumou a recuperar apenas 3 PV e 3 PM.</p>
            <p className="text-gray-400 leading-relaxed text-lg"> Certas habilidades, magias e itens também recuperam PV e PM. Você nunca pode recuperar mais pontos de vida ou mana do que perdeu — ou seja, não pode ultrapassar seu máximo.</p>
          </div>

          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Pontos Temporários</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">Certos efeitos fornecem PV ou PM temporários. Eles são somados a seus pontos atuais, mesmo que ultrapassem o máximo. Pontos temporários são sempre os primeiros a serem gastos. Caso não seja especificado o contrário, pontos temporários desaparecem no fim do dia.</p>
          </div>

          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Defesa</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">A Defesa representa o quão difícil é acertá-lo em combate. Sua Defesa é: 10 + sua Destreza + seu bônus de armadura e escudo. Quando você ataca um inimigo, a CD do seu teste de ataque é à Defesa dele.</p>
          </div>

          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">Tamanho</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-400 leading-relaxed text-lg">O tamanho de uma criatura é classificado em seis categorias: Minúsculo, Pequeno, Médio, Grande, Enorme e Colossal. Por padrão, seu tamanho é Médio, mas sua raça pode alterar isso. Criaturas menores recebem bônus em Furtividade e penalidade em manobras de combate. Para criaturas maiores, esses bônus e penalidades são invertidos. Criaturas Minúsculas usam armas reduzidas, que causam um passo a menos de dano. Criaturas Grandes e Enormes usam armas aumentadas, que causam um passo a mais de dano, e criaturas Colossais usam armas gigantes, que causam dois passos a mais de dano. Uma criatura pode usar uma arma feita para até uma categoria de tamanho maior ou menor que a dela, mas sofre –5 nos testes de ataque e a arma ocupa um espaço a mais ou a menos, respectivamente (mínimo meio espaço).</p>
          </div>
        </div>

      {/* Seção da Tabela (Renderização Direta) */}
      <section className="mb-12">
        <div className="overflow-x-auto shadow-lg rounded-xl border border-purple-500/30">
            <table className="min-w-full divide-y divide-purple-500/30">
            <caption className="p-4 text-xl font-bold text-purple-300 bg-purple-900/50 rounded-t-xl">
                Tabela Tamanho de Criaturas
            </caption>
            <thead className="bg-purple-900/70 text-purple-200">
                <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Categoria de Tamanho
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Exemplos
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Espaço Ocupado / Alcance Natural
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Modificador de Furtividade / Manobras
                </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-purple-500/20">
                {creatureSizeTable.map((row, index) => (
                <tr key={row.category} className={index % 2 === 0 ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-700/50 transition-colors"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-300">
                    {row.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {row.examples}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {row.spaceAndReach}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {row.stealthAndManeuverModifier}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            <p className="p-4 text-xs text-gray-400 bg-purple-900/50 rounded-b-xl">
                {creatureSizeTableFootnote}
            </p>
        </div>

        
      </section>

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Deslocamento
        </h1>
        <p className="text-gray-400 text-lg">
          Sua velocidade, medida em quantos metros você anda com uma ação de movimento. Por padrão, seu deslocamento é 9 metros (6 quadrados no mapa), mas algumas habilidades podem mudar esse valor.
        </p>
      </div>

    </main>

    
  );
}