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
  {
  id: "4",
  name: "Escarlate",
  theme: "Fantasia Sombria",
  image: "/aventuras/escarlate.png",
  summary: "Uma simples missão de entrega de oferendas revela uma antiga maldição que transforma aldeões em lobisomens, forçando os heróis a confiar em uma druida misteriosa para sobreviverem e talvez quebrarem o pacto profano.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de fantasia como A Lenda de Ghanor e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PELA ESTRADA AFORA"
    },
    {
      type: "text",
      content: "A aldeia de Pousio tem vivido sob a ameaça constante de lobos que rondam o bosque vizinho. Recentemente, os ataques das feras tornaram-se mais letais, aterrorizando os aldeões e obrigando-os a se esconderem em suas casas."
    },
    {
      type: "text",
      content: "Ao passar pela vila, os personagens dos jogadores são contratados para uma missão: entregar uma cesta fechada, contendo oferendas para uma druida. Alguns aldeões acreditam que a sacerdotisa possa acalmar os espíritos do bosque, que parecem estar enfurecendo os lobos. No entanto, um lenhador supersticioso acusa a mulher de ser a bruxa responsável pelos ataques e pede aos aventureiros que a eliminem."
    },
    {
      type: "text",
      content: "Os heróis são instruídos a seguir apenas pela trilha principal que corta a floresta, pois a mata densa é habitada pelos espíritos."
    },
    {
      type: "text",
      content: "Logo no início da jornada, os aventureiros encontram seres de rara beleza, que tentam atraí-los com canções hipnóticas para um rio. Lá, essas criaturas transformam-se em monstros e tentam afogar o grupo. Durante a distração, um metamorfo tenta se infiltrar no grupo assumindo a forma da cesta de oferendas, planejando ser levado até a cabana da druida."
    },
    {
      type: "text",
      content: "Após um dia exaustivo de viagem, quando avistam a cabana, os heróis ouvem uivos ao longe. Para sua surpresa, não são lobos que emergem das sombras, mas uma matilha de híbridos: são lobisomens!"
    },
    {
      type: "text",
      content: "A melhor chance de sobreviver é alcançar a cabana. Durante a fuga desesperada, os aventureiros recebem ajuda de uma sacerdotisa vestida com mantos escarlates, que surge cavalgando um lobo vermelho. Se algum lobisomem for derrotado no trajeto, retornará à sua forma humana, revelando sua identidade: um dos habitantes de Pousio."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CABANA NO BOSQUE"
    },
    {
      type: "text",
      content: "A sacerdotisa se apresenta como Escarlate, neta da antiga druida que vivia na cabana. Ela explica que apenas ela, sua mãe e sua avó conseguiram se conectar com as forças primais do bosque e escapar de uma maldição. A cabana onde vivem está protegida por feitiços, mantendo-a segura contra os espíritos que rondam a mata."
    },
    {
      type: "text",
      content: "Quando a aldeia de Pousio foi fundada por viajantes em busca de terras, a avó de Escarlate reconheceu a clareira como um lugar sagrado. Embora fosse fértil, o terreno não havia sido cultivado por um motivo: um pacto entre humanos e os espíritos que viviam naqueles domínios proibia isso."
    },
    {
      type: "text",
      content: "No entanto, os viajantes, exaustos após serem expulsos de suas terras por um lorde ambicioso, decidiram se assentar ali, ignorando o acordo. Os espíritos, enfurecidos pela violação, amaldiçoaram os aldeões, transformando-os lentamente em lobisomens. As mutações, no entanto, não ocorrem de forma uniforme, e os aldeões perdem a memória das transformações, retomando suas vidas normais durante um tempo até que os ciclos recomecem, dando vazão a seus impulsos mais reprimidos."
    },
    {
      type: "text",
      content: "A avó e a mãe de Escarlate sobreviveram à maldição ao se exilar na floresta profunda, mas passaram a viver sob constante cerco dos espíritos. Elas precisaram aprender magia avançada, técnicas de caça e meditação para preservar sua humanidade. Apesar de seus esforços, ambas morreram ao longo dos anos, deixando Escarlate como a única sobrevivente, junto com seu lobo, Sangue. Este lobo, ao qual a alma de Escarlate foi atrelada na infância, a protege da corrupção dos espíritos, mas também a prende ao bosque, impedindo-a de partir."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "A situação dos personagens é complexa e não existe uma “solução mágica”. Eles podem tentar fugir do bosque, mas sempre são encontrados pela matilha de lobisomens. Escarlate acredita que as oferendas trazidas na cesta podem ser usadas em um ritual para apaziguar os espíritos, atraindo os lobisomens para uma armadilha em um local escolhido pelo grupo. Isso permitiria que eles estudassem melhor as fraquezas das criaturas, se preparassem e matassem a maior quantidade possível delas. Mesmo que não vençam todos os lobisomens, podem recuar para segurança da cabana e se recuperar, tentando novamente até desbaratar a matilha."
    },
    {
      type: "text",
      content: "No entanto, há obstáculos. O ritual só pode ser realizado por um espírito livre, o que significa que um druida do grupo precisa aprendê-lo, ou Escarlate deve se livrar de Sangue, seu lobo — na verdade, um espírito obsessor e cruel, que deseja ter Escarlate apenas para si e mantê-la no bosque para sempre."
    },
    {
      type: "text",
      content: "Além disso, o ritual deve ser realizado na solidão de uma caverna sob a cabana. Se o metamorfo que se infiltrou no grupo não for detectado, há uma chance dele conseguir matar Escarlate e assumir sua forma, realizando um ritual falso e levando os lobisomens a evitarem as armadilhas e cercarem os aventureiros."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Se isso acontecer, o metamorfo, na forma de Escarlate, revela a traição e oferece um ultimato: os aventureiros devem se render e se juntar à matilha, vivendo eternamente em Pousio como protetores do bosque contra futuros invasores humanos."
    },
    {
      type: "text",
      content: "Ou precisam encarar sua aniquilação."
    }
  ]
  },
  {
  id: "5",
  name: "Serão",
  theme: "Terror Investigativo",
  image: "/aventuras/serao.png",
  summary: "Uma equipe de detetives paranormais é enviada para uma casa mal-assombrada em uma missão misteriosa que se revela um teste de disciplina e improviso, culminando em um ritual urgente contra uma entidade.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de terror como Call of Cthulhu e Ordem Paranormal. É uma trama flexível, adaptável às necessidades do seu grupo, para ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "UMA MENSAGEM"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores são detetives paranormais. Eles receberam uma mensagem da organização para a qual trabalham, enviando-os em uma missão, mas tudo o que está escrito é um endereço. E um horário. A equipe precisa estar lá, pontualmente, às 18:00."
    },
    {
      type: "text",
      content: "Esta falta de detalhes da mensagem é intencional. É um teste para medir a disciplina dos agentes da organização, sua capacidade de trabalhar em equipe e improvisar."
    },
    {
      type: "text",
      content: "Caso alguém pesquise sobre o endereço, descobre que ali fica uma casa de subúrbio. Ela nunca foi terminada, devido aos muitos acidentes ocorridos enquanto era construída. Passa longe de ser uma mansão, mas parece bastante mal assombrada. Ao seu redor há apenas um campinho de futebol e alguns terrenos baldios."
    },
    {
      type: "text",
      content: "No começo do jogo, cada personagem precisa rolar um teste baseado em seu pior atributo. Se falhar, surge algum contratempo ligado a esse traço do personagem, uma situação que deve ser estabelecida pelo jogador com a ajuda do grupo e do mestre. Personagens que falham chegam uma hora atrasados ao local da missão, em ordem de menor resultado para o maior."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "TRÊS VELAS"
    },
    {
      type: "text",
      content: "Membros da equipe que tenham chegado no horário à casa podem interagir entre si e investigar. Ou esperar os demais. Personagens treinados em artes místicas detectam uma aura negativa em volta do lugar e, quem adentra o pátio, precisa fazer um teste contra o medo para não ficar abalado."
    },
    {
      type: "text",
      content: "O interior da casa consiste em uma sala, uma cozinha e uma escadaria danificada, levando a um segundo andar com quatro cômodos vazios. Todo aposento tem microfones escondidos, plantados para monitorar a equipe. Além disso, as paredes foram pintadas com runas de proteção."
    },
    {
      type: "text",
      content: "Logo na entrada, há uma velha televisão e uma mesa. Sobre a mesa, latas de tinta, pincéis e uma caixa. Dentro da caixa, três velas grandes. Além delas, há um caderno com capa de couro, contendo cânticos arcanos, e uma antiga fita VHS e o aparelho para assistí-la."
    },
    {
      type: "text",
      content: "Na fita há uma gravação, feita pela primeira equipe de agentes a atuar no lugar. Nela, a líder do time explica que, nesta área, existe um afinamento da membrana separando nossa realidade de outra dimensão. Uma entidade maligna se manifestou aqui, décadas atrás, mas eles conseguiram aprisioná-la com um ritual. Desde então, o ritual precisa ser realizado novamente a cada ano, na mesma noite."
    },
    {
      type: "text",
      content: "Os detetives têm apenas até o amanhecer para reforçar as runas. Este é um longo teste estendido, de perícias de intelecto, no qual precisam acumular ao todo 20 sucessos antes das 6:00! Cada teste consome 20 minutos e exige pelo menos um personagem para pintar as runas, mas este só pode fazê-lo se houver uma pessoa focada em entoar cânticos, e outra segurando uma fonte de iluminação, no mesmo andar."
    },
    {
      type: "text",
      content: "Uma hora após o anoitecer, toda forma de luz elétrica para de funcionar na casa, mas o grupo pode contar com a ajuda das velas, que são encantadas. Cada uma delas dura quatro horas e só pode ser acesa uma vez. Correntes de ar, como as causadas ao abrir ou fechar portas, obrigam quem está segurando a vela a fazer um teste para que não apague. Qualquer outra iluminação natural funciona, mas é devorada por trevas mágicas, sendo enfraquecida."
    },
    {
      type: "text",
      content: "São dez testes por andar, começando pelo primeiro. O mais cedo que o grupo pode iniciar o teste estendido é às 18:20. Caso toda equipe tenha chegado atrasada, pode tentar encontrar a fita VHS e dar um jeito de rodá-la em outro lugar, ou entender o ritual a partir do caderno, mas perde tempo. Neste caso, o mais cedo que conseguem começar é às 20:00."
    },
    {
      type: "text",
      content: "Quando chegam às 21:00, um incidente acontece. Crianças que estavam até tarde brincando no campinho de futebol, chutam uma bola que quebra uma das janelas do andar superior. Uma corrente de ar é gerada. Além disso, personagens precisam fazer mais testes contra o medo e, qualquer um que suba pela escadaria para investigar, faz um teste para não se acidentar nela."
    },
    {
      type: "text",
      content: "A partir da meia noite, o sobrenatural realmente se manifesta. Novos testes contra o medo são necessários e, para cada hora até o amanhecer, os personagens precisam passar em um teste de reflexos, ou são feridos por objetos levitando que são arremessados em sua direção."
    },
    {
      type: "text",
      content: "Se o número de sucessos for alcançado até o amanhecer, a missão é um sucesso. Do contrário, todas as portas da casa se trancam e a entidade se liberta, atacando os personagens. Caso isso aconteça, depois de três rodadas, o grupo é resgatado por uma agente misteriosa, que vence a entidade lançando um único feitiço. Os personagens a reconhecem como a mulher da gravação, agora mais velha."
    },
    {
      type: "text",
      content: "Depois da missão, ela aborda o grupo. Explica que nos últimos anos as artes arcanas avançaram muito. No passado, a entidade conseguiu dizimar a sua equipe. Hoje, o ritual caminha para não ser mais necessário, mas, enquanto isso, ainda é mantido como uma missão de treinamento."
    },
    {
      type: "text",
      content: "Existe coisa muito pior e o grupo precisa estar preparado!"
    }
  ]
  },
  {
  id: "6",
  name: "A Nascente Encantada",
  theme: "Fantasia",
  image: "/aventuras/nascente-encantada.png",
  summary: "Personagens se submetem ao antigo ritual da Noite Tácita, subindo um rio à meia-noite em silêncio e no escuro, para alcançar uma nascente sagrada onde as almas dos mortos se manifestam como peixes coloridos.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — como A Lenda de Ghanor RPG, Tormenta20, e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa, ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O breu e as águas"
    },
    {
      type: "text",
      content: "A tradição da Noite Tácita é bastante antiga. Dizem que remonta ao reinado de tal monarca, em tal ano, mas pertencia ao povo de certa região, sendo a prática dela uma mistura de determinadas culturas e havendo controvérsias quanto à sua verdadeira origem. Traduzindo: é um evento feito para ser encaixado com facilidade por quem for narrar esta história em quase qualquer mundo fantástico escolhido como ambientação e sem precisar mudar muitas coisas."
    },
    {
      type: "text",
      content: "Diferente de outras cerimônias com datas fixas, o período de sua ocorrência varia de região para região e de acordo com o clima. Sempre acontece “na primeira noite após seis dias de tempestade” — ou seja, durante o período das chuvas — e só se repetirá novamente “depois do findar do inverno” — ou seja, após um ano desde a última celebração. A história por trás do surgimento deste costume pode ser criada pelo próprio mestre. Inclusive, ela pode ser de conhecimento comum dos habitantes da área onde os personagens dos jogadores estão, não sendo preciso testes para saber mais a seu respeito."
    },
    {
      type: "text",
      content: "A data envolve sempre as mesmas normas para aqueles que desejem participar e serem abençoados. Primeiro devem rumar durante o dia a um riacho no qual consigam caminhar com os pés descalços sobre o leito, algo não exatamente fácil de encontrar durante a época das cheias. Depois disso, precisam mergulhar os pés nus nas águas à meia-noite e subir o afluente por toda madrugada, sem jamais parar para descansar ou deixar o rio."
    },
    {
      type: "text",
      content: "Não podem utilizar nenhum tipo de iluminação natural ou sobrenatural para se guiar durante o trajeto, exceto a luz do luar e das estrelas (se houver), e a de uma única vela, que se apagar não poderá ser acesa novamente. Durante o percurso também é proibido falar ou se comunicar através da voz, como fazer ruídos para chamar a atenção."
    },
    {
      type: "text",
      content: "Os peregrinos precisam ter chegado ao curso d’água desacompanhados, de livre e espontânea vontade, sem combinar previamente de participar do ritual ou manifestar para qualquer pessoa sua intenção de fazê-lo. Mas é permitido que andem juntos durante o trajeto, desde que as demais regras sejam respeitadas. Na verdade, tais grupos de pessoas que acabam se encontrando durante a peregrinação são bastante comuns."
    },
    {
      type: "text",
      content: "Segundo a lenda, quem consegue cumprir todos estes requisitos, chega a uma nascente encantada no fim do rio, na primeira luz da manhã. Nela nadam peixes de muitas cores, que na verdade são as almas dos mortos: os que decidiram visitar o mundo dos vivos naquela noite. Se o finado em questão era um conhecido de quem conseguiu chegar ali, seu surgimento, e a maneira como interage com a pessoa, dependerá da relação que tiveram em sua existência pregressa."
    },
    {
      type: "text",
      content: "Quem alcançar a nascente poderá, enfim, quebrar o voto de silêncio. Encontrar a alma de um morto específico neste lugar místico exige testes envolvendo percepção ou conhecimento, mas não é incomum almas de familiares falecidos se aproximarem dos peregrinos. A menos que alguém tenha algum meio mágico de falar com os peixes-espírito, porém, as criaturas só conseguem se comunicar por sinais sutis: como um salto para dar uma resposta afirmativa, imobilidade no caso de uma negativa, ou mergulhar no além e voltar à superfície trazendo pequenos objetos."
    },
    {
      type: "text",
      content: "Retirar um dos peixes da água e comê-lo faz sua expectativa de vida ser dobrada para cada peixe consumido, e se alguma coisa ocasionar a morte do personagem de forma violenta, a “vida extra” é gasta no lugar. Realizar este ato sem que o próprio espírito consinta, entretanto, é considerado um crime hediondo e sacrilégio da maior ordem, na maioria das culturas e crenças."
    },
    {
      type: "text",
      content: "Pouquíssimas pessoas encontraram de fato a nascente. Mas uma coisa é certa: além de subir um rio cheio, descalço, em meio ao escuro, e em completo silêncio, outros desafios e aparições costumam ficar entre os peregrinos noturnos e seu destino."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Rio acima"
    },
    {
      type: "text",
      content: "Caso os personagens dos jogadores decidam participar da busca pela nascente, precisarão primeiro encontrar um rio adequado para isso, seja fazendo testes ligados a sobrevivência nos ermos, seja investigando e pedindo informações aos habitantes locais. Lembre-se que cada personagem precisa ir ao tal riacho por si mesmo e não pode anunciar sua intenção para ninguém, mesmo outros membros do seu grupo!"
    },
    {
      type: "text",
      content: "Vadear rio acima, pisando em seu leito, pode exigir testes de força para não ser arrastado pela correnteza e de fortitude para não sofrer dano de frio. A dificuldade destes testes aumenta se estiver chovendo (um resultado 6 ou menos em $1d10$), o que também diminui a visibilidade, mergulhando o grupo não só em água, mas na escuridão completa."
    },
    {
      type: "text",
      content: "Como se tudo isso não fosse o bastante, peça para alguém rolar $1d4$ duas vezes. Dependendo do resultado em cada jogada, estas coisas acontecem em algum momento durante o percurso:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Um membro do grupo (escolhido aleatoriamente) corta o pé em uma pedra e sofre dano. Se estiver chovendo, tropeça e começa a se afogar. Sempre que este resultado sair outra vez, role o dado novamente."
    },
    {
      type: "text",
      content: "Cavalos falantes surgem galopando dentro do rio, e pedem que os peregrinos subam neles pois irão levá-los até a nascente. Na verdade, são espíritos malignos: caso os personagens aceitem, serão levados até uma lagoa e tentarão matá-los mergulhando nas águas."
    },
    {
      type: "text",
      content: "Bandidos emboscam o grupo, usando ataques à distância e se mantendo nas margens do rio."
    },
    {
      type: "text",
      content: "Um camponês está se afogando. Se for salvo, ele irá acompanhar os heróis, mas não emitirá uma única palavra. Ele é, na realidade, uma criatura com poderes de metamorfose, que deseja devorar os peixes da nascente."
    }
  ]
  },
  {
  id: "7",
  name: "Isolamento",
  theme: "Terror Cósmico",
  image: "/aventuras/isolamento.png",
  summary: "Uma equipe de cientistas e militares é transportada para um arquipélago isolado, sem saber que o local foi invadido por uma entidade marítima que espalha uma maldição, transformando humanos em monstros.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de terror como Ordem Paranormal e Rastro de Cthulhu. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo, para ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O DEUS DO MAR"
    },
    {
      type: "text",
      content: "A formação de ilhotas conhecida como o Penedo de São Tomé e Judas tem poucos atrativos turísticos. Pessoas que frequentam estas rochas em meio ao Oceano Atlântico se resumem a dois grupos: militares e cientistas."
    },
    {
      type: "text",
      content: "Os militares vigiam as ilhas. Embora elas não sejam alvo de disputa, têm certa importância estratégica. Essa supervisão cabe aos tripulantes do submarino Marcílio Dias, responsáveis por transportar pesquisadores entre o continente e o arquipélago."
    },
    {
      type: "text",
      content: "Por sua vez, os cientistas nada escondem de secreto. São universitários que têm a oportunidade de visitar o submarino e conduzir estudos no Penedo. A maioria desses estudantes vem das áreas de biologia e oceanografia, mas recentemente isso foi flexibilizado em um projeto de interdisciplinar que já recebeu futuros profissionais das áreas de engenharia, geografia, veterinária… e mesmo cinema!"
    },
    {
      type: "text",
      content: "Hoje, o Penedo conta somente com alguns alojamentos para acomodar civis e um farol abandonado. Uma equipe científica permanece no arquipélago por um mês, e depois disso o submarino retorna trazendo outra equipe para substituí-la. Sendo assim, as ilhas nunca foram palco de muitos incidentes dignos de nota."
    },
    {
      type: "text",
      content: "Até que um dia as ondas trouxeram um náufrago."
    },
    {
      type: "text",
      content: "Retratado como um excêntrico na grande mídia, o ecoativista norueguês Jostein Folker teve uma trajetória controversa, que vai da participação em incursões piratas até escândalos envolvendo cultos apocalípticos. Fora dos holofotes há anos, recentemente, ele teria embarcado no que muitos viram como mais uma tentativa desesperada de ganhar relevância: atravessar o Atlântico sozinho em uma canoa."
    },
    {
      type: "text",
      content: "Entretanto, nem tudo era charlatanice. Iniciado nas artes ocultas, a jornada de Jostein era uma peregrinação. Ele buscava contato com uma divindade de características semelhantes às dos deuses marítimos de várias mitologias. O norueguês de fato alcançou uma área de atividade paranormal em meio ao oceano. Contudo, seus medos e delírios de moribundo fizeram com que uma entidade bem mais sinistra se manifestasse e assumisse controle de seu corpo."
    },
    {
      type: "text",
      content: "Esse “deus” alcançou o Penedo de São Tomé e Judas a bordo da canoa de Jostein. Sob o disfarce de um náufrago inofensivo, a entidade infectou e controlou as mentes de uma equipe de oceanógrafas, que por sua vez espalhou a maldição entre marinheiros e biólogos a bordo do Marcílio. Essas pessoas foram transformadas em monstros marinhos sob controle da entidade, mas a maldição dorme fora da ilha. No continente, deixa de se manifestar e ser transmitida; e quem foi afetado não parece lembrar dos atos que realizou enquanto estava em alto mar."
    },
    {
      type: "text",
      content: "Até o momento, o “deus” não demonstrou ter outro objetivo além de espalhar a maldição e estender seu culto. Ele passou a habitar o farol abandonado do Penedo, protegendo o local como se fosse um santuário."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A NOVA EQUIPE"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores integram uma das equipes sendo transportadas até o Penedo. Todo contexto da estação científica precisa ser explicado pelo mestre na “sessão zero”. O próprio grupo sugere como irão aproximar os personagens do cumprimento das suas tarefas no arquipélago ao longo de 4 semanas."
    },
    {
      type: "text",
      content: "Durante a viagem no submarino, existe já a chance dos personagens perceberem que há algo errado. A comida servida a bordo é excessivamente salgada. Eles sentem vertigens, supostamente causadas por ajustes de pressão quando o submergível renova seu ar. Todos são convidados para um “batismo de marinheiro”, realizado com sal e graxa de motor, no qual recebem nomes de peixes, mas a celebração brincalhona tem um aspecto mais perturbador do que deveria."
    },
    {
      type: "text",
      content: "Quando o arquipélago é alcançado, nada é dito sobre o paradeiro da equipe anterior. Há apenas uma ilhota onde existem alojamentos equipados com um gerador, mas estes não têm nenhum meio de comunicação funcional. Além disso, há apenas outra ilha, que abriga o farol, mas ela é cercada por correntezas traiçoeiras."
    },
    {
      type: "text",
      content: "Durante as 3 primeiras semanas, enquanto realizam tarefas e interagem, os personagens sentem mudanças ocorrendo em seus corpos e mentes. É a maldição tomando conta!"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "1ª semana. Fôlego e vigor aumentam. Visões de desejos reprimidos."
    },
    {
      type: "text",
      content: "2ª semana. A pele descama. Alucinações revelam medos profundos."
    },
    {
      type: "text",
      content: "3ª semana. Guelras surgem, permitindo respirar debaixo d’água, mas a aparência física vai se tornando a cada dia mais monstruosa."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Se ao início da 4ª semana, os personagens não conseguiram ir até farol, é o “deus” que irá até eles, acompanhado por seus convertidos. E fará uma oferta: em troca de curar os membros da equipe exige que se convertam ao seu culto voluntariamente e entreguem alguém para ser sacrificado em seu nome."
    },
    {
      type: "text",
      content: "Destruir a entidade maligna cancela a maldição sobre todos que foram afetados, mas isso é dificultado por um obstáculo que não é nada desprezível para um grupo de pessoas (até ontem) comuns."
    },
    {
      type: "text",
      content: "Antes, será preciso lidar com o séquito de monstros que cerca o Deus do Mar."
    }
  ]
  },
  {
  id: "8",
  name: "Aeroporco",
  theme: "Terror Bizarro",
  image: "/aventuras/aeroporco.png",
  summary: "Detetives paranormais são transportados para um universo paralelo onde encontram um Brigadeiro homem-javali que, misteriosamente, está se transformando em humano, um fenômeno ligado a seus crimes de guerra no passado.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura é de terror bizarro — para usar em jogos como Ordem Paranormal, Rastro de Cthulhu e qualquer outro compatível com esse gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Igual, mas diferente"
    },
    {
      type: "text",
      content: "O grupo de protagonistas dessa história é composto por detetives do sobrenatural, ou integrantes de uma organização que investigue esse tipo de fenômeno. Recebem uma missão: se encontrar com um contratante, identificado apenas como “Brigadeiro”. Essa pessoa, seja quem for, precisa da ajuda de especialistas para lidar com um problema exigindo tato e bom-senso. Em troca, prometeu fornecer contatos importantes para a instituição que emprega o grupo."
    },
    {
      type: "text",
      content: "A aventura começa durante uma viagem de avião, pela qual não é preciso pagar. Pergunte o que o time investigativo faz, durante o voo comercial, para passar o tempo. Explique que a ideia da cena é revelar um pouco da personalidade de cada protagonista."
    },
    {
      type: "text",
      content: "Subitamente, as luzes do avião começam a tremeluzir e há forte turbulência. Então, um apagão completo. Quando todo mundo acorda, as coisas voltaram ao normal, mas nenhuma outra pessoa lembra do incidente. No aeroporto, um motorista aguarda, contratado para levar a equipe até seu destino. Em meio ao trajeto, existe a primeira chance de notar algo errado. Embora ninguém ainda saiba disso, este é um universo paralelo. A exposição prévia do grupo a forças sobrenaturais interagiu com uma “fenda” na realidade, quando a atravessaram no céu."
    },
    {
      type: "text",
      content: "Antes de mestrar, anote detalhes que são diferentes nesse mundo. Nada muito perceptível de imediato: uma série de TV cancelada no meio tem agora dez temporadas. O presidente do país é outro, etc… E principalmente: as marcas de produtos são completamente diferentes. Olhando pela janela do carro, outdoors são avistados e anúncios com coisas que ninguém nunca ouviu falar: macarrão sabor chocolate, refrigerante de romã e chicletes retrô. Talvez, a desconfiança incentive a pesquisar na internet ou a interrogar alguém. Mas tirando essas diferenças, tudo parece igual."
    },
    {
      type: "text",
      content: "O motorista conduz a equipe até uma bela casa, em um bairro residencial. Não há luxo exagerado, mas claramente pertence a alguém com dinheiro. O tour do lugar termina em um escritório, onde há móveis de madeira e estantes repletas de miniaturas de aeromodelismo. As coisas ficam ainda mais estranhas quando o contratante se apresenta."
    },
    {
      type: "text",
      content: "— Bem vindos! Sou o Brigadeiro Francisco Rufiano! — ele é um oficial militar reformado."
    },
    {
      type: "text",
      content: "E também um homem-javali."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Babás de Javahomem"
    },
    {
      type: "text",
      content: "Exceto por ser um suíno antropomórfico, o Brigadeiro Rufiano é um homem comum e simpático. Veste farda azul e seu pêlo marrom-agrisalhado é bastante limpo, modelado com brilhantina. Caso alguém demonstre espanto por sua aparência, ele ri e age como se fosse a coisa mais natural. Entende que homens-javali não são tão comuns desse lado do oceano, mas existem aos montes nas ilhas de onde sua família emigrou: mostra fotos em preto e branco de seus bisavós, cheio de orgulho."
    },
    {
      type: "text",
      content: "Na verdade, explica, o problema é simples: ele tem se transformado inexplicavelmente em humano e atacado gente inocente! Quer detetives paranormais para acompanhá-lo como seguranças, 24 horas por dia. Não só para impedi-lo de ferir alguém, mas para observar a metamorfose e tentar entender a sua origem. Ele ainda está explicando, quando, de repente, a transformação acontece! Agora, um sujeito de cabelos ruivos, ele imediatamente retira pistolas de um compartimento secreto e começa a atirar no grupo. Se for vencido — ou mesmo morto — apenas desmaia e volta a ser javali. No entanto, não tem ideia do que causou o fenômeno."
    },
    {
      type: "text",
      content: "Rufiano pede para seguirem com o plano no dia seguinte: um sábado. Sua rotina nesse dia é sempre a mesma. Manhã: compra cogumelos na feirinha perto de casa. À tarde: visita os netos e os leva à praia. À noite: dirige com eles até um hangar, onde fazem juntos a manutenção do seu aeroplano monomotor. Costuma voar nele aos domingos."
    },
    {
      type: "text",
      content: "Essas são cenas de interação onde personagens podem conversar uns com os outros, descrever suas ações e se divertir. Nada macabro acontece."
    },
    {
      type: "text",
      content: "Mas, se em algum momento o brigadeiro chegar perto de um avião — ou a imagem de um avião — o que quase certamente acontecerá no hangar, ele se transformará novamente em humano. Desta vez, tenta sequestrar um dos próprios sobrinhos e fugir no veículo mais próximo. Voltará ao normal outra vez, se derrotado. Testes para determinar o gatilho da transmutação não são necessários, porque a conexão entre ela e aviões agora parece bem óbvia. Essa hipótese pode inclusive ser testada. O Brigadeiro resiste a aceitar a verdade, mas se for convencido de alguma forma, para de falar. Assume um ar reflexivo, depois se reúne a sós com o grupo:"
    },
    {
      type: "text",
      content: "— É uma maldição… O pagamento por meus pecados!"
    },
    {
      type: "text",
      content: "Ele conta sobre seus tempos de piloto, quando era jovem. O país passava por uma ditadura. Inimigos políticos eram raptados por certos soldados, levados em bombardeiros que sobrevoavam o oceano, e então arremessados com o corpo acorrentado a pesos, morrendo sem deixar vestígios. Rufiano pilotava os aviões. Jamais tomou parte dos crimes, mas seguia suas ordens. Não denunciou a atrocidade. Tinha medo que mandassem matar sua família."
    },
    {
      type: "text",
      content: "Se o grupo pesquisar, descobre que esse tipo de maldição costuma ser lançada por alguém prestes a morrer (provavelmente, foi uma das vítimas). A metamorfose é desencadeada por sentimentos de culpa."
    },
    {
      type: "text",
      content: "O Brigadeiro admite ter exagerado sua capacidade de conseguir os contatos prometidos, mas promete que não chegará mais perto de aviões e procurará um terapeuta. Implora ao grupo para manter seu segredo. Caso tenha entreouvido alguém fazendo teorias a respeito de universos paralelos, tenta negociar: pode dar seu avião à equipe, para investigarem a rota pela qual voaram, e tentar encontrar um caminho de volta para casa."
    }
  ]
  },
  {
  id: "9",
  name: "Onigashima: Nascido de um Pêssego",
  theme: "Folclore",
  image: "/aventuras/onigashima.png",
  summary: "Presos em uma estalagem, os heróis encontram um bêbado que alega ser um campeão nascido de um pêssego, obcecado em retornar a uma ilha para vingar seus companheiros animais contra cinco ogros piratas com tesouros mágicos.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia asiática — Blood & Honor, Império de Jade, Lenda dos Cinco Anéis e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Onigashima pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Introdução"
    },
    {
      type: "text",
      content: "Os personagens estão há alguns dias presos em uma estalagem por causa de chuvas torrenciais, e estão esperando que ela passa para continuar sua viagem. O Mestre pode perguntar como cada personagem se comporta e tenta matar o tempo durante os dias de tédio. O único incômodo é um bêbado, um homem idoso que os donos da estabelecimento chamam de Tarou. Ele tem uma aparência suja e vestes esfarrapadas. Está sempre roncando sonoramente ou bebendo saquê. Tarou traz consigo um punhal enferrujado, que mantém sempre ao seu lado, e dorme enrolado em um pano que parece ter sido um estandarte de guerra com o desenho de um pêssego."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O Velho Tarou"
    },
    {
      type: "text",
      content: "Caso nenhum personagem interaja com Tarou, numa bela noite, ele apenas começa a incomodar alguém, falando tão alto que todos na estalagem podem ouvi-lo. Diz que é um guerreiro, mas não pertence a nenhum clã. Seus pais eram simples camponeses, que o encontraram em um pêssego gigante à deriva em um rio. Tarou acredita ser um campeão enviado pelos deuses e treinou para ser um espadachim e proteger as pessoas comuns. Diz saber falar com os animais! Tarou conta que, certa vez, recrutou um cachorro, um macaco e um faisão e partiu em uma jornada até a ilha de Onigashima para lutar contra os piratas ogros que moram lá e recuperar seus tesouros. No entanto, os ogros venceram e devoraram seus companheiros, enquanto ele foi capturado e obrigado a assistir. Após inúmeras torturas, um dia ele conseguiu escapar da caverna das criaturas e fugir em seu barco."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O Mapa e a Memória"
    },
    {
      type: "text",
      content: "Se alguém perguntar a Tarou quais são os tais tesouros ou sobre os ogros, ele irá descrevê-los (veja a seguir). Ele diz ainda ter o mapa da ilha, mas se alguém pede para que o mostre, Tarou aponta para a própria cabeça:"
    },
    {
      type: "text",
      content: "“Está aqui... Os deuses me amaldiçoaram com o poder da memória, sabiam? É por isso que eu bebo! Quero esquecer.”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Partida"
    },
    {
      type: "text",
      content: "Caso ninguém acredite na história de Tarou, no dia seguinte, quando o sol abre e os personagens se preparam para seguir viagem, notam o velho junto a um rio. Ele sobe em uma embarcação, reunindo seus poucos pertences. Todos percebem então que ela foi construída dentro da folha gigantesca de um pessegueiro!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A Ilha dos Ogros"
    },
    {
      type: "text",
      content: "Os personagens podem pedir que o velho Tarou os guie até a ilha ou podem fazer testes para investigar aldeias de pescadores e conversar com marinheiros em cidades portuárias para descobrir a rota até lá. Onigashima, o lar dos monstros, é uma ilhota. Nela habitam um bando de ogros piratas que se autointitulam debochadamente de “Os Cinco Tesouros”. Possuem uma enorme jangada de guerra que deixam ancorada em uma baía junto à praia, e se escondem em uma caverna no alto de uma serra coberta por árvores e densa vegetação. Os cinco ogros permanecem juntos na maioria do tempo. Se preferir, o mestre pode — no lugar dos ogros — usar onis, youkais ou qualquer outro monstro com estatísticas que constituam um desafio adequado aos personagens."
    },
    {
      type: "text",
      content: "Jogue um 1d6 quando os personagens chegarem à ilha. Um resultado 1 ou 2 significa que os ogros estão caçando na floresta. 3 ou 4 significa que estão pescando no mar com sua jangada. 5 ou 6 que estão transportando os espólios de um saque de dentro de uma rocha na praia, até seu covil principal. Além disso, jogue uma moeda para cima. Cara significa que os personagens chegaram à ilha durante a noite, e coroa, durante o dia."
    },
    {
      type: "text",
      content: "Se um dos ogros percebe a presença dos personagens, ataca imediatamente, gritando para chamar a ajuda dos seus companheiros de bando. Se nenhum gancho de aventura fisgar os jogadores — e eles decidirem não ir para a ilha — a próxima cidade portuária que seus personagens visitam é atacada pelos ogros piratas e o conflito ocorre lá."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os Cinco Tesouros"
    },
    {
      type: "text",
      content: "Cada um dos ogros demoníacos possui um tesouro mágico roubado, que traz consigo e que não hesita em usar contra qualquer invasor durante um combate ou situação de perigo."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Ichi: É piadista e gosta de pregar peças, e veste uma capa de chuva que o concede invisibilidade contra inimigos, quando molhada."
    },
    {
      type: "text",
      content: "Ni: É comilão e covarde, e tem um chapéu mágico que deixa quem o veste invisível, mas que funciona apenas durante a noite."
    },
    {
      type: "text",
      content: "San: É alegre e ingênuo, e possui um cajado de madeira que jamais se quebra ou se incendeia, com o mesmo poder destrutivo que uma maça de guerra."
    },
    {
      type: "text",
      content: "Shi: É quieto, observador e tem botas que permitem andar pelo fundo do mar ou de um lago, sem se afogar."
    },
    {
      type: "text",
      content: "Go: É esperto e mandão. É o maior e mais forte do bando e carrega consigo um martelo mágico, chamado “O Martelo dos Desejos”."
    },
    {
      type: "text",
      content: "Além de ser uma arma formidável, cada ser que empunha o Martelo dos Desejos pode bater ele no chão e pedir que qualquer coisa de origem mundana e não-mágica se manifeste à sua frente — uma espada, uma montaria, um castelo, moedas de ouro, etc... — no entanto, sempre que a coisa materializada fica próxima ao soar de um sino, desaparece para sempre. Cada um que empunha o martelo tem direito a um único desejo e não pode pedir mais nada após ter feito seu pedido ao artefato."
    },
    {
      type: "text",
      content: "Tarou não sabe disso, mas Go já usou seu desejo anos atrás — para fazer surgir a jangada que os ogros usam para viajar e saquear o litoral!"
    }
  ]
  },
  {
  id: "10",
  name: "Thalftyrnotallas",
  theme: "Fantasia",
  image: "/aventuras/thalftyrnotallas.png",
  summary: "Os heróis se tornam o alvo de Thalftyrnotallas, um dragão paranoico e modificado que, para sobreviver, caça grupos de aventureiros iniciantes antes que se tornem uma ameaça épica, atacando-os com diversos sopros elementais.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Thalftyrnotallas pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Fato ou ficção?"
    },
    {
      type: "text",
      content: "Correm pelas tavernas dos reinos rumores e canções sobre Thalftyrnotallas, O Vigilante. Algumas histórias o mencionam como Thalftyrn, o Dragão de Mil Olhos ou A Serpente dos Sete Sopros."
    },
    {
      type: "text",
      content: "As narrativas são contraditórias! Algumas retratam o monstro como um ser antigo, nascido no primórdio dos tempos. Outras, como um dragão prodígio de poucas centenas de anos. Mas todas parecem concordar em algo sobre a suposta criatura: acima de tudo, Thalftyrn é um sobrevivente."
    },
    {
      type: "text",
      content: "Ele cansou de ver outros membros de sua espécie sucumbirem diante de aventureiros que arrogantemente consideraram fracos demais para ser uma ameaça. Testemunhar a morte de dragões mais antigos do que ele, durante a juventude, o tornou quase paranóico. Thalftyrn teria tentado reunir os dragões do mundo em um conselho e forjar uma aliança contra os demais povos, mas os anciões — individualistas e orgulhosos — ignoraram o chamado."
    },
    {
      type: "text",
      content: "Thalftyrn decidiu então agir sozinho."
    },
    {
      type: "text",
      content: "Com seu conhecimento de magia, modificou o próprio corpo. Dizem que suas asas têm olhos e que é praticamente impossível surpreendê-lo. Também teria adulterado seu sopro de fogo para ser capaz de baforar outros tipos de elementos, adaptando sua maior arma para lidar com o maior número possível de inimigos. Mais do que isso: Thalftyrn adotou uma postura ativa. Hoje caça grupos de aventureiros promissores para agir preventivamente e destruir a ameaça no berço, antes que se tornarem poderosos demais. Também evita ficar na mira de heróis épicos. Sua estratégia contra estes últimos é tentar evadi-los até morrerem de velhice!"
    },
    {
      type: "text",
      content: "O dragão procura não se aproximar de cidades, fortalezas ou mesmo aldeias, mas teria sido avistado em estradas, pastos e ermos. Jamais ataca fazendas, caravanas ou centros povoados, para não atrair a atenção de governantes poderosos que possam enviar caçadores para enfrentá-lo. Em vez disso, Thalftyrn utiliza sua própria clarividência para detectar “auras de poder”. Assim sabe identificar seres vivos com dons místicos, divinos ou mesmo guerreiros talentosos. Não é incomum ouvir falar sobre grupos de aventureiros iniciantes, ou em ascensão, completamente dizimados, enquanto viajavam, “por uma luz estranha vinda do céu”, “amanhecendo congelados”, “asfixiados por névoa tóxica”."
    },
    {
      type: "text",
      content: "As diferentes causas responsáveis pelas mortes tornam nebuloso se todos estes incidentes realmente estão relacionados, se Thalftyrn jamais existiu e se, na verdade, a lenda não teria sido só uma maneira encontrada para explicá-los..."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Dia do predador"
    },
    {
      type: "text",
      content: "Você pode escolher criar uma origem diferente para os ataques misteriosos descritos acima e usar Thalftyrn apenas como um mito fabricado. Esta aventura, no entanto, presume os rumores verdadeiros. Se estiver jogando uma campanha, seria legal introduzir a história em aventuras anteriores através de pequenos elementos: uma trupe de atores encenando uma peça, um bardo cantando sobre o chamado aos dragões, encontros na estrada com grupos iniciantes dizimados de maneira horrenda, etc..."
    },
    {
      type: "text",
      content: "A aventura em si, porém, começa com os heróis sendo atacados pelo dragão enquanto viajam! Estão não muito longe de chegar a uma cidade murada quando o ataque acontece em campo aberto."
    },
    {
      type: "text",
      content: "Use a ficha de um dragão com idade e desafio adequado ao nível do grupo. Apenas duas diferenças: ele não pode ser surpreendido ou flanqueado de nenhuma maneira (a menos que os olhos nas asas sejam cegados de alguma forma) e ele pode alterar o tipo do seu sopro à vontade, podendo mudá-lo livremente para o que for melhor contra o grupo."
    },
    {
      type: "text",
      content: "Thalftyrn ataca em rasantes. Surge voando, devasta os personagens com seu sopro e em um mesmo movimento consegue subir ao céu novamente. Só volta a atacar quando tiver “recarregado” o sopro. Se os personagens não podem voar ou não têm outros meios para vencê-lo, deixe claro após algumas rodadas: a melhor chance deles é fugir e alcançar a cidade. Caso Thalftyrn fique muito ferido, fugirá para seu covil."
    },
    {
      type: "text",
      content: "Na cidade, se os jogadores derrotaram Thalftyrn, são recebidos com festividades. Durante o inevitável banquete, uma peça é encenada contando a história do monstro. Se eles não conseguiram vencer Thalftyrn, ouvem nas tavernas sobre sua lenda e descobrem terem se tornado agora alvo do dragão. Nunca mais poderão deixar a cidade ou viajar por aí sem correr o risco de sofrer um novo ataque."
    },
    {
      type: "text",
      content: "A melhor maneira de vencer Thalftyrn é ir até o covil subterrâneo onde fica seu tesouro — seu bem mais precioso. Isto o obriga a lutar em um lugar confinado. Segundo os boatos, porém, seu covil fica no meio de uma planície chamada O Mar de Grama Seca. Thalftyrn ataca ao aberto qualquer pessoa tentando viajar até lá. Ele sopra fogo para fazer a vegetação da planície se incendiar, prendendo seus inimigos num círculo de chamas e espalha ainda mais fogo, para matá-los asfixiados com a fumaça. Alcançar o covil antes de ser emboscado só é possível evadindo a percepção do dragão (algo bastante difícil) ou viajando muito velozmente através de magia, veículos ou montarias especiais."
    },
    {
      type: "text",
      content: "O covil contém um verdadeiro botim. Em livros. É uma biblioteca com tomos sobre magias de adivinhação e técnicas de combate. Infelizmente, se está prestes a perder, o dragão incendeia o acervo e, ao mesmo tempo, desaba a sustentação da caverna com sua cauda, para soterrá-lo consigo."
    },
    {
      type: "text",
      content: "Cada personagem pode usar uma ação para apanhar 1d4 pergaminhos (escolhidos aleatoriamente) a cada turno, mas precisa deixar a caverna antes de 1d4 rodadas..."
    }
  ]
  },
  {
  id: "11",
  name: "O Lorde Fluvial",
  theme: "Fantasia",
  image: "/aventuras/lorde-fluvial.png",
  summary: "Contratados para encontrar a filha desaparecida de um lorde, os heróis descobrem uma conspiração envolvendo um antigo culto ao dragão e uma rebelião contra o domínio do mago, forçando-os a escolher um lado.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. O lorde fluvial pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A dama desaparecida"
    },
    {
      type: "text",
      content: "Os heróis foram convocados pelo lorde de um vale. Por suas terras corre um rio rodeado de vilarejos. Enquanto viajam, avistam uma construção ao longe. Parece ser um castelo, mas quando finalmente se aproximam, percebem se tratar de uma represa. Escadarias de mármore e calçamentos de paralelepípedos a contornam. Há também a estátua de um cavaleiro no topo dela. Está empalando um dragão com sua lança e porta escudo, contendo um brasão com flores e montes."
    },
    {
      type: "text",
      content: "Os heróis são convidados a subir a represa e levados a um suntuoso túnel, que começa na beira do lago formado por ela. O túnel é um palácio subterrâneo, com corredores inundados, navegado por gôndolas. A sua arquitetura lembra covis escavados por monstros. Os heróis são conduzidos até um jardim, alimentado por cristais mágicos. Há várias plantas e um laboratório, onde o lorde local passa o tempo como boticário. Ele é um mago e demonstra ser capaz de ler mentes dentro do palácio!"
    },
    {
      type: "text",
      content: "O lorde apresenta a história do lugar enquanto conduz todos para um banquete: o fundador do seu clã foi um cavaleiro lendário. Esse homem tinha seu castelo nas montanhas e, um dia, foi conclamado pelos camponeses do vale. Devia vencer o dragão vivendo na caverna do rio, deter o grande mal. O cavaleiro veio e matou a fera. Em troca, haviam prometido a ele a posse das terras da região, mas depois da besta ser vencida, voltaram atrás na oferta. Os camponeses chamaram a atenção para o fato de o dragão ser uma criatura da água. Portanto, argumentaram, não cabia ao cavaleiro a posse das terras, e sim a do rio... O lorde ri e observa: eram uns ingênuos. O rio alimentava as fazendas do vale e, de posse dele, o cavaleiro passou a controlar a água e cobrar impostos daquela gente ingrata."
    },
    {
      type: "text",
      content: "Durante o banquete, o lorde revela porque estão ali. A sua filha é uma dama guerreira. Trabalhava coletando taxas dos vilarejos da região e aplicando leis. Diferente dos demais membros da sua família, sempre foi benquista pelo povo por ser justa. Apesar disso, jamais retornou de uma aldeia distante do vale. Soldados enviados para localizá-la não voltaram. O lorde deseja contratar os heróis para encontrá-la. Em troca, oferece ouro e títulos."
    },
    {
      type: "text",
      content: "— Têm minha palavra. A palavra de um nobre!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Aqui há dragões"
    },
    {
      type: "text",
      content: "Os heróis chegam até a tal aldeia, onde são recebidos pelos habitantes com medo e desconfiança. O lugarejo conta com casas, tavernas, rodas d’água e uma praça com uma capela dedicada a divindades benignas — veneradas pelo cavaleiro das lendas. O testemunho de todos os moradores coincide: a dama nunca chegou à aldeia."
    },
    {
      type: "text",
      content: "Os moradores mentem. Sua versão contradiz relatos ouvidos em vilarejos pelo caminho e, além disso, buscas pela dama nos ermos do vale foram infrutíferas. Seja através de persuasão ou intimidação, os heróis obtêm a verdade. A dama foi levada por uma passagem secreta, debaixo do altar da capela. Os aldeões sabem: ali fica o verdadeiro templo! É dedicado ao culto do antigo dragão que vivia no rio. Na realidade, de acordo com a crença local, o dragão era uma divindade guardiã. O cavaleiro, um conquistador estrangeiro, vindo para impor sua crença aos povos do vale, tidos como hereges."
    },
    {
      type: "text",
      content: "Os heróis não têm dificuldade em encontrar a passagem e deparam-se com um ritual. No centro do subterrâneo há um imenso osso. Nele está amarrada a dama, em transe, vestida somente com uma roupa acolchoada. O líder do culto é um humano com feições de lagarto. Está terminando seu discurso e brada em dracônico: “Finalmente, teremos justiça...”. Saca um punhal e parece pronto a realizar o sacrifício. Além dele, há outros clérigos no templo. Os heróis podem enfrentá-los, mas a dama acorda e interrompe o combate. Ela revela ter se juntado ao culto por vontade própria, após terem mostrado a ela a verdadeira história do vale!"
    },
    {
      type: "text",
      content: "O culto é um levante de rebeldes. Querem destronar seu pai, trazer independência à região. O ritual exige gotas de sangue. Transforma quem passa por ele em “meio-dragão”. A dama estava amarrada, anestesiada e sem armadura, pois a metamorfose é dolorida. Através dos poderes concedidos pela transformação, os rebeldes pretendem conquistar o palácio além da represa. Os heróis são convidados a se juntar ao motim. E participar do ritual, se assim desejarem."
    },
    {
      type: "text",
      content: "Armar uma cilada para o lorde não interessa aos rebeldes, devido à capacidade dele de ler mentes dentro do palácio. Se os heróis se juntarem ao levante, devem enfrentar os guardas da represa e da entrada do túnel, navegar com uma gôndola pelos corredores, enfrentando embarcações de soldados, até chegar à sala do trono — protegida por cavaleiros. O lorde não está na sala. Fugiu por um túnel secreto, no início do ataque. Depois, partiu rumo ao castelo da família, nas montanhas. Deixou para trás muitos tesouros e os heróis recebem parte dos espólios. Se algum deles investigar o palácio, e passar nos testes adequados, percebe: o lorde levou seu laboratório."
    },
    {
      type: "text",
      content: "Os heróis podem partir imediatamente e perseguir o lorde em meio aos montes. No entanto, os habitantes do lugar são leais ao nobre, e é preciso uma sequência de testes difíceis para alcançá-lo, antes que ele chegue ao castelo. Se tiverem mais de três falhas, os heróis encontram a fortificação, todavia, está abandonada. Descobrem, tarde demais: o lorde nunca foi para lá."
    },
    {
      type: "text",
      content: "Na verdade, o pérfido mago rumou para a nascente do rio. Executou um plano de vingança. Envenenou o povo do vale com uma toxina letal para pessoa comuns e capaz de sequelar mesmo o herói mais poderoso. Meio-dragões são imunes à toxina, mas o lorde prefere condenar todo o domínio a entregá-lo para traidores. Que governem sobre os mortos!"
    }
  ]
  },
  {
  id: "12",
  name: "O Rei que Nós Criamos",
  theme: "Fantasia",
  image: "/aventuras/o-rei-que-nos-criamos.png",
  summary: "Uma missão de escolta a um jovem príncipe é interrompida por um ataque mortal. As escolhas dos heróis sobrevivem a um salto temporal de dez anos e definem o caráter do príncipe e o destino do reino.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme a necessidade. A aventura se divide em duas partes, com um salto temporal entre elas. A primeira pode ser jogada como aventura avulsa. A segunda serve como prelúdio para outra aventura, ou para uma campanha!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Morte na estrada"
    },
    {
      type: "text",
      content: "O grupo é a escolta de um jovem príncipe, durante uma viagem até terras distantes. Na expedição, há tanto guarda-costas quanto responsáveis pela mentoria do nobre nos mais diversos campos de conhecimento. O príncipe, que não é o próximo na linha de sucessão de seu reino, foi enviado em uma peregrinação a um local sagrado para ter uma educação religiosa. Na verdade, é apenas um pretexto para afastá-lo das tramóias da corte."
    },
    {
      type: "text",
      content: "Se há personagens clérigos no grupo, antes da aventura ser jogada, em uma “sessão zero”, seus jogadores podem ajudar o Mestre a decidir o destino da peregrinação. Um mosteiro nas montanhas? O templo de uma metrópole? Mais importante será a jornada até lá."
    },
    {
      type: "text",
      content: "A aventura começa na estrada, com todo mundo já rolando iniciativa! A comitiva do príncipe, embora orientada a ser discreta, foi confundida com uma caravana de comerciantes e atacada por bandidos mascarados. Em meio ao ataque, o líder dos assaltantes teve sua identidade exposta e ordenou uma chacina para não deixar testemunhas. Há cadáveres por todos os lados, e somente o grupo e o príncipe ainda estão vivos. Para piorar, nesse exato momento uma tempestade começa a cair e atinge o campo de batalha. No lugar de uma tempestade, você pode escolher algum terreno acidentado ou outro efeito climático, mais de acordo com o cenário que está jogando."
    },
    {
      type: "text",
      content: "Para esse encontro, use oponentes desafiadores — o grupo luta em desvantagem numérica. Os bandidos que permaneceram na luta não estão feridos ou cansados, e atacam dispostos a vencer. No primeiro turno de cada jogador, peça para cada um descrever a aparência do seu personagem e também como sua primeira ação — ou estilo de luta! — reflete de alguma maneira quem ele é."
    },
    {
      type: "text",
      content: "Após algumas rodadas de combate, passar em testes de intuição revela que os bandidos parecem não ter ideia de quem é o príncipe, tendo vindo apenas atrás do saque. Aceitam a oferta de levar o garoto como refém, se ela for feita, mas só poupam a vida de quem se render e se entregar como prisioneiro. É possível convencer os rufiões a desistirem da luta, mas para isso, é necessário passar em repetidos testes sociais. Se durante o combate, os sobreviventes do ataque se rendem ou os bandidos capturam o príncipe, a Parte 1 da aventura termina."
    },
    {
      type: "text",
      content: "Se o grupo venceu os bandidos ou fugiu, resta completar a jornada. Agora peça que cada jogador escolha uma perícia ou habilidade da sua ficha e descreva uma cena justificando como ajudou a expedição a chegar em segurança até o destino pretendido. Não há chance de falha para a viagem, contudo, é preciso fazer algum teste adequado, a critério do Mestre, pois essa ação não só terá ajudado no avanço como também será um momento crucial na infância do príncipe! O fato terá marcado o nobre de alguma forma, tornando-se uma memória importante no futuro. Se o teste foi um sucesso, o grupo deve descrever a cena como algo positivo. Uma falha significa uma lembrança ruim ou triste."
    },
    {
      type: "text",
      content: "A aventura se encerra com uma cena da expedição chegando ao local sagrado. Todos recebem uma quantia não irrisória de ouro. Cada jogador descreve como seu personagem pretende investir sua parte da recompensa, e se permanece ao lado do príncipe."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Dez anos depois..."
    },
    {
      type: "text",
      content: "Esta parte acontece uma década depois da primeira, e envolve personagens da expedição original."
    },
    {
      type: "text",
      content: "Se o príncipe foi feito como refém, terá sido adotado como parte dos assaltantes. Com o tempo, os bandidos mascarados descobriram sua verdadeira identidade, mas apesar disso, acabaram se afeiçoando a ele! Uma das lideranças serviu como uma figura paterna para o nobre. Negociações de um resgate com a coroa falharam: a vida do príncipe não era prioridade, pois ele não era o herdeiro direto do trono. Soldados foram enviados para resgatá-lo. Isso obrigou os mascarados a fugirem, e no processo, acabaram se transformando em uma espécie de guerrilha camponesa. O príncipe cresceu e tornou-se um homem de maneiras rudes e um tanto sanguinário, mas também alguém mais próximo do povo e preocupado com suas questões. Nesse meio tempo, os personagens dos jogadores foram considerados traidores pela coroa, e acabaram convivendo na coluna de insurretos — pelo menos por um tempo."
    },
    {
      type: "text",
      content: "O príncipe-bandido conseguiu, enfim, voltar ao seu reino, mas descobriu o trono usurpado por um conselheiro que mandou assassinar toda a realeza. O príncipe conseguiu, com o apoio do bando e do povo, retomar cidades, sitiando com sucesso o antigo palácio na capital. No entanto, suas tropas ficaram feridas e exaustas, e o conselheiro usurpador se entrincheirou na sala do trono junto a seus campeões mais poderosos. O grupo é recrutado para um ataque perigoso contra esse remanescente inimigo."
    },
    {
      type: "text",
      content: "Por outro lado, se o grupo salvou o príncipe, quem ele se tornou dependerá das ações e eventos da sessão anterior. Algum personagem permaneceu a seu lado? Como os momentos-chave da jornada o influenciaram? Em que nível a religião e o lugar escolhido pelos clérigos moldaram seu caráter? Ele se tornou um bom ou mau governante? Virou um “príncipe-clérigo” ou adotou outra “classe de personagem”? Uma coisa é certa: sua vida não foi a mais feliz de todas. Por estar fora, foi o único a sobreviver ao atentado que vitimou toda sua família e acabou coroado em meio a um reino cheio de rivais. Os ex-membros da expedição são a coisa mais próxima que teve de amigos, seus heróis de infância."
    },
    {
      type: "text",
      content: "Os únicos em quem confia o bastante para realizar uma missão..."
    }
  ]
  },
  {
  id: "13",
  name: "Zero & Zuza",
  theme: "Ficção Científica",
  image: "/aventuras/zero-e-zuza.png",
  summary: "Um neuroretransmissor perdido faz com que uma garota rebelde troque de corpo com um robô guarda-florestal, forçando um grupo de crianças a descobrir a origem do problema antes que o corpo humano adoeça no frio.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs retrô de mistério e ficção-científica — Kids on Bikes, Tales From The Loop, e qualquer outro compatível com esses gêneros. É uma trama sem regras, adaptável conforme a necessidade. Pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O neuroretransmissor"
    },
    {
      type: "text",
      content: "A história acontece em uma região de clima gélido. Os jogadores interpretam crianças encrenqueiras e não há uma ordem específica de eventos a seguir. Como resolvem o problema proposto, dependerá de suas ideias, ações... E dos dados."
    },
    {
      type: "text",
      content: "No início do inverno, a companhia ferroviária local transportava um neuroretransmissor. Esse dispositivo experimental foi construído na forma de um vagão de trem, para ser transportado entre estações de pesquisa. Sua finalidade era simples: permitir o controle remoto de drones através de ondas mentais. Porém, existe um efeito inesperado. Se o aparelho é usado para manipular máquinas inteligentes enquanto o piloto comanda o alvo, o próprio alvo também é capaz de controlar o corpo do piloto!"
    },
    {
      type: "text",
      content: "O neuroretransmissor foi perdido quando a locomotiva realizando seu transporte descarrilou perto de um lago congelado, afundando logo em seguida. As autoridades foram notificadas para recuperá-lo, mas devido à burocracia do governo, e a lentidão na resposta, uma equipe de resgate será enviada somente na primavera. Nesse meio-tempo, o aparelho se ativou de maneira acidental, e acabou fazendo interface entre um “piloto” e um “drone” bastante atípicos."
    },
    {
      type: "text",
      content: "Uma garota que brincava perto do gelo."
    },
    {
      type: "text",
      content: "E um robô guarda-florestal."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A garota"
    },
    {
      type: "text",
      content: "Zuzanah é uma criança rebelde, imaginativa e um tanto cínica; filha de um casal que trabalha em um acelerador de partículas. Seus pais cientistas moram em uma fazenda relativamente afastada, por isso, a criança não tem muitos amigos. Ela passa os dias vagando sozinha, fingindo ser a Capitã Gurkin, uma cosmonauta soviética, junto ao seu inseparável “camarada” Boozarky, um lençol vermelho com dois furos que carrega para todos lados e chama de “o espectro vermelho”."
    },
    {
      type: "text",
      content: "A primeira coisa feita por Zuza ao descobrir ter se transformado em um robô, foi ir ao trabalho dos pais compartilhar a notícia. Com os alto-falantes do seu corpo atual quebrados, no entanto, não conseguiu se comunicar. Agora está sendo perseguida por Erik Dorrman, um paranóico funcionário do lugar, que a confundiu com um experimento fugitivo. Os personagens dos jogadores estão brincando de erguer uma casa na árvore, quando Zuzanah aparece. Todo mundo precisa fazer testes contra medo para não sair correndo. Ela tenta se comunicar por mímica e pedir ajuda. O grupo pode encontrar maneiras alternativas para se comunicar com Zuza, como dar um graveto para que escreva na neve ou consertar seus auto-falantes. Precisam escondê-la logo, pois, se demorarem muito, o tal funcionário surgirá. Para se defender, a garota-robô irá instintivamente eletrocutá-lo com um taser, e fazê-lo perder os sentidos. Ela faz o mesmo com qualquer garoto que diga algo idiota. Só por diversão."
    },
    {
      type: "text",
      content: "O grupo é perseguido por Zuza, até que alguém resolva ajudá-la a descobrir o que aconteceu com ela. Apenas lembre-se: nesse tipo de trama adultos estão sempre muito ocupados, têm uma má vontade gigantesca, tratam tudo como bobagem e convencê-los de qualquer coisa é quase impossível..."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O Robô"
    },
    {
      type: "text",
      content: "Enquanto isso, o corpo real da menina está sendo controlado por um ser artificial."
    },
    {
      type: "text",
      content: "Seu nome é Zero. Ele é um simples protótipo de garagem. Foi construído pelo engenheiro mecatrônico sueco Sven Forsberg, ao longo de sua aposentadoria."
    },
    {
      type: "text",
      content: "Zero foi projetado para ser um guarda-florestal. Anda pelos bosques da região, recolhendo lixo, ajudando animais feridos e apagando incêndios. Contudo, acabou absorvendo a personalidade do seu criador. É humilde ao extremo, gosta das coisas feitas exatamente como devem ser e não tolera demonstrações de opulência. Toma todos os dias um cafezinho da tarde na propriedade de seu “pai”, mas é incapaz de beber, e só assiste ao café e a comida esfriarem na sua frente. Gosta de criar jogos de tabuleiro usando pinhas, pedras e lixo, mas tem vergonha de admitir isso, escondendo sua paixão por game design como um segredo obsceno, porque se considera apenas um “despretensioso patrulheiro das terras ermas!” Quando anoitece, Zero procura lugares fechados e se “aconchega” diante da luz de uma lanterna elétrica."
    },
    {
      type: "text",
      content: "No corpo de Zuza, sente frio, por isso usa o lençol vermelho dela para se cobrir. Ao se ver próximo à cidade, durante a manhã, foi atraído para lá e realizou melhorias. Vandalizou o carro novo de um vizinho, e desconectou a tevê a cabo de outro, para “corrigir sua ostentação”. Saqueou uma árvore de Natal, pois “já havia passado da época e os enfeites não haviam sido retirados!”. Em uma lavanderia comunitária, ao ver que um dos usuários deixou as roupas na máquina de lavar, escreveu um bilhetinho passivo-agressivo, composto apenas por números 1 e 0."
    },
    {
      type: "text",
      content: "Depois disso, sem conseguir encontrar seu criador, foi a um quiosque, onde ordenou chocolate quente e deixou a bebida em cima de uma mesa, até esfriar. Pagou um com pedaço de cartolina amassada, rumando novamente para o bosque. Quando cair a noite, Zero irá até um de seus abrigos de costume e ligará luzinhas pisca-pisca em um gato improvisado. Tentará se aquecer nelas, inutilmente."
    },
    {
      type: "text",
      content: "O grupo precisa seguir seus rastros e encontrá-lo a tempo, antes que o corpo de Zuza adoeça em meio à neve!"
    }
  ]
  },
];