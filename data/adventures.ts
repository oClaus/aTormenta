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
];