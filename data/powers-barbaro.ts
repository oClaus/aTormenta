import { Power } from "@/types/power";

export const powersBarbaro: Power[] = [
  {
    id: "1",
    name: "Alma de Bronze ",
    description: "Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a seu nível + sua Força.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Destruidor",
    description: "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. ",
    prerequisite: "For 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Frenesi",
    description: "Uma vez por rodada, se estiver em fúria e usar a ação agredir para fazer um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 2 PM para fazer um ataque adicional.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Ímpeto",
    description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Sangue dos Inimigos",
    description: "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Espírito Inquebrável",
    description: "Enquanto está em fúria, você não fica inconsciente por estar com 0 PV ou menos (você ainda morre se chegar em um valor negativo igual à metade de seus pontos de vida máximos).",
    prerequisite: "Alma de Bronze",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Fúria da Savana",
    description: "Seu deslocamento aumenta em $+3m$. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Investida Imprudente",
    description: "Quando faz uma investida, você pode aumentar sua penalidade na Defesa pela investida para –5 para receber um bônus de +1d12 na rolagem de dano deste ataque.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Superstição",
    description: "Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +5.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Brado Assustador",
    description: "Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto ficam vulneráveis até o fim da cena.",
    prerequisite: "Treinado em Intimidação. Medo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Esquiva Sobrenatural",
    description: "Seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos o percebam. Você nunca fica surpreendido.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Fúria Raivosa",
    description: "Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Pele de Aço",
    description: "O bônus de Pele de Ferro aumenta para +8.",
    prerequisite: "Pele de Ferro, 8º nível de bárbaro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Totem Espiritual",
    description: "Você soma sua Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja descrição ao fim da página). Você aprende e pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria) e pode lançá-la mesmo em fúria.",
    prerequisite: "Sab 1, 4º nível de bárbaro",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Crítico Brutal ",
    description: "Seu multiplicador de crítico com armas corpo a corpo e de arremesso aumenta em +1. Por exemplo, seu multiplicador com um machado de batalha (normalmente x3) será x4.",
    prerequisite: "6º nível de bárbaro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Força Indomável",
    description: "Você pode gastar 1 PM para somar seu nível em um teste de Força ou Atletismo. Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Golpe Poderoso ",
    description: "Ao acertar um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 1 PM para causar um dado extra de dano do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12, para um dano total de 2d12).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Pele de Ferro ",
    description: "Você recebe +4 na Defesa, mas apenas se não estiver usando armadura pesada.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Vigor Primal",
    description: "Você pode gastar uma ação de movimento e uma quantidade de PM limitada por sua Constituição. Para cada PM que gastar, você recupera 1d12 pontos de vida.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },

  
];