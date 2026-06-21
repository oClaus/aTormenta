"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { God, getStatusLabel, getStatusColor } from "@/types/god";
import { gods } from "@/data/gods";

// --- Componente de Galeria ---
function ImageGallery({ images, alt }: { images: string | string[]; alt: string }) {
  // Transforma em array e filtra valores vazios ou falsy (ex: "")
  const imageList = (Array.isArray(images) ? images : [images]).filter(
    (img) => img && img.trim() !== ""
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4 segundos
    return () => clearInterval(interval);
  }, [imageList.length]);

  // Se não houver imagens válidas, exibe o fallback
  if (imageList.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-amber-900/40 bg-[#e8dac1]/20">
        <span className="text-5xl opacity-40 mb-3 filter sepia-[0.2]">🏛️</span>
        <span className="text-xs font-bold uppercase tracking-widest opacity-60">
          Sem Imagem Oficial
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imageList.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out mix-blend-multiply filter sepia-[0.2] ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
       {/* Indicadores (pontinhos) */}
       {imageList.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {imageList.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-red-800 w-4" : "bg-amber-900/40 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Tirado de dentro do DeusesPage para evitar bugs de renderização no React
const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-70">📜</span>
          <div className="text-left">
            <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
              Regras de Devoções
            </h2>
            <p className="text-sm text-amber-950/70 font-serif italic font-bold">
              Clique para regras de Divindades e Devoções.
            </p>
          </div>
        </div>
        <span className={`text-red-800 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isOpen ? 'max-h-[100000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
        <div className="p-6 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
          
          {/* Introdução do Texto */}
          <div>
              <h2 className="text-2xl font-bold text-red-800 mb-2 tracking-wide border-b-2 border-amber-900/20 pb-2">Escolhendo seu deus</h2>
              <p className="text-amber-950/85 font-medium mb-2">Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
              <p className="text-amber-950/85 font-medium mb-2">Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
              <p className="text-amber-950/85 font-medium mb-2">Ao se tornar devoto, você recebe um poder concedido à sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião).</p>
              <p className="text-amber-950/85 font-medium mb-2">Devotos são todos os personagens, aventureiros ou não, que aceitam venerar uma divindade do Panteão, seguindo suas Obrigações & Restrições. Em troca, passam a ter acesso aos poderes concedidos. Um personagem pode se tornar devoto através de habilidade de classe (clérigo, druida, frade, paladino) ou pertencendo a uma raça ou classe permitida para cada deus.</p>
              <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm">Raças </span><span className="text-amber-950/85 font-medium">Humanos, meios-elfos, meios-orcs, minauros, moreau e finntroll (vistos em Ameaças de Arton) são livres para escolher qualquer divindade. Membros de outras raças podem se tornar devotos de certas divindades quando a raça aparece em sua lista de devotos, não importando a classe.</span></p>
              <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm">Exceção </span><span className="text-amber-950/85 font-medium">Suraggel sempre podem ser devotos da divindade relacionada a sua herança planar.</span></p>
              <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm">Classes </span><span className="text-amber-950/85 font-medium">Clérigos e frades são livres para escolher qualquer divindade como padroeira, não importando sua raça. Druidas e paladinos são restritos a certos deuses, listados em suas habilidades de classe. Membros de outras classes podem se tornar devotos de uma divindade quando a classe aparece em sua lista de devotos, não importando a raça.</span></p>
              <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm">Exceção </span><span className="text-amber-950/85 font-medium">feiticeiros abençoados sempre podem ser devotos do deus de sua herança de linhagem.</span></p>
              <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm">Multiclasse </span><span className="text-amber-950/85 font-medium">No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</span></p>
          </div>
          
          <div className="border-t-2 border-amber-900/20 pt-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Características dos deuses</h2>
              <div className="space-y-4 pl-4 border-l-4 border-amber-900/30">
                  <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Crenças e Objetivos:</span><span className="text-amber-950/85 font-medium"> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Símbolo Sagrado:</span><span className="text-amber-950/85 font-medium"> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Canalizar Energia:</span><span className="text-amber-950/85 font-medium"> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</span></p>
                  <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Arma Preferida:</span><span className="text-amber-950/85 font-medium"> A arma típica de devotos do deus, importante para certas habilidades e magias.</span></p>
              </div>
          </div>
          
          <div className="border-t-2 border-amber-900/20 pt-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Deuses Menores</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Dizem que o poder do Panteão vem de seus adoradores. Quanto mais amada, prestigiada e respeitada uma divindade, mais poderosa ela é. Embora seja uma teoria bastante aceita nos círculos religiosos, explicando numerosos eventos na história de Arton, ela também traz consigo uma contradição: os deuses já existiam muito antes de seus devotos pisarem sobre Arton. De onde, então, provinha sua força? Como podiam ostentar seus milagres, travar suas batalhas, forjar seus mundos? Talvez isso nunca seja descoberto. Contudo, uma hipótese radical e controversa afirma que os deuses seriam, no início, muito menos poderosos do que são hoje. Capazes de forjar conceitos da realidade, mas não tão distantes dos mortais que viriam a criar. Então, quando começaram a ser venerados, esses deuses teriam alcançado o status atual.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Essa hipótese é parcialmente corroborada pela existência atual de seres acima dos mortais, mas abaixo do Panteão. Seres, talvez, semelhantes ao que os deuses eram no início de tudo. São os deuses menores.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Enquanto os vinte deuses maiores governam aspectos amplos e importantes da existência — Vida, Morte, Sol, Trevas, Paz, Guerra… —, cada deus menor está relacionado a um único povo, criatura, local, arte, ciência, emoção ou ideia. Existe o Deus da Vaidade, o Deus das Viagens, a Deusa das Avós e centenas de outros. Um deus menor surge quando um bom número de seres inteligentes escolhe cultuá-lo, adorar como divino aquilo que ele representa. Cada vez que um artoniano mostra deferência a algo ou alguém, sempre que expressa seu fascínio, respeito e gratidão, pode estar contribuindo para a ascensão de um novo deus.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Embora sejam intitulados “deuses”, a diferença entre eles e um membro do Panteão é abismal — muitos, inclusive, acham blasfemo chamá-los assim. Os Vinte são quase onipotentes em comparação. Ainda que alguns deuses menores estejam entre os seres mais poderosos de Arton, a maioria seria incapaz de desafiar o avatar de um deus maior, talvez pudesse tombar frente a aventureiros experientes. Muitos são na verdade entidades modestas, ainda capazes de prover pequenos milagres a seus parcos devotos, mas sem outras habilidades extraordinárias.</p>
              </div>
              
              <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-wide">Menores, mas Necessários</h3>
                  <p className="text-amber-950/85 font-medium mb-2">Por que existem deuses menores? Por que o Panteão permite que atuem, arrebanhando seus seguidores, diluindo a devoção das populações mortais? Talvez isso não os afete de modo algum? Talvez sejam impotentes para fazer algo a respeito, pois significaria privar os mortais de seu livre-arbítrio? Essas podem ser razões legítimas, mas existe um fator mais importante: sempre deve haver vinte. Quando um deus cai, quando o Panteão está incompleto, o equilíbrio cósmico decretado pelo Nada e pelo Vazio é perturbado — Arton passa por catástrofes, pode acabar despedaçada. Assim, deuses menores são como uma medida de segurança para evitar essa calamidade. Sempre que uma divindade maior deixa seu posto, outra ascende em seu lugar. Tais eventos já ocorreram na história de Arton, sempre trazendo consequências, mas também assegurando a continuidade da existência.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Perceba que nem todos os seres poderosos se tornam deuses menores — ou sequer buscam esse status. Como exemplos mais evidentes temos os arquimagos Talude e Vectorius. Ambos rivalizam o título de mais poderoso arcanista vivente em Arton (isso é, espera-se que Talude ainda esteja entre os vivos...). Com seus nomes amplamente conhecidos e respeitados através dos reinos, qualquer um deles poderia se tornar deus menor com certa facilidade se assim quisesse. Contudo, Talude jamais aceitaria tal coisa por sua própria devoção a Wynna — cogitar ser um deus ele próprio seria enorme desrespeito à amada padroeira. Vectorius, por sua vez, tem a convicção de que cabe a cada conjurador conquistar seus poderes com esforço próprio, em vez de apenas recebê-los como alguma graça concedida. Outros indivíduos poderosos não querem se tornar deuses porque essa posição demanda responsabilidades constantes (veja adiante).</p>
                  <p className="text-amber-950/85 font-medium mb-2">Por outro lado, deuses menores podem ser ativamente criados — não apenas por aqueles que buscam o título para si mesmos, mas também por aqueles que consideram algo importante e merecedor de devoção. Um bardo obcecado por uma canção poderia entoá-la taverna após taverna, arrebanhando devotos para a futura Deusa da Balada de Nova Malpetrim. Da mesma forma, uma serva leal e apaixonada de um vilão caído tentaria iniciar um culto para, talvez, ressuscitá-lo como divindade. Tanto o bardo quanto a serva consideram a canção ou o vilão algo sagrado.</p>
              </div>
          </div>
          
          <div className="border-t-2 border-amber-900/20 pt-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Características de Deuses Menores</h2>
              <div className="space-y-4">
              <p className="text-amber-950/85 font-medium mb-4">Todos os deuses menores possuem suas próprias crenças e objetivos, seu símbolo sagrado e todas as demais características dos deuses descritas em Tormenta20. Além dessas, cada deus menor possui uma natureza e um status divino.</p>
              
              <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-wide"> Natureza</h3>
              <p className="text-amber-950/85 font-medium mb-2">Divindades menores podem emergir de simples mortais, sejam humanos ou qualquer outra raça. Várias outras são animais, monstros ou objetos. Outras ainda são criaturas únicas que surgem espontaneamente, como resultado da adoração voltada a certo objetivo. Deuses podem resultar de atos, eventos ou até ideias — enfim, qualquer coisa em que as pessoas acreditem. Um Deus da Pesca não precisaria se originar necessariamente de um pescador mortal; poderia surgir pela simples devoção dos pescadores a seu ofício.</p>
              <p className="text-amber-950/85 font-medium mb-2">Muitos seres se tornaram deuses menores por sua majestade e soberania extremas; os Dragões-Reais são divindades com seus próprios cultos. Também não é raro um herói alcançar esse status, venerado através dos reinos por suas façanhas. Bastante conhecida é a trajetória da elfa Gwendolynn, antiga clériga de Tanna-Toh que, após colocar fim ao escravagismo dos minotauros, se tornou Deusa da Liberdade.</p>
              <p className="text-amber-950/85 font-medium mb-4">Cada deus menor tem uma natureza entre as seguintes.</p>
              
              <div className="space-y-3 pl-4 border-l-4 border-amber-900/30 mb-8">
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Conceito Vivo:</span><span className="text-amber-950/85 font-medium"> A divindade se origina de uma ideia, um ato ou um evento específicos, que desperta a fé e devoção de um número suficiente de pessoas. Diferente de outros deuses menores, um conceito vivo não tem forma física.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Entidade Primordial:</span><span className="text-amber-950/85 font-medium"> São seres fundamentais, necessários para a vida dos artonianos ou para a própria existência em Arton, que surgiram espontaneamente nos primórdios da Criação. Embora sejam quase tão antigos quanto o próprio mundo, apenas aqueles que atraem a atenção de devotos se tornam deuses menores.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Dragão-Real:</span><span className="text-amber-950/85 font-medium"> Feras ancestrais de enorme poder físico e místico. Aqueles que descendem do pai de todos os dragões, Kallyadranoch, são dotados também de centelha divina, ocupando o posto de deuses menores. Alguns, como Sckhar, o Dragão-Rei do Fogo, exibem seu status divino abertamente; outros podem escolher formas mais discretas de exercer sua divindade.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Mortal Ascendido:</span><span className="text-amber-950/85 font-medium"> Este é o caminho dos mortais que buscam alcançar a divindade. Heróis que realizam grandes feitos podem atrair a admiração, e a devoção, daqueles impactados positivamente por seus atos. Mestres de habilidade extrema podem se tornar paradigmas divinos de sua arte ou técnica. Mesmo criaturas ditas irracionais, como animais, podem se tornar símbolos que despertam a fé de outros.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Objeto Desperto:</span><span className="text-amber-950/85 font-medium"> Um item inanimado, como uma arma ou estatueta, pode se tornar magicamente consciente e ser cultuado por adoradores. Sua consciência pode ser resultado de um grande feito em que teve participação, ou fruto de algum ritual que lhe concedeu grande poder. Objetos despertos geralmente não se movem, repousando em um santuário ou local seguro. Não raro, sua localização é destino de devotos peregrinos.</span></p>
              </div>

              <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-wide"> Status Divino</h3>
              <p className="text-amber-950/85 font-medium mb-4">Esta é a medida do poder de um deus menor. Opera em uma escala de 1 a 5 (status maiores que 5 correspondem a deuses maiores) e indica quais habilidades ele é capaz de conceder a seus devotos e quantas dádivas pessoais pode acumular.</p>
              
              <div className="space-y-3 pl-4 border-l-4 border-amber-900/30 mb-8">
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Status 1:</span><span className="text-amber-950/85 font-medium"> Estes “deuses” são pouco mais que santos ou heróis locais. Um deus menor de status 1 pode ser um ídolo de origem misteriosa, uma formação natural peculiar, uma antiga joia de família ou algum animal curioso da região — como aquela raposa de esperteza ímpar que sempre evita todas as armadilhas. Outros ainda são líderes carismáticos, que sequer se consideram “deuses”, até ficando constrangidos quando são chamados assim. É quase impossível para este deus menor ser conhecido por qualquer pessoa afastada de seu círculo. Seu culto é restrito a aldeias, famílias, tribos ou pequenos grupos de cultistas.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Status 2:</span><span className="text-amber-950/85 font-medium"> Este deus tem considerável poder pessoal, e seus feitos divinos já alcançam fiéis longe das fronteiras de sua região de origem. Além de sua própria potência divina, conta com o apoio de um grande número de adoradores e/ou de uma modesta organização formal estabelecida, capaz de acolher novos devotos e transmitir suas crenças.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Status 3:</span><span className="text-amber-950/85 font-medium"> Neste nível surgem deuses menores cujos nomes são entoados através de reinos inteiros, ou conhecidos mesmo em terras distantes. Podem ser animais ou monstros de determinado tipo — um Deus dos Coelhos, uma Deusa das Múmias, um Deus dos Trobos. Estes deuses também podem estar ligados a emoções menores, fenômenos estranhos, objetos importantes, festivais locais ou atividades valiosas. Tais deuses possuem um considerável número de fiéis e muitas vezes contam com algum tipo de organização, local ou regional, capaz de oferecer suporte ao culto e alcançar novos devotos. Grande parte dos deuses menores mais conhecidos em Arton atingiu este status.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Status 4:</span><span className="text-amber-950/85 font-medium"> Neste status estão vários deuses menores que representam grandes povos ou raças (isso é, aqueles sem seu próprio deus maior), como Hurlaagh, o Deus dos Hobgoblins. Ou ideias poderosas, como o Deus das Cidades. Ou ainda aspectos culturais muito importantes em nações inteiras, como Hippion, o Deus dos Cavalos, cultuado no reino equestre de Namalkah. Um povo que cultua sua própria divindade criadora pode também venerar certo número de deuses menores. Os anões reconhecem Khalmyr e Tenebra como seus deuses principais. Contudo, muitos são devotados a Goharom, o Deus dos Machados; Granto, o Deus dos Escultores; Klangor, o Deus das Armaduras, e Zakharov, o Deus da Bravura, entre outros.</span></p>
                <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Status 5:</span><span className="text-amber-950/85 font-medium"> Os mais soberanos e influentes deuses menores estão também entre os seres mais poderosos de Arton. Talvez os exemplos mais conhecidos sejam os Dragões-Reais divinos, como Sckhar e Beluhga, ou Tibar, o Deus do Comércio. Até onde se sabe, estes deuses são os únicos capazes de ascender como divindades maiores quando o Panteão está incompleto.</span><span className="text-amber-950/85 font-medium"> Deuses menores deste status já foram mais numerosos. Muitos, no entanto, acabaram abatidos durante a histórica e devastadora Batalha dos Deuses contra as forças da Tormenta, pela retomada de Tamura. Na falta de bons substitutos viáveis, dizem que Valkaria vem trazendo a Arton oportunidades (alguns dizem “problemas”) para que mais deuses menores prosperem. Alguns de seus irmãos concordam com a iniciativa, outros a rejeitam — talvez temendo serem derrotados por futuros aspirantes.</span></p>
              </div>

              <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-wide"> Deuses Menores e Paladinos</h3>
              <p className="text-amber-950/85 font-medium mb-2">Estes campeões divinos são um luxo para deuses menores; abençoá-los com poderes especiais muitas vezes está no limite de suas capacidades. Assim, um deus menor que aceite paladinos entre seus seguidores pode ter apenas um deles por vez. Este guerreiro santo costuma ser responsável pela segurança pessoal do deus, atuando como fiel guarda-costas, mas também pode ser enviado em missões especiais. A ligação entre um deus menor e seu paladino único é sempre muito forte — mais que servo e senhor, muitas vezes são grandes amigos, ou mesmo amantes.</p>
              </div>
          </div>
          
          <div className="border-t-2 border-amber-900/20 pt-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Devotos de Deuses Menores</h2>
              <div className="space-y-4">
              <p className="text-amber-950/85 font-medium mb-4">Todos os deuses menores podem ter clérigos e frades. Conforme suas naturezas, também podem ter druidas e paladinos, bem como aceitar devotos de outras raças ou classes.</p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Círculos de Magias:</span><span className="text-amber-950/85 font-medium"> Devotos de deuses menores em classes conjuradoras divinas (clérigos, druidas, frades...) podem aprender e lançar magias até o círculo máximo que seu deus oferece, mesmo que o nível do devoto permita acesso a círculos superiores. Quando esse limite é atingido, existem três caminhos possíveis para o conjurador: acatar a limitação por lealdade ao deus; abandonar sua devoção e buscar uma divindade mais poderosa, ou ativamente buscar elevar o status de sua divindade, arrebanhando mais devotos e/ou realizando outros feitos que promovam sua causa.</span><span className="text-amber-950/85 font-medium"> Essa limitação é apenas para os seus devotos. Se você for um conjurador divino (clérigo, druida ou frade), ou por qualquer outro efeito puder lançar magias divinas, e se tornar um deus menor, continua mantendo sua capacidade de lançar qualquer círculo de magias que já pudesse lançar, independente de seu status divino. Por exemplo, se você for um clérigo de 13º nível e um deus menor de status 2, continua podendo lançar magias de 4º círculo.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Poder Concedido:</span><span className="text-amber-950/85 font-medium"> Cada deus menor oferece um único poder concedido. Para devotos de classes divinas (que normalmente teriam acesso a dois poderes concedidos), em vez de um segundo poder, o devoto recebe uma quantidade de PM adicionais igual a 1 + o status divino do deus, limitada por seu nível.</span></p>
              </div>
          </div>

          <div className="border-t-2 border-amber-900/20 pt-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Jogando como um Deus Menor</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Arton é um mundo de problemas, mas também de oportunidades. Aqui qualquer mortal tem a possibilidade de atingir a divindade (ainda que menor), desde que se dedique a ser o representante de um conceito, valor ou causa importante o suficiente para atrair a fé de outros mortais. Embora o caminho para se tornar um deus menor não seja exclusivo de aventureiros, pela natureza de suas vidas eles estão entre os principais candidatos a alcançar o status divino.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Tornando-se Deus Menor</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Ser um deus parece muito divertido, certo? Ganhar poderes divinos, ser quase imortal, ter um monte de devotos para lhe servir. Bem, se fosse assim tão simples, qualquer ser minimamente poderoso em Arton teria esse status.</p>
                  <p className="text-amber-950/85 font-medium mb-2">A verdade é que, embora qualquer personagem possa tentar se tornar um deus menor, apenas alguns conseguem reunir a capacidade, vontade e oportunidade para tal. Ascender à divindade, mesmo como um deus menor, é uma tarefa difícil e, muitas vezes, perigosa.</p>
                  <p className="text-amber-950/85 font-medium mb-2">O primeiro passo para se tornar um deus menor é realizar um feito relevante, que transforme o personagem em um símbolo com um significado específico. Isso pode ser algo grandioso, como as ações de Gwen para salvar a capital tapistana, ou uma ação com um efeito mais restrito, mas ainda assim importante, como proteger uma pequena aldeia de um mal ancestral. O importante é começar a ser visto como sagrado. Qualquer que seja esse feito, ele deve ser realizado em jogo, como parte das aventuras do personagem. Não é necessário que você execute essa façanha sozinho: não há nada nas regras divinas que impeça um futuro deus de contar com a ajuda de seus aliados. Em todos os casos, o mestre tem a palavra final sobre se um feito é relevante o suficiente.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Tendo realizado o feito pelo qual será reconhecido, é hora de você buscar sua divindade. Isso pode ser feito de várias formas: você pode reunir fiéis para formar a base de seu rebanho, isolar-se nos ermos para comungar com seus ancestrais, dedicar-se a estudos que vão guiá-lo em sua busca divina… Qualquer que seja o caminho escolhido, você precisa executar uma busca (veja Tormenta20, p. 278) relacionada ao tipo de deus menor que almeja se tornar.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Para ser bem-sucedido, você precisa acumular duas recompensas (que não oferecem outros benefícios). As recompensas não precisam ser obtidas na mesma busca e as buscas não precisam ser sequenciais. Uma vez que obtenha as recompensas, você se torna um deus menor de status divino 1. Sua natureza será mortal ascendido, a menos que seja um guardião divino (veja o quadro). Você perde qualquer devoção e se torna devoto de si mesmo, a menos que seja um guardião divino. Caso seja um guardião divino, você se torna devoto do novo deus menor.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Evoluindo Seu Status Divino</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Uma vez que o personagem (ou que a entidade da qual ele é o guardião divino) se torne um deus menor de status divino 1, é hora de espalhar a fé. Como todas as divindades artonianas, o poder de um deus menor vem de seus fiéis. Mais precisamente, da quantidade de adoradores que o cultuam. Assim, tudo que um deus menor precisa fazer para aumentar seu status divino é obter mais seguidores.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Em termos de regras, obter seguidores é uma busca especial que segue as mesmas regras descritas em “Tornando-se Deus Menor”. A forma exata de cada busca depende de como o personagem pretende executá-la: ele pode passar algum tempo construindo um pequeno santuário para seus fiéis se reunirem ou peregrinando entre comunidades de uma região enquanto soluciona problemas e espalhando sua fé, por exemplo. Uma vez que tenha obtido as duas recompensas nessas buscas, o personagem aumenta seu status divino em 1.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Dádivas de Deuses menores</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Além dos benefícios que concede a seus fiéis (como poder concedido e acesso a magias divinas), um deus menor recebe benefícios pessoais, chamados de dádivas, conforme sua natureza e status divino.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Dádivas não são conquistadas automaticamente. Uma vez que se torne um deus menor, o personagem pode dedicar seu tempo entre aventuras para aprimorar seus poderes divinos. Isso é uma busca, como descrito em “Tornando-se Deus Menor”. Entretanto, para cada recompensa nessa busca, o personagem recebe uma dádiva a sua escolha. Um deus menor só pode conquistar dádivas cujos pré-requisitos cumpra, e pode ter um número máximo de dádivas igual a duas vezes seu status divino. Benefícios de dádivas contam como bônus de estruturas e não se acumulam com outros bônus de estruturas (como os de bases, domínios e negócios).</p>
                  <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Dádivas e Itens Despertos.</span><span className="text-amber-950/85 font-medium"> Poderes marcados com funcionam de forma diferente se o deus menor for um item desperto. Nesse caso, em vez de receber o benefício listado, o deus menor pode conceder o benefício a seu usuário (a critério do próprio deus).</span></p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Dádivas</h2>
              <div className="space-y-4 mb-8">
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Ampliar Conhecimento</span><br/><span className="text-amber-950/85 font-medium"> Você se torna treinado em até três perícias associadas ao seu conceito (aprovadas pelo mestre). Pré-requisito: conceito vivo.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Aprimoramento Divino</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +1 em um atributo. Pré-requisito: status divino 2.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Aptidão Divina</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +5 em uma perícia relacionada ao seu conceito, exceto Luta ou Pontaria. Você pode escolher esta dádiva outras vezes para perícias diferentes. Pré-requisito: entidade primordial, Dragão-Real ou mortal ascendido.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Clero</span><br/><span className="text-amber-950/85 font-medium"> Você passa a ser acompanhado por um sacerdote de sua fé. Ele é um parceiro iniciante de um tipo a sua escolha entre adepto, magivocador ou médico, que fornece +2 em Religião e em uma segunda perícia relacionada ao seu conceito (exceto Luta ou Pontaria). Quando você alcança status divino 3, esse sacerdote se torna veterano e, quando alcança status divino 5, ele se torna mestre. Caso o sacerdote morra, você pode treinar outro com uma semana de trabalho. Pré-requisito: Paróquia.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Defesa Divina</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +2 na Defesa.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Essência Divina</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +1 PM por status divino.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Imortal</span><br/><span className="text-amber-950/85 font-medium"> Você se torna imune a efeitos de cansaço, metabólicos e de veneno. Além disso, não tem longevidade máxima: pode viver para sempre, morrendo apenas de causas violentas ou por razões excepcionais (como escolher deixar de viver). Pré-requisito: Semi-Imortal.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Intuição Divina</span><br/><span className="text-amber-950/85 font-medium"> Você soma seu status divino em Intuição. Além disso, quando fica surpreendido, você pode fazer um teste de Intuição para pressentimento (Tormenta20, p. 120). Se passar, ignora essa condição.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Manifestação Divina</span><br/><span className="text-amber-950/85 font-medium"> Você é capaz de manifestar sua divindade na forma de ajuda a seus fiéis. Você pode gastar 1 PM e uma ação de movimento para conceder a uma criatura +5 em um teste de perícia, ou +1 em todos os testes de uma perícia durante uma cena. Também pode encantar um item para que forneça +1 em determinados testes durante uma cena. Além disso, pode executar pequenas manifestações de poder divino relacionadas ao seu conceito, como intensificar o sabor de uma bebida, mover objetos próximos ou embelezar uma canção. O mestre define exatamente o que você pode fazer, mas em geral esses pequenos efeitos sem custo são narrativos. Em todos os casos, a manifestação deve estar relacionada a suas crenças e objetivos divinos.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Milagre</span><br/><span className="text-amber-950/85 font-medium"> Você aprende e pode lançar uma magia divina de 1º círculo (atributo-chave Sabedoria). Você pode escolher esta dádiva outras vezes. Se fizer isso, a nova magia pode ser de um círculo igual ao número de Milagres que possui (limitado por seu status divino). Além disso, você pode cumprir pré-requisitos de círculo igual ao número de Milagres que possui (limitado por seu status divino). e</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Paladino Único</span><br/><span className="text-amber-950/85 font-medium"> Você passa a ser acompanhado pelo paladino único de sua fé. Ele é um parceiro iniciante (veja o quadro). Quando você alcança status divino 4, seu paladino se torna veterano e, quando alcança status divino 5, ele se torna mestre. Caso o paladino morra, você pode sagrar outro com uma semana de oração. Você não pode escolher esta dádiva se você ou outro membro do grupo for o paladino único. Pré-requisito: aceitar paladinos entre seus devotos.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Paróquia</span><br/><span className="text-amber-950/85 font-medium"> Você passa a ser acompanhado por um grupo de devotos fervorosos que o auxiliam em tarefas cotidianas (veja o quadro). Sua condição de descanso é uma categoria acima do padrão pelos cuidados que eles prestam e eles podem executar pequenas tarefas, como entregar mensagens e comprar itens. Quando você alcança status divino 2, seus devotos se tornam veteranos e, quando alcança status divino 3, eles se tornam mestres. Se os devotos morrerem, você pode conclamar outros com uma semana de pregação.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Presença Divina</span><br/><span className="text-amber-950/85 font-medium"> Você emana uma aura que impressiona aqueles que possuem alguma conexão com os deuses. Você recebe +5 em Diplomacia e Intimidação contra pessoas treinadas em Religião ou devotos de qualquer deus. No início de cada cena, você pode gastar 1 PM para fazer um teste de uma dessas perícias com essas pessoas. e</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Resiliência Divina</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +2 em testes de resistência.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Semi-imortal</span><br/><span className="text-amber-950/85 font-medium"> Você recebe um bônus igual ao seu status divino em testes de resistência contra efeitos de cansaço, metabólicos e de veneno. Pré-requisito: entidade primordial, Dragão-Real ou mortal ascendido.</span></p>
                  <p className="mb-2"><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> Vigor Divino</span><br/><span className="text-amber-950/85 font-medium"> Você recebe +10 PV por status divino.</span></p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Desafios Divinos</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Tornar-se deus menor é relativamente simples; continuar sendo é bem mais trabalhoso. Uma divindade menor ausente, que não demonstra afeição ou preocupação por seus servos, acaba por perder seu respeito e sua fé em pouco tempo. Se ninguém mais conta histórias, se nenhum milagre acontece aqui ou ali, não há motivo para acreditar. Mesmo um deus maligno ainda precisa manter a lealdade de seus cultistas, através de intimidação ou promessas de poder. Quando elas acabam, o mesmo vale para a divindade.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Mas não são apenas as demandas dos fiéis que podem atribular a vida de uma divindade menor. Ao trilhar este caminho, você está lidando com forças divinas e energias cósmicas, sujeitando-se a perigos e desafios dignos… dos deuses.</p>
                  <p className="text-amber-950/85 font-medium mb-4">As demandas e complicações que podem afetar um deus menor são representadas por desafios divinos. No início de cada tempo entre aventuras, role 1d10 + seu status divino e consulte a lista a seguir.</p>
                  
                  <div className="space-y-3 pl-4 border-l-4 border-amber-900/30 mb-8">
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 2 a 6. Nenhum desafio</span><br/><span className="text-amber-950/85 font-medium"> Seus fiéis estão satisfeitos e nenhum problema os aflige por ora.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 7 a 8. Súplicas dos Fiéis</span><br/><span className="text-amber-950/85 font-medium"> Você precisa auxiliar alguns fiéis com uma tarefa complexa, como fazer a colheita, construir uma casa ou resolver uma disputa. Faça um teste de Religião (ou de outra perícia relacionada ao seu conceito e aprovada pelo mestre) com CD 20 + o dobro de seu status divino. Se falhar, durante a próxima aventura seus pontos de mana máximos diminuem em 1 por nível de personagem.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 9. Ladainha Incessante</span><br/><span className="text-amber-950/85 font-medium"> Um monte de gente descobre que você é um deus e começa a importuná-lo pedindo milagres! É cansativo... Você fica fatigado pela próxima aventura (mesmo que seja imune a essa condição).</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 10. Reza Torta</span><br/><span className="text-amber-950/85 font-medium"> Outras pessoas ficam rezando contra você, culpando-o por pequenas desgraças em suas próprias vidas. Essa energia divina azeda seu humor. Você fica frustrado pela próxima aventura (mesmo que seja imune a essa condição).</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 11. Inquisidores</span><br/><span className="text-amber-950/85 font-medium"> Um grupo espalha que você é um herege ou falso deus e atrapalha sua influência. Pela próxima aventura, seu status divino é reduzido em 1.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 12. Visita Extraplanar</span><br/><span className="text-amber-950/85 font-medium"> Um ser dos mundos dos deuses vem atazaná-lo; ninguém mandou você se envolver com as forças divinas! Um espírito (como um celestial ou abissal, veja o Capítulo 4) de ND equivalente ao do grupo surge em algum momento da próxima aventura. Esse extraplanar pode lutar ao lado dos inimigos do grupo, ou atrapalhá-lo de alguma outra forma.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 13. Interferência Pessoal</span><br/><span className="text-amber-950/85 font-medium"> A energia divina que você emana interfere com seu equipamento encantado. Um de seus itens mágicos, escolhido aleatoriamente, é destruído.</span></p>
                    <p><span className="text-red-800 font-bold uppercase tracking-widest text-sm"> 14+. Maldição de Deus Maior</span><br/><span className="text-amber-950/85 font-medium"> Um deus maior fica com inveja por você estar reunindo muitos devotos e joga um raio em sua cabeça. Você deve fazer três testes de perícias diferentes (como se fosse uma busca; veja Tormenta20, p. 278) e passar nos três. Caso contrário, seu status divino é reduzido em 1 e, pela próxima aventura, você fica alquebrado.</span></p>
                  </div>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Guardiões Divinos</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">As regras para jogar como um deus menor presumem que o próprio personagem irá se tornar uma divindade, geralmente um mortal ascendido. Entretanto, existem casos em que um jogador deseja promover a fé em um deus menor de outra natureza (como um conceito vivo ou um item desperto). Nesse caso, em vez de ser o deus menor, ele será seu guardião divino.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Um guardião divino é o principal representante de um deus menor em sua busca por reconhecimento e poder. Ele pode ser o paladino encarregado de empunhar um deus-escudo, um orador dedicado a espalhar a fé em um conceito vivo e assim por diante. Em termos de regras, é o guardião divino quem executa todas as ações necessárias para que o deus aumente seu status divino e obtenha dádivas (como se ele próprio fosse o deus menor). Jogar como guardião divino é indicado quando o deus menor é um NPC ou possui uma natureza não adequada a um personagem jogador (como um item desperto).</p>
                  <p className="text-amber-950/85 font-medium mb-2">Em troca de seus serviços, o guardião divino possui uma relação especial com seu deus menor e se beneficia diretamente de seus poderes. Em primeiro lugar, o guardião recebe os benefícios de qualquer dádiva do deus menor que, a critério do mestre, possa se aplicar a ele. Assim, o guardião divino de um deus com a dádiva Aprimoramento Divino também receberá +1 em um de seus atributos.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Além dos benefícios das dádivas, o guardião também pode contar com a própria presença do deus menor. Um deus que seja um mortal ascendido pode, por exemplo, acompanhar seu guardião como um parceiro, enquanto um item desperto pode ser usado pelo guardião. Em todos os casos, o mestre tem a palavra final sobre como e se um deus menor acompanha seu guardião divino.</p>
                  <p className="text-amber-950/85 font-medium mb-2 italic border-l-4 border-red-800 pl-4 py-3 bg-[#e8dac1]/50 rounded-r">Ghortur, um orc caçador, foi escolhido por seu povo como o guardião divino de Alzakir, o Deus Menor das Flechas, um arco longo desperto de status divino 1. Como seu guardião, Ghortur pode realizar quaisquer ações necessárias para aumentar o status divino de Alzakir e obter novas dádivas para ele. Em troca, Ghortur pode empunhar Alzakir como uma de suas armas e se beneficia de quaisquer dádivas que se apliquem a ele.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Paladino Único</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Um paladino único é um guerreiro sagrado, protetor, campeão e, muitas vezes, melhor amigo do deus menor. Cada paladino único fornece os seguintes benefícios. Iniciante: você recebe +2 em testes de ataque e na Defesa. Veterano: você pode usar a habilidade Golpe Divino* como um paladino de nível igual ao seu. Mestre: muda para +3 em testes de ataque e na Defesa, e você pode usar a habilidade Cura Pelas Mãos* como um paladino de nível igual ao seu.</p>
                  <p className="text-amber-950/85 font-medium mb-2 italic">*Se tiver alguma dessas habilidades, em vez disso seu custo diminui em –1 PM.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Devotos Fervorosos</h2>
              <div className="space-y-4 mb-8">
                  <p className="text-amber-950/85 font-medium mb-2">Você possui um grupo de capangas devotos que o acompanham como um único parceiro. Iniciante: seis devotos (deslocamento 9m, Defesa 10 + sua Sabedoria, 1 PV, dano 1d6+1 de perfuração cada). Veterano: o grupo aumenta para sete devotos. Mestre: o grupo aumenta para nove devotos e o dano deles se torna 1d8+1.</p>
                  <p className="text-amber-950/85 font-medium mb-2">Para usar os devotos em combate, você precisa gastar uma ação completa para posicionar cada um em um espaço desocupado em alcance curto. Uma vez posicionados, você pode gastar uma ação de movimento para fazê-los se mover seu deslocamento ou uma ação padrão para fazê-los causar dano automático a criaturas adjacentes. Os devotos falham automaticamente em qualquer teste oposto. Um devoto reduzido a 0 PV não pode ser usado pelo restante da cena. Para mais informações sobre capangas, veja Heróis de Arton, Capítulo 4: Regras Opcionais.</p>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Deuses Jogadores ou NPCs</h2>
              <div className="space-y-4">
                  <p className="text-amber-950/85 font-medium mb-2">As regras para se tornar um deus menor e promover sua divindade descritas aqui se destinam apenas a personagens jogadores que sejam deuses menores ou guardiões divinos. Demais deuses menores (ou seja, NPCs) dispensam estas regras.</p>
              </div>
          </div>
                {/* Seção Crossovers */}
                <section>
                <h2 className="text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Crossovers</h2>
                <p className="mb-4">
                    A matéria apresenta novos elementos de jogo para aqueles que desejam usar personagens devotos inspirados pela mitologia de Sandman, mas é declaradamente uma adaptação com bastante licença poética. Um exercício de imaginação. A presença dos seres e artefatos apresentados NÃO é oficial em Arton.
                </p>
                <p className="mb-6">
                    Dito isso, se crossovers não são sua praia, ou a mesa em que você joga usa alguns materiais de maneira mais estrita, converse com o grupo. É perfeitamente possível adaptar mecânicas ou conceitos apresentados aqui a outras divindades, ou aspectos da mitologia artoniana.
                </p>
                
                {/* Alerta de Conteúdo Não Oficial */}
                <div className="p-5 bg-[#e8dac1]/50 rounded-xl border-l-4 border-l-red-800 mb-2">
                    <p className="font-bold text-red-800 text-center tracking-wide uppercase">
                    Não é um material canônico. E sim herético. Use por sua conta e risco!
                    </p>
                </div>
                </section>

                {/* Seção O Panteão dos Perpétuos */}
                <section className="border-t-2 border-amber-900/20 pt-8 mt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 tracking-wide">O panteão dos perpétuos</h2>
                
                <p className="mb-4">
                    No começo, havia apenas a Noite e o Tempo. Da conjunção dessas entidades distantes, antes mesmo de que os seres vivos existissem, materializou-se o primeiro perpétuo. Como os demais seres desse tipo, não exatamente um deus. Algo mais. Não tinha nem mesmo nome real — era uma função fundamental do universo, tão duradoura quanto.
                </p>
                
                <p className="mb-4">
                    Da mesma maneira que deuses maiores esculpem o mundo com sua personalidade e caprichos, e seres com poder e seguidores o bastante se tornam deuses menores, perpétuos são capazes de imbuir os mortais que os seguem com poderes e dádivas.
                </p>
                
                <p className="mb-4">
                    Sua suposta existência é apenas especulada entre os intrigados teólogos de Arton, que atribuem os poderes dos clérigos dessas divindades a outras fontes, ou criam complexas teorias quanto à posição do panteão forasteiro na ordem cosmológica das coisas. Em termos práticos, alguém que não seja treinado em Religião, não consegue distinguir um perpétuo de divindades maiores, mas há diferenças sutis e marcantes.
                </p>
                
                <p className="mb-4">
                    Perpétuos são mais vulneráveis do que os deuses do panteão artoniano. Se forem afastados de seus reinos, e suas fontes de poder usurpadas, esses aspectos-vivos podem ser vencidos com relativa facilidade por criaturas poderosas. Mas logo são substituídos por um novo ser distinto. Outro ponto de vista do mesmíssimo aspecto ou função, com o mesmo nome.
                </p>
                
                <p className="mb-6">
                    Não são só as materializações de um conceito, mas o próprio conceito em si. Estão a serviço dos mortais, e diferente dos membros do Panteão, suas personalidades podem evoluir e mudar. Mesmo que isso demore milênios. Nenhuma pessoa prudente, contudo, jamais vislumbrará a possibilidade de matá-los. Pois se o sangue de um perpétuo for derramado, caberá àqueles que também o trazem em suas veias vingá-lo.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Cultos de Mistério</h3>
                <p className="mb-4">
                    Ao contrário de outras deidades artonianas, também não existem templos de acesso público consagrados a eles, ou religiões convencionais girando ao seu redor. Essas entidades são celebradas através dos chamados “cultos de mistério”: espécie de irmandades secretas que apenas os iniciados podem frequentar. Adentrar uma delas sempre envolve passar por algum tipo de ritual ou provação. Às vezes, isso é bastante dificultoso e complexo. Em outras, trilhar esse caminho é tão simples quanto conversar com o mestre de um séquito e pedir sua autorização.
                </p>
                <p className="mb-6">
                    Os templos dos perpétuos ficam em cavernas ou outros lugares escondidos. Os fiéis se identificam por meio de tatuagens, senhas e apertos de mão conhecidos apenas entre eles. O motivo da discrição é que nem todos os clérigos de Arton aceitam essa nova crença, que enxergam como herética. Outro motivo é serem seitas pequenas, sem o espaço e recurso de igrejas já estabelecidas. A última e principal distinção entre perpétuos e deuses são seus paladinos.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-red-800 uppercase tracking-wide mb-3">Os Paladinos dos Perpétuos</h3>
                <p className="mb-4">
                    Perpétuos podem ter quantos paladinos desejarem, como qualquer deus maior, mas esse tipo de herói a seu serviço é muito raro, pois só surgem em determinada ocasião: quando um perpétuo é removido da existência temporariamente, sendo aprisionado por um ritual, ou afastado de alguma outra maneira de seu reino.
                </p>
                <p className="mb-4">
                    Nesse caso, a realidade tenta compensar o vácuo deixado para trás. Forja um campeão especial, que reproduz a aparência do perpétuo (adaptada à sua própria cultura) e age inspirado pela entidade — mesmo que, muitas vezes, o próprio paladino não tenha consciência disso. Entre os perpétuos listados a seguir, apenas Morte e Sonho podem ter paladinos.
                </p>
                <p>
                    Segundo alguns viajantes extraplanares, existem sete perpétuos ao todo. Mas até hoje apenas o culto de quatro deles foi identificado nas terras do Reinado. O que não quer dizer que não existam outros escondidos por aí...
                </p>

                </section>
          
        </div>
      </div>
    </div>
  );
};

export default function DeusesPage() {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. ADICIONE ESTE USEEFFECT PARA TRAVAR O SCROLL DO FUNDO
  useEffect(() => {
    if (selectedGod) {
      document.body.style.overflow = "hidden"; // Trava o scroll
    } else {
      document.body.style.overflow = "auto"; // Libera o scroll
    }

    // Função de limpeza caso o componente desmonte com o modal aberto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedGod]);

  const filteredGods = gods
    .filter(
      (god) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        god.beliefs.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  // Função para fechar o modal clicando fora
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedGod(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
                <span className="text-red-800">Deuses</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">
        
        {/* Introdução e Explicação */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
              Deuses
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
            <p className="text-amber-950/85 font-medium text-lg leading-relaxed">
            Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
            </p>
        </div>

        <RulesSection />

        {/* Busca */}
            <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
                <div className="flex flex-col">
                    <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                        Buscar Divindade
                    </label>
                    {/* Container relativo apenas para o Input e a Lupa */}
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Buscar por nome ou doutrinas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                        />
                        <div className="absolute right-4 flex items-center justify-center text-amber-900/40 pointer-events-none text-lg">
                            <span>🔍</span>
                        </div>
                    </div>
                </div>
            </div>

        {/* Grid de Deuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
            {filteredGods.map((god) => (
            <button
                key={god.id}
                onClick={() => setSelectedGod(god)}
                className="group relative rounded-xl overflow-hidden bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] text-left flex flex-col font-serif"
            >
                {/* Imagem */}
                <div className="w-full h-56 border-b-2 border-amber-900/20 bg-[#f0e6d2] flex items-center justify-center relative overflow-hidden">
                    <ImageGallery images={god.image} alt={god.name} />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col bg-[#e8dac1]">
                    <h3 className="text-2xl font-bold text-amber-950 group-hover:text-red-800 transition-colors mb-2 tracking-wide">
                        {god.name}
                    </h3>
                    
                    {/* Subtítulo no card */}
                    {god.subtitle && (
                        <p className="text-amber-950/60 text-[10px] font-bold uppercase tracking-widest mb-3">
                            {god.subtitle}
                        </p>
                    )}

                    {/* Status Badge */}
                    {god.status && (
                        <div className={`self-start px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-amber-50 mb-4 shadow-sm ${getStatusColor(god.status)}`}>
                         {getStatusLabel(god.status)}
                        </div>
                    )}

                    {/* Descrição Breve */}
                    <p className="text-amber-950/85 text-sm line-clamp-3 leading-relaxed font-medium">
                        {god.history}
                    </p>
                </div>
            </button>
            ))}
        </div>

        {filteredGods.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum deus encontrado nos registros sagrados.
              </p>
            </div>
        )}

        
      </main>

      {/* Modal de Detalhes (Uma coluna só) */}
        {selectedGod && (
            <div 
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
            >
            {/* Container do Modal */}
            <div className="bg-[#fbf5e6] border-4 border-double border-amber-900/40 rounded-xl shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-4xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">
                
                {/* Botão de Fechar Absoluto */}
                <button
                    onClick={() => setSelectedGod(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 text-amber-950/70 hover:text-red-800 transition-colors z-20 bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
                >
                    ×
                </button>

                {/* Header Interno Estilizado */}
                <div className="p-6 md:p-12 pb-6 md:pb-8 border-b-2 border-amber-900/20 text-center font-serif mt-6 md:mt-0">
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-3 tracking-wider uppercase drop-shadow-sm">
                        {selectedGod.name}
                    </h2>
                    
                    {selectedGod.subtitle && (
                        <p className="text-amber-950/70 text-lg md:text-xl font-medium italic mb-4">{selectedGod.subtitle}</p>
                    )}

                    {selectedGod.status && (
                        <div className="flex justify-center mt-2">
                            <div className={`px-4 py-1.5 rounded-sm text-xs md:text-sm font-bold uppercase tracking-widest text-amber-50 shadow-sm ${getStatusColor(selectedGod.status)}`}>
                            {getStatusLabel(selectedGod.status)}
                            </div>
                        </div>
                    )}
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-5 md:p-12 pt-6 space-y-10 font-serif">
                    
                    {/* Imagem de Destaque no Modal */}
                    <div className="w-full bg-[#e8dac1]/50 h-80 md:h-96 flex items-center justify-center border-2 border-amber-900/20 rounded-xl overflow-hidden relative shadow-inner">
                          <ImageGallery images={selectedGod.image} alt={selectedGod.name} />
                    </div>

                    {/* História (Com Fundo Destaque) */}
                    {selectedGod.history && (
                        <div className="bg-[#e8dac1]/50 p-6 md:p-8 rounded-xl border-2 border-amber-900/20 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-amber-900/20"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                            História
                            </h3>
                            <p className="text-amber-950/90 leading-relaxed text-base md:text-lg whitespace-pre-line font-medium text-left md:text-justify first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left">
                            {selectedGod.history}
                            </p>
                        </div>
                    )}

                    {/* Lista com os dados (Coluna Única para melhor leitura) */}
                    <div className="flex flex-col gap-6">
                        
                        {selectedGod.rank && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Natureza & Status</h3>
                                <p className="text-amber-950/85 leading-relaxed whitespace-pre-line font-medium">{selectedGod.rank}</p>
                            </div>
                        )}

                        {selectedGod.motivations && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Motivações</h3>
                                <p className="text-amber-950/85 leading-relaxed whitespace-pre-line font-medium">{selectedGod.motivations}</p>
                            </div>
                        )}

                        {selectedGod.relationships && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Relações</h3>
                                <p className="text-amber-950/85 leading-relaxed whitespace-pre-line font-medium">{selectedGod.relationships}</p>
                            </div>
                        )}

                        {selectedGod.churchAndClergy && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Igreja e Clero</h3>
                                <p className="text-amber-950/85 leading-relaxed whitespace-pre-line font-medium">{selectedGod.churchAndClergy}</p>
                            </div>
                        )}

                        {selectedGod.otherNames && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Outros Nomes</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.otherNames}</p>
                            </div>
                        )}

                        {selectedGod.areasOfInfluence && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Áreas de Influência</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.areasOfInfluence}</p>
                            </div>
                        )}

                        {selectedGod.beliefs && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Crenças e Objetivos</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.beliefs}</p>
                            </div>
                        )}
                        
                        {selectedGod.motto && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10 text-center">
                                <h3 className="text-sm font-bold text-red-800/60 mb-2 uppercase tracking-widest">Lema</h3>
                                <p className="text-amber-950/90 text-xl md:text-2xl leading-relaxed italic font-bold">"{selectedGod.motto}"</p>
                            </div>
                        )}

                        {selectedGod.significantColors && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Cores Significativas</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.significantColors}</p>
                            </div>
                        )}

                        {selectedGod.sacredSymbol && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Símbolo Sagrado</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.sacredSymbol}</p>
                            </div>
                        )}

                         {selectedGod.channelEnergy && (
                             <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Canalizar Energia</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.channelEnergy}</p>
                            </div>
                        )}

                        {selectedGod.preferredWeapon && (
                            <div className="bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                <h3 className="text-lg font-bold text-red-800 mb-2 uppercase tracking-wide">Arma Preferida</h3>
                                <p className="text-amber-950/85 leading-relaxed font-medium">{selectedGod.preferredWeapon}</p>
                            </div>
                        )}
                    </div>

                    {/* Devotos */}
                    {selectedGod.devotees && (
                        <div className="border-t-2 border-amber-900/20 pt-8">
                            <h3 className="text-2xl font-bold text-red-800 mb-4 tracking-wide">Devotos</h3>
                            <p className="text-amber-950/85 leading-relaxed text-lg font-medium bg-[#e8dac1]/30 p-5 rounded-xl border border-amber-900/10">
                                {selectedGod.devotees}
                            </p>
                        </div>
                    )}

                    {/* Poderes Concedidos */}
                    {selectedGod.grantedPowers && selectedGod.grantedPowers.length > 0 && (
                        <div className="border-t-2 border-amber-900/20 pt-8">
                            <h3 className="text-2xl font-bold text-red-800 mb-6 tracking-wide">Poderes Concedidos</h3>
                            <div className="flex flex-wrap gap-3">
                            {selectedGod.grantedPowers.map((power: string, index: number) =>  (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-lg bg-[#fbf5e6] border-2 border-amber-900/20 text-amber-950 font-bold shadow-sm"
                                >
                                    {power}
                                </span>
                            ))}
                            </div>
                        </div>
                    )}

                    {/* Obrigações e Restrições */}
                    {selectedGod.obligationsRestrictions && (
                        <div className="p-6 md:p-8 bg-[#fbf5e6] border-2 border-dashed border-red-800/40 rounded-xl shadow-sm mt-8">
                            <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide uppercase">
                                Obrigações e Restrições
                            </h3>
                            <p className="text-amber-950/90 leading-relaxed whitespace-pre-line font-medium text-lg">
                                {selectedGod.obligationsRestrictions}
                            </p>
                        </div>
                    )}

                </div>
            </div>
            </div>
        )}

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