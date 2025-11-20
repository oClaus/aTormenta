import { Race } from "@/types/race";

export const races: Race[] = [
  {
    id: "1",
    name: "Anão",
    origin: "Tormenta20 - Jogo do Ano",
    image: "/racas/anao.png",
    description: "Não existe nada mais confiável em Arton que um anão. Cachorros também são confiáveis, mas eu não compararia os dois em frente a um anão se fosse você. \n São troncudos, maciços, resistentes como os pedaços de minério pelos quais são apaixonados. Seus dedos curtos e grossos parecem pouco habilidosos, mas das mãos dos anões saem as armas e armaduras mais fabulosas de Arton. \n Quando uma criança anã nasce, cada choro é acompanhado de uma martelada do melhor ferreiro da família em uma bigorna cerimonial. Eles acreditam que cada golpe fortalece o corpo e o espírito do recém-nascido pelo resto da vida. Não há nada que indique que a crença não é verdadeira. \n Um ditado humano diz que há apenas uma diferença entre anões e metal: o metal é duro, mas você pode martelar e depois derreter, e martelar de novo até que ele vire uma espada ou qualquer outra coisa. Já um anão não muda nem arreda pé, não importa o quanto você bata.\n A justiça é muito importante para os anões — tão importante quanto suas longas e vastas barbas. Por isso o patrono deles é Heredrimm, o deus que os humanos chamam de Khalmyr. Dizem que Tenebra tem um dedo ou dois na criação deles também, mas dependendo de quem estiver por perto, também não é bom falar isso em voz alta.\n A pátria dos anões, Doherimm — um complexo de cavernas em escala continental — é guardada a sete chaves. Só eles sabem o caminho para o reino e mesmo nobres importantes e amigos da raça só são levados até lá vendados, desacordados ou qualquer coisa do tipo. \n O subterrâneo é ameaçado pelos *finntroll*, inimigos jurados dos anões. Mesmo assim, muitos deles abandonam Doherimm e partem para a aventura na superfície. Não viajam só em busca de riquezas, mas também para dar uma amostra de sua honra e tradição ao resto do mundo.\n — Dynx, goblin paladino de Allihanna. \n\n Anões são o mais resiliente dos povos. Em suas cidadelas subterrâneas, trabalham duro escavando minas e forjando metal em belas armas, armaduras e joias. São honestos e determinados, honrando a família e a tradição. Apesar de sua profunda paixão por forja e cerveja, pouca coisa é mais preciosa para um anão que cultivar uma barba longa e orgulhosa.",
    abilities: [
      "Conhecimento das Rochas: Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
      "Devagar e Sempre: Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.",
      "Duro como Pedra: Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.",
      "Tradição de Heredrimm: Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas."
    ],
    // Modificadores FIXOS para Anão
    attributeModifiers: [
      { attribute: "con", modifier: 2 },
      { attribute: "sab", modifier: 1 },
      { attribute: "des", modifier: -1 }
    ]
  },
  {
    id: "2",
    name: "Elfo",
    origin: "tormenta20 - jogo do ano",
    image: "/racas/elfo.png",
    description: "Os elfos vieram de longe há muito tempo, em embarcações trazidas — dizem — por ventos divinos. São belos e esguios, de cabelos e olhos de cores tão variadas quanto o arco-íris. Suas vestes costumam ser intrincadas e fluidas como seus movimentos. Nada neles parece comum, rasteiro. É difícil não se sentir impressionado ou inspirado ao lado de uma presença élfica. Há sempre algo de mágico nos elfos. \n Um dia eles tiveram sua própria pátria, Lenórienn, no continente sul. Uma cidade majestosa, de torres espiraladas surgidas em meio à floresta, onde a magia e as artes eram ensinadas desde cedo. Onde tomos ancestrais ocupavam longas estantes e a poesia tomava os ares com suas rimas e melodias. \n Mas o conhecimento trouxe a arrogância, e a arrogância, a derrota. Lenórienn caiu, vítima da Aliança Negra dos goblinoides, um exército implacável. Depois, por conta de um estratagema de Glórienn, antiga Deusa dos Elfos, os membros da raça que não ficaram espalhados pelo Reinado foram escravizados pelos minotauros. O que sobrou foi um povo mergulhado em amargor, apoiado nas glórias de um passado destruído. \n Agora, porém, eles encaram uma chance de redenção. Com a morte de Tauron e livres dos desígnios de uma divindade mesquinha, os elfos do Reinado têm pela primeira vez um futuro em branco à frente. E ainda estão tentando descobrir o que fazer com ele. Enquanto uns buscam recuperar os conhecimentos perdidos de seu antigo reino, outros se misturam a ordens de cavalaria ou guildas de ladrões, usando seus talentos naturais para traçar seu próprio caminho, abraçando os deuses que melhor lhes convêm. \n “Das maiores tragédias nascem os maiores aventureiros”, diz um ditado que circula nas tavernas de Malpetrim. Parece algo feito sob medida para os elfos de Arton. \n — Garibaldo Cachimbo Caído, *hynne* bardo \n\n Elfos são seres feitos para a beleza e para a guerra, tão habilidosos com magia quanto com espadas e arcos. Elegantes, astutos, de vidas quase eternas, parecem superiores aos humanos em tudo. Poderiam ter governado toda Arton, não fosse a arrogância herdada de sua deusa. Com a queda de Glórienn, os elfos se tornaram um povo sem uma deusa. Um povo independente. Enquanto alguns veem a falta de uma divindade como uma tragédia, outros acreditam que, pela primeira vez na história, são livres.",
    abilities: [
      "Graça de Glórienn: Seu deslocamento é 12m (em vez de 9m).",
      "Sangue Mágico: Você recebe +1 ponto de mana por nível.",
      "Sentidos Élficos: Você recebe visão na penumbra e +2 em Misticismo e Percepção."
    ],
    attributeModifiers: [
      { attribute: "des", modifier: 1 },
      { attribute: "int", modifier: 2 },
      { attribute: "con", modifier: -1 }
    ]
  },
  {
    id: "3",
    name: "Humano",
    origin: "tormenta20 - jogo do ano",
    image: "/racas/humano.png",
    description: "Humanos são como uma praga: espalham-se por todo o mundo de Arton. \n Não interessa onde você olhe ou por onde passe. Nas Montanhas Sanguinárias, nas ilhas do Mar do Dragão-Rei, em alguma masmorra debaixo da terra, sempre haverá algum humano se metendo onde não deve, procurando alguma coisa. Não é à toa que são maioria. \n Aos quinze anos já se consideram adultos, andando por aí, sacudindo espadas e lançando feitiços malucos. \n Dizem que a culpa é de Valkaria. A deusa, que passou gerações presa em forma de estátua, hoje lidera todas as divindades e alimenta a ambição daqueles que chama de filhos. Faz com que queiram cada vez mais, não importa o que já tenham conseguido. Com exemplos como o arquimago Vectorius, que arrancou um pedaço enorme do chão para transformar em ilha voadora só por causa de uma aposta, ou Mestre Arsenal, que enfrentou o próprio Deus da Guerra para tomar seu lugar, é difícil convencê-los de que isso pode ser errado. Talvez nem seja. \n Humanos podem ter qualquer porte físico, cor de pele ou tipo de cabelo. São tão variados quanto suas ambições, tão diversos quanto as ideias que têm a cada instante. Suas tradições e modas vêm e vão rápido demais e eles fazem o que bem entendem. E embora a deusa criadora seja sua principal padroeira, humanos podem ser devotos de quais e quantos deuses desejarem. \n Ser humano é ter a liberdade e a conveniência de se tornar o que quiser, mesmo sem nem sempre compreender as responsabilidades que isso carrega. É ter o instinto aventureiro correndo no sangue. \n — Broktar Hellpipes, anão bardo \n\n O povo mais numeroso em Arton, humanos são considerados os escolhidos dos deuses, aqueles que governam o mundo. Em sua variedade e adaptabilidade, são encontrados em quase todos os pontos do continente — dos vales férteis do Reinado às vastidões áridas do Deserto da Perdição. São exploradores e desbravadores ambiciosos, sempre buscando algo além.",
    abilities: [
      "Versátil: Você se torna treinado em duas perícias à sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral à sua escolha.",
    ],
    attributeModifiers: [
      { description: "Escolha +1 em três atributos diferentes" }
    ]
  },
  {
    id: "4",
    name: "Qunari",
    origin: "Dragão Brasil - Dragon Age",
    image: "/racas/qunari.png",
    description: "Acredita-se que os Qunari vieram de além do mar, até pelo fato de costumarem ser os melhores navegadores de Thedas. Estabelecidos principalmente em Par Vollen e Seheron, os Qunari costumam ser vistos com suspeita pelo resto de Thedas. \n A cultura Qunari é muito fechada e existe variação nas nomenclaturas que são bem importantes. Apesar de existir a raça Qunari, você só é considerado um Qunari se seguir o Qun*, caso contrário é chamado de Tal-Vashoth, um termo para alguém que nasceu no Qun, mas o abandonou. Esse termo é considerado uma desonra. E alguém de outra raça que entre para o qun pode passar a ser chamado de qunari também. \n O Qun é o que rege a sociedade dos qunari, um conjunto de regras para manter a sociedade deles funcionando. Laços familiares não são tão fortes, e os qunari não são chamados pelos seus nomes normalmente, e sim pelo seu título. Por exemplo, o nome de Sten, em Dragon Age: Origins, é a função dele, mas nós tratamos como nome. Iron Bull, de Dragon Age: Inquisition, é uma exceção. O mais importante para o qunari é realizar a sua função e eles são regidos por três governantes, cada um responsável por uma área: Arishok (líder militar), Arigena (líder dos artesãos e trabalhadores braçais) e Ariqun (líder espiritual).",
    abilities: [
      "Estatura Intimidadora: Qunari podem usar Força em vez de Carisma para testes de Intimidação.",
      "Disciplina Militar: A forte disciplina militar que permeia a cultura qunari concede +2 em Iniciativa e Guerra.",
      "Lógica do Qun: Repressão da individualidade e foco cultural no autocontrole dão aos qunari +2 em Vontade e Guerra.",
    ],
    attributeModifiers: [
      { attribute: "for", modifier: 2 },
      { attribute: "con", modifier: 1 },
      { attribute: "int", modifier: -1 }
    ]
  },
  {
    id: "5",
    name: "Danim",
    origin: "Dragão Brasil",
    image: "/racas/danim.png",
    description: "Os danins (singular danim) são um povo humanoide de três olhos nativo das Montanhas Sanguinárias. Pequenos e com mentes inquisitivas, conseguiram escapar dos grandes predadores que povoam a área e estabelecer uma cidade única nas Montanhas Sanguinárias. \n Nesse refúgio da civilização no meio da selvageria, desenvolveram artes arcanas e alquímicas, vivendo uma existência confortável e reclusa. \n Essa paz durou séculos, com ardis mágicos ajudando os danins a evitar os monstros ao redor. Entretanto, um certo dia, o olhar tenebroso de Megalokk, o Deus dos Monstros, caiu sobre a cidade deste povo. Descobrindo essa chaga chamada civilização em seu solo sagrado, no berço das suas criações mais queridas, o deus bestial vomitou uma maldição sobre os danins. \n Uma praga vegetal assolou a cidade, com vinhas grossas e mortíferas surgindo por entre os prédios, raízes espinhentas brotando no meio de ruas pavimentadas, plantas carnívoras devorando os incautos. Essa maldição verde destruiu completamente sua sociedade, pulverizando o trabalho de séculos em uma questão de dias. Mas a mera ruína não era castigo suficiente para aquele atrevimento, não aos olhos de Megalokk. Os danins foram transformados, cada um deles, sem nenhuma exceção, em monstros. A mesma massa vegetal que destruiu sua cidade passou a cobrir seus corpos, tornando-os criaturas muito maiores e mais assustadoras. Essa substância amaldiçoada carrega consigo o toque monstruoso de Megalokk, tornando-os violentos e brutos, quase desprovidos de consciência. E seu destino seria vagar pelas Sanguinárias, matando e morrendo, como tantos outros habitantes desse local brutal. \n Porém, por algum motivo, os danins receberam uma segunda chance. Talvez seja apenas descaso de Megalokk, talvez algum outro deus tenha se afeiçoado pelos pequeninos. Mas a maldição enfraquece conforme um danim envelhece. A matéria vegetal começa a apodrecer e morrer, dando lugar ao povo original, o povo pacífico e recluso que ousou desafiar o Deus dos Monstros. Esse processo leva quase um século, terminando com apenas alguns resquícios de matéria vegetal no corpo — raízes, vinhas e folhas, por cima e por baixo da pele. \n Os danins que escapam da maldição pela idade precisam fugir dos mais jovens, que os odeiam instintivamente. Tentam fazer sua marca no mundo, especialmente através das artes arcanas, para sentir algum propósito em uma vida tão trágica, em décadas perdidas na mais insossa violência sem sentido. Poucos sequer imaginam, porém, que ao morrer seu ciclo se reinicia. Poucos dias após a morte de um danim ancião, ele renasce como um danim jovem e pleno, colocando toda uma região em perigo e frequentemente eliminando tudo aquilo que o danim ancião conseguiu construir nos poucos anos de vida que lhe restavam.",
    abilities: [
      "Natureza Mística: Você recebe resistência a efeitos mentais e de metabolismo +2 e +1 PM por nível.",
      "Pequeno e Apressado: Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Iniciativa, mas sofre –2 em Diplomacia, por falar muito rápido.",
      "Visão Tripla: Você recebe visão no escuro e +2 em Percepção. Além disso, pode lançar Visão Mística. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      "Intimidação Natural: Recebe +2 em testes de Intimidação"
    ],
    attributeModifiers: [
      { description: "Sabedoria +2, Escolha +1 em um atributo(Exceto Força)" }
    ],
    longevidade: "Normal.",
    devotos: "Tanna-Toh, Thyatis, Wynna.",
  },
  {
    id: "6",
    name: "Dahllan",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/dahllan.png",
    description: "Houve época em que meias-dríades eram muito, muito raras. Nascidas da união improvável entre uma dríade — uma fada das florestas — e um humano, eram consideradas meras lendas. Mesmo assim, bastou uma delas para tornar a raça conhecida em todos os reinos: Lisandra de Galrasia. Após uma campanha dramática para tentar ressuscitar o Paladino de Arton, não apenas se tornaria a maior druida guerreira no mundo, mas também a sumo-sacerdotisa de Allihanna, e uma das mortais mais poderosas a existir. \n Por algum motivo, algo mudou. \n Recentemente, jovens meias-dríades começaram a surgir no Reinado. A maior parte emergiu de matas profundas, tendo sido criadas por animais ou fadas. Outras, misteriosamente, nasceram de famílias humanas. Todas femininas; há rumores sobre meios-dríades masculinos, nunca confirmados. De qualquer forma, por não serem necessariamente filhas de dríades, receberam outro nome. Dahllan. \n Até hoje ninguém tem resposta para o mistério de sua origem. A própria Allihanna deve ser responsável, mas com que propósito? Uma tentativa de ajudar meu povo a proteger as florestas, dizem alguns. Uma resposta da Mãe Natureza contra a Tormenta, teorizam outros — um contra-ataque das forças primordiais de Arton contra a tempestade rubra. Embora tenham forte ligação com a Deusa da Natureza, nem todas as dahllan se tornam druidas. Têm sido vistas abraçando as mais variadas carreiras, desde arcanistas e bucaneiras até inventoras e cavaleiras. \n Dahllan são ágeis e sábias, mas também um tanto rústicas. Assim como as árvores antigas onde as almas das dríades habitam, as dahllan têm tipos físicos variados. Algumas são musculosas, outras esguias, outras ainda têm curvas acentuadas. O cabelo, como as folhas, pode ser verde, vermelho ou dourado — em algumas, a cor muda conforme as estações — mas os olhos são invariavelmente verdes e brilhantes. Não raro, trazem a cabeça ornamentada com caules ou filamentos delicados, como antenas feéricas. Também é normal ver flores brotando em seu cabelo, além de uma ocasional borboleta ou joaninha vinda sabe-se lá de onde. \n Por serem recém-chegadas a Arton, o tempo de vida dahllan é desconhecido. Talvez sejam tão longevas quanto os mais antigos carvalhos, ou mais. Talvez nunca envelheçam de fato, enquanto houver vida natural no mundo. \n — Arasthoriel, elfo mago. \n\n Parte humanas, parte fadas, as dahllan são uma raça de mulheres com a seiva de árvores correndo nas veias. Falam com os animais, controlam as plantas — mas também são ferozes em batalha, retorcendo madeira para formar armaduras.",
    abilities: [
      "Amiga das Plantas: Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      "Armadura de Allihanna: Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.",
      "Empatia Selvagem: Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais (veja Diplomacia). Caso receba esta habilidade novamente, recebe +2 em Adestramento.",
    ],
    attributeModifiers: [
      { attribute: "sab", modifier: 2 },
      { attribute: "des", modifier: 1 },
      { attribute: "int", modifier: -1 }
    ]
  },
  {
    id: "7",
    name: "Goblin",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/goblin.png",
    description: "Não importa se você gosta ou não de goblins. Se você se importa com eles ou se os odeia. Se os tem como amigos ou se acredita que são meras pestes.\n\n Goblins sempre existirão. \n\n Sabemos que eles se reproduzem em grande quantidade e de forma vertiginosa, mas sua origem divina é complicada, com explicações que dão voltas e se contradizem, assim como a tradição oral da raça. A mais popular é que Graolak, o Deus dos Goblins, foi o responsável direto, aproveitando para criar a raça à sua imagem e semelhança, usando os restos de um banquete do Panteão, enquanto os vinte deuses maiores dormiam. Mas academicamente existem dúvidas até se Graolak realmente existiu.\n O que se pode dizer de verdade é que poucos goblins se importam com o que os acadêmicos pensam. A menos que os acadêmicos queiram aprender sobre suas engenhocas insanas.\n Pequenos, de pele rugosa verde, marrom ou amarela, orelhas longas e nariz pontudo, os goblins vivem nas frestas do mundo civilizado. No Reinado, habitam zonas de grande pobreza. Nos ermos, ficam entocados em cavernas. Erroneamente são vistos como inferiores — ou, na pior das hipóteses, como monstros. \n Mas essa é uma visão simplista. O que define os goblins é perseverança e inventividade. Eles criam engenhocas que desafiam a lógica — máquinas cheias de peças, sempre expelindo fumaça e ameaçando explodir. Também são aeronautas pioneiros: um piloto ou baloeiro goblin pode levá-lo a qualquer lugar de Arton por um preço módico, desde que você não se importe com uma eventual queda desastrosa.\n O instinto de sobrevivência e a agilidade tornam os goblins aventureiros furtivos e malandros. A necessidade de se virar com o que têm faz com que possam improvisar melhor do que o mais criativo humano. Para quem nasceu sem nada, qualquer coisa é uma ferramenta, uma arma, um tesouro. Além disso, aos que sabem reconhecer seu valor, um goblin pode ser um parceiro para a vida toda.\n Se você não se importar com servir de cobaia para alguns inventos... — Leona Steelblade, humana cavaleira arcana \n\n Estes pequenos seres feiosos conseguiram um lugar entre os povos do Reinado. Podem ser encontrados em todas as grandes cidades, muitos vivendo na imundície, outros prosperando em carreiras que quase ninguém tentaria: espiões, aeronautas, engenhoqueiros. Onde o anão teimoso e o elfo empolado falham, o goblin pode dar um jeito. Porque ele não tem vergonha. Nem orgulho. Nem bom senso.",
    abilities: [
      "Engenhoso: Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.",
      "Espelunqueiro. Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.",
      "Peste Esguia. Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.",
      "Rato das Ruas. Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.",
    ],
    attributeModifiers: [
      { attribute: "des", modifier: 2 },
      { attribute: "int", modifier: 1 },
      { attribute: "car", modifier: -1 }
    ]
  },
  {
    id: "8",
    name: "Lefou",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/lefou.png",
    description: "Em minhas andanças, encontrei membros das mais variadas raças. De todas, a mais misteriosa é a dos lefou. De forma bem pouco lisonjeira, parcelas da sociedade os definem como pouco mais que filhos rejeitados da Tormenta. São considerados meios-demônios, como se a tempestade aberrante pudesse atacar um corpo e deixar suas marcas como faz com a própria Arton. Corrompendo de forma irreversível o que antes era puro. \n Pensando assim, até faz sentido. Um lefou pode surgir simplesmente porque os pais são aventureiros que tiveram contato com a Tormenta. Ou enfrentaram a tempestade rubra. Como uma doença, uma insidiosa vingança contra aqueles que a tentaram destruir, talvez? \n Em suas características, entretanto, um lefou não é distante de seus pais. Um filho de pais humanos parecerá humano. O mesmo é verdade para os lefou filhos de outras raças. Mas a cria carregará consigo sempre uma mácula. Algo diferente, uma deformidade ou característica que pode causar incômodo, embora lhe possa trazer alguma vantagem. Um par de antenas. Uma crosta sobre a pele. Garras. A marca indelével de que a Tormenta esteve ali e sempre estará. \n Claro, esta é uma versão preconceituosa. É verdade que, com a ascensão de Aharadak, os cultos se espalharam, e lefou têm sido procurados para assumir altas posições nas ordens de adoradores, mas muitos deles fazem exatamente o contrário. Aproveitam sua familiaridade com a maior ameaça de Arton para lutar contra ela. Estudam, treinam, dominam seus poderes para usá-los quando a tempestade rubra atacar. \n E o que é melhor do que ter ao seu lado alguém que conhece tão intimamente o inimigo? — Sir Porti, moreau do cão paladino de Thyatis \n\n Com a influência macabra da Tormenta permeando cada vez mais o mundo, surgiram os lefou. Estes meios-demônios de aparência grotesca passaram a nascer em famílias de outras raças, sendo logo sacrificados ou expulsos. Entre os que escapam, por sua facilidade em manifestar poderes aberrantes, muitos escolhem abraçar o mal, enquanto outros decidem combatê-lo.",
    abilities: [
      "Cria da Tormenta: Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
      "Deformidade: Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias à sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Carisma). Você pode trocar um desses bônus por um poder da Tormenta à sua escolha (ele também não conta para perda de Carisma).",
    ],
    attributeModifiers: [
      { description: "Escolha +1 em três atributos diferentes (Exceto Carisma)" },
      { attribute: "car", modifier: -1 }
    ]
  },
  {
    id: "9",
    name: "Minotauro",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/minotauro.png",
    description: "Ah, os minotauros. Talvez o maior paradoxo de Arton atualmente. E talvez o maior retrato de como as coisas são mutáveis e, no fim, a roda gira. \n Com suas legiões de soldados e disciplina pétrea, tomaram o que puderam com a justificativa de que o forte deve sempre proteger o mais fraco, preceito de Tauron, o Deus da Força. Provaram-se vencedores, conquistadores. A seus próprios olhos, protetores. E acima de tudo, fortes. \n Mas nada permanece como é por muito tempo em Arton, e a derrocada veio. Numa tentativa de proteger seu povo do Lorde da Tormenta Aharadak, Tauron desceu dos céus e o enfrentou. Mas perdeu. \n Tauron morreu na luta contra a Tormenta. \n Seu gigantesco cadáver está estirado sobre Tiberus, a capital do Império de Tauron, domínio dos minotauros. Tiberus se encontra numa luta incessante contra as forças da Tormenta, e o corpo do deus é a lembrança de que mesmo o mais forte um dia pode ser derrotado. \n As legiões dos minotauros lutam dia e noite contra a tempestade rubra, mantendo aceso o espírito guerreiro da raça e tentando preservar o império fragmentado. Os orgulhosos minotauros já conhecem a derrota, o medo e a fraqueza. \n Por conta disso, minotauros hoje se espalham por Arton para provar que seus princípios ainda são verdadeiros, mesmo que sua divindade não exista mais. São disciplinados, normalmente sisudos e determinados. Sua pelagem tem cores variadas, seus chifres são seu orgulho. Sua força é seu maior trunfo. Ter um minotauro como companheiro é contar com proteção constante e garantida. — Masaru Yudai, lefou monge feiticeiro \n\n Povo guerreiro, orgulhoso e poderoso, criadores de uma civilização avançada, com a missão sagrada de proteger e governar os fracos — ou assim se enxergavam. Em seus tempos áureos, tomaram grande parte de Arton. Hoje, após a morte de sua divindade e a decadência de seu Império, os minotauros lutam para recuperar a glória perdida ou encontrar um novo papel no mundo.",
    abilities: [
      "Chifres: Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
      "Couro Rígido: Sua pele é dura como a de um touro. Você recebe +1 na Defesa.",
      "Faro: Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
      "Medo de Altura: Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.",
    ],
    attributeModifiers: [
      { attribute: "for", modifier: 2 },
      { attribute: "con", modifier: 1 },
      { attribute: "sab", modifier: -1 },
    ]
  },
  {
    id: "10",
    name: "Qareen",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/qareen.png",
    description: "Embora lembrem humanos de aparência magnífica, qareen são seres mágicos. Não só no sentido de sua curiosidade e modo alegre de ver a vida, mas por serem uma mistura de mortais com gênios. Cada um deles carrega no corpo elaboradas tatuagens que são o símbolo de seu poder. Uma “marca de Wynna”, como eles mesmos chamam, que brilha sempre que uma de suas habilidades mágicas é utilizada. \n Os qareen são filhos de Wynna, a Deusa da Magia. Para eles, fazer mágica é tão natural quanto respirar e atender a desejos é um instinto primordial. Assim como sua deusa mãe, este povo é generoso, curioso e encantador. \n Os qareen têm o espírito desbravador inerente aos aventureiros, seja para satisfazer as próprias vontades, seja para auxiliar grupos de heróis mundanos. Carismáticos, atraem para si novos amigos assim como o calor de uma fogueira atrai um viajante perdido e enregelado. Concedem pequenos desejos, mágicos ou não, àqueles que abrem o coração e fazem um pedido. \n E, se você não acredita em receber um desejo sem dar algo em troca, é porque ainda não teve a felicidade de conhecer um qareen. — Nagard Wyrmslayer, humano guardião da realidade \n\n Descendentes de poderosos gênios, os qareen são otimistas, generosos e prestativos, sempre ansiosos por ajudar. Consideram-se abençoados pela Deusa da Magia, exibindo como evidência a marca de Wynna em seus corpos. Sua magia é mais poderosa quando usada para realizar desejos de outros.",
    abilities: [
      "Desejos: Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.",
      "Resistência Elemental: Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).",
      "Tatuagem Mística: Você pode lançar uma magia de 1º círculo à sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
    ],
    attributeModifiers: [
      { attribute: "car", modifier: 2 },
      { attribute: "int", modifier: 1 },
      { attribute: "sab", modifier: -1 },
    ]
  },
  {
    id: "11",
    name: "Golem",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/golem.png",
    description: "Diz-se que estes seres são apenas construtos sem vida, criados não pelos deuses, mas por mortais. No entanto, são movidos por forças vivas — espíritos elementais selvagens, capturados e lacrados por meios mágicos em corpos de pedra e metal. Muitos conformam-se com seus papéis como trabalhadores e soldados, enquanto outros demonstram alta inteligência, personalidade e iniciativa. Podem fazer tudo que outras raças fazem, até mesmo conjurar magias. Será que têm alma? Será que encontrarão os deuses quando chegar sua hora?",
    abilities: [
      "Chassi: Seu corpo artificial é resistente, mas rígido. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você continua só podendo usar uma armadura).",
      "Criatura Artificial: Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PV e PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso). Por fim, a perícia Cura não funciona em você, mas Ofício (artesão) pode ser usada no lugar dela.",
      "Fonte Elemental: Você possui um espírito elemental preso em seu corpo. Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano desse tipo. Se fosse sofrer dano mágico desse tipo, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em vez de sofrer esse dano, ele recupera 15 PV.",
      "Propósito de Criação: Você foi construído “pronto” para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral à sua escolha.",
    ],
    attributeModifiers: [
      { attribute: "for", modifier: 2 },
      { attribute: "con", modifier: 1 },
      { attribute: "car", modifier: -1 },
    ]
  },
  {
    id: "12",
    name: "Hynne",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/hynne.png",
    description: "Também conhecidos como halflings ou “pequeninos”, os hynne são apreciadores de boa comida e casas aconchegantes, raras vezes escolhendo sair pelo mundo em aventuras perigosas. Quando decidem fazê-lo, contudo, recorrem à agilidade e encanto naturais para ludibriar os inimigos — mais de um taverneiro ou miliciano deixou-se enganar por suas mãos ligeiras e sorrisos inocentes. Foram recentemente forçados a fugir de seu antigo reino natal, sendo então acolhidos pelas Repúblicas Livres de Sambúrdia, onde cultivam ervas e especiarias valiosas. Para espanto de todos, também se tornaram astutos mercadores, muitos ascendendo a príncipes mercantes.",
    abilities: [
      "Arremessador: Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.",
      "Pequeno e Rechonchudo: Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e pode usar Destreza como atributo-chave de Atletismo (em vez de Força).",
      "Sorte Salvadora: Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.",
    ],
    attributeModifiers: [
      { attribute: "des", modifier: 2 },
      { attribute: "car", modifier: 1 },
      { attribute: "for", modifier: -1 },
    ]
  },
  {
    id: "13",
    name: "Kliren",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/kliren.png",
    description: "Estes visitantes de outro mundo seriam uma combinação entre humanos e gnomos — mas, afinal, o que são gnomos? São uma raça que talvez existisse em Arton, não fosse o envolvimento criminoso de seu deus Tilliann na criação da própria Tormenta. Seja como for, os kliren somam a alta inteligência gnômica e a curiosidade humana, resultando em seres de extrema engenhosidade, criatividade e talento com aparatos mecânicos. Seriam capazes de grandes feitos, talvez até dominar Arton, não fossem a impulsividade e imprudência que por vezes abreviam suas vidas...",
    abilities: [
      "Híbrido: Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia à sua escolha (não precisa ser da sua classe).",
      "Engenhosidade: Quando faz um teste de perícia, você pode gastar 2 PM para somar sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque. Caso receba esta habilidade novamente, seu custo é reduzido em –1 PM.",
      "Ossos Frágeis: Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.",
      "Vanguardista: Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, à sua escolha).",
    ],
    attributeModifiers: [
      { attribute: "int", modifier: 2 },
      { attribute: "car", modifier: 1 },
      { attribute: "for", modifier: -1 },
    ]
  },
  {
    id: "14",
    name: "Medusa",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/medusa.png",
    description: "Ainda que estas criaturas reclusas sejam famosas por transformar suas vítimas em pedra com um simples olhar, apenas as mais antigas e poderosas o fazem. Jovens medusas por vezes rejeitam a solidão e crueldade racial, aventurando-se no Reinado, até mesmo fazendo amigos ou integrando equipes de heróis. Conseguem se fazer passar por mulheres humanas, quando escondem o cabelo feito de serpentes. O único povo que não teme medusas são os anões, que as consideram belas musas.",
    abilities: [
      "Cria de Megalokk: Você é uma criatura do tipo monstro e recebe visão no escuro.",
      "Natureza Venenosa: Você recebe resistência a veneno +5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja usando. A arma causa perda de 1d12 pontos de vida. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro). Veneno.",
      "Olhar Atordoante: Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada (apenas uma vez por cena).",
    ],
    attributeModifiers: [
      { attribute: "des", modifier: 2 },
      { attribute: "car", modifier: 1 },
    ]
  },
  {
    id: "15",
    name: "Osteon",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/osteon.png",
    description: "Esqueletos sempre foram temidos como monstros profanos, movidos por puro rancor pelos vivos. Isso mudou; conhecidos como osteon, estes esqueletos demonstram a inteligência e a consciência das raças vivas, sendo capazes de adotar quaisquer de suas profissões e devoções. Alguns atribuem seu surgimento à queda de Ragnar, antigo Deus da Morte; outros dizem ser consequência da ascensão de Ferren Asloth como um poderoso lich, transformando a nação de Aslothia em um reino necromante.",
    abilities: [
      "Armadura Óssea: Você recebe redução de corte, frio e perfuração 5.",
      "Memória Póstuma: Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral à sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade dessa raça à sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.",
      "Natureza Esquelética: Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV.",
      "Preço da Não Vida: Você precisa passar oito horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (osteon não são afetados por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome.",
    ],
    attributeModifiers: [
      { description: "Escolha +1 em três atributos diferentes (Exceto Constituição)." },
      { attribute: "con", modifier: -1 },
    ]
  },
  {
    id: "16",
    name: "Sereia/Tritão",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/sereia.png",
    description: "Sendo chamadas sereias quando femininas e tritões quando masculinos, os membros desta raça de torso humanoide e corpo de peixe podem adotar forma bípede para caminhar em terras emersas — algo que têm feito com cada vez mais frequência. Enquanto algumas sereias temem ou desprezam os humanos, outras enxergam Arton como um mundo misterioso, exótico, cheio de oportunidades e aventuras.",
    abilities: [
      "Canção dos Mares: Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.",
      "Mestre do Tridente: Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes.",
      "Transformação Anfíbia: Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).",
    ],
    attributeModifiers: [
      { description: "Escolha +1 em três atributos diferentes." },
    ]
  },
  {
    id: "17",
    name: "Sílfide",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/silfide.png",
    description: "As mais numerosas fadas em Arton são estas criaturinhas (alguns diriam “pestes”) esvoaçantes, com suas delicadas asas de inseto e grandes olhos escuros. Curiosas e brincalhonas, parecem sempre à procura de alguma diversão, levando todos a subestimá-las quando o assunto exige seriedade. É verdade que seu entusiasmo e inocência podem causar problemas. Também é verdade que gostam de usar magias e ilusões para pregar peças. Pensando bem, ninguém até hoje encontrou um bom motivo para aceitar uma sílfide em um grupo de aventureiros...",
    abilities: [
      "Asas de Borboleta: Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
      "Espírito da Natureza: Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.",
      "Magia das Fadas: Você pode lançar duas das magias a seguir (atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.",
    ],
    attributeModifiers: [
      { attribute: "car", modifier: 2 },
      { attribute: "des", modifier: 1 },
      { attribute: "for", modifier: -1 }
    ]
  },
  {
    id: "18",
    name: "Suraggel",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/suraggel.png",
    description: "Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos. Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.",
    abilities: [
      "Herança Divina: Você é uma criatura do tipo espírito e recebe visão no escuro.",
      "Luz Sagrada (Aggelus): Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      "Sombras Profanas (Sulfure): Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
    ],
    attributeModifiers: [
      { description: "Sabedoria +2, Carisma +1 (Aggelus)" },
      { description: "Destreza +2, Inteligência +1 (Sulfure)" }
    ]
  },
  {
    id: "19",
    name: "Trog",
    origin: "Tormenta20 - jogo do ano",
    image: "/racas/trog.png",
    description: "Trogloditas (ou “trogs”) são homens-lagarto primitivos e subterrâneos que odeiam todos os outros seres — especialmente os que sabem forjar aço, aquilo que mais cobiçam. Suas tribos tramam incursões contra povoados humanos, fazem emboscadas em estradas, atacam exploradores em masmorras. Uns poucos, no entanto, divergem da crueldade e selvageria inerentes à raça. Abandonam a tribo ou são expulsos. Escolhem caminhos surpreendentes, inesperados; tornam-se druidas, ou clérigos, ou bucaneiros, ou sabe-se lá o que mais. Enfim, acabam aceitos como colegas por aventureiros tão estranhos e deslocados quanto eles próprios.",
    abilities: [
      "Mau Cheiro: Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia.",
      "Mordida: Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
      "Reptiliano: Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade.",
      "Sangue Frio: Você sofre 1 ponto de dano adicional por dado de dano de frio.",
    ],
    attributeModifiers: [
      { attribute: "con", modifier: 2 },
      { attribute: "for", modifier: 1 },
      { attribute: "int", modifier: -1 }
    ]
  },
  {
    id: "20",
    name: "Jotunn",
    origin: "Dragão Brasil - God of War Ragnarok",
    image: "/racas/jotunn.png",
    description: "Jötunheim, o Reino dos Gigantes de Gelo \n Lar das montanhas mais altas de todos os Nove Reinos, este Reino não possui mais nativos, todos mortos em uma campanha genocida feita por Thor e seu Mjölnir. Nem todos os Jötnar (Jötunn no singular, outro nome para os gigantes de gelo) eram realmente grandes em tamanho. Muitos tinham o tamanho de um humano comum, outros possuíam cabeças de animais ou até eram animais por completo, como a própria Serpente do Mundo, Jörmungandr. \n\n Muspelheim, o Reino dos Gigantes de Fogo \n Um dos Reinos mais primordiais da mitologia nórdica, este lugar é tomado de lava e fumaça vulcânica, completamente inabitável. Já foi habitada por gigantes, mas isso foi há muito tempo. Não se sabe o paradeiro de seu rei, Sutr — alguns supõem que esteja dormindo apenas esperando o Ragnarök. É um dos reinos mais avessos à vida humana, então aventureiros devem estar bem preparados se quiserem desbravá-lo. \n\n Os Jotunns \n As poderosas e ancestrais raças de gigantes nativas de Jötunheim e Muspelheim, antigamente abundante em Midgard, mas praticamente dizimada pelos Aesir por conta de seu medo e inveja. Apesar de sua alcunha, os jotnar variam muito de estatura, apresentando desde corpos enormes como montanhas até o tamanho de humanos comuns.",
    abilities: [
      "Escolha três poderes da lista a seguir:",
      "Gigante: Seu tamanho é Grande e você recebe 3 espaços de inventário por ponto de Força, ao invés de 2.",
      "Manipulação Elemental: Você aprende e pode lançar Explosão de chamas (fogo), Névoa (gelo) ou Transmutar objetos (rocha) (atributo-chave Força). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      "Percepção Paracronal: Você tem visões sobre o futuro, vislumbrando eventos que não aconteceram ainda. Você aprende e pode lançar Augúrio, mas o tempo de execução da magia aumenta para 1 minuto.",
      "Resistência Superior: Sua pele é um couro grosso feito de matéria elemental. Você recebe +2 na Defesa e redução 10 contra fogo (fogo), frio (gelo) ou ácido (rocha)",
    ],
    attributeModifiers: [
      { description: "Jotunn de fogo: Força +2, Destreza +1, Sabedoria -1" },
      { description: "Jotunn de gelo: Força +2, Inteligência +1, Carisma -1" },
      { description: "Jotunn de rocha: Constituição +2, Força +1, Inteligência -1" }
    ]
  },
  {
    id: "21",
    name: "Vanir",
    origin: "Dragão Brasil - God of War Ragnarok",
    image: "/racas/vanir.png",
    description: "Vanaheim, o Reino dos Vanir \n Este reino tomado de selvas, criaturas perigosas e umidade já foi o lar dos deuses Vanir, inimigos derrotados dos Aesir. Poucas pessoas, além dos próprios Vanir, puderam pisar em Vanaheim nos últimos tempos, já que Odin também bloqueou a passagem para o Reino. Em meio às ruínas erguidas aos deuses Vanir, os últimos poucos membros de uma resistência tramam planos para enfrentar os Aesir novamente, enquanto impedem que os deuses asgardianos invadam e tomem Vanaheim de forma definitiva. \n Considerados divinos como os Aesir, os Vanir são uma raça escassa e desconfiada desde sua quase aniquilação e vivem escondidos dos Aesir, tramando sua vingança. Sua afinidade com as energias mágicas e com a magia antiga é um grande poder e uma grande maldição.",
    abilities: [
      "Afinidade Mágica: Você aprende e pode lançar três magias de 1º círculo, arcanas ou divinas, à sua escolha (atributo-chave Carisma). As magias são consideradas divinas para todos os efeitos e você pode aplicar aprimoramentos nessas magias como se fosse um Druida de mesmo nível que seu nível de personagem. Caso aprenda novamente essas magias, seu custo diminui em –1 PM.",
      "Bênção da Magia Ancestral: Você pode lançar qualquer magia que conheça sobre outra criatura inteligente com que possa se comunicar. Ao invés de ser alvo dos efeitos normais da magia, essa criatura recebe a capacidade de lançar esta magia uma única vez até o fim da cena, com os mesmos efeitos mas sem custo em PM.",
      "Elusivo: Você passou a vida escondendo sua origem e poderes para evadir seus perseguidores. Você recebe +2 em Enganação e Intuição.",
    ],
    attributeModifiers: [
      { attribute: "sab", modifier: 2 },
      { attribute: "car", modifier: 1 },
      { attribute: "con", modifier: -1 }
    ]
  },
  {
    id: "22",
    name: "Elfo de Elfheim",
    origin: "Dragão Brasil - God of War Ragnarok",
    image: "/racas/elfo_elfheim.png",
    description: "Alfheim, o Reino dos Elfos \n Não fosse palco de uma longa guerra entre elfos luminosos e elfos negros, este Reino possuiria ares tranquilos com suas florestas densas e volumosas. O motivo para o conflito é a Luz de Alfheim, disputada pelos dois grupos de maneira ferrenha. Os céus do Reino sempre estão azuis quando os luminosos estão sob controle da Luz, mas logo o firmamento é tingido de vermelho quando os elfos negros tomam controle. \n Apesar de elfos negros serem vistos como cruéis e malignos por natureza quando comparados aos elfos luminosos, as coisas não são assim tão simples. Há mais tons de cinza nesse conflito do que qualquer analogia fácil entre luz e trevas. Duas raças ancestrais que dividem uma mesma origem, os elfos luminosos (Ljósálfar) são seres pálidos de pele quase translúcida e olhos brilhantes, enquanto os elfos negros (Dökkalfar) têm a pele variando em tons de grafite e características insetóides." ,
    abilities: [
      "Armamento das Sombras (Dökkalfar): Você pode gastar 1 PM para cobrir sua arma com energia das trevas. Sua próxima rolagem de dano com a arma nesta cena causa +1d6 pontos de dano de trevas.",
      "Ser das Sombras (Dökkalfar): Você recebe visão no escuro, deslocamento de escalada 9m e redução de trevas 10.",
      "Armas Luminosas (Ljósálfar): Você pode gastar uma ação de movimento e 1 PM para criar uma arma que saiba usar feita de luz sólida. A arma dura até o fim da cena ou até você soltá-la, é considerada mágica e fornece +1 em testes de ataque.",
      "Filho da Luz (Ljósálfar): Você recebe +2 em Percepção, visão no escuro e imunidade às condições cego e ofuscado.",
      "Voo: Enquanto a maioria dos elfos escuros têm asas insetóides, os elfos luminosos conseguem voar usando a bênção da Luz. Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.",
    ],
    attributeModifiers: [
      { description: "Ljósálfar: Destreza +2, Inteligência +1" },
      { description: "Dökkalfar:  Força +2, Carisma +1" },
    ]
  },
  {
    id: "23",
    name: "Anão de Svartalfheim",
    origin: "Dragão Brasil - God of War Ragnarok",
    image: "/racas/anao_svaltafheim.png",
    description: "Svartalfheim, o Reino dos Anões \n Um Reino próspero, tranquilo, mas ao mesmo tempo apreensivo e temeroso da benevolência de seu patrono, Odin. Os anões são gênios da manufatura e da arquitetura, e trabalham para o Pai-de-Todos em troca de proteção. Não possuem permissão para falar com ninguém que não seja Aesir ou de Asgard. \n As terras de Svartalfheim são mais férteis, o clima também é mais ameno e agradável. A genialidade anã também oferece mais comodidades, como maquinário e sistemas de fornecimento de água. As riquezas naturais são exploradas pelos artesãos anões e por Asgard — seu aço é tão superior que é conhecido como “aço de Svartalfheim” em outros Reinos. \n Anões de Svartalfheim, os mais astutos e talentosos artesãos, alquimistas e cientistas dos Nove Reinos, responsáveis por construir e aperfeiçoar as armas que os deuses irão brandir no dia do Ragnarok.",
    abilities: [
      "Caminhar entre os Reinos: Você usa as fendas entre os reinos para se mover sem ser detectado. Você aprende e pode lançar a magia Salto Dimensional (atributo-chave Inteligência), mas só pode lançá-la sobre si mesmo. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
      "Pacifista: Violência é sempre o último recurso para um anão. Você recebe +5 em Diplomacia e Furtividade e sempre fica abalado durante o primeiro turno de um combate.",
      "Tecelão do Improvável: Você é capaz de usar materiais “impossíveis” como o canto dos pássaros, o aroma do orvalho ou o choro de uma criança, como matéria-prima para fabricar itens. Para você, o custo de fabricação de qualquer item mundano é um quinto do preço, ao invés de um terço.",
    ],
    attributeModifiers: [
      { attribute: "int", modifier: 2 },
      { attribute: "con", modifier: 1 },
      { attribute: "car", modifier: -1 }
    ]
  },
  {
    id: "24",
    name: "Vampiro",
    origin: "Dragão Brasil",
    image: "/racas/vampiro.png",
    description: "Vampiros são considerados monstros terríveis, predadores que espreitam à noite em busca do sangue de outras pessoas. E, embora essa descrição possa se aplicar à maioria dos vampiros, a verdade é que nem todos aqueles que sofrem a maldição do vampirismo sucumbem aos seus instintos ferais. Alguns, de fato, lutam contra sua nova natureza, apegando-se à sua humanidade e buscando uma existência o mais próximo possível de sua vida anterior. \n Personagens vampiros são indivíduos que foram transformados no início de suas carreiras ou que, por alguma razão, perderam suas memórias como parte de sua transformação. Alguns buscam uma vida de aventuras como forma de compensar os pecados causados por sua fome, ou como um caminho para dominar sua fera interior ou mesmo encontrar uma cura para sua condição. \n\n Tornando-se um Vampiro \n As regras para personagens vampiros assumem a criação de um vampiro jovem, em início de carreira. Entretanto, mesmo aventureiros veteranos podem ser transformados em vampiros — geralmente como resultado de um embate mal-sucedido contra uma dessas criaturas mais poderosas. \n Para transformar um personagem já existente em um vampiro, troque todas as características raciais do personagem (incluindo modificadores de atributos) pelas características de vampiro. Se o personagem não for humano, escolha uma das habilidades de sua raça original (aprovada pelo mestre) para sua habilidade Resquícios da Outra Vida. Por fim, para cada patamar do personagem, você pode substituir um de seus poderes de classe por um poder de Bênção Vampírica. Ao substituir esses poderes, tenha em mente poderes que são pré-requisitos de outros poderes do personagem. Você deve continuar cumprindo quaisquer pré-requisitos dos poderes restantes.",
    abilities: [
      "Bênçãos Vampíricas: Escolha um dos poderes na página da Classe. Você pode escolher outros desses poderes no lugar de poderes de classe quando subir de nível(Somente 1 vez por patamar).",
      "Resquícios da Outra Vida: Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um vampiro de outra raça humanoide ou monstro que não humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha (e aprovada pelo mestre). Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.",
      "Natureza Não Viva: Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV.",
      "Perda da Humanidade: Conforme seus poderes vampíricos crescem, sua humanidade vai sucumbindo à monstruosidade em seu interior. Você possui as fraquezas vampíricas descritas a seguir, que se tornam mais severas conforme você recebe novas bênçãos vampíricas.",
      "Chamado das Trevas: Você precisa repousar por oito horas dentro da terra (no subterrâneo, em uma cova ou totalmente coberto de terra). Se fizer isso, recupera PV e PM por descanso em condições normais (vampiros não são afetados por condições boas ou ruins de descanso). Caso contrário, sofre uma penalidade em perícias de –1 por bênção vampírica que possuir. Essa penalidade desaparece após repousar na terra.",
      "Sede de Sangue: Você precisa consumir pelo menos uma dose de sangue por semana (veja Dieta de Sangue na página de poderes). Se não fizer isso, sofre os efeitos de fome. Para cada bênção vampírica que possuir além da primeira, o intervalo entre suas refeições de sangue diminui em um dia (até um mínimo de uma dose por dia).",
      "Sensibilidade ao Sol: Quando exposto à luz solar direta, você fica ofuscado e, a cada rodada, perde 1d6 PV por bênção vampírica que possuir.",
    ],
    attributeModifiers: [
      { attribute: "car", modifier: 1 },
      { attribute: "con", modifier: -1 },
      { description: "Escolha +1 em dois atributos diferentes (exceto Constituição)" },
    ],
  },
  {
    id: "25",
    name: "Naidora",
    origin: "Dragão Brasil",
    image: "/racas/naidora.png",
    description: "Descendentes de Hydora, Dragão-Rei dos Ventos, e da exploradora elfa Hana, os naidora (também conhecidos pelo nome completo nailanandora; ou elfos-do-céu, no linguajar mais simples) são elfos alados extremamente raros. São tidos como lendas, invenções exageradas dos bardos, na maior parte dos lugares. Mesmo Valkaria, a maior metrópole do mundo conhecido, só teve três desses seres como moradores em toda a sua história. Seus números reduzidos impedem que estabeleçam sociedades, por isso normalmente vivem sozinhos, como nômades. \n Os naidora ficam completamente à vontade no ar. Podem até mesmo dormir enquanto voam. Alguns, à imagem de seu ancestral dragão, jamais tocam o chão. Costumam ficar desconfortáveis em espaços fechados ou no subterrâneo, acostumados com a liberdade de singrar os céus com suas asas. \n Visualmente, são como elfos de pele azulada, com grandes asas plumadas, similares às de pássaros. Quando totalmente abertas, têm largura igual ao dobro da altura do elfo — sendo esse o espaço mínimo de que precisa para decolar e voar. Sua maior diferença do povo de Lenórienn é a distância em relação às tragédias sofridas; afastados dessa sociedade e do culto à Glórienn, a cicatriz da Infinita Guerra ou da traição da deusa não afetam a vida despreocupada desses elfos alados.",
    abilities: [
      "Alma das Nuvens: Você recebe resistência a encantamento +2.",
      "Asas Emplumadas: Você pode gastar 1 PM por rodada para voar com deslocamento de 12m. Enquanto está voando dessa forma, você recebe +2 na Defesa e em Reflexos.",
      "Sentidos Élficos: Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
    ],
    // Modificadores FIXOS para Anão
    attributeModifiers: [
      { attribute: "des", modifier: 2 },
      { attribute: "car", modifier: 1 },
      { attribute: "con", modifier: -1 }
    ],
    longevidade: "x5.",
    devotos: "Hyninn, Kallyadranoch, Nimb.",
  },
];