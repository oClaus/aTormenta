import { Power } from "@/types/power";

export const powersPaladino: Power[] = [
  {
    id: "1",
    name: "Arma Sagrada",
    description: "Quando usa Golpe Divino para atacar com a arma preferida de sua divindade, o dado de dano que você rola por Golpe Divino aumenta para d12.",
    prerequisite: "devoto de uma divindade (exceto Lena e Marah).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aura Antimagia",
    description: "Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de resistência contra magia recém realizado.",
    prerequisite: "14º nível de paladino.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Aura Ardente",
    description: "Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos à sua escolha dentro dela sofrem dano de luz igual a 5 + seu Carisma. ",
    prerequisite: "10º nível de paladino.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Aura de Cura",
    description: "Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados à sua escolha dentro dela curam um número de PV igual a 5 + seu Carisma.",
    prerequisite: "6º nível de paladino.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Aura de Invencibilidade",
    description: "Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus aliados dentro da aura.",
    prerequisite: "18º nível de paladino.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Aura Poderosa",
    description: "O raio da sua aura aumenta para 30m.",
    prerequisite: "6º nível de paladino.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Fulgor Divino",
    description: "Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Julgamento Divino: Arrependimento",
    description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele (apenas uma vez por cena).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Julgamento Divino: Autoridade",
    description: "Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você vencer, ele obedece a um comando simples, como “pare” ou “largue a arma” (apenas uma vez por cena). Mental.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Julgamento Divino: Iluminação",
    description: "Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Julgamento Divino: Justiça",
    description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Julgamento Divino: Libertação",
    description: "Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Julgamento Divino: Salvação",
    description: "Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Julgamento Divino: Vindicação",
    description: "Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Julgamento Divino: Zelo",
    description: "Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Orar",
    description: "Você aprende e pode lançar uma magia divina de 1º círculo à sua escolha. Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Virtude Paladinesca: Caridade",
    description: "O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em –1 PM.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Virtude Paladinesca: Castidade",
    description: "Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Virtude Paladinesca: Compaixão",
    description: "Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Virtude Paladinesca: Humildade",
    description: "Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu Carisma (duram até o fim da cena).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Virtude Paladinesca: Temperança",
    description: "Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
];