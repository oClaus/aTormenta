import { GameClass } from "@/types/class";
import { title } from "process";

export const classes: GameClass[] = [
    { id: "Arcanista",
  name: "Arcanista",
  powersUrl: "/poderes/arcanista",
  origin: "tormenta20 - jogo do ano",
  image: "/classes/arcanista.png",
  description: "A magia é a força mais poderosa de Arton. Está presente em todas as grandes maravilhas deste mundo, impregnada nas muralhas e torres dos maiores castelos e masmorras. Criaturas fantásticas são tocadas pela magia, armas e artefatos lendários são imbuídos de poder mágico. Mesmo assim, a magia permanece um mistério. Ninguém pode dizer que compreende totalmente esta força caprichosa, imprevisível, devastadora e deslumbrante. A magia esconde segredos infinitos, desde o truque de um ilusionista de rua até o poder de uma bola de fogo, desde o encanto para aprimorar uma espada até o segredo de cruzar dimensões. \n O arcanista é o grande mestre da magia. Muitos aventureiros aprendem algum rudimento das artes místicas, mas não têm noção de seu verdadeiro potencial e do perigo inerente a usá-las sem aprofundamento. Apenas um arcanista dedicado é capaz de dobrar a própria realidade. \n Este entendimento pode mexer com a mente de qualquer um. Alguns arcanistas se tornam arrogantes e distantes — como não se sentir superior possuindo poder para quebrar leis naturais? Os deuses podem comandar a Criação, mas os arcanistas conhecem as brechas no que eles criaram e sabem que nem todos os comandos divinos precisam ser seguidos. Outros arcanistas, vislumbrando algo tão maior que eles mesmos, tornam-se humildes, até mesmo niilistas. Prefeririam continuar na ignorância a ter noção do “outro lado” da realidade. Existem até mesmo arcanistas que enlouquecem na busca por poder e conhecimento. \n Esta busca é constante, pois a disciplina da magia exige dedicação total. Em início de carreira, os arcanistas costumam ser fracos, frágeis, quase indefesos. Contudo, à medida que sua experiência aumenta, logo se tornam oponentes formidáveis. Em vez de serem protegidos por seus aliados, tomam para si o papel de protetores e líderes. \n Nenhum arcanista é igual ao outro. Alguns encaram a magia como um conjunto de rituais e fórmulas que deve ser estudado e decorado. Outros têm forte ligação com um objeto de poder, através do qual canalizam seus feitiços. Outros ainda possuem capacidades arcanas brutas dentro de si desde o nascimento, apenas aprendendo a controlar e refinar este potencial. Seja como for, a magia nunca é banal, nunca é sutil e nunca é totalmente previsível. Mesmo em escolas mágicas como a Grande Academia Arcana, professores e alunos ficam fascinados com o que veem todos os dias. Mesmo o mais simples truque exige gestos, invocações, palavras secretas e grande concentração. Mesmo o feitiço mais codificado e esmiuçado esconde facetas que podem surpreender seu usuário. \n Descartando armaduras, armas e escudos em favor de robes, livros e varinhas, os arcanistas desafiam os perigos de Arton com seu intelecto, dedicação e personalidade. Abrindo mão de conhecimentos mundanos em troca de segredos obscuros, sabem pouco da vida cotidiana, mas muito sobre a natureza oculta do universo. Dedicando sua juventude ao estudo e aprimoramento, mais tarde se tornam poderosos, invencíveis ou até mesmo imortais.",
  famousExamples: [
    "Aylarianna Purpúrea",
    "Gradda",
    "Ichabod",
    "Reynard",
    "Ripp",
    "Rufus Domat",
    "Salini Alan",
    "Talude",
    "Vladislav Tpish",
    "Vectorius",
  ],
  characteristics: {
    pvBase: "8 + Constituição",
    pvPerLevel: "2 + Constituição",
    pmPerLevel: "6 PM por nível"
  },
  skills: {
  mandatory: ["Misticismo (Int)", "Vontade (Sab)"],
  optional: {
    skills: [
      "Conhecimento (Int)",
      "Diplomacia (Car)",
      "Enganação (Car)",
      "Guerra (Int)",
      "Iniciativa (Des)",
      "Intimidação (Car)",
      "Intuição (Sab)",
      "Investigação (Int)",
      "Nobreza (Int)",
      "Ofício (Int)",
      "Percepção (Sab)"
    ],
    count: 2
    }
  },
  proficiency: "Nenhuma",
  abilities: [
    {
    name: "Caminho do Arcanista",
    description: "A magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme suas próprias regras. Escolha uma das opções a seguir. Uma vez feita, essa escolha não pode ser mudada.",
    subAbilities: [
      {
        name: "Bruxo",
        description: "Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência."
      },
      {
        name: "Feiticeiro",
        description: "Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes (veja em Extras logo abaixo). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma."
      },
      {
        name: "Mago",
        description: "Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco (veja Bruxo) e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência."
      }
    ]
    },
    {
      name: "Magias",
      description: "Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma seu atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia."
    },
    {
      name: "Poder de Arcanista",
      description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Arcanista ou Poder Geral."
    },
    {
      name: "Alta Arcana",
      description: "No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo)."
    },
  ],
  levelProgression: [
    { level: 1, abilities: "Caminhos do arcanista, magias (1º círculo)" },
    { level: 2, abilities: "Poder de arcanista" },
    { level: 3, abilities: "Poder de arcanista" },
    { level: 4, abilities: "Poder de arcanista" },
    { level: 5, abilities: "Magias (2º círculo), poder de arcanista" },
    { level: 6, abilities: "Poder de arcanista" },
    { level: 7, abilities: "Poder de arcanista" },
    { level: 8, abilities: "Poder de arcanista" },
    { level: 9, abilities: "Magias (3º círculo), poder de arcanista" },
    { level: 10, abilities: "Poder de arcanista" },
    { level: 11, abilities: "Poder de arcanista" },
    { level: 12, abilities: "Poder de arcanista" },
    { level: 13, abilities: "Magias (4º círculo), poder de arcanista" },
    { level: 14, abilities: "Poder de arcanista" },
    { level: 15, abilities: "Poder de arcanista" },
    { level: 16, abilities: "Poder de arcanista" },
    { level: 17, abilities: "Magias (5º círculo), poder de arcanista" },
    { level: 18, abilities: "Poder de arcanista" },
    { level: 19, abilities: "Poder de arcanista" },
    { level: 20, abilities: "Alta arcana, poder de arcanista" }
  ],
  extras: [
    {
    title: "Linhagens Sobrenaturais",
    description: "O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista. ",
    sections: [
      { title: "Linhagem Dracônica",
        intro: "Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio.",
        content: [
          { name: "Básica", description: " Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido." },
          { name: "Aprimorada", description: " Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado." },
          { name: "Superior", description: " Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia." },
        ]
      },
      { title: "Linhagem Feérica",
        intro: "Seu sangue foi tocado pelas fadas.",
        content: [
          { name: "Básica", description: " Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, à sua escolha." },
          { name: "Aprimorada", description: " A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM." },
          { name: "Superior", description: " Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena." },
        ]
      },
      { title: "Linhagem Rubra",
        intro: "Seu sangue foi corrompido pela Tormenta.",
        content: [
          { name: "Básica", description: " Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta." },
          { name: "Aprimorada", description: " Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo poder da Tormenta, você pode escolher uma nova magia. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma)." },
          { name: "Superior", description: " Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma)." },
        ]
      },
      { title: "Linhagem Abençoada",
        intro: "É consenso que devotos têm pactos sagrados com seus deuses. Recebem poderes miraculosos em troca de servir a seus objetivos com grande esforço e dedicação. Certos indivíduos, contudo, parecem violar essa regra suprema. São contemplados com dons divinos sem a necessidade de praticar nenhuma devoção. Já nascem com a centelha divina em seu sangue.\nFeiticeiros de linhagem abençoada são muito diferentes de sacerdotes e druidas. Manifestam suas conjurações de forma natural, sem necessidade de orações ou ritos a uma divindade — sequer precisam seguir suas crenças e objetivos, ou obedecer a suas Obrigações & Restrições.\nComo isso acontece é um mistério. Alguns acreditam que estes feiticeiros descendem de seres celestiais que se apaixonaram por mortais no passado. Outros dizem que são peões em alguma guerra cósmica. E, para outros, são criações casuais de deuses entediados. Feiticeiros abençoados podem surgir a qualquer momento e em qualquer lugar, da mais humilde família camponesa à mais rica casa nobre. É curioso como sua índole ou passado não parecem influenciar qual deus os abençoa. Um lutador violento pode ser tocado por Marah, enquanto uma dançarina de taverna pode receber a bênção de Thwor.\nOstentar tais poderes divinos pode ser tanto bênção quanto maldição — abençoados frequentemente se veem envolvidos em aventuras e desafios inesperados. Um jovem abençoado por um deus benevolente pode se tornar um herói admirado, enquanto outro, abençoado por uma divindade maligna, pode ser confundido com um cultista e forçado a fugir. Mesmo alguém que apenas busca uma vida tranquila pode se transformar em um campeão poderoso, lançando tempestades de fogo sobre seus inimigos.\nEmbora abençoados sejam geralmente bem recebidos por outros aventureiros, essa bênção pode gerar inveja. Sacerdotes podem se sentir ultrajados, especialmente se o feiticeiro recebeu seus poderes do mesmo deus que ele venera. A presença de um abençoado traz uma mistura de admiração e ciúmes.\nA relação dos abençoados com a fé pode variar. Alguns se dedicam ao deus que lhes concedeu poder, enquanto outros se ressentem por receber um dom indesejado e inconveniente. Em qualquer caso, abençoados costumam ter profunda conexão com o divino, seja em forma de adoração, seja de aversão.",
        content: [
          { name: "Básica", description: " Escolha um deus maior. Uma vez feita, essa escolha não pode ser mudada. Você aprende uma magia divina de 1º círculo e pode aprender magias divinas de 1º círculo como magias de feiticeiro. No 2º nível, você recebe um poder concedido do deus escolhido, aprovado pelo mestre, sem precisar ser devoto dele (mas você ainda pode ser devoto desse ou de outro deus)." },
          { name: "Aprimorada", description: " Suas magias divinas de círculo igual ou menor que sua Sabedoria custam –1 PM e você pode aprender magias divinas de 2º e 3º círculos como magias de feiticeiro." },
          { name: "Superior", description: " Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo a que tenha acesso, limitado por sua Sabedoria. A cada dia, após descansar, pode trocar essas magias por outras dos mesmos círculos. Por fim, pode aprender magias divinas de 4º e 5º círculos como magias de feiticeiro." },
        ]
      },
    ]
  }
  ]
    },
    { id: "Ladino",
    name: "Ladino",
    powersUrl: "/poderes/ladino",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/ladino.png",
    description: "A maior parte dos perigos pode ser evitada com um pouco de furtividade. A maior parte das dificuldades pode ser superada com um pouco de ouro subtraído de outra pessoa. A maior parte dos vilões pode ser vencida com uma boa mentira. E, quando nada disso dá certo, uma adaga nas costas resolve o problema. \n O ladino é o mais esperto, discreto, silencioso e malandro de todos os heróis. Um aventureiro que usa táticas que muitos consideram desleais, mas que para ele são apenas pragmáticas e lógicas. Ladinos se especializam em arrombar portas, esgueirar-se pelas sombras, desarmar armadilhas, roubar itens valiosos... Enfim, fazer tudo que “heróis de bem” nunca fariam. \n Isto não quer dizer que ladinos sejam traidores ou covardes. Pelo contrário: um ladino conhece bem o valor de um grupo coeso de aventureiros, em que cada um faz sua parte. Ele apenas sabe que, em qualquer grande missão, existe um lado sombrio que exige menos gritos de guerra e mais infiltrações silenciosas. \n Há ladinos que fazem parte de grandes guildas de criminosos, mas muitos são malandros solitários, confiando apenas em si mesmos e num pequeno grupo de amigos para sobreviver. \n Qualquer tipo de atividade escusa ou discreta atrai ladinos. Muitos são mesmo ladrões, furtando bolsas ou entrando em mansões à noite nas ruas escuras das metrópoles. Outros são espiões a serviço de grandes reinos ou mesmo igrejas. Também há muitos ladinos nas cortes, malandros que se especializam em espalhar boatos, descobrir segredos, seduzir alvos e, quando necessário, envenenar algum aristocrata inconveniente. Ladinos podem até mesmo ser assassinos: suas habilidades de furtividade e precisão podem ser mais mortais que a investida tresloucada de um brutamontes enfurecido. \n O típico ladino aventureiro tem um pouco de cada uma destas “profissões”. Um grupo de exploradores de masmorras dura pouco se não houver alguém para procurar armadilhas, escutar atrás de portas, abrir trancas e se esconder de guardas. Muitas vezes o ladino é o herói que realmente resolve a missão: enquanto o resto do grupo está enfrentando o dragão vermelho, o ladino encontra e surrupia o artefato que o monstro estava guardando. \n Ladinos podem ter qualquer tipo de personalidade, mas poucos são espalhafatosos ou arrogantes. A maioria dos ladinos prefere ficar na sombra dos outros heróis, sem grande reconhecimento, sendo subestimada pelos inimigos. Muitos ladinos adquirem suas habilidades por falta de opção: tendo crescido nas áreas mais pobres de uma cidade, precisaram aprender a roubar e fugir para sobreviver. Outros sempre tiveram vidas confortáveis e acham que a maneira mais fácil de preservá-las é se manter escondidos. Alguns foram treinados especificamente para isto por exércitos ou famílias criminosas. \n De qualquer forma, quase nenhum ladino consegue se manter do lado da lei por muito tempo. Mesmo que sua intenção seja boa, precisam cometer algum crime para atingir seus objetivos.",
    famousExamples: [
      "Andrus o Aranha",
      "Ashlen Ironsmith, o Camaleão",
      "Drikka",
      "Leon Galtran",
    ],
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Ladinagem (Des)", "Relexos (Des)"],
    optional: {
      skills: [      
        "Acrobacia (Des)", "Atletismo (For)", "Atuação (Car)", "Cavalgar (Des)", "Conhecimento (Int)", "Diplomacia (Car)", "Enganação (Car)", "Furtividade (Des)", "Iniciativa (Des)", "Intimidação (Car)", "Intuição (Sab)", "Investigação (Int)", "Jogatina (Car)", "Luta (For)", "Ofício (Int)", "Percepção (Sab)", "Pilotagem (Des)", "Pontaria (Des)"
      ],
      count: 8
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Ataque Furtivo",
      description: "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
      },
      {
        name: "Especialista",
        description: "Escolha um número de perícias treinadas igual à sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        name: "Evasão",
        description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Poder de Ladino",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de sua classe ou geral."
      },
      {
        name: "Esquiva Sobrenatural",
        description: "No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido."
      },
      {
        name: "Olhos nas Costas",
        description: "A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      },
      {
        name: "Evasão Aprimorada",
        description: "No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "A Pessoa Certa para o Trabalho",
        description: "No 20º nível, você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da lista de ladino, você pode gastar 5 PM para receber +10 no teste."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Ataque furtivo +1d6, especialista" },
      { level: 2, abilities: "Evasão, poder de ladino" },
      { level: 3, abilities: "Ataque furtivo +2d6, poder de ladino" },
      { level: 4, abilities: "Esquiva sobrenatural, poder de ladino" },
      { level: 5, abilities: "Ataque furtivo +3d6, poder de ladino" },
      { level: 6, abilities: "Poder de ladino" },
      { level: 7, abilities: "Ataque furtivo +4d6, poder de ladino" },
      { level: 8, abilities: "Olho nas costas, poder de ladino" },
      { level: 9, abilities: "Ataque furtivo +5d6, poder de ladino" },
      { level: 10, abilities: "Evasão aprimorada, poder de ladino" },
      { level: 11, abilities: "Ataque furtivo +6d6, poder de ladino" },
      { level: 12, abilities: "Poder de ladino" },
      { level: 13, abilities: "Ataque furtivo +7d6, poder de ladino" },
      { level: 14, abilities: "Poder de ladino" },
      { level: 15, abilities: "Ataque furtivo +8d6, poder de ladino" },
      { level: 16, abilities: "Poder de ladino" },
      { level: 17, abilities: "Ataque furtivo +9d6, poder de ladino" },
      { level: 18, abilities: "Poder de ladino" },
      { level: 19, abilities: "Ataque furtivo +10d6, poder de ladino" },
      { level: 20, abilities: "A pessoa certa para o trabalho, poder de ladino" }
    ],
    },
    { id: "Nobre",
    name: "Nobre",
    powersUrl: "/poderes/nobre",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/nobre.png",
    description: "Todos precisam de um líder. Sem hierarquia, há anarquia. Sem uma ordem estabelecida, só o que existe é a lei do mais forte. Algumas dinastias tomam para si a responsabilidade e o privilégio de governar, servindo aos plebeus enquanto recebem deles obediência e tributo. \n O aventureiro nobre é mais do que alguém que nasceu nas circunstâncias certas. É um herói que reconhece o valor de um bom líder e se considera ligado à terra, ao povo, a seus aliados. Um burguês, um aventureiro ou mesmo um plebeu comum podem todos mudar de casa e de vida, ir atrás de suas próprias ambições. Mas o nobre não tem escolha. Se ele abandonar seu posto, toda uma sociedade pode ruir, pessoas vão ficar sem trabalho e sem destino, conquistadores inescrupulosos podem invadir. O nobre é rico, mas não é livre. \n Nem todo nobre é um aristocrata ou um governante por nascença. Muitos são donos ou herdeiros de grandes impérios mercantes, líderes de guildas poderosas, governadores eleitos, senadores ou mesmo diplomatas treinados em escolas especiais. O que une todos os nobres é sua capacidade de organizar os outros, dando ordens, conselhos e palavras de encorajamento. \n A posição do nobre pode não parecer muito adequada a uma vida de aventuras, mas muitas vezes o nobre é o único que tem verdadeira obrigação de se aventurar. Um destes heróis parte em grandes buscas e missões perigosas para combater os inimigos de sua terra, para encontrar artefatos que garantam a continuidade de sua linhagem, para defender o povo comum. Quando há uma ameaça, todos têm a opção de fugir, menos os soldados e os nobres. \n Muitos nobres aventureiros não têm grandes responsabilidades. Estão justamente tentando escapar de um destino que já foi decidido em seu nascimento, aventurando-se por rebeldia e sede de experiências. Contudo, mais cedo ou mais tarde todo nobre precisa encarar seu fardo. \n Nobres se destacam em situações sociais e como suporte para o resto do grupo. Contudo, muitas vezes precisam provar seu valor mais do que qualquer outro herói. Aventureiros mais humildes pensam que todo nobre é um almofadinha mimado, acostumado a que todos façam tudo por ele. Isto às vezes é verdade, mas esse tipo de desocupado raramente sobrevive a mais de uma ou duas aventuras. \n Nobres têm personalidades variadas, mas sempre marcadas por sua posição social e seus deveres. Alguns são extremamente sérios, nunca se permitindo um instante de descanso ou alegria. Outros têm um otimismo totalmente fantasioso, acreditando que tudo vai dar certo — porque, para eles, tudo sempre deu certo! Alguns ficam pasmos com pequenas realidades da vida dos plebeus, como a necessidade de economizar ou acordar cedo. Outros vivem cheios de culpa por sua posição privilegiada. \n De qualquer forma, nenhum nobre pode negar que é diferente dos plebeus. Para o bem ou para o mal, ele sempre será algo além de uma pessoa comum.",
    famousExamples: [
      "Arius Gorgonius Dubitatius",
      "General Supremo Hermann Von Krauser",
      "Lady Ayleth Karst, Rainha-Imperatriz Shivara",
    ],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Diplomacia (Car) ou Intimidação (Car)", "Vontade (Sab)"],
    optional: {
      skills: [      
        "Adestramento (Car)", "Atuação (Car)", "Cavalgar (Des)", "Conhecimento (Int)", "Diplomacia (Car)", "Enganação (Car)", "Fortitude (Con)", "Guerra (Int)", "Iniciativa (Des)", "Intimidação (Car)", "Intuição (Sab)", "Investigação (Int)", "Jogatina (Car)", "Luta (For)", "Nobreza (Int)", "Ofício (Int)", "Percepção (Sab)",  "Pontaria (Des)",
      ],
      count: 4
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos.",
    abilities: [
      {
      name: "Autoconfiança",
      description: "Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
      },
      {
        name: "Espólio",
        description: "Você recebe um item à sua escolha com preço de até T$ 2.000."
      },
      {
        name: "Orgulho",
        description: "Quando faz um teste de perícia, você pode gastar uma quantidade de PM à sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        name: "Poder de Nobre",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Nobre ou Poderes Gerais."
      },
      {
        name: "Palavras Afiadas",
        description: "No 2º nível, você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int –3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe)."
      },
      {
        name: "Riqueza",
        description: "No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. Assim, um nobre de 5º nível com Carisma 4 que role 13 no dado recebe 22 TO. O uso desta habilidade é condicionado à sua relação com sua família, patrono ou negócios e a onde você está. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente teria como receber dinheiro."
      },
      {
        name: "Gritar Ordens",
        description: "A partir do 4º nível, você pode gastar uma quantidade de PM à sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou."
      },
      {
        name: "Presença Aristocrática",
        description: "A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura."
      },
      {
        name: "Realeza",
        description: "No 20º nível, a CD para resistir à sua Presença Aristocrática aumenta em +5 e uma criatura que falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Autoconfiança, espólio, orgulho" },
      { level: 2, abilities: "Palavra afiada (2d6), poder de Nobre" },
      { level: 3, abilities: "Poder de Nobre, riqueza" },
      { level: 4, abilities: "Gritar ordens, pode de Nobre" },
      { level: 5, abilities: "Poder de Nobre, presença aristocrática" },
      { level: 6, abilities: "Palavra afiada (4d6), poder de Nobre" },
      { level: 7, abilities: "Poder de Nobre" },
      { level: 8, abilities: "Poder de Nobre" },
      { level: 9, abilities: "Poder de Nobre" },
      { level: 10, abilities: "Palavra afiada (6d6), poder de Nobre" },
      { level: 11, abilities: "Poder de Nobre" },
      { level: 12, abilities: "Poder de Nobre" },
      { level: 13, abilities: "Poder de Nobre" },
      { level: 14, abilities: "Palavra afiada (8d6), poder de Nobre" },
      { level: 15, abilities: "Poder de Nobre" },
      { level: 16, abilities: "Poder de Nobre" },
      { level: 17, abilities: "Poder de Nobre" },
      { level: 18, abilities: "Palavra afiada (10d6), poder de Nobre" },
      { level: 19, abilities: "Poder de Nobre" },
      { level: 20, abilities: "Realeza, poder de Nobre" }
    ],
    },
    { id: "Druida",
    name: "Druida",
    powersUrl: "/poderes/druida",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/druida.png",
    description: "No coração das florestas, nas partes mais remotas dos ermos inexplorados, existem mistérios. Clareiras sagradas onde os animais não caçam. Círculos de pedras erguidos por culturas ancestrais. Árvores gigantescas que emanam poder divino. Existe algo milagroso na vida selvagem, uma tradição secreta e antiga passada através dos séculos por mulheres e homens que cultuam, defendem e vivem a natureza. É o mundo místico dos druidas. \n O druida é um tipo específico de sacerdote. Devotado a Allihanna, a Deusa da Natureza; Megalokk, o Deus dos Monstros, ou Oceano, o Deus dos Mares, o druida é mais do que um líder religioso. É um guardião de tudo que é selvagem, vivo e puro, um devoto ligado a uma forma primordial de culto divino. Não tem uma congregação ou um templo: vive com os animais e as plantas, realiza suas cerimônias a céu aberto. Sua devoção tem menos a ver com palavras e ritos do que com sangue, seiva, terra, carne. O contato do druida com os deuses e o mundo natural é primitivo, bruto, incorrupto. Muitas vezes um druida nem mesmo reconhece seu deus padroeiro, conectando-se com as forças naturais cruas, sem rosto e sem nome. \n Embora haja tradições druídicas em Arton, transferindo conhecimento de mestre para aprendiz ao longo dos séculos, muitos druidas adquirem seus poderes sozinhos, pelo simples contato com a natureza. Isso acontece principalmente com pessoas criadas longe da civilização, mas o chamado selvagem pode surgir para qualquer um. De certa forma, alguém que se torna um druida sempre foi diferente ou especial: a conexão com as forças primitivas não pode ser aprendida numa escola. \n Druidas rejeitam boa parte da civilização e suas invenções. Não usam armaduras de metal, preferem dormir ao relento, não entendem autoridades arbitrárias do mundo artificial. Seus maiores companheiros costumam ser animais, não bípedes. Alguns nem usam roupas normais, preferindo se cobrir com folhas, couro cru ou trapos. Eles entendem o ciclo de vida e morte, mas não matam animais sem motivo. Preferem não interferir com a natureza, adaptando-se a ela e deixando que ela direcione sua existência. \n Até mesmo o corpo de um druida é modificado por sua ligação com o mundo natural. Druidas são capazes de se transformar em animais, plantas ou coisas mais exóticas. Druidas poderosos se tornam menos pessoas do que entidades ou espíritos dos ermos. \n Embora a maioria dos druidas adote uma postura pacífica, defendendo os ermos apenas quando a civilização os ameaça, outros são militantes quase fanáticos. Querem destruir a civilização, queimar cidades e derrubar castelos para devolver Arton a um estado mais puro. Não dão grande importância às mortes que isso causaria: para eles, todos os bípedes inteligentes são invasores numa terra que pertence aos animais e às plantas.\n Druidas sabem que a civilização é transitória. Antigamente não havia construções e um dia não haverá mais uma vez. O mundo é selvagem e criaturas inteligentes são meros hóspedes temporários.",
    famousExamples: [
      "Lisandra",
      "Oihana",
      "Shantall",
      "Trebane",
    ],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Sobrevivência (Sab)", "Vontade (Sab)"],
    optional: {
      skills: [    
        "Adestramento (Car)", "Atletismo (For)", "Cavalgar (Des)", "Conhecimento (Int)", "Cura (Sab)", "Fortitude (Con)", "Iniciativa (Des)", "Intuição (Sab)", "Luta (For)", "Misticismo (Int)", "Ofício (Int)", "Percepção (Sab)",  "Religião (Sab)",
      ],
      count: 4
      }
    },
    proficiency: "Escudos",
    abilities: [
      {
      name: "Devoto Fiel",
      description: "Você se torna devoto de um deus disponível para druidas (Allihanna, Megalokk ou Oceano). Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um.",
      },
      {
        name: "Empatia Selvagem",
        description: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão."
      },
      {
        name: "Magias",
        description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. "
      },
      {
        name: "Poder de Druida",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Druida ou Gerais."
      },
      {
        name: "Caminho dos Ermos",
        description: "No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais."
      },
      {
        name: "Força da Natureza.",
        description: "No 20º nível, você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas em +2. Os bônus dobram (–4 PM e +4 na CD) se você estiver em terrenos naturais."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Devoto fiel, empatia selvagem, magias (1º círculo)" },
      { level: 2, abilities: "Caminho dos ermos, poder de druida" },
      { level: 3, abilities: "Poder de druida" },
      { level: 4, abilities: "Poder de druida" },
      { level: 5, abilities: "Poder de druida" },
      { level: 6, abilities: "Magias (2º círculo), poder de druida" },
      { level: 7, abilities: "Poder de druida" },
      { level: 8, abilities: "Poder de druida" },
      { level: 9, abilities: "Poder de druida" },
      { level: 10, abilities: "Magias (3º círculo), poder de druida" },
      { level: 11, abilities: "Poder de druida" },
      { level: 12, abilities: "Poder de druida" },
      { level: 13, abilities: "Poder de druida" },
      { level: 14, abilities: "Magias (4º círculo), poder de druida" },
      { level: 15, abilities: "Poder de druida" },
      { level: 16, abilities: "Poder de druida" },
      { level: 17, abilities: "Poder de druida" },
      { level: 18, abilities: "Poder de druida" },
      { level: 19, abilities: "Poder de druida" },
      { level: 20, abilities: "Força da natureza, poder de druida" }
    ],
    extras: [
  {
    title: "Classe Divina - Druidas",
    description: "Druidas de Arton são reclusos, vivendo isolados em áreas selvagens — ou, às vezes, reunindo-se em pequenos grupos. Por seu contato maior com a natureza, eles sabem sobreviver nos ermos e lidar com animais, mas têm dificuldade em se relacionar com pessoas e agir em grandes centros urbanos. Pouca coisa consegue deixar um druida mais nervoso que uma cidade cheia de gente.\nTrês novos druidas apresentados a seguir — Aharadak, Tenebra, Arton — foram apresentados em 'Deuses de Arton'. Utilize-os em conjunto com as regras vistas na parte inferior da página.",
    sections: [
      { title: "Druida de Aharadak",
        intro: "A tempestade aberrante se infiltrou no Panteão. Aharadak, o Devorador, assassinou Tauron e se tornou o Deus da Tormenta, impactando Arton profundamente. A Tormenta, antes uma força invasora, agora é parte de Arton. Mesmo que algumas áreas tenham sido eliminadas, muitas persistem, e suas criaturas se espalham pelo Reinado. Os lefou, meios-demônios da Tormenta, estão presentes em comunidades humanas, às vezes aceitos. Para muitos, a Tormenta é agora um fato da vida.\nIsto é, assim acreditam aqueles que se tornam druidas de Aharadak. Eles assumem a missão de proteger uma suposta harmonia entre Arton e a Tormenta, entre Criação e Anticriação. Demonstram que as criaturas lefeu não diferem tanto das feras de Allihanna, dos monstros de Megalokk ou dos seres do Oceano. Acolhem as aberrações rubras como parceiros. Mais ainda, adotam formas selvagens horrendas com poderes da Tormenta.\nDruidas de Aharadak acreditam em uma harmonia entre Arton e a Tormenta, tratando os lefeu como seres naturais. Adotam formas horrendas e são odiados, vistos como traidores que corrompem a natureza. Devotos de Allihanna e Megalokk se unem contra eles, temendo que a Tormenta tenha realmente se tornado parte de Arton.\nEmbora tudo na Tormenta seja alienígena, druidas de Aharadak entendem e controlam seus demônios, vendo-os como irmãos em batalha contra inimigos como mortos-vivos e vilões. Sonham com um futuro em que Arton acolherá a Tormenta, formando um ser coletivo supremo. Muitos heróis, contudo, consideram intolerável sua tentativa de apaziguar os lefeu.\nGrupos de aventureiros às vezes aceitam este druida, como aceitariam colegas lefou. Contudo, assim como um druida de Allihanna busca apaziguar conflitos com feras naturais, o druida de Aharadak tentará o mesmo em relação aos lefeu. E para muitos heróis isso é intolerável.",
        content: [
          { name: "Indumentária", description: " Invariavelmente, veste vermelho. De preferência trajes rústicos com materiais obtidos em áreas de Tormenta." },
          { name: "Obrigações & Restrições", description: " Mesmas do devoto de Aharadak." },
          { name: "Considerações Mecânicas", description: " O druida de Aharadak, como outros devotos, tem acesso aos poderes concedidos de sua divindade." },
          { name: "Fundamentalista", description: " Jamais ataca lefou e criaturas da Tormenta." },
        ]
      },
      { title: "Druida de Allihanna",
        intro: "“Se todos os deuses bondosos têm paladinos, por que não Allihanna?“. A Deusa da Natureza tem, sim, seus campeões sagrados. Eles se chamam druidas. Enquanto o clérigo desta deusa protege comunidades humanoides nos ermos, o druida faz o oposto — vive entre as feras, devotado a sua proteção. De fato, “druida de Allihanna” é praticamente uma redundância; quase todos os druidas amam a natureza, não há druida em Arton sem devoção profunda a esta deusa. Alguns duvidam, inclusive, que Oceano seja o verdadeiro patrono das formas de vida marinhas. Quanto a Megalokk, seus monstros não são aceitos como parte do mundo natural, e seus “druidas” seriam apenas anomalias profanas.\nPoucas vezes recebendo educação formal de mestres, druidas adquirem sua devoção e recebem seus poderes através de sonhos com Allihanna, ou outros meios sobrenaturais — não sendo raro algum animal sagrado da deusa, ou ela própria em forma de avatar, se encarregar desse treinamento. Muitos consideram toda a vida natural como algo sagrado, evitando qualquer dano a qualquer ser vivo (sabe-se até mesmo de druidas dahllan que, como as plantas, vivem apenas de água e luz). Outros entendem que toda criatura tem seu lugar no Grande Ciclo, morrendo para que outras possam viver, mas jamais tolerando mortes sem propósito.",
        content: [
          { name: "Indumentária", description: " Muitos druidas vestem apenas trapos. Outros encontram formas criativas de conseguir material para roupas: couro de grandes répteis (que descamam de tempos em tempos), membranas de grandes ovos, seda de casulos, conchas, folhas, flores, plumas. Outros ainda tratam com carinho uma vestimenta obtida em alguma ocasião especial, ou recebida de alguém importante." },
          { name: "Fundamentalista", description: " Jamais ataca animais ou monstros com Natureza Vegetal, nem permite que seus aliados o façam. Além disso, não apenas é proibido de se associar a devotos de Megalokk, mas também deve atacar e destruir todos aqueles que encontrar." },
        ]
      },
      { title: "Druida de Megalokk",
        intro: "Um xamã de Megalokk lidera uma comunidade de algum povo monstruoso, em um arremedo de civilização. Seu druida, pelo contrário, rejeita os próprios conceitos de “civilização” e “povo”. Considera-os absurdos totais, insultos ao Deus dos Monstros. Vários, contudo, adotam monstros variados como parceiros.\nO druida de Megalokk busca ser mais monstruoso que os próprios monstros, assumindo uma forma terrível após outra. Ele não vive em “harmonia” com monstros, nem tem qualquer preocupação em protegê-los — pois monstros existem apenas para lutar e matar, até mesmo os seus. Como o louvado Monstro-Pai, ele deseja vingança contra as criações mortiças dos outros deuses, por ousarem confinar os monstros às Sanguinárias e outros pontos remotos, tomando Arton para si.\nQuase todo druida do Deus dos Monstros simplesmente odeia todos os outros seres, atacando e matando tudo que encontra. Onde ele habita, histórias de horror abundam, camponeses temem se afastar de suas aldeias. Encontrar e destruir a criatura para restaurar a paz na região acaba se tornando missão comum para aventureiros.\nTodo druida de Megalokk busca demonstrar, através da própria violência e selvageria, a grandiosidade de seu patrono. Uns poucos acabam unidos a grupos de aventureiros, cujas missões sempre oferecem oportunidades para lutar e matar; ele será um aliado poderoso, mas difícil (senão impossível) de ser controlado. Nada enfurece mais este druida que qualquer tentativa de restringir sua liberdade. Contudo, pode ser possível conviver com ele através do reconhecimento constante de sua superioridade, e/ou quantidades fantásticas de comida.",
        content: [
          { name: "Indumentária", description: " Visto que suas formas selvagens monstruosas acabam por destruir qualquer vestimenta, druidas de Megalokk quase nunca se incomodam em vestir algo. No máximo, usam trajes rústicos de pele ou carapaça extraída de presas anteriores." },
          { name: "Fundamentalista", description: " Jamais se associa a ninguém. Todos os outros seres, incluindo monstros, servem apenas como oferenda a Megalokk. Ou comida." },
        ]
      },
      { title: "Druida do Oceano",
        intro: "Aliado das criaturas marinhas, este druida se mantém afastado do conflito entre Allihanna e Megalokk. A Deusa da Natureza e o Deus dos Monstros possuem devotos entre os seres do mar, cada um protegendo suas respectivas criaturas. No entanto, o Grande Oceano é imparcial em relação a animais e monstros, acolhendo e resguardando todos que buscam a força de suas águas. Os verdadeiros inimigos deste druida são os habitantes do Mundo Seco, que invadem os mares para saquear, pilhar e matar.\nDruidas do Oceano vivem quase sempre na escuridão profunda, vigiando os reinos submarinos e raramente emergindo por qualquer motivo — desde o desaparecimento misterioso da divindade, agem como guardiões ainda mais obstinados. Assim, sereias, tritões, elfos-do-mar e outras raças submarinas são os que mais frequentemente seguem esse caminho — embora eles às vezes apareçam entre humanos e outros povos, sempre com origens exóticas. Sabe-se de osteon que emergem de naufrágios como druidas, assim como golens perdidos no mar e então ressuscitados, suas carcaças cheias de cracas e corais.\nUm druida do Oceano atuando com aventureiros será muitíssimo incomum, visto que suas jornadas muitas vezes os levam para longe da água salgada. Ele muito provavelmente será apenas um companheiro ocasional quando percorrem áreas costeiras. Ou vai recorrer a soluções criativas para demonstrar a majestade do Oceano mesmo na aridez do Mundo Seco.",
        content: [
          { name: "Indumentária", description: " É raro que usem qualquer tipo de vestimenta, além de tangas simples ou algas marinhas. Também não costumam usar armas, armaduras, ferramentas ou qualquer objeto que se deteriore em contato prolongado com a água do mar." },
          { name: "Fundamentalista", description: " Jamais deixa a água, nem por um instante." },
        ]
      },
      { title: "Druida de Tenebra",
        intro: "Os druidas de Allihanna, Megalokk e Oceano têm em comum a veneração e proteção de seres vivos, sejam naturais ou não. Porém, nem todos os seres em Arton são desse tipo. Tenebra, a Mãe Noite, dá vida aos mortos que, embora movidos mais por instinto que intelecto, ainda existem e sentem. Desprezados por devotos de outros deuses e usados como servos sem alma por necromantes, os mortos-vivos encontram proteção nos druidas de Tenebra.\nEstes druidas escolhem a companhia dos mortos após decepções, banimentos ou por incapacidade de se ajustar à sociedade. Habitam necrópoles, antigos cemitérios, vastidões desoladas e outros locais onde os mortos-vivos podem espalhar seu terror.\nEnquanto outros druidas dominam os ermos, habitando florestas e outros terrenos naturais, druidas de Tenebra escolhem lugares assombrados como ruínas e cemitérios — ou aqueles onde ocorreram grandes morticínios, como a Conflagração do Aço e outros campos de batalha. Embora muitos os considerem perigosos para os povos ao redor (e alguns realmente o são), muitas vezes ocorre o contrário; o druida zeloso e vigilante evita que mortos-vivos abandonem seus sítios e que tragam terror às cidades, acabando por proteger tanto os vivos quanto os mortos. Esse tipo de druida se tornou particularmente comum no reino de Aslothia, onde povoados convivem com a ameaça constante de esqueletos, zumbis e coisas muito piores.\nManter o equilíbrio entre vida e morte em vida é difícil e solitário. Druidas de Tenebra raramente encontram aliados, exceto entre os mortos-vivos. Alguns se unem a aventureiros para combater necromantes, mas enfrentam conflitos de interesse com devotos de outros deuses. Seus companheiros animais são versões esqueléticas ou zumbis de feras naturais, muitas vezes reanimadas após grandes jornadas em busca da carcaça certa.",
        content: [
          { name: "Indumentária", description: " Como outros devotos de Tenebra, preferem se vestir de negro. Muitos usam armaduras ou ornamentos de ossos, feitos com partes de mortos-vivos destruídos, para honrá-los." },
          { name: "Obrigações & Restrições", description: " Mesmas do devoto de Tenebra." },
          { name: "Considerações Mecânicas", description: " O druida de Tenebra, como outros devotos, tem acesso aos poderes concedidos de sua divindade." },
          { name: "Fundamentalista", description: " Jamais ataca mortos-vivos, mesmo que seja atacado por eles." },
        ]
      },
      { title: "Druida de Arton",
        intro: "Enquanto devotos de Allihanna e Megalokk se antagonizam, achando que suas criações têm mais direito a Arton, alguns druidas consideram esse conflito tolo. Para eles, toda forma de vida é sagrada: animais, plantas, feras, monstros, até mesmo a Tormenta.\nO druida de Arton não distingue entre seres viventes. Todo ser, incluindo aqueles não considerados vivos, tem o direito de existir. Embora respeitem Lena, estes druidas acreditam que a vida é maior que o Panteão, e que os deuses foram criados pela vida, não o contrário.\nPara o druida de Arton, pouco importa se as criaturas nascem de reprodução natural (como a maioria das crias de Allihanna), são formadas por meios fantásticos (a maioria dos monstros de Megalokk) ou trazidas a este mundo artificialmente (quase todos os construtos). Mesmo espíritos e mortos-vivos são ainda considerados seres viventes — vida diferente, exótica, mas ainda vida. Chegam ao cúmulo de respeitar as próprias aberrações da Tormenta, julgando merecerem lugar em Arton tanto quanto quaisquer entidades.\n“Se respeitam toda a vida em todas as suas formas, então contra quem lutam?“. Estes druidas lutam contra ameaças à vida, como exterminadores de espécies ou assassinos sem sentido. Desprezam caçadores que matam por glória, fascistas movidos por ódio, cultistas que sacrificam por deuses. No entanto, aceitam matar para subsistência ou autodefesa, seguindo o Grande Ciclo.\nO druida de Arton cultiva relação muito especial com as criaturas elementais, estranhos seres não abençoados nem por Allihanna, nem Megalokk. Tais entidades são prova do poder irrestrito da vida pura, capaz de se manifestar mesmo nos componentes mais fundamentais da Criação. O druida não apenas controla esses seres (considerados imprevisíveis e indomáveis por quase quaisquer outros); também compartilha de seus poderes, recorrendo à forma selvagem para transformar partes do corpo — até mesmo o corpo inteiro — em fogo, água, terra e outros.",
        content: [
          { name: "Indumentária", description: " Druidas de Arton vestem apenas materiais que não exigem sacrifícios desnecessários de seres viventes. Lã tosquiada, seda de casulos ou teias, membranas de grandes ovos, couro descamado de répteis..." },
          { name: "Obrigações & Restrições", description: " Nunca matar ou destruir seres que não ameaçam sua própria sobrevivência, ou a de seus aliados." },
          { name: "Considerações Mecânicas", description: " Como o clérigo do Panteão e o paladino do bem, o druida de Arton não é devotado a um único deus, nem tem acesso a poderes concedidos. Sua arma preferida é a foice. Ser um druida de Arton conta como uma devoção." },
          { name: "Fundamentalista", description: " Jamais matar, nem mesmo para subsistência. Deve recorrer a meios mágicos para sustento. Em vez de um poder concedido, o druida de Arton fundamentalista recebe um poder geral." },
        ]
      },
    ]
  }
]

    },
    { id: "Bárbaro",
    name: "Bárbaro",
    powersUrl: "/poderes/barbaro",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/barbaro.png",
    description: "Arton não é civilizado. Mesmo com reinos, grandes cidades e política intrincada, este mundo possui vastas extensões de terra não mapeadas, onde nenhum nobre, soldado ou autoridade jamais pisou. Em grandes florestas escuras, em vastas cordilheiras aterrorizantes, em pradarias indomadas e ilhas remotas, Arton é governado pela força, pela selvageria, pela coragem e pela honra. É o território dos bárbaros. \n O bárbaro é um herói primitivo que ignora ou descarta as frivolidades da civilização. Um combatente terrível, o bárbaro luta por instinto, confiando menos em técnica e mais em puro frenesi de batalha. Em momentos de grande perigo, ou apenas frente a algo que desperte seu ódio, o bárbaro é tomado por uma fúria guerreira, ficando cego para tudo que não seja o combate e sendo imbuído de força e resistência animalescas. \n Bárbaros não se sentem confortáveis com todas as restrições da civilização. As paredes altas de um castelo parecem prisões, as ruas lotadas das cidades parecem labirintos fedorentos. Seu conhecimento é adquirido em forma de histórias e lições passadas oralmente por seus ancestrais, ou aprendido com observação do mundo natural. \n Podem ser apenas brutamontes monossilábicos, sem talento para nada além da violência. Contudo, também podem ser expoentes de culturas tão ricas e sábias quanto a “civilização”, bravos que rejeitam fingimentos e mentiras em favor da honestidade e simplicidade dos ermos. E mesmo aqueles que mal sabem falar muitas vezes são dotados de uma ingenuidade e bondade tocantes, tendo crescido num mundo em que família e amigos valem mais que ouro. \n As Montanhas Uivantes produzem bárbaros do gelo, acostumados a condições adversas, que bebem leite de mamute e seguem um código de honra estrito. Os Ermos Púrpuras produzem bárbaros das florestas, um povo ancestral e independente que se viu cada vez mais acuado enquanto suas terras foram roubadas por forasteiros. As Montanhas Sanguinárias produzem bárbaros que enfrentam monstros desde a infância e muitas vezes criam vínculos com essas criaturas. Também há bárbaros em todas as regiões ermas e remotas, além de habitantes das cidades que rejeitam a civilização e se entregam à selvageria, tornando-se bárbaros por escolha própria. \n Bárbaros não costumam usar armaduras pesadas e empunham armas rústicas e brutais, como tacapes e machados. Contudo, o que os define não é seu equipamento, mas seu anseio pela liberdade. Sua sede de sangue é enorme, mas sua lealdade é maior ainda. Livre de amarras, feroz, digno, honesto e forte, o bárbaro simboliza o passado selvagem e inspirador de Arton.",
    famousExamples: [
      "Alenn Toren Greenfeld",
      "Andilla Dente-de-Ferro",
      "Klunc, Galo Louco",
    ],
    characteristics: {
      pvBase: "24 + Constituição",
      pvPerLevel: "6 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Fortitude (Con)", "Luta (For)"],
    optional: {
      skills: [      
        "Adestramento (Car)", "Atletismo (For)", "Cavalgar (Des)", "Iniciativa (Des)", "Intimidação (Car)", "Ofício (Int)", "Percepção (Sab)", "Pontaria (Des)", "Sobrevivência (Sab)", "Vontade (Sab)"
      ],
      count: 4
      }
    },
    proficiency: "Armas marciais e escudos",
    abilities: [
      {
      name: "Fúria",
      description: "Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.",
      },
      {
        name: "Poder de Bárbaro",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de bárbaro ou gerais."
      },
      {
        name: "Instinto Selvagem",
        description: "No 3º nível, você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1."
      },
      {
        name: "Redução de Dano",
        description: "A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível."
      },
      {
        name: "Fúria Titânica",
        description: "No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 5 PM, em vez de um bônus de +5, recebe um bônus de +10."
      },
      
    ],
    levelProgression: [
      { level: 1, abilities: "Fúria +2" },
      { level: 2, abilities: "Poder de bárbaro" },
      { level: 3, abilities: "Instinto selvagem +1, poder de bárbaro" },
      { level: 4, abilities: "Poder de bárbaro" },
      { level: 5, abilities: "Poder de bárbaro, redução de dano 2" },
      { level: 6, abilities: "Fúria +3, poder de bárbaro" },
      { level: 7, abilities: "Poder de bárbaro" },
      { level: 8, abilities: "Poder de bárbaro, redução de dano 4" },
      { level: 9, abilities: "Instinto selvagem +2, poder de bárbaro" },
      { level: 10, abilities: "Poder de bárbaro" },
      { level: 11, abilities: "Fúria +4, poder de bárbaro, redução de dano 6" },
      { level: 12, abilities: "Poder de bárbaro" },
      { level: 13, abilities: "Poder de bárbaro" },
      { level: 14, abilities: "Poder de bárbaro, redução de dano 8" },
      { level: 15, abilities: "Instinto selvagem +3, poder de bárbaro" },
      { level: 16, abilities: "Fúria +5, poder de bárbaro" },
      { level: 17, abilities: "Poder de bárbaro, redução de dano 10" },
      { level: 18, abilities: "Poder de bárbaro" },
      { level: 19, abilities: "Poder de bárbaro" },
      { level: 20, abilities: "Fúria titânica, poder de bárbaro" }
    ],
    },
    { id: "Bardo",
    name: "Bardo",
    powersUrl: "/poderes/bardo",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/bardo.png",
    description: "Num mundo de heróis, contar histórias épicas também é um ato de heroísmo. Os grandes menestréis não são apenas músicos ou poetas: são malandros que dominam as ruas e as cortes, sábios que possuem conhecimento obscuro sobre os mais variados assuntos, diplomatas que transformam inimigos jurados em companheiros leais após uma noite na taverna, arautos que inspiram seus aliados a grandes feitos no campo de batalha. Sua intimidade com a música é tão grande que através dela lançam magias. São versados em muitas habilidades, embora não sejam mestres em nenhuma. São os bardos. \n Bardos são contadores de histórias e músicos errantes que acompanham grupos de aventureiros em missões para depois narrar suas façanhas. Contudo, seu papel vai muito além disso. Enquanto muitos heróis se especializam em uma só área, os bardos são versáteis, pessoas do mundo, confortáveis ao lado de reis e de mendigos. Muitas vezes são a “face” do grupo, tomando a frente em negociações e sabendo usar palavras doces quando outros prefeririam apelar para as armas. Bardos têm amigos, inimigos, conhecidos, amantes e rivais em cada cidade e aldeia. Conhecem um fato importante sobre cada artefato misterioso. Tocam a música certa para inflamar as almas de seus companheiros a cada combate. \n Sendo em seu âmago artistas, os bardos costumam ser muito emotivos e entusiasmados, com personalidades fortes e maneiras únicas de encarar a vida. Alguns demonstram alegria incessante, vendo o lado positivo em tudo e sorrindo mesmo frente aos piores perigos. Outros são intensos, amargurados, românticos e apaixonados, sempre tomados por algum amor impossível ou uma memória melancólica. Outros ainda só querem se divertir, parecendo loucos em seu frenesi de acrobacias, imitações, piadas e absurdos. Outros são sedutores cínicos. Outros são tudo isso, mudando de personalidade como quem muda de camisa! \n Embora a maioria dos bardos utilize a música para canalizar sua magia e inspirar seus aliados, quase qualquer tipo de arte pode tomar este papel. Alguns bardos dançam, outros declamam poesia. Outros ainda apenas fazem discursos grandiosos ou mesmo se exibem em grandes demonstrações acrobáticas com armas. Alguns bardos mais parecem embaixadores sérios e pomposos, outros lembram cavaleiros aristocráticos saídos de alguma história. O importante é que a arte do bardo venha de suas emoções e toque os corações dos demais aventureiros. \n De fato, o estereótipo do “menestrel que acompanha o grupo” muitas vezes é só uma fachada ou nem mesmo se aplica. Alguns bardos fingem ser só contadores de histórias enquanto estão em alguma missão secreta. Outros querem ser os heróis de suas próprias histórias! \n Seja como for, o bardo é um herói que costuma atrair outras pessoas para si. Sua simpatia, magnetismo e capacidade de ajudar os outros fazem com que nunca esteja sozinho na masmorra ou na taverna. E quem acredita que ele é um mero bobo da corte logo pode se ver com um inimigo poderoso que tem contatos em todos os reinos.",
    famousExamples: [
      "Kir’zanaath “Kiki” Odello",
      "Luigi Sortudo",
      "Kadeen",
      "Niele",
      "Senomar",
    ],
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Atuação (Car)", "Reflexos (Des)"],
    optional: {
      skills: [    
        'Acrobacia (Des)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Investigação (Int)', 'Jogatina (Car)', 'Ladinagem (Des)', 'Luta (For)', 'Misticismo (Int)', 'Nobreza (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Vontade (Sab)'  
      ],
      count: 6
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
      name: "Inspiração",
      description: "Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua arte. Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.",
      },
      {
        name: "Magias",
        description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM."
      },
      {
        name: "Poder de Bardo",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder"
      },
      {
        name: "Eclético",
        description: "A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treinado em uma perícia por um teste."
      },
      {
        name: "Artista Completo",
        description: "No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, suas habilidades de bardo (incluindo magias) têm seu custo em PM reduzido pela metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Inspiração +1, magias (1º círculo)" },
      { level: 2, abilities: "Poder de bardo, eclético" },
      { level: 3, abilities: "Poder de bardo" },
      { level: 4, abilities: "Poder de bardo" },
      { level: 5, abilities: "Inspiração +2, poder de bardo" },
      { level: 6, abilities: "Magias (2º círculo), poder de bardo" },
      { level: 7, abilities: "Poder de bardo" },
      { level: 8, abilities: "Poder de bardo" },
      { level: 9, abilities: "Inspiração +3, poder de bardo" },
      { level: 10, abilities: "Magias (3º círculo), poder de bardo" },
      { level: 11, abilities: "Poder de bardo" },
      { level: 12, abilities: "Poder de bardo" },
      { level: 13, abilities: "Inspiração +4, poder de bardo" },
      { level: 14, abilities: "Magias (4º círculo), poder de bardo" },
      { level: 15, abilities: "Poder de bardo" },
      { level: 16, abilities: "Poder de bardo" },
      { level: 17, abilities: "Inspiração +5, poder de bardo" },
      { level: 18, abilities: "Poder de bardo" },
      { level: 19, abilities: "Poder de bardo" },
      { level: 20, abilities: "Artista completo, poder de bardo" }
    ],
    },
    { id: "Bucaneiro",
    name: "Bucaneiro",
    powersUrl: "/poderes/bucaneiro",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/bucaneiro.png",
    description: "Os mares e rios são alguns dos terrenos mais selvagens e misteriosos de Arton. Sua vastidão esconde ilhas inexploradas, civilizações submersas, tempestades, dragões... E bucaneiros. \n Bucaneiros são aventureiros que singram as águas deste mundo, sempre metidos em missões, batalhas, buscas, patrulhas ou a simples luta pela sobrevivência. Muitos são verdadeiros piratas, fora da lei vivendo numa sociedade com suas próprias regras, em desafio aos reinos do continente. Essa irmandade é brutal, mas também pode parecer utópica: capitães piratas são eleitos por sua tripulação e podem ser removidos caso sejam tiranos. Piratas aceitam todo tipo de pessoas rejeitadas pelo “mundo seco” e podem ser a única família que resta a alguns párias. O preço dessa aceitação é uma vida de crime, perseguindo e roubando navios mercantes. \n Contudo, muitos bucaneiros seguem o caminho oposto: servindo na marinha de reinos poderosos, são marujos e capitães trabalhando para as grandes autoridades do mundo. Muitos combateram de qualquer um dos lados das Guerras Táuricas ou defenderam o Reinado contra a Supremacia Purista. Vários destes marinheiros militares também são caçadores de piratas, empreendendo sua própria guerra particular contra os saqueadores dos mares. \n Entre esses dois extremos estão os corsários: bucaneiros que recebem permissão especial de alguns reinos para atacar e roubar navios de reinos inimigos. São “piratas legalizados”, aproveitando a liberdade dos fora da lei e contando com o respaldo das autoridades. Contudo, muitas vezes são odiados por ambos. \n Vários bucaneiros, principalmente aqueles que operam nos grandes rios do continente, são meros contrabandistas e mercadores, interessados em levar suas mercadorias de um lado a outro enquanto se esquivam de monstros aquáticos. Muitos destes se especializam em levar refugiados, prisioneiros foragidos, espiões e aventureiros até locais seguros, fazendo o bem pelo preço certo. \n Numa tripulação, lealdade é tudo. Assim, muitos bucaneiros se sentem perfeitamente em casa num grupo de aventureiros, mesmo em terra firme. Bucaneiros sabem que dependem de seus aliados — não têm preguiça para fazer sua parte do trabalho, não são egoístas com as riquezas conquistadas e protegem os companheiros com a própria vida se for necessário. Ser bucaneiro é mais do que viajar e lutar num navio: é um estilo de vida, uma maneira de encarar os perigos de Arton com versatilidade, rebeldia e esperteza. \n Bucaneiros também não se apegam a regras e leis antiquadas. Nos mares, a única lei obrigatória é a da lealdade. Eles lutam sujo, usam armas proibidas no mundo seco e, durante um naufrágio inevitável, não ficam para afundar com o barco.",
    famousExamples: [
      "Nargom", "James K.", "Izzy Tarante", "John-de-Sangue",
    ],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For) ou Pontaria (Des)", "Reflexos (Des)"],
    optional: {
      skills: [      
        'Acrobacia (Des)', 'Atletismo (For)', 'Atuação (Car)', 'Enganação (Car)', 'Fortitude (Con)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Jogatina (Car)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pilotagem (Des)', 'Pontaria (Des)'
      ],
      count: 4
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
      name: "Audácia",
      description: "Quando faz um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste. Você não pode usar esta habilidade em testes de ataque.",
      },
      {
        name: "Insolência",
        description: "Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Evasão",
        description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Poder de Bucaneiro",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um Poder de Bucaneiro ou Geral"
      },
      {
        name: "Esquiva Sagaz",
        description: "No 3º nível, você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Panache",
        description: "A partir do 5º nível, sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM."
      },
      {
        name: "Evasão Aprimorada",
        description: "A partir do 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Sorte de Nimb",
        description: "No 20º nível, você encara os piores desafios e ri na cara deles — pois sabe que tem a sorte ao lado. Você pode gastar 5 PM para rolar novamente um teste recém realizado. Qualquer resultado 11 ou mais na segunda rolagem será considerado um 20 natural."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Audácia, Insolência" },
      { level: 2, abilities: "Evasão, poder de bucaneiro" },
      { level: 3, abilities: "Esquiva sagaz +1, poder de bucaneiro" },
      { level: 4, abilities: "Poder de bucaneiro" },
      { level: 5, abilities: "Panache, poder de bucaneiro" },
      { level: 6, abilities: "Poder de bucaneiro" },
      { level: 7, abilities: "Esquiva sagaz +2, poder de bucaneiro" },
      { level: 8, abilities: "Poder de bucaneiro" },
      { level: 9, abilities: "Poder de bucaneiro" },
      { level: 10, abilities: "Evasão aprimorada, poder de bucaneiro" },
      { level: 11, abilities: "Esquiva sagaz +3, poder de bucaneiro" },
      { level: 12, abilities: "Poder de bucaneiro" },
      { level: 13, abilities: "Poder de bucaneiro" },
      { level: 14, abilities: "Poder de bucaneiro" },
      { level: 15, abilities: "Esquiva sagaz +4, poder de bucaneiro" },
      { level: 16, abilities: "Poder de bucaneiro" },
      { level: 17, abilities: "Poder de bucaneiro" },
      { level: 18, abilities: "Poder de bucaneiro" },
      { level: 19, abilities: "Esquiva sagaz +5, poder de bucaneiro" },
      { level: 20, abilities: "Poder de bucaneiro, Sorte de Nimb" }
    ],
    },
    { id: "Caçador",
    name: "Caçador",
    powersUrl: "/poderes/cacador",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/cacador.png",
    description: "Monstros estão em toda parte. As pessoas de Arton podem tentar fugir deles, o que raramente dá certo. Podem rezar para que os deuses as protejam ou pagar para que aventureiros cuidem do problema. Ou podem caçá-los. \n O caçador é mais que um mateiro ou rastreador. É um especialista em sobrevivência nos terrenos mais selvagens e inóspitos, capaz de obter alimento e achar abrigo em qualquer lugar. É alguém que estuda, persegue e mata sua presa com paciência e astúcia. Mesmo que não pareça um sábio tradicional, o caçador é uma verdadeira enciclopédia de conhecimentos sobre os ermos. Sabe diferenciar veneno de comida, sabe evitar o território de animais mortíferos ou emboscá-los, sabe manter um grupo inteiro vivo longe da civilização. \n O estereótipo do caçador traja armadura de couro e usa arco e flecha. Realmente, equipamento leve se presta para andar silenciosamente nos ermos e armas de ataque à distância são ótimas para emboscadas. Contudo, caçadores são tão variados quanto a natureza. Podem ser furtivos, furiosos ou até mesmo covardes, dependendo de armadilhas e fugas para sobreviver. \n Muitos caçadores são verdadeiros inimigos dos monstros e criaturas que perseguem. Empreendem uma cruzada pessoal contra feras que ameaçam pessoas inocentes ou tentam se vingar da espécie que matou sua família e amigos. Outros caçadores, contudo, respeitam e até admiram os monstros que matam. Sabem seu lugar no ciclo natural de morte e nascimento, tentam consumir todas as partes da presa abatida e chegam a prestar homenagens a ela. \n Nem todos os caçadores perseguem monstros ou animais selvagens. Muitos caçam as mais letais presas: humanos, elfos, anões e outros povos civilizados. São caça-recompensas, justiceiros ou detetives a serviço de grandes cidades e reinos. Muitos caçadores experientes servem aos grandes exércitos de Arton, atuando como batedores e infiltrando-se em território inimigo para eliminar alvos importantes. Outros caçadores escolhem um caminho menos sangrento: em vez de matar, preservam a vida, guiando grupos de heróis ou de aristocratas por territórios que seriam intransponíveis sem eles. \n A maioria dos caçadores se sente mais em casa nos ermos do que nas cidades. Acostumam-se com o som dos animais e do vento entre as folhas em vez do burburinho constante das multidões. Tendem a ser solitários e excêntricos, até mesmo sinistros ou ameaçadores. Às vezes rejeitam os povos inteligentes a ponto de formar grandes amizades com animais, acreditando que são muito mais honestos e dignos que qualquer bípede. Outros caçadores, contudo, aproveitam todo o conforto que a civilização tem a oferecer antes de embarcar numa nova jornada pelos ermos. Muitas vezes logo precisam de uma nova missão porque já gastaram todo seu dinheiro na taverna! \n Existem caçadores que passam a vida inteira numa única região que conhecem intimamente, mas o típico caçador aventureiro é um explorador nato. Curioso, inquieto e audaz, este caçador gostaria de ver cada canto de Arton, descobrir os segredos dentro de cada floresta, nadar em cada rio ou lago. E, para ele, as paisagens deslumbrantes e o cheiro da mata são grandes tesouros por si só.",
    famousExamples: [
      "Crânio Negro",
      "Ellisa Thorn",
      "Enver",
      "Fren",
      "Matteo",
      "Maryx Corta-Sangue",
    ],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For) ou Pontaria (Des)", "Sobrevivência (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Cura (Sab)', 'Fortitude (Con)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Investigação (Int)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Reflexos (Des)'
      ],
      count: 6
      }
    },
    proficiency: "Armas marciais e escudos",
    abilities: [
      {
      name: "Marca da Presa",
      description: "Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).",
      },
      {
        name: "Rastreador",
        description: "Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer penalidades no teste de Sobrevivência."
      },
      {
        name: "Poder de Caçador",
        description: "No 2º nível, e a cada nível seguinte, você recebe uma habilidade de caçador ou Geral."
      },
      {
        name: "Explorador",
        description: "No 3º nível, escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando estiver no tipo de terreno escolhido, você soma sua Sabedoria (mínimo +1) na Defesa e nos testes de Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2."
      },
      {
        name: "Caminho do Explorador",
        description: "No 5º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador."
      },
      {
        name: "Mestre Caçador",
        description: "No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a habilidade, pode pagar 5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Marca da presa +1d4, rastreador" },
      { level: 2, abilities: "Poder de caçador" },
      { level: 3, abilities: "Explorador, poder de caçador" },
      { level: 4, abilities: "Poder de caçador" },
      { level: 5, abilities: "Caminho do explorador, marca da presa +1d8, poder de caçador" },
      { level: 6, abilities: "Poder de caçador" },
      { level: 7, abilities: "Explorador, poder de caçador" },
      { level: 8, abilities: "Poder de caçador" },
      { level: 9, abilities: "Marca da presa +1d12, poder de caçador" },
      { level: 10, abilities: "Poder de caçador" },
      { level: 11, abilities: "Explorador, poder de caçador" },
      { level: 12, abilities: "Poder de caçador" },
      { level: 13, abilities: "Marca da presa +2d8, poder de caçador" },
      { level: 14, abilities: "Poder de caçador" },
      { level: 15, abilities: "Explorador, poder de caçador" },
      { level: 16, abilities: "Poder de caçador" },
      { level: 17, abilities: "Marca da presa +2d10, poder de caçador" },
      { level: 18, abilities: "Poder de caçador" },
      { level: 19, abilities: "Explorador, poder de caçador" },
      { level: 20, abilities: "Mestre caçador, poder de caçador" }
    ],
    },
    { id: "Cavaleiro",
    name: "Cavaleiro",
    powersUrl: "/poderes/cavaleiro",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/cavaleiro.png",
    description: " Desde que a civilização se estabeleceu em Arton, sempre houve a necessidade de combater ameaças e defender os inocentes. Antes que grandes escolas de magia formassem arcanos poderosos, antes que exércitos permanentes guardassem as fronteiras, antes mesmo que grupos de aventureiros fossem comuns, havia um tipo de herói que tomou para si a missão de travar essa luta incessante. Eles usavam as mais avançadas ferramentas disponíveis: cavalos, espadas, armaduras. Para se manter leais, faziam juramentos e se organizavam em ordens. Assim se formou a nobre tradição da cavalaria. \n O cavaleiro é parte de uma longa história de heroísmo. Às vezes considerados antiquados ou até anacrônicos, estes combatentes têm os mesmos ideais e usam as mesmas táticas que seus predecessores desenvolveram séculos atrás. Muitas vezes são formais e grandiosos, até mesmo arrogantes, pois carregam a responsabilidade de honrar muitas gerações de cavalaria. \n Cavaleiros costumam estar ligados à nobreza. Em sua forma mais básica, são pequenos nobres que fazem juramentos para proteger a ordem social existente. Portam o título sir e têm um posto acima do povo comum. Isto não significa opressão ou tirania — nos lugares mais tradicionais de Arton, os nobres têm o dever de ir à guerra e defender os plebeus, fazendo por merecer seus privilégios. Existem cavaleiros ligados apenas a um reino ou feudo, mas outros fazem parte de ordens específicas. Seja como for, cavaleiros não escondem suas lealdades: ostentam o brasão de seu senhor ou o símbolo de sua ordem com orgulho em seu escudo ou estandarte. \n Ninguém pode simplesmente decidir ser um cavaleiro. O processo de treinamento em geral envolve ser escudeiro de um cavaleiro mais experiente. O candidato então é sagrado por um nobre ou um cavaleiro mais antigo, através de uma cerimônia rápida que envolve algum tipo de promessa de fazer o bem e permanecer honrado. Contudo, muitos cavaleiros não dão grande importância a estes juramentos e usam seu título e suas armas para roubar, matar e dominar com mais facilidade. \n Algumas ordens de cavalaria estão infestadas de nobres que só desejam o título, sem nunca merecê-lo. Mesmo assim, todo cavaleiro espera ser tratado como um igual por outro cavaleiro, ainda que sejam inimigos. Uma luta entre dois cavaleiros é um duelo com regras e certa pompa, não uma simples briga entre brutamontes de armadura. \n Cavaleiros podem se achar superiores, mas o verdadeiro ideal da cavalaria envolve humildade e serviço. O cavaleiro deve estar sempre disponível para cumprir as ordens de seu senhor ou aceitar pedidos de ajuda dos indefesos. Alguns dos melhores cavaleiros do mundo têm origem pobre ou são naturais de reinos sem grande tradição de cavalaria. \n A Ordem da Luz, em Bielefeld, é a mais notória ordem de cavalaria do mundo conhecido, mas qualquer reino possui pelo menos uma ordem obscura ou uma família de cavaleiros. O ímpeto de trajar armadura pesada, empunhar a espada e cavalgar em direção à aventura sempre existirá em toda parte.",
    famousExamples: [
      "Alenn Toren Greenfeld",
      "Bernard Branalon",
      "Brigandine",
      "Orion Drake",
      "Pelvas",
    ],
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Fortitude (Con)", "Luta (For)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Diplomacia (Car)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Nobreza (Int)', 'Percepção (Sab)', 'Vontade (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos.",
    abilities: [
      {
        name: "Código de Honra",
        description: "Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro."
      },
      {
        name: "Baluarte",
        description: "Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto."
      },
      {
        name: "Duelo",
        description: "A partir do 2º nível, você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1."
      },
      {
        name: "Poder de Cavaleiro",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de cavaleiro ou geral."
      },
      {
        name: "Caminho do Cavaleiro",
        description: "No 5º nível, escolha entre Bastião ou Montaria.",
        subAbilities: [
          {
            name: "Bastião",
            description: "Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Especialização em Armadura)."
          },
          {
            name: "Montaria",
            description: "Você recebe um cavalo de guerra com o qual possui +5 em testes de Adestramento e Cavalgar. Ele fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. De acordo com o mestre, você pode receber outro tipo de montaria. Veja a lista de montarias na página correta. Caso a montaria morra, você pode comprar outra pelo preço normal e treiná-la para receber os benefícios desta habilidade com uma semana de trabalho."
          },
        ]
      },
      {
        name: "Resoluto",
        description: "A partir do 11º nível, você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como abalado, paralisado etc.) que esteja o afetando. O segundo teste recebe um bônus de +5 e, se você passar, cancela o efeito. Você só pode usar esta habilidade uma vez por efeito."
      },
      {
        name: "Bravura Final",
        description: "No 20º nível, sua virtude vence a morte. Se for reduzido a 0 ou menos PV, pode gastar 3 PM para continuar consciente e de pé. Esta habilidade tem duração sustentada. Quando se encerra, você sofre os efeitos de seus PV atuais, podendo cair inconsciente ou mesmo morrer."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Baluarte +2, código de honra" },
      { level: 2, abilities: "Duelo +2, poder de cavaleiro" },
      { level: 3, abilities: "Poder de cavaleiro" },
      { level: 4, abilities: "Poder de cavaleiro" },
      { level: 5, abilities: "Caminho do cavaleiro, baluarte +4, poder de cavaleiro" },
      { level: 6, abilities: "Poder de cavaleiro" },
      { level: 7, abilities: "Baluarte (aliados adjacentes), duelo +3, poder de cavaleiro" },
      { level: 8, abilities: "Poder de cavaleiro" },
      { level: 9, abilities: "Baluarte +6, poder de cavaleiro" },
      { level: 10, abilities: "Poder de cavaleiro" },
      { level: 11, abilities: "Poder de cavaleiro, resoluto" },
      { level: 12, abilities: "Duelo +4, poder de cavaleiro" },
      { level: 13, abilities: "Baluarte +8, poder de cavaleiro" },
      { level: 14, abilities: "Poder de cavaleiro" },
      { level: 15, abilities: "Baluarte (aliados em alcance curto), poder de cavaleiro" },
      { level: 16, abilities: "Poder de cavaleiro" },
      { level: 17, abilities: "Baluarte +10, duelo +5, poder de cavaleiro" },
      { level: 18, abilities: "Poder de cavaleiro" },
      { level: 19, abilities: "Poder de cavaleiro" },
      { level: 20, abilities: "Bravura final, poder de cavaleiro" }
    ],
    extras: [
    {
      title: "As Ordens de Cavalaria de Arton",
      description: "Ordens de cavalaria são organizações hierárquicas, criadas para unir indivíduos dispostos a viver e morrer em nome de sua retidão. Sob os ideais da honra, tornam seus integrantes mais fortes. Pétreos, eu diria. Cavaleiros e suas ordens são parte integral de Arton. É difícil imaginar como seria a história do mundo sem considerar o papel exercido por essas instituições.\n A primeira dessas organizações que vem à mente é a Ordem da Luz, com suas linhagens ancestrais e seus enormes castelos em Bielefeld. Liderados por Sir Alenn Toren Greenfeld, os Cavaleiros da Luz carregam seus estandartes em nome da honra, da justiça e da tradição. As normas de conduta da instituição servem de modelo a cidadãos do Reinado que buscam se comportar de forma correta não só por sua história, mas também por seu papel em conflitos como a batalha contra a Tormenta e a Guerra Artoniana. \n A Ordem da Luz é irmã da Ordem de Khalmyr, e ambas foram fundadas por dois amigos e companheiros de batalhas. Porém, as semelhanças param por aí. Escondida nos confins das Montanhas Lannestull, a Ordem de Khalmyr possui tradição monástica — seus membros não se importam com títulos ou honrarias, apenas em seguir os mandamentos do Deus da Justiça. Os irmãos da ordem são os cavaleiros mais puros de Arton... Ou tolos congelados num tempo em que a vida era mais simples. \n Entre essas duas, há uma miríade de ordens menores espalhadas pelo Reinado e além. Algumas preocupam-se com a segurança de um feudo ou reino específico; outras, em manter sua estirpe. É bom lembrar que nem tudo é pureza: ordem traz poder, poder traz glória, e a glória leva à corrupção. Alguns veem os Cavaleiros do Corvo como um exemplo dessa degradação. Apesar de terem tido papel fundamental na derrota da Tormenta em Tamu-ra, esses renegados da Ordem da Luz usam métodos questionáveis e são vistos com profunda desconfiança pelos tradicionalistas.\n Ordens de cavalaria são irmandades baseadas em honra e ideais. Cada uma é como uma família estendida, um reino próprio. Mas pertencer a uma delas não depende de nascimento — é uma recompensa que só os merecedores conquistam. \n — Sete Notas, moreau do gato, bardo."
    },
    ]
    },
    { id: "Clérigo",
    name: "Clérigo",
    powersUrl: "/poderes/clerigo",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/clerigo.png",
    description: "Nada acontece em Arton sem o toque dos deuses. Quase todos os grandes momentos da história artoniana encontram reflexo em algum conflito ou estratagema divino: desde a Revolta dos Três até a queda de Lenórienn, a ascensão do Paladino e o surgimento da Flecha de Fogo, deuses transformam o destino do mundo. Os grandes representantes dos deuses na terra, seus arautos e servos em suas tramas celestiais, são os clérigos. \n Clérigos são sacerdotes cuja devoção é tão poderosa que os torna capazes de realizar milagres. De início são pequenas bênçãos, curas e pragas. Mas, à medida que um clérigo se torna mais experiente e digno, seus poderes se tornam assunto de lendas. Clérigos veteranos podem invocar anjos e demônios, comandar os elementos e até mesmo erguer os mortos. \n Apenas uma minoria de sacerdotes chega a desenvolver mesmo os mais singelos milagres. Em geral, o pároco ou madre de uma aldeia será apenas um líder espiritual, sem nenhum poder transcendente. O verdadeiro clérigo aventureiro é um escolhido dos deuses, alguém especial mesmo num mundo cheio de criaturas fantásticas e acontecimentos inacreditáveis. Afinal, ter a capacidade de curar ou ferir com um toque é ter domínio sobre a vida e a morte. \n A aparência e os maneirismos dos clérigos são extremamente variados. O clérigo “padrão” é devotado a divindades como Valkaria, a Deusa da Ambição; Khalmyr, o Deus da Justiça, ou Lena, a Deusa da Vida. São sacerdotes confiáveis e benevolentes que têm entre suas atribuições celebrar batismos, casamentos, funerais e outros ritos do cotidiano. Contudo, clérigos de deuses mais exóticos como Tenebra, a Deusa das Trevas; Arsenal, o Deus da Guerra, ou Aharadak, o Deus da Tormenta, são estranhos, sinistros e ameaçadores. Seus ritos são misteriosos e poucos plebeus desejam sua bênção. Um clérigo de Marah pode passar a vida ajudando órfãos carentes, enquanto um clérigo de Sszzaas pode liderar um culto obscuro que realiza sacrifícios! \n Embora muitos clérigos tenham seu rebanho e comandem um templo, a maioria dos clérigos aventureiros não tem residência fixa. Eles viajam em missões sagradas, sendo os agentes terrenos da vontade divina e combatendo servos de deuses inimigos. Alguns nem mesmo estão inseridos numa hierarquia eclesiástica: são profetas que atingiram a iluminação sozinhos e não respondem a nenhuma autoridade além do próprio deus. A relação entre padroeiros e devotos não é sempre de subserviência total — muitas vezes os deuses são desafiados e até vencidos. \n Além de realizar milagres, clérigos são treinados no uso de armaduras e escudos. A vocação divina raramente é pacífica ou tranquila. Sempre há fiéis a proteger, inimigos da fé e hereges a serem combatidos. E mesmo as missões mais mundanas e banais podem esconder algum desígnio no infinito plano das divindades.",
    famousExamples: [
      "Artorius",
      "Aurora",
      "Gwen",
      "Khorr’benn An-ug’atz",
      "Mestre Arsenal",
      "Nichaela",
      "Vanessa Drake",
    ],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "5 PM por nível"
    },
    skills: {
    mandatory: ["Religião (Sab)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Luta (For)', 'Misticismo (Int)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armaduras pesadas e escudos",
    abilities: [
      {
        name: "Devoto Fiel",
        description: "Você se torna devoto de um deus maior. Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa à sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção."
      },
      {
        name: "Magias",
        description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM."
      },
      {
        name: "Poder de Clérigo",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de clérigo ou geral."
      },
      {
        name: "Mão da Divindade",
        description: "No 20º nível, você pode gastar uma ação completa e 15 PM para canalizar energia divina. Ao fazer isso, você lança três magias divinas quaisquer (de qualquer círculo, incluindo magias que você não conhece), como uma ação livre e sem gastar PM (mas ainda precisa pagar outros custos). Você pode aplicar aprimoramentos, mas precisa pagar por eles. Após usar esta habilidade, você fica atordoado por 1d4 rodadas (mesmo se for imune a esta condição). Corpos mortais não foram feitos para lidar com tanto poder."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Devoto fiel, magias (1º círculo)" },
      { level: 2, abilities: "Poder de clérigo" },
      { level: 3, abilities: "Poder de clérigo" },
      { level: 4, abilities: "Poder de clérigo" },
      { level: 5, abilities: "Magias (2º círculo), poder de clérigo" },
      { level: 6, abilities: "Poder de clérigo" },
      { level: 7, abilities: "Poder de clérigo" },
      { level: 8, abilities: "Poder de clérigo" },
      { level: 9, abilities: "Magias (3º círculo), poder de clérigo" },
      { level: 10, abilities: "Poder de clérigo" },
      { level: 11, abilities: "Poder de clérigo" },
      { level: 12, abilities: "Poder de clérigo" },
      { level: 13, abilities: "Magias (4º círculo), poder de clérigo" },
      { level: 14, abilities: "Poder de clérigo" },
      { level: 15, abilities: "Poder de clérigo" },
      { level: 16, abilities: "Poder de clérigo" },
      { level: 17, abilities: "Magias (5º círculo), poder de clérigo" },
      { level: 18, abilities: "Poder de clérigo" },
      { level: 19, abilities: "Poder de clérigo" },
      { level: 20, abilities: "Mão da divindade, poder de clérigo" }
    ],
    extras: [
  {
    title: "Classe Divina - Clérigos & Frades",
    description: "Clérigos e frades — coletivamente chamados de sacerdotes — existem em uma espantosa variedade em Arton. Temos desde o humilde xamã de Allihanna, devotado à proteção de um povoado selvagem, até o exótico clérigo de Nimb, que age e se veste como um louco. Alguns são pacíficos, solenes, enquanto outros são combativos e brutais, dependendo da divindade a que servem.",
    sections: [
      { title: "Sacerdote de Aharadak",
        intro: "Vistos por muitos como cultistas profanos e depravados — quase todos de fato o são —, consideram-se arautos da chegada inevitável da Tormenta. Sua missão é atuar como mediadores entre a Tormenta e Arton, entre os lefeu e os artonianos. A tempestade não vem para destruir, mas para acolher: livrar este mundo de guerras, diferenças, individualidades que levam apenas à mágoa e ao ódio. Na Anticriação, tudo é perfeição e harmonia. Tudo é lefeu.\nSacerdotes de Aharadak consideram os povos de Arton como crianças ingênuas, guiadas por deuses falhos. Reagem com medo e violência ao Devorador, quando este se tornou deus apenas para mostrar o caminho. Conduzir Arton a uma era de plenitude, livre de dor ou sofrimento — pois tais coisas são causadas por intolerância, preconceito, conflito. Aharadak aceita tudo e todos. De fato, é a única divindade no Panteão sem qualquer restrição de devotos.\nPor ser tão tolerante, Aharadak abençoa até seus opositores. Concede poder divino aos que tentam confrontá-lo, usam recursos da Tormenta para resistir à sua chegada. Vários clérigos e frades de Aharadak unem-se a grupos de aventureiros que combatem a Tormenta, ainda assim mantendo seus dons. Por outro lado, muitos suspeitam ser justamente essa a intenção secreta do Devorador, corromper seus inimigos, seduzi-los com seu poder. Infestar o mundo com sua vermelhidão.\nAlguns sacerdotes de Aharadak acolhem refugiados lefou em cultos ou orfanatos, provendo conforto material e espiritual a esses excluídos. Outros são especialmente dedicados à sua proteção, aceitando missões para ajudá-los mesmo sem qualquer recompensa.",
        content: [
          { name: "Indumentária", description: " Muitos desprezam o uso de roupas diferenciadas, que consideram apego fútil à individualidade, vestindo apenas mantos rústicos. Outros glorificam o Devorador com trajes elaborados, invariavelmente em vermelho vivo." },
          { name: "Fundamentalista", description: " Diferente de outros deuses, Aharadak tem mais fundamentalistas que liberais — são os verdadeiros vilões, cultistas maníacos que aterrorizam aldeias, sacrificam vítimas, invocam aberrações. É impossível para tais depravados perder seus poderes; suas almas já pertencem ao Devorador por completo. São obcecados com espalhar a corrupção da Tormenta, não importando quantos precisem sofrer ou morrer. Ainda assim, em suas mentes alucinadas, estão “fazendo o bem”." },
        ]
      },
      { title: "Sacerdote de Allihanna",
        intro: "Diferente do solitário druida, que prefere a reclusão ou a companhia de poucos aventureiros chegados, clérigos e frades de Allihanna (também conhecidos como xamãs) desempenham um papel mais semelhante ao de guias espirituais convencionais. São frequentemente encontrados em pequenas comunidades ou tribos, atuando como conselheiros dos chefes e do próprio povo.\nNo cotidiano da aldeia, o xamã assume posição de grande importância. Muitas vezes é o único indivíduo dotado de habilidades mágicas, servindo como elo entre os mortais e os deuses. Ele trata doenças, concede bênçãos e realiza adivinhações sobre o futuro, entre outras responsabilidades “espirituais”. Geralmente é um membro respeitado e poderoso da tribo, embora em certas circunstâncias possa ser também temido, obedecido apenas por intimidação.\nVários xamãs cultuam Allihanna através de algum animal totêmico que a representa (incluindo os mesmos venerados pelos bárbaros). Assim, tanto a Divina Serpente das voracis quanto o Urso Dourado das Montanhas Sanguinárias são faces da deusa, assim como centenas de outros animais sagrados de Arton. Ao contrário do druida selvagem, o xamã demonstra grande habilidade no trato com pessoas. Em uma comunidade de bárbaros, pode ser considerado o mais adequado para lidar com forasteiros de sociedades urbanizadas. No entanto, ele ainda mantém respeito e apreço pelos animais, muitas vezes recebendo em troca o mesmo tipo de gentileza.",
        content: [
          { name: "Indumentária", description: " O xamã tende a usar trajes cerimoniosos, em tons naturais e sóbrios de verde e marrom, para inspirar respeito entre os seus. Ostenta amuletos, pinturas ritualísticas e símbolos sagrados, cultivando uma aura de mistério." },
          { name: "Fundamentalista", description: " Totalmente dedicado à proteção e ao bem-estar de sua comunidade, jamais se ausenta em missões ou aventuras, exceto quando essa comunidade está em risco. Mesmo nesses casos, não deve se ausentar por mais de um mês." },
        ]
      },
      { title: "Sacerdote de Arsenal",
        intro: "A ainda recente ascensão de Arsenal causou grande tumulto entre os clérigos da Guerra. Para muitos antigos devotos de Keenn, a derrota de sua divindade foi devastadora — uns enlouqueceram, outros se mataram, outros ainda buscaram uma morte digna em combate, na esperança de reencontrar seu deus. Os demais aceitaram o recém-chegado com honras, celebraram sua conquista épica, julgando ser natural seguir o guerreiro mais forte.\nClérigos e frades de Arsenal buscam ocupar os mesmos papéis tradicionais antes desempenhados por sacerdotes de Keenn. Atuam como chefes de guerra para aldeias ou conselheiros para regentes. Podem ser vistos em ambos os lados de qualquer grande batalha. Incitam conflitos, mas não fazem guerra pela guerra, como Keenn pregava. Acreditam que guerrear torna os povos mais fortes, é parte fundamental do amadurecimento das civilizações. Preparam Arton para sair vitoriosa contra qualquer adversário.\nDe fato, mais que apenas buscar guerra, clérigos de Arsenal buscam vitória. Arsenal odeia perdedores, eles dizem. Como seu patrono fazia em vida, clamam sempre haver um meio para alcançar qualquer objetivo. Obstáculos só existem para serem superados — ou esmagados. Desistir não é opção. Derrota não é opção.\nApesar dessa postura impetuosa, o clérigo de Arsenal não é nenhum bárbaro furioso e estúpido — mas um guerreiro perspicaz, pragmático, estratégico. Luta de forma inteligente. Estuda seu inimigo antes de atacar, busca fraquezas. Usa curas e proteções, até recua quando julga necessário. É forte e corajoso, mas não tolo.",
        content: [
          { name: "Indumentária", description: " Buscando emular a forma blindada de seu deus, o sacerdote procura vestir tantas camadas de metal quanto puder, preferencialmente nas cores verde e púrpura." },
          { name: "Fundamentalista", description: " Qualquer mínima derrota deve ser imediatamente corrigida com uma vitória. Isso vale para qualquer teste de perícia, qualquer disputa, até mesmo algo inofensivo como uma discussão ou um jogo amigável. Deixar de fazê-lo é uma violação das Obrigações & Restrições, mesmo quando não houver meio (nesse caso, crie um meio)." },
        ]
      },
      { title: "Sacerdote de Azgher",
        intro: "Embora o culto a Azgher seja mais prevalente em Halak-Tûr, também é praticado em numerosos outros pontos de Arton, incluindo o Reinado. Nesses lugares, clérigos e frades do Deus-Sol atuam como guias e líderes espirituais, ajudando suas comunidades a entender e respeitar a natureza exigente de seu deus. Conduzem cerimônias ao nascer e pôr do sol, agradecendo a Azgher por sua luz e seu calor.\nNo passado, o culto de Azgher era restrito ao deserto e seus povos originários. Com o tempo, seu aspecto vigilante — aquele que revela verdades e encontra culpados — atraiu novos seguidores entre os que buscam fazer justiça. Sua igreja acabaria se tornando bastante popular no Reinado, agregando os mais variados caçadores de bandidos e monstros. Mesmo membros de raças altamente improváveis, como osteon e trogs, podem acabar como seus devotos.\nClérigos e frades de Azgher também glorificam o bom tempo, a beleza, a própria vida que floresce sob o sol. Seu brilho sagrado é uma bênção de conforto e segurança, em contraste à escuridão sinistra de Tenebra. Dias de clima firme são presentes deste deus para Arton.",
        content: [
          { name: "Indumentária", description: " Sacerdotes de Azgher normalmente vestem branco com detalhes em dourado. Sempre escondem o rosto, conforme as exigências de sua crença, usando desde simples lenços a belas máscaras douradas, que podem trazer gravada a figura do sol. Outros exibem o símbolo sagrado como joia, bandeira ou escudo." },
          { name: "Fundamentalista", description: " Não apenas é proibido de se associar a devotos de Tenebra, mas também deve atacar e destruir todos aqueles que encontrar." },
        ]
      },
      { title: "Sacerdote de Hyninn",
        intro: "O Deus da Trapaça tem como principais devotos não os sacerdotes, mas os ladrões, que costumam fazer orações antes de realizar algum “serviço”. Ainda assim, esta divindade também tem clérigos e frades. Estes muitas vezes atuam como conselheiros dos chefes de guildas e quadrilhas, quando não são eles mesmos os chefes. Templos dedicados a Hyninn são considerados sagrados pelos ladrões, sendo proibido realizar atividades criminosas ali.\nPor não existir uma ordem constituída de Hyninn, um candidato precisa primeiro encontrar um clérigo desse deus e provar sua devoção para ser aceito como discípulo — tarefa nada fácil, exigindo grande esperteza. Ao final do treinamento, o discípulo recebe seu símbolo sagrado ao passar pela prova final: enganar seu próprio mestre.\nO símbolo sagrado de Hyninn é uma adaga atravessando uma máscara. Todos os sacerdotes usam esse emblema na forma de um pequeno medalhão, escondido sob a roupa — Hyninn está entre os poucos deuses do Panteão que permitem a seus seguidores ocultar o símbolo sagrado. Não raro, para evitar problemas com a lei, o sacerdote finge ser devoto de outra divindade, vestindo-se e agindo de acordo com o papel.\nSendo Hyninn também um patrono das masmorras, é natural que seus clérigos acabem como parte de grupos aventureiros, atuando como especialistas em seus mistérios e perigos. Por suas habilidades ardilosas, este clérigo muitas vezes ocupa os papéis tradicionais dos ladinos, superando portas trancadas, passagens secretas e armadilhas.",
        content: [
          { name: "Indumentária", description: " Quando não precisa esconder sua devoção real, o clérigo de Hyninn se veste como um sacerdote comum, exibindo seus instrumentos de ofício em cintos e bolsas. Vários ocultam o rosto com lenços e máscaras, como se fossem justiceiros misteriosos." },
          { name: "Fundamentalista", description: " Proibido de dizer mais de cinco verdades por dia. Além disso, seu ato de furtividade diário deve ter CD mínima 20 + metade de seu nível." },
        ]
      },
      { title: "Sacerdote de Kallyadranoch",
        intro: "O Deus dos Dragões é um tirano cruel, sem respeito ou apreço pelos mortais, nem preocupação com seu conforto ou bem-estar. Da mesma forma, para o clérigo de Kallyadranoch, todas as outras criaturas são vermes inferiores, existindo apenas para o prazer de sua divindade.\nO maior objetivo do clérigo de Kally é comando, controle e dominação. Para agradar a seu deus, este sacerdote busca aterrorizar ou dominar o maior número possível de vítimas. Diferente dos sszzaazitas, não é sutil e traiçoeiro — dragões não se escondem. Este clérigo age abertamente, orgulhoso, ostentando seu poder e majestade.\nA maioria dos outros clérigos tende a se organizar em cultos, mas não o servo de Kally — não há espaço para iguais nesta religião. Assim como os dragões, ele é territorial e intolerante. Caso saiba de outro de mesma fé agindo nas proximidades, buscará expulsá-lo ou destruí-lo. Mas sua atitude em relação aos dragões é bem diferente: tenta ser aceito como servo dos grandes répteis, venerando sua majestade, cumprindo cada ordem ou desejo.\nPoucos destes clérigos podem ser encontrados em grupos de aventureiros. Quando se aventuram, buscam enaltecer a grandiosidade dos dragões, assegurar que encontros com essas criaturas acabem bem. Para qual dos lados? Quem sabe? Também é interessante notar que estes clérigos odeiam e desprezam a corruptela “Kally”, exigindo que o nome de seu patrono seja sempre pronunciado por inteiro.",
        content: [
          { name: "Indumentária", description: " A vestimenta deste sacerdote costuma ser chamativa e colorida, com motivos dracônicos. Muitos usam armaduras decoradas com escamas, garras e presas artesanais, outros preferem majestosos mantos e robes. O clérigo de Kallyadranoch não quer passar despercebido." },
          { name: "Fundamentalista", description: " Deve oferecer servidão a um dragão maligno adulto ou maior (muitos perdem a vida fazendo essa tentativa). Caso consiga, deve cumprir ordens e realizar oferendas regulares a esse patrono, mesmo quando envolvem sacrifícios humanos." },
        ]
      },
      { title: "Sacerdote de Khalmyr",
        intro: "Quando o Deus da Justiça liderava o Panteão, seus sacerdotes costumavam ser considerados os mais importantes de Arton. Com sua autoridade e retidão inquestionáveis, atuavam não apenas como conselheiros para regentes, mas também como juízes e autoridades máximas.\nMas a Arton de hoje é diferente. Khalmyr não comanda mais os deuses e o Reinado foi quase desintegrado pelas últimas guerras — talvez esses eventos tenham ligação. Muitos acreditam que os devotos de Khalmyr falharam em proteger Arton. Para outros, a ação dos campeões da Justiça é agora mais necessária do que nunca.\nNas nações restantes do atual Reinado, além de atuarem como conselheiros espirituais, os sacerdotes de alto escalão de Khalmyr desempenham o papel de magistrados na maioria dos tribunais (é comum ver o símbolo de Khalmyr gravado na tribuna do juiz). Apesar desse importante papel oficial e “burocrático” da ordem de Khalmyr, seus sacerdotes também podem ser aventureiros — empenhados em assegurar que os inocentes sejam salvos e o bem e ordem sempre triunfem. Estes clérigos e frades são valorosos em batalha, mas podem ser tão inflexíveis quanto paladinos ao exigir retidão de seus aliados.",
        content: [
          { name: "Indumentária", description: " Sacerdotes de Khalmyr são facilmente reconhecíveis em seus mantos azul-escuros, exibindo em branco o símbolo sagrado. Poucos escolhem vestimentas diferentes." },
          { name: "Fundamentalista", description: " Em vez de simplesmente esperar por pedidos de ajuda, deve sempre oferecê-la a qualquer pessoa que encontrar. Se houver várias pessoas na cena, oferece ajuda a quem pareça ter mais necessidade. O devoto deve encontrar e ajudar pelo menos um necessitado por dia." },
        ]
      },
      { title: "Sacerdote de Lena",
        intro: "Sempre se acreditou — ou ainda se acredita, em vários pontos de Arton — que apenas mulheres poderiam ser clérigas de Lena, sendo a maternidade um pré-requisito para tal. Contudo, a recente adesão de raças incapazes de reprodução a essa igreja, como golens e osteon, vem provando que a Deusa da Vida é mais tolerante e generosa do que se pensava. Ela admite não apenas devotas que se tornaram mães de maneira convencional, mas também através de adoção ou até meios mágicos. Ainda assim, as clérigas são muito mais numerosas; em grande parte dos templos, apenas mulheres alcançam posições de liderança.\nSacerdotisas de Lena atuam principalmente como curandeiras, seja em povoados remotos ou grandes cidades, em campos de batalha ou masmorras escuras. Seus templos louvam a deusa, mas também são clínicas e casas de saúde. Em tempos de guerra, as clérigas acompanham exércitos e curam feridos; devido a esse papel, existe em Arton um costume ancestral de respeito e não-agressão a clérigos no campo de batalha quando não lutam, apenas curam e fornecem suporte.\nComo aventureiras, embora evitem lutar ou causar ferimentos, estas clérigas buscam proteger a saúde dos companheiros — e também de seus adversários, quando possível. Uma sacerdotisa de Lena sempre vai preferir capturar inimigos com vida, considerando-a algo precioso e sagrado.",
        content: [
          { name: "Indumentária", description: " Sacerdotisas de Lena vestem cores brilhantes como verde, amarelo e branco. Dizem que elas têm mania de limpeza: gostam de roupas asseadas e banhos constantes (tal “mania” salvou incontáveis vidas de pacientes sob seus cuidados, livrando-os de infecções)." },
          { name: "Fundamentalista", description: " As mais ferrenhas clérigas de Lena não recusam ajudar qualquer vítima de um conflito, em qualquer dos lados. Sempre que existe uma criatura ferida ao alcance de sua cura, seja aliado ou inimigo, não pode realizar qualquer outra ação exceto curá-la." },
        ]
      },
      { title: "Sacerdote de Lin-Wu",
        intro: "Conhecidos como shugenja em sua terra natal, grande parte dos clérigos de Lin-Wu vem concentrando seus esforços na reconstrução de Tamu-ra, após sua destruição e abandono pela Tormenta. Contudo, como agradecimento ao Reinado de Arton por sua ajuda valiosa durante a tragédia, grande parte destes sacerdotes também atua no continente, ajudando seus povos a superar adversidades.\nSacerdotes de Lin-Wu se consideram em dívida de honra com o Reinado e seus deuses, mostrando grande respeito perante devotos de outras crenças. Ainda assim, estão sempre dispostos a guiar interessados nos próprios caminhos da honra sagrada — o que fazem por seu próprio exemplo, demonstrando honestidade, coragem e dignidade. Estes sacerdotes também priorizam proteger e resgatar tesouros tamuranianos, salvar o que ainda resta de sua cultura ancestral.\nPor sua honra elevada, shugenja são considerados membros da alta nobreza no Império de Jade, a elite suprema dos conjuradores — enquanto samurais são a elite guerreira. Lin-Wu ensina que ambos são perfeitos juntos, combinando o calor da magia e a força do aço. Assim, um shugenja aventureiro buscará unir forças com cavaleiros, guerreiros, paladinos e outros combatentes, muito embora ele próprio também seja treinado no uso de armas tradicionais.\nSem muita surpresa, para o shugenja não há mal pior que a Tormenta. Ele acompanhará qualquer missão envolvendo livrar Arton dos odiosos demônios akumushi, como chamam os lefeu.",
        content: [
          { name: "Indumentária", description: " O típico clérigo de Lin-Wu veste trajes de seda com as cores brilhantes de seu Deus Samurai: vermelho, verde e dourado." },
          { name: "Fundamentalista", description: " Sem tolerância à incivilidade estrangeira, o shugenja não permite que seus aliados recorram a ações que exigem testes de Enganação, Ladinagem ou Furtividade; qualquer desses atos é uma desonra!" },
        ]
      },
      { title: "Sacerdote de Marah",
        intro: "Facilmente identificáveis por suas vestes brancas e pelo símbolo que ostentam — uma pena sobre um coração —, sacerdotes de Marah são defensores convictos da paz. Sua principal missão é impedir a violência, evitar guerras, acalmar conflitos e buscar soluções diplomáticas. Por isso, muitos são escolhidos como conselheiros, diplomatas e embaixadores.\nNão é raro aqueles que sofreram desgraças buscarem conforto na Ordem de Marah; sobreviventes de tragédias, guerreiros exaustos ou qualquer vítima de violência. Em tempos passados, tornou-se comum encontrar elfos nesta ordem (rompendo com a tradição de devoção élfica quase exclusiva à antiga deusa Glórienn), particularmente entre fugitivos do terrível ataque a Lenórienn. Mais recentemente, refugiados da Guerra Artoniana que tiveram suas vidas destruídas também buscam conforto no culto a Marah. Até mesmo heróis combalidos, cansados de tantas batalhas, terminam seus dias como devotos da deusa.\nMas engana-se quem pensa que estes clérigos e frades são sempre solenes, sérios ou pacatos. Marah ensina que a vida deve ser vivida com alegria e amor; devotos celebram esse aspecto da deusa com grandes festas, cerimônias e casamentos. Seus sacerdotes são treinados em canto e dança (a deusa também é venerada por bardos), sempre buscando oportunidades para festejos. Da mesma forma, amor carnal é aclamado como algo sagrado por Marah.\nTodos os templos desta fé são magicamente protegidos pela deusa: em seu interior, é impossível cometer qualquer ato violento, como se a própria Marah estivesse presente. Assim, é comum que pessoas em perigo busquem refúgio nesses locais.",
        content: [
          { name: "Indumentária", description: " Clérigos e frades de Marah vestem branco, mas adotam cores mais festivas em celebrações. Usam mantos, mas também vestimentas mais insinuantes que os sacerdotes de outros deuses." },
          { name: "Fundamentalista", description: " Nunca participa de um combate, nem mesmo protegendo ou curando aliados. Jamais lança magias que exigem testes de resistência, pois considera isso uma agressão. Recorre a qualquer meio não violento para encerrar um combate, sacrificando a própria vida se necessário." },
        ]
      },
      { title: "Sacerdote de Megalokk",
        intro: "De forma similar ao sacerdote de Allihanna, xamãs de Megalokk assumem a missão de proteger monstros que vivem em bandos ou comunidades. Entre esses, temos não apenas raças monstruosas como orcs, trogs e gigantes, mas também povos humanos e outros que escolhem um modo de vida desumano. Isso ocorre em tribos remotas habitando terras inóspitas, como as Sanguinárias, as Uivantes, Galrasia e outras.\nEm tais sociedades, que muitas vezes vivem de saquear e pilhar, o xamã assume a liderança — ou atua como conselheiro para um chefe mais forte, transmitindo o desejo de Megalokk. Ele é uma figura misteriosa e temida, mesmo entre os seus, que não ousam contrariá-lo para evitar a fúria divina. Não raras vezes, o clérigo utiliza esse temor para comandar os monstros em proveito próprio, até mesmo se tornando um tirano: Megalokk não se importa. Basta que sigam sendo monstros, atacando e matando, buscando na violência as respostas para tudo na vida e na morte.\nPara ser xamã de Megalokk, o sacerdote deve se comprometer com proteger sua espécie e lutar por supremacia, tornar seus seguidores os predadores mais perigosos, buscar o topo da cadeia alimentar. O xamã se torna guardião da cultura e costumes de sua raça (quando houver), ensinando os filhotes e treinando os jovens. Também intermedia contatos com outros povos — nem sempre violentos, quando trazem alguma grande vantagem para a tribo. Um grupo de aventureiros com uma oferenda generosa pode ser capaz de negociar com um xamã.\nAlguns humanos e outras raças escolhem ser clérigos de Megalokk, por razões variadas: desilusão total com a sociedade, afinidade com monstros ou simples busca de poder. Muitos fracassam, acabam devorados por aqueles que desejavam proteger. Os bem-sucedidos, no entanto, adquirem poderes impressionantes. Podem até mesmo acabar como aventureiros, quando encontram um grupo que consideram merecedor.",
        content: [
          { name: "Indumentária", description: " Xamãs de Megalokk quase nunca usam roupas, visto que quase sempre têm pelagem, escamas, carapaça e outras formas de proteção corporal. Quase todos, contudo, ostentam montes de amuletos feitos de ossos e outros “troféus”." },
          { name: "Fundamentalista", description: " Recusa qualquer aliança ou contato pacífico com membros de outros povos, exceto o tipo de monstro que protege. Todos os outros merecem apenas violência, servem apenas como comida." },
        ]
      },
      { title: "Sacerdote de Nimb",
        intro: "“Khalmyr tem o tabuleiro, mas quem move as peças é Nimb”. O antigo provérbio, dos tempos em que o Deus da Justiça liderava o Panteão, ainda é considerado atual e válido por sacerdotes do Deus do Caos. Eles acreditam que Arton foi forjada sob uma ilusão de ordem e harmonia, quando na verdade o mundo é governado por caos, sorte e azar. Apenas ao abraçar esse fato podemos alcançar nossos objetivos. Ou, enfim, libertar-nos deles.\nDifícil determinar se clérigos e frades de Nimb enlouquecem devido ao contato com o Deus do Caos ou se o buscam por já serem insanos. De qualquer maneira, seu comportamento é percebido como loucura por todos os outros. Alguns são excêntricos, interessantes, até divertidos, enquanto outros são lunáticos perigosos. Para piorar, aqueles que pertencem ao primeiro tipo podem facilmente mudar para o segundo e vice-versa!\nSacerdotes de Nimb pregam que tudo é obra do acaso e, simultaneamente, nada é inevitável. Não acreditam em algum futuro predeterminado, traçado para cada indivíduo: o destino muda a cada instante, pois assim é o Caos. Diferente do que se imagina, tal modo de pensar torna estes clérigos e frades aventureiros muito eficazes, sempre prontos para o inesperado. Para eles, trilhar aventuras com a vida sempre em risco é muito mais natural que sossegar em cidades organizadas e enfadonhas. Servos de Nimb raramente desistem de uma missão, mesmo evitando fazer planos extensos para o futuro.\nEmbora quase todos estes devotos sejam extravagantes, existem aqueles de comportamento moderado, contido, até racional. Consideram sua loucura valiosa, reservada para momentos importantes. Estes, claro, são os mais perigosos e imprevisíveis...",
        content: [
          { name: "Indumentária", description: " Como esperado, clérigos e frades de Nimb não têm vestimentas típicas. Alguns escolhem trajes clericais convencionais (o que é raro), outros usam vestes que ninguém mais ousaria. A única constante é que adotam faces de dados, ou outros temas relacionados a jogos, como seu símbolo sagrado." },
          { name: "Fundamentalista", description: " Como oferenda a Nimb, entrega a própria vida ao aleatório. Uma vez a cada sessão (ou a cada mês, em tempo de jogo), coloca-se em uma situação com pelo menos 5% de chance de morte (1 em 1d20). Por exemplo, misturando um doce envenenado a outros dezenove inofensivos, então comendo um ao acaso." },
        ]
      },
      { title: "Sacerdote de Oceano",
        intro: "Piratas dizem que o Oceano está desaparecido, culpam uns aos outros por esse evento. Clérigos e frades do Oceano, quando consultados a respeito, questionam essa verdade: suas magias ainda funcionam, seus augúrios ainda revelam verdades, suas Obrigações & Restrições provam que o Deus dos Mares ainda observa suas ações. Mas por que então, diferente de outros deuses, o Oceano deixou de interferir no mundo dos mortais? Por que não pode ser encontrado em seu reino divino? Por que seu avatar nunca mais foi visto? Sacerdotes e outros devotos do Oceano buscam explicação para esse mistério, enquanto seguem cumprindo seus deveres tradicionais — como embaixadores entre o mundo submarino e o mundo seco.\nMuitos clérigos e frades do deus dos mares pertencem a raças aquáticas, como sereias, tritões e elfos-do-mar, assumindo os mesmos papéis protetores dos xamãs de Allihanna e Megalokk em suas comunidades nativas. Mas também existem sacerdotes desta fé entre outras raças, sobretudo em regiões costeiras. Ali eles podem ser vistos orientando e protegendo povoados bárbaros, vilas de pescadores, cidades portuárias e até embarcações — entre os marinheiros, acredita-se que ter um destes clérigos a bordo traz sorte e afasta a fúria do mar. Cabe-lhes guiar os povos do mundo seco através das águas, exaltar suas maravilhas e perigos, ensinar a respeitar sua soberania. Da mesma forma, clérigos e frades do Oceano também zelam por criaturas marinhas que visitam o mundo seco.\nUm fato interessante sobre clérigos do Oceano é que muitos podem ser vistos carregando grandes pranchas de madeira ou outro material natural, chamada sagna — aparato tradicional de povos praianos, que permite deslizar sobre as águas. É comum que chefes tribais sejam escolhidos entre os mais habilidosos sagnautas, aqueles capazes de cavalgar as maiores ondas. Poucos sabem, porém, que a sagna é igualmente efetiva em combate, funcionando como escudo.",
        content: [
          { name: "Indumentária", description: " Clérigos do Oceano costumam trajar roupas sumárias, próprias para natação, ou mantos adornados com temas náuticos: âncoras, barcos, peixes, estrelas-do-mar..." },
          { name: "Fundamentalista", description: " Jamais pisa em solo firme, exceto quando cercado de água visível em pelo menos três direções (barcos, navios, cais, ilhotas...). Quando absolutamente necessário, deve recorrer a meios especiais, como voo, para evitar que seus pés toquem o chão." },
        ]
      },
      { title: "Sacerdote de Sszzaas",
        intro: "O Deus da Traição é inquestionavelmente maligno. Também é inquestionavelmente o mais inteligente entre os deuses, tendo sido capaz de iludir todos os outros para retornar ao Panteão após sua expulsão. Aqueles que cultuam Sszzaas não oram por sua compaixão; apenas esperam conquistar parte de sua genialidade poderosa, desvendar seus segredos, ser reconhecidos como dignos pelo manipulador supremo.\nO sacerdote de Sszzaas acredita que o mundo pertence aos astutos. Cabe a esses liderar, tomar decisões sensatas, enquanto os demais obedecem e servem — idealmente sem perceber que o fazem. Estes sacerdotes vivem por pura meritocracia: o Grande Corruptor vai abençoá-los apenas enquanto fizerem por merecer, não existe bondade ou piedade em seu coração venenoso. Seu mundo é inclemente, competitivo, sem lugar para erros. Lógica e pragmatismo são tudo. Mente é superior a emoção. Tolice e ingenuidade são os maiores pecados.\nConforme essa doutrina, muitos clérigos de Sszzaas são malignos, sem consideração pela dignidade e bem-estar de outros seres. Mas nem todos. Há aqueles que usam inteligência afiada e manipulação engenhosa para combater o mal. Enganam bandidos para frustrar seus crimes, trapaceiam vilões para estragar seus planos, confundem monstros para salvar suas vítimas. Por seus métodos questionáveis, muitas vezes acabam em grupos de aventureiros de mesma índole, como bucaneiros, ladinos e nobres. Os mais ousados até acompanham cavaleiros e paladinos, enganando os aliados assim como os inimigos.\nEm oposição total a Tanna-Toh, Sszzaas é também o Deus dos Segredos: quanto mais valiosa uma verdade, mais ela precisa ser escondida e protegida. Assim, seus clérigos e frades são guardiões dos mistérios do mundo, evitando que sejam espalhados ou conhecidos. Guardam segredos até a morte, quando então devem entregá-los ao Corruptor e receber sua admiração.",
        content: [
          { name: "Indumentária", description: " Quando não escondem sua devoção, sacerdotes de Sszzaas usam trajes ornamentados com motivos de serpentes. Em outras situações, vestem o que parecer mais vantajoso para seu disfarce atual." },
          { name: "Fundamentalista", description: " Conhecidos como sszzaazitas, estes fanáticos são os devotos mais ferrenhos de Sszzaas, não raras vezes traindo e matando seus aliados. Cada vez que sobe de nível, um sszzaazita deve realizar um sacrifício (assassinar um humanoide em ritual) ou um ato de corrupção do bem (fazer fracassar uma causa justa, incriminar um inocente por um crime grave, destruir um item sagrado...)." },
        ]
      },
      { title: "Sacerdote de Tanna-Toh",
        intro: "Guardiões da história e conhecimentos, sacerdotes de Tanna-Toh têm como missão educar os povos. Em grandes cidades ou aldeias remotas, assumem o papel de professores, ensinando artes, ciências e especialmente leitura e escrita. Seus templos funcionam como escolas, academias, universidades, bibliotecas e museus. Qualquer pessoa em busca de cultura ou informação será bem recebida ali pelos clérigos e frades, conhecidos por sua paciência.\nSacerdotes de Tanna-Toh são basicamente pacifistas, mas é um erro vê-los apenas como professores inofensivos. Clérigos da ordem recebem treinamento em combate para proteger o que tanto valorizam e podem ser encontrados atuando como guardas em bibliotecas e museus, ou participando de aventuras que envolvem buscas por conhecimentos perdidos. Curiosidade é traço comum entre estes sacerdotes, sempre ansiosos por aprender tanto quanto por ensinar. Diante de uma criatura nova, buscam descobrir tudo sobre ela. Conhecendo uma pessoa interessante, logo enchem-na de perguntas. E, entrando em uma masmorra, fazem questão de explorar cada câmara e aposento, sem deixar nenhum canto ignorado.\nPela proibição de faltar com a verdade e recusar-se a responder qualquer pergunta, nem sempre é fácil ser devoto desta divindade. Muitas vezes será preciso desenvoltura para dialogar com estranhos, ou até inimigos, sem revelar informações valiosas. Aventureiros furtivos ou trapaceiros certamente têm problemas para agir com estes clérigos, ainda que sua sabedoria e habilidades sejam sempre bem-vindas.",
        content: [
          { name: "Indumentária", description: " Sacerdotes de Tanna-Toh vestem branco, amarelo e/ou cinza claro, em geral cultivando certa elegância acadêmica. Muitos usam óculos (ou monóculos), boinas, cachecóis, lenços e joias delicadas." },
          { name: "Fundamentalista", description: " Em vez de esperar perguntas, simplesmente revela tudo que existe para saber, mesmo sem ser perguntado. Também é proibido de fazer testes de Enganação ou Furtividade, ou permitir que sejam feitos em sua presença (caso ocorram, deve revelar a verdade e/ou atrapalhar a ação)." },
        ]
      },
      { title: "Sacerdote de Tenebra",
        intro: "A Deusa das Trevas é altamente venerada entre os anões, sendo a segunda divindade mais cultuada pela raça, apesar de sua rivalidade com Khalmyr. No reino oculto de Doherimm, onde não é vista como maligna, Tenebra tem grandes templos e uma ordem bem organizada. Embora alguns anões mais tradicionalistas torçam os grandes narizes para ela, escolhendo acreditar que são filhos apenas de Khalmyr, a maior parte dos membros dessa raça considera a Mãe Noite uma amiga, paixão ocasional e quase rival do Deus da Justiça, uma contraparte esperta, questionadora, inventiva e matreira à retidão justa e inflexível de Khalmyr.\nAlém de anões, a Deusa das Trevas tem outros seguidores — sobretudo criaturas noturnas ou subterrâneas, mas também humanos e membros de outros povos. Para alguns, ela é uma figura gentil que conforta seus devotos em tempos perigosos e sombrios. Para tantos outros, uma conquistadora implacável que comanda legiões de criaturas profanas.\nClérigos e frades de Tenebra se empenham em demonstrar ao mundo que sua padroeira não é um demônio maligno, mas uma deusa de mistério e esperança, que oferece conforto e força a seus devotos. Consideram seu manto de escuridão, que protege da fúria e do calor do sol, uma dádiva gentil. Tanto aqueles que a veneram quanto aqueles que a temem contam com muitos argumentos para justificar sua predileção ou aversão.\nQuando o assunto são mortos-vivos, muitos rejeitam a ideia de que Tenebra os criou, enquanto outros dizem que os monstros existem para testar a bravura de quem desafia a escuridão. Outros ainda acreditam que os mortos-vivos sejam um presente da deusa para seus devotos mais fiéis. De fato, muitos arcanistas são devotos da deusa, utilizando esqueletos e zumbis como servos — na rotina diária ou explorando masmorras.",
        content: [
          { name: "Indumentária", description: " Muitos sacerdotes de Tenebra vestem mantos e armaduras negras, exibindo no peito a estrela da deusa. Existem aqueles que consideram seus trajes escuros como honraria à deusa, não poupando elegância e sofisticação." },
          { name: "Fundamentalista", description: " Proibido de recorrer a qualquer forma de iluminação natural, artificial ou mágica; pode apenas usar visão no escuro e outros sentidos. Além disso, não apenas é proibido de associar-se a devotos de Azgher, mas também deve atacar e destruir todos aqueles que encontrar." },
        ]
      },
      { title: "Sacerdote de Thyatis",
        intro: "Para o heroico Thyatis, a vida é uma dádiva valiosa e importante demais para ser interrompida. Cabe a seus sacerdotes assegurar que todos em Arton tenham um futuro. Uma segunda chance.\nClérigos e frades de Thyatis são famosos por seus dons de profecia, assegurando que os mortais sigam caminhos corretos e seguros, evitando fatalidades. Ou, quando é tarde demais, revertendo essas fatalidades como ressurreições milagrosas. Graças a seus poderes, são procurados por grupos de aventureiros para ressuscitar amigos mortos em batalha, parentes assassinados e outras vítimas de morte não natural. Acreditam que todos merecem uma nova chance, sejam valorosos paladinos ou assassinos implacáveis. Apenas a morte por causas naturais é tolerada por Thyatis.\nUm sacerdote deste deus normalmente não aceita pagamento em ouro por realizar seus milagres. Contudo, quando ressuscita alguém, muitas vezes experimenta visões contendo mensagens de Thyatis, atribuindo uma missão àquele que acaba de salvar. É responsabilidade do sacerdote transmitir a notícia ao ressuscitado, que deve cumprir a tarefa como pagamento pela dádiva recebida. Caso a vítima recuse ou desista da missão, começa a definhar dia a dia até ser reduzida a cinzas. O processo pode ser interrompido através de confissão e pedido de perdão a um clérigo de Thyatis, seguido pela retomada da missão.\nPor seu respeito extremo pela vida, clérigos e frades de Thyatis rejeitam a ideia de matar membros de quaisquer povos dos deuses. Aqueles que decidem lutar escolhem armas e táticas que desabilitam seus adversários sem matá-los, como manobras e magias de imobilização. De fato, alguns podem ser extremamente violentos, mas são exceções; heroísmo e piedade são as maiores virtudes destes sacerdotes.",
        content: [
          { name: "Indumentária", description: " Clérigos de Thyatis vestem tons chamativos de laranja, dourado e amarelo, emulando as chamas da ave fênix." },
          { name: "Fundamentalista", description: " Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos. Além disso, não pode se recusar a ressuscitar nenhuma criatura ao alcance de seus poderes, incluindo inimigos." },
        ]
      },
      { title: "Sacerdote de Thwor",
        intro: "No passado, o deus menor Ragnar ascendeu ao Panteão como o Deus da Morte, e também como divindade suprema dos goblinoides. Essa ascensão levou à derrota dos elfos e à conquista do continente de Lamnor pela Aliança Negra. Assim, exceto por um culto humano obscuro (que se referia a ele como “Leen”), Ragnar seria então cultuado exclusivamente por goblinoides. Então veio a Flecha de Fogo, cumprindo uma antiga profecia. Ragnar foi derrotado pelo lendário Imperador Supremo Thwor Khoshkothruk, que então se tornou deus maior. Este, diferente de seu antecessor, acolhe todo aquele que abraça os modos duyshidakk.\nA maioria dos sacerdotes de Thwor ainda é goblinoide, mas o culto a este deus ultrapassou as fronteiras de Lamnor; seus devotos podem ser encontrados por toda Arton, podem pertencer a todos os povos. No extremo sul do Reinado, perto das Ruínas de Tyrondir, a influência de Thwor leva aldeias humanas a venerá-lo. Tais comunidades abandonaram os modos humanos, tornaram-se duyshidakk, acabando em conflito com outros povoados. Muitas vezes sequer existe um único goblinoide na aldeia: o líder é um clérigo humano, também conhecido como “profeta de Thwor”. Mesmo sem contato com sacerdotes duyshidakk, sua devoção começa após sonhos e visões, ou após algum evento marcante.\nAssim, nos dias de hoje um clérigo de Thwor pode surgir em qualquer parte, emergir de qualquer raça. Muitos buscam “O Mundo Como Deve Ser”, conceito enigmático que faz sentido apenas para os duyshidakk — mas, em termos humanos, significa um mundo de liberdade anárquica. Se existe lugar nesse mundo para humanos e outros, os próprios clérigos talvez não saibam.",
        content: [
          { name: "Indumentária", description: " Sacerdotes de Thwor usam trajes típicos da cultura duyshidakk, muitas vezes coloridos e com vários adornos. Contudo, como essa cultura foi suprimida por séculos, as vestimentas podem variar muito." },
          { name: "Fundamentalista", description: " Atua como protetor de seu povo, mas é um inimigo do Reinado. Suas “missões divinas” se resumem a ataques contra povoados humanos. Todo ser inteligente que recuse devoção a Thwor deve ser destruído." },
        ]
      },
      { title: "Sacerdote de Valkaria",
        intro: "Outros clérigos se aventuram para cumprir os objetivos de seus deuses. Clérigos de Valkaria se aventuram porque sim.\nA antiga deusa cativa hoje comanda o Panteão, e os sacerdotes da Deusa da Ambição vivem seu melhor momento. Outrora confinados ao reino de Deheon, impedidos de usar poderes divinos além de suas fronteiras, hoje correm o Reinado e além em regozijo. Não há quem incorpore melhor o papel do clérigo heroico clássico, lutando e protegendo aliados com curas divinas. Um sacerdote de Valkaria explora masmorras, protege inocentes, destrói monstros. Acima de tudo, é leal a seus companheiros — é sua missão sagrada apoiá-los, pois Valkaria ama aventureiros.\nMas nem tudo são glórias. A deusa ama bravura e ousadia na mesma medida em que odeia indolência e comodismo. Aqueles que desistem de melhorar e se acomodam, perdem seus favores. Para aprazer Valkaria, o clérigo deve viver em constante movimento, viajando o tempo inteiro, buscando desafios cada vez maiores. Deve evoluir e melhorar, sonhar alto, buscar o impossível, sempre. Se tombar em batalha, a deusa o amará ainda mais, acolhendo sua alma em seu reino divino. Assim eles acreditam.\nMuito mais polêmica é a proibição de uniões estáveis entre seus devotos. Diz-se que Valkaria não aprova relações duradouras por ser outra forma de estagnação e conforto — a busca por amor e sua conquista devem ser eternas. O dilema entre coração e dever entre seus clérigos desfez incontáveis relacionamentos. Mas existem histórias sobre devotos apaixonados que desafiaram a deusa, passaram por provas duras, conseguiram sua permissão para unirem-se por toda a vida. Há quem diga: no fundo, Valkaria deseja ser desafiada.\nClérigos de Valkaria amam sua padroeira. Mas eles também sabem, o sonho de Valkaria é que os mortais superem os deuses. Arsenal, ajudado por Valkaria, foi o primeiro humano a fazê-lo. Quem serão os próximos?",
        content: [
          { name: "Indumentária", description: " Ainda que a estátua da deusa represente seu tempo de cativeiro, quase todos os devotos trazem essa efígie na veste, escudo ou placa peitoral. Há quem utilize uma miniatura metálica da própria estátua como maça ou martelo de guerra. Suas cores preferidas são vermelho e púrpura." },
          { name: "Fundamentalista", description: " Nunca permanece mais de uma semana na mesma cidade. Também nunca recusa uma missão ou aventura, por mais perigosa que seja." },
        ]
      },
      { title: "Sacerdote de Wynna",
        intro: "Do camponês mais simplório ao nobre mais erudito, ninguém em Arton questiona a existência da magia. Seus efeitos maravilhosos podem ser testemunhados por qualquer pessoa, suas técnicas podem ser adquiridas por herança ou aprendidas em livros. Muitos acreditam que a magia existe desde sempre, nasceu com a própria Criação, antes dos deuses. Outros, contudo, estão certos de ser uma dádiva oferecida por Wynna.\nAbençoados não apenas com mágica divina, mas também arcana, clérigos de Wynna assumem a missão de espalhar essa verdade, apregoando a generosidade da deusa. Para eles, não há diferença entre magia arcana e divina — toda magia provém de Wynna. Essa doutrina pode fazer com que entrem em desacordo com arcanistas descrentes, acusando-os de desrespeito e ingratidão à deusa quando alegam receber seus poderes de outras fontes. Dos auditórios da Academia Arcana às altas torres de Wynlla, o debate é eterno.\nClérigos de Wynna pregam que a magia é tão ou mais preciosa que a vida — e, como esta, não deve ser negada a ninguém. Qualquer grupo de aventureiros em necessidade de um conjurador pode contar com seus serviços. Sempre que utiliza mágica para trazer felicidade e boa fortuna a quem precisa, o sacerdote acredita estar aprazendo a Deusa da Magia.\nSacerdotes de Wynna assumem cargos políticos importantes em Wynlla e outros lugares onde arcanistas sejam respeitados. Por vezes, também atuam como consultores para regentes, ocupando o papel tradicional de mago real.",
        content: [
          { name: "Indumentária", description: " Muitos destes clérigos usam mantos como magos, outros escolhem indumentárias mais exóticas, refletindo suas magias preferidas. Como única constante, suas vestes incluem anéis metálicos que constituem o símbolo sagrado de Wynna." },
          { name: "Fundamentalista", description: " Jamais impede a execução de uma magia, nem promove seu cancelamento, de aliados ou inimigos. É proibido de usar Dissipar Magia, Campo Antimagia e similares (mas ainda pode interromper suas próprias magias sustentadas)." },
        ]
      },
      { title: "Sacerdote do Panteão",
        intro: "Nem todos os clérigos e frades de Arton escolhem servir a esta ou aquela divindade específica. Alguns acreditam que devem se devotar aos deuses como um todo, cultuar esta incrível família de entidades conhecida como “o Panteão”.\nO clérigo do Panteão reconhece que os deuses não são perfeitos, nem infalíveis; o fato de lutarem entre si, morrerem e serem substituídos prova isso. Ainda assim ele os respeita como criadores de Arton, os grandes responsáveis pelos milagres (e tragédias) no mundo. Sempre se refere aos “deuses” quando fala de sua fé, mas pode invocar seus nomes conforme a situação, orando por justiça a Khalmyr, cura a Lena, sabedoria a Tanna-Toh e assim por diante.\nPor sua mente aberta e disposição para aceitar diferenças, o clérigo do Panteão é muito mais compassivo e condescendente que aqueles dedicados a um único deus. É raro que censure isso ou aquilo, sabendo que haverá uma divindade para aprovar qualquer pensamento ou ação. Por outro lado, há quem acuse esses sacerdotes de hipocrisia, pois sempre invocam o deus mais conveniente para justificar cada situação.\nDiferente do que se pensa, estes sacerdotes são bastante comuns. Existem especialmente em comunidades distantes e isoladas, longe da influência de cultos específicos. Quando uma vila ou aldeia tem apenas um sacerdote, provavelmente será um destes.",
        content: [
          { name: "Indumentária", description: " Sacerdotes do Panteão se vestem de forma simples, em mantos ou batinas. Quando são aventureiros, usam qualquer tipo de armadura, mas não armas cortantes ou perfurantes — essas derramam sangue, algo que eles consideram proibido." },
          { name: "Fundamentalista", description: " Acredita com fervor que todo o Panteão deve ser cultuado; favorecer este ou aquele deus acaba atraindo o desfavor dos outros dezenove. Não se associa a devotos de deuses específicos. Além de PM adicionais, o sacerdote do Panteão fundamentalista recebe um poder de combate ou de destino a sua escolha." },
        ]
      },
    ]
  }
]
    },
    { id: "Guerreiro",
    name: "Guerreiro",
    powersUrl: "/poderes/guerreiro",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/guerreiro.png",
    description: "Quando a primeira criatura inteligente ficou de pé sobre duas pernas e procurou algo para comer ou uma caverna onde se abrigar, existiu uma certeza: havia outra criatura tentando matá-la. Onde há vida, há luta. Em qualquer lugar de Arton, todos sempre precisarão de guerreiros. \n O guerreiro é o mais simples, direto e comum dos aventureiros. Em muitos aspectos, também é o mais importante. Nenhum grupo está completo sem alguém especializado em combate, nenhum reino está seguro sem soldados. Nem mesmo uma aldeia tem chance de sobreviver sem alguns tipos corajosos dispostos a empunhar uma arma para defender seus conterrâneos. \n Mais cedo ou mais tarde, todos os conflitos acabarão em combate. Então não haverá esperteza, palavras bonitas ou mesmo truques mágicos que possam funcionar sem o bom e velho aço. \n Longe de ser apenas um capanga com uma arma, o guerreiro possui disciplina e força de vontade para treinar continuamente. Seu amplo conhecimento sobre armas e armaduras pode não parecer profundo ou filosófico, mas é fundamental e utilizado todos os dias. Guerreiros se dedicam à batalha, praticam técnicas para vencer seus inimigos acima de todo o resto. Não se iludem sobre a melhor maneira de derrotar o mal ou conquistar glória e riquezas: sempre será preciso combater. \n Existem guerreiros em toda parte. Muitos são soldados em exércitos ou guardas em grandes cidades. Outros são mercenários, gladiadores, senhores de terras, salteadores... Qualquer taverna em Arton tem pelo menos um ou dois guerreiros como fregueses ou atrás do balcão. Qualquer fazenda tem alguém que aprendeu a usar uma lança para afastar bandidos. Qualquer corte tem um instrutor de combate para os filhos da família nobre. Qualquer profissão ou estilo de vida pode atrair guerreiros. Até mesmo os mais sisudos eruditos podem ter aprendido a se defender. \n Guerreiros experientes muitas vezes se tornam generais, conselheiros de reis ou conquistadores. Contudo, muitos também preferem uma existência pacata em algum lugar tranquilo, deixando a espada enferrujar em algum baú esquecido. Alguns dizem que guerreiros nunca se aposentam — sempre há uma última batalha a ser travada e, se não houver, é porque o guerreiro morreu na batalha anterior. \n Não existe uma mentalidade ou personalidade comum à maioria dos guerreiros. É fácil encontrar neles a postura fatalista, bem-humorada e um pouco cínica dos soldados — acostumados a marchar sob sol e chuva durante semanas, ouvindo ordens de aristocratas mimados ou oficiais ambiciosos, muitos guerreiros sabem que é melhor rir dos absurdos de uma vida de batalhas. Contudo, também há incontáveis guerreiros idealistas e ingênuos, cruéis e frios, loucos e inconsequentes... \n Se existe uma característica comum a todos os guerreiros é a versatilidade. Eles sabem se virar com espadas, machados, arcos, porretes... Não se apegam a um só estilo, não valorizam uma doutrina acima das outras. Usam as técnicas, ferramentas e estratégias necessárias para sobreviver e lutar outro dia. Porque sempre haverá mais uma luta. Sempre alguém precisará de mais um guerreiro.",
    famousExamples: [
      'Christian Pryde', 'Katabrok', 'Ledd', 'Loriane', 'Vallen Allond', 'Sandro Galtran', 'Val', 'Verônica'
    ],
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For) ou Pontaria (Des)", "Fortitude (Con)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Reflexos (Des)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos",
    abilities: [
      {
        name: "Ataque Especial",
        description: "Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano."
      },
      {
        name: "Poder de Guerreiro",
        description: " No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de guerreiro ou geral."
      },
      {
        name: "Durão",
        description: "A partir do 3º nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade."
      },
      {
        name: "Ataque Extra",
        description: "A partir do 6º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada."
      },
      {
        name: "Campeão",
        description: "No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele. Por exemplo, se fizer um Ataque Especial gastando 5 PM para ganhar +20 nas rolagens de dano e acertar o ataque, recupera 2 PM."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Ataque especial +4" },
      { level: 2, abilities: "Poder de guerreiro" },
      { level: 3, abilities: "Durão, poder de guerreiro" },
      { level: 4, abilities: "Poder de guerreiro" },
      { level: 5, abilities: "Ataque especial +8, poder de guerreiro" },
      { level: 6, abilities: "Ataque extra, poder de guerreiro" },
      { level: 7, abilities: "Poder de guerreiro" },
      { level: 8, abilities: "Poder de guerreiro" },
      { level: 9, abilities: "Ataque especial +12, poder de guerreiro" },
      { level: 10, abilities: "Poder de guerreiro" },
      { level: 11, abilities: "Poder de guerreiro" },
      { level: 12, abilities: "Poder de guerreiro" },
      { level: 13, abilities: "Ataque especial +16, poder de guerreiro" },
      { level: 14, abilities: "Poder de guerreiro" },
      { level: 15, abilities: "Poder de guerreiro" },
      { level: 16, abilities: "Poder de guerreiro" },
      { level: 17, abilities: "Ataque especial +20, poder de guerreiro" },
      { level: 18, abilities: "Poder de guerreiro" },
      { level: 19, abilities: "Poder de guerreiro" },
      { level: 20, abilities: "Campeão, poder de guerreiro" }
    ],
    },
    { id: "Inventor",
    name: "Inventor",
    powersUrl: "/poderes/inventor",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/inventor.png",
    description: "Mais cedo ou mais tarde, as tradições devem dar lugar a algo novo. Enquanto segredos mágicos estão ocultos em tomos empoeirados dentro de torres antigas e a bênção divina depende do favor de entidades caprichosas e imprevisíveis, a ciência está disponível para todos. Aos poucos, gênios espalham conhecimento e avanços por todo o mundo de Arton, por meio de alquimia, mecânica e engenharia. São os inventores. \n O inventor é um dos mais raros tipos de aventureiros. Enquanto outros se preocupam com glória, riquezas e missões divinas, o inventor almeja testar e aprimorar suas criações mirabolantes. Enquanto outros contam com força bruta, fé ou mistérios ancestrais, o inventor confia em si mesmo e olha para o futuro. Criatividade, otimismo, paciência e trabalho duro: estas são as armas do inventor. \n Poucas pessoas compreendem o papel da ciência na vida dos aventureiros ou no progresso de Arton, vendo os aparatos dos inventores como engenhocas perigosas e instáveis que podem se desmantelar ou explodir a qualquer momento. Nos lugares mais ignorantes, um inventor pode ser tratado como um herege ou um louco imprevisível. Mas mesmo os supersticiosos e desconfiados usam todos os dias as criações de inventores do passado: desde moinhos até armaduras de placas, tudo que hoje em dia é comum já foi uma inovação impressionante. \n A maioria dos inventores está sempre insatisfeita. Podem ser irritantes, pois não aceitam passivamente quase nada. Se a noite é escura, o inventor imagina um sistema de lampiões automáticos. Se um abismo é intransponível, o inventor idealiza uma máquina voadora. Se todos ficam velhos e morrem, o inventor especula se algum remédio mirabolante não pode reverter esse processo. Às vezes estes heróis tentam modificar ou aprimorar objetos comuns apenas por tédio ou porque podem: uma espada funciona bem do jeito como é, mas e se colocássemos algumas engrenagens e roldanas para torná-la mais dinâmica? Leis e dogmas que limitam o progresso não fazem sentido para os inventores — muitos deles trabalham com pólvora, dissecam cadáveres ou pesquisam sobre a Tormenta sem se importar com normas ditadas por aristocratas antiquados. \n Numa vida de aventuras, muitos inventores não têm tempo para estudar todos os campos científicos e precisam se focar em uma área. Contudo, um inventor veterano é um exemplo do triunfo do intelecto: capaz de imbuir objetos com energia arcana e construir inventos que vão modificar o mundo, facilmente escreve seu nome para sempre na história de Arton. \n Inventores são exploradores de lugares desconhecidos, cobaias de seus próprios testes e grandes ajudantes de seus aliados. Sua postura inconformada e temerária pode incomodar alguns, mas um inventor não se importa. Ele pertence ao futuro e sabe que nada detém o progresso.",
    famousExamples: [
      "Dok",
      "Ingram Brassbones",
      "Marlin",
      "Lorde Niebling",
    ],
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Ofício (Int)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Investigação (Int)', 'Luta (For)', 'Misticismo (Int)', 'Ofício (Int)', 'Pilotagem (Des)', 'Percepção (Sab)', 'Pontaria (Des)'
      ],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
        name: "Engenhosidade",
        description: "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        name: "Protótipo",
        description: "Você começa o jogo com um item superior, ou com 10 itens alquímicos, com preço total de até T$ 500. Veja o Capítulo 3: Equipamento para a lista de itens."
      },
      {
        name: "Fabricar Item Superior",
        description: "No 2º nível, você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Nos níveis 5, 8 e 11, você pode substituir esse item por um item superior com duas, três e quatro melhorias, respectivamente, e passa a poder fabricar itens superiores com essa quantidade de melhorias. Considera-se que você estava trabalhando nos itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente)."
      },
      {
        name: "Poder de Inventor",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder."
      },
      {
        name: "Comerciante",
        description: "No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha)."
      },
      {
        name: "Encontrar Fraqueza",
        description: "A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se fizer isso, ignora a redução de dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra ele. Os benefícios desta habilidade duram até o fim da cena."
      },
      {
        name: "Fabricar Item Mágico",
        description: "No 9º nível, você recebe um item mágico menor e passa a poder fabricar itens mágicos menores. Veja o Capítulo 8: Recompensas para as regras de itens mágicos. Nos níveis 13 e 17, você pode substituir esse item por um item mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou PM nele."
      },
      {
        name: "Olho do Dragão",
        description: "A partir do 10º nível, você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se o item é mágico, suas propriedades e como utilizá-las."
      },
      {
        name: "Obra-Prima",
        description: "No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter benefícios equivalentes a de um item com cinco melhorias e quatro encantos. Considera-se que você estava trabalhando no item e você não gasta dinheiro, tempo ou PM nele."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Engenhosidade, protótipo" },
      { level: 2, abilities: "Fabricar item superior (1 melhoria), poder de inventor" },
      { level: 3, abilities: "Comerciante, poder de inventor" },
      { level: 4, abilities: "Poder de inventor" },
      { level: 5, abilities: "Fabricar item superior (2 melhorias), poder de inventor" },
      { level: 6, abilities: "Poder de inventor" },
      { level: 7, abilities: "Encontrar fraqueza, poder de inventor" },
      { level: 8, abilities: "Fabricar item superior (3 melhorias), poder de inventor" },
      { level: 9, abilities: "Fabricar item mágico (menor), poder de inventor" },
      { level: 10, abilities: "Olho do dragão, poder de inventor" },
      { level: 11, abilities: "Fabricar item superior (4 melhorias), poder de inventor" },
      { level: 12, abilities: "Poder de inventor" },
      { level: 13, abilities: "Fabricar item mágico (médio), poder de inventor" },
      { level: 14, abilities: "Poder de inventor" },
      { level: 15, abilities: "Poder de inventor" },
      { level: 16, abilities: "Poder de inventor" },
      { level: 17, abilities: "Fabricar item mágico (maior), poder de inventor" },
      { level: 18, abilities: "Poder de inventor" },
      { level: 19, abilities: "Poder de inventor" },
      { level: 20, abilities: "Obra-prima, poder de inventor" }
    ],
    },
    { id: "Lutador",
    name: "Lutador",
    powersUrl: "/poderes/lutador",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/lutador.png",
    description: "Perigo verdadeiro não é enfrentar a morte com segredos místicos, ou mesmo com armas e armaduras. Perigo verdadeiro é encarar a morte com as mãos nuas, sem proteção e sem treinamento. Apenas alguns heróis triunfam desta forma. São os lutadores. \n Lutadores são especialistas em todas as formas de combate desarmado, desde simples socos e chutes até complexas chaves e técnicas de chão. Alguns estudam com mestres, seguindo disciplinas codificadas ao longo de muitas gerações. Outros são apenas desesperados que precisaram aprender a brigar para ficar vivos nos becos escuros ou nos ermos selvagens. \n Algumas culturas artonianas têm tradições de combate desarmado: Tamu-ra é a mais famosa, mas os minotauros de Tapista também desenvolveram seus próprios métodos de luta esportiva. \n Embora pessoas de todo tipo comecem algum tipo de aprendizado em luta desarmada, quem avança no treinamento o suficiente para se tornar um herói costuma ter uma personalidade bem específica. Lutadores devem ser muito perseverantes e resistentes. Não há como dominar sua disciplina sem longas horas de repetição, prática e exercícios. Também não há como aprender a lutar sem ser derrotado inúmeras vezes, sem se ferir muito e conviver com dores todos os dias. Quase todos os lutadores são determinados e teimosos. Com outros lutadores ou com pessoas que precisaram se esforçar muito para triunfar, são humildes e amistosos. Contudo, podem ser vaidosos e arrogantes, principalmente com gente preguiçosa ou privilegiada. Lutadores acostumados a campeonatos e plateias costumam se tornar fanfarrões convencidos. \n É raro ver lutadores em cargos de prestígio ou refinamento. A maioria dos lutadores iniciantes se emprega como capanga, leão de chácara ou criminoso comum. Os mais corretos rejeitam usar sua força para intimidar, geralmente sofrendo por causa disso. Um dos únicos caminhos de glória para os lutadores é a competição em arenas. Muitos deles se tornam gladiadores ou competidores em rinhas obscuras e até mesmo ilegais. Nos buracos mais sinistros, esses jogos sangrentos podem envolver lutadores contra mortos-vivos, monstros e até mesmo demônios. \n A vida de aventuras é a maior saída da pobreza e do crime para os lutadores. Mesmo que não tenham estudo, fé ou um posto militar, eles têm poder de combate e coragem — coisas muito valorizadas por qualquer grupo de aventureiros. É raro o lutador que não esteja disposto a largar tudo num instante para embarcar em uma missão que possa render ouro e fama. Na verdade, alguns deles rondam tavernas movimentadas em cidades com tradição aventureira, esperando por grupos que precisem de um combatente a mais. A chance de conquistar riqueza através de batalhas e ao mesmo tempo fazer o bem parece um conto de fadas para muitos lutadores com origem miserável. \n Poucos heróis são tão focados, confiáveis e prestativos quanto os lutadores. Num campo de batalha sangrento, numa ruela imunda ou numa grande luta de arena, a nobre arte de socar e chutar sempre é útil. E um combatente acostumado a trabalhar duro e apanhar sem reclamar sempre é um companheiro bem-vindo.",
    famousExamples: [
      "Maquius, Rexthor, Syrion.",
    ],
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Fortitude (Con)", "Luta (For)"],
    optional: {
      skills: [      
        'Acrobacia (Des)', 'Adestramento (Car)', 'Atletismo (For)', 'Enganação (Car)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Reflexos (Des)'
      ],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
        name: "Briga",
        description: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos."
      },
      {
        name: "Golpe Relâmpago",
        description: "Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional."
      },
      {
        name: "Poder de Lutador",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder de Lutador ou Geral."
      },
      {
        name: "Casca Grossa",
        description: "No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa."
      },
      {
        name: "Golpe Cruel",
        description: "No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1."
      },
      {
        name: "Golpe Violento",
        description: "No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1."
      },
      {
        name: "Dono da Rua",
        description: "No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação agredir para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Briga (1d6), golpe relâmpago" },
      { level: 2, abilities: "Poder de lutador" },
      { level: 3, abilities: "Casca grossa (Con), poder de lutador" },
      { level: 4, abilities: "Poder de lutador" },
      { level: 5, abilities: "Briga (1d8), golpe cruel, poder de lutador" },
      { level: 6, abilities: "Poder de lutador" },
      { level: 7, abilities: "Casca grossa (Con+1), poder de lutador" },
      { level: 8, abilities: "Poder de lutador" },
      { level: 9, abilities: "Briga (1d10), golpe violento, poder de lutador" },
      { level: 10, abilities: "Poder de lutador" },
      { level: 11, abilities: "Casca grossa (Con+2), poder de lutador" },
      { level: 12, abilities: "Poder de lutador" },
      { level: 13, abilities: "Briga (2d6), poder de lutador" },
      { level: 14, abilities: "Poder de lutador" },
      { level: 15, abilities: "Casca grossa (Con+3), poder de lutador" },
      { level: 16, abilities: "Poder de lutador" },
      { level: 17, abilities: "Briga (2d8), poder de lutador" },
      { level: 18, abilities: "Poder de lutador" },
      { level: 19, abilities: "Casca grossa (Con+4), poder de lutador" },
      { level: 20, abilities: "Dono da rua (2d10), poder de lutador" }
    ],
    },
    { id: "Paladino",
    name: "Paladino",
    powersUrl: "/poderes/paladino",
    origin: "tormenta20 - jogo do ano",
    image: "/classes/paladino.png",
    description: "As forças do mal são uma horda interminável de monstros e degenerados que não hesitam em causar sofrimento só porque é o caminho mais fácil. Enquanto isso, o bem conta com um pequeno número de campeões de elite, combatentes sagrados incansáveis que personificam tudo que um herói deve ser. São os paladinos. \n O paladino é um soldado a serviço do bem e da justiça. Não há meio-termo, não há desculpas: paladinos são falhos como todos os mortais, mas devem defender os inocentes, cumprir as leis, obedecer a seus superiores, servir de exemplo e resistir a todas as tentações. É um caminho de muito sacrifício e poucas recompensas, mas alguém deve trilhá-lo. \n Paladinos servem a um deus bondoso. Alguns não são devotos de uma divindade específica, mas da bondade divina como um todo. Embora muitos jovens sonhem em ser paladinos e treinem para isso, a maior parte desses heróis é escolhida pelos deuses. São mulheres e homens que lutam pelo bem espontaneamente, que combatem o mal apenas porque isto está em seu caráter e que um dia são iluminados com poderes e bênçãos. Algumas igrejas treinam soldados em estudos religiosos, esperando formar paladinos, mas poucos surgem desta forma. Um candidato a paladino deve fazer o bem sempre que possível e rezar para ser agraciado com o toque divino. \n Paladinos têm personalidades diversas, mas muitas vezes são bastante influenciados por seus deuses padroeiros. Podem variar em termos de humor, desejos, interesses etc., mas em certo nível são ferramentas da vontade do deus. Paladinos sentem um ímpeto natural de servir às divindades — assim, quase todos são vistos como certinhos demais. Mas, para um paladino, isso não é um insulto. \n Muitos desconfiam de paladinos. Afinal, algumas pessoas fundamentalmente egoístas e mesquinhas não conseguem aceitar a ideia de alguém que faça o bem só porque é o certo a fazer. Todo paladino deve aprender a lidar com esses ataques gratuitos. Um paladino não é intolerante, opressor ou hipócrita. Embora cumpra as leis, não exige que os outros tenham o mesmo comportamento estrito. Paladinos perdoam, ajudam, curam e conversam antes de julgar. E são eles mesmos os maiores alvos de seu próprio julgamento. \n A imagem clássica dos paladinos em Arton é a de um combatente montado, trajado em armadura completa. Embora muitos desses heróis sejam ligados a ordens de cavalaria, existem inúmeros paladinos de origem humilde, sem linhagem nobre. Às vezes, aldeias que nunca viram outro aventureiro contam com um paladino, um protetor escolhido pelos deuses para defender aquele povo simples. \n Todo paladino encontra algum grande dilema moral mais cedo ou mais tarde. Talvez precise escolher entre cumprir a lei ou fazer o bem. Talvez precise dar as costas a seus amigos para salvar um grande número de pessoas. Muitas vezes não há solução — o paladino deve conciliar os dois lados e rezar para tomar a decisão certa. Ele pode inclusive ser punido por seu deus, mesmo com a melhor das intenções. Mas o verdadeiro paladino continua em frente. Porque ele sabe que alguém precisa fazer o bem, custe o que custar.",
    famousExamples: [
      "Gregor Vahn, Ignis Crae, Lothar Algherulff, o Paladino de Jallar, Titus Lomatubarius",
    ],
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Nobreza (Int)', 'Percepção (Sab)', 'Religião (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos",
    abilities: [
      {
        name: "Abençoado",
        description: "Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o bem como um todo. Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do Herói, abaixo). Cultuar o bem conta como sua devoção."
      },
      {
        name: "Código do Herói",
        description: "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia."
      },
      {
        name: "Golpe Divino. ",
        description: "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o dano em +1d8."
      },
      {
        name: "Cura pelas Mãos",
        description: "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida de um alvo em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV curados em +1d8+1. Esta habilidade pode causar dano de luz a mortos-vivos, exigindo um ataque desarmado. A partir do 6º nível, você pode gastar +1 PM quando usa Cura pelas Mãos para anular uma condição afetando o alvo, entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo."
      },
      {
        name: "Poder de Paladino",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder de Paladino ou Gerais."
      },
      {
        name: "Aura Sagrada",
        description: "No 3º nível, você pode gastar 1 PM para gerar uma aura com 9m de raio a partir de você e duração sustentada. A aura emite uma luz dourada e agradável. Além disso, você e os aliados dentro da aura somam seu Carisma nos testes de resistência."
      },
      {
    name: "Bênção da Justiça",
    description: "No 5º nível, escolha entre égide sagrada e montaria sagrada. Uma vez feita, esta escolha não pode ser mudada.",
    subAbilities: [
      {
        name: "Égide Sagrada",
        description: "Você pode gastar uma ação de movimento e 2 PM para recobrir de energia seu escudo ou símbolo sagrado. Até o fim da cena, você e todos os aliados adjacentes recebem um bônus na Defesa igual ao seu Carisma. A partir do 11º nível, você pode gastar 5 PM para rolar novamente um teste de resistência contra uma magia recém lançada contra você. Se você passar no teste de resistência e a magia tiver você como único alvo, ela é revertida de volta ao conjurador (que se torna o novo alvo da magia; todas as demais características da magia, incluindo CD do teste de resistência, se mantêm)."
      },
      {
        name: "Montaria Sagrada",
        description: "Você pode gastar uma ação de movimento e 2 PM para invocar uma montaria sagrada. Veja ao fim da página para mais detalhes."
      },
    ]
    },
      {
        name: "Vingador Sagrado",
        description: "No 20º nível, você pode gastar uma ação completa e 10 PM para se cobrir de energia divina, assumindo a forma de um vingador sagrado até o fim da cena. Nesta forma, você recebe deslocamento de voo 18m e redução de dano 20. Além disso, seu Golpe Divino tem seu custo reduzido à metade e causa mais dois dados de dano."
      },

    ],
    levelProgression: [
      { level: 1, abilities: "Abençoado, código do herói, golpe divino (+1d8)" },
      { level: 2, abilities: "Cura pelas mãos (1d8+1 PV), poder de paladino" },
      { level: 3, abilities: "Aura sagrada, poder de paladino" },
      { level: 4, abilities: "Poder de paladino" },
      { level: 5, abilities: "Bênção da justiça, golpe divino (+2d8), poder de paladino" },
      { level: 6, abilities: "Cura pelas mãos (2d8+2 PV), poder de paladino" },
      { level: 7, abilities: "Poder de paladino" },
      { level: 8, abilities: "Poder de paladino" },
      { level: 9, abilities: "Golpe divino (+3d8), poder de paladino" },
      { level: 10, abilities: "Cura pelas mãos (3d8+3 PV), poder de paladino" },
      { level: 11, abilities: "Poder de paladino" },
      { level: 12, abilities: "Poder de paladino" },
      { level: 13, abilities: "Golpe divino (+4d8), poder de paladino" },
      { level: 14, abilities: "Cura pelas mãos (4d8+4 PV), poder de paladino" },
      { level: 15, abilities: "Poder de paladino" },
      { level: 16, abilities: "Poder de paladino" },
      { level: 17, abilities: "Golpe divino (+5d8), poder de paladino" },
      { level: 18, abilities: "Cura pelas mãos (5d8+5 PV), poder de paladino" },
      { level: 19, abilities: "Poder de paladino" },
      { level: 20, abilities: "Poder de paladino, vingador sagrado" }
    ],
    extras: [
    {
      title: "Montaria Sagrada",
      description: "Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias. \n Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio. \n Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha). \n Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação."
    },
    {
    title: "Classe Divina - Paladinos",
    description: "Em Arton, os paladinos existem em sua forma mais clássica: guerreiros sagrados, abençoados pelos deuses, defensores do bem e da ordem. Eles são treinados de maneira semelhante aos clérigos: acolhidos em templos e mosteiros desde a infância, são instruídos nos caminhos da justiça e da nobreza, além de serem preparados como guerreiros para combater o mal.\nHá casos de indivíduos de valor extraordinário que são escolhidos pelos próprios deuses e recebem o título de paladino por seus méritos, sem qualquer contato com sacerdotes ou templos. No entanto, esses casos são exceções; a maioria dos paladinos atua como soldados de elite em ordens clericais.\nEntre os deuses maiores, apenas Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis e Valkaria têm paladinos.",
    sections: [
      { title: "Paladino de Azgher",
        intro: "Os soldados santos do Deus-Sol são ensinados que as piores ameaças se escondem nas sombras, onde devem ser encontradas e exterminadas. Eles avançam escuridão adentro brandindo suas espadas de chamas, levando purificação aos sítios profanos e destruindo o mal que espreita na noite.\nPaladinos de Azgher são perseguidores incansáveis dos mortos-vivos, essas abominações de Tenebra que rastejam na noite. Consideram a criação desses seres como profanação antinatural, o crime mais abominável na existência. Mesmo o mais nobre e bem-intencionado osteon terá grande dificuldade em convencer um guerreiro santo de Azgher a poupar sua não vida, sendo alguns dos companheiros mais improváveis em um grupo de aventureiros.\nA pior vergonha na história dos devotos de Azgher foi a traição de Raz-Al-Baddinn, seu antigo sumo-sacerdote, como o atual clérigo máximo de Tenebra. Outrora liderando o culto do Deus-Sol ao lado do irmão gêmeo, Al-Baddinn acabaria seduzido e convocado pelas Trevas. Não há paladino de Azgher que não sonhe encontrar e punir o maior infiel na história da ordem.",
        content: [
          { name: "Indumentária", description: " Diferente do paladino clássico, muitas vezes visto como um cavaleiro em armadura brilhante, o soldado santo de Azgher se veste como os povos do deserto. Usa trajes brancos que dispersam calor, com detalhes dourados, muitas vezes exibindo o símbolo sagrado em um escudo pequeno. Traz o rosto oculto, conforme as exigências de seu deus." },
          { name: "Fundamentalista", description: " Como o sacerdote. Além disso, também é proibido de se associar a necromantes e mortos-vivos (incluindo osteon), devendo atacar e destruir todos que encontrar." },
        ]
      },
      { title: "Paladino de Khalmyr",
        intro: "Não há, em Arton, maiores campeões do bem e da ordem que os paladinos de Khalmyr. Os heróis mais admirados e respeitados pelo povo — e os mais temidos pelos vilões. Como esperado de soldados santos do próprio Deus da Justiça.\nPaladinos de Khalmyr fazem cumprir as leis, sejam aquelas prescritas por regentes mortais em seus reinos, sejam os comandos do próprio Khalmyr — e quando elas entram em conflito, obviamente a palavra divina tem precedência. Mesmo um nobre ou regente local pode ser repreendido por um paladino legítimo. Poucas vezes a autoridade do guerreiro sagrado é questionada, todos sabem que podem confiar em seu julgamento — Khalmyr não abençoa os falsos ou mal-intencionados com seu poder. Claro, tamanha confiança vem acompanhada de responsabilidade enorme. Quando o paladino comete uma injustiça, um erro de julgamento, as consequências para toda a ordem são terríveis. A mais absoluta retidão é necessária.\nPaladinos da Justiça muitas vezes pertencem a uma das duas grandes ordens devotadas a Khalmyr: a Ordem de Khalmyr, sediada nas Montanhas Lannestul, na costa oeste de Arton; ou a Ordem da Luz, localizada em Norm, no reino de Bielefeld. Alguns atuam de forma independente; esses às vezes são vistos como renegados, precisando se esforçar mais para provar sua autoridade e boa vontade.",
        content: [
          { name: "Indumentária", description: " O paladino da Justiça se veste de azul e branco, exibindo com orgulho o símbolo sagrado de Khalmyr em sua armadura, escudo ou flâmula." },
          { name: "Fundamentalista", description: " Como o sacerdote." },
        ]
      },
      { title: "Paladino de Lena",
        intro: "Lena tem quase exclusivamente mulheres como clérigas, e essas seguem votos que as impedem de realizar qualquer ato violento contra outras criaturas. Assim, guerreiros sagrados parecem ter pouco em comum com os interesses da deusa. No entanto, eles existem!\nPaladinos de Lena estão entre os poucos homens que podem receber poder divino da Deusa da Vida. Sua origem mais comum é quando são filhos de sacerdotisas, então orientados a seguir o caminho do soldado santo — embora pouquíssimos continuem até o final. Contudo, sabe-se de lendas sobre paladinos de procedências muito diferentes, atendendo ao chamado caloroso da deusa em qualquer tribo, aldeia ou palácio.\nOutros paladinos combatem e destroem o mal. Paladinos de Lena, em vez disso, protegem a vida — sendo comum que acompanhem as clérigas como seus guarda-costas. Seu poder mágico de cura é superior ao de outros paladinos, mas suas restrições de combate acabam se mostrando mais severas. Proibidos de usar qualquer arma, ataque ou magia capaz de causar ferimentos, suas opções de combate ficam restritas a manobras ou ataques de imobilização, esquiva, desarme e outras.\nPaladinos de Lena são mais bondosos, generosos e atenciosos que outros guerreiros sagrados. Devido à natureza matriarcal da ordem, assim como a sua própria deusa, demonstram grande respeito por mulheres. Muito poucos acabam em grupos de aventureiros, visto que esses quase sempre recorrem a soluções violentas. Alguns, no entanto, acreditam ser capazes de proteger seus companheiros e ensinar-lhes o valor da Vida.",
        content: [
          { name: "Indumentária", description: " Como as sacerdotisas, paladinos de Lena vestem verde, amarelo e branco. São reconhecidos por exibir a lua prateada, símbolo da deusa." },
          { name: "Fundamentalista", description: " Não pode causar nenhum tipo de dano, nem mesmo dano não letal." },
        ]
      },
      { title: "Paladino de Lin-Wu",
        intro: "Embora sejam conhecidos no Reinado por esse título, a cultura de Tamu-ra não tem paladinos. Seus guerreiros santos são os samurais, campeões sagrados de Lin-Wu, guiados pela honra absoluta.\nNem todos os samurais manifestam exatamente os mesmos poderes divinos. Aqueles atuando longe de sua terra natal, no entanto, acabam adotando as mesmas habilidades e poderes dos paladinos locais — como forma de respeito aos deuses estrangeiros ou por razões misteriosas que apenas Lin-Wu conhece. Embora, em sua sociedade, “samurai de Lin-Wu” seja uma redundância, alguns adotam o título em outras terras, deixando sua devoção mais clara aos locais.\nSamurais são conhecidos por servir a um lorde, que pode ser um senhor feudal, ou mesmo o próprio Imperador. O paladino de Lin-Wu, da mesma forma, adota o próprio Deus da Honra como seu mestre absoluto. Clérigos da ordem, os shugenja, são aceitos como seus representantes e também devem ser obedecidos. A aliança entre samurai e shugenja é sagrada, sendo uma grande infelicidade quando não acontece essa harmonia.\nAssim como os clérigos, paladinos de Lin-Wu consideram-se em dívida de honra com o Reinado de Arton, por acolher os refugiados de Tamu-ra em sua capital durante o ataque da Tormenta. É normal vê-los integrando grupos de aventureiros em missões para proteger o povo artoniano, especialmente quando envolve combater a Tormenta.",
        content: [
          { name: "Indumentária", description: " Como os clérigos, vestem vermelho, verde e/ou dourado em tons brilhantes. Preferem a armadura tradicional de seu povo — mas, por serem raras e dispendiosas nestas terras, podem adotar peças locais por praticidade." },
          { name: "Fundamentalista", description: " Como o sacerdote. Além disso é também proibido de se associar a devotos de Aharadak, também devendo atacar e destruir todos que encontrar." },
        ]
      },
      { title: "Paladino de Marah",
        intro: "Paladinos são guerreiros santos, então é difícil imaginar que a Deusa da Paz recorra a eles. Na verdade, o paladino de Marah é mais eficiente em combate do que o senso comum leva a acreditar.\nComo os clérigos, paladinos de Marah buscam apaziguar conflitos da forma mais compassiva possível. Cientes de que seus adversários quase sempre recorrem à violência, atuam como muralhas protetoras vivas para seus aliados, atraindo ataques para si, perseverando, restaurando os próprios ferimentos — até que seus companheiros estejam em segurança ou consigam nulificar a ameaça. Claro, o paladino não concorda que isso seja alcançado por meios agressivos; vai preferir aliar-se a outros que, mesmo não sendo devotos, compartilhem de seus ideais pacifistas. Ele aceita que seus colegas usem violência moderada, apenas em situações de necessidade.\nPaladinos de Marah não protegem apenas a paz, mas também a felicidade. São inimigos de todos que buscam causar sofrimento e miséria. Um destes guerreiros santos é capaz de interromper sua viagem e conversar longamente com o ancião amargurado que encontrou no caminho. Ajudar o fazendeiro em dificuldades com a colheita. Aconselhar o jovem bardo apaixonado na conquista da caçadora élfica. Perguntar à criança o motivo de seu choro, então salvar seu cão perdido. Fazer sorrisos retornarem é seu modo de agradar a deusa.\nA positividade do paladino de Marah raramente encontra rival. Ele acredita não existir poder maior que o Amor e está sempre disposto a provar.\nPara representar suas habilidades únicas como um campeão da Deusa da Paz, o paladino de Marah pode substituir Luta por Diplomacia em suas perícias iniciais, e inclui Atuação e Luta em suas perícias de classe. Além disso, ele pode substituir a habilidade Golpe Divino pela seguinte.",
        content: [
          { name: "Mensagem de Paz", description: " Você pode gastar uma ação padrão e 1 PM para diminuir o desejo de violência de uma criatura em alcance curto. Faça um teste de Diplomacia oposto ao teste de Vontade da criatura. Se você vencer, a criatura sofre uma penalidade cumulativa de –1 em testes de ataque e rolagens de dano e, se for um lacaio, fica também pasma por 1 rodada (uma criatura só pode ficar pasma por este efeito uma vez por cena). Para cada 10 pontos pelos quais você vencer o teste oposto, a penalidade aumenta em 1 e, se a criatura estava enfeitiçada, fascinada ou pasma, a penalidade aumenta em 1 para cada uma dessas condições. A cada rodada, a penalidade acumulada da criatura diminui em 1. A cada quatro níveis, você pode gastar +1 PM para receber +5 no teste de Diplomacia.\nA partir do 5º nível, quando usa esta habilidade, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas à sua escolha em alcance curto. Mental." },
          { name: "Indumentária", description: " Paladinos de Marah vestem branco. Mas, por seu papel como protetores, tendem a usar as armaduras mais pesadas que conseguem." },
          { name: "Fundamentalista", description: " Nunca permite que seus aliados causem perda de vida ou dano, nem mesmo dano não letal." },
        ]
      },
      { title: "Paladino de Tanna-Toh",
        intro: "A Deusa do Conhecimento não é necessariamente pacífica. Conhecimento é um tesouro valioso como outro qualquer. Muitas vezes é preciso lutar para obtê-lo, ou para protegê-lo.\nPaladinos de Tanna-Toh são especializados em missões que envolvem resgatar ou salvar tesouros culturais. São treinados para reconhecer e localizar esses itens de forma mais eficiente que outros paladinos, constantemente participando de expedições para encontrar relíquias e artefatos perdidos. Grupos de aventureiros que prestam serviços à Academia Arcana e a outros patronos eruditos muitas vezes contam com um destes entre seus membros.\nOutro papel vital destes paladinos é proteger a verdade. Eles lutam para desvendar enigmas, expor mentiras, dissipar intrigas. Em cortes e grandes centros urbanos, impedem que falsidades e boatarias causem a derrocada das instituições. Nem mesmo os paladinos de Khalmyr são guardiões tão ferrenhos da retidão dos poderosos.\nAinda que habilidoso em combate, o paladino de Tanna-Toh prefere superar obstáculos com sagacidade e astúcia, honrando as graças de sua deusa. Se houver um meio criativo para vencer um conflito, em vez de simplesmente atacar com sua espada, ele o tentará. Em geral respeita arcanistas e inventores por suas mentes brilhantes — e até ladinos, quando escolhem usar sua perícia para o bem.",
        content: [
          { name: "Indumentária", description: " Um paladino de Tanna-Toh em geral usa armadura mais leve que outros guerreiros santos. Como o clérigo, veste cinza, branco e/ou amarelo." },
          { name: "Fundamentalista", description: " Como o sacerdote. Além disso, sempre informa sua verdadeira identidade e ocupação antes de iniciar uma conversa." },
        ]
      },
      { title: "Paladino de Thyatis",
        intro: "O Deus da Ressurreição e da Profecia tem poucos paladinos. Eles existem para ensinar a Arton que o bem e a justiça nunca morrem. Assim como eles próprios.\nMuitos paladinos de Thyatis recebem o dom da imortalidade. Quando morrem, retornam à vida magicamente em poucos dias, independentemente da causa da morte. Se forem queimados, suas cinzas se reúnem para reformar o corpo. Cortados em mil pedaços, seus fragmentos se unem novamente. Mesmo que os pedaços sejam separados e enterrados longe um do outro, um deles regenerará por completo, trazendo o paladino de volta. Não há morte.\nEsse dom torna os paladinos de Thyatis muito poderososos, mas não invencíveis. Existe uma forma secreta de matá-los permanentemente, chamada Morte Verdadeira. Pode ser qualquer evento comum que acompanhe uma morte: um gole de vinho élfico, o soco de um ogro, o toque de um dragão, uma gota de chuva no outono... Se esse evento secreto ocorre, o paladino morre instantaneamente e não pode ser ressuscitado. Para descobrir sua Morte Verdadeira antes que ocorra, o paladino pode realizar uma missão especial para Thyatis. A informação valiosa é então revelada por um alto clérigo, pelo sumo-sacerdote ou pelo próprio Thyatis.\nComo esperado, um paladino de Thyatis luta para que todos tenham uma segunda chance. Tem poder combativo elevado mas, como os clérigos, é proibido de matar seres inteligentes. Sem temer dor ou morte, não hesita em recorrer à imortalidade para salvar inocentes e proteger seus aliados, “sacrificando-se” sempre que houver vantagem.",
        content: [
          { name: "Imortais", description: " Paladinos com Dom da Imortalidade que sejam mortos retornam magicamente à vida após algum tempo (em geral, 3d6 dias).\nPara representar isso, sempre que um paladino de Thyatis com o Dom da Imortalidade morrer, deve rolar 1d20. Com um resultado 1, aquela foi a Morte Verdadeira dele, e ele estará permanentemente morto. Com qualquer outro resultado, aquela foi só uma morte comum e o paladino voltará. Porém, se morrer novamente e rolar um número já rolado antes, deverá rolar novamente — afinal, aquele resultado representa uma morte que já aconteceu. A exceção é uma rolagem de 20 natural, que sempre pode ser repetida. Por exemplo, um paladino de Thyatis cai do alto da muralha de um castelo e morre pela primeira vez. O jogador rola 1d20 e tira um resultado 3. Isso significa que essa foi uma morte comum, da qual o paladino se recuperará em 3d6 dias. Mais tarde, ele é atropelado por um vagão goblin desgovernado e morre de novo. Mais uma vez, o jogador rola 1d20. Se for um 3, o jogador deverá rolar novamente — este número já tendo representado a morte por cair do alto de uma muralha. Paladinos de Thyatis não ganham pontos de experiência por sessões de jogo nas quais tenham morrido." },
          { name: "Indumentária", description: " Prefere armaduras vistosas para atrair ataques inimigos, sempre adornadas com a ave fênix e suas cores: amarelo, laranja, dourado." },
          { name: "Fundamentalista", description: " Proibido de matar não apenas seres inteligentes, mas quaisquer seres vivos." },
        ]
      },
      { title: "Paladino de Valkaria",
        intro: "Lendas falam de tempos antigos em que apenas os humanos podiam ser paladinos. Mais tarde, também seria permitido a membros das raças com sangue humano — como meios-elfos e meios-orcs — serem abençoados como soldados santos. Se essa restrição realmente aconteceu (pois muitos duvidam), é possível que tenha sido Valkaria, e não Khalmyr, a primeira divindade com paladinos. Essa teoria é reforçada pelo fato de que, hoje, quase todos os paladinos são humanos — e as maiores ordens de paladinos são compostas principalmente por humanos.\nDepois dos paladinos de Khalmyr, os paladinos de Valkaria são os mais numerosos em Arton — e também os mais obstinados, aqueles que melhor representam a determinação e o espírito aventureiro da raça humana. Buscam aventura com a mesma paixão com que buscam justiça. Quanto maior o desafio, quanto maior a dificuldade da missão, maior será seu empenho em participar.\nAté recentemente, como os clérigos, paladinos de Valkaria perdiam parte de seus poderes quando ultrapassavam as fronteiras de Deheon. Assim, demonstravam sua bravura aventurando-se em terras distantes, mesmo quando isso reduzia suas forças. Hoje é diferente: Valkaria não apenas está livre, mas comanda o Panteão, e seus paladinos são mais audaciosos do que nunca.\nTalvez devido ao antigo cativeiro da deusa, paladinos de Valkaria são defensores irredutíveis da liberdade. Combatem déspotas, tiranos, escravagistas e todos aqueles que buscam privar outros de seu sagrado livre-arbítrio.",
        content: [
          { name: "Indumentária", description: " Todo paladino de Valkaria traz na placa peitoral, escudo ou flâmula a imagem da estátua de sua deusa." },
          { name: "Fundamentalista", description: " Deve sempre buscar novas missões e aventuras, jamais recusando uma missão. Sempre que houver um tempo entre aventuras, deve realizar uma busca relacionada a uma aventura. Também é proibido de usar habilidades que causam condições de movimento. Apenas humanos podem ser paladinos fundamentalistas de Valkaria." },
        ]
      },
      { title: "Paladino do Bem",
        intro: "Da mesma forma que ocorre com o clérigo do Panteão, nem todo paladino decide servir a esta ou aquela divindade. O paladino do bem reconhece a existência e soberania de todos os vinte deuses — e, humildemente, não acredita ser digno de escolher apenas um entre eles. Guiado apenas por sua fé e princípios morais, serve “aos deuses” sem se prender a nenhum.\nO paladino do bem jamais coloca uma crença acima de outra. Demonstra respeito perante todos os outros clérigos e paladinos que encontra. No entanto, ainda é um campeão sagrado do bem e ordem. Quando seus opositores são sszzaazitas ou outros devotos de deuses malignos, não hesita em destruí-los. Mesmo respeitando todos os vinte, um paladino do bem acredita na soberania dos deuses bondosos sobre os malignos, ele próprio atuando como instrumento para esse equilíbrio.\nPaladinos são especiais, por vezes atraindo o interesse pessoal dos deuses. Este paladino pode acabar abordado por uma divindade maior, pedindo (ou exigindo) sua devoção exclusiva. Nesse momento dramático ele pode aceitar servir ao novo patrono ou — que ousadia! — preferir manter sua independência. É uma situação delicada, mesmo os deuses mais bondosos não lidam bem com orgulho ferido. Muito mais complicado é quando dois ou mais deuses cobiçam o guerreiro santo!\nSeguindo o código dos paladinos, mas sem Obrigações & Restrições, o paladino do bem costuma ser um excelente aliado e companheiro em grupos de aventureiros.",
        content: [
          { name: "Indumentária", description: " Segue o estilo clássico dos paladinos, usando armaduras brilhantes, embora possa se vestir como quiser. Alguns ostentam diferentes símbolos sagrados dos deuses bondosos." },
          { name: "Fundamentalista", description: " Como o sacerdote do Panteão." },
        ]
      },
    ]
  }
]
    },
    { id: "Samurai",
    name: "Samurai",
    powersUrl: "/poderes/samurai",
    origin: "Dragão Brasil",
    image: "/classes/samurai.png",
    description: "Antes do Império, antes da grande unificação, havia os poderosos senhores da guerra — os xogum. Tamu-ra vivia em conflito, cada província tentando conquistar as demais, cada regente buscando a supremacia. Nos tempos em que os militares governavam, quando a própria aristocracia era formada por combatentes, surgiu o lendário guerreiro poeta. Surgiu o samurai. \n Nascidos na nobreza, treinados pelos melhores mestres, equipados com as mais finas armas e armaduras, até hoje os samurais são a elite guerreira de Tamu-ra. Exceto pelo próprio Imperador e seu círculo de conselheiros shugenja, não há homens e mulheres mais prestigiados. Ainda assim, apesar de sua elevada posição social, o samurai vive para servir — seu próprio nome significa “aquele que serve”. Sua espada e perícia pertencem a Lin-Wu, pertencem ao Império. Ele protege os plebeus que o reverenciam. E sem essa devoção, sem um senhor ou causa a quem servir, o samurai está perdido. \n Com a destruição da ilha, milhares de samurais perderam seus senhores, falharam em protegê-los. Para preservar a honra, muitos cometeram suicídio ritual. Outros, desonrados, vagaram sem rumo como ronin — samurais sem mestres. Hoje, o sol volta a nascer em Tamu-ra. A terra natal dos samurais pode ser recuperada. Assim como sua honra. \n O “exílio” imposto aos samurai pela Tormenta em Tamu-ra fez com que membros desta classe se espalhassem pelo mundo. Isso permitiu que diversos outros povos entrassem em contato com as técnicas e tradições desses guerreiros, fazendo surgir samurais entre membros de outras raças e culturas. Estes samurais não tamurianos trouxeram para este caminho também elementos de suas próprias vivências e costumes marciais. Alguns até romperam com a tradição da katana como arma símbolo, empunhando suas próprias armas típicas de forma igualmente honrada e tradicional.",
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Acrobacia (Des)', 'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais e armaduras pesadas",
    abilities: [
      {
        name: "Arma Ancestral",
        description: "Você recebe proficiência em katana e começa o jogo com uma arma ancestral, uma katana superior com uma melhoria com preço total de até T$ 500. Nos níveis 4, 6 e 8, sua arma ancestral recebe uma nova melhoria à sua escolha. Nas mãos de qualquer outra pessoa, sua arma ancestral funciona como uma arma normal (sem benefícios por melhorias ou encantamentos). Se perder sua arma ancestral, você perde todos os seus PM e só pode recuperá-los no dia seguinte. Você pode reforjar uma arma ancestral perdida ou destruída com uma semana de trabalho e o gasto de tibares em valor igual ao preço básico da arma."
      },
      {
        name: "Código do Samurai",
        description: "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia."
      },
      {
        name: "Grito de Kiai",
        description: "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado. Se acertar esse ataque, você recebe +1d4 na rolagem de dano. Esse dano extra é multiplicado em caso de acerto crítico. A cada quatro níveis, o bônus de dano aumenta conforme indicado na tabela da classe."
      },
      {
        name: "Poder de Samurai",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder."
      },
      {
        name: "Olhar Assustador",
        description: "No 3º nível, você recebe +1 em Intimidação e Intuição. A cada seis níveis, esse bônus aumenta em +1."
      },
      {
        name: "Arma Espiritual",
        description: "No 10º nível, sua arma ancestral se torna uma arma mágica com um encanto à sua escolha. Nos níveis 12 e 14 ela recebe um novo encanto à sua escolha."
      },
      {
        name: "Shogun",
        description: "No 20º nível, o multiplicador de crítico da sua arma ancestral aumenta em dois. Além disso, recupera uma quantidade de pontos de vida igual a esse dano extra."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Arma ancestral (1 Melhoria), Código do samurai, Grito de kiai (+1d4)" },
      { level: 2, abilities: "Poder de samurai" },
      { level: 3, abilities: "Olhar assustador +1, Poder de samurai" },
      { level: 4, abilities: "Arma ancestral (2 Melhorias), Poder de samurai" },
      { level: 5, abilities: "Grito de kiai (+1d6), Poder de samurai" },
      { level: 6, abilities: "Arma ancestral (3 Melhorias), Poder de samurai" },
      { level: 7, abilities: "Poder de samurai" },
      { level: 8, abilities: "Arma ancestral (4 Melhorias), Poder de samurai" },
      { level: 9, abilities: "Grito de kiai (+1d8), Olhar assustador +2, Poder de samurai" },
      { level: 10, abilities: "Arma espiritual (1 Encanto), Poder de samurai" },
      { level: 11, abilities: "Poder de samurai" },
      { level: 12, abilities: "Arma espiritual (2 Encantos), Poder de samurai" },
      { level: 13, abilities: "Grito de kiai (+1d10), Poder de samurai" },
      { level: 14, abilities: "Arma espiritual (3 Encantos), Poder de samurai" },
      { level: 15, abilities: "Olhar assustador +3, Poder de samurai" },
      { level: 16, abilities: "Poder de samurai" },
      { level: 17, abilities: "Grito de kiai (+1d12), Poder de samurai" },
      { level: 18, abilities: "Poder de samurai" },
      { level: 19, abilities: "Poder de samurai" },
      { level: 20, abilities: "Poder de samurai, Shogun" }
    ],
    },
    { id: "Comandante (Nobre)",
    name: "Comandante (Nobre)",
    powersUrl: "/poderes/nobre",
    origin: "Dragão Brasil",
    image: "/classes/comandante.png",
    description: "O comandante é o tipo de líder que não conhece o luxo de mandar à distância. Enquanto muitos nobres preferem discursos inflamados ou estratégias elaboradas, o comandante ergue o escudo, ajusta a espada e avança ao lado dos companheiros. Sua autoridade nasce do exemplo, não da linhagem.\nApesar de herdar o carisma e a capacidade de inspirar aliados típicas dos nobres, o comandante os aplica de forma direta e marcial. É a voz firme no calor da batalha, o braço que ampara o escudeiro ferido, o grito que devolve coragem a quem já pensava em recuar. Para o comandante, cada aliado é uma peça crucial. A formação de um comandante depende da convivência com tropas, milícias ou guardas urbanos. Pode ser um herdeiro criado entre veteranos endurecidos, ou um plebeu que ascendeu pelo puro respeito conquistado entre soldados. Seja como for, comandantes são conhecidos por tomar decisões difíceis e manter a disciplina acima de tudo.\nAlguns comandantes têm fama de serem rígidos demais, incapazes de relaxar ou aceitar improvisos. Outros são lembrados como heróis inesquecíveis, que transformaram grupos dispersos em forças imparáveis. Em comum, todos carregam o peso da responsabilidade; e a vontade incansável de levar seus aliados à vitória.",
    famousExamples: [],
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Intimidação (Car)", "Guerra (Int)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atuação (Car)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Jogatina (Car)', 'Luta (For)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)'
      ],
      count: 3
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos.",
    abilities: [
      {
      name: "Autoconfiança",
      description: "Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
      },
      {
        name: "Coordenar",
        description: "No início de um combate, role 1d20 por patamar (1d20 para iniciante, 2d20 para veterano e assim por diante) e anote os resultados. Uma vez por rodada, você pode gastar 1 PM para substituir a rolagem do teste de um aliado em alcance curto por um desses seus resultados. Após substituir uma rolagem, o resultado é perdido. Além disso, você aprende e pode lançar Comando (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de impor suas vontades em outras criaturas."
      },
      {
      name: "Direcionar",
      description: "Você pode gastar a ação do direcionamento e 1 PM para fazer um teste de Guerra (CD 15). Se passar, você usa um direcionamento em um aliado em alcance curto. Para cada 10 pontos acima da CD, você afeta um alvo adicional. Você começa com 2 direcionamentos (veja a seguir). A cada quatro níveis, aprende um direcionamento adicional à sua escolha.",
      subAbilities: [
        {
        name: "Aguenta Firme! (padrão)",
        description: "Você encoraja seus aliados a continuar lutando. Os alvos recebem pontos de vida temporários iguais ao seu nível + seu Carisma.",
        },
        {
        name: "Carga! (completa)",
        description: "Você coordena seus aliados em um avanço conjunto. Faça uma investida. Se acertar e causar dano, alvos deste direcionamento podem usar uma reação para movimentar-se o equivalente a uma ação de movimento, mas devem terminar este movimento em uma posição mais próxima da criatura atingida pela sua investida.",
        },
        {
        name: "Em Frente! (reação)",
        description: "Você sabe liderar seus aliados em combates. Após os testes de Iniciativa, mas antes do primeiro turno do combate, você pode usar este direcionamento para deslocar os alvos em até 6m.",
        },
        {
        name: "Encontrem Eles! (movimento)",
        description: "Você alerta seus companheiros sobre ameaças nas sombras. Até o fim do seu próximo turno, os alvos recebem +2 em testes de Percepção e Intuição.",
        },
        {
        name: "Lutem! (padrão)",
        description: "Você incentiva seus aliados ao ataque. Alvos deste direcionamento podem usar uma reação para fazer um ataque contra um inimigo. O inimigo precisa estar dentro do alcance do aliado afetado por este poder.",
        },
        {
        name: "Parede de Escudos! (reação)",
        description: "Você reúne seus aliados em uma barreira protetora de escudos. Quando um aliado adjacente sofrer um ataque, você pode usar este direcionamento para coordenar os alvos para protegê-lo, concedendo um bônus na Defesa do aliado protegido igual a 1 + a quantidade de alvos deste direcionamento.",
        },
        {
        name: "Peguem-no Vivo! (movimento)",
        description: "Você pede que seus aliados derrubem os inimigos sem matá-los. Até o fim do seu próximo turno, você e os alvos deste direcionamento não sofrem a penalidade de –5 em testes de ataque para causar dano não letal.",
        },
        {
        name: "Para o Chão! (reação)",
        description: "Você avisa seus aliados de um perigo iminente. Até o início do seu próximo turno, os alvos recebem um bônus em testes de resistência igual ao seu Carisma.",
        },
        {
        name: "Saiam Dessa! (movimento)",
        description: "Você dá um grito rápido, torcendo para dispersar a névoa que nubla os pensamentos dos seus aliados. Este direcionamento remove uma condição mental que estava afetando os alvos. Para cada 10 pontos acima da CD, você pode, em vez de afetar um alvo adicional, remover uma condição adicional.",
        },
        {
        name: "Vão, vão, vão! (padrão)",
        description: "Você lidera seu grupo para atacar uma ameaça em comum. Escolha um inimigo em alcance curto. Até o fim do seu próximo turno, você e os alvos deste direcionamento recebem +2 em testes de ataque e rolagens de dano contra este inimigo.",
        },
      ],
      },
      {
        name: "Palavras Afiadas",
        description: "No 2º nível, você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int –3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe)."
      },
      {
        name: "Poder de Nobre",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Nobre ou Poderes Gerais."
      },
      {
        name: "Replanejar",
        description: "No 3º nível, você consegue reorganizar seus planos e aliados caso tudo dê errado. Uma vez por cena, quando um oponente em alcance curto acerta um ataque em um de seus aliados, ou quando um de seus aliados falhar em um teste de resistência, você pode gastar 2 PM para fazer o oponente repetir o teste de ataque (escolhendo o pior entre os dois resultados) ou para fazer o aliado repetir o teste de resistência (escolhendo o melhor entre os dois resultados)."
      },
      {
        name: "Gritar Ordens",
        description: "A partir do 4º nível, você pode gastar uma quantidade de PM à sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou."
      },
      {
        name: "Presença de Liderança",
        description: "A partir do 5º nível, você pode gastar 1 PM para seus aliados em alcance curto receberem +2 em testes de perícias baseadas em Carisma até o fim da cena. Além disso, você recebe +2 em testes de Intimidação."
      },
      {
        name: "Líder Nato",
        description: "No 20º nível, você já liderou seu grupo por tanto tempo que aprendeu a comandá-lo com um aceno, uma única palavra ou com o menor gesto de mão. Uma vez por rodada, você pode usar Direcionar como ação livre, sem precisar fazer um teste e sem custo em PM. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Autoconfiança, coordenar, direcionar" },
      { level: 2, abilities: "Palavras afiadas (2d6), poder de nobre" },
      { level: 3, abilities: "Replanejar, poder de nobre" },
      { level: 4, abilities: "Gritar ordens, poder de nobre" },
      { level: 5, abilities: "Poder de nobre, presença de liderança" },
      { level: 6, abilities: "Palavras afiadas (4d6), poder de nobre" },
      { level: 7, abilities: "Poder de nobre" },
      { level: 8, abilities: "Poder de nobre" },
      { level: 9, abilities: "Poder de nobre" },
      { level: 10, abilities: "Palavras afiadas (6d6), poder de nobre" },
      { level: 11, abilities: "Poder de nobre" },
      { level: 12, abilities: "Poder de nobre" },
      { level: 13, abilities: "Poder de nobre" },
      { level: 14, abilities: "Palavras afiadas (8d6), poder de nobre" },
      { level: 15, abilities: "Poder de nobre" },
      { level: 16, abilities: "Poder de nobre" },
      { level: 17, abilities: "Poder de nobre" },
      { level: 18, abilities: "Palavras afiadas (10d6), poder de nobre" },
      { level: 19, abilities: "Poder de nobre" },
      { level: 20, abilities: "Líder nato, poder de nobre" }
    ]
    },
    { id: "Sentinela (Arcanista)",
    name: "Sentinela (Arcanista)",
    powersUrl: "/poderes/arcanista",
    origin: "Dragão Brasil",
    image: "/classes/sentinela.png",
    description: "Sentinelas são o ponto onde espada e feitiçaria se encontram, um arcanista que se recusa a escolher entre o poder das palavras antigas e a força absoluta da disciplina marcial. Em um mundo onde muitos magos preferem a distância segura da retaguarda, o sentinela avança pelo campo de batalha como um vendaval de mana e aço.\nUm sentinela é treinado para manter o controle absoluto da situação. Usa magia para reforçar defesas, manipular movimentos inimigos e abrir brechas cirúrgicas para sua lâmina. Sua postura é firme, quase militar, mas seu estilo de combate muda a cada batida do coração — ora canalizando poder arcano, ora revertendo o fluxo de um duelo com um único golpe bem posicionado.\nNão raro, sentinelas surgem em academias militares como as de Wynlla que também ministram o estudo das artes arcanas, ou entre magos que se cansaram de fugir dos bandidos comuns com armas afiadas. Alguns os enxergam como um “meio-termo” entre guerreiro e mago — o que só prova que não entenderam nada. Ser um sentinela é uma vocação completa por si só, com doutrina própria e métodos que chocam tanto soldados quanto estudiosos.\nOnde quer que estejam, sentinelas são respeitados e temidos. Para aliados, são muralhas que conjuram. Para inimigos, enigmas que cortam. E para todos, um lembrete de que a magia, quando guiada por mãos firmes, pode marchar à frente de qualquer batalha.",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "5 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For)", "Misticismo (Int)"],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Vontade (Sab)'      ],
      count: 2
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
        name: "Caminho do Sentinela",
        description: "Você lança magias misturando combate e feitiçaria. Para lançar uma magia em combate, você deve empunhar uma arma com a qual seja proficiente com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). Fora de combate, deve pelo menos estar com uma das mãos sobre esta arma (por exemplo: segurando no cabo de uma espada embainhada) ou precisa fazer o mesmo teste. Você não precisa fazer testes de Misticismo para lançar magias arcanas se estiver usando uma armadura leve, e também recebe uma armadura leve como seu equipamento inicial no 1º nível. Seu atributo-chave para lançar magias é Inteligência."
      },
      {
        name: "Gladiomancia",
        description: "Você pode gastar uma ação de movimento e 2 PM para evocar palavras de poder mágico e imbuir essência arcana em uma arma corpo a corpo leve ou ágil que esteja empunhando. Enquanto empunhar esta arma ou até o fim da cena (o que acontecer primeiro), você pode somar sua Inteligência em vez de Destreza na Defesa. Além disso, você usa Inteligência em testes de Luta, em vez de Força, e pode somar sua Inteligência em rolagens de dano usando esta arma (limitado pelo seu nível)."
      },
      {
      name: "Magias",
      description: "Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma seu atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia."
    },
    {
      name: "Poder de Arcanista",
      description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Arcanista ou Poder Geral."
    },
      {
        name: "Mago de Combate",
        description: "Quando faz um ataque usando uma arma sob efeito de Gladiomancia, você soma o círculo máximo de magias que pode lançar à rolagem de dano. Além disso, a mão da arma é considerada livre para lançar magias."
      },
      {
        name: "Ataque Extra",
        description: "A partir do 8º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada."
      },
      {
        name: "Mestre Arcano-combatente",
        description: "No 20º nível, você pode usar Gladiomancia como ação livre. Enquanto empunhar uma arma sob o efeito de Gladiomancia, suas habilidades de sentinela (incluindo magias) têm seu custo em PM reduzido pela metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Caminho do sentinela, gladiomancia, magias (1º círculo)" },
      { level: 2, abilities: "Poder de arcanista" },
      { level: 3, abilities: "Mago de combate, poder de arcanista" },
      { level: 4, abilities: "Poder de arcanista" },
      { level: 5, abilities: "Magias (2º círculo), poder de arcanista" },
      { level: 6, abilities: "Poder de arcanista" },
      { level: 7, abilities: "Poder de arcanista" },
      { level: 8, abilities: "Ataque extra, poder de arcanista" },
      { level: 9, abilities: "Magias (3º círculo), poder de arcanista" },
      { level: 10, abilities: "Poder de arcanista" },
      { level: 11, abilities: "Poder de arcanista" },
      { level: 12, abilities: "Poder de arcanista" },
      { level: 13, abilities: "Magias (4º círculo), poder de arcanista" },
      { level: 14, abilities: "Poder de arcanista" },
      { level: 15, abilities: "Poder de arcanista" },
      { level: 16, abilities: "Poder de arcanista" },
      { level: 17, abilities: "Magias (5º círculo), poder de arcanista" },
      { level: 18, abilities: "Poder de arcanista" },
      { level: 19, abilities: "Poder de arcanista" },
      { level: 20, abilities: "Mestre arcano-combatente, poder de arcanista" }
    ],
    },
    { id: "Treinador",
    name: "Treinador",
    powersUrl: "/poderes/treinador",
    origin: "Herois de Arton",
    image: "/classes/Treinador.png",
    description: "Quando um poderoso tachygloss ou uma alcateia gorlogg irrompem no campo de batalha, dilacerando alvos em apenas um lado do conflito, é quase certo que existe um treinador por trás.\nFigura mística e enigmática, o treinador é um mestre das criaturas ferais que compartilham Arton com os povos humanoides. Suas habilidades permitem convocar animais, monstros e outras feras como combatentes, montarias, bestas de carga ou simples mascotes. Há quem os confunda com druidas, por sua afinidade com o mundo selvagem, mas é um erro pensar assim. Embora alguns sejam de fato abençoados por Allihanna ou Megalokk, outros adquirem seus talentos exóticos de formas totalmente diferentes, tão variadas quanto os seres que comandam. Treinadores podem ser selvagens, mas também urbanos, eruditos, até palacianos.\nAlguns treinadores foram criados por animais após serem abandonados ou perdidos quando crianças, adotados por matilhas de gorloggs, bandos de lagartos-terror ou outras bestas. Crescendo entre feras, desenvolveram entendimento instintivo de suas linguagens e comportamentos. Outros receberam seus dons como bênçãos, escolhidos pelos deuses como seus campeões no mundo mortal. Há aqueles cuja conexão com animais e monstros é fruto de alguma herança sobrenatural, descendentes de antigos espíritos, celestiais ou abissais. E outros, ainda, apenas passaram por treinamento severo e obsessivo, aprendendo a domar e treinar bestas com paciência, coragem e conhecimento profundo.\nUma das habilidades mais impressionantes do treinador é ser capaz de deter, acalmar ou domar feras selvagens, derrotando-as sem lutar. Com uma combinação de palavras, gestos e uma aura natural de autoridade, ele pode neutralizar as criaturas mais ferozes sem derramamento de sangue — ou mesmo transformá-las em aliadas! Pode assim resolver conflitos de forma pacífica, protegendo tanto as pessoas quanto as próprias feras.\nEnquanto muitos treinadores atraem animais e monstros conhecidos, outros podem adotar seleções mais estranhas. Talvez exista um deles capaz de invocar bestas elementais que emergem da natureza ao redor. Outro que manifesta e controla enxames de construtos animalescos. Outro ainda que roga aos deuses para invocar feras celestiais — ou abissais, quando recorre a deuses malignos. E algum pode até ser louco ou depravado o bastante para convocar aberrações da Tormenta…\nAssim, por magia, prática ou destino, treinadores são peritos em controlar e invocar criaturas — que podem existir nas redondezas, ser conjuradas por magia ou apenas se manifestar num instante, como produto de sua vontade. Sejam pássaros para reconhecimento aéreo, ursos para rastreamento e ataque ou grifos selvagens para transporte rápido, o treinador sempre pode contar com fiéis ajudantes. Alguns treinadores desenvolvem um vínculo especial com uma criatura única e poderosa, como um imenso lagarto-trovão, um elemental gigantesco, uma fera abissal profana ou mesmo um construto de guerra!\nMais que simples invocadores, treinadores são eruditos e protetores do mundo não humanoide, com vasto conhecimento sobre os seres que comandam. Em combate são adversários formidáveis, pois nunca estão sozinhos: enquanto suas criaturas atacam ou defendem, treinadores permanecem em posição estratégica, coordenando com precisão e eficiência, usando seus poderes para curar e fortificar seus mascotes. E, quando atuam com colegas aventureiros, são sempre valiosos e versáteis — afinal, um treinador conta como dois heróis… no mínimo!",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Adestramento (Car)", "Vontade (Sab)"],
    optional: {
      skills: ['Atletismo (For)', 'Cavalgar (Des)', 'Diplomacia (Car)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Reflexos (Des)', 'Religião (Sab)', 'Sobrevivência (Sab)'],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
        name: "Direcionar",
        description: "Se o seu melhor amigo estiver em alcance curto e fizer um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste dele."
      },
      {
        name: "Melhor Amigo",
        description: "Você recebe um melhor amigo, um parceiro especial que o acompanha em suas aventuras. Veja ao final da página para as regras do melhor amigo. Ele começa com dois truques a sua escolha e recebe um novo truque a cada três níveis seguintes. Caso seu melhor amigo morra, você fica atordoado por 1d4 rodadas. Você pode treinar um novo melhor amigo com um mês de trabalho."
      },
      {
        name: "Domar Criatura",
        description: "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para fazer um teste de Adestramento oposto ao teste de Vontade de uma criatura não inteligente em alcance curto. Se você vencer, causa 2d8 pontos de dano psíquico não letal à criatura. Se perder, causa metade desse dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende. A cada quatro níveis, você pode gastar +1 PM para aumentar o dano em +2d8. A partir do 5º nível, quando rende uma criatura com ND igual ou menor que seu nível, você pode gastar uma quantidade de pontos de mana igual ao ND dela. Se fizer isso, ela recupera todos os PV perdidos por esta habilidade e, até o fim da cena, você controla as ações dela (ela age durante o seu turno, mas possui as próprias ações). A partir do 8º nível, se o ND da criatura for igual ou menor que seu nível –3, ela fica com você até o fim do dia. Enquanto estiver sendo controlada, a criatura conta em seu limite de parceiros. Criaturas que possuam habilidades que não gastam PM e não possuam limite de uso podem usar essas habilidades apenas uma vez por dia. Além disso, algumas criaturas (a critério do mestre) são indomáveis, sendo imunes a este efeito (nesse caso, você recupera os PM gastos ao tentar comandar a criatura)."
      },
      {
        name: "Poder de Treinador",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de treinador ou Gerais."
      },
      {
        name: "Treino Especializado",
        description: "No 5º nível, escolha entre Conquistar pelos Números e Treino Intensivo.",
        subAbilities: [
          {name: "Conquistar pelos Números",
          description: "Você recebe um segundo melhor amigo. Uma vez por rodada, quando faz uma ação padrão com um de seus melhores amigos, você pode gastar 3 PM para fazer uma ação padrão com o outro."},
          {name: "Treino Intensivo",
          description: "Seu melhor amigo recebe +4 PV por nível, redução de dano 5 e um truque. No 11º nível, a RD aumenta para 10 e ele recebe outro truque. No 17º nível, a RD aumenta para 15."},
        ],
      },
      {
        name: "Sincronia de Combate",
        description: "A partir do 6º nível, uma vez por rodada, quando seu melhor amigo acerta um ataque usando a ação agredir, você pode gastar 2 PM para fazer um ataque contra o mesmo alvo."
      },
      {
        name: "Sincronia Perfeita",
        description: "No 20º nível, você pode gastar uma ação de movimento e 6 PM para entrar em um estado de sincronia perfeita com um dos seus melhores amigos. Até o fim da cena, o tamanho dele aumenta em uma categoria. Além disso, uma vez por rodada, quando usa uma ação padrão consigo mesmo, você recebe uma ação padrão extra para usar com ele."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Direcionar, melhor amigo (2 truques)" },
      { level: 2, abilities: "Domar criatura (2d8), poder de treinador" },
      { level: 3, abilities: "Poder de treinador" },
      { level: 4, abilities: "Melhor amigo (3 truques), poder de treinador" },
      { level: 5, abilities: "Domar criatura (cena), poder de treinador, treino especializado" },
      { level: 6, abilities: "Domar criatura (4d8), poder de treinador, sincronia de combate" },
      { level: 7, abilities: "Melhor amigo (4 truques), poder de treinador" },
      { level: 8, abilities: "Domar criatura (dia), poder de treinador" },
      { level: 9, abilities: "Poder de treinador" },
      { level: 10, abilities: "Domar criatura (6d8), melhor amigo (5 truques), poder de treinador" },
      { level: 11, abilities: "Poder de treinador" },
      { level: 12, abilities: "Poder de treinador" },
      { level: 13, abilities: "Melhor amigo (6 truques), poder de treinador" },
      { level: 14, abilities: "Domar criatura (8d8), poder de treinador" },
      { level: 15, abilities: "Poder de treinador" },
      { level: 16, abilities: "Melhor amigo (7 truques), poder de treinador" },
      { level: 17, abilities: "Poder de treinador" },
      { level: 18, abilities: "Domar criatura (10d8), poder de treinador" },
      { level: 19, abilities: "Melhor amigo (8 truques), poder de treinador" },
      { level: 20, abilities: "Poder de treinador, sincronia perfeita" }
    ],
    extras: [
  {
    title: "O Melhor Amigo",
    description: "Seu melhor amigo é uma criatura com a qual você possui uma afinidade única. Pode ser um animal que você criou desde filhote, um construto que você fabricou ou mesmo o espírito de um antepassado que decidiu protegê-lo! Em termos de regras, é um parceiro iniciante de um tipo a sua escolha condizente com suas características e aprovado pelo mestre.\nSe você receber um parceiro não inteligente por outra habilidade, como o poder Companheiro Animal ou a origem Irmão sem Esporas, pode fazer esse parceiro ser seu melhor amigo, usando todos os bônus de parceiros (bônus iguais não se acumulam; use os melhores).\nSeu melhor amigo só fornece seus benefícios de parceiro se estiver em alcance curto de você. Ao contrário de outros parceiros, seu melhor amigo possui uma ficha completa, com as características a seguir — mesmo que sejam diferentes da ficha de sua espécie. Por exemplo, se você escolher um melhor amigo gorlogg, ele terá as características abaixo, não aquelas descritas em Tormenta20. Da mesma forma, se escolher um melhor amigo elefante, ele não será Enorme. Talvez o seu ainda seja um filhote que ainda não cresceu totalmente? Se achar isso sem graça, lembre-se de que você ainda pode escolher o truque Amigão para fazê-lo crescer!",
    sections: [
      { title: "Características Base",
        content: [
          { name: "Tamanho", description: " Escolha entre Pequeno, Médio ou Grande." },
          { name: "Atributos", description: " For 1, Des 1, Con 1, Int –4, Sab 1, Car 0." },
          { name: "Pontos de Vida", description: " Começa com 16 pontos de vida + Constituição e ganha 4 PV + Con por nível." },
          { name: "Pontos de Mana", description: " Seu melhor amigo não possui pontos de mana. Você usa os seus próprios PM para ativar as habilidades dele." },
          { name: "Perícias Treinadas", description: " Escolha 3 entre Acrobacia (Des), Atletismo (For), Fortitude (Con), Furtividade (Des), Luta (For), Percepção (Sab), Pontaria (Des), Reflexos (Des), Sobrevivência (Sab) e Vontade (Sab)." },
          { name: "Defesa", description: " 10 + Destreza + Carisma do treinador + metade do nível do treinador." },
          { name: "Deslocamento", description: " 12m (8q). Se o seu melhor amigo for uma montaria, em vez disso use os deslocamentos que ele fornece." },
          { name: "Ataques", description: " Possui uma arma natural. (dano 1d8, crítico x2, corte, impacto ou perfuração, escolhido ao criar o melhor amigo)" },
          { name: "Ações", description: " Seu amigo depende de suas instruções para agir. Em termos de regras, a cada turno você pode gastar suas ações com seu personagem (o treinador) ou com seu melhor amigo, em qualquer combinação. Por exemplo, pode gastar sua ação de movimento para percorrer seu deslocamento e sua ação padrão para que seu melhor amigo faça uma ação agredir. Ações adicionais, como aquelas concedidas pela magia Velocidade, também podem ser distribuídas dessa forma." },
          { name: "Nível", description: " Para efeitos baseados no nível do melhor amigo, use o nível do treinador." },
          { name: "Equipamento", description: " Um melhor amigo não pode empunhar nem carregar itens, mas pode vestir até dois itens que, a critério do mestre, sejam adequados a sua forma e natureza." },
        ]
      },
      { title: "Tipos de Amigo",
        intro: "Escolha entre animal, construto, espírito, monstro ou morto-vivo. Conforme o tipo, ele recebe os benefícios a seguir.",
        content: [
          { name: "Animal", description: " +1 em Força, Destreza e Sabedoria..." },
          { name: "Construto", description: " +2 em Constituição, visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno. Não respira, alimenta-se ou dorme; não é afetado por condições de descanso, não se beneficia de cura mundana e itens de alimentação e a perícia Cura não funciona com ele, mas Ofício (artesão) pode ser usada com os mesmos efeitos." },
          { name: "Espírito", description: " +1 em Sabedoria e Carisma. Pode assumir uma forma incorpórea Minúscula de energia positiva ou negativa (escolhida ao ser criado) com deslocamento de voo 9m, que não pode atacar ou usar habilidades. Nessa forma, fornece +2 em perícias baseadas em Sabedoria (energia positiva) ou +2 em perícias baseadas em Carisma (energia negativa). Você pode gastar uma ação de movimento para fazê-lo mudar entre sua forma normal e sua forma incorpórea." },
          { name: "Monstro", description: " +1 em Força e Destreza, visão no escuro e uma segunda arma natural (quando o melhor amigo faz a ação agredir com outra arma, você pode gastar 1 PM para que ele faça um ataque corpo a corpo extra com essa arma)." },
          { name: "Morto-Vivo", description: " +2 em Constituição, visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno; não respira, alimenta-se ou dorme; não é afetado por condições de descanso, sofre dano por efeitos mágicos de cura de luz e recupera PV com dano de trevas." },
        ]
      },
      { title: "Truques",
        content: [
          { name: "Alado", description: " Seu melhor amigo ganha deslocamento de voo 15m..." },
          { name: "Amigão", description: " Seu melhor amigo recebe +1 em Força e o tamanho dele muda para Enorme. Isso aumenta o dano de suas armas naturais em um passo e afeta seu modificador de Furtividade e manobras. Pré-requisito: melhor amigo Grande, 7º nível de treinador." },
          { name: "Amigo Feroz", description: " Seu melhor amigo recebe +2 em testes de ataque e na margem de ameaça com suas armas naturais, e o dano delas aumenta em um passo." },
          { name: "Amigo Protetor", description: " Quando você sofre dano, caso seu melhor amigo esteja em alcance curto, você pode gastar 2 PM para que ele salte em sua defesa. Se fizer isso, você sofre apenas metade do dano e o melhor amigo sofre o restante." },
          { name: "Amigo Veterano", description: " Seu amigo vira um parceiro veterano de seu tipo. Pré-requisito: 5º nível de treinador." },
          { name: "Amigo Mestre", description: " Seu amigo veterano vira um parceiro mestre de seu tipo. Pré-requisito: Amigo Veterano, 11º nível de treinador." },
          { name: "Anatomia Humanoide", description: " Seu melhor amigo tem uma forma humanoide e Int –2 (em vez de –4). Ele não recebe uma arma natural inicial, mas tem proficiência com armas simples e armaduras leves, pode empunhar dois itens e vestir um item adicional, e tem um limite de carga de 10 espaços. Este truque só pode ser escolhido na criação do melhor amigo. Pré-requisito: construto ou morto-vivo." },
          { name: "Arma Natural Adicional", description: " Seu melhor amigo recebe uma arma natural adicional. Quando ele faz a ação agredir com outra arma, você pode gastar 1 PM para que ele faça um ataque corpo a corpo extra com essa arma. Pré-requisito: animal ou monstro." },
          { name: "Asas", description: " Seu melhor amigo possui asas que podem ser usadas para pairar a 1,5m do chão com deslocamento 12m. Isso permite que ele ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para que ele voe com deslocamento 12m." },
          { name: "Bote", description: " Quando faz uma investida, seu melhor amigo pode atacar com todas as suas armas naturais. Todos os ataques recebem o bônus de +2 da investida, mas devem ser feitos contra o mesmo alvo. Pré-requisito: duas armas naturais." },
          { name: "Condicionamento Especial", description: " O melhor amigo recebe +2 em um atributo e +1 em outro atributo, exceto Inteligência. Você pode escolher este truque uma vez por patamar." },
          { name: "Deslocamento Especial", description: " Seu melhor amigo recebe deslocamento de escalada ou de natação igual a seu deslocamento base. Você pode escolher este truque uma segunda vez para que ele tenha ambos os deslocamentos." },
          { name: "Magia Inata", description: " Escolha uma magia de 1º círculo, arcana ou divina. Seu melhor amigo aprende e pode lançar essa magia (atributo-chave Carisma do treinador). Você pode escolher este truque outras vezes para magias diferentes. Pré-requisito: espírito." },
          { name: "Manobra Ensaiada", description: " Escolha uma manobra de combate. Seu melhor amigo recebe +2 em testes de ataque para executar essa manobra e, uma vez por rodada, quando ele acerta um ataque com uma arma natural, você pode gastar 1 PM para que ele faça essa manobra contra o alvo do ataque como uma ação livre." },
          { name: "Reanimação Sombria", description: " Uma vez por cena, se seu melhor amigo estiver com 0 PV ou menos, você pode gastar 3 PM por patamar para reanimá-lo. Se você fizer isso, ele é reerguido com pontos de vida iguais à metade do seu máximo. Pré-requisito: morto-vivo." },
          { name: "Redução de Dano", description: " Seu melhor amigo recebe redução de dano 5. Pré-requisito: 5º nível de treinador." },
          { name: "Sopro", description: " Seu melhor amigo recebe um sopro de um tipo a sua escolha entre ácido, fogo, frio ou eletricidade. Você pode gastar uma ação padrão e uma quantidade de PM limitada pelo seu Carisma para que seu melhor amigo sopre um cone de 6m de energia do tipo escolhido. Para cada PM gasto, criaturas na área sofrem 2d8 pontos de dano do tipo escolhido (Reflexos CD Car do treinador reduz à metade). Pré-requisito: construto, espírito ou monstro." },
          { name: "Táticas de Matilha", description: " Se seu melhor amigo estiver flanqueando um inimigo, além do bônus normal por flanquear, recebe +2 nos testes de ataque (total +4) e nas rolagens de dano contra ele. Se você estiver flanqueando com ele, recebe os mesmos bônus." },
          { name: "Treinamento de Companhia", description: " Seu melhor amigo recebe uma ação de movimento adicional nos turnos dele (apenas para se deslocar). Pré-requisito: animal." },
          { name: "Treinamento Defensivo", description: " Seu melhor amigo passa a receber um bônus na Defesa igual ao seu nível (em vez de metade do nível)." },
          { name: "Treinamento Marcial", description: " Seu melhor amigo recebe +2 em testes de ataque e rolagens de dano. Para cada patamar acima de iniciante, esse bônus aumenta em +1. Se ele possuir o truque Anatomia Humanoide, também recebe proficiência com armas marciais, armaduras pesadas e escudos." },
          { name: "Veloz", description: " Seu melhor amigo recebe +2 na Defesa e +3m em seus deslocamentos e se torna treinado em Atletismo (se já for, recebe +2 nessa perícia)." },
        ]
      }
    ]
  }
]
    },
    { id: "Alquimista (Inventor)",
    name: "Alquimista (Inventor)",
    powersUrl: "/poderes/inventor",
    origin: "Herois de Arton",
    image: "/classes/alquimista.png",
    description: "Inventores são artesãos versáteis, capazes de fabricar, consertar e aprimorar vários tipos de itens. Contudo, alguns pensam que os únicos itens que merecem tamanho esmero são aqueles que elevam Arton de forma física e espiritual. O único ofício verdadeiramente transcendente é a alquimia.\nO alquimista é um inventor que busca mais do que criar objetos mundanos: cada preparado teria um componente místico, afetando a alma de quem o usa. Assim, ácido não seria apenas uma maneira de causar dano, mas um modo de destruir o que é velho, para que possa ser substituído pelo novo. Essência de mana não seria apenas um elixir de ervas, mas energia materializada, capaz de elevar a mente. Para o alquimista, o verdadeiro ofício é compreender como Arton está conectada a outras dimensões, outros mundos, outros realidades — e imbuir seus preparados com essa compreensão transcendental.\nUm ditado comum entre alquimistas é “Assim acima como abaixo”: todo ato em Arton teria um reflexo nos reinos dos deuses e todo item alquímico seria uma metáfora para algum processo de transformação espiritual. Dizem que os maiores alquimistas podem transformar chumbo em ouro... Mas apenas os aprendizes pensam que isso é sobre riqueza.",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Ofício Alquimista (Int)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Investigação (Int)', 'Luta (For)', 'Misticismo (Int)', 'Ofício (Int)', 'Pilotagem (Des)', 'Percepção (Sab)', 'Pontaria (Des)'
      ],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
        name: "Engenhosidade",
        description: "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        name: "Laboratório Pessoal",
        description: "Você começa o jogo com instrumentos de alquimista aprimorados e 10 itens alquímicos com preço total de até T$ 300."
      },
      {
        name: "Alquimista Iniciado",
        description: "No 2º nível, você recebe o poder Alquimista Iniciado"
      },
      {
        name: "Poder de Inventor",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder de Inventor ou Geral."
      },
      {
        name: "Mistura Básica",
        description: "A partir do 3º nível, você pode usar catalisadores em itens alquímicos como se fossem magias."
      },
      {
        name: "Aplicação Rápida",
        description: "No 5º nível, você pode gastar uma ação completa e 2 PM para usar dois preparados alquímicos ao mesmo tempo. Você precisa ter ambos em suas mãos ou ser capaz de sacá-los como ação livre."
      },
      {
        name: "Magia Engarrafada",
        description: "No 7º nível, você pode usar Mistura Básica e Aplicação Rápida em poções."
      },
      {
        name: "Odores Alquímicos",
        description: "A partir do 8º nível, você pode gastar uma ação completa para detectar a presença de itens alquímicos e poções em alcance médio. No caso de itens alquímicos, você descobre seu tipo (preparado, veneno etc.) e uso geral (curar, fornecer bônus etc.). Para poções, você identifica qual magia ela emula e com quantos pontos de mana foi fabricada."
      },
      {
        name: "Fabricar Emulsão",
        description: "No 9º nível, você aprende a fabricar emulsões com um encanto (veja abaixo). Nos níveis 13 e 17, você aprende a fabricar emulsões com respectivamente dois e três encantos."
      },
      {
        name: "Mestre Alquimista",
        description: "No 10º nível, você recebe o poder Mestre Alquimista"
      },
      {
        name: "Bombardeio Eficiente",
        description: "A partir do 11º nível, quando usa um preparado alquímico ou uma poção que causa dano, você pode gastar 1 PM para que esse item ignore 10 pontos da redução de dano das criaturas atingidas."
      },
      {
        name: "Pedra Filosofal",
        description: "No 20º nível, você recebe uma pedra filosofal, um material que combina alquimia, magia e sua própria energia vital em uma fórmula única. Enquanto estiver de posse de sua pedra filosofal, você tem Cura Acelerada 10 e, quando faz um teste de Fortitude, rola dois dados e usa o melhor resultado. Além disso, se você ou um aliado em alcance curto for reduzido a 0 PV ou morrer, você pode sacrificar sua pedra filosofal para salvar essa criatura. A pedra se estilhaça em uma explosão de energia positiva que fornece ao alvo o efeito básico da magia Segunda Chance (com o efeito adicional de reconstruir o corpo do alvo, caso tenha sido destruído ou desintegrado). Você só pode ter uma pedra filosofal por vez; se perdê-la, pode fabricar outra com uma semana de trabalho e o gasto de T$ 18.000."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Engenhosidade, laboratório pessoal" },
      { level: 2, abilities: "Alquimista iniciado, poder de inventor" },
      { level: 3, abilities: "Mistura básica, poder de inventor" },
      { level: 4, abilities: "Poder de inventor" },
      { level: 5, abilities: "Aplicação rápida, poder de inventor" },
      { level: 6, abilities: "Poder de inventor" },
      { level: 7, abilities: "Magia engarrafada, poder de inventor" },
      { level: 8, abilities: "Odores alquímicos, poder de inventor" },
      { level: 9, abilities: "Fabricar emulsão (1 encanto), poder de inventor" },
      { level: 10, abilities: "Mestre alquimista, poder de inventor" },
      { level: 11, abilities: "Bombardeio eficiente, poder de inventor" },
      { level: 12, abilities: "Poder de inventor" },
      { level: 13, abilities: "Fabricar emulsão (2 encantos), poder de inventor" },
      { level: 14, abilities: "Poder de inventor" },
      { level: 15, abilities: "Poder de inventor" },
      { level: 16, abilities: "Poder de inventor" },
      { level: 17, abilities: "Fabricar emulsão (3 encantos), poder de inventor" },
      { level: 18, abilities: "Poder de inventor" },
      { level: 19, abilities: "Poder de inventor" },
      { level: 20, abilities: "Pedra filosofal, poder de inventor" }
    ],
    extras: [
    {
      title: "Emulsões",
      description: "Uma emulsão é um óleo que concede propriedades mágicas a um item. Usá-la é uma ação padrão e fornece um ou mais encantos para um item até o fim da cena. Conceder um encanto através de uma emulsão não tem custo adicional (além do gasto do óleo) e conta no limite de encantos do item.\nExistem emulsões com um, dois e três encantos. Se um encanto contido em uma emulsão tiver outro como pré-requisito, a emulsão deve incluir também esse pré-requisito. Fabricar uma emulsão segue as mesmas regras para itens alquímicos, mas o custo e a CD dependem da quantidade de encantos contidos no óleo.\n1 Encantamento / T$ 250 / CD 25\n2 Encantamentos / T$ 750 / CD 30\n3 Encantamentos / T$ 1.500 / CD 35\nPor sua volatilidade, que exige do criador manutenção constante, além da necessidade de supervisão em sua aplicação, emulsões não são comercializadas.",
    },
    ]
    },
    { id: "Atleta (Lutador)",
    name: "Atleta (Lutador)",
    powersUrl: "/poderes/lutador",
    origin: "Herois de Arton",
    image: "/classes/atleta.png",
    description: "Embora quase toda aventura em Arton envolva alguma batalha, nem todos os aventureiros estão interessados em combate. Curiosamente, alguns desses são lutadores.\nO atleta é um aventureiro que cultiva seu corpo ao limite, sendo capaz de correr mais rápido, saltar mais alto, nadar por mais tempo que qualquer outro. Não treina técnicas de luta, mas é capaz de erguer pesos impressionantes, tem fôlego para marchar por semanas e realiza acrobacias incríveis. Suas façanhas às vezes parecem não ter objetivo além de provar que ele é capaz de cumpri-las... Mas mais de um atleta já salvou seu grupo ao segurar um teto que desabava, correr por um dia inteiro para pedir reforços ou dobrar as barras da cela onde todos estavam presos.\nAtletas podem ser vaidosos, esculpindo o próprio corpo com a justificativa de aumentar sua força ou resistência. Contudo, também podem ser os aventureiros mais próximos do artoniano médio. Enquanto outros falam de matar e morrer com naturalidade, para o atleta a violência é estranha. Melhor é evitá-la, talvez correndo mais que o inimigo... Ou decidindo qualquer desavença com uma competição amigável.",
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Atletismo (For)", "Luta (For)"],
    optional: {
      skills: ['Acrobacia (Des)', 'Adestramento (Car)', 'Cavalgar (Des)', 'Cura (Sab)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Ofício (Int)', 'Percepção (Sab)', 'Pilotagem (Des)', 'Pontaria (Des)', 'Reflexos (Des)' ],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
        name: "Briga",
        description: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos."
      },
      {
        name: "Façanha Atlética",
        description: "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Força). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        name: "Arremesso Atlético",
        description: "No 2º nível, o alcance de seus ataques com armas de arremesso aumenta em um passo (de curto para médio e de médio para longo). Além disso, quando ataca com uma dessas armas, você pode usar o dano da habilidade Briga no lugar do dano básico da arma. A partir do 10º nível, seus ataques com armas de arremesso contam como ataques desarmados para efeito de suas habilidades de lutador."
      },
      {
        name: "Poder de Lutador",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder de Lutador ou Geral."
      },
      {
        name: "Poderio Muscular",
        description: "No 2º nível, você aprende e pode lançar Primor Atlético, mas apenas em si mesmo. Esta não é uma habilidade mágica e provém de seu extenso treinamento físico"
      },
      {
        name: "Casca Grossa",
        description: "No 3º nível, você soma sua Constituição na Defesa, limitado pelo seu nível e apenas se não estiver usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa."
      },
      {
        name: "Mais Alto e Mais Rápido",
        description: "No 5º nível, seu deslocamento aumenta em +3m. Além disso, você recebe deslocamento de escalada e natação igual à metade de seu deslocamento normal (se já os possui, em vez disso eles aumentam em +3m). Ao contrário do normal, esse deslocamento de natação não fornece a capacidade de respirar debaixo d’água, mas você soma seu nível de atleta no total de rodadas para prender sua respiração."
      },
      {
        name: "Disciplina Atlética",
        description: "A partir do 9º nível, quando falha em um teste de resistência, você pode gastar 2 PM para rolar esse teste novamente, usando Atletismo no lugar da perícia original."
      },
      {
        name: "Corpo Ideal",
        description: "No 20º nível, você atinge o ápice físico de um corpo mortal. Você recebe imunidade a cansaço, condições de metabolismo e veneno, redução de dano 10 e seu dano desarmado e com armas de arremesso aumenta para 2d10 (criaturas Médias)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Briga (1d6), façanha atlética" },
      { level: 2, abilities: "Arremesso atlético, poder de lutador, poderio muscular" },
      { level: 3, abilities: "Casca grossa (Con), poder de lutador" },
      { level: 4, abilities: "Poder de lutador" },
      { level: 5, abilities: "Briga (1d8), mais alto e mais rápido, poder de lutador" },
      { level: 6, abilities: "Poder de lutador" },
      { level: 7, abilities: "Casca grossa (Con+1), poder de lutador" },
      { level: 8, abilities: "Poder de lutador" },
      { level: 9, abilities: "Briga (1d10), disciplina atlética, poder de lutador" },
      { level: 10, abilities: "Poder de lutador" },
      { level: 11, abilities: "Casca grossa (Con+2), poder de lutador" },
      { level: 12, abilities: "Poder de lutador" },
      { level: 13, abilities: "Briga (2d6), poder de lutador" },
      { level: 14, abilities: "Poder de lutador" },
      { level: 15, abilities: "Casca grossa (Con+3), poder de lutador" },
      { level: 16, abilities: "Poder de lutador" },
      { level: 17, abilities: "Briga (2d8), poder de lutador" },
      { level: 18, abilities: "Poder de lutador" },
      { level: 19, abilities: "Casca grossa (Con+4), poder de lutador" },
      { level: 20, abilities: "Corpo Ideal (2d10), poder de lutador" }
    ],
    },
    { id: "Burguês (Nobre)",
    name: "Burguês (Nobre)",
    powersUrl: "/poderes/nobre",
    origin: "Herois de Arton",
    image: "/classes/burgues.png",
    description: "Em muitos lugares de Arton, a estrutura feudal de nobreza e plebe ainda impera. Contudo, nas cidades, o ouro fala mais alto. Esse é o domínio do burguês.\nO burguês é um aventureiro que, assim como o nobre, usa sua posição social para inspirar, liderar e auxiliar seus companheiros. No entanto, não faz isso através de discursos ou brasões — sabe que tudo pode ser comprado, até mesmo a vitória.\nBurgueses são plebeus que ascenderam através de comércio ou de um ofício. Em vez de habitar um castelo, a família do burguês compartilha dos mesmos espaços que cidadãos comuns — talvez morando em uma mansão, mas ainda trabalhando todos os dias. Em vez de uma linhagem que se estende por séculos, o burguês fala sobre seus antepassados que viviam na miséria. Em vez de exigir favores ou serviços, o burguês sabe negociar para conseguir o que deseja.\nQuase todos os burgueses são obcecados com trabalho e medem tudo pelo lucro que pode gerar. Isso porque sabem que apenas seu esforço (e seu dinheiro) os separam da pobreza. Muitos tipos altruístas criticam o burguês por essa postura... Mas talvez uma espada nova ou uma noitada na taverna os convençam do contrário?",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Diplomacia (Car)", "Vontade (Sab)"],
    optional: {
      skills: ['Adestramento (Car)', 'Atuação (Car)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Jogatina (Car)', 'Luta (For)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)'],
      count: 6
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Meios de Produção",
      description: "No início de cada aventura, você recebe T$ 100 em dinheiro, itens mundanos ou poções a sua escolha. Esse valor aumenta para T$ 300 no patamar veterano, T$ 600 no campeão e T$ 1.000 no lenda.",
      },
      {
        name: "Orgulho",
        description: "Quando faz um teste de perícia, você pode gastar uma quantidade de PM à sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        name: "Poder Monetário",
        description: "Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares de ouro (limitada pelo seu Carisma). Cada TO consumido dessa forma paga 1 PM do custo da habilidade. Você pode consumir um número de TO por dia igual ao seu nível. No 5º nível, este limite aumenta para o dobro do seu nível."
      },
      {
        name: "Desmoralizar",
        description: "No 2º nível, você aprende e pode lançar Perdição, e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Entretanto, pode lançá-la apenas em criaturas inteligentes (Int –3 ou maior). Esta não é uma habilidade mágica e provém da sua capacidade de abalar a autoconfiança de outras pessoas. Mental."
      },
      {
        name: "Poder de Nobre",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Nobre ou Poderes Gerais."
      },
      {
        name: "Negociante Nato",
        description: "No 3º nível, quando chega em uma nova comunidade, você pode gastar 1 dia fazendo contatos com o comércio local para fazer um teste de Diplomacia (CD 20). Se passar, pode vender itens nessa comunidade por 60% do seu preço (em vez de 50%). Para cada 10 pontos pelos quais o resultado do teste exceder a CD, você aumenta o preço de venda em +10% (até o máximo de 100%). Esta habilidade não se acumula com barganha, e NPCs ainda estão limitados a comprar somente o que desejam, com o dinheiro que possuem."
      },
      {
        name: "Suborno",
        description: "No 4º nível, você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de instigar os outros com promessas de enriquecimento. A CD para resistir a essa magia aumenta em +2 se você tiver consumido pelo menos 1 tibar de ouro para pagar seu custo."
      },
      {
        name: "Ostentação",
        description: "A partir do 5º nível, você pode se beneficiar de um item vestido adicional. Além disso, a CD para resistir às suas habilidades de burguês aumenta em +1 se você possuir um item banhado a ouro, cravejado de gemas ou de mitral. Esse aumento é cumulativo; possuir três itens diferentes com as três modificações aumenta a CD em +3."
      },
      {
        name: "Novo Rico",
        description: "No 9º nível, para cada item mágico que você estiver vestindo, você recebe +1 PM por nível de poder do item (somente após 1 dia de uso)."
      },
      {
        name: "Magnata",
        description: "No 20º nível, quando você usa Desmoralizar, a penalidade em testes de ataque também se aplica à CD das habilidades das criaturas afetadas. Além disso, sempre que consome um tibar de ouro para pagar o custo em PM de uma habilidade, você recebe 10 PV temporários cumulativos, que duram até o fim da cena."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Meios de produção, orgulho, poder monetário" },
      { level: 2, abilities: "Desmoralizar -1, poder de nobre" },
      { level: 3, abilities: "Negociante nato, poder de nobre" },
      { level: 4, abilities: "Poder de nobre, suborno" },
      { level: 5, abilities: "Ostentação, poder de nobre" },
      { level: 6, abilities: "Desmoralizar -2, poder de nobre" },
      { level: 7, abilities: "Poder de nobre" },
      { level: 8, abilities: "Poder de nobre" },
      { level: 9, abilities: "Novo rico, poder de nobre" },
      { level: 10, abilities: "Desmoralizar -3, poder de nobre" },
      { level: 11, abilities: "Poder de nobre" },
      { level: 12, abilities: "Poder de nobre" },
      { level: 13, abilities: "Poder de nobre" },
      { level: 14, abilities: "Desmoralizar -4, poder de nobre" },
      { level: 15, abilities: "Poder de nobre" },
      { level: 16, abilities: "Poder de nobre" },
      { level: 17, abilities: "Poder de nobre" },
      { level: 18, abilities: "Desmoralizar -5, poder de nobre" },
      { level: 19, abilities: "Poder de nobre" },
      { level: 20, abilities: "Magnata" }
    ],
    },
    { id: "Duelista (Bucaneiro)",
    name: "Duelista (Bucaneiro)",
    powersUrl: "/poderes/bucaneiro",
    origin: "Herois de Arton",
    image: "/classes/duelista.png",
    description: "O duelista é o mais austero e dedicado dos bucaneiros, um esgrimista orgulhoso e honrado, sempre pronto para dedicar sua vida a grandes causas. Um paladino (ou algoz) entre os fanfarrões, está sempre procurando problemas, mas por um ideal maior. Quando ouve alguém falar mal da Rainha-Imperatriz numa taverna, logo chama o biltre para um duelo. Quando nota um guarda intimidando um aldeão, intercede sem pensar duas vezes. Quando há alguém em perigo, corre para socorrê-lo. Ou então, como um vilão megalomaníaco, viaja pelos reinos, derrotando os melhores espadachins de cada local apenas para espalhar sua fama.\nDe qualquer forma, o duelista é qualquer coisa, menos avoado. Para ele, tudo é exagerado e muito sério: apaixona-se perdidamente por alguém que viu de relance numa festa. Toma porres épicos, durante os quais jura embarcar em alguma missão heroica... E cumpre o juramento! Odeia seus inimigos com fervor apavorante e faz questão de enfrentá-los de frente, para que os poltrões vejam a justiça chegando.\nDuelistas muitas vezes não têm grande relação com o mar. Seu terreno são os salões de baile, as ruelas de capitais, os corredores de palácios imponentes. Nesses lugares, sua honra espalhafatosa pode brilhar.",
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For) ou Pontaria (Des)", "Reflexos (Des)"],
    optional: {
      skills: ['Acrobacia (Des)', 'Atletismo (For)', 'Atuação (Car)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pilotagem (Des)', 'Pontaria (Des)'],
      count: 2
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
      name: "Duelo",
      description: "Você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1.",
      },
      {
        name: "Insolência",
        description: "Você soma seu Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Escola de Duelo",
        description: "No 2º nível, escolha uma escola de duelo entre as seguintes. Uma vez feita, essa escolha não pode ser mudada.",
        subAbilities: [
          {
            name: "Escola Ambidestra",
            description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve), você recebe +2 na Defesa e em Reflexos.",
          },
          {
            name: "Escola Clássica",
            description: "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 em rolagens de dano com essa arma.",
          },
          {
            name: "Escola de Tiro",
            description: "Você recebe proficiência com armas de fogo leves e de uma mão. Caso receba essa proficiência novamente, com essas armas você pode usar suas habilidades de bucaneiro normalmente usadas com armas corpo a corpo leves ou ágeis.",
          },
        ]
      },
      {
        name: "Poder de Bucaneiro",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um Poder de Bucaneiro ou Geral"
      },
      {
        name: "Esquiva Sagaz",
        description: "No 3º nível, você recebe +1 na Defesa e em Reflexos. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Truques de Capa.",
        description: "A partir do 4º nível, se estiver usando uma capa esvoaçante (ou outro item semelhante aprovado pelo mestre), você pode gastar 2 PM e a ação indicada para gerar um dos efeitos a seguir.",
        subAbilities: [
          {
            name: "Capa Inoportuna (Livre)",
            description: "Reduz a ação necessária para fintar em um passo até o fim do seu turno.",
          },
          {
            name: "Distração Oportuna (Reação)",
            description: "Quando faz um teste de Reflexos ou Vontade, você recebe +5 nesse teste.",
          },
          {
            name: "Efeito Dramático (Livre)",
            description: "Você recebe +5 em um teste de perícia baseada em Carisma feito nesse turno.",
          },
          {
            name: "Impulso (Livre)",
            description: "Você recebe deslocamento +9m e +5 em Acrobacia e Atletismo por 1 rodada.",
          },
          {
            name: "Paraquedas (Reação)",
            description: "Quando cai, você reduz o dano da queda em 6d6.",
          },
          {
            name: "Rasgar a Capa (Reação)",
            description: "Quando sofre dano, você reduz esse dano à metade. Fazer isso destrói a capa.",
          },
        ]
      },
      {
        name: "Técnica Avançada",
        description: "No 10º nível, você aprende uma técnica de combate conforme sua escola de duelo. Você só pode usar esta habilidade se estiver usando sua escola.",
        subAbilities: [
          {
            name: "Escola Ambidestra",
            description: "Uma vez por rodada, se uma criatura atacá-lo e errar, você pode gastar 1 PM para fazer um ataque corpo a corpo contra essa criatura (desde que ela esteja em seu alcance).",
          },
          {
            name: "Escola Clássica",
            description: "O dano de sua escola aumenta para +5. Além disso, uma vez por rodada, quando usa a ação agredir, você pode gastar 1 PM. Se fizer isso e pelo menos um de seus ataques for um acerto crítico, você pode fazer um ataque adicional nessa ação.",
          },
          {
            name: "Escola de Tiro",
            description: "Seu dano com armas de fogo aumenta em um passo e seu alcance com essas armas aumenta em uma categoria (de curto para médio, de médio para longo).",
          },
          
        ]
      },
      {
        name: "Duelista Lendário",
        description: "No 20º nível, seu domínio de sua escola atinge o ápice. Quando faz um ataque utilizando sua escola de duelo, você pode gastar 1 PM para rolá-lo novamente. Quando um oponente o ataca enquanto você está usando sua escola de duelo, você pode gastar 1 PM para forçá-lo a rolar o teste novamente (apenas uma vez por ataque)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Duelo +2, insolência" },
      { level: 2, abilities: "Escola de duelo, poder de bucaneiro" },
      { level: 3, abilities: "Esquiva sagaz +1, poder de bucaneiro" },
      { level: 4, abilities: "Poder de bucaneiro, truques de capa" },
      { level: 5, abilities: "Poder de bucaneiro" },
      { level: 6, abilities: "Duelo +3, poder de bucaneiro" },
      { level: 7, abilities: "Esquiva sagaz +2, poder de bucaneiro" },
      { level: 8, abilities: "Poder de bucaneiro" },
      { level: 9, abilities: "Poder de bucaneiro" },
      { level: 10, abilities: "Poder de bucaneiro, técnica avançada" },
      { level: 11, abilities: "Duelo +4, esquiva sagaz +3, poder de bucaneiro" },
      { level: 12, abilities: "Poder de bucaneiro" },
      { level: 13, abilities: "Poder de bucaneiro" },
      { level: 14, abilities: "Poder de bucaneiro" },
      { level: 15, abilities: "Esquiva sagaz +4, poder de bucaneiro" },
      { level: 16, abilities: "Duelo +5, poder de bucaneiro" },
      { level: 17, abilities: "Poder de bucaneiro" },
      { level: 18, abilities: "Poder de bucaneiro" },
      { level: 19, abilities: "Esquiva sagaz +5, poder de bucaneiro" },
      { level: 20, abilities: "Duelista lendário, poder de bucaneiro" }
    ],
    },
    { id: "Ermitão (Druida)",
    name: "Ermitão (Druida)",
    powersUrl: "/poderes/druida",
    origin: "Herois de Arton",
    image: "/classes/ermitao.png",
    description: "A maioria dos druidas é reclusa, preferindo a companhia de animais e plantas à de outros seres inteligentes. Contudo, o ermitão leva isso ao extremo. Sem nenhuma preocupação com a sociedade formal ou mesmo com os outros habitantes dos ermos, os ermitões são quase animais em forma bípede.\nFicam longos anos sem falar com ninguém, descartam completamente a higiene e o asseio. Mal usam roupas, deixam suas barbas e cabelos crescer até que estejam se arrastando no chão. Em seus corpos vivem fungos, plantas e até mesmo pequenos animais. Estes servos da natureza não se importam com insetos compartilhando de seu sangue, ou mesmo com pássaros fazendo ninhos em sua cabeça.\nContudo, não é só a aparência e os hábitos de um druida ermitão que o diferenciam — também seus poderes e responsabilidades. O ermitão toma conta de um local específico, como um bosque, uma montanha ou um vale. Prefere ficar por lá, embora saia para se aventurar quando esse local e a natureza em geral são ameaçados. De qualquer forma, o ermitão é o mais radical dos druidas. Não vê nenhum tipo de urbanização com bons olhos e não faz nenhuma concessão a “manias idiotas” como vestir roupas ou tomar banho…",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Sobrevivência (Sab)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Cura (Sab)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Luta (For)', 'Misticismo (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Religião (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Devoto Fiel",
      description: "Você se torna devoto de um deus disponível para druidas (Allihanna, Megalokk ou Oceano). Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um.",
      },
      {
        name: "Empatia Selvagem",
        description: "Você pode se comunicar com animais, criaturas vegetais não inteligentes (Int –4 ou –5) e espíritos, por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com eles para mudar atitude e persuasão."
      },
      {
        name: "Magias",
        description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM. "
      },
      {
        name: "Poder de Druida",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Druida ou Gerais.Não pode escolher o poder Forma Selvagem ou poderes que o tenham como pré-requisito."
      },
      {
        name: "Sítio Sagrado",
        description: "No 3º nível, você assume um local sagrado para sua divindade (veja abaixo)."
      },
      {
        name: "Vínculo com a Terra",
        description: "No 5º nível, quando você estiver em um terreno de um dos tipos de seu sítio sagrado, suas magias custam –1 PM (cumulativo com outras reduções)."
      },
      {
        name: "Temperado pelo Clima",
        description: "No 11º nível, você recebe RD 5 contra dano dos tipos correspondentes aos terrenos associados ao seu sítio sagrado: aquático (eletricidade), ártico (frio), colina (impacto), deserto (fogo), floresta (corte), montanha (perfuração), pântano (ácido), planície (luz) e subterrâneo (trevas)."
      },
      {
        name: "Eixo de Pedras",
        description: "No 20º nível, você cria um eixo de pedras ritualísticas em seu sítio sagrado. Uma vez por aventura, você pode lançar no eixo de pedras uma quantidade de magias cujo custo em PM total somado seja igual ao seu nível + sua Sabedoria. Essas magias devem ter execução de movimento, padrão ou completa. Até o fim da aventura, se estiver em um terreno de um dos tipos associados ao seu sítio sagrado, uma vez por rodada você pode descarregar uma dessas magias como ação livre sem pagar seu custo."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Devoto fiel, empatia selvagem, magias (1º círculo)" },
      { level: 2, abilities: "Poder de druida" },
      { level: 3, abilities: "Poder de druida, sítio sagrado" },
      { level: 4, abilities: "Poder de druida" },
      { level: 5, abilities: "Poder de druida, vínculo com a terra" },
      { level: 6, abilities: "Magias (2º círculo), poder de druida" },
      { level: 7, abilities: "Poder de druida" },
      { level: 8, abilities: "Poder de druida" },
      { level: 9, abilities: "Poder de druida" },
      { level: 10, abilities: "Magias (3º círculo), poder de druida" },
      { level: 11, abilities: "Poder de druida, temperado pelo clima" },
      { level: 12, abilities: "Poder de druida" },
      { level: 13, abilities: "Poder de druida" },
      { level: 14, abilities: "Magias (4º círculo), poder de druida" },
      { level: 15, abilities: "Poder de druida" },
      { level: 16, abilities: "Poder de druida" },
      { level: 17, abilities: "Poder de druida" },
      { level: 18, abilities: "Poder de druida" },
      { level: 19, abilities: "Poder de druida" },
      { level: 20, abilities: "Eixo de pedras, poder de druida" }
    ],
    extras: [
    {
      title: "O Sítio Sagrado",
      description: "Uma área erma com 5 km de raio, o sítio sagrado é um refúgio para o ermitão e fornece diversas habilidades a ele, algumas das quais o acompanham para além das fronteiras deste local. Caso o sítio sagrado seja destruído, você perde todos os seus PM e só pode recuperá-los ao criar um novo sítio. Fazer isso ocupa um tempo entre aventuras.",
      sections: [
      { title: "Características Base",
        content: [
          { name: "Aliados da Natureza", description: " Dentro do sítio, criaturas não inteligentes (Int –4 ou –5) têm atitude melhor com você, conforme seu tipo: no 7º nível, animais são amistosos e espíritos e monstros, indiferentes. No 15º nível suas categorias de atitude melhoram um passo. Você pode comandar criaturas prestativas para lutar ao seu lado e ajudar a defender o sítio sagrado, mas elas não irão segui-lo para fora dele. O mestre decide quais criaturas estão presentes no sítio (de forma geral, a qualquer momento há um número de criaturas com ND total somado igual ao seu nível)." },
          { name: "Terreno Associado", description: " Ao receber seu sítio sagrado, escolha um terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície ou subterrâneo. Esse será o tipo de terreno associado ao seu sítio sagrado. Sempre que estiver em um terreno desse tipo, você soma sua Sabedoria (mínimo +1) em Furtividade, Percepção, Misticismo, Religião e Sobrevivência. No 7º nível, e a cada quatro níveis subsequentes, escolha mais um tipo de terreno para associar ao seu sítio ou aumente o bônus de perícias de um tipo de terreno já escolhido em +2. Você também é capaz de atingir uma conexão mais forte com sua divindade dentro do sítio sagrado. Dentro dele, seu redutor de PM por Vínculo com a Terra muda para –2." },
          { name: "Caminhos Sagrados", description: " Quando está em um terreno de um tipo associado ao seu sítio, você não sofre redução de deslocamento por terreno difícil natural e a CD para rastreá-lo aumenta em +10." },
          { name: "Base", description: " O sítio sagrado conta como uma base básica. Você paga apenas a metade do custo para aumentar o porte dessa base e para construir cômodos nela." },
        ]
      },      
      ]
    },
    ]
    },
    { id: "Inovador (Guerreiro)",
    name: "Inovador (Guerreiro)",
    powersUrl: "/poderes/guerreiro",
    origin: "Herois de Arton",
    image: "/classes/inovador.png",
    description: "Elfos arqueiros. Anões com machados. Cavaleiros com armaduras pesadas. Arton é repleta desses tipos. O guerreiro inovador está determinado a não ser um deles.\nMuito mais uma filosofia de vida do que uma forma de combater, o estilo inovador não é ensinado em academias ou exércitos, ou mesmo passado de mestre a discípulo. Cada guerreiro inovador desenvolve o estilo por si só, rejeitando o que já existe e procurando se destacar. Inovadores usam armas esquisitas, exibem manobras complicadas, vestem armaduras chamativas... Nada é simples, direto ou comum — o inovador é o mestre do inédito, o centro das atenções na batalha. Alguns adotam este estilo por simples vontade de se mostrar. Outros, porque sua imprevisibilidade é uma grande vantagem em combate — qualquer um está pronto para enfrentar um guerreiro usando espada e escudo, mas ninguém está preparado para o inovador.\nInovadores costumam ser jovens. Quando os veteranos veem sua forma de lutar, balançam a cabeça e suspiram de desaprovação, lembrando dos velhos tempos. É raro ver um guerreiro inovador de mais idade. Com o tempo, suas inovações são copiadas por outros e se tornam comuns. Esse é o maior medo de muitos inovadores: ver sua fama transformar seu estilo em clichê.",
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Luta (For) ou Pontaria (Des)", "Acrobacia (Des)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Conhecimento (Int)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Investigação (Int)', 'Luta (For)', 'Ofício (Int)', 'Pontaria (Des)', 'Reflexos (Des)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos",
    abilities: [
      {
      name: "Do Bom e do Melhor",
      description: "Você começa o jogo com uma arma, armadura ou escudo superior a sua escolha, de até T$ 500. Entretanto, você é considerado não proficiente em qualquer arma, armadura ou escudo que não seja superior ou mágico.",
      },
      {
        name: "Sequência Especial",
        description: "Você pode gastar 2 PM para iniciar uma sequência de movimentos inovadores. Quando faz isso, a cada vez que ataca com uma arma que ainda não tenha usado nessa sequência, você recebe um bônus de +1 em testes de ataque e rolagens de dano (cumulativo até +2). A cada 4 níveis, você pode gastar +1 PM para aumentar o limite desses bônus em +2. A sequência termina ao fim da cena ou se você ficar 1 rodada sem trocar pelo menos uma arma."
      },
      {
        name: "Bombardeio Sequencial",
        description: "No 2º nível, você pode usar sua Sequência Especial ao usar itens alquímicos ou poções (nesse caso, aplica o bônus de ataque acumulado à CD para resistir ao item)."
      },
      {
        name: "Poder de Guerreiro",
        description: " No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de guerreiro ou geral."
      },
      {
        name: "Acrobacia Defensiva",
        description: "A partir do 3º nível, quando sofre dano, você pode gastar 2 PM para executar uma pirueta defensiva. Você faz um teste de Acrobacia e subtrai o resultado desse teste do dano sofrido."
      },
      {
        name: "Domínio Excêntrico",
        description: "A partir do 4° nível, sempre que passar pelo menos uma semana carregando uma arma exótica ou de fogo superior ou mágica, você recebe proficiência nela."
      },
      {
        name: "Técnica Revolucionária",
        description: "A partir do 7° nível, você pode gastar 2 PM para, até o fim do combate, usar armas que esteja empunhando como se elas tivessem uma das seguintes habilidades de arma, a sua escolha: adaptável, ágil, alongada, dupla (use as estatísticas da arma em ambas as pontas) ou versátil (para uma manobra escolhida ao usar esta habilidade). Esse efeito termina se você ativar sua Técnica Revolucionária novamente."
      },
      {
        name: "Estilo Único",
        description: "No 20º nível, você consolida seu próprio estilo de combate. Escolha dois poderes de guerreiro ou de combate que possua. Para esses poderes, você ignora todos os requisitos e restrições relacionados a armas, incluindo propósito, empunhadura, características e habilidades das armas. Por exemplo, você pode usar Estilo de Duas Mãos com armas leves, Estilo de Arremesso com uma arma de duas mãos ou até Esgrimista com pistolas! O mestre tem a palavra final sobre como os poderes interagem entre si."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Do bom e do melhor, sequência especial +2" },
      { level: 2, abilities: "Bombardeio sequencial, poder de guerreiro" },
      { level: 3, abilities: "Acrobacia defensiva, poder de guerreiro" },
      { level: 4, abilities: "Domínio excêntrico, poder de guerreiro" },
      { level: 5, abilities: "Poder de guerreiro, sequência especial +4" },
      { level: 6, abilities: "Poder de guerreiro" },
      { level: 7, abilities: "Poder de guerreiro, técnica excêntrica" },
      { level: 8, abilities: "Poder de guerreiro" },
      { level: 9, abilities: "Poder de guerreiro, sequência especial +6" },
      { level: 10, abilities: "Poder de guerreiro" },
      { level: 11, abilities: "Poder de guerreiro" },
      { level: 12, abilities: "Poder de guerreiro" },
      { level: 13, abilities: "Poder de guerreiro, sequência especial +8" },
      { level: 14, abilities: "Poder de guerreiro" },
      { level: 15, abilities: "Poder de guerreiro" },
      { level: 16, abilities: "Poder de guerreiro" },
      { level: 17, abilities: "Poder de guerreiro, sequência especial +10" },
      { level: 18, abilities: "Poder de guerreiro" },
      { level: 19, abilities: "Poder de guerreiro" },
      { level: 20, abilities: "Estilo único, poder de guerreiro" }
    ],
    },
    { id: "Machado de Pedra (Bárbaro)",
    name: "Machado de Pedra (Bárbaro)",
    powersUrl: "/poderes/barbaro",
    origin: "Herois de Arton",
    image: "/classes/machadodepedra.png",
    description: "Os bárbaros do machado de pedra são os mais primitivos de Arton. Pertencem a comunidades que nunca tiveram contato com forasteiros — não dominam qualquer idioma, não sabem forjar metal, não plantam ou criam animais. A maioria vive em cavernas ou ao relento, viajando constantemente dentro de uma pequena região. Os mais avançados chegam a construir ocas de barro que não resistem à primeira chuva forte.\nEmbora seja extremamente rústico, o bárbaro do machado de pedra não é menos inteligente do que um membro de qualquer outra comunidade — apenas não possui certos conhecimentos. Além disso, é um combatente temível. Incapaz de usar armas “modernas”, confia em implementos de pedra e osso, além da pura força bruta. Sem as amarras da sociedade, sua fúria é suprema. Sua pele coberta de cicatrizes parece couro, sendo capaz de resistir a golpes que matariam outros.\nQuando um bárbaro do machado de pedra deixa sua comunidade para se aventurar, torna-se o mais leal e aguerrido dos companheiros. Nem pensa em traição, pois foi acostumado a depender de aliados para sobreviver. Não conhece a ganância e muitas vezes nem mesmo exige tesouro — estando alimentado e em segurança, o bárbaro do machado de pedra está feliz.",
    characteristics: {
      pvBase: "24 + Constituição",
      pvPerLevel: "6 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Fortitude (Con)", "Luta (For)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Sobrevivência (Sab)', 'Vontade (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Escudos",
    abilities: [
      {
      name: "Fúria",
      description: "Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil.",
      },
      {
        name: "Grunhidos",
        description: "Você conhece apenas o idioma rústico da pequena comunidade onde viveu e nenhum outro. Você não só é incapaz de compreender outros dialetos como não se importa com isso, comunicando-se com grunhidos e sons simples. Contudo, você conhece uma palavra no idioma valkar (o mais comum de Arton) por nível de machado de pedra."
      },
      {
        name: "Machado de Pedra",
        description: "Você não recebe proficiência com armas simples. Você sabe usar apenas adaga, azagaia, clava, funda, lança, machadinha e tacape. No 9° nível, aprende a usar uma arma simples ou marcial a sua escolha. Entretanto, quando ataca com uma arma natural, um ataque desarmado ou uma dessas armas, você recebe +1 no teste de ataque e na rolagem de dano."
      },
      {
        name: "Tanga de Peles",
        description: "Você não recebe proficiência com armaduras leves. Entretanto, se não estiver usando armadura, você soma sua Constituição na Defesa. Além disso, no 3º nível, e a cada quatro níveis seguintes, você recebe +1 na Defesa."
      },
      {
        name: "Fúria Primitiva",
        description: "A partir do 2º nível, se não estiver usando armadura e estiver empunhando uma das armas de sua habilidade Machado de Pedra, o custo de sua Fúria é reduzido em –1 PM. Além disso, uma vez por cena, quando entra em fúria, você recebe uma quantidade de PV temporários igual ao seu nível + sua Constituição."
      },
      {
        name: "Poder de Bárbaro",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de bárbaro ou gerais."
      },
      {
        name: "Instinto Selvagem",
        description: "No 3º nível, você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1."
      },
      {
        name: "Resiliência Primal",
        description: "A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 3. A cada três níveis, sua RD aumenta em 3, até um máximo de RD 15 no 17º nível."
      },
      {
        name: "Fúria Rústica",
        description: "No 20º nível, quando entra em fúria, você pode gastar 5 PM. Se fizer isso, durante a fúria você recebe Cura Acelerada 10 (cumulativo com outras Curas Aceleradas) e, quando faz a ação agredir, pode fazer um ataque desarmado adicional."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Fúria +2, grunhidos, machado de pedra, tanga de peles (Con)" },
      { level: 2, abilities: "Fúria primitiva, poder de bárbaro" },
      { level: 3, abilities: "Instinto selvagem +1, poder de bárbaro, tanga de peles (Def +1)" },
      { level: 4, abilities: "Poder de bárbaro" },
      { level: 5, abilities: "Poder de bárbaro, resiliência primal 3" },
      { level: 6, abilities: "Fúria +3, poder de bárbaro" },
      { level: 7, abilities: "Poder de bárbaro, tanga de peles (Def +2)" },
      { level: 8, abilities: "Poder de bárbaro, resiliência primal 6" },
      { level: 9, abilities: "Instinto selvagem +2, poder de bárbaro" },
      { level: 10, abilities: "Poder de bárbaro" },
      { level: 11, abilities: "Fúria +4, poder de bárbaro, resiliência primal 9, tanga de peles (Def +3)" },
      { level: 12, abilities: "Poder de bárbaro" },
      { level: 13, abilities: "Poder de bárbaro" },
      { level: 14, abilities: "Poder de bárbaro, resiliência primal 12" },
      { level: 15, abilities: "Instinto selvagem +3, poder de bárbaro, tanga de peles (Def +4)" },
      { level: 16, abilities: "Fúria +5, poder de bárbaro" },
      { level: 17, abilities: "Poder de bárbaro, resiliência primal 15" },
      { level: 18, abilities: "Poder de bárbaro" },
      { level: 19, abilities: "Poder de bárbaro, tanga de peles (Def +5)" },
      { level: 20, abilities: "Fúria rústica, poder de bárbaro" }
    ],
    },
    { id: "Magimarcialista (Bardo)",
    name: "Magimarcialista (Bardo)",
    powersUrl: "/poderes/bardo",
    origin: "Herois de Arton",
    image: "/classes/magimarcialista.png",
    description: "Os bardos magimarcialistas abandonam quase todas as funções tradicionais do bardo, abrindo mão de seu repertório de lendas e histórias, ignorando talento musical, negando-se a inspirar companheiros, desprezando furtividade e habilidades sociais para se concentrar em apenas uma coisa: combate. O bardo magimarcialista une desde cedo treinamento com armas e magia destrutiva, tornando-se um especialista em ambos. Também é capaz de curar seus companheiros de maneira eficaz e estratégica.\nEm vez de acompanhar heróis para registrar seus feitos, os bardos magimarcialistas desejam ser eles mesmos os heróis! As canções serão compostas sobre eles e serão seus nomes que ficarão na história. São tipos espalhafatosos, cheios de truques e pose. Costumam vestir roupas chamativas, de cores fortes como vermelho ou roxo, com grandes capas coloridas e chapelões emplumados. São instruídos, mas não exatamente sábios — em vez de aprender história, conhecem fórmulas e segredos de combate.\nA maioria dos bardos típicos torce o nariz para os magimarcialistas. Dizem que eles estão subvertendo uma tradição honrada, mantendo apenas suas partes mais superficiais e utilitárias. Mas os bardos magimarcialistas riem disso, enquanto se preparam para o próximo combate, aventura ou explosão exuberante.",
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Atuação (Car)", "Luta (For)"],
    optional: {
      skills: [      
        'Acrobacia (Des)', 'Atletismo (For)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Jogatina (Car)', 'Misticismo (Int)', 'Reflexos (Des)'
      ],
      count: 6
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
      name: "Cadência Magimarcial",
      description: "Sempre que lança uma magia de bardo você recebe uma carga arcana e, sempre que faz a ação agredir, recebe uma carga marcial. Você pode acumular um máximo de cargas de cada tipo igual ao seu Carisma e elas duram até o fim da cena.",
      },
      {
        name: "Magias",
        description: "Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM."
      },
      {
        name: "Magificação",
        description: "Se tiver pelo menos 1 carga arcana e 1 carga marcial, você recebe +2 em testes de ataque e rolagens de dano e é considerado sob Inspiração para efeitos baseados nisso. A cada cinco níveis, esses bônus aumentam em +1."
      },
      {
        name: "Bravado Magimarcial",
        description: "No 2º nível, quando lança uma magia, você pode gastar 1 carga marcial para reduzir seu custo em –1 PM (cumulativo com outras reduções) e, quando faz um ataque, pode gastar 1 carga arcana para receber +1d6 na rolagem de dano."
      },
      {
        name: "Poder de Bardo",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder"
      },
      {
        name: "Dança Defensiva",
        description: "No 3º nível, quando faz um teste de resistência, você pode gastar 1 carga marcial para receber +5 nesse teste e, quando sofre dano, pode gastar 1 carga arcana para receber redução de dano 10 contra esse dano."
      },
      {
        name: "Arte Sublime",
        description: "A partir do 7º nível, quando usa Bravado Magimarcial ou Dança Defensiva, você pode gastar uma carga adicional do tipo exigido para dobrar seu efeito."
      },
      {
        name: "Crescendo Vitorioso",
        description: "No 20° nível, no início de cada combate, você recebe 1 carga arcana e 1 carga marcial. Além disso, você soma seu total de cargas marciais na CD para resistir às suas habilidades de bardo e o total de suas cargas arcanas em seus testes de ataque e rolagens de dano."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Cadência magimarcial, magnificação +2, magias (1º círculo)" },
      { level: 2, abilities: "Bravado magimarcial, poder de bardo" },
      { level: 3, abilities: "Dança defensiva, poder de bardo" },
      { level: 4, abilities: "Poder de bardo" },
      { level: 5, abilities: "Poder de bardo" },
      { level: 6, abilities: "Magias (2º círculo), magnificação +3, poder de bardo" },
      { level: 7, abilities: "Arte sublime, poder de bardo" },
      { level: 8, abilities: "Poder de bardo" },
      { level: 9, abilities: "Poder de bardo" },
      { level: 10, abilities: "Magias (3º círculo), poder de bardo" },
      { level: 11, abilities: "Magnificação +4, poder de bardo" },
      { level: 12, abilities: "Poder de bardo" },
      { level: 13, abilities: "Poder de bardo" },
      { level: 14, abilities: "Magias (4º círculo), poder de bardo" },
      { level: 15, abilities: "Poder de bardo" },
      { level: 16, abilities: "Magnificação +5, poder de bardo" },
      { level: 17, abilities: "Poder de bardo" },
      { level: 18, abilities: "Poder de bardo" },
      { level: 19, abilities: "Poder de bardo" },
      { level: 20, abilities: "Crescendo vitorioso, poder de bardo" }
    ],
    },
    { id: "Necromante (Arcanista)",
    name: "Necromante (Arcanista)",
    powersUrl: "/poderes/arcanista",
    origin: "Herois de Arton",
    image: "/classes/necromante.png",
    description: "Necromantes são arcanistas que estudam a vida, a morte e todos os estados intermediários. São frequentemente associados à vilania, pois não costumam deixar ética e consciência refrearem sua sede de poder.\nContudo, a necromancia não é inerentemente maligna; apenas lida com tabus e assuntos que repugnam os leigos. O necromante é um estudioso do proibido, um pesquisador que não permite que nada interfira com seu conhecimento. Para um necromante, mortos-vivos são naturais e a morte faz parte do cotidiano. E se ele precisa matar para obter novos dados... Bem, sacrifícios são inevitáveis, não?\nNecromantes desprezam magias que afetam as emoções dos vivos — enxergando-os como criaturas imperfeitas em constante decadência, os necromantes não se dedicam a controlá-los e manipulá-los. Embora seja frequentemente um tipo sinistro e sombrio (algo que afasta curiosos), o necromante também pode ser otimista e fortemente apegado àqueles que ama. Não se conforma com a perda de amigos e familiares, procura preservar todos como mortos-vivos.\nInfelizmente, mesmo os necromantes que não são vilões veem-se como alvos de pretensos heróis e precisam se defender. Isso às vezes os leva ao caminho da vilania real.",
    characteristics: {
    pvBase: "8 + Constituição",
    pvPerLevel: "2 + Constituição",
    pmPerLevel: "6 PM por nível"
  },
    skills: {
    mandatory: [" Misticismo (Int)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Enganação (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Caminho do Necromante",
      description: "Você lança magias por meio de uma conexão com a morte. Você pode aprender magias de necromancia divinas como se fossem arcanas, mas não pode aprender magias de encantamento e pelo menos metade das magias que aprender devem ser de necromancia. Além disso, para lançar suas magias você precisa primeiro acessar sua conexão com a morte. Para isso, você deve gastar uma quantidade de PV igual ao círculo máximo de magias que deseja usar (limitado pelo círculo máximo a que tem acesso). Uma vez ativada, a conexão se mantém até o fim da cena. Seu atributo-chave para magias é Inteligência."
      },
      {
        name: "Falar com Mortos",
        description: "Você pode se comunicar com mortos-vivos por meio de seus poderes arcanos. Você pode usar Misticismo com mortos-vivos para mudar atitude e persuasão. A partir do 3º nível, você pode gastar uma ação padrão e 1 PM para conversar com um cadáver em alcance curto. Esta habilidade funciona como a magia Voz Divina, com o aprimoramento de conceder um pouco de vida a um cadáver."
      },
      {
      name: "Magias",
      description: "Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma seu atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia."
    },
    {
      name: "Poder de Arcanista",
      description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Arcanista ou Poder Geral."
    },
      {
        name: "Animar Cadáver",
        description: "No 2º nível, você pode gastar uma ação completa e 3 PM para animar o cadáver de uma criatura Pequena, Média ou Grande em alcance curto. O cadáver se torna um parceiro iniciante de um tipo a sua escolha, adequado ao seu tamanho e anatomia, que não conta em seu limite de parceiros (mas você só pode ter um parceiro cadáver por vez). Quando sofre dano, você pode sacrificar o parceiro cadáver para reduzir esse dano à metade. Cadáveres sacrificados não podem ser reanimados. A partir do 7º nível, quando você usa esta habilidade, pode gastar 6 PM para criar um parceiro veterano e, a partir do 11º nível, pode gastar 9 PM para criar um parceiro mestre."
      },
      {
        name: "Necrologia",
        description: "No 3º nível, você recebe +2 em Cura, Fortitude e na CD para resistir às suas magias de necromancia. A cada cinco níveis, esse bônus aumenta em +1."
      },
      {
        name: "Distorção Necrótica",
        description: "No 4º nível, escolha uma de suas magias conhecidas de 1º círculo que não seja de necromancia. A escola dessa magia muda para necromancia. Essa mudança não tem efeitos mecânicos (além da troca de escola), mas altera a aparência e natureza de seu efeito (por exemplo, uma Armadura Arcana de necromancia cria uma armadura de ossos ou de sombras, enquanto uma magia Concentração de Combate manifesta espíritos dos mortos que o aconselham durante a luta)."
      },
      {
        name: "Necropotência",
        description: "No 5º nível, quando estabelece sua conexão com a morte, você pode gastar o dobro de PV. Se fizer isso, sempre que reduzir um ou mais inimigos vivos a 0 PV ou menos com uma magia de necromancia, você recebe 2 PM temporários. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no fim da cena."
      },
      {
        name: "Domínio Sobre a Morte",
        description: "No 20° nível, você domina as fronteiras da vida e da morte. O custo em PM de suas magias de necromancia é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo). Além disso, quando você mata uma criatura viva com uma magia de necromancia, pode gastar 2 PM para erguer seu cadáver como um morto-vivo sob seu controle. Isso funciona como a magia Servo Morto-Vivo, mas você escolhe o tipo de parceiro entre quaisquer aprimoramentos da magia e não precisa pagar seu componente material. Mortos-vivos erguidos dessa forma não contam em seu limite de parceiros durante a cena em que são criados (ao fim da cena, mortos-vivos excedentes, a sua escolha, voltar a ser apenas cadáveres)."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Caminho do necromante, falar com mortos, magias (1º círculo)" },
      { level: 2, abilities: "Animar cadáver, poder de arcanista" },
      { level: 3, abilities: "Necrologia +2, poder de arcanista" },
      { level: 4, abilities: "Distorção necrótica, poder de arcanista" },
      { level: 5, abilities: "Magias (2º círculo), necropotência, poder de arcanista" },
      { level: 6, abilities: "Poder de arcanista" },
      { level: 7, abilities: "Poder de arcanista" },
      { level: 8, abilities: "Necrologia +3, poder de arcanista" },
      { level: 9, abilities: "Magias (3º círculo), poder de arcanista" },
      { level: 10, abilities: "Poder de arcanista" },
      { level: 11, abilities: "Poder de arcanista" },
      { level: 12, abilities: "Poder de arcanista" },
      { level: 13, abilities: "Magias (4º círculo), necrologia +4, poder de arcanista" },
      { level: 14, abilities: "Poder de arcanista" },
      { level: 15, abilities: "Poder de arcanista" },
      { level: 16, abilities: "Poder de arcanista" },
      { level: 17, abilities: "Magias (5º círculo), poder de arcanista" },
      { level: 18, abilities: "Necrologia +5, poder de arcanista" },
      { level: 19, abilities: "Poder de arcanista" },
      { level: 20, abilities: "Domínio sobre a morte, poder de arcanista" }
    ],
    extras: [
      {
    title: "Além da Vida e da Morte",
    description: "Para muitos necromantes, o objetivo final de sua arte não deveria ser outro que não alcançar a eternidade por meio da conquista da morte. Para esses, a melhor (ou talvez única) forma de alcançar esse objetivo é a transformação em um poderoso morto-vivo. Um lich! O conhecimento sobre o ritual necessário para esta transformação é representado por um poder de classe exclusivo: Ritual do Lich.",
    sections: [
      {
        title: "O Poder Necessário",
        content: [
          {
            name: "Ritual do Lich",
            description: "Você aprendeu o Ritual do Lich e pode executar seus passos (veja a seção abaixo). Pré-requisitos: Celebrar Ritual, Escrever Pergaminho, Preparar Poção, 17º nível de necromante."
          }
        ]
      },
      {
        title: "O Ritual do Lich",
        intro: "O Ritual do Lich representa o auge do conhecimento mágico de um necromante. É o resultado de anos de estudos, pesquisas e experimentos, sendo conhecido por poucos. Os passos deste ritual são descritos a seguir.",
        content: [
          {
            name: "Passo 1: O Filactério",
            description: "“Para viver para sempre, a alma não pode ser destruída”. Baseado nesse princípio, o candidato a lich deve possuir um filactério, um local seguro no qual poderá guardar sua alma. O filactério típico é uma caixa de metal selada, repleta de tiras de pergaminhos com escritos mágicos, mas pode ser quase qualquer objeto. Independente de sua forma, o filactério custa T$ 20.000. Com este item em mãos, você deve lançar as seguintes magias, nessa ordem: Profanar (com o aprimoramento que torna permanente), Ligação Sombria (como parte do ritual, pode ser lançada tendo como alvo o filactério), Roubar a Alma (em si mesmo) e Tranca Arcana (no filactério). As magias não surtem efeito imediatamente, apenas no fim do ritual."
          },
          {
            name: "Passo 2: A Poção do Sono Eterno",
            description: "Com um receptáculo em mãos, você deve se concentrar no próximo passo: morrer. Mas não de qualquer maneira — apenas através da poção do sono eterno. Esta poção especial contém vários tipos de venenos: beladona, cicuta, essência de sombra e pó de lich (uma dose de cada), que são usados como matéria-prima, e fabricá-la exige um teste de Ofício (alquimista) contra CD 35. Com a poção em mãos, você deve lançar as seguintes magias, nessa ordem: Erupção Glacial, Rogar Maldição e Servo Morto-Vivo. Você deve esperar uma noite de lua minguante para beber a poção, pois esta é uma etapa que não pode ser testemunhada por Lena."
          },
          {
            name: "Passo 3: O Mago Imortal",
            description: "Para você, a poção do sono eterno é letal. Após sua morte, seu corpo fica inerte e sua alma é sugada para o filactério (assim, um candidato que não tenha realizado o primeiro passo do ritual simplesmente morre). Sem um corpo físico, sua consciência vaga pelos reinos dos deuses. Depois de uma semana, sua mente retorna para seu corpo — mas o tempo já cobrou seu preço. Seu corpo está seco, enrugado, com olhos vazios e ossos salientes. Você não respira mais e não tem sangue, tendo se tornado um morto-vivo. Este é um ritual complexo e a preparação e execução dele provavelmente terá tomado boa parte de seu tempo de vida. Mas isso não é um problema: agora você é um lich e não precisa mais se preocupar nem com tempo, nem com vida."
          }
        ]
      },
      {
        title: "Características da Forma de Lich",
        intro: "Em termos de regras, ao completar o ritual, você adquire as características a seguir:",
        content: [
          {
            name: "Atributos",
            description: "Inteligência +1, Sabedoria +1, Carisma +1, Constituição –1."
          },
          {
            name: "Morto-Vivo",
            description: "Seu tipo muda para morto-vivo. Você recebe visão no escuro e imunidade a efeitos de cansaço e metabólicos, eletricidade, frio, metamorfose, trevas e veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV."
          },
          {
            name: "Cadáver Resiliente",
            description: "Você recebe +5 na Defesa e redução de dano 10/mágico."
          },
          {
            name: "Aura de Medo",
            description: "Você recebe este poder (Tormenta20, p. 132, mas ele não é um poder concedido). Se já o possui, a CD para resistir a ele aumenta em +2."
          },
          {
            name: "Toque Gélido",
            description: "Quando faz um ataque desarmado, você pode gastar 3 PM para envolver sua mão em frio sobrenatural. Se fizer isso e acertar o ataque, em vez do dano normal você causa 6d6+6 pontos de dano de frio e a vítima fica paralisada por 1 rodada (apenas uma vez por cena, Fort CD Int evita)."
          },
          {
            name: "Filactério",
            description: "Se for morto, você retorna completamente recuperado em 1d10 dias. A única forma de derrotá-lo permanentemente é destruir seu filactério. Você pode deixar o filactério em qualquer lugar, mas você e ele precisam estar no mesmo Plano. O filactério possui RD 30 e PV iguais aos seus. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM por descanso."
          },
          {
            name: "Preço da Não Vida",
            description: "Você precisa passar 8 horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (você não é afetado por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome."
          }
        ]
      }
    ]
  }
]
    },
    { id: "Santo (Paladino)",
    name: "Santo (Paladino)",
    powersUrl: "/poderes/paladino",
    origin: "Herois de Arton",
    image: "/classes/santo.png",
    description: "Paladinos são campeões do bem, mas ainda são pessoas. Têm ambições, desejos e fraquezas. Às vezes escorregam. Têm vontade própria e opiniões individuais.\nExceto o paladino santo.\nO santo é o mais altruísta dos paladinos. É menos uma pessoa e mais um veículo para a vontade de seu deus, abrindo mão de boa parte de seu livre arbítrio. Não hesita em sacrificar a própria vida para cumprir uma única ordem divina, mesmo que não a compreenda. O santo não quer nada, não realmente, e acha um pouco confusa a necessidade que as outras pessoas têm de bens materiais e satisfação mundana. Para o santo, Arton é apenas um estágio, o local onde ele cumpre seu dever, antes de partir para a próxima missão, nos reinos dos deuses.\nÀs vezes, o santo parece estar seguindo um roteiro, agindo como se sempre soubesse o que fazer. Não hesita, é seguro de si mesmo e tem fé cega na divindade. Isso pode ser irritante. Contudo, se souber que está irritando os outros, o santo faz de tudo para deixar de ser um incômodo.\nSim, o santo parece perfeito. E sim, isso pode ser odioso. Mas ele é a melhor arma de seu deus.",
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Religião (Sab)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos",
    abilities: [
      {
        name: "Abençoado",
        description: "Você soma seu Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de um deus disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria). Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o bem como um todo. Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do Herói, abaixo). Cultuar o bem conta como sua devoção.(Mas você não pode escolher ser um santo do bem)"
      },
      {
        name: "Código do Herói",
        description: "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia."
      },
      {
        name: "Ladainha de Combate",
        description: " Você pode gastar uma ação padrão e 2 PM para gerar uma aura de 9m de raio com duração sustentada. Você e os aliados dentro da aura recebem +1 em testes de ataque, rolagens de dano e na Defesa. A cada quatro níveis, você pode gastar +2 PM para aumentar esses bônus em +1. Sua ladainha conta como Aura Sagrada para pré-requisitos e efeitos de poderes de paladino.",
        subAbilities: [
          {
            name: "No 5º nível",
            description: "Você e os aliados dentro da aura causam +1d8 pontos de dano de luz com ataques contra devotos de deuses que canalizam apenas energia negativa e criaturas malignas (a critério do mestre).",
          },
          {
            name: "No 9º nível",
            description: "Suas armas e as dos aliados dentro da aura recebem o encanto veloz.",
          },
        ]
      },
      {
        name: "Poder de Paladino",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder de Paladino ou Gerais."
      },
      {
        name: "Santo Curandeiro",
        description: "A partir do 2º nível, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que você gastar, o aliado em alcance médio com a maior redução em seus PV (por dano ou perda de vida) recupera 2d8 pontos de vida por luz. A partir do 6º nível, quando usa Santo Curandeiro, você também pode remover uma condição do alvo entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo."
      },
      {
        name: "Vaso do Espírito",
        description: "A partir do 3º nível, quando faz um teste de resistência, você pode gastar 1 PM para somar seu Carisma nesse teste."
      },
      {
        name: "Mártir",
        description: "A partir do 6º nível, quando um aliado em alcance médio faz um teste de resistência, você pode gastar 1 PM para conceder a ele um bônus nesse teste igual ao seu próprio Carisma. A partir do 12º nível, uma vez por cena, se ele ainda assim falhar, você pode sofrer o efeito no lugar dele (mas você é afetado mesmo que seja imune ao efeito)."
      },
      {
        name: "Pira Santa",
        description: "No 8º nível, enquanto estiver sob efeito de Ladainha de Combate, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, o inimigo de maior ND em alcance médio sofre 2d8 pontos de dano de luz e fica ofuscado por 1 rodada (Fort CD Car reduz à metade)."
      },
      {
        name: "Vingador Santificado",
        description: "No 20º nível, quando usa Ladainha de Combate, você pode gastar +5 PM. Se fizer isso, os bônus numéricos fornecidos por sua Ladainha dobram e você e os aliados dentro da aura recebem imunidade a acertos críticos e RD igual a 5 + seu Carisma."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Abençoado, código do herói, ladainha de combate (+1)" },
      { level: 2, abilities: "Poder de paladino, santo curandeiro" },
      { level: 3, abilities: "Poder de paladino, vaso sagrado" },
      { level: 4, abilities: "Poder de paladino" },
      { level: 5, abilities: "Ladainha de combate (+2, sacra), poder de paladino" },
      { level: 6, abilities: "Mártir, poder de paladino" },
      { level: 7, abilities: "Poder de paladino" },
      { level: 8, abilities: "Pira santa, poder de paladino" },
      { level: 9, abilities: "Ladainha de combate (+3, veloz), poder de paladino" },
      { level: 10, abilities: "Poder de paladino" },
      { level: 11, abilities: "Poder de paladino" },
      { level: 12, abilities: "Poder de paladino" },
      { level: 13, abilities: "Ladainha de combate (+4), poder de paladino" },
      { level: 14, abilities: "Poder de paladino" },
      { level: 15, abilities: "Poder de paladino" },
      { level: 16, abilities: "Poder de paladino" },
      { level: 17, abilities: "Ladainha de combate (+5), poder de paladino" },
      { level: 18, abilities: "Poder de paladino" },
      { level: 19, abilities: "Poder de paladino" },
      { level: 20, abilities: "Poder de paladino, vingador santificado" }
    ],
    },
    { id: "Seteiro (Caçador)",
    name: "Seteiro (Caçador)",
    powersUrl: "/poderes/cacador",
    origin: "Herois de Arton",
    image: "/classes/seteiro.png",
    description: "O seteiro é um caçador apenas em nome... A menos que se fale de caçar seres inteligentes. É o franco-atirador que mata alvos importantes no exército inimigo. O acrobata que dispara de ângulos e posições que outros nem conseguem compreender. O aventureiro semeia o pânico nas hordas de capangas — ou mata vilões do outro lado da sala final da masmorra.\nO seteiro faz do arco seu modo de vida. Alguns são solitários e amargos: combatendo de longe, percebem como é fácil matar. Têm dificuldade de se relacionar com outras pessoas, enxergando-as como meros alvos. Contudo, outros seteiros valorizam seus amigos e familiares justamente por notar a fragilidade da vida. Quando tudo pode acabar com a puxada da corda de um arco, é bom aproveitar o tempo que se tem. De qualquer forma, seteiros levam o caminho do arco como um modo de vida: localizam um objetivo e seguem em linha reta até ele, como a flecha. São pessoas diretas e resolutas, sem paciência para indecisão.\nSeteiros têm pouca ligação emocional com os ermos. É mais provável que trabalhem em grandes exércitos ou companhias mercenárias. Muitos são combatentes de confiança de seus lordes, vivendo em um castelo até que um novo alvo precise ser eliminado.",
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Pontaria (Des)", "Sobrevivência (Sab)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Cura (Sab)', 'Fortitude (Con)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Investigação (Int)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Reflexos (Des)'
      ],
      count: 6
      }
    },
    proficiency: "Armas marciais",
    abilities: [
      {
      name: "Caminho do Atirador",
      description: "Você abriu mão do treinamento convencional de um caçador para abraçar o caminho do atirador. Suas habilidades de seteiro relacionadas a ataques e armas só funcionam com arcos e bestas.",
      },
      {
      name: "Marca da Presa",
      description: "Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o bônus de dano (veja a tabela da classe).",
      },
      {
        name: "Tiro de Supressão",
        description: "Sempre que você causa dano com um arco ou besta em uma criatura que esteja sob efeito de sua Marca da Presa, essa criatura sofre uma penalidade cumulativa de –1 em rolagens de dano, até um valor igual à quantidade de PM gasta em Marca da Presa, até o fim da cena."
      },
      {
        name: "Poder de Caçador",
        description: "No 2º nível, e a cada nível seguinte, você recebe uma habilidade de caçador ou Geral."
      },
      {
        name: "Evasão",
        description: "A partir do 3° nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Disparo Constritor",
        description: "No 5° nível, quando usa a ação mirar, você pode pagar 2 PM. Se fizer isso, pode executar uma manobra entre desarmar, empurrar ou quebrar com um de seus ataques à distância feitos até o fim desse turno."
      },
      {
        name: "Rajada de Flechas",
        description: "A partir do 10° nível, você pode gastar uma ação completa e 2 PM para alvejar uma área com seus disparos. Escolha um ponto no alcance de sua arma, então faça um ataque à distância e compare-o com a Defesa de cada inimigo num raio de 3m dele. Então faça uma rolagem de dano, com um bônus cumulativo de +2 para cada acerto, e aplique-a em cada inimigo atingido. Você gasta apenas uma munição, independente de quantos inimigos atacou."
      },
      {
        name: "Evasão Aprimorada",
        description: "No 13º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Sentinela",
        description: "No 15° nível, uma vez por rodada, quando uma criatura sob efeito de sua Marca da Presa acerta um ataque contra um aliado, você pode gastar 1 PM para fazer um ataque contra essa criatura."
      },
      {
        name: "Mestre do Disparo",
        description: "No 20° nível, você pode usar sua Marca da Presa como uma ação livre. Além disso, uma vez por rodada, quando faz um ataque com um arco ou besta contra um alvo de sua Marca da Presa, você pode fazer um ataque adicional contra ele."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Caminho do atirador, marca da presa +1d4, tiro de supressão" },
      { level: 2, abilities: "Poder de caçador" },
      { level: 3, abilities: "Evasão, poder de caçador" },
      { level: 4, abilities: "Poder de caçador" },
      { level: 5, abilities: "Disparo constritor, marca da presa +1d8, poder de caçador" },
      { level: 6, abilities: "Poder de caçador" },
      { level: 7, abilities: "Poder de caçador" },
      { level: 8, abilities: "Poder de caçador" },
      { level: 9, abilities: "Marca da presa +1d12, poder de caçador" },
      { level: 10, abilities: "Poder de caçador, rajada de flechas" },
      { level: 11, abilities: "Poder de caçador" },
      { level: 12, abilities: "Poder de caçador" },
      { level: 13, abilities: "Evasão aprimorada, marca da presa +2d8, poder de caçador" },
      { level: 14, abilities: "Poder de caçador" },
      { level: 15, abilities: "Poder de caçador, sentinela" },
      { level: 16, abilities: "Poder de caçador" },
      { level: 17, abilities: "Marca da presa +2d10, poder de caçador" },
      { level: 18, abilities: "Poder de caçador" },
      { level: 19, abilities: "Poder de caçador" },
      { level: 20, abilities: "Poder de caçador, mestre do disparo" }
    ],
    },
    { id: "Usurpador (Clérigo)",
    name: "Usurpador (Clérigo)",
    powersUrl: "/poderes/clerigo",
    origin: "Herois de Arton",
    image: "/classes/usurpador.png",
    description: "Usurpadores não são clérigos. Na verdade, pode-se pensar neles como o oposto de clérigos. Não são ordenados, não rezam ou servem aos deuses. Bem pelo contrário.\nUsurpadores são hereges que aprenderam o segredo de roubar o poder milagroso dos deuses, utilizando-o sem devoção. Eles não seguem dogmas, não espalham a palavra de uma divindade, não protegem fiéis. Não têm funções sacerdotais, muito menos o respeito da sociedade. Para os usurpadores, a magia divina é apenas uma ferramenta poderosa, a ser usada e descartada como qualquer outra.\nUsurpadores aprendem seus segredos com outros usurpadores, numa tradição clandestina, ou em raros cultos heréticos. É um grande risco fazer parte de uma verdadeira congregação de usurpadores: se isso existe em algum lugar de Arton, é um grande alvo para paladinos e clérigos fanáticos. Na verdade, combater essa apostasia pode ser uma das únicas coisas capazes de unir devotos de todas as divindades — talvez até de Aharadak! Outros usurpadores aprendem sozinhos, em pergaminhos esquecidos ou através de seus próprios experimentos.\nDe qualquer forma, o caminho do usurpador é feito de desafio aos deuses e desprezo pela devoção. O usurpador não se curva a ninguém, mas espera que os deuses se curvem a ele.",
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "5 PM por nível"
    },
    skills: {
    mandatory: ["Enganação (Car)", "Vontade (Sab)"],
    optional: {
      skills: [      
        'Atuação (Car)', 'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Misticismo (Int)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Reflexos (Des)', 'Religião (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Inimigo dos Deuses",
      description: "Por roubar o poder de todos os deuses, o usurpador não é aceito por nenhum. Você não pode ter nenhuma devoção.",
      },
      {
        name: "Magias",
        description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você não começa com nenhuma magia e não aprende magias automaticamente como um clérigo faria (mas veja Usurpar, a seguir). Seu atributo-chave para lançar magias é Carisma e você soma seu Carisma no seu total de PM."
      },
      {
        name: "Usurpar",
        description: "Você pode lançar qualquer magia divina de um círculo a que tenha acesso. Para lançar uma magia dessa forma, deve passar em um teste de Enganação (CD 15 + custo em PM da magia). Se falhar, a magia é perdida, mas os PM são gastos mesmo assim. Você não pode escolher 10 nesse teste, mesmo que possua uma habilidade que permita isso, e sofre penalidade de armadura nele. Além disso, sofre uma penalidade de –5 se estiver em um local contendo um símbolo sagrado visível."
      },
      {
        name: "Canalização Falsa",
        description: "No 2º nível, você pode canalizar tanto energia positiva quanto negativa."
      },
      {
        name: "Poder de Clérigo",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de clérigo ou geral(mas não pode escolher Conhecimento Mágico). Você substitui Sabedoria por Carisma em todos os poderes de clérigo e concedidos com efeito baseado nesse atributo."
      },
      {
        name: "Discrição Divina",
        description: "No 3º nível, você recebe +1 em Furtividade e testes de resistência. A cada seis níveis, esse bônus aumenta em +1."
      },
      {
        name: "Poder Capturado",
        description: "No 4º nível, você rouba o poder que os deuses concedem a seus devotos. Escolha um deus maior por nível e um poder concedido desse deus (você deve cumprir seus pré-requisitos e não pode escolher poderes exclusivos de qualquer classe, inclusive clérigo). Você pode gastar uma hora e fazer um teste de Enganação (CD é 20 +5 para cada uso adicional no mesmo dia). Se passar, você é considerado um devoto desse deus para efeitos de habilidades e itens, e pode usar o poder concedido escolhido, mas não precisa seguir as Obrigações e Restrições. Se falhar, você perde 3 PM. Este efeito dura até o fim do dia ou até você usá-lo novamente."
      },
      {
        name: "Roubo Divino",
        description: "No 20º nível, você é capaz de roubar a própria essência divina. Quando lança uma magia com Usurpar, para cada 10 pontos no resultado do teste de Enganação, o total de PM que você gasta nessa magia é reduzido em –1 (cumulativo com outras reduções) e a CD para resistir a ela aumenta em +1."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Inimigo dos deuses, magias (1º círculo), usurpar" },
      { level: 2, abilities: "Canalização falsa, poder de clérigo" },
      { level: 3, abilities: "Discrição divina +1, poder de clérigo" },
      { level: 4, abilities: "Poder capturado, poder de clérigo" },
      { level: 5, abilities: "Magias (2º círculo), poder de clérigo" },
      { level: 6, abilities: "Poder de clérigo" },
      { level: 7, abilities: "Poder de clérigo" },
      { level: 8, abilities: "Poder de clérigo" },
      { level: 9, abilities: "Discrição divina +2, magias (3º círculo), poder de clérigo" },
      { level: 10, abilities: "Poder de clérigo" },
      { level: 11, abilities: "Poder de clérigo" },
      { level: 12, abilities: "Poder de clérigo" },
      { level: 13, abilities: "Magias (4º círculo), poder de clérigo" },
      { level: 14, abilities: "Poder de clérigo" },
      { level: 15, abilities: "Discrição divina +3, poder de clérigo" },
      { level: 16, abilities: "Poder de clérigo" },
      { level: 17, abilities: "Magias (5º círculo), poder de clérigo" },
      { level: 18, abilities: "Poder de clérigo" },
      { level: 19, abilities: "Poder de clérigo" },
      { level: 20, abilities: "Poder de clérigo, roubo divino" }
    ],
    },
    { id: "Vassalo (Cavaleiro)",
    name: "Vassalo (Cavaleiro)",
    powersUrl: "/poderes/cavaleiro",
    origin: "Herois de Arton",
    image: "/classes/vassalo.png",
    description: "O cavaleiro vassalo é um servo por natureza. Ao contrário de outros aventureiros, que levam vidas de liberdade e independência, o vassalo possui um lorde, um nobre a quem deve obedecer, e faz parte de uma estrutura social rígida. Esse senhor é sempre um aristocrata tradicional, alguém que vive segundo os costumes mais antigos da sociedade artoniana.\nÀ medida que adquire experiência, o vassalo recebe responsabilidades e posições de prestígio em seu reino, feudo ou domínio. Seu início é humilde, como um mero pajem, mas ele acaba sua carreira como um grande senhor de terras, responsável por uma população numerosa.\nExiste muita variedade e diversidade em Arton, mas o vassalo escolhe um caminho convencional e até mesmo antiquado. Ele vê grande valor na hierarquia nobiliárquica, tem orgulho de ostentar títulos de nobreza e erguer o estandarte de seu senhor.\nContudo, não é um mero burocrata, nem tem sede de poder: o vassalo personifica o lado heroico da nobreza, vendo como seu dever proteger a plebe. Derrama seu sangue tanto por seu senhor quanto por seus próprios súditos. É uma vida de servidão e deveres. Mas recompensada pela satisfação de fazer o que é certo — e pelo luxo da aristocracia.",
    characteristics: {
      pvBase: "20 + Constituição",
      pvPerLevel: "5 + Constituição",
      pmPerLevel: "3 PM por nível"
    },
    skills: {
    mandatory: ["Fortitude (Con)", "Luta (For)"],
    optional: {
      skills: [      
        'Adestramento (Car)', 'Atletismo (For)', 'Cavalgar (Des)', 'Diplomacia (Car)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Nobreza (Int)', 'Percepção (Sab)', 'Vontade (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais e escudos.",
    abilities: [
      {
        name: "Código de Honra",
        description: "Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro."
      },
      {
        name: "Baluarte",
        description: "Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto."
      },
      {
        name: "Jovem Pajem",
        description: "Você inicia sua carreira como um pajem, servindo a um sir ou dame mais experiente. Você se torna treinado em Adestramento ou Ofício (armeiro)."
      },
      {
        name: "Suserano",
        description: "Escolha um membro da nobreza aprovado pelo mestre. Você serve a esse nobre, sendo oficialmente reconhecido como parte de sua corte. Os efeitos de seu status ficam a cargo do mestre mas, como regra geral, você recebe +5 em testes de Diplomacia e Intimidação ao lidar com vassalos de seu suserano de nível inferior ao seu e, nas terras dele, pode obter alojamento e alimentação sem custo. Se deixar de servir a seu suserano por qualquer motivo, você perde todos os seus PM e só pode recuperá-los após ser aceito por outro suserano."
      },
      {
        name: "Valete",
        description: "A partir do 2º nível, você já acompanha seu senhor na corte e nos salões nobres. Você se torna treinado em Diplomacia ou Nobreza e recebe um poder de cavaleiro a sua escolha."
      },
      {
        name: "Escudeiro Aprendiz",
        description: "A partir do 3º nível, você ajuda seu senhor na batalha. Você se torna treinado em Cavalgar e recebe proficiência com armaduras pesadas. Se já tiver proficiência com armaduras pesadas, recebe +2 na Defesa enquanto usa uma armadura pesada."
      },
      {
        name: "Guarda do Castelo",
        description: "No 4º nível, você já patrulha as muralhas do castelo sozinho. Você se torna treinado em Intuição e recebe um poder de cavaleiro a sua escolha."
      },
      {
        name: "Vigilante de Estradas",
        description: "A partir do 5º nível, você expande suas responsabilidades para além do castelo. Você recebe a habilidade Montaria e se torna treinado em Percepção."
      },
      {
        name: "Cavaleiro do Reino",
        description: "No 6º nível, você recebe o título de sir ou dame e atinge o grau mais baixo da nobreza. Você recebe uma arma, armadura ou escudo superior com duas melhorias a sua escolha e recebe um poder de cavaleiro a sua escolha."
      },
      {
        name: "Sargento do Reino",
        description: "No 7º nível, você adquire uma posição no exército do reino. Você recebe um poder de cavaleiro ou de guerreiro a sua escolha (como um guerreiro de nível igual ao seu para propósitos de pré-requisitos)."
      },
      {
        name: "Capitão do Reino",
        description: "No 8º nível, você se torna um oficial no exército, respeitado e prestigiado por militares, nobres e plebeus. Você recebe o poder Escudeiro e a habilidade Golpe Divino, como um paladino de nível igual ao seu. Esta não é uma habilidade mágica e provém de seu senso de justiça e determinação em combate."
      },
      {
        name: "Lorde",
        description: "No 9º nível você ascende dentro da nobreza, recebendo um feudo — e muitas responsabilidades. Você recebe o poder Autoridade Feudal. Se já possui esse poder, as pessoas convocadas passam a contar como um parceiro veterano. Além disso, escolha um dos caminhos a seguir:",
        subAbilities: [
          {
            name: "Caminho do Soldado",
            description: "Você recebe um poder de guerreiro (como um guerreiro de nível igual ao seu) a sua escolha."
          },
          {
            name: "Caminho do Governante",
            description: "Você recebe um poder de nobre (como um nobre de nível igual ao seu) a sua escolha."
          },
        ]
      },
      {
        name: "Barão",
        description: "No 10º nível, você ascende dentro da nobreza e passa a receber impostos de seus plebeus. Você recebe o poder Título e um domínio de nível 1. Se já tiver um domínio, em vez disso ele recebe uma construção gratuita (cujos pré-requisitos seu domínio cumpra)."
      },
      {
        name: "Visconde",
        description: "No 11º nível, você adquire um título mais alto. Se escolheu o Caminho do Soldado, recebe +1 PV por nível de vassalo. Se escolheu o Caminho do Governante, recebe +1 em Inteligência."
      },
      {
        name: "Conde",
        description: "A partir do 12º nível, você é um alto nobre e tem acesso a equipamentos poderosos. No início de cada aventura, você recebe um “orçamento” de T$ 30.000 que pode gastar em itens mágicos. Esses itens devem ser devolvidos ou reembolsados no fim da aventura. Além disso, recebe um poder de cavaleiro ou geral a sua escolha."
      },
      {
        name: "Marquês",
        description: "No 13º nível, seus feitos alçam-no a um título ainda mais alto. Se escolheu o Caminho do Soldado, você recebe redução de dano 5 e +2 na Defesa. Se escolheu o Caminho do Governante, você passa a somar seu Carisma em seus testes de resistência."
      },
      {
        name: "Duque",
        description: "No 14º nível, você se tornou um dos mais altos nobres do reino. Quando você usa Autoridade Feudal, o nível do parceiro convocado aumenta em um passo. Além disso, você recebe um poder de cavaleiro a sua escolha."
      },
      {
        name: "Arquiduque",
        description: "No 15º nível você atinge o mais alto grau da nobreza, possuindo uma aura que o distingue das pessoas normais e o torna quase intocável. Uma vez por rodada, quando uma criatura inteligente lhe causar dano, você pode gastar 5 PM para reduzir esse dano a 0."
      },
      {
        name: "Conselheiro Real",
        description: "A partir do 16º nível, você se torna um dos conselheiros do rei e passa a partilhar do poder de Sua Majestade. Você recebe um poder de cavaleiro a sua escolha e aprende e pode lançar uma magia divina de até 4º círculo a sua escolha (atributo-chave Carisma)."
      },
      {
        name: "Rei Mercenário",
        description: "No 17º nível, você dá seus primeiros passos rumo à majestade, e a terra responde às suas aspirações. Se escolheu o Caminho do Soldado, você recebe 3 pontos de atributo para distribuir como quiser em Força, Destreza e Constituição. Se escolheu o Caminho do Governante, recebe 3 pontos de atributo para distribuir como quiser em Inteligência, Sabedoria e Carisma."
      },
      {
        name: "Rei",
        description: "No 18º nível, seu reino já não precisa mais do apoio de seu antigo lorde — mas vocês ainda são aliados. Você recebe +1 em Carisma e um poder de cavaleiro a sua escolha."
      },
      {
        name: "Alto Rei",
        description: "No 19º nível, você se torna um alto rei, senhor de seu reino e do antigo reino de seu lorde. Tem a sua disposição seguidores e riquezas sem fim — seu “orçamento” de itens mágicos aumenta para T$ 100.000 e seu limite de parceiros aumenta em 2."
      },
      {
        name: "Imperador",
        description: "No 20º nível, você chegou ao ápice político de Arton. Talvez tenha colonizado um continente desconhecido. Talvez tenha conquistado o Império de Tauron ou o Reinado. De qualquer forma, você agora é um grande imperador, respeitado e temido por todos. Sua fama não tem limites e as pessoas atribuem a você os mais variados poderes. Você recebe +1 em dois atributos diferentes a sua escolha e aprende e pode lançar uma magia divina de até 5º círculo a sua escolha (atributo-chave Carisma). Você pode começar a pensar em dar terras a seu antigo escudeiro, formando mais um rei e continuando o nobre ciclo do cavaleiro vassalo."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Baluarte +2, código de honra, jovem pajem, suserano" },
      { level: 2, abilities: "Valete" },
      { level: 3, abilities: "Escudeiro aprendiz" },
      { level: 4, abilities: "Guarda do castelo" },
      { level: 5, abilities: "Baluarte +4, vigilante das estradas" },
      { level: 6, abilities: "Cavaleiro do reino" },
      { level: 7, abilities: "Sargento do reino" },
      { level: 8, abilities: "Capitão do reino" },
      { level: 9, abilities: "Baluarte +6, lorde" },
      { level: 10, abilities: "Barão" },
      { level: 11, abilities: "Visconde" },
      { level: 12, abilities: "Conde" },
      { level: 13, abilities: "Baluarte +8, marquês" },
      { level: 14, abilities: "Duque" },
      { level: 15, abilities: "Arquiduque" },
      { level: 16, abilities: "Conselheiro real" },
      { level: 17, abilities: "Baluarte +10, rei mercenário" },
      { level: 18, abilities: "Rei" },
      { level: 19, abilities: "Alto rei" },
      { level: 20, abilities: "Imperador" }
    ],
    extras: [
    {
      title: "Vassalo em Campanha",
      description: "O vassalo é uma classe diferente. Em vez de oferecer muitos poderes abertos, que podem ser escolhidos pelo jogador, tem uma lista em grande parte fixa e imutável. Em vez de se encaixar em quase qualquer campanha, exige uma progressão narrativa para o personagem — determinando parcialmente os rumos da história. Como lidar com toda essa esquisitice?\nAntes de escolher um vassalo, o jogador deve conversar com o mestre, garantindo que essa variante tem espaço na campanha. Por sua vez, o mestre deve trabalhar com o jogador para que sua ascensão na aristocracia aconteça em jogo.\nSimulando o lado mais tradicional e até antiquado da nobreza de Arton, o vassalo também é uma variante mais estanque em termos de regras. Empurra o personagem e a campanha como um todo para um certo lado. Por isso, todos precisam estar de acordo para que ele funcione. Se você prefere um personagem mais solto, que tenha mais opções de poderes e liberdade na campanha, talvez um cavaleiro ou um nobre se encaixem mais com seu conceito.\nPara um exemplo de como um personagem vassalo funciona na mesa, você pode assistir à Guilda do Macaco — na campanha, Lothar Algherulff seguiu essa variante do 1º ao 17º nível. O sistema de jogo era outro, mas a classe era parecida e os ajustes necessários na campanha não dependeram de regras, mas de história."
    },
    {
      title: "O Treinamento de um Vassalo",
      description: "Ao longo de sua carreira, o vassalo se torna treinado em diversas perícias. Sempre que receber um desses treinamentos por uma habilidade de vassalo, se já for treinado na perícia, em vez disso você recebe +2 nela."
    },
    ]
    },
    { id: "Ventanista (Ladino)",
    name: "Ventanista (Ladino)",
    powersUrl: "/poderes/ladino",
    origin: "Herois de Arton",
    image: "/classes/ventanista.png",
    description: "O ladino que usa suas habilidades para lutar deveria ser guerreiro. Tudo que vale a pena ser feito exige sutileza e graça, incluindo roubar. Isso é o que pensa o ladino ventanista.\nA palavra designa um ladrão que entra pela janela, furtando sem usar violência. Assim, o ventanista é o mais silencioso, furtivo e galante dos ladinos. Para ele, força física não é só desnecessária — é uma desvantagem. O que importa é ter passos leves e mãos rápidas, entrar e sair sem ser visto, executar cada ardil com precisão milimétrica.\nO ventanista pode ser um verdadeiro “ladrão de casaca”, participando da alta sociedade e encantando os nobres com seu charme, ou uma figura misteriosa, oculta nas sombras. Muitos enriquecem e não largam a vida de crime, roubando por esporte ou concentrando-se em obras de arte e outros tesouros que nunca irão vender. Muitos ventanistas têm alcunhas ou identidades secretas, deixando pequenos objetos como sua marca registrada na cena do crime. É um prazer testemunhar a confusão do conde ao ver que seu colar de safiras mágicas foi trocado por um cisne de cerâmica, cortesia do misterioso Cisne Azul…\nEsse é o ventanista: um mão-leve. Um gatuno. Um vivaz.",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Ladinagem (Des)", "Reflexos (Des)"],
    optional: {
      skills: [      
       'Acrobacia (Des)', 'Atletismo (For)', 'Atuação (Car)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Enganação (Car)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Jogatina (Car)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Pilotagem (Des)'
      ],
      count: 8
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Charme",
      description: "Você soma seu Carisma em seu total de PM. Quando faz um teste de perícia (exceto testes de ataque), você pode gastar uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste.",
      },
      {
        name: "Truques do Ofício",
        description: "Você pode lançar magias arcanas de 1º círculo, mas apenas de encantamento e ilusão. Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas . À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo que possa lançar. Você pode lançar essas magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Inteligência."
      },
      {
        name: "Evasão",
        description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Poder de Ladino",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de sua classe ou geral."
      },
      {
        name: "Disfarce Elaborado",
        description: "No 3º nível, você aprende a simular habilidades práticas úteis para seus disfarces. Sempre que fizer um teste de Enganação para disfarce (Tormenta20, p. 118), você pode escolher um poder (exceto poderes da Tormenta) cujos pré-requisitos cumpra e que esteja relacionado a esse disfarce. Enquanto estiver disfarçado dessa forma, você sofre uma penalidade de –3 PM e pode usar o poder escolhido. A cada seis níveis, você pode assumir uma penalidade adicional de –3 PM ao se disfarçar para escolher um poder adicional."
      },
      {
        name: "Esquiva Sobrenatural",
        description: "No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido."
      },
      {
        name: "Virar a Casaca",
        description: "No 7º nível, se estiver disfarçado, você pode gastar 1 PM para remover seu disfarce. Quando faz isso, você pode fazer um teste de esconder-se usando Enganação no lugar de Furtividade, mesmo sem camuflagem ou cobertura disponível."
      },
      {
        name: "Olhos nas Costas",
        description: "A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      },
      {
        name: "Evasão Aprimorada",
        description: "No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Provocação Ousada",
        description: "A partir do 11º nível, em seu primeiro turno em cada cena, você pode gastar uma ação completa para provocar seus inimigos. Você pode deixar um cartão de visitas visível, declarar seu plano ou fazer outra ação que alerte seus inimigos de sua presença e de suas intenções. Até o fim da cena, seus inimigos recebem +2 em testes de Percepção, Sobrevivência e Vontade contra você. Entretanto, no início de seus turnos você recupera 2 PM. Esta habilidade só tem efeito se houver um risco associado a declarar suas ações (a critério do mestre) e recupera um máximo de PM por cena igual ao seu nível."
      },
      {
        name: "O Grande Golpe",
        description: "No 20º nível, no início de cada aventura, você pode escolher uma quantidade de magias, arcanas ou divinas, igual à sua Inteligência (você pode escolher a mesma magia mais de uma vez). Para cada escolha feita, defina um tipo de cena entre ação, exploração e interpretação (Tormenta20, p. 252). Até o fim da aventura, para cada vez que uma magia foi escolhida, se estiver em uma cena do tipo definido para ela, você pode lançá-la sem gastar PM (limite de PM 20, atributo-chave Inteligência). Esta não é uma habilidade mágica e provém da sua capacidade de enganar outras pessoas."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Charme, truques do ofício" },
      { level: 2, abilities: "Evasão, poder de ladino" },
      { level: 3, abilities: "Disfarce elaborado (1 poder), poder de ladino" },
      { level: 4, abilities: "Esquiva sobrenatural, poder de ladino" },
      { level: 5, abilities: "Poder de ladino" },
      { level: 6, abilities: "Poder de ladino" },
      { level: 7, abilities: "Poder de ladino, virar a casaca" },
      { level: 8, abilities: "Olhos nas costas, poder de ladino" },
      { level: 9, abilities: "Disfarce elaborado (2 poderes), poder de ladino" },
      { level: 10, abilities: "Evasão aprimorada, poder de ladino" },
      { level: 11, abilities: "Poder de ladino, provocação ousada" },
      { level: 12, abilities: "Poder de ladino" },
      { level: 13, abilities: "Poder de ladino" },
      { level: 14, abilities: "Poder de ladino" },
      { level: 15, abilities: "Disfarce elaborado (3 poderes), poder de ladino" },
      { level: 16, abilities: "Poder de ladino" },
      { level: 17, abilities: "Poder de ladino" },
      { level: 18, abilities: "Poder de ladino" },
      { level: 19, abilities: "Poder de ladino" },
      { level: 20, abilities: "O grande golpe, poder de ladino" }
    ],
    extras: [
    {
      title: "Magias Simuladas",
      description: "Uma magia simulada é uma habilidade não mágica que reproduz os efeitos de uma magia, como os poderes Flagelo dos Mares e Truque de Mágica (Tormenta20, pp. 48 e 89). Magias simuladas seguem as mesmas regras de magias normais, exceto por não serem habilidades mágicas e não contarem como magias (não se beneficiam de efeitos que afetam magias, como itens esotéricos e catalisadores, e não exigem testes de concentração). Entretanto, elas não se acumulam com outras magias (simuladas ou não)."
    },
    ]
    },
    { id: "Capanga (Ladino)",
    name: "Capanga (Ladino)",
    powersUrl: "/poderes/ladino",
    origin: "Dragão Brasil",
    image: "/classes/capanga.png",
    description: "'Quer saber a melhor maneira de roubar algo? Bata no dono. Bata com força.'\nEm vielas úmidas, cortiços esquecidos e tavernas onde até a luz evita entrar, o crime raramente envolve acrobacias elegantes ou truques engenhosos. A vida é direta e cruel. Nesse cenário, nasce o capanga.\nEle é o ladino que trocou sutileza por brutalidade. Um sujeito de punhos pesados e paciência curta, que resolve problemas do jeito mais simples possível: acertando primeiro. Covis criminosos, cartéis e gangues poderosas sempre têm espaço para dezenas deles — trabalhadores do submundo que lidam com o serviço que ninguém mais quer fazer. Enquanto mestres ladrões põem planos refinados em prática, capangas são enviados para cobrar dívidas, intimidar informantes ou abrir caminho na marra.\nAinda assim, engana-se quem imagina o capanga como um idiota valentão. Muitos vieram da miséria, empurrados cedo demais para becos perigosos. Não aprenderam a mentir com charme, nem a passar despercebidos; aprenderam a sobreviver. Alguns, inclusive, mantêm uma honestidade desconfortante: são diretos, leais, e defendem seus companheiros com a ferocidade de quem cresceu sem ninguém para defendê-los.\nCicatrizes que capangas carregam não lembram aventuras ousadas, mas noites em que fizeram o trabalho sujo, quebraram ossos errados ou bateram em quem não merecia. São pesos que trazem consigo para sempre… mas que também moldam um ladino duro, decidido e incapaz de abandonar aqueles que chamam de amigos.",
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "4 PM por nível"
    },
    skills: {
    mandatory: ["Ladinagem (Des)", "Enganação (Des)"],
    optional: {
      skills: [      
       'Acrobacia (Des)', 'Atletismo (For)', 'Atuação (Car)', 'Cavalgar (Des)', 'Conhecimento (Int)', 'Diplomacia (Car)', 'Furtividade (Des)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Jogatina (Car)', 'Luta (For)', 'Ofício (Int)', 'Percepção (Sab)', 'Pilotagem (Des)', 'Pontaria (Des)', 'Reflexos (Des)'
      ],
      count: 6
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Ataque Furtivo Brutal",
      description: "Você sabe aproveitar a distração do inimigo para atingir seus pontos vitais. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo, ou uma criatura que esteja flanqueando, você causa 1d8 pontos de dano extra. A cada dois níveis, esse dano aumenta em +1d8. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
      },
      {
        name: "Evasão",
        description: "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Poder de Ladino",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de sua classe ou geral."
      },
      {
        name: "Rápido e Rasteiro",
        description: "No 3º nível, você recebe +2 em Iniciativa, Defesa e em rolagens de dano na primeira rodada de cada combate. Esse bônus aumenta para +4 no 7º nível e para +6 no 15º nível."
      },
      {
        name: "Cara Feia",
        description: "No 4º nível, você recebe +5 em testes de resistência contra efeitos de Medo e em testes de Vontade para resistir a intimidações."
      },
      {
        name: "Flanquear Aprimorado",
        description: "No 6º nível, o bônus que você recebe contra oponentes flanqueados aumenta para +4 (em vez de +2)."
      },
      {
        name: "Olhos nas Costas",
        description: "A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      },
      {
        name: "Evasão Aprimorada",
        description: "No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        name: "Debulhar Inimigos",
        description: "No 20º nível, você já perdeu a paciência com inimigos cheios de truques ou que são resistentes às suas habilidades. Seus ataques furtivos ignoram imunidades de criaturas a acertos críticos. Além disso, você pode gastar 5 PM quando faz um ataque para usar seu ataque furtivo mesmo que o alvo não esteja desprevenido ou que você não o esteja flanqueando."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Ataque furtivo brutal +1d8" },
      { level: 2, abilities: "Evasão, poder de ladino" },
      { level: 3, abilities: "Ataque furtivo brutal +2d8, poder de ladino, rápido e rasteiro +2" },
      { level: 4, abilities: "Cara feia, poder de ladino" },
      { level: 5, abilities: "Ataque furtivo brutal +3d8, poder de ladino" },
      { level: 6, abilities: "Flanquear aprimorado, poder de ladino" },
      { level: 7, abilities: "Ataque furtivo brutal +4d8, poder de ladino, rápido e rasteiro +4" },
      { level: 8, abilities: "Olho nas costas, poder de ladino" },
      { level: 9, abilities: "Ataque furtivo brutal +5d8, poder de ladino" },
      { level: 10, abilities: "Evasão aprimorada, poder de ladino" },
      { level: 11, abilities: "Ataque furtivo brutal +6d8, poder de ladino" },
      { level: 12, abilities: "Poder de ladino" },
      { level: 13, abilities: "Ataque furtivo brutal +7d8, poder de ladino" },
      { level: 14, abilities: "Poder de ladino" },
      { level: 15, abilities: "Ataque furtivo brutal +8d8, poder de ladino, rápido e rasteiro +6" },
      { level: 16, abilities: "Poder de ladino" },
      { level: 17, abilities: "Ataque furtivo brutal +9d8, poder de ladino" },
      { level: 18, abilities: "Poder de ladino" },
      { level: 19, abilities: "Ataque furtivo brutal +10d8, poder de ladino" },
      { level: 20, abilities: "Debulhar inimigos, poder de ladino" }
    ],
    },
    { id: "Cruzado (Clérigo)",
    name: "Cruzado (Clérigo)",
    powersUrl: "/poderes/clerigo",
    origin: "Dragão Brasil",
    image: "/classes/cruzado.png",
    description: "‘Os deuses perdoam. Eu apenas providencio o encontro com eles.’\nEntre os sacerdotes, o cruzado é o que mais vive com um pé no campo de batalha. Seus templos lembram fortalezas, seus hinos soam como comandos militares, e suas orações terminam com o ar metálico do aço sendo desembainhado. Para o cruzado, empunhar uma arma é tão sagrado quanto erguer um símbolo divino — às vezes, até mais.\nEnquanto muitos clérigos veem a fé como guia espiritual, o cruzado a trata como missão. Luta para proteger santuários isolados, marcha por fronteiras perigosas e permanece onde outros não poderiam. É enviado para locais onde o dogma precisa de muralhas, e onde cada inimigo derrotado é mais um triunfo dedicado à sua divindade.\nEssa postura marcial torna o cruzado firme, devoto — e, por vezes, inflexível. Ele respeita aliados da fé, mas raramente perde tempo tentando compreender crenças diferentes. Não por maldade, mas por convicção: acredita que sua dureza é necessária para que sacerdotes mais sábios e pacíficos possam seguir pregando.\nApesar de sua reputação severa, muitos cruzados carregam dúvidas silenciosas. Sabem que derramar sangue em nome da fé deixa marcas que não somem com simples orações. Ainda assim, continuam. Caminham por estradas que poucos aceitariam trilhar e defendem o sagrado com a ferocidade de quem acredita estar erguendo algo maior do que si próprio. Talvez, séculos depois, ninguém lembre o preço pago — mas para o cruzado, é justamente por isso que vale a pena lutar.",
    characteristics: {
      pvBase: "16 + Constituição",
      pvPerLevel: "4 + Constituição",
      pmPerLevel: "5 PM por nível"
    },
    skills: {
    mandatory: ['Luta (For) ou Pontaria (Des)', 'Religião (Sab)'],
    optional: {
      skills: [      
        'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Iniciativa (Des)', 'Intuição (Sab)', 'Luta (For)', 'Misticismo (Int)', 'Nobreza (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Pontaria (Des)', 'Vontade (Sab)'
      ],
      count: 2
      }
    },
    proficiency: "Armas marciais, armaduras pesadas e escudos.",
    abilities: [
      {
        name: "Devoto Fiel",
        description: "Você se torna devoto de um deus maior. Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um. Como alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa à sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção. Mas você não pode escolher ser um clérigo de Lena, Marah, Sszzaas, Wynna ou um clérigo do Panteão."
      },
      {
        name: "Magias",
        description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM."
      },
      {
        name: "Presente dos Deuses",
        description: "Você começa o jogo com uma arma superior com uma melhoria (exceto material especial) com preço total de até T$ 500. Preferencialmente, este item deve ser a arma preferida do seu deus, mas pode ser outra, de acordo com o mestre.\nNos níveis 5, 8 e 11, esse item recebe, respectivamente, uma segunda, terceira e quarta melhorias à sua escolha. Nos níveis 9, 14 e 18, esse item recebe, respectivamente, um, dois e três encantos à sua escolha.\nSeu presente dos deuses funciona como a versão mundana da arma, mas ele não ocupa espaços no inventário pois você deve gastar uma ação de movimento e 2 PM para invocá-lo com um brilho de luz dourada — efeito que dura até o fim da cena, quando o item desaparece e volta para o mundo divino de onde veio."
      },
      {
        name: "Alma Guerreira",
        description: "No 2º nível, quando invoca seu presente dos deuses em um combate, você recebe uma quantidade de pontos de vida temporários igual a seu nível + sua Sabedoria."
      },
      {
        name: "Poder de Clérigo",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de clérigo ou geral."
      },
      {
        name: "Fé Inabalável",
        description: "No 3º nível, enquanto estiver empunhando seu presente dos deuses, você não fica inconsciente por estar com 0 PV ou menos (você ainda morre se chegar a um valor negativo igual à metade de seus pontos de vida máximos)."
      },
      {
        name: "Oração Marcial",
        description: "No 10º nível, você pode, uma vez por dia, gastar uma hora e 5 PM para rezar ao seu deus e pedir orientação em combate; então escolha um poder de clérigo, de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia."
      },
      {
        name: "Guerreiro Santificado",
        description: "No 20º nível, você torna-se tão formidável em combate quanto seus aliados combatentes. Você pode usar Ataque Especial (Tormenta20, p. 65) como se fosse um guerreiro de 20º nível. Além disso, se usar essa habilidade em um ataque feito com o seu presente dos deuses, o custo para usá-la é reduzido em –1 PM."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Devoto fiel, magias (1º círculo), presente dos deuses (1 melhoria)" },
      { level: 2, abilities: "Alma guerreira, poder de clérigo" },
      { level: 3, abilities: "Fé inabalável, poder de clérigo" },
      { level: 4, abilities: "Poder de clérigo" },
      { level: 5, abilities: "Magias (2º círculo), poder de clérigo, presente dos deuses (2 melhorias)" },
      { level: 6, abilities: "Poder de clérigo" },
      { level: 7, abilities: "Poder de clérigo" },
      { level: 8, abilities: "Poder de clérigo, presente dos deuses (3 melhorias)" },
      { level: 9, abilities: "Magias (3º círculo), poder de clérigo, presente dos deuses (3 melhorias, 1 encanto)" },
      { level: 10, abilities: "Oração marcial, poder de clérigo" },
      { level: 11, abilities: "Poder de clérigo, presente dos deuses (4 melhorias, 1 encanto)" },
      { level: 12, abilities: "Poder de clérigo" },
      { level: 13, abilities: "Magias (4º círculo), poder de clérigo" },
      { level: 14, abilities: "Poder de clérigo, presente dos deuses (4 melhorias, 2 encantos)" },
      { level: 15, abilities: "Poder de clérigo" },
      { level: 16, abilities: "Poder de clérigo" },
      { level: 17, abilities: "Magias (5º círculo), poder de clérigo" },
      { level: 18, abilities: "Poder de clérigo, presente dos deuses (4 melhorias, 3 encantos)" },
      { level: 19, abilities: "Poder de clérigo" },
      { level: 20, abilities: "Guerreiro Santificado, poder de clérigo" }
    ],
    },
    { id: "Frade",
    name: "Frade",
    powersUrl: "/poderes/frade",
    origin: "Deuses de Arton",
    image: "/classes/frade.png",
    description: "Um tipo de sacerdote, o frade é um conjurador divino focado em suporte, cura e conhecimento. É similar ao clérigo, mas enquanto este é mais combativo, valendo-se de armas e armaduras, o frade prefere mantos esvoaçantes e ostenta poder mágico superior. Como se fosse um tipo de arcanista divino, costuma ser conhecido em alguns círculos como “mago sagrado”.\nClérigos e frades servem aos mesmos deuses, mas agem de formas diferentes — na verdade, eles se complementam. O clérigo de Arsenal abençoa soldados no campo de batalha e luta a seu lado, enquanto o frade do Deus da Guerra atua no templo-quartel analisando mapas e criando estratégias militares. Um clérigo de Khalmyr persegue criminosos para levá-los à justiça; o frade do mesmo deus trava suas batalhas nos tribunais, defendendo inocentes e punindo culpados.\nEm suas respectivas igrejas e cultos, frades alcançam posições de liderança com mais frequência que clérigos. Também é comum encontrá-los como líderes de comunidades; seu vasto conhecimento e sabedoria costumam ser mais valiosos nessa função que habilidades de combate. O xamã de Allihanna que comanda uma pequena aldeia de bárbaros muito provavelmente será um frade, em vez de um clérigo. O mesmo vale para a professora de Tanna-Toh que ensina escrita e aritmética às crianças do povoado, bem como o capelão do Oceano conduzindo serviços religiosos a bordo da nau capitânia de uma frota pirata.\nAssim, é pouco comum que frades sejam aventureiros — mas não impossível. Apesar de sua maior afinidade com funções burocráticas, frades também podem ser compelidos a grandes missões. Em vez de lutar na linha de frente, juntam-se aos arcanistas na retaguarda, provendo suporte e proteção — não apenas com seu acervo superior de magias, mas também com astúcia e estratégia. O frade é, além disso, um investigador ferrenho, tendo na solução de mistérios uma frequente motivação para se aventurar. É valioso decifrando escrituras e identificando maldições.\nAlém de suas habilidades milagrosas, frades são conhecidos por sua grande erudição. São dedicados ao estudo das artes, da história e da filosofia, que consideram tão essencial quanto a prática de magias. Acumulam conhecimento sobre civilizações antigas, tradições culturais e segredos místicos, tornando-se conselheiros valiosos, diplomatas hábeis e sábios estrategistas. São procurados por regentes e líderes, que valorizam sua sabedoria, perspicácia e perícia em negociação.\nEmbora sejam encontrados servindo a todo o Panteão, frades têm mais afinidade com certas divindades. Por valorizarem a magia acima do combate, muitos são devotados a Lena, Marah e Thyatis. Um grande número também serve a Tanna-Toh, buscando seu conhecimento sagrado. Muitos oram pela esperteza de Hyninn e pela sagacidade de Sszzaas, perseverando através de trapaça e traição. Wynna também é bem servida por frades — esses talvez estejam entre os conjuradores mais versáteis de Arton, igualmente dominando magia arcana e divina. De fato, mesmo entre devotos de deuses combativos ou violentos, sempre haverá aqueles buscando superar desafios não com armas, mas com magia e inteligência.",
    famousExamples: [
      'Belinda Arting', 'Khorr’benn An-ug’atz', 'Nekapeth', 'Nichaela', 'Tella Andoren'
    ],
    characteristics: {
      pvBase: "12 + Constituição",
      pvPerLevel: "3 + Constituição",
      pmPerLevel: "6 PM por nível"
    },
    skills: {
    mandatory: ["Religião (Sab)", "Vontade (Sab)"],
    optional: {
      skills: [ 'Adestramento (Car)', 'Atuação (Car)', 'Conhecimento (Int)', 'Cura (Sab)', 'Diplomacia (Car)', 'Fortitude (Con)', 'Guerra (Int)', 'Iniciativa (Des)', 'Intimidação (Car)', 'Intuição (Sab)', 'Investigação (Int)', 'Misticismo (Int)', 'Ofício (Int)', 'Percepção (Sab)', 'Nobreza (Int)'],
      count: 4
      }
    },
    proficiency: "Nenhuma",
    abilities: [
      {
      name: "Devoto Fiel",
      description: "Você se torna devoto de um deus maior. Veja as regras de devotos. Ao contrário de devotos normais, você recebe dois poderes concedidos por se tornar devoto, em vez de apenas um.\nComo alternativa, você pode cultuar o Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única obrigação e restrição é não usar armas cortantes ou perfurantes (porque derramam sangue, algo que frades do Panteão consideram proibido). Sua arma preferida é a maça e você pode canalizar energia positiva ou negativa a sua escolha (uma vez feita, essa escolha não pode ser mudada). Cultuar o Panteão conta como sua devoção.",
      },
      {
        name: "Erudição",
        description: "Quando faz um teste de perícia (exceto de ataque), você pode gastar uma quantidade de PM a sua escolha (limitada pela sua Inteligência). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        name: "Magias",
        description: "Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante).\nVocê começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Você pode lançar essas magias vestindo armaduras leves mas, se estiver usando armadura pesada, precisará fazer um teste de Misticismo como se fosse um conjurador arcano.\nSeu atributo-chave para lançar magias é Sabedoria e você soma sua Sabedoria no seu total de PM."
      },
      {
        name: "Versiculário",
        description: "No 2º nível, você recebe um versiculário, um livro de anotações religiosas pessoais. Uma vez por dia, você pode gastar 1 hora estudando suas anotações no versiculário. Quando faz isso, escolha uma quantidade de magias igual à sua Inteligência (limitada pelo seu nível). Até o próximo dia, quando lança uma dessas magias, você recebe +1 PM para gastar em aprimoramentos. Se perder seu versiculário, você pode escrever outro com 1 semana de trabalho e o gasto de T$ 100."
      },
      {
        name: "Poder de Frade",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de Frade ou Gerais"
      },
      {
        name: "Dádiva da Fé",
        description: "No 5º nível, você recebe Proteção Sagrada (se sua divindade canaliza energia positiva) ou Cólera Divina (se canaliza energia negativa).",
        subAbilities: [
          {
            name: "Proteção Sagrada",
            description: "Você pode gastar uma ação de movimento e até 2 PM por círculo de magia a que tem acesso para energizar seu símbolo sagrado até o fim da cena. Enquanto você estiver empunhando o símbolo, ele projeta uma aura com 9m de raio. Criaturas a sua escolha dentro dessa aura recebem redução de dano igual à metade do total de PM gastos."
          },
          {
            name: "Cólera Divina",
            description: "Você pode gastar uma ação de movimento e até 2 PM por círculo de magia a que tem acesso para energizar seu símbolo sagrado até o fim da cena. Enquanto você estiver empunhando o símbolo, ele projeta uma aura com 9m de raio. Criaturas a sua escolha dentro dessa aura recebem um bônus em suas rolagens de dano igual à metade do total de PM gastos."
          },
        ]
      },
      {
        name: "Solo Santificado",
        description: "No 20º nível, o raio de sua Dádiva da Fé muda para 30m e criaturas afetadas por ela também somam o bônus concedido pela habilidade na CD de suas próprias habilidades."
      },
    ],
    levelProgression: [
      { level: 1, abilities: "Devoto fiel, erudição, magias (1º círculo)" },
      { level: 2, abilities: "Poder de frade, versiculário" },
      { level: 3, abilities: "Poder de frade" },
      { level: 4, abilities: "Poder de frade" },
      { level: 5, abilities: "Dádiva da fé, magias (2º círculo), poder de frade" },
      { level: 6, abilities: "Poder de frade" },
      { level: 7, abilities: "Poder de frade" },
      { level: 8, abilities: "Poder de frade" },
      { level: 9, abilities: "Magias (3º círculo), poder de frade" },
      { level: 10, abilities: "Poder de frade" },
      { level: 11, abilities: "Poder de frade" },
      { level: 12, abilities: "Poder de frade" },
      { level: 13, abilities: "Magias (4º círculo), poder de frade" },
      { level: 14, abilities: "Poder de frade" },
      { level: 15, abilities: "Poder de frade" },
      { level: 16, abilities: "Poder de frade" },
      { level: 17, abilities: "Magias (5º círculo), poder de frade" },
      { level: 18, abilities: "Poder de frade" },
      { level: 19, abilities: "Poder de frade" },
      { level: 20, abilities: "Poder de frade, solo santificado" }
    ],
    extras: [
    {
      title: "Dom da Ressurreição e Frades",
      description: "O poder concedido Dom da Ressurreição, originalmente limitado a clérigos, também pode ser escolhido por frades de Thyatis."
    },
    ]
    },

    
    
];