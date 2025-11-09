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
  {
    id: "30",
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
  {
    id: "31",
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
  {
    id: "32",
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
  {
    id: "33",
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
  {
    id: "34",
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
  {
    id: "35",
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
  {
    id: "36",
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
  {
    id: "37",
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
  {
    id: "38",
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
  {
    id: "39",
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
  {
    id: "40",
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
];