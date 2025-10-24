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
    description: "Os elfos vieram de longe há muito tempo, em embarcações trazidas — dizem — por ventos divinos. São belos e esguios, de cabelos e olhos de cores tão variadas quanto o arco-íris. Suas vestes costumam ser intrincadas e fluidas como seus movimentos. Nada neles parece comum, rasteiro. É difícil não se sentir impressionado ou inspirado ao lado de uma presença élfica. Há sempre algo de mágico nos elfos. \n Um dia eles tiveram sua própria pátria, Lenórienn, no continente sul. Uma cidade majestosa, de torres espiraladas surgidas em meio à floresta, onde a magia e as artes eram ensinadas desde cedo. Onde tomos ancestrais ocupavam longas estantes e a poesia tomava os ares com suas rimas e melodias. Mas o conhecimento trouxe a arrogância, e a arrogância, a derrota. Lenórienn caiu, vítima da Aliança Negra dos goblinoides, um exército implacável. Depois, por conta de um estratagema de Glórienn, antiga Deusa dos Elfos, os membros da raça que não ficaram espalhados pelo Reinado foram escravizados pelos minotauros. O que sobrou foi um povo mergulhado em amargor, apoiado nas glórias de um passado destruído. \n Agora, porém, eles encaram uma chance de redenção. Com a morte de Tauron e livres dos desígnios de uma divindade mesquinha, os elfos do Reinado têm pela primeira vez um futuro em branco à frente. E ainda estão tentando descobrir o que fazer com ele. Enquanto uns buscam recuperar os conhecimentos perdidos de seu antigo reino, outros se misturam a ordens de cavalaria ou guildas de ladrões, usando seus talentos naturais para traçar seu próprio caminho, abraçando os deuses que melhor lhes convêm. \n “Das maiores tragédias nascem os maiores aventureiros”, diz um ditado que circula nas tavernas de Malpetrim. Parece algo feito sob medida para os elfos de Arton. \n — Garibaldo Cachimbo Caído, *hynne* bardo \n\n Elfos são seres feitos para a beleza e para a guerra, tão habilidosos com magia quanto com espadas e arcos. Elegantes, astutos, de vidas quase eternas, parecem superiores aos humanos em tudo. Poderiam ter governado toda Arton, não fosse a arrogância herdada de sua deusa. Com a queda de Glórienn, os elfos se tornaram um povo sem uma deusa. Um povo independente. Enquanto alguns veem a falta de uma divindade como uma tragédia, outros acreditam que, pela primeira vez na história, são livres.",
    abilities: [
      "Graça de Glórienn: Seu deslocamento é 12m (em vez de 9m).",
      "Sangue Mágico: Você recebe +1 ponto de mana por nível.",
      "Sentidos Élficos: Você recebe visão na penumbra e +2 em Misticismo e Percepção."
    ],
    // Modificadores FIXOS para Elfo
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
    description: "Os humanos são uma raça versátil e adaptável, capazes de prosperar em qualquer ambiente.\nSão conhecidos por sua ambição, criatividade e capacidade de aprender rapidamente.\nEmbora vivam menos que outras raças, compensam com sua determinação e força de vontade.",
    abilities: [
      "Versatilidade: Recebe um talento adicional no 1º nível",
      "Adaptabilidade: Recebe +1 em testes de Sobrevivência",
      "Determinação: Uma vez por dia, pode repetir um teste que falhou",
      "Ambição: Recebe experiência 10% mais rápido"
    ],
    // Modificadores FLEXÍVEIS para Humano (o player escolhe)
    attributeModifiers: [
      { description: "Escolha +1 em três atributos diferentes" }
    ]
  },
  {
    id: "4",
    name: "Meia-Orc",
    origin: "Dragão Brasil",
    image: "/racas/meia-orc.png",
    description: "As meias-orcs são guerreiras formidáveis, resultado da mistura entre orcs e humanos.\nPossuem uma força bruta incomparável e uma determinação feroz em combate.\nAmbém são capazes de grande compaixão e lealdade com aqueles que conquistam seu respeito.",
    abilities: [
      "Força Brutal: Recebe +2 em testes de Atletismo",
      "Fúria Orc: Uma vez por combate, pode fazer um ataque adicional como ação livre",
      "Visão no Escuro: Enxerga perfeitamente no escuro até 18 metros",
      "Intimidação Natural: Recebe +2 em testes de Intimidação"
    ],
    // Modificadores FIXOS para Meia-Orc
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
    ]
  },
];