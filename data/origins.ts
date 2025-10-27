import { Origin } from "@/types/origin";

export const origins: Origin[] = [
  {
    id: "1",
    name: "Acólito",
    description: "Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.",
    items: [
      "Símbolo Sagrado",
      "Traje de Sacerdote",
    ],
    benefits: [
      " Cura, Religião, Vontade (perícias);",
      " Medicina, Membro da Igreja, Vontade de Ferro (poderes).",
    ],
    uniquePower: {
      name: "Membro da Igreja",
      description: "Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Amigo dos Animais",
    description: "Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.",
    items: [
      "Cão de caça, cavalo, pônei ou trobo (escolha um).",
    ],
    benefits: [
      " Adestramento, Cavalgar (perícias);",
      " Amigo Especial (poderes).",
    ],
    uniquePower: {
      name: "Amigo Especial",
      description: "Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia à sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Amnésico",
    description: "Você perdeu a maior parte da memória. Sabe apenas o próprio nome ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de um ente querido ou apenas coisas que pegou de viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Talvez viajando com eles você descubra algo sobre seu passado.",
    items: [
      "Um ou mais itens (somando até T$ 500), aprovados pelo mestre, que podem ser uma pista misteriosa do seu passado.",
    ],
    benefits: [
      " Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre e o poder Lembranças Graduais.",
    ],
    uniquePower: {
      name: "Lembranças Graduais",
      description: "Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Aristocrata",
    description: "Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?",
    items: [
      "Joia de família no valor de T$ 300",
      "Traje da corte",
    ],
    benefits: [
      " Diplomacia, Enganação, Nobreza (perícias);",
      " Comandar, Sangue Azul (poderes).",
    ],
    uniquePower: {
      name: "Sangue Azul",
      description: "Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Artesão",
    description: "Do alfaiate habilidoso em costurar as vestes da nobreza ao armeiro que forja armas letais, você foi treinado por um parente, mestre ou guilda para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas se mostraram úteis durante as aventuras.",
    items: [
      "Instrumentos de ofício (qualquer)",
      "Um item que você possa fabricar de até T$ 50",
    ],
    benefits: [
      " Ofício, Vontade (perícias);",
      " Frutos do Trabalho, Sortudo (poderes).",
    ],
    uniquePower: {
      name: "Frutos do Trabalho",
      description: "No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar veterano, T$ 300 no heroico e T$ 500 no lenda."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Artista",
    description: "Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens “mundanos”, o artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.",
    items: [
      "Estojo de disfarces ou um instrumento musical à sua escolha",
    ],
    benefits: [
      " Atuação, Enganação (perícias);",
      " Atraente, Dom Artístico, Sortudo, Torcida (poderes).",
    ],
    uniquePower: {
      name: "Dom artístico",
      description: "Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
];