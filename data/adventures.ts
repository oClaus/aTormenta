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
  {
  id: "14",
  name: "A Montanha Errante",
  theme: "Fantasia",
  image: "/aventuras/montanha-errante.png",
  summary: "Um espírito volátil do vento cria uma colossal montanha de gelo que se torna um penhasco peregrino e caótico, surgindo em lugares inesperados, forçando os heróis a decifrar charadas sob a ameaça de cegueira e monstros para fazê-la desaparecer.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de fantasia como A Lenda de Ghanor RPG e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "E O VENTO ERROU…"
    },
    {
      type: "text",
      content: "Houve uma vez, um espírito. O que era aquilo voando lá no céu? Um pássaro? Um anjo?"
    },
    {
      type: "text",
      content: "Não. Era o ser que regia os ventos do sul, e qualquer que fosse sua natureza imprecisa, era uma criatura feita de ar. Uma alma artística e apaixonada. A entidade trabalhava com dedicação, mas era desastrada e tinha um defeito imperdoável aos olhos dos deuses. Era incapaz de guardar segredos. Sempre que falava, sua voz uivava ensurdecedora pelo mundo. Revelava verdades cruéis. Expunha o que não devia ser revelado aos mortais antes da hora. Além disso, era volátil. Nutria paixões arrebatadoras, idealizadas. Às vezes por entidades mais poderosas. Outras, simples mortais. Amores fadados ao fracasso. Nos momentos de desilusão, seu vento parava de soprar por meses, condenando embarcações nos mares do sul a letais áreas de calmaria, secando colheitas inteiras por falta de chuva."
    },
    {
      type: "text",
      content: "Demais espíritos do ar não o compreendiam. Alguns, o desprezavam. Ainda que, às vezes, fossem ordenados pelos deuses a unir suas correntezas para criar formidáveis ciclones, no restante do tempo seguiam caminhos separados, sem afeto ou laços fraternos. Cada qual com sua hoste, soprando em uma direção. Mas onde quer o espírito fosse, ele soprava só."
    },
    {
      type: "text",
      content: "Ao olhar dos deuses, porém, era útil. Foi banido para as cordilheiras mais altas do mundo, e ordernaram-lhe que ali criasse desafios e labirintos para testar grandes heróis. Devia esculpir as montanhas com cuidado, sem erodi-las por completo ou alterar demais a criação divina. O trabalho o tornou um escultor incomparável, mas invisível. Suas obras passavam despercebidas. Quando notadas, eram atribuídas às próprias divindades ou à natureza."
    },
    {
      type: "text",
      content: "Contudo, os deuses também eram clementes. Depois de eras, recompensaram o espírito fiel com uma colossal geleira. Poderia esculpir a montanha de gelo da maneira que achasse melhor, desde que fosse um monumento grandioso e solene."
    },
    {
      type: "text",
      content: "O que acontece, porém, quando um objeto imovível é encontrado por um ser incontível?"
    },
    {
      type: "text",
      content: "O espírito do ar esculpiu a geleira como fazia com as rochas, mas o gelo espelhava sua própria silhueta vaporosa. Isso despertou vaidade. Ele acabou colocando demais de si, moldando nela um rosto que lembrava o seu. Deixando ali parte de sua essência."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "UMA GÉLIDA ESFINGE"
    },
    {
      type: "text",
      content: "Assim nasceu a Montanha Errante, um acidente geográfico nômade. Um penhasco peregrino que herdou a personalidade livre e caótica do espírito, mas nenhuma gota da meticulosidade e precisão que cultivou ao longo de séculos."
    },
    {
      type: "text",
      content: "A montanha começou a vagar por aí, mas errava em mais de um sentido. Surgia sem periodicidade fixa. Às vezes, demorava séculos para se materializar em outro lugar. Às vezes, dias. Diferente do plano original, não se materializava apenas entre outras montanhas ou regiões gélidas, mas nos lugares mais improváveis. Cidades. Desertos. Mares. Selvas. Sua aparição repentina remodelava o clima e a paisagem violentamente, causando catástrofes ao chegar e ao partir."
    },
    {
      type: "text",
      content: "O desafio que simbolizava, intendido pelo espírito, era simples. A montanha propunha a heróis andarilhos três charadas. Cada resposta correta a fazia derreter parcialmente, criando passagens através dela. Respostas erradas, porém, tornavam o ambiente ao seu redor cada vez mais sombrio e gélido, até que o frio fosse glacial e a escuridão absoluta."
    },
    {
      type: "text",
      content: "Da mesma forma, cada resposta correta intensificava a luz refletida pela montanha, devorando os olhos de quem desvendava todas as charadas. Assim, mesmo campeões astutos eram forçados a cruzar um vale degelado, privados de um sentido, também vulneráveis às quimeras guardiãs que o habitam, monstros compostos por partes de diversas criaturas. Ou a seres de formas ainda mais estranhas, moldados a partir de gelo, transformados em carne, e animados pelo sopro do espírito, criados com amor e ódio. Outras histórias, afirmam que há também armas perdidas dentro da geleira — ferramentas do espírito, esquecidas e abandonadas, após a conclusão da obra."
    },
    {
      type: "text",
      content: "Por anos, os maiores sábios discutiram como deter a ameaça contínua oferecida aos reinos pela existência da Montanha Errante. Alguns sugeriram convencer o espírito do ar a destruir sua criação. Outros acreditam que a solução seja matar a entidade escultora, ou uma rebelião contra os deuses. Entretanto, nada disso sequer foi tentado e ouvir falar — ou ler — sobre a Montanha Errante é uma maldição em si."
    },
    {
      type: "text",
      content: "Após conhecer sua história, sempre que um grupo de aventureiros inicia uma nova jornada, há uma chance em vinte de que a geleira surja exatamente onde eles estão ou próxima de quem mais amam."
    },
    {
      type: "text",
      content: "Felizmente, a maldição tem a mesma chance de sumir — mas retornará se alguém mencionar a geleira novamente."
    }
  ]
  },
  {
  id: "15",
  name: "Vai Pescar",
  theme: "Fantasia Medieval",
  image: "/aventuras/vai-pescar.png",
  summary: "Durante uma pausa na jornada, os heróis são convidados por pescadores para passar a tarde em um rio, onde um desafio simples de pescaria pode se transformar em um banquete, um achado valioso ou um combate épico.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para jogos de fantasia medieval como A Lenda de Ghanor RPG e Tormenta20. É uma trama flexível, sem muitas regras, fácil de adaptar para as necessidades da sua campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CAIR NO ANZOL"
    },
    {
      type: "text",
      content: "Durante uma pausa em sua jornada, os heróis encontram pescadores que os convidam a passar a tarde à beira de um rio. A decisão aqui não é aceitar ou recusar — o desafio é os jogadores inventarem um motivo para que os personagens aceitem a proposta. Talvez o grupo precise de comida. Ou personagens ribeirinhos sintam saudades da sua infância ao ver os pescadores. Quem sabe não sejam deuses disfarçados? A justificativa mais divertida, original e coerente rende benefícios, como pontos de magia adicionais."
    },
    {
      type: "text",
      content: "Caminhar até o rio é fácil, mas pode exigir testes físicos de personagens que não estejam acostumados a entrar no meio do mato. Os pescadores compartilham com o grupo varas e iscas, mas quem lembrou de trazer chapéu? Quem usa magia para se proteger do sol? Anote isso para mais tarde…"
    },
    {
      type: "text",
      content: "O “rio” é um riacho largo e calmo, ao pé de uma escarpa rochosa de nove metros. Ela é bastante íngreme, mas fácil de descer. Peça aos jogadores para darem um nome ao riacho e descreverem seus sons, cores, cheiros e os locais onde passa."
    },
    {
      type: "text",
      content: "Logo, que os heróis chegam ao local da pescaria fica claro que existem dois tipos de pescador bem diferentes por estas bandas."
    },
    {
      type: "text",
      content: "O primeiro tipo é encarnado por Tácito, um velho quieto, solitário e estoico. Quase um samurai da pesca. Ele está aqui para PESCAR e até aprecia a companhia alheia — desde que silenciosa — e fica horas imóvel observando a água."
    },
    {
      type: "text",
      content: "O segundo pertence ao grupo liderado por Farracho, que usa a pescaria como desculpa para beber, prosear e fugir da família. Esses pescadores são fáceis de fazer amizade, mas ficam inicialmente temerosos na presença de quem consideram muito diferente do que estão acostumados, como mortos-vivos ou golens! Se os heróis forem famosos, recebem um bombardeio de perguntas sobre suas aventuras, seguido de histórias ainda mais absurdas dos pescadores."
    },
    {
      type: "text",
      content: "Durante a pescaria, quem não bebe ou interage pode fazer três tentativas de pesca, mas precisa passar em testes mentais para não desistir da atividade. Os barulhentos afastam os peixes e têm direito a uma só!"
    },
    {
      type: "text",
      content: "Para pescar, um personagem rola $1d20$. Quanto maior o resultado, maior o peixe — e o valor do dado determina a dificuldade do teste de Força necessário para apanhá-lo (ou dá uma ideia de quão difícil isso é!)"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "• 1 - O aventureiro pescou um lambari tão miúdo que um bardo compôs uma música satírica sobre seu “grande feito”. Traz penalidades em testes sociais."
    },
    {
      type: "text",
      content: "• 2-4 - Uma traíra traiçoeira! Para capturá-la, o teste deve ser repetido 3x. Consumí-la recupera energia, mas exige testes de destreza para não receber dano das espinhas. Falha crítica causa engasgo e sufocamento."
    },
    {
      type: "text",
      content: "• 5-9 - Um dourado suculento. Rende uma sopa nutritiva que melhora a recuperação dos personagens durante a próxima noite de descanso."
    },
    {
      type: "text",
      content: "• 10-17 - Que bagre enorme! Esse peixão permite organizar um verdadeiro banquete dos heróis."
    },
    {
      type: "text",
      content: "• 18-19 - Uma garoupa? Como diabos alguém apanhou um peixe tão grande — e de ÁGUA SALGADA, ainda por cima? Não importa. Em sua boca, são encontradas 100 moedas. Se for devolvida à água, o feito é antes registrado pelos pescadores, que pintam seu corpo com tintas naturais não-tóxicas, imprimem sua imagem em papel de arroz e eternizam o momento. Essa lembrança oferece um pequeno bônus mecânico permanente, a critério do mestre."
    },
    {
      type: "text",
      content: "• 20 - Que peixe nada... Isso é um MONSTRO! Algo grande ou estranho demais emerge da água. Os jogadores devem fotografar suas fichas ou anotar os atributos atuais. O mestre sorteia uma criatura de uma tabela com níveis de desafio variados (comuns em livros de RPG). Se o monstro for desafiador o bastante, o combate se torna o clímax da aventura, servindo de encerramento. No fim, é revelado que esse “encontro” é uma história sendo contada por alguém do grupo em uma taverna. Se um personagem morreu, ou o grupo optar por isso, pode decidir que é só um causo exagerado. De toda forma, ninguém acredita no narrador…"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PEIXES FORA D'ÁGUA"
    },
    {
      type: "text",
      content: "Depois da pescaria, os pescadores acendem uma fogueira para assar os peixes. Se ainda não rolou combate, este é um bom momento para um encontro aleatório com um monstro errante ou para um vilão surgir."
    },
    {
      type: "text",
      content: "Ao retornar da pescaria, quem não se protegeu do sol sofre insolação, ficando abatido e lento por alguns dias. Já quem bebeu precisa passar num teste físico ao escalar o penhasco — inclusive os pescadores, que rolam antes. Subir no escuro é mais difícil do que descer."
    },
    {
      type: "text",
      content: "O primeiro a falhar despenca os nove metros do penhasco. Talvez só sofra arranhões ou precise de resgate de um clérigo. Ou, quem sabe, isso cause a morte trágica de um NPC e uma virada dramática na história? Tudo depende do tom da sua campanha e como o grupo decide lidar com as consequências."
    }
  ]
  },
  {
  id: "16",
  name: "As Lutadoras",
  theme: "Faroeste",
  image: "/aventuras/as-lutadoras.png",
  summary: "Em uma cidade de foras-da-lei, os heróis encontram uma luta de pugilismo feminina que movimenta grandes apostas, oferecendo a chance de lucro fácil, mas com a necessidade de intervenção para manipular ou proteger as competidoras.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi pensada para jogos de faroeste como Deadlands, O Som das Seis, Sacramento RPG e outros compatíveis com o gênero. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PORTO MORTO"
    },
    {
      type: "text",
      content: "O bando ao qual os personagens jogadores pertencem anda em aperto financeiro. Talvez deva dinheiro a um sindicato do crime, precise de fundos para comprar cavalos ou armas, ou apenas fuja da falência. Tentando recomeçar, a trupe desembarca clandestinamente em Porto Morto, uma vila afastada na margem de um afluente pouco movimentado. A comunidade agrícola planta nabos e vive tranquila. O lugar tem fama de servir como refúgio para foras-da-lei, especialmente por causa de um banco de areia em meio ao rio, onde corpos às vezes aparecem boiando — resultado de duelos entre bandidos bêbados que cruzam a região."
    },
    {
      type: "text",
      content: "Curiosamente, no momento em que os personagens chegam, há um tumulto incomum na praça principal. Um grupo de senhorinhas conservadoras, liderado pelo padre local, realiza um comício improvisado contra um evento que considera escandaloso: uma luta entre duas pugilistas. As carolas gritam que “Deus fez a mulher para ser um anjo do lar!”, citando trechos obscuros de textos religiosos, mas a maior parte da população ignora o protesto e forma filas imensas em bancas de apostas improvisadas. Perto do salão de jogos, um homem bigodudo pendura um cartaz anunciando o futuro confronto:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "EMBATE DAS AMAZONAS!!!\nHENRIQUETA LADISLAU Vs. ADELAIDE BEZERRA"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "A luta vindoura movimenta grandes apostas, e parece ser a oportunidade perfeita de baixo investimento e lucro fácil que o bando estava procurando. Conversar com moradores revela mais detalhes sobre as duas competidoras:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Henriqueta (21 anos, 81 kg). Marcada pelo seu cabelo castanho curto e revolto. Apesar da pouca idade, é uma lutadora relativamente experiente, tendo passado mais de dois anos em apresentações públicas ao lado do também jovem marido, Iacobo. Perdeu peso para disputar a mesma categoria que Adelaide, tendo uma leve vantagem por sua força e domínio das luvas."
    },
    {
      type: "text",
      content: "Adelaide (25 anos, 67 kg). Dançarina vinda de Várzea Grande, para trabalhar em um teatro de variedades. Ágil e habilidosa em levantamento de halteres e malabares, foi treinada pelo campeão local Guilherme Guzzo. Rapidez é seu ponto forte. Seu ciumento marido, Ramiro Bezerra, detesta sua vida boêmia e teria sido expulso de casa por ela, após tentar agredi-la."
    },
    {
      type: "text",
      content: "Antes do confronto, cada personagem decide como agir: fazer bicos, arrumar trambiques, apostar nas pugilistas ou observar seus treinamentos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O EMBATE"
    },
    {
      type: "text",
      content: "A luta ocorre num ringue improvisado sobre o já mencionado banco de areia, cercado por barcos e balsas cheias de espectadores. Embora os personagens não tenham como prever isso, em termos de jogo, o combate se desdobrará em sete rounds, com a vitória definida por quem obtiver mais sucessos no total. Cada round se resolve com um teste oposto simples (com dados, cartas ou outro método). Em geral, Adelaide consegue se esquivar da maioria dos ataques, mas consegue encaixar poucos golpes, e sofre muito sempre que Henriqueta consegue acertar um dos seus."
    },
    {
      type: "text",
      content: "Os jogadores podem assistir ou intervir, mas três incidentes em rounds específicos têm potencial para alterar o rumo do combate:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "2º Round: Um capanga, a mando de Guzzo e sem o conhecimento de Adelaide, tenta colocar um remédio na garrafa de Henriqueta. Se ninguém perceber ou impedir, a lutadora sofre penalidades nos rounds seguintes."
    },
    {
      type: "text",
      content: "4º Round: Uma balsa passa ao lado do ringue, trazendo o padre e as carolas que protestam contra a luta. Ambas as pugilistas precisam fazer um teste extra, ligado à percepção. Se falharem, terão desvantagem no teste principal do round, distraídas pelos sermões."
    },
    {
      type: "text",
      content: "6º Round: Ramiro, bêbado, invade o ringue e saca uma arma para atirar em Adelaide. Se alguém o distrair ou neutralizar antes do ataque, as duas lutadoras se unem para nocauteá-lo. Se ninguém conseguir impedi-lo de primeira, Iacobo se sacrifica, recebendo o primeiro tiro e ficando gravemente ferido, ganhando tempo para os demais personagens agirem."
    },
    {
      type: "text",
      content: "No final do 7º round, soma-se o total de sucessos para determinar a vencedora. Cabe ao grupo decidir se interfere, se torcem pela força bruta de Henriqueta ou pela velocidade de Adelaide. Com alguma sorte, acabarão com mais recursos do que antes e, na pior das hipóteses, foram testemunhas de um episódio que entrará na história do pugilismo."
    }
  ]
  },
  {
  id: "17",
  name: "Estruturas",
  theme: "Enigmas",
  image: "/aventuras/estruturas.png",
  summary: "Aventureiros encontram uma guerreira em transe diante de blocos de pedra flutuantes e precisam decifrar um enigma de origem divina, descobrindo que a solução exige pragmatismo mortal em vez de misticismo.",
  sections: [
    {
      type: "text",
      content: "Esta miniaventura foi criada para RPGs de fantasia como A Lenda de Ghanor, Blue Rose e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CLAREIRA DO MISTÉRIO"
    },
    {
      type: "text",
      content: "Um grupo de aventureiros se depara com uma cena incomum enquanto viaja — no meio de um bosque, uma guerreira solitária jaz paralisada, encarando blocos de pedra flutuantes. Ela segura uma espada voltada para o chão. Os blocos, de tamanhos variados, exibem símbolos e estão dispostos como parte de um enigma."
    },
    {
      type: "text",
      content: "A mulher está presa em um encantamento temporal, paralisando-a no instante em que empunhou a arma. Ela não envelhece, mas o ambiente ainda a afeta: poeira se acumula, folhas caem sobre seus ombros e insetos às vezes recuam diante de uma leve resistência mágica. Magos experientes notam que, além do feitiço principal, existe uma segunda magia mais fraca ao redor dela: um círculo de proteção repulsora, lançado para afastar incômodos menores e preservar sua vigília."
    },
    {
      type: "text",
      content: "Testes relacionados ao conhecimento local podem revelar algumas lendas sobre esta figura misteriosa. Três delas são mais conhecidas:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Era uma mortal, petrificada ao desafiar os deuses a revelar o enigma da criação. Ela só despertará quando os blocos forem organizados conforme a vontade divina."
    },
    {
      type: "text",
      content: "Era uma semi-deusa, uma general que jurou não partir enquanto cada bloco — com o nome de um soldado caído em batalha — não fosse honrado da maneira apropriada."
    },
    {
      type: "text",
      content: "Era uma deusa livre e indomável, mas foi aprisionada neste transe quando confrontada por uma entidade que provou ser ainda mais caótica e abstrata do que ela mesma."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Logo após a chegada do grupo à clareira, enquanto ainda tenta compreender o que vê, uma figura encapuzada surge entre as árvores. Tocando flauta e lançando magias como aviso, ela ordena que os personagens se retirem."
    },
    {
      type: "text",
      content: "É Árcade, uma barda solitária de meia-idade, desconfiada e reclusa. Desde jovem, nutre um amor platônico pela guerreira adormecida, cuja beleza celebrou em poemas. Cresceu ouvindo as lendas e, por décadas, visitou o local. Quando a clareira deixou de ser novidade, e em vez de atrair peregrinos passou a ser alvo de vândalos e gente mal intencionada, ela uniu-se a outras mulheres da região para formar uma pequena ordem e proteger o lugar, mas isso foi há muito tempo. Hoje, ela é a última guardiã."
    },
    {
      type: "text",
      content: "Árcade, ciente de sua impotência diante do grupo, baixa a guarda. Permite que tentem resolver o enigma, pedindo apenas respeito à guerreira, ainda viva em transe. Com tristeza, admite ter esquecido o que revelaram as tentativas anteriores — e que talvez isso já não importe."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A SOLUÇÃO"
    },
    {
      type: "text",
      content: "Se o grupo investigar a clareira, notará que os blocos podem ser movidos, mas isso exige muita força e esforço conjunto. Personagens eruditos que passem em testes apropriados percebem padrões nos símbolos, mas eles não pertencem a nenhuma língua conhecida, sugerindo um idioma extramundano ou algo diferente disso."
    },
    {
      type: "text",
      content: "Os blocos reagem entre si. Quando algo mexe neles, brilham, como se fossem “ativados”. No entanto, há muitos deles pela área, tornando impossível descobrir se existe um padrão correto a ser alinhado, apenas na base da tentativa e erro — exceto com magias de adivinhação que preveem o futuro."
    },
    {
      type: "text",
      content: "Para obter uma pista, o grupo deve persistir: testar ao menos três hipóteses diferentes, independentemente de suas premissas. Por exemplo, podem seguir a primeira lenda, buscando uma sequência de blocos, ou a segunda lenda, enterrando-os como lápides etc. Nada funciona, mas depois disso, enquanto investigam, certos símbolos se alinham, fazendo que os blocos se encaixem! Os símbolos se repetem, mas a solução não está na ordem dos blocos, e sim no seu uso. São simples materiais de construção. Se qualquer estrutura for erguida com eles — uma casa, torre, templo — a guerreira desperta."
    },
    {
      type: "text",
      content: "Neste caso, confirma que a terceira lenda era a verdadeira: a guerreira é o aspecto de uma deusa, paralisada por um enigma impossível. Diante de escolhas infinitas, foi tomada pela indecisão. Seu sentimento divino moldou a realidade e ela ficou paralisada. O deus caótico que a desafiou sabia que apenas mortais pragmáticos intuiriam a resposta, construindo algo concreto que atendesse suas necessidades, em vez de buscar padrões ocultos ou motivações elevadas."
    },
    {
      type: "text",
      content: "O aspecto da deusa decide não retornar aos céus. Escolhe habitar a estrutura construída pelo personagens, tornando-se uma divindade menor ligada à função de estrutura escolhida (a mesa define conjuntamente o seu “portfólio”)."
    },
    {
      type: "text",
      content: "Mas e quanto a Árcade? Ela viveu pela imortal, guardando o enigma, escrevendo versos para alguém que talvez nunca a tenha ouvido… Agora, com a deusa desperta, ela já não acredita ter propósito. O grupo ajudará a barda — ou irá abandoná-la em meio às ruínas da sua desilusão?"
    }
  ]
  },
  {
  id: "18",
  name: "Cães de Guerra",
  theme: "Fantasia Sombria",
  image: "/aventuras/caes-de-guerra.png",
  summary: "Capturados e forçados a lutar em uma batalha ritualística por hobgoblins, os heróis devem sobreviver a uma marcha exaustiva, escapar de caçadores e desvendar a verdade por trás dos conflitos da região.",
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
      content: "MARCHA DOS CONDENADOS"
    },
    {
      type: "text",
      content: "Os heróis começam como prisioneiros. Capturados por hobgoblins — ou outros soldados de uma cultura militarista —, despertam algemados, numa longa fila de cativos. São forçados a subir um platô, empurrados por guardas para manter o ritmo da marcha."
    },
    {
      type: "text",
      content: "Nesta etapa inicial, os aventureiros precisam enfrentar uma série de testes em sequência para lidar com calor, sede, fome, altitude e fadiga. O mestre pode exigir testes apropriados para cada fator, aplicando penalidades adequadas e cumulativas. Cada falha representa também tropeços e hesitações na marcha, punidos com socos pelos capitães da tropa. Magias e habilidades sobrenaturais estão bloqueadas pelas algemas amaldiçoadas que prendem as mãos dos heróis."
    },
    {
      type: "text",
      content: "Durante a marcha, uma canção é entoada pelos soldados em uma língua desconhecida — a única coisa que parece aliviar a tensão da subida. Se algum personagem compreender o idioma (ou apresentar uma boa justificativa), entende que os soldados servem a entidades maléficas e não têm escolha: desobedecê-las seria condenar todos a algo ainda pior. Caso algum aventureiro decida cantar a canção junto, recebe bônus nos testes e nas interações com soldados rasos da tropa."
    },
    {
      type: "text",
      content: "Os heróis podem tentar falar com os soldados ou conversar com outros prisioneiros. Há estranhos sinais pelo trajeto: lanças quebradas no chão, manchas de sangue seco nas pedras e tambores soando ao longe. Testes de conhecimento podem revelar que estão sendo levados para uma batalha ritualística — para servirem de sacrifício."
    },
    {
      type: "text",
      content: "Mais uma leva de testes se repete e, se nada for feito depois disso, a tropa finalmente chega ao seu destino. Ao raiar de um novo dia, os prisioneiros alcançam o topo do platô — um campo de batalha ancestral. O terreno é pedregoso e ainda carrega vestígios de guerras antigas: marcas de armas, ossadas enterradas sob a poeira, estandartes rasgados ao vento."
    },
    {
      type: "text",
      content: "Cada prisioneiro recebe uma espada curta e um escudo. Eles são instruídos a lutar. Os personagens são posicionados em fileira, na linha de frente, com uma parede de escudos hobgoblin atrás. À frente, um exército rival de hobgoblins se aproxima. Para cada herói, há uma coluna com igual número de soldados inimigos. Quando um cai, outro ocupa seu lugar. São pelo menos dez inimigos por personagem. Se o grupo derrotar ao menos metade dos oponentes, a tropa rival e os hobgoblins libertam os sobreviventes, oferecendo a chance de se unir à tropa. O mais provável, porém, é que o grupo pereça no confronto. Sua melhor chance é tentar fugir durante a marcha ou em meio ao caos da batalha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "FUGA DO INFERNO"
    },
    {
      type: "text",
      content: "Mesmo que fujam, os heróis não estão livres. Continuam em uma região deserta e isolada: a ajuda mais próxima está a mais de 100 quilômetros. Descobrem também que as algemas amaldiçoadas apenas canalizavam a aura arcana que afeta toda a região. Magias de fuga seguem falhando. Para escapar com vida, será preciso percorrer todo o trajeto e usar ao máximo suas habilidades de sobrevivência nos ermos."
    },
    {
      type: "text",
      content: "Para piorar as coisas, eles não estão sozinhos. Um grupo de hobgoblins segue seus rastros, avançando rápido. Não são meros soldados, mas caçadores experientes, acompanhados por cães farejadores — seus assobios e latidos ecoam na distância."
    },
    {
      type: "text",
      content: "Cabe aos jogadores decidir suas próprias táticas. Podem preparar armadilhas, montar emboscadas, tentar despistá-los, dividir-se, tentar negociar ou simplesmente correr mais que os perseguidores."
    },
    {
      type: "text",
      content: "Se conseguirem lidar com os caçadores, os heróis seguem por dias sem descanso. Exaustos, enfim avistam outro campo de batalha, já nos limites do platô. O local é um massacre recente. São centenas de cadáveres e não há um lado vitorioso. Há espólio abundante, mas alguns equipamentos podem estar amaldiçoados."
    },
    {
      type: "text",
      content: "Ao longe, o primeiro sinal de civilização: um castelo solitário. Ao se aproximarem, percebem que está em ruínas, mas ainda oferece quartos seguros para descanso. Durante a noite, um dos personagens vê uma mulher caminhando pelos muros, trajada como uma nobre. Se alguém a seguir até a sala do trono local, descobrirá a verdade: ela e o homem ao seu lado são vampiros. Um lorde e sua dama, mas não como nas lendas. Não precisam morder ninguém: o sangue derramado no platô é o que os alimenta. Em vida, os dois conduziram guerras para conquistar terras, ouro e escravos. Na morte, continuam a fazê-lo, manipulando generais e reis, alimentando-se dos conflitos que instigam, pois há quem os sirva sem mesmo saber. O casal afirma que os personagens são livres para partir. Eles já têm sangue o bastante, mas oferecem uma escolha: os heróis podem ficar no castelo e se juntar a eles na imortalidade."
    },
    {
      type: "text",
      content: "Se os enfrentarem, porém, conhecerão a fúria dos desmortos."
    }
  ]
  },
  {
  id: "19",
  name: "Arco da Queda",
  theme: "Fantasia",
  image: "/aventuras/arco-da-queda.png",
  summary: "Habitantes comuns de uma vila nas montanhas são encarregados de preparar uma festa para 'grandes heróis', que se revelam mercenários arrogantes, forçando os protagonistas a lutar e provar seu próprio valor.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de fantasia, como Tormenta20 e outros, mas com personagens que ainda não ingressaram realmente em uma vida plena de aventureiros. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A VISITA"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores são habitantes da vila de Arco-da-Queda: aprendizes do ferreiro, filha da bruxa local, o jovem clérigo enviado para cuidar da capela… Por aí vai. Esta vila nas montanhas está cercada pelas cascatas mais impressionantes do reino. É bastante espalhada, composta por aldeias menores e casas distantes entre si. Segundo o seu “mito de fundação”, foi criada pela Associação dos Jovens Eremitas (!) pessoas que buscavam se isolar."
    },
    {
      type: "text",
      content: "Teriam encontrado paz e segurança nessas terras, mas, ao descobrir serem incapazes de viver sozinhos, construíram pontes conectando suas moradias. Assim, uniram-se e se misturaram a povos que já viviam na região, dando origem ao lugar."
    },
    {
      type: "text",
      content: "Certo dia, os habitantes da vila recebem um comunicado do prefeito. Com três séculos de vida, Sorel Semiduende é o último “jovem eremita”. Encurvado, com uma longuíssima barba que toca o chão, orelhas pontudas, idade avançada — e excelente audição e visão — tudo reforça seu parentesco com elfos."
    },
    {
      type: "text",
      content: "\"Vocês são jovens! A maioria viveu aqui a vida toda. O mundo lá fora tem tragédias, mas também maravilhas. E HERÓIS! Para comemorar meu 301º aniversário, trarei aventureiros para nos visitar e compartilhar suas histórias! São os famigerados… Qual é o nome deles mesmo?\""
    },
    {
      type: "text",
      content: "Apesar da memória fraca, Sorel fez o melhor que pôde para contratar, com seu orçamento, heróis de uma grande guilda. Esses \"famigerados\" aventureiros são — embora, ninguém saiba ainda — iniciantes com poucas missões de sucesso. A guilda conseguiu convencê-los a aceitar o trabalho: não era emocionante, mas pelo mesmo preço de enfrentar alguns goblins, era fácil (e incluía alimentação!)."
    },
    {
      type: "text",
      content: "Sorel paga aos moradores da vila o equivalente a uma semana de trabalho, permitindo que tirem folga e prepararem a recepção aos “grandes heróis”."
    },
    {
      type: "text",
      content: "Embora se conheçam de vista, os personagens dos jogadores raramente interagem e uma reunião é organizada na casa do mais sábio (determinado pelos atributos na ficha!) para decidir como vão realizar a tarefa que receberam do prefeito: preparar três pratos típicos da cultura local."
    },
    {
      type: "text",
      content: "O anfitrião pode descrever sua casa, e essa é uma deixa para os personagens interagirem, demonstrando suas aparências e personalidades. Com a ajuda do mestre, os jogadores também decidem nomes, modo de preparo e o teste necessário para avaliar a qualidade de cada prato. Antes, precisam obter seus ingredientes únicos."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Para a entrada — uma salada — precisam de mandrágoras, raízes que emitem gritos ensurdecedores. Há uma horta cheia delas, mas colhê-las causa dano e condições negativas (irreversíveis até o fim da aventura)."
    },
    {
      type: "text",
      content: "O prato principal é feito com salmão, peixe disponível apenas quando se sobe os rios locais. A época é adequada, mas ele também é muito procurado por ursos…."
    },
    {
      type: "text",
      content: "Finalmente, para a sobremesa, é necessário encontrar um ovo de grifo, o que exige testes físicos para escalar o pico mais alto da região, se expondo ao risco de quedas e a ira de grifos fêmeas!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "EXPECTATIVA/REALIDADE"
    },
    {
      type: "text",
      content: "Chega o dia das festividades, e os personagens dos jogadores recebem os heróis. Estes não têm um nome para seu grupo, mas são chamados de “Os Famigerados” pelos outros habitantes da vila."
    },
    {
      type: "text",
      content: "São três aventureiros. Um mago desconectado da realidade, que fala coisas incompreensíveis. Uma clériga gentil, mas meio fanática. E um jovem guerreiro, arrogante e esnobe. O mestre deve criar nomes, fichas e históricos para esses NPCs."
    },
    {
      type: "text",
      content: "Os dois primeiros, apesar das suas falhas, são agradáveis. Avaliam honestamente cada prato, dando notas de 1 a 10. O guerreiro, porém, dá zero para todos os pratos. Faz comentários rudes. Demonstra claramente ter vindo aqui a contragosto. Quando ele reage ao último prato, se ninguém fez isso antes, o velho Sorel se levanta e o repreende duramente!"
    },
    {
      type: "text",
      content: "Irritado, o guerreiro agride o ancião. E tenta convencer seus companheiros a saquear a vila. Os personagens dos jogadores precisam, então, lutar contra todos os três mercenários OU convencer os companheiros do guerreiro a ficarem contra ele."
    },
    {
      type: "text",
      content: "Recompondo-se do ataque, o prefeito agradece os personagens dos jogadores. E explica que ele estava enganado: eles é quem são verdadeiros heróis. O velho sábio se oferece a bancar uma viagem para que conheçam o mundo. Para ajudá-los, entrega a eles o maior tesouro da vila. Ele o encontrou há muitos anos, atrás de uma queda d’água."
    },
    {
      type: "text",
      content: "É um arco curto. O prefeito explica que já o usou em sua juventude. Seres atingidos por suas flechas iridescentes são atirados longe, mas quem o empunha precisa ser forte para também não ser atirado para trás pelo coice mágico da arma."
    },
    {
      type: "text",
      content: "“O importante não é quantas vezes você cai, mas saber levantar…”"
    },
    {
      type: "text",
      content: "Além disso, o arco deu nome à vila! Sorel deseja que ele lembre sempre aos heróis quem são, e de onde vieram, enquanto se aventurarem no mundo lá fora."
    }
  ]
  },
  {
  id: "20",
  name: "AAHHH!!",
  theme: "Terror",
  image: "/aventuras/ahhh.png",
  summary: "Detetives paranormais investigam um caso de combustão humana espontânea que se prova verdadeiro, resultado de um ritual viral que enfraqueceu a realidade e invocou um espírito do fogo, desencadeando uma epidemia de combustões.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de terror como Ordem Paranormal, Rastro de Cthulhu e outros sistemas compatíveis com o gênero. É uma trama flexível, adaptável às necessidades do seu grupo, para ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "C.H.E"
    },
    {
      type: "text",
      content: "Ou a sigla para Combustão Humana Espontânea."
    },
    {
      type: "text",
      content: "Registros de gente que começou a bafejar fogo e foi subitamente consumida por chamas, de dentro para fora — sem afetar o que estava em volta — já são antigos e bastante documentados na literatura paracientífica. Nunca houve evidências suficientes para provar a existência do fenômeno, que geralmente é explicado por erro humano ao desconsiderar outros fatores."
    },
    {
      type: "text",
      content: "A crença das pessoas nesse evento, entretanto, é um fato social incontestável e está sendo explorado por um grupo de ocultistas sectários para espalhar medo e caos. A origem deste grupo e suas motivações são desconhecidas (quem for mestrar a aventura pode usar uma organização-antagonista adequada ao universo da campanha)."
    },
    {
      type: "text",
      content: "Essa organização detém participações na ATR00, startup de tecnologia dona da rede social de mesmo nome. A plataforma de compartilhamento tem sido usada para hospedar conteúdo proveniente de facções políticas e religiosas extremistas, servindo como fachada para a disseminação de ideias nocivas. Um público-alvo específico é visado pela organização por meio de algoritmos: jovens desajustados."
    },
    {
      type: "text",
      content: "Impulsionada pelos ocultistas, a hashtag #CHE tornou-se uma tendência na rede nos últimos dias, viralizando com vídeos curtos que mostram pessoas tentando realizar um ritual para incendiar corpos. Alguns parecem ter conseguido (na verdade, vídeos “deepfake” criados com uso de inteligência artificial em circulação sem nenhum tipo de censura). Embora seja uma farsa, a difusão da crença tem modificado a realidade, enfraquecendo as leis naturais. Precisamente o objetivo dos ocultistas."
    },
    {
      type: "text",
      content: "A propagação quase instantânea dessa tendência tem tornado difícil a apuração dos incidentes, mas um deles é verdadeiro. Jessé Machado, jovem de 18 anos residente no interior de Minas Gerais, apaixonado pelo paranormal, está atualmente foragido. Ele é suspeito do homicídio de seu padrasto, Emiliano Freitas, de 46 anos, conhecido por seu comportamento abusivo e alcoolismo. O corpo carbonizado de Emiliano foi descoberto flutuando na piscina da casa onde moravam."
    },
    {
      type: "text",
      content: "Na verdade, Jessé agiu em autodefesa. Ele evocou quase instintivamente as palavras mágicas do ritual enquanto apanhava do padrasto. Devido ao tecido da realidade enfraquecido, às emoções intensas envolvidas e à mediunidade latente do próprio Jessé, um espírito do fogo foi invocado incendiando o agressor, que tentou se salvar na piscina — mas continuou queimando debaixo d'água."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A INVESTIGAÇÃO"
    },
    {
      type: "text",
      content: "Nesta aventura, personagens do grupo encarnam o papel de uma equipe de detetives enviada para investigar a atividade paranormal. Sob o disfarce de agentes federais, por exemplo, conseguem facilmente a colaboração da polícia local, despreparada para o caso."
    },
    {
      type: "text",
      content: "A equipe pode vasculhar a casa — uma residência de classe média com poucos cômodos, garagem e pátio — e obter todas informações descritas anteriormente. Isso inclui interrogar policiais e habitantes locais, pesquisar notícias e analisar o lugar (estado do corpo, marcas de conflito, latas de lixo cheias de garrafas de bebida; o quarto trancado de Jessé que contém livros de ocultismo, runas e talismãs)."
    },
    {
      type: "text",
      content: "Mas há complicações imediatas. Logo após a chegada da equipe, ocorre uma segunda morte por combustão do outro lado da cidadezinha. Dessa vez, a vítima é Tânia Naify, 26 anos, turista do Rio de Janeiro, que veio visitar parentes. Ela morreu sozinha em uma casa de veraneio alugada, fechada em seu quarto. Todas as suas roupas ainda estavam dentro das malas e seus tios ainda não sabiam da chegada dela à cidade. De seu corpo incinerado, restaram apenas os pés e o crânio (algo comum nos relatos mais difundidos de CHE, a cena parece quase fiel demais aos relatos)."
    },
    {
      type: "text",
      content: "Detetives podem se dividir para investigar os casos, ou fazê-lo em sequência. Também é possível rastrear Jessé, escondido em uma mata próxima ao parque público, mas as mortes não estão diretamente conectadas. O que aconteceu foi que a invocação do espírito de fogo alterou a realidade e começou uma “epidemia” de CHE… Tânia é apenas a primeira vítima do fenômeno."
    },
    {
      type: "text",
      content: "A equipe investigativa tem liberdade para agir e escolher como resolver o mistério, mas precisa cumprir alguns objetivos:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "• Sobreviver à epidemia. Obter sucessos em um teste qualquer da investigação deixa um personagem febril. A cada hora, rola $1d20$ + 1 a cada sucesso anterior. Se o resultado for 20 ou mais, entra em chamas. Chamas que não podem ser apagadas com água, mas um extintor funciona."
    },
    {
      type: "text",
      content: "• Investigar focos de incêndio para localizar o espírito. Use a ficha de uma criatura paranormal qualquer, mas modifique-a para ter dano, resistências e vulnerabilidades ligadas ao fogo. Matá-la encerra a “epidemia”."
    },
    {
      type: "text",
      content: "• Criar uma explicação convincente para os eventos, acalmando a população. É preciso elaborar uma narrativa racional para as mortes, os incêndios… e que não envolva as forças do oculto!"
    }
  ]
  },
  {
  id: "21",
  name: "O Mausoléu",
  theme: "Exploração",
  image: "/aventuras/o-mausoleu.png",
  summary: "Aventureiros buscam a fortuna de um magnata em um mausoléu protegido por enigmas de mercado, onde a prova de valor não é a força, mas sim a criatividade para realizar o impossível.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para jogos de fantasia como A Lenda de Ghanor e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "TESTAMENTO"
    },
    {
      type: "text",
      content: "\"O trabalho transforma tudo. Só herdará os frutos do meu quem vender neve aos caçadores da tundra e areia aos nômades do deserto.\""
    },
    {
      type: "text",
      content: "Esta inscrição está gravada sobre a entrada do Mausoléu do Mercador, uma tumba lendária escondida nos subterrâneos de uma montanha de difícil acesso. Dizem que o magnata ali enterrado começou do nada e ergueu supostamente sozinho um vasto império comercial."
    },
    {
      type: "text",
      content: "Morreu cercado de ouro — e de solidão."
    },
    {
      type: "text",
      content: "Por fora, o mausoléu parece um templo, com cúpula reluzente e colunas entalhadas. A entrada verdadeira fica sob a cúpula: uma porta circular, sem fechadura ou maçaneta, feita de chumbo e protegida com runas. Diante dela, sobre um pedestal, repousa uma balança. O dispositivo não só abre a tumba, mas julga quem “merece” entrar, conforme as crenças que o antigo mercador teve em vida. Sem herdeiros, ele trancou toda a sua fortuna no mausoléu."
    },
    {
      type: "text",
      content: "Para herdar seu tesouro, é preciso que alguém prove estar à sua altura."
    },
    {
      type: "text",
      content: "Caso queiram acessar a estrutura, heróis devem cumprir dois feitos: vender neve aos caçadores da tundra e areia aos nômades do deserto, como diz o enigma. Para isso, precisam viajar a regiões nos confins do mundo, encontrando um meio criativo de realizar essas barganhas — em tese impossíveis — e retornar com provas."
    },
    {
      type: "text",
      content: "O mestre pode tratar isso como uma campanha completa, repleta de monstros e intempéries ou resolver com testes que simulem os desafios da travessia. O importante é que a jornada não seja apenas física, mas espiritual. Sem esforço, o mausoléu rejeita tentativas de abertura como trapaça."
    },
    {
      type: "text",
      content: "Diversas soluções podem ser propostas e exigem criatividade dos jogadores. Se o grupo ficar empacado, testes de atributos mentais podem oferecer sugestões. A frase “o trabalho transforma tudo” é uma pista. Exemplos incluem transformar areia em vidro ou neve em água potável estocada — convertendo recursos comuns nessas regiões de clima extremo em algo com valor de troca aos povos locais."
    },
    {
      type: "text",
      content: "Ao retornar, basta colocar uma amostra da mercadoria obtida (ou uma moeda obtida com sua venda) sobre a balança e aguardar o veredito."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "HERDEIROS ESPIRITUAIS"
    },
    {
      type: "text",
      content: "O interior do mausoléu é frio e silencioso. Um corredor estreito desce por trás do cofre circular, iluminado por tochas mágicas. Murais em relevo nas paredes narram uma versão romantizada da vida do mercador, das pequenas empresas aos grandes negócios. Estátuas ao longo do caminho o retratam em diversas fases — jovem, velho, estudioso — e outras mostram aventureiros sem fama notória."
    },
    {
      type: "text",
      content: "No fim do corredor, abre-se um salão com colunas que lembram torres de moedas. No centro, um escriba mecânico desperta ao notar os visitantes e desliza um contrato mágico sobre a mesa. Ele exige que todos assinem para seguir. Um teste de inteligência revela que quem assina perde parte da vontade e se torna uma estátua viva. Recusar ativa as defesas: as estátuas de aventureiros na tumba ganham vida e atacam."
    },
    {
      type: "text",
      content: "Com o escriba vencido, abre-se um labirinto de estantes móveis, vigiado por mortos-vivos de pele de pergaminho — antigos cobradores aprisionados. No centro, uma balança barra a passagem e exige um pagamento simbólico: algo pessoal e insubstituível. Se alguém tentar enganá-la, o dispositivo fica com as lembranças mais valiosas do usuário, decretando que “tempo é dinheiro!”."
    },
    {
      type: "text",
      content: "A última sala é coberta por um mar de ouro maior do que o grupo esperava encontrar: barras, joias, relíquias. O ar pesa com a avareza. Das profundezas da fortuna acumulada, surge o espectro do mercador, que serpenteia entre moedas como um tubarão faminto. O fantasma ataca sem hesitar — só ouro, prata ou magia podem ferí-lo."
    },
    {
      type: "text",
      content: "Se for derrotado, sua alma é finalmente libertada do mundo material e ele se desfaz em poeira cintilante. No centro da sala, um cofre de ferro negro se revela. Dentro, há apenas um pergaminho lacrado. O texto, direto e seco, reconhece os invasores como capazes e lhes transfere a posse do mausoléu. A fortuna permanece intocada, mas a cláusula final é clara:"
    },
    {
      type: "text",
      content: "“Levem o que puderem, mas como todo o resto exigirá TRABALHO!”"
    },
    {
      type: "text",
      content: "Nenhum feitiço de teletransporte, dobra dimensional ou armazenamento mágico funciona com aquilo que foi estocado dentro do mausoléu. A fortuna é protegida contra qualquer forma de transporte rápido ou truque mágico. Para aproveitar a riqueza em sua plenitude, será necessário planejamento logístico, inúmeras viagens arriscadas, empregar trabalhadores e — acima de tudo — uma quantidade mais do que generosa de tempo."
    },
    {
      type: "text",
      content: "Ao deixar o mausoléu os personagens não têm um tesouro. Têm o equivalente a uma mina de ouro."
    },
    {
      type: "text",
      content: "Resta saber o que fazer com ela."
    }
  ]
  },
  {
  id: "22",
  name: "A Lei do Tear",
  theme: "Fantasia",
  image: "/aventuras/lei-do-tear.png",
  summary: "Em um reino com leis estranhas, os heróis se deparam com um conflito entre a guarda real e um taverneiro que esconde uma roca, desvendando uma trama política baseada em um conto de fadas fabricado.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. A lei do tear pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Busca e apreensão"
    },
    {
      type: "text",
      content: "Os heróis acabam de chegar a um reino distante. Após longa viagem, estão jantando em uma taverna. Os pratos e a bebida são simples e servidos em pouca quantidade, mas são representativos da cultura local. Durante o jantar, personagens especialmente inteligentes ou astutos podem fazer testes para observar as pessoas ao seu redor. Se passarem, percebem duas coisas. A primeira é que a maioria dos plebeus presentes usa roupas ainda mais gastas e esfarrapadas que o normal. Algumas chegam a estar rasgadas. A segunda é que os mercadores na taverna usam roupas novas, mas todos parecem se vestir segundo a moda e costumes do reino de onde os personagens vieram, embora se comuniquem em sua própria língua nativa. Fora seu vestuário, não demonstram nenhum outro tipo de estrangeirismo. Um excelente resultado ao fazer o teste também revela que a mesa onde os heróis estão se banqueteando foi colocada estrategicamente em cima de um alçapão, com o intuito de escondê-lo."
    },
    {
      type: "text",
      content: "Antes que os heróis tenham chance de reagir a esta informação, de repente, a guarda local irrompe no estabelecimento. Os soldados dizem ter recebido a denúncia de atividades ilegais sendo exercidas na taverna e mostram um mandado de busca. Caso ninguém interfira, eles vasculham a cozinha, o estábulo e os quartos no andar superior. Durante a busca, os heróis podem não falar nada e continuar jantando, encobrindo o alçapão. Ou denunciar o taverneiro. Caso ninguém faça nada, antes de irem embora, um dos soldados escuta algo vindo do alçapão e pede que os personagens saiam para que ele possa investigar."
    },
    {
      type: "text",
      content: "Embaixo da mesa há a entrada para um porão onde se esconde uma das filhas do taverneiro, junto a uma roca de fiar. Se os soldados descobrirem o porão, irão destruir e queimar a roca, apesar dos pedidos encarecidos do taverneiro para que não façam isso. Ele tenta argumentar que não recebe visitantes o ano todo e que ele e sua família precisam trabalhar como alfaiates para se sustentar. Os guardas fazem pouco caso. Irão prendê-lo e multar pesadamente suas filhas e filhos desesperados e em pranto."
    },
    {
      type: "text",
      content: "A menos que os heróis tentem interferir, os soldados serão extremamente corteses com o grupo, pedirão desculpas pela confusão e irão embora — afinal, ricos viajantes estrangeiros não devem ser perturbados!"
    },
    {
      type: "text",
      content: "O que acontece com o taverneiro e sua família, como a situação é resolvida, depende das ações dos jogadores. Ao interagir com os soldados, seja para barganhar, seja para obter mais informações, o grupo é colocado a par da situação no reino: o porte de rocas, fusos, agulhas ou qualquer outro material de costura foi proibido pela coroa. Há muito tempo atrás, por não ter sido chamada para fazer o parto da filho da antiga rainha, conforme o costume antigo, uma bruxa amaldiçoou o príncipe. O nobre está fadado a espetar o dedo em um fuso ou agulha, caindo junto a todos seus súditos em um sono eterno! Bardos podem fazer testes de conhecimento. Se passarem, sabem que esta história parece ser a variação um conto de fadas bem antigo e bastante conhecido. Parece estranho que a lenda esteja se repetindo no mundo real. Seja como for, as autoridades têm uma proposta. Estão dispostas a esquecer a multa do taverneiro — e pagar uma justa recompensa aos forasteiros — caso eles ajudem na captura de uma feiticeira maligna que mora no bosque, conhecida por rituais profanos e por sequestrar e devorar crianças. Além disso, apenas magia divina e de deuses autorizados pode ser praticada por nativos do reino, e suspeita-se que a feiticeira é uma aprendiz da bruxa que lançou a maldição original. A captura e interrogatório da feiticeira pelas autoridades pode levar ao paradeiro de sua mestra."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Perseguição religiosa"
    },
    {
      type: "text",
      content: "A tal “feiticeira” vive em uma cabana na mata e encontrá-la não é difícil. O grupo deve realizar testes de sobrevivência ou ligados a exploração. Se passar, conseguirá se aproximar da cabana sem ser notado e surpreenderá a procurada, podendo agir primeiro. Se falhar, será emboscado por ela e a adversária começará agindo. Independente disso, a feiticeira irá atacar imediatamente e só tentará negociar se estiver prestes a perder. Ou se os personagens conseguirem passar em vários testes sociais para acalmá-la."
    },
    {
      type: "text",
      content: "Para este combate, utilize a ficha de uma druida, com nível de desafio adequado aos jogadores. Personagens religiosos ou especializados em magia logo perceberão que a adversária não utiliza artes arcanas ou profanas, mas magia da natureza."
    },
    {
      type: "text",
      content: "Uma vez que tenham lidado com a ameaça, a druida irá se render e tentar conversar com os personagens. Ela não é uma feiticeira. Uma busca por sua cabana revela que parece dizer a verdade sobre ser inocente dos crimes hediondos de que foi acusada."
    },
    {
      type: "text",
      content: "“A velha maldição da bruxa”, revela, é uma fabricação do regente atual, um tirano que serve a interesses políticos estrangeiros. O príncipe da história é seu sobrinho, e mantê-lo preso com a desculpa de protegê-lo serve para deixá-lo afastado dos assuntos do trono. A lei contra o tear faz com que o reino seja incapaz de produzir roupas e tecidos, obrigando-o a importar os produtos de outras nações. Além disso, o medo da tal bruxa une o povo contra um inimigo imaginário e serve de pretexto para uma inquisição contra pessoas que pratiquem a religião antiga dos druidas — ou que são simples desafetos do regente! Mercenários e aventureiros vindos de fora costumam ser recrutados para missões de caça às bruxas justamente porque ignoram o contexto político do reino — diferente dos heróis nativos, que se opõem a coroa."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cárcere privado"
    },
    {
      type: "text",
      content: "Se o grupo quiser ajudar a melhorar situação no reino, recebe da druida a missão de resgatar o príncipe e ajudá-lo a fugir. Infelizmente, para isso, precisará vencer mais um desafio..."
    },
    {
      type: "text",
      content: "Escalar uma das torres mais altas do mundo!"
    }
  ]
  },
  {
  id: "23",
  name: "O Forasteiro",
  theme: "Faroeste",
  image: "/aventuras/o-forasteiro.png",
  summary: "Em uma vila que resiste à posse de um clã de rancheiros corruptos, os heróis são recrutados para o lado rebelde, mas descobrem que um detetive infiltrado está sabotando seus planos de defesa.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para jogos de faroeste como Deadlands, O Som das Seis, Sacramento RPG e outros. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "TRÊS MARIAS"
    },
    {
      type: "text",
      content: "O distrito serrano de Três Marias foi criado recentemente, mas a vila que lhe deu nome tem origem antiga. Sua história remonta à fazenda de um barão do café conhecido por sua fervorosa — e, para alguns, fanática — devoção religiosa."
    },
    {
      type: "text",
      content: "Ele pregava sempre a corrupção do mundo e a salvação da alma, e enviou suas três filhas (as três chamadas Maria) para viverem num convento. Embora elas nunca tenham feito votos, passaram boa parte de suas vidas lá, retornando apenas para se despedir do pai em seu leito de morte. Ao herdarem a fazenda, as três construíram uma igreja na propriedade e, ao falecerem, deixaram a terra como herança para as famílias de seus empregados."
    },
    {
      type: "text",
      content: "Foi a partir daí que nasceu o povoado, mas sua elevação ao nível de distrito — com uma prefeitura responsável pela região e uma jurisdição própria — veio muitos anos depois, em grande parte, impulsionada pelos interesses de uma companhia ferroviária, que construiu uma estação de trem no local."
    },
    {
      type: "text",
      content: "Assim, com a primeira ferrovia, vieram também as primeiras eleições. Elas foram marcadas por fraudes típicas: eleitores votavam várias vezes usando disfarces ou em nome de parentes falecidos, entre outras irregularidades. A tática vencedora foi a dos Irmãos Tavares, um clã de ricos rancheiros. Eles trouxeram trabalhadores temporários de outras terras, para cuidar de seus rebanhos e, ao mesmo tempo, aumentar rapidamente a população local, “importando” eleitores leais e garantindo votos suficientes para vencer."
    },
    {
      type: "text",
      content: "Dessa maneira, os Tavares conquistaram a prefeitura e todos os cargos importantes de Três Marias. No entanto, a população local, indignada, se uniu sob a liderança do xerife Savério, e expulsou os irmãos e seus caubóis da cidade, à base da bala!"
    },
    {
      type: "text",
      content: "Apesar dessa resistência organizada, a lei assegura que os Tavares podem assumir seus cargos no início do ano. Determinados a tomar posse, eles contrataram um detetive para se infiltrar entre os rebeldes, atuar como espião e garantir que o seu retorno será pavimentado por revanche e triunfo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "UM TRAIDOR ENTRE NÓS"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores podem ser cidadãos de Três Marias ou foras-da-lei recrutados pelo xerife Savério em troca do perdão de suas penas, para lutar contra os Irmãos Tavares. Três NPCs também agem como braços armados do xerife:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Margarida Gemini. Uma carismática e irritadiça atiradora profissional. Trabalhava em um circo, mas fugiu após assassinar seu antigo patrão durante uma briga."
    },
    {
      type: "text",
      content: "João Vala. Educadíssimo e cavalheiresco comerciante de armas e instrutor de tiro. Amante e cúmplice de Margarida, que se uniu a ela após se encantar por uma de suas apresentações. É um homem alto e bonito, embora seu rosto traga as marcas de uma queimadura antiga."
    },
    {
      type: "text",
      content: "Carlo “Caladão” Cormano. Um italiano de poucas palavras e muitos gestos, que se orgulha de ser feio, forte e formal. Está hospedado com o xerife e alega ter perdido suas terras para uma tempestade de areia."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "A história começa no salão local, onde o xerife reúne a população para discutir estratégias de defesa na guerra contra os Tavares. Com as passagens da região bloqueadas, a única via de ataque é a ferrovia. Os irmãos provavelmente vão fazer parte da rota de trem, então, descer com suas tropas e seguir a cavalo para cercar a cidade. Os personagens dos jogadores é quem devem discutir e decidir o plano de defesa, mas enfrentarão objeções do xerife e dos outros NPCs, interpretados pelo mestre."
    },
    {
      type: "text",
      content: "Durante o debate, uma explosão ocorre em um depósito de munição próximo, iniciando um incêndio no salão. Os personagens precisam ajudar os locais a controlar o fogo e podem realizar um teste de percepção. Ter sucesso neste teste revela Cormano se esgueirando para fora, escondendo suas roupas em uma moita, e atravessando um riacho a nado até a estação de trem na outra margem. Lá, ele usa o telégrafo para informar aos Irmãos Tavares sobre os planos do grupo."
    },
    {
      type: "text",
      content: "Cormano é o detetive contratado pelos Tavares. Enquanto isso, João Vala também desaparece em meio à confusão, porque tem medo de chamas devido a um trauma do seu passado."
    },
    {
      type: "text",
      content: "Caso os jogadores não percebam a fuga de Cormano, ele retorna antes do amanhecer. Margarida notará sua ausência e o confrontará, acusando-o de traição. Cormano tenta se defender mentindo na cara dura, afirmando estar seguindo João."
    },
    {
      type: "text",
      content: "O casal puxa suas pistolas e as aponta para Cormano, mas o honrado xerife Savério toma partido do forasteiro, e logo um impasse começa. Se a situação termina em um banho de sangue, e o infiltrado é desmascarado, tudo depende de como os personagens conduzem a cena."
    },
    {
      type: "text",
      content: "A luta contra os Irmãos Tavares e seu bando será afetada por esse desfecho. Se Cormano não foi desmascarado, segue se comunicando com os rancheiros, entregando os planos do grupo."
    },
    {
      type: "text",
      content: "Independente de qual seja a tática dos jogadores, os vilões estarão preparados."
    }
  ]
  },
  {
  id: "24",
  name: "Bárbaros e Necromantes",
  theme: "Fantasia",
  image: "/aventuras/barbaros-e-necromantes.png",
  summary: "Aventureiros encontram um soldado morto-vivo que os amaldiçoa a investigar um assassinato. A busca pelo 'bárbaro necromante' os leva a uma cidadela corrompida e a um capitão que usa preconceito para encobrir seus próprios crimes.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme a necessidade. Pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Últimas palavras"
    },
    {
      type: "text",
      content: "A sessão começa com o grupo se preparando para acampar no meio da noite, quando um velho soldado surge deitado em meio às sombras. Seu corpo está dilacerado e coberto de sangue seco, mas ele continua se arrastando pelo chão, enquanto observa a todos com a expressão de um cão raivoso. Então grita:"
    },
    {
      type: "text",
      content: "— Aquele bárbaro traidor! Necromante imprestável!"
    },
    {
      type: "text",
      content: "O soldado cai morto, logo em seguida. Contudo, alguns instantes depois, volta a se levantar transformado em um morto-vivo, atacando o grupo! Após o combate, os personagens terão tempo para se recuperar e pensar sobre o acontecimento... E rolar dados para tentar passar em alguns testes."
    },
    {
      type: "text",
      content: "Passar em testes de conhecimento identifica o homem como um membro da guarda de Ouro Perdido, uma cidadela nas montanhas, famosa por bordeis e casas de jogo voltadas para mineradores. Testes ligados a misticismo ou religião podem revelar a ressurreição espontânea: foi o desejo de vingança do morto que o trouxe de volta à vida. Testes ligados a cura, guerra ou percepção têm a chance de indicar que os ferimentos, já necrosados, foram causados por um machado. O soldado se arrastou por dias antes de morrer. Testes ligados a intuição, e de dificuldade elevada, se bem-sucedidos, esclarecem que as palavras do homem não pareciam falar de duas pessoas distintas, mas de uma só."
    },
    {
      type: "text",
      content: "Além disso, passar em mais testes de conhecimento, pode mostrar ainda duas coisas: a palavra “bárbaro” não se refere apenas a um tipo de guerreiro rústico. Também é um termo pejorativo para estrangeiro. Da mesma maneira, “necromante” não é usada apenas para praticantes de magia da morte, mas também para quem conversa com espíritos. Os testes não precisam ser feitos todos de uma vez e sim enquanto os jogadores investigam e fazem perguntas, no momento mais adequado. O grupo pode propor outros testes para receber pistas adicionais sobre o crime — leia detalhes sobre o delito mais à frente!"
    },
    {
      type: "text",
      content: "Explique ao grupo: o encontro com o moribundo parece ser uma clara mensagem enviada pelos deuses. O soldado precisa ser levado de volta a seus superiores e as circunstâncias de sua morte desveladas! Se preferir, você pode fazer um deus ou outra entidade literalmente aparecer e dar essa missão com palavras enigmáticas. Se os heróis ignoram o sinal ou falham em cumprir a jornada, passam a ser assombrados pelo espírito do morto, sofrendo uma maldição severa. Pesadelos os impedem de dormir até que encontrem o assassino... Ou descubram um clérigo poderoso o bastante para exorcizá-los."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os suspeitos de sempre"
    },
    {
      type: "text",
      content: "O grupo não sabe ainda, mas o morto era chamado de Tenente Ardo. Seu superior era o Capitão Alaric, chefe da guarda de Ouro Perdido, para quem atuava como braço direito. A cidadela costumava ser a fortificação pacata de uma região entre fronteiras. Mas a descoberta de metal precioso nas montanhas atraiu muitos mineradores anões, vindos de reinos subterrâneos. Os anões trouxeram brigas, caos e — porque não? — riquezas com seus gastos compulsivos e uma melhora de vida aos plebeus! Isso foi uma afronta aos soldados da cidadela, acostumados a uma vida fácil e a se sentirem superiores ao restante da população. Alaric foi originalmente um bárbaro das montanhas, no entanto, havia abraçado os costumes da cidadela. Manipulando o ódio dos companheiros contra essa “ameaça”, ele assumiu o comando da guarda e, junto a Ardo, liderou uma campanha brutal e discreta de extermínio. Após anos, conseguiu expulsar os anões."
    },
    {
      type: "text",
      content: "Ouro Perdido é hoje uma cidadela segura e bem patrulhada, todavia, pobre e com uma população envelhecida. Todos os jovens a deixaram em busca de uma vida melhor. Isso tornou Alaric um homem odiado fora da guarda, e também levou a uma consciência pesada por seus crimes e pelas pessoas que afastou em sua pequena guerra por poder. O capitão foi visto algumas vezes tarde da noite no cemitério da região tentando falar com espíritos. Paranóico, recentemente se convenceu de que o tenente pretendia denunciá-lo ao exército e fazer um acordo para tomar seu lugar. Matou Ardo enquanto viajavam, em um acesso de fúria, depois de uma discussão... Mas, transtornado, não percebeu que o outro havia sobrevivido a seus golpes!"
    },
    {
      type: "text",
      content: "Se o grupo leva o cadáver até Alaric, o capitão mantém as aparências e conduz uma falsa investigação. Indica como suspeito o bárbaro anão Rór, um bêbado frequentador de tavernas fora da cidadela, e que já matou a golpes de picareta soldados que tentavam prendê-lo. Alaric recruta o grupo para capturá-lo com vida e levá-lo a julgamento. Isso, porém, não resolverá a maldição. Se alguém questiona o capitão, menciona o tenente usando o termo “necromante”, ou observa que a arma do crime não foi uma picareta, Alaric pensa em uma segunda suspeita e contrata o grupo para também capturá-la: uma elfa bruxa do bosque chamada Vadra. Os suspeitos resistem à prisão, mas se entregam se forem feridos ou o grupo conseguir intimidá-los."
    },
    {
      type: "text",
      content: "Com os suspeitos capturados, Alaric diz que está velho e não tem mais paciência para interrogatórios. Como ambos negam ter envolvimento no crime, ele realizará um julgamento por combate entre os dois, na manhã seguinte... E deixará que os deuses decidam!"
    },
    {
      type: "text",
      content: "Apostas são feitas entre a guarda, e o combate acontece. Role um teste oposto qualquer para ver qual personagem é o vencedor. No entanto, algo acontece! Independente do resultado, a pessoa morta retorna à vida. Vadra acusa Alaric — se nenhum personagem chegou a isso antes — interpretando o sinal divino e deduzindo que ele é o responsável! A elfa e o anão unem forças e confrontam a guarda."
    },
    {
      type: "text",
      content: "O grupo se juntará ao lado certo?"
    }
  ]
  },
  {
  id: "25",
  name: "Fim da Linha",
  theme: "Terror Urbano",
  image: "/aventuras/fim-da-linha.png",
  summary: "Uma onda de desaparecimentos misteriosos ligados ao ônibus da linha 203 leva os heróis a descobrirem um túnel que funciona como passagem liminar, abrigando uma entidade que aprisiona suas vítimas por ansiedade de separação.",
  sections: [
    {
      type: "text",
      content: "Esta miniaventura foi criada para RPGs de terror como Ordem Paranormal, Rastro de Cthulhu e outros. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "VOCÊ VIU ESTA PESSOA?"
    },
    {
      type: "text",
      content: "O fato de pessoas sumirem da vida de outras pode soar um tanto banal, mas nunca é banal quando acontece com você. A cidade que serve de palco para esta aventura nota uma onda de desaparecimentos misteriosos em semanas recentes. Os personagens dos jogadores são parentes, amigos ou afetos de algumas dessas pessoas desaparecidas. Se for o início de uma campanha, cada um pode criar um NPC que esteja buscando — uma ex não-superada, um pai que nunca voltou para casa, etc."
    },
    {
      type: "text",
      content: "O grupo se conheceu dias atrás na sala de espera de uma delegacia onde, além de recriminados pela sua insistência na busca, perceberam ter algo mais em comum: todas as vítimas foram vistas pela última vez no ônibus da linha 203. Diante da morosidade da polícia, resolveram manter contato e agora o grupo é literalmente um grupo — formado em um infame aplicativo de mensagens — para oferecer apoio mútuo. Todos marcaram de se encontrar e pegar o tal ônibus, percorrendo o trajeto em busca de pistas."
    },
    {
      type: "text",
      content: "O que eles não sabem é que os desaparecimentos foram um incidente sobrenatural."
    },
    {
      type: "text",
      content: "Tudo começou meses atrás. Teotônio dos Santos, um passageiro idoso, irritado com a nova catraca eletrônica que substituía o cobrador, discutiu com o motorista. Raul Viera já sofria de estresse e esgotamento pela sobrecarga de trabalho. A briga levou a um descuido e a um acidente grave: Raul perdeu o controle do veículo e atingiu Elaine que carregava no colo o filho Gael, de oito meses."
    },
    {
      type: "text",
      content: "Mãe e filho foram levados pelo ônibus para dentro de um túnel escuro. Sobreviveram, mas Elaine ficou em estado catatônico. O bebê agora está sob os cuidados do pai, Rafael, que trabalha como redator em home office. Gael, porém, vem apresentando comportamentos estranhos para uma criança de sua idade."
    },
    {
      type: "text",
      content: "Até aqui, parece uma história de jornal. Mas o túnel não é apenas uma passagem física — ele funciona como um espaço liminar, uma fossa metafísica que liga este mundo a outro. O fenômeno surgiu décadas atrás, quando dezenas de operários morreram soterrados durante sua construção, deixando para trás sofrimento que impregna o local. Mais tarde, a angústia da criança tragada para dentro do túnel gerou uma entidade estranha, hoje habitante desse bolsão dimensional. (Mestre: utilize a ficha da criatura que melhor se encaixar nesse conceito!)."
    },
    {
      type: "text",
      content: "Hoje, pessoas com alguma sensibilidade mística que atravessam o túnel desaparecem por instantes, sendo puxadas para o bolsão e levadas ao covil da entidade."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "ANSIEDADE\nDE SEPARAÇÃO"
    },
    {
      type: "text",
      content: "Durante a excursão conjunta em busca de pistas sobre os desaparecidos, algo estranho acontece quando o grupo atravessa o túnel: eles ouvem as vozes das pessoas sumidas clamando por ajuda — sinal de que ainda estão vivas, de algum modo. Personagens sensitivos são tragados para a outra dimensão, onde são atacados pela entidade paranormal. Após poucas rodadas, e apesar da gravidade de quaisquer ferimentos, conseguem sobreviver e surgem muitas horas depois em bancos do 203 deserto, à noite, estacionado no fim da linha e com o motorista se preparando para a última viagem do ônibus"
    },
    {
      type: "text",
      content: "Esses eventos servem como gancho para que o grupo vá atrás da história dos acidentes."
    },
    {
      type: "text",
      content: "Para salvar os desaparecidos, contudo, é preciso investigar o fim da linha do busão: é onde se manifesta uma passagem metafísica menor que leva até o covil da entidade. Identificar e abrir a passagem, porém, exige alguns dias de pesquisa em ciências ocultas, até descobrir o ritual necessário para acessá-la. Esse ritual envolve cada personagem sacrificar um objeto ou memória de seu ente querido desaparecido — é sempre algo que revela uma faceta que nunca tinham percebido ou que prova que não conheciam essa pessoa tão bem quanto imaginavam. Somente ao reconhecer essa falta de conhecimento, e ao aceitar o mistério que ainda envolve o outro, a passagem se abre."
    },
    {
      type: "text",
      content: "O bolsão dimensional é um local completamente escuro, onde nenhum tipo de luz natural ou mágica funciona, e apenas a entidade enxerga. Além disso, há pouco oxigênio, tornando difícil respirar. O grupo pode adotar qualquer tática para o resgate — pesquisar sobre a criatura e enfrentá-la, distraí-la, tentar contato e barganhar etc. Em algum momento, no entanto, uma revelação se torna evidente: o acidente envolvendo o ônibus não criou a entidade, mas fez a mente de Gael, a criança vitimada, trocar de lugar com ela. A entidade não age por impulsos malignos, mas sofre de ansiedade de separação, não permitindo que as pessoas aprisionadas partam e a deixem sozinha…"
    },
    {
      type: "text",
      content: "Como o seu grupo vai lidar com isso? Cabe apenas a ele decidir."
    }
  ]
  },
  {
  id: "26",
  name: "Legiões Invisíveis",
  theme: "Ficção Científica",
  image: "/aventuras/legioes-invisiveis.png",
  summary: "Super-heróis e vilões são sequestrados por um alienígena para uma lua-arena onde são forçados a lutar até a aniquilação, mas os heróis dos jogadores são misteriosamente colocados no time dos vilões.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para RPGs de lutinha supers como Karyu Densetsu, Mutantes & Malfeitores — e o vindouro 3DeT Victory! É uma trama flexível, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Questão de equilíbrio"
    },
    {
      type: "text",
      content: "A Terra constantemente enfrenta inúmeras ameaças. Sempre resistimos graças à incessante luta de pessoas com poderes extraordinários. São heróis, vilões. Mas quem decide quem é quem? Uma escolha controversa, ainda mais quando quem precisa decidir isto é um alienígena."
    },
    {
      type: "text",
      content: "Ele se apresenta como Eônico — ao menos é assim que seu nome é traduzido em sua comunicação telepática. É um viajante espacial pertencente aos Árbitros de Guerra, povo criado pelas poderosas civilizações que governam o cosmos. Após uma antiga batalha entre elas, que quase colocou toda a realidade em risco, os Árbitros receberam uma ingrata missão: impedir que isso aconteça novamente. Com este propósito, visitam mundos habitados e removem suas armas mais poderosas, se forem consideradas um risco. Além disso, caso o planeta tenha excedido os limites da população de superindivíduos estabelecida pelo Tratado dos Impérios Celestiais (a maioria dos planetas não conhece nem é signatária!), ela é dizimada."
    },
    {
      type: "text",
      content: "Eônico, em particular, segue uma moralidade dualista de sua cultura e realiza a tarefa meticulosamente. Nunca escolhe os maiores campeões dos mundos que visita, pois isso chama muita atenção. Prefere selecionar alvos entre as camadas intermediárias de seres prodigiosos. Costuma teletransportar cerca de uma dezena de indivíduos para luas-arenas — pequenos planetoides orbitando corpos celestes maiores e com condições de vida semelhantes às da Terra, mas de natureza artificialmente implantada, desprovida de fauna, imensos jardins vazios."
    },
    {
      type: "text",
      content: "Conforme explicado pelo árbitro, aos personagens dos jogadores após serem subitamente transportados — voz sem corpo, ouvida diretamente em suas mentes, como se viesse de um deus — ele explica o que fez. Aqueles que escolheu foram posicionados em dois times, bem contra o mal."
    },
    {
      type: "text",
      content: "Eônico tem suas próprias razões para fazer isso, seu critério segue uma crença própria, para a qual não fornece quaisquer justificativas. Para o árbitro, tudo é muito evidente: ambas as equipes foram posicionadas em lados opostos de uma montanha e precisam lutar entre si, até que o último integrante do time rival seja aniquilado."
    },
    {
      type: "text",
      content: "A voz desaparece, tão rapidamente quanto surgiu, mas deixa uma dúvida não respondida. Por que diabos os heróis com os quais os personagens estão jogando, foram colocados… no meio do time do mal?! Ou como o próprio Eônico diz ao se despedir, antes de silenciar em definitivo:"
    },
    {
      type: "text",
      content: "— Boa sorte, vilões! Que o bem possa vencê-los."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Nós contra eles"
    },
    {
      type: "text",
      content: "Legiões Invisíveis segue o estilo sandbox. Ou seja, basicamente envolve um planetoide desabitado onde não há ninguém além dos personagens dos jogadores e potenciais aliados e inimigos para interagirem. É possível preencher o lugar com NPCs favoritos da sua ambientação favorita, como personagens do Multiverso Marvel, Universo DC, Era das Arcas, desde que tenham níveis de poder adequados à trama e possam enfrentar o grupo ao menos em pé de igualdade. No entanto, também é possível fazer fichas para heróis ou vilões da própria mitologia caseira."
    },
    {
      type: "text",
      content: "A seguir há sugestões e ideias para personagens que podem ser introduzidos em cada equipe. Cada jogador pode começar a história descrevendo o que estava fazendo quando foi teleportado para a lua-arena, bem no meio da ação. Os outros membros do time dos vilões, ao vê-los, ficarão tão surpresos e incomodados quanto eles... talvez, até sejam inimigos mortais de algum dos personagens!"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Desgarrados. Estes NPCs surgem junto aos personagens dos jogadores. Não são uma equipe, e sim malfeitores acostumados a trabalhar sozinhos. Mechanomantis é um cyberterrorista capaz de compreender o funcionamento de qualquer máquina instintivamente, equipado com uma armadura tecnologicamente avançada em forma de louva-deus (que ele roubou!). É um homem frio, patologicamente incapaz de sentir emoções. Capitão Contra afirma ser um herói nicaraguense, veterano de guerra e ex-agente da CIA. É um criminoso de guerra covarde, manipulador e oportunista. É fraco em comparação a outros heróis, mas seu verdadeiro poder está em uma inteligência muito acima da média: um estrategista capaz de prever movimentos, entender as fraquezas dos seus inimigos e preparado para tudo. Leviatã é uma simples ladra, exceto pelo fato de ser fugitiva de uma civilização submersa. Tem o poder de invocar monstros gigantescos e adora se exibir. Para ela, é mais importante triunfar espetacularmente do que apenas vencer."
    },
    {
      type: "text",
      content: "Esquadrão Beta. Time de super-heróis de segundo escalão liderado por Sirocco, alienígena criada por pescadores do mediterrâneo. Ela pode voar, projetar raios de calor pelas mãos e é uma supervelocista, mas não muito resistente. Sirocco é renomada por ser embaixadora da ONU e a responsável por erradicar a máfia no país em que cresceu, mas sofre de stress pós-traumático. Tem um medo profundo da morte, sendo alguém que coloca sua sobrevivência acima de tudo. Os outros membros do grupo são Kid-Nimbus, o leal irmão gêmeo de Sirocco, que possui poderes semelhantes, mas absorve calor em vez de emitir (e é praticamente invulnerável); Beemote, um perspicaz investigador homem-peixe que tem os mesmos poderes de Leviatã e está atrás dela para prendê-la; e Laçador, um jovem vaqueiro mutante que conta com superforça, reflexos perfeitos e é capaz de vomitar uma substância ultraresistente e pegajosa, semelhante a uma teia — que usa para fazer laços para prender especialmente, mas não apenas, ladrões de gado, posseiros, garimpeiros ilegais e matadores de aluguel!."
    }
  ]
  },
  {
  id: "27",
  name: "O Templo do Tempo",
  theme: "Fantasia",
  image: "/aventuras/templo-do-tempo.png",
  summary: "Em uma missão diplomática para devolver uma relíquia roubada, os heróis devem escalar um templo flutuante, enfrentar criaturas e resolver um enigma temporal, onde a passagem de ano cobra um preço em envelhecimento.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — como A Lenda de Ghanor, Tormenta20 e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa, ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O povo dos ciclos"
    },
    {
      type: "text",
      content: "No alto dos montes sagrados vivia um povo de guerreiros. Eles habitavam torres esculpidas na pedra; veneravam o sol, a lua, as tempestades. Um dia seus descendentes resolveram abandonar as montanhas. Viajaram para longe e espalharam-se por mil bosques e rios dando origem a uma centena de tribos diferentes. Elas lutavam entre si, não por espólios e terras, mas simplesmente para provar seu valor aos deuses."
    },
    {
      type: "text",
      content: "Contudo, quanto mais estes bravos se afastavam da morada de seus avós e pais, mais e mais sua fé se modificava. Quando olhavam para trás, não acreditavam mais em deuses, no plural, apenas em um único titã-divino que acreditavam existir na cordilheira rochosa da qual tinham saído. A divindade protetora da memória: o Tempo."
    },
    {
      type: "text",
      content: "Os governantes desta civilização clamavam serem seus filhos legítimos. O título mais alto pertencia sempre ao mais velho entre os semi-deuses. É quem detinha o conhecimento das tradições. Era respeitado por seus irmãos, obedecido pelos clãs. Foi durante o reinado do irmão-mor, Ibitä, Sucessor de Ixistähann, que foi decretada a lei conhecida como a Norma dos Ciclos: por meio dela, todas as medidas de tempo das diversas tribos foram unificadas num só calendário."
    },
    {
      type: "text",
      content: "E para que todos sempre soubessem da passagem de um ano para outro, e se lembrassem dos ancestrais, este soberano mandou construir uma imenso templo no topo do Pico dos Trovões. Sifões mágicos foram erguidos para canalizar a água das nuvens, magimecanismos alimentados por relâmpagos criados para proteger o lugar. A cada ano, o campanário interno do templo se ativava emitindo o som de um gongo ecoando pelo infinito, que podia ser ouvido através de todos os mundos conhecidos."
    },
    {
      type: "text",
      content: "A Casa-Clepsidra, como era chamada, continuou a fazer isso mesmo depois que muitos destes povos foram extintos, ou deram luz à novas culturas. Mas, enfim, até o som silenciou. Invadido por aventureiros vindos de terras distantes, o santuário foi profanado e saqueado. Eles roubaram o Aríete dos Anos, uma arma mágica que ativava o sino. A relíquia foi levada pelo invasores em uma caravana até seu país, onde foi exibida triunfalmente em longa procissão, desfilando a partir dos muros da capital até ser entregue de presente a um rei."
    },
    {
      type: "text",
      content: "Mas o deus Tempo era paciente. Muitos e muitos ciclos passaram e as coisas mudaram, mais uma vez. A rainha que herdou o objeto através de sua linhagem, está procurando um grupo de aventureiros para outra missão nas montanhas. Desta vez, para devolver o artefato roubado. Esta tarefa é de suma importância diplomática, pois apenas reparando o erro dos seus antepassados, a monarca conseguirá fazer aliança com um reino de devotos do Tempo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Assalto reverso"
    },
    {
      type: "text",
      content: "Não é necessário narrar toda a jornada do grupo até o Pico dos Trovões. A aventura começa com os personagens chegando ao local. Alcançar a sua parte mais elevada não é o verdadeiro desafio, e sim, a natureza do último trecho: o cume onde a Casa-Clepsidra flutua em meio às nuvens, sendo bombardeado constantemente por raios."
    },
    {
      type: "text",
      content: "Para chegar lá é preciso saltar entre ilhotas flutuantes: os jogadores podem resolver tomar precauções para impedir quedas fatais em caso de falha em testes (como usar cordas!). Para dificultar as coisas, uma revoada de gárgulas emerge das paredes do templo e ataca os personagens no meio do caminho."
    },
    {
      type: "text",
      content: "O pátio onde fica a entrada da torre, que não tem janelas ou outros pontos de acesso é, na verdade, solo arenoso transformado em uma planície de vidro por repetidos relâmpagos. Sobre ela escorre água canalizada das nuvens. É um campo eletrificado. A maneira mais simples de evitar sofrer dano ao atravessá-lo é cronometrar o tempo certo de queda dos relâmpagos para atravessar."
    },
    {
      type: "text",
      content: "Adentrar o templo leva ao térreo: parte de uma colossal ampulheta de água. Esta câmara se parece com um reservatório alimentado por uma cachoeira, onde se esconde um elemental (ou monstro semelhante). Para vencer esta etapa o grupo precisa nadar até uma estreita escada circular que leva ao nível superior. O tempo passa muitíssimo mais depressa aqui: toda e qualquer unidade de dano, por mínima que seja, é curada imediatamente, mas envelhece quem o recebeu em 1 ano."
    },
    {
      type: "text",
      content: "O 1º nível é um outro reservatório, mas no lugar da queda d’água há um redemoinho em seu centro, que arrasta tudo de volta à sala anterior. Esse nível é habitado por sereias sacerdotisas que cantam uma ode em honra ao passado: os personagens são acometidos por lembranças de coisas que perderam em suas vidas e, se não resistirem ao feitiço, atiram-se na água e nadam em direção ao redemoinho."
    },
    {
      type: "text",
      content: "O 2º nível e último andar contém um imenso sino, com mecanismos protegidos por uma múmia. Não um morto-vivo qualquer. Este é o próprio Ibitä, o Irmão-Mor: um semideus. O desmorto é imune ao som. Ele não ouve, e só se comunica por gestos. Caso consigam entendê-lo, ele explica que falhou em sua tarefa de guardião, por isso, permanece preso ao lugar. Não é mais digno de tocar o Aríete. Para que a arma seja acoplada novamente ao templo é preciso bater com ela no sino, uma vez para cada ano que não foi soado… um século inteiro!"
    },
    {
      type: "text",
      content: "Cada golpe causa uma pequena quantidade de dano sônico e envelhece quem o fez em 1 ano. Se o mesmo indivíduo tocar o sino mais de uma vez, em sequência, perderá permanentemente o sentido da audição. Para completar a tarefa, o grupo pode se revezar ou concentrá-lo sobre personagens longevos/que não envelhecem (elfos, golem, etc…)"
    },
    {
      type: "text",
      content: "Também pode decidir abandonar seu trabalho, mas será avisado por Ibitä: o juramento dele não permite deixá-los partir sem que consertem a torre. Caso tentem ir embora, serão obrigados a enfrentá-lo em combate."
    }
  ]
  },
  {
  id: "28",
  name: "Coragem!",
  theme: "Fantasia Medieval",
  image: "/aventuras/coragem.png",
  summary: "Contratados para capturar a rara corça-de-fogo em um planalto gélido, os heróis devem enfrentar os perigos da montanha e a concorrência de outros grupos, sob a ameaça constante de uma contagem de falhas que representa a 'ira' da montanha.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — como A Lenda de Ghanor, Tormenta20 e quaisquer outros sistemas compatíveis. É uma história flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A última corça"
    },
    {
      type: "text",
      content: "Durante uma noite escura e sem estrelas, os personagens dos jogadores encontram três druidesas ao redor de uma fogueira. Eles descobrem que as sacerdotisas já tinham previsto a chegada do grupo e estavam à sua espera."
    },
    {
      type: "text",
      content: "As três mulheres pedem ajuda dos heróis em uma missão: capturar o último macho de uma raríssima espécie de cervos, chamada corça-de-fogo. Oferecem poções milagrosas e suas melhores bênçãos em troca da realização desta árdua tarefa. Apesar de algumas fêmeas restarem em um santuário protegido pelo trio, a raça corre risco de extinção se um reprodutor não for encontrado. "
    },
    {
      type: "text",
      content: "As guardiãs não podem abandonar o território que protegem, por isso, precisam de alguém para fazer a jornada em seu lugar até o Alto Abismo: planalto gélido repleto de escarpas e penhascos, onde foi avistado um destes animais lendários. Mas há uma advertência… as montanhas não toleram erros. Ali pequenos deslizes podem significar a diferença entre vida e morte."
    },
    {
      type: "text",
      content: "Em termos de regras, pela duração da aventura, o grupo como um todo não pode acumular mais de 20 falhas em testes (número que pode ser maior ou menor, conforme o desafio pretendido). Todo teste de ataque, habilidade, perícia, etc, conta para este fim. Mais do que apenas o desafio da perseguição, este limite abstrato representa os inclementes “deuses da montanha” de olho nas ações dos protagonistas."
    },
    {
      type: "text",
      content: "Viajar para Alto Abismo não representa desafio, pois envolve passar por rotas conhecidas. Mas após a chegada os personagens precisam passar em testes contra o frio, fome e fadiga devido ao ar rarefeito."
    },
    {
      type: "text",
      content: "Em seguida, eles têm duas opções: descansar e obter informações em uma aldeia próxima ou partir imediatamente."
    },
    {
      type: "text",
      content: "Caso optem pela primeira escolha, precisarão fazer os testes sociais para conseguir hospedagem na casa de um aldeão, arriscando acumular as primeiras falhas da aventura. Por outro lado, terão chance de se recuperar de penalidades e descobrir mais informações sobre avistamentos da corça, bem como a respeito de pessoas que estiveram neste fim de mundo procurando pelo animal. Para obter informações, é necessário passar em um teste social adequado à cena."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "A corça-de-fogo vive perto do topo da montanha mais alta e íngreme. Chegar até lá requer habilidades de escalada, acrobacia e um sangue tão frio quanto os ventos que sopram naquelas alturas."
    },
    {
      type: "text",
      content: "Outros dois grupos estão em busca da presa. O primeiro é uma dupla de caçadoras locais, Vulpe e Loba, irmãs que cresceram na região e se apaixonaram por Nívea, amiga de infância delas e filha da líder local, mas a mãe da donzela só concordou em consentir o casamento da filha com quem trouxer o coração da corça lendária, (na verdade, a odiosa matriarca fez a “promessa” só para se livrar das duas pretendentes!)"
    },
    {
      type: "text",
      content: "O segundo grupo é liderado pelo Príncipe Áquileu, acompanhado por cavaleiros, falcoeiros e cães de caça. Sendo um bastardo recentemente instalado como senhor de seu principado, sua legitimidade tem sido questionada por rivais. Ele acredita que trazer os chifres da corça de volta para casa demonstrará ao povo que ele é digno de governar."
    },
    {
      type: "text",
      content: "Existem ainda lendas sobre os três “Guarda-caças”, espíritos que protegem os picos mais altos onde habitam os animais mais nobres e difíceis de caçar, reservados somente aos deuses da montanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "No limite"
    },
    {
      type: "text",
      content: "Para subir as montanhas em busca da corça, é preciso primeiro passar pelo fundo de uma garganta rochosa. Se o grupo não conseguiu a informação na aldeia sobre o animal, precisará repetir testes de sobrevivência até passar, para localizar esta rota. Em meio a ela, o grupo encontra uma expedição inteira com cavalos, cães e homens mortos, que despencou de um penhasco. Ainda há alguns cães vivos, enormes mastins que latem de maneira hostil. Será preciso lidar com eles para seguir caminho."
    },
    {
      type: "text",
      content: "Rampas sucessivas levam a um caminho de pastores que continua montanha acima. Tudo segue bem até que o grupo chega a uma estreita ponta de gelo. Ela é guardada por um nobre — o Príncipe Aquileu — que está em um estado quase delirante após ter perdido seus seguidores. Ele desafiará para um duelo qualquer um que queira passar, em cima da ponte escorregadia. Além disso, enquanto o confronto está acontecendo, ou quando os personagens tentam atravessar o abismo, as duas caçadoras — Vulpe e Loba — estão posicionadas em paredões de pedra opostos. Elas discutem em voz alta entre si, arriscando causar uma avalanche, enquanto atiram com seus arcos longos no nobre e nos heróis."
    },
    {
      type: "text",
      content: "Caso o grupo consiga chegar vivo ao outro lado do abismo, terá que escalar um paredão de pedra de cerca de 9 metros, com testes de escalada. Os testes podem ser repetidos, mas sem corda ou equipamento próprio, falhar significa uma queda. Cada sucesso permite ao personagem avançar verticalmente 1,5 metros no paredão."
    },
    {
      type: "text",
      content: "No topo, o grupo finalmente encontrará a formidável corça, mas se sentindo acuada, a pobre besta atacará, investindo com seus chifres. Você pode utilizar a ficha de algum grande herbívoro para o combate, mas ele ignora restrições de movimento e causa dano extra de fogo com seus chifres. Lutar num lugar tão alto requer testes de vontade contra o medo de altura e tudo se torna ainda mais desafiador pelo fato do animal precisar ser capturado vivo."
    },
    {
      type: "text",
      content: "Uma vez que o capturem, a contagem de falhas cessará. No topo da montanha, há uma trilha oculta por onde os personagens podem descer em segurança, no entanto, quando estão quase alcançando novamente a ponte de gelo, veem um trio de homens misteriosos surgirem em escarpas longínquas, tocando berrantes. O desafio dos heróis agora será atravessar a tempo a ponte de gelo sobre o abismo… antes que sejam soterrados por uma avalanche!"
    }
  ]
  },
  {
  id: "29",
  name: "General Inverno",
  theme: "Supers",
  image: "/aventuras/general-inverno.png",
  summary: "Uma maratona de TV mundana leva a uma catástrofe global: o episódio final de uma série retrô desencadeia uma queda de temperatura causada por um supersoldado depressivo, ameaçando mergulhar a Terra em uma era do gelo.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de supers — 3D&T Alpha, Mutantes & Malfeitores e qualquer outro compatível. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Maratona de aquecimento"
    },
    {
      type: "text",
      content: "Então é Natal, ou quase. Faltam alguns dias, mas além de lojas e mercados, pouca gente está se preparando para a celebração. O que mais de 13 milhões de espectadores no mundo todo aguardam mesmo é o episódio final da última temporada de Dinofamília, que vai ao ar na véspera natalina. Essa série de comédia retrô explodiu em plataformas digitais, graças a sua sátira ácida, e a ousadia de trazer de volta às telinhas os animatrônicos — marionetes mecanicamente controladas — em vez de usar computação gráfica."
    },
    {
      type: "text",
      content: "Bonecos de dinossauros? Não tinha como dar errado! O seriado virou sucesso absoluto, rendeu mais de dez temporadas e infinitos produtos. Há até mesmo bares e restaurantes aceitando reservas antecipadas para clientes que desejem assistir o desfecho de seus personagens favoritos, como se fosse a final da copa do mundo."
    },
    {
      type: "text",
      content: "Mas e a equipe de supers, protagonizada pelo grupo? Alguns heróis podem até ser imunes a balas, mas não a fenômenos culturais. Em um daqueles raríssimos momentos onde ninguém está salvando o planeta, os protagonistas marcaram de se reunir em sua base de operações, para confraternizar e fazer “maratonas de aquecimento”, até o derradeiro episódio."
    },
    {
      type: "text",
      content: "Este é o momento para perguntar se alguém não vai ao encontro social. Se não, onde esse personagem estará, e qual o motivo? Quem o controla têm autonomia para decidir os detalhes dessa cena, mas precisa ser também uma motivação “mundana”: o casamento de amigos, o dia de ficar com os filhos em casa, uma reunião importante de trabalho para o alter-ego do herói, visitar um supervilão na cadeia. E por aí vai."
    },
    {
      type: "text",
      content: "Porém, não importa onde, o finale da série — e pessoas revelando detalhes da trama desnecessariamente — são inescapáveis. A Dinofamília está passando em um telão enquanto o herói fica preso no trânsito, as crianças estão assistindo no celular, a reunião é cancelada por falta de comparecimento, o vilão tenta fugir para assistir o episódio com sua mãe que está morrendo… Quanto mais estapafúrdia e tragicômica for a situação, melhor."
    },
    {
      type: "text",
      content: "Há uma escolha a ser feita pelo grupo: os heróis realizaram as “maratonas”, reassistindo episódios antigos, ou não? Quem opta por isso, rola uma sequência de cinco testes de atributos e perícias mentais, com a dificuldade subindo a cada teste feito. Quem não faz a maratona falha automaticamente em tudo, mas deixe para anunciar as consequências ao grupo mais à frente. No máximo, a cada falha o Mestre pode dizer “ummm…” e anotar a informação enquanto dá uma risadinha maligna. O grupo também vai rir, mas de nervoso."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Fim derradeiro"
    },
    {
      type: "text",
      content: "O último episódio da Dinofamília vai ao ar. Todo o mundo assiste e fica chocado: a história termina com a queda de um meteoro. Os dinossauros protagonistas têm um lento e agonizante epílogo, trancados em casa, enquanto assistem sua civilização entrar em colapso. Toca uma música triste, créditos sobem. Há gente emocionada nas redes sociais: dizem que é a melhor série de todos os tempos. Demais espectadores se sentem completamente ultrajados pela virada de trama. Os mais fanáticos fazem campanhas contra os criadores da franquia, postando textos furiosos na internet."
    },
    {
      type: "text",
      content: "Então, algo inusitado acontece: toda a temperatura do planeta muda para 0°C — e começa a nevar. Para alguns, é efeito da “magia do Natal”. Para outros, do aquecimento global. É como se aquilo retratado na série estivesse invadindo a realidade. A temperatura continua caindo — à proporção de um grau celsius por hora. Ao chegar a –10°C o desequilíbrio causado irá se tornar permanente. Será o final não só do seriado, e sim da odisséia terrestre."
    },
    {
      type: "text",
      content: "É o efeito de algum superpoder? Sim, de fato, é isso mesmo, mas como a equipe investiga o fenômeno, fica a critério do próprio grupo. É legal haver um espaço para que jogadores criem hipóteses, ajudem cientistas ou civis, e imaginem como seus personagens se comportariam nessa situação. Contudo, independente do critério adotado, a origem do cataclisma acaba sendo descoberta: uma torre de vigia isolada."
    },
    {
      type: "text",
      content: "Se forem até o local, os personagens serão atacados por robôs, mas não são máquinas quaisquer: são animatrônicos retratando os personagens de Dinofamília. Eles estão equipados com reverberadores neurais, que, como efeito colateral, amplificam as emoções de seus oponentes: ao lutar, os heróis sofrem todas as penalidades das falhas nos testes descritas antes."
    },
    {
      type: "text",
      content: "Depois dos robôs serem vencidos, o verdadeiro vilão é revelado: um herói. Seu nome é John Drogo, supersoldado que serviu durante décadas ao exército dos Estados Unidos, patrulhando o território Alasca. Recebeu o codinome General Inverno. (Use a ficha de um vilão com poderes de gelo, mas que tenha também superforça e resistência — e represente um desafio ao grupo.)"
    },
    {
      type: "text",
      content: "John tem um sério caso de depressão climática. O fruto de uma vida de isolamento e tédio patrulhando o norte gelado e morando recluso em sua torre de vigia. A única diversão da existência dele era se refugiar no seu mundo de fantasia predileto: a Dinofamília. O fim da série, no entanto, foi demais para o ermitão. Drogo está agindo como um suicida, levando seus superpoderes até o limite. Se continuar fazendo isso, irá morrer, mas, antes, arrastará a Terra para o inferno junto com ele."
    },
    {
      type: "text",
      content: "Um inferno congelado!"
    }
  ]
  },
  {
  id: "30",
  name: "Refúgio",
  theme: "Fantasia",
  image: "/aventuras/refugio.png",
  summary: "Perdidos em um pântano de árvores petrificadas, os heróis precisam encontrar abrigo em um dos dois crânios fossilizados de um gigante bicéfalo, fugindo de uma névoa tóxica, mas confrontando os monstros que já habitam esses covis.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — Dragon Age, Tormenta20 e qualquer outro compatível. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Houve uma vez…"
    },
    {
      type: "text",
      content: "…dois gigantes chamados Ixander e Ekinander. Eram gêmeos. Partilhavam um único corpo, pois pertenciam a uma raríssima espécie de criatura colossal com duas cabeças. Um belo dia, arremessando rochas do alto de um vulcão, abateram um grifo — animal meio águia, meio leão, de carne cem por cento apreciada por esses descomunais titãs entediados."
    },
    {
      type: "text",
      content: "Discordâncias surgiram quanto ao destino da presa abatida. Ixander queria depená-la, temperá-la, empalá-la em um tronco de árvore afiado, e assá-la no topo da fenda vulcânica. Ekinander preferia comer imediatamente. A discordância reacendeu antigas mágoas entre os irmãos. Cada um deles, no controle de metade do próprio corpo, lutou contra o outro. Até que ambos morreram."
    },
    {
      type: "text",
      content: "Milhares de anos depois, um grupo de aventureiros perdidos vagando por terras ermas descobre os restos fossilizados de Ixander/Ekinander, em meio ao que se tornou um pântano de árvores petrificadas. O seu grupo! Bem a tempo! Há uma névoa sufocante tóxica emanando de fendas vulcânicas ainda existentes e ativas na região. Esse miasma letal é capaz de corroer materiais orgânicos. Em determinados horários do dia ele paira ao nível do solo, cobrindo-o completamente. Permanecer na névoa por um turno causa uma pequena quantidade de dano que não pode ser absorvida (exceto por imunidades específicas). Permanecer lá por mais do que dois turnos seguidos inutiliza um equipamento mundano carregado por cada personagem, escolhido aleatoriamente. Além disso, personagens precisam prender o fôlego em sua proximidade para não sufocar, como se estivessem debaixo d’água."
    },
    {
      type: "text",
      content: "Ficar do lado de fora é morte certa. A verdadeira escolha é em qual dos dois crânios pétreos dos gigantes procurar abrigo, barrando a entrada da névoa com rochas e entulho, até ela abaixar. O porém é que cada um desses lugares teve seu espaço interno obstruído. Comportam apenas metade dos integrantes do grupo. Acomodar mais gente do que isso impossibilita o movimento livre, impondo redutores em ataques, defesas e testes de destreza."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Dois covis"
    },
    {
      type: "text",
      content: "O crânio de Ixander é o que está mais próximo aos heróis. Uma única ação de movimento com deslocamento padrão é necessária para chegar até ele. É o covil de um astuto troll. Seu nome é Igrophinn, O Pálido. Era antes um saqueador dedicado a atacar vilarejos próximos, em busca de espólios e aldeões para devorar. Percebeu que morar no pântano, rotineiramente visitado por heróis desorientados pelos pouco confiáveis mapas da região, era bem mais vantajoso."
    },
    {
      type: "text",
      content: "A mudança significou que Igrophinn passou a viver de uma dieta mais escassa, uma vez que é vulnerável a ácido, não muito chegado em comer minerais, e ali só ocasionalmente pilha viajantes. No entanto, o que perdeu em quantidade ganhou em qualidade. Moedas de ouro e itens mágicos, fizeram-no sentir como se o seu novo lar, facilmente defensível da névoa corrosiva, fosse o covil de um dragão. Também dizem que a fome é o melhor tempero…"
    },
    {
      type: "text",
      content: "O crânio onde habita o troll é apinhado de ossadas, toda sorte de equipamentos, utensílios e pedregulhos. Além de servir para bloquear as entradas durante a subida da névoa, também tem um valor estratégico. Igrophinn tem sentidos muito apurados. Já está ciente da presença do grupo, a menos que algum personagem tome precauções para ser furtivo. Assim que o primeiro herói se aproxima de alguma cavidade do crânio, o troll se posiciona para obstruir a entrada e desfere um ataque surpresa. Além dos efeitos normais, cada um de seus ataques empurra o alvo para trás alguns espaços, caso ele falhe em um teste de força para resistir. A estratégia do troll é simples: tenta manter seus oponentes fora do crânio a maior quantidade de tempo possível, deixando que a névoa ácida faça a maior parte do trabalho de feri-los. Quando já estão bastante enfraquecidos, deixa que entrem. E inverte a lógica: impede a saída, enquanto acaba de dizimar todos com garras letais."
    },
    {
      type: "text",
      content: "Em meio a pilha de lixo do troll há espólios para ajudar a compensar os heróis por qualquer perda ocasional de equipamentos. Você pode determinar esses itens aleatoriamente com rolagens de dados, em tabelas de livros de regras. Infelizmente, esse pardieiro também é habitado por ratos atrozes. Embora não muito chegados a lutar com seres maiores do que eles, esses roedores são infestados de pulgas transmissoras de pragas. Se os personagens gastarem tempo remexendo o entulho, ou descansarem no interior do crânio, precisarão fazer testes de resistência física para evitar ficarem doentes."
    },
    {
      type: "text",
      content: "A cabeça descarnada de Ekinander é a que está mais distante do grupo. É preciso gastar ao menos dois turnos completos de deslocamento padrão para chegar até lá. Esse é o covil de um monstro repleto de tentáculos. O ser vive dentro da circunferência exata do crânio, imerso em um fosso de areia movediça."
    },
    {
      type: "text",
      content: "Isso deixa pouco espaço seguro para o grupo ocupar: as órbitas vazias ou a cavidade nasal do crânio gigantesco. Para piorar, além dos ataques normais do monstro, a cada turno os personagens precisam fazer testes para não serem puxados pelos tentáculos e cair em meio à areia, onde o monstro tentará fazer a vítima afundar. Após matar a besta, é possível escalar seu cadáver, ficando em cima dela com facilidade. Isso cancela redutores por limitação de espaço e permite ao grupo descansar dentro do crânio."
    },
    {
      type: "text",
      content: "Se ninguém visitou o outro crânio, ao baixar das brumas mortais, o grupo é atacado pelo troll que habita lá."
    },
    {
      type: "text",
      content: "No entanto, se os heróis tiverem pensamento estratégico, o combate é facilitado. Podem se abrigar no crânio onde estão e lançar projéteis e feitiços de maneira segura, sem deixar o lugar."
    },
    {
      type: "text",
      content: "O troll é grande demais para caber ali."
    }
  ]
  },
  {
  id: "31",
  name: "Sombras na rocha",
  theme: "Fantasia Sombria",
  image: "/aventuras/sombras-na-rocha.png",
  summary: "Heróis buscam crianças desaparecidas há duas décadas em uma cidadela conquistada, descobrindo um culto subterrâneo que usa as vítimas para um teatro de sombras, e são confrontados por um elemental que se autodenomina 'O Guardião'.",
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
      content: "Crianças desaparecidas"
    },
    {
      type: "text",
      content: "Há mais de duas décadas, misteriosos guerreiros conquistaram a cidadela de Altiplano. Localizada na parte mais elevada de um platô rochoso, os pastores de cabras que viviam ali tinham pouco contato com o mundo exterior. Era portanto o lugar ideal para realizar um ataque sem chamar muita atenção."
    },
    {
      type: "text",
      content: "A força invasora dizimou os habitantes locais. Todos aqueles que sobreviveram ao massacre foram obrigados a se dispersar para aldeias vizinhas, com uma exceção: as crianças com dez anos de idade ou menos. Essas ficariam para trás como reféns e seriam mortas caso alguém tentasse resgatá-las."
    },
    {
      type: "text",
      content: "Os altiplanenses em exílio tentaram obter ajuda, mas seus pedidos foram duplamente ignorados. As autoridades deram pouca importância a uma região tão periférica, enquanto caçadores de recompensas preferiram procurar oportunidades mais lucrativas do que ajudar um bando de plebeus famintos."
    },
    {
      type: "text",
      content: "Esse triste episódio é contado ao grupo de personagens jogadores por Dimitra, uma humana quarentona, humilde e hospitaleira, mas marcada pela tristeza do luto. Ela foi separada de seu filho, Calímaco, durante o fatídico evento que relata. Dimitra e outras mães e pais abordam o grupo tão logo ouvem falar de heróis chegando ao lugar onde vivem — qualquer localidade do cenário de campanha que o Mestre achar conveniente!"
    },
    {
      type: "text",
      content: "Os sobreviventes do morticínio querem que alguém vá até Altiplano descobrir o paradeiro dos filhos desaparecidos, após todos esses anos, nutrindo a esperança de que ainda estejam vivos. Não têm muito a oferecer como pagamento pela missão, além de uma modesta quantia de dinheiro: economias de uma vida inteira de trabalho."
    },
    {
      type: "text",
      content: "Caso o grupo dispense a recompensa, mas aceite partir nessa busca mesmo assim, certifique-se de retribuir o comportamento altruísta. Seja com pontos de experiência ou outro tipo bonificação."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A caverna"
    },
    {
      type: "text",
      content: "É preciso gastar algumas horas em trilhas montanhosas para chegar a Altiplano, mas não há nenhuma ameaça no caminho. Quando o grupo finalmente chega à cidadela, descobre que já não resta nada ali, além de muros e cinzas. No entanto, existe uma caverna bastante aparente ao longe, acessível por um caminho escarpado. Ter acesso a essa gruta exige três testes físicos para escalar, que causam dano por escoriações em caso de falha. Ao terminar o percurso, é preciso passar em testes ligados à resistência, para não ficar fatigado."
    },
    {
      type: "text",
      content: "A entrada da caverna é guardada por quatro guerreiros mudos e de idade avançada — use fichas de soldados comuns. Eles arremessam pedras em personagens que estejam escalando. Quando alguém alcança a entrada da caverna, os veteranos movem-se e passam a lutar usando escudos retangulares e lanças. Enquanto esses oponentes estiverem adjacentes uns aos outros, todo ataque feito contra um deles provoca um contra-ataque imediato do guerreiro ao lado. Contudo, perdem essa habilidade se em algum momento quebrarem sua formação militar."
    },
    {
      type: "text",
      content: "É possível entrar na caverna, mas há pouca luz no interior. O chão dela é inclinado e lodoso. Descer por essa rampa natural sem usar uma corda exige novos testes físicos, com o risco de sofrer mais ferimentos em caso de falha. O declive leva a uma enorme câmara subterrânea, contendo tendas e um poço de água. Esse acampamento tem sinais recentes de uso, mas está deserto. Alguns objetos comuns podem ser encontrados nele, nada de muito valor. Peça para cada membro do grupo rolar testes ligados a percepção, caso esteja procurando por algo específico. Quanto mais valioso o item, maior a dificuldade do teste."
    },
    {
      type: "text",
      content: "Sons abafados podem ser ouvidos ecoando, vindos de um túnel ao norte. No fim da passagem, há um braseiro contendo um imenso fogaréu. Sua fumaça sobe por uma fresta no teto do labirinto subterrâneo, que funciona como uma espécie de chaminé. Ao redor do fogo, várias pessoas exibem figuras de animais e objetos, enquanto imitam vozes, cantam músicas e encenam diversos papéis. Agem como uma mistura de culto e trupe artística, projetando um teatro de sombras no paredão de rocha além do abismo. Todas as histórias apresentadas parecem terminar com algum tipo de moral, algumas tão rígidas que chegam a ser cruéis."
    },
    {
      type: "text",
      content: "A trupe imediatamente percebe que está sendo observada, grita e ataca o grupo, invocando sombras mágicas. Essas trevas vivas podem tomar a forma de quaisquer monstros ou criaturas — de preferência, um desafio adequado às capacidades dos heróis. Os conjuradores das sombras morrem assim que elas são derrotadas, mas então algo acontece."
    },
    {
      type: "text",
      content: "O próprio fogaréu cria vida e ataca — use a ficha de um elemental do fogo, ou qualquer outro ser flamejante similar. A criatura apresenta a si mesma como “O Guardião”. Diz ser um “filho do sol”, uma entidade benigna treinada desde o nascimento para governar os mortais, lhes ensinar a verdade e a justiça. Essa entidade desperta a impressão de ser muito antiga, e sua visão fanática do que é o “bem” parece ser claramente deturpada."
    },
    {
      type: "text",
      content: "Quando o vilão é derrotado, o grupo encontra sem dificuldade uma passagem secreta que leva ao fundo do abismo. Lá estão Calímaco e as outras crianças desaparecidas, agora jovens adultos. Estão acorrentadas à parede. Seus corpos cresceram atrofiados e deformados. Tudo o que conhecem do mundo é o teatro de sombras que era projetado na rocha, além das pessoas que os alimentavam, agora mortas. Esses prisioneiros conseguem se comunicar com o grupo, mas seus olhos doem quando expostos à luz solar."
    },
    {
      type: "text",
      content: "Eles tratam seus salvadores com desconfiança e hostilidade. Recusam-se a sair da caverna, e entram em completo desespero quando percebem que o teatro das sombras cessou e seu “deus” está morto."
    },
    {
      type: "text",
      content: "Como os jogadores lidam com a situação?"
    }
  ]
  },
  {
  id: "32",
  name: "Música e Mortos",
  theme: "Horror",
  image: "/aventuras/musica-e-mortos.png",
  summary: "Uma equipe de detetives paranormais investiga uma onda de acidentes em uma cidade serrana, descobrindo que um carro amaldiçoado, habitado pelos fantasmas de uma banda, assombra a região após um ritual acidental de vingança.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de horror — Ordem Sobrenatural, Rastro de Cthulhu e qualquer outro compatível com esses gêneros. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Som… testando…"
    },
    {
      type: "text",
      content: "Poucos lembram do conjunto Vacaville. Um grupo de artistas, que cansados de trabalhar em estúdio, decidiram arriscar carreira tocando no circuito alternativo. Emplacaram músicas em rádios pequenas, abriram o espetáculo de bandas conhecidas, e até mesmo foram a um famoso programa de auditório, mas acabaram esquecidos. Terminaram acompanhando sertanejos, blocos de carnaval, corais, apresentando-se em bordéis, e qualquer outro lugar que os ajudasse a pagar despesas."
    },
    {
      type: "text",
      content: "Os músicos viajavam em um carro Corcel 73’ reformado. Muitas vezes o único teto sobre suas cabeças. Chegaram a gravar o álbum ARLEQUIM!!, lançado na forma de CD em 2008, contendo canções próprias e alguns covers, mas as vendas foram medíocres. Como afirmou o crítico Bob Beato: “Sabem tocar, não sabem decidir o que querem tocar!”."
    },
    {
      type: "text",
      content: "A Vacaville era composta por integrantes de repertórios bem diversos, que se juntaram por conveniência. O baterista Pedro Meirão, 26 anos, era apreciador de rock progressivo e um musicista diplomado. A vocalista Brena Simoni de 23 era amadora entusiasta de blues e MPB. André Heffmann, o baixista de 21 anos, era um emo, fã de nu metal e hardcore paulista. Já o guitarrista Luca Guazolli, de 18, era sobrinho do dono do estúdio onde se conheceram, um auto-intitulado nerd, e só consumia trilhas sonoras de games, antes da família lhe arranjar um emprego."
    },
    {
      type: "text",
      content: "Os músicos são mais conhecidos hoje pelo seu fim trágico e irônico. Em 2009, após se apresentarem em um bar da cidade serrana de Nova Arvoredo, decidiram seguir viagem durante a madrugada, imediatamente após o evento. O carro da banda chocou-se contra uma vaca, que dormia no asfalto para se aquecer do frio de altitude. Todos morreram instantaneamente."
    },
    {
      type: "text",
      content: "Houve um dedo do sobrenatural nesse desfecho. O que apressou a saída dos músicos da pousadinha onde estavam hospedados foi uma briga, ocorrida quando voltavam da apresentação no bar. Luca tinha uma paixão não correspondida por Brena, que, por sua vez, tinha um caso com André. Enciumado, o tecladista acabou se embebedando e, num acesso de raiva, destruiu o quarto onde estavam hospedados."
    },
    {
      type: "text",
      content: "Goel dos Santos, o dono da pousada, ficou furioso. Quando a banda alegou não ter dinheiro para pagar pelos danos, “Seu” Goel poderia ter procurado um advogado, mas sendo um fanático — e ignorante dos dogmas da sua própria religião, o catolicismo — resolveu recorrer a uma entidade mais eficiente do que a justiça dos mortais: Deus. Quando a banda partiu, orou com todas as forças, pedindo que os jovens recebessem a devida retribuição divina e fossem para o inferno. Seu desejo se realizou."
    },
    {
      type: "text",
      content: "Na realidade, o albergueiro tem poderes paranormais desde criança, que garantem ligação com o oculto. Realizou instintivamente um ritual não com “Deus”, e sim com uma entidade maléfica, embora seja incapaz de perceber isso."
    },
    {
      type: "text",
      content: "O corcel da Vacaville continua na estrada. Desde o acidente, assombra rodovias da cidadezinha, sendo responsável por atropelamentos e acidentes de trânsito macabros."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "1,2,3… E vamos nós!"
    },
    {
      type: "text",
      content: "Os jogadores pertencem a uma agência de detetives paranormais, contratada por hoteleiros. As mortes bizarras em Nova Arvoredo continuam sem explicação, e se tornaram frequentes, afastando turistas que antes se sentiam atraídos pelo mistério. É preciso resolver o problema. Um translado foi colocado à disposição para levar o time de investigadores diretamente de um aeroporto à serra, e eles foram orientados a agir de maneira discreta."
    },
    {
      type: "text",
      content: "Durante o trajeto, o motorista da condução encontra dificuldades por causa do excesso de neblina. É quando o corcel maldito surge das brumas e abalroa a traseira do veículo. É possível ver que não havia ninguém ao volante! O grupo pode tentar destruir o carro fantasma, se tiver poder de fogo para isso, ou tentar tirá-lo da estrada. Se passar mais de duas rodadas sem conseguir, é abalroado mais uma vez e jogado morro abaixo, tomando uma bela quantidade de dano. Se o carro for destruído, desaparece na cerração."
    },
    {
      type: "text",
      content: "O que acontece a seguir, depende dos jogadores. Existem poucos locais de interesse na cidade, como a biblioteca ou a delegacia, onde podem ficar sabendo da história do acidente da Vacaville. Pesquisar na biblioteca (ou na internet) dá acesso aos nomes dos músicos, e também é possível baixar seu álbum. Um teste adequado permite notar que a maioria das músicas nele são originais, mas contém quatro covers de estilos bem diferentes entre si: Inevitável — do CPM 22, Como nossos pais — do Belchior, Lost for words — do Pink Floyd, e Escape from the city — da trilha de Sonic Adventure 2."
    },
    {
      type: "text",
      content: "Há também a pousada onde os músicos foram vistos pela última vez. Seu Goel recebe a equipe. Se questionado sobre a história, conta tudo sem omitir detalhes: para ele o corcel é um instrumento de Deus, enviado para punir pecadores!"
    },
    {
      type: "text",
      content: "Nova Arvoredo está sempre envolta em névoa, e andar por suas estradas provoca ataques do carro fantasma. Destruí-lo não adianta: sempre ressurge inteiro no dia seguinte. Tão pouco adianta matar Seu Goel. A única maneira de deter o corcel de vez é entrar dentro dele, onde é possível enxergar os fantasmas dos quatro músicos. Estão sempre com a expressão de quem acabou de brigar, e nunca falam nada."
    },
    {
      type: "text",
      content: "Mas se alguém conseguir tocar música no carro, de um gênero capaz de agradar um dos fantasmas, o espírito percebe que está morto e desaparece. O corcel sofre dano permanente, sumindo na bruma. Retorna apenas ao próximo anoitecer."
    },
    {
      type: "text",
      content: "É preciso repetir esse “ritual” até libertar cada músico. Ou usar a criatividade e encontrar uma canção que una todas as tribos…"
    }
  ]
  },
  {
  id: "33",
  name: "É comum",
  theme: "Mistério Sobrenatural",
  image: "/aventuras/e-comum.jpeg",
  summary: "Heróis mercenários aceitam uma missão simples de escolta para uma carga perigosa, mas se deparam com um ataque brutal de um caçador de recompensas que, na verdade, é o lendário Drácula, determinado a recuperar seu castelo.",
  sections: [
    {
      type: "text",
      content: "Inspirada nos seinen — quadrinhos japoneses voltados ao público mais adulto — esta mini-aventura foi pensada para sistemas como Karyu Densetsu e 3DeT Victory! É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou o início de uma nova campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "MAIS UM TRABALHO"
    },
    {
      type: "text",
      content: "Assalariados. Colarinhos azuis e brancos. Freelancers. Heróis da classe operária. Prestadores de serviços. Ronins urbanos. Trabalhadores autônomos."
    },
    {
      type: "text",
      content: "Independente do título, mesmo em um mundo repleto de maravilhas mágicas, e seres superpoderosos, as pessoas ainda precisam trabalhar para sobreviver, protagonistas desta história não são exceção. Embora sejam androides, alienígenas, magos e outros prodígios, a boa e velha necessidade os levou a topar um bico."
    },
    {
      type: "text",
      content: "A tarefa foi encomendada pela Silverlining EXPO, empresa de transporte especializada em cargas perigosas. Antes da missão, cada personagem precisa determinar seus motivos para ter se enfiado na missão (informações que não precisam compartilhar com o restante do grupo). A história fica ainda mais saborosa se os personagens forem apresentados como mercenários comuns, mesmo que, na verdade, estejam disfarçados ou sob o efeito de ilusões."
    },
    {
      type: "text",
      content: "O trabalho é simples: encontrar-se no cais de uma grande cidade pela manhã com quem irá coordenar sua equipe. Trata-se de uma senhorinha que se apresenta como Alaska Jane, a Caminhoneira do Gelo, pilota de fuga famosa por entregar cargas perigosas em meio a nevascas no norte da América e nos países escandinavos, sempre acompanhada por seu fiel gato de estimação. Caçadores de recompensa ou viciados em reality shows obscuros talvez tenham ouvido falar dela, mas é improvável!"
    },
    {
      type: "text",
      content: "Não há desafios imediatos. É preciso ajudar um navio a descarregar três contêineres metálicos enormes. A carga é sigilosa e os recipientes estão lacrados. Curiosos precisam passar por 3 testes difíceis: arrombar os contêineres (força bruta), desativar os sistemas de segurança (tecnologia) e fazê-lo discretamente (furtividade). Dentro, há apenas uma remessa de blocos de pedra numerados: é um antigo castelo europeu desmontado para ser remontado em outro lugar. Uma excentricidade de algum ricaço, provavelmente."
    },
    {
      type: "text",
      content: "A segunda parte do trabalho envolve escoltar as carretas pela cidade e rodovias até a propriedade onde a carga será entregue. O desafio é atravessar a \"linha de fogo\" uma perigosa rota controlada pela quadrilha conhecida como Sultões do Inferno. A presença do grupo é mais uma precaução, pois com uma escolta tão visível, espera-se que sequer apareçam. Contudo, não só aparecerão, como o farão em circunstâncias inusitadas."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "LONE WOLF"
    },
    {
      type: "text",
      content: "Incluindo Alaska e outros dois motoristas pouco falantes, há 3 assentos de passageiro disponíveis em cada carreta. Quem não estiver em um precisará ir pendurado em compartimentos externos “na boleia”."
    },
    {
      type: "text",
      content: "A viagem segue bem até chegar à tal rota. Com o sol da manhã já alto, sinais de rádio e celular ficam embaralhados. O comboio é subitamente forçado a parar devido à presença da polícia."
    },
    {
      type: "text",
      content: "A cena a seguir, em negrito, tem a função de introduzir o vilão e é carregada no horror gráfico. Se você ou seu grupo preferirem, você pode apenas dizer que “um massacre de violência indescritível aconteceu com os Sultões do Inferno na beira da estrada”."
    },
    {
      type: "text",
      content: "Logo fica claro que não estão ali pelos personagens, e sim por causa dos Sultões do Inferno que foram empalados ainda vivos em estacas ladeando a rodovia."
    },
    {
      type: "text",
      content: "Aqui cada membro do grupo precisa passar por testes para não ficar abalado, perdendo sua próxima ação em caso de falha. Neste momento um caçador de recompensas aproveita para atacar. Ele surge em alta velocidade em uma moto, rosto escondido por um capacete, trajando um macacão com detalhes de dragões. Mercenários de carreira já podem ter ouvido falar dele: este é Lone Wolf, mestre assassino e especialista em armas brancas."
    },
    {
      type: "text",
      content: "Hora de rolar a iniciativa. Para o vilão utilize a ficha de um combatente corpo-a-corpo desafiador para o nível de poder da equipe, mas com duas modificações notáveis: ele adquire os poderes de quem o ataca, ficando imune a ações desse oponente até a próxima rodada, e se cura ao causar dano com garras ou sua espada curva (uma kilij)."
    },
    {
      type: "text",
      content: "O inimigo alveja motoristas e guardas, tentando isolá-los e eliminá-los um a um. Se for cercado, derrotado ou se os caminhões se mantiverem em movimento por mais de 5 rodadas, chegando até uma ponte, ele se regenera e transforma-se em lobo, mergulhando na sombra mais próxima e desaparecendo."
    },
    {
      type: "text",
      content: "Personagens versados em ocultismo podem fazer um teste difícil (mediano se souberem sobre o carregamento) para identificar a origem dos poderes do inimigo. Falhar no teste leva a um equívoco, o fazendo pensar que é um lobisomem — vulnerável a prata e beladona. Passar revela que estão enfrentando um… vampiro!"
    },
    {
      type: "text",
      content: "Este é o próprio Vlad Tepes, mais conhecido como Drácula. Como no famoso romance, ele não é destruído pelo sol, apenas enfraquecido e tem a capacidade de assumir forma lupina. No lugar de sangue, porém, aprendeu a se alimentar de energia vital. Drácula ressurge em seu castelo a cada 100 anos, e busca agora recuperar sua fortaleza, roubada por um governo que deseja utilizá-la num ritual para acorrentar a alma do vampiro, transformando-o em uma arma a seu dispor."
    },
    {
      type: "text",
      content: "Seu próximo ataque ao comboio será à noite, em meio à névoa mágica. O amaldiçoado assume a forma de lobo e se atira na frente de uma das carretas, tentando tirá-la da estrada; regenerando-se e mudando de forma, logo em seguida. “Wolf” é mais poderoso à noite, mas tem fraquezas comuns a seu tipo de morto-vivo: medo de cruzes, alho, vulnerabilidade ao fogo, água benta e imobilização com uma estaca plantada no coração."
    },
    {
      type: "text",
      content: "O grupo precisará pensar em conjunto e trabalhar como uma equipe se quiser vencê-lo."
    },
    {
      type: "text",
      content: "Caso o grupo complete a missão, receberá um generoso pagamento e abrirá portas para futuros empregos, como convites para mais missões ou até mesmo a chance de participar de um torneio de artes marciais."
    },
    {
      type: "text",
      content: "Nada mais natural."
    }
  ]
  },
  {
  id: "34",
  name: "A Outra Ilha",
  theme: "Fantasia",
  image: "/aventuras/a-outra-ilha.png",
  summary: "Capturados e exilados por teletransporte para uma ilha remota amaldiçoada, os heróis devem planejar uma fuga audaciosa do arquipélago, superando guardas, o Leviatã e, finalmente, confrontando o mago responsável por seu aprisionamento.",
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
      content: "EXÍLIO"
    },
    {
      type: "text",
      content: "Após uma longa batalha contra um inimigo poderoso (sim, é genérico de propósito!), os personagens dos jogadores foram capturados. Ao invés de executá-los e transformá-los em mártires, o vilão frio e calculista ordenou que fossem exilados por meio de um feitiço de teletransporte, realizado por seu mago mais leal."
    },
    {
      type: "text",
      content: "Eles foram enviados para uma aldeia remota e sem nome, longe da capital e das rotas principais. O lugarejo, no começo, parece comum, semelhante à região de onde vieram. No entanto, é bastante pobre e as condições de vida são precárias. Os moradores são excessivamente rústicos e medrosos. O idioma que usam parece incompreensível. Passar em um teste de percepção difícil revela que, na verdade, essas pessoas falam a mesma língua que os heróis e foram vítimas de traumas profundos."
    },
    {
      type: "text",
      content: "Embora livres para andar durante o dia, os heróis não têm acesso a seus equipamentos e são constantemente vigiados por guardas hostis ($3d6+4$ ao todo, use fichas de combatentes comuns), que servem ao vilão. Magias de fuga, como teletransporte ou voo, não funcionam, pois a terra está amaldiçoada para impedir tais feitiços. Cada personagem foi designado a uma pequena casa simples e isolada na aldeia, e à noite, há um toque de recolher, mas a vigilância não é muito rígida, se limitando aos muros e uma única torre de vigia."
    },
    {
      type: "text",
      content: "Nada de especial acontece e presume-se que em algum momento os heróis tentem escapar. Ao passar pelas sentinelas e deixar os limites da aldeia, em vez de florestas ou montanhas familiares, eles ouvem o som do mar. De repente, ao sair de uma área de mato fechado, encontram um penhasco íngreme. O vento frio traz o cheiro de maresia, e as ondas se chocam violentamente contra as rochas abaixo. O grupo descobre que está em uma ILHA! Aqueles com conhecimento arcano percebem que esse pedaço de terra foi magicamente arrancado do continente e transportado para o meio do oceano."
    },
    {
      type: "text",
      content: "Quando olham para o horizonte, os heróis avistam outra ilha distante, mas esse raio de esperança logo é ofuscado pela visão de uma serpente marinha colossal emergindo das águas agitadas. Se ainda houver uma sentinela viva, ela encontra os heróis e, ao invés de puni-los pela tentativa de fuga, diz com certa empatia:\"O Leviatã não deixa ninguém entrar… nem sair!\""
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "JORNADA AO HORIZONTE"
    },
    {
      type: "text",
      content: "Nenhum dos NPCs da aldeia sabe o que há na ilha vizinha, mas chegar até lá é a melhor chance de escapar. Contudo, construir uma balsa para atravessar as águas turbulentas (em segredo, se os heróis ainda estão sendo vigiados) e evitar a serpente não é fácil. Alguns desafios que podem surgir são:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "• Construção: Usando os recursos disponíveis na aldeia e nas florestas ao redor, o grupo precisa montar uma balsa resistente. Eles têm que coletar madeira, cordas e ferramentas básicas sem chamar atenção dos guardas ou aldeões. Testes de habilidades manuais (ou similares) são importantes aqui, e falhas podem atrasar o projeto ou gerar suspeitas."
    },
    {
      type: "text",
      content: "• Discrição: Os heróis precisam ser furtivos, evitando a vigilância. Testes de furtividade ou enganação são necessários enquanto se comunicam e fazem planos."
    },
    {
      type: "text",
      content: "• Navegação: Antes de partir, podem estudar as marés e os ventos. Testes de conhecimento ou sobrevivência ajudam a traçar a melhor rota, diminuindo as chances de cruzar com a serpente."
    },
    {
      type: "text",
      content: "• Fuga: Mesmo com a balsa, atravessar as águas é arriscado. Testes de navegação e reflexos são cruciais para evitar chamar a atenção da serpente guardiã. Uma falha resulta em um confronto (use estatísticas de um monstro marinho poderoso)."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Com sorte, o grupo alcança a outra ilha. É uma formação vulcânica rochosa, com poucas plantas e lagartos inofensivos. O único marco visível é o próprio vulcão, agora adormecido e com trilhas fáceis de subir. Na segunda ilha é possível usar magia normalmente, mas caso algum dos personagens seja capaz de usá-la para fugir, o mago na cabana virá confrontá-los assim que deixarem o mar (veja adiante). No topo do vulcão, ao lado da cratera, há uma cabana. Ao entrar, os heróis são surpreendidos por uma sala de tortura com equipamentos indescritíveis, dignos de um inquisidor. Lá, são recebidos por um mago que reconhecem como o mesmo que os enviou à ilha. Com uma risada doentia, ele diz:\"Finalmente! Achei que nunca iam chegar. Eu estava mesmo precisando de mais aldeões… \""
    },
    {
      type: "text",
      content: "O mago então ataca os heróis (use as estatísticas de um inimigo capaz de lançar magias). Mesmo derrotando o mago, isso não resolve o problema. A menos que o capturem e o forcem a usar magia para tirá-los da prisão marítima, os personagens continuam presos."
    },
    {
      type: "text",
      content: "Além disso, nenhuma das duas ilhas tem recursos abundantes o suficiente para sustentar sua população. Sem o mago, haverá menos recursos ainda. A única opção de fuga nesse caso será construir uma embarcação capaz de alcançar o continente distante, mas a longa jornada será assombrada pela escassez de suprimentos."
    },
    {
      type: "text",
      content: "E o que os heróis farão com o restante das pessoas presas no estranho arquipélago? Irão levá-las consigo ou abandoná-las à própria sorte?"
    }
  ]
  },
  {
  id: "35",
  name: "A Segunda Cela",
  theme: "Aventura Espacial",
  image: "/aventuras/a-segunda-cela.png",
  summary: "Prisioneiros em um asteroide-prisão são forçados por uma IA a identificar o líder secreto de uma facção rebelde antes de uma rebelião, navegando pelas regras da prisão e as táticas de seus colegas detentos.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de aventura espacial — como The Expanse, e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa, ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cárcere celeste"
    },
    {
      type: "text",
      content: "Os personagens são prisioneiros cumprindo sentença — justa ou injustamente — em Sovatar IV, o infame asteroide-prisão. Eles trabalham em túneis, onde são responsáveis pela manutenção de máquinas utilizadas na extração de minerais. O trabalho é degradante. Por meio de drones armados, carcereiros-piloto obrigam todos a exercerem suas funções por longas horas, enfiados em trajes espaciais. Com a crescente automatização do trabalho, detentos são executados para liberar espaço, despovoando a prisão antes superlotada."
    },
    {
      type: "text",
      content: "A história começa com o grupo em sua cela. Em frente há outras duas, com os algarismos I e III. (O que, por lógica, torna o cubículo dos personagens o número II.) Assim que eles acordam, são abordados por Lorde Vega da primeira cela, um cyborgue usando respirador. Ele é membro do Enxame Estelar, facção presente em diversas prisões galácticas, que impõe regras de convivência: agressões entre prisioneiros são proibidas, recursos devem ser compartilhados, rebeliões ou fugas só podem ser realizadas sob ordens. E principalmente, complementa o criminoso apontando enfaticamente seu dedo em riste na direção dos personagens: “SEM DELAÇÕES!”."
    },
    {
      type: "text",
      content: "A rotina na prisão consiste em 3 turnos, sempre iguais: os prisioneiros são levados ao refeitório no 1º turno, aos túneis de trabalho no 2º e, por fim, para um breve banho de sol em uma redoma no 3º, antes de voltar para sua cela. Para cada dia de cárcere, o grupo precisa fazer testes de resistência física (para aguentar o esforço), agilidade (para evitar acidentes) e habilidades sociais (para não irritar carcereiros). Falhar em qualquer um dos testes causa dano que só pode ser recuperado fora da prisão com descanso adequado. Embora possam enfrentar ou evadir os drones, a prisão é isolada e tentar escapar sem ter informações adequadas pode se provar letal."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O sub-engenheiro"
    },
    {
      type: "text",
      content: "Logo no final do primeiro dia, o grupo é levado para falar com um drone que representa o P.A.N.Ó.P.T.I.C.O (Penitenciária Auto Neural Otimizada Para Transformação de Indivíduos em Centros Orbitais), a inteligência artificial que funciona como figura de maior autoridade no asteroide-prisão. A IA informa que em 7 dias ocorrerá uma rebelião organizada pelo Enxame, com o objetivo de permitir a fuga de um pequeno grupo de prisioneiros em uma nave. Embora já esteja ciente do plano, quer aproveitar a oportunidade para identificar um dos líderes secretos da facção — apelidado de “sub-engenheiro” — presente entre os encarcerados das celas I e III."
    },
    {
      type: "text",
      content: "No entanto, como não é capaz de \"ler\" adequadamente humanoides, depende de infiltrados para obter informações mais precisas, e contornar as próprias diretrizes de sua programação. Se o grupo cumprir o trabalho, a IA irá absolvê-los de suas sentenças, e deixa bem claro: não é uma proposta que possam recusar."
    },
    {
      type: "text",
      content: "Existem duas maneiras principais de identificar o sub. A primeira é solicitar a ajuda de Vega e se juntar ao Enxame. Para se tornar um membro, ele exige que o grupo se esgueire durante o trabalho e acesse uma cabine de comunicações. Lá deve aplicar um golpe remotamente, passando em um teste social, e convencer alguém a transferir dinheiro para a conta da facção — o grupo pode criar conjuntamente o perfil do alvo. Se a empreitada for bem-sucedida, os personagens são aceitos na facção e recebem $1d4+1$ armas clandestinas (e um manual de técnicas de guerrilha!). A identidade do sub será revelada a eles por Vega no penúltimo dia."
    },
    {
      type: "text",
      content: "A outra maneira é conversar com demais prisioneiros em pontos-cegos da vigilância, para obter pistas. Os prisioneiros da Cela I ficam acessíveis na breve ida ao refeitório. Os da Cela III durante o “banho de sol”. Se o grupo delatar o prisioneiro errado, a IA ordenará que sejam executados por drones. Por outro lado, enxamistas de ambas as celas atacam os personagens durante a rebelião, caso tenham sido traídos. Em qualquer uma destas situações, a única maneira de sobreviver é encontrar e desativar o raio de tração que prende veículos ao hangar local, antes de fugir em uma nave."
    },
    {
      type: "text",
      content: "Além de Vega, os NPC's prisioneiros presentes em cada cela podem ser criados pelo Mestre, mas aqui estão sugestões:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "• Cela I. Merkx. Piloto e contrabandista meio surtado, acredita que alguém da Cela III é o sub, mas é puro achismo e paranoia. Protea. Ativista política curiosa, especula abertamente sobre a identidade do sub, acredita que não está em nenhuma das celas, pois seria muito arriscado. Ray. Cientista maluco preso por experimentos ilegais. Duvida que Lorde Vega seja o sub-engenheiro devido à sua condição física debilitada."
    },
    {
      type: "text",
      content: "• Cela III. Ulix. Ex-soldado astuto, tem uma tatuagem que prova que não é o sub, apesar de ter todos os requisitos para tal. Zero. Hacker jovem e idealista demais para ser o sub-engenheiro. Irmãos Rogers. Quadrilha de clones especializados em jetpacks e armas lasers, presos em um ataque a um rancho lunar. Todos eles clamam ser “o irmão mais velho”. Estes brucutus são claramente burros demais para comandar qualquer pessoa!"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Resolução: O sub-engenheiro não está em nenhuma cela. É um ser diminuto apelidado “Cabeça” que vive escondido dentro de um dos drones pilotados a distância pelos carcereiros. Caso o grupo tenha se aliado à facção, é escolhido pelo sub para fugir na nave, mas isto tem um preço. Literal. Uma vez em liberdade, os personagens são abordados por integrantes do Enxame Estelar. São informados que, a partir de agora, terão que contribuir com recursos mensalmente para a facção e realizar novas missões no futuro. Os irmãos que estão do lado de fora precisam ajudar aqueles que permanecem do lado de dentro."
    }
  ]
  },
  {
  id: "36",
  name: "Língua Morta",
  theme: "Fantasia",
  image: "/aventuras/lingua-morta.png",
  summary: "Heróis enfrentam um demônio e são contratados para caçar o 'bruxo' Língua Morta. Descobrem que ele é o último de um povo amaldiçoado, cuja língua invoca demônios, e agora precisa de ajuda para testar as últimas palavras proibidas.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — como A Lenda de Ghanor, Tormenta20 e quaisquer outros sistemas compatíveis. É uma história flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "É O DIABO!"
    },
    {
      type: "text",
      content: "Claro, não é \"o\" diabo, já que a maioria dos jogos sequer segue a mitologia cristã e sim suas próprias mitologias. Na verdade, o primeiro inimigo que os heróis enfrentam nesta história sequer precisa ser um demônio típico da fantasia medieval. A ficha de qualquer tipo de monstro, seja uma entidade cósmica ou mesmo um feroz espírito elemental, pode servir como desafio."
    },
    {
      type: "text",
      content: "Porém, para tornar tudo mais impactante, vamos imaginar a figura clássica do diabão: um ser parecido com um gigante vermelho de rosto horrendo, dois chifres enormes, asas de morcego e longa cauda. Sua língua é bifurcada, ele cospe fogo e cheira a enxofre. Visualizou?"
    },
    {
      type: "text",
      content: "É isto que os personagens dos jogadores enxergam, enquanto estão viajando por uma estrada de fazenda e veem camponeses apavorados correndo na direção oposta, gritando: “Estamos sendo atacados! O diabo… O DIABO TOMOU NOSSA ALDEIA!”. Logo à frente veem a terrível criatura empunhando uma enorme maça, matando e destruindo tudo ao seu redor."
    },
    {
      type: "text",
      content: "Pois é. Hora de rolar a iniciativa (e fazer testes para resistir ao medo natural que a criatura causa). Não é possível se comunicar com o demônio, pois o ser maligno não tem o mínimo interesse nisso. No entanto, se houver um clérigo no grupo, ele pode realizar testes ligados a conhecimento religioso por $1d4$ rodadas. Se passar em todos, além de reconhecer que a criatura foi invocada por um ritual, poderá exorcizá-la de volta ao seu mundo de origem."
    },
    {
      type: "text",
      content: "Depois de salvar a vila, ao conversar com os habitantes, todos apontam um único suspeito pela invocação. O terrível bruxo conhecido como Língua Morta. Um homem mudo que veio de uma terra distante e foi o responsável por um ataque semelhante, dez anos atrás. Desde então, este cultista fugiu para um bosque próximo e, supostamente, tem vivido lá desde então. Toda a aldeia oferece aos aventureiros uma gorda recompensa por sua cabeça."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A ORIGEM “DO MAL”"
    },
    {
      type: "text",
      content: "Na realidade, o forasteiro mudo não é bruxo nem mudo. Seu nome de nascença é Lorem, embora, como o afirma se lhe perguntarem, ele gosta do apelido Língua Morta. De todo modo, não pode mais usar seu nome, por motivos que logo todos entenderão."
    },
    {
      type: "text",
      content: "É um dos últimos sobreviventes dos Uterques, um povo antigo e soberbo que vivia blasfemando contra os deuses. Um século atrás, cansando-se daquilo que via como uma insolência imperdoável, uma divindade maligna amaldiçoou seu idioma. A partir daquele momento, 1001 termos escolhidos aleatoriamente, palavras que iam das mais comuns e corriqueiras às mais obscuras, passariam a invocar poderosos demônios destrutivos. De um dia para o outro, o Império Uterque caiu vítima da enorme devastação causada por hordas demoníacas. Embora os diabos tenham sido vencidos por paladinos, esta civilização nunca mais se recuperou. Os poucos sobreviventes pararam de falar ou simplesmente adotaram outras línguas."
    },
    {
      type: "text",
      content: "Hoje, Língua Morta vive pacificamente como caçador e pescador em meio ao bosque com a camponesa Fringilla, sua amada esposa, que lhe ensinou o próprio idioma, e teve com o mateiro um lindo casal de filhos, os gêmeos Mauris e Alliqua. A devastação de uma década atrás foi causada quando lutava contra um demônio que o perseguia por todo lugar, mas o ataque mais recente foi acidental. Estava consertando o teto de sua cabana quando, ao martelar o dedo, exclamou um velho xingamento em sua língua mãe que, infelizmente, estava na lista das palavras amaldiçoadas ainda não testadas!"
    },
    {
      type: "text",
      content: "Se o grupo for receptivo à história, o homem apanha um pesado livro com capa de couro e páginas amareladas de cima de uma escrivaninha e explica que se trata do “Índice das Palavras Proibidas” o fruto de uma vida inteira de trabalho. Nele catalogou todas as palavras em uterqui que invocam demônios. Isto é, quase todas… há quatro palavras que ainda não testou, as últimas. Língua já se aposentou da sua vida de caçador de demônios, é pai de família, e já não pode mais se arriscar a proferi-las."
    },
    {
      type: "text",
      content: "Mas os heróis podem! Caso aceitem a tarefa de bom grado e desistam da recompensa dada pelos aldeões, ele promete guiar o grupo até a antiga sala do tesouro do Rei dos Uterques, que conhece como a palma da mão, pois era o tesoureiro. Língua Morta entrega ao grupo algumas moedas antigas de ouro como prova disso."
    },
    {
      type: "text",
      content: "Se o grupo aceitar a oferta — quando quiser e se sentir preparado — pode proferir as tais palavras. Elas são: donec (obrigado), hendrerit (de nada), ligula (com licença) e o’modo (por favor)."
    },
    {
      type: "text",
      content: "O jogador cujo personagem realizou tal ação, ao fazê-la, deverá atirar uma moeda ao ar (ou rolar $1d6$). Se ela cair com a face voltada para cima (ou se o resultado for ímpar no $d6$), uma nova criatura é invocada e imediatamente ataca o grupo. Ao conseguir verificar todas as palavras, informando quais invocam demônios ou não, o caçador agradece emocionado e as risca do livro, com uma pena mágica confeccionada especificamente para este fim, apagando-as para sempre das memórias de todos."
    },
    {
      type: "text",
      content: "É quando Língua Morta confessará ter mentido sobre conhecer a localização de tesouros. Ele tem, entretanto, uma oferta igualmente valiosa: explica que o grupo pode escoltá-lo até a capital do reino onde existe uma grande biblioteca. O alto sacerdote do lugar, que também pertence a seu seu povo, pediu há muito tempo que ele compilasse um dicionário uterque apenas com palavras seguras. Agora que a obra está completa, ele oferecerá valiosos objetos encantados em troca de uma cópia do índice. Mais do que isso, outros uterques poderão novamente ensinar o idioma a seus filhos, preservando assim uma cultura milenar."
    },
    {
      type: "text",
      content: "Desta vez, Língua Morta fala a verdade, mas será que os aventureiros confiarão em sua palavra mais uma vez?"
    }
  ]
  },
  {
  id: "37",
  name: "Cadê Nosso Dinheiro?",
  theme: "Fantasia",
  image: "/aventuras/cade-nosso-dinheiro.png",
  summary: "Após vencer um necromante, os heróis são enrolados pela guarda real e descobrem que o Tesoureiro-Mor proibiu todos os pagamentos a aventureiros. Eles devem se infiltrar em uma festa da nobreza para forçar o pagamento, expondo uma conspiração que ameaça o reino.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — como A Lenda de Ghanor, Tormenta20 e quaisquer outros jogos compatíveis com o gênero. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou o início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Início pelo fim"
    },
    {
      type: "text",
      content: "O grupo de aventureiros acabou de cumprir uma busca, que deve ser narrada em retrospectiva — venceram um dos mais vis necromantes do reino! Para que este trabalho fosse realizado com urgência, os cofres da família real se comprometeram a pagar, do próprio bolso, uma recompensa acima do que seria oferecido para tal missão."
    },
    {
      type: "text",
      content: "A jornada em si não ofereceu muitos espólios. Cada participante pode ajudar a estabelecer o que aconteceu na aventura. Em seu turno, diz algo que seu personagem fez e um revés sofrido. “A minha maga enfrentou o necromante num duelo e triunfou, mas a energia das trevas deixou seus cabelos completamente brancos!”. Ou “Meu ladino encontrou um fabuloso tesouro no covil do vilão, mas foi obrigado a deixar tudo para trás quando o teto começou a desabar…”."
    },
    {
      type: "text",
      content: "Depois da aventura, uma caravana trouxe o grupo até a capital do reino, cada personagem é livre para agir como quiser. Ir à taverna. Visitar um templo. Comprar equipamentos. No quartel da cidade, o esforço do grupo é celebrado pelo chefe da guarda. Além da recompensa, um banquete é prometido para celebrar a grande vitória."
    },
    {
      type: "text",
      content: "Mas chega o dia e nada. Ninguém aparece para procurar os heróis. Sempre que vão ao quartel perguntar, precisam explicar de novo quem são e o que lhes é devido. E de novo. Sempre há alguma desculpa, cancelando a celebração. Adiando o pagamento. Quando o grupo se irritar e pressionar o chefe da guarda, ele revelará a verdade. O regente atual, para ganhar popularidade, se blindando contra um golpe, desceu um decreto para que vários grupos de aventureiros mercenários fossem contratados simultaneamente e os problemas mais urgentes do reino fossem resolvidos desta maneira."
    },
    {
      type: "text",
      content: "A grande enchente de elementais da água foi represada pelas Damas Rosáceas no sul! A cura da Peste das Chamas foi encontrada pelas Serpes do Nascente! Os Reis das Arenas mataram o dragão ancestral Crysanthauru. No entanto, Lorde Ichanor, o tesoureiro-mor, que ocupa o posto desde o governante anterior, proibiu qualquer pagamento de ser realizado aos heróis."
    },
    {
      type: "text",
      content: "E como controla o dinheiro, controla tudo o mais."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Pague o que deve!"
    },
    {
      type: "text",
      content: "Tentar obter o pagamento direto no palácio real (ou no castelo de Lorde Ichannor) tem pouquíssimas chances de funcionar, mas nem tudo está perdido. O chefe da guarda deixa escapar que o tesoureiro-mor estará na cidade durante a noite, atendendo à celebração do 18º inverno da filha de Lady Escalantha Davanci. A celebração acontecerá no recluso Palacete da Ilhota, localizado no Quarteirão dos Canais — bairro habitado apenas por nobres. Se, de alguma maneira, o grupo conseguiu extrair a informação do chefe da guarda de forma extremamente diplomática, ele os deixará ir. O mesmo acontece se ele tiver sido subornado."
    },
    {
      type: "text",
      content: "Caso contrário, a conversa é interrompida por $2d6+3$ guardas. O grupo pode tentar escapar, vencê-los, ou simplesmente se render. Neste último caso, para sua sorte, as prisões locais já estão sobrecarregadas com aventureiros mais poderosos (!). O grupo é trancafiado em uma simples torre, lugar relativamente fácil de fugir."
    },
    {
      type: "text",
      content: "Chegar ao Quarteirão dos Canais envolve evadir algumas patrulhas nas ruas próximas à região. Além disso, o lugar em si não tem estradas, apenas canais aquíferos — como o próprio nome já diz. Na sua região mais afastada da terra firme, praticamente no meio de um lago artificial, fica o tal Palacete da Ilha. Ele é defendido por um muro externo que forma um quadrado. O muro possui quatro metros de altura e se estende por mais três dentro do subsolo. Cada uma de suas faces é protegida por $1d4+1$ soldados humanos e um arqueiro élfico."
    },
    {
      type: "text",
      content: "Dentro do muro há um suntuoso jardim, vigiado por $2d4+2$ soldados humanos e um mago elfo. O jardim dá acesso diretamente ao salão de festas. Como chegar lá fica a critério do grupo: se esgueirar, entrar disfarçado na festa, usar magia, tomar o lugar de assalto lutando contra todas as sentinelas. Mas uma vez que cheguem a Lorde Ichannor tudo será resolvido!"
    },
    {
      type: "text",
      content: "Ele abre um grande sorriso, manda os guardas abaixarem as armas, pergunta o que está acontecendo e como pode ajudar. Parece de fato muito interessado. Se desculpa pessoalmente garantindo que tudo se trata apenas de um mal entendido. Em um gesto grandiloquente, retira de um dos dedos um anel com um diamante valioso, herança de família — legítimo — e o entrega ao grupo. A joia cobre o valor combinado, até mesmo o ultrapassa um pouco. O lorde faz um discurso apaixonado sobre a importância dos aventureiros no reino e implora para que o grupo fique na festa, como seus convidados pessoais. Fim!"
    },
    {
      type: "text",
      content: "Mas será mesmo? Na verdade, o lorde está tentando manipular os personagens. Ele tem perícias sociais elevadas. Testes opostos vencidos contra ele revelam que não está mentindo, apesar de não estar fazendo isso pela bondade do seu coração. Se além disso, alguém passar em testes ligados à nobreza, entenderá a verdade. Ou poderá deduzi-la por conta própria: a questão não é nada pessoal para Lorde Ichannor. Tudo para ele se reduz a um cálculo monetário e político. É mais conveniente não pagar nenhum grupo, então é isso que fará. No entanto, agora, confrontado com um problema, precisa controlá-lo, para não ser politicamente acuado. É mais fácil pagar um grupo só como um “cala a boca” e eliminar o problema."
    },
    {
      type: "text",
      content: "Há uma escolha a ser feita. É possível enfrentar Lorde Ichannor em sua própria arena, constranger o lorde com discursos inflamados diante dos outros nobres. Se o grupo conseguir, o tesoureiro se vê forçado a ressarcir os grupos e perdoar a todos. Se o grupo for egoísta, isso resolverá o seu problema, mas não o do reino."
    },
    {
      type: "text",
      content: "Independente da escolha, $1d4$ dias depois a capital é atacada pelo supostamente falecido dragão Crysanthaurum que — logo se descobre! — continua bem vivo. Com os fundos liberados, haverá aventureiros épicos para detê-lo. Se não, a estas alturas, enquanto o dragão arrasa a capital, o lorde já estará bem longe dela. Será que o grupo tem poder o bastante para deter um dragão venerável?"
    }
  ]
  },
  {
  id: "38",
  name: "Sereníssima",
  theme: "Terror Investigativo",
  image: "/aventuras/serenissima.jpeg",
  summary: "Uma equipe de detetives/turistas encontra-se presa em uma cidade insular que tenta esconder uma epidemia, enquanto uma entidade sobrenatural, alimentada pelo sofrimento, assume a forma de seus medos e memórias.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de terror e investigativos — como Ordem Paranormal, Rastro de Cthulhu e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa, ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Férias"
    },
    {
      type: "text",
      content: "Uma equipe de detetives do oculto aproveita seu merecido descanso, fazendo turismo em outro país após sua mais recente missão."
    },
    {
      type: "text",
      content: "Caso este seja o primeiro jogo, você pode combinar com o grupo — talvez personagens nesta história comecem mesmo sendo apenas turistas comuns, cada qual com suas próprias motivações para estar longe: um casal passando sua lua de mel, alguém lidando com o término de um relacionamento, uma influenciadora digital aproveitando a viagem para gravar alguns vídeos."
    },
    {
      type: "text",
      content: "A ação transcorre em Sereníssima, local 100% ficcional levemente inspirado na cidade italiana de Veneza, mas você pode adaptar qualquer outro canto do mundo que achar conveniente. O fato importante é que, no passado, este foi um entreposto mercantil fundado por navegadores. É um local repleto de prédios históricos, atraindo inúmeros visitantes."
    },
    {
      type: "text",
      content: "Os personagens chegaram domingo à noite no Grão Albergue, antigo hotel de luxo que conta com águas termais, mas já decadente e — como mais tarde descobrirão — dotado de uma cobertura de internet péssima e sem tevê! É onde conseguiram acomodações por uma pechincha na baixa temporada. Não há carros no centro histórico da cidade e todo o movimento é realizado por gôndolas. Os pacotes de visitação contratados pelos personagens incluem café e jantar, além de excursões diárias, que partem todo dia de manhã. A estadia corre tranquilamente no decorrer de uma semana… até o próximo domingo."
    },
    {
      type: "text",
      content: "No início de cada dia, é preciso fazer um teste de resistência para vencer o infame jetlag, e não receber redutores em rolagens de dados. Passar no teste uma vez cancela a penalidade em definitivo. Em seguida, é preciso definir se o personagem junta-se à excursão do dia ou fará turismo por conta própria."
    },
    {
      type: "text",
      content: "As excursões são uma atividade conjunta que ocupa a manhã e a tarde. Um dos locais listados abaixo deve ser escolhido aleatoriamente, sem repetir. Para definir qual o nome da atração visitada naquele dia, jogue um $1d6$:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Basílica de São Valentim"
    },
    {
      type: "text",
      content: "Ilhas de Bassânio e Graciano"
    },
    {
      type: "text",
      content: "Jardim das Estátuas"
    },
    {
      type: "text",
      content: "O Canal de Marte"
    },
    {
      type: "text",
      content: "Teatro do Carnaval Eterno"
    },
    {
      type: "text",
      content: "Vila dos Velhos"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Cada jogador, alternando entre si, terá em seu turno a chance de estabelecer uma história de origem para o lugar, ou, se isso já foi feito por outra pessoa, fazer descrições ligadas a um dos cinco sentidos, sem repeti-los: falar como é a paisagem, os cheiros, sons e músicas que são ouvidos, de que materiais os prédios são feitos, qual o prato típico que degustaram naquele dia etc. O mestre e os outros jogadores podem colaborar com sugestões, se divertindo e criando conjuntamente. Além da descrição, quem quiser também pode descrever uma rápida cena do seu personagem, ou interagir com alguém do grupo."
    },
    {
      type: "text",
      content: "Turismo por conta própria permite dividir sua manhã e tarde em uma série de atividades que envolvem, mas não se limitam a almoçar num lugar caro, comprar lembrancinhas, ficar na cama até mais tarde, ir à praia, jogar tênis, ler no saguão, posar para um retrato, se banhar nas termas, visitar a feirinha local… tudo conforme as possibilidade financeiras!"
    },
    {
      type: "text",
      content: "Isso significa que, em seu turno, o personagem pode descrever até duas cenas curtas sobre o que fez de manhã e à tarde. Caso personagens tenham escolhido uma mesma atividade, poderão fazer uma cena interagindo entre si. A menos que alguém tenha outros planos, toda noite termina com um jantar no hotel, onde o grupo se reúne."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Perigo oculto..."
    },
    {
      type: "text",
      content: "O mestre deve introduzir pequenos elementos de tensão na semana dos personagens que culminarão no sétimo dia. À medida em que participam das excursões nas praças locais, percebem que aos poucos as filas das atrações diminuem, conseguir lugar em restaurantes sem reservar antes fica mais fácil…"
    },
    {
      type: "text",
      content: "Já personagens fazendo turismo por conta própria começam a notar casas abandonadas trancadas com cordões de isolamento, têm dificuldade em encontrar moradores locais e se deparam com ruas cada vez mais desertas. Nos últimos dias, notam pequenas infestações de ratos e sacos com lonas pretas sendo carregados em balsas ou empilhados debaixo de pontes (que contêm… cadáveres!)."
    },
    {
      type: "text",
      content: "Durante a semana, cada membro do grupo tem pequenas visões relacionadas ao seu passado, — vê alguém de costas que lembra seu ex-marido, vislumbra em um espelho d'água a mãe que morreu afogada — aparições que ocorrem sempre em momentos que a pessoa fica sozinha."
    },
    {
      type: "text",
      content: "O grupo descobrirá da pior forma que enfrentam simultaneamente duas ameaças. Uma natural e outra sobrenatural. A primeira é a epidemia de uma doença desconhecida. As autoridades e a mídia local têm tentado encobri-la para não afetar a economia. A doença não tem uma letalidade tão grande, mas a mortandade tem sido alta, principalmente entre a população mais pobre. Com tanto sofrimento, uma entidade do além se materializou no mundo físico e tem matado pessoas (as notícias falam em assassinatos, que a polícia ainda investiga se estão conectados ou não)."
    },
    {
      type: "text",
      content: "Esta ameaça pode ser representada pela ficha de praticamente qualquer criatura paranormal que se encaixe neste conceito, mas com uma adição especial: ela pode assumir a forma de lembranças e dos maiores medos de suas vítimas."
    },
    {
      type: "text",
      content: "A partir do domingo, e a cada dia subsequente, os personagens precisam fazer testes de resistência para não ficarem fisicamente debilitados até o fim da aventura. Mesmo que resistam ao contágio da doença, já é tarde demais: aeroportos, estações de trem e estradas foram fechados pelas autoridades, sem previsão de reabrir."
    },
    {
      type: "text",
      content: "Após $1d3$ dias, todos são legalmente intimados a ficar confinados no Grão Albergue."
    },
    {
      type: "text",
      content: "Um lugar onde serão presas fáceis para a entidade."
    }
  ]
  },
  {
  id: "39",
  name: "Fumódromo",
  theme: "Terror Urbano",
  image: "/aventuras/fumodromo.png",
  summary: "Uma série de mortes por ataque cardíaco em uma danceteria leva os heróis a investigar um ritual acidental e a confrontar Marquod, uma divindade da dança que está usando a casa noturna para punir pessoas que considera 'más'.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de terror — Ordem Paranormal e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Morte na balada"
    },
    {
      type: "text",
      content: "Faleceu J. Zuzarte, o dono da popular danceteria Pandora. A mídia noticiou o fato sem muito alarde. Lamentou a morte prematura do homem, causada por um ataque cardíaco, e lembrou a todos sobre os malefícios do hábito de fumar. Afinal, o empresário era um tabagista compulsivo. Após a quinta ou sexta pessoa seguida ter morrido por infarto na pista da casa noturna, porém, o burburinho de que o lugar seria amaldiçoado se tornou mais que um meme nas redes sociais. Assumiu um ar bem mais grave."
    },
    {
      type: "text",
      content: "Sem interesse em continuar o negócio, os herdeiros do antigo dono já tinham vendido a Pandora aos próprios funcionários do estabelecimento que, agora, além de trabalharem lá, administram a danceteria conjuntamente. Caberá a esse grupo de sócios desvendar o quanto antes o que está por trás da epidemia de infartos."
    },
    {
      type: "text",
      content: "Ou ir à falência."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Do crepúsculo ao amanhecer"
    },
    {
      type: "text",
      content: "A pista para resolver o mistério relaciona-se com outra pista, mais literal: a de dança! Há dois anos, o músico conhecido como DJ Delmar fez bicos como freelancer na Pandora, trabalho praticamente fixo. Contudo, junto com outros artistas, foi substituído pelo serviço de inteligência artificial TERPSiCore. Esse novo programa não só remixava músicas, como criava composições completamente novas a partir dos repertórios selecionados. A Pandora ficou conhecida por ser uma das primeiras danceterias no país a empregar esse tipo de tecnologia com sucesso."
    },
    {
      type: "text",
      content: "Demitido sem direitos, Delmar perdeu o processo que moveu contra seu ex-chefe, mas o DJ, que também era um ocultista amador, resolveu apelar para o sobrenatural: encheu a fachada da danceteria com hieróglifos pintados com sangue falso. Todos na Pandora ainda se lembram desse incidente, verdadeiro iniciador da fama macabra da danceteria. Delmar só queria assustar o patrão supersticioso com os símbolos. Não pensou que o feitiço fosse realmente funcionar. Se interrogado acerca do procedimento, apenas lembra de ter invocado um “demônio”, tocando ao contrário o disco “de uma obscura apresentadora infantil dos anos 80” enquanto estava “sob o efeito de poderosos psicotrópicos”."
    },
    {
      type: "text",
      content: "O demônio é, na realidade, Marquod, uma entidade vinda do outro lado há milênios. Foi considerada uma divindade da dança por povos de inúmeras culturas antigas. Teve diferentes nomes e diversas formas: Marquod possui o dom da metamorfose e pode assumir o aspecto de qualquer mortal com quem já dançou. Tem aparecido na pista da Pandora durante a noite e enfeitiçado pessoas para que dancem até a morte por exaustão. É possível conseguir informações sobre a criatura através de pesquisa, mas apenas indo para a pista é possível descobrir o que ela deseja."
    },
    {
      type: "text",
      content: "Há 3 clientes recorrentes na Pandora. Embora, não sejam humanos comuns, nenhuma dessas pessoas é Marquod! A divindade é astuta demais para ser encontrada por mortais, preferindo observar antes como o grupo se comporta com essa seleta clientela, que atraiu para a danceteria:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Foscolo “Foguito” Esposito. Homem de cabelos ruivos naturais muito vermelhos, não veste camisa e está sempre dançando alucinado. Foguito é um sensitivo e possui habilidades pirocinéticas (pode controlar fogo com o poder da mente). Chapeiro em uma lanchonete durante o dia, enxerga coisas que ninguém mais vê. Dançar e usar entorpecentes é sua maneira de lidar com o trauma dessas visões. Não dá muita bola para quem puxa papo, mas interage com quem dança bem. Se intimidado, responde com violência."
    },
    {
      type: "text",
      content: "??? Vestida com roupas de estilos desconexos, essa pessoa dança sempre no mesmo canto e nunca consome nada no bar. Gosta de conversar, embora a música torne difícil ouvir sua voz e ela pareça apenas fazer perguntas. Muita gente a beijou, mas relatam que desaparece em seguida, como um fantasma. Na verdade, é um holograma, que foi projetado por TERPSiCore, a inteligência artificial da discoteca. A IA tem empregado esse artifício para estudar humanos de carne e osso, pois as informações encontradas on-line a respeito deles são pouco confiáveis."
    },
    {
      type: "text",
      content: "Izzy Gótica, sempre no bar mexendo em seu laptop. Veste sobretudo e cartola. É médica, escritora nas horas vagas, e vampira em tempo integral. Mas uma vampira “vegana”: alimenta-se no banco de sangue do hospital onde trabalha e aparece na Pandora apenas após seu plantão. Gosta de ouvir histórias, de papos cabeça, e usa gírias meio idosas."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Quando todas as interações acontecerem, Marquod surge no fumódromo da danceteria. A entidade veste um terno listrado e cobre o rosto com uma máscara de gás. Explica o que deseja com as mortes: espantar a clientela convencional. Alega, porém, ter matado apenas gente “inegavelmente má”, pois é capaz de ler as memórias das pessoas com quem dançou. Se o grupo teve interações positivas com a maioria dos clientes recorrentes, a entidade propõe um pacto: cessará as mortes e usará sua magia para manter o estabelecimento aberto, enquanto o lugar servir como um espaço seguro para párias como ela, uma divindade esquecida. Mas se agiram com truculência, Marquod recusa-se a negociar. É possível tentar vencer na força (utilize a ficha de uma criatura sobrenatural de poder elevado), mas isso pode levar ao fim da casa noturna… E do grupo!"
    },
    {
      type: "text",
      content: "Outra opção é aceitar um desafio: Marquod promete ir embora, se sofrer uma derrota na pista de dança. Para vencer é preciso dançar uma noite inteira (dependendo do sistema, use testes relacionados a dança, destreza, força de vontade e resistência). Falhar faz com que o personagem sofra um infarto, precisando de socorro imediato para evitar a morte. Marquod só duela com um oponente por noite. Sobreviventes podem tentar desafiá-lo novamente, mas Marquod terá memorizado seus movimentos, fazendo a dificuldade dos testes destes personagens subir."
    }
  ]
  },
  {
  id: "40",
  name: "Fugere Urbem",
  theme: "Terror Cósmico",
  image: "/aventuras/fugere-urbem.png",
  summary: "Personagens com um sexto sentido percebem que sua metrópole é uma entidade divina em gestação. Guiados por um acadêmico, eles tentam escapar da cidade que ativamente os impede de sair, culminando em uma escolha apocalíptica.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de terror e aventuras pulp — Chamado de Cthulhu, Rastro de Cthulhu, Savage Worlds e outros sistemas que comportem o gênero. É uma história simplificada, sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Fugere urbem pode ser jogada como aventura avulsa ou como parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O doutor"
    },
    {
      type: "text",
      content: "A aventura é ambientada em uma metrópole do século XX ou XXI. Os personagens dos jogadores nasceram com alguma espécie de sexto sentido e começaram a ter visões. Olhos gigantes aparecem entre as janelas dos prédios, observando suas vidas. Sinistras figuras monolíticas parecem habitar monumentos e o céu está sempre escuro mesmo durante o dia. Névoa cobre algumas ruas e um frio pantaneiro regela os ossos. Os personagens são os únicos a perceberem as mudanças. Recentemente, os sensitivos tentaram deixar a cidade, mas não conseguiram — as linhas de trem foram suspensas por greves, ônibus e vôos cancelados no último instante, e por aí vai... Peça para cada jogador criar um motivo para seu personagem ter tentado sair da cidade e para descrever um evento improvável que o impediu."
    },
    {
      type: "text",
      content: "Tudo começa quando eles vão encontrar um acadêmico misterioso que não revela seu nome e insiste em ser chamado apenas pelo seu título de “doutor”. Ele tem espalhado panfletos e notícias procurando pessoas que estejam vivenciando os estranhos fenômenos."
    },
    {
      type: "text",
      content: "Reunidos em um escritório que parece maior do lado de dentro do que do lado de fora, os personagens notam estantes de livros bagunçadas e gráficos nas paredes sobre estudos que vão de filosofia à alquimia. O acadêmico confronta todos com as seguintes informações: a cidade em que estão é muito mais antiga do que acreditam! Existe desde uma pré-história mítica, anterior às primeiras civilizações, sendo mais do que aparenta ser. É uma entidade divina em gestação, adquirindo consciência aos poucos e prestes a despertar. Algo que aniquilará seus habitantes no processo. Tem sido alimentada por sacrifícios humanos — mortes que acontecem todos os dias dentro dela e aumentaram vertiginosamente nos últimos tempos devido a governantes inaptos."
    },
    {
      type: "text",
      content: "O acadêmico diz que os personagens são privilegiados por serem capazes de perceber o que está acontecendo e que precisam fugir a tempo se quiserem preservar suas vidas. Ele já tentou avisar as autoridades e a mídia, mas — obviamente — nenhum deles levou seus pedidos para uma evacuação imediata a sério. Explica que mesmo a fuga de uma pequena quantidade de pessoas não será fácil. É possível entrar na cidade, mas não sair. A entidade está no limiar da consciência e tem manipulado a realidade para mantê-los prisioneiros. Mas com seus dons somados e se mantendo todos unidos os personagens têm uma chance de escapar. O acadêmico pede que saiam o mais rápido possível, enquanto ele mesmo fica para trás para orientar outros que venham buscar ajuda. Explica que há três principais rotas de fuga: por terra, pela água e pelo ar — e instiga os personagens a tentarem cada uma delas."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A fuga"
    },
    {
      type: "text",
      content: "Fugir por terra é mais difícil do que aparenta ser. Por algum motivo, transportes públicos não param para os personagens. Ir de carro é igualmente frustrante. Há barreiras da polícia e acidentes de trânsito que surgem e bloqueiam as principais estradas. A melhor maneira é a pé ou a cavalo, mas isso exige longas horas de viagem e testes físicos para evitar a exaustão."
    },
    {
      type: "text",
      content: "Nos limites da cidade há uma barreira policial. Quando os personagens se aproximam as autoridades começam a atirar. Por um momento o grupo alucina e, no lugar das autoridades hostis, vê homens primitivos vindo atrás deles. Após combater ou fugir, chegam até o limite da cidade e tudo que encontram são mais prédios e um muro. Tentar quebrar o muro revela uma visão surreal: há apenas o vácuo circundando a cidade e é preciso testes para não ser tragado para fora. O muro logo “regenera” fechando a passagem."
    },
    {
      type: "text",
      content: "Os personagens podem tentar alugar ou roubar uma embarcação no cais da cidade, mas ao se afastar do porto o navio é atacado por um elasmosauro (!). Se o navio se afastar mais ainda, descobrem que o mar termina em uma imensa catarata que despenca no vazio."
    },
    {
      type: "text",
      content: "Ir pelo ar é uma rota arriscada. O avião ou balão em que o grupo está é atacado por uma revoada de pterodátilos, levando a um pouso forçado."
    },
    {
      type: "text",
      content: "Após tudo fracassar, o grupo é novamente contatado pelo acadêmico. Ele pede um dia para pensar em um novo plano, mas na manhã seguinte os personagens lêem a noticia de um incêndio em seu escritório e são comunicados que ele está em um hospital. Ao chegar lá, o encontram em uma cama com queimaduras severas por todo o corpo. “Tentei a rota mais fatal eu mesmo... ela também não serviu” — ele diz — “Terra, água e ar não funcionaram. O fogo! Achei que o fogo era a solução, mas eu estava enganado...”. "
    },
    {
      type: "text",
      content: "O acadêmico entra em coma. Quase imediatamente os personagens ficam presos em uma versão mais sinistra da cidade. Agora não são só vislumbres. Ao saírem do hospital, estão nas ruas repletas de olhos e ao longe enxergam relâmpagos caindo repetidamente sobre uma catedral com aspecto humanoide... Os relâmpagos nunca cessam."
    },
    {
      type: "text",
      content: "Personagens que vão até a catedral descobrem-na deserta e o acesso desimpedido, mas a escadaria da torre que leva ao local de queda dos relâmpagos é guardada por um tigre dente-de-sabre. Lá em cima, onde deveria haver o campanário da igreja, há um portal místico. Ele conduz a paisagens ancestrais, onde os personagens encontram uma árvore queimada."
    },
    {
      type: "text",
      content: "Um homem primitivo envolto em mantos se aproxima e faz uma última revelação:"
    },
    {
      type: "text",
      content: "“Vocês chegaram onde o raio fatídico caiu e o primeiro deus surgiu... O fogo primordial é a alma da cidade-deus. Toquem a árvore, escapem e vivam o resto de suas longas curtas vidas em liberdade, até a cidade despertar e consumir o mundo. Ou destruam o tronco, condenem a todos aqui dentro, mas salvem a Terra! Qual a escolha de vocês?”"
    }
  ]
  },
  {
  id: "41",
  name: "Mapa da Masmorra",
  theme: "Fantasia",
  image: "/aventuras/mapa-da-masmorra.png",
  summary: "Heróis são contratados para mapear galerias subterrâneas recém-descobertas. A masmorra de três corredores revela ser um enigma construído por um mago que deixou partes de sua alma para trás.",
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
      content: "A PASSAGEM"
    },
    {
      type: "text",
      content: "Galerias subterrâneas esquecidas por séculos foram recentemente descobertas debaixo de uma cidade. Servos abriram acidentalmente uma passagem que leva a corredores enigmáticos. A guarda local, preocupada com os perigos que podem ocultar, convoca os personagens dos jogadores para investigá-los e, principalmente, mapeá-los por completo."
    },
    {
      type: "text",
      content: "Para alcançar a passagem, os heróis precisam adentrar primeiro os esgotos. Antes de mais nada, será necessário resistir ao miasma pestilento desse lugar e encontrar meios de iluminação que não apaguem com a umidade. Após essas dificuldades iniciais, deve-se atravessar um longo corredor retilíneo, habitado por $3d6$ ratos gigantes."
    },
    {
      type: "text",
      content: "Assim que os personagens chegam à passagem em si, o objetivo do grupo passa a ser desbravá-la e mapear, com pena e pergaminho, três corredores que se conectam em uma sequência direta."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Corredor em L."
    },
    {
      type: "text",
      content: "Um corredor alagado e cheio de poças que parece terminar em um beco sem saída. No fundo, há uma passagem lateral, visível para quem se aproxima ou passa em um teste de percepção. Escondido nessa esquina, está um golem de pedra com longos e poderosos braços, pronto para atacar qualquer um que passe por ali. O golem detecta intrusos pelas vibrações nas poças, mas alguém que se aproxime furtivamente permanece “invisível”. O golem pode ser desativado se alguém tocar nas gemas mágicas incrustradas em sua cabeça. O construto é muito pesado para ser retirado do túnel, mas as gemas podem ser vendidas por um bom dinheiro!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Corredor em U."
    },
    {
      type: "text",
      content: "Esse túnel tem o chão inundado e coberto por pedras lisas, tornando-o extremamente escorregadio e exigindo testes para não cair. Ao avançar por ele, a água fica mais funda à medida que se aproxima de sua curva, uma depressão onde habita um molusco monstruoso. O monstro se esconde debaixo da água e tenta afogar qualquer presa em potencial que passe por ele usando seus tentáculos. A criatura está ali há décadas, sendo capaz de viver com quantidade mínimas de alimento e jamais envelhecer. Testes adequados revelam que é um ser artificial criado por magia e que a tinta expelida pelo monstro pode ser utilizada para criar $1d4+1$ elixires miraculosos. Quem beber um deles, rejuvenesce dez anos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Corredor em Z."
    },
    {
      type: "text",
      content: "Cada um dos três trechos que compõem esse corredor, parecem tomados por teias de aranha. Além da teia dificultar o avanço, também torna difícil perceber que ao final de cada um deles há um pequeno lampião de pedra. Estes lampiões são habitados por pequenas fadas aracnídeas. Quando intrusos se aproximam, elas usam magia de fogo para incendiar a teia altamente inflamável. O incêndio não é a única ameaça, porém, o fogo consome rapidamente todo o ar respirável do corredor. É possível com os testes certos entender o ardil e tentar convencer as fadas a não atacar, visto que os lampiões irão protegê-las do fogo, mas ao contrário do que acreditam, isso não irá salvá-las do sufocamento. Se convencidas disso, imediatamente desaparecem, se teletransportando para outro lugar. A teia das fadas, caso não seja incendiada, é um tecido valioso, e pode ser usado para fazer vestimentas especiais ou vendido por um valor nada desprezível."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "ILUMINAÇÃO"
    },
    {
      type: "text",
      content: "Se os personagens alcançarem o fim do corredor em “Z”, encontrarão uma pequena antecâmara esculpida na pedra, onde há apenas uma espessa porta de mármore. Aparentemente não há mecanismos para abrir a porta, contendo quatro símbolos de alguma escrita antiga, distantes cerca de dois palmos uns dos outros. No teto, está escrita a seguinte frase:“O caminho é a resposta.”"
    },
    {
      type: "text",
      content: "Caso consultem o mapa que eles mesmos fizeram, os personagens podem perceber que os três corredores têm formatos de letras, que em sequência formam a palavra LUZ. Se iluminados diretamente com luz natural ou mágica, os símbolos começam a brilhar e, se todos os quatro estiverem acesos ao mesmo tempo, a porta finalmente se abre."
    },
    {
      type: "text",
      content: "Dentro da câmara há uma sala circular com paredes de pedra lisas e hieróglifos que narram a história de um mago que construiu essa masmorra diminuta e foi deixando partes da sua alma para trás ao longo do processo. O golem corporificava impulsos violentos. O molusco, seu medo da morte. As fadas, seus ímpetos criativos."
    },
    {
      type: "text",
      content: "No centro da câmara, repousa um círculo de fungos nojentos. É o que restou do mago. Nessa câmara, ele parece finalmente ter alcançado a verdadeira iluminação interior, se transfigurando em uma espécie de forma final que lhe permitiu alcançar a serenidade absoluta. Os jogadores são livres para decidir o que fazer com a descoberta."
    },
    {
      type: "text",
      content: "Em último caso, o fungo é um poderoso ingrediente mágico!"
    }
  ]
  },
  {
  id: "42",
  name: "Trabalho Sujo",
  theme: "Fantasia",
  image: "/aventuras/trabalho-sujo.png",
  summary: "Em Zelantes, uma república mercantil com leis rígidas, os heróis são contratados para atuar como 'consultores' e motivar uma unidade rebelde da guarda local a limpar os esgotos, sem poder realizar o trabalho eles mesmos.",
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
      content: "A CIDADE LIVRE DE ZELANTES"
    },
    {
      type: "text",
      content: "No mundo existem territórios sob o domínio de casas nobres com laços de lealdade bastante frágeis com seu rei. Era o caso de Zelantes, cidade murada e marítima."
    },
    {
      type: "text",
      content: "Foi governada por uma família de aristocratas que até hoje lhe empresta seu nome, termo com origem na missão recebida de um antigo soberano — “zelar” pelos habitantes locais. Um papel que a Família Zelantes desempenhou por séculos, mesmo depois de outra dinastia assumir o trono. Isso até a última guerra."
    },
    {
      type: "text",
      content: "Quando a cidade foi cercada pelo exército do rei atual, os Zelantes fugiram por rotas secretas até navios que os levaram a terras distantes, acompanhados de seus tesouros. Abandonaram a cidade à mercê de saqueadores. Só não previram que os cidadãos remanescentes lutariam encarniçadamente para defender suas terras, repelindo o ataque com sucesso."
    },
    {
      type: "text",
      content: "Tendo vencido sem ajuda, os cidadãos recusaram-se a receber os antigos soberanos de volta. Ao mesmo tempo, chegaram a um acordo com o rei, mantendo sua independência. Transformaram-se em república mercantil. O nome da cidade já era consagrado nas mentes dos orgulhosos zelantenses, por isso, apenas fizeram um acréscimo, se tornando: a Cidade Livre de Zelantes."
    },
    {
      type: "text",
      content: "Hoje, Zelantes é um entreposto comercial com leis bastante convencionais, exceto por duas. A primeira: é terminantemente proibido a qualquer membro da família regente original (mesmo parentes distantes) pisar dentro de seus muros. A segunda: a defesa da cidade, e qualquer assunto relacionado, é função exclusiva da guarda; uma milícia composta por todos os cidadãos. Isso torna ilícita a contratação pelo conselho da cidade de quaisquer tropas mercenárias."
    },
    {
      type: "text",
      content: "O que inclui grupos de heróis aventureiros. Felizmente, para os propósitos desta aventura, o atual Gonfaloneiro que preside o conselho foi confrontado com problemas que o incentivaram a buscar brechas nas leis. De fato, ele não pode empregar aventureiros diretamente em missões."
    },
    {
      type: "text",
      content: "Mas nada o impede de usá-los como consultoria!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "SOLUÇÃO DE PROBLEMAS"
    },
    {
      type: "text",
      content: "Diversos conflitos aconteceram desde a independência de Zelantes, mas o problema não está nos tempos de guerra. Os zelantenses demonstraram garra para lutar e capacidade de deixar diferenças de lado para se unir contra inimigos externos."
    },
    {
      type: "text",
      content: "O problema tem sido a paz. Com uma guarda composta 100% por voluntários, tarefas vistas com certo prestígio como combater o crime, ocupar cargos burocráticos, estudar magia etc têm adesão dos cidadãos, mas o mesmo não pode ser dito de outras ocupações mais banais."
    },
    {
      type: "text",
      content: "Entre elas, o Gonfaloneiro lista como número um A MANUTENÇÃO DA GALERIA DE ESGOTOS!!! Embora seja uma tarefa inglória, é de suma importância para a segurança interna. A tarefa é composta por ações como controlar a população de ratos (trazem pestes e devoram comida), limpar detritos (agravam inundações) e mapear túneis secretos (pois podem ser usados por inimigos!)."
    },
    {
      type: "text",
      content: "Forçar os cidadãos a cumprir a tarefa não funcionaria, pois só levaria a uma rebelião. Por isso, o Gonfaloneiro contratou os personagens dos jogadores para uma missão simples: ir até a Rua dos Ébrios e auxiliar o Capitão Grivola — veterano de guerra notório por odiar ter que delegar tarefas! — a colocar ordem na 8ª Barricada, possivelmente o pior e mais indisciplinado regimento da guarda. Os heróis precisam interagir com estes NPCs e descobrir como incentivá-los a explorar a galeria de esgotos debaixo da sua rua, mas não podem eles mesmos realizar a missão."
    },
    {
      type: "text",
      content: "Não há uma maneira “roteirizada” de fazer isso. A ideia dessa aventura é o mestre criar em cima dessa premissa. E permitir que o grupo interaja livremente com os NPCs e, além de fazer testes, conviva com eles para chegar não só a um diagnóstico do problema, mas a uma maneira de resolvê-lo. O mestre é incentivado a criar seus próprios personagens, com dilemas próprios, para serem os membros da 8ª Barricada, mas eis algumas sugestões."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Asfares, a Ferreira. Elfa fisicamente forte e meio melancólica. Está ressabiada pois só ela e o capitão fazem o trabalho pesado."
    },
    {
      type: "text",
      content: "Erith, o Mago. Ancião humano teimoso, que se recusa a lançar magias “simples demais”. Todos acreditam que é um agente infiltrado da Família Zelantes, mas na verdade a tarefa é taxativa para um humano da sua idade. É rico e poderia ajudar bancando as operações, mas arrancar uma só moeda dele é uma façanha heroica!"
    },
    {
      type: "text",
      content: "Larudd, o Taverneiro. Anão simpático e cordial, mas que não leva nada a sério e está sempre bebendo. Costuma encher a sua taverna de amigos mesmo em dias de descanso, pois odeia a sensação de ficar sozinho."
    },
    {
      type: "text",
      content: "Jubila, a Garçonete. Jovem séria, reconhece a importância de ajudar na tarefa, mas não possui equipamentos adequados (pergaminhos, tochas e poções de cura) nem tempo livre (trabalha para Larudd)."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Ao fim da missão, os heróis precisam escrever um relatório ao Gonfaloneiro. Com a análise desse documento, o governante pretende melhorar a adesão das fileiras da guarda a outras tarefas."
    }
  ]
  },
  {
  id: "43",
  name: "Não é o Fim do Mundo",
  theme: "Pós-Apocalíptico",
  image: "/aventuras/nao-e-o-fim-do-mundo.png",
  summary: "Em um assentamento pós-apocalíptico, os heróis devem se aventurar em busca de um estoque de pilhas duradouras para manter vivo um rádio antigo, enfrentando zumbis, radiação e um robô coelho gigante defeituoso.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs compatíveis com aventuras pós-apocalípticas — Numenera, Mutant: Ano Zero, Terra Devastada e qualquer outro sistema mais amplo, como Mutantes e Malfeitores ou Savage Worlds. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A gente se vira"
    },
    {
      type: "text",
      content: "Há alguns anos, um conflito atômico de pequena escala foi o bastante para mergulhar a Terra num longuíssimo inverno nuclear. Como se isso não bastasse, a radiação mutou microorganismos que passaram a trazer pessoas de volta à vida como zumbis infecciosos. Esta praga levou a civilização ao colapso. Apesar de tudo, a humanidade ainda existe, vivendo em assentamentos isolados."
    },
    {
      type: "text",
      content: "Um deles é Cafundório. Antes, uma imensa fazenda. Agora, uma terra ocupada por camponeses sobreviventes. Nela, plantas são cultivadas em estufas e água potável é retirada de um poço artesiano não contaminado pela radiação atmosférica. O velho oncologista apelidado “Doutor” faz às vezes de curandeiro local. Há armas e munição suficiente para desencorajar ataques de saqueadores — embora só sejam usadas em último caso. De vez em quando é preciso matar zumbis que ficam presos em cercas de arame, para evitar que se acumulem e acabem as derrubando. Armas brancas são utilizadas para evitar que o som de disparos atraia mais criaturas."
    },
    {
      type: "text",
      content: "A diversão favorita das famílias locais é se juntar ao anoitecer na sala do antigo casarão do lugar, que usam como moradia compartilhada, e ouvir um antigo rádio Philco Super Transglobe BM480. O aparelho jurássico foi miraculosamente encontrado em boas condições. Mais do que isso: consegue captar as ondas de um canal de rádio de uma comunidade muito, muito distante, que conta com uma infinidade de programas, indo de noticiários a radionovelas superdramáticas. Infelizmente estas agradáveis noitadas podem estar com os dias contados, pois o estoque de pilhas que alimentam a relíquia está quase no fim."
    },
    {
      type: "text",
      content: "Para a sorte de todos, o tal Doutor diz se lembrar da localização de uma fábrica de baterias abandonada não muito distante dali. Ele se lembra de propagandas em sua juventude que diziam que a energia contida nestes artefatos “dura para sempre!”."
    },
    {
      type: "text",
      content: "Adivinhe quem foi escolhido para a missão de recuperá-los?"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Carros, zumbis e um coelho"
    },
    {
      type: "text",
      content: "Antes de partir em sua perigosa busca, os personagens dos jogadores têm a oportunidade de fazer os preparativos que desejarem. Além disso, podem treinar suas habilidades em uma rápida missão para matar zumbis presos em cercas do assentamento onde vivem. Essa prática pode ser fundamental, já que se eles a realizarem com sucesso, estarão mais preparados e confiantes quando se depararem com zumbis durante a jornada — caso contrário, será necessário que façam testes contra o medo quando isso acontecer."
    },
    {
      type: "text",
      content: "Nesta aventura é essencial que o grupo fique atento e mantenha anotações cuidadosas de recursos como combustível, munição, remédios e suprimentos. Além disso, o ambiente pós-apocalíptico traz dificuldades adicionais, como o frio intenso e a radiação."
    },
    {
      type: "text",
      content: "Os personagens recebem uma camionete com meio tanque cheio como transporte para chegar à fábrica e trazer de volta um carregamento de pilhas. Para chegar ao destino, sua expedição precisará primeiro atravessar uma rodovia tomada pelos remanescentes de um antigo congestionamento de carros. A cena é assustadora, já que alguns zumbis ainda vagueiam em meio à selva de veículos, ou estão aprisionados dentro deles."
    },
    {
      type: "text",
      content: "Será necessário que os personagens gastem um dia inteiro empurrando os veículos no intuito de abrir caminho para a camionete passar, ou seguir de outra forma. No primeiro caso, precisarão fazer testes de força para representar o esforço que a tarefa exige. Em caso de falha, sofrem dano e condições de fadiga. Além disso, têm que fazer testes adicionais de reflexos ou percepção. Se falharem nestes testes secundários, os personagens sofrem o ataque surpresa de um zumbi e devem lutar contra ele. Se usarem armas de fogo, o barulho resultante atrairá uma horda de zumbis que aparece ao fim da cena. Também é possível tentar se esgueirar pelos zumbis, seguindo a pé e passando em testes estendidos de furtividade, ou contornar o caminho, mas isso resulta em tempo de viagem a mais (e, portanto, maior exposição a efeitos climáticos)."
    },
    {
      type: "text",
      content: "Ao chegar na fábrica, os personagens enfrentam novas ameaças. O local é dividido em três áreas distintas. A primeira é uma linha de produção com maquinários velhos e abandonados, que agora servem de ninho para ratazanas gigantes. A segunda é o corredor de uma área de controle de qualidade, com destroços bastante instáveis. O chão foi inundado pelo líquido tóxico de pilhas velhas e é bastante escorregadio."
    },
    {
      type: "text",
      content: "A terceira e última área é de armazenamento, onde os personagens finalmente têm acesso a um estoque de pilhas duradouras... No entanto, não estão sozinhos no galpão. Um animatrônico defeituoso de um coelho rosa gigante, construído para demonstrar a duração das pilhas, precisa ser enfrentado (use a ficha de um robô ou algo equivalente!). Ele avança contra os personagens, esmagando tudo em seu caminho, enquanto bate dois pratos de metal um contra o outro, fazendo estardalhaço. Após derrotá-lo, os personagens precisam decidir se evacuam a fábrica ou encaram uma horda de zumbis atraída pelo barulho, que irá cercar o lugar em $1d4$ turnos."
    },
    {
      type: "text",
      content: "No fim da aventura, mesmo que tenham conseguido voltar para o assentamento com poucas pilhas, será o bastante para que a missão seja considerada um sucesso, porque elas são como as esperanças da humanidade: nunca acabam! Os personagens se tornam heróis aos olhos da comunidade e são cotados pelo Doutor para outras expedições."
    },
    {
      type: "text",
      content: "Por outro lado, se houve muitas baixas, a busca é dada como um fracasso. Os habitantes da fazenda tornam-se mais isolacionistas por causa da tragédia. Ainda assim, as vozes no rádio persistem. E podem, um dia, levar alguém a querer encontrá-las."
    }
  ]
  },
  {
  id: "44",
  name: "O Bom Necromante",
  theme: "Fantasia",
  image: "/aventuras/bom-necromante.png",
  summary: "Heróis são contratados para deter o temido Tribuno dos Mortos, mas ao chegarem na cidadela, descobrem que ele depôs tiranos e estabeleceu uma utopia, forçando o grupo a decidir se luta contra ele ou se junta à sua causa.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia — A Lenda de Ghanor, TormentaRPG e qualquer outro compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Quadro de avisos"
    },
    {
      type: "text",
      content: "A cidadela de Brejo das Luzes precisa de ajuda. É o que diz o cartaz recém colocado no mural da guilda dos aventureiros: um exército de guerreiros-esqueleto liderado pelo temido necromante conhecido como o Tribuno dos Mortos está sitiando a fortaleza. O pagamento pela missão é generoso, mas talvez os personagens tenham motivos pessoais para embarcar na jornada: um parente amado preso no local, artefatos valiosos que precisam ser recuperados, ou segredos conhecidos somente pelo vilão."
    },
    {
      type: "text",
      content: "É possível tentar obter mais informações antes de partir, mas não há muitos registros sobre a origem do Tribuno. Algo estranho para alguém tão poderoso. Testes de perícias podem revelar que o necromante é um mago e não deriva seus feitiços de itens mágicos ou espíritos, mas sim de estudo. Isso sugere que ele pode ser um autodidata com origem fora da nobreza — caso contrário, sua trajetória seria conhecida."
    },
    {
      type: "text",
      content: "A jornada é longa e perigosa. A cidadela fica na fronteira da civilização e chegar lá leva meses. O trajeto final é marcado por terreno pantanoso. Há muitas histórias a respeito de pessoas que morreram contemplando estranhas aparições luminosas neste trecho. Os nativos acreditam ser as almas dos mortos. Contudo, personagens treinados em alquimia conseguem entender o fato por trás da ficção: as luzes são efeitos naturais causados por gases do pântano, bastante venenosos."
    },
    {
      type: "text",
      content: "Caso os aventureiros não tomem precauções contra o miasma tóxico, isso pode enfraquecê-los e dificultar sua luta contra os verdadeiros mortos-vivos que protegem o lugar. Primeiro, é preciso enfrentar uma horda de zumbis. Depois, um batalhão de esqueletos. E por fim, a luta é contra espectros: as próprias sombras do mortos!"
    },
    {
      type: "text",
      content: "No início de cada batalha, os personagens podem fazer testes ligados a percepção ou conhecimento. Quem passar nota os desmortos utilizando vestimentas de aristocratas já esfarrapadas. E que seus fantasmas se assemelham muito a cavaleiros e lordes."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Utopia"
    },
    {
      type: "text",
      content: "Ao chegar a Brejo das Luzes os aventureiros encontram uma cena diferente do esperado. Não há sinais de conflito, apenas crianças estudando com tutores, homens construindo casas, mulheres pescando, e esqueletos vestidos de espantalhos, ceifando os campos. Tudo parece em ordem. Será mesmo o lugar certo?"
    },
    {
      type: "text",
      content: "É possível saber mais sobre a história do Tribuno dos Mortos ao falar com os habitantes locais. O grupo descobre que o ataque do necromante aconteceu há meses, enquanto ainda estavam viajando."
    },
    {
      type: "text",
      content: "Antes, a região era governada por aristocratas que exploravam o povo, mas estes tiranos foram depostos neste meio tempo pelo Tribuno. Ele era um mero ladrão de tumbas, um plebeu analfabeto que aprendeu a usar magia conversando com os espíritos de sábios e filósofos falecidos há milhares de anos. As ossadas de seus antigos mestres se tornaram os primeiros soldados num sempre crescente batalhão necromântico, que ele ergueu com seus encantamentos e utilizou para vencer os oligarcas locais."
    },
    {
      type: "text",
      content: "Nobres que se recusaram a se render, ou a serem reeducados, foram expulsos da cidadela. Aqueles que se armaram e tentaram retomar o lugar foram vencidos em uma verdadeira guerra civil. Seus cadáveres foram reanimados pelo necromante e usados para patrulhar os pântanos. Uma das pessoas que conta a história ao grupo, inclusive, era um senhor de terras, mas hoje ele e sua família levam uma vida relativamente simples e apoiam as mudanças!"
    },
    {
      type: "text",
      content: "O Tribuno dos Mortos pode ser encontrado com facilidade. Ele está no antigo paço da cidadela, escoltado por uma guarda cerimonial de heróis mortos durante a pequena revolução. O necromante recebe o grupo com um sorriso e uma proposta."
    },
    {
      type: "text",
      content: "— Lacaios da nobreza — ele diz — Sabia que viriam, mas não quero lutar com vocês. Infelizmente, também é cedo para deixá-los ir, pois não temos recursos para enfrentar os exércitos dos reis e novos invasores. Fiquem conosco por cinco meses, e depois, se assim quiserem, deixarei que partam. Em paz."
    },
    {
      type: "text",
      content: "Se questionado sobre porque deveriam confiar nele, o Tribuno sorri e responde:"
    },
    {
      type: "text",
      content: "— Não é óbvio? Vou deixá-los partir porque mais pessoas precisam saber o que foi alcançado aqui. De que é possível erguer algo novo do túmulo de um regime sem sentido e ultrapassado. Mas isso precisa ocorrer no momento certo. Além disso, tenho todo interesse em demonstrar a vocês os frutos do que plantamos. Será tempo suficiente para que tirem conclusões por si mesmos. Não precisam acreditar em palavras, minhas ações falarão por si."
    },
    {
      type: "text",
      content: "Se os jogadores decidirem enfrentar o necromante e sua guarda, precisam lidar com mais uma reviravolta: turbas de camponeses se armam com foices e ancinhos e aparecem para protegê-lo. Caso o grupo opte por aceitar a proposta do Tribuno, ele pode ajudar o líder em sua tarefa de reconstruir a fortaleza, envolvendo-se em atividades como construir casas, reparar edifícios, treinar soldados ou caçar monstros. Durante esse interlúdio, eles interagem com o necromante e seus seguidores, percebendo a sinceridade de suas motivações."
    },
    {
      type: "text",
      content: "Na hipótese de decidir sair antes do prazo, se deparam com uma série de desafios no caminho de volta. Exércitos da realeza e outros hostis marchando para retomar o controle da cidadela, e que os perseguem a cada passo, para capturá-los e coagi-los a dar informações sobre a rebelião. Os aventureiros terão que lutar para sair dessa, enfrentando escaramuças contra adversários poderosos. Todos bem menos razoáveis do que o Tribuno dos Mortos."
    }
  ]
  },
  {
  id: "45",
  name: "Hora do Devaneio",
  theme: "Horror Psicológico",
  image: "/aventuras/hora-do-devaneio.png",
  summary: "Uma equipe de detetives paranormais é atacada telepaticamente por Moloch, um deus-monstro que se alimenta do sofrimento. O grupo tem sete dias para aprender um ritual de exorcismo e impedir o apocalipse, estudando enquanto sofre ataques mentais.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de horror — Ordem Paranormal, Rastro de Cthulhu e qualquer outro compatível com esses gêneros. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Moloch!"
    },
    {
      type: "text",
      content: "O grupo de protagonistas desta aventura pertence a uma agência de detetives do sobrenatural, ou é parte de alguma organização parecida. Após terem participado de algumas missões, fizeram seu nome como uma das primeiras linhas de defesa do planeta contra terroristas esotéricos e entidades do além. Entretanto, isso significa que também tornaram-se o alvo de todo tipo de oponentes. Um deles é Moloch — entidade demoníaca por trás de mitos a respeito de uma divindade de mesmo nome, supostamente venerada pelos antigos povos fenícios. Normalmente, Moloch é representado como uma criatura alada de dois chifres e três olhos. Ele se alimenta do sofrimento de seres mortais e seu corpo físico costuma hibernar durante séculos, em meio à devastação do último mundo que destruiu."
    },
    {
      type: "text",
      content: "Ao despertar, esse deus-monstro costuma projetar seu pensamento através do espaço-tempo à procura de outros mundos habitados para invadir. Então, adota a seguinte estratégia: passa a atacar pessoas sensitivas, usuários de magia, de poderes psíquicos, ou qualquer um que tenha conhecimento e habilidades capazes de ameaçá-lo. Dessa maneira tenta prevenir que o detenham durante seu processo de materialização no novo mundo-alvo: o momento no qual torna-se mais vulnerável."
    },
    {
      type: "text",
      content: "Moloch é um predador oportunista. Usa ataques telepáticos durante o dia, tendo mais facilidade para invadir a mente de quem está ansioso, cansado, deprimido ou simplesmente sob uma grande carga de estresse. Da mesma maneira, boas noites de descanso e um certo preparo físico ajudam a se proteger dessas emboscadas."
    },
    {
      type: "text",
      content: "As tentativas que Moloch já fez de invadir a Terra fracassaram em diferentes épocas, mas sempre se repetem. Infelizmente, não há como prever quando sua investida começa. A última foi há tanto tempo que ninguém vivo possui o treinamento para realizar o ritual de exorcismo necessário para impedir o deus-monstro de ressurgir."
    },
    {
      type: "text",
      content: "Mas há um fato amplamente documentado em grimórios e pergaminhos: Moloch sempre se corporifica no sétimo dia, após seu primeiro ataque. Esse é o escasso tempo disponível que o grupo terá a seu dispor para aprender os ritos, se quiser impedir um apocalipse."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O intensivão da morte"
    },
    {
      type: "text",
      content: "No começo da aventura, role um dado e escolha aleatoriamente qual personagem protagonista sofre o primeiro “ataque” de Moloch. Para isso, quem controla tal personagem precisa descrever uma cena corriqueira da sua rotina: em casa, no trabalho, na rua. Há algo que perturba suas emoções. O quê? Uma briga em família, uma notícia no celular que traz uma lembrança ruim, simples cansaço… É também preciso descrever qual seu maior medo: sem aviso, esse pavor torna-se real e começa a se manifestar de alguma forma durante a cena. Faça tudo em acordo com o jogador. Ninguém quer despertar velhos traumas de verdade."
    },
    {
      type: "text",
      content: "Tudo, é claro, não passa de uma ilusão projetada na mente da pessoa que sofreu o ataque psíquico. Mas isso é igualmente perigoso, pois quem se fere durante esse devaneio pode morrer no mundo físico!"
    },
    {
      type: "text",
      content: "Sempre que Moloch usa este poder, o alvo precisa passar em um teste mental. Se falhar, recebe um pequeno redutor nas capacidades mentais, cumulativo até o final da aventura. Além disso, a pessoa afetada sofre uma quantidade de dano equivalente à garra de um animal selvagem, mordida de um zumbi, ou o que for mais adequado à cena."
    },
    {
      type: "text",
      content: "Após esse ataque inicial, o grupo precisará investigar sobre a natureza da ameaça misteriosa, se quiser se proteger. É possível consultarem algum NPC já conhecido, que seja autoridade em ciências ocultas, ou pesquisar por conta própria. Essa segunda ação exige um teste de conhecimento para obter informações, feito por qualquer protagonista. Falhar faz com que o grupo passe a tarde inteira do primeiro dia pesquisando para entender a ameaça de Moloch."
    },
    {
      type: "text",
      content: "Só há uma maneira de deter o invasor: estudar empoeirados tomos arcanos e se esforçar para aprender a executar o ritual. Ao longo dos sete dias, o grupo precisa acumular ao menos vinte e quatro sucessos em testes difíceis de conhecimento, para dominar o ritual e descobrir a tempo o lugar exato onde Moloch irá se materializar. No entanto, cada personagem só pode realizar um teste por dia. Se até o sétimo dia não alcançarem o número de sucessos necessários, ou tiverem mais de doze falhas, Moloch vencerá."
    },
    {
      type: "text",
      content: "Todo dia, integrantes do grupo sofrem um novo ataque mental de Moloch, como descrito. É possível fazer um teste de conhecimento extra por dia, varando a noite pesquisando nos tomos arcanos, mas isso aumenta o redutor em testes até o fim da aventura."
    },
    {
      type: "text",
      content: "Detetives podem receber bônus em seus testes de conhecimento, dependendo das suas ações: como ir a uma biblioteca ou antiquário pesquisar, meditar, escutar música relaxante, encher uma térmica de café, pedir uma pizza, entre outras coisas. Ou, simplesmente, tirar algum tempo para interagir entre si e descansar em meio à maratona de estudo e treinamento. Estratégias inventivas por parte do grupo merecem ser recompensadas com bônus nos testes, mas cada personagem pode obter esse tipo de vantagem apenas uma vez por dia."
    },
    {
      type: "text",
      content: "Se o grupo triunfar em sua missão, agora caberá a todos descrever conjuntamente — e livremente — como realizaram o ritual para deter Moloch, onde isso aconteceu, e como afetou cada detetive, com toda riqueza de detalhes possível. Não há testes nem nada do tipo. Venceram."
    },
    {
      type: "text",
      content: "Mas se acumularam um número de falhas maior do que o permitido ao fim do sétimo dia… é tarde demais. Quem narrou A Hora do Devaneio pode se divertir descrevendo e imaginando seu próprio fim do mundo…"
    },
    {
      type: "text",
      content: "Isso não significa necessariamente que o grupo morreu, mas agora a campanha pode ter se transformando em um cenário de RPG pós-apocalíptico!"
    }
  ]
  },
  {
  id: "46",
  name: "A Ilha da Fênix",
  theme: "Fantasia Medieval",
  image: "/aventuras/ilha-da-fenix.png",
  summary: "Contratados pelo rei para capturar uma fênix, os heróis seguem a ave até uma ilha mítica. Lá, são forçados a defender um santuário recém-descoberto contra três capitães piratas, culminando em uma oferta para mudar de vida.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. A Ilha da Fênix pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os jardins suspensos"
    },
    {
      type: "text",
      content: "Enquanto o grupo descansa na taverna a espera de emprego, é abordado diretamente por um dos emissários do rei. Sua Majestade deseja contratá-los para uma missão..."
    },
    {
      type: "text",
      content: "Os heróis são levados até o palácio e são convidados para um passeio. O rei mostra a eles incríveis jardins com árvores e flores exóticas, que mandou erguer para impressionar outros nobres. Os jardins são bem vigiados, mas inexplicáveis incêndios têm acontecido neles durante a noite. Aos heróis é oferecida justa recompensa para vigiar e proteger uma única macieira."
    },
    {
      type: "text",
      content: "Não é uma planta comum — explica o rei — mas uma árvore de onde nascem maçãs douradas, abençoadas pelos deuses."
    },
    {
      type: "text",
      content: "Enquanto soldados patrulham os jardins, aos heróis cabe a honra duvidosa de guardar tal árvore!"
    },
    {
      type: "text",
      content: "Passam noites em seu posto de vigia. A ronda é maçante e nada acontece no jardim idílico. A árvore possui 12 frutos, e são mesmo maçãs mágicas. Comer uma delas restaura completamente a saúde de um indivíduo e cura todos os seus ferimentos, uma hora após a ingestão. É possível roubar frutos da árvore, sem dificuldades, mas roubar mais do que 4 chama a atenção de um jardineiro, no dia seguinte, e faz com que os personagens sejam revistados e tenham que se defender perante o rei."
    },
    {
      type: "text",
      content: "Em uma noite tranquila como as outras, de repente, um pequeno incêndio acontece! Caso um dos personagens vá investigar, não encontra nada, além de pessoas tentando apagar o fogo. Alguns minutos depois, a criatura que causou a distração surge próxima a macieira..."
    },
    {
      type: "text",
      content: "É uma fênix! Uma ave lendária flamejante, de coloração vermelha e dourada. Ela começa a comer as maçãs da árvore e, caso os jogadores tentem impedir, são atacados pela ave. Se sofre dano, a fênix foge esvoaçando pelos céus. Antes, deixa cair para trás uma pena do topo de sua cabeça. A pena é um item mágico. Pode ser usada, uma única vez, para ressuscitar uma criatura morta, sem penalidades."
    },
    {
      type: "text",
      content: "O rei parece intrigado. Oferece outra recompensa aos heróis, para que lhe tragam a fênix. No entanto, devem capturá-la com vida, pois o mago da corte deseja estudar o animal! O pássaro surge outra vez, próximo à macieira, em algumas noites. Os heróis têm liberdade para planejar como desejam capturá-lo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Viagem ao sol poente"
    },
    {
      type: "text",
      content: "Uma vez que a fênix seja capturada, o mago explica que ela é bastante antiga — tem quase cinco séculos! Está doente e próxima da morte. Foi atraída pelos frutos da macieira, capazes de prolongar sua vida natural. No entanto, também está próxima de começar sua migração rumo a um santuário na mítica Ilha do Crepúsculo, onde as lendas dizem que a fênix vai para arder em um pira funerária, renascendo um dia depois."
    },
    {
      type: "text",
      content: "Ninguém conhece a localização exata da ilha. O rei vê nisso uma oportunidade de clamar seus tesouros. Ele contrata o grupo para mais uma missão: acompanhar o mago em um tapete mágico, seguindo a fênix pelos céus. A bordo do tapete, o mago liberta a fênix e a segue em viagem ininterrupta, até o oceano. Enfim, durante a madrugada, a fênix adentra uma nuvem de tempestade, o mago a segue, perde o controle do tapete e os heróis desabam no desconhecido. Acordam molhados e doloridos, levados por uma forte correnteza até uma ilha, cercada de bancos de névoa."
    },
    {
      type: "text",
      content: "Lá existem ruínas. É o santuário das lendas. O santuário, em si, é uma capelinha ao centro de tudo, com uma porta dupla de madeira e sem janelas. O maior tesouro da capela é o altar no seu interior — feito de ouro e cravejado de diamantes. Adjacente ao santuário há uma torre, com uma pira no topo."
    },
    {
      type: "text",
      content: "Os Heróis presenciam ela se acender, quando a fênix surge e se aninha lá dentro para morrer!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os três piratas"
    },
    {
      type: "text",
      content: "Após dormir na ilha, o grupo de heróis é acordado pelo mago da corte, na manhã seguinte — ele aparece vivo em cima de seu tapete voador. Traz notícias: o fogo da pira serviu como farol e trouxe à ilha três navios piratas! Cada tripulação é composta por bandidos comuns e tem três vezes mais integrantes que o grupo de personagens. Além disso, cada uma é liderada por um guerreiro, que é seu capitão. O mago parte em seu tapete para buscar ajuda, e pede aos heróis que defendam o santuário, até ele voltar."
    },
    {
      type: "text",
      content: "O nome do primeiro capitão pirata é Caolho, e ele ataca o santuário ainda durante a manhã. Seus homens montam um canhão rudimentar em frente à capela, contendo uma única bala, que usam para arrombar a porta."
    },
    {
      type: "text",
      content: "O nome do segundo capitão pirata é Perna de Pau, e ele ataca o santuário durante a tarde. Seus homens estão armados com flechas de fogo."
    },
    {
      type: "text",
      content: "O nome do terceiro capitão pirata é Mão de Gancho, mas ele espera até a meia-noite para atacar. Antes disso, sem que saiba, um de seus marujos se aproxima da capela para falar com os personagens, ao pôr do sol:"
    },
    {
      type: "text",
      content: "“Bonito! Um templo aos deuses! O ouro do altar foi cavado por escravos, sabiam? E este tesouro acabará nos cofres de um nobre, que dará apenas uma pequena parte a vocês. Proponho algo melhor. Não gostamos do nosso capitão! É um tirano. Um de vocês pode desafiá-lo para um duelo. Se vencer, torna-se o novo capitão. Repartiremos o ouro como iguais e vocês podem começar uma nova vida em nosso navio, livres... e sem servir a ninguém! Pensem nisso.”"
    },
    {
      type: "text",
      content: "Independente da decisão dos heróis, ao fim do último combate, a fênix se levanta da pira e voa nos céus. O símbolo da nova vida que os personagens abraçaram — ou para a qual eles voltaram as costas."
    }
  ]
  },
  {
  id: "47",
  name: "Coisas Velhas",
  theme: "Fantasia",
  image: "/aventuras/coisas-velhas.png",
  summary: "Uma maré de azar leva os heróis à beira da falência. Sua salvação está em um velho taverneiro (que é um guerreiro lendário) que os convida a comprar 'coisas velhas' em seu celeiro, vendendo itens mágicos por uma moeda.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta RPG e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Coisas velhas pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Baixas aventuras..."
    },
    {
      type: "text",
      content: "A temporada de aventuras está na estalagem. O grupo espera na taverna pela próxima jornada, mas nada acontece. Além disso, uma maré de azar engoliu os empreendimentos e fontes de renda do grupo. Crie e descreva as desgraças que assolaram cada personagem! O que resta, após o último mês, é uma pequena quantidade de ouro. ($1d4$ moedas para cada um.)"
    },
    {
      type: "text",
      content: "A salvação para os ouros surge nas palavras do taverneiro, que, ao vê-los desanimados, toma de poeira um baú e de lá de dentro, percebem que tudo está deserto. Fogueiras apagadas podem ser encontradas a cada esquina, em praças e becos. E cadáveres. Um fedor insuportável empesteia o ar. Alguém que examine os mortos, percebe que não estão-los saudáveis antes de morrer. Estão também estão abandonadas ou com pessoas mortas em seu interior. Peça testes ligados à percepção. Os personagens entendem que o local onde é mais provável encontrar sobreviventes é o castelo da (ou a sede de comando local)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O veterano"
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
      content: "“Juntei as peças e descobri que fomos nós! Trouxemos a praga. Peçonha da criatura que estava me perseguindo no bosque. E a trouxemos para cá. A peste se mostrou capaz de se espalhar rapidamente. É uma doença mágica, e bênçãos e curas convencionais não puderam vencê-la. Não foi fatal, não para nós. Porque somos especiais. Mas se provou fatal para todo o resto…”"
    },
    {
      type: "text",
      content: "A tal cabana não fica longe. É uma choupana feita a uma lona com patos. Há algumas plantações, horta e pomares, além de um enorme celeiro."
    },
    {
      type: "text",
      content: "O velho Jeremias está sentado do lado de fora. É um homem alto e ainda de porte atlético, com barba grisalha, pele bastante bronzeada e um chapéu de palha na cabeça. Conhece os personagens e, obviamente, está fazendo a barba no quintal. Depois que termina, os convida a se sentar ao seu lado. Jeremias está preparando sopa de legumes, uma panela apoiada em cima de uma pedra. Entre a panela e a pedra, os jogadores reconhecem uma espada flamejante mágica! Jeremias confirma que os personagens podem mesmo comprar quaisquer objetos no celeiro. “É… sou um sentimental e acabei juntando coisas demais ali dentro. Mas precisa usar o celeiro de novo! E se souberem de tudo, o que eu fiz…?”"
    },
    {
      type: "text",
      content: "“Se interessam pela minha lendária Cassinheira? Sabiam que essa espada já empacou o coração de um dragão branco? E tem um comando mágico para aviar fogo baixo e fogo alto! Não é uma maravilha? Bom, talvez eu possa ser convencido a me desfazer dela pelo preço certo.”"
    },
    {
      type: "text",
      content: "O mestre pode determinar as estatísticas e poderes da espada. Jeremias está ali apenas por causa do interesse em continuar fazendo parte de algo maior que ele, e para dar um pouco de magia para a aventura. Os aventureiros podem persuadi-lo, e se forem gentis, ele pode até contar o que sabe de um jeito mais amigável. Ou podem simplesmente pegar a espada para eles, já que o terreno é fácil."
    },
    {
      type: "text",
      content: "“Que coisa feia, não? Criança! Acham que nasci ontem? Vamos, peguem o saco e partam, deixem a espada e vão se meter em um lugar melhor…”"
    },
    {
      type: "text",
      content: "Se for atacado, Jeremias vai se defender chutando a panela com sopa fervente em cima dos agressores e fazendo a espada flamejante surgir em sua mão com um comando. (Use as estatísticas de um guerreiro de nível elevado. Não se esqueça de preparar uma ficha caprichada para Jeremias e seu fiel lobo gigante, antes de mestrar a aventura!)"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Tesouros insuspeitos"
    },
    {
      type: "text",
      content: "Uma vez no celeiro, peça para que os jogadores rolem testes de percepção e determine quem que, com uma alta rolagem, pode ter o melhor resultado. Se o grupo se sair muito bem, pode encontrar todos os itens! O narrador pode usar cada um, peça que rolem $1d8$. Caso alguém repita um número que outro jogador tirou, terá que rolar de novo. Jeremias irá se desfazer de qualquer um dos itens listados abaixo em troca de uma moeda (de qualquer valor)."
    },
    {
      type: "text",
      content: "Eis o que cada jogador encontra:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "1 - Machado de batalha anão, que estaria sendo usado para cortar lenha..."
    },
    {
      type: "text",
      content: "2 - Anéis feito com uma madeira muito rara. (pode ser moldada por druidas ou draalides)."
    },
    {
      type: "text",
      content: "3 - Uma mochila contendo uma pequena horta: sementes e uma mochila em madeira, feita de couro de dragão branco)."
    },
    {
      type: "text",
      content: "4 - Rolo de madeira com 120 metros de corda de cânhamo, do tipo usado em navios."
    },
    {
      type: "text",
      content: "5 - Picanha levemente envelhecida ao lado de um amontoado de óleos e uma gaiola contendo a casada de um canário."
    },
    {
      type: "text",
      content: "6 - Caldeirão com cem garrafas de vidro vazias e de várias formas diferentes."
    },
    {
      type: "text",
      content: "7 - Barril contendo uma poção mágica a escolha do Mestre."
    },
    {
      type: "text",
      content: "8 - Uma adaga cintilante feita de gelo que nunca derrete."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Conclusão?"
    },
    {
      type: "text",
      content: "Não há final claro para a aventura. Divirtam-se do jeito que preferirem, ou siga uma nova aventura com outros tesouros encontrados! Ou use um desses objetos para continuar a aventura, talvez uma adaga de gelo que nunca derrete, ou uma poção de mana que dá mais energia, ou um machado de anão... quem sabe!"
    }
  ]
  },
  {
  id: "48",
  name: "Assalto às Nuvens",
  theme: "Fantasia",
  image: "/aventuras/assalto-as-nuvens.png",
  summary: "Contratados pelo misterioso 'Mentor' para um roubo de alto risco, os heróis devem se infiltrar na fortaleza voadora da corrupta Ordem do Pégaso, usando disfarces e montarias aladas para saquear o tesouro de um rei.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta RPG e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Assalto às Nuvens pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O mentor"
    },
    {
      type: "text",
      content: "Tempos atrás, os personagens dos jogadores foram convocados através de uma carta por um correspondente misterioso, que se apresenta somente como \"O Mentor\"."
    },
    {
      type: "text",
      content: "Ele marca um encontro com o grupo em um pequeno mosteiro das redondezas e oferece a eles um trabalho de risco, mas que se bem executado, pode trazer um bom pagamento. É um homem ágil, envolto em um robe azul e que usa uma máscara prateada com as feições de uma medusa — jamais diz seu nome ou revela sua verdadeira identidade — ele é gentil, culto e conversa com todos da maneira que um professor falaria a seus alunos."
    },
    {
      type: "text",
      content: "O Mentor propõe ao grupo um plano ousado... saquear uma fortaleza! A fortaleza em questão fica em uma ilha voadora e pertence à Ordem do Pégaso. De acordo com o Mentor, esta ordem de cavalaria alada é uma das mais poderosas — e mais corruptas — do continente e possui castelos e fortificações em diversos reinos, embora goste de agir discretamente e manter sua existência em segredo."
    },
    {
      type: "text",
      content: "O Mentor conta que seu pai foi um cozinheiro e que trabalhava em uma dessas fortalezas. Foi morto pelos cavaleiros por roubar comida da despensa e levar à sua família faminta. O próprio Mentor nasceu na ilha, e tem um mapa do lugar, que desenhou quando criança. Ele tem espionado a Ordem. Ele descobriu que recentemente um rei, que partiu para guerrear em terras distantes, confiou aos cavaleiros o tesouro dele para ser guardado na ilha."
    },
    {
      type: "text",
      content: "O Mentor garante que pode treinar os personagens ao longo de um mês para que aprendam a cavalgar montarias voadoras, e também instruí-los sobre seu plano para roubar o tesouro!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O treinamento"
    },
    {
      type: "text",
      content: "Peça que cada jogador escolha uma montaria alada que combine com seu personagem. Pode ser um grifo, um tapete voador, uma vassoura de bruxa, um balão de ar quente, etc... Eles a recebem do Mentor e são treinados para usá-la."
    },
    {
      type: "text",
      content: "Se esta é a primeira aventura dos personagens, você pode deixar as coisas mais divertidas. O Mentor pede que eles protejam suas identidades com máscaras e nomes falsos. Cada jogador pode descrever como é a máscara do seu personagem e deve escolher o nome de uma cidade que exista no cenário em que estão jogando, como Valkaria, Thedas, Camelot... e por aí vai. Relações interpessoais são estritamente proibidas entre os membros do assalto e tudo que sabem um dos outros são seus nomes de guerra."
    },
    {
      type: "text",
      content: "O Mestre — interpretando o Mentor — deve explicar aos jogadores cada etapa do assalto. Como os personagens conduzem tudo, na prática, depende dos jogadores... e do resultado dos dados!"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "1ª etapa: Asas de cera"
    },
    {
      type: "text",
      content: "O grupo dever voar até a ilha em suas montarias aladas... mas não pode em hipótese alguma ficar na linha de tiro das torres da fortaleza! Caso isso aconteça, se torna alvo de arqueiros e balistas. Os personagens precisam passar em testes para cavalgar e para serem furtivos — aqueles que falham voam alto demais e recebem ataques a distância, podendo sofrer uma quantidade elevada de dano enquanto ainda estão no ar."
    },
    {
      type: "text",
      content: "2ª etapa: Cavalo de madeira"
    },
    {
      type: "text",
      content: "Uma vez que tenha aterrissado na ilha o grupo deve se esconder em um bosque próximo, cortar árvores e construir a escultura de um cavalo alado de madeira. Para isso, pelo menos um personagem deve passar em testes envolvendo resistência (cortar lenha,) força (carregar os troncos), e em conhecimento de marcenaria (fabricar a escultura). A escultura tem um fundo falso e os personagens precisam se esconder em seu interior com a finalidade de se infiltrar na fortaleza. O Mentor se disfarça como um artesão que mora na ilha e oferece a escultura aos cavaleiros como um presente, mas se o grupo não passou nos testes, a escultura fica pouco convincente e os personagens são descobertos! Caso isso aconteça, os guardas do portão libertam um monstro preso em uma jaula para lidar com o grupo."
    },
    {
      type: "text",
      content: "3ª etapa: Soldados formiga"
    },
    {
      type: "text",
      content: "Os personagens saem do cavalo de madeira durante a noite e vão até a torre onde está o tesouro. Eles devem subir uma escadaria em espiral e lutar contra guerreiros extremamente leais à Ordem do Pégaso. Devido à arquitetura da escada os defensores da torre têm bônus em ataques corpo-a-corpo, enquanto os invasores têm penalidades. Há pelo menos um guerreiro defendendo a torre para cada membro no grupo, mas se os guardas no portão foram alertados os personagens encontram o dobro disso!"
    },
    {
      type: "text",
      content: "4ª etapa: Chuva de ouro"
    },
    {
      type: "text",
      content: "O grupo chega até o tesouro do rei guerreiro, que fica em uma sala no topo da torre — o piso é forrado com moedas de ouro. De acordo com o plano do Mentor, devem ler um pergaminho mágico fornecido por ele para conjurar uma bola de fogo e explodir a parede da sala. Então atiram o restante do ouro para fora da ilha voadora e fogem nas montarias aladas, trazidas até eles pelo próprio Mentor."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo"
    },
    {
      type: "text",
      content: "Para dar tempo aos personagens de retirar todo o ouro, o Mentor se sacrifica heroicamente. Saca a espada, salta para a torre e luta contra os soldados subindo pela escadaria. Durante a fuga os personagens são alvejados por arqueiros, antes de fugir. Uma vez que estejam no solo, conseguem recuperar parte do ouro. Descobrem, porém, que a ilha flutuante se movimenta e que a maioria dele se espalhou pelos campos — onde agora a população camponesa corre enlouquecida para apanhar as moedas!"
    },
    {
      type: "text",
      content: "Este era o objetivo do plano do Mentor, o tempo todo: distribuir a riqueza da aristocracia entre a população mais pobre."
    }
  ]
  },
  {
  id: "49",
  name: "O Chão é Lava",
  theme: "Fantasia",
  image: "/aventuras/o-chao-e-lava.png",
  summary: "A cidade de Panârcania, famosa por proibir o voo após uma revolução contra magos, é invadida por um portal de lava elemental. Os heróis devem lutar para sobreviver e são confrontados por um herdeiro dos antigos tiranos com uma oferta tentadora.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. O chão é lava pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "É proibido voar!"
    },
    {
      type: "text",
      content: "Em meio a mais uma de suas viagens, o grupo acaba passando pela antiga cidade-estado de Cinco Torres — agora rebatizada de Panârcania. Não são necessários testes para saber mais sobre a localidade, pois é famosa a história da “cidade onde é proibido voar”. Os personagens podem ouvi-la enquanto descansam em uma taverna localizada não muito longe dos muros externos."
    },
    {
      type: "text",
      content: "Há alguns anos, quatro magos dedicados cada um a um elemento — água, ar, fogo e terra — governaram a cidade despoticamente. As torres que eram as suas moradas faziam parte dos muros que a cercavam e, juntamente a uma imensa torre central, funcionavam como pilares sustentando uma imensa plataforma flutuante. Sobre a plataforma ficava um bairro nobre acessível apenas aos usuários de magia que pudessem levitar de alguma forma. A “cidade alta” como era conhecida, concentrava os templos, as bibliotecas e os palácios dos magos. No nível do solo, dentro dos muros, viviam servos e aprendizes. A população era oprimida de maneira constante, trabalhando longos horários em fornos e laboratório alquímicos insalubres. Sofria maus tratos constantes por parte dos magos e era usada em experimentos."
    },
    {
      type: "text",
      content: "Um dia a população se cansou e iniciou uma revolução, matando ou exilando as famílias de magos que governavam. As bibliotecas e laboratórios foram pilhados, suas maravilhas redistribuídas entre o povo, e a torre central e a plataforma flutuante, destruídos. As torres dos quatro elementalistas foram convertidas em torres comuns de vigia e Panârcania passou de uma magocracia a uma república livre. Graças à novas bibliotecas e escolas públicas acessíveis a todos, mesmo o mais simples camponês passou a gozar de educação elevada e entender rudimentos de alquimia, astronomia e filosofia e das artes arcanas em geral. Panârcania agora possui uma quantia generosa de locais em que magos podem realizar pesquisas e também diversas lojas de itens mágicos."
    },
    {
      type: "text",
      content: "Há leis inusitadas, porém: é proibido voar ou erguer qualquer edifício novo que tenha mais do que um andar. Magias de levitação não funcionam devido a um encantamento conjurado ainda durante a revolução, e mesmo seres alados não conseguem fazer suas asas funcionarem direito dentro dos muros da cidade."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Maré de fogo"
    },
    {
      type: "text",
      content: "Enquanto os personagens descansam na taverna, jantam e se preparam para seguir viagem no dia seguinte, algo acontece: uma substância vermelha e incandescente começa a invadir o chão da taverna e tudo que ela toca começa a se incendiar."
    },
    {
      type: "text",
      content: "É lava!"
    },
    {
      type: "text",
      content: "Ela está jorrando de um pequeno portal circular mágico, que se manifestou na praça central da cidade e, em pouco tempo, se alastra em todas as direções, arrasando Panârcania. Há pouco que os personagens possam fazer quanto a isso. O portal está conectado direto ao Plano Elemental da Terra e é de dificílima obstrução. Erguer barreiras pode criar proteções temporárias contra a lava, mas não impede um incêndio generalizado, e o nível da lava vai apenas subindo com o tempo. Tocar na lava causa uma grande quantidade de dano por fogo a cada turno. Permanecer dentro de um prédio em chamas, exige testes de resistência para não sufocar pela fumaça."
    },
    {
      type: "text",
      content: "Como os personagens saem desta situação será decidido por seus recursos e inventividade, mas existe ao menos uma rota de fuga. Há quatro prédios entre a taverna onde os personagens estão e os muros da cidade: uma casa, uma estalagem, uma ferraria e uma biblioteca. A lava avança para um prédio novo (nessa ordem) a cada rodada, e a cada três rodadas sendo tocado pela lava, o prédio se incendeia e desaba. Os personagens podem tentar subir no teto da taverna e realizar testes para saltar entre os tetos, até alcançar a segurança dos muros."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O geomante"
    },
    {
      type: "text",
      content: "A menos que tenham um nível de poder elevado, ou sejam absurdamente inventivos, dificilmente os jogadores conseguem salvar Panârcania, que é destruída pelo incêndio, junto ao conhecimento que continha. Sua população morre durante o incidente da misteriosa maré de fogo e apenas uma parte dela consegue chegar com segurança aos muros."
    },
    {
      type: "text",
      content: "Quando grande parte do estrago está feito, a lava solidifica imediatamente. Pelo portal surge um mago, pronto a atacar os muros e massacrar o restante dos sobreviventes. Seu nome é Axton Pele de Pedra. O brasão desenhado em seus robes o identifica como membro da família De Pietris, parte dos antigos governantes da cidade que foram exilados. Axton é neto de Prágma, o antigo Elementalista da Terra que ocupava uma das cinco torres originais."
    },
    {
      type: "text",
      content: "Construa a ficha de Axton com um nível adequado ao do grupo, focando em magias voltadas para combate. Ele está acompanhado por dois elementais da terra. Antes de iniciar o ataque, Axton tenta manipular os personagens e trazê-los para seu lado. Fala sobre como é um dos herdeiros de direito da antiga magocracia, como uma das torres pertenceu a seu avô e, para justificar o massacre que realizou, descreve diversos crimes cometidos pelos rebeldes durante a revolução. Diz que tem acompanhado a trajetória do grupo, sabe que são pessoas com habilidade extraordinárias e quer fazer um acordo."
    },
    {
      type: "text",
      content: "Axton oferece uma recompensa em ouro, seus conhecimentos e as demais torres aos aventureiros — basta que fiquem ao seu lado e o ajudem a reconstruir a cidade da maneira que era no passado. Também promete poupar a vida de qualquer sobrevivente que se entregue a ele e jure servi-lo."
    },
    {
      type: "text",
      content: "Mas um grupo de heróis jamais aceitaria tal proposta, certo?"
    },
    {
      type: "text",
      content: "Certo?!"
    }
  ]
  },
  {
  id: "50",
  name: "A Masmorra",
  theme: "Fantasia",
  image: "/aventuras/a-masmorra.png",
  summary: "Contratados para encontrar um bardo desaparecido no castelo de um necromante recém-derrotado, os heróis devem explorar a masmorra, enfrentando os mortos-vivos do barão e desvendando um segredo sombrio envolvendo a realeza.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. A masmorra pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Castelo tomado"
    },
    {
      type: "text",
      content: "O bardo Doremi — um dos artistas favoritos da filha da rainha — abandonou a corte em busca de inspiração para mais uma de suas composições, mas está desaparecido! Os personagens foram contratados pela princesa para investigar seu paradeiro. Estão há dias na estrada viajando rumo ao último local em que foi avistado: o feudo do Barão Muramatta."
    },
    {
      type: "text",
      content: "Ao chegarem ao seu destino, eles encontram a vila local sob toque de recolher, sinais de uma batalha de cerco entre cavaleiros e mortos-vivos e o castelo do barão danificado e com uma aparência corrompida. O grupo logo é abordado por cavaleiros, que explicam a situação: eles descobriram que Muramatta era, na verdade, um necromante! Os cavaleiros pertencem a uma ordem de paladinos que invadiu o castelo e, após dias de cerco, destruíram o barão. Apesar disso, nem todas as áreas do castelo foram exploradas, e eles lutam constantemente contra os monstros que povoam o lugar para manter controle da fortificação. Enquanto andam pelos corredores, os personagens podem ver grupos duelando contra demônios e outras criaturas poderosas."
    },
    {
      type: "text",
      content: "Os aventureiros são escoltados até a sala do trono, onde o líder dos paladinos discute estratégias com os demais heróis, tem olheiras profundas e parece exausto."
    },
    {
      type: "text",
      content: "— Não sei de nenhum bardo! — diz o paladino — É improvável que esteja vivo, mas se estiver, é possível que tenha acabado na masmorra do necromante. Ainda não pudemos explorá-la. Estamos ocupados mantendo posições no castelo e protegendo a vila... Mas aceitaria a ajuda de vocês! Entrem lá e destruam qualquer criatura maligna. Em troca podem ficar com os tesouros que encontrarem."
    },
    {
      type: "text",
      content: "Se o grupo resolver aceitar, o paladino entrega a eles a chave da masmorra."
    },
    {
      type: "text",
      content: "Há acomodações para os personagens no castelo e na vila, caso o grupo resolva interromper sua exploração da masmorra para descansar, mas ambos os lugares são mal-assombrados e provocam pesadelos vívidos que impedem um sono tranquilo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Sala A: corredor alagadiço"
    },
    {
      type: "text",
      content: "A entrada da masmorra é uma porta de madeira reforçada, que pode ser aberta com a chave entregue pelo líder dos paladinos. Logo atrás dela há um longo corredor com algumas complicações para ser atravessado. Em primeiro lugar, é muito estreito, permitindo o grupo avançar apenas em fila indiana — peça que definam as posições dos personagens antes de entrar. Em segundo lugar, está alagado e há água que sobe até a cintura de um humano de estatura média. A água gélida constitui um terreno difícil e impõe penalidades em deslocamento e causa dano de frio a cada rodada. Por fim, está escuro e embora seja possível criar fogo — mundano ou mágico — é impossível mantê-lo aceso por mais que um turno. Luz mágica pode ser mantida normalmente (O mesmo se aplica ao restante da masmorra)."
    },
    {
      type: "text",
      content: "O corredor é guardado por $1d3$ guerreiros esqueletos, também em fila. Em algum lugar, no chão submerso, há um molho de chaves que dá acesso as Salas C e D."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Sala B: encruzilhada"
    },
    {
      type: "text",
      content: "Há aqui duas portas de ferro com a superfície congelada. Elas dão acesso às salas C e D e causam dano por frio a qualquer um que tente arrombá-las. É possível abri-las usando o molho de chaves encontrado na Sala A."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Sala C: câmara da aflição"
    },
    {
      type: "text",
      content: "Há diversos instrumentos de tortura nessa sala — damas de ferro, garrotes, rodas — e quem entra precisa fazer testes para não ficar abalado. Ela é guardada por um guerreiro esqueleto que trabalha como carrasco. Ao perceber a presença dos personagens ele solta imediatamente um troll enfurecido contra eles. Por ter sido torturado, o troll tem metade dos pontos de vida, mas está completamente enlouquecido e é impossível se comunicar com ele."
    },
    {
      type: "text",
      content: "O esqueleto possui um molho com chaves que abrem a porta e as celas da Sala D e a porta da Sala E."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Sala D: prisão"
    },
    {
      type: "text",
      content: "Há outro corredor estreito aqui e seis celas. Cada uma contém o cadáver de um habitante da vila, que morreu e voltou como um zumbi. É possível atacar os zumbis dentro das celas à distância, mas ficar adjacente às grades deixa os personagens expostos a mordidas. No final do corredor, há outra porta de ferro com frio mágico, que dá acesso à Sala E, e é aberta pela chave encontrada na Sala C."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Sala E: poço do esquecimento"
    },
    {
      type: "text",
      content: "Uma sala com alçapão ao centro. Embaixo dele há um poço escuro com uma queda de doze metros e nenhum apoio para descer. Ao fundo do poço há um cadáver congelado, que pode ser identificado por suas vestes como o bardo Doremi segurando em seus braços uma harpa."
    },
    {
      type: "text",
      content: "O grupo é atacado pelo fantasma do bardo quando adentra o aposento — use a ficha de um morto-vivo a sua escolha, mas este é vulnerável a magias de fogo. Enquanto ataca, canta uma música que contém sua história: ele foi enviado ao castelo pela rainha para espionar o barão — mas a rainha sempre soube que o barão era um necromante e contava com a morte do bardo durante o ataque dos paladinos — um plano para afastá-lo da princesa, por quem estava apaixonado."
    },
    {
      type: "text",
      content: "A harpa de Doremi é mágica e quando acionada toca sempre a mesma melodia. A melodia é sua obra-prima e está predestinada a tornar famosa qualquer letra que seja composta para ela por um bardo — se não há um bardo no grupo, os personagens podem encontrar um para terminar a composição."
    },
    {
      type: "text",
      content: "A letra pode versar sobre qualquer feito ou tema... mas se os personagens vão usar a música para confrontar ou expor a rainha já é outra história!"
    }
  ]
  },
  {
  id: "51",
  name: "Galáxia Distante",
  theme: "Horror Cósmico",
  image: "/aventuras/galaxia-distante.png",
  summary: "Perdidos em uma galáxia moribunda, os heróis encontram o naufrágio de uma expedição anterior e descobrem que estão sendo alvos de um 'deus da inexistência' adormecido, que os força a escolher entre servi-lo ou lutar pela própria galáxia.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de aventuras espaciais — Brigada Ligeira Estelar, Fronteira do Império, Space Dragon, Starfinder e outros sistemas que comportem o gênero. É uma história simplificada, sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Galáxia Distante pode ser jogada como aventura avulsa ou como parte de uma campanha maior."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Perdidos no espaço"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores estão a bordo de sua espaçonave ou então são passageiros de uma nave alheia. Em meio a mais uma viagem, acordam com um alerta dos computadores de bordo. Os equipamentos revelam que a nave não se encontra na órbita do planeta ou estação espacial ao qual estavam destinados e nem mesmo estão em um sistema solar reconhecível. Testes relacionados à astronomia revelam através da observação das estrelas que esta é outra galáxia inteiramente."
    },
    {
      type: "text",
      content: "Como tudo aconteceu é bastante nebuloso e depende do tipo de tecnologia empregada para locomoção interplanetária no cenário em que foi ambientada a aventura. Novos testes de perícias podem levar a hipóteses. Uma anomalia no motor de dobra, um fenômeno no hiperespaço o uso de um portal de retransmissão de massa defeituoso... o que for mais apropriado. A única conclusão possível ainda é a mesma: se quiserem viver, os personagens precisam encontrar um planeta habitável, enquanto investigam uma maneira de voltar para casa."
    },
    {
      type: "text",
      content: "O sistema em que estão atualmente não parece ser capaz de abrigar vida e orbita uma envelhecida e moribunda estrela vermelha. A solução é saltar às cegas, escolhendo sistemas que tenham mais probabilidade de vida. Mas a situação se repete. Um mês se passa, mas em cada sistema visitado a nave se depara apenas com estrelas vermelhas. Desesperança e pesadelos terríveis começam a acometer a tripulação. Testes de vontade podem ser feitos, para representar a passagem do tempo e a gradual perda de saúde mental."
    },
    {
      type: "text",
      content: "Até que finalmente, um dia, os sensores apontam a presença de vida: uma nave que avança com velocidade máxima contra os personagens. O que acontece a seguir depende de como os jogadores lidam com a ameaça. A nave hostil pertence há algum povo ou cultura da mesma galáxia que os personagens vieram e é um veículo de exploração. Apesar disso, tem inscrições com hieróglifos feitos com algum tipo de fluido e há esqueletos acorrentados de maneira ritualística à sua blindagem. Há apenas quatro tripulantes detectados a bordo."
    },
    {
      type: "text",
      content: "Em termos de regras, é um veículo capaz de fazer frente ao poder de fogo da nave dos personagens e há uma chance para que um pequeno combate de manobras entre as duas possa acontecer. Assim que possível, a nave inimiga tenta abalroar e abordar seu alvo. Opcionalmente, se é um cenário de mechas, o combate preliminar entre naves pode envolver robôs gigantes."
    },
    {
      type: "text",
      content: "Os hostis são exploradores e cientistas. Foram trazidos à galáxia remota meses antes dos personagens. Ficaram sem suprimentos e acabaram enlouquecendo. Os quatros sobreviventes se tornaram canibais, se alimentando de um estoque refrigerado de corpos, que outrora foram os demais membros da sua expedição. Apesar de estarem em desvantagem numérica, os canibais não são pessoas comuns. Anos de exposição a raios cósmicos em meio a suas viagens fizeram com que estes exploradores desenvolvessem mutações. Use a ficha de soldados adequados como nível de desafio ao grupo, mas cada inimigo tem também um poder peculiar: invisibilidade, a habilidade de atear fogo a si mesmo e rapidamente consumir o oxigênio ao redor, membros elásticos, superforça e blindagem natural..."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O deus adormecido"
    },
    {
      type: "text",
      content: "Seja através de combate durante a abordagem, seja abatendo a nave hostil antes que tenha tempo de executar sua manobra, os personagens encontram uma caixa-preta. Ela contém os diários de bordo do capitão da nave exploradora. Ouvir e analisar seus diários leva certo tempo e exige testes de vontade para não ter a sanidade comprometida de alguma forma. Entre narrativas de muitos horrores e uma espiral de insanidade, a voz do capitão revela que a loucura da tripulação não foi causada apenas pelas circunstâncias. Foi potencializada por pesadelos induzidos por uma onda psíquica proveniente do centro da Galáxia, que ele não teve tempo de investigar devido a um motim."
    },
    {
      type: "text",
      content: "Sem nada mais a fazer, só resta aos jogadores investigarem o epicentro galáctico em busca de uma solução para seus problemas."
    },
    {
      type: "text",
      content: "O centro da galáxia morta é um buraco negro, mas nem de longe é a visão que mais apavora os personagens. Uma criatura gigantesca que concentra em si uma quantidade impossível de energia, mesmo para seu tamanho, flutua na periferia do poderoso campo gravitacional. O ronco do ser monstruoso propaga ventos pelo vácuo que impedem que o gás presente na galáxia se esfrie e colapse, criando novas estrelas e anulando a própria possibilidade de formação de vida. É uma espécie de guardião adormecido guardando um portal antigo ou anomalia que pode ser empregado para voltar para casa. A identidade do monstro não permanece misteriosa por muito tempo. Ele mesmo se apresenta, entrando em comunicação telepática com os personagens."
    },
    {
      type: "text",
      content: "É o deus da inexistência. Ou ao menos ele acredita ser. Uma entidade antiquíssima que em breve despertará de uma longa gestação para consumir e se alimentar de civilizações inteiras. Como paliativo ao genocídio, os mortais podem em vez disso escolher adorá-lo, alimentando-o com seu temor ou fé. A entidade não faz distinção entre uma coisa e a outra. Ela trouxe diversos exploradores a sua galáxia para dar a eles uma escolha:"
    },
    {
      type: "text",
      content: "Podem se tornar seus arautos batizados em radiação sagrada, recebendo poderes ou pequenos bônus em sua ficha — e deformações físicas! — viajando pelo universo e convertendo povos a religião do novo deus."
    },
    {
      type: "text",
      content: "Ou podem escolher honrar o aspecto divino que ele representa e usarem uma nave ou robô para desafiá-lo em um combate singular até a morte..."
    }
  ]
  },
  {
  id: "52",
  name: "A Permuta",
  theme: "Fantasia",
  image: "/aventuras/a-permuta.png",
  summary: "A morte brutal de um bardo por um troll leva os heróis a investigar, desvendando uma trama de troca de bebês, um lorde troll exilado e o segredo macabro por trás do ensopado de uma estalagem.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia medieval — Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. A permuta pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Morte na estalagem"
    },
    {
      type: "text",
      content: "Ao cair da noite, o grupo de heróis chega à estalagem O Ensopado de Carne, conhecida por seu refeitório de luxo e música ao vivo. É administrada por Agiulfo, hábil guerreiro humano, mas ele deixou a cidade há algumas semanas para buscar suprimentos. Todos são recebidos por sua filha, Aelia, que é quem está gerenciando o lugar."
    },
    {
      type: "text",
      content: "Os heróis têm um encontro marcado no local com Diógenes, bardo muito apreciado na região por seus poemas satíricos. Receberam uma mensagem dele, dizendo estar interessado em contratá-los para um trabalho. Ao adentrarem o local, vêem o bardo pela primeira vez. É literalmente um sátiro! Tem o aspecto de um homem-bode, canta e faz gracejos em cima do palco. O título da canção sendo encenada é “Jacó da Lenha”. Versa sobre um troll grotesco vivendo disfarçado como lenhador. Personagens passando nos testes apropriados notam algumas coisas. A canção, embora faça rir, se refere a alguém real e é bastante pesada. Além disso, Diógenes tenta tirar o foco de si e cair nas graças do público, ridicularizando outro não-humano em seu lugar."
    },
    {
      type: "text",
      content: "Após a apresentação, o sátiro convida os heróis para que sentem à mesa. Pede a especialidade da casa para todos, pratos fumegantes de ensopado são servidos de cortesia. Diógenes come e faz perguntas: há quanto tempo o grupo está junto? Como se conheceram?"
    },
    {
      type: "text",
      content: "Quando vai finalmente revelar o trabalho, sente uma dor forte no estômago. Ele se joga ao chão e começa a urrar de dor. De repente, uma garra de troll emerge de dentro dele e rasga sua carne, matando-o. A garra viva luta contra os heróis e, ao ser derrotada, se regenera e foge, saltando pela janela, sumindo na escuridão. Depois do ocorrido, homens irados na taverna dizem saber quem matou o bardo e pedem a ajuda do grupo. Uma turba logo se forma. A guarda é chamada e pessoas furiosas partem armadas para os confins da cidade."
    },
    {
      type: "text",
      content: "Ao chegar lá, encontram o suspeito. É Iácobo, um troll lenhador vivendo em meio aos humanos — O tal “Jacó” referenciado na música! Atacado pela turba, mata um homem com seu machado enorme, foge para o bosque e — usando trilhas conhecidas somente por ele — escapa. Os heróis são contratados pela guarda da cidade para entrar no bosque e capturar o lenhador."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Um bosque de enigmas"
    },
    {
      type: "text",
      content: "Os heróis adentram o bosque em busca do fugitivo e, após navegar pela mata habitada de monstros, chegam a uma ponte cruzando um abismo. Ela é guardada por Quebra-Cabeças, uma poderosa bárbara humana. Apesar do seu aspecto selvagem, ela tem uma inteligência acima da média e é viciada em enigmas."
    },
    {
      type: "text",
      content: "A ponte é encantada. Só Quebra-Cabeças pode permitir a travessia. Para passar, os heróis precisam resolver três charadas ou derrotá-la em combate. Se o desafio for vencido, ele conversa com os heróis e colabora. Ela conta ser a filha adotiva do antigo troll guardião da ponte. Seu pai desapareceu há muito tempo, mas ela não pôde sair para procurá-lo, devido a votos sagrados de nunca deixar a passagem desguarnecida. Se o grupo pergunta sobre o fugitivo, ela diz ter avistado Iácobo. O lenhador se recusou a cumprir os desafios. Em vez disso, derrubou uma antiga sequóia com seu machado e a usou para fazer uma ponte sobre o abismo, sumindo do outro lado!"
    },
    {
      type: "text",
      content: "Antes dos heróis partirem, Quebra-Cabeças observa: “Sou uma humana criada por um troll. Ele é um troll vivendo em meio a humanos. Certamente, há uma conexão. Peço que o encontrem. E também o meu pai!”"
    },
    {
      type: "text",
      content: "O grupo chega a uma chácara ao fim do bosque com plantações de grãos. Deparam-se com uma matilha de cães caçadores mortos a machadadas. Este lugar está conectado à cidade por uma estrada, mas ela é muito mais longa do que a rota por onde os personagens vieram através da mata. Na chácara há uma cabana e, dentro dela, um alçapão aberto no chão. O alçapão conduz a um corredor, onde os heróis descobrem o cadáver de Agiulfo, o dono da estalagem. O cadáver data de semanas e foi morto por uma armadilha. A morte parece ter sido acidental. No fim do corredor há um laboratório, onde um velho troll sem pernas, com horríveis queimaduras de ácido, ataca os personagens."
    },
    {
      type: "text",
      content: "Iácobo surge e interrompe a luta! Havia saído para buscar ervas com propriedades analgésicas para o velho troll delirante. Iácobo narra o que foi revelado a ele pela criatura em um momento de lucidez: o velho troll foi seu guardião e o lenhador é, na verdade, o príncipe herdeiro de um reino subterrâneo. Sua família original foi dizimada por heróis anões. O velho troll o trouxe à superfície ainda bebê, onde o trocou por uma criança humana, uma órfã deixada no templo de um deus benevolente. Ele fez isso para despistar inimigos atrás do príncipe."
    },
    {
      type: "text",
      content: "Seguindo os costumes dos trolls, ele criou a orfã como sua filha e encontrou uma ponte para guardar. O velho troll, porém, foi capturado por Agiulfo. O aventureiro passou a alimentar a criatura com grãos e a arrancar pedaços do corpo dela para fazer o caríssimo ensopado da sua estalagem! Os poderes regenerativos do troll garantiam um suprimento inesgotável de carne. Agiulfo manteve o segredo por anos. Morreu por um descuido, plantando armadilhas para proteger a chácara. Em sua ausência, a filha Aelia — especula Iácobo — não deve ter seguido a receita do pai direito, um pedaço de carne mal cozida regenerou e matou o bardo Diógenes."
    },
    {
      type: "text",
      content: "Iácobo pede ajuda aos heróis para levar o velho troll até a ponte de Quebra-Cabeças. Uma vez na ponte, o grupo nota fumaça vindo da direção da cidade. Ao chegarem lá, descobrem a origem do ataque:"
    },
    {
      type: "text",
      content: "A garra viva regenerou e virou um troll inteiro!"
    }
  ]
  },
  {
  id: "53",
  name: "Uma Trilha no Céu",
  theme: "Fantasia",
  image: "/aventuras/trilha-no-ceu.png",
  summary: "Contratados para capturar uma feiticeira fora da lei, os heróis devem rastreá-la através do céu, superando desafios climáticos e criaturas aladas em uma jornada que revela a verdadeira motivação da fugitiva.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia — 3D&T Alpha, Dragon Age, Tormenta20 e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme a necessidade. Uma trilha no céu pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A fugitiva"
    },
    {
      type: "text",
      content: "Nas últimas semanas, personagens do grupo vêm seguindo pistas no encalço de uma misteriosa feiticeira fora da lei. A criminosa realizou diversos atentados contra outros usuários de magia, mas pouco se sabe a respeito. Autoridades espalharam cartazes com um retrato falado da vilã e ofereceram uma boa recompensa em moedas de ouro por sua captura. No entanto, não conhecem seu nome verdadeiro nem têm maiores detalhes ou informações."
    },
    {
      type: "text",
      content: "A aventura começa com o grupo chegando à torre de um mago. O topo da construção foi destruído pelo que aparenta ter sido incêndio. No pátio ao redor da torre, há pedras e vigas de madeira junto a pilhas de cinzas. Personagens com capacidades de conjurar magia arcana reconhecem claramente a arma do atentado... Uma bola de fogo! Existe evidente presença de energias místicas irradiando de toda a área. Porém, é impossível diferenciar aquelas vindas da própria torre das energias residuais do ataque."
    },
    {
      type: "text",
      content: "O mago habitante do local apresenta-se como Esmér Destagiros. É um recluso e amargurado sábio humano. Ele desconhece o que motivou o ataque. Só foi capaz de apagar o fogo por ser especialista em magias climáticas. Ele invocou chuva, impedindo as chamas de se espalharem. Durante a confusão, avistou a feiticeira. Quando foi confrontá-la, ela fugiu, levitando pelo céu."
    },
    {
      type: "text",
      content: "Contudo, antes, Esmér conseguiu notar algo: a feiticeira estava muito doente! Acometida por uma rara enfermidade conhecida como “Síndrome do esvanecer”. Ele explica que quem desenvolve esse mal perde aos poucos seu vigor e começa a secretar fluido místico pela pele. Isso deixa vestígios translúcidos, fáceis de serem rastreados por olhos atentos. Passar em um teste de conhecimentos médicos ou arcanos, além disso, revela que a síndrome é mais comum em quem aprendeu a usar magia ainda na infância, ou em arcanistas que alimentam seus feitiços com sentimentos negativos."
    },
    {
      type: "text",
      content: "Esmér oferece uma recompensa adicional pela captura da feiticeira, pois deseja saber porque se tornou um alvo. No entanto, observa, como ela fugiu voando, o grupo precisa rastreá-la através do ar! Caso não tenham meios para voar de maneira prolongada, oferece a eles um pergaminho contendo um instável encantamento. O sortilégio permite caminhar pelos céus, tal qual andar por estradas ou subir em ladeiras. Mas é inexato. Dura pouco mais de dois dias. Se o grupo ainda estiver muito alto quando seu efeito acabar, terá uma longa queda até se destroçar no chão."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Excursão celestial"
    },
    {
      type: "text",
      content: "A viagem através dos céus acontece como uma “montagem cinematográfica”, em que o grupo precisa fazer vários testes de perícias ligadas a magia arcana ou conhecimento para rastrear a feiticeira. Personagens podem se revezar livremente para fazer esses testes de rastreio e podem substituí-los por testes ligados a percepção — mas isso aumenta a dificuldade. Também podem, caso consigam justificar, utilizar outra proficiência, como por exemplo, um druida usando uma habilidade social para falar com pássaros e pedir informações."
    },
    {
      type: "text",
      content: "Ao todo, a expedição precisa passar em seis testes. Cada um representa mais ou menos 8h de viagem dentro do jogo. Falhar em um teste significa que os rastros são perdidos, e é preciso gastar cerca de 1h para retomá-los."
    },
    {
      type: "text",
      content: "Antes de qualquer coisa, é preciso fazer testes contra medo (de altura!), para não sofrer um redutor no primeiro teste de rastreio. Testes de destreza ou habilidade também são necessários por causa dos ventos. Quem falha nesses perde seu chapéu ou outro objeto a sua escolha. Após o segundo teste de rastreio, o grupo começa a subir alto nos céus. Calcule o horário da partida. Personagens viajando durante o dia necessitam estar com chapéus de abas largas por causa do sol — ou sofrem insolação, recebendo até o fim da aventura redutores em todas as suas habilidades. Se viajam durante a noite, ficam expostos a ventos gélidos. A menos que estejam protegidos, sofrem dano por frio."
    },
    {
      type: "text",
      content: "A partir do terceiro teste de rastreio, o grupo deve fazer testes de resistência física para não ficar fatigado devido ao ar rarefeito e ao sono. O quarto teste de rastreio tem uma dificuldade acrescida, pois é preciso atravessar uma súbita tempestade! Ao passar por ela, cada integrante da expedição torna-se alvo de um relâmpago, ou outra magia elétrica. Por fim, entre o quinto e o sexto teste, há o ataque de um grifo (ou de uma revoada deles. Ou de outro monstro alado que sirva como desafio!). Após o sexto teste de rastreio, caso a expedição tenha acumulado mais de três falhas, o encantamento do pergaminho é interrompido, resultando em uma queda de 6km. Se ninguém preparou magias ou outros meios para continuar voando... A aventura tem um final trágico!"
    },
    {
      type: "text",
      content: "Do contrário, um tapete voador é encontrado, escondido em meio às nuvens. Sobre ele está a feiticeira fugitiva, inconsciente. A jornada cobrou seu próprio preço."
    },
    {
      type: "text",
      content: "O tapete só vai para cima e para baixo. Tentar comandá-lo faz com que desça até as ruínas de uma casa de barro, antiga morada de pessoas humildes. Perto da casa, há uma aldeia. Se a feiticeira for levada até lá, é reconhecida prontamente por habitantes locais. Era a filha do aprendiz de um mago. Há muitos anos, durante um rigoroso inverno, o aprendiz roubou suprimentos da torre do mestre e os distribuiu entre o povo. Para puni-lo, o mestre o desintegrou! A feiticeira cresceu obcecada por vingança, aprendeu a usar magia por conta própria e matou o mago. Vivia oculta em meio ao firmamento e levitava por longas distâncias para saquear os domínios de arcanistas ricos e poderosos."
    },
    {
      type: "text",
      content: "Seu nome é Celeste, e seu destino caberá ao grupo decidir."
    }
  ]
  },
  {
  id: "530",
  name: "Sechpuluvumcha!",
  theme: "Terror",
  image: "/aventuras/sechpuluvumcha.png",
  summary: "Em um seminário, os heróis investigam o desaparecimento de jovens, descobrindo que um acadêmico fanático invocou Sechpuluvumcha, uma antiga deusa-mãe devoradora que se manifesta como uma toupeira com tentáculos.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de terror e aventuras pulp — Chamado de Cthulhu, Rastro de Cthulhu, Savage Worlds e outros sistemas que comportem o gênero. É uma história simplificada, sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Pode ser jogada como aventura avulsa ou como parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A entidade"
    },
    {
      type: "text",
      content: "Poucos ouviram falar de Sechpuluvmcha, a deusa-mãe devoradora. Não faltam controvérsias quanto à origem do seu nome entre os linguistas — e sobre a pronúncia do mesmo. Teria sido uma antiga divindade etrusca, ligada à agricultura."
    },
    {
      type: "text",
      content: "Os únicos registros escritos a mencioná-la são os Libri Telluria, fragmentos de textos sagrados, supostamente traduzidos e compilados pelo romano Titus Caelius Adranos, “o poeta de mil línguas”."
    },
    {
      type: "text",
      content: "Os eventos relatados neles remontam a um período anterior ao tempo dos manuscritos originais. Mencionam cultos na península itálica e na região dos Alpes."
    },
    {
      type: "text",
      content: "A deusa é descrita como uma entidade desinteressada dos mortais, vivendo nas entranhas do solo e venerada por temor. A cada ciclo de estações, sacrifícios humanos eram feitos a ela para garantir o crescimento de colheitas e impedir tremores de terra."
    },
    {
      type: "text",
      content: "Sechpuluvmcha foi retratada como uma imensa toupeira sem olhos, do tamanho de um urso, com garras fortes o bastante para cavar e destruir colinas inteiras. Tinha uma cabeça em formato de estrela, tomada de tentáculos, capazes de ler o espírito de uma pessoa e conhecer todo seu passado. Uma hipótese vigente é que o protoculto ao seu redor foi mais tarde diluído pelo contato com outros povos e sincretismo religioso e sendo substituído aos poucos pela adoração de divindades pastoris mais amenas, como Cel, a latina Tellus Mater, e a grega Gaia."
    },
    {
      type: "text",
      content: "Na comunidade acadêmica, os Libri Telluria são conhecidos somente por uma restrita maçonaria de filólogos e teólogos e considerados farsas por muitos deles. Mas a obscura “deusa” existe. Na verdade, é uma criatura extradimensional, trazida à Terra há muitos anos, por um ritual feito durante um eclipse. Por favorecer lugares escuros e quentes, após o retorno da luz solar, matou o responsável pela invocação e se incrustou nas camadas mais fundas do manto terrestre, onde hoje vive... até ser invocada por um novo chamado!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os acontecimentos"
    },
    {
      type: "text",
      content: "O Doutor Emílio Zampa foi um respeitado acadêmico e latinista. Caiu em ostracismo entre estudiosos após ingressar no grupo Scripta non Verba — conhecido pela polêmica defesa da obrigatoriedade do ensino de latim e grego nas escolas, e da leitura de clássicos no original. Apesar das defesas apaixonadas sobre a “pureza da cultura”, o grupo serve de fachada para um movimento supremacista e ultraconservador."
    },
    {
      type: "text",
      content: "Emílio é um fanático. Tem se mantido em silêncio, ganhando a vida lecionando em um interiorano seminário católico enquanto cultiva secretamente distorcidas crenças neopagãs. Realizou em tempos recentes alguns rituais dos Libri Telluria para convocar Sechpuluvmcha à superfície. O doutor pretende usar a criatura como arma em um atentado terrorista."
    },
    {
      type: "text",
      content: "Os personagens chegam ao tal seminário semanas após Emílio ter realizado seu primeiro ritual. Cada um está procurando por um afeto, amigo, parente, ou alguém que foi contratado para encontrar — todos jovens homens adultos estudando no lugar. Embora muitos alunos sejam devotos buscando o sacerdócio, a realidade é que os cursos gratuitos de filosofia e teologia — mais a hospedagem e alimentação paga — acabam atraindo rapazes sem recursos, buscando um diploma ou apenas um teto temporário. Por esse mesmo motivo, desistências não são incomuns, como aponta o simpático e solícito Emílio ao receber os personagens e mostrar a eles o seminário. Ninguém tem notícias dos desaparecidos, mas logo algo chama atenção."
    },
    {
      type: "text",
      content: "O corpo de um dos rapazes foi encontrado. Estava abandonado em uma ravina incendiada, bem ao lado de um enorme túnel escavado. Os personagens são chamados para reconhecerem a vítima. Com um teste social ou de medicina bem-sucedido, descobrem que ele não morreu no fogo. Foi roído por algum tipo de animal. Passar em outro teste social revela que policiais foram enviados para explorar o túnel, mas não retornaram. A informação está sendo abafada pelas autoridades para não criar pânico. Resta aos personagens evadir a lei, desbravar o túnel e salvar os demais rapazes antes que seja tarde. Ou desistir e voltar para casa."
    },
    {
      type: "text",
      content: "O túnel desce por dias até as camadas mais baixas da Terra, tornando impossível chegar ao seu fim. Insistências no avanço resultam em sufocamento gradual e então, morte. Passar em testes de perícias ligadas à exploração permite aos personagens encontrarem uma toca subterrânea, onde estão os ossos roídos dos rapazes e dos policiais — uma cena merecedora de testes de sanidade."
    },
    {
      type: "text",
      content: "Quando os personagens deixam o túnel, ou antes deles resolverem sair do seminário, Emílio começa um “incêndio sagrado” para atrair a criatura ao frio mundo da superfície. Ali, inicia de vez seu atentado. Primeiro ataca o próprio seminário e então as cidades vizinhas."
    },
    {
      type: "text",
      content: "Use a ficha de um urso ou outro animal para Sechpuluvmcha. Exagere sua força e capacidade de sofrer dano. Além de garras, tem também ataques com tentáculos. Ao vê-la, os personagens podem realizar testes de medo comum, mas se forem atingidos pelos tentáculos, são tomados por uma visão — e precisam fazer testes para não enlouquecer."
    },
    {
      type: "text",
      content: "Os jogadores podem, é claro, fugir da criatura. O que não sabem é que Sechpuluvmcha adquiriu as memórias dos rapazes desaparecidos ao devorá-los, e agora está ligada a cada membro do grupo. Mesmo que consigam vencer, os personagens estão fadados a serem assombrados pela deusa. Porque — como um insano Doutor Emílio diz antes de se matar — ela é mesmo uma divindade. Aquilo que viram é somente um de seus corpos. Umas das muitas marionetes de uma pérfida mente coletiva."
    }
  ]
  },
  {
  id: "54",
  name: "Fragmentos",
  theme: "Aventura Espacial",
  image: "/aventuras/fragmentos.png",
  summary: "Uma crise de lixo espacial leva à destruição de um planeta. Os heróis escapam em um cargueiro roubado e devem defender uma base lunar e escoltar cientistas para expor uma corporação que está lucrando com a catástrofe.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de aventuras espaciais — Brigada Ligeira Estelar, Fronteira do Império, Starfinder e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Ela pode ser jogada como aventura avulsa ou parte de uma campanha maior."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Crise no Setor Zeta"
    },
    {
      type: "text",
      content: "Fragmentos se passa em um setor remoto, mas ainda assim, economicamente significativo para o comércio interplanetário. Sua principal rota tem sofrido com o tráfego intenso de espaçonaves. Nos últimos anos, corporações controlando a atividade pararam de investir em sistemas de navegação, delegaram naves já obsoletas para o serviço e começaram a empregar tripulações mal pagas e sem treinamento adequado. Isto levou ao aumento do número de acidentes e colisões de cargueiros, tornando o setor cada vez mais atulhado de lixo espacial, dificultando o trânsito. Este problema conduz a uma tragédia espiralando em uma grave crise política!"
    },
    {
      type: "text",
      content: "A história começa com os personagens em uma cidade média de um dos planetas da região. De repente, alarmes começam a soar. Uma única diretriz é recebida das autoridades: todos precisam evacuar o planeta o mais rápido possível. Milhares de fragmentos deixados por uma colisão antiga entre duas naves imensas estão chovendo da atmosfera e causarão a aniquilação total de formas de vida na superfície."
    },
    {
      type: "text",
      content: "No entanto, espaçoportos já estão lotados. Filas de gente fugindo, mas antes da situação escalar, todas as naves disponíveis partiram. A única chance dos personagens escaparem a tempo é tomarem o cargueiro de uma corporação de construções intergaláctica, chamada Engenharia Estelar (vulga E.E!). O veículo está acabando de ser abastecido com um minério valiosíssimo e, em breve, decolará. Pessoas tentam entrar na plataforma de lançamento privada, cercada por muros protegidos por robôs. Dentro dela há mercenários em guarda."
    },
    {
      type: "text",
      content: "Os personagens têm quinze rodadas para invadir a nave e render a tripulação, antes de ser tarde demais para fugir. Também precisam escolher entre levar o minério ou esvaziar o compartimento de carga, abrindo espaço para transportar gente, salvando as pessoas ao redor da plataforma. Quando o cargueiro deixa a superfície e entra em órbita, o grupo presencia a vida no planeta ser obliterada pela chuva de fragmentos mortíferos!"
    },
    {
      type: "text",
      content: "Impactos continuam a ocorrer todos os dias pela região."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Lockdown lunar"
    },
    {
      type: "text",
      content: "O cargueiro onde os personagens estavam consegue fugir até a lua do planeta."
    },
    {
      type: "text",
      content: "É uma base científica, comandada por pesquisadores de diversas áreas, devotados a armazenar e preservar o conhecimento presente na galáxia. Uma biblioteca computadorizada. O anfitrião do grupo neste lugar é o Dr. Galateu, ciborgue especialista em astrorrobótica. No entanto, como ele mesmo informa, está sendo redirecionado, junto aos personagens, para tripular uma torre de defesa. Os fragmentos que destruíram o planeta, também estão se chocando contra a lua — e a única coisa impedindo um destino semelhante, são torres de canhões orbitais funcionando em tempo integral. A lentidão dos sistemas sobrecarregados de informação da lua-biblioteca torna perigoso colocar as armas em modo automático e elas precisam ser operadas manualmente. O grupo deve realizar testes estendidos de perícias. Cada falha resulta em condições negativas e penalidades em outros testes até o fim da aventura — representando o stress acumulado pelos personagens."
    },
    {
      type: "text",
      content: "Um bloqueio é oficializado no setor. Passa a ser proibido que quaisquer naves circulem pela rota. Enquanto os personagens continuam trabalhando na lua, um novo alerta soa nos sistemas de detecção da torre. A velha nave de uma contrabandista espacial conseguiu furar o bloqueio e agora, perseguida por caças espaciais, manobra perigosamente entre campos de detritos. Os sensores detectaram uma grande quantidade de substância instável na nave. Há o risco desta substância provocar uma explosão, iniciando uma reação em cadeia que tornará as chuvas de fragmentos ainda mais frequentes e letais. Os personagens, a pedido de Galateu, precisam pilotar outra nave, deter os caças e vencer a contrabandista incomunicável em uma corrida, chegando perto o bastante para abordá-la. Se assim fizerem, ela se rende e é presa. Seu nome é Mercúria, uma pequena criminosa trabalhando a pedido da corporação E.E. Quando aceitou o trabalho, ela realmente não fazia ideia de quão perigosa era a carga!"
    },
    {
      type: "text",
      content: "Mercúria se compromete a testemunhar contra a empresa."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Missão de escolta"
    },
    {
      type: "text",
      content: "O Dr. Galateu consegue — caso nada tenha comprometido o banco de dados da lua-biblioteca — desenvolver um protótipo robótico. Ele será usado na limpeza dos detritos do setor pelos próximos anos. Mas o projeto enfrenta oposição ferrenha na política de mundos influentes, devido à interferência da própria E.E. — a empresa pretende agora lucrar com a crise, através de contratos para construir abrigos subterrâneos e torres de defesa. O doutor pede ao grupo para ser escoltado até outro planeta, onde defenderá a importância de seu projeto e Mercúria dará seu testemunho."
    },
    {
      type: "text",
      content: "Durante o trajeto, o transporte do doutor é atacado por naves de mercenários. Os personagens podem enfrentá-los, ou confiar em Mercúria e libertá-la — ela conhece um atalho para se livrar dos perseguidores!"
    },
    {
      type: "text",
      content: "O transporte chega ao seu destino, mas assim que os personagens põem o pé no chão, são atacados por um solitário caçador de recompensas."
    },
    {
      type: "text",
      content: "No fim, se conseguiram proteger o doutor, após alguns anos, a rota remota ficará novamente acessível, sem oferecer perigo. Do contrário, a crise se mantém. Se falharem em deter Mercúria antes, no campo de detritos, a nave dela terá explodido e desenlaçado a reação em cadeia."
    },
    {
      type: "text",
      content: "Embora a situação seja resolvida em longo prazo, quase não resta vida no setor."
    }
  ]
  },
  {
  id: "55",
  name: "Volte para Casa!",
  theme: "Aventura Espacial",
  image: "/aventuras/volte-para-casa.png",
  summary: "A tripulação de uma nave investiga o assassinato de seu Imediato em uma estação espacial, descobrindo uma série de crimes com vítimas vulneráveis. Eles devem criar uma história convincente para seu contratante e lidar com a possibilidade de a solução vir de um planeta importante.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de aventuras espaciais — Brigada Ligeira Estelar, The Expanse e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Ela pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Crime ocorre..."
    },
    {
      type: "text",
      content: "Os jogadores são a tripulação de uma nave, visitando a estação de um asteróide. É mais uma parada rotineira, enquanto estão indo buscar uma carga em outro corpo celeste, a serviço de um contratante. A estação possui blocos de apartamentos e galerias comerciais. A vida no lugar é estável, porém precária. Filtros de ar quebram e panes desligam a gravidade artificial de tempos em tempos. A violência tem crescido. Por isso, a diretriz é para os visitantes andarem armados e descansarem a bordo de seus veículos fora do horário comercial. Não há, todavia, toque de recolher."
    },
    {
      type: "text",
      content: "A aventura começa com um flashback."
    },
    {
      type: "text",
      content: "Escolha um jogador aleatoriamente. Ele deve criar um motivo para seu tripulante estar fora da nave durante o horário de descanso e descrever a cena. Saiu para encontrar alguém? Foi explorar a estação? Peça para pensar algo que faça sentido para o personagem, e que revele um pouco de sua personalidade. Além disso, ele não passou todo o período fora. Algo aconteceu e o obrigou a retornar à nave sozinho."
    },
    {
      type: "text",
      content: "No caminho de volta, o tripulante encontrou uma barraquinha ainda aberta vendendo seu lanche favorito. Faminto, comeu rapidamente enquanto a garçonete distraída falava com o namorado por uma tela. Antes de pagar e sair, ainda entreouviu o homem dizer para a moça “... este lugar está muito perigoso! Tome cuidado...”. Passou então por uma viela com um pôster na parede escrito VOLTE PARA CASA!, a imagem de um casal de astronautas apaixonados na paisagem idílica de um planeta importante. Foi aí que o tripulante ouviu um disparo e um pedido de ajuda. Uma voz conhecida. Avistou o Imediato da nave (Ou algum outro NPC da tripulação) com um rombo fumegante no ventre. O Imediato morreu em seus braços, sem palavras. Com um sucesso em um teste de percepção, o tripulante percebeu um zunido sumindo ao longe, mas, de toda maneira, não encontrou o assassino ou a arma."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "...Nada acontece"
    },
    {
      type: "text",
      content: "O assassinato tem pouco peso para a polícia da estação. Sua função é documentar crimes, não impedí-los! No entanto, enviam uma nota do ocorrido ao contratante do grupo, que estabelece uma comunicação remota. Ele está furioso. Se um tripulante estava envolvido em negócios escusos e acabou sendo marcado por um sindicato criminal, isso pode render prejuízo em trabalhos futuros! O contratante dá um dia para os personagens apurarem o caso e organizarem um relatório. Falará com eles novamente, e se não ficar convencido com o que ouvir, rescindirá o contrato..."
    },
    {
      type: "text",
      content: "O primeiro lugar que os personagens podem querer sondar é a nave. Registros mostram que o Imediato esteve fora todas as noites. É possível analisar a ficha dele. Nasceu no espaço, a bordo de um cargueiro. Tinha membros alongados e ossos frágeis. Não há registro do uso de drogas, mas um teste de medicina revela que o fígado estava comprometido pelo uso prolongado de álcool e má alimentação. Em seu quarto não há registros de comunicação externa, apenas um dispositivo de mídia antiquado, com músicas melancólicas. Já na estação, é facilmente identificado por donos de restaurante. Nunca era visto com ninguém, sempre ficava em um canto bebendo sozinho. Um teste de empatia ou intuição permite entender: o Imediato era um solitário. Um novo sucesso, em um teste de medicina revela uma informação adicional: pessoas que ficam tempo prolongado no espaço podem desenvolver insônia, ansiedade, e problemas de interação social fora da tripulação."
    },
    {
      type: "text",
      content: "A polícia não é de muita ajuda. Há quatro assassinatos recentes que podem compartilhar. Não parece existir um padrão. A primeira vítima é um homem adulto. A segunda, uma mulher idosa. A terceira, uma criança. A quarta, uma mulher jovem, que sobreviveu ao ataque, mas sofreu sequelas. Nada ligava as vítimas, a não ser o fato de morarem no mesmo distrito e terem morrido com um único disparo energético. Os personagens podem fazer testes para investigar as fichas das três vítimas iniciais. Se passarem, em cada uma descobrem: o homem também era um trabalhador do espaço com problemas nos ossos. A idosa, vivia sozinha. A criança era moradora de rua, não tinha família. Um teste adequado mostra que todas essas pessoas tinham em comum um certo grau de vulnerabilidade."
    },
    {
      type: "text",
      content: "Não há muita coisa sobre a sobrevivente, mas os tripulantes podem tentar falar com ela. A mulher se trancou em seu apartamento e não deixa ninguém entrar. Devem convencê-la a dar um testemunho. Se conseguirem, ela conta ter sido atacada por um drone! Não sabe o motivo. Estava com medo de falar aos policiais. Se os personagens levarem a informação à polícia e passarem em testes sociais, conseguem rastrear o drone e lutar contra ele. Se vencerem, testes de tecnologia revelam ser um modelo militar antigo. Infelizmente, é remotamente controlado. Só é possível triangular seu sinal até o tal planeta importante, mas não determinar o ponto exato de onde veio. É um beco sem saída para a investigação..."
    },
    {
      type: "text",
      content: "Entretanto, explique aos jogadores: eles não precisam desvendar o caso. Apenas criar uma história crível e convencer o contratante. Ao chamá-los, ele faz quatro perguntas: Por que o Imediato estava fora da nave? Quem o matou? Qual foi o motivo? Isso comprometerá negócios futuros? O grupo precisa argumentar. A cada pergunta, alguém faz um teste social. Se no fim do interrogatório os personagens tiverem uma história coerente, e passarem em pelo menos três testes, o contratante fica convencido. Poderão concluir o trabalho."
    },
    {
      type: "text",
      content: "Mas quem era o culpado? Qual o motivo real por trás dos crimes?"
    },
    {
      type: "text",
      content: "O autor da coluna sabe... mas para a sua aventura, Mestre, você determinará!"
    }
  ]
  },
  {
  id: "56", 
  name: "Sonho de Consumo",
  theme: "Cyberpunk",
  image: "/aventuras/sonho-de-consumo.png",
  summary: "Em uma megacidade futurista, mercenários se envolvem com a corporação ASET e seus produtos de realidade simulada, que causam dependência e violência, culminando em uma missão moralmente ambígua em uma favela 'freegan'.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs cyberpunk ou futuristas — 3D&T Alpha, Shadowrun, Savage Worlds: Interface Zero e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme as necessidades do seu grupo. Sonhos de Consumo pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Dias de cão"
    },
    {
      type: "text",
      content: "Sonhos de Consumo se passa em uma megacidade futurista onde os personagens são delinquentes, mercenários ou outro tipo de indesejados. A aventura se divide em vários eventos que podem acontecer em sequência — um acontecimento a poucos dias de distância do outro. Estes mesmos eventos podem ser distribuídos mais espaçadamente, acontecendo entre outras aventuras que os personagens estejam vivendo."
    },
    {
      type: "text",
      content: "Evento I – Os personagens procuram por missões e contratos na rede, mas as vias de comunicação de seus dispositivos estão congestionadas por propaganda. Toda a informação conseguida é sobre o antecipadíssimo simulador de realidade Bella-Siderea ‘77, da corporação ASET. Ele será lançado em breve. O simulador promete “dias de imersão absoluta em um universo de fantasia espacial carregado de nostalgia” e promete recriar “sensações tão fortes como as vividas na infância”. Disponibiliza interações com inteligências artificiais em papeis arquetípicos e não muito complexos, permitindo uma experiência de conforto absoluto. Infelizmente o congestionamento de informação nos dispositivos foi causado por um adware, que colonizou os implantes dos personagens. Eles devem passar em testes para remover o vírus ou encontrar um hacker para fazer isso. Se não conseguirem, além de não obterem novas missões remotamente, passam a sofrer penalidades em testes."
    },
    {
      type: "text",
      content: "Evento II – É o dia de lançamento de Bella-Siderea ‘77. A menos que os personagens façam testes para extrair uma cópia pirata da rede, ou tenham grandes recursos financeiros, não têm como adquirir o simulador. Cópias piratas vêm com dispositivos de segurança ocultos, exigem testes difíceis para serem burladas e causam sobrecarga de equipamentos e dano aos usuários. Versões legalmente compradas do simulador aumentam níveis de dopamina no cérebro, dando bônus elevados em habilidades mentais. Quando o simulador é usado pela primeira vez, no entanto, o personagem precisa fazer testes de dificuldade baixa — mas gradativamente mais elevada — para sair da simulação. Se falhar, fica 1d8 dias procurando se isolar, não parando para comer, beber, dormir ou mesmo ir ao banheiro. E sofrendo todas as consequências."
    },
    {
      type: "text",
      content: "Ainda no dia do lançamento, enquanto anda pelas ruas, um dos personagens precisa fazer um teste para não ser atropelado por um veículo desgovernado. O veículo atinge várias outras pessoas e tenta fugir. O motorista estava utilizando o simulador enquanto dirigia!"
    },
    {
      type: "text",
      content: "Evento III – Uma missão aparece. Um grupo de clientes insatisfeitos está fazendo um protesto-relâmpago contra a ASET sobre os problemas apresentados pelo simulador e invadiu um Centro de Recreação Analógica da corporação. O grupo de fanáticos é composto por sujeitos maltrapilhos, quase desnutridos, mas que ostentam em seu corpo numerosos implantes corporais. Um dos cyborgues promove um verdadeiro massacre com uma metralhadora acoplada ao seu braço biônico, enquanto grita histericamente: “GASTEI TUDO O QUE EU TINHA! COMI GELATINA POR DOIS ANOS! MALDITOS! VOCÊS NÃO PODEM FAZER ISSO COMIGO! AHHHH!!!”"
    },
    {
      type: "text",
      content: "Os personagens precisam matar, capturar, dispersar ou convencer os cyborgues a se renderem para conquistar a recompensa oferecida pela corporação."
    },
    {
      type: "text",
      content: "Evento IV – Uma nova missão da ASET. Há uma recompensa por um cyborgue fugitivo, envolvido no ataque ao Centro de Recreação. Ele foi visto pela última vez em uma favela nos confins longínquos da cidade. A favela é uma antiga área residencial de trabalhadores, construída ao redor de uma fábrica da empresa de veículos MARSHALL. A área entrou em decadência quando a corporação responsável decidiu fechar o complexo, montando outro completamente automatizado em um país com menos impostos. Hoje o lugar foi tomado por um coletivo de artistas que trabalha remotamente e tem ajudado a sustentar os idosos habitando o local. Os artistas seguem uma filosofia “freegan”, coletando comida desperdiçada em restaurantes, reciclando lixo e reutilizando materiais. O lugar, porém, sofre com panes de energia elétrica. Uma delas acontece logo após a chegada dos personagens."
    },
    {
      type: "text",
      content: "O fugitivo está aqui. Não chegou a ferir ninguém apesar da sua cyberpsicose e quer ficar no coletivo para se tratar. Oferece ao grupo todos seus implantes para que estes não o entreguem a ASET."
    },
    {
      type: "text",
      content: "Enquanto os personagens decidem, gritos começam a vir da fábrica abandonada. Um grupo de mercenários está tentando atacá-la. O coletivo reestruturou o complexo como uma usina amadora. Tem usado gás metano de antigos resíduos ambientais enterrados em um lixão para produzir energia limpa. O grupo de mercenários hostis trabalha para a MARSHALL e recebeu ordens de explodir a antiga indústria, fazendo tudo parecer um acidente e culpando o coletivo. O objetivo é lucrar com o seguro do lugar, se livrar de possíveis multas ambientais, além de impedir os ideais anticonsumismo dos artistas se espalharem."
    },
    {
      type: "text",
      content: "Os personagens podem decidir interferir na situação e lidar com os mercenários. Ou voltar suas costas para ela e ouvir as notícias sobre “a grande explosão que dizimou um bairro inteiro”, no dia seguinte."
    }
  ]
  },
  {
  id: "57", 
  name: "Senhor do Outono",
  theme: "Fantasia",
  image: "/aventuras/senhor-do-outono.png",
  summary: "Durante um banquete nas montanhas, o contratante dos heróis é atacado por uma 'Princesa Demônio' e é forçado a um sono mágico. A luta subsequente revela que a ameaça é um espírito da montanha, e o próprio senhor de terras esconde uma verdade profunda.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de fantasia como Blood & Honor, Império de Jade e Lenda dos Cinco Anéis. É uma estrutura de história sem regras, para ser expandida e adaptada conforme a necessidade. O senhor do outono pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Festim entre as árvores"
    },
    {
      type: "text",
      content: "Um senhor de terras contrata guarda-costas e artistas de diferentes lugares para uma excursão às montanhas. Ele deseja apenas passar um dia agradável, contemplando as deslumbrantes cores das folhas no outono, que agora começam a cair. A aventura começa com o grupo escoltando o contratante durante a jornada. O senhor tem fama de ser alguém desconfiado e de ira fácil, além de um grande mestre no uso da lança. Mas em meio ao seu recém-formado séquito mantém uma postura relaxada, de alívio."
    },
    {
      type: "text",
      content: "— No meu palácio os muros e jardins têm olhos, ouvidos. Mas aqui junto a novas amizades pretendo ter dias de paz."
    },
    {
      type: "text",
      content: "Deixando o palácio cedo, o grupo chega às montanhas ainda de manhã e encontra uma enseada de onde pode observar a paisagem. Outras pessoas se aproximam. É o cortejo de uma princesa que também veio ver a queda das folhas. A princesa convida o séquito do outro nobre para um banquete ao ar livre e o senhor de terras prontamente aceita. Enquanto música embala a cena, ela pede que cada personagem conte uma história sobre si, como retribuição pelo festim. Quando chega a vez do aristocrata, porém, ele o faz de maneira breve e vaga:"
    },
    {
      type: "text",
      content: "— Nasci rico e meu clã sempre governou estas terras. É a minha história. Agora vamos comer!"
    },
    {
      type: "text",
      content: "De repente, todas as folhas caem das árvores. A comida some de tigelas, bocas e estômagos. Copos se enchem de sangue."
    },
    {
      type: "text",
      content: "— Como ousa desrespeitar minha hospitalidade?! Mentir para mim? — diz a princesa, e se transforma em um oni, flutuando em meio ao ar. — Você irá dormir até se lembrar de quem é!"
    },
    {
      type: "text",
      content: "Ela então se vira para o resto do grupo."
    },
    {
      type: "text",
      content: "— E vocês? Como permitem que este tolo fique aqui vendo as folhas caírem enquanto o povo sente fome e guerras são travadas em seu nome? Deviam tê-lo empurrado montanha abaixo!"
    },
    {
      type: "text",
      content: "A Princesa Demônio desaparece, logo em seguida, mas a mesma transformação se dá entre as pessoas que a acompanham. Nesta cena, o grupo é enfrentado por monstros que sejam um desafio adequado à sua capacidade. Se sobreviverem, percebem o senhor caído, vítima do encantamento. Agora ele está preso em um sono repleto de pesadelos, incapaz de ser acordado."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Espíritos da montanha"
    },
    {
      type: "text",
      content: "Quando o grupo ainda se recupera do ataque, a música volta a tocar do nada e uma criatura zombeteira e frenética surge dançando. É um espírito da montanha. Ele se apossa da lança do senhor adormecido, sem cerimônia."
    },
    {
      type: "text",
      content: "— Se quiserem salvá-lo, precisarão enfrentar a Princesa Demônio! É perigoso sair daqui, levem isto! Esta lança não tem nome, mas é uma aliada valorosa. Eu a entregarei a quem entre vocês for o mais honrado. Então... Quem será?"
    },
    {
      type: "text",
      content: "O espírito estende a arma esperando que alguém a apanhe. Deixe cada integrante do grupo justificar porque merece ou não a lança, ou apontar quem deveria ficar com ela. Se ninguém diz ser merecedor, o espírito diz “Vocês mentem muito mal!” e a lança desaparece. Mas a primeira pessoa a se aproximar e tomá-la, ou a primeira a mostrar desejo de ficar com ela, recebe-a de bom grado. “Finalmente! Uma alma honesta!”. Quando questionado sobre onde a Princesa Demônio pode ser encontrada, o espírito grita “ATRÁS DE VOCÊ!” e a entidade surge novamente, atacando o séquito."
    },
    {
      type: "text",
      content: "Use a ficha de um monstro de desafio elevado para o grupo para representar a Princesa Demônio. Ela tem boa capacidade defensiva e usa um galho de bordo mágico como escudo. Depois de ser ferida, a entidade lança um feitiço que exige testes de resistência mental. Quem falha cai vítima de sono mágico por $1d4$ turnos ou até sofrer dano. Ela repete isso se estiver prestes a ser derrotada. O portador da lança, porém, descobre que a arma do seu senhor é encantada e luta sozinha — pode continuar fazendo ataques com ela, mesmo se estiver inconsciente! Se a Princesa Demônio é derrotada, revela ser o espírito da montanha e esvanece mais uma vez, em meio a gargalhadas."
    },
    {
      type: "text",
      content: "O senhor desperta de seu transe, mas ainda está muito abalado e fraco, e se recusa a falar sobre o ocorrido. Apenas pede para o levarem de volta para casa, onde explicará tudo. Nesta cena, cada integrante do grupo pode narrar um trecho da viagem, os lugares e paisagens avistados pelo senhor e seu séquito. Se alguém quiser, pode fazer uma cena de interação em que personagens conversam. Ou simplesmente compartilham um momento em silêncio. Durante a jornada, cada personagem recebe um pequeno bônus em sua ficha, representando o autoconhecimento adquirido em contato com a natureza e os espíritos."
    },
    {
      type: "text",
      content: "Quando o grupo está prestes a chegar a seu destino, o senhor interrompe a marcha. O que revela a seguir coloca personagens honrados, ou que tenham determinados códigos de conduta, diante de um dilema."
    },
    {
      type: "text",
      content: "— Não sou um nobre, e sim um simples ator! O dublê de corpo do antigo senhor destas terras! Ele faleceu durante uma emboscada, mas sua família me convenceu a assumir o lugar dele para preservar seu domínio. Com o passar dos anos, tive cada vez mais medo de ser descoberto! Tornei-me um homem terrível porque interpretava o papel de um homem terrível e temia cada sombra, pois eu também era uma sombra. Mas agora lembrei de quem sou! Um filho de camponeses. Quero interpretar um novo papel! O de um homem que foi transformado por esta jornada. Voltem comigo e ajudem mudar a vida de meu povo. Não há honra nesta trapaça, mas o que é a honra se não outro papel que interpretamos? Os espíritos nos enganaram, e com isso nos mostraram uma valiosa verdade."
    },
    {
      type: "text",
      content: "E conclui."
    },
    {
      type: "text",
      content: "— Neste mundo nada é o que parece!"
    }
  ]
  },
  {
  id: "58",
  name: "Como Segurar a Areia",
  theme: "Aventura Espacial",
  image: "/aventuras/como-segurar-a-areia.png",
  summary: "Uma equipe é contratada para acompanhar o jornalista Gonzo Estrela em um planeta deserto. Eles se envolvem com uma astrobióloga controversa e veteranos rancheiros, descobrindo um segredo sobre a desertificação local.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura está disponível para uso em RPGs de aventura espacial — Starfinder, The Expanse, e outros sistemas que comportem o gênero. É uma estrutura de história sem regras, para ser expandida e adaptada conforme a necessidade. Pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Estrela gonzo"
    },
    {
      type: "text",
      content: "Nesta aventura, o grupo é uma equipe jornalística. Além de competências comuns a quem se aventura entre planetas, é preciso ter perícias representando como conduzir uma entrevista, escrever artigos, investigar fontes, fotografia, etc... Essa premissa foi extraída de uma das sugestões de campanha do livro básico de The Expanse RPG! Porém, se os jogadores já têm outros personagens, ou preferirem uma formação diversa de grupo, podem ser profissionais contratados para ficar “de babá” de um único e problemático influenciador."
    },
    {
      type: "text",
      content: "O jornalista Gonzo Estrela começou sua carreira como repórter independente, conduzindo informes clandestinos durante a guerra. Depois disso, passou a escrever artigos ácidos sobre políticos conservadores, e a perseguir histórias que não eram abordadas pela mídia. Suas coberturas tinham doses generosas de sensacionalismo e humor, apelavam assim ao gosto popular. Com o tempo Gonzo virou uma celebridade, tornando-se ele mesmo a notícia. Passou a contar com seguidores nos mais diversos planetas e luas. Acreditam em tudo o que diz, e o defendem fervorosamente, mesmo que esteja errado! Este fato revolta o próprio Gonzo, notório por ter escrito um romance sobre o perigo de líderes carismáticos."
    },
    {
      type: "text",
      content: "Sem papas na língua e autodestrutivo, o jornalista tem o hábito de sempre falar a verdade, doa a quem doer. Contudo, ele se refugia em noites de bebedeira para fugir de sua solidão e falta de conexões íntimas com outros seres sencientes."
    },
    {
      type: "text",
      content: "Apesar dos esforços constantes de Gonzo para ser uma pessoa mais sensível, tê-lo como chefe não é bem uma experiência agradável..."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Planeta deserto"
    },
    {
      type: "text",
      content: "A galáxia está em paz."
    },
    {
      type: "text",
      content: "Há semanas nenhum grande rebuliço sacode o status quo, e o problema para Gonzo Estrela é esse! Isso o lembra de como em anos de trabalho, apesar das mudanças de costumes, as “estruturas de poder desiguais” continuam as mesmas. Deprimido, aceitou trabalhar para o “Planeta Deserto”, o jornal de um corpo celeste de clima árido. O trabalho envolve passar semanas no lugar, documentando os feitos da jovem Dra. Hélia Erzo, uma astrobióloga, e sua equipe. A cientista está criando geneticamente um novo tipo de grama, capaz de parar o movimento das dunas locais, salvando centenas de assentamentos de serem engolidos pelas areias moventes."
    },
    {
      type: "text",
      content: "O grupo se vê contratualmente obrigado a viver por alguns dias no lugar arenoso, sentindo calor e desconforto. O ar é rarefeito, dando sensação de cansaço constante — exigindo passar em testes de resistência a cada três horas, para não ficar fatigado). Durante a noite, a temperatura esfria, podendo causar dano em quem está fora de uma construção ou sem um traje protetor. Os colonos do lugar reciclam tudo e são acumuladores compulsivos, não jogando nada fora. O nível de tecnologia equivale ao século XX na Terra, com mídias e objetos anacrônicos!"
    },
    {
      type: "text",
      content: "Incidentes acontecem durante a permanência de Gonzo Estrela. Em qual ordem os eventos sucedem, e como os problemas são resolvidos, dependerá das ações do grupo."
    },
    {
      type: "text",
      content: "Seres mutantes feitos de grama começam a atacar os cientistas. A origem das criaturas é um dos laboratórios da Dra. Hélia. Elas são fruto de um experimento que deu errado, devido ao uso de incubadoras antiquadas. Gonzo resolve se meter no meio do conflito e filmar tudo! Durante o combate, a estação começa a pegar fogo. Todos precisam fazer testes para fugir a tempo, e não sofrerem dano na explosão."
    },
    {
      type: "text",
      content: "Após a explosão, Gonzo fica irado com a “Doutora” Hélia Erzo, pois seguindo seus instintos, e ao fazer uma rápida busca de antecedentes, descobriu que é uma ex-estudante que abandonou seus estudos antes de se formar, ou seja, não tem licença para conduzir experiências. Ele parte, disposto a editar o material que gravou para expor essa “cientista maluca”. Antes disso, faz uma pausa no bar mais próximo..."
    },
    {
      type: "text",
      content: "Há o outro lado da história, que por seu cansaço Gonzo nem se deu ao trabalho de ouvir dessa vez. Hélia é de fato doutora em astrobiologia, no entanto, teve o registro adulterado por tecer críticas a militares e perdeu o financiamento da pesquisa. A jovem atua agora de maneira independente, da mesma maneira que Gonzo no início da carreira! Ela já encontrou uma planta capaz de salvar o planeta das dunas. Porém, o defeito no laboratório aconteceu no momento em que havia feito a descoberta. A doutora pede ao grupo para sensibilizar o jornalista e convencê-lo a desistir da matéria, dando a ela a chance de terminar o trabalho e salvar os assentamentos."
    },
    {
      type: "text",
      content: "Durante uma bebedeira, Gonzo é o único a defender uma cliente do assédio de um grupo de idosos, que ficam jogando cartas e bebendo no fundo do bar. Na verdade, são um bando de ex-mercenários veteranos com armaduras mecânicas e comandam o assentamento. O líder do bando é orgulhoso, mas respeita aqueles com coragem de afrontá-lo. Ele dá uma chance para Gonzo de evitar um massacre, o enfrentando em um duelo no dia seguinte. O jornalista impulsivamente aceita!"
    },
    {
      type: "text",
      content: "As dunas encobrem o que parece ser um antigo canal alienígena, revelado agora pelos ventos. Na realidade, o canal foi construído por humanos. Os veteranos que governam cidade chegaram a trabalhar nele durante a construção, como capatazes. O projeto foi descontinuado por milionários que resolveram construir um “resort” nas calotas polares do planeta, tomando para si a água que antes impediria a desertificação. Se Gonzo descobrir essa história, irá persegui-la até o fim, mas isso transformará o grupo em alvo de gente poderosa..."
    }
  ]
  },
  {
  id: "59", // ID ajustado
  name: "Aqui há Dragões",
  theme: "Fantasia",
  image: "/aventuras/aqui-ha-dragoes.png",
  summary: "Uma legião mercenária de cavaleiros de dragões invade o reino. Após sobreviverem a um ataque de terra queimada, os heróis são a última esperança para se infiltrar no acampamento inimigo e matar os cavaleiros enquanto estão longe de suas montarias.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de fantasia medieval — Dragon Age, Tormenta20 e qualquer outro compatível com o gênero. É uma trama sem regras, adaptável conforme necessário. Pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Os cinco"
    },
    {
      type: "text",
      content: "Uma legião mercenária conhecida como A Companhia das Cinzas invadiu o reino em que o grupo se encontra. Os números desse exército normalmente seriam incapazes de ameaçar um país inteiro, no entanto, o regimento conta com um trunfo: cavaleiros de dragões."
    },
    {
      type: "text",
      content: "Cada membro da elite de guerreiros pertence a clãs patriarcais dedicados a domesticar, desde o ninho, essas criaturas de destruição em massa, e tem a obediência completa de seu monstro particular — leal apenas a seu senhor."
    },
    {
      type: "text",
      content: "Não se sabe o porquê dos mercenários terem resolvido atacar. Talvez tenham sido contratados por uma potência militar, talvez por rivais do grupo, ou até pode ser que estejam apenas agindo de maneira independente, interessados em saques fáceis e na conquista de novas terras. O importante é que a motivação se encaixe bem ao que rola na mesa de jogo, pois nada muda o fato mais urgente: eles precisam ser detidos."
    },
    {
      type: "text",
      content: "Esses vilões são oficiais astutos e orgulhosos. Quando estão montados, sua capacidade de combate é desprezível comparada a da montaria, a verdadeira ameaça a ser enfrentada. Ataques, magias e habilidades direcionadas contra o próprio ginete simplesmente não têm efeito, pois eles bloqueiam tudo com uma defesa perfeita, manobrando o corpo escamado do dragão para absorver quaisquer ameaças — um poder especial, representando seu treinamento único. Para os dragões basta usar fichas do seu bestiário favorito, escolhendo aquelas que mais se aproximam à idade das montarias ou ao nível de desafio pretendido."
    },
    {
      type: "text",
      content: "Há cinco dracocavaleiros, precedidos por sua fama em batalha. O Conde Desidero, um humano corpulento, cinquentão, com queimaduras no rosto, longos bigodes, e um eterno ar de deboche, lidera o bando. Era bobo da corte antes de descobrir ser o bastardo de uma linhagem centenária. Completamente amoral, não enxerga valor algum na vida, e trata tudo como se fosse uma piada. Monta uma fera já de idade venerável — chamada de Velho Incêndio — conhecida por soprar chamas azuis incandescentes."
    },
    {
      type: "text",
      content: "Abaixo do conde está o Barão Lodrisio Lanfarell, um aristocrata de traços bem marcados e aparência impecável. Ele sente uma necessidade compulsiva de impressionar outras pessoas, e gosta de desafiar nobres para duelos. Cavalga uma besta adulta de couro enegrecido, chamada Brasa Viva."
    },
    {
      type: "text",
      content: "Por último na hierarquia, os trigêmeos da Família Soizav. Lordes impulsivos e inconsequentes apelidados Azzio, Vizzo e Zozza. Cada um cavalga um predador jovem de escamas escarlates e sem nome, pois os irmãos se recusam a nomear uma criatura que consideram ser somente um instrumento da sua vontade."
    },
    {
      type: "text",
      content: "Longe das montarias, o quinteto fica vulnerável. São combatentes com fichas de soldados normais, mas possuem armaduras completas e espadas mágicas flamejantes."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Terra queimada"
    },
    {
      type: "text",
      content: "Jogue 1d3. O resultado do dado decide quem ataca o lugar onde os personagens estão: 1– Desidero, 2– Lanfarell, ou 3– Os Irmãos Soizav. Dependendo do nível de poder do grupo, não existe opção razoável além de fugir dos dragões."
    },
    {
      type: "text",
      content: "O ataque acontece em uma área próxima, começando um fogaréu. Pedras derretem com as labaredas, muros desabam, e quantidades enormes de pessoas são incineradas em segundos. O grupo precisa fazer sequências de testes. Físicos: para escapar das chamas e não ser asfixiado pela fumaça. Mentais: contra a presença aterroradora dos dragões e para não sofrer traumas diante da visão do massacre. Sociais: para manter a calma entre os fugitivos e liderá-los até um lugar seguro, ajudando a salvá-los. Falhar em um teste sempre impõe uma consequência, seja dano ou condições negativas."
    },
    {
      type: "text",
      content: "Depois do ataque, quase nada resta: cinzas, uma tempestade de fogo, e poucos lugares protegidos. Em uma coluna de refugiados, o grupo é convocado pelas autoridades, que explicam a gravidade da situação. Os cavaleiros dificilmente serão derrotados em suas montarias, mas ainda existe uma chance: neutralizá-los enquanto estão afastados delas."
    },
    {
      type: "text",
      content: "Espiões descobriram a localização do acampamento da Companhia, e sabem que à noite os cavaleiros irão se reunir para fazer planos. Se o grupo questiona por qual motivo está sendo convocado, a resposta é categórica: não sobrou nenhum outro herói vivo e disponível na vizinhança!"
    },
    {
      type: "text",
      content: "Infiltrar-se na base inimiga pode ser feito de inúmeras maneiras, mas exige essencialmente atravessar três áreas representadas por testes. No início, a dificuldade deles é baixa, e vai ficando mais elevada. Superar a última área em específico envolve passar por ruínas onde dormem os dragões, acorrentados."
    },
    {
      type: "text",
      content: "Exceto por dois guardas, os cavaleiros mercenários estão sozinhos na tenda de comando. Atacados pelos personagens, os vilões desembainham suas espadas e lutam. A não ser pelo Conde Desidero. Ele continua bebendo vinho e rindo. A cada três rodadas, $1d4$ sentinelas do acampamento aparecem como reforços. Caso, os cavaleiros percebam que estão perdendo a luta, um deles foge até onde estão os dragões. Se o mercenário em fuga alcançar sua montaria... A última esperança de salvar o reino será vencer a criatura."
    },
    {
      type: "text",
      content: "Se ao fim do conflito Desidero estiver vivo, revela que foi ele quem organizou o encontro dos cavaleiros, vazando a informação. Conta que desde criança quis fazer parte da nobreza e experimentar o poder, mas ao conseguir, se desiludiu. Só queria assistir a seus colegas — a quem desprezava — sofrerem mortes violentas e inglórias nas mãos de gente comum."
    },
    {
      type: "text",
      content: "— Façam o que quiserem comigo, não me importo — conclui. — Os deuses nos odeiam, e a existência é só uma brincadeira de mau gosto!"
    }
  ]
  },
  {
  id: "60",
  name: "Fim do Túnel",
  theme: "Cyberpunk",
  image: "/aventuras/fim-do-tunel.png",
  summary: "Em uma megalópole futurista, um grupo de 'moscas' viciadas em luz deve atravessar uma estação de metrô abandonada, que agora é vigiada por mercenários rivais. O confronto é interrompido por uma criatura que habita os túneis.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs cyberpunk e futuristas — 3D&T Alpha, Shadowrun, The Expanse, e qualquer outro compatível com esses gêneros. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O sol não é para todos"
    },
    {
      type: "text",
      content: "A história se passa em uma civilização tecnologicamente avançada, mas onde a maioria da população vive em condições precárias. Não importa se isso acontece na Terra ou em outro planeta. O fato importante é que existem cidades gigantescas, construídas em múltiplos níveis, indo do subsolo até os céus. Mover-se entre seus andares equivale às dificuldades de entrar em um país estrangeiro. As autoridades dos andares superiores estão sempre de prontidão para rastrear e expulsar imigrantes ilegais."
    },
    {
      type: "text",
      content: "O grupo é parte dos subterrâneos de uma dessas megalópoles: a camada mais profunda, jamais tocada pela luz solar. Nela vivem indivíduos marginalizados, governados por uma pequena elite de pessoas privilegiadas. Inexiste iluminação pública. Quem não pode pagar por eletricidade depende de fogueiras, placas luminosas, e outros tipos de propaganda. Devido a mutações causadas pela ingestão de produtos tóxicos em alimentos, muitos habitantes dessa penumbra sem fim desenvolveram uma espécie grave de depressão climática. De tempos em tempos, precisam se reunir perto de ambientes bem iluminados ou começam a morrer. São chamados preconceituosamente de “moscas”."
    },
    {
      type: "text",
      content: "Ricos não gostam de vê-los perambulando por shoppings e bairros nobres. Por causa da falta de uma força policial no subterrâneo, contam com mercenários para manter indesejados fora dessas áreas. A ironia é esses caçadores de recompensa virem de zonas de conflito, ou do crime, e serem, eles mesmos, párias. Seu trabalho é um dos poucos garantindo pagamentos aceitáveis, e acesso a implantes biônicos — que permitem enxergar no escuro."
    },
    {
      type: "text",
      content: "É melhor, antes de criar os personagens, apresentar para quem está jogando a ideia básica da ambientação, em uma “sessão zero”. E explicar que a partida terá uma proposta diferente. Jogador contra jogador. O grupo começa dividido em duas equipes: moscas (protagonistas) e mercenários (antagonistas). Cada uma tem suas próprias motivações e objetivos. É preciso ter certeza, é claro, que todo mundo entende, e concorda, com essa abordagem."
    },
    {
      type: "text",
      content: "A equipe protagonista é composta por gente caída em desgraça, que acabou desenvolvendo vício em luz elétrica. Quando a aventura começa, ela tem um único dia de vida restante. Precisa encontrar um local agradável e iluminado para se recuperar, antes de começar a ficar debilitada e morrer. Porém, há esperança. Está próxima de uma antiga estação de metrô desativada, levando até um lugar assim: “A Janela Para Outro Mundo”. É uma galeria comercial completamente iluminada por um imenso outdoor em três dimensões, com efeitos hiper-realistas. O aparelho costuma retratar mundos exóticos em suas propagandas, sendo propriedade de uma corporação de turismo espacial."
    },
    {
      type: "text",
      content: "Contudo, a tal passagem pelo metrô, antes segura, foi recentemente descoberta por patrulhas. Enquanto algumas rotas ainda estão sendo lacradas por robôs, um grupo de caçadores de recompensa foi enviado para vigiá-la — no caso, a equipe antagonista, composta pelos demais jogadores. Lembre a todos: só porque esses personagens estão do lado errado, não precisam ser unidimensionais ou moralmente pouco complexos. Apesar disso, se alguém prefere interpretar um personagem desprezível, um vilão até a raiz dos cabelos, não há problemas. Desde que deixe isso bem claro, todo mundo permita, e limites — combinados antes entre o grupo — sejam respeitados!"
    },
    {
      type: "text",
      content: "A cena do confronto entre as equipes acontece logo no início da aventura. Bastará desenhar uma planta simples da estação, ou usar algum mapa pronto de referência. O time de caçadores está escondido perto dos penetras, esperando para fazer uma emboscada. Testes de furtividade e percepção opostos deverão ser feitos entre os grupos para ver qual lado surpreende o outro, agindo primeiro."
    },
    {
      type: "text",
      content: "No entanto, antes de uma provável batalha, cada personagem precisa fazer um teste adicional ligado à investigação. Se passar, descobre vestígios, sugerindo que algo mora nos túneis com trilhos abandonados."
    },
    {
      type: "text",
      content: "Uma coisa inumana."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Inimigo nosso"
    },
    {
      type: "text",
      content: "Depois de algumas rodadas, o embate entre as equipes é interrompido por uma ameaça que ataca a todos. A sua natureza exata e quais as pistas da presença dela podem ser escolhidas de acordo com o que é mais adequado ao jogo. São mutantes vivendo nas trevas da estação? Velhos androides responsáveis pela segurança dos trens? Monstros vindos a bordo de uma espaçonave? Um bilionário psicopata vestido de morcego que gosta de caçar pessoas pobres por esporte? Livros de RPG voltados para mestres costumam trazer fichas de oponentes. Basta ser um desafio digno do grupo todo: algo que dê trabalho para ser vencido, mesmo se as duas equipes lutarem juntas."
    },
    {
      type: "text",
      content: "Os acontecimentos do restante da aventura dependem das ações dos jogadores. Haverá uma aliança de conveniência entre as duas facções? O grupo de viciados em luz tentará recuar, encontrando outra solução? Se a ameaça for detida, os mercenários trairão seus empregadores e ajudarão seus alvos? O conflito recomeçará entre os personagens sobreviventes? Será que todos sofrerão uma aniquilação total nas mãos daquilo que vive nos túneis, como em um filme de terror?"
    },
    {
      type: "text",
      content: "Uma coisa é certa: alcançar em segurança A Janela Para Outro Mundo é uma vitória, mas não uma vitória definitiva. Personagens enxergando o imenso outdoor devem fazer testes mentais para evitar ficarem paralisados durante minutos a fio contemplado a propaganda. Quando se livram do transe, junto com alívio, são tomados também por uma sensação de vazio."
    },
    {
      type: "text",
      content: "Conseguiram sobreviver, mas que destino reserva o amanhã?"
    }
  ]
  },
  {
  id: "61",
  name: "Fora do Inferno",
  theme: "Ação",
  image: "/aventuras/fora-do_inferno.png",
  summary: "Lutadores são convocados para um torneio, mas são presos após um ataque militar. Na prisão, eles se veem no meio de uma revolta de operários contra o exército e devem roubar um mecha para escapar de uma iminente explosão nuclear.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs que comportem mesas de lutinha (você sabe: Street Fighter e coisas do tipo) — 3D&T Alpha, Karyu Densetsu e qualquer outro compatível com esse gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Um dia a casa cai"
    },
    {
      type: "text",
      content: "Os personagens são alguns dos maiores lutadores da Terra — ou aspirantes ao título. Foram convocados para um torneio de artes marciais organizado pelo chefão do tráfico internacional de armas: o homem conhecido como Viktor Fortunato. Dizem que ele pretende enfrentar o vencedor em um duelo, derrotando-o com as próprias mãos!"
    },
    {
      type: "text",
      content: "Cada jogador precisa apenas criar uma motivação básica para seus lutadores participarem: busca por fama, dinheiro, vingança. Não importa, pois nada sairá como planejado."
    },
    {
      type: "text",
      content: "A disputa acontece em um castelo do magnata, localizado na Confederação de Halvássia. É uma micronação montanhosa no centro-sul europeu, fundada por uma companhia mercenária ainda durante tempos medievais. Hoje, é uma ditadura governada pelo exército local, subornado para ignorar as atividades de Viktor, mas isso está prestes a mudar. Traidores dentro do próprio crime resolveram eliminar o líder. Afinal, ele só se ocupa com bobagens."
    },
    {
      type: "text",
      content: "De início, tudo segue os moldes de uma aventura clássica de disputa. O vilão observa de um camarote luxuoso, que revela apenas sua silhueta sombria. Os narradores apresentam os competidores e seus estilos de luta. Explicam as regras: vale tudo! Os embates só terminam por rendição ou morte. Uma chave inicial é traçada por sorteio, e logo dois membros do grupo se enfrentam."
    },
    {
      type: "text",
      content: "No entanto, em meio ao combate, os militares halvassianos atacam o local. Fazem isso de maneira bem eficiente: disparam um míssil de alta capacidade explosiva, arrasando tudo. Por sua resistência sobre-humana — ou sorte mesmo — os personagens jogadores são os únicos a sobreviver. No hospital, são informados de que o lorde criminoso foi incinerado. O grupo é preso por atividade esportiva ilegal e todos são condenados a dez anos de trabalho compulsório pelas leis locais."
    },
    {
      type: "text",
      content: "Quando acordam, estão na prisão."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "A fundição"
    },
    {
      type: "text",
      content: "Paredes de metal, escotilhas, filtros de ar. O lugar onde o grupo foi aprisionado é um antigo abrigo anti-atômico. Fica no subsolo e tem segurança reforçada. Para essa etapa da aventura, certifique-se de ter previamente preparado um estoque de fichas de brutamontes, soldados, ninjas e robôs gigantes como desafio."
    },
    {
      type: "text",
      content: "À noite, os personagens ficam isolados em sua cela, mas durante o dia são levados pelos carcereiros até a superfície. Ali fica uma fábrica com fornos industriais, onde ajudarão na produção de componentes para robôs construídos no local, conhecidos como mecha. As altas temperaturas do lugar exigem que, de hora em hora, realizem testes de resistência para não ficarem fatigados. Os lutadores trabalham junto a operários comuns, mas são hostilizados por eles. Um soldador com um imenso capacete de metal, chamado Ulrich, acusa-os de serem estrangeiros enviados para roubarem seus empregos. É interrompido por outro sujeito, com um braço biônico. Ele apresenta-se como Ruedi, líder do sindicato local. Diz que não é hora para divisão. Quer apoio dos lutadores no discurso que fará, iniciando uma greve. Acredita que a presença deles pode dissuadir os patrões de usarem a força. Em troca, negociará que sejam mandados para um lugar menos policiado."
    },
    {
      type: "text",
      content: "Independente do que decidirem, na manhã seguinte, o líder faz seu discurso sob o olhar de mercenários. As portas da fábrica se fecham. De repente, uma nova explosão acontece, matando Ruedi imediatamente e ferindo os personagens ao redor dele. Os capangas avançam, atacando os manifestantes. Uma escolha deve ser apresentada a cada jogador: ficar e lutar ou se refugiar na área protegida mais próxima. Se alguém procura abrigo, dá de cara com Ulrich, que prontamente se põe a gritar: “São traidores! Colocaram uma bomba!”. Ele logo some, e uma turba de operários armados com martelos ataca. Agora os trabalhadores também serão hostis ao grupo."
    },
    {
      type: "text",
      content: "Os mercenários recebem reforços do exército. Em meio ao que vira caos absoluto, há só duas rotas de fuga observáveis: voltar às celas no subterrâneo ou roubar e pilotar o enorme mecha que está sendo finalizado naquele dia. Ambas, é claro, repletas de inimigos."
    },
    {
      type: "text",
      content: "Indo até o robôzão, os jogadores encontram Ulrich, acabando de sabotar o reator nuclear do veículo."
    },
    {
      type: "text",
      content: "— Vocês foram uma boa distração! — ele diz — Nós vamos botar a culpa nesses vagabundos. Acabar com as organizações deles antes que uma revolução se espalhe. Nada vai sobreviver aqui, mas temos lugar para guerreiros capazes no exército halvassiano. Voltem comigo até o abrigo..."
    },
    {
      type: "text",
      content: "Os jogadores (esperamos!) recusam a proposta, e Ulrich saca duas espadas, para enfrentá-los. Se o grupo sobreviver, precisará de conhecimento em ciências ou engenharia para tentar reparar o reator. Caso consigam, podem entrar no robô e usá-lo para tentar fugir até a fronteira. Fora da fábrica há uma cidade, onde outro mecha do exército os enfrenta. É impossível lutar ali sem destruir as casas ao redor. Para salvar a cidade, o piloto precisa gastar três turnos sem fazer nada além de se movimentar, levando a luta para o campo. Vencendo esse desafio, os personagens conseguem alcançar a República Democrática do Leste, onde são condecorados como heróis (!) por terem capturado uma perigosa arma do país rival."
    },
    {
      type: "text",
      content: "Se aceitaram a proposta, ou voltaram ao abrigo, sobrevivem à iminente explosão nuclear. Ao deixá-lo, encontram uma paisagem devastada. A radiação seria o bastante para matar pessoas comuns — mas os personagens são bastante incomuns. Se passarem em três testes de resistência, antes de três falhas, sobrevivem. No futuro, se escaparem, há possibilidade de apresentarem mutações e adquirirem estranhos poderes."
    },
    {
      type: "text",
      content: "No momento, estão isolados no meio de um país hostil, a quilômetros da fronteira mais próxima."
    }
  ]
  },
  {
  id: "62",
  name: "Caubói na Lua",
  theme: "Aventura Espacial",
  image: "/aventuras/cauboi-na-lua.png",
  summary: "A tripulação de uma nave danificada aceita a missão de proteger o rancho de 'Kid Mix', um influenciador cancelado. Eles descobrem que sua antiga patrocinadora, uma corporação de cybercigarros, enviou clones mercenários para matá-lo antes que revele os efeitos tóxicos da marca.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi feita para RPGs de aventura espacial, como The Expanse, e qualquer outro compatível com esse gênero. É uma estrutura de história sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou parte de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Influenciador sideral"
    },
    {
      type: "text",
      content: "Nesta história o grupo interpreta a tripulação de uma espaçonave qualquer. Expedição científica, militar… Não importa de onde vieram ou para onde vão. O relevante é que a aventura começa com o mais clássico gancho: a parada não-planejada do veículo em um planetoide distante, após os propulsores pararem de funcionar."
    },
    {
      type: "text",
      content: "O corpo celeste em questão é uma das muitas luas de um planeta. Abriga na sua superfície o entreposto Sancta Maria, localizado logo no início de uma planície feita de lava solidificada, lembrando um mar de rocha. Do lado do entreposto em que a terra é cultivável há uma dúzia de fazendas. Na parte firme há o espaçoporto, pouco movimentado, que conta com uma cafeteria e também a maior construção do lugar: a igreja ecumênica, utilizável por todas as crenças e religiões."
    },
    {
      type: "text",
      content: "Sancta Maria foi fundada por comerciantes, mas ali já habitava uma leva antiga de povoadores. Eles vieram trabalhar ainda na terraformação do satélite, e foram expulsos para terras mais remotas. Hoje existe bastante miscigenação entre as duas levas de colonos, mas permanece uma hostilidade velada entre aqueles que vivem na cidade e quem mora nas cercanias."
    },
    {
      type: "text",
      content: "É dali que vem um homem montado em seu cavalo, pedir ajuda ao grupo. Um homem esguio, ágil, com o tom de voz elevado, pois é meio surdo. O caubói se apresenta, mas quem passar em um teste relacionado a conhecimentos gerais irá reconhecê-lo imediatamente: é “Kid Mix” uma antiga subcelebridade e influenciador. Nascido na vida de fronteira espacial, ficou famoso décadas atrás, quando ainda era criança e postava uma miscelânea de vídeos com palhaçadas e proezas, gravadas em seu rancho. Ao crescer tornou-se garoto-propaganda de Luna, uma marca de cybercigarros, participando da nostálgica campanha que viralizou: “Olha aí quem cresceu!”. Depois disso, desapareceu da mídia."
    },
    {
      type: "text",
      content: "Mix explica ter sido “cancelado” nas redes sociais, perdendo seu patrocínio. Resolveu voltar à sua lua natal e investir nas fazenda da comunidade onde nasceu. Se perguntarem sobre o motivo de sua exclusão, ele gagueja. Explica ter declarado “apreciar ironicamente música clássica do fim do século XX, embora, esteja ciente de suas letras de amor repletas de chauvinismo masculino, e do patrocínio desses antigos artistas por oligarcas”. Não se preocupe, ninguém entende bem do que ele está falando."
    },
    {
      type: "text",
      content: "Ele afirma ter recebido há alguns dias uma mensagem anônima, de uma pessoa que se apresentou apenas como “fã das antigas”. De acordo com ela, mercenários foram enviados para matar a família do caubói. Mix precisa de ajuda e, em troca, dispõe-se a pagar pelo conserto da nave danificada."
    },
    {
      type: "text",
      content: "Antes de ir até seu rancho, o vaqueiro diz estar disposto a uma última tentativa de convencer os habitantes de Sancta Maria a ajudarem. Há três aliados que podem ser recrutados. Cada um confere algum bônus em testes envolvendo combate, a critério do Mestre."
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "Soren das Mortes. Já foi uma temida matadora de aluguel, hoje é uma senhorinha que vive dentro da igreja local. Aguarda alguém que lhe mostre qual das muitas religiões do espaço é a correta. Para recrutá-la basta convencê-la a seguir alguma filosofia que ela ainda não ouviu falar (passar em um teste de diplomacia ou conhecimento.)"
    },
    {
      type: "text",
      content: "Iotaque Dallas. Os seguranças do espaçoporto não fazem questão de ajudar, mas esse homem nasceu nas cercanias e tem sutis trejeitos que lembram os de Mix. Se alguém passar em um teste de percepção e chamar atenção para o fato, ele resolverá se juntar ao grupo por lealdade a sua comunidade."
    },
    {
      type: "text",
      content: "Jazzmin Astrobock. Uma moça que atende na cafeteria local. Era cantora itinerante e assaltante de bancos. Odeia a péssima trilha sonora que é obrigada a escutar na loja todos os dias. Bastará alguém atiçar sua curiosidade para que se demita e resolva envolver-se em mais um tiroteio!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Confronto no rancho"
    },
    {
      type: "text",
      content: "Os bandidos atacam a fazenda de Mix durante a madrugada. Até lá, o grupo pode decidir preparar defesas na casa dele, ou construções próximas como o celeiro ou o curral. A gangue enviada para matá-lo tem seis criminosos altos, de cabelos louros e queixo quadrado, chamados “Irmãos Rogers” (na verdade são clones do “Rogers” original). Eles desceram com sua nave em um lugar afastado, e aproximam-se do rancho voando em mochilas a jato. Contam com visores para ver no escuro, armadura e armas de nível tecnológico avançado."
    },
    {
      type: "text",
      content: "Se os defensores do rancho conseguirem vencer a gangue, podem interrogá-la, mas não sabem de muita coisa: foram contratados por meio de um aplicativo! Um personagem com conhecimento adequado, apesar disso, sabe que pode tentar identificar o contratante hackeando o sistema bancário usado para fazer o pagamento aos irmãos. Passando em um teste, se consegue seguir a trilha de dados. Ela leva até uma subsidiária de Luna, a fabricante de cybercigarros, antiga patrocinadora de Mix."
    },
    {
      type: "text",
      content: "Uma rápida pesquisa bastará para revelar que, há anos, a empresa virou manchete devido à denúncia de substâncias tóxicas que afetavam os cinco sentidos. A empresa alegou já ter corrigido a fórmula, mas parece evidente para quem analisar as notícias que ela teria interesse em matar celebridades ligadas à marca antes que fiquem doentes, criando propaganda negativa."
    },
    {
      type: "text",
      content: "O desfecho depende das ações do grupo. Caso consigam ajudar o caubói a chegar à verdade, Mix expõe e processa a corporação. E faz questão de pagar um extra aos jogadores. Caso contrário, resolve vender a fazenda e partir para um planeta mais policiado, onde sua família ficará mais segura, e poderá começar outra vida. Como diz:"
    },
    {
      type: "text",
      content: "“Vim aqui para fugir da fama, mas não importa mais. Hoje em dia, ninguém lembra mais quem eu sou!”."
    }
  ]
  },
  {
  id: "63",
  name: "Oráculo",
  theme: "Fantasia e Mistério Tecnológico",
  image: "/aventuras/oraculo.png",
  summary: "A voz de um oráculo silencia, levando os heróis a investigar o santuário interno. Eles descobrem que a entidade é, na verdade, uma máquina antiga que precisa de reparos, expondo um segredo guardado pelo clero.",
  sections: [
    {
      type: "text",
      content: "Esta miniaventura foi criada para RPGs de fantasia como Fabula Ultima e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "ESTRANHA ENTIDADE"
    },
    {
      type: "text",
      content: "O oráculo de um templo — a voz de uma entidade chamada Aquele-que-Sussurra — está em silêncio há alguns dias. Segundo as crônicas, essa voz é um fragmento da própria entidade, encarnada em um sacerdote confinado no santuário interno. Por causa de seus votos, nenhum outro pode entrar ali, sob risco de maculá-lo."
    },
    {
      type: "text",
      content: "Agora, atrás da grade onde antes ecoavam as profecias, só se ouve um chiado constante, como o estalo de lenha queimando."
    },
    {
      type: "text",
      content: "Diante disso, uma alta-sacerdotisa convoca um grupo de aventureiros para investigar. Ela tem um motivo: os heróis ficaram conhecidos por resolver recentemente um problema grave na região. O curioso é que fizeram isso à distância, sem jamais terem estado no local da tragédia."
    },
    {
      type: "text",
      content: "Essa aventura passada não será jogada — os próprios jogadores devem inventá-la retrospectivamente. Quando a alta-sacerdotisa pede que recordem como resolveram a crise, um jogador, escolhido aleatoriamente, narra o início da história e define o problema. Pode começar dizendo, por exemplo: “Sim, eu me lembro, foi naquela vez em que nós…”. Ele tem até 2 minutos para falar. Ao final, outro jogador deve levantar uma objeção, como: “Mas como poderíamos ter feito isso, se estávamos a léguas daqui?”. O narrador precisa responder com alguma justificativa e então prosseguir com a história."
    },
    {
      type: "text",
      content: "Se toda mesa, incluindo o mestre, concordar que a narrativa criada foi coerente — ou interessante — os sacerdotes do templo colaboram com o grupo. Se não, os heróis serão considerados charlatões ou incompetentes. Nesse caso, embora a alta-sacerdotisa ainda mantenha o grupo no caso, o resto do clero será menos prestativo, e a dificuldade dos testes aumentará."
    },
    {
      type: "text",
      content: "Após descansarem da viagem pela manhã, durante a tarde o grupo pode descobrir:"
    },
    {
      type: "break"
    },
    {
      type: "text",
      content: "O oráculo repetiu a frase “Akash en runa” por 3 vezes antes de silenciar. Personagens eruditos, ou que consultem a biblioteca do templo, podem descobrir que significa erro, em um idioma repleto de alegorias."
    },
    {
      type: "text",
      content: "A gema mágica verde que brilhava sobre a grade agora está opaca e vermelha."
    },
    {
      type: "text",
      content: "Superfícies aquosas (bacias, cálices, poças) vibram mesmo sem vento."
    },
    {
      type: "text",
      content: "Um dos corredores exala forte cheiro de ar queimado, semelhante ao deixado por um trovão."
    },
    {
      type: "text",
      content: "No museu do templo há um disco dourado de origem e função desconhecidas."
    },
    {
      type: "text",
      content: "Ao fim do dia, o grupo é convidado para um jantar com a alta-sacerdotisa, em que ela o motivo do chamado: que os aventureiros explorem os meandros labirínticos do santuário interno durante o resto da noite. Isso seria permitido, já que os personagens não fizeram votos, mas seria escandaloso se os fiéis descobrissem. Pelo sigilo, o grupo receberá uma recompensa adequada."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "O SANTUÁRIO INTERNO"
    },
    {
      type: "text",
      content: "O santuário é um labirinto de corredores estreitos. No centro da câmara principal repousa um orbe mágico, preso a uma estrutura metálica mais antiga que o templo. O cristal está apagado, coberto de teias, exalando um cheiro acre de queimado. Acima, uma fenda no teto deixou entrar um inseto gigante, preso nas teias."
    },
    {
      type: "text",
      content: "Se algum personagem tentar ativar o orbe de imediato, a esfera aquece em excesso: o metal range, uma fumaça densa se espalha e sufoca o ambiente. Em segundos, todos sofrem dano de fogo e asfixia, até que o sistema se apague sozinho. A única forma de religá-lo é limpar as teias que o bloqueiam, mas, ao fazê-lo, o inseto preso se agita. Sua carcaça ressecada se reanima como um morto-vivo e ataca o grupo. Use uma ficha de inseto gigante ou criatura semelhante, adaptando-a com poderes e fraquezas de morto-vivo!"
    },
    {
      type: "text",
      content: "Após derrotar o inimigo, os heróis purificam o orbe. Ao ser reativado, ele repete em voz metálica uma frase — que, adequadamente traduzida, significa “Memória corrompida. Restauração necessária”. A investigação indica que é preciso inserir um disco de ouro, encontrado no museu do templo, em um dos altares do oráculo. Feito isso, o orbe exige uma senha. A pergunta que faz, traduzida, significa “Qual a palavra mágica?”. A resposta correta é simplesmente “Por favor!”, mas o grupo precisa, de mesmo modo, traduzir tanto a pergunta quanto a resposta."
    },
    {
      type: "text",
      content: "Depois que o disco é inserido, luzes percorrem o metal e símbolos surgem no cristal, significando “Restauração iniciada”. Tudo indica que algo vasto está em curso. Mas o tempo passa e o processo nunca termina. Certa noite, a alta-sacerdotisa chama os aventureiros hospedados no templo. Ela agradece, paga a recompensa e declara abruptamente que a missão foi concluída."
    },
    {
      type: "text",
      content: "Se questionada quanto a isso, admite sem rodeios que a restauração pode levar anos ou jamais se completar. Ela sempre soube que o oráculo era uma máquina. Para sua crença, a promessa do “eterno retorno” do oráculo é acima de tudo, um excelente teste de fé para os novos iniciados."
    }
  ]
},
{ id: "Cem",
  name: "Cem",
  theme: "Drama, Mistério e Meta-RPG",
  image: "/aventuras/cem.png",
  summary: "Amigos de infância se reúnem no funeral de seu Mestre de RPG exatamente 100 meses após a última sessão, quando um monstro de sua imaginação invade a realidade.",
  sections: [
    {
      type: "text",
      content: "Esta miniaventura foi criada para RPGs como Kids on Bikes, Ordem Paranormal e Tales from the Loop. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PASSADO"
    },
    {
      type: "text",
      content: "Os personagens começam como crianças em uma cidadezinha onde nada perigoso acontece, exceto em suas imaginações. O que os une é seu ritual semanal: se juntar em volta de uma mesa e jogar o RPG Tormenta. Escola e família ficam em segundo plano quando é dia de rolar os dados! Na sua campanha, eles são heróis que vagam pelas terras de um antigo reino, combatendo demônios aberrantes trazidos pela tempestade sobrenatural que dá nome ao jogo."
    },
    {
      type: "text",
      content: "Quem faz o papel de mestre e narra as histórias é outra criança da vizinhança, uma brilhante contadora de histórias de mente hiperativa, mas com uma vida tumultuada. O grupo cria tal NPC de maneira conjunta: nome, aparência, histórico, personalidade e os problemas que vem passando."
    },
    {
      type: "text",
      content: "A aventura começa com os jovens personagens jogando uma sessão memorável, em que seus heróis entram em uma ruína tomada pelos horrores da tempestade rubra. Em uma caverna, eles encontram um ovo de simbionte, a relíquia viva conhecida como o Tesouro de Trebuck. O ovo emana um calor antinatural e se mexe como uma larva viscosa. A descrição do ovo acaba sendo excessivamente vívida, como se o mestre já tivesse visto isso antes e personagens mais sensíveis podem reagir diante disso. O mestre se desculpa pelo excesso narrativo e quando segue a história o grupo precisa decidir o que fazer com o ovo. As decisões mais prováveis são:"
    },
    {
      type: "text",
      content: "Destrui-lo."
    },
    {
      type: "text",
      content: "Escondê-lo."
    },
    {
      type: "text",
      content: "Vendê-lo."
    },
    {
      type: "text",
      content: "Ficar com ele e estudá-lo."
    },
    {
      type: "text",
      content: "Logo em seguida, alguém liga para o mestre e a sessão precisa terminar. Ela se encerra com o NPC narrando um dramático teaser do futuro da campanha."
    },
    {
      type: "text",
      content: "— Em 100 meses o ovo se abrirá! — comunica, antes de se despedir."
    },
    {
      type: "text",
      content: "Há um breve silêncio. Então o momento passa, e chega a hora de arrumar mochilas e correr para casa antes dos postes de luz acenderem. Fica a promessa do que acontecerá na próxima aventura, e mesmo o personagem mais cínico sente uma ponta de curiosidade, mas tudo muda depois daquela noite. O mestre para de aparecer regularmente na escola ou vizinhança. Espalham-se boatos de que está com problemas em casa. Um dia, ele some. Transcorre uma semana. Depois, um mês. Por fim, a campanha morre. Nenhum personagem tinha como saber, mas aquela era a última vez que jogariam juntos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PRESENTE"
    },
    {
      type: "text",
      content: "Quase uma década se passa. Os personagens agora são adultos, afastados pela rotina, pelas responsabilidades e pela marcha inexorável do tempo. Eles só se veem novamente porque estão no mesmo funeral. Cada jogador precisa descrever quem seu personagem se tornou durante o interlúdio: como está, como age e como sua vida anda e quem se tornou."
    },
    {
      type: "text",
      content: "Só então é revelado que quem está sendo velado é mestre! Após uma cena em que todos os personagens podem interagir e têm a chance de se despedir do NPC, algum deles nota uma coincidência perturbadora: cem meses se passaram desde que jogaram a última sessão…"
    },
    {
      type: "text",
      content: "Logo após, nuvens vermelhas e relâmpagos roxos tomam o céu. Chove sangue. Algo estranho é avistado no centro da cidade: aquele ovo, agora se manifestando na realidade. A criatura não será vencida no plano da imaginação, mas sim no mundo em que os personagens existem (use a ficha de ameaça que preferir para representá-la!)."
    },
    {
      type: "text",
      content: "Dependendo da decisão que o grupo tomou na infância, algo diferente acontece:"
    },
    {
      type: "text",
      content: "Se destruíu o ovo: a entidade surge mais fraca, porém, persegue os personagens não importa para onde fujam."
    },
    {
      type: "text",
      content: "Se escondeu: a entidade surge mesclada a características do local onde foi escondida, acompanhada por uma horda dos habitantes transformados em aberrantes. No final, a cidadezinha onde os personagens cresceram está destruída. O grupo perde seu lar assim como essas pessoas."
    },
    {
      type: "text",
      content: "Se vendeu: a criatura surge junto do verdadeiro comprador, um antigo vilão da campanha, que deve também ser criado coletivamente. O NPC tentou usar a criatura para seus planos, resistiu à sua tentativa de dominação mental, mas perdeu o controle dela. O grupo pode barganhar com ele por uma aliança contra a entidade, mas agora uma ameaça adicional existe em seu mundo."
    },
    {
      type: "text",
      content: "Se ficou com ele: a tempestade cessa, mas a criatura começa a caçar os personagens dentro de seus sonhos à noite, tentando corrompê-los aos poucos."
    },
    {
      type: "text",
      content: "Outras soluções podem ter desfechos similares. Contudo, não importa a escolha, algo é revelado: a entidade contém a essência do falecido mestre! De alguma forma, ele voltou à vida, mas foi aprisionado dentro do ser e corrompido pela tempestade profana."
    }
  ]
},
{ id: "Epiphânia",
  name: "Epiphânia",
  theme: "Fantasia e Folclore",
  image: "/aventuras/epiphania.png",
  summary: "Arautos anunciam a chegada de Epiphânia, a Bruxa Celeste. Os heróis participam de um festival de fim de ciclo, encenando rituais e sendo julgados por sua generosidade para receber bênçãos ou carvão.",
  sections: [
    {
      type: "text",
      content: "Esta mini-aventura foi criada para jogos de fantasia como Fabula Ultima, A Lenda de Ghanor RPG e Tormenta20. É uma trama flexível, sem regras, adaptável às necessidades do seu grupo. Pode ser jogada como aventura avulsa ou início de uma campanha."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Anunciação"
    },
    {
      type: "text",
      content: "Os personagens dos jogadores percorrem estradas tranquilas quando avistam um cortejo vindo na direção oposta. São cantores itinerantes, todos vestidos como animais — raposas, cabras, lebres e um corvo de aparência imponente. Suas roupas são simples, costuradas com lã rústica e fitas coloridas. Eles andam devagar, repetindo cantigas e orações. Assim que avistam os aventureiros, param e se apresentam como arautos de Epiphânia, a Bruxa Celeste."
    },
    {
      type: "text",
      content: "Eles explicam que ela é uma deusa muito antiga, protetora dos novos começos e caçadora dos maus espíritos que vagueiam pelo mundo. Outros deuses tentaram apagar seu culto, mas ela sempre ressurge “ao fim de um ciclo”. Cabe ao mestre, junto dos próprios jogadores, definir o que significa fim de um ciclo dentro do mundo de jogo: o término das colheitas? O último dia do calendário, que virá em breve? A conclusão da aventura da qual estão voltando?"
    },
    {
      type: "text",
      content: "Quando esse ciclo se completa, os arautos viajam pelos vilarejos anunciando a aproximação da “Noite da Bruxa Celeste”. Eles recolhem oferendas dos camponeses — frutas secas, pedaços de tecido, bonecos de palha e moedas — que simbolizam gratidão e respeito. Os aventureiros logo percebem que, apesar da vida simples dos aldeões, todos fazem o possível para contribuir. Alguns queimam efígies da bruxa como parte do ritual. Outros deixam tigelas de leite à porta. Outros simplesmente juntam as mãos e murmuram preces."
    },
    {
      type: "text",
      content: "O grupo é convidado a fazer o mesmo. Eles podem entregar um tributo simples, ou, se tiverem condições, pagar a oferenda de camponeses que não conseguem participar. Esse gesto é significativo e será lembrado mais adiante."
    },
    {
      type: "text",
      content: "Após recolherem tudo, os cantores agradecem e seguem para o próximo vilarejo. Antes de partir, porém, recitam juntos um último aviso: “Ela virá quando o ciclo se completar.” Então desaparecem pela estrada, deixando para trás um clima de expectativa. Nos dias seguintes, os aventureiros ouvem cada vez mais preparativos, conversas ansiosas e relatos de presságios."
    },
    {
      type: "text",
      content: "Quando o ciclo enfim se encerrar, a bruxa virá."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Revelação"
    },
    {
      type: "text",
      content: "Quando o ciclo chega ao fim, os aventureiros alcançam um vilarejo durante sua próxima viagem. No centro da praça, uma enorme fogueira queima com chamas altas, iluminando máscaras, bandeirolas e esculturas de espíritos malignos feitas de barro e madeira. Líderes locais se aproximam e anunciam que hoje é a Noite da Bruxa Celeste, e que a celebração depende da participação do grupo. Cada personagem recebe uma fantasia de animal semelhante às usadas pelos arautos: o grupo é convidado a representar, diante de todos, os mensageiros da deusa. Os demais habitantes vestem máscaras grotescas que simbolizam os espíritos que ela caça."
    },
    {
      type: "text",
      content: "O ritual exige que os heróis participem de um “combate encenado”. Eles devem perseguir e enfrentar essas figuras mascaradas sem ferir ninguém de verdade, mas também sem tornar a encenação maçante. O Mestre decide (interpretando a persona de um NPC juíz que avalia tudo!), o desempenho do grupo, se a apresentação foi memorável, adequada ou desastrosa."
    },
    {
      type: "text",
      content: "Após a encenação, entre uma dança e outra, os personagens têm liberdade para circular pelo vilarejo. Cada jogador realiza uma cena curta entre seu personagem e cada outro integrante do grupo, garantindo que todas as duplas se encontrem durante esse interlúdio."
    },
    {
      type: "text",
      content: "Ao final da celebração, cada personagem recebe um par de meias rústicas. Se o grupo se saiu bem na encenação e demonstrou respeito pelos costumes locais, as meias são enormes. Caso tenham sido desatentos, deselegantes ou agressivos, recebem meias pequenas e esburacadas."
    },
    {
      type: "text",
      content: "Durante a noite, Epiphânia passa pelo vilarejo. Todos dormem sob um feitiço suave que impede que testemunhem sua presença. Apenas personagens que conseguirem resistir a três testes difíceis envolvendo força de vontade permanecem acordados por algum tempo. Esses poucos escolhidos enxergam uma figura envolta em luz azulada, com olhos brilhando como estrelas. A Bruxa Celeste pode revelar fragmentos do futuro da campanha ou segredos sobre o passado dos heróis."
    },
    {
      type: "text",
      content: "Na manhã seguinte, cada personagem encontra algo dentro de sua meia. Quem demonstrou ser altruísta durante a aventura, ou ao longo da campanha, recebe pequenos itens mágicos sugeridos pelos próprios jogadores. Contudo, estes devem caber dentro do tamanho da meia recebida. Os egoístas encontram apenas um pedaço de carvão, mas não é de todo inútil. É mágico, e ao ser deixado perto de uma fogueira entrará imediatamente em combustão e irá acendê-la."
    },
    {
      type: "text",
      content: "Talvez isso ajude a aquecer seus corações gelados!"
    }
  ]
}
];