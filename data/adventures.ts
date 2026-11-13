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
  { id: "Oráculo",
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
  },
  { id: "O Fim",
  name: "O Fim",
  theme: "Fantasia e Ilusão Divina",
  image: "/aventuras/o-fim.png",
  summary: "Após a morte do clássico 'velhinho da taverna' e o fim de todas as missões, os heróis experimentam uma vida pacífica que logo se transforma em um envelhecimento mágico acelerado. Eles devem descobrir que estão presos em um teste divino.",
  sections: [
    {
      type: "subtitle",
      content: "MUNDO SEM PROBLEMAS"
    },
    {
      type: "text",
      content: "Esta aventura deve ser narrada apenas quando o grupo concluir um arco de história e não tiver urgências pendentes. Tudo começa de forma simples. Os heróis visitam o local onde costumavam receber missões, descansar e reencontrar conhecidos. Desta vez, porém, descobrem que a clássica figura do “velhinho da taverna” faleceu. Se preferir, pode substituí-lo por qualquer outra figura que costuma distribuir missões em sua campanha. O essencial é que seja um NPC suficientemente familiar para causar estranhamento."
    },
    {
      type: "text",
      content: "Inicialmente, parece uma morte comum e o grupo pode reagir à notícia como preferir. Contudo, depois disso, nada mais acontece. O mestre não oferece nenhum gancho sobre o que fazer em seguida. Não surge mensageiro, nem oferta de nova aventura. O mundo permanece estático. Se questionado, o mestre pode explicar — sem dar spoilers — que esta será uma sessão mais \"sandbox\", mas, mesmo assim, ao longo do jogo, absolutamente nada movimenta a trama apesar dos esforços do jogadores."
    },
    {
      type: "text",
      content: "Personagens em busca de aventuras podem procurar trabalho em três lugares: entre os arautos do rei, na guilda de aventureiros e no espaço onde as caravanas se aglomeram. Entretanto, em todos eles nada de interessante aparece. Os arautos foram dispensados por cortes orçamentários. Na guilda, todas as vagas estão ocupadas. Entre as caravanas, descobrem que os assaltantes migraram para atividades legítimas mais lucrativas e os monstros da região foram extintos pela caça predatória. Por mais que os heróis procurem, novas missões NÃO surgem. É então que o mestre interrompe a narrativa e faz uma única pergunta dramática aos jogadores:"
    },
    {
      type: "text",
      content: "“O que seu herói faria se todas as aventuras do mundo acabassem?”"
    },
    {
      type: "text",
      content: "Após espaço para respostas, ocorre um salto temporal. Cada jogador descreve como seu herói se adaptou à vida sem conflitos. Encontrou um novo ofício? Conquistou uma vida pacífica? Caiu em desgraça?"
    },
    {
      type: "text",
      content: "Certo dia, todos acordam com sinais de envelhecimento. Há cabelos brancos, novas rugas e dor na coluna. Inicialmente parece natural, mas até seres imortais ou longevos são afetados. Logo fica claro que é um envelhecimento acelerado e mágico, na verdade, um dreno de energia vital."
    },
    {
      type: "text",
      content: "À medida que a debilitação aumenta, todos sentem — instintivamente — a necessidade urgente de reencontrar seus companheiros e descobrir a origem do estranho fenômeno, antes que seja tarde demais."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "JOVEM DA TAVERNA"
    },
    {
      type: "text",
      content: "Reunidos novamente, os heróis podem fazer testes para descobrir a origem da aflição. Testes de conhecimento arcano ou histórico revelam uma pista: para entender a origem do fenômeno, é preciso retornar ao lugar onde tudo começou a mudar."
    },
    {
      type: "text",
      content: "Mesmo que os jogadores já saibam qual é o local, os personagens têm dificuldade em lembrar-se dele, como se suas memórias estivessem embaçadas. Eles precisam realizar testes, conversar com NPCs ou revisitar lugares familiares, até que finalmente se recordam: o mundo começou a mudar no dia em que o velhinho da taverna morreu!"
    },
    {
      type: "text",
      content: "Se forem até a taverna, encontram o estabelecimento fechado e abandonado, mas não é difícil entrar. Há mesas cobertas de poeira, lanternas apagadas e silêncio. Porém, atrás do balcão, há alguém. O velhinho da taverna está lá, perfeitamente vivo, mas não é mais um homem idoso. Parece uma versão muito mais jovem e vigorosa de si mesmo. (Caso você tenha usado outro personagem, ele deve aparecer com uma aparência transformada.)"
    },
    {
      type: "text",
      content: "O NPC sorri com naturalidade e revela sua verdadeira identidade: um deus antigo que assumiu aquela forma para testar os aventureiros. Explica que, no mundo real, os heróis foram derrotados há muito tempo e estão presos em um domínio de sonhos criado por ele. O mundo sem aventuras, o vazio e o envelhecimento acelerado são manifestações desse domínio, alimentado pelo espírito heroico dos personagens."
    },
    {
      type: "text",
      content: "De acordo com ele, tudo foi um experimento para avaliar a perseverança do grupo após a perda de propósito. O deus afirma que pode libertá-los, mas apenas se acreditarem que ainda merecem retornar ao mundo real, repleto de problemas."
    },
    {
      type: "text",
      content: "Se acreditam que ainda têm aventuras a viver."
    },
    {
      type: "text",
      content: "O grupo pode tentar convencer a entidade por meio de argumentos, lembrando feitos passados, demonstrando coragem, arrependimento ou compaixão. Também podem optar por enfrentá-lo. Se escolherem o combate, enfrentam o deus em suas formas atuais, debilitadas pelo dreno de força vital, o que torna o confronto mais desafiador."
    },
    {
      type: "text",
      content: "Caso vençam ou consigam comover a entidade, ela reconhece seu valor e liberta todos da ilusão. Antes de desaparecer, profere palavras que continuam ecoando nas mentes dos heróis muito tempo após despertarem:"
    },
    {
      type: "text",
      content: "— Que comece um novo jogo!"
    }
  ]
  },
  { id: "Emergir Monstruoso",
    name: "Emergir Monstruoso",
    theme: "Fantasia e Caçada a Monstros",
    image: "/aventuras/emergir-monstruoso.png",
    summary: "Contratados para investigar desaparecimentos em uma próspera vila de Trebuck, os heróis devem explorar cavernas subterrâneas infestadas de larvas ácidas antes de enfrentar a colossal criatura responsável pela tragédia.",
    sections: [
      {
        type: "text",
        content: "Arton é um mundo repleto de feras apavorantes. Dragões rondam o mundo, colecionando tesouros e alterando as terras ao seu redor. A Tormenta chove aberrações asquerosas, capazes de destruir a mente e retorcer a matéria. O Deus dos Monstros, Megalokk, espalhou sua prole por todos os lados. Presas, garras e espinhos estraçalham aventureiros despreparados. Heróis que enfrentam monstros são lembrados por sua bravura. Mas este não é um trabalho fácil ou rápido. Cabe a estes aventureiros prepararem-se, coletando o máximo de informações antes mesmo de terem um vislumbre da fera. Afinal, se não souberem exatamente o que enfrentarão, podem tornar-se a próxima refeição de uma besta até então desconhecida."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "RESUMO DA AVENTURA"
      },
      {
        type: "text",
        content: "Emergir Monstruoso é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 8º nível, em Tormenta20."
      },
      {
        type: "text",
        content: "Contratados por um nobre, os aventureiros vão até uma vila onde animais vêm sendo atacados e pessoas estão desaparecendo. A população local fica muito feliz em vê-los. Um fazendeiro anão diz que pode apontar pistas se os personagens lidarem antes com os estranhos monstros que insistem em ocupar seu celeiro."
      },
      {
        type: "text",
        content: "Os heróis então devem investigar túneis que passam por baixo da região, escondendo inimigos subterrâneos. Ao analisar as cavernas, eles encontram um ninho de larvas ácidas famintas. Assim que são derrotadas, tudo começa a desmoronar, e eles terão de enfrentar na superfície o monstro responsável pelos desaparecimentos."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 1: NÃO HÁ PAZ EM TREBUCK"
      },
      {
        type: "text",
        content: "Conhecidos pela sua beleza bucólica, os campos de Barucandor são um dos lugares mais prósperos de Trebuck. Infelizmente, isso não significa tranquilidade. O ajuntamento de feudos faz fronteira com a Tormenta, as Montanhas Sanguinárias e o reino de Sckharshantallas. O barão Marius Valcanti tenta cuidar da população da melhor forma, mas sua idade avançada o força a depender da ajuda constante de aventureiros."
      },
      {
        type: "text",
        content: "Os personagens, reconhecidos por aventuras anteriores, são convidados à presença do nobre. Todas as pessoas que o grupo encontra no caminho, sejam servos ou guardas, vestem-se de forma elegante, um testemunho da prosperidade da região. O barão senta-se em uma cadeira de espaldar alto, que faz sua figura parecer menor. Administradores aproximam-se, mostram algo e logo partem, num fluxo constante."
      },
      {
        type: "text",
        content: "O barão Valcanti saúda os personagens em tom formal, parabenizando-os por alguma de suas recentes vitórias, mas tem pouco tempo para conversas paralelas e vai direto ao ponto. A burgomestra de uma vila em seu território vem relatando o desaparecimento e mutilação de animais, e agora pessoas começaram a sumir também. Ele deseja que o grupo vá à comunidade e lide com o que está causando os problemas."
      },
      {
        type: "text",
        content: "Experiente em negociar com aventureiros, o barão está disposto a oferecer uma recompensa razoável pela missão. Em tibares, pretende entregar T$ 3.000 para cada personagem. Como opção, pode fornecer um item com até três melhorias ao grupo (mas sem a recompensa em dinheiro), ou informação sobre a localização de um acessório menor mágico ou um item com até um encanto (mas não necessariamente os recursos para recuperá-lo)."
      },
      {
        type: "text",
        content: "Alternativamente, o nobre possui também algum tipo de informação de interesse dos heróis. Talvez saiba onde algum vilão que procuram se esconde, ou então possa oferecer o apoio de que precisam para a continuidade da campanha. De uma forma ou de outra, o barão estará preparado, conhecendo bem o que os personagens desejam e pronto para negociar isso."
      },
      {
        type: "text",
        content: "Uma vez terminada a conversa, um dos servos se aproxima com os recursos para a aventura: rações de viagem suficientes para todos, um mapa detalhado da região e da vila, 10 essências de mana e 5 poções de Curar Ferimentos (4d8+4 PV). Equipados para o trabalho, os personagens partem em direção à vila."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 2: PROSPERIDADE E PROBLEMAS"
      },
      {
        type: "text",
        content: "As estradas são bem cuidadas e as pessoas que passam em viagem parecem felizes. Talvez seja uma impressão enganosa, afinal, vocês sabem que o perigo pode surgir a qualquer momento."
      },
      {
        type: "text",
        content: "Caso queira tornar a viagem um pouco mais agitada, considere que ela leva cinco dias, e a cada dia há 20% de chance de um encontro aleatório. É possível rolar na tabela “Estradas do Reinado” (Ameaças de Arton, p. 429) ou escolher algum evento que faça sentido. Evite usar criaturas da Tormenta aqui, exceto se for um elemento recorrente em aventuras anteriores."
      },
      {
        type: "text",
        content: "Se não houver interesse em encontros no caminho, considere que os personagens simplesmente chegam à vila."
      },
      {
        type: "text",
        content: "Os moradores abrem as janelas, acenam com panos e indicam que devem ir até o salão comunal. Todos estão trajando roupas de camponeses bem cuidadas, e estão sorridentes. Um teste de Intuição ou Investigação (CD 10) mostra que a alegria é genuína, não fruto de desespero. Esta população parece viver bem, e a presença de heróis os convence de que seus problemas, quaisquer que sejam, serão solucionados."
      },
      {
        type: "text",
        content: "O salão comunal está enfeitado e a burgomestra acena. Há um banquete preparado para os aventureiros. Se questionada sobre o risco de uma aglomeração atrair o que quer que esteja sumindo com as pessoas, ela explica que os desaparecimentos são noturnos e só ocorreram com indivíduos desacompanhados."
      },
      {
        type: "text",
        content: "Apesar da agitação da maior parte da população, alguns mantêm-se afastados. Conseguir informações é um teste estendido de Diplomacia (CD 20, três sucessos). Uma falha total representa incômodo das pessoas relacionadas ao desaparecimento, ou então excesso de bajuladores impedindo conversas sinceras. A partir do dia seguinte é possível iniciar um novo teste estendido, agora exigindo cinco sucessos. A cada noite há 10% (1 a 10 em 1d100) de chance de haver uma nova vítima."
      },
      {
        type: "text",
        content: "Ao serem bem-sucedidos, os aventureiros conseguem o relato de um dos fazendeiros locais, o primeiro a sofrer com os ataques de animais. O homem, um anão mal-humorado chamado Korimm, começa a reclamar."
      },
      {
        type: "text",
        content: "“Primeiro, minhas vacas são atacadas! Ai, apareceram os malditos buracos no meu terreno, fazendo meus animais se machucarem. E agora, pelas ceroulas de mitril de Heredrimm, tem alguma coisa no meu celeiro! Vou mostrar para vocês!”"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3: O CELEIRO"
      },
      {
        type: "text",
        content: "A fazenda está a uma curta caminhada do centro da comunidade. Os campos ao redor da vila são verdejantes, e poucos momentos passam sem que, ao longe, alguém acene e sorria. Entretanto, Korimm passa o caminho inteiro resmungando."
      },
      {
        type: "text",
        content: "Quando chegam, são recebidos pela esposa do anão, Gertha. Korimm pergunta sobre os animais e ela diz que estão numa parte mais afastada da fazenda. Apesar de não ser ranzinza como seu marido, a anã parece mais preocupada do que o resto do povo na vila. Ela então convida os aventureiros a entrarem para tomar algo enquanto conversam."
      },
      {
        type: "text",
        content: "Os dois contam que ouviram sobre os ataques há cerca de um mês. Preocupados que pudessem ser monstros ou saqueadores das Sanguinárias, o casal contratou mais ajudantes e reforçou as cercas. Quando a primeira vaca deles foi atacada, eles mesmos passaram a patrulhar a fazenda."
      },
      {
        type: "text",
        content: "Exceto por estranhos buracos pela propriedade, não viram nada que fosse fora do ordinário. Mas então os animais começaram a evitar o celeiro. Um dos trabalhadores foi gravemente ferido por algo com garras, e, como havia aventureiros a caminho, resolveram selar o lugar e esperar."
      },
      {
        type: "text",
        content: "Se questionados sobre os buracos, os anões dizem que não parecem formações naturais. De acordo com Gertha, seu marido queria investigá-los, mas ela meteu juízo (e uma panelada) na cabeça dele. Korimm os levará a um dos túneis assim que lidarem com o que quer que esteja no celeiro."
      },
      {
        type: "text",
        content: "Já se pedirem para ver os corpos mutilados dos animais, o casal os leva até um dos cadáveres. É possível encontrar a metade da frente de uma vaca em avançado estado de decomposição. Um teste de necropsia, da perícia Cura, ou então de Investigação ou Sobrevivência (CD 25), revela que o ataque foi preciso, vindo de baixo, estraçalhando o pobre animal em um golpe só."
      },
      {
        type: "text",
        content: "Para entrar no celeiro terão apenas de remover a pesada tábua que trava as portas. O ambiente está em escuridão leve, já que todas as possíveis entradas de luz foram lacradas para evitar que o que estivesse ali dentro conseguisse sair. De repente, os personagens ouvem um chiado vindo de cima. Presas no teto, existem seis criaturas humanoides, com aspecto de lagarto, prontas para atacar."
      },
      {
        type: "text",
        content: "CRIATURAS. Slark x6 (NPCs e Criaturas). Um teste para identificar criatura (CD 16) revela que esses monstros, conhecidos como slarks, vivem no subterrâneo, e costumam fazer emboscadas contra suas presas. Um sucesso também revela que não é comum que venham à superfície, e que isto provavelmente está ligado aos tais buracos misteriosos."
      },
      {
        type: "text",
        content: "Assim que o grupo lidar com os slarks, Korimm e Gertha ficam muito felizes. Se os personagens quiserem recuperar-se, os dois oferecem quartos na fazenda (descanso confortável, diferente do luxuoso oferecido no centro da vila). Porém, se a ideia for não perder tempo, podem levá-los imediatamente aos misteriosos túneis."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 4: EM UM BURACO NO CHÃO"
      },
      {
        type: "text",
        content: "Os tais buracos no chão formam quase uma caverna. Os túneis são largos o suficiente para que duas pessoas andem lado a lado. Não há qualquer forma de iluminação nos corredores, e um cheiro acre muito forte queima suas narinas."
      },
      {
        type: "text",
        content: "Se não trouxerem qualquer forma de iluminação, os túneis estarão em escuridão total. Alguém com um Ofício apropriado, ou um anão treinado em Conhecimento, pode fazer um teste (CD 20) para perceber que, apesar de não serem corredores “naturais”, isso foi obra de alguma criatura movendo o solo em sua passagem."
      },
      {
        type: "text",
        content: "Para conseguirem orientar-se nas cavernas, devem ser bem-sucedidos em um teste estendido de Sobrevivência (CD 25, três sucessos). Em caso de falha total, os personagens se perdem, retornando à entrada do túnel, e deverão recomeçar o teste estendido."
      },
      {
        type: "text",
        content: "Após cada teste, tenham passado ou não, os aventureiros encontram 1d6+2 slarks. As criaturas tentam atacar de surpresa, então os personagens devem superá-las em um teste de Percepção oposto à Furtividade (+8) delas. Aqueles que não superarem o resultado dos monstros ficam surpreendidos na primeira rodada do combate."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 5: NINHO TÓXICO"
      },
      {
        type: "text",
        content: "O cheiro nos túneis beira o insuportável. Então vocês chegam a uma câmara mais ampla escavada na terra. Aqueles que conseguem enxergar veem centenas e mais centenas de ovos de inseto cobrindo as paredes da caverna. Restos de cadáveres também são encontrados aqui, parcialmente desintegrados em poças de ácido."
      },
      {
        type: "text",
        content: "Permita aos personagens um teste de Sobrevivência (CD 19) para identificar os ovos como sendo de uma criatura chamada ankthyr. Nesse estado, são pouco mais que larvas, mas quando crescerem podem se transformar em um monstro perigosíssimo, provavelmente o causador dos desaparecimentos e mutilação de animais."
      },
      {
        type: "text",
        content: "Após o teste, bem-sucedido ou não, uma enorme quantidade das criaturas famintas eclode de seus ovos. CRIATURAS. Enxame Cáustico x2 (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "O chão desta caverna está coberto de ácido, e personagens que caiam sofrem 2d6 pontos de dano de ácido. As criaturas tentam envolver o grupo por inteiro, mas é possível fugir, atraindo-as. Caso fujam, as criaturas vêm à superfície, atacando de modo indiscriminado as pessoas da vila. Se as derrotarem, algo começa a acontecer."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 6: CORRE!"
      },
      {
        type: "text",
        content: "Algo faz as paredes das cavernas tremerem. O som da rocha sendo destruída ao seu redor demonstra que os túneis estão colapsando. E vocês suspeitam, por terem derrotado o enxame, que é hora de lidar com a progenitora daquelas criaturas."
      },
      {
        type: "text",
        content: "Furioso, o ankthyr adulto começa a destruir seus próprios túneis, numa tentativa de soterrar os aventureiros. Cabe aos heróis fugirem usando o perigo complexo a seguir."
      },
      {
        type: "text",
        content: "DESABAMENTO DOS TÚNEIS (ND 8)\nOs personagens precisam escapar antes que sejam soterrados!\nOBJETIVO: Sair das cavernas.\nEFEITO: Os túneis serão completamente destruídos em 7 rodadas. Para escapar, um personagem precisa acumular 5 sucessos nas ações avançar, correr ou carregar outro. No início de cada rodada, role 1d6 e consulte a lista de efeitos abaixo:\n1-2) Destroços. Destroços caem do teto. Cada personagem deve fazer um teste de Reflexos (CD 25). Se falhar, sofre 4d6 pontos de dano de impacto. Se falhar por 10 ou mais, o dano aumenta para 8d6.\n3-4) Fenda no chão. Rachaduras se abrem no chão. Cada personagem deve fazer um teste de Acrobacia ou Atletismo (CD 25). Se falhar, tropeça e sofre –5 em sua próxima ação contra o perigo. Se falhar por 10 ou mais, cai e perde sua ação nesta rodada.\n5) Bloqueio. Um desabamento vai bloquear o caminho! O personagem pode desistir desta rota e procurar outra (perde a ação nesta rodada, mas age normalmente a partir da próxima) ou tentar correr antes que o desabamento termine. Nesse caso, precisa fazer um teste de Atletismo (CD 25). Se passar, pode fazer sua ação nesta rodada. Se falhar, perde a ação e sofre 8d6 pontos de dano de impacto.\n6) Passagem livre. Este túnel é mais resistente, mas as paredes estão perto de ruir. Os personagens não sofrem qualquer efeito neste turno, mas devem continuar correndo ou serão soterrados.\nAo fim da sétima rodada, qualquer personagem que não tenha acumulado 5 sucessos será atingido pelo desabamento, sofrendo 20d6 pontos de dano de impacto (sem teste de resistência)."
      },
      {
        type: "text",
        content: "AVANÇAR (ACROBACIA OU REFLEXOS CD 25): O personagem avança com cuidado em direção à saída. Um sucesso por 10 ou mais (ou um 20 natural no teste) conta como 2 sucessos.\nCORRER (ATLETISMO CD 20): O personagem corre em direção à saída sem se preocupar com os perigos em seu caminho. Ele sofre 4d6 pontos de dano de impacto. Um sucesso por 10 ou mais (ou um 20 natural no teste) conta como 2 sucessos.\nCARREGAR OUTRO (ATLETISMO CD 30): O personagem carrega um aliado próximo (com no máximo 1 sucesso de diferença). Isto funciona como a ação avançar. Se passar, o personagem acumula 1 sucesso para si e para o aliado. Se falhar, ambos sofrem dano.\nPROCURAR CAMINHO (PERCEPÇÃO CD 20): O personagem analisa o terreno em busca de uma rota de fuga. Se passar, recebe +5 em todos os testes para avançar, correr e carregar outro realizados durante o perigo."
      },
      {
        type: "text",
        content: "O túnel que dá acesso à superfície é bem perto do centro da vila. Antes que consigam pensar muito, todos sentem o chão tremer."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 7: A VINGANÇA DO VERME MALDITO"
      },
      {
        type: "text",
        content: "O tremor se intensifica, estruturas entortam e pessoas começam a gritar. Logo um par de presas insetoides se projeta da terra, tentando ferir os aventureiros, e poucos segundos depois um corpanzil emerge. Maior que um cavalo, com três pares de patas finas e alongadas, o monstro é coberto por uma carapaça quitinosa. Das quelíceras poderosas pinga um ácido que chia ao tocar no solo. Tão rápido quanto saltou para fora, o monstro afunda novamente no chão de terra batida."
      },
      {
        type: "text",
        content: "CRIATURA. Ankthyr (NPCs e Criaturas).\nO ataque final do monstro é virulento e descontrolado, e ele luta até sua morte. A estratégia principal da criatura é mergulhar e dar um bote subterrâneo contra um dos personagens. Além disso, pela escavação e os buracos deixados, toda a área conta como terreno difícil para os personagens (o ankthyr pode simplesmente escavar)."
      },
      {
        type: "text",
        content: "A população da vila está assustada, mas alguns pegam em armas para ajudar. A burgomestra serve como uma parceira destruidora veterana, causando dano de fogo com magias. Korimm e Gertha chegam, portando martelos e servindo como parceiros combatente e fortão iniciantes, respectivamente."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "EPÍLOGO: INFESTAÇÃO"
      },
      {
        type: "text",
        content: "Os restos do monstro logo atraem a atenção dos aventureiros. A resistente carapaça da criatura poderia ser usada para algo. Mas, antes que consigam pensar muito, a população, tendo percebido a calmaria, vem celebrar a mais nova vitória dos heróis."
      },
      {
        type: "text",
        content: "Com a derrota do ankthyr, o perigo está resolvido por enquanto. Pensando em tudo o que aconteceu, assim como o ataque no ninho, é possível que haja outro monstro como aquele na região. Talvez sejam necessários mais alguns dias para ter certeza da segurança."
      },
      {
        type: "text",
        content: "O barão Valcanti está bastante grato, mesmo que continue com suas preocupações costumeiras. Se não retornarem ao nobre logo após a derrota do monstro, ele enviará um representante seu, com o pagamento prometido. Ele também enviará uma nova proposta de missão, para quando estiverem descansados e prontos. Todos avançam para o 9º nível!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "NPCS E CRIATURAS"
      },
      {
        type: "text",
        content: "SLARK (ND 1)\nHumanoide (slark) Médio\nINICIATIVA +7, PERCEPÇÃO +4 sensibilidade a luz, visão no escuro\nDEFESA 15, FORT +10, REF +1, VON +5, redução de ácido 5\nPONTOS DE VIDA 9\nDESLOCAMENTO 6m (4q), escalada 6m (4q)\nCORPO A CORPO Garras +11 (2d6+9, 19/x3).\nQUEDA LIVRE (COMPLETA) Se estiver em terreno elevado, o slark cai sobre uma criatura e faz um ataque de garras. Ele recebe o bônus por terreno elevado (+2 no teste de ataque) e, se a criatura estiver surpreendida, causa +2d6 pontos de dano do mesmo tipo.\nSALIVA (PADRÃO) O slark cospe em uma criatura em alcance curto. A criatura fica cega por 1 rodada e qualquer fonte de iluminação mundana que esteja empunhando se apaga (Ref CD 14 evita ambos os efeitos).\nFor –1, Des 3, Con 2, Int –1, Sab 1, Car –2\nPERÍCIAS Furtividade +8.\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "ENXAME CÁUSTICO (ND 4)\nAnimal Grande\nINICIATIVA +3, PERCEPÇÃO +2, visão no escuro\nDEFESA 23, FORT +16, REF +4, VON +10, imunidade a ácido\nPONTOS DE VIDA 140\nDESLOCAMENTO 9m (6q), escavação 6m (4q)\nENXAME O enxame cáustico age em conjunto. Ele pode entrar no espaço ocupado por um personagem e, no fim de seu turno, causa 3d8 pontos de dano de ácido a qualquer personagem em seu espaço automaticamente. O enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas sofre 50% a mais de dano de efeitos de área, como Bola de Fogo. Além disso, sofre apenas metade do dano de ataques com armas. Estar dentro do enxame conta como condição ruim para lançar magias.\nGOSMA CORROSIVA O dano de ácido do enxame persiste por mais 1 rodada após uma criatura deixar a área do enxame cáustico.\nSENTIDO SÍSMICO O enxame cáustico tem percepção às cegas em alcance médio, mas apenas para criaturas e objetos em contato com a mesma superfície que ele.\nFOR 3, DES 1, CON 2, INT –5, SAB –2, CAR –4\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "ANKTHYR (ND 8)\nAnimal Grande\nINICIATIVA +10, PERCEPÇÃO +8, visão no escuro\nDEFESA 33, FORT +21, REF +8, VON +15, redução de ácido 5, redução de dano 5\nPONTOS DE VIDA 308\nDESLOCAMENTO 12m (8q), escavação 6m (4q)\nCORPO A CORPO Mordida +26 (4d12+24 mais 4d8 ácido).\nAGARRAR APRIMORADO Mordida (teste +28).\nCUSPE ÁCIDO (PADRÃO) O ankthyr cospe ácido em uma criatura a até 9m. A vítima sofre 6d8+6 pontos de dano de ácido e fica coberta por um muco corrosivo (Ref CD 26 reduz à metade e evita o muco). Uma criatura coberta pelo muco sofre mais 3d8+3 pontos de dano de ácido no início dos seus dois próximos turnos. Recarga (movimento).\nESPREITADOR SUBTERRÂNEO (PADRÃO) Se estiver completamente soterrado, o ankthyr pode emergir do solo e atacar uma criatura a até 4,5m do seu ponto de saída. Se fizer isso, ele recebe +2 no teste de ataque e causa +1d12 pontos de dano.\nSENTIDO SÍSMICO O ankthyr tem percepção às cegas em alcance médio, mas apenas para criaturas e objetos em contato com a mesma superfície que ele.\nFor 5, Des 2, Con 4, Int –5, Sab 0, Car –3\nTESOURO Metade."
      }
    ]
  },
  { id: "Memórias das Arma",
    name: "Memórias das Armas",
    theme: "Fantasia e Exploração de Masmorra",
    image: "/aventuras/memorias-das-armas.png",
    summary: "Contratados por um nobre, os heróis viajam ao sul de Zakharov para recuperar uma maça ancestral perdida em um castelo sitiado por mortos-vivos puristas, a tempo do Ritual das Armas Renascidas.",
    sections: [
      {
        type: "text",
        content: "O reino das armas, Zakharov, recentemente passou por muitos eventos. Nas estepes ao norte, próximos às Montanhas Uivantes, uma área de Tormenta se manifestou. De lá surgiu Aharadak, que hoje figura como um dos vinte deuses do Panteão. Além disso, a Supremacia Purista marchou sobre o território, deixando para trás também as marcas da guerra. Campos de batalha do conflito ainda existem nos ermos, e diversos catadores buscam o que vender entre os escombros."
      },
      {
        type: "text",
        content: "Não é de se surpreender que um reino devotado às armas seja a morada de uma divindade relacionada a elas. Rhond, o Deus Menor das Armas, vive em uma cidade com seu nome, isolado em sua caverna, forjando os instrumentos de batalha mais incríveis de todo mundo. Seus sacerdotes defendem a tranquilidade do trabalho de seu senhor. Entretanto, de tempos em tempos, surge um motivo para a deidade deixar seus aposentos e presentear os merecedores com suas dádivas."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "RESUMO DA AVENTURA"
      },
      {
        type: "text",
        content: "Memórias das Armas é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 5º nível em Tormenta20."
      },
      {
        type: "text",
        content: "Motivado pelo Ritual das Armas Renascidas, um nobre zakharoviano contrata o grupo para recuperar a arma de seus ancestrais. Ele explica que o artefato se encontra no castelo ancestral de sua família, ao sul. Também conta que houve uma batalha contra puristas lá, sendo possível ainda haver diversas ameaças na região. Após alguns encontros perigosos, o grupo chega ao local."
      },
      {
        type: "text",
        content: "Do lado de fora, hordas de mortos-vivos marcham no campo de batalha abandonado. Derrotá-las não resolve o problema, mas permite que passem para o interior da construção. Lá dentro encontrarão armas que lutam sem que ninguém as empunhe, assim como uma besta capaz de enferrujar e destruir qualquer objeto metálico. Finalmente, ao alcançarem o item que vieram buscar, os heróis devem enfrentar um último soldado reerguido pela força de seu ódio."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 1: ARMAS RENASCIDAS"
      },
      {
        type: "text",
        content: "Arton possui diversas cidades sagradas. A própria existência de deuses menores permite o surgimento de povoados abençoados ou rotas de peregrinação. Mas na Cidade de Rhond, uma deidade brilha nas armas carregadas pela população. Cada uma, de certa forma, um símbolo sagrado do deus que ali habita."
      },
      {
        type: "text",
        content: "E a cidade está em festa! Pessoas vêm de todos os lados, armas em punho, não em busca de combate, mas sim de benção. O Ritual das Armas Renascidas é uma tradição local, na qual itens podem ser recuperados pelos clérigos de Rhond. Mas, neste ano, aparentemente o próprio deus fará a purificação dos artefatos!"
      },
      {
        type: "text",
        content: "Os personagens já atraíram a atenção de autoridades com suas aventuras anteriores, sendo reconhecidos como veteranos. Entre elas o Conde Zweihardt. O nobre enviou um de seus servos para convidar os aventureiros à sua morada, onde oferecerá uma missão."
      },
      {
        type: "text",
        content: "No caminho, os personagens observam diversos tipos de comemoração. Tavernas oferecem bebidas grátis para aqueles com as mais belas obras de ferraria. Forjas diversas abrem para ensinar técnicas para os mais interessados. E, claro, não há uma forma de mostrar ainda mais o amor pelas armas do que o combate! Duelos, liças e outros tipos de competição (normalmente) amistosas ocorrem por todos os lados."
      },
      {
        type: "text",
        content: "A residência de lorde Zweihardt é um misto de fortificação com forja e, chegando ao local, o grupo encontra o nobre vestindo roupas de ferreiro, trabalhando em alguma arma: “Ah! Bem-vindos, aventureiros, ao meu lar! Peço perdão por não estar mais apresentável, mas não havia como perder a inspiração do momento”. Aqueles treinados em Ofício sabem que o nobre realmente estava trabalhando, em outro lugar isso poderia parecer estranho, mas aqui faz todo sentido."
      },
      {
        type: "text",
        content: "Terminando o processo em que se encontrava, ele remove as luvas de proteção para cumprimentar os aventureiros, levando-os ao interior de sua propriedade. No caminho, servos vêm remover os trajes de ferreiro, deixando-o mais parecido com o que se espera de alguém em sua posição. Chegando ao seu escritório, Zweihardt senta-se em sua cadeira por poucos segundos e põe-se de pé novamente."
      },
      {
        type: "text",
        content: "“Bem, como podem ter ouvido, este ano o próprio Rhond será responsável por purificar e restaurar a arma escolhida. E tenho uma em mente que merece isso”. O nobre abre alguns pergaminhos, mostrando uma maça de confecção primorosa."
      },
      {
        type: "text",
        content: "“Ela foi forjada pelos meus ancestrais, e creio que, se há alguma chance de ser recuperada, seria pelas mãos do próprio Deus das Armas”. Aqueles treinados em Investigação ou Nobreza notam que a maça figura como parte do brasão da família Zweihardt."
      },
      {
        type: "text",
        content: "“Infelizmente,” ele abre um mapa de Zakharov, “quando os malditos puristas atacaram, fizeram um cerco ao castelo de meus antepassados”, e aponta para o desenho de uma fortificação. “Seu líder era obcecado em tomar a arma para si. O cerco foi longo, mas minha família conseguiu fugir. A maça ficou para trás”."
      },
      {
        type: "text",
        content: "Ele explica que a fortificação nunca foi tomada pelos puristas, mas que diversos cadáveres ambulantes impediram a recuperação da arma até agora. Conhecendo a reputação dos aventureiros, o conde acredita que serão capazes de lidar com os mortos-vivos e retornar com a relíquia em tempo de que ela seja renascida. Ele também fornece as instruções para abrir um nicho secreto em uma parede onde o artefato está escondido."
      },
      {
        type: "text",
        content: "Como recompensa, o nobre oferece uma arma com uma melhoria (exceto material especial) para cada personagem, ou uma única arma com duas melhorias. Tanto a arma quanto as melhorias podem ser decididas pelo grupo. Além disso, fornecerá seis essências de mana e quatro frascos com óleo de Arma Mágica."
      },
      {
        type: "text",
        content: "Caso perguntem sobre uma recompensa em dinheiro, o nobre explica que as armas são muito mais valiosas que simples tibares, mas pode pagar T$ 1.000 quando retornarem."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 2: JORNADA AO SUL"
      },
      {
        type: "text",
        content: "Apesar do mapa ser bastante detalhado, o caminho não é dos mais fáceis. Existem poucas estradas úteis e as planícies escondem diversos perigos. Apesar de relativamente frio, o clima é bom para a viagem, tornando-se cada vez mais ameno conforme rumam ao sul."
      },
      {
        type: "text",
        content: "O caminho para o sul é um teste estendido de Sobrevivência (CD 20, 3 sucessos). Em caso de falha total, os personagens saíram de rota, tendo que reiniciar o teste estendido. Após cada teste, role 1d6 ou escolha um dos encontros abaixo. Cada encontro conta como uma cena individual."
      },
      {
        type: "text",
        content: "1 e 2) Planícies Calmas: O clima parece ainda mais promissor nestes dias, e a jornada se torna mais fácil. Existem sombras no caminho, mas talvez vocês sejam mais intimidadores do que qualquer coisa espreitando. Não há encontros, e é possível acampar tranquilamente."
      },
      {
        type: "text",
        content: "3) Por que tão sério? Em algum ponto da viagem, vocês começam a ouvir gargalhadas no ar. Logo vocês descobrem que elas vêm de um bando de gnolls salteadores. Seu líder porta uma pistola, ordenando que entreguem tudo o que têm. Os personagens encontram 1d6+1 gnolls saqueadores liderados por um gnoll filibusteiro. Caso o filibusteiro seja derrotado, os outros gnolls se rendem, entregando todo seu tesouro."
      },
      {
        type: "text",
        content: "4) Enclave Purista: Repentinamente, vocês veem ao longe um acampamento de soldados, todos vestindo armaduras similares escuras. Aqueles com memórias da Guerra Artoniana ficam em prontidão, pois sentem que há algo reconhecível nestes guerreiros. Estes puristas estão mais perdidos do que planejando algo. Entretanto, ao perceberem o grupo, pegam em armas e partem para o combate. São 2d6 soldados puristas e um sargento-mor. Eles lutam até a morte caso haja um personagem não-humano entre os aventureiros."
      },
      {
        type: "text",
        content: "5) Centaura e Kobolds: Mais a frente vocês veem um amontoado de kobolds sobre algo. Conforme eles berram e golpeiam, é possível perceber que estão, na verdade, atacando uma centaura, capturada em uma rede. Se nada fizerem, ela terá pouco tempo de vida. Os kobolds não prestam atenção na sua aproximação. Um enxame kobold prendeu uma centaura em uma de suas armadilhas e está atacando-a. Os heróis devem enfrentar as criaturinhas se quiserem salvar a vítima. Caso a libertem lidando com a rede, ela auxilia como um parceiro fortão iniciante. Uma vez salva, a centaura ajudará na jornada, fornecendo +5 no próximo teste de Sobrevivência do teste estendido."
      },
      {
        type: "text",
        content: "6) Pregador da Praga: No meio do nada, há uma figura parada em pé vestindo robes maltrapilhos. Quando vocês se aproximam, ele abre um sorriso anormal, cheio de dentes, e os olhos bastante esbugalhados. “Vocês já ouviram as boas novas de nosso senhor Aharadak?” É um cultista do Deus da Tormenta, falando de profecias profanas e bençãos sinistras que sua divindade espalhará pelo mundo. Nenhuma forma de intimidação o espanta, e ele seguirá o grupo de longe pelo resto da viagem. Caso o ataquem, use a ficha de um maníaco lefou. Se não, ele acompanhará, atrapalhando qualquer descanso que tentem fazer (a condição de descanso será sempre uma abaixo da original). Além disso, ao acordarem todos devem fazer um teste de Vontade (CD 20), ou ficam frustrados até o dia seguinte."
      },
      {
        type: "text",
        content: "Assim que conquistarem os três sucessos necessários, o grupo vê ao longe a fortificação onde o artefato espera."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 3: ARMAS DOS MORTOS"
      },
      {
        type: "text",
        content: "Ao longe, o castelo dos Zweihardt se ergue, pedras escuras no horizonte. Entretanto, rodeando-o, existem diversos soldados andando de forma morosa. Mesmo uma aproximação indiscreta não chama atenção, e logo vocês percebem o porquê. Nas redondezas da fortificação, os aparentes soldados são, na verdade, esqueletos vestindo armaduras velhas e puídas. Um teste de Conhecimento, Guerra ou Nobreza (CD 25) revela se tratar de uniformes puristas, provavelmente da época da Guerra Artoniana. A única forma de entrarem é abrindo uma brecha entre as linhas dos mortos."
      },
      {
        type: "text",
        content: "CRIATURAS. Tropa de Mortos (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Os mortos-vivos não são muito perceptivos, é fácil pegá-los de surpresa. Sem mente, o ódio os mantém combatendo, focando seus ataques principalmente em não-humanos, como se alguma memória raivosa ainda habitasse suas almas. Vencê-los dá algum tempo para fazerem sua próxima ação, mas outra tropa de mortos chegará em 1d6+2 rodadas."
      },
      {
        type: "text",
        content: "O muro pode ser escalado com uma ação completa e um teste de Atletismo (CD 25). Uma vez do outro lado, é necessária mais uma ação completa para abrir o portão e em seguida fechá-lo. Alternativamente, podem tentar um teste em grupo de Força (CD 30) para abrir o portão o suficiente para que todos passem, ou então arrebentá-lo (Def 8, RD 10, 200 PV)."
      },
      {
        type: "text",
        content: "Assim que a tropa dos mortos é derrotada, os personagens podem fazer um teste de Investigação, Guerra ou Percepção (CD 25). Se passarem, percebem uma presença ao longe, observando-os. Caso tentem se aproximar, o inumano que era o líder deste pequeno exército se esconde, preparando para atacar em momento mais propício."
      },
      {
        type: "text",
        content: "Os soldados mortos-vivos não tentam entrar no interior da propriedade."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 4: SALÃO PRINCIPAL"
      },
      {
        type: "text",
        content: "Este amplo aposento de pé direito alto era provavelmente onde os nobres recebiam seus servos. O salão está bagunçado, armas abandonadas para todos os lados e tapeçarias arruinadas estão caídas próximas às paredes onde estavam penduradas."
      },
      {
        type: "text",
        content: "CRIATURAS. Enxame de Armas (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Ao entrar no salão principal, todos os personagens devem fazer um teste de Percepção oposto a Furtividade (+8) do enxame de armas, perfeitamente imóveis no chão. Aqueles que falharem ficam surpreendidos na primeira rodada do combate. Movido por uma força invisível, o enxame metálico ataca os aventureiros."
      },
      {
        type: "text",
        content: "Quando derrotarem o arsenal animado, eles podem explorar outros aposentos do castelo, exceto a sala de armas. Entre as peças do enxame é possível encontrar qualquer arma simples ou marcial. Se decidirem vasculhar os aposentos, podem fazer um teste de Investigação (CD 20), e encontrarão o equivalente ao dobro do tesouro para ND 6."
      },
      {
        type: "text",
        content: "Assim que o grupo quiser investigar a sala de armas, vá para a próxima cena."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 5: ARSENAL ENFERRUJADO"
      },
      {
        type: "text",
        content: "Aqui o cheiro de ferrugem é acachapante. O lugar que guardava as armas e armaduras mais valiosas da família Zweihardt agora está coberto pela poeira avermelhada. Um chiado alto vem de uma das paredes, seguido por outro. Do meio da lataria corroída, duas criaturas que parecem a mistura de um réptil com um gafanhoto, com enormes antenas, se aproximam, os olhos estranhos vidrados no aço que vocês carregam."
      },
      {
        type: "text",
        content: "CRIATURAS. Oxxdon x2 (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Também conhecidos como “monstros da ferrugem”, estas criaturas corroem metal ao seu redor, e fizeram aqui seu ninho. Para zakharovianos, são pesadelos vivos. A única forma de recuperarem seguramente o artefato de lorde Zweihardt é livrando-se destas bestas."
      },
      {
        type: "text",
        content: "Seguindo as instruções do conde, os aventureiros pressionam alguns dos tijolos na parede, liberando o nicho que guarda o artefato. Trata-se de uma maça de adamante formidável, que infelizmente está avariada pela passagem do tempo, causando uma penalidade de –5 em testes de ataque."
      },
      {
        type: "text",
        content: "Logo que a recuperam, ouvem passos pesados vindos do mesmo caminho que traçaram para chegar aqui."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cena 6: GANÂNCIA PÓS-MORTE"
      },
      {
        type: "text",
        content: "A figura que surge é intimidadora, mesmo para heróis veteranos como vocês. Sua armadura está desgastada pela passagem do tempo, a pele está esticada em todos os pontos visíveis, sua boca é um esgar de ódio permanente. A criatura exala um cheiro insuportável de morte. Quando fala, as palavras saem roucas e arranhadas, devido aos anos sem uso:"
      },
      {
        type: "text",
        content: "“Malditos... Me entreguem esta arma! Ela é minha por direito... E vocês não são merecedores de tocá-la!”"
      },
      {
        type: "text",
        content: "CRIATURAS. Inumano (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "O inimigo que enfrentam agora é um morto-vivo movido pelo próprio ódio. Mesmo que entregassem a arma, este comandante maldito os massacraria impiedosamente. Porém, é possível usá-la para distraí-lo. Se a arremessarem em uma determinada direção, o inumano usará todas suas ações para ir até a arma e empunhá-la... o que também pode ser vantajoso para os personagens, uma vez que causará uma penalidade de –5 nos testes de ataque dele."
      },
      {
        type: "text",
        content: "Se tiverem destruído parte do portão, ele estará acompanhado de quatro esqueletos. Caso o inumano seja destruído, os esqueletos automaticamente caem, inertes, assim como todas as tropas dos mortos no exterior da propriedade."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Epílogo: ARMISTÍCIO"
      },
      {
        type: "text",
        content: "Os mortos finalmente caem. Algumas de suas armas cravam-se no solo, tornando-se marcadores sombrios de tudo que houve aqui. É possível continuar vasculhando o castelo, mas agora ele é apenas uma construção vazia e corroída. Para terminarem sua missão, vocês devem fazer o longo caminho de volta à cidade do Deus das Armas."
      },
      {
        type: "text",
        content: "Se quiser tornar o retorno tão movimentado quanto a vinda, é possível usar os encontros da cena 2 novamente. Se preferir manter tudo em apenas uma sessão, diga que, conhecendo o caminho, os personagens evitam os perigos. Caso tenham encontrado o cultista de Aharadak, entretanto, ele continuará os seguindo até perto da Cidade de Rhond."
      },
      {
        type: "text",
        content: "O Conde Zweihardt fica extremamente feliz em ver a relíquia de sua família retornada, e, em gratidão, oferece um banquete aos heróis. Se informado da liberação do castelo de seus ancestrais, ele fica pensativo. Segundo o nobre, seria muito bom retomar a propriedade, e então atrair novos servos. Por outro lado, a possibilidade de restaurar a maça também invocaria o orgulho de seus antepassados."
      },
      {
        type: "text",
        content: "Expandindo seu reconhecimento, os personagens avançam para o 6º nível!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "NPCs e Criaturas"
      },
      {
        type: "text",
        content: "OXXDON (ND 2)\nMonstro Médio\nINICIATIVA +7, PERCEPÇÃO +4, faro, visão no escuro\nDEFESA 20, FORT +7, REF +13, VON +2\nPONTOS DE VIDA 72\nDESLOCAMENTO 12m (8q)\nCORPO A CORPO Antena +12 (ferrugem) e mordida +12 (1d8+10).\nFERRUGEM A antena do oxxdon destrói automaticamente qualquer objeto de metal atingido. Uma arma de metal que cause dano a um oxxdon também é destruída imediatamente (itens mágicos têm direito a um teste de Fortitude contra CD 16 para evitar). Contra criaturas de metal (como golens), a antena deixa o alvo fatigado, então exausto, então paralisado (mesmo que seja imune a estas condições; Fort CD 16 evita). Remover cada uma destas condições da criatura exige uma hora de trabalho, o gasto de T$ 50 em materiais e passar em um teste de Ofício (artesão) contra CD 20.\nFor 0, Des 4, Con 2, Int –4, Sab 1, Car –1\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "ENXAME DE ARMAS (ND 6)\nConstruto Grande\nINICIATIVA +6, PERCEPÇÃO +4, percepção às cegas\nDEFESA 22, FORT +15, REF +10, VON +5, redução de dano 5\nPONTOS DE VIDA 140\nDESLOCAMENTO voo 9m (6q)\nENXAME O enxame de armas é um aglomerado de objetos animados que agem em conjunto. Ele pode entrar no espaço ocupado por um personagem e, no fim de seu turno, causa 1d10 pontos de dano de corte, 1d6 pontos de dano de perfuração e 1d8 pontos de dano de impacto a qualquer personagem em seu espaço, automaticamente. O enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas sofrem 50% a mais de dano de efeitos de área, como Bola de Fogo. Além disso, sofre apenas metade do dano de ataques com armas. Estar dentro do enxame conta como condição ruim para lançar magias.\nAPARAR (REAÇÃO) Uma vez por rodada, quando é alvo de um ataque corpo a corpo, o enxame de arma pode fazer um teste de ataque e subtrair seu resultado do dano causado pelo ataque (teste +16).\nFor 4, Des 2, Con 2, Int ––, Sab 0, Car –5\nTESOURO Dobro (apenas armas)."
      },
      {
        type: "text",
        content: "TROPA DE MORTOS\nMorto-vivo Grande\nINICIATIVA +9, PERCEPÇÃO +5, visão no escuro\nDEFESA 24, FORT +6, REF +11, VON +16, redução de corte, frio e perfuração 5\nPONTOS DE VIDA 40\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Espada longa x2 +20 (4d8+18, 19).\nBANDO A tropa de mortos é formada por um grupo de esqueletos. Se um ataque da tropa exceder a Defesa do Inimigo por 10 ou mais, ele causa o dobro do dano. Se um ataque da tropa errar, ele ainda causa metade do dano. A falange é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas sofre 50% a mais de dano de efeitos de área, como Bola de Fogo. Um personagem com poder Trespassar que acerte a tropa pode usá-lo para fazer um ataque adicional contra ela (mas apenas uma vez por turno).\nFor 5, Des 3, Con 0, Int —, Sab 0, Car –5.\nEQUIPAMENTO Escudo pesado, espada longa.\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "INUMANO (ND 5)\nMorto-vivo Médio\nINICIATIVA +7, PERCEPÇÃO +6, visão no escuro\nDEFESA 26, FORT +17, REF +12, VON +7, imunidade a frio\nPONTOS DE VIDA 48\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Espada longa x2 +24 (2d8+9, 19, mais 2d12 trevas).\nÀ DISTÂNCIA Azagaia +24 (2d6+9, mais 2d12 trevas).\nDRENAR ENERGIA Uma criatura viva que sofra dano de trevas do inumano combatente sofre uma penalidade cumulativa de −1 em testes de perícia (Fort CD 22 evita). Se acumular uma penalidade igual ou maior que seu próprio nível, a criatura morre e se transforma em um inumano sob controle do mestre. Esta penalidade pode ser removida de uma criatura viva com descanso ou com efeitos mágicos capazes de remover qualquer condição de metabolismo (cada dia de descanso ou efeito mágico diminui a penalidade em 1).\nFor 3, Des 2, Con 1, Int 0, Sab 1, Car −1\nPERÍCIAS Atletismo +8, Furtividade +4, Guerra +5, Intimidação +6.\nEQUIPAMENTO Azagaia x3, escudo pesado, espada longa, meia armadura. Tesouro Padrão."
      }
    ]
  },
  { id: "O Olho do Basilisco",
    name: "O Olho do Basilisco",
    theme: "Fantasia e Caçada a Monstros",
    image: "/aventuras/o-olho-do-basilisco.png",
    summary: "Para salvar uma aventureira transformada em estátua viva, os heróis são contratados pela Guilda dos Caça-Monstros para rastrear e derrotar um basilisco ancestral nas temíveis Montanhas Sanguinárias.",
    sections: [
      {
        type: "text",
        content: "Arton é um mundo cheio de perigos e, ainda assim, as Montanhas Sanguinárias revelam-se um dos locais mais desafiadores existentes. Seus picos colossais estendem-se rasgando o céu como garras de monstros imensos. Toda sorte de feras existe aqui e as crias de Megalokk prosperam, atingindo tamanhos nunca vistos."
      },
      {
        type: "text",
        content: "Mais do que monstros, as Sanguinárias são também o lar daqueles que os caçam. Sob as sombras das costelas de alguma besta colossal, a cidade de Trag’Merah é procurada por diversos aventureiros em busca de fama ou de suprimentos. A Guilda Mon’han auxilia fornecendo todo tipo de apoio para os intrépidos que partem para sua próxima expedição."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "RESUMO DA AVENTURA"
      },
      {
        type: "text",
        content: "O Olho do Basilisco é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 8º nível em Tormenta20."
      },
      {
        type: "text",
        content: "Quando uma estranha estátua de pedra causa confusão, os aventureiros percebem não se tratar apenas de um construto perdido. Investigando o “monstro”, percebem que este já foi uma pessoa, mas foi transformado em pedra por uma medusa monstruosa. Agora, precisa da ajuda dos personagens para encontrar algo que reverta seu corpo para o estado original."
      },
      {
        type: "text",
        content: "O líder da Guilda dos Caça-Monstros se interessa pelo caso e diz que o olho de um basilisco ancestral seria capaz de reverter a petrificação. Os aventureiros terão de rastrear o monstro pelas Sanguinárias, evitando perigos, encontrando aliados inusitados e enfrentando outras feras e cultistas. Finalmente, terão de usar estratégia para enfrentar a criatura... antes que se tornem sua próxima refeição!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 1: ALTAS CONFUSÕES EM TRAG’MERAH"
      },
      {
        type: "text",
        content: "A imensa ossada sempre à vista no horizonte em Trag’Merah lembra a todos a escala das ameaças que podem ser encontradas nas Montanhas Sanguinárias. Lojas, barracas e ambulantes de todos os tipos oferecem produtos para aqueles prontos a sair em expedição. Passando pelo meio da rua, um grupo coberto de sangue e vísceras comemora, trazendo em sua carroça a cabeçorra de alguma fera abatida."
      },
      {
        type: "text",
        content: "Tudo em Trag’Merah é relacionado à caça de monstros. Servindo de sede da Guilda Mon’han, a cidade se tornou um dos poucos pontos capazes de permitir descanso e reposição de recursos nas Sanguinárias. Mesmo sendo o lugar de mais fácil acesso à cadeia montanhosa, os personagens estão aqui já como aventureiros experientes."
      },
      {
        type: "text",
        content: "No meio da relativa normalidade, uma confusão começa. Barracas são derrubadas e pessoas são empurradas por uma estranha figura cinzenta. À primeira vista, parece uma estátua de uma mulher carregando um escudo e espada, mas ela está se movendo apesar de suas feições rochosas permanecerem imutáveis."
      },
      {
        type: "text",
        content: "Os personagens são os mais próximos do incidente e, se não agirem logo, mais inocentes estarão em perigo."
      },
      {
        type: "text",
        content: "CRIATURAS. Defensor Rochoso Desperto (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "No início do turno de cada personagem, peça um teste de Intuição (CD 20). Aqueles que passarem notam que o defensor rochoso está atacando por medo e confusão. Acalmá-lo requer vencer em dois testes de Diplomacia opostos à Vontade do construto. A magia Tranquilidade, lançada com o aprimoramento que afeta criaturas, também encerra o combate."
      },
      {
        type: "text",
        content: "Caso não notem as intenções do defensor e tentem resolver através do combate, ele cessa seu ataque quando chega à metade dos PV e foge. Se for acalmado ou encontrado após escapar da luta, fica muito claro que não se trata de um autômato sem mente."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 2: CORAÇÃO EMPEDRADO"
      },
      {
        type: "text",
        content: "Menos confuso, o defensor rochoso não ataca, mostrando-se capaz de pensamentos complexos. Apesar de não conseguir se comunicar verbalmente, ele faz o possível, apontando para coisas e meneando a cabeça. Se questionado, responde assentindo ou negando."
      },
      {
        type: "text",
        content: "Compreendê-lo requer um teste de Intuição (CD 20). De forma rudimentar, ele consegue expressar que algo o transformou em pedra. Um teste de Investigação (CD 20) revela que a pessoa que era o defensor rochoso passou por Trag’Merah com seu grupo há alguns meses. Os aventureiros que estavam com ele nunca retornaram. Nenhum método é capaz de desfazer a petrificação ou metamorfose."
      },
      {
        type: "text",
        content: "Para descobrir mais sobre a expedição, será necessário um teste estendido de Diplomacia, Intuição ou outra perícia apropriada (CD 25, três sucessos). Falha total representa apenas que as informações coletadas não eram relevantes, e é necessário recomeçar o teste estendido. Entretanto, passando nos testes, os aventureiros descobrem que o grupo que o acompanhava estava buscando um monstro misterioso: uma euríade."
      },
      {
        type: "text",
        content: "Informações sobre o que são euríades são raras. Um teste de Conhecimento, Misticismo, Religião ou Sobrevivência (CD 26) revela histórias sobre um grupo de medusas devotadas a Megalokk que se transformaram em versões mais monstruosas e violentas. Um resultado 29 ou maior também revela que as mais antigas entre elas são capazes não apenas de petrificar os inimigos, mas de transformá-los em defensores rochosos sob seu controle."
      },
      {
        type: "text",
        content: "Essa informação pode fazer com que o grupo se pergunte se o defensor à sua frente está agindo por vontade própria. Qualquer teste mostra que o construto está sim livre de qualquer controle."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3: CONTRATO DE CAÇA"
      },
      {
        type: "text",
        content: "Após conseguirem as informações, uma pessoa se aproxima dos personagens. É um kliren de idade avançada e olhar carregado de muita experiência."
      },
      {
        type: "text",
        content: "“Soube que estão procurando informações para ajudar sua amiga de pedra aí. Triste ver uma pessoa em um estado desses, mas é impressionante que uma criatura tenha o poder de não só transformar carne em pedra, mas animá-la.” Ele solta uma risada alta e confiante. “Os monstros nunca deixam de nos surpreender.”"
      },
      {
        type: "text",
        content: "O kliren falando com os personagens é ninguém menos que o fundador da Guilda dos Caça-Monstros, Mon’han Galldo’han. Interessado nos acontecimentos, convida os aventureiros para uma conversa na sede de sua organização."
      },
      {
        type: "text",
        content: "“Vocês precisam de algo potente para desfazer o olhar da euríade matriarca. E eu tenho justamente a presa certa para isso!”"
      },
      {
        type: "text",
        content: "Mon’han mostra o esboço de um lagarto com vários pares de patas. Olhando mais atentamente para a escala das pinturas, percebe-se que é uma criatura enorme. As notas ao redor falam sobre olhar petrificante e veneno."
      },
      {
        type: "text",
        content: "“Um basilisco ancestral, maior e mais violento que os que existem nos ermos de Arton. Se o derrotarem e trouxerem o olho dele, será possível reverter a transformação de sua amiga empedrada.”"
      },
      {
        type: "text",
        content: "Nas anotações há também um mapa, marcando a posição da criatura em um ponto distante da cordilheira."
      },
      {
        type: "text",
        content: "“Esse maldito tem devorado vários outros seres, incluindo membros da Guilda! Se derem um jeito no bicho e trouxerem sua cabeça, ou outra prova de que o derrotaram, terão nossa admiração... e uma bela recompensa, claro.”"
      },
      {
        type: "text",
        content: "Além de salvar o defensor rochoso, a caçada vale o prêmio de T$ 5000, uma verdadeira fortuna. Pelo que Mon’han disse, também há uma oportunidade de juntar-se à Guilda dos Caça-Monstros, ou, para aqueles que já fazem parte da organização, de ter mais reconhecimento entre seus pares."
      },
      {
        type: "text",
        content: "Ao pegarem o contrato de caça deste basilisco ancestral, todos devem preparar-se para uma longa jornada pelas Sanguinárias. E o próprio terreno pode se mostrar a maior ameaça."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 4: RASTROS"
      },
      {
        type: "text",
        content: "Apesar de haver diversas trilhas por entre as montanhas, não há forma de seguir apenas por elas. Ao longe, o horizonte se move, revelando a passagem de uma criatura tão colossal que se confunde com a própria cordilheira. Por sorte, a fera está tão distante que não há chance nem mesmo de ela percebê-los. Após algum tempo, ela some, camuflando-se novamente na paisagem."
      },
      {
        type: "text",
        content: "As Montanhas Sanguinárias são impiedosas e rastrear a localização do basilisco ancestral requer vários dias de investigação cuidadosa. Isso é um teste estendido de Sobrevivência (CD 25, cinco sucessos)."
      },
      {
        type: "text",
        content: "Cada rolagem representa um dia de viagem, e apenas um dos personagens faz o teste, enquanto o resto do grupo só pode ajudá-lo, fazendo-o com perícias adequadas. Uma falha causa perda de 2d6 pontos de vida para todos, devido às agruras do caminho. Em caso de falha total, ficam completamente perdidos, tendo que recomeçar o teste estendido, mas longe da cidade de Trag’Merah."
      },
      {
        type: "text",
        content: "A cada teste, role 1d6 para definir um dos encontros abaixo, ou escolha um que seja apropriado."
      },
      {
        type: "text",
        content: "1) Escalada Perigosa: Não há outra forma de avançar que não seja para cima. O trecho exige que escalem o paredão rochoso ou encontrem formas criativas de ascender pela encosta. Os personagens devem passar em três testes de Atletismo (CD 25). Falhar representa uma queda que causa 3d6 pontos de dano de impacto, +3d6 por sucesso obtido anteriormente. Personagens com deslocamento de voo podem ignorar os testes, mas, se quiserem levar outras pessoas consigo, devem se atentar aos limites de carga (Tormenta20, p. 141). Se for necessário fazer várias viagens, devem gastar os PM apropriados (considere que subir ou descer requer deslocar-se por 10 metros para cima)."
      },
      {
        type: "text",
        content: "2) Ninho Vazio: Mais à frente no caminho, vocês avistam um ninho enorme de algum monstro local. Talvez haja algo de valor em seu interior. Dentro do ninho, vocês encontram 1d4 ovos de grifo. Se cuidados adequadamente, eles eclodem, fornecendo um grifo parceiro montaria iniciante. Caso este encontro seja rolado novamente, o grupo é atacado por dois grifos adultos (Tormenta20, p. 292). Devolver os ovos faz os grifos partirem sem combate."
      },
      {
        type: "text",
        content: "3) Revoada de Serpes: O som de dezenas de asas batendo agressivamente se faz audível mesmo a muitos metros de distância. Uma nuvem de répteis alados se aproxima, cheia de fúria e fome. Uma revoada de serpes (NPCs e Criaturas) chegará na área em que os personagens estão em 1d4 rodadas, havendo tempo para que eles se preparem, seja para lutarem ou se esconderem."
      },
      {
        type: "text",
        content: "4) Peregrinação Druida: Vocês avistam ao longe duas figuras humanoides e um grande felino. Ambas as mulheres, uma elfa e a outra humana, vestem peles e exibem no corpo pintas semelhantes às do jaguar que as acompanha. Uma delas acena para que se aproximem. Estas druidisas servem a Mãe Jaguar (um aspecto de Allihanna) e prestam ajuda a viajantes. Quando o grupo acampar, o descanso contará como uma condição de descanso superior. Se tiverem enfrentado algum monstro antes desse encontro, elas curam 4d8+4 pontos de vida de cada personagem."
      },
      {
        type: "text",
        content: "5) Kemooz Pensativo: Em algum ponto do dia, vocês notam o que parece uma grande estátua sentada com o queixo apoiado sobre um punho. Ao se aproximarem, percebem que parece uma pessoa coberta de tatuagens arcanas. Se qareens fizerem parte do grupo, sentem uma estranha familiaridade com ela. Este kemooz, um gênio da terra, está sentado aqui há séculos admirando a paisagem que ajudou a construir. Entretanto, ele não se move, pois não possui um amo há muito tempo. Passar em três testes de Diplomacia opostos à Vontade dele (+15) convence o gênio a servir a um dos aventureiros. O kemooz é um parceiro iniciante que fornece o seguinte benefício: uma vez por rodada, você pode criar um cubo de terra de 1,5m de lado em um espaço desocupado a até 9m. O cubo tem RD 5 e 30 PV, e dura até o fim da cena ou até você acumular 4 cubos. Para mais informações, veja Deuses de Arton, p. 304."
      },
      {
        type: "text",
        content: "6) Rastejante Voraz: O chão começa a tremer e, por um momento, a preocupação sobre um possível deslizamento ou terremoto surge em suas mentes. Entretanto, o que vem de baixo é ainda pior: uma criatura dotada de uma infinidade de patas emerge, pronta a devorar vocês. Uma centopeia-dragão (Tormenta20, p. 287) escava abaixo dos pés dos personagens, tentando engoli-los."
      },
      {
        type: "text",
        content: "Assim que conseguirem os cinco sucessos, encontram uma trilha deixada pelo monstro. Entretanto, uma outra coisa parece ter se interessado pela jornada dos personagens."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 5: PRESAS PEÇONHENTAS"
      },
      {
        type: "text",
        content: "Na última noite antes de chegarem ao local em que o basilisco ancestral se encontra, sombras sinistras movem-se ao redor do acampamento. Uma emboscada começa!"
      },
      {
        type: "text",
        content: "As figuras ao redor do acampamento são cultistas que sincretizam Megalokk e Sszzaas. Apesar de serem deuses tão distintos – um, selvageria monstruosa; o outro, traição ardilosa –, estes devotos fazem botes com armas envenenadas, inspirados nas presas de bestas peçonhentas."
      },
      {
        type: "text",
        content: "CRIATURAS. Presas do Grande Basilisco x4 (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Os presas do Grande Basilisco aproximam-se discretamente durante à noite, realizando testes de Furtividade opostos a Percepção dos personagens. O ataque é rápido e virulento, tentando envenenar os aventureiros com seus golpes. Eles também se posicionam de forma a flanquear sempre que possível."
      },
      {
        type: "text",
        content: "A qualquer momento, os cultistas podem virar-se uns contra os outros, mas, na verdade, os cortes envenenados de suas lâminas os fazem recuperar vida em vez de perdê-la. Além disso, se três deles forem derrotados, o quarto fugirá, ressurgindo no combate contra o basilisco ancestral."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 6: PREDADOR PREDADO"
      },
      {
        type: "text",
        content: "Um dos rastros mais exóticos deixado pela passagem do basilisco ancestral são os monstros menores transformados em pedra. Serpes, mantícoras e até mesmo gigantes, eternamente petrificados e destruídos. O aumento na ocorrência dessas estátuas indica claramente a proximidade do refúgio da criatura."
      },
      {
        type: "text",
        content: "A região em que chegam mais parece um pântano no interior de uma ravina. Por todos os lados, estátuas se espalham, e claramente não foram criadas por artistas mortais. O defensor rochoso toca uma dessas criaturas com seus membros, talvez ponderando a similaridade entre ele e essas vítimas."
      },
      {
        type: "text",
        content: "É possível simplesmente seguir o rastro do basilisco, pois seu corpanzil não deixa dúvidas de por onde passou. Além disso, um ataque frontal parece a forma mais direta de enfrentá-lo. Caso optem por essa abordagem, devem fazer um teste de Percepção ou Sobrevivência oposto à Furtividade do basilisco ancestral, ou estarão surpreendidos na primeira rodada do combate."
      },
      {
        type: "text",
        content: "Entretanto, é possível também surpreender o monstro. Primeiro, um personagem deve fazer um teste de Sobrevivência (CD 25) para encontrar o ponto ideal para a emboscada. Segundo, é necessário fazer um teste de Furtividade oposto à Percepção do basilisco ancestral, em que um aventureiro faz o teste e o resto do grupo ajuda. Finalmente, se alguém tiver uma habilidade de classe de armadilha, é possível colocá-las em um determinado ponto antes do confronto."
      },
      {
        type: "text",
        content: "CRIATURA. Basilisco Ancestral (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "O monstro deseja sobreviver a qualquer custo, e, se perder metade de seus PV, tentará fugir para se recuperar. Caso ele escape, é possível fazer uma nova emboscada ou rastreá-lo na região com apenas um teste de Sobrevivência (CD 20)."
      },
      {
        type: "text",
        content: "Ao derrotarem o basilisco, deverão fazer um teste de Sobrevivência (CD 24) ou Cura (CD 30) para extrair o olho. Se o dado no teste for um 1 natural, o olho é destruído, e o grupo tem apenas mais uma chance com o segundo. Caso passem no teste, também conseguem cortar a cabeça da criatura, que ocupa 20 espaços de carga."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "EPÍLOGO: PEDRA EM CARNE"
      },
      {
        type: "text",
        content: "O percurso de volta é mais tranquilo, porém vocês têm a incômoda sensação de estarem sendo observados. Voltando a Trag’Merah, as pessoas ficam animadas ao vê-los, especialmente Mon’han. Os aventureiros são recompensados pela caçada e celebrados pelos membros da Guilda dos Caça-Monstros. O olho do basilisco é levado para ser preparado para o ritual que devolverá o defensor rochoso à sua forma original."
      },
      {
        type: "text",
        content: "No caminho para a cidade, uma figura observa, à distância. Assemelha-se a um centauro, mas a porção inferior de seu corpo é similar a um grande lagarto quadrúpede. Sua metade superior, entretanto, é de uma mulher belíssima, porém com mãos que terminam em garras e cabelos de serpentes venenosas. Apesar da vitória dos heróis, ela sorri com uma boca cheia de presas afiadas."
      },
      {
        type: "text",
        content: "Assim que o ritual termina, os personagens e o defensor rochoso são levados para um ambiente público. O olho é esmagado sobre a cabeça da estátua viva, despejando um líquido verde. O que era rocha torna-se pele de novo e a aventureira está feliz de poder novamente sentir a brisa e expressar-se plenamente."
      },
      {
        type: "text",
        content: "Os aventureiros avançam para o 9º nível!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "NPCS E CRIATURAS"
      },
      {
        type: "text",
        content: "DEFENSOR ROCHOSO DESPERTO ND 8\nConstruto Médio\nINICIATIVA +8, PERCEPÇÃO +8, visão no escuro\nDEFESA 33, FORT +20, REF +9, VON +15, imunidade a atordoado e petrificado, redução de dano 10\nPONTOS DE VIDA 320\nDESLOCAMENTO 6m (4q)\nCORPO A CORPO Duas pancadas +26 (4d8+19, x3).\nIMOBILIDADE Um defensor rochoso pode permanecer completamente imóvel. Se ele estiver assim, um personagem deve passar num teste de Percepção (CD 35) para perceber que ele é uma criatura e não uma estátua.\nNATUREZA ABASCANTA O defensor tem 50% de chance de ignorar um efeito mágico (como se fosse imune a ele), com exceção da magia Despedaçar.\nPANCADA ATORDOANTE Uma criatura que sofra dano da pancada do defensor rochoso desperto fica atordoada (Fort CD 26 evita). Uma criatura só pode ser atordoada por esta habilidade uma vez por cena.\nFor 6, Des 0, Con 3, Int —, Sab 0, Car –5\nTESOURO Nenhum.\nPARCEIRO O defensor rochoso desperto é um parceiro guardião veterano."
      },
      {
        type: "text",
        content: "REVOADA DE SERPES ND 8\nMonstro Enorme\nINICIATIVA +9, PERCEPÇÃO +9, faro, visão no escuro\nDEFESA 33, FORT +15, REF +21, VON +8, imunidade a paralisia\nPONTOS DE VIDA 320\nDESLOCAMENTO 9m (6q), voo 18m (12q)\nCORPO A CORPO Mordida +26 (2d6+12) e ferrão +26 (1d8+12 mais veneno).\nAGARRAR APRIMORADO (LIVRE) Mordida +31.\nVENENO Peçonha concentrada (perde 1d12 pontos de vida por rodada durante 3 rodadas, Fortitude CD 26 reduz a duração para uma rodada).\nFor 7, Des 1, Con 6, Int –2, Sab 1, Car –1\nTESOURO 8d4 doses de peçonha concentrada (CD 23 para extrair)."
      },
      {
        type: "text",
        content: "PRESA DO GRANDE BASILISCO ND 3\nHumanoide (humano) Médio\nINICIATIVA +5, PERCEPÇÃO +5\nDEFESA 20, FORT +9, REF +4, VON +14\nPONTOS DE VIDA 21\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Machado de batalha +10 (1d8+5 mais veneno).\nÓDIO SÓRDIDO O presa do Grande Basilisco recebe +2 em testes de ataque e +1d6 em rolagens de dano contra criaturas flanqueadas ou sob efeito de alguma condição.\nVITALIDADE PEÇONHENTA Quando sofre perda de pontos de vida por causa de um efeito de veneno, em vez disso o presa recupera 1d12 PV.\nVENENO Peçonha concentrada (perde 1d12 pontos de vida durante 3 rodadas, Fort CD 19 reduz a duração para 1 rodada).\nFor 3, Des 2, Con 3, Int 1, Sab 2, Car –1\nPERÍCIAS Furtividade +3, Intimidação +2.\nTESOURO Padrão."
      },
      {
        type: "text",
        content: "BASILISCO ANCESTRAL ND 9\nMonstro Enorme\nINICIATIVA +10, PERCEPÇÃO +9, visão no escuro\nDEFESA 33, FORT +21, REF +14, VON +10, imunidade a metamorfose, redução de dano 10, resistência a veneno +10\nPONTOS DE VIDA 370\nDESLOCAMENTO 9m (6q), natação 9m (6q)\nCORPO A CORPO Mordida +27 (4d8+25 mais veneno).\nOLHAR PETRIFICANTE No início de seu turno, cada personagem em alcance curto do basilisco deve fazer um teste de Reflexos (CD 28). Se passar, desvia o olhar. Se falhar, fica lento. Se já estiver lento, fica petrificado permanentemente. Um personagem pode fechar os olhos como uma reação para ficar imune a esta habilidade, mas sofrerá os efeitos de estar cego por uma rodada. Efeitos que removem paralisia revertem a petrificação. Metamorfose.\nSOPRO Todas as criaturas em um cone de 9m perdem 3d12 pontos de vida e ficam envenenadas, perdendo 3d12 PV, por 3 rodadas (Fort CD 28 reduz a perda de vida à metade e evita a condição). Recarga (movimento).\nVENENO Peçonha potente (perde 2d12 pontos de vida por rodada durante 3 rodadas, Fort CD 28 reduz a duração para uma rodada).\nFor 6, Des 2, Con 5, Int –4, Sab 3, Car 0\nPERÍCIAS Furtividade +10.\nTESOURO 2d4 doses de peçonha potente (CD 24 para extrair), couro de basilisco (CD 24 para extrair, conta como T$ 2.000 como matéria-prima para fabricar uma armadura superior)."
      }
    ]
  },
  { id: "Corrida Brutal",
    name: "Corrida Brutal",
    theme: "Ação, Corrida e Combate Veicular",
    image: "/aventuras/corrida-brutal.png",
    summary: "Uma corrida mortal ao redor de uma colossal formação rochosa atrai todo tipo de competidor nas ruínas de Tyrondir. Entre trapaças, veículos bizarros e alta velocidade, os heróis descobrem que um culto macabro pretende transformar a linha de chegada em um banho de sangue.",
    sections: [
      {
        type: "text",
        content: "Preparem suas montarias, máquinas e pernas! Vai começar a corrida mais perigosa das ruínas de Tyrondir! Vale tudo para conquistar a glória no Círculo do Eclipse, inclusive atacar ou matar seus adversários!"
      },
      {
        type: "text",
        content: "Thwor, o Deus dos Duyshidakk, venceu Ragnar, antiga deidade da morte, como parte de seu objetivo de alcançar o almejado “Mundo Como Deve Ser”. Entretanto, os servos do derrotado ainda desejam vingança. Realizando sacrifícios macabros, esses devotos tentam ressuscitar seu deus mesmo que tenham que realizar atos abjetos para isso."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "RESUMO DA AVENTURA"
      },
      {
        type: "text",
        content: "Corrida Brutal é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 9º nível, em Tormenta20."
      },
      {
        type: "text",
        content: "Os aventureiros chegam a um grande acampamento, onde terá início o Círculo do Eclipse, uma corrida violenta pelo terreno das Ruínas de Tyrondir. Seja pelo prêmio revelado, ou motivações pessoais, os personagens devem encontrar uma maneira de participar."
      },
      {
        type: "text",
        content: "Se eles próprios não tiverem como, apoiar uma das concorrentes pode ser a grande oportunidade."
      },
      {
        type: "text",
        content: "Dentre os competidores, alguns estão muito dispostos a usar trapaça e violência para eliminar a concorrência. Porém, assim que estiverem de volta ao acampamento, perceberão que algo terrível aconteceu: devotos do deus morto, Ragnar, atacaram espalhando seu lodo negro."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 1: AQUECENDO OS MOTORES"
      },
      {
        type: "text",
        content: "Antes da Flecha de Fogo havia um reino chamado Tyrondir. Este lugar seria lentamente conquistado por Thwor enquanto ainda era mortal. Após a queda do cometa, a organização social ruiu. Hoje, comunidades tentam manter-se apesar dos ataques constantes de saqueadores."
      },
      {
        type: "text",
        content: "Mas não aqui. Ao lado de uma enorme colina de topo achatado, diversas barracas se erguem. Hobgoblins, humanos e bugbears convivem de forma tão pacífica quanto possível. Tudo isso com o objetivo de competir no Círculo do Eclipse, uma corrida mortal."
      },
      {
        type: "text",
        content: "Ainda que a maior parte do ajuntamento surja apenas quando os corredores se encontram para competir, muitas pessoas estão ali há anos, melhorando suas engenhocas, treinando suas montarias, e se preparando para a próxima corrida."
      },
      {
        type: "text",
        content: "Ainda que sejam majoritariamente recebidos por goblinoides, a aproximação dos personagens não causa estranhamento ou conflito. Caretas surgem caso elfos façam parte do grupo, mas qualquer corredor que se garanta é aceito. A falta de hostilidade não significa hospitalidade. Chegar perto de algum dos núcleos é motivo para grosserias, grunhidos e empurrões em resposta. Ninguém deseja que os seus segredos sejam roubados por outros competidores."
      },
      {
        type: "text",
        content: "Um teste de DIPLOMACIA ou INVESTIGAÇÃO (CD 20) revela o básico sobre o evento: o Círculo do Eclipse é uma corrida ao redor da enorme formação rochosa. Qualquer um pode participar, seja a pé, montado ou conduzindo algum tipo de engenhoca. Voar é permitido, mas apenas a uma altura menor que a do morro, e muitas vezes aliados de competidores usam armas a distância para abater este tipo de participante. Fora isso, não existem muitas regras. É permitido atacar oponentes, e mortes durante a corrida são consideradas oferendas a Thwor e não têm maiores consequências para os responsáveis."
      },
      {
        type: "text",
        content: "Se o resultado do teste for 25 ou mais, os aventureiros também descobrem informações sobre os principais competidores: Gaardak, um bugbear gladiador que participa correndo a pé; Krigg, Progg e Nregg, três goblins montandos em um gorlogg especialmente grande; Arzak, caçador hobgoblin montado em um warg, chamado Sangrento; Foley, um kliren inventor, que usa sua aranha-golem como veículo; Pottak, goblin aeronauta, voando em um ornitóptero. Além destes cinco, há também uma hobgoblin chamada Rotsheel. Sua equipe foi morta na última corrida."
      },
      {
        type: "text",
        content: "Em algum momento do dia, goblins montam um pequeno palanque no meio da confusão, e um deles berra em um cone feito de osso:"
      },
      {
        type: "text",
        content: "“Malucos por velocidade, estamos aqui de novo para mais um Círculo do Eclipse! Quem não estiver na linha de partida na hora vai se lamentar para o resto da vida! O ganhador irá levar um item, que dizem, ter sido tirado da própria Cratera de Thwor!”"
      },
      {
        type: "text",
        content: "Se alguém pedir para ver o item, é vaiado na hora. Todos aqui se importam apenas com a corrida, não com o prêmio."
      },
      {
        type: "text",
        content: "Caso um dos aventureiros possua uma montaria, ou outra forma de transporte, pode mover-se para o ponto de partida. Entretanto, peça aos personagens um teste de SABEDORIA (CD 10), e revele que, se for correr sozinho, não terá ajuda para enfrentar os outros participantes."
      },
      {
        type: "text",
        content: "Se possuir uma carroça ou outro veículo capaz de carregar o resto do grupo, pode apelar para isto. Também é aceitável que cada um tenha sua montaria, mas manterem-se perto uns dos outros terá consequências na corrida (veja na Cena 3). Se tiverem passado no teste de DIPLOMACIA ou INVESTIGAÇÃO com um resultado 25 ou mais, também descobrem que há uma participante sem time."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 2: CORREDORA MISTERIOSA"
      },
      {
        type: "text",
        content: "Em uma tenda afastada, deitada sobre seu veículo coberto com uma lona está a hobgoblin. Caso se aproximem, Rotsheel grita:"
      },
      {
        type: "text",
        content: "“Ei, vocês! Saiam daqui! Se chegarem mais perto vou arrancar suas cabeças e colocar na minha carroça!”. Ela está cambaleando, e tem na mão uma garrafa de aguardente."
      },
      {
        type: "text",
        content: "Acalmá-la requer um teste de DIPLOMACIA ou INTIMIDAÇÃO oposto à VONTADE dela (+10). Ao ser questionada sobre seu veículo, a hobgoblin explica que foi criação de um de seus companheiros, um goblin chamado Goppo. O transporte é um tipo de carroça metálica, mas sem cavalos. Com um gesto amplo, ela remove o pano, revelando a Carruagem Duyshidakk."
      },
      {
        type: "text",
        content: "A carruagem é um veículo de tamanho Enorme, deslocamento 15m, Defesa 25 (ou 20 + Des do piloto), 200 PV, RD 10, e pode carregar até 6 criaturas Médias ou 100 espaços. Para mais informações sobre veículos, veja Heróis de Arton, p. 241."
      },
      {
        type: "text",
        content: "Uma vez calma, é possível convencê-la a formar uma única equipe para concorrer usando a Carruagem. Ela explica que até pode pilotar sozinha, mas a ajuda dos aventureiros pode vir bem a calhar para enfrentar os outros competidores, em especial Gardakk, o responsável pela morte de seus antigos colegas."
      },
      {
        type: "text",
        content: "Entretanto, Rotsheel deixa bem claro: se encontrarem o bugbear no percurso, o foco dela será acabar com ele."
      },
      {
        type: "text",
        content: "Assim que concordarem em ajudá-la, a hobgoblin coloca ganchos e correntes na roupa dos personagens, para evitar que caiam (veja a cena a seguir)."
      },
      {
        type: "text",
        content: "Com tudo pronto, os aventureiros se dirigem ao ponto de partida."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3: BANDEIRADA INICIAL"
      },
      {
        type: "text",
        content: "Todos os competidores e suas equipes se posicionam no ponto de partida. Vivas e xingamentos são gritados com a mesma intensidade enquanto os corredores formam uma linha. O mesmo grupo de goblins responsável por fazer os anúncios monta um novo palanque precário. Eles se equilibram uns sobre os outros, berrando no cone de osso."
      },
      {
        type: "text",
        content: "“Chegou a hora, seus animais ignorantes, filhos de uma kobold sem pai! A gente sabe que tudo isso é só uma desculpa para vocês arrancarem os membros uns dos outros no meio do percurso! Bem, não deixem os urubus esperando! Vai, vai, vai!”"
      },
      {
        type: "text",
        content: "A corrida funciona da seguinte forma: são cinco rodadas de teste de ATLETISMO, CAVALGAR ou PILOTAGEM. Cada competidor faz um teste e soma seu valor ao teste anterior. Por exemplo: se ele rolar 25 na primeira rodada e 10 na segunda, acumulou 35. Aquele que ainda estiver na corrida e tiver acumulado o maior valor na quinta rodada chega primeiro ao acampamento e é considerado o vencedor."
      },
      {
        type: "text",
        content: "Poções e magias lançadas sobre o piloto principal, montaria ou veículo oferecem um bônus de +1 por círculo da magia. Os corredores (e seus valores para o teste) são: Gaardak (+18); Krigg, Progg e Nregg (+13); Arzak (+16); Foley (+15); Pottak (+20). Se deixarem a corrida nas mãos de Rotsheel, o bônus dela é +18."
      },
      {
        type: "text",
        content: "Os personagens podem ajudá-la com testes de PILOTAGEM ou SOBREVIVÊNCIA. Um personagem que se garanta muito nos testes pode tentar convencê-la a deixar que ele pilote, mas será necessário um teste de DIPLOMACIA oposto à VONTADE dela (+10) para isso. Se passar no teste, a carruagem duyshidakk oferece um bônus de +5 nos testes de PILOTAGEM para a corrida e Rotsheel é uma parceira combatente veterana."
      },
      {
        type: "text",
        content: "Se entrarem em combate com outro corredor, uma criatura pode ser derrubada com uma manobra de combate. As correntes e ganchos colocados por Rotsheel fornecem um bônus de +10 contra qualquer tentativa de ser derrubado."
      },
      {
        type: "text",
        content: "A cada teste da corrida, pode haver um encontro com um dos competidores. Se a soma dos testes for igual à soma de outro corredor, uma das cenas a seguir ocorre. Certos competidores estão dispostos a reduzir o valor de seu teste para atrapalhar os personagens (Gaardak, o trio Krigg, Progg e Nregg, e Arzak)."
      },
      {
        type: "text",
        content: "Os personagens podem evitar um encontro acumulando apenas metade do resultado do teste de PILOTAGEM (exemplo: se tiver rolado 25, acumula apenas 12)."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3A: GAARDAK"
      },
      {
        type: "text",
        content: "Vocês veem o bugbear conhecido como Gaardak se aproximando. Os músculos dele brilham sob o sol e suas presas estão à mostra em um sorriso cruel. Ele saca uma azagaia e arremessa em vocês!"
      },
      {
        type: "text",
        content: "CRIATURAS. Gaardak (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Gaardak deseja mostrar sua capacidade física, vencendo a prova com as próprias pernas, mas não resiste a uma briga. Além disso, por ter sido responsável pela morte da equipe de Rotsheel, ela não aceitará fugir. Se a hobgoblin estiver pilotando, fará duas ações de movimento para se deslocar toda rodada."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3B: KRIGG, PROGG E NREGG"
      },
      {
        type: "text",
        content: "Um amontoado de caos em cima de um gorlogg está chegando perto. As patas da fera pré-histórica batem violentamente contra o chão, enquanto ela estica a bocarra mordendo o ar à frente de si. Três goblins parecem “cavalgar” o monstro, mas sem muito controle para onde ele vai. Pior ainda: um deles saca o que parece uma bomba e joga em vocês!"
      },
      {
        type: "text",
        content: "CRIATURAS. Três goblins em um gorlogg (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Krigg, Progg e Nregg acreditam em um velho ditado goblin: se não for para ajudar, pelo menos se deve atrapalhar. Se forem reduzidos à metade de seus PV, eles fogem, saindo da corrida."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3C: ARZAK"
      },
      {
        type: "text",
        content: "A aproximação deste hobgoblin e seu warg é quase imperceptível. Os dois cavalgam como uma sombra em movimento. Sem que haja tempo para reagir, avançam contra o flanco da Carruagem Duyshidakk."
      },
      {
        type: "text",
        content: "CRIATURAS. Arzak (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Antes de ler a descrição acima, peça aos personagens um teste de PERCEPÇÃO oposta à FURTIVIDADE do hobgoblin (+15). Aqueles que falharem estarão surpreendidos na primeira rodada do combate."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3D: FOLEY"
      },
      {
        type: "text",
        content: "O som de vapor em alta pressão e pistões torna impossível que esta engenhoca de oito patas passe despercebida. Em seu interior, o kliren Foley, saca o que parece um pequeno canhão, faz mira e dispara um composto branco pegajoso!"
      },
      {
        type: "text",
        content: "O kliren não combate. Sua aranha-golem se move 24m por rodada, e ele pode criar teia em um quadrado de 3m de lado em alcance curto. Criaturas na área ficam enredadas. Para evitar é necessário um teste de PILOTAGEM (CD 28), onde todos os personagens podem ajudar. Uma vez enredado, o time não soma qualquer valor no próximo teste da corrida."
      },
      {
        type: "text",
        content: "Se a primeira teia for evitada, Foley continuará tentando enredar o grupo por cinco rodadas. A única maneira de pará-lo é destruir o veículo (Defesa 25, 200 PV) ou derrubar o kliren (teste +25)."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3E: POTTAK"
      },
      {
        type: "text",
        content: "Pottak possui um olhar obstinado, de quem tem muito a provar. Seu ornitóptero não voa muito alto, e, de repente, despenca em direção ao solo, como se fosse chocar-se, apenas para subir mais uma vez. É algo incrível de se ver, mas que pode custar a vitória."
      },
      {
        type: "text",
        content: "Pottak não apela para artimanhas ou violência, seu único desejo é a vitória. Por isso, se os personagens nada fizerem, a competição continua sem alterações. Entretanto, se quiserem ganhar dele, será necessário derrubá-lo. O deslocamento de voo do ornitóptero é 15m, possui 252 PV, Defesa 32, RD 10, qualquer teste usa a PILOTAGEM do goblin (+20), e ele voa a 7,5m de distância do chão. Em seu turno, o goblin vai usar suas duas ações apenas para se deslocar."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 4: VITÓRIA INGLÓRIA"
      },
      {
        type: "text",
        content: "Vocês continuam ladeando a enorme mesa rochosa, e começam a reconhecer a proximidade da linha de chegada! Em poucos momentos deveriam ver as tendas das equipes, comemorando e brigando alegremente. Mas logo notam algo de errado."
      },
      {
        type: "text",
        content: "Primeiro a fumaça negra subindo no horizonte, então fogo nas tendas e pessoas correndo para todos os lados!"
      },
      {
        type: "text",
        content: "Peça a todos um teste de PERCEPÇÃO (CD 20). Aqueles que passarem notam bugbears trajando mantos sombrios atacando as pessoas no acampamento."
      },
      {
        type: "text",
        content: "Além disso, aqueles que rolarem 25 ou mais também percebem algo extremamente preocupante: diversas poças de lodo negro, líquido viscoso amaldiçoado ligado ao derrotado Deus da Morte, Ragnar."
      },
      {
        type: "text",
        content: "Mesmo assim, a hobgoblin precisa fazer uma manobra de emergência com o veículo, chocando-se contra uma rocha. Ela fica inconsciente, mas os personagens estão em uma área relativamente livre do líquido maldito."
      },
      {
        type: "text",
        content: "CRIATURAS. Sacerdote Caído x4 (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Apesar de terem perdido seus poderes, os servos sombrios de Ragnar tentam restaurar seu deus através de cerimônias profanas e sacrifícios sanguinários. Os sacerdotes caídos lutam até a morte, refestelando-se no prazer da carnificina."
      },
      {
        type: "text",
        content: "Ao redor da área em que os aventureiros estão existem quatro enormes poças de lodo negro, cada uma ocupando um quadrado de 3m de lado. Uma criatura viva que entre em contato com o líquido deve fazer um teste de FORTITUDE (CD 35) a cada rodada. Se passar, perde 10d12 PV. Se falhar, sofre a perda de PV ou seus PV são reduzidos a –10 (o que for pior)."
      },
      {
        type: "text",
        content: "Se Rotsheed estiver no combate, pode usar uma rodada inteira para pegar impulso e causar 10d6 pontos de dano de impacto em um dos sacerdotes caídos, atropelando-o."
      },
      {
        type: "text",
        content: "Não há nem sinal dos outros competidores, mais preocupados em salvar suas próprias vidas."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "EPÍLOGO: APÓS A MORTE"
      },
      {
        type: "text",
        content: "A fumaça finalmente cessa. As poças do lodo negro continuam existindo, e os sobreviventes fazem de tudo para evitá-las. Todos lamentam seus mortos. Logo um novo acampamento improvisado é criado."
      },
      {
        type: "text",
        content: "O ataque foi repentino. Todos os sobreviventes perderam amigos e familiares. Tudo que possuem é dividido e ódios antigos são ignorados em face da tragédia no percurso. Ao menos por enquanto."
      },
      {
        type: "text",
        content: "Independentemente do resultado da corrida, os personagens, por terem agido contra os sacerdotes caídos, são considerados os campeões. Eles recebem um machado de guerra aumentado atroz formidável (caso possua o livro Ameaças de Arton, você pode usar o uyzrrak da’ukthra, p. 403)."
      },
      {
        type: "text",
        content: "Com um novo nascer do sol, os personagens avançam para o 10º nível."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "NPCS E CRIATURAS"
      },
      {
        type: "text",
        content: "SACERDOTE CAÍDO (ND 5)\nHumanoide (bugbear) Médio\nINICIATIVA +6, PERCEPÇÃO +6, faro, visão no escuro\nDEFESA 23, FORT + 11, REF +6, VON +16, resistência a medo +2\nPONTOS DE VIDA 45\nDESLOCAMENTO 6m (4q)\nPONTOS DE MANA 22\nCORPO A CORPO Foice negra x2 +20 (2d8+13, x3, mais 1d12 trevas).\nÊXTASE NO MEDO O sacerdote caído sofre metade do dano de criaturas sob algum efeito de medo.\nREFESTELAR-SE EM SANGUE (REAÇÃO) Quando faz um acerto crítico ou reduz uma criatura a 0 PV ou menos, o sacerdote recupera 5 PM.\nFOICE NEGRA Enquanto estiver empunhando esta arma, o sacerdote caído pode lançar as magias abaixo como um clérigo de 6º nível (CD 20). Nas mãos de qualquer outra criatura, ela é uma foice comum.\n• Toque Vampírico (Padrão, 5 PM) O sacerdote caído faz um ataque corpo a corpo. Se acertar, além do seu dano normal, causa 6d6 pontos de dano de trevas (Fort reduz à metade) e recupera pontos de vida iguais a metade do dano de trevas causado.\n• Vitalidade Fantasma (Padrão, 6 PM) Criaturas vivas em uma esfera com 6m de raio centrada no sacerdote sofrem 1d10 pontos de dano de trevas (Fort reduz à metade). O sacerdote recebe PV temporários iguais ao dano total causado.\nFor 3, Des 2, Con 2, Int –1, Sab 2, Car –2\nPERÍCIAS Furtividade +6, Intimidação +7, Religião +4.\nEQUIPAMENTO Brunea, foice.\nTESOURO Padrão."
      },
      {
        type: "text",
        content: "TRÊS GOBLINS EM UM GORLOGG (ND 7)\nAnimal Grande\nINICIATIVA +4, PERCEPÇÃO +4, visão no escuro\nDEFESA 30, FORT +20, REF +14, VON +7\nPONTOS DE VIDA 300\nDESLOCAMENTO 12m (8q)\nCORPO A CORPO Mordida x2 +24 (3d8+16, x4).\nA DISTÂNCIA Funda x3 +20 (2d4+10).\nAGARRAR APRIMORADO (LIVRE) Mordida (Teste +26).\nLANÇAMENTO DE BOMBAS (COMPLETA) Os goblins lançam bombas em um ponto em alcance curto. Criaturas a até 3m desse ponto sofrem 12d6 pontos de dano de impacto (Ref CD 22 reduz à metade). Recarga (padrão).\nVAI, VAI, VAI! Os três goblins em um gorlogg podem fazer uma ação de movimento adicional por turno, apenas para se deslocar, se não tiverem usado o ataque de mordida.\nOS TRÊS GOBLINS Os goblins sabem evitar serem acertados na garupa do gorlogg, sendo imunes a dano até que o gorlogg seja derrotado, mas ainda podem ser afetados por efeitos mentais. Eles possuem Vontade +5 e, se forem afetados por qualquer condição mental, a criatura inteira (gorlogg mais goblins) fica confusa e imóvel por 1d4 rodadas.\nFor 6, Des 5, Con 6, Int –4, Sab 2, Car –2\nPERÍCIAS Atletismo +13, Cavalgar +13.\nTESOURO Metade."
      },
      {
        type: "text",
        content: "ARZAK (ND 8)\nHumanoide (hobgoblin) Médio\nINICIATIVA +13, PERCEPÇÃO +10, visão no escuro\nDEFESA 31, FORT +15, REF +21, VON +8, evasão aprimorada\nPONTOS DE VIDA 250\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Kum’shrak* x3 +24 (1d8+10 corte, x3, mais sangrando).\nÀ DISTÂNCIA Adaga x2 +22 (1d4+8).\nASSASSINAR (MOVIMENTO) Arzak analisa uma criatura em alcance curto. Em seu primeiro Ataque Furtivo que causar dano a ela até o fim do seu próximo turno, ele dobra os dados de dano do Ataque Furtivo.\nATAQUE FURTIVO +6d6.\nMANOBRAS EVASIVAS (REAÇÃO) Uma vez por rodada, quando faz um teste de resistência, Arzak substitui este teste por um teste de Cavalgar.\nSANGRENTO Enquanto estiver montado, o deslocamento de Arzak se torna 12m, ele recebe uma ação de movimento extra por turno (apenas para se deslocar) e +2d6 em seu ataque furtivo (já contabilizado).\nUM COM AS SOMBRAS Arzak nunca fica surpreendido ou flanqueado e não sofre penalidades por se mover com seu deslocamento normal enquanto usa Furtividade.\nFor 5, Des 5, Con 5, Int 2, Sab 2, Car 0\nPERÍCIAS Acrobacia +13, Atletismo +13, Cavalgar +13, Furtividade +15, Intimidação +10, Ladinagem +13.\nEQUIPAMENTO Adaga x6, couro batido ajustado, kum’shrak* eviscerador.\nTESOURO Padrão."
      },
      {
        type: "text",
        content: "GAARDAK (ND 8)\nHumanoide (bugbear) Médio\nINICIATIVA +12, PERCEPÇÃO +9, faro, visão no escuro\nDEFESA 33, FORT +15, REF +20, VON +10, resistência a medo +2\nPONTOS DE VIDA 320\nDESLOCAMENTO 12m (8q), escavação 6m (4q), natação 6m (4q)\nCORPO A CORPO Ataque desarmado x3 +24 (2d8+8).\nA DISTÂNCIA Duas azagaias +26 (3d6+10).\nARREMESSO DEVASTADOR (LIVRE) Se acertar uma criatura com o ataque de azagaia, Gaardak pode fazer uma manobra derrubar ou empurrar (teste +28) contra a criatura atingida.\nÊXTASE NO MEDO Gaardak sofre metade do dano de criaturas sob algum efeito de medo.\nFLUXO DE MOVIMENTO Gaardak pode intercalar sua ação de movimento com uma ação padrão, podendo mover-se parte de seu deslocamento antes da ação, e o restante após.\nLENTO DEMAIS! (REAÇÃO) Uma vez por rodada, quando é alvo de um ataque corpo a corpo, Gaardak pode fazer um teste de ataque oposto ao resultado deste ataque. Se vencer, ele evita o dano e pode fazer um ataque corpo a corpo contra o atacante.\nPODERIO MUSCULAR (PADRÃO) Gaardak pode modificar seus limites físicos, recebendo deslocamento +9m e +10 em testes de Atletismo. Após o fim da cena, o bugbear fica fraco até o dia seguinte.\nFor 5, Des 4, Con 3, Int –1, Sab 1, Car 1\nPERÍCIAS Acrobacia +12, Atletismo +13, Intimidação +13.\nEQUIPAMENTO Azagaia x10, gibão de peles.\nTESOURO Padrão."
      }
    ]
  },
  { id: "circo-sombrio",
  name: "Circo Sombrio",
  theme: "Fantasia, Mistério e Mortos-Vivos",
  image: "/aventuras/circo-sombrio.png",
  summary: "Aventureiros investigam misteriosos desaparecimentos em uma vila rural e descobrem um macabro circo itinerante dedicado a Tenebra, onde as atrações escondem cultistas e mortos-vivos disfarçados.",
  sections: [
    {
      type: "text",
      content: "Para a grande maioria dos artonianos, a vida é de trabalho constante. Levantando-se antes do sol nascer para capinar, manufaturando produtos ou patrulhando para manter sua comunidade segura. Todos fazendo sua parte para uma vida melhor. Entretanto, diversão e descanso também são importantes e circos itinerantes fazem a sua parte para que isso aconteça, quebrando a monotonia com espetáculos que fascinam e assombram."
    },
    {
      type: "text",
      content: "Apesar da associação com as trevas e mortos-vivos, muitos devotos de Tenebra bondosos dirão que sua padroeira não é maligna. Entretanto, nada impede que seus servos o sejam. A Deusa da Noite abençoa igualmente o justo e o ímpio, e aceita igualmente oferendas... e sacrifícios. A benção da Mãe-Noite não julga intenção, apenas recompensa a adoração."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Circo Sombrio é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 4º nível, em Tormenta20."
    },
    {
      type: "text",
      content: "Os aventureiros são contratados para investigar estranhos desaparecimentos em uma vila próxima. Interrogando os moradores, ouvem falar que o último lugar onde aquelas pessoas foram vistas foi um circo itinerante. Porém, a noite é cheia de perigos e zumbis rondam a região."
    },
    {
      type: "text",
      content: "Ao encontrar o circo, o grupo pode participar do entretenimento externo, como barracas de jogos, profecia e comida. Infelizmente, todas essas distrações existem como forma de enfraquecer os visitantes. Se investigarem demais, serão atacados por dois palhaços mortos-vivos. Quando o espetáculo se inicia, os camponeses ficam fascinados, e são sacrificados pelo líder cultista."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CENA 1: SEM DEIXAR VESTÍGIO"
    },
    {
      type: "text",
      content: "Seja através de uma missão escrita em um quadro de avisos ou boatos de taverna, vocês ficam sabendo de uma mercadora local em busca de ajuda. Ela se chama Matilda e possui uma pequena mercearia onde vende diversos tipos de produtos, majoritariamente alimentos e especiarias. Sua fama os precede e, assim que a comerciante os vê, abre um enorme sorriso."
    },
    {
      type: "text",
      content: "Matilda é uma humana muito alta e forte, acostumada a viajar para conhecer seus fornecedores. Segundo ela, numa vila bem próxima havia um fazendeiro que fazia remessas de legumes excelentes. Entretanto, há três semanas os envios cessaram repentinamente. A mercadora já mandou correspondências e mensageiros, sem obter qualquer resposta. Agora é a hora de aventureiros investigarem o que está acontecendo."
    },
    {
      type: "text",
      content: "A mercadora oferece ao grupo uma recompensa de T$ 300 e a promessa de desconto permanente de 25% em sua loja (equipamentos de aventura, itens de alimentação e bebidas). Se tentarem barganhar o valor pago, ela tem +10 de VONTADE. Caso sejam bem-sucedidos no teste, Matilda ficará impressionada."
    },
    {
      type: "text",
      content: "“Não é todo dia que alguém consegue arrancar tibares assim de mim. Se forem tão bons investigando quanto são negociando, esta missão é sucesso garantido!”"
    },
    {
      type: "text",
      content: "Se partir logo após a conversa, o grupo terá que viajar à noite ou acampar no caminho. Neste caso, em algum momento os personagens serão atacados por duas multidões de zumbis."
    },
    {
      type: "text",
      content: "CRIATURAS. Turba de zumbis x2 (Tormenta20, p. 297)."
    },
    {
      type: "text",
      content: "Usando INVESTIGAÇÃO (CD 20) é possível descobrir que os zumbis da turba eram camponeses em vida, mas estavam vestindo suas melhores roupas. Esta descoberta fornece um bônus de +2 em todos os testes de perícia na Cena 2. Já se o grupo partir ao amanhecer, chega à vila pouco antes de escurecer, evitando assim o encontro com as turbas de mortos-vivos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CENA 2: MEDO DAS TREVAS"
    },
    {
      type: "text",
      content: "Há uma tensão no ar ao chegar à vila. Os moradores não cumprimentam ninguém quando o grupo passa. As janelas estão trancadas ou barradas com tábuas. As lojas estão vazias ou fechadas. Até mesmo a estalagem local não parece nada convidativa."
    },
    {
      type: "text",
      content: "O lugarejo é uma diminuta comunidade rural. Há uma praça, um templo devotado ao Panteão, algumas lojas, casas e uma estalagem. Entretanto, mesmo que vocês cheguem durante o dia, notam pouca movimentação nas ruas de terra batida. A população não parece assustada, mas sim triste. Só perguntar o que está acontecendo não rende resultados."
    },
    {
      type: "text",
      content: "Para que os personagens obtenham informações sobre os desaparecimentos devem acumular 5 sucessos em um teste estendido. A perícia e dificuldade dependem do método usado. Se quiserem conversar com as pessoas da vila, ou mentir para elas, é possível usar DIPLOMACIA ou ENGANAÇÃO (CD 15). Por outro lado, se quiserem observar a movimentação das pessoas, ou seguir rastros, o teste é de INVESTIGAÇÃO ou SOBREVIVÊNCIA (CD 20). Outras abordagens que façam sentido permitem testes diferentes, com CD 25."
    },
    {
      type: "text",
      content: "Se tiverem uma falha total, as pessoas param de falar, os poucos rastros somem, e eles terão que recomeçar o teste estendido no dia seguinte. Caso durmam na vila, ou resolvam investigar durante a noite, serão atacados novamente por duas turbas de zumbis (Tormenta20, p. 297). Ninguém na vila irá intervir pois todos estão com medo dos mortos-vivos. No caso de duas falhas totais, a causa dos desaparecimentos terá se movido para outra região, e o grupo terá que encontrar uma nova forma de rastreá-la."
    },
    {
      type: "text",
      content: "Assim que vocês conseguem os sucessos necessários, um dos moradores fala com vocês:"
    },
    {
      type: "text",
      content: "“Não sei se as duas coisas têm relação, mas há algumas semanas o circo chegou à cidade. Mas não era como os outros. Havia algo sombrio. Eu tive medo, mas uns conhecidos meus foram. Desde então, as pessoas desaparecem... e esses zumbis surgem!”"
    },
    {
      type: "text",
      content: "Além da informação, a pessoa presenteia o grupo com um símbolo sagrado de Azgher: um pequeno sol esculpido com esmero em madeira."
    },
    {
      type: "text",
      content: "Se os personagens simplesmente resolveram procurar na noite, é possível ignorar o teste estendido e passar para a próxima cena com apenas um teste de INVESTIGAÇÃO (CD 20)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CENA 3: O CIRCO SOMBRIA"
    },
    {
      type: "text",
      content: "Não importa o quanto procurem durante o dia, personagens não serão capazes de encontrar o circo nas redondezas. Efeitos de adivinhação também não revelam nenhuma informação enquanto o sol não se por. Ao anoitecer, entretanto, caminhar pela vila seguindo os sons de música leva até as tendas negras. No arco de madeira na entrada, estilizado como uma bocarra com caninos alongados, está escrito “Circo Sombria”."
    },
    {
      type: "text",
      content: "Devotos de Tenebra, Azgher, ou aqueles que passarem em um teste de RELIGIÃO (CD 20) conseguem perceber a ligação deste circo com a Deusa da Noite. As pessoas no interior do local parecem muito felizes, sorrindo e brincando nas diversas atrações menores na parte externa da tenda principal."
    },
    {
      type: "text",
      content: "Infelizmente, parte disso é uma ilusão. Algumas dessas pessoas são mortos-vivos, surgidos de sacrifícios de noites anteriores, mas, no interior deste circo dedicado à Tenebra, agem e parecem vivos novamente."
    },
    {
      type: "text",
      content: "Só é possível perceber que há algo de errado com um teste de INVESTIGAÇÃO, INTUIÇÃO, MISTICISMO ou RELIGIÃO (CD 30). Ainda assim, mesmo quando informadas de sua “condição”, elas se recusarão a acreditar que estão mortas."
    },
    {
      type: "text",
      content: "No pátio principal há algumas opções de entretenimento que os personagens podem querer participar. Todos os funcionários do circo são mortos-vivos e sabem de sua verdadeira natureza, mas são excelentes em fingir seu desconhecimento (ENGANAÇÃO +15). As opções são brincadeiras, comidas, previsões e a tenda de espelhos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "BRINCADEIRAS"
    },
    {
      type: "text",
      content: "Existem diversos jogos e desafios no circo. É necessário pagar para participar, mas alguns dos prêmios são bastante interessantes, valendo pequenas fortunas."
    },
    {
      type: "text",
      content: "Para participar dos jogos, um personagem deve pagar T$ 5. Um teste estendido de PONTARIA (CD 20, 3 SUCESSOS) representa os jogos de precisão (como dardos ou acertar argolas em garrafas), enquanto um único teste de ATLETISMO (CD 20) representa proeza física (levantar pesos, bater martelo em uma geringonça que toca um sino). Se ganhar (passando no teste), o aventureiro recebe uma riqueza menor (Tormenta20, p. 330), mas deve passar em um teste de VONTADE (CD 20) ou ficará fraco até o próximo amanhecer."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "COMIDAS"
    },
    {
      type: "text",
      content: "Diversas barraquinhas servem todo o tipo de guloseima possível. Os estômagos de vocês roncam ao ver uma porção de batatas valkarianas caprichada saindo do óleo."
    },
    {
      type: "text",
      content: "Aqui é possível comprar qualquer item de alimentação pela metade do preço. Entretanto, todos estão amaldiçoados. As comidas deixam quem as coma enjoado até o nascer do sol (FORTITUDE CD 20 EVITA). Apesar disso, elas ainda fornecem os mesmos benefícios que o item ofereceria."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "PREVISÕES"
    },
    {
      type: "text",
      content: "Em uma única tenda há uma mulher coberta com um capuz negro. Suas mãos são muito pálidas e sua voz é melódica. “Sentem-se, por favor.” Assim que se acomodam, ela espalha estranhas cartas à sua frente."
    },
    {
      type: "text",
      content: "Selina é uma das poucas funcionárias do circo descontentes com sua condição. Está aqui só porque foi enganada, e deseja que o líder do circo seja derrotado. Entretanto, não vai se arriscar se não houver uma chance grande de vitória."
    },
    {
      type: "text",
      content: "Sempre que ela ler o futuro de um dos personagens, o mestre rola 1d6.\n- 1 - Nada: “As forças místicas não me permitem ver seu destino.”\n- 2 a 4 - Miséria: “Sombras em sua alma, sinto dizer que o mal te procura.”\n- 5 e 6 - Felicidade: “Os deuses gostam de você... e eu também.”"
    },
    {
      type: "text",
      content: "Se o resultado tiver sido miséria, o aventureiro fica frustrado até o dia seguinte (Vontade CD 20 evita). Por outro lado, felicidade faz um efeito similar ao símbolo sagrado de Azgher, vide a próxima cena."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "TENDA DE ESPELHOS"
    },
    {
      type: "text",
      content: "Na entrada, um anunciante chama: “Se desejam provar sua coragem, não há lugar melhor! Enfrentem seus medos aqui!”. A entrada é simples, e existem velas iluminando o caminho por entre os espelhos. Os reflexos são distorcidos, os corredores parecem infinitos, e algo parece espreitar ao longe."
    },
    {
      type: "text",
      content: "Esta tenda está sob efeito da magia Assassino Fantasmagórico. Um personagem que use MISTICISMO ou Visão Mística percebe que o lugar tem uma aura moderada."
    },
    {
      type: "text",
      content: "Quem entra na tenda e anda por algum tempo encontra-se repentinamente frente a frente com uma imagem monstruosa daquilo que mais teme. Se mais de um personagem resolver entrar, apenas um deles é afetado. Esta vítima deve fazer um teste de VONTADE (CD 20). Passando, percebe a natureza ilusória do reflexo."
    },
    {
      type: "text",
      content: "Se falhar, a vítima é atacada pela imagem apavorante, e precisa fazer um teste de FORTITUDE (CD 20). Um sucesso causa 6d6 pontos de dano de trevas (que não reduz a vítima a menos de 0 PV e não a deixa sangrando). Uma falha deixa o personagem com –1 PV e sangrando, devido a um colapso."
    },
    {
      type: "text",
      content: "Caso os personagens desejem investigar a tenda principal, ou as carroças que alojam os trabalhadores do circo, são interceptados por duas figuras muito estranhas. Um deles é bem alto e musculoso, suas roupas pretas e roxas são bufantes, e em seu rosto há um sorriso pintado de vermelho. O outro é mais baixo, franzino, suas roupas são completamente brancas, assim como sua face, exceto por seus olhos negros e uma boca triste feita com tinta preta."
    },
    {
      type: "text",
      content: "CRIATURAS. Bianco e Rojo (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "Estes dois monstros mortos-vivos servem de segurança contra aventureiros intrometidos. Eles atacam afastados da multidão que se diverte, e lutam até a sua destruição."
    },
    {
      type: "text",
      content: "Após terem feito as ações que os interessavam, ou enfrentarem os dois palhaços mortos-vivos, uma corneta sinistra toca, anunciando o começo do grande show."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "CENA 4: O PICADEIRO"
    },
    {
      type: "text",
      content: "Quando a corneta toca, todos na área do circo param e se dirigem para o interior da tenda principal. Seus movimentos são como de marionetes. Se sacudidos, fazem o possível para se desvencilhar e seguir seu caminho. Lá dentro há arquibancadas de madeira ao redor de um picadeiro, e no centro dele há um enorme cubo coberto com um pano. Lamparinas iluminam um pouco o ambiente."
    },
    {
      type: "text",
      content: "Uma voz grave, vinda das próprias paredes feitas de lona diz: “Senhoras e senhores, estão prontos para o show desta noite?”."
    },
    {
      type: "text",
      content: "Todos os personagens devem fazer um teste de VONTADE (CD 20), ou ficarão fascinados. Devotos de Tenebra, quem estiver com o símbolo sagrado de Azgher (conquistado na Cena 2) e aqueles que tiverem obtido uma previsão de felicidade não são afetados por este efeito, podendo remover a condição dos outros aventureiros com uma ação padrão."
    },
    {
      type: "text",
      content: "Se não enfrentaram Bianco e Rojo (NPCs e Criaturas) ainda, eles atacam os personagens agora, antes de entrarem na tenda principal."
    },
    {
      type: "text",
      content: "No interior, o grupo vê as pessoas sentadas, e fogos-fátuos projetados sobre suas cabeças. No centro do picadeiro, um homem vestindo trajes sombrios e elegantes, começa a falar."
    },
    {
      type: "text",
      content: "“Ora, ora, ora. Temos um espetáculo diferente nesta bela noite! Além de um banquete de oferendas para minha Senhora, a deusa Tenebra, recebemos novos membros para nossa estimada companhia circense!”"
    },
    {
      type: "text",
      content: "O homem, chamado Morrise, puxa o pano, revelando a fera em seu interior. O corpo lembra um leão apodrecido, suas asas de couro estão esburacadas, e o rosto parece uma versão grande do rosto de um zumbi."
    },
    {
      type: "text",
      content: "O cultista então abre a jaula e atiça o monstro contra os aventureiros."
    },
    {
      type: "text",
      content: "CRIATURAS. Morrise e Mantícora Zumbi (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "Este combate é bastante difícil. Morrise usa suas magias para reforçar a mantícora e seu chicote para atacar caso um aventureiro se aproxime demais. A mantícora zumbi ataca como a besta morta-viva que é, mas caso seu mestre esteja em perigo, focará no causador do problema."
    },
    {
      type: "text",
      content: "Se a mantícora zumbi for derrotada primeiro, Morrise tentará fugir. Já se o mestre de cerimônias for derrotado antes da fera, ela irá focar em devorar os visitantes vivos, que despertam de seu fascínio para o horror do momento."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "EPÍLOGO: SEM GRAÇA"
    },
    {
      type: "text",
      content: "Todo o ambiente começa a tremeluzir. As lonas que formam as barracas tornam-se translúcidas, para depois desaparecerem. Os vivos, após recuperarem sua consciência, veem os mortos ao seu redor. Aqueles que foram transformados em zumbis nas apresentações anteriores recuperam a consciência por um momento, antes de caírem como um cadáver comum. Alguns até mesmo continuam de pé, agora como osteon."
    },
    {
      type: "text",
      content: "A vidente Selina espera os personagens, ainda coberta com seu capuz negro, para agradecê-los por sua liberdade. As pessoas da vila também estão extremamente gratas, mesmo que tristes com a perda de conhecidos e familiares. Apesar disso, desejam demonstrar sua gratidão oferecendo aos personagens o equivalente a um tesouro de ND 5."
    },
    {
      type: "text",
      content: "Quando voltarem à cidade em que começaram a aventura, Matilda dirá que soube do ocorrido. Ela recompensa os personagens com tudo que foi prometido e mais T$ 1.000 por terem ajudado a vila. Se Morrise tiver fugido, ele planejará sua vingança contra os aventureiros, assim como seu próximo grande sacrifício."
    },
    {
      type: "text",
      content: "E os personagens avançam para o 5º nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCS E CRIATURAS"
    },
    {
      type: "text",
      content: "BIANCO (ND 2)\nMorto-Vivo Médio\nINICIATIVA +7, PERCEPÇÃO +6, visão no escuro\nDEFESA 15, FORT +2, REF +12, VON +8\nPONTOS DE VIDA 45\nDESLOCAMENTO 12m (8q)\nPONTOS DE MANA 8\nCORPO A CORPO Pancada +8 (1d6+4).\nATAQUE FURTIVO +2d6.\nSOMBRA BRANCA Bianco não sofre penalidade em testes de Furtividade por se mover com seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10.\nTRUQUE CIRCENSE Bianco pode lançar as seguintes magias simuladas como um conjurador arcano de 2º nível (CD 18).\n- Área Escorregadia (Padrão, 2 PM) Criaturas numa área de 4,5m de lado em alcance curto ficam caídas (Ref evita). Nas rodadas seguintes, criaturas que tentem se movimentar pela área devem fazer um teste de Acrobacia para equilíbrio (CD 15).\n- Hipnotismo (Padrão, 1 PM) Um humanoide em alcance curto fica fascinado por 1d4 rodadas (Von evita e deixa imune por 1 dia).\n- Imagem Espelhada (Padrão, 1 PM) Três cópias ilusórias de Bianco surgem ao seu redor, concedendo +6 na Defesa. Cada vez que um ataque erra Bianco, uma das cópias desaparece e o bônus na Defesa diminui em 2.\n- Primor Atlético (Padrão, 2 PM) Até o fim da cena, Bianco recebe deslocamento +9m, +10 em Atletismo e pode escalar paredes sem teste e sem ficar desprevenido.\nFor –1, Des 4, Con 1, Int –1, Sab 3, Car 2\nPERÍCIAS Acrobacia +10, Atuação +6, Enganação +8, Furtividade +10.\nEQUIPAMENTO Camisa bufante, estojo de disfarces.\nTESOURO Metade."
    },
    {
      type: "text",
      content: "ROJO (ND 2)\nMorto-Vivo Médio\nINICIATIVA +2, PERCEPÇÃO +1, visão no escuro\nDEFESA 18, FORT +12, REF +8, VON +2\nPONTOS DE VIDA 80\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Duas Pancadas +10 (1d8+5).\nCASCUDO Rojo reduz todo dano de corte, impacto e perfuração que sofre à metade.\nVIOLÊNCIA CÔMICA Sempre que sofre dano, Rojo recebe um bônus de +1 em testes de ataque e rolagens de dano até o fim da cena (até um máximo de +5). Se esse bônus chegar a +5, o tamanho de Rojo muda para Grande (–2 em Furtividade, +2 em manobras, dano aumenta em +1 passo) e seus ataques de pancada causam +1d6 pontos de dano de trevas. Se Rojo passar 1 rodada sem sofrer dano, perde o bônus e seu tamanho volta ao normal.\nFor 5, Des 1, Con 4, Int –3, Sab 0, Car 1\nPERÍCIAS Acrobacia +4, Atletismo +8, Atuação +4.\nTESOURO Metade."
    },
    {
      type: "text",
      content: "MANTÍCORA ZUMBI (ND 3)\nMorto-Vivo Grande\nINICIATIVA +4, PERCEPÇÃO +3, visão no escuro\nDEFESA 20, FORT +14, REF +4, VON +9\nPONTOS DE VIDA 27\nDESLOCAMENTO 6m (4q), voo 9m (6q)\nCORPO A CORPO Duas garras +16 (1d8+8).\nESPINHOS PUTREFATOS (PADRÃO) Uma vez por cena, a mantícora zumbi dispara 1d4 espinhos de sua cauda. Cada espinho atinge uma criatura em alcance médio, causando 1d6+3 pontos de dano de perfuração e 1d6 pontos de dano de trevas (Ref CD 17 reduz todo o dano à metade).\nFRAQUEZA ZUMBI A mantícora sofre o dobro de dano de acertos críticos ou de ataques feitos contra seu cérebro (Defesa 30).\nFor 6, Des 0, Con 4, Int —, Sab –1, Car 0\nTESOURO Nenhum."
    },
    {
      type: "text",
      content: "MORRISE (ND 3)\nHumanoide (humano) Médio\nINICIATIVA +5, PERCEPÇÃO +5, visão no escuro\nDEFESA 20, FORT +2, REF +10, VON +15\nPONTOS DE VIDA 70\nDESLOCAMENTO 9m (6q)\nPONTOS DE MANA 23\nCORPO A CORPO Chicote +12 (1d4+8, mais 2d6 trevas).\nESTALO DO CHICOTE (PADRÃO, 2 PM) Morrise e todos os seus aliados em alcance curto recebem +2 em testes de perícia até o fim da cena.\nPASSO SOMBRIO (LIVRE, 2 PM) Morrise se teletransporta para um espaço desocupado em alcance curto.\nTRANSFERIR SOFRIMENTO (REAÇÃO) Uma vez por rodada, quando Morrise sofre uma condição ou dano, ele transfere para a mantícora zumbi.\nMAGIAS Como um feiticeiro de 3º nível (CD 20).\n- Amedrontar (Padrão, 3 PM) Um animal ou humanoide em alcance curto fica apavorado por 1d4+1 rodadas e depois abalado (Von reduz para abalado por 1d4 rodadas).\n- Escuridão (Padrão, 3 PM) Até o fim da cena, um objeto em alcance curto emana escuridão total em um raio de 6m, bloqueando a visão na área e através dela.\n- Infligir Ferimentos (Padrão, 3 PM) Uma criatura adjacente sofre 3d8+3 pontos de dano de trevas (Fort reduz à metade).\n- Raio do Enfraquecimento (Padrão, 3 PM) Uma criatura em alcance curto fica exausta (Fort reduz para fatigada).\n- Vitalidade Fantasma (Padrão, 3 PM) Morrise recebe 3d10 PV temporários.\nFor 1, Des 2, Con 0, Int 3, Sab 2, Car 5\nPERÍCIAS Acrobacia +3, Adestramento +3, Atuação +3, Misticismo +3, Religião +3.\nEQUIPAMENTO Chicote cruel equilibrado, traje da corte macabro.\nTESOURO Dobro."
    }
  ]
  },
  { id: "Um Novo Dia para Morrer",
  name: "Um Novo Dia para Morrer",
  theme: "Fantasia e Mistério Divino",
  image: "/aventuras/um-novo-dia-para-morrer.png",
  summary: "Despertados após a morte em Triunphus, a cidade da ressurreição, os heróis recebem uma visão divina de Thyatis. A missão os leva a investigar desaparecimentos, enfrentar feras em uma arena clandestina e deter um culto da Tormenta.",
  sections: [
    {
      type: "text",
      content: "A coluna Breves Jornadas oferece aventuras simples, rápidas e completas para Tormenta20, com tudo que será necessário para jogar. Fichas especiais serão fornecidas aqui, enquanto àquelas presentes no livro básico terão indicadas as páginas em que se encontram. O objetivo é fornecer ao mestre um ponto de partida eficiente para que todos se divirtam por uma tarde, ou comecem uma nova campanha. Se precisar de fichas de personagens prontas, é possível encontrá-las na coluna Heróis de Bolso, no Blog da Jambô."
    },
    {
      type: "text",
      content: "Esta aventura chama-se Um novo dia para morrer."
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
      content: "Triunphus. Cidade da benção-maldição, onde os mortos renascem, porém sem poder deixar o local. Um dos lugares mais exóticos do mundo, e isso é bastante significativo quando este mundo é Arton. De tempos em tempos a horda Móock, liderada pela própria ave flamejante de duas cabeças, varre tudo em seu caminho, apenas para a população erguer-se novamente nos dias seguintes."
    },
    {
      type: "text",
      content: "O patrono da cidade, Thyatis, é o Deus da Ressurreição e Profecia, então, por vezes aqueles que retornam são agraciados com uma visão. Muitas são missões divinas, como uma indicação de algo a ser feito, enviado pela própria deidade. Poucos se arriscam a não cumprir uma dessas, temendo o fim da nova chance recebida. E em uma cidade onde a morte é apenas um inconveniente, não faltam chances para tentar novamente."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Resumo da Aventura"
    },
    {
      type: "text",
      content: "Um novo dia para morrer é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 1º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Despertados após terem morrido durante um ataque do Moóck, os personagens recebem uma missão divina: devem investigar estranhos desaparecimentos na parte velha de Triunphus. Lá precisarão indagar as pessoas à procura por pistas, até chegar à dona de uma taverna local. Entretanto, para impressioná-la, terão que derrotar uma fera terrível (mas, por sorte, morrer não é um problema aqui)."
    },
    {
      type: "text",
      content: "Direcionados pela proprietária, encontrarão uma casa com um perigo bem maior: o começo de um culto à Tormenta, que tenta se infiltrar. Lidar com essas ameaças, de forma que não as confine à cidade, vai exigir consideração meticulosa dos personagens."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1 – O despertar dos mortos"
    },
    {
      type: "text",
      content: "Uma escuridão profunda é tudo que vocês veem. Subitamente, chamas irrompem à frente, em uma explosão de luz, mas sem queimar. Logo é possível ver uma cidade, vista de cima, com muralhas imponentes. Há um pio alto, e então algumas pessoas começam a ser sugadas pelo chão. Uma voz, no fundo de sua mente diz “Encontre”."
    },
    {
      type: "text",
      content: "Então seus olhos abrem. Há um lençol sobre cada um de vocês, aumentando ainda mais a confusão desse despertar. Um jovem humano, vestindo mantos vermelhos com uma fênix bordada se aproxima."
    },
    {
      type: "text",
      content: "“Calma, calma”, ele diz, “Voltar à vida não é uma das experiências mais tranquilas, ao menos da primeira vez”."
    },
    {
      type: "text",
      content: "Ele se apresenta como Melvin, noviço de Thyatis. Conforme a confusão mental diminui, vocês notam outras pessoas ao redor. Algumas ainda estão inertes, enquanto outras se levantam, com a maior normalidade do mundo. Melvin vai até uma mesa e traz para uma bandeja com cumbucas de uma sopa grossa, mas muito cheirosa."
    },
    {
      type: "text",
      content: "“Comam, vocês devem estar famintos. Conseguem se lembrar do que aconteceu?”"
    },
    {
      type: "text",
      content: "Os personagens lembram de uma devastação de chamas, assim como uma imensa ave de duas cabeças, formada completamente de fogo."
    },
    {
      type: "text",
      content: "“O Móock, sim. É uma pena terem sido pegos no meio do ataque da horda. Triunphus é linda nessa época do ano.”"
    },
    {
      type: "text",
      content: "As peças começam a se encaixar. Por motivos diversos, cada um de vocês chegou à cidade. Porém, ninguém contava com o repentino avanço dos monstros, e vocês foram abatidos, estando agora sob efeito da “benção” local."
    },
    {
      type: "text",
      content: "“Caso vocês não tenham onde ficar, podem passar uns dias aqui no templo de Thyatis. Não é o lugar mais confortável do mundo, mas é um local de recomeços. Se eu puder ajudar em qualquer coisa, é só avisar!”"
    },
    {
      type: "text",
      content: "Se ninguém parecer curioso sobre o estranho sonho descrito, Melvin pode perguntar se tiveram algum viram algo enquanto estavam mortos. É uma oportunidade para descobrirem que todos tiveram a mesma visão."
    },
    {
      type: "text",
      content: "“Interessante. Isso significa que seus destinos estão ligados, de alguma forma. Ouvi falar de alguns desaparecimentos na parte velha da cidade, talvez seja um bom lugar para começar.”"
    },
    {
      type: "text",
      content: "Um personagem que ativamente se recuse a investigar a visão passa a sofrer, no final de cada dia, uma penalidade cumulativa de –2 em todos os testes e rolagens, como sob efeito da magia Missão Divina. Essa penalidade desaparece imediatamente se parar de evitar o chamado à aventura."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2 – Buscando conhecimento"
    },
    {
      type: "text",
      content: "A parte velha é um lugar de contrastes. A população local é simples, vivendo em construções de madeira, reminiscentes da primeira formação da cidade. Porém, também existem cassinos, casas de aposta e tavernas de má reputação, mas todos coloridos e chamativos. Um nobre passeia pela rua em direção a um dos estabelecimentos, quando é cercado pelo povo, pedindo sua ajuda. Ele arremessa uma bolsa pesada, e as pessoas se engalfinham, tentando pegar qualquer tibar que se espalhe pelo chão. Os poucos guardas que passam evitam olhar muito ao redor, um ou outro parando na porta de estabelecimentos para receber um embrulho suspeito."
    },
    {
      type: "text",
      content: "Perguntar na parte velha é um teste estendido de Diplomacia ou Investigação (CD 20) que requer passar em três testes. O mestre pode fornecer um bônus de +2 nos testes de acordo com o tipo de abordagem, como oferecer algum dinheiro aos moradores da região, por exemplo."
    },
    {
      type: "text",
      content: "Passando nos testes necessários os personagens descobrem que a proprietária de uma das tavernas locais, chamada Masmorra da Morte, também vem coletando informações sobre os desaparecimentos. Talvez haja uma forma de convencê-la a dividir aquilo que sabe com o grupo. Porém, se tiverem uma falha total (três falhas), os heróis são abordados por dez pessoas mal-encaradas (use a ficha de chefe bandido). Eles “pedem” que os acompanhem, porém, se os aventureiros tentarem resistir, usarão ataques não-letais para levá-los até sua líder."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3 – Prepare-se para morrer"
    },
    {
      type: "text",
      content: "A taverna não é um lugar particularmente aconchegante ou arrumado. Em seu interior as cadeiras e mesas são simples e o balcão é rústico. A seleção de bebidas dispostas na parte de trás do bar é muito limitada, basicamente um ou dois barris velhos. Quando o grupo entra, duas pessoas que estavam repousando a cabeça nas mesas se levantam subitamente, em prontidão, porém o taverneiro, um homem de quase dois metros de altura, para de limpar uma caneca e levanta a mão, fazendo os vigilantes retornarem a falsa posição de descanso."
    },
    {
      type: "text",
      content: "O taverneiro levanta uma portinhola do balcão e acena com a cabeça para uma passagem atrás de si. Caso estejam “acompanhados” dos criminosos, eles entram direto, apenas trocando olhares com as pessoas no interior. Cruzando a passagem, há uma escada para baixo. Após descer os lances, chegam a um ambiente diferenciado, com poltronas macias e luxuosas, mesas lustrosas, e quadros escritos com giz nas paredes. No meio deste ambiente opulento há o que parece um poço circular, com cinco metros de profundidade, e interior de terra batida. Alguém que deseje pode fazer um teste de Percepção (CD 15), para notar uma passagem gradeada no fundo do poço, mas seu interior está em um ângulo que atrapalha a visão."
    },
    {
      type: "text",
      content: "De uma das passagens cobertas por tapeçarias vem uma voz feminina: “Ora, ora, ora. Se não são os aventureiros intrometidos que estão perguntando sobre os desaparecimentos.”"
    },
    {
      type: "text",
      content: "É uma elfa de cabelos negros presos em um coque e um tapa-olho cobrindo a órbita direita. As roupas dela são elegantes, mas permitem liberdade de movimento. Além disso, é possível ver parte de uma pistola e a empunhadura de uma adaga."
    },
    {
      type: "text",
      content: "“Não se preocupem, eu e meus superiores também queremos saber o que está acontecendo com os desaparecidos. Porém, não é uma tarefa para qualquer um. Será que vocês são capazes? Veremos. Me chamem de Sarelyn, sou a proprietária da maravilhosa taverna acima, assim como deste pequeno local de entretenimento privado.”"
    },
    {
      type: "text",
      content: "Sarelyn propõe um teste: se os personagens vencerem em sua arena, ela irá ajudá-los. Se tentar qualquer ameaça ou agressão, ela e seus homens atacam sem qualquer pena, sabendo que voltarão à vida (veja a ficha de Sarelyn em NPCs & Criaturas). Porém, se aceitar a proposta, ela diz para retornar à noite, quando a casa estiver cheia."
    },
    {
      type: "text",
      content: "No horário marcado, o lugar está abarrotado. Aristocratas endinheirados sentam-se nas poltronas, enquanto garçons passam oferecendo bebidas e pegando apostas. Os nomes dos personagens estão escritos nos quadros, com números ao lado, representando valores em Tibares. O grupo é descido ao poço e finalmente eles conseguem ver as grades com mais clareza. Sarelyn começa a anunciar o combate:"
    },
    {
      type: "text",
      content: "“Meus caros amigos triunphianos, essa noite teremos um verdadeiro espetáculo para seus olhos! Em nossa arena, um legítimo grupo de aventureiros! Abençoados pelo próprio Thyatis, aqui para testar sua coragem! Mas serão páreo para o seu oponente?”"
    },
    {
      type: "text",
      content: "As barras começam a subir, produzindo um barulho metálico alto. Dois olhos incandescentes perfuram a escuridão da alcova."
    },
    {
      type: "text",
      content: "“É o momento de fazer suas apostas, ilustres convidados! Conseguirão eles derrotar uma besta fera capturada da própria horda Móock, para vosso entretenimento? Das chamas mais profundas, apresento a vocês: o cão do inferno!”"
    },
    {
      type: "text",
      content: "Nesse momento a plateia irrompe em berros, logo silenciados pelo rugido flamejante do monstro, que avança contra os personagens."
    },
    {
      type: "text",
      content: "Criaturas. Cão do Inferno (Tormenta20, p. 292)."
    },
    {
      type: "text",
      content: "Este combate deve ser extremamente difícil, possivelmente derrotando alguns, ou talvez todos os personagens. Se este for o caso, os personagens despertam no templo de Thyatis novamente, sob a supervisão de Melvin. “Ei, são vocês de novo. Como vai a missão?” Ouvindo o que houve, ele oferece duas poções de curar ferimentos (2d8+2 PV) e três essências de mana. Se ao menos um dos personagens sobreviver ao combate, é possível que ele peça para os sacerdotes de Thyatis trazerem seus companheiros de volta, ainda que seja desnecessário uma vez que voltarão naturalmente em alguns dias."
    },
    {
      type: "text",
      content: "De volta à taverna Masmorra da Morte, Sarelyn está surpresa pela coragem do grupo, mas ainda não confia em suas capacidades, e permitirá que tentem novamente, quantas vezes quiserem, até por ser bom para os negócios. Se derrotados duas vezes, avançam para o 2º nível, aumentando a chance de vitória."
    },
    {
      type: "text",
      content: "Caso queiram, os personagens podem apostar em si mesmos. Sarelyn explica não permitir lutas armadas (exceto quando ela tem algo a ganhar com isso). Ao vencer o combate, recebem vinte vezes a soma apostada. Além das apostas, Sarelyn “presenteia” generosamente o grupo com T$ 200."
    },
    {
      type: "text",
      content: "Finalmente impressionada, a elfa conta a eles sobre uma casa que vem sendo ignorada pela guarda por algum motivo, segundo seus informantes. Mas antes de partirem, olha-os intensamente e diz: “Lembrem-se: o que morre em Triunphus... fica em Triunphus.”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4 – A casa vermelha"
    },
    {
      type: "text",
      content: "No limite da cidade, onde as casas mais simples estão, uma parece especialmente afastada. Do lado de fora é mais suja e abandonada que as outras da região, suas janelas são cobertas com tábuas e pregos. Se eles observarem por alguns dias, verão um guarda de alto posto entrar e sair do local."
    },
    {
      type: "text",
      content: "Se os personagens aproveitarem esses dias para investigar, poderão esperar que o guarda saia, para então entrarem no ambiente. Infelizmente, o que veem no interior os choca. O chão é coberto de escritos profanos, e em uma das paredes há uma pintura em sangue de Aharadak, o Deus da Tormenta. Porém, ao entrarem, um lefou ensandecido está pronto a atacá-los!"
    },
    {
      type: "text",
      content: "Criaturas. Maníaco Lefou (Tormenta20, p. 314)."
    },
    {
      type: "text",
      content: "O lefou irá lutar até sua morte, pois sabe que se morrer aqui, renascerá, ficando permanentemente preso a cidade. Cabe aos personagens acharem uma maneira de lidarem com ele sem matá-lo."
    },
    {
      type: "text",
      content: "Caso entrem no local diretamente, encontrarão lá também um sargento da guarda. Ao ver os aventureiros, ele começa um discurso: “Vocês não entendem! Esse lugar é um inferno! De tempos em tempos aquela besta-fera invade e todos somos mortos, e a culpa é de quem? De Thyatis, claro! As pessoas que estou capturando são meu sacrifício, e me permitirão chamar Aharadak, e quebrar este ciclo! Por isso os sequestrei e por isso os enterrei no quintal! Agora, vocês podem se juntar a mim, ou a eles!”"
    },
    {
      type: "text",
      content: "Criaturas. Capitão Corrompido (NPCs & Criaturas)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo – Viver para morrer outro dia"
    },
    {
      type: "text",
      content: "Ao derrotarem o capitão, poderão finalmente desenterrar as pessoas. A terra do lado de fora da casa foi revolvida, e com tempo, o grupo poderá encontrar todos os que foram capturados. Apesar do trauma, as vítimas estarão extremamente agradecidas."
    },
    {
      type: "text",
      content: "Assim que a guarda descobrir o ocorrido, entrará em contato com os aventureiros. Primeiramente se desculpa por não ter notado a ameaça em seu meio, e pede ajuda em outros casos. Talvez os personagens possam até eventualmente se tornar membros da guarda da fênix, e sejam treinados no combate contra a horda. Ou talvez prefiram se manter afastados. Nesse caso, Sarelyn talvez tenha alguns serviços para os obstinados ou teimosos o suficiente."
    },
    {
      type: "text",
      content: "Todos avançam para o próximo nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs & Criaturas"
    },
    {
      type: "text",
      content: "Sarelyn\nApós passar a vida sobrevivendo no crime, a elfa Sarelyn não esperava que sua morte em Triunphus fosse uma das melhores coisas a lhe acontecer. Aqui, trabalhando sob o comando de Gnaeus, conquistou seu estabelecimento e uma vida melhor do que tinha no mundo lá fora. Aprecia pessoas de garra, que não desistem na primeira morte."
    },
    {
      type: "text",
      content: "Sarelyn (ND 5)\nHumanoide (elfa) Média\nIniciativa +11, Percepção +10, visão na penumbra\nDefesa 22, Fort +5, Ref +17, Von +11, evasão\nPontos de Vida 135\nDeslocamento 12m (8q)\nCorpo a Corpo Espada curta x2 +12 (1d6+10, 19)\nÀ Distância Duas pistolas +15 (2d6+15, 18/x3)\nAtaque Furtivo +3d6.\nInabalável Sarelyn nunca fica surpreendida. Quando faz um teste de resistência, rola dois dados e usa o melhor resultado.\nMatar ou Morrer (Movimento) Sarelyn assume uma postura de tudo ou nada, e seu próximo ataque contra um alvo em alcance curto feito nessa rodada é considerado um ataque furtivo. Entretanto, ela fica desprevenida por uma rodada.\nPistoleira Veloz Sarelyn não sofre a penalidade padrão de –5 em ataques por disparar contra oponentes envolvidos em combate corpo a corpo, e pode recarregar sua arma de fogo com uma ação de movimento.\nFor –1, Des 5, Con 1, Int 3, Sab 2, Car 2\nPerícias Acrobacia +9, Enganação +8, Furtividade +11.\nEquipamento Balas x20, couro batido, espada curta, pistola x2. Tesouro Dobro."
    },
    {
      type: "text",
      content: "Capitão Corrompido (ND -)\nHumanoide (humano) Médio\nIniciativa +4, Percepção +3, visão no escuro\nDefesa 18, Fort +13, Ref +7, Von +2, resistência a magia divina +5\nPontos de Vida 80\nDeslocamento 6m (4q)\nCorpo a Corpo Alabarda grotesca +10 (1d10+5, x3, mais 1d6 de matéria vermelha).\nAlabarda Grotesca Criada a partir do corpo do capitão, esta arma orgânica é feita de matéria vermelha. Além disso, é capaz de se estender, permitindo ataques corpo a corpo contra criaturas em alcance curto.\nAtaque Reflexo (Reação) Uma vez por rodada, o capitão pode fazer um ataque corpo a corpo contra um alvo adjacente que esteja desprevenido ou que se mova para fora do seu alcance.\nFor 5, Des 1, Con 3, Int 0, Sab –2, Car –2\nPerícias Atletismo +8, Intimidação +3\nEquipamento Apito, cota de malha, maça, símbolo sagrado de Aharadak. Tesouro Nenhum."
    }
  ]
  },
  { id: "Terceiras Intenções",
  name: "Terceiras Intenções",
  theme: "Intriga Mercantil e Cultos Secretos",
  image: "/aventuras/terceiras-intencoes.png",
  summary: "Contratados como escolta por um mercador hynne em Sambúrdia, os heróis se veem enredados em uma conspiração armada por guardas corruptos e comerciantes rivais, orquestrada por um sacerdote de Arsenal infiltrado.",
  sections: [
    {
      type: "text",
      content: "O reino de Sambúrdia já foi conhecido como o celeiro de Arton. Esse apelido vinha da combinação de suas terras férteis com seus grandes mercadores. Devido às diversas mudanças recentes ocorridas em Arton, desde guerras até a queda e ascensão de deuses maiores, hoje as Repúblicas Livres possuem grande poder e um território invejável. Em vez de uma tradicional nobreza, aqui o poder está na mão dos mercadores."
    },
    {
      type: "text",
      content: "O duelo de influência dessas figuras atrai aqueles interessados no conflito. E ninguém mais deseja ver a guerra elevar os capazes do que os devotos do deus Arsenal. Eles se infiltram em exércitos, cidades, e onde quer que seja, usando seu treinamento e pensamento estratégico para se tornarem insubstituíveis. Porém, muitos acabam se revelando como mestres manipuladores, especialistas em iniciar rusgas fatais para agradar seu patrono."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Terceiras Intenções é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de personagens de 1º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Os aventureiros são contratados por Dingo Dedosligeiros, um mercador hynne. O contrato é simples: eles devem acompanhar as entregas de uma remessa de seus produtos. Após acompanharem algumas das entregas, em uma ruela, alguns guardas surgem para inspecionar a carroça que os transporta. Após checar alguns dos itens, um deles alega ter encontrado contrabando de achbuld, uma droga poderosa, e pretende confiscar a remessa e prendê-los. Essa evidência, entretanto, foi plantada pelos guardas corruptos. Se forem perceptivos, poderão questioná-los, mas isso inicia um combate."
    },
    {
      type: "text",
      content: "No dia seguinte, um funcionário de uma mercadora elfa se oferece para liberá-los. O problema é que Shindantalas, a tal elfa, deseja que os heróis se infiltrem na organização de Dedosligeiros em troca. Caso recusem, Dingo os libertará logo que ela partir. Ele está possesso pela perda de seus bens, mas os aventureiros serão compensados se encontrarem um grupo de infiltrados. Tudo isso, entretanto, é manipulado por um sacerdote da guerra, Kirth. Antes de partir para seu próximo plano, ele deixa um último desafio: um dos temíveis tiranos das águas!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1: TRANSPORTE"
    },
    {
      type: "text",
      content: "As pessoas andam rapidamente, sem tempo para nada. Negócios são fechados a todo momento na cidade de Sambúrdia. Enormes carroças e carregamentos de artigos agrícolas passam o tempo todo. Dos prédios impressionantes da Cidade Nova, às construções simples da Cidade Velha, as pessoas trabalham desde antes do sol nascer, até depois dele se por. Apesar de bem patrulhada, ainda existe crime na capital, assim como existe sempre serviço para aventureiros motivados desejando fazer fortuna."
    },
    {
      type: "text",
      content: "Os personagens ficam sabendo de uma oportunidade de trabalho — preso em um folheto num quadro público, vindo de alguma fofoca em uma taverna — ou são procurados por sua ligação com as famílias mercantes. O local onde serão informados da missão é um dos prédios dos Dedosligeiros. Chegando lá, encontram principalmente humanos e hynnes, organizando cargas e caixas. O cheiro de charutos e tabaco preenche o ambiente. Uma hynne robusta avista os aventureiros e acena para eles."
    },
    {
      type: "text",
      content: "“Com essa cara de perdidos vocês só podem ser aventureiros!”, diz ela gargalhando. “Aposto que não saberiam como fazer um trabalho braçal mesmo que ele os atingisse bem na fuça”."
    },
    {
      type: "text",
      content: "Apesar da implicância, Maya, é amigável, rindo de si mesma se provada errada. Ela os leva até o escritório principal, onde há diversas pessoas entrando e saindo. Atrás de uma escrivaninha está um outro hynne, de cabelos encaracolados e com várias marcas de expressão. Há um charuto meio apagado na mesa."
    },
    {
      type: "text",
      content: "“O que foi, Maya? Mais algum problema? Por Tibar, eu juro que se tiver acontecido qualquer coisa com essa remessa...”, ele diz."
    },
    {
      type: "text",
      content: "Ele é Dingo, o mercador. Os dois conversam, e o homem parece aliviado. Sem sair de sua mesa, e sem parar de assinar documentos, aperta a mão de cada um dos aventureiros."
    },
    {
      type: "text",
      content: "“Bom, menos mal. Vou ser direto, tempo é dinheiro. Uma determinada rota de entregas na cidade tem sido atacada, e a guarda convenientemente não encontra pistas. O trabalho é simples: vocês acompanham Maya por alguns dias, e evitam esses ataques”."
    },
    {
      type: "text",
      content: "A oferta que ele faz é de T$ 25 por dia para cada um. Porém, se simplesmente aceitarem, Dingo, diz “Vocês não estão acostumados com isso, né? Deixa eu ensinar: é agora que você negocia”. Permita um teste de Diplomacia para barganha, mas independente do resultado do teste (o bônus de Vontade do mercador é +10), o hynne aumenta a proposta para T$ 50, mais qualquer porcentagem adicional conseguida."
    },
    {
      type: "text",
      content: "Antes de saírem, um homem vestindo um hábito elegante púrpura sobre uma armadura entra na sala, há uma espada e martelo em um grande broche representando sua devoção a Arsenal."
    },
    {
      type: "text",
      content: "“Ah, então finalmente o teimoso do Dingo resolveu me ouvir!”. O sacerdote se apresenta como Kirth, e diz ser um conselheiro estratégico. “Tudo na vida é um campo de batalha, os negócios não são exceção”."
    },
    {
      type: "text",
      content: "Apresentações feitas, Maya os acompanha até uma carroça, onde há várias caixas para entregas acomodadas na parte de trás. Se desejarem conferir os itens, verão que tudo está de acordo com o manifesto. Assim, o grupo parte para o primeiro dia de missão."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2: ALTO LÁ"
    },
    {
      type: "text",
      content: "As entregas seguem tranquilamente, e passam por toda a cidade de Sambúrdia durante o processo. Os personagens veem lugares como a Praça do Venha-Ver, o Fortim Sambur e o Salão dos Mistérios. Mesmo quando a entrega não parece tranquila, Maya explica que esse é o natural desses clientes. Começa a entardecer quando faltam as últimas caixas."
    },
    {
      type: "text",
      content: "Um dia pacífico parece estar chegando ao fim. Entretanto, quando precisam passar por uma rua estreita para chegar em um dos últimos clientes, os heróis encontram um grupo de três guardas como se estivessem aguardando-os. “Parados aí!”, eles dizem, “Saltem da carroça e mostrem o manifesto da carga”."
    },
    {
      type: "text",
      content: "Personagens treinados em Intuição, ou com a origem guarda, notam que há algo de errado. Os guardas revistam avidamente a carroça, tentando distrair o grupo com perguntas aleatórias. Um teste de Intuição oposto pela Enganação deles (+0 de bônus) revela que estão tensos e que há uma intenção oculta."
    },
    {
      type: "text",
      content: "Antes que possam fazer algo sobre isso, um deles grita, “Ora, ora, ora! O que temos aqui!”. Ele segura uma das caixas, e de dentro dela retira um pacote contendo o que aparenta ser achbuld, uma droga ilegal. “É isso, vamos ter de levar esse carregamento inteiro com a gente, e vocês vão para a cadeia!”"
    },
    {
      type: "text",
      content: "Maya parece chocada. Ela começa a falar muito rápido, justificando que checou a mercadoria várias vezes. “Sim, sim, todo mundo diz que é inocente nessas horas”, responde um dos guardas, em tom sarcástico. Peça um teste de Intuição ou Investigação oposto à Enganação deles, com um bônus de +5 se tiverem percebido as intenções ocultas. Se forem vencidos, os guardas gaguejam, pegos em sua mentira, e então sacam suas armas."
    },
    {
      type: "text",
      content: "Criaturas. Guardas de cidade x3 (Tormenta20, p. 289)."
    },
    {
      type: "text",
      content: "Se o combate começar, ou mesmo se o grupo aceitar a prisão pacificamente, Maya foge. Esses guardas corruptos sabem que se forem pegos em suas mentiras perderão o trabalho, e desagradarão seu contratante, então combatem até caírem inconscientes. Na primeira rodada, um deles assoprará seu apito como uma ação padrão, e mais quatro guardas, acompanhados de um sargento da guarda (Tormenta20, p. 289) chegarão no final de 1d4+1 rodadas. Aqueles que chegam depois não fazem parte do esquema, mas se virem os personagens usando dano letal para lidar com seus colegas, combaterão normalmente."
    },
    {
      type: "text",
      content: "Caso se entreguem voluntariamente, ou sejam derrotados pelos guardas, os personagens são levados para a cadeia, e presos para serem interrogados mais tarde. Se derrotarem os guardas antes do reforço chegar, vá para a cena 4."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3: A PROPOSTA"
    },
    {
      type: "text",
      content: "Vocês se encontram presos em uma cela, as horas passam e ninguém surge até a manhã seguinte. Em vez do seu contratante, quem aparece é uma mulher elfa, alta e vestida em trajes elegantes, destoando muito do lugar onde estão."
    },
    {
      type: "text",
      content: "Ela se apresenta como Shindantalas, uma comerciante. Personagens com a origem mercador a reconhecem, sabem que possui uma reputação impecável e é muito influente."
    },
    {
      type: "text",
      content: "“Bem, vejo que foram enganados por um tratante. O tal Dedosligeiros usa pessoas e as descarta como os restos de seus charutos. Talvez eu possa fazer-lhes uma proposta que será benéfica tanto para vocês quanto para mim”, ela diz."
    },
    {
      type: "text",
      content: "Shindantalas explica que os homens de Dingo vêm atacando seus carregamentos de vinhos finos, para diminuir seus lucros. Infelizmente não pode provar a participação deles, mas alguém infiltrado poderia perguntar para os funcionários sem levantar muitas suspeitas. A elfa oferece, como recompensa se a auxiliarem, T$ 400 e uma espada curta precisa, de manufatura élfica."
    },
    {
      type: "text",
      content: "Entretanto, há algo de estranho. Um teste de Intuição oposto à Enganação de Shindantalas (+10) mostra que ela não acredita realmente no que está dizendo. Isso levanta suspeitas sobre essa proposta “generosa”."
    },
    {
      type: "text",
      content: "Se não aceitarem, ela diz: “Tudo bem, mas se mudarem de ideia, me procurem em meu escritório”. Mesmo se concordarem em ajudá-la, a elfa explica que não pode livrá-los da prisão ainda, para manter seu disfarce. Porém, entrega ao grupo T$ 100 como adiantamento. Assim que terminam a conversa, Shindantalas se retira, agradecendo ao menos a atenção."
    },
    {
      type: "text",
      content: "Logo depois chega um representante de Dedosligeiros, e os leva de volta para a casa comercial de Dingo. O hynne os aguarda em seu escritório."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4: CONTRAPROPOSTA"
    },
    {
      type: "text",
      content: "No momento que entram na sala, o grupo vê Maya, de cabeça baixa, e Dingo, obviamente irritado. Ele não está debruçado sobre seus papéis, e quando entra pede que fechem a porta."
    },
    {
      type: "text",
      content: "“Maldição, essa situação é inaceitável!”, ele acende a ponta de seu charuto. “Não acho que essa confusão toda foi culpa de vocês, mas raios, que desgraça! A Maya aqui me contou tudo que aconteceu, e peço perdão por ter demorado a soltar vocês. Acho que descobri a responsável por todos esses problemas: uma golpista negociante de vinhos baratos chamada Shindantalas!”"
    },
    {
      type: "text",
      content: "Caso tenham ouvido a proposta da elfa, eles obviamente sabem de quem se trata. O hynne explica que descobriu uma possível ligação dela com os guardas corruptos que o grupo encarou. E o pior: sabe que alguns de seus homens podem estar passando informações para ela. Dingo agradece o trabalho feito até o momento, e os recompensa com o pagamento por um dia de trabalho."
    },
    {
      type: "text",
      content: "O mercador então diz precisar de mais um serviço, que renderá aos heróis T$ 200 e um escudo de família (escudo pesado reforçado). Tudo que precisam fazer é questionar seus funcionários que estão trabalhando num galpão anexo. Eles devem descobrir as provas do envolvimento de Shindantalas, para que o hynne possa acusá-la formalmente."
    },
    {
      type: "text",
      content: "Se informado da visita da elfa, Dingo vai bater na mesa. “Claro que ela tentaria isso, jogar vocês contra mim! Ainda assim, só posso fazer a acusação se provar o envolvimento com os guardas. Conto com vocês para isso, e muito obrigado pela honestidade”. E após dizer isso, aumenta a recompensa para T$ 300."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5: OS INFILTRADOS"
    },
    {
      type: "text",
      content: "No galpão, o trabalho é constante e veloz. Os funcionários lacram caixas de charuto e as preparam para entregas, enquanto contadores revisam os números e separam remessas encomendadas para ainda mais longe."
    },
    {
      type: "text",
      content: "Será necessário decidir que linha de investigação seguirão nesse momento: os ataques aos carregamentos de vinhos Shindantalas ou a infiltração de agentes externos nas operações Dedosligeiros."
    },
    {
      type: "text",
      content: "Se forem pelo caminho dos ataques aos carregamentos, terão de fazer um teste estendido (CD 15, +2 para cada falha, 5 sucessos). Entre as perícias que podem ser usadas estão Diplomacia, Enganação e Investigação. Para outras perícias apropriadas a CD é 20. Em caso de falha total, ninguém mais fala com os personagens pelo dia, fazendo com que tenham que começar novamente sem nenhum sucesso acumulado no dia seguinte."
    },
    {
      type: "text",
      content: "Caso a linha de investigação seja a de encontrar os trabalhadores infiltrados, será também um teste estendido (CD 15, +2 a cada teste, independente de 5 sucessos ou falha). Para este, eles podem usar Intimidação, Intuição ou Investigação. Outras perícias causarão uma penalidade de –2. Uma falha total aqui representa um funcionário irritado que resolve puxar briga com os aventureiros (use a ficha de bandido, Tormenta20, p. 289). Ao passarem em um dos testes estendidos, encontram um dos funcionários que parece saber sobre os crimes, mas ele empurra algumas caixas e sai correndo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 6: REVELAÇÕES"
    },
    {
      type: "text",
      content: "O trabalhador está movido pelo desespero, porém não consegue correr muito. Os aventureiros logo o alcançam. Entretanto, duas figuras mal-encaradas, armadas de tacapes o cercam, prontos para atacá-lo."
    },
    {
      type: "text",
      content: "Criaturas. Capangas x2 (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "Os capangas estão à serviço do verdadeiro culpado pela situação, manipulando os dois comerciantes para se enfrentarem. Entretanto, eles não querem conversa, e sim eliminar pontas soltas. Eles combatem até a morte, com um desapego assustador, e não atacam o trabalhador, preferindo lidar com ele depois."
    },
    {
      type: "text",
      content: "Quando for salvo, o funcionário desaba em lágrimas e, agradecido, fala tudo que sabe. Ele não tem informações que conectam os crimes nem ao hynne, nem a elfa, mas o sacerdote Kirth tem acesso às rotas de distribuição. Além disso, ele também viu Kirth conversando com outros trabalhadores, os convencendo a atacar remessas de Shindantalas. Ele também confessa que é possível encontrar o clérigo em um templo dedicado ao panteão."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 7: CONFRONTO"
    },
    {
      type: "text",
      content: "Apesar de ecumênico, o templo parece deserto. Entrando no local, vocês veem seu interior silencioso, exceto por um ranger metálico. Olhando para cima, há uma corrente pendurada no teto, com o que parece uma jaula em sua extremidade, coberta por um pano. Do seu interior ouve-se rugidos. Conforme entram, os aventureiros também escutam a voz de Kirth ecoando pelo ambiente."
    },
    {
      type: "text",
      content: "“Muito bem, aventureiros. Devo realmente aplaudir seu trabalho. Tenho que admitir que estou impressionado”."
    },
    {
      type: "text",
      content: "O homem começa a bater palmas, mas o som é abafado quando a porta do templo é trancada atrás dos personagens. “Eu adoraria ficar mais e derrotá-los. Porém, tenho outros lugares para estar, conflitos para começar. E, estranhamente, vejo um grande potencial em vocês. Quem sabe, se sobreviverem”."
    },
    {
      type: "text",
      content: "A gaiola se choca contra o chão no meio do salão. Do seu interior sai uma criatura que lembra um peixe, mas tem garras e presas terríveis. E há algo ainda mais aterrador: mesmo de forma indireta, a fera tem em si a corrupção da Tormenta. Aqueles originários do território de Callistia reconhecem o monstro: trata-se de um lursh-lyin, uma fera que aterroriza o Rio dos Deuses. Confuso, faminto e irado, ele ataca!"
    },
    {
      type: "text",
      content: "Criatura. Lursh-lyin predador (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "O lursh-lyin impede qualquer chance de perseguirem o clérigo, e luta ferozmente para se alimentar dos aventureiros. Após o combate, a igreja volta ao silêncio até que a guarda derruba a porta, chegando tarde demais para ajudar, enviadas por Shindantal e Dingo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo: FOI BOM FAZER NEGÓCIOS COM VOCÊ"
    },
    {
      type: "text",
      content: "Os sacerdotes do templo estão amarrados no porão do lugar. Quando a guarda chega, eles são desamarrados e curam ferimentos dos aventureiros. Em seguida, o grupo é procurado por Dingo e Shindantal, juntos."
    },
    {
      type: "text",
      content: "Apesar de surpreendidos por descobrirem que o conselheiro trabalhava para ambos, ocultando seus próprios interesses, os rivais estão contentes de terem descoberto a verdade antes que algo pior fosse feito. Sabendo disso, elfa e hynne conversam e fazem as pazes, inclusive combinando alguma colaboração entre seus produtos."
    },
    {
      type: "text",
      content: "Kirth, por outro lado, desaparece. Suas verdadeiras intenções, e o objetivo de seu plano, são mistérios para outro momento. Há uma certeza apenas: um dia ele retornará para atormentar os aventureiros."
    },
    {
      type: "text",
      content: "Confusos, mas vitoriosos, os personagens avançam para o 2º nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs & Criaturas"
    },
    {
      type: "text",
      content: "CAPANGA (ND ½)\nHumanoide (humano) Médio\nIniciativa +3, Percepção +2\nDefesa 13, Fort +5, Ref +3, Von +0\nPontos de Vida 7\nDeslocamento 9m (6q)\nCorpo a Corpo Tacape +10 (1d10+5).\nÍmpeto Agressor O capanga recebe +1d10 na rolagem de dano de seu primeiro ataque na cena.\nFor 3, Des 1, Con 1, Int –1, Sab 0, Car –1\nEquipamento Tacape. Tesouro Metade."
    },
    {
      type: "text",
      content: "LURSH-LYIN PREDADOR (ND 1)\nMonstro Médio\nIniciativa +5, Percepção +3, percepção às cegas (apenas dentro d’água), visão no escuro\nDefesa 15, Fort +6, Ref +6, Von +4\nPontos de Vida 16\nDeslocamento 9m (6q), natação 12m (8q)\nCorpo a Corpo Mordida +11 (1d6+3) e duas garras +11 (1d4+3).\nFrenesi Sangrento Sempre que causa dano com sua mordida, o lursh-lyin recebe um bônus cumulativo de +2 em testes de ataque e rolagens de dano até o fim da cena.\nFor 3, Des 2, Con 1, Int –1, Sab 1, Car –1\nPerícias Atletismo +7, Furtividade +4 (+9 dentro d’água).\nTesouro Padrão."
    }
  ]
  },
  { id: "Marcas da Besta",
  name: "Marcas da Besta",
  theme: "Fantasia e Sobrevivência na Selva",
  image: "/aventuras/marcas-da-besta.png",
  summary: "Contratados para eliminar gnolls saqueadores, os heróis descobrem que os humanoides estão fugindo de um perigo maior. A trilha pela densa floresta os leva a enfrentar perigos naturais e um druida monstruoso devotado a Megalokk.",
  sections: [
    {
      type: "text",
      content: "Às vezes aventureiros iniciantes são contratados para lidarem com ameaças do dia a dia. Seja um animal desaparecido ou um objeto perdido, pequenas missões são o começo de carreira de alguns heróis lendários."
    },
    {
      type: "text",
      content: "Quando se fala de monstros, entretanto, há sempre o risco de se ver envolvido nos planos de Megalokk. Em eras ancestrais, o Deus dos Monstros espalhou suas crias impiedosas por Arton. Após ser derrotado em uma ação conjunta do Panteão, suas feras foram relegadas aos ermos, lugares onde mortais não ousam caminhar."
    },
    {
      type: "text",
      content: "Mas seus servos devotados estão prontos para lembrar seu lugar na cadeia alimentar."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Marcas da Besta é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de personagens de 1º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Contratados para eliminar gnolls aterrorizando as estradas, os aventureiros logo percebem que esses humanoides estão também apavorados. Ao conversar com os homens-hiena descobrem o motivo dos ataques: foram intimidados por um servo monstruoso de Megalokk. Os gnolls prometem parar uma vez que esse inimigo seja eliminado."
    },
    {
      type: "text",
      content: "Para encontrar o covil do vilão, os heróis devem vasculhar a floresta, enfrentando perigos naturais e monstruosos. Após alguns dias e diversos desafios, os heróis descobrem o rastro do verdadeiro “monstro”: um druida devotado à Megalokk. A criatura então usa suas magias e transforma-se, pronto para devorar os aventureiros."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1: RINDO DE NERVOSO"
    },
    {
      type: "text",
      content: "Tudo começa com um contrato simples. Talvez preso em um quadro de avisos ou sob a forma do pedido de um morador angustiado. Gnolls, humanoides com traços de hiena, vêm saqueando viajantes e pilhando propriedades. Os ataques se intensificaram, e já houve ao menos uma morte na estrada. Após receberem a missão, vocês partem, buscando glória ou tibares."
    },
    {
      type: "text",
      content: "Esta parte é intencionalmente vaga, tanto para que grupos diferentes encontrem seus ganchos, como para introduzi-la durante outra aventura. O importante é que os aventureiros já estejam trabalhando como uma equipe e partam pela estrada em busca dos bandidos gnolls. Caso tenham aceitado como missão, são oferecidos T$ 50, para cada um. Alternativamente, se forem atacados pelos gnolls enquanto viajam, podem receber essa recompensa quando passarem pela vila mais próxima."
    },
    {
      type: "text",
      content: "Caso desejem estudar o inimigo antes, podem fazer um teste de Conhecimento ou Sobrevivência (CD 15). Um sucesso revela uma famosa característica: gnolls consideram rendição uma solução honrosa para conflitos. Para cada 5 pontos pelos quais o resultado do teste superar a CD, outra característica é lembrada."
    },
    {
      type: "text",
      content: "Os gnolls aproveitam que a região é cercada por florestas densas para se esconderem. Seus assaltos são rápidos, mais barulhentos e assustadores do que agressivos. Após algumas horas caminhando na estrada, os personagens começam a ouvir gargalhadas vindo da mata."
    },
    {
      type: "text",
      content: "Criaturas. Gnolls capangas x6 (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Apesar de não serem muito fortes, os gnolls avançam em uma investida. Eles usam a habilidade Bote contra o inimigo que parecer melhor protegido (quem estiver de armadura pesada e escudo, por exemplo), pois estão acostumados a derrotar guarda-costas primeiro. Depois disso, sua tática principal é flanquear os aventureiros. Eles não desejam matar ninguém, então evitam agredir aqueles aparentemente frágeis."
    },
    {
      type: "text",
      content: "Quando três gnolls forem derrotados, um deles levanta as mãos e sacode uma bandeira branca. Alternativamente, se dois personagens forem derrotados, ou se renderem, os gnolls também tentam conversar."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2: CONTRATANTES INUSITADOS"
    },
    {
      type: "text",
      content: "Quando os aventureiros abaixam suas armas, os gnolls respiram aliviados. Mesmo se estiverem amarrados ou paralisados! Um deles levanta a mão. “Então... será que podemos pedir sua ajuda?”"
    },
    {
      type: "text",
      content: "Os gnolls derrotados parecem inusitadamente tranquilos. Eles explicam que vêm atacando transeuntes pela via porque foram expulsos da área onde viviam. Admitem seus erros, mas justificam essas ações com seu modo de vida e explicam que tentam não atacar para matar. “A gente oferece rendição, eu juro!”"
    },
    {
      type: "text",
      content: "Se perguntados sobre a ajuda, os gnolls contam que têm os espólios de alguns dos viajantes (role duas vezes na Tabela de Tesouros por Nível de Desafio 1, ignorando resultados nulos). Eles têm dificuldade de descrever o atacante. “Num momento ele tinha chifres, no outro ele tinha garras enormes! Era um verdadeiro monstro!”"
    },
    {
      type: "text",
      content: "Os homens-hiena também explicam que a floresta está mais perigosa, como se a presença desse ser tivesse atraído outras bestas monstruosas. O único meio de encontrar o vilão é se embrenhando na mata e investigando os rastros da fera."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3: PERIGOS FLORESTAIS"
    },
    {
      type: "text",
      content: "A floresta é especialmente densa e sombria. As copas das árvores se confundem umas com as outras, e os raios do sol penetram pouco ou nada. A mata que cobre a região é densa, porém não oferece durante o dia qualquer dificuldade para visão. Talvez essa atmosfera lúgubre seja o normal aqui. A cada passo, a sensação de serem observados é ainda mais presente."
    },
    {
      type: "text",
      content: "Sem saberem exatamente o que estão procurando, e em uma área tão extensa, será necessário um teste estendido de Sobrevivência (CD 25, 5 sucessos). Cada teste representa um dia inteiro de investigação na floresta, e apenas um personagem pode fazer o teste. Os outros membros do grupo podem ajudar, seja com Sobrevivência ou com qualquer outra perícia que consigam justificar. Caso passem no teste estendido, os personagens encontram um rastro. Já uma falha total faz perderem todos os sucessos acumulados até o momento, tendo que recomeçar o teste estendido do zero."
    },
    {
      type: "text",
      content: "Para cada dia investigando a floresta, role 1d8 para um dos eventos abaixo. Cada evento conta como uma cena para efeitos que dependem dessa medida."
    },
    {
      type: "text",
      content: "1) Gorlogg Raivoso: O barulho de patas rapidamente batendo contra a relva anuncia a chegada de algo grande. Correndo de dentro da mata, um gorlogg ensandecido surge numa investida violenta contra os aventureiros! Um gorlogg (Tormenta20, p. 291) ataca o grupo, fazendo uma ação investida. A criatura não tenta ser sutil, logo nenhum personagem fica surpreendido. Infelizmente, por estar faminto, dificilmente poderá ser acalmado, e luta até a morte."
    },
    {
      type: "text",
      content: "2) Armadilha Natural: As folhas e raízes escondem ameaças além dos animais selvagens. Buracos deixados por bichos escavadores, espinheiros disfarçados de arbustos ou uma árvore pronta para cair sobre desavisados. Os perigos nunca acabam em lugares como esses. Escolha entre as armadilhas arame farpado, fosso camuflado ou bloco de pedra (Tormenta20, p 317), ou outra que faça sentido. Antes de serem afetados por ela, todos os personagens têm direito a um teste de Investigação ou Sobrevivência para encontrá-la. Elas são feitas de materiais naturais, e uma vez encontradas podem ser simplesmente evitadas, mas não podem ser desarmadas."
    },
    {
      type: "text",
      content: "3) Círculo de Pedras: No meio das árvores, pilares de pedra se erguem. Na face das rochas há símbolos estranhos, e no centro da área uma clareira se abre. Uma estranha sensação de paz inunda suas almas, e os animais parecem passar aqui com tranquilidade. Druidas percebem naturalmente a conexão desse lugar com Allihanna, a Deusa da Natureza, mas outros só notam isso com um teste de Religião (CD 20). Dormir aqui é seguro, sem chance de encontros aleatórios ou de ataques durante a noite na cena 5. Além disso, recupera-se o dobro de PV e PM descansando aqui."
    },
    {
      type: "text",
      content: "4) Foi você?: Enquanto caminham, vocês sentem um fedor terrível. Olhando ao redor vêem um gambá muito nervoso. O gambá (NPCs & Criaturas) usa sua habilidade almíscar fedorento contra os personagens, e depois tenta fugir."
    },
    {
      type: "text",
      content: "5) Teia Cáustica: Há algo de errado aqui. O cheiro nessa área é acre, queimando as narinas, e um chiado estranho é ouvido de tempos em tempos. A área é coberta por uma teia ácida. Todos os personagens devem fazer um teste de Investigação ou Percepção (CD 16) ou ficam enredados e sofrem 1d6 pontos de dano de ácido, mais 1d6 a cada rodada que começarem enredados. Para se soltar é necessário usar uma ação completa e fazer um teste de Força ou Acrobacia (CD 20), ou cortar a teia (que tem 15 PV e RD 5). Em 1d3 rodadas, uma dracnídea cáustica (NPCs & Criaturas) aparece, pronta para devorar os personagens."
    },
    {
      type: "text",
      content: "6) Agora tem que ser você!: Vocês sentem novamente um cheiro ruim, talvez imaginem que o gambá está de volta. Porém, agora é algo maior e mais perigoso: um trog caçando sua próxima refeição! Um trog malcheiroso e mal-humorado ataca os aventureiros (Tormenta20, p. 291)."
    },
    {
      type: "text",
      content: "7-8) Calmaria: Apesar da sensação de haver algo errado, nada digno de nota acontece nesse dia. Nenhum evento ou combate."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4: MONSTROS"
    },
    {
      type: "text",
      content: "Seguir os rastros leva para o fundo da mata, a parte ainda mais fechada e assustadora. É possível ver carcaças de animais e monstros diversos, de vários tamanhos."
    },
    {
      type: "text",
      content: "É possível analisar as carcaças com um teste de Cura ou Sobrevivência (CD 17). Esse teste funciona como o uso de identificar criatura de Misticismo (Tormenta20, p. 121). A destruição causada denota um contexto ritualístico, como se as criaturas fossem algum tipo de oferenda. Um teste de Religião (CD 20) revela uma ligação com o Deus dos Monstros, Megalokk. Um druida é capaz de reconhecer um semelhante, e as ações, apesar de animalescas, têm o objetivo de atrair mais monstros, tal qual a dracnídea. Essa investigação é interrompida por um urro."
    },
    {
      type: "text",
      content: "Do meio da mata surge uma figura com cabeça bovina, dois enormes chifres retorcidos se projetam da cabeça da criatura. Seu corpo é coberto de pelos grossos e escuros, os dentes são presas afiadas e as mãos garras atrozes. Sua pelagem parece se mesclar com as árvores. O que era um urro se torna uma gargalhada e um sorriso maligno. Ele se agacha, colocando as mãos no chão e andando em quatro apoios, cercando o grupo."
    },
    {
      type: "text",
      content: "Criaturas. A Besta da Floresta (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Apesar de ser inteligente e capaz de falar, a besta não o faz, revertida a um estado de ferocidade selvagem. Ela ainda é capaz de lançar magias, mas assim que possível se transforma em uma criatura monstruosa, com patas terríveis e mantendo ainda seus chifres."
    },
    {
      type: "text",
      content: "O chão cheio de vinhas e raízes conta como um terreno difícil natural. Além disso, existem arbustos na área que podem ser usados para receber camuflagem leve. As árvores também podem oferecer cobertura leve."
    },
    {
      type: "text",
      content: "O minotauro deseja destruir os inimigos que acabaram de aparecer em sua frente, e até agora não encontrou um desafio que não fosse capaz de derrotar com brutalidade. Porém, se perceber que um personagem é devoto de Allihanna ou Tanna-Toh, foca seus ataques contra aquele aventureiro."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo: UMA NOVA AMIZADE"
    },
    {
      type: "text",
      content: "Ao derrotarem o druida, a floresta volta a ter sons normais e os animais parecem menos assustados. Eles têm tempo de voltar tranquilamente à cidade, podendo descansar à vontade. Entretanto, assim que recuperados ouvem gritos de espanto."
    },
    {
      type: "text",
      content: "Ao investigar, os personagens vêem dois gnolls do bando que enfrentaram. Apesar do medo dos aldeões, os homens-hiena estão calmos, de mãos à mostra. Eles trouxeram parte dos espólios roubados, e pedem perdão por ter atacado os viajantes."
    },
    {
      type: "text",
      content: "Talvez esse seja o começo de uma relação diferente entre eles e o povo local. Será que a população local conseguirá perdoá-los? E os gnoll estarão sendo honestos ou isso seria alguma tática?"
    },
    {
      type: "text",
      content: "O futuro incerto dessa possível aliança é tema para outra aventura. Por hora, os personagens avançam para o 2º nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs & Criaturas"
    },
    {
      type: "text",
      content: "GNOLL CAPANGA (ND ¼)\nHumanoide (gnoll) Médio\nIniciativa +3, Percepção +3, faro\nDefesa 14, Fort +5, Ref +3, Von +0\nPontos de Vida 8\nDeslocamento 9m (6q)\nCorpo a Corpo Espada curta +9 (1d6+3, 19) e mordida +9 (1d6+3).\nBote (Completa) O gnoll faz uma investida e ataca com sua espada curta e sua mordida. Os dois ataques recebem o bônus de +2 da investida, mas devem ser feitos contra a mesma criatura.\nFor 3, Des 1, Con 3, Int –1, Sab 1, Car –1\nPerícias Sobrevivência +5.\nEquipamento Armadura de couro, escudo leve, espada curta. Tesouro Metade."
    },
    {
      type: "text",
      content: "GAMBÁ (ND ¼)\nAnimal Minúsculo\nIniciativa +2, Percepção +7, faro, visão na penumbra\nDefesa 10, Fort +3, Ref +5, Von +0\nPontos de Vida 8\nDeslocamento 9m (6q), escalada 9m (6q)\nCorpo a Corpo Mordida +8 (1d4+6).\nAlmíscar Fedorento (Padrão) O gambá expele um jato de almíscar contra uma criatura em alcance curto, que fica enjoada por 1d4 rodadas (Fort CD 13 evita; criaturas com Faro ou Sentidos Aguçados sofrem –5 nesse teste).\nFor 0, Des 2, Con 2, Int –4, Sab 3, Car –2\nTesouro Nenhum."
    },
    {
      type: "text",
      content: "DRACNÍDEA CÁUSTICA (ND 1)\nMonstro Grande\nIniciativa +6, Percepção +2, visão no escuro\nDefesa 16, Fort +5, Ref +11, Von +0, imunidade a ácido, flanquear, paralisia, surpreendido e à magia Teia\nPontos de Vida 35\nDeslocamento 12m (8q), escalar 12m (8q)\nCorpo a Corpo Mordida +9 (2d6+6).\nTece-Ácido (Padrão) A dracnídea dispara uma teia de ácido em uma área de 3m de lado em alcance curto. Criaturas na área sofrem 1d6 pontos de dano de ácido e ficam enredadas (Ref CD 14 reduz o dano à metade e evita a condição). Enquanto estiverem enredadas, sofrem mais 1d6 de dano de ácido no início do turno da dracnídea. Uma criatura pode se soltar com uma ação completa e um teste de Força ou Acrobacia (CD 20) ou cortando a teia (cada espaço de 1,5m de teia tem 15 PV e RD 5). A dracnídea também pode usar a teia para cobrir uma área quadrada de 6m de lado. Uma criatura que entre na área fica enredada e uma criatura que comece seu turno na área sofre 1d6 pontos de dano de ácido. A dracnídea pode andar na própria teia sem se enredar. Ela percebe automaticamente qualquer criatura em sua teia, como se tivesse percepção às cegas.\nFor 5, Des 4, Con 2, Int –5, Sab 0, Car –4\nPerícias Furtividade +9.\nTesouro Nenhum."
    },
    {
      type: "text",
      content: "A BESTA DA FLORESTA (ND 3)\nNascido em uma família abastada do Império de Tauron, esse minotauro se perdeu de sua família quando o Deus da Força foi derrotado por Aharadak. Isolado em uma floresta, acabou sendo acolhido por um xamã de Megalokk, que o criou em meio às feras. Com o tempo o jovem minotauro foi abençoado pelo Deus dos Monstros, usando milagres para se tornar um superpredador.\nHumanoide (minotauro) Médio\nIniciativa +5, Percepção +6, faro\nDefesa 17, Fort +7, Ref +2, Von +13\nPontos de Vida 65\nDeslocamento 9m (6q), sem redução por terreno difícil\nPontos de Mana 11\nCorpo a Corpo Ataque desarmado +12 (1d4+3) e chifre +12 (1d6+3).\nForma Monstruosa (Completa, 3 PM) A Besta da Floresta assume a forma de uma fera. Ela recebe Força +3, +2 na Defesa e um ataque corpo a corpo adicional de garra +12 (1d8+3). Nessa forma, ele não pode falar, empunhar itens ou lançar magias.\nVoz dos Monstros A Besta está sempre sob efeito da magia Voz Divina, apenas para falar com monstros.\nMagias Como um druida de Megalokk de 2º nível (CD 18).\n- Amedrontar (Padrão, 1 PM) Um animal ou humanoide em alcance curto fica apavorado por 1 rodadas e depois abalado (Von reduz para abalado por 1d4 rodadas).\n- Armamento da Natureza (Movimento, 1 PM) O ataque de chifre da Besta se torna mágico e seu dano muda para 1d8+3.\nFor 3, Des 2, Con 2, Int –2, Sab 3, Car –1\nPerícias Adestramento + 4, Atletismo +6, Furtividade +7, Sobrevivência +8.\nTesouro Nenhum."
    }
  ]
  },
  { id: "Mistério na Mansão da Maga",
  name: "Mistério na Mansão da Maga",
  theme: "Fantasia e Investigação",
  image: "/aventuras/misterio-na-mansao-da-maga.png",
  summary: "Convidados à Academia Arcana, os aventureiros recebem a missão de investigar o sumiço de uma ex-aluna em uma pacata vila. O que parecia ser apenas um desaparecimento revela-se um plano nefasto de necromancia nos porões de sua mansão.",
  sections: [
    {
      type: "text",
      content: "A Breves Jornadas oferece aventuras completas de Tormenta20, de forma rápida e descomplicada, com tudo o que você precisa ao alcance das mãos. Fichas específicas são fornecidas, enquanto estatísticas presentes no livro básico terão indicadas a página em que se encontram."
    },
    {
      type: "text",
      content: "O objetivo é fazer com que mestres tenham um ponto de partida eficiente para se divertir por uma tarde ou até começar uma campanha. A aventura de hoje se chama Mistério na Mansão da Maga!"
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
      content: "Magia é uma benção que existe em abundância em Arton. Seja pela presença ativa de Wynna, seja por sua filosofia de nunca negar acesso a essa dádiva, é algo que se espalha mesmo longe de grandes centros urbanos como Valkaria."
    },
    {
      type: "text",
      content: "No interior dos reinos, em vilas esquecidas pelos deuses, magos menos ortodoxos passam suas tradições adiante para estudantes atentos. Bruxos servem como conselheiros e boticários em comunidades distantes. Feiticeiros nascem em famílias sem ancestrais mágicos."
    },
    {
      type: "text",
      content: "Entretanto, nem todos são benevolentes. Existem aqueles que usam a distância das autoridades para realizar planos pérfidos e pesquisas profanas. E quando se tornam uma ameaça, é a hora de aventureiros entrarem em ação."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Resumo da aventura"
    },
    {
      type: "text",
      content: "Mistério na Mansão da Maga é uma Breve Jornada pensada para uma única sessão, mas também serve como ponto de partida para uma campanha. É ideal para um grupo de quatro personagens de 1º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Convidados à Grande Academia Arcana, os personagens serão contratados para investigar o desaparecimento da amiga de uma professora. Serão, então, transportados para uma vila, que os receberá calorosamente. Ao se dirigirem à residência de Lucrécia, a maga desaparecida, deverão investigar os cômodos em busca de pistas. Quando armadilhas e portas secretas aparecem, a busca leva todos a um andar inferior secreto, onde descobrirão as verdadeiras intenções da conjuradora."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1 – À professora, com carinho"
    },
    {
      type: "text",
      content: "Existem diversas formas de introduzir os personagens: conjuradores podem ser alunos da Academia Arcana, convidados por sua professora para uma primeira missão; outra opção é que sejam aprendizes de antigos colegas de aventura da professora; ou apenas mercenários. De um jeito ou de outro, todos são convidados ao campus."
    },
    {
      type: "text",
      content: "Passando por um casebre acima de qualquer suspeita, com uma placa simples de “Escola de Magia”, chega-se ao semiplano em que a instituição se localiza. Os céus são multicoloridos, e seis sóis, cada um representando um elemento, dançam no firmamento."
    },
    {
      type: "text",
      content: "Raschid, o gênio da terra e zelador da Academia, surge para levá-los até o escritório da professora Ysailie. Ela é uma elfa, veste robes formais verdes, um capelo, e sua expression é séria. O escritório não é grande, mas tem espaço para cadeiras confortáveis nas quais pede que todos se sentem. Xícaras flutuam até cada um, acompanhadas por um bule florido que as preenche com chá."
    },
    {
      type: "text",
      content: "O motivo do convite é que uma amiga de longa data, chamada Lucrécia, deixou de responder suas cartas há algumas semanas. Incomodada pelo silêncio repentino, a professora os contatou. Também informa que Lucrécia estudou na Academia Arcana, mas suas ambições não eram acadêmicas."
    },
    {
      type: "text",
      content: "Como pagamento oferece T$ 2000, e uma das suas posses mais valiosas: um Anel da Proteção (Tormenta20, p. 328). Assim que estiverem prontos, a professora traçará símbolos arcanos, abrindo um portal para a vila."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2 – Vila Feliz"
    },
    {
      type: "text",
      content: "Quando cruzam o portal, surpreendem a população local, que para seus afazeres assim que os percebem. Trata-se de um povo amigável e curioso, que logo cerca o grupo, perguntando sobre suas aventuras. Oferecem comida, estadia, descontos, tudo para estes grandes heróis. Assim que comentarem o motivo que os trouxe até ali, todos parecem aliviados em saber que os desaparecimentos vão ser investigados."
    },
    {
      type: "text",
      content: "O estranho é que o povo se refere a diversos casos. Com um teste de Diplomacia ou Investigação, CD 15, o grupo descobre que ao menos cinco jovens sumiram sem deixar rastros, além da maga e seu aprendiz, chamado Andrew."
    },
    {
      type: "text",
      content: "Após toda essa comoção, são levados ao portão da mansão da maga. A propriedade tem um grande quintal com claros sinais de abandono, que rodeia o prédio largo de fachada magnífica, com dois andares."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3 – Salão principal"
    },
    {
      type: "text",
      content: "As portas duplas da entrada principal estão destrancadas e levam a um salão amplo, com um pé direito muito alto. Do lado direito e esquerdo existem portas que levam para fora deste aposento."
    },
    {
      type: "text",
      content: "No centro, sobre um pedestal redondo, há uma estátua de uma mulher com mãos suplicantes para o alto, quase tocando o teto. Qualquer um treinado em Religião notará que se trata de uma representação de Valkaria."
    },
    {
      type: "text",
      content: "Com um sucesso em Investigação ou Percepção CD 25, notam que a estátua no centro é um tipo de construto mágico, usado para tomar conta de um lugar importante. Através de um teste de Misticismo CD 17 sabem que essa estátua não agirá até ser provocada com alguma ação agressiva, como ataques diretos, magias que exijam um teste de resistência, e afins."
    },
    {
      type: "text",
      content: "Criaturas. Efígie Animada (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Não sendo provocada, a efígie permanecerá imóvel. Abrir a porta secreta (Cena 10) ativa a estátua, que atacará assim que voltarem ao salão principal."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4 – Corredor perigoso"
    },
    {
      type: "text",
      content: "Saindo do salão, terão acesso ao corredor que dá a volta ao redor do aposento. À esquerda está a porta da biblioteca (Cena 5) e à direita a da cozinha (Cena 6). Porém, caso sigam pelo corredor, serão surpreendidos."
    },
    {
      type: "text",
      content: "Do lado esquerdo existe um Fosso Camuflado (Tormenta20, p. 302), uma armadilha escondida sob o carpete. Na direita, escondida na parede, há uma armadilha de Virote (Tormenta20, p. 302). Essas armadilhas afetam apenas o personagem que estiver andando a frente."
    },
    {
      type: "text",
      content: "Caso tenham encontrado ou sofrido os efeitos de uma das armadilhas, todos recebem +2 em Investigação para encontrar e desarmar a segunda."
    },
    {
      type: "text",
      content: "Os corredores se encontram atrás do salão principal, diametralmente oposto à porta de entrada, onde há uma escada que leva aos andares superiores. Entretanto, com um teste de Investigação ou Misticismo CD 15 é possível encontrar um mecanismo mágico, na base da escadaria, onde há uma fechadura."
    },
    {
      type: "text",
      content: "A fechadura é complexa e está sob efeito da magia Tranca Arcana (Misticismo CD 16 para Identificar Magia). Para abrir é necessário um teste de Ladinagem CD 40, dissipar o feitiço, usar a mesma magia de forma aprimorada, ou, é claro, utilizar a chave adequada (na Cena 8)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5 – A Biblioteca Inocente"
    },
    {
      type: "text",
      content: "Do lado esquerdo da residência existe uma biblioteca formidável, com paredes cobertas de livros. Os temas, porém, são um tanto… curiosos, como o Plantio de Gerânios 4ª Edição. Estranhamente, não há nenhum livro sobre magia."
    },
    {
      type: "text",
      content: "Se passarem algum tempo procurando, é possível encontrar 4 livros Aprimorados (+2 em uma perícia). As perícias, entretanto, são escolhidas aleatoriamente (Tabela 6-5, Tormenta20, p. 265), mas não há nenhum livro Aprimorado para as perícias Luta, Misticismo ou Pontaria. Procurar o livro de uma perícia específica requer um teste de Investigação CD 20."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 6 – Panela Barulhenta"
    },
    {
      type: "text",
      content: "Na extremidade oposta da biblioteca está a cozinha. O ambiente é bastante limpo, como se ninguém nunca tivesse usado o local, mas quando entram no cômodo, ouvem um barulho vindo de uma panela enorme, com tampa. Ao se aproximarem, um Glop salta lá de dentro."
    },
    {
      type: "text",
      content: "Criatura. Glop (Tormenta20, p. 272)."
    },
    {
      type: "text",
      content: "Assustada, a criaturinha pode ser tranquilizada com um teste de Adestramento, CD 25, ou oferecendo algum tipo de comida para ela. Se fizerem ambos, o Glop se torna um aliado, fornecendo +1d4 de dano de ácido nos ataques corpo a corpo de um personagem."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 7 – Laboratório"
    },
    {
      type: "text",
      content: "Subindo a escadaria, o andar possui três salas, uma grande à direita e duas menores à esquerda."
    },
    {
      type: "text",
      content: "À direita, através de portas duplas, encontra-se um laboratório de estudo arcano. O local é organizado e esterilizado, com substâncias em diversos recipientes, assim como anotações arcanas em quadros negros e papéis. Analisando os escritos com Misticismo CD 10, é perceptível que são fórmulas básicas, provavelmente escritas pelo aprendiz da maga."
    },
    {
      type: "text",
      content: "Os textos podem ser usados como 4 pergaminhos: 1 de Armadura Arcana, 2 de Setas Infalíveis de Talude e 1 de Dissipar Magia. Além disso, entre os frascos existem 6 Essências de Mana, rotulados."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 8 – Quarto de Lucrécia"
    },
    {
      type: "text",
      content: "Uma das duas salas menores é um quarto luxuoso, com uma enorme cama com dossel. Aqui há um armário repleto de vestidos elegantes (que equivalem a Trajes de Corte), uma penteadeira e um quadro meio torto. O quadro retrata uma mulher de sorriso misterioso, longos cabelos negros e robes brancos."
    },
    {
      type: "text",
      content: "Na penteadeira estão as cartas de Ysailie, 3 Bálsamos Restauradores e uma planta baixa da propriedade, com um círculo na escada (o que fornece um bônus de +5 em Investigação para achar a passagem secreta). Se ajeitarem o quadro, uma chave pesada de cobre cai no chão, fazendo muito barulho. Caso ninguém mexa na pintura, peça um teste de Investigação ou Percepção CD 15 para revelar a chave. Esta chave mágica abre a passagem secreta."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 9 – Aposentos do Aluno"
    },
    {
      type: "text",
      content: "Menor que as outras salas, com espaço apenas para uma cama e uma escrivaninha, esse quarto é simples e confortável. Em cima da escrivaninha é possível ver um livro com capa de couro."
    },
    {
      type: "text",
      content: "Investigando o volume, descobrirão que trata-se do diário do aprendiz de Lucrécia, Andrew, que se intitulou “o azul”. Aqui ele fala principalmente o quão agradecido é à sua mentora e sobre sua rotina. Nas páginas finais, entretanto, descreve que sua tutora está cada vez mais estranha, se recolhendo em uma sala secreta. Também diz que aproveitará uma viagem dela para ver o que está escondendo. O último parágrafo, rabiscado com pressa, diz:"
    },
    {
      type: "text",
      content: "“Não acredito no que vi. Como minha mestra pode ter feito aquilo? Vou esconder a cópia da chave atrás da pintura dela e fugir. Que Wynna tenha misericórdia de mim.”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 10 – O Verdadeiro Laboratório"
    },
    {
      type: "text",
      content: "Ao abrir a fechadura, seja através da chave mágica ou com muita sorte, o grupo encontra uma passagem para baixo. Descendo, chegam a uma saleta com portas duplas, iluminada por velas mágicas. Através das portas, há um outro laboratório."
    },
    {
      type: "text",
      content: "No centro da sala existem cinco macas com corpos preservados, porém com cheiro de decomposição. As paredes e o piso estão cobertos de escritas arcanas, que, com um teste de Misticismo ou Religião CD 15, revelam-se de cunho necromântico. Do outro lado da sala existe mais um par de portas que levam à Cena 11."
    },
    {
      type: "text",
      content: "Quando todos estiverem dentro da sala, os cadáveres levantam-se."
    },
    {
      type: "text",
      content: "Criaturas. Zumbi x5 (Tormenta20, p. 284)."
    },
    {
      type: "text",
      content: "Quando o combate acaba, é possível investigar as inscrições mais atentamente. Decifrar os códigos requer um Teste Estendido de Misticismo (CD 20, 3 sucessos exigidos antes de 3 falhas). Tendo sucesso, o plano de Lucrécia fica claro: realizar um ritual que transformaria todos na vila em mortos-vivos sob seu comando, e utilizá-los para se vingar dos professores que crê terem causado sua expulsão da Academia Arcana."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 11 – O Aprendiz"
    },
    {
      type: "text",
      content: "A última sala no subsolo é também uma biblioteca, bem menor, porém totalmente dedicada à magia. Há uma mesa no centro da sala, com diversos livros abertos, mas, subitamente, um esqueleto, vestindo robes azuis e uma tiara que brilha intensamente, começa a conjurar um feitiço."
    },
    {
      type: "text",
      content: "Criatura. Andrew, o azul."
    },
    {
      type: "text",
      content: "Assim que o mago morto começa a gesticular para conjurar qualquer magia, a tiara em sua testa brilha. Um teste de Intuição ou Misticismo CD 20 revelará que ela exerce algum tipo de controle sobre o mago. Para destruí-la, devem usar a manobra Quebrar (Tormenta20, p. 220) contra o mago. A tiara possui RD 5 e 15 PVs."
    },
    {
      type: "text",
      content: "Se a quebrarem ou conjurarem Dissipar Magia, Andrew recupera sua consciência. Chocado em descobrir-se um morto-vivo, agradece por o libertarem e conta que, quando descobriu os planos da sua mestra, tentou fugir, mas ela deve tê-lo pegado e o transformado. Andrew também desativa a efígie no salão de entrada."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo – A queda da casa de Lucrécia"
    },
    {
      type: "text",
      content: "Vencendo o aprendiz, ou o libertando do controle mental, o grupo agora sabe que a maga tinha, na verdade, interesses nefastos. Mas será que devem revelar à população? Uma informação como essa os tornará menos receptivos, talvez até hesitantes quanto à magia."
    },
    {
      type: "text",
      content: "Se disserem que encontraram os desaparecidos (ou os restos mortais de alguns deles), toda a vila ficará eternamente grata. Antes de voltarem a Valkaria, serão tratados como campeões, dormindo nas mais confortáveis tavernas."
    },
    {
      type: "text",
      content: "Ysailie mal acredita no relato. Por que sua amiga estaria levantando os mortos? Por que nunca falou sobre seu ressentimento? Apesar de decepcionada, ela paga o prometido aos personagens, perguntando àqueles que não são alunos se desejam ingressar na Academia Arcana."
    },
    {
      type: "text",
      content: "Vocês avançam ao 2º nível, com uma professora oferecendo a chance de juntarem-se a maior instituição de ensino em Arton. Mas quais serão os planos de Lucrécia? Só o futuro pode revelar esses segredos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPC & Criaturas"
    },
    {
      type: "text",
      content: "EFÍGIE ANIMADA (ND 2)\nConstruto 5, Grande\nIniciativa +4, Percepção +4, visão no escuro\nDefesa 17, Fort +8, Ref +4, Von +2, resistência a dano 5\nPontos de Vida 45\nDeslocamento 9m (6q)\nCorpo a Corpo 2 pancadas +12 (1d8+6)\nImobilidade. Uma efígie animada pode permanecer completamente imóvel. Se ela estiver assim, um personagem deve passar num teste de Percepção (CD 35) para perceber que ela é uma criatura e não uma estátua.\nFor 22, Des 10, Con 18, Int -, Sab 10, Car 1\nTesouro. Nenhum"
    },
    {
      type: "text",
      content: "ANDREW, O AZUL (ND 2)\nAndrew nasceu na vila antes de Lucrécia instalar-se na mansão. Era um jovem faminto por conhecimento, e quando a maga chegou, logo percebeu seu talento nato. Infelizmente foi transformado em morto-vivo quando descobriu os planos dela.\nOsteon 6, Médio\nIniciativa +7, Percepção +3, visão no escuro\nDefesa 18, Fort +5, Ref +5, Von +5, resistência a corte, frio e perfuração 5\nPontos de Vida 30\nDeslocamento 9m (6q)\nPontos de Mana 22\nRaio Arcano (Padrão). Andrew dispara um raio num alvo em alcance curto que causa 2d6+4 pontos de dano de essência. O alvo pode fazer um teste de Reflexos (CD 17) para reduzir o dano à metade.\nMagias. 1º — Armadura Arcana (já contabilizado nas estatísticas acima), Seta Infalível de Talude; 2º — Conjurar Mortos-Vivos, Dissipar Magia. CD 17.\nFor 10, Des 14, Con 12, Int 18, Sab 10, Car 12\nPerícias. Misticismo +9\nTesouro. Dobro"
    }
  ]
  },
  { id: "Kobolds Me Mordam!",
  name: "Kobolds Me Mordam!",
  theme: "Aventura Épica e Monstrinhos Engraçados",
  image: "/aventuras/kobolds-me-mordam.png",
  summary: "A ascensão de Kallyadranoch empodera as criaturas mais inusitadas de Arton: kobolds! Heróis são guiados por uma druida em apuros para proteger uma vila de centauros, apenas para descobrir que uma nova e perigosa liderança kobold tomou o poder.",
  sections: [
    {
      type: "text",
      content: "Dentre as muitas coisas acarretadas pela queda de Glórienn, a ascensão do Deus dos Dragões, Kallyadranoch, é uma das mais marcantes. Antes conhecido como “O Terceiro”, aquele também conhecido como o Deus do Poder influencia de forma insidiosa todos que buscam sobrepujar outros seres. Seja através de sua capacidade pessoal, ou através do controle, ele abençoa aqueles capazes de mostrarem-se superiores aos outros."
    },
    {
      type: "text",
      content: "É curioso que sua ascensão tenha influenciado também algumas das criaturas mais ordinárias de Arton: os kobolds, pequenos monstrinhos draconianos, considerados pouco mais que pragas. Aventureiros iniciantes muitas vezes os enfrentam sem pensar duas vezes, e vilões os usam de capangas dispensáveis. Entretanto, de tempos em tempos, indivíduos únicos tomam o poder da narrativa para si mesmos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Kobolds me mordam! é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 3º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Uma druida meia-elfa está buscando aventureiros. Apesar de bem intencionada, os moradores do vilarejo já tiveram desentendimento com caçadores de uma comunidade de centauros onde ela vive. Ela informa aos personagens que um grupo de kobolds até recentemente irritantes, mas não perigosos, vem atacando os centauros. Neste momento, kobolds atacam o lugar, mostrando-se especialmente violentos."
    },
    {
      type: "text",
      content: "Quando chegam à tribo de centauros, muitos estão feridos. Entretanto, o líder dos caçadores reclama por ela ter se intrometido, mas é possível convencê-lo a ajudar. Então o grupo parte para o esconderijo dos kobolds, enfrentando uma versão agigantada dos monstrinhos, lidando com armadilhas feitas pelas pestinhas e, finalmente, encarandor o novo líder kobold, abençoado por Kallyadranoch!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1: PENÉLOPE DE ALLIHANNA"
    },
    {
      type: "text",
      content: "A vila de Cascarvalho é simples. Seus habitantes, majoritariamente fazendeiros e alguns artesãos, costumam ter pouco com o que se preocupar, exceto eventuais cobradores de impostos. Animais selvagens e um eventual monstro errante servem de assunto por meses, e aqueles com disposição para aventurarem-se logo partem do lugarejo. O dia parece mais um de tantos, com pessoas caminhando para trabalhar e saudando os conhecidos... exceto pela mulher vestindo trajes feitos de planta e peles, discutindo em voz alta."
    },
    {
      type: "text",
      content: "A jovem mulher é uma meia-elfa druida, e está falando com o que parecem guardas e o burgomestre, um homem mais velho vestido em roupas um pouco melhores. “Eu compreendo que os centauros e o senhor tenham se desentendido no passado, mas...” O burgomestre irritado a interrompe: “Minha jovem, os caçadores deles já intimidaram nossos homens várias vezes. Como confiar que isso não é uma forma de truque?” Ela retruca: “Senhor, seus homens estavam caçando em local sagrado! E eles não teriam nada a ganhar com isso. Os kobolds andam perigosos. Não sei o que houve com eles, mas estão atacando, não apenas de forma mais organizada, mas também mais violenta.”"
    },
    {
      type: "text",
      content: "A conversa não parece progredir a partir daí, e se os personagens não intervirem, os guardas começam a escoltar a jovem druida para fora da vila. Caso se intrometam, ela logo se apresenta como Penélope, uma sacerdotisa de Allihanna. Após se apresentar, ou enquanto estiver sendo levada para fora, o som de confusão começa: coisas quebrando e pessoas gritando. Como se surgidos do próprio chão, vários kobolds atacam a vila!"
    },
    {
      type: "text",
      content: "CRIATURAS. Enxame kobolds x2 (Tormenta20, p. 310)."
    },
    {
      type: "text",
      content: "Caso tenham conversado com Penélope, ela serve como uma parceira médica iniciante. Diversos kobolds atacam em bando, e cabe aos aventureiros enfrentarem essa maré de monstrinhos. Se um dos personagens for kallyanach ou kobold, os inimigos evitarão atacá-los, porém, se for centauro, será o principal alvo. É um combate difícil, mas se um dos enxames for derrotado, o outro foge se for reduzido à metade dos pontos de vida originais."
    },
    {
      type: "text",
      content: "Penélope está impressionada com a habilidade dos heróis, e o burgomestre se vê obrigado a concordar que os kobolds são um perigo para ambas as comunidades. Ele oferece aos aventureiros uma recompensa de T$ 200, assim como duas essências de mana para cada um. Penélope cura todos os PV perdidos no combate."
    },
    {
      type: "text",
      content: "Assim que estiverem prontos, a sacerdotisa guia-os até sua vila."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2: TURRÃO"
    },
    {
      type: "text",
      content: "O caminho é tranquilo, especialmente porque todos os animais selvagens parecem respeitar a presença de Penélope. A meia-elfa faz pausas para que todos descansem e oferece água, sabendo que nem todos conseguem manter seu ritmo de viagem. Quando o entardecer se aproxima, vocês veem ao longe as construções simples da aldeia, casas feitas com madeira cortada rusticamente e tetos de palha."
    },
    {
      type: "text",
      content: "É uma comunidade bem simples. A maioria dos membros ou caça ou colhe, permitindo algum nível de mobilidade da comunidade. Existe, entretanto, uma pequena plantação de legumes, indicando algum tempo de permanência. Os moradores, todos centauros, estão apreensivos com a chegada de estranhos, mesmo acompanhados da druida. Não há uma pessoa aqui sem ferimentos ou curativos, e muitos estão repousando dentro das casas."
    },
    {
      type: "text",
      content: "Quando a notícia da chegada se espalha, um centauro muito alto, portando uma lança imensa feita dos ossos de uma criatura, para na frente de vocês. “Penélope! Por que você trouxe esses forasteiros aqui? Não basta os ataques das pestes dos kobolds? Respeitamos você pela devoção a Allihanna, mas ainda assim você não é uma de nós!”"
    },
    {
      type: "text",
      content: "Penélope respira fundo e responde alto também: “Pátroclo, seu teimoso! Esses aventureiros combateram os kobolds em Cascarvalho, e se ofereceram para ajudar! Deixa de ser tão cabeça dura!”"
    },
    {
      type: "text",
      content: "Pátroclo parece irredutível. Ele não confia nos heróis e não irá agredi-los, mas não vai permitir que descansem na aldeia. Como é o chefe, ninguém o desafiará. Convencê-lo das boas (ou, ao menos, vantajosas) intenções dos aventureiros é um teste estendido de Diplomacia ou Enganação, oposto à Vontade do centauro (+8). Outras perícias, de acordo com o mestre, podem ser usadas, mas causam uma penalidade de –2 no teste. Centauros e devotos de Allihanna recebem +2 no teste, enquanto kobolds sofrem –2. Os personagens precisam de apenas um sucesso para que ele não se oponha ao descanso do grupo na aldeia."
    },
    {
      type: "text",
      content: "Entretanto, se conseguirem três sucessos antes de uma falha total, convencem o centauro teimoso a ajudá-los, como um parceiro fortão veterano."
    },
    {
      type: "text",
      content: "Se conseguirem dormir na aldeia, são bem alimentados e descansam de forma luxuosa, apesar da simplicidade do local. Se tiverem de repousar ao relento, devem preparar acampamento normalmente. Penélope os acompanhará até o final desta jornada."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3: PAPO CABEÇA"
    },
    {
      type: "text",
      content: "Descansados, Penélope os guia através da floresta, até uma enorme caverna. Porém, na entrada dela, há uma criatura grande como um ogro, mas com as características reptilianas dos kobolds. Além disso, sua cabeça é muito menor do que seu corpo avantajado. A criatura está dormindo profundamente, a ponto de roncar alto, deixando quase nenhum espaço para passar."
    },
    {
      type: "text",
      content: "A criatura é um kobold bruto, uma versão infundida de poder, usado como guardião para outros mais frágeis da sua espécie. Passar sem despertá-lo é uma tarefa complicada."
    },
    {
      type: "text",
      content: "Para isso, cada personagem deve fazer um teste de Furtividade oposto à Percepção dele (veja NPCs e Criaturas). Por estar dormindo, ele sofreria –10 de penalidade no teste de Percepção, mas como terão de se esgueirar encostando nele, contra criaturas médias, ele sofre uma penalidade de apenas –5, enquanto contra criaturas pequenas ele sofre a penalidade total. Criaturas grandes não conseguem passar com ele dormindo, e se tentarem o despertam imediatamente."
    },
    {
      type: "text",
      content: "CRIATURAS. Kobold bruto (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Se qualquer um dos personagens falhar no teste, o kobold bruto desperta. O monstro não é muito inteligente, porém combate com o dever de proteger os seus. O bruto vai perseguir os aventureiros para fora da caverna, sofrendo a desvantagem da sensibilidade à luz. Tendo lidado com ele, direta ou indiretamente, o grupo pode avançar pelos corredores."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4: ISSO É OBVIAMENTE UMA ARMADILHA"
    },
    {
      type: "text",
      content: "O corredor é completamente escuro e o cheiro no seu interior é nauseante. A sujeira por todos os cantos atrapalha a caminhada. Esse túnel tem vários metros, largo o suficiente para uma criatura enorme passar por ele. Os kobolds se aproveitaram dele para fazer seu esconderijo, atraídos pela energia dracônica do local. Porém, aqui usaram de toda sua engenhosidade rústica: este corredor possui duas armadilhas."
    },
    {
      type: "text",
      content: "O primeiro é um barril cheio de insetos venenosos, chamados por eles de “bugulentos”. As duas pessoas na dianteira do grupo de aventureiros serão afetados pela armadilha (podendo fazer o teste de Reflexos)."
    },
    {
      type: "text",
      content: "BARRIL DE BUGULENTOS A vítima perde 1d12 pontos de vida por veneno quando a armadilha é acionada e no início de cada um de seus turnos, até se livrar dos bugulentos, o que exige uma ação completa e um teste de Acrobacia (CD 10). Os bugulentos também são eliminados se a vítima ficar em chamas. Reflexos CD 20 evita; Investigação/Ladinagem CD 20; ND ½."
    },
    {
      type: "text",
      content: "Essa armadilha é a mais perigosa das duas, enquanto a segunda é mais útil. Penduradas em barbantes quase invisíveis estão diversas latas cheias de pedras, prontas para fazer um barulhão caso os personagens não sejam cuidadosos."
    },
    {
      type: "text",
      content: "SINOS ALARMANTES Todas as criaturas em alcance longo são alertadas pelo dispositivo e, até o fim da cena, nenhum kobold nesta área pode ser surpreendido; Reflexos CD 15 evita; Investigação/Ladinagem CD 15; ND 1/4."
    },
    {
      type: "text",
      content: "Todos os personagens devem fazer o teste de Reflexos, e se algum falhar, ativa a armadilha. Caso o kobold bruto não tenha sido derrotado, ele ressurge agora, partindo para combater os aventureiros. Além dele, um enxame kobold (Tormenta20, p. 310) também ataca o grupo."
    },
    {
      type: "text",
      content: "Se o bruto tiver sido derrotado, apenas o enxame ataca. Além disso, se falharem no teste de Reflexos dos sinos, os inimigos na cena 5 saberão da chegada dos aventureiros."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5: QUEM MANDA AQUI"
    },
    {
      type: "text",
      content: "O corredor continua, agora sem mais armadilhas. Logo as paredes se alargam para uma imensa câmara circular, com uma pedra mais alta projetando-se tal qual uma sacada. Vocês veem dezenas de kobolds empurrando uns aos outros, e um vulto muito grande no chão perto da parede oposta à entrada. No alto da pedra há um kobold diferenciado. As roupas que veste são trapos melhores, como se rasgados de roupas finas e multicoloridos. Quando ele fala, todos os outros se calam para ouvir."
    },
    {
      type: "text",
      content: "Aqueles treinados em Religião sabem que este kobold notável é um sacerdote de algum tipo, e devotos de Kallyadranoch reconhecem a devoção de seu deus. Se tiver sido alertado pela armadilha de sinos alarmantes, Groko, o clérigo kobold, atiçará seus lacaios em direção aos personagens."
    },
    {
      type: "text",
      content: "CRIATURAS. Groko de Kallyadranoch (NPCs e Criaturas) e enxame kobold (Tormenta20, p. 310)."
    },
    {
      type: "text",
      content: "Essa cena é uma confusão, e mesmo estando numa plataforma elevada, as habilidades de Groko com alcance curto afetam criaturas no chão, e vice-versa. O teste para escalar até onde ele está é CD 15, e é necessário percorrer 5 metros. Se subirem para a pedra, os kobolds focarão seus ataques em quem estiver mais próximo de Groko. Porém, se Groko for derrotado, os kobolds restantes se rendem."
    },
    {
      type: "text",
      content: "Além disso, quando adentram o ambiente, é possível ver que o vulto se trata de uma serpe (Tormenta20, p. 293), acorrentada ao chão. A fera está machucada, tendo apenas metade dos seus PV (100), enredada e caída. Se alguma criatura entrar em seu alcance, ela faz um ataque corpo a corpo de mordida, mas não com o ferrão. É possível soltá-la das correntes com um teste de Ladinagem (CD 20), ou destruindo a corrente (Def 15, RD 10, 5 PV). Se liberta, ataca o enxame kobold, devorando-o e em seguida fugindo."
    },
    {
      type: "text",
      content: "Assim que o combate termina, o grupo pode vasculhar a sala, encontrando o equivalente a dois encontros de ND 4 (veja Tormenta20, tabela 8-1: tesouro por nível de desafio, na página 328)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo: DRAGÃO"
    },
    {
      type: "text",
      content: "Ao derrotarem Groko, Penélope respira aliviada. Apesar de saber que as criaturas são seres vivos como ela, era necessário vencê-los para garantir a segurança tanto dos centauros quanto de Cascarvalho. Quando retornam, todos os recebem como heróis."
    },
    {
      type: "text",
      content: "Entretanto, dias depois, uma figura entra novamente na caverna. Um homem alto, trajando mantos roxos. Ele observa os rastros deixados pela batalha, e pisa no cadáver de Groko. “É isso que acontece quando você manda uma pulga fazer o trabalho de um dragão...”"
    },
    {
      type: "text",
      content: "E os personagens avançam para o 4º nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs e Criaturas"
    },
    {
      type: "text",
      content: "KOBOLD BRUTO (ND 4)\nMonstro (kobold) Grande\nINICIATIVA +5, PERCEPÇÃO +2, visão no escuro\nDEFESA 23, FORT +16, REF +10, VON +2\nPONTOS DE VIDA 120\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Tacape +16 (1d12+18).\nESCAMAS DE KALLY Todo dano que o kobold bruto sofre é reduzido à metade.\nPESTE OPORTUNISTA Os ataques do kobold causam +1d4 pontos de dano contra inimigos que já sofreram dano na rodada.\nCABECINHA A habilidade Escamas de Kally não se aplica a acertos críticos e ataques contra a cabeça diminuta do kobold (Defesa 33).\nSENSIBILIDADE A LUZ Quando exposto à luz do sol ou similar, o kobold bruto fica ofuscado.\nFor 6, Des 1, Con 4, Int –3, Sab –2, Car –2\nPERÍCIAS Atletismo +10.\nEQUIPAMENTO Tacape aumentado. TESOURO Metade."
    },
    {
      type: "text",
      content: "GROKO DE KALLYADRANOCH (ND 3)\nMonstro (kobold) Pequeno\nINICIATIVA +5, PERCEPÇÃO +6, visão no escuro\nDEFESA 20, FORT +3, REF +9, VON +15, resistência a magia +1\nPONTOS DE VIDA 69\nDESLOCAMENTO 9m (6q)\nPONTOS DE MANA 15\nCORPO A CORPO Lança +12 (1d8+3) e mordida +12 (1d4+3).\nÀ DISTÂNCIA Funda +12 (1d6+3).\nAURA DE MEDO (LIVRE, 2 PM) Groko gera uma aura de medo de 9m de raio e duração cena. Todos os inimigos que entram na aura ficam abalados até o fim da cena (Von CD 19 evita) e a criatura não pode mais ser abalada por esta habilidade por um dia.\nPESTE OPORTUNISTA Os ataques de Groko causam +1d4 pontos de dano contra inimigos que já sofreram dano na rodada.\nSÍMBOLO SAGRADO ENERGIZADO (MOVIMENTO, 1 PM) Groko energiza seu símbolo sagrado. Até o fim da cena, ele emite uma luz avermelhada que ilumina como uma tocha e, enquanto estiver sendo empunhado pelo Groko, reduz o custo de magias divinas em –1 PM.\nMAGIAS Como um clérigo de Kallyadranoch de 3º nível (CD 19).\n- Curar Ferimentos (Padrão, 3 PM) Uma criatura adjacente cura 4d8+4 PV.\n- Escudo da Fé (Reação, 1 PM) Quando uma criatura em alcance curto sofre um ataque, ela recebe +2 na Defesa até seu próximo turno.\n- Perdição (Padrão, 1 PM) Criaturas escolhidas em alcance curto sofrem –1 em testes de ataque e rolagens de dano até o fim da cena.\nSENSIBILIDADE A LUZ Quando exposto à luz do sol ou similar, Groko fica ofuscado.\nFor 0, Des 2, Con 1, Int –1, Sab 3, Car –1\nPERÍCIAS Cura +6, Furtividade +9, Misticismo +2, Religião +6.\nEQUIPAMENTO Andrajos, bálsamo restaurador, funda, gadanho, pedras x20, símbolo sagrado de Kallyadranoch. TESOURO Metade."
    }
  ]
  },
  { id: "O 7º Filho",
  name: "O 7º Filho",
  theme: "Melodrama, Segredos e Lobisomens",
  image: "/aventuras/o-7-filho.png",
  summary: "Uma telenovela fictícia ambientada na serra, onde os filhos do velho patriarca Sebastião retornam a Nova Harz. Entre dramas familiares, conflitos urbanos contra rurais e amores fracassados, a maldição do lobisomem espreita as noites de lua cheia.",
  sections: [
    {
      type: "text",
      content: "Este “roteiro” foi pensado para RPGs de melodrama como Pasión de Las Pasiones. Ele contém sugestões de trama, personagens e locais que podem ser usados para criar um episódio avulso ou a temporada inteira de uma telenovela fictícia."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "VEM AÍ..."
    },
    {
      type: "text",
      content: "A música Eu era um lobisomem juvenil começa a tocar. Entra a abertura da telenovela em desenho-animado com traços grossos, cores suaves e animações repetitivas. Vemos as rodas de um ônibus girando. Então, o veículo subindo estradas em zigue-zague em meio à neblina típica de serra. Dentro do ônibus, um homem dorme encostado na janela, enquanto um menino observa a paisagem com olhos arregalados. A neblina se abre e revela a placa de uma cidadezinha: Nova Harz."
    },
    {
      type: "text",
      content: "Surgem chalés com fumaça nas chaminés, um restaurante de comida alemã, a catedral neogótica no alto da colina. Pessoas caminham sob a garoa, agasalhadas. Algumas olham com desconfiança. O ônibus para em frente a um chalé torto, isolado, com grama alta no entorno e uma portinhola batendo ao vento. Na varanda, um velho barbudo cospe no chão e afina um violão."
    },
    {
      type: "text",
      content: "Em seguida, uma montagem de cenas do cotidiano. Um homem se cortando ao rachar lenha. Duas comadres fofocando. Vizinhos dividindo uma cuia de chimarrão ao som do rádio. De repente, o tempo muda. O céu escurece. Pinheiros ganham vida, se agitam como se estivessem assustados. Atrás de um galpão, uma figura espreita. Então, aparece transformada: olhos dourados, dentes pontiagudos, a sombra de um lobo. O menino vê tudo de longe. Apavorado, corre para o chalé. O mesmo velho que vimos antes protege o garoto da fera, desembainhando um facão de prata."
    },
    {
      type: "text",
      content: "A música cessa. A imagem congela. Um uivo é ouvido ao longe."
    },
    {
      type: "text",
      content: "Surge o título com letras irregulares, riscadas por garras. E assim começa a nova novela das sete, que fala sobre paternidade, legado, conflitos entre campo e cidade — e homens que não aprenderam como amar!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "ESSE É FERA"
    },
    {
      type: "text",
      content: "O 7º Filho é uma adaptação televisiva de um romance regionalista do sul do Brasil. A trama acompanha a Família Münchhausen, espalhada pelo país e reunida pelo destino em Nova Harz — ex-colônia alemã escondida entre o mato e a névoa."
    },
    {
      type: "text",
      content: "Érico, o caçula do clã, é um professor universitário recém-divorciado que perdeu o emprego e retorna à cidade com a filha adolescente, Nanda. Eles se instalam no chalé do velho patriarca Sebastião, um músico decadente recluso, pai de sete filhos com mães diferentes. Apesar de desprezar o lugar, Érico percebe que Nova Harz vive dentro dele mais do que gostaria: nas noites de lua cheia, transforma-se em lobisomem. Ele faz de tudo para esconder isso — especialmente de Nanda, a filha sensível e introspectiva, que começa a investigar os mistérios da serra."
    },
    {
      type: "text",
      content: "Os personagens dos jogadores são irmãos e irmãs de Érico, — filhos de Sebastião com mães diferentes — tios e tias de Nanda. Cada um tem seu núcleo, profissão e passado, mas todos compartilham um nome. Embora alguns tenham vivido fora, agora estão de volta à cidadezinha, por vontade ou necessidade."
    },
    {
      type: "text",
      content: "Neste roteiro, a grande pergunta é sempre: “Qual segredo você esconde?”. Cabe ao mestre de cerimônias instigar essa busca, lembrando que todo personagem tem um esqueleto no armário — e que isso deve ser revelado através das escolhas que faz."
    },
    {
      type: "text",
      content: "A cidade se divide em três núcleos: O Chalé do Tião, onde moram Érico, Nanda e o velho músico recluso. É frequentado por personagens mais velhos, conservadores e presos às tradições rurais. A Escola Municipal reúne os adolescentes — jovens rebeldes contra tudo, contra todos e entediados com o lugar que vivem. Já o Faustina Pub é um bar \"instagramável\", com cardápio bilíngue e bandas dark rockabilly, comandado pela excêntrica dona que lhe empresta o nome. Lá, adultos classe média alta expõem seus amores fracassados, traumas de infância e dilemas existenciais \"profundos\", disputando quem é o mais insuportável da novela."
    },
    {
      type: "text",
      content: "Tal chatice tem afundado a audiência de O 7º Filho, forçando a trama a apelar para mistérios e elementos sobrenaturais. Em toda recapitulação, algo estranho acontece: um corpo surge no mato; pegadas cruzam o quintal; um irmão desaparece e volta diferente; um caçador do oculto chega à cidade. Logo surge a suspeita: talvez Érico não seja o único e dentro de Nova Harz haja dois lobisomens…"
    },
    {
      type: "text",
      content: "Eis algumas perguntas que podem guiar a criação de personagens:"
    },
    {
      type: "text",
      content: "• Qual foi a última vez que você viu seu irmão Érico — e por que a conversa terminou em briga?\n• Embora você não seja o sétimo filho, alguém transmitiu a você o “fardo” de ser um lobisomem… Quem?\n• O que aconteceu depois que você lutou com faca com o lobisomem?\n• Que dívida antiga seu pai, o velho Sebastião, finge ter esquecido, mas você não?\n• Como a mudança do seu personagem para Nova Harz — e seu sofrimento com o frio e a névoa constantes — serve de pretexto para tratar com solenidade a depressão climática, um transtorno elevado aqui ao status de grande drama contemporâneo e digno de uma campanha de conscientização acerca de seus perigos?\n• O que você viu no mato e preferiu fingir que foi um sonho?\n• De quem você sente ciúmes, mesmo sem motivo?"
    }
  ]
  },
  { id: "Devoradores de Sonhos",
  name: "Devoradores de Sonhos",
  theme: "Fantasia e Investigação Sobrenatural",
  image: "/aventuras/devoradores-de-sonhos.png",
  summary: "Uma pacata vila sofre com uma estranha maldição: crianças adormecem e não conseguem acordar. Os heróis devem proteger a comunidade contra pequenas criaturas feéricas sugadoras de mana e ajudar a sacerdotisa local em um perigoso ritual de purificação.",
  sections: [
    {
      type: "text",
      content: "Dentre os mistérios de Arton, os sonhos estão entre os mais secretos. Apesar de servirem e se conectarem ao divino, através de visões e profecias, não há uma deidade responsável diretamente por eles."
    },
    {
      type: "text",
      content: "Diversos espíritos muitas vezes se manifestam como formas reais de conceitos oníricos. Ainda assim, o lugar por onde vagam os artonianos durante seu descanso continua sendo um enigma."
    },
    {
      type: "text",
      content: "A lógica dos mortais raramente se aplica aos seres feéricos. Mesmo a origem destas criaturas está em constante debate. Os expoentes mais famosos entre eles são aqueles que imitam mais convincentemente o jeito de agir de humanoides. Mas é importante não se enganar. Para cada sílfide trapaceira, há diversos espíritos incompreensíveis, muitas vezes aterrorizantes, prontos para atacar."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Devoradores de Sonhos é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 4º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Em uma estrada do Reinado, os aventureiros encontram um viajante e seu trobo sendo atacados por bandidos. Após a derrota dos criminosos, o homem que estava sendo roubado fica impressionado pelas habilidades dos heróis e diz estar procurando ajuda. Segundo ele, crianças de sua vila estão sendo afetadas por uma estranha maldição, caindo em um sono do qual não despertam."
    },
    {
      type: "text",
      content: "Chegando à vila, os heróis podem fazer algumas perguntas e até mesmo investigar algumas das crianças afetadas. Durante a noite, terão o primeiro encontro com os come-sonhos, pequenas criaturas que estão atacando os infantes. Destruí-los, infelizmente, não resolve o caso. A sacerdotisa local sugere então fazer um ritual para espantá-los, com a ajuda dos aventureiros. Entretanto, se não forem bem-sucedidos, terão de enfrentar um pesadelo encarnado."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1: ALGO NO CAMINHO"
    },
    {
      type: "text",
      content: "Apesar de haver estradas bem-vigiadas no Reinado, a maioria delas é pouco mais que uma trilha de terra batida. Isso, somado à leniência das autoridades, torna o território entre comunidades menores o local ideal para criminosos aproveitadores. Caravanas mercantes contratam seguranças para defender-se, mas um viajante solitário precisa confiar na sua própria habilidade. Ou na sorte."
    },
    {
      type: "text",
      content: "Os personagens podem ter sido contratados por alguém viajando pelos ermos, ou então só estar deslocando-se de um ponto a outro no mapa. No meio do caminho, peça a todos um teste de Percepção (CD 15). Se nenhum dos aventureiros passar no teste, eles ficam de frente com um bando de criminosos ao redor de um homem e seu trobo. Caso sejam bem-sucedidos, têm tempo de perceber os criminosos ameaçando o viajante e sua montaria."
    },
    {
      type: "text",
      content: "CRIATURAS. Chefe bandido e bandidos x8 (Tormenta20, p. 289)."
    },
    {
      type: "text",
      content: "Quando os pilantras notam a aproximação dos personagens, seu líder se pronuncia."
    },
    {
      type: "text",
      content: "“Parados aí, pessoal bacana! Sei que devem estar pensando em intervir aqui, mas somos os cobradores de imposto dessa via. E esse senhor aqui, infelizmente não tem tibares suficientes. Vocês podem ajudar pagando também, ou dar meia-volta enquanto temos uma conversinha com ele.”"
    },
    {
      type: "text",
      content: "Um teste de Intuição oposto a Enganação do chefe bandido (+3) revela o óbvio: eles estão assaltando o homem. Se quiserem apenas passar, deverão oferecer T$ 10 por cada membro do grupo, e mais T$ 10 pelo viajante. A vítima está claramente desesperada, mas sempre que tenta se comunicar é cutucada pelos outros bandidos. Qualquer resposta que não seja entregar o dinheiro é respondida com violência, iniciando o combate."
    },
    {
      type: "text",
      content: "O viajante não é capaz de fazer muito, após ter sido agredido. O trobo, porém, precisa ser acalmado com uma ação completa e um teste de Adestramento (CD 20), e pode servir então como um parceiro montaria iniciante (Tormenta20, p. 262). Os bandidos cercam os personagens, permitindo que seu chefe use seu ataque furtivo. Apesar de empenhados em garantir os tibares, os criminosos fogem assim que seu líder é derrotado."
    },
    {
      type: "text",
      content: "Quando se aproximam do homem após o combate, ele começa a chorar. “Heróis, obrigado! Obrigado! Os deuses com certeza colocaram vocês no meu caminho! Por favor, ouçam meu apelo.”"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2: PEDIDO DE AJUDA"
    },
    {
      type: "text",
      content: "O viajante apresenta-se como Beren, e o trobo chama-se Koko. Eles vêm de uma vila há um dia de caminhada, em que um estranho fenômeno está acontecendo. Aproximadamente duas semanas atrás, todas as crianças da comunidade começaram a queixar-se de dores de cabeça e pesadelos. Dois dias depois, a primeira delas dormiu e não acordou."
    },
    {
      type: "text",
      content: "“Os pais estão fazendo tudo em seu poder para mantê-las vivas. A professora Sylvana está rezando por eles quase todos os dias. Como eu não tenho filhos, peguei Koko e vim procurar ajuda… mas meu senso de direção não é muito bom.”"
    },
    {
      type: "text",
      content: "Beren explica que sua comunidade não tem muito, mas diz que a professora Sylvana possui uma belíssima cimitarra élfica, que está disposta a entregar como recompensa. A vila, por outro lado, juntou apenas T$ 500, o que pode parecer pouco para aventureiros, mas é uma fortuna para aldeões. Qualquer teste de Intuição confirma a veracidade das palavras do viajante."
    },
    {
      type: "text",
      content: "Se quiserem procurar pelos pertences dos bandidos, devem passar em um teste de Investigação (CD 20). No acampamento eles encontram o dobro de tesouro equivalente a ND 2 (Tormenta20, tabela 8-1: tesouro por nível de desafio, p. 328)."
    },
    {
      type: "text",
      content: "Assim que estiverem prontos, podem partir em direção ao vilarejo de Beren. O resto do caminho, infelizmente, ainda possui seus próprios perigos. Role 1d8, se o resultado for 1, ocorre um encontro aleatório. Se tiver acesso ao livro Ameaças de Arton, use a coluna de encontros aleatórios em estradas do Reinado (p. 429)."
    },
    {
      type: "text",
      content: "Caso não tenha acesso, role 1d6. Os personagens encontram:"
    },
    {
      type: "text",
      content: "1) um mercador viajante, vendendo itens com um desconto de 10%;\n2) dois gorloggs (Tormenta20, p. 291);\n3) outro grupo de 6 bandidos (Tormenta20, p. 289);\n4) três gnolls (Tormenta20, p. 290), armando uma emboscada;\n5) 1d6+2 goblins salteadores (Tormenta20, p. 300);\n6) uma estalagem simples no meio da estrada, porém bastante aconchegante (descanso confortável)."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3: VILA INSONE"
    },
    {
      type: "text",
      content: "Após um dia de viagem, os aventureiros chegam à vila. De longe já dá para ver que suas casas são singelas, uma pequena praça serve como núcleo da comunidade e há um templo modesto. No meio do espaço há uma estátua de uma figura montada em um cavalo. Aproximando-se, é possível notar que todos os camponeses aqui têm olheiras profundas, e estão perceptivelmente exaustos."
    },
    {
      type: "text",
      content: "Apesar da condição de cansaço de todos, as pessoas olham para os aventureiros de maneira extremamente grata. Os aldeões se aproximam, vários deles chorando e agradecendo a presença dos heróis. Alguns minutos depois, uma mulher elfa um pouco mais velha vem para perto. Seus cabelos são prateados, presos em um coque, e há um pequeno óculos apoiado na ponta do nariz. Ela veste batinas rústicas cor de pergaminho. Pendurado em seu pescoço está um medalhão com o símbolo sagrado de Tanna-Toh, a Deusa do Conhecimento."
    },
    {
      type: "text",
      content: "“Bem-vindos, senhores! Podem me chamar de Sylvana, sacerdotisa da Mãe da Palavra.”"
    },
    {
      type: "text",
      content: "A frade conversa com os aventureiros na frente de todos, afinal, por seus votos, não faria sentido esconder qualquer forma de conhecimento. Nas casas, crianças estão adormecidas em camas de feno simples, enquanto seus pais se esforçam para tornar seu sono perpétuo mais confortável."
    },
    {
      type: "text",
      content: "Sylvana conta que os pequenos acordaram de pesadelos terríveis durante um ou dois dias, até que não despertaram mais. Apesar de rezar por elas, a sacerdotisa não teve nenhuma iluminação sobre a causa do malefício, e não há qualquer sinal de ferimentos nas vítimas."
    },
    {
      type: "text",
      content: "Se desejarem, os personagens podem fazer sua própria investigação. Um teste de Cura (CD 20) revela que, apesar de estarem fracas pelo longo período desacordados, não há qualquer sinal de que seja uma doença. Investigação (CD 25) revela que algo de tamanho similar a um gato esteve nos quartos. Finalmente, um teste de Misticismo (CD 20) revela que os efeitos sofridos estão relacionados justamente à mana destas crianças sendo roubada de alguma forma."
    },
    {
      type: "text",
      content: "Caso sejam bem-sucedidos nos três testes, permita um teste de Misticismo ou Religião (CD 17). Passar no teste revela a lenda de pequenos seres feéricos chamados “come-sonho”. Essas pragas atacam durante a noite, se alimentando enquanto suas vítimas dormem, levando-as, após algum tempo, à morte."
    },
    {
      type: "text",
      content: "Se dividirem suas descobertas com Sylvana, ela se mostra chocada, mas curiosa. A elfa nunca ouviu falar deste tipo de criatura, e seu lado pesquisadora deseja saber tudo o que for possível sobre elas. Para cada 5 que os personagens conseguirem acima da CD do teste final, recebem mais uma informação da ficha da criatura (veja em NPCs e Criaturas). A sacerdotisa também mostra, se pedirem, o prêmio prometido por Beren: uma cimitarra precisa de mitral, uma das poucas coisas que conseguiu manter de seu passado em Lenórienn."
    },
    {
      type: "text",
      content: "Deixe então que os aventureiros divisem seus planos. Qualquer esforço que não inclua vigiar uma das crianças em seu quarto, falha automaticamente, encontrando mais uma vítima enfraquecida na manhã seguinte. Se pedirem para vigiar dentro da casa de um dos camponeses, estes aceitam sem questionar."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4: MEDO DO ESCURO"
    },
    {
      type: "text",
      content: "A noite desce sobre o vilarejo. Um a um os aldeões vão se recolhendo, barricando suas casas como é possível. O clima bucólico do local seria aconchegante, não fosse a tensão do caso. No meio da madrugada, coisas começam a rastejar na escuridão."
    },
    {
      type: "text",
      content: "Caso o grupo peça, Sylvana oferece seu apoio como uma parceira médica iniciante. Seja pelo cansaço da viagem, ou por algum tipo de pressão sobrenatural, manter-se despertos mostra-se um desafio. Se escolherem ficar acordados, peça a todos um teste de Fortitude (CD 15). Os que falharem adormecem, mas podem ser acordados sendo sacudidos com uma ação padrão. Se apenas um dos aventureiros mantiver a vigília, ele fará o teste sozinho."
    },
    {
      type: "text",
      content: "No meio da madrugada, então, surgem as criaturas. Minúsculas, esses espíritos lembram vagamente goblins, de orelhas e bocas desproporcionalmente compridas e diversas fileiras de dentes serrilhados. Eles se aproximam em silêncio, fazendo um teste de Furtividade (+13) oposto à Percepção dos personagens. Se vencerem, os come-sonhos só são notados quando já estiverem no leito da criança adormecida."
    },
    {
      type: "text",
      content: "CRIATURAS. Come-sonhos x2 (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "Se algum personagem estiver dormindo, as criaturas verão nele um banquete ainda maior. Elas, entretanto, estão fatigadas devido a fome. Caso se alimentem de algum aventureiro adormecido, perdem essa condição. Apesar de inteligentes, algo os está movendo para fazerem esses ataques, e lutam até a morte, desaparecendo em poeira brilhante."
    },
    {
      type: "text",
      content: "Os rastros dos come-sonhos são difíceis de seguir, especialmente durante a noite (Investigação ou Sobrevivência CD 25). Entretanto, há uma opção cruel: deixar essas fadas se alimentarem de uma outra criança e então segui-la ao ponto de origem. De uma forma ou de outra, as pistas levam de volta à praça central. Os monstros somem ao se aproximar da estátua no centro da vila."
    },
    {
      type: "text",
      content: "Se questionada sobre o monumento, Sylvana explica que, muito tempo atrás, na época da formação da vila, um herói era o líder do local. Quando ele faleceu, a estátua foi erguida em sua honra, mas o passar dos anos ruiu a figura humana, deixando apenas parte de seu torço, e sua montaria abaixo."
    },
    {
      type: "text",
      content: "Um teste de Misticismo (CD 25) revela que a estátua, no momento, serve como algum tipo de passagem para os come-sonhos. Já Religião (CD 25) revela que algo amaldiçoou o monumento, cercando-o de uma aura sombria. Sylvana sugere um ritual de purificação."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5: SOMBRA DO PESADELO"
    },
    {
      type: "text",
      content: "Ainda cansados dos eventos da noite, Sylvana os chama para explicar seu plano. De forma didática, para que todos compreendam, ela conta que fará uma mistura entre um exorcismo e um apanhador de sonhos, que então colocará na estátua, possivelmente afastando os come-sonho de uma vez por todas da vila. Entretanto, a elfa crê que os monstros tentarão atacá-la, e se isso acontecer, haverá pouco que possa fazer."
    },
    {
      type: "text",
      content: "Para representar o ritual, use o perigo complexo abaixo."
    },
    {
      type: "text",
      content: "EXPURGO ONÍRICO\nO grupo protege e auxilia Sylvana, enquanto a frade se concentra em seu ritual.\nOBJETIVO: Expulsar a presença sombria habitando a estátua e defender a sacerdotisa.\nEFEITO: Sylvana possui 40 pontos de vida. Ela estará completamente concentrada no ritual, e não pode auxiliar os personagens de qualquer forma. Ela precisa ficar cinco rodadas realizando o rito."
    },
    {
      type: "text",
      content: "Assim que o ritual inicia, um verdadeiro enxame de come-sonhos se espalha pela praça, tentando impedi-la. No final de cada rodada, todos os personagens e Sylvana sofrem 4d4+4 pontos de dano de perfuração da mordida das criaturas, 2d6 de dano psíquico, e perdem 1d4+1 PM."
    },
    {
      type: "text",
      content: "Caso os PV de Sylvana sejam reduzidos a 0, a elfa fica inconsciente. Se Sylvana sofrer qualquer dano após este, ela morre. Um personagem pode fazer a ação continuar o ritual para mantê-lo pelas rodadas restantes. Caso falhe no teste, o ritual falha, manifestando o espectro do pesadelo."
    },
    {
      type: "text",
      content: "ATACAR COME-SONHOS (Luta ou Pontaria CD 18) O personagem golpeia uma quantidade das criaturas. Escolha um dos outros participantes do ritual, incluindo Sylvana, para não sofrer o dano no final da rodada.\nCONTINUAR RITUAL (Religião CD 20) Caso Sylvana tenha sido derrotada, um único personagem pode fazer esse teste em uma rodada.\nDISTRAIR (Acrobacia ou Enganação CD 17) O personagem age de maneira inesperada, deixando os come-sonhos confusos. Reduza todo o dano causado pelas criaturas pela metade no final desta rodada.\nINTERPOR-SE (Nenhum teste) O personagem coloca-se na frente de outro, sofrendo, no fim da rodada, o dobro do dano, mas evitando que outro o sofra.\nLANÇAR MAGIA (Vontade CD 20 + custo em PM da magia) O personagem pode lançar uma magia que cause dano em área (com os mesmos resultados da ação atacar come-sonhos), de cura para recuperar os próprios PV ou de Sylvana, ou que auxilie no perigo complexo. Se falhar no teste a magia é perdida, mas os PM são gastos mesmo assim."
    },
    {
      type: "text",
      content: "Caso consigam manter o ritual durante cinco rodadas, ouvem um relincho espectral ao longe e os come-sonhos desaparecem. Entretanto, se falharem, ou se tentarem simplesmente destruir a estátua, causando qualquer dano a ela, uma criatura sombria se manifesta."
    },
    {
      type: "text",
      content: "CRIATURA. Espectro do Pesadelo (NPCs e Criaturas)."
    },
    {
      type: "text",
      content: "A aparência adotada pelo coletivo de come-sonhos para causar pavor lembra o cavalo do monumento. Ele é apenas um eco, uma sombra faminta, desejando devorar tudo ao seu redor. Enfurecido, o monstro ataca o grupo violentamente, lutando até a morte."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo: DESCANSO ENFIM"
    },
    {
      type: "text",
      content: "As crianças afligidas pela maldição começam, uma a uma, a despertar lentamente em suas casas. Os pais choram de emoção ao ver seus filhos salvos."
    },
    {
      type: "text",
      content: "Se tiverem completado o ritual, ou então derrotado o espectro, significa que os personagens conseguiram afastar a ameaça. Sylvana, se tiver sobrevivido, diz que nunca viu uma criatura assim, e que precisará de um tempo para registrar os eventos. Talvez até mesmo peça a eles que a levem até um templo maior de Tanna-Toh para apresentar seus achados."
    },
    {
      type: "text",
      content: "Entretanto, caso a sacerdotisa tenha morrido, todos os moradores choram sobre o corpo dela. Sem saber muito o que fazer, preparam um funeral simples para a elfa que ensinou tanto a todos. No templo, em seus aposentos, o grupo encontra alguns tesouros (role na tabela 8-1: tesouro por nível de desafio, na parte de ND 5, p. 328), e cartas para seus antigos companheiros de aventuras."
    },
    {
      type: "text",
      content: "No anoitecer seguinte, sem qualquer sinal de ameaças, os personagens avançam para o 5º nível."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs e Criaturas"
    },
    {
      type: "text",
      content: "COME-SONHOS (ND 2)\nEspírito Minúsculo\nINICIATIVA +6, PERCEPÇÃO +5, visão no escuro\nDEFESA 18, FORT +3, REF +12, VON +7, imunidade a efeitos mentais, dano psíquico e medo, redução de dano 5/mitral\nPONTOS DE VIDA 14\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Mordida +14 (4d4+4 mais 2d6 psíquico).\nDEVORAR SONHOS (PADRÃO) O come-sonhos devora os sonhos de uma criatura em alcance curto. A vítima perde 1d4+1 PM (Von CD 16 reduz a perda à metade); para cada PM que a vítima perder dessa forma, o come-sonhos recebe 5 PV temporários cumulativos. Se o come-sonhos usar esta habilidade em uma criatura que esteja dormindo, a perda de PM é dobrada. Recarga (causar dano psíquico com sua mordida).\nÊXTASE ONÍRICO Se fosse sofrer dano psíquico, em vez disso o come-sonhos cura PV em quantidade igual ao dano que sofreria.\nFor −3, Des 3, Con 2, Int 0, Sab 2, Car −1\nPERÍCIAS Furtividade +13, Intuição +7.\nTESOURO 1d4 doses de essência de mana (CD 17 para extrair)."
    },
    {
      type: "text",
      content: "ESPECTRO DO PESADELO (ND 5)\nEspírito Grande\nINICIATIVA +7, PERCEPÇÃO +8, faro, visão no escuro\nDEFESA 24, FORT +17, REF +11, VON +5, imunidade a efeitos de medo, mentais e trevas, redução de dano 5/luz, vulnerabilidade a luz\nPONTOS DE VIDA 200\nDESLOCAMENTO 15m (10q)\nCORPO A CORPO Cascos x2 +17 (2d6+5, mais 2d8 trevas).\nDEVORAR SONHOS (COMPLETA) O espectro do pesadelo devora os sonhos de todas as criaturas em alcance curto. As vítimas perdem 1d4+1 PM (Von CD 20 reduz a perda à metade); para cada PM que as vítimas perderem dessa forma, o espectro recebe 5 PV temporários cumulativos. Se uma das criaturas afetadas estiver dormindo, a perda de PM é dobrada. Recarga (completa).\nRELINCHO ATERRADOR (PADRÃO) Todas as criaturas em alcance curto ficam apavoradas por 1d4+1 rodadas e então abaladas (Von CD 20 muda para abalados por 1d4+1 rodadas a criatura fica imune a essa habilidade até o fim da cena).\nSEMI-INCORPÓREO O espectro do pesadelo tem 25% de chance de ignorar ataques e efeitos (incluindo de área) contra ele. Efeitos de luz ou mágicos ignoram essa habilidade.\nTERROR ENCARNADO O espectro recebe +2 em testes de ataque e +1d8 de dano de trevas contra criaturas abaladas.\nVULNERABILIDADE A LUZ DE DIA Um espectro exposto a luz solar natural fica debilitado.\nFor 6, Des 3, Con 4, Int –2, Sab 2, Car 0\nTESOURO Nenhum."
    }
  ]
  },
  { id: "Monstros e Homens",
    name: "Monstros e Homens",
    theme: "Combate contra Monstros e Puristas",
    image: "/aventuras/monstros-e-homens.png",
    summary: "Uma pacata vila é atacada por feras assustadas vindas da floresta. Investigando o incidente, os aventureiros descobrem uma insólita aliança entre soldados puristas e um xamã finntroll dedicada a Megalokk, que utilizam monstros para aterrorizar a região.",
    sections: [
      {
        type: "text",
        content: "Os puristas, além de preconceituosos, também são hipócritas. Mesmo odiando não humanos, estão dispostos a aceitar o apoio dos finntroll e de artefatos roubados de outros povos. São capazes das piores atrocidades, matando sem piedade qualquer um disposto a atrapalhar seus planos."
      },
      {
        type: "text",
        content: "A sombria cultura dos finntroll assume sua forma mais bestial no culto de Megalokk. Muitas vezes, seus xamãs invocam feras para espalhar sofrimento pelo mundo subterrâneo. Sem qualquer remorso, deleitam-se ao ver pessoas sendo devoradas, afinal a selvageria é o estado natural das bestas."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "RESUMO DA AVENTURA"
      },
      {
        type: "text",
        content: "Monstros e Homens é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo composto por quatro personagens de 3º nível em Tormenta20."
      },
      {
        type: "text",
        content: "Monstros surgem repentinamente, aterrorizando uma pequena vila. Os aventureiros enfrentam algumas das ameaças e as outras feras fogem para a mata. As pessoas comentam sobre outros ataques e pedem que os heróis descubram o que está perturbando as criaturas."
      },
      {
        type: "text",
        content: "Na floresta, eles devem procurar sinais do que está acontecendo. O grupo encontra monstros, perigos naturais e, estranhamente, recrutas puristas. A investigação leva a uma clareira divina, onde um finntroll xamã e um ginete purista discutem. Ao perceberem os personagens, um combate se inicia."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 1: MONSTROS À SOLTA"
      },
      {
        type: "text",
        content: "A pequena cidade está mais movimentada do que de costume. As pessoas procuram estalagens, famílias dormem em carroças e mesmo o templo do Panteão está ocupado por gente. O motivo, entretanto, não envolve nenhum festival ou algo do tipo."
      },
      {
        type: "text",
        content: "Os moradores parecem bastante assustados. Se algum dos personagens os questionar, um elfo camponês de olhos arregalados responde “Monstros! A gente estava plantando e, de repente, apareceu uma nuvem de bichos mordendo as vacas. Tipo uns insetão desse tamanho.” E gesticula com as mãos para formar quase um palmo."
      },
      {
        type: "text",
        content: "Cada uma das famílias de fazendeiros abrigada na cidadezinha descreve um tipo de monstro diferente. Uma jura que seus cavalos foram roubados por grifos. Outra diz que um bicho estranho, parte ave, parte urso, os atacou. Um teste de INTUIÇÃO ou INVESTIGAÇÃO (CD 15) faz perceber que os refugiados são, na maioria, não humanos."
      },
      {
        type: "text",
        content: "Em algum momento da tarde, começa uma confusão. Criaturas que parecem insetos enormes, com pelos, perseguem pessoas. Um glop imenso engole uma carroça e seus ocupantes escapam por pouco. Vocês começam a se mover para tentar ajudar, mas outra criatura se interpõe. A cabeça lembra uma coruja imensa, mas o corpanzil é similar ao de um urso. A besta solta um urro e avança em sua direção."
      },
      {
        type: "text",
        content: "CRIATURAS. Urso-coruja (Tormenta20, p. 293)."
      },
      {
        type: "text",
        content: "O urso-coruja é um monstro mais forte que o grupo, mas, se for reduzido para metade de seus PV, balança a cabeça, confuso, e foge na direção da mata próxima. As outras feras também são espantadas, mas muitos dos cidadãos estão seriamente feridos. A sensação de pavor com a perspectiva de mais um ataque a qualquer momento é geral."
      },
      {
        type: "text",
        content: "A sacerdotisa local de Tanna-Toh, uma anã de cabelos negros densos chamada Drusa, tenta cuidar dos feridos como pode. Ela cura todos os pontos de vida dos personagens e oferece 4 essências de mana. Quando todos forem estabilizados, Drusa explica que a população sabia da existência dos monstros na mata, mas nunca haviam sido atacados desta forma. Um teste de MISTICISMO ou SOBREVIVÊNCIA (CD 19) revela que o próprio urso-coruja não costuma se aproximar de comunidades."
      },
      {
        type: "text",
        content: "“Precisamos descobrir o que está causando isso. O quê? Acham que estou motivada apenas por curiosidade? Não é verdade. Este é o dever imposto pela Mãe da Palavra! É uma missão sagrada... elucidar o que está havendo. E evitar que continue, claro.”"
      },
      {
        type: "text",
        content: "Drusa é um parceiro médico e ajudante (Conhecimento e Religião), ambos de nível iniciante. Caso achem que ela deve ficar para trás e cuidar dos feridos, será necessário um teste de DIPLOMACIA (CD 20) e a promessa de um relato extremamente detalhado dos acontecimentos."
      },
      {
        type: "text",
        content: "Se procurarem as autoridades, os personagens descobrirão que o burgomestre está lidando com outros problemas, e, até por isso, oferece T$ 50 para cada um se o problema for resolvido."
      },
      {
        type: "text",
        content: "Assim que terminarem suas preparações, é hora de partir para a floresta."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 2: ONDE AS FERAS VIVEM"
      },
      {
        type: "text",
        content: "A floresta está quieta demais. Nenhum animal atravessa o caminho de vocês, e as próprias árvores parecem abrir passagem. Ainda assim, rastrear nesse ambiente é complicado. Diversos vestígios confundem as direções e buscar por algo que esteja atiçando os monstros não é algo simples e claro."
      },
      {
        type: "text",
        content: "Rastrear as perturbações na floresta é um teste estendido de SOBREVIVÊNCIA (CD 20, 3 SUCESSOS). Após o primeiro teste, acontece a Cena 3, e as Cenas 4, 5 e 6 se intercalam entre os testes seguintes. Se conseguirem os três sucessos sem qualquer falha, pule as Cenas 5 e 6."
      },
      {
        type: "text",
        content: "Em caso de falha total, os personagens perdem o dia e podem ser atacados por um dos monstros da floresta. Role 1d6, ou escolha entre os seguintes:\n- 1 ou 2 – Nada acontece.\n- 3 – Mamãe glop (NPCs e Criaturas).\n- 4 – 1d4 estirges (NPCs e Criaturas).\n- 5 – Aranha gigante (Tormenta20, p. 287).\n- 6 – O mesmo urso-coruja de antes, ainda ferido pela batalha anterior."
      },
      {
        type: "text",
        content: "Depois de lidar com a ameaça, deverão recomeçar o teste estendido na manhã seguinte. Evite repetir encontros, substituindo ameaças derrotadas por “Nada acontece”."
      },
      {
        type: "text",
        content: "Assim que conseguirem os três sucessos (ou quando não houver mais ameaças a serem enfrentadas), vá para a Cena 7."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 3: PERSEGUIDORES"
      },
      {
        type: "text",
        content: "Algo corre na mata ao redor de vocês. É quase impossível perceber, como se a própria vegetação estivesse se movendo. Entretanto, não demora muito para que os grunhidos e rosnados dessas feras deixem clara sua aproximação."
      },
      {
        type: "text",
        content: "CRIATURAS. Perdigueiro troll x2 (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Criados pelos finntroll como parte de seus experimentos, esses cães de caça vegetais às vezes são encontrados soltos na natureza, provavelmente depois de fugirem de seus mestres. Peça um teste de PERCEPÇÃO dos personagens oposto à FURTIVIDADE dos perdigueiros troll (+6). Aqueles que falharem no teste estarão surpreendidos na primeira rodada do combate."
      },
      {
        type: "text",
        content: "Os perdigueiros troll estão caçando para se alimentar e não vão desistir de suas presas. Apesar de estarem hostis, é possível interromper seus ataques por uma rodada com um teste de ADESTRAMENTO (CD 25). Se os personagens não fizerem nenhuma ação violenta contra os animais e passarem em um segundo teste de Adestramento, as criaturas vão embora."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 4: CUIDADO ONDE PISA"
      },
      {
        type: "text",
        content: "Este trecho da floresta tem menos sinais de monstros. Ainda assim, há uma trilha aqui. Os rastros são diferentes dos que foram encontrados antes, pertencentes a criaturas medianas e bípedes, como se pudessem ser meras pessoas fazendo o trajeto. Talvez caçadores da vila? Há algo de estranho aqui."
      },
      {
        type: "text",
        content: "Após o segundo teste, os personagens chegam nesta área da floresta."
      },
      {
        type: "text",
        content: "O perigo aqui está escondido: diversas armadilhas foram espalhadas nesta seção da mata. Há um fosso com estacas camuflado (Tormenta20, p. 317) no meio do caminho. Todos os personagens devem fazer um teste de PERCEPÇÃO (CD 20). Aqueles que falharem deverão fazer o teste de Reflexos da armadilha, ou sofrerão os efeitos dela."
      },
      {
        type: "text",
        content: "Se um dos personagens rolar um 20 natural no teste de Percepção, poderá evitar que um de seus colegas caia na armadilha. Um teste de INVESTIGAÇÃO ou LADINAGEM (CD 20) revela algo preocupante: esta arapuca claramente não é natural. Provavelmente foi colocada aqui para evitar justamente aventureiros enxeridos. Isso é sinal de que estão na direção certa... mesmo que ainda não saibam do quê."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 5: SINAL DE ALLIHANNA"
      },
      {
        type: "text",
        content: "Por um instante, as coisas parecem estranhamente... “normais”. Canto de pássaros, pequenos animais silvestres caminhando, a temperatura é mais amena. Ao longe vocês veem um imenso cervo, muito maior que qualquer outro. É possível notar que se trata de uma fêmea, pela ausência de chifres. Não importa o quanto tentem se aproximar, ela sempre estará longe demais."
      },
      {
        type: "text",
        content: "Um teste de RELIGIÃO (CD 20) revela ser uma manifestação do poder da Deusa da Natureza, Allihanna. Há algo nessa mata que está perturbando o mundo ao seu redor, e ela parece querer ajudar os aventureiros. Devotos da deusa percebem tudo isso sem necessidade de testes."
      },
      {
        type: "text",
        content: "Se seguirem os sinais, recebem +5 na próxima rolagem do teste estendido de Sobrevivência. Além disso, os personagens encontram uma árvore cheia de frutos extremamente apetitosos. Os aventureiros sentem, de alguma forma, que é seguro comê-las. Um teste de RELIGIÃO ou SOBREVIVÊNCIA (CD 10) confirma o fato e revela que é como se elas estivessem sob efeito de Abençoar Alimentos, fornecendo 5 PV e 1 PM temporários. É possível coletá-las para comer em outro momento."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 6: ACAMPAMENTO MALIGNO"
      },
      {
        type: "text",
        content: "Depois de tanto caminhar, vocês avistam algo que não esperavam. Muitos metros à frente, estão quatro barracas. Na lateral delas, costurado de forma rústica, o emblema de um leopardo negro. Os homens ali vestem armaduras negras e portam armas cruéis."
      },
      {
        type: "text",
        content: "Aqueles treinados em CONHECIMENTO ou GUERRA reconhecem sem necessidade de testes que os homens acampados são recrutas puristas. É possível se aproximar sorrateiramente dos inimigos, com um teste de FURTIVIDADE oposto à sua PERCEPÇÃO (+0). Por um misto de arrogância e ignorância, eles não estão de prontidão e não têm o cuidado de falar baixo."
      },
      {
        type: "text",
        content: "“O capitão está maluco, só pode!”\n“Ei! Olha só! Isso já é insubordinação!”\n“Ih, puxa-saco, ele nem está aqui. Está de novo lá naquela clareira com aquele esquisitão.”\n“São as ordens, e o finntroll está ajudando no plano.”\n“Ajudando nada! Aquele troço é um lixo não-humano.”"
      },
      {
        type: "text",
        content: "A conversa continua. Se os personagens quiserem passar pelo acampamento, terão que passar no teste de Furtividade oposto à Percepção dos vilões. Entretanto, os personagens também podem atacá-los, sabendo que, se os puristas não forem derrotados aqui e agora, continuarão espalhando o mal e sofrimento por onde quer que passem."
      },
      {
        type: "text",
        content: "CRIATURAS. Recruta purista x6 (Tormenta20, p. 294)."
      },
      {
        type: "text",
        content: "Apesar de serem a ralé do exército purista, esses recrutas combatem com a coragem dos tolos. Lutam até que sejam derrotados, sem recuar. Em seu acampamento, é possível encontrar tesouro de ND 3 (rolado na tabela 8-1: Tesouro por Nível de Desafio, em Tormenta20, p. 328). Parte dele foi roubado nas fazendas da região após as pessoas serem atacadas pelos monstros."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "CENA 7: CLAREIRA PROFANADA"
      },
      {
        type: "text",
        content: "Finalmente, o rastro chega ao seu ponto de origem. Uma enorme clareira aberta na mata, assim como pedras empilhadas. Claramente, o lugar emana energia divina natural. Mas há algo inquietante. Antes de conseguirem investigar o que é, os personagens veem três figuras."
      },
      {
        type: "text",
        content: "A primeira é um homem de postura arrogante, vestindo uma armadura negra e portando uma lança. A segunda é alguém recurvado e trajado em farrapos e couro, com a pele assustadoramente pálida, olhos profundos, e a cabeça raspada. A terceira, finalmente, é um troll. Contudo, a criatura está fitando o chão, um fio de baba escorrendo pela bocarra cheia de presas."
      },
      {
        type: "text",
        content: "Se a sacerdotisa anã estiver com o grupo, ela explica que o pálido é um finntroll. Drusa conta que eles são um povo cruel e opressor do subterrâneo, e constantemente sequestram pessoas para escravizá-las ou usar em experimentos sinistros. Analisando a aparência dele, sugere que é um devoto de Megalokk, o Deus dos Monstros."
      },
      {
        type: "text",
        content: "O homem de armadura fala, cheio de raiva: “Você me deu certeza de que esses monstros iam desestabilizar a cidade! Minhas ordens estão em atraso por culpa sua!” O finntroll responde com uma voz esganiçada: “Olha como fala comigo, ou te devoro! Precisamos de mais sacrifícios para o Monstro-Pai... Quem sabe não consigo um outro desses?” E aponta para o troll inerte."
      },
      {
        type: "text",
        content: "CRIATURAS. Ginete de troll purista e xamã finntroll (NPCs e Criaturas)."
      },
      {
        type: "text",
        content: "Uma aproximação com FURTIVIDADE oposta à PERCEPÇÃO dos dois inimigos é possível; além disso, por eles estarem discutindo os personagens, recebem um bônus de +2 no teste. O troll montaria não parece estar consciente até que o ginete se posicione na sela. Se os personagens conseguirem ser sorrateiros, ambos os inimigos ficarão surpreendidos na primeira rodada do combate."
      },
      {
        type: "text",
        content: "O ginete, em seu primeiro turno, irá montar o troll, fazendo com que ele reaja, movendo-se em posição para fazer uma investida em seu próximo turno. Já o xamã vai conjurar Perdição contra os personagens, e se posicionará de forma a dar suporte ao purista. Apesar de estarem se apoiando, assim que um deles for derrotado, o outro tentará fugir."
      },
      {
        type: "text",
        content: "As rochas empilhadas são de diversos tamanhos, e esconder-se atrás delas fornece cobertura leve. Devotos de Allihanna e Megalokk têm o custo de suas habilidades mágicas reduzido em –1 PM."
      },
      {
        type: "text",
        content: "O troll montaria parece estar catatônico: caso seu ginete seja derrotado, a criatura foge para o meio do mato."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "EPÍLOGO: PLANOS MONSTRUOSOS"
      },
      {
        type: "text",
        content: "Depois que os vilões forem derrotados, é possível revistar seus corpos. Além de possíveis tesouros, o grupo encontra em um dos bolsos do purista uma carta com ordens para enfraquecer a pequena cidade. O passo seguinte então seria tomá-la e iniciar uma escavação. O porquê disso não é citado na missiva."
      },
      {
        type: "text",
        content: "Ao chegarem à cidade, as pessoas recebem o grupo com muita alegria. A informação sobre puristas na floresta os deixa preocupados, mas neste momento eles acreditam que os aventureiros serão capazes de ajudar caso outro ataque aconteça."
      },
      {
        type: "text",
        content: "Se tiver acompanhado o grupo, Drusa insiste em registrar os acontecimentos assim que chega à comunidade. Ela parece perturbada pela colaboração do finntroll, mas está curiosa com a menção a algo enterrado. A anã diz que precisa consultar documentos antigos em busca de pistas."
      },
      {
        type: "text",
        content: "Sem ainda ter certeza dos próximos passos, os personagens avançam para o 4º nível!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "NPCS E CRIATURAS"
      },
      {
        type: "text",
        content: "MAMÃE GLOP (ND 2)\nMonstro Grande\nINICIATIVA +3, PERCEPÇÃO –3, percepção às cegas\nDEFESA 13, FORT +6, REF +3, VON –3, imunidade a ácido\nPONTOS DE VIDA 48\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Pancada +6 (1d6+2 mais 1d6 ácido).\nGLOPS FILHINHOS A mamãe glop está sempre acompanhada por 1d4 glops (Tormenta20, p. 286), que a protegem instintivamente. Esses glops (assim como aqueles gerados pela Meiose Glópica) não rendem pontos de experiência ao grupo.\nMEIOSE GLÓPICA (LIVRE) Quando ameaçada, a mamãe pode gerar outros glops para protegê-la. No início de cada turno da mamãe, role um dado. Em um resultado par, um glop surge num espaço adjacente a ela. Ele age normalmente, no turno da mamãe, a partir da próxima rodada.\nFor 2, Des –1, Con 2, Int —, Sab –5, Car –5\nTESOURO Padrão."
      },
      {
        type: "text",
        content: "ESTIRGE (ND 1)\nMonstro Minúsculo\nINICIATIVA +7, PERCEPÇÃO +2, faro, visão no escuro\nDEFESA 16, FORT +1, REF +10, VON +5\nPONTOS DE VIDA 9\nDESLOCAMENTO voo 12m (8q)\nCORPO A CORPO Probóscide +11 (1 perfuração).\nAGARRAR APRIMORADO (LIVRE) Probóscide (teste +21).\nCHUPAR SANGUE (LIVRE) Quando agarra uma criatura, e no início de cada um de seus turnos enquanto permanecer agarrando, o estirge drena sangue como um efeito metabólico; a vítima perde 3d6 pontos de vida e ele ganha a mesma quantidade de PV temporários. Após drenar 10 pontos de vida ou mais, o estirge se solta e tenta fugir.\nSANGRAR Quando o estirge solta uma criatura de quem estava drenando sangue (por vontade própria ou não), a vítima fica sangrando.\nFor –4, Des 5, Con –1, Int –5, Sab 0, Car –2\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "PERDIGUEIRO TROLL (ND 1)\nAnimal Médio\nINICIATIVA +5, PERCEPÇÃO +8, faro, visão na penumbra\nDEFESA 17, FORT +5, REF +9, VON +1\nPONTOS DE VIDA 10\nDESLOCAMENTO 15m (10q)\nCORPO A CORPO Mordida +10 (1d6+5) e tentáculos +10 (1d4+5).\nAGARRAR APRIMORADO (LIVRE) Tentáculos (teste +10).\nDERRUBAR (LIVRE) Mordida (teste +10).\nNATUREZA VEGETAL O perdigueiro é imune a atordoamento e metamorfose, mas é afetado especificamente por efeitos que afetem plantas monstruosas. No caso de magias sem teste de resistência, ele tem direito a um teste de Fortitude (CD da magia) para evitar o efeito.\nFor 5, Des 3, Con 2, Int –4, Sab 1, Car –2\nPERÍCIAS Sobrevivência +8, Furtividade +6.\nTESOURO Nenhum."
      },
      {
        type: "text",
        content: "XAMÃ FINNTROLL (ND 2)\nMonstro (finntroll) Médio\nINICIATIVA +5, PERCEPÇÃO +6, visão no escuro\nDEFESA 17, FORT +7, REF +2, VON +13, cura acelerada 5/ácido ou fogo\nPONTOS DE VIDA 50\nDESLOCAMENTO 9m (6q)\nCORPO A CORPO Garras x2 +10 (1d6+3).\nPONTOS DE MANA 13\nNATUREZA VEGETAL O xamã finntroll é imune a atordoamento e metamorfose, mas é afetado especificamente por efeitos que afetem plantas monstruosas. No caso de magias sem teste de resistência, ele tem direito a um teste de Fortitude (CD da magia) para evitar o efeito.\nUrro Divino (Livre, 1 PM) Quando faz um ataque ou lança uma magia, o xamã finntroll soma sua Constituição às rolagens de dano desse ataque ou magia.\nMAGIAS Como um clérigo de Megalokk de 2º nível (CD 18).\n- Amedrontar (Padrão, 1 PM) Um animal ou humanoide em alcance curto fica apavorado por 1 rodada e depois abalado pelo resto da cena.\n- Curar Ferimentos (Padrão, 2 PM) Uma criatura adjacente cura 3d8+3 PV.\n- Escudo da Fé (Reação, 1 PM) Quando uma criatura em alcance curto sofre um ataque, ela recebe +2 na Defesa até seu próximo turno.\n- Perdição (Padrão, 1 PM) Criaturas escolhidas em alcance curto sofrem –1 em testes de ataque e rolagens de dano até o fim da cena.\nINTOLERÂNCIA A LUZ Quando exposto à luz do sol ou similar, o finntroll fica ofuscado e não consegue usar sua cura acelerada.\nFor –1, Des 2, Con 4, Int 1, Sab 3, Car 0\nPERÍCIAS Adestramento +3, Atletismo +2, Intimidação +3, Religião +6."
      },
      {
        type: "text",
        content: "GINETE DE TROLL PURISTA (ND 2)\nHumanoide (humano) Médio\nINICIATIVA +4, PERCEPÇÃO +2\nDEFESA 20, FORT +13, REF +7, VON +2\nPONTOS DE VIDA 70\nDESLOCAMENTO 6m (4q)\nCORPO A CORPO Lança montada +12 (2d8+8).\nCORCEL TROLL O ginete de troll purista cavalga um troll treinado, um parceiro montaria Grande. Enquanto estiver montado, seu deslocamento se torna 12m, ele recebe uma ação de movimento extra (apenas para se deslocar) e os seguintes ataques (em adição à sua lança).\n- Corpo a Corpo. Duas garras +12 (1d6+3).\nINVESTIDA ATROZ (COMPLETA) O ginete faz uma investida e ataca com sua lança montada e todos os ataques da sua montaria. Todos os ataques recebem o bônus de +2 da investida, mas devem ser feitos contra a mesma criatura.\nÓDIO PURO O ginete recebe +5 em testes de Vontade quando está seguindo ordens de um superior e +2 em rolagens de dano contra humanoides não humanos.\nFor 3, Des 1, Con 3, Int 0, Sab –1, Car 0\nPERÍCIAS Cavalgar +4, Guerra +3, Intimidação +3.\nEQUIPAMENTO Escudo pesado, lança, meia armadura. TESOURO Padrão."
      }
    ]
  },
  { id: "Caminho para Liberdade",
  name: "Caminho para Liberdade",
  theme: "Fantasia e Luta contra a Opressão",
  image: "/aventuras/caminho-para-liberdade.png",
  summary: "No outrora imponente Império de Tauron, os heróis chegam à vila de Colina Verde apenas para serem oprimidos por minotauros gananciosos. Após uma derrota esmagadora para um centurião corrompido, eles são salvos por uma minaura paladina de Valkaria e devem fugir por túneis cheios de perigos.",
  sections: [
    {
      type: "text",
      content: "O outrora imponente Império de Tauron hoje está despedaçado. O que já foi um símbolo de unidade agora são centenas de vilas e cidades isoladas, muitas vezes sob controle de pequenos déspotas. O governo em Tiberus pouco pode fazer, pois enfrenta o maior inimigo da própria realidade dentro de seu território."
    },
    {
      type: "text",
      content: "Entretanto, dentro do próprio Império existem heróis com outra visão de mundo. Aqueles que lutam contra os que insistem no papel de opressores estão sempre atentos, prontos a recrutar mãos hábeis à sua causa. Ainda assim, muitos monstros sem escrúpulos colocam a liberdade das pessoas abaixo de seus desejos, e continuam cometendo crimes terríveis."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "RESUMO DA AVENTURA"
    },
    {
      type: "text",
      content: "Caminho para a Liberdade é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 1º nível em Tormenta20."
    },
    {
      type: "text",
      content: "Através de algum chamado, os aventureiros chegam na vila de Colina Verde. Uma vila tão comum, com um nome tão banal que provavelmente há centenas de outras com o mesmo nome espalhadas por Arton."
    },
    {
      type: "text",
      content: "Mas ali, logo em sua entrada, um grupo particular de minotauros inescrupulosos, arraigados a valores que muitos membros de sua raça hoje consideram sem propósito, abordam o grupo de forma truculenta, ameaçando sua passagem caso não entreguem suas armas e outros equipamentos. Caso passem pacificamente, verão outros acontecimentos que os estimulam a agir contra os soldados. De uma forma ou de outra, um combate começa, e o líder militar dos adversários aparece, tornando a vitória improvável."
    },
    {
      type: "text",
      content: "Acordando em uma cela, os personagens são contatados por uma figura misteriosa, dizendo que pode ajudar com a fuga se prometerem apoiar a libertação da vila. A figura, uma paladina de Valkaria, solta os aventureiros e os guia por uma série de túneis. Perto da saída, o grupo é atacado por uma aranha gigante, determinada a transformá-los em sua refeição."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1: QUEM VEM LÁ?"
    },
    {
      type: "text",
      content: "A vila de Colina Verde não difere muito de outras no que um dia foi conhecido como o reino das histórias: casas simples, um muro externo para defender de ataques, e fazendas nos arredores. Desde as Guerras Táuricas, entretanto, tudo passou a ser parte do Império. A vida poderia ter continuado igual, se o lugar não tivesse chamado a atenção de um governador especificamente ganancioso. Hoje, enquanto Tiberus jaz sob a sombra de Tauron, o controle de Colina Verde está sob pesado domínio de um grupo cruel de minotauros."
    },
    {
      type: "text",
      content: "Os personagens são chamados por um amigo, parente ou alguém em quem confiem. Segundo essa fonte, os impostos da vila são abusivos, estrangulando qualquer prosperidade que havia nas fazendas locais. E, segundo ordens do governador local, aqueles que não pagam, ou o desafiam, são punidos tendo que servir compulsoriamente, o que é apenas um eufemismo para escravidão."
    },
    {
      type: "text",
      content: "Todos os portões da cidade são guardados por ao menos quatro legionários em treinamento, vestindo armaduras de couro em estilo tapistano. Instruídos por seus superiores, eles interrogam as pessoas, de forma rude. Aquelas que têm a entrada na cidade recusada são enxotadas com empurrões. Quando os personagens se aproximam, um dos minotauros bufa pesadamente e caçoa. “Um mau cheiro desse? Só podem ser aventureiros.”"
    },
    {
      type: "text",
      content: "As perguntas que fazem são simples: “O que estão fazendo na cidade? De onde estão vindo? O que trazem para ajudar a comunidade?”. Porém, os minotauros claramente não têm qualquer interesse nessas respostas. Pedem a todos que entreguem suas armas e paguem uma taxa de T$ 10, pela confecção de um documento que permite a estadia temporária. Qualquer resposta que os ofenda, e eles se ofendem facilmente, inicia-se um combate."
    },
    {
      type: "text",
      content: "Criaturas. Recrutas Legionários x4 (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Um dos minotauros vai usar seu primeiro turno para tocar um sino, avisando à vila que há invasores. A cada 1d4+1 turnos chega um novo recruta legionário."
    },
    {
      type: "text",
      content: "Se aceitarem pagar o valor e deixar suas armas, a entrada é aceita. De cara fica a impressão de que se trata de um lugar triste, as pessoas na rua parecem exaustas, arrastando os pés e com um semblante melancólico. Mesmo entrando pacificamente, os minotauros param os personagens constantemente, sempre tentando causar alguma confusão. Caso tenham vindo para ajudar alguém, essa pessoa pode estar sendo arrastada à força de sua casa, motivando os aventureiros a finalmente comprarem uma briga."
    },
    {
      type: "text",
      content: "De uma forma ou de outra, uma confusão com os recrutas se inicia. Repentinamente, eles ouvem passos pesados."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2: MAGNUS DE TAURON"
    },
    {
      type: "text",
      content: "O minotauro que se aproxima é bem diferente dos jovens que vocês vêm enfrentando. Mais alto, chifres completamente negros e com diversas cicatrizes cruzando o rosto bovino. Apoiado em seu ombro, carrega um imenso machado de guerra. Veste uma loriga segmentada já sem brilho. Quando chega, todos os recrutas na área formam um círculo ao redor, isolando vocês e ele."
    },
    {
      type: "text",
      content: "O minotauro se aproxima, aponta o machado na direção dos personagens e diz “Eu, Magnus de Tauron, centurião imperial, ordeno que se entreguem! Ou que o Deus da Força tenha pena de vocês.” Mesmo que haja algum movimento para se entregar, Magnus dispara para os aventureiros em uma investida."
    },
    {
      type: "text",
      content: "Criaturas. Magnus de Tauron (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "Todos os ataques de Magnus serão não-letais (sofrendo uma penalidade de –5); ele tenta usar principalmente a lateral de seu machado para golpear seus inimigos. Este é um combate propositalmente desequilibrado. Magnus é muito mais poderoso que o grupo, e representa um desafio praticamente intransponível no nível atual. O objetivo de Magnus é desacordar os personagens para jogá-los em uma masmorra e depois forçá-los a trabalhar. Ao redor dos aventureiros e do minotauro, o círculo dos recrutas torce por seu líder e evita tentativas de fuga."
    },
    {
      type: "text",
      content: "É quase impossível, mas se, por uma sequência de coincidências incríveis, os personagens derrotarem Magnus, eles são atacados por uma decúria de recrutas (veja em NPCs & Criaturas). A decúria também causa apenas dano não-letal (e sofre a penalidade de –5 para isso)."
    },
    {
      type: "text",
      content: "Também é possível apenas se render. Neste caso, são todos algemados e levados para a masmorra."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3: NAS ENTRANHAS DA FERA"
    },
    {
      type: "text",
      content: "O tempo passa de forma um tanto caótica para aqueles que ficaram inconscientes. Quando seus olhos finalmente abrem, percebem que estão ainda doloridos, agora presos em uma masmorra, com suas mãos algemas. Além do grupo há uma quinta pessoa. Ela também parece desacordada, mas assim que todos despertam, reage com uma animação atípica para a situação."
    },
    {
      type: "text",
      content: "Todos que estavam inconscientes estão novamente com 1 PV e ao menos 1 PM. Os equipamentos dos personagens estão empilhados do lado de fora da cela, em um canto de pedras. Caso alguém tenha se entregado, a estranha personagem que divide a sala com eles pede para que se acalmem, pois ela vai ajudar todos."
    },
    {
      type: "text",
      content: "“Vocês finalmente acordaram! Eu estava aguardando vocês voltarem a si para fazer uma proposta. Além disso, posso curar vocês. Vamos começar pela cura.”"
    },
    {
      type: "text",
      content: "A pessoa misteriosa, agora revelada, é uma mulher de traços vestigiais bovinos. Minotauros e pessoas treinadas em Conhecimento a reconhecem como uma minaura, uma rara “meio-minotauro”."
    },
    {
      type: "text",
      content: "“Bem, vamos vamos, não temos o dia todo. Vocês querem sair daqui, certo?” quando olham novamente para ela, a minaura está de pé, suas mãos libertas dos grilhões. “Podem me chamar de Tabitha. Sou uma paladina de Valkaria.”"
    },
    {
      type: "text",
      content: "Tabitha então prossegue, libertando cada aventureiro curando todos os pontos de vida perdidos. Ela então saca uma chave escondida nas roupas e abre a porta da cela. “Peguem as suas coisas ali, mas nossa saída não é por cima.”"
    },
    {
      type: "text",
      content: "Além dos equipamentos removidos dos personagens, o grupo encontra também dez essências de mana e quatro bálsamos restauradores, parte dos recursos dos legionários. Quando olham ao redor, veem Tabitha abrindo a última cela do corredor. Ela acena para que entrem, porém, se não entrarem, empurra uma parede que parece feita de tijolos de pedra, mas é apenas uma passagem secreta."
    },
    {
      type: "text",
      content: "Se perguntada como sabe desse caminho, sorri e diz: “Quando você passa tanto tempo presa quanto eu, acaba aprendendo um ou outro truque de como escapar desse lugar. Por sorte esses minotauros que se instalaram aqui ainda não os descobriram.”"
    },
    {
      type: "text",
      content: "Assim que todos passam pela fenda, Tabitha também entra, e empurra a parede falsa de volta à posição original, fazendo força para travá-la."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4: ESTALACTITE OU ESTALAGMITE?"
    },
    {
      type: "text",
      content: "Assim que a passagem é fechada, o ambiente se torna completamente escuro, impossível de enxergar. Tabitha acende uma tocha e pergunta: “Por acaso vocês não têm tochas, têm?”. Caso tenham, ela pede que acendam, para facilitar a travessia."
    },
    {
      type: "text",
      content: "O lugar tem um cheiro mineral característico de cavernas, e ao longe é possível ouvir o som de gotas pingando do teto. Quando o caminho a frente se torna visível, é possível enxergar longas estalagmites se projetando do chão como presas de uma fera. Olhando para o teto, também existem diversas estalactites penduradas, prontas a cair a qualquer momento."
    },
    {
      type: "text",
      content: "Tabitha faz um gesto para fazerem silêncio: “Essa é a parte complicada. Passar aqui nesse trecho requer silêncio. Vamos devagar”. Infelizmente, nem todos são ágeis como a paladina, e para representar essa travessia, use o perigo complexo abaixo."
    },
    {
      type: "text",
      content: "Quando o último personagem deixar a área perigosa, Tabitha solta um suspiro aliviado. “Nossa, eu achei que dessa vez eu ia dessa para uma pior!” Sem conter mais sua voz, a minaura acaba causando a queda de diversas estalactites agora, sem qualquer efeito."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5: QUASE LIVRES"
    },
    {
      type: "text",
      content: "A caverna continua, agora aparentemente mais tranquila. Tabitha explica que esse era um caminho usado para facilitar a fuga da população, caso a vila fosse cercada. Mas que infelizmente hoje serve apenas como rota de fuga de presos. “Aproveitando, eu obviamente não resgatei vocês só pela bondade do meu coração. Quer dizer, fiz, mas depois de ver como vocês enfrentaram o biltre Magnus, mesmo sem chance, eu queria saber se...”"
    },
    {
      type: "text",
      content: "A fala da paladina é interrompida. Todos vocês ouvem um guincho, um barulho nojento de cliques vindos da escuridão. Aqueles que estiverem com uma tocha ou forem capazes de enxergar no escuro podem fazer um teste de Percepção ou Sobrevivência (CD 17). Passando, percebem algo terrível: o lugar onde estão agora é o covil de um monstro, mais especificamente uma aranha gigante, pronta para atacá-los!"
    },
    {
      type: "text",
      content: "Criatura. Aranha gigante (Tormenta20, p. 287)."
    },
    {
      type: "text",
      content: "Enfrentar a criatura, ainda mais se estiverem cansados e feridos, é temerário, mas eles possuem uma vantagem contra a teia: Tabitha. A paladina, além de ser uma combatente prodigiosa, pode usar sua habilidade como parceira (veja NPCs & Criaturas) para tornar um personagem imune a efeitos de movimento por uma rodada, livrando-se da condição enredado causada pela teia."
    },
    {
      type: "text",
      content: "Além disso, o combate direto não é a única opção. Tabitha diz que a saída está a 100m em uma determinada direção e, se chegarem ao lado de fora, talvez a criatura não continue a perseguição. Se decidirem fugir, caso um personagem role 1 natural no dado no teste de Atletismo para correr, fica caído e sofre 1d6 pontos de dano de impacto."
    },
    {
      type: "text",
      content: "Saindo da caverna, a luz do dia intimida a criatura, e ela volta para a escuridão."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo: UMA PROPOSTA"
    },
    {
      type: "text",
      content: "Todos ainda estão tentando recuperar o fôlego. Cansados, feridos, mas finalmente livres. Tabitha está tão surpresa quanto todos, e diz que aquele monstro não estava ali da última vez. Ela pede desculpas e fala que, assim que descansar, curará todos."
    },
    {
      type: "text",
      content: "Mas antes, ela lembra do que estava falando antes do ataque da aranha gigante. “Sim, antes de continuarmos... eu preciso pedir a ajuda de vocês. Vejam, Colina Verde foi onde eu nasci, mas vê-la assim tomada não é certo! Este tempo de dominação já passou. Eu tenho planos, mas preciso da ajuda de heróis que queiram combater essa tirania. Posso contar com vocês?”"
    },
    {
      type: "text",
      content: "Enquanto pensam sobre a proposta, os personagens avançam para o 2º nível!"
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Travessia das Estalactites"
    },
    {
      type: "text",
      content: "Objetivo: Atravessar a área sofrendo o mínimo de dano possível.\nEfeito: Os personagens agem na ordem de sua Iniciativa, e cada um deve acumular três sucessos na ação travessia silenciosa para sair da área perigosa. Entretanto, assim que acontecer a primeira falha na ação travessia silenciosa, as estalactites do teto começam a cair, causando 1d6 pontos de dano de perfuração por falhas subsequentes à primeira.\nTravessia Silenciosa (Furtividade CD 15): O personagem dá passos lentos e calmos em direção a saída.\nCorrer à Toda (Atletismo CD 15): Um personagem percorre todo o caminho (efetivamente conseguindo os três sucessos), mas sofre 2d6 pontos de dano de perfuração. Caso ninguém tenha falhado ainda, usar essa ação conta como uma falha.\nInterpor-se (Nenhum): Um personagem usa sua rodada para sofrer o dano que um outro de menor iniciativa sofreria."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs & Criaturas"
    },
    {
      type: "text",
      content: "RECRUTA LEGIONÁRIO (ND 1/4)\nHumanoide (minotauro) Médio\nIniciativa +2, Percepção +1, faro\nDefesa 15, Fort +5, Ref +0, Von +3\nPontos de Vida 9\nDeslocamento 9m (6q)\nCorpo a Corpo Lança +7 (1d6+3) e chifres +7 (1d6+3).\nMedo de Altura Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), o recruta fica abalado.\nFor 3, Des 0, Con 2, Int 0, Sab –1, Car –1\nEquipamento Couro batido, escudo leve, lança. Tesouro Metade."
    },
    {
      type: "text",
      content: "DECÚRIA DE RECRUTAS (ND 2)\nHumanoide (minotauro) Grande\nIniciativa +2, Percepção +1, faro\nDefesa 22, Fort +5, Ref +0, Von +3\nPontos de Vida 25\nDeslocamento 9m (6q)\nCorpo a Corpo [Bando] Lanças +14 (1d6+3) e chifres +14 (1d6+3).\nMedo de Altura Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), a decúria fica abalada.\nFor 3, Des 0, Con 2, Int 0, Sab –1, Car –1\nEquipamento Couro batido, escudo leve, lança. Tesouro Metade."
    },
    {
      type: "text",
      content: "MAGNUS DE TAURON (ND 5)\nAntes da queda do Deus da Força, Magnus era um de seus guerreiros sagrados, jurando proteger os fracos, inclusive opondo a política opressora do Império. Infelizmente, com a queda de seu deus, Magnus se viu amargo, cheio de mágoas e parou de se importar com os valores que um dia defendeu. Se ainda há algo do valoroso campeão dentro dele, se esconde nos rincões mais profundos de seu ser.\nHumanoide (minotauro) Médio\nIniciativa +4, Percepção +4, faro\nDefesa 26, Fort +16, Ref +4, Von +10\nPontos de Vida 130\nDeslocamento 6m (4q)\nCorpo a corpo Machado de guerra +16 (3d6+6, x3) e chifres +16 (1d6+6).\nOrdens (Movimento) Magnus grita ordens para seus aliados em alcance médio. Eles recebem +2 em testes de perícia até o fim da cena.\nTremer a Terra (Movimento) Todas as criaturas em alcance curto de Magnus ficam caídas (Fort CD 18 evita).\nVarrer (Livre) Uma vez por rodada, quando Magnus faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode realizar um ataque adicional contra outra criatura dentro do seu alcance.\nFor 4, Des 0, Con 3, Int 0, Sab 0, Car 2\nPerícias Atletismo +12, Guerra +7, Religião +6.\nEquipamento Loriga segmentada reforçada, machado de guerra aumentado cruel, símbolo sagrado de Tauron. Tesouro Padrão."
    },
    {
      type: "text",
      content: "TABITHA\nO começo da vida de Tabitha já foi diferente de muitos minauros como ela. Quando nasceu, seus pais ficaram extremamente felizes por ela não ser nem apenas como o pai, ou apenas como a mãe, mas sim um encontro entre ambos.\nCrescendo em Colina Verde, a menina sempre sentiu um estranho chamado, e assim que pôde, viajou pela primeira vez com uma companhia de mercadores para conhecer o mundo. Mas o que encontrou foi algo muito diferente, onde minotauros oprimiam outros povos.\nFinalmente compreendendo e abraçando sua vocação, foi ordenada paladina de Valkaria, e decidiu lutar contra toda forma de opressão. Quando soube o que estava acontecendo em sua vila, sabia por onde começar.\nParceira Veterana. Tabitha auxilia os aventureiros em combate, mas também divide uma parte da suas dádivas de Valkaria com quem estiver acompanhando. O personagem que Tabitha estiver ajudando recebe +2 em testes de ataque e fica imune a condições de movimento."
    }
  ]
  },
  { id: "Túneis e Trolls",
  name: "Túneis e Trolls",
  theme: "Exploração Subterrânea e Terror Finntroll",
  image: "/aventuras/tuneis-e-trolls.png",
  summary: "Dois irmãos anões contratam os heróis para encontrar a oficina secreta de um ancestral nas profundezas. A jornada revela que finntrolls também buscam os segredos do lugar, espalhando uma infecção vegetal que transformará um dos aliados em um monstro letal.",
  sections: [
    {
      type: "text",
      content: "A coluna Breves Jornadas oferece aventuras simples, rápidas e completas para Tormenta20, com tudo que será necessário para jogar. Fichas especiais serão fornecidas aqui, enquanto àquelas presentes no livro básico terão indicadas as páginas em que se encontram."
    },
    {
      type: "text",
      content: "O objetivo é fornecer ao mestre um ponto de partida eficiente para que todos se divirtam por uma tarde, ou comecem uma nova campanha. Se precisar de fichas de personagens prontas, é possível encontrá-las na coluna Heróis de Bolso, no Blog da Jambô."
    },
    {
      type: "text",
      content: "Esta aventura chama-se Túneis e Trolls."
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
      content: "Anões são exímios ferreiros e suas armas e armaduras são cobiçadas por todo o Reinado e além. Porém, não é incomum que um mestre anão decida ocultar suas técnicas, para que não sejam copiadas por outras famílias. Lendas de oficinas incríveis escondidas se espalham nos tortuosos túneis subterrâneos que supostamente levariam a Doherimm se espalham pelas tavernas."
    },
    {
      type: "text",
      content: "Entretanto, um perigo terrível se esconde ainda mais abaixo, nas sombras do submundo. Por muito tempo se acreditou que trolls, monstros vegetais de grandes poderes regenerativos, surgiam naturalmente. Porém, alguns anões e aventureiros sabem a verdade: Trollkyrka, o império dos finntrolls, um povo cruel e escravagista, é constante ameaça a todos."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Resumo da Aventura"
    },
    {
      type: "text",
      content: "Túneis e Trolls é uma breve jornada, uma aventura curta pensada para uma sessão única, mas que pode ser inserida em uma campanha maior. É ideal para um grupo de quatro personagens de 4º nível em Tormenta20."
    },
    {
      type: "text",
      content: "O grupo é contratado por dois irmãos anões para investigar uma antiga série de cavernas em busca de uma oficina ancestral seguindo as pistas deixadas por um antigo parente. No caminho, ele é atacado por dois gorloggs, um deles com uma estranha mutação vegetal."
    },
    {
      type: "text",
      content: "Caminhando por diversos corredores de pedra, enfrentam os cadáveres de anões deixados para trás e armadilhas perigosas. Na oficina encontram três finntrolls, também em busca do segredo do anão.. A líder foge, porém os caçadores enfrentam os aventureiros. Infelizmente, um dos anões foi infectado pela mutação de um dos gorloggs, tornando-se parcialmente troll e atacando o grupo violentamente."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 1 – Não é uma mina"
    },
    {
      type: "text",
      content: "Os aventureiros são convidados a uma taverna por uma missiva enviada por dois membros de uma guilda de ferreiros. A carta é identificada pelo selo desta organização. Ao chegarem encontram, sentado ao balcão da taverna, um anão largo, de barba e cabelos negros trançados, bebendo silenciosamente. Ele segue na direção do grupo."
    },
    {
      type: "text",
      content: "“Meu nome é Brokk”, ele diz. Mas antes que possa continuar é interrompido pelo som de uma disputa de braço-de-ferro. Brokk massageia as têmporas. “E aquela, torcendo o braço do minotauro é minha irmã, Eitri”."
    },
    {
      type: "text",
      content: "O anão estende a mão, assovia para que ela se junte a eles, e todos se dirigem a uma das mesas do estabelecimento. Eles são muito parecidos, mas ela tem volumosas suíças ao invés de barbas."
    },
    {
      type: "text",
      content: "“Bah! Esses são os aventureiros? Nossa, que impressionantes! Adoraria fazer umas armas ou armaduras bem bacanas para vocês! Quem sabe um dia desses, ein?”"
    },
    {
      type: "text",
      content: "Ambos vestem macacões de couro reforçado, com um pingente em formato de martelo e bigorna. Brokk se prontifica a pagar uma rodada de canecos de cerveja, mas Eitri pede algo mais forte, ela diz que ele pagará a conta da noite, fazendo seu irmão novamente massagear as têmporas. Ele então conta:"
    },
    {
      type: "text",
      content: "“Encontramos o diário de um ancestral nosso, Trokk Ferropesado, indicando o caminho para sua antiga oficina. Ferreiros anões gostam de esconder essas coisas com medo que alguém copie suas técnicas, mas pelo jeito ele queria que a coisa ficasse na família. O texto fala de registros em um tomo deixado para trás, e nós desejamos recuperá-lo.”"
    },
    {
      type: "text",
      content: "O pagamento oferecido pela missão é T$ 400, para cada um, e um acordo perpétuo com a guilda a qual pertencem, disposta a oferecer serviços e itens pela metade do preço. Quaisquer itens encontrados no lugar serão cedidos aos aventureiros, depois de terem sido estudados e analisados pelos ferreiros anões."
    },
    {
      type: "text",
      content: "Se a proposta for aceita, Brokk irá sugerir partir imediatamente, mas Eitri o convence a ficar na estalagem essa noite, com a desculpa de descansar — embora o plano verdadeiro seja farrear com os aventureiros. Na manhã seguinte, todos partem em direção a caverna."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 2 – Passagem para as trevas"
    },
    {
      type: "text",
      content: "As coordenadas presentes no diário levam a uma região remota, onde pequenas colinas e montanhas se elevam. Após uma curta viagem, todos chegam à entrada de uma caverna natural. Ela é estrita e quase imperceptível, seu interior sombrio esconde o que possa haver à frente."
    },
    {
      type: "text",
      content: "Os anões, e aqueles treinados em Percepção, notam, entalhada na lateral de uma rocha e coberta por musgo, uma marca que lembra muito a da guilda a que os anões pertencem, feita talvez para identificar a entrada do caminho. Ainda assim, uma vez lá dentro, a trilha é tortuosa."
    },
    {
      type: "text",
      content: "Brokk e Eitri seguem pela escuridão total sem parecerem afetados. Se algum membro do grupo não for capaz de enxergar no escuro, os anões oferecem tochas. Personagens treinados em Percepção notam que os irmãos constantemente tocam as paredes, provavelmente em busca de novas marcas."
    },
    {
      type: "text",
      content: "É tudo tenebrosamente silencioso, principalmente para os acostumados ao burburinho constante da cidade. Conversas são carregadas pelo eco e rebatidas nas paredes lisas criando um clima incômodo. Os únicos sons ambientes perceptíveis são dos pés arrastando nas rochas e uma eventual goteira de condensação (processo de criar estalagmites)."
    },
    {
      type: "text",
      content: "Vários metros no interior da caverna, chega-se a um abismo. Analisando as bordas da depressão pode-se ver sinais de que havia uma escadaria aqui no passado, destruída de alguma forma há muito tempo. Apesar disso, a face muito acidentada da rocha permite escalar com um teste de Atletismo (CD 10), para descer os 20 metros até um novo patamar. Os irmãos anões possuem cordas para auxiliar no processo, fornecendo +5 no teste. Se ainda assim alguém cair, lá embaixo há um lago subterrâneo, que reduz a severidade da queda (reduzindo a distância percorrida em 6m, veja Tormenta20, capítulo 7: Ameaças, em Queda)."
    },
    {
      type: "text",
      content: "Assim que todos chegam ao fundo do abismo, veem a caverna se transformar em estruturas escavadas na rocha, com sinais óbvios de manufatura anã. Brokk e Eitri ficam muito animados, discutindo como isso prova a veracidade do diário. Infelizmente, isso os deixa distraídos e eles não notam quando uma criatura surgindo de repente, mordendo um dos dois (role 1d4, 1 e 2 será Brokk, 3 e 4 Eitri) e levando-o para longe."
    },
    {
      type: "text",
      content: "O monstro é uma fera selvagem que nos anos recentes se espalhou pelo Reinado, um gorlogg. Entretanto, este apresenta uma característica diferente: uma cobertura do que parece musgo se espalhando pelo couro. Um segundo animal similar, mas sem a cobertura de musgo, sai da escuridão e ataca!"
    },
    {
      type: "text",
      content: "Criaturas. Gorlogg (Tormenta 20, capítulo 7: Ameaças)."
    },
    {
      type: "text",
      content: "As bestas são violentas, movidas por fome. Os anões estão longe, enfrentando a outra criatura. Quando o gorlogg normal for derrotado, os irmãos se aproximam novamente, tendo lidado com a outra fera, um deles ainda cambaleando."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 3 – Infecção"
    },
    {
      type: "text",
      content: "Desesperados, os anões mostram o resultado do ataque: o braço daquele que foi ferido primeiro está coberto de uma matéria vegetal similar à presente no couro do gorlogg que enfrentaram. A pele ao redor está esverdeada, assim como suas veias, agora saltadas."
    },
    {
      type: "text",
      content: "Um personagem treinado em Cura pode realizar um teste (CD 20) para analisar a ferida: tudo indica haver algo como uma infecção profunda, que só poderia ser curada com poderosos milagres divinos, ou uma intervenção profunda. O anão infectado dirá não adiantar voltar à cidade, então pede para seguirem em frente, pois talvez encontrem algo para impedir o avanço da condição."
    },
    {
      type: "text",
      content: "\"Isso é coisa dos finntrolls!\" diz o anão que não foi ferido \"Os malditos experimentam em várias criaturas, transformando nesses monstros vegetais. Eu juro pelas barbas de Heredrimm que vou acabar com os desgraçados por isso!\""
    },
    {
      type: "text",
      content: "Lentamente, eles todos seguem pelos corredores artificiais, se dirigindo a um novo trecho do complexo subterrâneo."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 4 – Os que ficam para trás"
    },
    {
      type: "text",
      content: "Avançando pelas câmaras, a condição do anão ferido só parece piorar, mas escorado em seu irmão/irmã segue bravamente. Os salões de pedra possuem caixas e objetos deixados para trás, escondendo possíveis tesouros e relíquias de outro tempo."
    },
    {
      type: "text",
      content: "Cada personagem pode fazer um teste de Investigação (CD 20), encontrando assim algo da Tabela de Tesouro por Nível de Desafio para o ND 5 (apenas itens)."
    },
    {
      type: "text",
      content: "Logo a calmaria e silêncio são substituídos por gemidos agoniados e passos lentos. Algo aconteceu aqui: um grupo de anões ficou para trás, possivelmente para defender aqueles que passavam. Mas essas almas não sobreviveram e ao falecerem foram “abençoados” pela deusa materna de seu povo, retornando como mortos-vivos."
    },
    {
      type: "text",
      content: "Criaturas. Turbas de Zumbi x2 (Tormenta20, capítulo 7: Ameaças)."
    },
    {
      type: "text",
      content: "Estes infelizes reerguidos atacam qualquer ser vivo, mas parecem odiar de forma primitiva outros anões e portadores de símbolos sagrados de deuses como Azgher ou Khalmyr."
    },
    {
      type: "text",
      content: "Quando são derrotados, o som de um suspiro aliviado espectral preenche todo o ambiente, deixando a passagem aberta para o interior de Arton."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 5 – Masmorras profundas"
    },
    {
      type: "text",
      content: "Há uma sinistra tensão no ar conforme o caminho prossegue. A condição de Brokk ou Eitri vai se agravando a olhos vistos. Não há tempo para lidar com isso, pois à frente há membros de criaturas presas em antigas armadilhas anãs."
    },
    {
      type: "text",
      content: "Um teste de Sobrevivência (CD 20) revela que essas partes do corpo de seres do subterrâneo, como trolls e outros monstros. Os personagens ganham +5 em Investigação para encontrar armadilhas nesta cena."
    },
    {
      type: "text",
      content: "Seguindo em frente, passam por um corredor aparentemente ordinário. Peça a todos um teste de Investigação (CD 20). Aqueles que passarem no teste percebem a armadilha antes de ativá-la, porém, os que falharem devem fazer um teste de Reflexos (CD 20) para evitar o mecanismo de blocos que desce do teto e esmaga tudo em seu caminho, causando 6d6 pontos de dano de impacto, numa versão da armadilha bloco de pedra (Tormenta20, capítulo 7: Ameaças)."
    },
    {
      type: "text",
      content: "Mas, devido à condição do anão ferido, será necessário desarmar a armadilha, através de um teste de Ladinagem (CD 20), ou então passar correndo com um teste de Atletismo (CD 20), para os irmãos conseguirem atravessar a área. Caso um personagem tente um teste de Atletismo para carregar o anão ferido e falhe, sofrerá o dano da armadilha acima (ainda com direito a um teste de Reflexos para evitá-lo)."
    },
    {
      type: "text",
      content: "Deixando a armadilha para trás, os salões vão se alargando ainda mais."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 6 – Oficina Subterrânea"
    },
    {
      type: "text",
      content: "O estado de Eitri ou Brokk está crítico, braço e ombro tomados pelo verde do limo, todas as veias do corpo no mesmo tom. Um dos olhos perdeu a cor, porém ele (ou ela) continua acompanhando o grupo, no ritmo possível. Logo chegam à uma câmara larga, a antiga oficina anã abandonada, local onde provavelmente está o livro de técnicas de forja."
    },
    {
      type: "text",
      content: "Entretanto, aqui também há três figuras humanoides, esguias e extremamente pálidas. Duas investigam a área, seus olhos penetrando as trevas. A terceira, vestida em mantos ornados e intrincados, ostentando um penteado delicadamente complexo que pouco combina com o ambiente rústico da oficina, observa aqueles à frente com perceptível tédio em seu rosto cruel."
    },
    {
      type: "text",
      content: "Se tiverem acendido tochas, ou qualquer outra fonte de luz, a chegada do grupo logo é percebida. Anões, e todos que passem em um teste de Conhecimento (CD 20), reconhecem esses humanoides como finntrolls, um cruel e sádico povo do subterrâneo, em constante guerra contra os anões, e responsáveis pela criação dos trolls comuns."
    },
    {
      type: "text",
      content: "“Finntrolls!”, diz o anão saudável em fúria contida, “Malditos finntrolls!”"
    },
    {
      type: "text",
      content: "Ao notar a chegada, a finntroll bem vestida dá um comando para os outros dois perto do portão, em uma língua áspera e gutural. Um teste de Conhecimento para idiomas revela a ordem dada:"
    },
    {
      type: "text",
      content: "“Orloff, Kasmir, livrem-se dessas pestes da superfície e destes anões imundos!”"
    },
    {
      type: "text",
      content: "Ela então lança um feitiço de teletransporte, sumindo do local."
    },
    {
      type: "text",
      content: "Criaturas. Finntroll Caçadores x2 (Tormenta20, capítulo 7: Ameaças)."
    },
    {
      type: "text",
      content: "Os finntrolls combatem em conjunto, um tentando prender com sua rede enquanto o outro ataca o alvo, focando principalmente em anões."
    },
    {
      type: "text",
      content: "Após a luta, é possível vasculhar a área. Aparentemente o grupo de finntrolls estava buscando algo na oficina. Provavelmente as mesmas anotações que o grupo tinha a missão de encontar."
    },
    {
      type: "text",
      content: "Infelizmente, antes que o grupo possa investigar também, algo terrível acontece."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Cena 7 – Tragédia"
    },
    {
      type: "text",
      content: "O corpo do anão infectado convulsiona agachado, e então um berro animalesco escapa de sua garganta agora transformada. Quando se ergue, os olhos não têm mais o brilho anterior, e suas mãos têm o formato de garras terríveis. O anão infectado avança sobre os aventureiros com uma velocidade feral."
    },
    {
      type: "text",
      content: "Criaturas. Anão infectado (NPCs & Criaturas)."
    },
    {
      type: "text",
      content: "O irmão saudável está chocado, sem conseguir reagir de qualquer forma. Não há qualquer forma de se comunicar com a criatura, que parece não ter mantido qualquer consciência. Quando atingido, seus ferimentos fecham-se com a mesma agilidade que os gorloggs na encontrados antes. É possível tentar amarrar a criatura, mas não há nenhuma chance de trazê-la de volta ao normal."
    },
    {
      type: "text",
      content: "Resta apenas o combate amargo e, ao fim, silêncio."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "Epílogo – Como seguir?"
    },
    {
      type: "text",
      content: "Enquanto recuperam o ar após a luta final, o anão sobrevivente se levanta e reage de forma particular."
    },
    {
      type: "text",
      content: "Se Brokk tiver sobrevivido, fica atônito. O anão passa longos instantes observando a oficina ao seu redor. Desnorteado, começa a procurar o tomo de técnicas de forja, mas quando o encontra, começa a chorar, e entrega ao grupo, sem desejar guardar qualquer memória dessa jornada trágica. O tomo não tem todos segredos do antigo mestre anão, mas fornece um bônus de +5 em testes de Ofício (Armeiro), mas apenas para armas metálicas e armaduras pesadas."
    },
    {
      type: "text",
      content: "Se fa sobrevivente for Eitri, ela se enfurece e começa a quebrar tudo o que encontra. Se tentar, o grupo encontra o tomo do antigo mestre anão sem dificuldade. Depois disso, todos retornam à superfície. Eitri entende a necessidade de recuar e se preparar ante um inimigo poderoso, mas intima os aventureiros a caçarem os finntroll, em busca de vingança. A anã paga o valor prometido, e oferece algo mais: uma arma feita de adamante, caso decidam auxiliá-la novamente."
    },
    {
      type: "text",
      content: "Se passarem mais tempo procurando na oficina, o grupo pode encontrar uma armadura completa de mitral, além de diversos documentos dos anões. Os túneis continuam, em direção ao desconhecido, porém é o momento de curar as feridas, no corpo e na alma."
    },
    {
      type: "text",
      content: "Ao se recuperarem dessa terrível jornada subterrânea, os personagens avançam para o 5º nível."
    },
    {
      type: "break"
    },
    {
      type: "subtitle",
      content: "NPCs & Criaturas"
    },
    {
      type: "text",
      content: "ANÃO INFECTADO (ND 3)\nMonstro Médio\nIniciativa +3, Percepção +5, visão no escuro\nDefesa 20, Fort +15, Ref +4, Von +6, cura acelerada 10/ácido ou fogo\nPontos de Vida 70\nDeslocamento 6m (4q)\nCorpo a Corpo Duas garras +12 (1d6+4)\nDilacerar Se o anão infectado acerta dois ataques de garra em uma mesma criatura na mesma rodada, causa mais 2d6+4 pontos de dano.\nFor 3, Des 0, Con 5, Int –3, Sab 0, Car –2\nTesouro Padrão."
    }
  ]
  },
  
];