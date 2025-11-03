import { Power } from "@/types/power";

export const powersGuerreiro: Power[] = [
  {
    id: "1",
    name: "Ambidestria",
    description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    prerequisite: "Des 2.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Arqueiro",
    description: "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria em rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Sab 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Ataque Reflexo",
    description: "Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo (apenas uma vez por alvo a cada rodada).",
    prerequisite: "Des 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Bater e Correr",
    description: "Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Destruidor",
    description: "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 da rolagem de dano da arma.",
    prerequisite: "For 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Esgrimista",
    description: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência em rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Especialização em Arma",
    description: "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Especialização em Armadura",
    description: "Você recebe redução de dano 5 se estiver usando uma armadura pesada.",
    prerequisite: "12º nível de guerreiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Golpe de Raspão",
    description: "Uma vez por rodada, quando erra um ataque, você pode gastar 2 PM. Se fizer isso, causa metade do dano que causaria (ignorando efeitos que se aplicariam caso o ataque acertasse).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Golpe Demolidor",
    description: "Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a redução de dano dele.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Golpe Pessoal",
    description: "Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma técnica única, com efeitos determinados por você. Você constrói seu Golpe Pessoal escolhendo efeitos da lista ao final da página. Cada efeito possui um custo; a soma deles será o custo do Golpe Pessoal (mínimo 1 PM). O Golpe Pessoal só pode ser usado com uma arma específica (por exemplo, apenas espadas longas). Quando sobe de nível, você pode reconstruir seu Golpe Pessoal e alterar a arma que ele usa. Você pode escolher este poder outras vezes para golpes diferentes e não pode gastar mais PM em golpes pessoais em uma mesma rodada do que seu limite de PM.",
    prerequisite: "5º nível de guerreiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Ímpeto",
    description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Mestre em Arma",
    description: "Escolha uma arma. Com esta arma, seu dano aumenta em um passo e você pode gastar 2 PM para rolar novamente um teste de ataque recém realizado.",
    prerequisite: "Especialização em Arma com a arma escolhida, 12º nível de guerreiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Planejamento Marcial",
    description: "Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia.",
    prerequisite: "treinado em Guerra, 10º nível de guerreiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Romper Resistências",
    description: "Quando faz um Ataque Especial, você pode gastar 1 PM adicional para ignorar 10 pontos de redução de dano.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Solidez",
    description: "Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Tornado de Dor",
    description: "Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo em seu alcance natural. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido.",
    prerequisite: "6º nível de guerreiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Valentão",
    description: "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },

];