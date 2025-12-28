"use client";

import Link from "next/link";
import { equipmentCategories } from "@/data/itensmagicos";
import { EquipmentCategory } from "@/types/magicitens";

// Componente para o Card de Categoria (Visual Prata/Místico)
const CategoryCard = ({ category }: { category: EquipmentCategory }) => (
  <Link
    href={category.href}
    // Substituída a cor dinâmica por um tema unificado "Mithril" (Slate/Blue-Gray)
    className="group relative rounded-xl overflow-hidden bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(203,213,225,0.15)] text-left h-full flex flex-col"
  >
    {/* Efeito de brilho superior no hover */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="text-4xl mb-3 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        {category.icon}
    </div>
    
    <h3 className="text-2xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
      {category.title}
    </h3>
    
    <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed group-hover:text-slate-300">
      {category.description}
    </p>
  </Link>
);

export default function EquipamentosPage() {
  return (
    // Background Radial Místico e Full Width
    <main className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-black text-gray-200 px-4 sm:px-8 md:px-12 py-8 md:py-12 selection:bg-slate-500 selection:text-white overflow-x-hidden">
      
      {/* Header Estilo Prata */}
      <header className="w-full p-4 md:p-6 border-b border-slate-800/60 backdrop-blur-sm sticky top-0 z-50 bg-black/40 md:bg-black/20 -mx-4 sm:-mx-8 md:-mx-12 px-4 sm:px-8 md:px-12 mb-8 md:mb-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link href="/" className="inline-block group">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-slate-300 to-slate-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                    a-Tormenta
                  </h1>
                </Link>
                
                <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
                    <Link href="/" className="text-slate-500 hover:text-slate-200 transition-colors whitespace-nowrap">
                      Início
                    </Link>
                    <span className="text-slate-700">/</span>
                    <span className="text-slate-300">Itens Mágicos</span>
                </div>
            </div>
        </div>
      </header>
      
      <div className="w-full">
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-8 md:mb-12 drop-shadow-lg leading-tight">
            Itens Mágicos
        </h1>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-slate-200 mb-6 md:mb-8">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-slate-400 rounded-full shadow-[0_0_10px_rgba(148,163,184,0.5)]"></span>
            Categorias
          </h2>
          {/* Grid responsivo expandido para telas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1900px]:grid-cols-6 gap-6">
            {equipmentCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Seção de Texto e Regras (Estilo Metal Escuro) */}
        <section className="mb-12 p-6 md:p-10 bg-black/40 backdrop-blur-md rounded-xl border border-zinc-800 shadow-xl">
          <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
            
            <p>A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
            <p>Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>
            
            <blockquote className="border-l-2 border-slate-500 pl-4 py-2 my-6 italic text-slate-400 bg-slate-800/20 rounded-r-md">
                Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.
            </blockquote>
            
            <p>Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>

            {/* Títulos H2 atualizados para Prata */}
            <h2 className="text-3xl font-bold text-slate-200 pt-6 border-b border-zinc-800 pb-2 inline-block">Usando Itens mágicos</h2>
            <p>Itens mundanos e mágicos seguem as mesmas regras para acúmulo de bônus e limites de uso e carga. Assim, se um item mundano e um item mágico fornecem um bônus na mesma característica, eles não se acumulam — use apenas o melhor. Da mesma forma, um personagem vestindo dois itens mundanos e dois itens mágicos não receberá os benefícios de um quinto item vestido.</p>
            
            <ul className="space-y-4 ml-2 mt-4">
              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Limites de Carga.</strong> Itens mágicos ocupam espaço como itens mundanos. Uma espada longa flamejante, por exemplo, ocupa 1 espaço — o mesmo que uma espada longa mundana. Acessórios ocupam 1 espaço, a menos que sua descrição indique o contrário. Poções e pergaminhos ocupam meio espaço.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Ativação e Testes.</strong> Para itens mágicos com habilidades ativadas, você precisa primeiro identificá-los (veja a seguir). A menos que sua descrição diga o contrário, ativar um item mágico é uma ação padrão. Para itens com efeitos que exigem teste de resistência, o atributo usado para definir a CD é indicado na descrição do item (para poções e pergaminhos, é Inteligência, Sabedoria ou Carisma, a escolha do usuário).
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Itens que lançam magias.</strong> Lançar magias a partir de itens não exige pronunciar palavras mágicas, gesticular ou se concentrar, e magias arcanas lançadas por meio de itens não sofrem limitação pelo uso de armadura. Você pode usar aprimoramentos, mas precisa pagar por eles.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Identificando Itens mágicos.</strong> Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições indicando o que podem fazer; essas podem ser mágicas, mudando para um idioma que você saiba ler, ou exigir fluência em línguas exóticas (veja a perícia Conhecimento). Outros podem não trazer qualquer pista sobre seu funcionamento. Nesse caso, os poderes só ficam claros se você identificar o item. Para isso, use a perícia Misticismo — ou a velha tentativa e erro. Você pode subir naquela vassoura velha e saltar da janela. Se for uma vassoura voadora, você sairá voando. Se não for...
                 </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-200 pt-8 border-b border-zinc-800 pb-2 inline-block">Fabricando itens mágicos</h2>
            <p>Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>

            <h2 className="text-3xl font-bold text-slate-200 pt-8 border-b border-zinc-800 pb-2 inline-block">Itens de uso único</h2>
            <p>Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>
            
            {/* Box de Exemplo Estilizado */}
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 my-4 space-y-2 font-mono text-sm text-slate-400">
                <p><strong className="text-slate-200">Magia de 1º círculo (1 PM): </strong>preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</p>
                <p><strong className="text-slate-200">Magia de 3º círculo (6 PM): </strong>preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</p>
            </div>
            
            <p>Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>

            <h3 className="text-2xl font-bold text-slate-200 pt-6">Itens Permanentes</h3>
            <p>Armas e armaduras mágicas podem ser encantadas ou específicas. Acessórios são sempre específicos.</p>
            
            <ul className="space-y-4 ml-2 mt-4">
              <li className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                    <div>
                        <strong className="text-slate-200">Itens Encantados.</strong> Funcionam como itens superiores — mas, em vez de melhorias, possuem encantos. Um item mágico menor possui um encanto, um médio possui dois e um item mágico maior possui três encantos. O preço e a CD do teste de Ofício aumentam de acordo com o número de encantos (veja a tabela abaixo). Bônus por encantos não se acumulam. Um mesmo item pode ser superior e encantado. Some os modificadores de preço e CD no teste de Ofício, e os bônus fornecidos por melhorias e encantos para determinar o bônus do item. Assim, uma espada longa com um encanto tem preço de T$ 18.015. Fabricá-la exige um gasto de T$ 6.005 e um teste de Ofício contra CD 30. Já uma espada longa com quatro melhorias e três encantos (o máximo possível) tem preço de T$ 90.015 (T$ 15 da espada + T$ 18.000 das quatro melhorias, mais T$ 72.000 dos três encantos). Fabricá-la exige um gasto de T$ 30.005 e um teste de Ofício contra CD 60. Apenas os maiores armeiros são capazes de forjar uma arma dessas!
                    </div>
                </div>
                
                {/* --- TABELA ATUALIZADA (METAL ESCURO) --- */}
                <div className="my-8 max-w-lg mx-auto bg-black/60 rounded-lg border border-zinc-700 overflow-hidden shadow-lg shadow-black/50">
                  <div className="bg-slate-800/80 py-3 border-b border-zinc-600">
                      <h4 className="text-lg font-bold text-center text-slate-200 tracking-wider uppercase">PREÇO DE ENCANTOS</h4>
                  </div>
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-zinc-900/80 text-slate-400 text-xs sm:text-sm uppercase tracking-wide">
                        <th className="py-3 px-2 font-semibold">Número<br/>de Encantos</th>
                        <th className="py-3 px-2 font-semibold">Aumento<br/>no Preço</th>
                        <th className="py-3 px-2 font-semibold">Aumento<br/>na CD</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                        <td className="py-3 font-medium text-white">1</td>
                        <td className="py-3 font-mono text-slate-400">+ T$ 18.000</td>
                        <td className="py-3 text-slate-400">+10</td>
                      </tr>
                      <tr className="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors bg-white/[0.02]">
                        <td className="py-3 font-medium text-white">2</td>
                        <td className="py-3 font-mono text-slate-400">+ T$ 36.000</td>
                        <td className="py-3 text-slate-400">+15</td>
                      </tr>
                      <tr className="border-t border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                        <td className="py-3 font-medium text-white">3</td>
                        <td className="py-3 font-mono text-slate-400">+ T$ 72.000</td>
                        <td className="py-3 text-slate-400">+20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* --- FIM DA TABELA --- */}
              </li>

              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Itens Específicos.</strong> Usam as regras de fabricação de itens de Ofício. O preço de cada item aparece nas tabelas a seguir. A CD do teste de Ofício é dada pela categoria do item: CD 30 para itens menores, CD 40 para médios e CD 50 para itens maiores. Por fim, a perícia usada é determinada pelo tipo de item: Ofício (armeiro) para armas e armaduras e Ofício (artesão) para acessórios. De acordo com o mestre, outros Ofícios podem ser usados para itens específicos — como Ofício (joalheiro) para um anel. Itens específicos não podem receber encantos. Todas as armas e armaduras específicas deste livro são itens maiores.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-slate-500 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-slate-200">Custo em Pontos de Mana.</strong> Para fabricar um item mágico permanente, o personagem deve sacrificar certa quantidade de pontos de mana: 1 PM para itens menores, 2 PM para médios e 3 PM para itens maiores. É essa essência que irá energizar o item. Os pontos de mana são perdidos para sempre. Contudo, caso o personagem destrua um item mágico permanente que criou, recupera os PM sacrificados naquele item. De acordo com o mestre, outras coisas podem ser sacrificadas no lugar de pontos de mana, como ingredientes raros. Porém, encontrar um ingrediente desses é sempre uma tarefa difícil — talvez o objetivo de uma aventura!
                 </div>
              </li>
            </ul>

            <h3 className="text-3xl font-bold text-slate-200 pt-6 border-b border-zinc-800 pb-2 inline-block">Destruindo Itens mágicos</h3>
            <p>Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
            <p>Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O valor depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu valor ou o do portador.</p>

          </div>
        </section>
      </div>
    </main>
  );
}