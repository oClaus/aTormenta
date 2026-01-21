import { God } from "@/types/god";

export const gods: God[] = [
  {
    id: "1",
    name: "Aharadak",
    image: "/deuses/aharadak.png",
    status: "normal",
    history: "Outrora um dos terríveis Lordes da Tormenta, esta aberração monstruosa ambicionava o grande poder divino oferecido pelos devotos de Arton. Após anos liderando seu próprio culto profano, Aharadak matou Tauron, o Deus da Força, e ascendeu como o novo e macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper Arton. Apenas os devotos mais depravados ousam cultuar esta divindade de escatologia e sadismo.",
    beliefs: "Reverenciar a Tormenta, apregoar a inevitabilidade de sua chegada ao mundo. Praticar a devassidão e a perversão. Deturpar tudo que é correto, desfigurar tudo que é normal. Abraçar a agonia, crueldade e loucura.",
    sacredSymbol: "Um olho macabro de pupila vertical e cercado de espinhos.",
    channelEnergy: "Negativa",
    preferredWeapon: "Corrente de espinhos",
    devotees: "Quaisquer. A Tormenta aceita tudo e todos.",
    grantedPowers: [
      "Afinidade com a Tormenta",
      "Êxtase da Loucura",
      "Percepção Temporal",
      "Rejeição Divina"
    ],
    obligationsRestrictions: "Quase todos os cultistas de Aharadak são maníacos insanos, compelidos a praticar os atos mais abomináveis. No entanto, talvez devido à natureza alienígena e incompreensível deste deus, alguns devotos conseguem se resguardar. Preservam sua humanidade, abstendo-se de cometer crimes ou profanações. Ainda assim, o devoto paga um preço. No início de qualquer cena de ação, role 1d6. Com um resultado ímpar, você fica fascinado na primeira rodada, perdido em devaneios sobre a futilidade da vida (mesmo que seja imune a esta condição)."
  },
  {
    id: "2",
    name: "Lena",
    image: "/deuses/lena.png",
    status: "normal",
    history: "Mesmo os deuses mais violentos e cruéis são respeitosos com a Deusa Criança, provedora da fertilidade, do sustento, da própria vida. Lena não é venerada apenas por aventureiros necessitados de curas mágicas, mas também por fazendeiros que imploram por colheitas fartas, criadores desejosos de saúde para seus animais e cada grávida prestes a dar à luz. Servida quase exclusivamente por mulheres, a Deusa da Vida oferece os mais poderosos milagres de cura presenciados em Arton.",
    beliefs: "Reverenciar e proteger a vida em todas as suas formas. Reverenciar a fertilidade, a fecundidade, a maternidade e a infância. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção. Aliviar a dor e o sofrimento físico, mental ou espiritual.",
    sacredSymbol: "Lua crescente prateada.",
    channelEnergy: "Positiva",
    preferredWeapon: " Não há. Servos desta deusa não podem lançar a magia Arma Espiritual e similares.",
    devotees: "Dahllan, qareen, nobres, paladinos.",
    grantedPowers: [
      "Ataque Piedoso",
      "Aura Restauradora",
      "Cura Gentil",
      "Curandeira Perfeita"
    ],
    obligationsRestrictions: "Devotos de Lena não podem causar dano letal ou perda de PV a criaturas vivas (fornecer bônus em dano letal também é proibido). Podem causar dano não letal e prejudicar seus inimigos (em termos de jogo, impondo condições), desde que não causem dano letal ou perda de PV. Para um devoto de Lena, é preferível perder a própria vida a tirá-la de outros. Apenas mulheres podem ser devotas de Lena (exceto paladinos homens). Uma clériga precisa dar à luz pelo menos uma vez antes de receber seus poderes divinos."
  },
  {
    id: "3",
    name: "Nimb",
    image: "/deuses/nimb.png",
    status: "normal",
    history: "“Khalmyr tem o tabuleiro, mas quem move as peças é Nimb” — provérbio dos tempos em que o Deus da Justiça governava o Panteão, sua liderança sempre desafiada pelo insano Deus do Caos. Nada é certo sobre esta entidade do acaso, sorte e azar. Teria Nimb cuidadosamente tramado a queda de Khalmyr, enfim derrotando o eterno rival? Seria ele capaz de um plano tão louco e brilhante? Ou não? Nimb é mais temido do que venerado pelos artonianos, cautelosos quanto às suas constantes mudanças de humor. Muitos desejam que ele lhes sorria, mas poucos escolhem ser seus devotos. Ainda assim, há quem abrace sua loucura libertadora.",
    beliefs: "Reverenciar o caos, a aleatoriedade, a sorte e o azar. Praticar a ousadia e a rebeldia, desafiar regras e leis. Rejeitar o bom senso. Tornar o mundo mais interessante. Ou divertido. Ou terrível. Ou não.",
    sacredSymbol: "Um dado de seis faces.",
    channelEnergy: "Qualquer",
    preferredWeapon: "Nenhuma e todas! Ao usar um efeito que dependa de arma preferida, qualquer arma (ou outro objeto!) pode aparecer, de acordo com o mestre.",
    devotees: "Goblins, qareen, sílfides, arcanistas, bárbaros, bardos, bucaneiros, inventores, ladinos.",
    grantedPowers: [
      "Êxtase da Loucura",
      "Poder Oculto",
      "Sorte dos Loucos",
      "Transmissão da Loucura"
    ],
    obligationsRestrictions: "Por serem incapazes de seguir regras, estes devotos não têm “obrigações” verdadeiras (portanto, nunca perdem PM por descumprirem suas O&R). No entanto, sofrem certas restrições que não podem ignorar. Devotos de Nimb são loucos (ou agem como se fossem), não conseguindo convencer ninguém de coisa alguma. Você sofre –5 em testes de perícias baseadas em Carisma. Além disso, no início de cada cena de ação, role 1d6. Com um resultado 1, você fica confuso."
  },
  {
    id: "4",
    name: "Tenebra",
    image: "/deuses/tenebra.png",
    status: "normal",
    history: "Assim como seu inimigo Azgher vigia e protege Arton durante o dia, Tenebra é atenta sob as estrelas; nada acontece na noite sem seu conhecimento. A sedutora e misteriosa Deusa das Trevas é mãe de tudo que anda e rasteja no escuro, dos nobres anões aos sinistros mortos-vivos e trogloditas. Ainda que muitas vezes temida, Tenebra sempre protegeu as criaturas noturnas e subterrâneas, bondosas ou malignas. No entanto, com a recente destruição de Ragnar, antigo Deus da Morte, cada vez mais cultos necromantes começam a oferecer sacrifícios à Mãe Noite.",
    beliefs: "Reverenciar a noite, a escuridão, a lua e as estrelas. Proteger segredos e mistérios, proteger tudo que é oculto e invisível. Reverenciar a não vida e os mortos-vivos, propagar a prática da necromancia. Rejeitar o sol e a luz.",
    sacredSymbol: "Estrela negra de cinco pontas.",
    channelEnergy: "Negativa.",
    preferredWeapon: "Adaga.",
    devotees: " Anões, medusas, qareen, osteon, sulfure, trogs, arcanistas, bardos, ladinos.",
    grantedPowers: [
      "Carícia Sombria",
      " Manto da Penumbra",
      "Visão nas Trevas",
      "Zumbificar"
    ],
    obligationsRestrictions: "Tenebra proíbe que seus devotos sejam tocados por Azgher, o odiado rival. O devoto deve se cobrir inteiramente durante o dia, sem expor ao sol nenhum pedaço de pele."
  },
  {
    id: "5",
    name: "Wynna",
    image: "/deuses/wynna.png",
    status: "normal",
    history: "Depois de abandonados por Glórienn, a antiga Deusa dos Elfos, muitos membros desta raça estão oferecendo sua devoção à bondosa Wynna. Ela é a exuberante Deusa da Magia, louvada por fadas, qareen, gênios e todos aqueles que empregam poder arcano. Generosa e liberal além dos limites, Wynna concede mágica a todos que pedem, não importando se usada para o bem ou para o mal — pois a magia é mais importante que a vida e nunca deve ser negada a ninguém. Talvez por esse motivo Arton seja um mundo tão intenso em energias mágicas e tão povoado por arcanistas.",
    beliefs: "Reverenciar a magia arcana e seus praticantes. Promover o ensino da magia. Usar a magia para proteger os necessitados e trazer felicidade ao mundo.",
    sacredSymbol: "Um anel metálico.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Adaga.",
    devotees: "Elfos, golens, qareen, sílfides, arcanistas, bardos.",
    grantedPowers: [
      "Bênção do Mana",
      "Centelha Mágica",
      "Escudo Mágico",
      "Teurgista Místico"
    ],
    obligationsRestrictions: "Devotos de Wynna devem praticar a bondade e a generosidade de sua deusa, jamais recusando um pedido de ajuda de alguém inocente. Além disso, devotos de Wynna são proibidos de matar seres mágicos (elfos, qareen, sílfides e outros a critério do mestre) e conjuradores arcanos."
  },
  {
    id: "6",
    name: "Allihanna",
    image: "/deuses/allihanna.png",
    status: "normal",
    history: "A Deusa da Natureza representa a bondade inerente ao mundo natural, a pureza das plantas e animais. Mesmo os animais predadores são considerados puros, inocentes — pois matam apenas para sobreviver, ao contrário dos monstros e seres civilizados. A divindade principal dos druidas, Allihanna também é cultuada por povos bárbaros. Estes veneram faces variadas desta deusa, que pode se manifestar como um majestoso animal (diferente para cada culto) ou uma criatura quimérica de muitas cabeças.",
    beliefs: "Reverenciar os seres da natureza. Proteger a vida selvagem. Promover harmonia entre a natureza e a civilização. Combater monstros, mortos-vivos e outras criaturas que perturbam o equilíbrio natural.",
    sacredSymbol: "Para bárbaros e outros adoradores de animais, o símbolo corresponde ao respectivo animal. Para outros, uma pequena árvore.",
    channelEnergy: "Positiva",
    preferredWeapon: "Bordão",
    devotees: "Dahllan, elfos, sílfides, bárbaros, caçadores, druidas.",
    grantedPowers: [
      "Compreender os Ermos",
      "Dedo Verde",
      "Descanso Natural",
      "Voz da Natureza"
    ],
    obligationsRestrictions: "Devotos de Allihanna não podem usar armaduras e escudos feitos de metal. Assim, você só pode usar armadura acolchoada, de couro, gibão de peles e escudo leve, ou itens feitos de materiais especiais não metálicos. Devotos de Allihanna não podem descansar em nenhuma comunidade maior que uma aldeia (não perdem seus poderes, mas também não recuperam pontos de vida ou mana). Por isso, sempre preferem o relento a um quarto de estalagem."
  },
  {
    id: "7",
    name: "Khalmyr",
    image: "/deuses/khalmyr.png",
    status: "normal",
    history: "Antigo líder do Panteão, o Deus da Justiça já foi considerado a divindade mais popular no Reinado. Mesmo assim, Khalmyr ainda é louvado por aqueles que lutam pela ordem e justiça. As duas maiores ordens de cavaleiros em Arton foram criadas em sua honra: a Ordem da Luz e a Ordem de Khalmyr. Esta é também uma das divindades principais dos anões, junto de Tenebra.",
    beliefs: "Praticar a caridade e o altruísmo. Defender a lei, a ordem e os necessitados. Combater a mentira, o crime e o mal. Oferecer clemência, perdão e redenção. Lutar o bom combate.",
    sacredSymbol: "Espada sobreposta a uma balança.",
    channelEnergy: "Positiva.",
    preferredWeapon: "Espada longa.",
    devotees: "Aggelus, anões, cavaleiros, guerreiros, nobres, paladinos.",
    grantedPowers: [
      "Coragem Total",
      "Dom da Verdade",
      "Espada Justiceira",
      "Reparar Injustiça"
    ],
    obligationsRestrictions: " Devotos de Khalmyr não podem recusar pedidos de ajuda de pessoas inocentes. Também devem cumprir as ordens de superiores na hierarquia da igreja. Só podem usar itens mágicos permanentes criados por devotos do mesmo deus."
  },
  {
    id: "8",
    name: "Megalokk",
    image: "/deuses/Megalokk.png",
    status: "normal",
    history: "O Deus dos Monstros é uma divindade de selvageria e descontrole — quando bárbaros entram em fúria, diz-se que estão apenas canalizando seu rancor primordial. Enquanto servos de Allihanna promovem harmonia entre a natureza e os povos civilizados, devotos de seu irmão sanguinário buscam apenas o extermínio de seus inimigos. E, para um servo do Deus dos Monstros, quase tudo que se move é um inimigo...",
    beliefs: "Praticar a violência, a soberania do mais forte. Jamais reprimir os próprios instintos e desejos. Jamais ser domado, desafiar qualquer forma de controle. Jamais oferecer perdão ou rendição. Eliminar os fracos. Destruir seus inimigos.",
    sacredSymbol: "A garra de um monstro.",
    channelEnergy: "Negativa",
    preferredWeapon: "Maça",
    devotees: "Goblins, medusas, minotauros, sulfure, trogs, bárbaros, caçadores, druidas, lutadores.",
    grantedPowers: [
      "Olhar Amedrontador",
      "Presas Primordiais",
      "Urro Divino",
      "Voz dos Monstros"
    ],
    obligationsRestrictions: "Devotos de Megalokk devem rejeitar os modos civilizados e se entregar à ferocidade, descontrole e impaciência. Você é proibido de usar perícias baseadas em Inteligência ou Carisma (exceto Adestramento e Intimidação) e não pode preparar uma ação, escolher 10 ou 20 em testes e lançar magias sustentadas."
  },
  {
    id: "9",
    name: "Sszzaas",
    image: "/deuses/Sszzaas.png",
    status: "normal",
    history: "O sibilante Deus da Traição não é apenas o mais inteligente entre os deuses, mas também o mais perigoso. Tão perigoso que, certa vez, tentou reunir os Rubis da Virtude — vinte gemas de poder contendo a essência de todos os deuses. Chegou a ser expulso do Panteão por esse crime, mas sua astúcia não conhecia limites; Sszzaas conseguiu tramar um novo plano para ser aceito de volta. Hoje, mesmo após a quase extinção de seu culto, os sszzaazitas voltam a se espalhar sobre Arton, agindo em nome do Grande Corruptor. Mas será prudente devotar-se a um Deus da Traição? Apenas os mais ousados e astutos acreditam que sim.",
    beliefs: "Praticar a mentira e a trapaça. Buscar sempre a solução mais inteligente. Demonstrar que lealdade e confiança são fraquezas, devem ser eliminadas. Promover competição, rivalidade, desconfiança. Usar os recursos do inimigo para alcançar seus objetivos. Levar outros a se sacrificarem em seu lugar.",
    sacredSymbol: "Uma naja vertendo veneno pelas presas.",
    channelEnergy: "Negativa",
    preferredWeapon: "Adaga",
    devotees: "Medusas, arcanistas, bardos, bucaneiros, inventores, ladinos, nobres.",
    grantedPowers: [
      "Astúcia da Serpente",
      " Familiar Ofídico",
      "Presas Venenosas",
      "Sangue Ofídico"
    ],
    obligationsRestrictions: " O devoto deve fazer um ato de traição, intriga ou corrupção por dia (ou por sessão de jogo, o que demorar mais) como oferenda a Sszzaas. Em termos de jogo, uma ação exigindo um teste de Enganação com CD mínima 15 + {metade do seu nível}."
  },
  {
    id: "10",
    name: "Thyatis",
    image: "/deuses/Thyatis.png",
    status: "normal",
    history: "O generoso Deus da Ressurreição e Profecia representa o perdão, a tolerância, as segundas chances. Seu dom maior é a prevenção ou correção dos erros — através de predições que evitam esses erros ou reversão das mortes que tenham causado. Para Thyatis, ninguém deve ser castigado por errar e todos merecem a chance de aprender com suas falhas, em vez de morrer por elas. Dizem que seus clérigos são contemplados com poderosos dons de profecia e ressurreição, e seus paladinos nunca morrem!",
    beliefs: "Proteger a vida e aqueles necessitados de novas chances. Renegar a morte e a mentira. Ajudar os perdidos a encontrar seus caminhos e alcançar seus destinos. Oferecer clemência, perdão e redenção.",
    sacredSymbol: "Uma ave fênix.",
    channelEnergy: "Positiva",
    preferredWeapon: "Espada longa.",
    devotees: "Aggelus, cavaleiros, guerreiros, inventores, lutadores, paladinos.",
    grantedPowers: [
      "Ataque Piedoso",
      "Dom da Imortalidade",
      "Dom da Profecia",
      "Dom da Ressurreição"
    ],
    obligationsRestrictions: "Devotos de Thyatis são proibidos de matar criaturas inteligentes (Int –3 ou maior). Podem atacar e causar dano, mas jamais levar à morte. Por esse motivo, devotos de Thyatis preferem armas e ataques que apenas incapacitam seus oponentes ou causam dano não letal."
  },
  {
    id: "11",
    name: "Arsenal",
    image: "/deuses/Arsenal.png",
    status: "normal",
    history: "Outrora um infame clérigo guerreiro, o vilão conhecido apenas como Mestre Arsenal se tornou sumo-sacerdote do violento deus Keenn. No entanto, após uma longa campanha que envolveu a conquista da mais poderosa espada mágica de Arton, o clérigo derrotou seu próprio patrono em combate durante um torneio épico, ascendendo ao Panteão como o novo Deus da Guerra. Com o objetivo de tornar Arton mais forte, capaz de confrontar qualquer inimigo, Arsenal e seus devotos seguem deflagrando conflitos por todo o Reinado e além.",
    beliefs: "Promover a guerra e o conflito. Vencer a qualquer custo, pela força ou estratégia. Jamais oferecer ou aceitar rendição. Eliminar as próprias fraquezas. Conhecer o inimigo como a si mesmo. Sempre encontrar condições de vitória; quando não existirem, criá-las.",
    sacredSymbol: "Um martelo de guerra e uma espada longa cruzados sobre um escudo.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Martelo de guerra.",
    devotees: "Anões, minotauros, bárbaros, cavaleiros, guerreiros, lutadores.",
    grantedPowers: [
      "Conjurar Arma",
      "Coragem Total",
      "Fé Guerreira",
      "Sangue de Ferro"
    ],
    obligationsRestrictions: "Um devoto de Arsenal é proibido de ser derrotado em qualquer tipo de combate ou disputa (como um teste oposto para ver quem é mais forte). Caso seu grupo seja derrotado, isso também constitui uma violação das obrigações."
  },
  {
    id: "12",
    name: "Kallyadranoch",
    image: "/deuses/Kallyadranoch.png",
    status: "normal",
    history: "Como punição imposta por Khalmyr pelo crime de criar a Tormenta, o Deus dos Dragões estava esquecido até poucos anos atrás, conhecido apenas como “o Terceiro”. Restaurado em tempos recentes durante um combate épico contra os invasores aberrantes, Kallyadranoch agora governa não apenas os dragões, mas todos que cultuam o poder elemental das grandes feras. Além disso, enquanto Wynna representa o lado bondoso e generoso da magia arcana, Kally é cultuado por arcanistas malignos.",
    beliefs: "Praticar a soberania. Demonstrar orgulho, superioridade, majestade. Praticar o acúmulo de riquezas. Proteger suas posses e sua dignidade. Ser implacável com seus inimigos. Reverenciar os dragões e suas crias.",
    sacredSymbol: "Escamas de cinco cores diferentes.",
    channelEnergy: " Negativa.",
    preferredWeapon: " Lança.",
    devotees: "Elfos, medusas, sulfure, arcanistas, cavaleiros, guerreiros, lutadores, nobres.",
    grantedPowers: [
      "Aura de Medo",
      "Escamas Dracônicas",
      "Presas Primordiais",
      "Servos do Dragão"
    ],
    obligationsRestrictions: "Para subir de nível, além de acumular XP suficiente, o devoto de Kally deve realizar uma oferenda em tesouro. O valor é igual a 20% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual."
  },
  {
    id: "13",
    name: "Lin-Wu",
    image: "/deuses/Lin-Wu.png",
    status: "normal",
    history: "Mesmo com a quase extinção de seu povo pela Tormenta, o honrado Deus Samurai nunca fraquejou, nunca perdeu sua dignidade. Hoje, o Império de Jade está livre da tempestade, seus habitantes retornam para a grande reconstrução. Lin-Wu e seu povo sempre serão gratos aos campeões gaijin, por sua amizade e suporte durante os anos de pesadelo. Talvez por esse motivo, conforme especulam seus servos shugenja, devotos de Lin-Wu atuando longe de Tamu-ra recebem poderes diferentes, mais convenientes para suas missões.",
    beliefs: "Promover a honra acima de tudo. Proteger Tamu-ra e o Reinado de Arton. Praticar honestidade, coragem, cortesia e compaixão. Demonstrar integridade e dignidade. Ser leal a seus companheiros. Buscar redenção após cometer desonra.",
    sacredSymbol: "Placa de metal com a silhueta de um dragão-serpente celestial.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Katana.",
    devotees: "Anões, cavaleiros, guerreiros, nobres, paladinos.",
    grantedPowers: [
      "Coragem Total",
      "Kiai Divino",
      "Mente Vazia",
      "Tradição de Lin-Wu"
    ],
    obligationsRestrictions: "Devotos de Lin-Wu ainda devem demonstrar comportamento honrado, jamais recorrendo a mentiras e subterfúgios. Em termos de jogo, são proibidos de tentar qualquer ação que exigiria um teste de Enganação, Furtividade ou Ladinagem."
  },
  {
    id: "14",
    name: "Oceano",
    image: "/deuses/Oceano.png",
    status: "normal",
    history: "Nestes tempos de grande tumulto no plano divino, em meio a deuses caindo e ascendendo, o Deus dos Mares está entre os poucos ainda imutáveis. Sua época de fúria, quando arrasava civilizações inteiras, foi quase esquecida. Hoje o Oceano é sereno, pleno em si mesmo, alienado dos conflitos no Panteão — acha os outros deuses mesquinhos, disputando ninharias, frente à vastidão de seus domínios. Ainda assim, recebe preces de marinheiros, piratas e povos marinhos, orando por sua tranquilidade, rogando que suas tempestades sejam breves.",
    beliefs: "Reverenciar os mares, o oceano e os seres que ali habitam. Promover harmonia entre o oceano e o mundo seco. Proteger os seres marinhos, mas também os seres do mundo seco que se aventuram sobre as ondas. Demandar devido respeito ao mar e seu poder.",
    sacredSymbol: "Uma concha.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Tridente.",
    devotees: "Dahllan, hynne, minotauros, sereias/tritões, bárbaros, bucaneiros, caçadores, druidas.",
    grantedPowers: [
      "Anfíbio",
      "Arsenal das Profundezas",
      "Mestre dos Mares",
      "Sopro do Mar"
    ],
    obligationsRestrictions: "As únicas armas permitidas para devotos do Oceano são a azagaia, a lança, o tridente e a rede. Podem usar apenas armaduras leves. O devoto também não pode se manter afastado do oceano por mais de um mês."
  },
  {
    id: "15",
    name: "Thwor",
    image: "/deuses/Thwor.png",
    status: "normal",
    history: "A Flecha de Fogo foi disparada, rompendo o coração das trevas. A antiga profecia foi cumprida. No entanto, o que muitos pensavam significar o fim da Aliança Negra dos goblinoides resultou em algo totalmente diferente, totalmente novo. Ao enfrentar e derrotar o próprio Ragnar, antigo Deus da Morte, o imperador bugbear Thwor Khoshkothruk ascendeu ao Panteão como o Deus dos Goblinoides. Agora protegidos e governados por uma poderosa divindade, os povos duyshidakk erguem sua própria civilização no continente de Lamnor, e o Reinado de Arton deverá lidar com o futuro que surgir disso.",
    beliefs: "Reverenciar a lealdade, a força e a coragem. Promover a união entre goblins, hobgoblins, bugbears, orcs, ogros e outros povos humanoides. Reverenciar o caos, a mutação, a vida sempre em movimento. Proteger a cultura e o modo de vida goblinóide. Destruir os elfos.",
    sacredSymbol: "Um grande punho fechado.",
    channelEnergy: " Qualquer.",
    preferredWeapon: "Machado de guerra.",
    devotees: "Qualquer duyshidakk (veja abaixo)",
    grantedPowers: [
      "Almejar o Impossível",
      "Fúria Divina",
      "Olhar Amedrontador",
      "Tropas Duyshidakk"
    ],
    obligationsRestrictions: "Não importando sua raça, o devoto de Thwor deve ser duyshidakk — ou seja, aceito como membro do povo goblinóide. Também deve se esforçar para que o “Mundo Como Deve Ser” tome o continente. Deve sempre procurar fazer alianças com goblinoides e só lutar contra eles em último caso."
  },
  {
    id: "16",
    name: "Azgher",
    image: "/deuses/Azgher.png",
    status: "normal",
    history: "Venerado pelos povos do Deserto da Perdição, o Deus-Sol é também cultuado por viajantes, mercadores honestos e todos aqueles que combatem as trevas. É um deus generoso; sua jornada diária derrama calor e conforto sobre Arton. Azgher é como um pai severo: responsável, provedor, mas que também exige respeito de seus filhos. Como um olho sempre vigilante nos céus, nada acontece à luz do dia sem que Azgher perceba.",
    beliefs: "Praticar a gratidão pela proteção e generosidade do sol. Promover a honestidade, expor embustes e mentiras. Praticar a caridade e o altruísmo. Proteger os necessitados. Oferecer clemência, perdão e redenção. Combater o mal.",
    sacredSymbol: "Um sol dourado.",
    channelEnergy: "Positiva.",
    preferredWeapon: "Cimitarra.",
    devotees: "Aggelus, qareen, arcanistas, bárbaros, caçadores, cavaleiros, guerreiros, nobres, paladinos.",
    grantedPowers: [
      "Espada Solar",
      "Fulgor Solar",
      "Habitante do Deserto",
      "Inimigo de Tenebra"
    ],
    obligationsRestrictions: "O devoto de Azgher deve manter o rosto sempre coberto (com uma máscara, capuz ou trapos). Sua face pode ser revelada apenas ao sumo-sacerdote ou em seu funeral. Devotos do Sol também devem doar para a igreja de Azgher 20% de qualquer tesouro obtido. Essa doação deve ser feita em ouro, seja na forma de moedas ou itens."
  },
  {
    id: "17",
    name: "Hyninn",
    image: "/deuses/Hyninn.png",
    status: "normal",
    history: "Capaz de enganar até mesmo outros deuses, o ardiloso Deus da Trapaça é uma divindade favorita de foras da lei — seus clérigos atuam como conselheiros, ou até mesmo líderes, em guildas criminosas ou navios piratas. Também é louvado por regentes e mercadores não muito honestos, orando por vantagens ilícitas. No entanto, mesmo pessoas honradas eventualmente simpatizam com Hyninn por sua esperteza, despreocupação e ousadia.",
    beliefs: "Praticar a astúcia e a esperteza. Demonstrar que honestidade e sinceridade levam ao fracasso. Desafiar a lei e a ordem. Ser vitorioso sem seguir regras. Fazer aos outros antes que façam a você. Levar vantagem em tudo.",
    sacredSymbol: "Uma adaga atravessando uma máscara, ou uma raposa.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Adaga.",
    devotees: "Hynne, goblins, sílfides, bardos, bucaneiros, ladinos, inventores, nobres.",
    grantedPowers: [
      "Apostar com o Trapaceiro",
      "Farsa do Fingidor",
      "Forma de Macaco",
      "Golpista Divino"
    ],
    obligationsRestrictions: "Um devoto de Hyninn não recusa participação em um golpe, trapaça ou artimanha (o que muitas vezes inclui missões para roubar... hã, resgatar tesouros), exceto quando prejudica seus próprios aliados. O devoto também deve fazer um ato furtivo, ousado ou proibido por dia (ou por sessão de jogo, o que demorar mais), como oferenda a Hyninn. Em termos de jogo, uma ação exigindo um teste de Enganação ou Ladinagem com CD mínima 15 + {metade do seu nível}."
  },
  {
    id: "18",
    name: "Marah",
    image: "/deuses/Marah.png",
    status: "normal",
    history: "Neste mundo sempre em guerra, devotos da Deusa da Paz talvez sejam os mais corajosos e perseverantes, buscando inspiração em sua padroeira para proteger Arton sem usar de violência. Marah ensina a suportar qualquer provação, demonstrar que brutalidade nunca é a única resposta. Ainda assim, esta não é apenas uma divindade de placidez e indolência; devotos de Marah costumam ser plenos de bom humor e atitude positiva, sempre prontos para uma nova celebração ou romance...",
    beliefs: "Praticar o amor e a gratidão pela vida e pela bondade. Promover a paz, harmonia e felicidade. Aliviar a dor e o sofrimento, trazer conforto aos aflitos. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção.",
    sacredSymbol: "Um coração vermelho.",
    channelEnergy: "Positiva.",
    preferredWeapon: "Não há. Devotos desta deusa não podem lançar a magia Arma Espiritual e similares.",
    devotees: "Aggelus, elfos, hynne, qareen, bardos, nobres, paladinos.",
    grantedPowers: [
      "Aura de Paz",
      "Dom da Esperança",
      "Palavras de Bondade",
      "Talento Artístico"
    ],
    obligationsRestrictions: " Devotos de Marah não podem causar dano, perda de PV e condições a criaturas, exceto enfeitiçado, fascinado e pasmo (fornecer bônus em dano também é proibido). Em combate, só podem recorrer a ações como proteger ou curar — ou fugir, render-se ou aceitar a morte. Um devoto de Marah jamais vai causar violência, nem mesmo para se salvar."
  },
  {
    id: "19",
    name: "Tanna-Toh",
    image: "/deuses/Tanna-Toh.png",
    status: "normal",
    history: "Em uma sociedade medieval típica, apenas membros do clero ou da nobreza teriam acesso a boa educação — camponeses jamais saberiam ler e escrever. Não é assim no Reinado de Arton, graças ao empenho da igreja de Tanna-Toh. Devotos da Deusa do Conhecimento atuam como professores, catequistas e pesquisadores, tomando a missão sagrada de levar educação e cultura para todos. Tanna-Toh é amplamente venerada pelos povos civilizados, amada por aqueles que se devotam aos estudos ou artes. Ainda assim, esta deusa é inimiga de povos bárbaros que escolhem permanecer ignorantes e selvagens.",
    beliefs: "Reverenciar a mente racional, o conhecimento, a civilização, a verdade. Proteger o progresso, o avanço dos povos civilizados. Promover o ensino e a prática das artes e das ciências. Solucionar todos os mistérios, revelar todas as mentiras. Buscar novo conhecimento. Não tolerar a ignorância.",
    sacredSymbol: "Pergaminho e pena.",
    channelEnergy: "Qualquer.",
    preferredWeapon: "Bordão.",
    devotees: "Golens, kliren, arcanistas, bardos, inventores, nobres, paladinos.",
    grantedPowers: [
      "Conhecimento Enciclopédico",
      "Mente Analítica",
      "Pesquisa Abençoada",
      "Voz da Civilização"
    ],
    obligationsRestrictions: "Devotos de Tanna-Toh jamais podem recusar uma missão que envolva a busca por um novo conhecimento ou informação. Sempre deve dizer a verdade e nunca pode se recusar a responder uma pergunta direta. É proibido para ele esconder qualquer conhecimento."
  },
  {
    id: "20",
    name: "Valkaria",
    image: "/deuses/Valkaria.png",
    status: "normal",
    history: "A Deusa da Ambição sempre foi a mais ousada entre os seus. Ajudaria a criar os lefeu, a própria Tormenta. Criaria os seres humanos, povo mais impetuoso e beligerante de todos. Acabaria condenada ao cativeiro, até ser resgatada por seus próprios protegidos, elevando ainda mais sua glória (ou teria assim planejado desde o início?). Mas, quando Mestre Arsenal derrotou Keenn para tomar seu lugar como Deus da Guerra, o maior objetivo de Valkaria foi enfim alcançado: um humano superou um deus. Esse evento, e também a morte do antigo líder Tauron, levou os deuses a reconhecerem Valkaria como a nova liderança do Panteão.",
    beliefs: "Praticar o otimismo, a evolução, a rebeldia. Desafiar limites, almejar o impossível. Combater o mal, a opressão e a tirania. Proteger a liberdade. Aceitar o novo e diferente e adaptar-se a ele. Demonstrar ambição, paixão e coragem. Desfrutar e amar a vida.",
    sacredSymbol: "A Estátua de Valkaria ou seis faixas entrelaçadas.",
    channelEnergy: "Positiva.",
    preferredWeapon: "Mangual.",
    devotees: "Aventureiros; membros de todas as classes podem ser devotos de Valkaria.",
    grantedPowers: [
      "Almejar o Impossível",
      "Armas da Ambição",
      "Coragem Total",
      "Liberdade Divina"
    ],
    obligationsRestrictions: "Valkaria odeia o conformismo. Seus devotos são proibidos de fixar moradia em um mesmo lugar, não podendo permanecer mais de $2d10+10$ dias na mesma cidade (ou vila, aldeia, povoado...) ou 1d4+2 meses no mesmo reino. Devotos de Valkaria também são proibidos de se casar ou formar qualquer união estável."
  },
  {
    id: "21",
    name: "Morte - Sandman",
    image: "/deuses/morte.png",
    status: "normal",
    history: "A matéria apresenta novos elementos de jogo para aqueles que desejam usar personagens devotos inspirados pela mitologia de Sandman, mas é declaradamente uma adaptação com bastante licença poética. Um exercício de imaginação. A presença dos seres e artefatos apresentados NÃO é oficial em Arton. \n Dito isso, se crossovers não são sua praia, ou a mesa em que você joga usa alguns materiais de maneira mais estrita, converse com o grupo. É perfeitamente possível adaptar mecânicas ou conceitos apresentados aqui a outras divindades, ou aspectos da mitologia artoniana. Não é um material canônico. E sim herético. Use por sua conta e risco! Representando tanto o fim quanto o começo, dizem que essa perpétua era amada por todos em tempos antigos. Os mortais lembravam-se tanto da sua primeira visita: quando ela os insuflava com a centelha da vida, quanto de sua última e derradeira aparição. Mas com o passar dos séculos começaram a se esquecer disso e passaram a temê-la. Isso deixou a Morte cada vez mais ressentida e fria. Tudo mudou quando ela resolveu habitar um corpo mortal a cada cem anos, para entender sua perspectiva. Assim tornou-se a mais humana entre os perpétuos. A mais sábia até. Embora raramente demonstre, também é aquela de maior poder. Está destinada a testemunhar o fim de todas as coisas, quando apagará as luzes no céu e trancará os portões da existência atrás de si. É plenamente devotada a sua função, pois percebeu que um universo assolado pela imortalidade seria pior do que o fardo de ceifar almas. A morte trabalha em colaboração com outras divindades mortuárias, chamada por ela de “psicopompos”, que também têm função de coletar os espíritos e levá-los até seu descanso final. Em Arton, A Morte em Lamnor ainda é bastante associada ao hediondo deus Ragnar, uma divindade da extinção que sucumbiu durante os eventos da Flecha de Fogo. E no Reinado, a Leen, seu aspecto humano. Mas cultos da perpétua têm ganhado adesão para suprir essa ausência. Fala-se mesmo de um paladino que a representa, dado a partidas de xadrez com estranhos. Ex-sacerdotes de Leen também têm encontrado acolhimento nesse novo culto, embora sejam vistos com desconfiança e caçados pela maioria das outras ordens religiosas. Clérigos de Tenebra costumam hostilizar devotos da Morte, pois sentem que eles não compreendem as bênçãos da verdadeira mãe-noite, e consideram hipócritas aqueles que abraçam a imortalidade para caçar mortos-vivos. Ironicamente, o mesmo desprezo é demonstrado pelos devotos de Azgher, que os confundem com adoradores da noite, ou não aprovam seus métodos, tidos como profanos.",
    beliefs: "Ajudar a celebrar ritos fúnebres e confortar pessoas passando por luto. Combater assombrações e outras entidades que tentem trapacear a morte, para manter o equilíbrio no universo, mesmo que para isso seja necessário se sujeitar a uma existência eterna. ",
    sacredSymbol: "Ankh de prata.",
    channelEnergy: "Qualquer",
    preferredWeapon: "Gadanho.",
    devotees: "Quaisquer. Cedo ou tarde, toda criatura contempla seu fim.",
    grantedPowers: [
      "Aparência Adaptável",
      "Caçador de Imortais",
      "Dom do Psicopompo",
    ],
    obligationsRestrictions: "Um devoto da Morte é proibido de saquear tumbas ou templos consagrados à patrona que servem e às demais divindades que cuidam dos mortos. Podem permitir que outras pessoas retirem objetos desses lugares, mas não podem partilhar do espólio. Em um combate, seu primeiro ato deve ser gastar uma ação de movimento em oração, dedicando as mortes que vierem a ocorrer durante a batalha à sua deusa."
  },
];