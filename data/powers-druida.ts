import { Power } from "@/types/power";

export const powersDruida: Power[] = [
  {
    id: "1",
    name: "Aspecto do Inverno",
    description: "Você aprende e pode lançar uma magia de convocação ou evocação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, recebe redução de frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Aspecto do Outono",
    description: "Você aprende e pode lançar uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance curto até o início do seu próximo turno.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aspecto da Primavera",
    description: "Você aprende e pode lançar uma magia de encantamento ou ilusão, arcana ou divina, de qualquer círculo que possa lançar. Além disso, escolha uma quantidade de magias igual ao seu Carisma (mínimo 1). O custo dessas magias é reduzido em −1 PM.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Aspecto do Verão",
    description: "Você aprende e pode lançar uma magia de transmutação, arcana ou divina, de qualquer círculo que possa lançar. Além disso, pode gastar 1 PM para cobrir uma de suas armas com chamas até o fim da cena. A arma causa +1d6 pontos de dano de fogo. Sempre que você acertar um ataque com ela, recebe 1 PM temporário. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no final da cena.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Companheiro Animal",
    description: "Você recebe um companheiro animal. Veja o quadro para detalhes. Você pode escolher este poder quantas vezes quiser, mas deve escolher companheiros diferentes e ainda está sujeito ao limite de parceiros que pode ter.",
    prerequisite: "Car 1, treinado em Adestramento.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Companheiro Animal Aprimorado",
    description: "Escolha um de seus companheiros animais. Ele recebe um segundo tipo, ganhando os bônus de seu nível. Por exemplo, se você tiver um companheiro guardião veterano, pode adicionar o tipo fortão a ele, tornando-o um guardião fortão veterano que concede +3 na Defesa e +1d12 em uma rolagem de dano corpo a corpo.",
    prerequisite: "Companheiro Animal, 6º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Companheiro Animal Lendário",
    description: "Escolha um de seus companheiros animais. Esse animal passa a dobrar os bônus concedidos de seu tipo original.",
    prerequisite: "Companheiro Animal, 18º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Companheiro Animal Mágico",
    description: "Escolha um de seus companheiros animais. Ele recebe um segundo tipo diferente, entre adepto, destruidor, magivocador ou médico, ganhando os bônus de seu nível. ",
    prerequisite: "Companheiro Animal, 8º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Coração da Selva",
    description: "A CD para resistir a seus efeitos de veneno aumenta em +2 e estes efeitos causam +1 de perda de vida por dado.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Espírito dos Equinócios",
    description: "Você pode gastar 4 PM para ficar em equilíbrio com o mundo. Até o final da cena, quando rola um dado, pode rolar novamente qualquer resultado 1.",
    prerequisite: "Aspecto da Primavera, Aspecto do Outono, 10º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Espírito dos Solstícios",
    description: "Você transita entre os extremos do mundo natural. Quando lança uma magia, pode gastar +4 PM para maximizar os efeitos numéricos variáveis dela. Por exemplo, uma magia Curar Ferimentos aprimorada para curar 5d8+5 PV irá curar automaticamente 45 PV, sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser afetada por este poder.",
    prerequisite: "Aspecto do Inverno, Aspecto do Verão, 10º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Força dos Penhascos",
    description: "Você recebe +2 em Fortitude. Quando sofre dano enquanto em contato com o solo ou uma superfície de pedra, pode gastar uma quantidade de PM limitada por sua Sabedoria. Para cada PM gasto, reduz esse dano em 10.",
    prerequisite: " 4º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Forma Primal",
    description: "Quando usa Forma Selvagem, você pode se transformar em uma fera primal. Você recebe os benefícios de dois tipos de animais (bônus iguais não se acumulam; use o que você quiser de cada tipo).",
    prerequisite: "18º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Forma Selvagem",
    description: "Você pode se transformar em animais (veja a seguir).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Forma Selvagem Aprimorada",
    description: "Quando usa Forma Selvagem, você pode gastar 6 PM ao todo para assumir uma forma aprimorada.",
    prerequisite: "Forma Selvagem, 6º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Forma Selvagem Superior",
    description: "Quando usa Forma Selvagem, você pode gastar 10 PM ao todo para assumir uma forma superior.",
    prerequisite: "Forma Selvagem Aprimorada, 12º nível de druida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Liberdade da Pradaria",
    description: "Você recebe +2 em Reflexos. Se estiver ao ar livre, sempre que lança uma magia, pode gastar 1 PM para aumentar o alcance dela em um passo (de toque para curto, de curto para médio ou de médio para longo).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Magia Natural",
    description: "Em forma selvagem, você pode lançar magias e empunhar catalisadores e esotéricos.",
    prerequisite: "Forma Selvagem.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Presas Afiadas",
    description: "A margem de ameaça de suas armas naturais aumenta em +2.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Segredos da Natureza",
    description: "Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Tranquilidade dos Lagos",
    description: "Você recebe +2 em Vontade. Se estiver portando um recipiente com água (não precisa estar empunhando), uma vez por rodada, quando faz um teste de resistência, pode pagar 1 PM para refazer a rolagem.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },

  
];