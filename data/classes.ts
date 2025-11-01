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
    {
    id: "5",
    name: "Bárbaro",
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
        description: "No 2º nível, e a cada nível seguinte, você escolhe um dos poderes de bárbaro ou geral."
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
    {
    id: "6",
    name: "Bardo",
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
    {
    id: "7",
    name: "Bucaneiro",
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
        description: "No 2º nível, e a cada nível seguinte, você escolhe um Poder."
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
    {
    id: "8",
    name: "Caçador",
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
        description: "No 2º nível, e a cada nível seguinte, você recebe uma habilidade."
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
    {
    id: "9",
    name: "Cavaleiro",
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
    {
    id: "10",
    name: "Clérigo",
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
    },
    {
    id: "11",
    name: "Guerreiro",
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
    {
    id: "12",
    name: "Inventor",
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
    {
    id: "13",
    name: "Lutador",
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
        description: "Seus ataques desarmados causam $1d6$ pontos de dano e podem causar dano letal ou não letal (sem penalidades). A cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais aumentam em dois passos."
      },
      {
        name: "Golpe Relâmpago",
        description: "Quando usa a ação agredir para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado adicional."
      },
      {
        name: "Poder de Lutador",
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder."
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
        description: "No 20º nível, seu dano desarmado aumenta para $2d10$ (para criaturas Médias). Além disso, quando usa a ação agredir para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para fazer um terceiro)."
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
    {
    id: "14",
    name: "Paladino",
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
        description: "No 2º nível, e a cada nível seguinte, você escolhe um poder."
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
    ]
    },
    {
    id: "15",
    name: "Samurai",
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
        description: "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado. Se acertar esse ataque, você recebe $+1d4$ na rolagem de dano. Esse dano extra é multiplicado em caso de acerto crítico. A cada quatro níveis, o bônus de dano aumenta conforme indicado na tabela da classe."
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
];