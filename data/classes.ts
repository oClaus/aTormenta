import { GameClass } from "@/types/class";

export const classes: GameClass[] = [
  {
  id: "1",
  name: "Arcanista",
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
      description: "O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista. \n\n Linhagem Dracônica\n Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio. \n - Básica: Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido. \n - Aprimorada: Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado. \n - Superior: Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia. \n\n Linhagem Feérica \n Seu sangue foi tocado pelas fadas. \n - Básica: Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, à sua escolha. \n - Aprimorada: A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM. \n - Superior: Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena. \n\n Linhagem Rubra\n Seu sangue foi corrompido pela Tormenta. \n - Básica: Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta. \n - Aprimorada: Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo poder da Tormenta, você pode escolher uma nova magia. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma). \n - Superior: Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma)."
    },
  ]
    },
    {
    id: "2",
    name: "Ladino",
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
    {
    id: "3",
    name: "Nobre",
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
    {
    id: "4",
    name: "Druida",
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
      title: "Forma Selvagem",
      description: "Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam. Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.\n\n • Forma Ágil\n    ◦ Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.\n    ◦ Aprimorada. Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).\n    ◦ Superior. Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).\n\n • Forma Feroz\n    ◦ Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.\n    ◦ Aprimorada. Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).\n    ◦ Superior. Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).\n\n • Forma Resistente\n    ◦ Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.\n    ◦ Aprimorada. Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).\n    ◦ Superior. Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).\n\n • Forma Sorrateira\n    ◦ Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra).\n    ◦ Aprimorada. Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).\n    ◦ Superior. Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).\n\n • Forma Veloz\n    ◦ Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.\n    ◦ Aprimorada. Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.\n    ◦ Superior. Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m."
    },
    ]
    },
];