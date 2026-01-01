import Link from "next/link";
import { attributes } from "@/data/attributes";

export default function AtributosBasicosPage() {
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
                <span className="text-amber-700">Atributos Básicos</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução */}
        <div className="mb-12 w-full">
          <h2 className="text-5xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-4">
            Atributos Básicos
          </h2>
          
          <div className="p-8 rounded bg-stone-900 border border-stone-800 shadow-inner relative overflow-hidden">
             {/* Decorative element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-900/50"></div>
            
            <p className="text-stone-300 leading-relaxed text-lg mb-4 font-serif">
              Todo personagem tem seis atributos, que definem suas competências básicas: Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma.
            </p>
            <p className="text-stone-400 leading-relaxed text-lg italic border-l-2 border-stone-700 pl-4">
              Atributos são medidos numericamente. Um valor 0 representa a média humana. Valores 1 ou 2 estão acima da média — o lenhador da vila, acostumado a trabalho pesado, pode ter Força nesse intervalo. Valores 3 ou 4 representam pessoas extraordinárias — o conselheiro real, que leu todos os livros da biblioteca do castelo, pode ter Inteligência nessa faixa. Valores 5 ou mais representam indivíduos heroicos. Já valores negativos estão abaixo da média. Uma criança pode ter Força –1, enquanto um ancião de saúde muito frágil pode ter Constituição –2.
            </p>
          </div>
        </div>

        {/* Grid de Atributos */}
        <div className="mb-20 w-full">
          <h3 className="text-3xl font-bold text-stone-200 mb-8 flex items-center gap-3">
             <span className="text-amber-600">❖</span> Os Seis Atributos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {attributes.map((attr) => (
              <div
                key={attr.id}
                className="group relative overflow-hidden rounded bg-stone-900 border border-stone-800 hover:border-amber-700/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.6)] p-6 hover:-translate-y-1"
              >
                {/* Ícone e Nome */}
                <div className="mb-4 flex justify-between items-start border-b border-stone-800 pb-2">
                  <h4 className="text-2xl font-bold text-stone-200 group-hover:text-amber-500 transition-colors">
                    {attr.name}
                  </h4>
                  <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-stone-950 border border-stone-700 group-hover:border-amber-600 transition-colors">
                    <span className="text-amber-600 font-bold text-sm tracking-tighter">
                        {attr.abbreviation}
                    </span>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-stone-400 leading-relaxed text-base font-serif">
                  {attr.description}
                </p>

                {/* Efeito de brilho/canto no hover */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Glow suave */}
                <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/5 pointer-events-none transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Definição de Status */}
        <div className="space-y-12 w-full">
          
          {/* Introdução */}
          <div className="p-8 rounded bg-gradient-to-r from-stone-900 to-stone-950 border-y border-stone-800">
            <h3 className="text-3xl font-bold text-amber-600 mb-4 uppercase tracking-widest">Definindo seus atributos</h3>
            <p className="text-stone-300 leading-relaxed text-xl">
              Há duas maneiras de definir seus atributos: com pontos ou com rolagens. Escolha a que preferir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {/* Método de Pontos */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-stone-200 border-l-4 border-red-700 pl-3">Pontos</h4>
                <div className="p-6 rounded bg-stone-900/50 border border-stone-800 h-full">
                  <p className="text-stone-400 leading-relaxed mb-4">
                    Você começa com todos os atributos em 0 e recebe 10 pontos para aumentá-los. O custo para aumentar cada atributo está descrito na tabela abaixo. Você também pode reduzir um atributo para –1 para receber 1 ponto adicional.
                  </p>
                </div>
              </div>

              {/* Método de Rolagens */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-stone-200 border-l-4 border-amber-600 pl-3">Rolagens</h4>
                <div className="p-6 rounded bg-stone-900/50 border border-stone-800 h-full">
                  <p className="text-stone-400 leading-relaxed mb-4">
                      Role 4d6, descarte o menor e some os outros três. Anote o resultado. Repita esse processo cinco vezes, até obter um total de seis números. Então, converta esses números em atributos conforme a tabela abaixo. 
                  </p>
                  <p className="text-stone-500 italic text-sm bg-black/20 p-3 rounded border border-stone-800/50">
                    Por exemplo, se você rolar 13, 8, 15, 18, 10 e 9, seus atributos serão 1, –1, 2, 4, 0 e –1. Distribua esses valores entre os seis atributos como quiser. Caso seus atributos não somem pelo menos 6, role novamente o menor valor. Repita esse processo até seus atributos somarem 6 ou mais.
                  </p>
                </div>
              </div>
          </div>

          {/* Atributo Mínimo */}
          <div className="space-y-4 w-full">
            <h4 className="text-2xl font-bold text-red-700 mt-8 flex items-center gap-2">
                <span className="text-sm">⚠</span> Atributo Mínimo
            </h4>
            <div className="p-6 rounded bg-red-950/10 border border-red-900/20 mb-6">
              <p className="text-stone-300 leading-relaxed">
                Um valor menor que –5 em um atributo gera um efeito: For ou Des (paralisado), Con (morre), Int ou Sab (inconsciente), Car (torna-se um NPC). Isso ignora imunidades.
              </p>
            </div>

            {/* Tabela de Atributo Mínimo */}
            <div className="overflow-x-auto rounded border border-stone-800 shadow-xl w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-900 border-b border-stone-700">
                    <th className="px-6 py-4 text-amber-600 font-bold uppercase tracking-wider text-sm">Atributo</th>
                    <th className="px-6 py-4 text-center text-amber-600 font-bold uppercase tracking-wider text-sm">Custo</th>
                    <th className="px-6 py-4 text-center text-amber-600 font-bold uppercase tracking-wider text-sm">Rolagem (4d6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 bg-stone-950">
                  <tr className="hover:bg-stone-900/50 transition-colors">
                    <td className="px-6 py-4 text-stone-300 font-bold">-2</td>
                    <td className="px-6 py-4 text-center text-stone-500">—</td>
                    <td className="px-6 py-4 text-center text-stone-500">7 ou menos</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors">
                    <td className="px-6 py-4 text-stone-300 font-bold">-1</td>
                    <td className="px-6 py-4 text-center text-red-500 font-medium">-1 ponto</td>
                    <td className="px-6 py-4 text-center text-stone-400">8-9</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors bg-stone-900/30">
                    <td className="px-6 py-4 text-stone-300 font-bold">0</td>
                    <td className="px-6 py-4 text-center text-stone-400">0 ponto</td>
                    <td className="px-6 py-4 text-center text-stone-400">10-11</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors">
                    <td className="px-6 py-4 text-stone-300 font-bold">1</td>
                    <td className="px-6 py-4 text-center text-amber-500">1 ponto</td>
                    <td className="px-6 py-4 text-center text-stone-400">12-13</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors">
                    <td className="px-6 py-4 text-stone-300 font-bold">2</td>
                    <td className="px-6 py-4 text-center text-amber-500">2 pontos</td>
                    <td className="px-6 py-4 text-center text-amber-600">14-15</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors">
                    <td className="px-6 py-4 text-stone-300 font-bold">3</td>
                    <td className="px-6 py-4 text-center text-amber-500">4 pontos</td>
                    <td className="px-6 py-4 text-center text-amber-600">16-17</td>
                  </tr>
                  <tr className="hover:bg-stone-900/50 transition-colors bg-amber-900/10">
                    <td className="px-6 py-4 text-stone-200 font-bold">4</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold">7 pontos</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold">18</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-500 text-sm mt-4 italic text-center w-full">
              A tabela acima mostra a relação entre o valor do atributo, seu custo em pontos, 
              o resultado esperado em uma rolagem 4d6.
            </p>
          </div>

          {/* Dica Final */}
          <div className="p-6 rounded bg-stone-900 border border-amber-800/30 shadow-lg w-full">
            <h4 className="text-xl font-bold text-amber-500 mb-3 flex items-center gap-2">
                <span>💡</span> Dica do Mestre
            </h4>
            <p className="text-stone-300 leading-relaxed">
              Independentemente do método escolhido, lembre-se de que seus atributos podem ser aumentados 
              conforme você sobe de nível. Escolha valores que façam sentido para o 
              conceito do seu personagem, não apenas os números mais altos!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}