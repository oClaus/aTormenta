"use client";

import { useState } from "react";
import Link from "next/link";
import { equipmentCategories } from "@/data/itensmagicos";
import { EquipmentCategory } from "@/types/magicitens";

// Componente para o Card de Categoria (Visual Pergaminho Atualizado)
const CategoryCard = ({ category }: { category: EquipmentCategory }) => {
  // Extraímos o componente do ícone para renderizá-lo como tag
  const IconComponent = category.icon;

  return (
    <Link
      href={category.href}
      className="group relative flex flex-col items-start p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 overflow-hidden transition-all duration-300 hover:bg-[#e8dac1]/80 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] hover:border-red-800/50"
    >
      {/* Efeito de brilho superior no hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Container do Ícone */}
      <div className="mb-5 p-3 rounded-lg bg-[#fbf5e6] border border-amber-900/20 group-hover:border-red-800/30 transition-colors shadow-sm relative z-10">
        <IconComponent 
            className="w-8 h-8 md:w-10 md:h-10 text-amber-900/70 group-hover:text-red-800 transition-all duration-300 group-hover:scale-110" 
            strokeWidth={1.5}
        />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-2 group-hover:text-red-700 transition-colors font-serif tracking-wide relative z-10">
        {category.title}
      </h3>
      
      <p className="text-amber-950/80 text-sm line-clamp-3 leading-relaxed font-medium italic font-serif relative z-10">
        {category.description}
      </p>

       {/* Detalhes de Canto (Decorativos) */}
       <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </Link>
  );
};

export default function EquipamentosPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Estilo Pergaminho */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
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
                <span className="text-red-800">Itens Mágicos</span>
            </div>

        </div>
      </header>
      
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
                Itens Mágicos
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Itens Mágicos
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir as regras de uso, identificação e fabricação.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium mb-4">A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
                <p className="font-medium mb-6">Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>
                
                <blockquote className="border-l-4 border-red-800 pl-4 py-4 my-6 italic text-amber-950/85 bg-[#e8dac1]/50 rounded-r-xl font-serif font-medium shadow-sm">
                    Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.
                </blockquote>
                
                <p className="font-medium">Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>
              </section>

              {/* Usando Itens Mágicos */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Usando Itens mágicos</h2>
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
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Fabricando itens mágicos</h2>
                <p className="font-medium">Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Itens de uso único</h2>
                <p className="font-medium mb-6">Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>
                
                {/* Box de Exemplo Estilizado */}
                <div className="p-5 md:p-6 bg-[#fbf5e6] rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800 mb-6 font-medium text-base">
                    <p className="mb-2"><strong className="text-red-800 uppercase tracking-widest text-sm">Magia de 1º círculo (1 PM): </strong>preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</p>
                    <p><strong className="text-red-800 uppercase tracking-widest text-sm">Magia de 3º círculo (6 PM): </strong>preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</p>
                </div>
                
                <p className="font-medium">Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Itens Permanentes</h3>
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
                    <div className="my-8 max-w-lg mx-auto bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 overflow-hidden shadow-sm">
                      <div className="bg-[#d9c8a9] py-3 border-b-2 border-amber-900/20">
                          <h4 className="text-lg font-bold text-center text-amber-950/80 tracking-widest uppercase font-serif">Preço de Encantos</h4>
                      </div>
                      <table className="w-full text-center">
                        <thead>
                          <tr className="bg-[#e8dac1] text-amber-950/70 text-xs sm:text-sm uppercase tracking-widest font-serif font-bold border-b-2 border-amber-900/10">
                            <th className="py-3 px-2 border-r-2 border-amber-900/10">Número<br/>de Encantos</th>
                            <th className="py-3 px-2 border-r-2 border-amber-900/10">Aumento<br/>no Preço</th>
                            <th className="py-3 px-2">Aumento<br/>na CD</th>
                          </tr>
                        </thead>
                        <tbody className="text-amber-950/85 font-serif font-medium bg-[#fbf5e6]">
                          <tr className="border-b-2 border-amber-900/10 hover:bg-[#e8dac1]/50 transition-colors">
                            <td className="py-3 font-bold text-red-800 border-r-2 border-amber-900/10 text-lg">1</td>
                            <td className="py-3 font-bold border-r-2 border-amber-900/10">+ T$ 18.000</td>
                            <td className="py-3">+10</td>
                          </tr>
                          <tr className="border-b-2 border-amber-900/10 hover:bg-[#e8dac1]/50 transition-colors bg-[#e8dac1]/30">
                            <td className="py-3 font-bold text-red-800 border-r-2 border-amber-900/10 text-lg">2</td>
                            <td className="py-3 font-bold border-r-2 border-amber-900/10">+ T$ 36.000</td>
                            <td className="py-3">+15</td>
                          </tr>
                          <tr className="hover:bg-[#e8dac1]/50 transition-colors">
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
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Destruindo Itens mágicos</h3>
                <p className="font-medium mb-4">Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
                <p className="font-medium">Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O valor depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu valor ou o do portador.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Grid de Categorias de Equipamentos */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-amber-950 mb-6 md:mb-8 font-serif tracking-wide border-b-2 border-amber-900/10 pb-2">
            <span className="text-red-800 text-3xl">❖</span> Categorias
          </h2>
          {/* Grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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