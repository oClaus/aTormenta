import { Adventure } from "@/types/adventure";

export const adventures: Adventure[] = [
  {
    id: "1",
    name: "Por Vós Esperamos",
    theme: "Horror",
    image: "/aventuras/por_vos_esperamos.png",
    summary: "Aventureiros contratados para libertar cemitério de mortos-vivos com desejos inacabados.",
    sections: [
      {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — Dragon Age, Tormenta20 e qualquer outro compatível com esses gêneros. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O pequeno palácio"
    },
    {
      type: "text",
      content: "Nos limites de uma vila, há um edifício jamais terminado e já decadente. Habitantes da região chamam-no de “Palaciozinho”. Em outros tempos abrigou um rico clã de comerciantes, mas hoje, serve de residência para um homem baixo, calvo, magro, solteirão, nervoso, não-tão-mais-endinheirado, de nome Kerles Cossácio III. É o único herdeiro das terras da sua família e sobrevive dando aulas de gramática, lógica e retórica para jovens capazes de pagar o valor que considera justo pelas lições. Ou seja, não tem muitos alunos."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Recentemente, um cemitério que fica atrás dessa propriedade foi tomado por uma praga de mortos-vivos. Os monstros se ergueram das covas e o professor foi obrigado a gastar suas últimas economias procurando aventureiros para destruí-los. Apesar disso, quatro dessas almas penadas teimosas se recusaram a partir. Os supostos heróis é que partiram, pois seu caríssimo contrato cobria uma única noite de trabalho. O quarteto de desmortos restantes continuou a assombrar o lugar!"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "O grupo de aventureiros pode entrar em contato com Kerles de várias formas. Talvez ele tenha conseguido um arriscado empréstimo com a Guilda dos Ladrões local e colocado anúncios em uma taverna, usando o dinheiro para tentar recrutar mercenários mais capacitados (ou não tão qualificados, mas que estivessem dentro de seu orçamento...). Quiçá algum personagem precise de informações dele, ou ajuda para estudar algo."
    },
    {
      type: "text",
      content: "Kerles oferece uma justa recompensa em moedas de ouro, bem como seus serviços de tutor. Ele busca apenas alguém para ajudá-lo a se livrar de uma vez por todas dos defuntos insistentes."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "As quatro assombrações"
    },
    {
      type: "text",
      content: "Qualquer ficha de morto-vivo encontrada em um bestiário ou livro de regras servirá para representar os oponentes dessa aventura, como esqueletos, fantasmas ou zumbis. Precisam apenas ter um nível de desafio adequado ao grupo. No entanto, esses mortos específicos têm também algumas características adicionais: jamais aparecem durante o dia, simplesmente desaparecendo, e só podem ser vencidos de maneira definitiva se certos requisitos forem cumpridos. Se a condição não for obedecida, ressurgem na noite seguinte — Kerles inspeciona o cemitério de longe todo anoitecer, para se certificar que se foram mesmo."
    },
    {
      type: "text",
      content: "Um personagem bem-sucedido em um teste de conhecimento ligado a religião, ou artes místicas, não sabe a maneira exata de exorcizar cada cadáver animado, porém, deduz que isso está relacionado com quem eles foram em vida."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "O cemitério conta com imagens e estátuas, evidenciando ter pertencido à família de Kerles. Possui duas áreas de interesse principais que podem ser exploradas."
    },
    {
      type: "text",
      content: "A primeira é a Cripta do Clã Cossácio. Esculpida em mármore, tem uma porta metálica trancada que lhe dá acesso. Essa tumba, apesar de impressionante, não contém nenhum tipo de riqueza. Tudo foi retirado anos atrás: Kerles vendeu esses espólios para saldar dívidas. Não há sinais recentes de arrombamento ou vandalismo. Dentro dela ficam dez túmulos cobertos por símbolos sagrados. Caso sejam abertos, no seu interior encontram-se apenas cadáveres comuns — muito bem vestidos. Não é preciso testes para deduzir o óbvio: os símbolos mágicos, e a própria qualidade dos túmulos deve ter impedido a família de se erguer e perambular por aí."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "A segunda é o descampado do cemitério, cheio de lápides já bastante ilegíveis e covas rasas reviradas de dentro para fora. Aqui parece ter sido enterrada a criadagem do Palaciozinho. Alguns mortos podem ser encontrados vagando nessa área à noite em lugares diferentes. Eles são incapazes de comunicar e atacam assim que avistam alguém. O segredo para derrotá-los de vez é não ser percebido e observar como agem:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Perto da maior tumba do lugar há um morto marchando e fazendo saudações militares para o nada. Foi o Capitão Myrsha, soldado que serviu como guarda-costas dos Cossácio. Precisa receber uma ordem de alguém de uma patente superior a dele para partir para o além, ou então morrer em uma “luta de verdade” — um combate longo, que dure mais de três rodadas."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Em movimento constante há uma figura manca, mas que se mexe com muita rapidez. Está sempre com uma expressão de tédio no rosto podre. Surge e some logo em seguida, ignorando todos. Quando age, consegue se esconder a plena vista e pode fazer isso enquanto corre. Esse foi o Senescal Fadorov, antigo administrador do Palaciozinho. Homem muito atarefado, morreu por excesso de stress. A única maneira de derrotá-lo é apanhá-lo, impedi-lo de continuar se deslocando, e fazer com que se divirta de alguma forma."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Sentado ao redor de uma fonte seca, há o cadáver de uma mulher fazendo o gesto de esfregar alguma coisa no ar, com as mãos em garra. Ela tem vestes muito esfarrapadas. Foi Natanna, uma lavadeira. Morreu afogada nessa mesma fonte. Deseja vestir uma roupa bonita como aquelas que lavava em vida antes de poder desencarnar."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Cavando túneis por debaixo de onde os personagens passam e tentando fazê-los cair em buracos-armadilha, há uma morta que luta usando uma picareta. É a antiga intendente das minas da família, chamada Cerbenira. Trabalhava debaixo da terra, quase nunca vendo a luz do sol. Só pode ser destruída com magias de luz ou caso presencie o amanhecer."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Se o grupo conseguir vencer todos os mortos em definitivo, recebe a recompensa. Caso relatem a aventura para Kerles, ele ficará comovido:"
    },
    {
      type: "text",
      content: "— Minha família sempre quis viver como a velha nobreza e explorou muito essas pessoas! Talvez esteja na hora de fazer diferente. Em vez de lecionar para os filhotes do senhorio, vou alugar essa terra e abrir uma escola na vila. Serei mais feliz assim! Quem sabe as crianças um dia possam crescer e ajudar a mudar este mundo desgraçado..."
    }
    ]
  },
  {
    id: "2",
    name: "A Peste",
    theme: "Aventura",
    image: "/aventuras/a_peste.png",
    summary: "Heróis trazem peste mágica, viajam no tempo para impedir tragédia.",
    sections: [
      {
      type: "title",
      content: "A Peste"
    },
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta RPG e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. A peste pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Trevos de quatro folhas"
    },
    {
      type: "text",
      content: "Os personagens estão em meio a uma viagem, rumo a uma cidade, quando acampam nas proximidades de um bosque. A vegetação treme, e de repente, um duende surge correndo: 'Ajudem-me! Por favor.' A criatura está sendo perseguida por um monstro qualquer. Após o combate, o duende recompensa os personagens e passa a segui-los. É extremamente prestativo... ao ponto de ser irritante! Se questionado por que está seguindo o grupo ou é tão zeloso, dá de ombros: 'Sou guardião dos trevos de quatro folhas. Cuido deles. É meu dever...'"
    },
    {
      type: "text",
      content: "O duende explica:"
    },
    {
      type: "text",
      content: "'O que é um trevo de quatro folhas? Uma aberração, uma aleatoriedade. São raros. Você encontra apenas um em meio a milhares de outros. Vocês são heróis, não são? Fazem coisas que uma pessoa comum apenas sonharia. Lutam contra monstros, sobrevivem a golpes que partiriam alguém ao meio, canalizam magia... Só gente predestinada desenvolve tais dons. São uma pessoa dentre milhares. E vocês são um grupo! Mais raro ainda. É meu dever cuidar de algo tão improvável e especial.'"
    },
    {
      type: "text",
      content: "Não há como fazer o duende a ir embora, a não ser, talvez, matá-lo! Mas o grupo precisará do novo aliado, se quiser desfazer um acontecimento terrível."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cidade fantasma"
    },
    {
      type: "text",
      content: "Ao continuar a viagem, os personagens desmaiam. Acordam confusos. Seus equipamentos estão lá, mas o duende desapareceu. Ao procurá-lo, chegam à cidade. Não há nada de estranho, exceto por um silêncio incomum. Portões fechados. Não há guardas nos muros ou torres. Os personagens terão que arrombá-los ou escalá-los."
    },
    {
      type: "text",
      content: "Do lado de dentro, percebem que tudo está deserto. Fogueiras apagadas podem ser encontradas a cada esquina, em praças e becos. E cadáveres. Um fedor insuportável empesteia o ar. Alguém que examine os mortos, percebe que não estavam saudáveis antes de morrer. Casas também estão abandonadas ou com pessoas mortas em seu interior. Peça testes ligados à percepção. Os personagens entendem que o local onde é mais provável encontrar sobreviventes é o castelo da (ou a sede de comando local)."
    },
    {
      type: "text",
      content: "Após rumar para lá, descobrem que o castelo também está deserto. Na sala do trono, encontram alguém."
    },
    {
      type: "text",
      content: "É o duende. Sua barba e cabelos estão brancos."
    },
    {
      type: "text",
      content: "“Vocês... eu sabia que tinha feito algo errado. Preciso mandá-los de volta. Tem que funcionar dessa vez!”"
    },
    {
      type: "text",
      content: "Questionado sobre o que isso significa, ele irá mais uma vez se explicar: semanas atrás, os personagens chegaram à cidade e uma pandemia se espalhou. Uma quarentena foi declarada pelas autoridades do reino. Os personagens ficaram acamados e sendo cuidados nos templos locais. Todas as pessoas continuaram na cidade, porém, morreram. Exceto por eles e o duende."
    },
    {
      type: "text",
      content: "“Juntei as peças e descobri que fomos nós! Trouxemos a praga. Pegamos da criatura que estava me perseguindo no bosque. E a trouxemos para cá. A peste se mostrou capaz de se espalhar rapidamente. É uma doença mágica, e bênçãos e curas convencionais não puderam vencê-la. Não foi fatal, não para nós. Porque somos especiais. Mas se provou fatal para todo o resto…”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Viagem no tempo"
    },
    {
      type: "text",
      content: "O duende explica como os personagens foram parar ali, e porque não se lembram de nada."
    },
    {
      type: "text",
      content: "“Uma vez, há muito tempo, toda esta região foi um bosque das fadas. Vocês sabem, meu povo é capaz de distorcer o tempo! Às vezes, viajantes entram em nossos bosques e após vagar por alguns dias, descobrem que se passaram vinte anos. É, às vezes, só às vezes, descobrem que deixaram o bosque dias antes de entrar! Criei um ritual. Ao custo de minha própria energia vital consegui distorcer o tempo e mandar vocês de volta... Meu alcance é limitado. Enviei vocês até os portões da cidade, mas não consegui recuar tanto no tempo como gostaria. Vocês ainda estavam muito pesados. Cometi um erro... removam suas roupas e equipamentos! Irei tentar mais uma vez. Precisam viajar no tempo e encontrar a si mesmos antes de entrarem na cidade! Se convençam a voltar para o bosque e nós impediremos todas as mortes... Sei que farão isso. Afinal, são heróis!”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "De volta para o passado"
    },
    {
      type: "text",
      content: "No passado, os heróis encontram a si mesmos e o duende viajando por uma estrada empoeirada. Essa cena é uma oportunidade para se divertir um pouco. Você pode pedir para que cada jogador interprete ou descreva as ações dos personagens vindos do futuro, e também daqueles do passado! Aqui a graça é os jogadores criarem a cena inusitada em conjunto. Quando os personagens são finalmente convencidos, as contrapartes vindas do futuro desaparecem. O jogo segue com os personagens do passado, que é agora presente!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A curandeira"
    },
    {
      type: "text",
      content: "O duende irá sugerir que voltem ao bosque e encontrem uma bruxa que habita lá, e que não é difícil. A bruxa vive no coração do bosque, numa cabana. Ela usa uma máscara comprida e um uniforme amarelo que cobre todo seu corpo. A doença está além de suas capacidades, mas ela pode oferecer aos heróis trajes parecidos com os dela, para que possam viajar sem contaminar outras pessoas. Não poderão, porém, retirá-los na presença de estranhos. As roupas também irão marcá-los como curandeiros que mexem com a morte, e trazem penalidades em interações sociais. Para realmente se curar, os personagens precisarão ir em busca de magia poderosa: uma sacerdotisa lendária, uma poção rara, um gênio capaz de realizar desejos, etc..."
    },
    {
      type: "text",
      content: "É o gancho para outra aventura. Ou até mesmo para uma campanha inteira, onde os personagens viajam pelo reino com seus trajes medonhos!"
    }
    ]
  },
  {
    id: "3",
    name: "Evil Park",
    theme: "Horror",
    image: "/aventuras/evil_park.png",
    summary: "Uma aventura investigativa em um parque temático povoado por mistérios.",
    sections: [
      { type: "title", content: "Informação Importante" },
      { type: "text", content: "Esta mini-aventura foi feita para RPGs de terror contemporâneo — Ordem Paranormal, Rastro de Cthulhu e qualquer outro sistema compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha." },
      { type: "break" },
      { type: "subtitle", content: "Sombras no Parque Proibido" },
      { type: "text", content: "Algumas pessoas achariam impensável erguer um parque temático povoado por assombrações reais, ainda mais a poucos quilômetros da capital de um país, ignorando leis de segurança nacional. Mas estas pessoas não são Alexandre Vonades, bilionário conhecido por seus projetos excêntricos, acostumado a ter tudo o que deseja. Ele conta hoje com riquezas que superam as de algumas nações, acumuladas por sua família há mais de um século em diferentes negócios ligados à tecnologia. Contudo, Alex — como gosta de ser chamado — não está interessado em ciência, ou não somente. É também um ocultista. Tem a obsessão de se tornar o primeiro homem na história a domar o desconhecido. De personalidade teatral, falem bem ou falem mal dele, quer acima de tudo uma plateia." },
      { type: "break" },
      { type: "text", content: "Recentemente, o magnata comprou uma cidade quase inteira — um velho entreposto rodoviário ligando o interior ao distrito federal. O lugarejo deixou de receber o dinheiro de igrejas locais, fechadas por escândalos de um de seus líderes, passando a contar apenas com esmolas de caminhoneiros. É ao mesmo tempo uma área abandonada que fica próxima a um centro administrativo, sendo de fácil acesso. Perfeita para o empreendimento." },
      { type: "break" },
      { type: "text", content: "O projeto do parque foi vetado, mas graças a uma bancada de políticos trabalhando para Alex no congresso, a magia aconteceu. Magia literal: com acesso a um time de místicos, rituais e experimentos foram feitos, atraindo criaturas paranormais para habitar as atrações do Evil Park." },
      { type: "break" },
      { type: "text", content: "Os personagens dos jogadores fazem parte de uma equipe de investigação, têm diferentes motivações, mas um só objetivo: encontrar irregularidades no local, demonstrando que é um risco ao público, e fechá-lo. Esta é uma aventura estilo sandbox, não tem uma ordem definida. Os protagonistas podem explorar em qualquer ordem as atrações descritas abaixo, interagindo entre si. Ao mestre cabe pegar a ideia básica de cada lugar, planejar e adaptar à sua maneira, antes de narrar (para desafios prontos, recomendamos o livro Ordem Paranormal, que já vem com diversas ameaças similares às descritas aqui!)" },
      { type: "break" },
      { type: "text", content: "Reunir evidências fica a critério do grupo, mas não é realmente necessário. Pois, após terem explorado o parque por tempo o bastante, quando o narrador julgar mais dramático e adequado, algo acontece: um blecaute. A tecnologia mística que contém as assombrações é desativada por sabotadores, agentes infiltrados de uma potência estrangeira. Foram eles que guiaram os passos de Alex o tempo todo, pois pretendiam usar o incidente causado pela fuga das criaturas para atingir a capital causando caos e instabilidade política no país." },
      { type: "break" },
      { type: "text", content: "Se envolver com a trama política, porém, é completamente opcional. A prioridade do grupo passa a ser navegar em meio à paisagem noturna do parque e encontrar uma saída, tendo o mais simples dos objetivos: sobreviver." },

      { type: "break" },
      { type: "subtitle", content: "Nossas Atrações" },
      { type: "text", content: "Boas vindas ao Evil Park, onde os pesadelos se tornam realidade!" },
      { type: "text", content: "Este é o primeiro safari supranatural do planeta Terra. Um lugar onde a humanidade pode observar e interagir de maneiras segura com as criaturas que habitam o além." },
      { type: "text", content: "Horário de funcionamento: 7h00 às 5h00 da manhã. Descontos especiais em ingressos a partir da meia-noite." },
      { type: "break" },
      
      { type: "subtitle", content: "Aracnoárea."},
      {
      type: "text",
      content: "Entre no covil das aranhas da morte e presencie em primeira mão os fascinantes hábitos destas criaturas originadas de pavores primitivos. Atire oferendas em sua teia e as veja se alimentar e crescer. Ou — se tiver coragem — entre na Sala dos Espelhos e descubra qual é o seu maior medo!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cybercoliseu."
      },
      {
        type: "text",
        content: "Quem disse que ocultismo não pode se fundir à tecnologia? Conheça nossos cybergladiadores, lutadores que unem as armas e técnicas marciais criadas pela racionalidade humana à energia caótica pulsante de horrores que assombram o inconsciente coletivo. E se você acredita ter um bom olho para rinhas biomecânicas, participe de nossa banca de apostas e concorra a incríveis prêmios exclusivos!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Praça do Homem Ilustrado."
      },
      {
        type: "text",
        content: "O início de tudo. Contemple o antigo faraó com hieróglifos luminosos de pura luz tatuados em sua pele. Eles contém a chave que permitiu aos maiores cientistas desta era diluírem a membrana do além mundo. Hoje é um monumento vivo disponível para que todos vejam, a lenda diz que ele traz amor, sorte e riqueza àqueles que o ouvem pacientemente repetir seu nome 1000 vezes. Mas no meio tempo, aproveite, e delicie-se com restaurantes inspirados na cozinha de mais de sete países diferentes."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Templo da Divindade Ignota."
      },
      {
        type: "text",
        content: "Venha participar desta experiência 100% imersiva e interativa neste resort místico. Entregue-se a uma semana inebriantemente luxuriosa como membro de um culto presidido por ocultistas iniciados. Participe de banquetes, festas, cânticos profanos e os mais diversos rituais, acompanhando em tempo real o esforço para a invocação de uma deusa misteriosa. Vagas sujeitas a disponibilidade."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Zona Z."
      },
      {
        type: "text",
        content: "Você sempre quis saber o que faria durante um apocalipse zumbi? Agora você pode. Explore este antigo bairro abandonado, deixado exatamente como estava quando a atração foi inaugurada. Fique o tempo que quiser, leve as lembranças que quiser… mas cuidado! As ruas estão infestadas de cadáveres possuídos. Antes de embarcar nesta aventura, não deixe de passar no Clube de Tiro, para praticar pontaria e comprar as armas mais letais disponíveis no mercado. Visitas apenas acompanhadas de um guia."
      },
      {
        type: "break"
      },
      {
        type: "text",
        content: "Não é permitido o ingresso de menores de idade e pessoas com problemas cardíacos. Prepare-se para uma jornada assustadora ao coração do verdadeiro terror."
      },
      {
        type: "break"
      },
      {
        type: "text",
        content: "O Evil Park espera por você."
      },
    ]
  },
];