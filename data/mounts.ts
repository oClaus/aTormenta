import { Mount } from "@/types/mount";
//#region Tormenta20 - Jogo do Ano
//#endregion
export const mounts: Mount[] = [

  //#region Duelo de Dragões
  { id: "Corcel de Comando ",
    name: "Corcel de Comando ",
    size: "Grande",
    description: "Uma montaria mecânica quadrúpede feita de metal escuro, criada pela Supremacia Purista para líderes militares. Protegido por magia e equipado com encantos de comando, atravessa o campo de batalha com eficiência implacável.",
    origin: "Duelo de Dragões",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você ignora a penalidade por terreno difícil. Você usa Pilotagem no lugar de Cavalgar.",
      veterano: "Você pode lançar a magia Campo de Força (apenas o efeito básico). Se aprender essa magia, seu custo diminui em –1 PM.",
      mestre: "O alcance de suas habilidades baseadas em som (como Músicas de Bardo) aumenta em um passo (de curto para médio e de médio para longo).",
    },
  },
  //#endregion

  //#region Dragão Brasil
  // Dragão Brasil - 212
  { id: "Javali Doherita",
    name: "Javali Doherita ",
    size: "Grande",
    description: "Apenas doheritas da Guilda dos Provedores ou da Guilda dos Guerreiros têm permissão para montar estes animais.",
    origin: "Dragão Brasil - 212",
    benefits: {
      iniciante: "Você pode usar o poder Carga de Cavalaria. Caso possua este poder, o bônus no dano fornecido por ele aumenta em +1d8.",
      veterano: "Seu deslocamento muda para 9m e o bônus de dano de Carga de Cavalaria aumenta em +1d8.",
      mestre: "Seu deslocamento muda para 12m e, quando faz uma investida, você ignora 10 pontos de redução de dano do alvo.",
    },
  },

  // Dragão Brasil
  { id: "Acquarella",
  name: "Acquarella",
  size: "Enorme",
  description: "Uma criatura marinha sagrada semelhante a uma arraia gigante translúcida, com tentáculos e veias multicoloridas. Inteligente e tímida, carrega consigo uma pequena porção do mar e serve como montaria para devotos de Oceano.",
  origin: "Dragão Brasil",
  benefits: {
    iniciante: "Você recebe deslocamento de natação 9m e uma ação de movimento extra (apenas para se deslocar).",
    veterano: "Uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano de eletricidade em uma criatura em alcance curto. Além disso, você pode entrar na acquarella como uma ação de movimento (ela pode conter até 40 espaços e criaturas em seu interior ficam sob efeito de Suportar Elementos).",
    mestre: "Seu deslocamento de natação muda para 15m e você pode gastar uma ação padrão e 3 PM para usar a habilidade Tinta Multicolorida.",
  },
  },
  { id: "Khanoa",
  name: "Khan’Oa",
  size: "Grande",
  description: "Um navio vivo e monstruoso formado por restos de embarcações e rancor sobrenatural. Essa criatura marinha busca inventores para completar sua própria construção.",
  origin: "Dragão Brasil",
  benefits: {
    iniciante: "Seu deslocamento muda para natação 15m e você ignora a penalidade por terreno natural difícil em águas. O Khan’Oa só se desloca sob a água e você usa Pilotagem no lugar de Cavalgar.",
    veterano: "Você pode utilizar o canhão do Khan’Oa como um arcabuz e, uma vez por rodada, pode usá-lo para fazer um ataque como uma ação livre.",
    mestre: "Você pode lançar a magia Miragem (CD Int). Se aprender essa magia, seu custo é reduzido em –1 PM.",
  },
  },
  //#endregion

  //#region Tormenta20 - Jogo do Ano
  { id: "Cavalo ",
    name: "Cavalo ",
    size: "Grande",
    description: "A montaria mais comum do Reinado.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ",
      veterano: "Como acima, mas seu deslocamento muda para 15m e você recebe +2 em ataques corpo a corpo.",
      mestre: "Como acima, mas você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar).",
    },
    extra: "Estas estatísticas também se aplicam a pôneis (tamanho Médio)."
  },
  { id: "Cão de caça",
    name: "Cão de caça",
    size: "Médio / Pequeno",
    description: "Cães de porte adequado são montarias comuns para personagens Pequenos ou Minúsculos.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m, você pode usar faro e recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Como acima, mas seu deslocamento muda para 12m e você recebe +2 na Defesa. ",
      mestre: "Como acima; além disso, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.",
    },
  },
  { id: "Lobo-das-cavernas",
    name: "Lobo-das-cavernas",
    size: "Grande",
    description: "Primos primitivos e maiores dos lobos comuns, lobos-das-cavernas são usados como montaria por goblinoides e aventureiros selvagens. ",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Sseu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ",
      veterano: "Como acima, mas seu deslocamento muda para 15m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo. ",
      mestre: "Como acima; além disso, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.",
    },
    extra: " Estas estatísticas também se aplicam a lobos comuns (tamanho Médio)."
  },
  { id: "Grifo ",
    name: "Grifo ",
    size: "Grande",
    description: "Esta fera majestosa é muito cobiçada por heróis.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo (um grifo iniciante é um filhote e não pode ser usado como montaria). ",
      veterano: "Como acima, mas pode ser usado como montaria, mudando seu deslocamento para voo 18m. ",
      mestre: "Como acima, mas você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
    },
  },
  //#endregion

  //#region Ameaças de Arton
  { id: "Sapo Atroz ",
    name: "Sapo Atroz ",
    size: "Grande",
    description: "Um sapo gigantesco de pele rugosa que espreita em pântanos e águas lamacentas. Usa sua língua venenosa para capturar presas e arrastá-las para a água.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m (normal e de natação) e você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +5 em testes de Atletismo para saltar. ",
      veterano: "Você recebe +2 em testes para derrubar e desarmar.",
      mestre: "Muda o bônus de Atletismo para +10 e, uma vez por rodada, você pode gastar 1 PM para fazer uma manobra desarmar ou derrubar contra um alvo a até 3m.",
    },
  },
  { id: "DragaoJovem",
    name: "Dragão Jovem",
    size: "Grande",
    description: "Um dragão jovem de escamas reluzentes e personalidade orgulhosa. Poderoso e majestoso, apenas aceita como cavaleiro alguém que tenha conquistado seu respeito e amizade. (Leia texto nas regras)",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m (normal e de voo) e, uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano da energia do dragão em uma criatura em alcance médio.",
      veterano: "Você recebe também uma ação de movimento extra por turno (apenas para se deslocar) e pode gastar 2 PM para causar 4d6 pontos de dano.",
      mestre: "Seu deslocamento muda para 18m e você pode gastar 5 PM e uma ação de movimento para usar a habilidade Sopro (de acordo com o dragão jovem).",
    },
  },
  { id: "Bulette",
    name: "Bulette",
    description: "Um enorme tubarão terrestre de carapaça resistente e apetite voraz. Capaz de nadar pelo solo como se fosse água, é uma montaria exótica temida e admirada em toda Arton.",
    origin: "Ameaças de Arton",
    size: "Grande",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m (escavação 6m) e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
      veterano: "O bônus em rolagens de dano muda para +1d10.",
      mestre: "O deslocamento de escavação muda para 12m e o bônus em rolagens de dano muda para +2d8.",
    },
  },
  { id: "Hienodonte",
    name: "Hienodonte",
    size: "Grande",
    description: "Uma hiena atroz do tamanho de um urso, com mordida capaz de esmagar ossos. Ágil e feroz, é usada como montaria por gnolls e outros guerreiros dos ermos.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você pode usar Oportunismo. Se possuir esse poder, em vez disso seu custo diminui em –1 PM.",
      mestre: "Quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.",
    },
  },
  { id: "Corcel de Kally",
    name: "Corcel de Kally",
    description: "Uma montaria sagrada de Kallyadranoch com aparência de um pequeno dragão alado. Rápido, feroz e resistente ao fogo, é concedido apenas aos devotos mais dignos do Deus dos Dragões.",
    origin: "Ameaças de Arton",
    size: "Grande",
    benefits: {
    iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
    veterano: "O bônus na rolagem de dano muda para +1d8 e seu deslocamento muda para 12m (normal e de voo).",
    mestre: "Seu deslocamento normal e de voo muda para 18m e, uma vez por rodada, você pode gastar 2 PM para causar 3d8 pontos de dano de fogo em todas as criaturas em um cone de 6m (Ref CD Car reduz à metade).",
    },
  },
  { id: "Dai-Kabuto",
    name: "Dai-Kabuto",
    size: "Grande",
    description: "Um enorme besouro de carga e guerra, valorizado como montaria por sua força, resistência e capacidade de imobilizar adversários.",
    origin: "Ameaças de Arton",
    benefits: {
    iniciante: "Seu deslocamento muda para 9m e você recebe +2 em testes de agarrar e derrubar e uma ação de movimento extra por turno (apenas para se deslocar).",
    veterano: "Você recebe deslocamento de voo 6m.",
    mestre: "O bônus em agarrar se aplica a todas as manobras e você recebe +2 na Defesa.",
    },
  },
  { id: "Cocatriz-real",
    name: "Cocatriz-real",
    size: "Grande",
    description: "Uma versão gigante e rara da cocatriz, com o tamanho de um avestruz. Pode ser domesticada para atuar como uma montaria exótica, capaz de saltos altos, voos curtos e ataques debilitantes.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você ignora terreno difícil.",
      veterano: "Uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer com que a vítima fique lenta (Fort CD For evita).",
      mestre: "Seu deslocamento muda para 12m (normal e de voo). Entretanto, quando voa, você deve terminar seu movimento sobre o chão ou outra superfície firme."
    }
  },
  { id: "Baleote",
    name: "Baleote",
    size: "Grande",
    description: "Um animal com aspecto de pequena baleia ou grande golfinho capaz de 'nadar' magicamente nos céus. Dóceis e fáceis de treinar, alimentam-se das nuvens e emitem descargas elétricas pelo focinho para se defender. São muito utilizados como montarias voadoras em Vectora.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Você pode gastar 1 PM para causar 2d6 pontos de dano de eletricidade em uma linha de 9m (um baleote iniciante é muito jovem para ser usado como montaria).",
      veterano: "Pode ser usado como montaria, mudando seu deslocamento para 9m (voo 12m).",
      mestre: "Seu deslocamento de voo muda para 15m e você também pode gastar 4 PM para causar 6d6 pontos de dano de eletricidade em uma linha de 9m."
    }
  },
  { id: "Capivara",
    name: "Capivara",
    size: "Médio",
    description: "Grandes roedores aquáticos que vivem às margens de rios e lagos. Geralmente calmas, mas territoriais, são excelentes nadadoras. Frequentemente utilizadas como montarias velozes por raças de pequena estatura, como goblins e hynne, que adotam o título de 'capivaleiros'.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você pode usar Aparência Inofensiva (se já possuir esse poder, a CD para resistir a ele aumenta em +2).",
      mestre: "Uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo."
    }
  },
  { id: "Cavalo de Namalkah",
    name: "Cavalo de Namalkah",
    size: "Grande",
    description: "Uma montaria excepcional nativa do reino de Namalkah. Muito cobiçados, raramente são comercializados fora de sua terra natal. Conquistar a lealdade de um desses magníficos animais exige grandes feitos para provar seu merecimento, em vez de apenas possuir moedas.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 15m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Seu deslocamento muda para 18m e você recebe +2 em ataques corpo a corpo.",
      mestre: "Você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar) e, uma vez por rodada, +2d6 em uma rolagem de dano corpo a corpo."
    }
  },
  { id: "Cavalo Glacial",
    name: "Cavalo Glacial",
    size: "Grande",
    description: "Também conhecido como hipo-orca, é um predador anfíbio que mistura características de cavalo e baleia assassina. Nativo de regiões gélidas, possui uma espessa camada de gordura e nadadeiras. É uma montaria feroz, porém inteligente e dócil em cativeiro, perfeita para travessias aquáticas e frio extremo.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m (natação 12m) e você recebe redução de frio 5.",
      veterano: "Uma vez por rodada, quando faz um ataque corpo a corpo, você pode gastar 1 PM. Se fizer isso e acertar o ataque, você causa +2d6 pontos de dano de frio.",
      mestre: "Muda a redução de frio para 10 e você recebe uma ação de movimento extra (apenas para se deslocar)."
    }
  },
  { id: "Corcel do Deserto",
    name: "Corcel do Deserto",
    size: "Grande",
    description: "Um enorme insetoide com a carapaça, aparência e comportamento de um equino. Muito apreciado por viajantes do deserto, pois nunca bebe água em sua fase adulta, extraindo toda a umidade de que precisa do ar e mastigando cactos rígidos.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você ignora terreno difícil natural.",
      veterano: "Uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano de impacto em uma criatura adjacente.",
      mestre: "Seu deslocamento muda para 15m e você recebe +5 em testes para resistir a efeitos de clima, calor e frio (veja Tormenta20, p. 267)."
    }
  },
  { id: "Dromedário",
    name: "Dromedário",
    size: "Grande",
    description: "Um animal robusto e resistente, caracterizado pela corcova que serve como depósito de gordura para períodos de escassez. Adaptados para cruzar desertos e terrenos irregulares, são comuns em caravanas. Possuem temperamento genioso e costumam cuspir para se defender ou quando contrariados.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e ignora terreno difícil natural em desertos e terrenos similares.",
      veterano: "Você recebe +2 em Percepção e Sobrevivência (este bônus é dobrado em desertos) e, uma vez por rodada, pode gastar 1 PM para causar 1d4+3 pontos de dano de impacto em uma criatura em alcance curto.",
      mestre: "Você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +5 em testes para resistir a efeitos de clima."
    }
  },
  { id: "Elefante",
    name: "Elefante",
    size: "Enorme",
    description: "Um imenso e robusto animal caracterizado por sua pele espessa, tromba preênsil e longas presas. Inteligente e dócil, mas extremamente perigoso quando enfurecido, é historicamente empregado como animal de carga, montaria e até besta de guerra.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e ignora terreno difícil.",
      veterano: "Uma vez por rodada, você pode sacar um item ou pegar um objeto solto em alcance de 4,5m como ação livre.",
      mestre: "Você recebe +5 em testes de manobra para atropelar e, uma vez por rodada, se vencer o teste para atropelar uma criatura, pode pagar 1 PM para fazer um ataque contra ela."
    }
  },
  { id: "Gorlogg",
    name: "Gorlogg",
    size: "Grande",
    description: "Uma besta primitiva nativa de Galrasia que combina traços de répteis e mamíferos, semelhante a um grande felino ou lobo com escamas e dentes de sabre. Embora sejam predadores ferozes, podem aceitar heróis ligados à natureza como cavaleiros, demonstrando lealdade inabalável.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
      veterano: "O bônus em rolagens de dano corpo a corpo muda para +1d10.",
      mestre: "Seu deslocamento muda para 15m e o bônus em rolagens de dano corpo a corpo muda para +2d8."
    }
  },
  { id: "Gorlogg Alfa",
    name: "Gorlogg Alfa",
    size: "Grande",
    description: "O líder formidável de uma alcateia de gorloggs. Ainda mais letal e imponente que os espécimes comuns, atua como uma montaria de igual ferocidade e poder para aqueles capazes de domar sua natureza selvagem.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
      veterano: "O bônus em rolagens de dano corpo a corpo muda para +1d10.",
      mestre: "Seu deslocamento muda para 15m e o bônus em rolagens de dano corpo a corpo muda para +2d8."
    }
  },
  { id: "Leão",
    name: "Leão",
    size: "Grande",
    description: "O maior e mais forte dos felinos, caça em bandos utilizando estratégias elaboradas. É um predador imponente e formidável, comum na Grande Savana e outras regiões selvagens.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em rolagens de dano corpo a corpo.",
      veterano: "Quando faz uma investida, o bônus em rolagens de dano corpo a corpo dobra.",
      mestre: "Seu deslocamento muda para 15m e o bônus em rolagens de dano corpo a corpo muda para +1d10."
    }
  },
  { id: "Tigre",
    name: "Tigre",
    size: "Grande",
    description: "Uma fera magnífica e mortal, sagrada para o povo de Tamu-ra. Levados à beira da extinção pela Tormenta, espécimes são raros e extremamente valiosos, conhecidos por sua ferocidade e velocidade brutal no primeiro ataque.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +5 em Iniciativa.",
      veterano: "Na primeira rodada de combate, você recebe +5 em testes de ataque e rolagens de dano com armas.",
      mestre: "Seu deslocamento muda para 15m e você recebe uma ação de movimento extra por turno (apenas para se deslocar)."
    }
  },
  { id: "Rinoceronte",
    name: "Rinoceronte",
    size: "Grande",
    description: "Um grande herbívoro agressivo de couro espesso e um enorme chifre. Outrora criados por anões como bestas de carga e guerra na superfície, mantêm uma estranha afinidade com eles e formam montarias formidáveis.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +2 em testes de ataque quando faz investidas.",
      veterano: "Você pode usar Carga de Cavalaria. Caso possua esse poder, o bônus no dano em investida aumenta em +1d8.",
      mestre: "Quando faz uma investida você ignora 10 pontos de redução de dano do alvo."
    }
  },
  { id: "Rinoceronte Lanoso",
    name: "Rinoceronte Lanoso",
    size: "Grande",
    description: "Uma variante do rinoceronte nativa das Montanhas Uivantes. Possui uma grossa pelagem adaptada ao frio intenso e consegue se locomover pela neve e pelo gelo sem dificuldades.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +2 em testes de ataque quando faz investidas.",
      veterano: "Você pode usar Carga de Cavalaria. Se possui esse poder, o bônus no dano em investida aumenta em +1d8.",
      mestre: "Seu deslocamento não é afetado por gelo ou neve."
    }
  },
  { id: "Brontotério",
    name: "Brontotério",
    size: "Enorme",
    description: "Uma versão gigantesca e bestial do rinoceronte encontrada em Galrasia, caracterizada pelo chifre em forma de 'Y'. Tão colossal que o bater de suas patas soa como o próprio trovão.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +1 na Defesa.",
      veterano: "O bônus na Defesa muda para +2 e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      mestre: "Você recebe redução de dano 5."
    }
  },
  { id: "Tatu-Montanha",
    name: "Tatu-Montanha",
    size: "Enorme",
    description: "Uma variedade gigante de molusco semelhante a uma tartaruga monstruosa. Possui uma carapaça colossal imune a ácido e rasteja sobre uma base de caramujo. Lento, porém implacável, é uma montaria excelente para atravessar pântanos, usando sua cauda espinhosa em forma de maça para se defender.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m (normal e de natação) e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você recebe +1 na Defesa e redução de ácido 5.",
      mestre: "Muda o bônus na Defesa para +2 e a redução de ácido para 10."
    }
  },
  { id: "Trobo",
    name: "Trobo",
    size: "Grande",
    description: "Também conhecido como pássaro-boi, é uma grande ave sem asas, com chifres e cascos bovinos. Dócil, extremamente resistente e confortável de se cavalgar, é muito utilizado como animal de tração e carga, sendo ferozmente protetor com sua família adotiva.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m e você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +1 em testes de resistência.",
      veterano: "Seu deslocamento muda para 12m e o bônus em testes de resistência muda para +2.",
      mestre: "O bônus em testes de resistência muda para +5."
    }
  },
  { id: "Tumarkhân",
    name: "Tumarkhân",
    size: "Enorme",
    description: "Um imenso lagarto herbívoro com proporções de elefante e presas de marfim, nativo do arquipélago de Khubar. Muito dócil e forte, é facilmente amansado pelos locais e amplamente utilizado como animal de carga, tração e montaria pesada.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e seu limite de carga aumenta em 5 espaços.",
      veterano: "Você recebe uma ação de movimento extra por turno (apenas para se deslocar) e, uma vez por rodada, recebe +1d8 em uma rolagem de dano corpo a corpo.",
      mestre: "O bônus no limite de carga muda para 10 espaços e, quando faz um teste de Força ou de perícia baseada em Força, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado."
    }
  },
  { id: "Urso Panda",
    name: "Urso Panda",
    size: "Médio",
    description: "Menor e relativamente inofensivo, alimenta-se de brotos de bambu. Quase extinto e reverenciado em Tamu-ra, é um animal raro e valioso que luta apenas em defesa própria.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m e você recebe +2 em Diplomacia e uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você pode usar Rolamento Defensivo. Caso possua esse poder, em vez disso o custo para usá-lo diminui em –1 PM.",
      mestre: "Você pode usar Aparência Inofensiva. Se possuir esse poder, a CD para resistir a ele aumenta em +2."
    }
  },
  { id: "Urso Pardo",
    name: "Urso Pardo",
    size: "Grande",
    description: "Forte e surpreendentemente rápido, é o tipo mais comum em florestas temperadas e frias. Companheiro tradicional de druidas, atuando como um formidável protetor e montaria.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
      veterano: "Uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra agarrar como uma ação livre. Essa manobra não deixa sua mão ocupada, mas você só pode manter um inimigo agarrado por vez.",
      mestre: "Muda o bônus em rolagens de dano corpo a corpo para +1d10."
    }
  },
  { id: "Urso das Cavernas",
    name: "Urso das Cavernas",
    size: "Enorme",
    description: "Versão pré-histórica e massiva do urso comum, encontrada em Galrasia e nas Sanguinárias. Extremamente agressivo, é o único de sua espécie que ataca seres inteligentes sem hesitar.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe redução de dano 2.",
      veterano: "Uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra agarrar como uma ação livre. Essa manobra não deixa sua mão ocupada, mas você só pode manter um inimigo agarrado desta forma.",
      mestre: "Muda a redução de dano para 5."
    }
  },
  { id: "Warg",
    name: "Warg",
    size: "Grande",
    description: "Uma fera quase sobrenatural semelhante a um lobo imenso e musculoso de pelagem negra. Com uma inteligência feroz que o permite compreender o idioma goblinoide, é amplamente utilizado pelos duyshidakk. Como montaria, o warg não causa penalidades em Furtividade por seu tamanho.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você recebe +2 em Furtividade e pode usar a habilidade Ataque Furtivo +2d6 (se já possui Ataque Furtivo, o bônus de dano se acumula).",
      mestre: "Uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre."
    }
  },
  { id: "Unicórnio",
    name: "Unicórnio",
    size: "Grande",
    description: "Um espírito de pura bondade na forma de um magnífico cavalo branco com um chifre dourado. Extremamente raros e ariscos, fogem de conflitos, mas usam seus poderes para curar e purificar. Apenas seres genuinamente dignos são aceitos como cavaleiros.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Seu deslocamento muda para 15m e você pode lançar Purificação. Se aprender essa magia, seu custo é reduzido em –1 PM.",
      mestre: "Cada dado de seus efeitos mágicos de cura aumenta em um passo (até o máximo de d12). Unicórnios só aceitam ser cavalgados por pessoas dignas (o mestre tem a palavra final sobre isso)."
    }
  },
  { id: "Cavalo Esqueleto",
    name: "Cavalo Esqueleto",
    size: "Grande",
    description: "Um morto-vivo profano formado a partir da ossada de um cavalo. Animado por magia necromântica ou pela aura de locais malditos, atua como uma montaria incansável e assustadora que instila pavor no coração dos vivos.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
      veterano: "Você recebe +2 em Intimidação e na CD de efeitos de medo.",
      mestre: "Você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar) e o alcance de seus efeitos de medo aumenta em um passo (de curto para médio, de médio para longo)."
    }
  },
  { id: "Deinonico",
    name: "Deinonico",
    size: "Médio",
    description: "Um predador bípede plumado nativo de Galrasia, notável por sua inteligência astuta e ferocidade. Armado com uma terrível garra em forma de foice em cada pata, é uma letal máquina de combate que, embora raramente, pode ser adotada como montaria por heróis valorosos.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e sua margem de ameaça com armas corpo a corpo aumenta em +1.",
      veterano: "Você recebe +5 em testes de Atletismo para saltar e uma ação de movimento adicional por turno (apenas para se deslocar).",
      mestre: "Seu deslocamento muda para 15m e o bônus na margem de ameaça aumenta para +2."
    }
  },
  { id: "Galhada Macho",
    name: "Galhada Macho",
    size: "Grande",
    description: "Um ser construto de natureza vegetal com a aparência de um grande cervo feito de musgo e galhos. Dóceis e ariscos, os machos possuem chifres abençoados por Allihanna, sendo montarias muito valorizadas por devotos da deusa.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +2 em Sobrevivência.",
      veterano: "Seus ataques corpo a corpo são considerados mágicos e, uma vez por turno, você recebe +1d8 em uma rolagem de dano corpo a corpo (esse bônus é dobrado contra mortos-vivos).",
      mestre: "O bônus em rolagens de dano muda para +1d10 e você recebe uma ação de movimento extra por turno (apenas para se deslocar)."
    }
  },
  { id: "Galhada Fêmea",
    name: "Galhada Fêmea",
    size: "Grande",
    description: "Uma criatura vegetal com formato semelhante a uma corça de musgo. Extremamente visada por caçadores por produzir uma seiva rara com propriedades curativas, mas que também serve fielmente a druidas e aliados da natureza.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você pode gastar uma ação padrão e 1 PM para curar 1d8+1 PV.",
      veterano: "Você também pode gastar uma ação padrão e 3 PM para curar 3d8+3 PV ou remover uma condição de doença, fadiga, paralisia ou veneno que o esteja afetando.",
      mestre: "Você recebe uma ação de movimento extra por turno (apenas para se deslocar) e pode também gastar uma ação padrão e 5 PM para curar 6d8+6 PV."
    }
  },
  { id: "Tuntram",
    name: "Tuntram",
    size: "Enorme",
    description: "Um massivo lagarto-trovão herbívoro de Galrasia, guarnecido por um espesso escudo ósseo craniano e longos chifres. De temperamento notoriamente violento e irritadiço, é uma montaria cobiçada por cavaleiros audazes devido à excelente proteção frontal que sua carapaça oferece.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m e você recebe +2 em testes de ataque para derrubar e empurrar.",
      veterano: "Você recebe cobertura leve contra ataques à distância e uma ação de movimento extra (apenas para se deslocar).",
      mestre: "Você recebe +2 em testes de ataque para atropelar e, quando faz essa manobra, seu oponente não tem a opção de sair do caminho (mas ele ainda pode resistir com um teste oposto). Quando atropela uma criatura com essa manobra, você pode gastar 1 PM para fazer um ataque extra contra ela."
    }
  },
  { id: "Búfalo-de-Guerra",
    name: "Búfalo-de-Guerra",
    size: "Grande",
    description: "Também conhecido como búfalo-cafre, este colossal e agressivo bovídeo nativo de Moreania possui chifres massivos e couro escuro. Extremamente difíceis de domesticar, costumam servir como imponentes montarias quase exclusivamente para paladinos de Bullton, druidas e heróis excepcionais.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 9m e seu limite de carga aumenta em 5 espaços. Uma vez por rodada, quando faz uma investida montada, você recebe +1d8 em uma rolagem de dano corpo a corpo.",
      veterano: "Seu deslocamento muda para 12m e ignora terreno difícil.",
      mestre: "O bônus em rolagens de dano corpo a corpo muda para +2d8 e você recebe uma ação de movimento extra por turno (apenas para se deslocar)."
    }
  },
  { id: "Hippossauro",
    name: "Hippossauro",
    size: "Grande",
    description: "Também conhecido como hippo, é uma criatura exótica que combina traços de cavalo, ave e dinossauro. Forte, rápido e excepcionalmente leal quando domesticado. Suas garras superam terrenos acidentados e seu bico ossudo permite o uso de arreios. Machos ostentam plumagem vibrante, enquanto as fêmeas possuem cores sóbrias ideais para camuflagem.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe +2 em Diplomacia (hippossauro macho) ou em Furtividade (hipossauro fêmea).",
      veterano: "Seu deslocamento muda para 15m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.",
      mestre: "Muda o bônus na perícia para +4 e você recebe uma ação de movimento extra (apenas para se deslocar)."
    }
  },
  { id: "Platan",
    name: "Platan",
    size: "Grande",
    description: "Um golfinho ágil e inteligente encontrado em rios, lagos e mares de Arton, reconhecido por sua fronte proeminente e focinho alongado em forma de bico. Dóceis e amigáveis, são aliados comuns de sereias, tritões e elfos-do-mar, mas possuem a surpreendente habilidade de emitir poderosos ataques sônicos para atordoar presas ou dizimar inimigos se acuados.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para natação 9m e você recebe uma ação de movimento extra (apenas para se deslocar).",
      veterano: "Uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano de impacto em uma criatura em alcance curto.",
      mestre: "Seu deslocamento de natação muda para 15m e você pode também gastar 4 PM para causar 6d6 pontos de dano de impacto em uma criatura em alcance curto."
    }
  },
  { id: "Selako",
    name: "Selako",
    size: "Grande",
    description: "O tipo de tubarão mais comum em Arton, um predador letal de mar aberto. Costumam realizar um único e decisivo ataque para causar sangramento severo. Apesar de sua ferocidade letal, são domesticados por povos submarinos e devotos do Grande Oceano como perigosas bestas de guerra e montarias aquáticas.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para natação 15m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.",
      veterano: "O bônus de dano aumenta para +2d6.",
      mestre: "Seu deslocamento de natação muda para 18m e, quando você usa o bônus de dano do selako contra uma criatura, ela fica sangrando."
    }
  },
  { id: "Troll Montaria",
    name: "Troll",
    size: "Grande",
    description: "Um predador feroz e sanguinário originalmente domado através de técnicas secretas dos finntroll. Caso seu mestre sombrio seja derrotado, a criatura pode ser domada e transformada em uma montaria brutal e incrivelmente forte para o combate.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.",
      veterano: "O bônus em rolagens aumenta para +1d10 e você recebe +2 em testes para agarrar e derrubar.",
      mestre: "O bônus em rolagens aumenta para +2d8 e o bônus para agarrar e derrubar aumenta para +5."
    }
  },
  { id: "Mamute",
    name: "Mamute",
    size: "Enorme",
    description: "Uma imensa besta pré-histórica semelhante a um elefante, porém maior e com uma farta pelagem escura adaptada ao frio das Uivantes. Sustento de diversas tribos bárbaras, pode ser domesticado como uma colossal besta de carga e montaria de batalha.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e ignora terreno difícil.",
      veterano: "Uma vez por rodada, você pode sacar um item ou pegar um objeto solto em alcance de 4,5m como ação livre.",
      mestre: "Você recebe +5 em testes de manobra para atropelar e, uma vez por rodada, se vencer o teste para atropelar uma criatura, pode pagar 1 PM para fazer um ataque contra ela."
    }
  },
  { id: "Urso das Neves",
    name: "Urso das Neves",
    size: "Grande",
    description: "Uma versão glacial do urso das cavernas, ostentando pelagem branca, garras vermelhas e protuberâncias dorsais afiadas que lembram cristais de gelo. Predadores ágeis e excelentes nadadores das Uivantes, que podem ser domados como montarias exóticas montando-se na área desguarnecida próxima à cabeça.",
    origin: "Ameaças de Arton",
    benefits: {
      iniciante: "Seu deslocamento muda para 12m e você recebe redução de frio 5.",
      veterano: "Seu deslocamento muda para 12m (normal e de natação) e a redução de frio aumenta para 10.",
      mestre: "A redução de frio aumenta para 20."
    }
  },
  //#endregion

  


  { id: "nautilon ",
    name: "Nautilon ",
    size: "Grande",
    description: "O nautilon é um parceiro montaria, exclusivo de lefou e devotos de Aharadak",
    origin: "Dragão Brasil",
    benefits: {
      iniciante: "Você recebe +2 em testes para agarrar e, uma vez por rodada, recebe +1d6 em uma rolagem de dano corpo a corpo (um nautilon iniciante é um filhote e não pode ser usado como montaria).",
      veterano: "Como acima, mas pode ser usado como montaria, mudando seu deslocamento para natação 12m e voo 12m.",
      mestre: "Como acima, mas você recebe uma ação de movimento extra por turno (apenas para se deslocar).",
    },
  },
  
  { id: "Pegaso",
  name: "Pégaso",
  size: "Grande",
  description: "Um cavalo celestial alado, branco e radiante como a lua cheia. Nobre e inteligente, serve heróis dignos e devotos de deuses da justiça.",
  origin: "Deuses de Arton",
  benefits: {
    iniciante: "+2 em Intuição e seu deslocamento muda para 15m (um pégaso iniciante ainda não consegue voar com um cavaleiro).",
    veterano: "Como acima, mas seu deslocamento muda para voo 15m e você recebe +2 em Vontade.",
    mestre: "Você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +2 em testes de ataque.",
  },
  },
  { id: "PegasoKhalmyr",
  name: "Pégaso de Khalmyr",
  size: "Grande",
  description: "Um pégaso sagrado de asas brilhantes como a lua cheia, envolto em uma aura de nobreza e justiça. Serve apenas heróis verdadeiramente dignos ou devotos de Khalmyr.",
  origin: "Deuses de Arton",
  benefits: {
    iniciante: "-",
    veterano: "-",
    mestre: "Seu deslocamento muda para 18m (voo 36m) e você recebe uma ação de movimento extra por turno (apenas para se deslocar). Além disso, pode lançar Círculo da Justiça; se aprender essa magia, seu custo diminui em –1 PM.",
  },
  },
  { id: "Gamo",
  name: "Gamo",
  size: "Grande",
  description: "Um cervo mágico e gracioso, capaz de atravessar terrenos difíceis e até planos da realidade para conduzir seu cavaleiro.",
  origin: "Deuses de Arton",
  benefits: {
    iniciante: "Seu deslocamento muda para 12m e você ignora terreno difícil.",
    veterano: "Você ganha deslocamento de voo 12m.",
    mestre: "Você pode gastar uma ação completa e 10 PM para transportar você e o gamo para o Plano Etéreo (como o efeito básico da magia Forma Etérea), com duração sustentada. O efeito acaba se você desmontar do gamo.",
  },
  },
  
  
  { id: "AspectoLinWu",
  name: "Aspecto de Lin-Wu",
  size: "Grande",
  description: "Um dragão celestial de escamas brilhantes e olhar sábio, símbolo da honra de Tamu-ra. Rigoroso e disciplinado, auxilia apenas aqueles que demonstram conduta honrosa.",
  origin: "Deuses de Arton",
  benefits: {
    iniciante: "-",
    veterano: "Seu deslocamento muda para voo 24m, você recebe +2 em Nobreza e Vontade e a habilidade Conduta Honrosa. Se violar os códigos impostos por Conduta Honrosa, você não pode mais usar esta montaria.",
    mestre: "-",
  },
},
];