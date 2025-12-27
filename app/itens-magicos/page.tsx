"use client";

import Link from "next/link";
import { equipmentCategories } from "@/data/itensmagicos"; // Ajustei a importação (vírgula extra removida)
import { EquipmentCategory } from "@/types/magicitens";

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
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-white-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Itens Mágicos</span>
        </div>
      </header>
      
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4 ">Itens Mágicos</h1>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipmentCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-yellow-500/20">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
            <p>Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>
            <p>Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.</p>
            <p>Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>

            <h2 className="text-3xl font-bold text-yellow-400 pt-4">Usando Itens mágicos</h2>
            <p>Itens mundanos e mágicos seguem as mesmas regras para acúmulo de bônus e limites de uso e carga. Assim, se um item mundano e um item mágico fornecem um bônus na mesma característica, eles não se acumulam — use apenas o melhor. Da mesma forma, um personagem vestindo dois itens mundanos e dois itens mágicos não receberá os benefícios de um quinto item vestido.</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Limites de Carga.</strong> Itens mágicos ocupam espaço como itens mundanos. Uma espada longa flamejante, por exemplo, ocupa 1 espaço — o mesmo que uma espada longa mundana. Acessórios ocupam 1 espaço, a menos que sua descrição indique o contrário. Poções e pergaminhos ocupam meio espaço.</li>
              <li><strong>Ativação e Testes.</strong> Para itens mágicos com habilidades ativadas, você precisa primeiro identificá-los (veja a seguir). A menos que sua descrição diga o contrário, ativar um item mágico é uma ação padrão. Para itens com efeitos que exigem teste de resistência, o atributo usado para definir a CD é indicado na descrição do item (para poções e pergaminhos, é Inteligência, Sabedoria ou Carisma, a escolha do usuário).</li>
              <li><strong>Itens que lançam magias.</strong> Lançar magias a partir de itens não exige pronunciar palavras mágicas, gesticular ou se concentrar, e magias arcanas lançadas por meio de itens não sofrem limitação pelo uso de armadura. Você pode usar aprimoramentos, mas precisa pagar por eles.</li>
              <li><strong>Identificando Itens mágicos.</strong> Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições indicando o que podem fazer; essas podem ser mágicas, mudando para um idioma que você saiba ler, ou exigir fluência em línguas exóticas (veja a perícia Conhecimento). Outros podem não trazer qualquer pista sobre seu funcionamento. Nesse caso, os poderes só ficam claros se você identificar o item. Para isso, use a perícia Misticismo — ou a velha tentativa e erro. Você pode subir naquela vassoura velha e saltar da janela. Se for uma vassoura voadora, você sairá voando. Se não for...</li>
            </ul>

            <h2 className="text-3xl font-bold text-yellow-400 pt-4">Fabricando itens mágicos</h2>
            <p>Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>

            <h2 className="text-3xl font-bold text-yellow-400 pt-4">Itens de uso único</h2>
            <p>Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>
            <p><strong>Magia de 1º círculo (1 PM): </strong>preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</p>
            <p><strong>Magia de 3º círculo (6 PM): </strong>preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</p>
            <p>Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>

            <h3 className="text-2xl font-bold text-yellow-400 pt-4">Itens Permanentes</h3>
            <p>Armas e armaduras mágicas podem ser encantadas ou específicas. Acessórios são sempre específicos.</p>
            <ul className="list-disc list-inside ml-4 space-y-4">
              <li>
                <strong>Itens Encantados.</strong> Funcionam como itens superiores — mas, em vez de melhorias, possuem encantos. Um item mágico menor possui um encanto, um médio possui dois e um item mágico maior possui três encantos. O preço e a CD do teste de Ofício aumentam de acordo com o número de encantos (veja a tabela abaixo). Bônus por encantos não se acumulam. Um mesmo item pode ser superior e encantado. Some os modificadores de preço e CD no teste de Ofício, e os bônus fornecidos por melhorias e encantos para determinar o bônus do item. Assim, uma espada longa com um encanto tem preço de T$ 18.015. Fabricá-la exige um gasto de T$ 6.005 e um teste de Ofício contra CD 30. Já uma espada longa com quatro melhorias e três encantos (o máximo possível) tem preço de T$ 90.015 (T$ 15 da espada + T$ 18.000 das quatro melhorias, mais T$ 72.000 dos três encantos). Fabricá-la exige um gasto de T$ 30.005 e um teste de Ofício contra CD 60. Apenas os maiores armeiros são capazes de forjar uma arma dessas!
                
                {/* --- INÍCIO DA TABELA INSERIDA --- */}
                <div className="my-6 max-w-lg mx-auto bg-gray-900/80 rounded-lg border border-yellow-600/30 overflow-hidden shadow-lg shadow-black/40">
                  <div className="bg-yellow-900/30 py-2 border-b border-yellow-600/30">
                     <h4 className="text-lg font-bold text-center text-yellow-500 font-serif tracking-wide">PREÇO DE ENCANTOS</h4>
                  </div>
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-black/40 text-yellow-200 text-sm uppercase">
                        <th className="py-3 px-2 font-semibold">Número<br/>de Encantos</th>
                        <th className="py-3 px-2 font-semibold">Aumento<br/>no Preço</th>
                        <th className="py-3 px-2 font-semibold">Aumento<br/>na CD</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-200">
                      <tr className="border-t border-yellow-600/10 hover:bg-yellow-600/10 transition-colors">
                        <td className="py-3 font-medium">1</td>
                        <td className="py-3">+ T$ 18.000</td>
                        <td className="py-3">+10</td>
                      </tr>
                      <tr className="border-t border-yellow-600/10 hover:bg-yellow-600/10 transition-colors bg-white/5">
                        <td className="py-3 font-medium">2</td>
                        <td className="py-3">+ T$ 36.000</td>
                        <td className="py-3">+15</td>
                      </tr>
                      <tr className="border-t border-yellow-600/10 hover:bg-yellow-600/10 transition-colors">
                        <td className="py-3 font-medium">3</td>
                        <td className="py-3">+ T$ 72.000</td>
                        <td className="py-3">+20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* --- FIM DA TABELA INSERIDA --- */}
              </li>

              <li><strong>Itens Específicos.</strong> Usam as regras de fabricação de itens de Ofício. O preço de cada item aparece nas tabelas a seguir. A CD do teste de Ofício é dada pela categoria do item: CD 30 para itens menores, CD 40 para médios e CD 50 para itens maiores. Por fim, a perícia usada é determinada pelo tipo de item: Ofício (armeiro) para armas e armaduras e Ofício (artesão) para acessórios. De acordo com o mestre, outros Ofícios podem ser usados para itens específicos — como Ofício (joalheiro) para um anel. Itens específicos não podem receber encantos. Todas as armas e armaduras específicas deste livro são itens maiores.</li>
              <li><strong>Custo em Pontos de Mana.</strong> Para fabricar um item mágico permanente, o personagem deve sacrificar certa quantidade de pontos de mana: 1 PM para itens menores, 2 PM para médios e 3 PM para itens maiores. É essa essência que irá energizar o item. Os pontos de mana são perdidos para sempre. Contudo, caso o personagem destrua um item mágico permanente que criou, recupera os PM sacrificados naquele item. De acordo com o mestre, outras coisas podem ser sacrificadas no lugar de pontos de mana, como ingredientes raros. Porém, encontrar um ingrediente desses é sempre uma tarefa difícil — talvez o objetivo de uma aventura!</li>
            </ul>

            <h3 className="text-3xl font-bold text-yellow-400 pt-4">Destruindo Itens mágicos</h3>
            <p>Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
            <p>Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O valor depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu valor ou o do portador.</p>

          </div>
        </section>
      </div>
    </main>
  );
}