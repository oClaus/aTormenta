import Link from "next/link";
import { attributes } from "@/data/attributes";

export default function AtributosBasicosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
          <span className="text-gray-400 text-sm">Atributos Básicos</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        {/* Título e Introdução */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Atributos Básicos</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-black border border-blue-900/30">
            <p className="text-gray-300 leading-relaxed text-lg">
              Todo personagem tem seis atributos, que definem suas competências básicas: Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Atributos são medidos numericamente. Um valor 0 representa a média humana. Valores 1 ou 2 estão acima da média — o lenhador da vila, acostumado a trabalho pesado, pode ter Força nesse intervalo. Valores 3 ou 4 representam pessoas extraordinárias — o conselheiro real, que leu todos os livros da biblioteca do castelo, pode ter Inteligência nessa faixa. Valores 5 ou mais representam indivíduos heroicos. Já valores negativos estão abaixo da média. Uma criança pode ter Força –1, enquanto um ancião de saúde muito frágil pode ter Constituição –2.
            </p>
          </div>
        </div>

        {/* Grid de Atributos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-300 mb-8">Os Seis Atributos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attributes.map((attr) => (
              <div
                key={attr.id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] p-6"
              >
                {/* Ícone e Nome */}
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {attr.name}
                  </h4>
                  <p className="text-blue-400 font-semibold text-sm">
                    <span className="text-blue-300">{attr.abbreviation}</span>
                  </p>
                </div>

                {/* Descrição */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  {attr.description}
                </p>

                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Definição de Status */}
        <div className="space-y-12">
          {/* Introdução */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/30">
            <h3 className="text-3xl font-bold text-purple-300 mb-4">Definindo seus atributos</h3>
            <p className="text-gray-300 leading-relaxed">
              Há duas maneiras de definir seus atributos: com pontos ou com rolagens. Escolha a que preferir.
            </p>
          </div>

          {/* Método de Pontos */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-blue-400">Pontos</h4>
            <div className="p-6 rounded-xl bg-blue-950/20 border border-blue-900/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Você começa com todos os atributos em 0 e recebe 10 pontos para aumentá-los. O custo para aumentar cada atributo está descrito na tabela abaixo. Você também pode reduzir um atributo para –1 para receber 1 ponto adicional.
              </p>
            </div>
          </div>

          {/* Método de Rolagens */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-green-400">Rolagens</h4>
            <div className="p-6 rounded-xl bg-green-950/20 border border-green-900/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                 Role 4d6, descarte o menor e some os outros três. Anote o resultado. Repita esse processo cinco vezes, até obter um total de seis números. Então, converta esses números em atributos conforme a tabela abaixo. 
              </p>
              <p className="text-gray-400 italic">
                Por exemplo, se você rolar 13, 8, 15, 18, 10 e 9, seus atributos serão 1, –1, 2, 4, 0 e –1. Distribua esses valores entre os seis atributos como quiser. Caso seus atributos não somem pelo menos 6, role novamente o menor valor. Repita esse processo até seus atributos somarem 6 ou mais.
              </p>
            </div>
          </div>

          {/* Atributo Mínimo */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-yellow-400">Atributo Mínimo</h4>
            <div className="p-6 rounded-xl bg-yellow-950/20 border border-yellow-900/30 mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Um valor menor que –5 em um atributo gera um efeito: For ou Des (paralisado), Con (morre), Int ou Sab (inconsciente), Car (torna-se um NPC). Isso ignora imunidades.
              </p>
            </div>

            {/* Tabela de Atributo Mínimo */}
            <div className="overflow-x-auto rounded-xl border border-yellow-900/30">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-950/40 border-b border-yellow-900/30">
                    <th className="px-6 py-3 text-left text-yellow-300 font-bold">Atributo</th>
                    <th className="px-6 py-3 text-center text-yellow-300 font-bold">Custo</th>
                    <th className="px-6 py-3 text-center text-yellow-300 font-bold">Rolagem (4d6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-900/20">
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">-2</td>
                    <td className="px-6 py-3 text-center text-red-400">—</td>
                    <td className="px-6 py-3 text-center text-gray-400">7 ou menos</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">-1</td>
                    <td className="px-6 py-3 text-center text-red-400">-1 ponto</td>
                    <td className="px-6 py-3 text-center text-gray-400">8-9</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">0</td>
                    <td className="px-6 py-3 text-center text-red-400">0 ponto</td>
                    <td className="px-6 py-3 text-center text-gray-400">10-11</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">1</td>
                    <td className="px-6 py-3 text-center text-red-400">1 ponto</td>
                    <td className="px-6 py-3 text-center text-gray-400">12-13</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">2</td>
                    <td className="px-6 py-3 text-center text-yellow-400">2 pontos</td>
                    <td className="px-6 py-3 text-center text-yellow-400">14-15</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">3</td>
                    <td className="px-6 py-3 text-center text-gray-400">4 pontos</td>
                    <td className="px-6 py-3 text-center text-gray-400">16-17</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-yellow-950/20 transition-colors">
                    <td className="px-6 py-3 text-gray-300">4</td>
                    <td className="px-6 py-3 text-center text-green-400">7 pontos</td>
                    <td className="px-6 py-3 text-center text-green-400">18</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 text-sm mt-4 italic">
              A tabela acima mostra a relação entre o valor do atributo, seu custo em pontos, 
              o resultado esperado em uma rolagem 4d6.
            </p>
          </div>

          {/* Dica Final */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-900/30">
            <h4 className="text-xl font-bold text-cyan-300 mb-3">💡 Dica</h4>
            <p className="text-gray-300 leading-relaxed">
              Independentemente do método escolhido, lembre-se de que seus atributos podem ser aumentados 
              conforme você sobe de nível. Escolha valores que façam sentido para o 
              conceito do seu personagem, não apenas os números mais altos!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}