import { Origin } from "@/types/origin";

export const origins: Origin[] = [
  { id: "Acólito",
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
  {
    id: "14",
    name: "Eremita",
    description: "Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.",
    items: [
      "Barraca",
      "Equipamento de viagem",
    ],
    benefits: [
      " Misticismo, Religião, Sobrevivência (perícias);",
      " Busca Interior, Lobo Solitário (poderes).",
    ],
    uniquePower: {
      name: "Busca Interior",
      description: "Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Escravo",
    description: "De minotauros odiosos no Império de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu escravo, fez parte de um povo derrotado na guerra ou foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu algoz? Foi resgatado por aventureiros que agora se tornaram sua nova família?",
    items: [
      "Algemas",
      "uma ferramenta pesada (mesmas estatísticas de uma maça)",
    ],
    benefits: [
      " Atletismo, Fortitude, Furtividade (perícias);",
      " Desejo de Liberdade, Vitalidade (poderes).",
    ],
    uniquePower: {
      name: "Desejo de Liberdade",
      description: "Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Estudioso",
    description: "Não importa se você já nasceu apaixonado por certo assunto, testemunhou um evento incrível que atiçou sua curiosidade ou se viu forçado a estudar por imposição familiar. Longos anos de sua vida foram gastos em meio a livros e pergaminhos. Da engenharia dos anões à geopolítica do Reinado, das táticas militares puristas aos sistemas de conjuração da Academia Arcana, da anatomia dos dragões aos enigmas cósmicos da Tormenta... em Arton não faltam campos a conquistar, segredos a desvendar. Agora, como aventureiro, você tem a chance de vivenciar aquilo que aprendeu e também auxiliar o grupo com o fruto de seus estudos.",
    items: [
      " Coleção de livros (+1 em Conhecimento, Guerra, Investigação, Misticismo, Nobreza ou Ofício, à sua escolha)",
    ],
    benefits: [
      " Conhecimento, Guerra, Misticismo (perícias);",
      " Aparência Inofensiva, Palpite Fundamentado (poderes).",
    ],
    uniquePower: {
      name: "Palpite Fundamentado",
      description: "Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Fazendeiro",
    description: "Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins? Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?",
    items: [
      "Carroça",
      "uma ferramenta agrícola (mesmas estatísticas de uma lança)",
      "10 rações de viagem",
      "um animal não combativo (como uma galinha, porco ou ovelha)",
    ],
    benefits: [
      " Adestramento, Cavalgar, Ofício, Sobrevivência (perícias);",
      " Água no Feijão, Ginete (poderes).",
    ],
    uniquePower: {
      name: "Água no Feijão",
      description: "Você não sofre a penalidade de –5 e não gasta matéria prima adicional para fabricar pratos para cinco pessoas."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Forasteiro",
    description: "Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma figura exótica, de hábitos estranhos. Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora chamando-o de lar? Ou procura até hoje o caminho de volta para casa?",
    items: [
      "Equipamento de viagem",
      "instrumento musical exótico (+1 em uma perícia de Carisma aprovada pelo mestre)",
      "traje estrangeiro",
    ],
    benefits: [
      " Cavalgar, Pilotagem, Sobrevivência (perícias);",
      " Cultura Exótica, Lobo Solitário (poderes).",
    ],
    uniquePower: {
      name: "Cultura Exótica",
      description: "Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Gladiador",
    description: "Combates de arena são um entretenimento popular em Arton — a ponto de atrair muitos jovens praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e outros esportes menos sangrentos. Você se envolveu nesse mundo glamoroso por ser tradição em sua família, por admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.",
    items: [
      "Uma arma marcial ou exótica",
      "um item sem valor recebido de um admirador",
    ],
    benefits: [
      " Atuação, Luta (perícias);",
      " Atraente, Pão e Circo, Torcida, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Pão e Circo",
      description: "Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Guarda",
    description: "Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.",
    items: [
      "Apito",
      "insígnia da milícia",
      "uma arma marcial",
    ],
    benefits: [
      " Investigação, Luta, Percepção (perícias);",
      " Detetive, Investigador, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Detetive",
      description: "Você pode gastar 1 PM para substituir testes de Percepção e Intuição por testes de Investigação até o fim da cena."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Herdeiro",
    description: "Você pertence a uma linhagem de nobres, mercadores, conjuradores, acadêmicos, assassinos, ou outra atividade tradicional em sua família — tão tradicional que, de você, não se espera outra coisa. Pode ser uma longa e antiquíssima ascendência, traçada até antes da Grande Batalha, ou você apenas é filho de uma importante personalidade. Talvez tenha nascido em alguma ordem de cavalaria em Bielefeld, ou uma influente estirpe da nobreza de Deheon, ou como filho de um célebre arquimago com planos de enviá-lo à Academia Arcana, ou até cresceu em um culto familiar secreto a um deus maligno. Graças a essa herança, recebeu treino e equipamento adequados. Mas você pretende mesmo seguir esse caminho?",
    items: [
      "Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!",
    ],
    benefits: [
      " Misticismo, Nobreza, Ofício (perícias);",
      " Comandar, Herança (poderes).",
    ],
    uniquePower: {
      name: "Herança",
      description: "Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Herói Camponês",
    description: "Quando o povoado foi atacado por goblins, você empunhou o forcado para expulsá-los. Quando o estábulo pegou fogo, você se arriscou para salvar todos os animais. Quando todos temiam a mansão assombrada na colina, você encontrou a carta de amor perdida que trouxe descanso à alma torturada. Você era o campeão local, amado pelo povo, mas também destinado a feitos maiores. Houve comoção quando você partiu para uma vida de aventuras, mas ninguém deixou de orar por seu sucesso. Talvez você até tenha sido presenteado com alguma arma ou item há tempos guardado no povoado.",
    items: [
      "Instrumentos de ofício ou uma arma simples",
      "traje de plebeu",
    ],
    benefits: [
      " Adestramento, Ofício (perícias);",
      " Coração Heroico, Sortudo, Surto Heroico, Torcida (poderes).",
    ],
    uniquePower: {
      name: "Coração Heroico",
      description: "Você recebe +3 pontos de mana. Quando atinge um novo patamar (no 5º, 11º e 17º níveis), recebe +3 PM."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "23",
    name: "Marujo",
    description: "Você foi tripulante em uma embarcação — um barco pesqueiro, galé pirata, caravela exploradora, trirreme dos minotauros... — no Mar Negro, no Mar do Dragão-Rei ou mesmo ao longo do imenso Rio dos Deuses. Você também pode ter trabalhado em um veículo exótico, como um dirigível goblin, ou mesmo em uma embarcação mágica, como as naves vivas gog’magogue que viajam entre mundos!",
    items: [
      "T$ 2d6 (seu último salário)",
      "corda",
    ],
    benefits: [
      " Atletismo, Jogatina, Pilotagem (perícias);",
      " Acrobático, Passagem de Navio (poderes).",
    ],
    uniquePower: {
      name: "Passagem de Navio",
      description: "Você consegue transporte marítimo para você e seus aliados, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "24",
    name: "Mateiro",
    description: "Nem todos em Arton vivem em cidades confortavelmente abastecidas por fazendeiros, mineiros ou pescadores — muitas comunidades ainda obtêm sustento através da caça. Você aprendeu cedo a abater animais selvagens para colocar comida na mesa, ou como esporte de gosto duvidoso. Se você caça com reverência a Allihanna ou apenas coleciona troféus com orgulho, a escolha é sua. De qualquer forma, para alguém habituado a flechar cervos e colocar armadilhas para coelhos, combater ogros, demônios e dragões seria apenas o passo seguinte.",
    items: [
      "Arco curto",
      "barraca",
      "equipamento de viagem",
      "20 flechas",
    ],
    benefits: [
      " Atletismo, Furtividade, Sobrevivência (perícias);",
      " Lobo Solitário, Sentidos Aguçados, Vendedor de Carcaças (poderes).",
    ],
    uniquePower: {
      name: "Vendedor de Carcaças",
      description: "Você pode extrair recursos de criaturas em um minuto, em vez de uma hora, e recebe +5 no teste."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "25",
    name: "Membro de Guilda",
    description: "Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus antigos mestres?",
    items: [
      "Gazua ou instrumentos de ofício",
    ],
    benefits: [
      " Diplomacia, Enganação, Misticismo, Ofício (perícias);",
      " Foco em Perícia, Rede de Contatos (poderes).",
    ],
    uniquePower: {
      name: "Rede de Contatos",
      description: "Graças à influência de sua guilda, você pode usar Diplomacia para interrogar sem custo e em uma hora (veja Investigação)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "26",
    name: "Mercador",
    description: "Seguindo uma tradição de família, após herdar um estabelecimento ou apenas como um jovem empregado, você atuou como comerciante — pelo menos por algum tempo. Uma tenda modesta em algum grande mercado urbano? Uma caravana mercante cruzando o Reinado? Um belo bazar na prestigiada cidade voadora de Vectora? Após alguns anos de negociações e jornadas (nem tão tranquilas quanto outros imaginam), você talvez não tenha ficado rico, mas reuniu algum equipamento e dinheiro suficientes para começar carreira como aventureiro.",
    items: [
      "Carroça",
      "trobo",
      "mercadorias para vender no valor de T$ 100",
    ],
    benefits: [
      " Diplomacia, Intuição, Ofício (perícias);",
      " Negociação, Proficiência, Sortudo (poderes).",
    ],
    uniquePower: {
      name: "Negociação",
      description: "Você pode vender itens 10% mais caro (não cumulativo com barganha)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "27",
    name: "Minerador",
    description: "Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.",
    items: [
      "Gemas preciosas no valor de T$ 100",
      "picareta",
    ],
    benefits: [
      " Atletismo, Fortitude, Ofício(Minerador) (perícias);",
      " Ataque Poderoso, Escavador, Sentidos Aguçados (poderes).",
    ],
    uniquePower: {
      name: "Escavador",
      description: "Você se torna proficiente em picaretas, causa +1 de dano com elas e não é afetado por terreno difícil em masmorras e subterrâneos."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "28",
    name: "Nômade",
    description: "Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem criar raízes, enquanto a deusa Valkaria exige que seus devotos se mantenham sempre em viagem. Para você, habituado às estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.",
    items: [
      "Bordão",
      "equipamento de viagem",
    ],
    benefits: [
      " Cavalgar, Pilotagem, Sobrevivência (perícias);",
      " Lobo Solitário, Mochileiro, Sentidos Aguçados (poderes).",
    ],
    uniquePower: {
      name: "Mochileiro",
      description: "Seu limite de carga aumenta em 5 espaços."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "29",
    name: "Pivete",
    description: "Você era uma criança de rua. Não conheceu seus pais, foi abandonado por eles ou fugiu para evitar maus tratos. Sem muitas escolhas na vida, aprendeu cedo a sobreviver em grandes cidades, pedindo esmolas, roubando bolsas ou cumprindo pequenas tarefas para bandidos. Tornar-se aventureiro não parecia apenas um jeito de ficar rico e famoso, mas também a única chance de uma vida melhor. Talvez você não tenha as armaduras e mantos chiques de seus companheiros, mas sabe se virar nas ruas melhor que ninguém.",
    items: [
      "Gazua",
      "traje de plebeu",
      "um animal urbano (como um cão, gato, rato ou pombo)",
    ],
    benefits: [
      " Furtividade, Iniciativa, Ladinagem (perícias);",
      " Acrobático, Aparência Inofensiva, Quebra-Galho (poderes).",
    ],
    uniquePower: {
      name: "Quebra-Galho",
      description: "Em cidades ou metrópoles, você pode comprar qualquer item mundano não superior por metade do preço normal. Esses itens não podem ser matérias-primas e não podem ser revendidos (são velhos, sujos, furtados...)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Refugiado",
    name: "Refugiado",
    description: "Neste mundo assolado por tantas guerras e tragédias, você acabou sobrevivendo a alguma delas. Sendo elfo, estava presente durante a sofrida queda de Lenórienn. Escapou à destruição de Tamu-ra. Teve sorte em sair do caminho de Mestre Arsenal, conseguiu esconder-se das forças puristas ou testemunhou a chegada da Flecha de Fogo e viveu para contar a história. Trauma e privações talvez tenham tornado você amargo, sombrio, embrutecido... mas também um sobrevivente tenaz, acostumado a uma vida perigosa.",
    items: [
      "Um item estrangeiro de até T$ 100",
    ],
    benefits: [
      " Fortitude, Reflexos, Vontade (perícias);",
      " Estoico, Vontade de Ferro (poderes).",
    ],
    uniquePower: {
      name: "Estoico",
      description: "Sua condição de descanso é uma categoria acima do padrão pela situação (normal em condições ruins, confortável em condições normais e luxuosa em condições confortáveis ou melhores)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Seguidor",
    name: "Seguidor",
    description: "Você não nasceu herói, mas viveu algum tempo na companhia de um. Pode ter sido escudeiro de um cavaleiro de Khalmyr, garoto de recados para um ladino, criado de um nobre... enfim, um ajudante para um aventureiro de verdade. Durante esse tempo adquiriu aprendizado valioso, testemunhou eventos incríveis, mas você não seria um seguidor para sempre. Como ocorreu a separação? Você apenas disse adeus e trilhou seu próprio caminho? Seu mestre desapareceu de forma misteriosa ou foi assassinado diante de seus olhos? Você ficou com parte de seus itens, como presente ou lembrança?",
    items: [
      "Um item recebido de seu mestre de até T$ 100",
    ],
    benefits: [
      " Adestramento, Ofício (perícias);",
      " Antigo Mestre, Proficiência, Surto Heroico (poderes).",
    ],
    uniquePower: {
      name: "Antigo Mestre",
      description: "Você ainda mantém contato com o herói que costumava servir. Uma vez por aventura, ele surge para ajudá-lo por uma cena. Ele é um parceiro mestre de um tipo à sua escolha (definido ao obter este poder) que não conta em seu limite de parceiros."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Selvagem",
    name: "Selvagem",
    description: "Você nasceu em uma tribo de bárbaros incultos ou tem uma origem bem mais exótica. Perdeu-se dos pais verdadeiros em alguma região remota, sobrevivendo graças aos cuidados de um eremita, ou criado por animais, ou por pura bondade dos deuses. Você pode nem mesmo ter nascido de pais humanoides — talvez seja cria de dragões, demônios ou deuses, com poderes a serem revelados no momento certo. Será que você ainda teme a civilização, assustando-se com uma simples fogueira? Ou já aprendeu algumas coisas, graças a seus novos companheiros?",
    items: [
      "Uma arma simples",
      "um pequeno animal de estimação como um pássaro ou esquilo",
    ],
    benefits: [
      " Percepção, Reflexos, Sobrevivência (perícias);",
      " Lobo Solitário, Vida Rústica, Vitalidade (poderes).",
    ],
    uniquePower: {
      name: "Vida Rústica",
      description: "Você come coisas que fariam um avestruz vomitar (sendo imune a efeitos prejudiciais de itens ingeríveis) e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior ao seu próprio nível)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Soldado",
    name: "Soldado",
    description: "Deheon. Bielefeld. A Supremacia Purista. Em Arton existem vastas forças militares. Ainda jovem, você se alistou (ou foi convocado) como soldado em um grande exército. Independentemente de sua função exata dentro da máquina de guerra — infantaria, cavalaria, arqueiro, cozinheiro... —, você recebeu treinamento em combate e equipamento decente. Mas em alguma ocasião você abandonou a vida militar para se tornar aventureiro. Foi dispensado com honras, após uma grande façanha? Sobreviveu a um conflito sangrento? Desertou antes de um massacre?",
    items: [
      "Uma arma marcial",
      "um uniforme militar",
      "uma insígnia de seu exército",
    ],
    benefits: [
      " Fortitude, Guerra, Luta, Pontaria (perícias);",
      " Influência Militar, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Influência Militar",
      description: "Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Taverneiro",
    name: "Taverneiro",
    description: "Não é incomum que heróis aposentados se tornem donos de tavernas ou estalagens, mas o contrário também pode ocorrer. Você foi dono, filho do dono ou empregado em algum lugar frequentado por aventureiros — esses tipos sempre cheios de ouro e bravatas, atiçando sua ambição. Claro, eles nem sempre mencionam os horrores, amputações e mortes! Ainda assim, parece bem melhor que a vida atrás do balcão, limpando canecas sujas. Você ouviu todas as grandes histórias, trocou socos em algumas brigas e até ganhou uma lembrança ou outra de algum herói bêbado.",
    items: [
      "Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava)",
      "uma panela",
      "um avental",
      "uma caneca",
      "pano sujo",
    ],
    benefits: [
      " Diplomacia, Jogatina, Ofício (cozinheiro) (perícias);",
      " Gororoba, Proficiência, Vitalidade (poderes).",
    ],
    uniquePower: {
      name: "Gororoba",
      description: "Você não sofre a penalidade de –5 para fabricar um prato especial adicional."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Trabalhador",
    name: "Trabalhador",
    description: "Nenhum glamour aqui, apenas trabalho braçal pesado. De origem humilde, sem grandes chances na vida, você trabalhou duro desde muito jovem. Transportou pedras na construção de templos e castelos, carregou sacas de grãos em fazendas, empilhou cargas em portos, puxou arado feito um animal de tração. Talvez sua vida tenha sido um pouco melhor, como servo em um palácio. Ou muito pior, arrastando ou queimando corpos em campos de batalha. Não é surpresa que a carreira como aventureiro, mesmo perigosa, tenha parecido muito mais atraente.",
    items: [
      "Uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, à sua escolha)",
    ],
    benefits: [
      " Atletismo, Fortitude (perícias);",
      " Atlético, Esforçado (poderes).",
    ],
    uniquePower: {
      name: "Esforçado",
      description: "Você não teme trabalho duro, nem prazos apertados. Você recebe +2 em todos os testes de perícias estendidos (incluindo perigos complexos)."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  { id: "Discípulo de um Campeão",
    name: "Discípulo de um Campeão",
    description: "Desde jovem, você foi treinado para ser um dos melhores: um veterano da Guerra Artoniana. Um verdadeiro herói o tomou sob sua proteção e ensinou seus melhores truques e técnicas para que você possa se aventurar e construir seus próprios feitos. Como você se relaciona com seu mentor é uma decisão sua; alguns discípulos viajam junto de seus mentores já envelhecidos, outros escondem seu passado e tentam escapar da sua sombra, enquanto outros ainda têm muito orgulho e tentam garantir a longevidade desse legado.",
    items: [
      "Uma arma marcial",
      "cinco itens alquímicos escolhidos entre ácido, bálsamo restaurador e fogo alquímico",
    ],
    benefits: [
      " Luta, Pontaria, Vontade (perícias);",
      " Atlético, Mestre Presente, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Mestre Presente",
      description: "Seu mestre viaja com você. Ele está fragilizado pela idade e pelos rigores da guerra, mas ainda consegue lhe orientar como um aliado do tipo mentor iniciante. Quando você atinge o 7º nível, seu mestre não tem mais nada a lhe ensinar, mas ainda pode o ajudar de outras formas. Escolha um tipo de aliado entre assassino, atirador, combatente, destruidor, fortão, guardião, médico, perseguidor ou vigilante. Seu mestre perde o tipo mentor e se torna um aliado veterano do tipo escolhido. Uma vez feita, esta escolha não pode ser mudada."
    },
    source: "Dragão Brasil"
  },
  { id: "Súdito dos Aesir",
    name: "Súdito dos Aesir",
    description: "Asgard é mais que um reino — é uma verdadeira fortaleza onde habitam os deuses Aesir, seus súditos e os mais valorosos guerreiros de todos os tempos. Forasteiros não sabem exatamente como é o lugar, já que Odin não permite o acesso a Asgard vindo de outros Reinos. Os sortudos que conseguiram pisar neste Reino sem alertar Odin conhecem a paisagem paradisíaca e idílica, com planícies praticamente inabitadas do lado de fora das grandes Muralhas de Asgard. Dos muros para dentro, o acesso é ainda mais restrito e vigiado por Heimdall, o Vigilante dos Aesir. Você vive nos domínios dos Aesir, os grandes deuses, sempre disponível para cumprir suas ordens e caprichos sem hesitar. Essa proximidade com o divino faz com que sua saúde e boa sorte sejam quase inabaláveis, assim como sua fé.",
    items: [
      "Um acessório com a runa de um dos Aesir, que concede +1 em Fortitude, Reflexos ou Vontade (escolhido na criação de personagem)",
    ],
    benefits: [
      " Conhecimento, Diplomacia, Religião (perícias);",
      " Sortudo, Súplica aos Aesir (poderes).",
    ],
    uniquePower: {
      name: "Súplica aos Aesir",
      description: "Quando faz um teste de perícia (exceto testes de ataque ou resistência), você pode gastar 1 PM para fazer uma rápida oração aos deuses e receber um bônus de +2 nesse teste. A cada quatro níveis, você pode gastar +1 PM para aumentar esse bônus em +1."
    },
    source: "Dragão Brasil - God of War"
  },
  { id: "Retornado de Helheim",
    name: "Retornado de Helheim",
    description: "Este Reino congelante é a pós-vida para a maioria das pessoas — aquelas que tiveram uma morte honrada em campo de batalha. Vítimas de assassinato, doença ou velhice vêm parar aqui. É dito que o frio é tão castigador que é capaz de congelar almas. Criaturas cruéis torturam os mortos, que são obrigados a reviverem seus maiores arrependimentos em vida. De alguma forma você retornou do reino dos mortos, seja por conta de uma encantamento poderoso ou mero capricho dos Aesir. Seu corpo retornou de forma saudável, mas sua mente retém as memórias do inferno gelado.",
    items: [
      "Um acessório ou arma simples ligada ao motivo de sua primeira morte. Enquanto você estiver empunhando ou vestindo o item, seus pontos de mana máximos aumentam em +1",
    ],
    benefits: [
      " Intimidação, Sobrevivência, Vontade (perícias);",
      " Mente Calejada, Presença Aterradora (poderes).",
    ],
    uniquePower: {
      name: "Mente Calejada",
      description: "Acostumado aos horrores que presenciou em Helheim, você recebe +5 em testes de resistência contra efeitos de medo e é imune à condição apavorado. Efeitos que o deixariam apavorado, deixam abalado ao invés disso."
    },
    source: "Dragão Brasil - God of War"
  },
  { id: "Nativo de Midgard",
    name: "Nativo de Midgard",
    description: "O nome deste Reino significa, literalmente, “terra do meio” e não poderia ser mais certeiro. Considerado um lugar no meio do caminho entre todos os outros reinos, Midgard é a terra dos humanos e dos animais. Apesar da baixa temperatura, possui terras cultiváveis, rios e mares fecundos. Os habitantes não têm contato direto com os deuses, oferecendo apenas sua devoção e fidelidade. Apesar disso, ao longo dos acontecimentos de God of War é possível ver que os deuses estão mais presentes em Midgard do que se esperaria. Você cresceu ao lado de grandes heróis e guerreiros, sendo preparado para o Ragnarok desde sua infância.",
    items: [
      "Uma arma simples ou marcial que saiba usar",
      "um escudo leve (se souber usar escudos)",
    ],
    benefits: [
      " Atletismo, Luta, Pontaria, Sobrevivência (perícias);",
      " Em busca do Valhalla, Proficiência, um poder de combate à sua escolha (poderes).",
    ],
    uniquePower: {
      name: "Em busca do Valhalla",
      description: "Você vive apenas por uma morte gloriosa em combate, para que as valkírias reconheçam seu valor e carreguem sua alma imortal até os salões dos grandes guerreiros. Sempre que estiver lutando contra ameaças de ND maior que o seu nível, você recebe +2 em testes de ataque e rolagens de dano, mas sofre uma penalidade de –2 na Defesa e em testes de resistência."
    },
    source: "Dragão Brasil - God of War"
  },
  { id: "Sobrevivente da Névoa",
    name: "Sobrevivente da Névoa",
    description: "Provavelmente o menor dos Reinos, e ainda assim, um lugar traiçoeiro e perigoso. Uma vez lar de anões, agora este é um verdadeiro labirinto tomado por uma névoa espessa — a arquitetura anã é apenas um rastro do que já existiu antes. A névoa foi uma maldição lançada por Odin e drena lentamente a energia vital de qualquer um que ouse explorar o Reino. Não bastasse isso, Nilfheim está cheio de monstros. De alguma maneira você sobreviveu à maldição que destruiu seu reino e conseguiu sair do labirinto de monstros, mas essa experiência o marcou para sempre.",
    items: [
      "Lampião",
      "mochila de aventureiro",
      "capa pesada",
    ],
    benefits: [
      " Atletismo, Furtividade e Sobrevivência (perícias);",
      " Atlético, Rastejador de Masmorras (poderes).",
    ],
    uniquePower: {
      name: "Rastejador de Masmorras",
      description: "Você sabe se esgueirar em silêncio através dos ambientes mais hostis para não atrair atenção indesejada. Você não sofre penalidade de –5 em Furtividade para para se esconder depois de se mover e sua penalidade de armadura não se aplica em testes de Furtividade."
    },
    source: "Dragão Brasil - God of War"
  },
  { id: "Bacharel",
    name: "Bacharel",
    description: "Para que a justiça de Khalmyr seja cumprida, os inocentes devem ser protegidos e os culpados, punidos. Seja atuando em grandes tribunais do Reinado, seja resolvendo tumultos locais repentinos em que alguém pode acabar na forca, você foi treinado para argumentar, questionar, debater, objetar. É capaz de defender vítimas e acusar criminosos, utilizando como arma apenas argumentos, jurisprudências, filosofia e bom senso. Quando dizem que a pena é mais poderosa que a espada, estão falando sobre você.",
    items: [
      "Tabardo com o símbolo de Khalmyr",
      "Uma coleção de livros a sua escolha",
    ],
    benefits: [
      "Você é treinado em Conhecimento, Diplomacia e Nobreza. Além disso, uma vez por cena pode usar Diplomacia para mudar atitude como uma ação livre.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Boticário",
    name: "Boticário",
    description: "Você foi aprendiz de um especialista em ervas, poções e misturas alquímicas, alguém capaz de curar doenças, fabricar elixires e até criar venenos. Na loja de seu mestre, repleta de frascos misteriosos e ingredientes exóticos, você passava os dias triturando raízes, destilando essências e consultando grimórios antigos. Seus clientes variavam de camponeses com males comuns a magos em busca de componentes raros. Seu trabalho não era livre de perigos: ao manusear substâncias exóticas, uma dosagem errada podia ser fatal. Talvez você tenha cometido um erro terrível que levou a seu banimento? Seus atuais colegas aventureiros sabem disso?",
    items: [
      "Bálsamo restaurador",
      "Instrumentos de Ofício (alquimista)",
      "Maleta de medicamentos"
    ],
    benefits: [
      "Você é treinado em Cura e Ofício (alquimista). Além disso, pode fabricar poções de duas fórmulas de 1º círculo a sua escolha, como se tivesse o poder Alquimista Iniciado ",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Caçador de Ratos",
    name: "Caçador de Ratos",
    description: "Quando o porão da taverna está infestado de ratos, morcegos ou glops, isso pode ser trabalho para heróis iniciantes — ou para um bom caçador de ratos, como você costumava ser! Recorrendo a armadilhas, venenos ou mesmo bons golpes de clava, você sempre soube como livrar seus clientes dessas pestes. Até aquele dia, quando os ratos pareciam um pouco grandes demais, com dentes demais e olhos vermelhos demais. Você escapou sem muitos pedaços faltando. Então vieram aventureiros e deram um jeito. Eram bem durões! Você resolveu que seria durão também. Nunca mais nenhum rato crescido levaria a melhor, nem pensar!",
    items: [
      "Clava",
      "Um gato (um parceiro perseguidor iniciante)",
      'T$ 50 (recompensa por sua última caçada)'
    ],
    benefits: [
      "Você é treinado em Furtividade, Investigação e Sobrevivência, e recebe +2 em testes de perícias contra criaturas de duas categorias de tamanho menor que a sua (mínimo Minúsculas).",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Cão de Briga",
    name: "Cão de Briga",
    description: "Nem todas as lutas com plateia envolvem gladiadores glamorosos em coliseus imponentes. Existe no Reinado um vasto submundo de torneios clandestinos, com poucas ou nenhuma regra, muito mais sangrentos. São sediados em tavernas suspeitas, galpões escuros, câmaras de esgotos ou mesmo masmorras, onde capangas armados garantem acesso a um público seleto. Sem carisma suficiente para as grandes arenas, mas com brutalidade de sobra, você foi um desses lutadores. O que teria acontecido para levá-lo a abandonar essa vida, juntando-se a um grupo de aventureiros?",
    items: [
      "Manoplas ou uma arma marcial",
    ],
    benefits: [
      "Na primeira vez a cada cena em que você faz a ação agredir, pode fazer um ataque extra.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Carcereiro",
    name: "Carcereiro",
    description: "Em Arton, cuidar de calabouços e prisões não é tarefa simples. Claro que havia ladrões e capangas comuns, mas muitas vezes você precisou vigiar prisioneiros mais estranhos e perigosos: assassinos, cultistas, bruxos, monstros, seres sobrenaturais. Como quando o ogro ficou faminto e simplesmente arrebentou as grades. Ou quando você encontrou a própria Rainha-Imperatriz Shivara na cela, descobrindo tarde demais ser um duplo. Ou quando aquele sszzaazita conjurou algum encanto que o forçou a entregar as chaves. Com os diabos, se você precisa mesmo viver em masmorras escuras e lidar com bandidos e monstros, que seja com um grupo de aventureiros!",
    items: [
      "Algemas",
      "Lampião",
      'uma arma de até T$ 500 a sua escolha, que você pode ou não ter obtido de um detento'
    ],
    benefits: [
      "Você recebe +2 em testes contra efeitos mentais, Enganação, Furtividade e Intimidação",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Carpinteiro de Guilda",
    name: "Carpinteiro de Guilda",
    description: "Você foi treinado em uma guilda especializada. Mais do que um mero faz-tudo em uma aldeia, você era um artesão versátil, responsável por construir e reparar desde simples mobílias até estruturas de madeira complexas, como pontes, navios e fortalezas. Seu dia começava com a escolha da melhor madeira, coletada nas redondezas ou proveniente das florestas mágicas de Tollon. Com serras, formões e martelos, você transformava troncos em criações duráveis e esteticamente belas. Entre fabricar um arco e flechas para um caçador e uma balestra para o navio de um bucaneiro, vez por outra você acabava envolvido com aventureiros. Até decidir se envolver ainda mais.",
    items: [
      "Instrumentos de Ofício (carpinteiro)",
      "uma arma de corte a sua escolha",
    ],
    benefits: [
      "Você é treinado em Ofício (artesão). Além disso, recebe redução de corte 2 e, em suas mãos, armas de corte ignoram 5 pontos de redução de dano.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Catador da Catástrofe",
    name: "Catador da Catástrofe",
    description: "A queda da Flecha de Fogo. As Guerras Táuricas. A invasão de Lenórienn. Todos os eventos cataclísmicos da história de Arton deixam ruínas e vítimas inocentes. Você foi uma delas. Antes de começar a caçar tesouros em masmorras cheias de monstros, você vasculhou lugares bem menos perigosos (mas igualmente sujos) em busca de sustento: terrenos devastados ou empobrecidos por alguma hecatombe. Você precisou viver dos restos deixados por um desses eventos — mantimentos nas ruínas de armazéns, comida em cozinhas palacianas devastadas, vazamentos em laboratórios de alquimia... Muitas vezes vendeu produtos de suas coletas por preços camaradas, mas o melhor você guardou para si mesmo. Talvez até tenha achado alguma coisa útil para um futuro aventureiro!",
    items: [
      "Dois equipamentos de aventura de até T$ 150 cada a sua escolha",
    ],
    benefits: [
      "Você é treinado em Fortitude e Percepção. No início de cada aventura, pode fazer um teste de Percepção (CD 15 + metade do seu nível). Se passar, encontra um tesouro correspondente a seu próprio ND, escolhido pelo mestre ou rolado nas colunas Dinheiro e Itens",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Chef Hynne",
    name: "Chef Hynne",
    description: "Você cozinhava em algum castelo, taverna, navio ou quartel militar, preparando refeições para nobres, guerreiros, marujos e viajantes. Mas, mais do que apenas preparar comida, você mantinha viva a tradição gastronômica de Hongari, o antigo Reino dos Hynne, engolfado por Aslothia. Mesmo que você não seja um hynne, reconhece o valor (e o sabor!) dessa culinária única em Arton. Entre caldeirões fumegantes e facas afiadas, seus pratos não apenas alimentavam, mas também revitalizavam, às vezes incluindo poções ou encantamentos sutis. Sua habilidade não apenas garantia a satisfação de seus senhores, mas também influenciava alianças e eventos — uma refeição bem servida podia selar pactos ou preparar heróis para batalhas épicas. Heróis... sim, você também poderia ser um deles!",
    items: [
      "Cutelo (mesmas estatísticas de uma foice) ",
      "instrumentos de cozinheiro aprimorados",
    ],
    benefits: [
      "Você é treinado em Ofício (cozinheiro). Quando prepara um prato especial, seu benefício dura mais 1 dia (se for um benefício com um uso diário, ele pode ser usado novamente nesse dia).",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Cirurgião-Barbeiro",
    name: "Cirurgião-Barbeiro",
    description: "Atuando em algum vilarejo, porto ou navio, além de cortar cabelos e barbas, você realizava procedimentos médicos rudimentares, como extração de dentes, tratamento de feridas e amputações. Munido de facas afiadas, ervas curativas, bebida forte (a título de anestesia) e conhecimento prático transmitido por gerações, você tratava de camponeses adoentados, feridos em acidentes ou atacados por feras. Suas habilidades misturavam medicina, alquimia e intuição, sendo a última esperança dos aflitos quando não havia curas milagrosas por perto. Grandes coisas, esses tais clérigos! Tudo se resolve cortando fora a parte que dói!",
    items: [
      "Dente falso",
      "instrumentos de barbeiro",
      'maleta de medicamentos'
    ],
    benefits: [
      "Você é treinado em Cura e Ofício (barbeiro). Além disso, pode gastar uma ação completa e 2 PM para remover uma das seguintes condições de uma criatura adjacente: abalado, alquebrado, apavorado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo e surdo. Contudo, a criatura também perde 1d6 pontos de vida.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Citadino Abastado",
    name: "Citadino Abastado",
    description: "Você nasceu em uma família rica de comerciantes ou artesãos de uma grande cidade como Valkaria, Thartann ou Tiberus. Com acesso a boa educação, cresceu com preocupações diferentes de um aldeão ou trabalhador comum. Talvez tenha sido incentivado (ou forçado) por seus pais a honrar esses privilégios, treinando duro para ser alguém melhor — ou fez isso por iniciativa própria. Seja como for, esteve sempre apenas um degrau abaixo da nobreza, mas sendo lembrado o tempo todo de que não era um nobre verdadeiro. Agora você procura provar seu valor para sua família, para aqueles que o menosprezaram, para uma pessoa importante ou para si mesmo.",
    items: [
      "Uma arma, armadura, ferramenta ou vestuário no valor de até T$ 500",
    ],
    benefits: [
      "Você é treinado em Nobreza e em um Ofício a sua escolha. Se estiver em uma cidade grande (a critério do mestre), pode gastar tibares para aprender algum conhecimento local útil. O custo é T$ 10 x seu nível. Se fizer isso, escolha um poder de combate, de destino ou de uma de suas classes cujos pré-requisitos você cumpra (o mestre determina se um poder está disponível na cidade). Até o fim da aventura, ou até usar esta habilidade novamente, você pode usar o poder escolhido por uma cena.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Cocheiro",
    name: "Cocheiro",
    description: "Você costumava conduzir e manter carroças, carruagens, diligências e outros veículos puxados por animais, transportando passageiros e mercadorias através dos ermos. Além de garantir que os cavalos (ou trobos, ou outras bestas) estivessem bem alimentados e cuidados, cabia-lhe saber navegar por trilhas perigosas e enfrentar desafios como bandidos ou predadores, enquanto protegia seus passageiros. Sua habilidade de manejar as rédeas e seu conhecimento das rotas tornavam-no um guia confiável, essencial para o transporte (quase sempre) seguro nos reinos. Então houve aquele dia, quando você levou um bando de esquisitos até a entrada de uma masmorra...",
    items: [
      "Cavalo ou trobo",
      "carroça",
    ],
    benefits: [
      "Você é treinado em Adestramento e Pilotagem e, quando está conduzindo um veículo, você e o veículo recebem +2 na Defesa e em testes de resistência",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Construtor",
    name: "Construtor",
    description: "Nem tudo construído em Arton foi obra de algum inventor aventureiro, capaz de produzir engenhocas miraculosas que rivalizam com a própria magia. Para empreendimentos mais comuns, porém importantes — casas, castelos, estradas, pontes, muralhas... —, bastam construtores bem treinados e esforçados. Você estava satisfeito labutando com as próprias mãos ou liderando outros trabalhadores, erguendo edificações, gerenciando obras, usando suas habilidades para tornar vidas melhores. Poderia fazer isso para sempre, feliz e produtivo. O que aconteceu? Um gigante derrubou sua muralha? Um dragão destruiu seu castelo? Como você acabou em um grupo de aventureiros?",
    items: [
      "Instrumentos de pedreiro ou uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, a sua escolha)",
    ],
    benefits: [
      "Você é treinado em Fortitude e Ofício (pedreiro). Além disso, sabe encontrar pontos fracos em construções e estruturas. Pode pagar 2 PM para que você ou um aliado em alcance curto ignore 5 pontos da redução de dano de uma criatura ou objeto em alcance curto por uma cena",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Contrabandista",
    name: "Contrabandista",
    description: "Itens mágicos malditos. Relíquias roubadas. Armas de pólvora. Monstros para a Arena de Valkaria. Matéria vermelha. No passado, você foi alguém que fez “mercadorias” como essas chegarem a seus compradores. Atravessava o continente sob disfarce, enganando ou subornando as patrulhas para ignorarem sua carga proibida. Trabalho perigoso, mas lucrativo. Um dia, as coisas não saíram como deveriam. Você, ou alguém importante, pagou um preço terrível. Então você conheceu uma carreira ainda mais perigosa e ainda mais lucrativa, mas desta vez abençoada pelos deuses.",
    items: [
      "Uma arma de fogo, ou 10 doses de venenos, com preço total de até T$ 500",
    ],
    benefits: [
      "Você é treinado em Enganação e Ladinagem, e recebe +5 em testes de Ladinagem para ocultar itens em si mesmo ou em veículos. Além disso, sua capacidade de carga aumenta em 2 espaços",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Coureiro",
    name: "Coureiro",
    description: "Você era um artesão especializado no tratamento e modelagem de peles e couros, criando armaduras, roupas, botas e acessórios essenciais para viajantes, caçadores e nobres. Após uma atenta seleção de peles, provenientes de animais comuns ou monstros, vinha o cuidadoso processo de curtição. Você trabalhava o material com precisão, usando facas, agulhas e moldes. Além de vestimentas, também fabricava itens de uso diário como algibeiras, bolsas, selas e cintos, que combinavam durabilidade e estilo. Aquele dia, quando aventureiros trouxeram couro de lagarto-trovão para confeccionar uma armadura, foi desafiador. E também interessante...",
    items: [
      "Faca de corte (como uma adaga, mas com dano de corte)",
      "instrumentos de coureiro",
      'T$ 100 em itens alquímicos'
    ],
    benefits: [
      "Você é treinado em Fortitude e Ofício (coureiro). Além disso, pode gastar 10 minutos e T$ 10 para trabalhar em uma armadura de couro (incluindo couro batido, gibão de peles e brunea), aumentar a Defesa dela em +1 e reduzir sua penalidade de armadura em –2 por um dia",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Escriba",
    name: "Escriba",
    description: "Seu antigo trabalho era copiar documentos para preservar textos religiosos, literários, científicos e legais — em Arton, escribas são essenciais para a disseminação de conhecimento e cultura, incentivados pela Igreja de Tanna-Toh. Trabalhando em um mosteiro, uma biblioteca ou na corte de um nobre, você transcrevia manuscritos com precisão e habilidade, além de embelezá-los com iluminuras e decorações. Você também tratava pergaminhos e papiros, corrigia erros e traduzia obras para diferentes línguas, mostrando atenção aos detalhes, paciência e profundo conhecimento de língua e caligrafia. Um dia, após ler muitas histórias de aventura, decidiu ser protagonista em vez de apenas um figurante.",
    items: [
      "Instrumentos de escriba",
      "organizador de pergaminhos",
      'uma coleção de livros a sua escolha'
    ],
    benefits: [
      "Você é treinado em Conhecimento e Ofício (escriba) e recebe o poder de bardo Lendas e Histórias. Se receber esse poder novamente, em seu lugar recebe um bônus de +5 ao rolar novamente um teste usando seu efeito.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Espião",
    name: "Espião",
    description: "No passado, sua lealdade pertencia secretamente a algum governo, exército, igreja, culto, guilda ou patrono poderoso, talvez até mesmo um vilão. Você fingia ser aliado daqueles que espionava, enviando relatórios regulares sobre suas atividades e segredos. Fazia isso por acreditar ser a coisa certa, ou por dinheiro, ou forçado por seu patrono — através de controle mental, chantagem ou um refém. Um dia foi desmascarado, ou traído por seu patrono, ou apenas desistiu. Não voltaria a confiar em ninguém por muito tempo, até acabar viajando com aventureiros. São seus primeiros amigos leais. Mas eles sabem sobre seu passado?",
    items: [
      "Estojo de disfarces",
      "gazua",
      'luneta',
      'três doses de cosmético'
    ],
    benefits: [
      "Você é treinado em Enganação e Ladinagem. Além disso, escolha uma de suas perícias (exceto Luta ou Pontaria). Você pode usar Carisma como atributo-chave dessa perícia (em vez do atributo original)",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Ferreiro Militar",
    name: "Ferreiro Militar",
    description: "Você participou de uma das guerras na história recente de Arton, mas não como combatente. Você forjava armas e armaduras para soldados e oficiais. Sua rotina começava antes de o sol nascer, acendendo a forja e moldando o metal incandescente com golpes precisos de seu martelo. Às vezes você lidava com materiais raros, como adamante, mitral ou aço-rubi. Entre faíscas e o som do metal sendo trabalhado, você não produzia apenas instrumentos de combate, mas também itens cotidianos como ferraduras e pregos, que também salvam vidas e podem decidir batalhas. Muitas vezes também foi visitado por heróis, que pediam informações sobre armas lendárias ou reparos em seus equipamentos. Até que, um dia, decidiu acompanhá-los.",
    items: [
      "Instrumentos de armeiro",
      "martelo leve",
    ],
    benefits: [
      "Você é treinado em Ofício (armeiro). Além disso, recebe +2 em rolagens de dano com martelos e marretas de qualquer tipo",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Freira",
    name: "Freira",
    description: "Mesmo sem os milagres dos clérigos e frades, você se dedicava ao serviço espiritual, à caridade e à proteção dos vulneráveis. Vivendo em um convento isolado ou abadia fortificada, mantinha uma rotina de orações, cultivo de ervas medicinais, preparo de remédios e cuidado de enfermos. Muitas vezes também atuava como conselheira para heróis em busca de redenção ou orientação. E, em tempos de crise, chegava a defender o convento contra ameaças, até recorrendo a relíquias sagradas e antigos rituais para proteger os inocentes. Considerando sua vocação, bastou um pequeno passo para você se reunir a aventureiros e se tornar uma campeã do bem.",
    items: [
      "Maleta de medicamentos",
      "manto eclesiástico",
      'símbolo sagrado'
    ],
    benefits: [
      "Você é treinada em Cura. Quando faz um teste para ajudar, você pode gastar 1 PM para aumentar o bônus da ajuda em +1d4 e, quando usa um efeito de cura, pode gastar 1 PM para aumentar esse efeito em +1 dado do mesmo tipo",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Goradista",
    name: "Goradista",
    description: "Você tinha talento para preparar e decorar bolos e doces. Foi treinado por grandes mestres confeiteiros de Tragematum (a província do Império de Tauron antes conhecida como Hershire) ou talvez tenha vindo de lá! Você pode ter tido uma bela confeitaria em Valkaria ou Vectora, ou atuado em alguma cozinha palaciana, preparando as mais belas sobremesas para jantares da nobreza. Tudo com base no mais saboroso e insubstituível ingrediente: gorad. Você era feliz, sempre buscando a excelência em cada gulodice, alegrando-se com a satisfação de seus convidados? Ou vivia frustrado, acreditando ser destinado a algo maior, mais importante? Talvez por isso, quando aqueles heróis foram recompensados com um banquete e ficaram maravilhados com suas guloseimas, você tenha ficado tentado a lhes servir mais vezes…",
    items: [
      "Instrumentos de cozinheiro",
      "T$ 36 em ingredientes para produzir gorad quente",
    ],
    benefits: [
      "Você é treinado em Ofício (cozinheiro) e, quando prepara um prato especial, pode gastar T$ 10 a mais para adicionar cobertura de gorad a ele. Além de seus benefícios normais, um prato especial com cobertura de gorad fornece 2 PM temporários por patamar do comensal.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Insciente",
    name: "Insciente",
    description: "Você nasceu em Wynlla, mas sem nenhuma capacidade de conjurar — um grande problema para aqueles que vivem no Reino da Magia. Considerado cidadão de segunda categoria por alguns (e menos que isso por muitos outros), você costumava viver na parte baixa da capital Sophand ou em guetos similares de outras cidades, ou ainda arriscando a sorte nos ermos infestados de elementais. De qualquer modo, você teve que aprender a viver sem qualquer auxílio mágico. Mas e depois? Seria um insciente para sempre, brandindo aço ou criando inventos? Ou superou essa limitação e agora sabe conjurar?",
    items: [
      "Uma arma simples ou ferramenta a sua escolha de até T$ 100",
    ],
    benefits: [
      "Você é treinado em Sobrevivência e recebe resistência a magia +5",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Interrogador",
    name: "Interrogador",
    description: "Na verdade, você foi algo bem pior — e fez coisas bem piores — que um simples “interrogador”. Coisas cruéis que tiram seu sono à noite, coisas que você gostaria de deixar no passado, mas que sempre voltam para assombrá-lo. Você serviu a um dos poderes malignos de Arton, como os finntroll, os sszzaazitas ou mesmo a Tormenta. Ser um aventureiro heroico, proteger os reinos, salvar o mundo... talvez isso ajude a compensar todos aqueles atos terríveis perante os deuses. Você ora a esses mesmos deuses para nunca reencontrar alguém que tenha “interrogado”, ainda que muitos não estejam mais neste mundo. Mas, pensando bem, existem os osteon...",
    items: [
      "Um ou mais itens somando T$ 100 que pertenciam a antigas vítim... ahem, interrogados",
    ],
    benefits: [
      "Você é treinado em Intimidação e Investigação, e recebe +1 na margem de ameaça contra criaturas feridas (PV abaixo do total), pois aprendeu a bater onde mais dói",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Ladrão de Túmulos",
    name: "Ladrão de Túmulos",
    description: "Não a mais digna das profissões, mas se tornaria especialmente popular no pós-guerra. Você percorreu antigos campos de batalha e outros lugares de grande morticínio, coletando pertences daqueles que não precisavam mais. Ou ainda, você ousou literalmente saquear sepulturas consagradas aos deuses — ou seja, não apenas perturbou os mortos, mas também certos espíritos muito mais poderosos! Ainda bem que escolheu se tornar aventureiro, com certeza uma vida bem menos arriscada. Chega a ser surpresa você nunca ter sido assombrado ou amaldiçoado. Ainda.",
    items: [
      "Pá (mesmas estatísticas de uma lança)",
      "pé de cabra",
    ],
    benefits: [
      "Você é treinado em Ladinagem e Sobrevivência, e recebe +2 na Defesa e em testes de perícia contra mortos-vivos. Além disso, recebe redução de trevas 5 (ou, se for um morto-vivo, recupera +1 PV por dado de dano de trevas)",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Menestrel",
    name: "Menestrel",
    description: "Nem todo aquele disposto a cantar e dedilhar instrumentos está também disposto a viajar aos confins de Arton, rastejar em masmorras perigosas e receber baforadas de dragões. Muitos ficam mais que satisfeitos ao alegrar trabalhadores cansados em tavernas, animar festividades coloridas ou entreter nobres entediados, sem riscos maiores do que uma ocasional fruta ou caneca arremessada. Isso é, assim você acreditava. Antes de conhecer aquele grupo de aventureiros, empolgar-se com suas histórias, encantar-se com a arcanista élfica de cabelos dourados como — ahem, enfim, você encontrou motivação para acompanhá-los. Como bardo? Talvez, talvez não. Brandir aquele machado não parece tão difícil...",
    items: [
      "Um instrumento musical de até T$ 35 a sua escolha",
    ],
    benefits: [
      "Você é treinado em Atuação e recebe um poder de Música de bardo, escolhido entre Balada Fascinante, Canção Assustadora e Melodia Curativa.",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Mensageiro",
    name: "Mensageiro",
    description: "Sempre que meios mágicos não estavam disponíveis, você assumia a tarefa de transportar informações vitais entre reinos, cidades e vilarejos, muitas vezes arriscando a vida em territórios perigosos. Levando cartas, pergaminhos, mensagens verbais, você percorria longas distâncias em embarcações, a cavalo ou a pé. Precisava ser rápido, discreto e corajoso, enfrentando criaturas hostis, bandidos e terrenos traiçoeiros — garantindo que ordens de guerra, tratados de paz e pedidos de socorro chegassem ao destino, preservando alianças e evitando desastres. Pensando bem, isso não é muito diferente de ser um aventureiro...",
    items: [
      " Cavalo com sela",
      "mochila de aventureiro",
      'traje de viajante'
    ],
    benefits: [
      "Você recebe +3m em seu deslocamento e +2 em testes de resistência",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Náufrago",
    name: "Náufrago",
    description: "Você foi passageiro, tripulante ou capitão a bordo de uma embarcação — até que, durante uma longa viagem, ela naufragou. Teria sido uma tempestade, abordagem de piratas, ataque de elfos-do-mar, ou mesmo um kaiju? Você sobreviveu, mas acabou isolado em alguma terra remota. Praticamente sem recursos exceto por alguns detritos do naufrágio, precisou achar maneiras de obter sustento e abrigo, além de evitar predadores e bandos selvagens. Não foram tempos fáceis, mas você viveu o bastante para ser encontrado e resgatado. Graças aos deuses, aqueles aventureiros apareceram! Quem sabe, usando as habilidades que aprendeu, você também poderia ser um...?",
    items: [
      "Arco curto",
      "20 flechas",
      'uma bola (ou outro objeto simples) com uma cara pintada e nome de gente'
    ],
    benefits: [
      "Você recebe +5 PV e +2 PM. Além disso, uma vez por cena pode gastar 2 PM para receber um dos seguintes benefícios até o fim da cena: treinamento em uma perícia; proficiência com uma arma, armadura ou escudo; usar uma ferramenta no lugar de outra",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Padeiro",
    name: "Padeiro",
    description: "Você começava sua jornada ainda antes do amanhecer, acendendo o forno de pedra com madeira encantada para assar pães, bolos e tortas que alimentavam a comunidade. Amassava farinhas com trigo dourado de campos abençoados por Azgher ou frutas colhidas sob as estrelas de Tenebra. Em sua padaria, moradores e aventureiros se reuniam para comprar suas delícias e compartilhar notícias. Você também preparava iguarias especiais para festivais, ou até encomendas secretas, como pães encantados para fortalecer guerreiros, ou aquela torta destinada a envenenar um inimigo... Ah sim, foi por isso que acabou fugindo e virando aventureiro!",
    items: [
      "Instrumentos de Ofício (cozinheiro)",
      "rolo de massa (mesmas estatísticas de uma clava)",
    ],
    benefits: [
      "Você é treinado em Ofício (cozinheiro). Além disso, sua profissão fortificou seus braços! Você recebe +1 em rolagens de dano com armas de impacto e pode substituir testes de Atletismo por testes de Ofício (cozinheiro)",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Pedinte",
    name: "Pedinte",
    description: "Você sobrevivia às margens da sociedade, perambulando por ruas movimentadas em cidades como Valkaria, Crovandir ou Zakharin. Muitas vezes ignorado ou desprezado, dependia da caridade de transeuntes e sobras de festividades locais para obter comida e abrigo. Sua rotina era marcada pela incerteza, enfrentando mau tempo, fome e, às vezes, criaturas que espreitavam nas ruas sombrias. Mas você era astuto, ouvia segredos murmurados nas tavernas e becos, testemunhava eventos cruciais despercebido pelos outros. Um dia, acabou obtendo alguma informação valiosa que mudou sua vida, levando a sua transformação em aventureiro.",
    items: [
      "Andrajos",
      "esmolas que guardou (1 bálsamo restaurador e 1 essência de mana)",
    ],
    benefits: [
      "Você é muito discreto, recebendo +2 em Enganação e Furtividade. Além disso, aprendeu a aproveitar o máximo de cada recurso e a partilhar do pouco que tinha com seus companheiros em dificuldades. Quando você usa um alimento, preparado alquímico ou poção, pode rolar seu efeito duas vezes e usar o melhor resultado (se o efeito for aleatório), ou pode dividir o item com um aliado adjacente (ele também gasta a ação para consumi-lo e recebe o benefício normal, mas você gasta apenas um item)",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Pescador",
    name: "Pescador",
    description: "Ofício muito comum nas áreas costeiras de Arton, bem como nas muitas regiões cortadas pelo Rio dos Deuses e outros grandes cursos d’água. Utilizando redes, linhas e anzóis de materiais naturais, você pescava para consumo próprio, para sua família ou para comércio. Enfrentava longas horas em condições adversas nas margens ou embarcado. Dizem que pescadores têm muita paciência, mas a sua talvez tenha se esgotado quando aqueles elfos-do-mar roubaram sua pesca, ou quando os homens-piranhas afundaram seu barco, ou quando os lursh-lyin destruíram sua aldeia. Chega, para tudo há limite!",
    items: [
      "Bolsa cheia de minhocas",
      "instrumentos de pescador",
    ],
    benefits: [
      "Você é treinado em Ofício (pescador) e Sobrevivência. Além disso, você sabe aguardar o instante exato de puxar o anzol. Recebe +2 em Iniciativa e, sempre que prepara uma ação (Tormenta20, p. 234), recebe +2 em testes para executá-la",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Servo",
    name: "Servo",
    description: "Você foi um servo em algum castelo ou palácio nas áreas mais tradicionais de Arton, atendendo às necessidades de nobres, magos e cavaleiros. Suas funções variavam desde a limpeza e manutenção dos aposentos até a preparação de refeições e o cuidado com animais. Mas houve vezes em que você foi incumbido de missões mais perigosas, como acompanhar seu senhor em viagens ou buscar ingredientes raros em florestas. Também era frequentemente o primeiro a perceber intrigas, segredos e perigos iminentes, assim protegendo seus mestres. Então esses tais aventureiros pensam que são muito fortes? Hora de mostrar a eles!",
    items: [
      "Balde e vassoura (mesmas estatísticas de um bordão)",
      "tabardo de seu patrono",
    ],
    benefits: [
      "Você é treinado em Diplomacia e Ofício (serviçal). Além disso, recebe +2 em testes de Diplomacia e Enganação contra alvos que tenham status ou posição superior à sua (ou que acreditam ter), e pode substituir testes de Nobreza por testes de Ofício (serviçal)",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
  { id: "Suporte de Tropas",
    name: "Suporte de Tropas",
    description: "Exércitos em marcha não são formados apenas por combatentes. Muitas vezes são seguidos por grupos de mercadores, cozinheiros, costureiros, curandeiros, até coveiros que lidam com (ou saqueiam) os cadáveres. Estes seguidores são apreciados pelos soldados, por seu apoio às tropas no campo de batalha — mas podem ser desprezados pelos oficiais, considerados parasitas oportunistas. Em menor escala, também existem aqueles que acompanham aventureiros à distância, esperando colher seus espólios ou ajudar quando houver oportunidade. Você foi alguém assim, até se cansar de seguir e resolver se juntar ao grupo.",
    items: [
      "Equipamento de viagem",
      "instrumentos de ofício",
      'maleta de medicamentos'
    ],
    benefits: [
      "Sempre que você faz um teste para ajudar, o bônus que fornece aumenta em +2. Além disso, quando flanqueia um inimigo, o bônus que você e seus aliados recebem em testes de ataque aumenta para +4",
    ],
    uniquePower: {
      name: "",
      description: ""
    },
    source: "Herois de Arton"
  },
];