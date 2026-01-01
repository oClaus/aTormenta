"use client";

import Link from "next/link";
import { equipmentCategories } from "@/data/itensmagicos";
import { EquipmentCategory } from "@/types/magicitens";

// Componente para o Card de Categoria (Visual Grimório/Stone Atualizado conforme sua modificação)
const CategoryCard = ({ category }: { category: EquipmentCategory }) => {
  // Extraímos o componente do ícone para renderizá-lo como tag
  const IconComponent = category.icon;

  return (
    <Link
      href={category.href}
      // overflow-hidden continua aqui para os efeitos de brilho nas bordas
      className="group relative flex flex-col items-start p-6 rounded-xl bg-stone-900 border border-stone-800 overflow-hidden transition-all duration-300 hover:bg-stone-900/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-amber-900/50"
    >
      {/* Efeito de brilho superior no hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Container do Ícone - Isso resolve o corte! */}
      {/* O ícone fica dentro desta caixa, dando espaço para o scale funcionar */}
      <div className="mb-4 p-3 rounded-lg bg-stone-950 border border-stone-800 group-hover:border-amber-900/50 transition-colors shadow-inner relative z-10">
        <IconComponent 
            className="w-8 h-8 md:w-10 md:h-10 text-stone-500 group-hover:text-amber-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
            strokeWidth={1.5}
        />
      </div>
      
      <h3 className="text-2xl font-bold text-stone-200 mb-2 group-hover:text-amber-500 transition-colors font-serif relative z-10">
        {category.title}
      </h3>
      
      <p className="text-stone-400 text-sm line-clamp-3 leading-relaxed group-hover:text-stone-300 font-serif italic relative z-10">
        {category.description}
      </p>

       {/* Detalhes de Canto (Decorativos) */}
       <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-stone-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </Link>
  );
};

export default function EquipamentosPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Estilo Grimório */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        {/* CORREÇÃO AQUI: Removida a div extra que agrupava o Link e o Menu */}
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Itens Mágicos</span>
            </div>

        </div>
      </header>
      
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-8 md:mb-12 drop-shadow-lg leading-tight">
            Itens Mágicos
        </h1>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-amber-700 mb-6 md:mb-8 font-serif border-b border-stone-800 pb-2">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-red-800 rounded-full shadow-[0_0_10px_rgba(153,27,27,0.5)]"></span>
            Categorias
          </h2>
          {/* Grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {equipmentCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Seção de Texto e Regras (Estilo Stone/Paper) */}
        <section className="mb-12 p-6 md:p-10 bg-stone-900/50 rounded border border-stone-800 w-full">
          <div className="space-y-6 text-stone-300 leading-relaxed text-base md:text-lg font-serif">
            
            <p>A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
            <p>Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>
            
            <blockquote className="border-l-2 border-amber-700 pl-4 py-4 my-6 italic text-stone-400 bg-stone-950/50 rounded-r-md">
                Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.
            </blockquote>
            
            <p>Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>

            {/* Títulos H2 atualizados para Amber/Stone */}
            <h2 className="text-3xl font-bold text-amber-700 pt-6 border-b border-stone-800 pb-2 inline-block">Usando Itens mágicos</h2>
            <p>Itens mundanos e mágicos seguem as mesmas regras para acúmulo de bônus e limites de uso e carga. Assim, se um item mundano e um item mágico fornecem um bônus na mesma característica, eles não se acumulam — use apenas o melhor. Da mesma forma, um personagem vestindo dois itens mundanos e dois itens mágicos não receberá os benefícios de um quinto item vestido.</p>
            
            <ul className="space-y-4 ml-2 mt-4">
              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Limites de Carga.</strong> Itens mágicos ocupam espaço como itens mundanos. Uma espada longa flamejante, por exemplo, ocupa 1 espaço — o mesmo que uma espada longa mundana. Acessórios ocupam 1 espaço, a menos que sua descrição indique o contrário. Poções e pergaminhos ocupam meio espaço.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Ativação e Testes.</strong> Para itens mágicos com habilidades ativadas, você precisa primeiro identificá-los (veja a seguir). A menos que sua descrição diga o contrário, ativar um item mágico é uma ação padrão. Para itens com efeitos que exigem teste de resistência, o atributo usado para definir a CD é indicado na descrição do item (para poções e pergaminhos, é Inteligência, Sabedoria ou Carisma, a escolha do usuário).
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Itens que lançam magias.</strong> Lançar magias a partir de itens não exige pronunciar palavras mágicas, gesticular ou se concentrar, e magias arcanas lançadas por meio de itens não sofrem limitação pelo uso de armadura. Você pode usar aprimoramentos, mas precisa pagar por eles.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Identificando Itens mágicos.</strong> Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições indicando o que podem fazer; essas podem ser mágicas, mudando para um idioma que você saiba ler, ou exigir fluência em línguas exóticas (veja a perícia Conhecimento). Outros podem não trazer qualquer pista sobre seu funcionamento. Nesse caso, os poderes só ficam claros se você identificar o item. Para isso, use a perícia Misticismo — ou a velha tentativa e erro. Você pode subir naquela vassoura velha e saltar da janela. Se for uma vassoura voadora, você sairá voando. Se não for...
                 </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-amber-700 pt-8 border-b border-stone-800 pb-2 inline-block">Fabricando itens mágicos</h2>
            <p>Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>

            <h2 className="text-3xl font-bold text-amber-700 pt-8 border-b border-stone-800 pb-2 inline-block">Itens de uso único</h2>
            <p>Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>
            
            {/* Box de Exemplo Estilizado */}
            <div className="bg-stone-950 p-4 rounded border border-stone-800 my-4 space-y-2 font-mono text-sm text-stone-400">
                <p><strong className="text-amber-600">Magia de 1º círculo (1 PM): </strong>preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</p>
                <p><strong className="text-amber-600">Magia de 3º círculo (6 PM): </strong>preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</p>
            </div>
            
            <p>Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>

            <h3 className="text-2xl font-bold text-amber-600 pt-6">Itens Permanentes</h3>
            <p>Armas e armaduras mágicas podem ser encantadas ou específicas. Acessórios são sempre específicos.</p>
            
            <ul className="space-y-4 ml-2 mt-4">
              <li className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                    <div>
                        <strong className="text-stone-100">Itens Encantados.</strong> Funcionam como itens superiores — mas, em vez de melhorias, possuem encantos. Um item mágico menor possui um encanto, um médio possui dois e um item mágico maior possui três encantos. O preço e a CD do teste de Ofício aumentam de acordo com o número de encantos (veja a tabela abaixo). Bônus por encantos não se acumulam. Um mesmo item pode ser superior e encantado. Some os modificadores de preço e CD no teste de Ofício, e os bônus fornecidos por melhorias e encantos para determinar o bônus do item. Assim, uma espada longa com um encanto tem preço de T$ 18.015. Fabricá-la exige um gasto de T$ 6.005 e um teste de Ofício contra CD 30. Já uma espada longa com quatro melhorias e três encantos (o máximo possível) tem preço de T$ 90.015 (T$ 15 da espada + T$ 18.000 das quatro melhorias, mais T$ 72.000 dos três encantos). Fabricá-la exige um gasto de T$ 30.005 e um teste de Ofício contra CD 60. Apenas os maiores armeiros são capazes de forjar uma arma dessas!
                    </div>
                </div>
                
                {/* --- TABELA ATUALIZADA (STONE) --- */}
                <div className="my-8 max-w-lg mx-auto bg-stone-950 rounded border border-stone-800 overflow-hidden shadow-2xl">
                  <div className="bg-stone-900 py-3 border-b border-stone-800">
                      <h4 className="text-lg font-bold text-center text-amber-700 tracking-widest uppercase font-serif">PREÇO DE ENCANTOS</h4>
                  </div>
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-stone-900 text-amber-700 text-xs sm:text-sm uppercase tracking-wide font-serif">
                        <th className="py-3 px-2 font-bold border-r border-stone-800">Número<br/>de Encantos</th>
                        <th className="py-3 px-2 font-bold border-r border-stone-800">Aumento<br/>no Preço</th>
                        <th className="py-3 px-2 font-bold">Aumento<br/>na CD</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300 font-serif">
                      <tr className="border-t border-stone-800 hover:bg-stone-900/30 transition-colors">
                        <td className="py-3 font-medium text-stone-200 border-r border-stone-800">1</td>
                        <td className="py-3 font-mono text-stone-400 border-r border-stone-800">+ T$ 18.000</td>
                        <td className="py-3 text-stone-400">+10</td>
                      </tr>
                      <tr className="border-t border-stone-800 hover:bg-stone-900/30 transition-colors bg-stone-900/20">
                        <td className="py-3 font-medium text-stone-200 border-r border-stone-800">2</td>
                        <td className="py-3 font-mono text-stone-400 border-r border-stone-800">+ T$ 36.000</td>
                        <td className="py-3 text-stone-400">+15</td>
                      </tr>
                      <tr className="border-t border-stone-800 hover:bg-stone-900/30 transition-colors">
                        <td className="py-3 font-medium text-stone-200 border-r border-stone-800">3</td>
                        <td className="py-3 font-mono text-stone-400 border-r border-stone-800">+ T$ 72.000</td>
                        <td className="py-3 text-stone-400">+20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* --- FIM DA TABELA --- */}
              </li>

              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Itens Específicos.</strong> Usam as regras de fabricação de itens de Ofício. O preço de cada item aparece nas tabelas a seguir. A CD do teste de Ofício é dada pela categoria do item: CD 30 para itens menores, CD 40 para médios e CD 50 para itens maiores. Por fim, a perícia usada é determinada pelo tipo de item: Ofício (armeiro) para armas e armaduras e Ofício (artesão) para acessórios. De acordo com o mestre, outros Ofícios podem ser usados para itens específicos — como Ofício (joalheiro) para um anel. Itens específicos não podem receber encantos. Todas as armas e armaduras específicas deste livro são itens maiores.
                 </div>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-amber-700 mt-1 shrink-0">❖</span>
                 <div>
                    <strong className="text-stone-100">Custo em Pontos de Mana.</strong> Para fabricar um item mágico permanente, o personagem deve sacrificar certa quantidade de pontos de mana: 1 PM para itens menores, 2 PM para médios e 3 PM para itens maiores. É essa essência que irá energizar o item. Os pontos de mana são perdidos para sempre. Contudo, caso o personagem destrua um item mágico permanente que criou, recupera os PM sacrificados naquele item. De acordo com o mestre, outras coisas podem ser sacrificadas no lugar de pontos de mana, como ingredientes raros. Porém, encontrar um ingrediente desses é sempre uma tarefa difícil — talvez o objetivo de uma aventura!
                 </div>
              </li>
            </ul>

            <h3 className="text-3xl font-bold text-amber-700 pt-6 border-b border-stone-800 pb-2 inline-block">Destruindo Itens mágicos</h3>
            <p>Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
            <p>Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O valor depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu valor ou o do portador.</p>

          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}