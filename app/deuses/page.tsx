"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { God, getStatusLabel, getStatusColor } from "@/types/god";
import { gods } from "@/data/gods";

// --- Componente de Galeria ---
// Mantido estrutura, alterado apenas cores dos "pontinhos" para combinar com o tema
function ImageGallery({ images, alt }: { images: string | string[]; alt: string }) {
  const imageList = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4 segundos
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imageList.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out mix-blend-multiply filter sepia-[0.2] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
       {/* Indicadores (pontinhos) - Cores ajustadas para o tema claro */}
       {imageList.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {imageList.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-red-700 w-3" : "bg-amber-900/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DeusesPage() {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded hover:border-amber-700/80 transition-all group shadow-sm hover:shadow-[0_4px_20px_rgba(69,26,3,0.1)]"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-70">📜</span>
          <div className="text-left">
            <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors">
              Regras de Devoções
            </h2>
            <p className="text-sm text-amber-900/60 font-serif italic font-bold">
              Clique para regras de Divindades e Devoções.
            </p>
          </div>
        </div>
        <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 bg-[#fbf5e6]/80 border-x-2 border-b-2 border-amber-900/20 rounded-b text-amber-900/90 font-serif leading-relaxed space-y-12 text-lg">
          
          {/* Introdução do Texto */}
          <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Escolhendo seu deus</h2>
                <p className="text-amber-900/80 font-medium mb-2">Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
                <p className="text-amber-900/80 font-medium mb-2">Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
                <p className="text-amber-900/80 font-medium mb-2">Ao se tornar devoto, você recebe um poder concedido à sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião).</p>
                <p className="text-amber-900/80 font-medium mb-2">Devotos são todos os personagens, aventureiros ou não, que aceitam venerar uma divindade do Panteão, seguindo suas Obrigações & Restrições. Em troca, passam a ter acesso aos poderes concedidos. Um personagem pode se tornar devoto através de habilidade de classe (clérigo, druida, frade, paladino) ou pertencendo a uma raça ou classe permitida para cada deus.</p>
                <p><span className="text-amber-700 font-bold">Raças </span><span className="text-amber-900/80 font-medium">Humanos, meios-elfos, meios-orcs, minauros, moreau e finntroll (vistos em Ameaças de Arton) são livres para escolher qualquer divindade. Membros de outras raças podem se tornar devotos de certas divindades quando a raça aparece em sua lista de devotos, não importando a classe.</span></p>
                <p><span className="text-amber-700 font-bold">Exceção </span><span className="text-amber-900/80 font-medium">Suraggel sempre podem ser devotos da divindade relacionada a sua herança planar.</span></p>
                <p><span className="text-amber-700 font-bold">Classes </span><span className="text-amber-900/80 font-medium">Clérigos e frades são livres para escolher qualquer divindade como padroeira, não importando sua raça. Druidas e paladinos são restritos a certos deuses, listados em suas habilidades de classe. Membros de outras classes podem se tornar devotos de uma divindade quando a classe aparece em sua lista de devotos, não importando a raça.</span></p>
                <p><span className="text-amber-700 font-bold">Exceção </span><span className="text-amber-900/80 font-medium">feiticeiros abençoados sempre podem ser devotos do deus de sua herança de linhagem.</span></p>
                <p><span className="text-amber-700 font-bold">Multiclasse </span><span className="text-amber-900/80 font-medium">No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</span></p>
            </div>
            <hr className="border-amber-900/10" />
            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Características dos deuses</h2>
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                    <p><span className="text-amber-700 font-bold"> Crenças e Objetivos:</span><span className="text-amber-900/80 font-medium"> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</span></p>
                    <p><span className="text-amber-700 font-bold"> Símbolo Sagrado:</span><span className="text-amber-900/80 font-medium"> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</span></p>
                    <p><span className="text-amber-700 font-bold"> Canalizar Energia:</span><span className="text-amber-900/80 font-medium"> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</span></p>
                    <p><span className="text-amber-700 font-bold"> Arma Preferida:</span><span className="text-amber-900/80 font-medium"> A arma típica de devotos do deus, importante para certas habilidades e magias.</span></p>
                </div>
            </div>
            <hr className="border-amber-900/10" />
            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Deuses Menores</h2>
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                    <p className="text-amber-900/80 font-medium mb-2">Dizem que o poder do Panteão vem de seus adoradores. Quanto mais amada, prestigiada e respeitada uma divindade, mais poderosa ela é. Embora seja uma teoria bastante aceita nos círculos religiosos, explicando numerosos eventos na história de Arton, ela também traz consigo uma contradição: os deuses já existiam muito antes de seus devotos pisarem sobre Arton. De onde, então, provinha sua força? Como podiam ostentar seus milagres, travar suas batalhas, forjar seus mundos? Talvez isso nunca seja descoberto. Contudo, uma hipótese radical e controversa afirma que os deuses seriam, no início, muito menos poderosos do que são hoje. Capazes de forjar conceitos da realidade, mas não tão distantes dos mortais que viriam a criar. Então, quando começaram a ser venerados, esses deuses teriam alcançado o status atual.</p>
                    <p className="text-amber-900/80 font-medium mb-2">Essa hipótese é parcialmente corroborada pela existência atual de seres acima dos mortais, mas abaixo do Panteão. Seres, talvez, semelhantes ao que os deuses eram no início de tudo. São os deuses menores.</p>
                    <p className="text-amber-900/80 font-medium mb-2">Enquanto os vinte deuses maiores governam aspectos amplos e importantes da existência — Vida, Morte, Sol, Trevas, Paz, Guerra… —, cada deus menor está relacionado a um único povo, criatura, local, arte, ciência, emoção ou ideia. Existe o Deus da Vaidade, o Deus das Viagens, a Deusa das Avós e centenas de outros. Um deus menor surge quando um bom número de seres inteligentes escolhe cultuá-lo, adorar como divino aquilo que ele representa. Cada vez que um artoniano mostra deferência a algo ou alguém, sempre que expressa seu fascínio, respeito e gratidão, pode estar contribuindo para a ascensão de um novo deus.</p>
                    <p className="text-amber-900/80 font-medium mb-2">Embora sejam intitulados “deuses”, a diferença entre eles e um membro do Panteão é abismal — muitos, inclusive, acham blasfemo chamá-los assim. Os Vinte são quase onipotentes em comparação. Ainda que alguns deuses menores estejam entre os seres mais poderosos de Arton, a maioria seria incapaz de desafiar o avatar de um deus maior, talvez pudesse tombar frente a aventureiros experientes. Muitos são na verdade entidades modestas, ainda capazes de prover pequenos milagres a seus parcos devotos, mas sem outras habilidades extraordinárias.</p>
                </div>
                <hr className="border-amber-900/10" />
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">Menores, mas Necessários</h3>
                    <p className="text-amber-900/80 font-medium mb-2">Por que existem deuses menores? Por que o Panteão permite que atuem, arrebanhando seus seguidores, diluindo a devoção das populações mortais? Talvez isso não os afete de modo algum? Talvez sejam impotentes para fazer algo a respeito, pois significaria privar os mortais de seu livre-arbítrio? Essas podem ser razões legítimas, mas existe um fator mais importante: sempre deve haver vinte. Quando um deus cai, quando o Panteão está incompleto, o equilíbrio cósmico decretado pelo Nada e pelo Vazio é perturbado — Arton passa por catástrofes, pode acabar despedaçada. Assim, deuses menores são como uma medida de segurança para evitar essa calamidade. Sempre que uma divindade maior deixa seu posto, outra ascende em seu lugar. Tais eventos já ocorreram na história de Arton, sempre trazendo consequências, mas também assegurando a continuidade da existência.</p>
                    <p className="text-amber-900/80 font-medium mb-2">Perceba que nem todos os seres poderosos se tornam deuses menores — ou sequer buscam esse status. Como exemplos mais evidentes temos os arquimagos Talude e Vectorius. Ambos rivalizam o título de mais poderoso arcanista vivente em Arton (isso é, espera-se que Talude ainda esteja entre os vivos...). Com seus nomes amplamente conhecidos e respeitados através dos reinos, qualquer um deles poderia se tornar deus menor com certa facilidade se assim quisesse. Contudo, Talude jamais aceitaria tal coisa por sua própria devoção a Wynna — cogitar ser um deus ele próprio seria enorme desrespeito à amada padroeira. Vectorius, por sua vez, tem a convicção de que cabe a cada conjurador conquistar seus poderes com esforço próprio, em vez de apenas recebê-los como alguma graça concedida. Outros indivíduos poderosos não querem se tornar deuses porque essa posição demanda responsabilidades constantes (veja adiante).</p>
                    <p className="text-amber-900/80 font-medium mb-2">Por outro lado, deuses menores podem ser ativamente criados — não apenas por aqueles que buscam o título para si mesmos, mas também por aqueles que consideram algo importante e merecedor de devoção. Um bardo obcecado por uma canção poderia entoá-la taverna após taverna, arrebanhando devotos para a futura Deusa da Balada de Nova Malpetrim. Da mesma forma, uma serva leal e apaixonada de um vilão caído tentaria iniciar um culto para, talvez, ressuscitá-lo como divindade. Tanto o bardo quanto a serva consideram a canção ou o vilão algo sagrado.</p>
                </div>
            </div>
            <hr className="border-amber-900/10" />
            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Características de Deuses Menores</h2>
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                <p className="text-amber-900/80 font-medium mb-2">Todos os deuses menores possuem suas próprias crenças e objetivos, seu símbolo sagrado e todas as demais características dos deuses descritas em Tormenta20. Além dessas, cada deus menor possui uma natureza e um status divino.</p>
                <p><span className="text-2xl text-amber-700 font-bold"> Natureza</span></p>
                <p className="text-amber-900/80 font-medium mb-2">Divindades menores podem emergir de simples mortais, sejam humanos ou qualquer outra raça. Várias outras são animais, monstros ou objetos. Outras ainda são criaturas únicas que surgem espontaneamente, como resultado da adoração voltada a certo objetivo. Deuses podem resultar de atos, eventos ou até ideias — enfim, qualquer coisa em que as pessoas acreditem. Um Deus da Pesca não precisaria se originar necessariamente de um pescador mortal; poderia surgir pela simples devoção dos pescadores a seu ofício.</p>
                <p className="text-amber-900/80 font-medium mb-2">Muitos seres se tornaram deuses menores por sua majestade e soberania extremas; os Dragões-Reais são divindades com seus próprios cultos. Também não é raro um herói alcançar esse status, venerado através dos reinos por suas façanhas. Bastante conhecida é a trajetória da elfa Gwendolynn, antiga clériga de Tanna-Toh que, após colocar fim ao escravagismo dos minotauros, se tornou Deusa da Liberdade.</p>
                <p className="text-amber-900/80 font-medium mb-2">Cada deus menor tem uma natureza entre as seguintes.</p>
                <p><span className="text-amber-700 font-bold"> Conceito Vivo:</span><span className="text-amber-900/80 font-medium"> A divindade se origina de uma ideia, um ato ou um evento específicos, que desperta a fé e devoção de um número suficiente de pessoas. Diferente de outros deuses menores, um conceito vivo não tem forma física.</span></p>
                <p><span className="text-amber-700 font-bold"> Entidade Primordial:</span><span className="text-amber-900/80 font-medium"> São seres fundamentais, necessários para a vida dos artonianos ou para a própria existência em Arton, que surgiram espontaneamente nos primórdios da Criação. Embora sejam quase tão antigos quanto o próprio mundo, apenas aqueles que atraem a atenção de devotos se tornam deuses menores.</span></p>
                <p><span className="text-amber-700 font-bold"> Dragão-Real:</span><span className="text-amber-900/80 font-medium"> Feras ancestrais de enorme poder físico e místico. Aqueles que descendem do pai de todos os dragões, Kallyadranoch, são dotados também de centelha divina, ocupando o posto de deuses menores. Alguns, como Sckhar, o Dragão-Rei do Fogo, exibem seu status divino abertamente; outros podem escolher formas mais discretas de exercer sua divindade.</span></p>
                <p><span className="text-amber-700 font-bold"> Mortal Ascendido:</span><span className="text-amber-900/80 font-medium"> Este é o caminho dos mortais que buscam alcançar a divindade. Heróis que realizam grandes feitos podem atrair a admiração, e a devoção, daqueles impactados positivamente por seus atos. Mestres de habilidade extrema podem se tornar paradigmas divinos de sua arte ou técnica. Mesmo criaturas ditas irracionais, como animais, podem se tornar símbolos que despertam a fé de outros.</span></p>
                <p><span className="text-amber-700 font-bold"> Objeto Desperto:</span><span className="text-amber-900/80 font-medium"> Um item inanimado, como uma arma ou estatueta, pode se tornar magicamente consciente e ser cultuado por adoradores. Sua consciência pode ser resultado de um grande feito em que teve participação, ou fruto de algum ritual que lhe concedeu grande poder. Objetos despertos geralmente não se movem, repousando em um santuário ou local seguro. Não raro, sua localização é destino de devotos peregrinos.</span></p>

                <p><span className="text-2xl text-amber-700 font-bold"> Status Divino</span></p>
                <p className="text-amber-900/80 font-medium mb-2">Esta é a medida do poder de um deus menor. Opera em uma escala de 1 a 5 (status maiores que 5 correspondem a deuses maiores) e indica quais habilidades ele é capaz de conceder a seus devotos e quantas dádivas pessoais pode acumular.</p>
                <p><span className="text-amber-700 font-bold"> Status 1:</span><span className="text-amber-900/80 font-medium"> Estes “deuses” são pouco mais que santos ou heróis locais. Um deus menor de status 1 pode ser um ídolo de origem misteriosa, uma formação natural peculiar, uma antiga joia de família ou algum animal curioso da região — como aquela raposa de esperteza ímpar que sempre evita todas as armadilhas. Outros ainda são líderes carismáticos, que sequer se consideram “deuses”, até ficando constrangidos quando são chamados assim. É quase impossível para este deus menor ser conhecido por qualquer pessoa afastada de seu círculo. Seu culto é restrito a aldeias, famílias, tribos ou pequenos grupos de cultistas.</span></p>
                <p><span className="text-amber-700 font-bold"> Status 2:</span><span className="text-amber-900/80 font-medium"> Este deus tem considerável poder pessoal, e seus feitos divinos já alcançam fiéis longe das fronteiras de sua região de origem. Além de sua própria potência divina, conta com o apoio de um grande número de adoradores e/ou de uma modesta organização formal estabelecida, capaz de acolher novos devotos e transmitir suas crenças.</span></p>
                <p><span className="text-amber-700 font-bold"> Status 3:</span><span className="text-amber-900/80 font-medium"> Neste nível surgem deuses menores cujos nomes são entoados através de reinos inteiros, ou conhecidos mesmo em terras distantes. Podem ser animais ou monstros de determinado tipo — um Deus dos Coelhos, uma Deusa das Múmias, um Deus dos Trobos. Estes deuses também podem estar ligados a emoções menores, fenômenos estranhos, objetos importantes, festivais locais ou atividades valiosas. Tais deuses possuem um considerável número de fiéis e muitas vezes contam com algum tipo de organização, local ou regional, capaz de oferecer suporte ao culto e alcançar novos devotos. Grande parte dos deuses menores mais conhecidos em Arton atingiu este status.</span></p>
                <p><span className="text-amber-700 font-bold"> Status 4:</span><span className="text-amber-900/80 font-medium"> Neste status estão vários deuses menores que representam grandes povos ou raças (isso é, aqueles sem seu próprio deus maior), como Hurlaagh, o Deus dos Hobgoblins. Ou ideias poderosas, como o Deus das Cidades. Ou ainda aspectos culturais muito importantes em nações inteiras, como Hippion, o Deus dos Cavalos, cultuado no reino equestre de Namalkah. Um povo que cultua sua própria divindade criadora pode também venerar certo número de deuses menores. Os anões reconhecem Khalmyr e Tenebra como seus deuses principais. Contudo, muitos são devotados a Goharom, o Deus dos Machados; Granto, o Deus dos Escultores; Klangor, o Deus das Armaduras, e Zakharov, o Deus da Bravura, entre outros.</span></p>
                <p><span className="text-amber-700 font-bold"> Status 5:</span><span className="text-amber-900/80 font-medium"> Os mais soberanos e influentes deuses menores estão também entre os seres mais poderosos de Arton. Talvez os exemplos mais conhecidos sejam os Dragões-Reais divinos, como Sckhar e Beluhga, ou Tibar, o Deus do Comércio. Até onde se sabe, estes deuses são os únicos capazes de ascender como divindades maiores quando o Panteão está incompleto.</span><span className="text-amber-900/80 font-medium"> Deuses menores deste status já foram mais numerosos. Muitos, no entanto, acabaram abatidos durante a histórica e devastadora Batalha dos Deuses contra as forças da Tormenta, pela retomada de Tamura. Na falta de bons substitutos viáveis, dizem que Valkaria vem trazendo a Arton oportunidades (alguns dizem “problemas”) para que mais deuses menores prosperem. Alguns de seus irmãos concordam com a iniciativa, outros a rejeitam — talvez temendo serem derrotados por futuros aspirantes.</span></p>

                <p><span className="text-2xl text-amber-700 font-bold"> Deuses Menores e Paladinos</span></p>
                <p className="text-amber-900/80 font-medium mb-2">Estes campeões divinos são um luxo para deuses menores; abençoá-los com poderes especiais muitas vezes está no limite de suas capacidades. Assim, um deus menor que aceite paladinos entre seus seguidores pode ter apenas um deles por vez. Este guerreiro santo costuma ser responsável pela segurança pessoal do deus, atuando como fiel guarda-costas, mas também pode ser enviado em missões especiais. A ligação entre um deus menor e seu paladino único é sempre muito forte — mais que servo e senhor, muitas vezes são grandes amigos, ou mesmo amantes.</p>
                </div>
            </div>
            <hr className="border-amber-900/10" />
            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Devotos de Deuses Menores</h2>
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                <p className="text-amber-900/80 font-medium mb-2">Todos os deuses menores podem ter clérigos e frades. Conforme suas naturezas, também podem ter druidas e paladinos, bem como aceitar devotos de outras raças ou classes.</p>
                    <p><span className="text-amber-700 font-bold"> Círculos de Magias:</span><span className="text-amber-900/80 font-medium"> Devotos de deuses menores em classes conjuradoras divinas (clérigos, druidas, frades...) podem aprender e lançar magias até o círculo máximo que seu deus oferece, mesmo que o nível do devoto permita acesso a círculos superiores. Quando esse limite é atingido, existem três caminhos possíveis para o conjurador: acatar a limitação por lealdade ao deus; abandonar sua devoção e buscar uma divindade mais poderosa, ou ativamente buscar elevar o status de sua divindade, arrebanhando mais devotos e/ou realizando outros feitos que promovam sua causa.</span><span className="text-amber-900/80 font-medium"> Essa limitação é apenas para os seus devotos. Se você for um conjurador divino (clérigo, druida ou frade), ou por qualquer outro efeito puder lançar magias divinas, e se tornar um deus menor, continua mantendo sua capacidade de lançar qualquer círculo de magias que já pudesse lançar, independente de seu status divino. Por exemplo, se você for um clérigo de 13º nível e um deus menor de status 2, continua podendo lançar magias de 4º círculo.</span></p>
                    <p><span className="text-amber-700 font-bold"> Poder Concedido:</span><span className="text-amber-900/80 font-medium"> Cada deus menor oferece um único poder concedido. Para devotos de classes divinas (que normalmente teriam acesso a dois poderes concedidos), em vez de um segundo poder, o devoto recebe uma quantidade de PM adicionais igual a 1 + o status divino do deus, limitada por seu nível.</span></p>
            
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Deuses</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Introdução e Explicação */}
        <div className="mb-12 w-full space-y-6 text-lg leading-relaxed">
            <div>
                <h1 className="text-5xl font-bold text-amber-800 mb-6 border-b-2 border-amber-900/20 pb-2">
                Deuses
                </h1>
                <p className="text-amber-900/80 font-medium">
                Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
                </p>
            </div>

            <RulesSection />

        </div>

        {/* Busca */}
            <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
                <div className="flex flex-col">
                    <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                        Buscar Divindade
                    </label>
                    {/* Container relativo apenas para o Input e a Lupa */}
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Buscar por nome ou crenças..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
                        />
                        <div className="absolute right-4 flex items-center justify-center text-amber-900/40 pointer-events-none">
                            <span className="text-xl">🔍</span>
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
                className="group relative rounded overflow-hidden bg-[#e8dac1] border border-amber-900/30 hover:border-amber-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] text-left flex flex-col"
            >
                {/* Imagem - Alterada para usar o componente ImageGallery */}
                <div className="w-full h-56 border-b border-amber-900/10 bg-[#f0e6d2] flex items-center justify-center relative overflow-hidden">
                    <ImageGallery images={god.image} alt={god.name} />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col bg-[#e8dac1]">
                    <h3 className="text-2xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-2 font-serif">
                        {god.name}
                    </h3>
                    
                    {/* ADIÇÃO: Subtítulo no card (se existir) */}
                    {god.subtitle && (
                        <p className="text-amber-900/60 text-xs font-bold uppercase tracking-widest mb-2 -mt-1">
                            {god.subtitle}
                        </p>
                    )}

                    {/* Status Badge */}
                    {god.status && (
                        <div className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-amber-50 border mb-3 ${getStatusColor(god.status)}`}>
                         {getStatusLabel(god.status)}
                        </div>
                    )}

                    {/* Descrição Breve */}
                    <p className="text-amber-900/80 text-sm line-clamp-3 font-serif leading-relaxed font-medium">
                        {god.history}
                    </p>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
            </button>
            ))}
        </div>

        {filteredGods.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhum deus encontrado nos registros sagrados.</p>
            </div>
        )}

        {/* Modal */}
        {selectedGod && (
            <div 
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
            {/* Container do Modal */}
            <div className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar bg-[url('/noise.png')] relative">
                
                {/* Header do Modal */}
                <div className="sticky top-0 bg-[#f2e8d5]/95 backdrop-blur border-b border-amber-900/20 p-6 flex items-start justify-between z-10">
                    <div>
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-2 font-serif tracking-wide">
                            {selectedGod.name}
                        </h2>
                        {/* ADIÇÃO: Subtítulo no header do modal */}
                        {selectedGod.subtitle && (
                            <p className="text-amber-900/60 text-lg font-serif italic mb-2">{selectedGod.subtitle}</p>
                        )}

                        {selectedGod.status && (
                            <div className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest text-amber-50 border ${getStatusColor(selectedGod.status)}`}>
                            {getStatusLabel(selectedGod.status)}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setSelectedGod(null)}
                        className="text-amber-900/60 hover:text-red-800 text-3xl transition-colors leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-8 md:p-10 space-y-10 font-serif">
                    
                    {/* Imagem de Destaque no Modal */}
                    <div className="w-full bg-[#fbf5e6] h-80 flex items-center justify-center border border-amber-900/20 rounded overflow-hidden relative shadow-inner">
                          <ImageGallery images={selectedGod.image} alt={selectedGod.name} />
                    </div>

                    {/* História */}
                    <div className="bg-[#fffaf0] p-6 rounded border border-amber-900/20 shadow-sm">
                        <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                         História
                        </h3>
                        <p className="text-amber-900/90 leading-relaxed text-lg whitespace-pre-line font-medium text-justify">
                        {selectedGod.history}
                        </p>
                    </div>

                    {selectedGod.rank && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                             Natureza & Status
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.rank}
                            </p>
                        </div>
                    )}

                    {/* Motivações */}
                    {selectedGod.motivations && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                             Motivações
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.motivations}
                            </p>
                        </div>
                    )}

                    {/* Relações */}
                    {selectedGod.relationships && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Relações
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.relationships}
                            </p>
                        </div>
                    )}

                    {/* Igreja e Clero */}
                    {selectedGod.churchAndClergy && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Igreja e Clero
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.churchAndClergy}
                            </p>
                        </div>
                    )}

                    {/* Grid com os dados */}
                    <div className="flex flex-col gap-2">
                        
                        {/* Outros Nomes */}
                        {selectedGod.otherNames && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                Outros Nomes
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.otherNames}</p>
                            </div>
                        )}

                        {/* Áreas de Influência */}
                        {selectedGod.areasOfInfluence && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                Áreas de Influência
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.areasOfInfluence}</p>
                            </div>
                        )}

                        {/* Crenças e Objetivos */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Crenças e Objetivos
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.beliefs}
                            </p>
                        </div>
                        
                        {/* Lema */}
                        {selectedGod.motto && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                Lema
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed italic font-medium">"{selectedGod.motto}"</p>
                            </div>
                        )}

                         {/* Cores Significativas */}
                         {selectedGod.significantColors && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                Cores Significativas
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.significantColors}</p>
                            </div>
                        )}

                        {/* Símbolo Sagrado */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Símbolo Sagrado
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.sacredSymbol}
                            </p>
                        </div>

                         {/* Canalizar Energia */}
                         <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Canalizar Energia
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.channelEnergy}
                            </p>
                        </div>

                        {/* Arma Preferida */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            Arma Preferida
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.preferredWeapon}
                            </p>
                        </div>
                    </div>

                    {/* Devotos */}
                    <div className="border-t border-amber-900/20 pt-8">
                        <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                        Devotos
                        </h3>
                        <p className="text-amber-900/80 leading-relaxed text-lg font-medium">
                        {selectedGod.devotees}
                        </p>
                    </div>

                    {/* Poderes Concedidos */}
                    <div>
                        <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                        Poderes Concedidos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedGod.grantedPowers.map((power: string, index: number) =>  (
                            <div
                            key={index}
                            className="p-4 rounded bg-[#e8dac1] border border-amber-900/20 text-amber-950 font-bold hover:border-amber-700/50 transition-colors shadow-sm"
                            >
                            {power}
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Obrigações e Restrições */}
                    <div className="p-6 bg-[#fbf5e6] border-2 border-dashed border-red-900/30 rounded">
                        <h3 className="text-2xl font-bold text-red-800 mb-3 flex items-center gap-2">
                        Obrigações e Restrições
                        </h3>
                        <p className="text-amber-900/90 leading-relaxed font-medium">
                        {selectedGod.obligationsRestrictions}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )}
      </main>
       {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}