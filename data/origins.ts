import { Origin } from "@/types/origin";

export const origins: Origin[] = [
  {
    id: "1",
    name: "Acólito",
    description: "Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.",
    items: [
      "Símbolo Sagrado",
      "Traje de Sacerdote",
    ],
    benefits: [
      " Cura, Religião, Vontade (perícias);",
      " Medicina, Membro da Igreja, Vontade de Ferro (poderes).",
    ],
    uniquePower: {
      name: "Membro da Igreja",
      description: "Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Amigo dos Animais",
    description: "Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.",
    items: [
      "Cão de caça, cavalo, pônei ou trobo (escolha um).",
    ],
    benefits: [
      " Adestramento, Cavalgar (perícias);",
      " Amigo Especial (poderes).",
    ],
    uniquePower: {
      name: "Amigo Especial",
      description: "Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia à sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Amnésico",
    description: "Você perdeu a maior parte da memória. Sabe apenas o próprio nome ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de um ente querido ou apenas coisas que pegou de viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Talvez viajando com eles você descubra algo sobre seu passado.",
    items: [
      "Um ou mais itens (somando até T$ 500), aprovados pelo mestre, que podem ser uma pista misteriosa do seu passado.",
    ],
    benefits: [
      " Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre e o poder Lembranças Graduais.",
    ],
    uniquePower: {
      name: "Lembranças Graduais",
      description: "Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Aristocrata",
    description: "Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?",
    items: [
      "Joia de família no valor de T$ 300",
      "Traje da corte",
    ],
    benefits: [
      " Diplomacia, Enganação, Nobreza (perícias);",
      " Comandar, Sangue Azul (poderes).",
    ],
    uniquePower: {
      name: "Sangue Azul",
      description: "Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Artesão",
    description: "Do alfaiate habilidoso em costurar as vestes da nobreza ao armeiro que forja armas letais, você foi treinado por um parente, mestre ou guilda para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas se mostraram úteis durante as aventuras.",
    items: [
      "Instrumentos de ofício (qualquer)",
      "Um item que você possa fabricar de até T$ 50",
    ],
    benefits: [
      " Ofício, Vontade (perícias);",
      " Frutos do Trabalho, Sortudo (poderes).",
    ],
    uniquePower: {
      name: "Frutos do Trabalho",
      description: "No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar veterano, T$ 300 no heroico e T$ 500 no lenda."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Artista",
    description: "Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens “mundanos”, o artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.",
    items: [
      "Estojo de disfarces ou um instrumento musical à sua escolha",
    ],
    benefits: [
      " Atuação, Enganação (perícias);",
      " Atraente, Dom Artístico, Sortudo, Torcida (poderes).",
    ],
    uniquePower: {
      name: "Dom artístico",
      description: "Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Assistente de Laboratório",
    description: "Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu da jaula... enfim, não era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).",
    items: [
      "Instrumentos de Ofício (alquimista).",
    ],
    benefits: [
      " Ofício (alquimista), Misticismo (perícias);",
      " Esse Cheiro..., Venefício, um poder da Tormenta à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Esse Cheiro...",
      description: "Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Batedor",
    description: "Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.",
    items: [
      "Barraca",
      "equipamento de viagem",
      "uma arma simples ou marcial de ataque à distância",
    ],
    benefits: [
      " Furtividade, Percepção, Sobrevivência (perícias);",
      " À Prova de Tudo, Estilo de Disparo, Sentidos Aguçados (poderes).",
    ],
    uniquePower: {
      name: "À Prova de Tudo",
      description: "Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Capanga",
    description: "Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando, quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas de Ahlen, mas sabia erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa época para trás — pelo menos até que alguém precise ser “convencido” a colaborar.",
    items: [
      "Tatuagem ou outro adereço de sua gangue (+1 em Intimidação)",
      "Uma arma simples corpo a corpo",
    ],
    benefits: [
      " Luta, Intimidação (perícias);",
      " Confissão, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Confissão",
      description: "Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Charlatão",
    description: "Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos tão facilmente quanto espadas e magias. Ou melhor.",
    items: [
      "Estojo de disfarces",
      "joia falsificada (valor aparente de T$ 100, sem valor real)",
    ],
    benefits: [
      " Enganação, Jogatina (perícias);",
      " Alpinista Social, Aparência Inofensiva, Sortudo (poderes).",
    ],
    uniquePower: {
      name: "Alpinista Social",
      description: "Você pode substituir testes de Diplomacia por testes de Enganação."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Circense",
    description: "Você treinou acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender seus truques para sobreviver nas ruas. De qualquer forma, são aptidões que podem ser úteis em suas aventuras.",
    items: [
      "Três bolas coloridas para malabarismo (+1 em Atuação)",
    ],
    benefits: [
      " Acrobacia, Atuação, Reflexos (perícias);",
      " Acrobático, Torcida, Truque de Mágica (poderes).",
    ],
    uniquePower: {
      name: "Truque de Mágica",
      description: "Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Criminoso",
    description: "Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!",
    items: [
      "Estojo de disfarces ou gazua",
    ],
    benefits: [
      " Enganação, Furtividade, Ladinagem (perícias);",
      " Punguista, Venefício (poderes).",
    ],
    uniquePower: {
      name: "Punguista",
      description: "Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Curandeiro",
    description: "Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos em Salistick. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil, mesmo quando há um clérigo por perto.",
    items: [
      "Bálsamo restaurador x2",
      "maleta de medicamentos",
    ],
    benefits: [
      " Cura, Vontade (perícias);",
      " Medicina, Médico de Campo, Venefício (poderes).",
    ],
    uniquePower: {
      name: "Médico de Campo",
      description: "Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
];