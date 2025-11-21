import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    id: "acrobacia",
    name: "Acrobacia",
    attribute: "Des",
    trainedOnly: false, // Acrobacia pode ser usada sem ser treinada
    armorPenalty: true, // Sofre penalidade de armadura
    description: "Você consegue fazer proezas acrobáticas.",
    functions: [
      {
        title: "Amortecer Queda (CD 15, Apenas Treinado)",
        description: "Quando cai, você pode gastar uma reação e fazer um teste de Acrobacia para reduzir o dano. Se passar, reduz o dano da queda em 1d6, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Se reduzir o dano a zero, você cai de pé.",
      },
      {
        title: "Equilíbrio",
        description: "Se estiver andando por superfícies precárias, você precisa fazer testes de Acrobacia para não cair. Cada ação de movimento exige um teste. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, cai. A CD é 10 para piso escorregadio, 15 para uma superfície estreita (como o topo de um muro) e 20 para uma superfície muito estreita (como uma corda esticada). Você pode sofrer –5 no teste para avançar seu deslocamento total. Quando está se equilibrando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Acrobacia; se falhar, cai.",
      },
      {
        title: "Escapar",
        description: "Você pode escapar de amarras. A dificuldade varia: cordas (CD igual ao resultado do teste de Destreza de quem o amarrou +10), redes (CD 20), algemas (CD 30). Este uso gasta uma ação completa.",
      },
      {
        title: "Levantar-se Rapidamente (CD 20, Apenas Treinado)",
        description: "Se estiver caído, você pode fazer um teste de Acrobacia para ficar de pé. Você precisa ter uma ação de movimento disponível. Se passar no teste, se levanta como uma ação livre. Se falhar, gasta sua ação de movimento, mas continua caído.",
      },
      {
        title: "Passar por Espaço Apertado (CD 25, Apenas Treinado)",
        description: "Você pode se espremer por espaços estreitos, suficientes para criaturas uma categoria de tamanho menor. Você gasta uma ação completa e avança metade do deslocamento.",
      },
      {
        title: "Passar por Inimigo",
        description: "Você pode atravessar um espaço ocupado por um inimigo como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Acrobacia, Iniciativa ou Luta do oponente (o que for melhor). Se você passar, atravessa o espaço; se falhar, não atravessa e sua ação de movimento termina. Um espaço ocupado por um inimigo conta como terreno difícil.",
      },
    ],
  },
  {
    id: "adestramento",
    name: "Adestramento",
    attribute: "Car",
    trainedOnly: true, // Adestramento só pode ser usada se for treinada
    armorPenalty: false, // Não sofre penalidade de armadura
    description: "Você sabe lidar com animais.",
    functions: [
      {
        title: "Acalmar Animal (CD 25)",
        description: "Você acalma um animal nervoso ou agressivo, permitindo controlar um cavalo assustado ou convencer um lobo a não atacá-lo. Este uso gasta uma ação completa.",
      },
      {
        title: "Manejar Animal (CD 15) ",
        description: "Você faz um animal realizar uma tarefa para a qual foi treinado (como “atacar”, “sentar”, “vigiar”...). Isso permite usar Adestramento como Pilotagem para veículos de tração animal. Este uso gasta uma ação de movimento.",
      },
    ],
  },
  {
    id: "atletismo",
    name: "Atletismo",
    attribute: "For",
    trainedOnly: false, 
    armorPenalty: false, 
    description: "Você pode realizar façanhas atléticas.",
    functions: [
      {
        title: "Corrida ",
        description: "Gaste uma ação completa e faça um teste de Atletismo. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Assim, se somar 20 no teste, avança 20 quadrados de 1,5m. Você recebe um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua. Assim, um elfo (deslocamento 12m) recebe +4 em testes de Atletismo para correr, enquanto um anão (deslocamento 6m) sofre uma penalidade de –4. Você só pode correr em linha reta e não pode correr através de terreno difícil. Você pode correr por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, fica fatigado (cumulativo com novas falhas).",
      },
      {
        title: "Escalar ",
        description: "Você pode subir superfícies inclinadas ou verticais. Gaste uma ação de movimento e faça um teste de Atletismo. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, você cai. A CD é 10 para superfícies com apoios para os pés e mãos (como o cordame de um navio), 15 para uma árvore, 20 para um muro com reentrâncias (como o de uma ruína) e 25 para um muro liso (como o de um castelo). Você pode sofrer –5 em seu teste para avançar seu deslocamento total. Quando está escalando, você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Atletismo; se falhar, você cai. Se um personagem adjacente a você estiver escalando e cair, você pode tentar pegá-lo. Faça um teste de Atletismo contra a CD da superfície +10. Se passar, segura o personagem. Se falhar por 5 ou mais, você também cai!",
      },
      {
        title: "Natação ",
        description: "Se iniciar seu turno na água, você precisa gastar uma ação de movimento e fazer um teste de Atletismo. A CD é 10 para água calma, 15 para agitada e 20 ou mais para tempestuosa. Se passar, você pode avançar metade de seu deslocamento. Se falhar, consegue boiar, mas não avançar. Se falhar por 5 ou mais, você afunda. Se quiser avançar mais, pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo. Se você estiver submerso (seja por ter falhado no teste de Atletismo, seja por ter mergulhado de propósito), deve prender a respiração. Você pode prender a respiração por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, perde 3d6 pontos de vida por rodada até ser tirado da água ou morrer. Você sofre penalidade de armadura em testes de Atletismo para nadar.",
      },
      {
        title: "Saltar ",
        description: "Você pode pular sobre buracos ou obstáculos ou alcançar algo elevado. Para um salto longo, a CD é 5 por quadrado de 1,5m (CD 10 para 3m, 15 para 4,5m, 20 para 6m e assim por diante). Para um salto em altura, a CD é 15 por quadrado de 1,5m (30 para 3m, 45 para 4,5m e assim por diante). Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10). Saltar é parte de seu movimento e não exige uma ação.",
      },
    ],
  },
  {
    id: "atuacao",
    name: "Atuação",
    attribute: "Car",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.",
    functions: [
      {
        title: "Apresentação (CD 20) ",
        description: "Você pode se apresentar para ganhar dinheiro. Faça um teste de Atuação. Se passar, você recebe T$ 1d6, mais T$ 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Este uso leva um dia (ou noite...). Os valores recebidos pressupõem que você está se apresentando em um lugar propício, como o palco de uma taverna. De acordo com o mestre, você pode receber metade do valor se estiver em um lugar inadequado (como as ruas de uma cidade ou um acampamento militar) ou o dobro se estiver em um lugar especialmente propício (como um festival ou os salões de um palácio).",
      },
      {
        title: "Impressionar ",
        description: "Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia. Se estiver tentando impressionar mais de uma pessoa, o mestre faz apenas um teste pela plateia, usando o melhor valor. Este uso leva de alguns minutos (canto ou dança) até algumas horas (apresentação teatral).",
      },
    ],
  },
  {
    id: "cavalgar",
    name: "Cavalgar",
    attribute: "Des",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia. Esta perícia exige uma sela. Sem ela, você sofre –5 no teste.",
    functions: [
      {
        title: "Conduzir",
        description: "Cavalgar através de obstáculos exige testes de Cavalgar. A CD é 15 para terreno ruim e obstáculos pequenos (como uma planície pedregosa ou uma vala estreita) e 25 para terreno perigoso ou obstáculos grandes (como uma encosta nevada ou um pântano traiçoeiro). Se falhar, você cai da montaria e sofre 1d6 pontos de dano. Conduzir é parte de seu movimento e não exige uma ação.",
      },
      {
        title: "Galopar",
        description: "Gaste uma ação completa e faça um teste de Cavalgar. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Seu teste sofre um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que você possua.",
      },
      {
        title: "Montar Rapidamente (CD 20)",
        description: "Você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão.",
      },
    ],
  },
  {
    id: "conhecimento",
    name: "Conhecimento",
    attribute: "Int",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você estudou diversos campos do saber, como aritmética, astronomia, dialética, geografia, história e outros.",
    functions: [
      {
        title: "Idiomas (CD 20)",
        description: "Você pode tentar entender idiomas desconhecidos. Se falhar por 5 ou mais, tira uma conclusão falsa. Idiomas exóticos ou muito antigos têm CD 30.",
      },
      {
        title: "Informação",
        description: "Você pode responder dúvidas gerais. Questões simples, como o ano de fundação de um reino, não exigem testes. Questões complexas, como saber o antídoto de um veneno, têm CD 20. Mistérios e enigmas, como a origem de uma antiga maldição, têm CD 30.",
      },
    ],
  },
  {
    id: "cura",
    name: "Cura",
    attribute: "Sab",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe tratar ferimentos, doenças e venenos. Esta perícia exige uma maleta de medicamentos. Sem ela, você sofre –5 no teste. Você pode usar a perícia Cura em si mesmo, mas sofre –5 no teste.",
    functions: [
      {
        title: "Cuidados Prolongados (CD 15, Apenas Treinado)",
        description: "Você trata uma pessoa para que ela se recupere mais rapidamente. Se passar, ela aumenta sua recuperação de PV em +1 por nível nesse dia. Este uso leva uma hora e o número máximo de pessoas que você pode cuidar é igual ao seu nível.",
      },
      {
        title: "Necropsia (CD 20, Apenas Treinado)",
        description: "Você examina um cadáver para determinar a causa e o momento aproximado da morte. Causas raras ou extraordinárias, como um veneno ou maldição, possuem CD 30. Este uso leva dez minutos.",
      },
      {
        title: "Primeiros Socorros (CD 15)",
        description: "Você estabiliza um personagem adjacente que esteja sangrando. Este uso gasta uma ação padrão.",
      },
      {
        title: "Tratamento (Apenas Treinado)",
        description: "Você ajuda a vítima de uma doença ou veneno com efeito contínuo. Gaste uma ação completa e faça um teste de Cura contra a CD da doença ou veneno. Se você passar, o paciente recebe +5 em seu próximo teste de Fortitude contra esse efeito.",
      },
    ],
  },
  {
    id: "diplomacia",
    name: "Diplomacia",
    attribute: "Car",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você convence pessoas com lábia e argumentação. Usos de Diplomacia são efeitos mentais.",
    functions: [
      {
        title: "Barganha",
        description: "Comprando ou vendendo algo, você pode barganhar. Seu teste de Diplomacia é oposto pelo teste de Vontade do negociante. Se passar, você muda o preço em 10% a seu favor. Se passar por 10 ou mais, muda em 20%. Se falhar por 5 ou mais, você ofende o negociante — ele não voltará a tratar com você durante pelo menos uma semana. Alguns comerciantes ou estabelecimentos podem não ter permissão de baixar seus preços.",
      },
      {
        title: "Mudar Atitude",
        description: "Você muda a categoria de atitude de um NPC em relação a você ou a outra pessoa. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você passar, muda a atitude dele em uma categoria para cima ou para baixo, à sua escolha (ou, se passar por 10 ou mais, em duas categorias). Se falhar por 5 ou mais, a atitude do alvo muda uma categoria na direção oposta. Este uso gasta um minuto. Você pode sofrer –10 no teste para fazê-lo como uma ação completa (para evitar uma briga, por exemplo). Você só pode mudar a atitude de um mesmo alvo uma vez por dia.",
      },
      {
        title: "Persuasão (CD 20)",
        description: "Você convence uma pessoa a fazer algo, como responder uma pergunta ou prestar um favor. Se essa coisa for custosa (como fornecer uma carona de navio), você sofre –5 em seu teste. Se for perigosa (como ajudar numa luta), você sofre –10 ou falha automaticamente. De acordo com o mestre, seu teste pode ser oposto ao teste de Vontade da pessoa. Este uso gasta um minuto ou mais, conforme decisão do mestre.",
      },
    ],
  },
  {
    id: "Enganação",
    name: "Enganação",
    attribute: "Car",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você manipula pessoas com blefes e trapaças.",
    functions: [
      {
        title: "Disfarce",
        description: "Você muda sua aparência ou a de outra pessoa. Faça um teste de Enganação oposto pelo teste de Percepção de quem prestar atenção no disfarçado. Se você passar, a pessoa acredita no disfarce; caso contrário, percebe que há algo errado. Disfarces muito complexos (como uma raça diferente) impõem –5 no seu teste. Se o disfarce for de uma pessoa específica, quem a conhece recebe +10 no teste de Percepção. Um disfarce exige dez minutos e um estojo de disfarces. Sem ele, você sofre –5 no teste.",
      },
      {
        title: "Falsificação",
        description: "Você falsifica um documento. Faça um teste de Enganação oposto pelo teste de Percepção de quem examinar o documento. Se você passar, a pessoa acredita na falsificação; caso contrário, percebe que é falso. Se o documento for muito complexo ou incluir uma assinatura/carimbo específico, você sofre –10 no teste. Usada em conjunto com Ofício, você pode falsificar outros objetos (como joias e armas). Use Ofício para fabricar a peça e, então, um teste de Enganação para que ela pareça genuína.",
      },
      {
        title: "Fintar",
        description: "Você pode gastar uma ação padrão e fazer um teste de Enganação oposto a um teste de Reflexos de um ser em alcance curto. Se você passar, ele fica desprevenido contra seu próximo ataque, se realizado até o fim de seu próximo turno.",
      },
      {
        title: "Insinuação (CD 20)",
        description: "Você fala algo para alguém sem que outras pessoas entendam do que você está falando. Se você passar, o receptor entende sua mensagem. Se falhar por 5 ou mais, ele entende algo diferente do que você queria. Outras pessoas podem fazer um teste de Intuição oposto ao seu teste de Enganação. Se passarem, entendem o que você está dizendo.",
      },
      {
        title: "Intriga (CD 20)",
        description: "Você espalha uma fofoca. Por exemplo, pode dizer que o dono da taverna está aguando a cerveja para enfurecer o povo contra ele. Intrigas muito improváveis têm CD 30. Se você falhar por 5 ou mais, o alvo da intriga descobre que você está fofocando sobre ele. Mesmo que você passe, uma pessoa pode investigar a fonte da intriga e chegar até você. Isso exige um teste de Investigação por parte dela (CD igual ao seu teste para a intriga). Este uso exige um dia ou mais, conforme decisão do mestre.",
      },
      {
        title: "Mentir",
        description: "Você faz uma pessoa acreditar em algo que não é verdade. Seu teste é oposto pelo teste de Intuição da vítima. Mentiras muito implausíveis impõem uma penalidade de –10 no seu teste.",
      },
    ],
  },
  {
    id: "Fortitude ",
    name: "Fortitude ",
    attribute: "Con",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você usa esta perícia para resistir a efeitos que exigem vitalidade, como doenças e venenos. A CD é determinada pelo efeito. Você também usa Fortitude para manter seu fôlego quando está correndo ou sem respirar. A CD é 15+1 por teste anterior.",
    functions: [
      {
        title: "Pericias de Resistência",
        description: "Fortitude, Reflexos e Vontade são usadas para resistir a efeitos negativos, como uma explosão ou um encantamento de controle mental. Por isso, são chamadas de perícias de resistência. Efeitos que afetam seus “testes de resistência” afetam todos os testes dessas perícias. Assim, um efeito que forneça +1 em testes de resistência fornece +1 em Fortitude, Reflexos e Vontade.",
      },
    ],
  },
  {
    id: "Furtividade",
    name: "Furtividade",
    attribute: "Des",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: true, // Sofre penalidade de armadura
    description: "Você sabe ser discreto e sorrateiro.",
    functions: [
      {
        title: "Esconder-se",
        description: "Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Todos que falharem não conseguem percebê-lo (você tem camuflagem total contra eles). Esconder-se é uma ação livre que você só pode fazer no final do seu turno e apenas se terminar seu turno em um lugar onde seja possível se esconder (atrás de uma porta, num quarto escuro, numa mata densa, no meio de uma multidão...). Se tiver se movido durante o turno, você sofre –5 no teste (você pode se mover à metade do deslocamento normal para não sofrer essa penalidade). Se tiver atacado ou feito outra ação muito chamativa, sofre –20.",
      },
      {
        title: "Seguir",
        description: "Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como um descampado ou rua deserta. A vítima recebe +5 em seu teste de Percepção se estiver tomando precauções para não ser seguida (como olhar para trás de vez em quando). Se você passar, segue a pessoa até ela chegar ao seu destino. Se falhar, a pessoa o percebe na metade do caminho.",
      },
    ],
  },
  {
    id: "Guerra ",
    name: "Guerra ",
    attribute: "Int",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você foi educado em tática, estratégia e logística.",
    functions: [
      {
        title: "Analisar Terreno (CD 20)",
        description: "Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver.",
      },
      {
        title: "Plano de Ação (CD 20)",
        description: "Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se ele ficar com uma Iniciativa maior do que a sua e ainda não tiver agido nesta rodada, age imediatamente após seu turno. Nas próximas rodadas, ele age de acordo com a nova ordem.",
      },
    ],
  },
  {
    id: "Iniciativa ",
    name: "Iniciativa ",
    attribute: "Des",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Esta perícia determina sua velocidade de reação em situações de perigo. Quando uma cena de ação começa, cada personagem envolvido faz um teste de Iniciativa. Eles então agem em ordem decrescente dos resultados.",
    functions: [    ],
  },
  {
    id: "Intimidação",
    name: "Intimidação",
    attribute: "Car",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você pode assustar ou coagir outras pessoas. Usos de Intimidação são efeitos de medo.",
    functions: [
      {
        title: "Assustar",
        description: "Gaste uma ação padrão e faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura em alcance curto. Se você passar, ela fica abalada pelo resto da cena. Se você passar por 10 ou mais, ela fica apavorada por uma rodada e então abalada pelo resto da cena.",
      },
      {
        title: "Coagir",
        description: "Faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura inteligente (Int –3 ou maior) adjacente. Se você passar, ela obedece uma ordem sua (como fazer uma pequena tarefa, deixar que você passe por um lugar que ela estava protegendo...). Se você mandá-la fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou passa automaticamente. Este uso gasta um minuto ou mais, de acordo com o mestre, e deixa o alvo hostil contra você.",
      },
    ],
  },
  {
    id: "Intuição ",
    name: "Intuição ",
    attribute: "Sab",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Esta perícia mede sua empatia e “sexto sentido”.",
    functions: [
      {
        title: "Perceber Mentira",
        description: "Você descobre se alguém está mentindo (veja a perícia Enganação).",
      },
      {
        title: "Pressentimento (CD 20, Apenas Treinado)",
        description: "Você analisa uma pessoa para ter uma noção de sua índole ou caráter, ou uma situação para saber se há algo anormal (por exemplo, se os habitantes de uma vila estão agindo de forma estranha). Este uso apenas indica se há algo anormal, mas não revela a causa.",
      },
    ],
  },
  {
    id: "Investigação ",
    name: "Investigação ",
    attribute: "Int",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe encontrar pistas e informações.",
    functions: [
      {
        title: "Interrogar",
        description: "Você descobre informações perguntando ou indo para um lugar movimentado e mantendo os ouvidos atentos. Informações gerais (“Quem é o guerreiro mais forte da aldeia?”) não exigem teste. Informações restritas, que poucas pessoas conhecem (“Quem é o ancião que está sempre ao lado do rei?”), têm CD 20. Informações confidenciais ou que podem colocar em risco quem falar sobre elas (“Quem é o líder da guilda dos ladrões?”), têm CD 30. Este uso gasta uma hora e T$ 3d6 (para comprar bebidas, subornar oficiais etc.), mas esses valores podem variar de acordo com o mestre.",
      },
      {
        title: "Procurar",
        description: "Você examina um local em busca de algo. A CD varia: CD 15 para um item ou no meio de uma bagunça, mas não necessariamente escondido. CD 20 para um item escondido (cofre atrás de um quadro, documento no fundo falso de uma gaveta). CD 30 para um item muito bem escondido (passagem secreta ativada por um botão, documento escrito com tinta invisível). Este uso gasta desde uma ação completa (examinar uma escrivaninha) até um dia (pesquisar uma biblioteca). Você também pode encontrar armadilhas (CD de acordo com a armadilha) e rastros (mas para segui-los deve usar Sobrevivência).",
      },
    ],
  },
  {
    id: "Jogatina ",
    name: "Jogatina ",
    attribute: "Car",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe jogar jogos de azar.",
    functions: [
      {
        title: "Apostar",
        description: "Para resolver uma noite de jogatina: Pague T$ 1d10. Faça um teste de perícia. Consulte a tabela abaixo para determinar quanto você ganha. [Teste]/[Ganho] - [9 ou menos]/[Nenhum] - [10 a 14]/[Metade da aposta.] - [15 a 19]/[Valor da aposta (você “empata”).] - [20 a 29]/[Dobro da aposta.] - [30 a 39]/[Triplo da aposta.] - [40 ou mais]/[Quíntuplo da aposta.].  O mestre pode variar o valor da aposta básica: T$ 1d3, para uma taverna no porto frequentada por marujos e estivadores, a 1d10 × T$ 1.000, para um cassino de luxo em Valkaria.",
      },
    ],
  },
  {
    id: "Ladinagem",
    name: "Ladinagem",
    attribute: "Des",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: true, // Sofre penalidade de armadura
    description: "Você sabe exercer atividades ilícitas.",
    functions: [
      {
        title: "Abrir Fechadura",
        description: "Você abre uma fechadura trancada. A CD varia conforme a complexidade: CD 20 para fechaduras simples (porta de loja). CD 25 para fechaduras médias (prisão, baú). CD 30 para fechaduras superiores (cofre, câmara do tesouro). Este uso exige uma ação completa e uma gazua. Sem ela, você sofre –5 no teste.",
      },
      {
        title: "Ocultar",
        description: "Você esconde um objeto em você mesmo. Gaste uma ação padrão e faça um teste de Ladinagem oposto pelo teste de Percepção de qualquer um que possa vê-lo. Objetos discretos ou pequenos fornecem +5 no teste. Objetos desajeitados ou grandes impõem –5. Se uma pessoa revistar você, ela recebe +10 no teste de Percepção.",
      },
      {
        title: "Punga (CD 20)",
        description: "Você pega um objeto de outra pessoa (ou planta um objeto nas posses dela). Gaste uma ação padrão e faça um teste de Ladinagem. Se passar, você pega ou coloca o objeto desejado. A vítima tem direito a um teste de Percepção (CD igual ao seu teste de Ladinagem). Se passar, ela percebe sua tentativa, tenha você conseguido ou não.",
      },
      {
        title: "Sabotar",
        description: "Você desabilita um dispositivo mecânico. CD 20 para uma ação simples (emperrar uma fechadura, desativar uma armadilha básica, sabotar uma roda de carroça para que quebre em 1d4 rodadas). CD 30 para uma ação complexa (desativar uma armadilha avançada, sabotar um canhão para explodir quando utilizado). Se você falhar por 5 ou mais, algo sai errado — a armadilha se ativa, você pensa que o mecanismo foi desativado, mas ele ainda funciona... Usar esta perícia leva 1d4 rodadas. Você pode sofrer –5 no teste para realizá-lo como uma ação completa.",
      },
    ],
  },
  {
    id: "Luta ",
    name: "Luta ",
    attribute: "For",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você usa Luta para fazer ataques corpo a corpo. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada. Veja o Capítulo 5: Jogando para as regras completas de combate.",
    functions: [    ],
  },
  {
    id: "Misticismo",
    name: "Misticismo",
    attribute: "Int",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.",
    functions: [
      {
        title: "Detectar Magia (CD 15)",
        description: "Como uma ação completa, você detecta a presença e intensidade de auras mágicas em alcance curto (mas não suas localizações exatas). A intensidade de uma aura depende do círculo da magia ou categoria do item mágico que a gerou: Aura tênue: magias de 1º e 2º círculos e itens mágicos menores. Aura moderada: magias de 3º e 4º círculos e itens mágicos médios. Aura poderosa: magias de 5º círculo e itens mágicos maiores. Aura avassaladora: magias lançadas por um deus maior e artefatos. Caso a aura esteja atrás de uma barreira, você sofre uma penalidade no teste: –5 para madeira ou pedra. –10 para ferro ou chumbo.",
      },
      {
        title: "Identificar Criatura (CD 15 + ND da Criatura)",
        description: "Você analisa uma criatura mágica (construto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura (como um poder ou vulnerabilidade). Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acredita que a criatura é vulnerável a fogo, quando na verdade é vulnerável a frio). Este uso gasta uma ação padrão.",
      },
      {
        title: "Identificar Item Mágico",
        description: "Você estuda um item mágico para identificar seus poderes. A CD varia conforme o tipo do item: CD 20 para itens mágicos menores. CD 25 para itens mágicos médios. CD 30 para itens mágicos maiores. Este uso gasta uma hora. Você pode sofrer uma penalidade de –10 no teste para diminuir o tempo para uma ação completa.",
      },
      {
        title: "Identificar Magia (CD 15 + Custo em PM da Magia)",
        description: "Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.",
      },
      {
        title: "Informação",
        description: "Você responde dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas têm CD 20. Mistérios e enigmas têm CD 30.",
      },
      {
        title: "Lançar Magia de Armadura (CD 20 + Custo em PM da Magia)",
        description: "Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.",
      },
    ],
  },
  {
    id: "Nobreza ",
    name: "Nobreza ",
    attribute: "Int",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você recebeu a educação de um nobre.",
    functions: [
      {
        title: "Etiqueta (CD 15)",
        description: "Você sabe se portar em ambientes aristocráticos, como bailes e audiências.",
      },
      {
        title: "Informação",
        description: "Você responde dúvidas relativas a leis, tradições, linhagens e heráldica. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.",
      },
    ],
  },
  {
    id: "Oficio",
    name: "Ofício ",
    attribute: "Int",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Ofício, na verdade, representa várias perícias diferentes. Cada uma permite fabricar itens de certas categorias: Armeiro → Armas, Armaduras & Escudos. Artesão → Equipamento de Aventura, Ferramentas, Esotéricos e Veículos. Alquimista → Alquímicos. Cozinheiro → Alimentação. Alfaiate → Vestuário. Você pode inventar outros tipos de Ofício: carpinteiro, pedreiro, ourives, fazendeiro, pescador, estalajadeiro, escriba, escultor, pintor... Nesses casos, converse com o mestre para determinar que usos a perícia terá. Cada Ofício exige instrumentos específicos. Sem eles, você sofre –5 no teste.",
    functions: [
      {
        title: "Consertar",
        description: "Reparar um item destruído tem a mesma CD para fabricá-lo. Cada tentativa consome uma hora de trabalho e um décimo do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos (mas você pode tentar novamente).",
      },
      {
        title: "Fabricar",
        description: "Você produz um item gastando matéria-prima e tempo de trabalho. A matéria-prima custa 1/3 do preço do item. O tempo de trabalho depende do tipo de item: 1 dia para consumíveis (itens alquímicos, pergaminhos, poções, munições...). 1 semana para não consumíveis comuns (armas, ferramentas...). 1 mês para não consumíveis superiores e/ou mágicos. Para consumíveis, você pode sofrer –5 no teste para fabricar duas unidades no mesmo tempo (pagando o custo de ambas). A critério do mestre: Itens muito simples e sem efeito mecânico podem levar menos tempo. Itens muito grandes ou complexos (como uma casa ou ponte) podem demorar vários meses. A CD do teste varia conforme a complexidade do item: CD 15 → Itens simples (equipamentos de aventura, armas simples, munições, armaduras leves, escudos, preparados, catalisadores e outros a critério do mestre). CD 20 → Itens complexos (armas marciais, exóticas ou de fogo, armaduras pesadas, ferramentas, vestuários, esotéricos, venenos...).",
      },
      {
        title: "Identificar (CD 20)",
        description: "Você pode identificar itens raros e exóticos ligados ao seu Ofício. Se passar, descobre as propriedades do item e seu preço. Este uso gasta uma ação completa.",
      },
      {
        title: "Sustento (CD 15)",
        description: "Com uma semana de trabalho e um teste de Ofício, você ganha T$ 1, mais T$ 1 por ponto que seu teste exceder a CD. Por exemplo, com um resultado 20, você ganha T$ 6 pela semana de trabalho.  Trabalhadores sem treinamento usam testes de atributo para sustento. A critério do mestre, outras perícias podem ser usadas para sustento, como Adestramento, Cura ou Sobrevivência.",
      },
    ],
  },
  {
    id: "percepcao",
    name: "Percepção",
    attribute: "Sab",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você nota coisas usando seus sentidos.",
    functions: [
      {
        title: "Observar",
        description: "Você vê coisas discretas ou escondidas. A CD varia conforme a dificuldade: CD 15 → Algo difícil de ser visto (um livro específico em uma estante). CD 30 → Algo quase invisível (uma gota de sangue em uma folha no meio de uma floresta à noite). Para pessoas ou itens escondidos, a CD é o resultado do teste de Furtividade ou Ladinagem feito para escondê-los. Você também pode ler lábios (CD 20).",
      },
      {
        title: "Ouvir",
        description: "Você escuta barulhos sutis. A CD varia conforme a situação: CD 0 → Conversa casual próxima (você passa automaticamente, a menos que haja penalidades). CD 15 → Pessoas sussurrando. +10 na CD → Ouvir do outro lado de uma porta. Você pode fazer testes de Percepção para ouvir mesmo que esteja dormindo, mas sofre –10 no teste. Se passar no teste, você acorda. Para perceber criaturas que não possam ser vistas, a CD é 20 ou +10 no teste de Furtividade da criatura, o que for maior. Mesmo que passe no teste, você ainda sofre penalidades normais por lutar sem ver o inimigo.",
      },
    ],
  },
  {
    id: "Pilotagem",
    name: "Pilotagem",
    attribute: "Des",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe operar veículos como carroças, barcos e balões. Ações simples não exigem testes — você pode: Atrelar seus trobos à sua carroça e conduzi-la pela estrada. Levantar âncora e velejar seu navio em águas tranquilas. Porém, conduzir um veículo em situações ruins exige um teste de Pilotagem. Condução em Situações Difíceis Se estiver operando um veículo em condições adversas, faça um teste de Pilotagem (CD 15). Exemplos de situações ruins: Terreno acidentado para veículos terrestres. Chuva ou ventania para veículos aquáticos ou aéreos. O teste exige uma ação de movimento e ocorre por turno ou cena, conforme decisão do mestre. Se falhar, você avança metade do deslocamento. Se falhar por 5 ou mais, ocorre um acidente. Situações extremas (terreno com obstáculos, tempestades...) aumentam a CD para 25.",
    functions: [    ],
  },
  {
    id: "Pontaria ",
    name: "Pontaria ",
    attribute: "Des",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você usa Pontaria para fazer ataques à distância. A CD é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.",
    functions: [    ],
  },
  {
    id: "Reflexos ",
    name: "Reflexos ",
    attribute: "Des",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você usa esta perícia para resistir a efeitos que exigem reação rápida, como armadilhas e explosões. A CD é determinada pelo efeito. Você também usa Reflexos para evitar fintas.",
    functions: [
    ],
  },
  {
    id: "religiao",
    name: "Religião",
    attribute: "Sab",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você possui conhecimento sobre os deuses e as religiões de Arton.",
    functions: [
      {
        title: "Identificar Criatura (CD 15 + ND da Criatura)",
        description: "Você pode identificar uma criatura com origem divina (anjos, demônios, alguns mortos-vivos e construtos etc.). Veja a perícia Misticismo para mais detalhes.",
      },
      {
        title: "Identificar Item Mágico",
        description: "Você pode identificar um item mágico de origem divina. Veja a perícia Misticismo para mais detalhes.",
      },
      {
        title: "Informação",
        description: "Você responde dúvidas relativas a deuses, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas têm CD 20. Mistérios e enigmas têm CD 30.",
      },
      {
        title: "Rito (CD 20)",
        description: "Você realiza uma cerimônia religiosa, como um batizado, casamento ou funeral. Isso inclui a cerimônia de penitência para redimir um devoto que tenha descumprido as Obrigações & Restrições de sua divindade. Uma cerimônia de penitência exige um sacrifício de T$ 100 por nível de personagem do devoto ou a realização de uma missão sagrada, conforme decisão do mestre.",
      },
    ],
  },
  {
    id: "Sobrevivencia",
    name: "Sobrevivência",
    attribute: "Sab",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você está em casa nos ermos.",
    functions: [
      {
        title: "Acampamento",
        description: "Você consegue abrigo e alimento para você e seu grupo por um dia (caçando, pescando, colhendo frutos...). A CD depende do terreno: CD 15 → Planícies e colinas. CD 20 → Florestas e pântanos. CD 25 → Desertos ou montanhas. CD 30 → Regiões planares perigosas ou áreas de Tormenta. Penalidades: Regiões áridas ou estéreis e clima ruim (neve, tempestade...) impõem –5 no teste. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM. Este uso exige equipamento de viagem. Sem ele, você sofre –5 no teste.",
      },
      {
        title: "Identificar Criatura (CD 15 + ND da Criatura)",
        description: "Você pode identificar um animal ou monstro. Veja a perícia Misticismo para mais detalhes.",
      },
      {
        title: "Orientar-se",
        description: "Um personagem viajando pelos ermos precisa fazer um teste de Sobrevivência por dia para avançar. A CD depende do tipo de terreno. Se passar, avança seu deslocamento normal. Se falhar, avança apenas metade do deslocamento. Se falhar por 5 ou mais, se perde e não avança pelo dia. Em um grupo: Um único personagem deve ser escolhido como guia. Personagens treinados em Sobrevivência podem ajudá-lo. Se mais de um personagem quiser fazer o teste por si só, todos rolam em segredo. Os jogadores devem decidir qual guia seguir antes de verem o resultado! Este teste só é exigido em jornadas perigosas (conforme decisão do mestre).",
      },
      {
        title: "Rastrear (Apenas Treinado)",
        description: "Você pode identificar e seguir rastros. A CD varia conforme o tipo de solo: CD 15 → Solo macio (neve, lama). CD 20 → Solo comum (grama, terra). CD 25 → Solo duro (rocha, piso de interiores). Modificadores: CD –5 → Se estiver rastreando um grupo grande (dez ou mais indivíduos) ou criaturas Enormes ou Colossais. CD +5 → Se a visibilidade for precária (noite, chuva, neblina...). Enquanto rastreia, seu deslocamento é reduzido à metade. Se falhar, pode tentar novamente gastando mais um dia. Porém, a cada dia desde a criação dos rastros, a CD aumenta em +1.",
      },
    ],
  },
  {
    id: "Vontade",
    name: "Vontade",
    attribute: "Sab",
    trainedOnly: false, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você usa esta perícia para resistir a efeitos que exigem determinação, como intimidação e encantamentos. A CD é determinada pelo efeito. Testes de Vontade são testes de resistência.",
    functions: [    ],
  },

];