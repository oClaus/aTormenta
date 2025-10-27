import { Power } from "@/types/power";

export const powersLadino: Power[] = [
  {
    id: "1",
    name: "Assassinar",
    description: "Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados",
    prerequisite: "5º nível de ladino",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "2",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "Nenhum",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "3",
    name: "Contatos no Submundo",
    description: "Quando chega em uma comunidade equivalente a uma vila ou maior, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se passar, enquanto estiver nessa comunidade, recebe +5 em testes de Investigação para interrogar, pode comprar itens mundanos, poções e pergaminhos com 20% de desconto (não cumulativo com barganha e outros descontos) e, de acordo com o mestre, tem acesso a itens e serviços proibidos (como armas de pólvora e venenos).",
    prerequisite: "Nenhum",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "4",
    name: "Emboscar",
    description: "Na primeira rodada de cada combate, você pode gastar 2 PM para executar uma ação padrão adicional em seu turno.",
    prerequisite: "Treinado em Furtividade.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "5",
    name: "Escapista",
    description: "Você recebe +5 em testes de Acrobacia para escapar, passar por espaço apertado e passar por inimigo e em testes para resistir a efeitos de movimento.",
    prerequisite: "Nenhum",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "6",
    name: "Fuga Formidável",
    description: "Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de uma cidade...). Até o fim da cena, recebe $+3m$ em seu deslocamento, +5 em Acrobacia e Atletismo e ignora penalidades em movimento por terreno difícil. Você perde esses benefícios se fizer uma ação que não seja diretamente relacionada a fugir. Por exemplo, você só pode atacar um inimigo se ele estiver bloqueando seu caminho, agarrando-o etc. Você pode fazer ações para ajudar seus aliados, mas apenas se eles estiverem tentando escapar.",
    prerequisite: "Int 1",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "7",
    name: "Gatuno",
    description: "Você recebe +2 em Atletismo. Quando escala, não fica desprevenido e avança seu deslocamento normal, em vez de metade dele.",
    prerequisite: "Nenhum",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "8",
    name: "Ladrão Arcano",
    description: "Quando causa dano com um ataque furtivo em uma criatura capaz de lançar magias, você pode “roubar” uma magia que já a tenha visto lançar. Você precisa pagar 1 PM por círculo da magia e pode roubar magias de até 4º círculo. Até o fim da cena, você pode lançar a magia roubada (atributo-chave Inteligência).",
    prerequisite: "Roubo de Mana, 13º nível de ladino.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "9",
    name: "Mão na Boca",
    description: "Você recebe +2 em testes de agarrar. Quando acerta um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada",
    prerequisite: "Treinado em Luta.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "10",
    name: "Mãos Rápidas",
    description: "Uma vez por rodada, ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para fazê-lo como uma ação livre.",
    prerequisite: "Des 2, treinado em Ladinagem.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "11",
    name: "Mente Criminosa",
    description: "Você soma sua Inteligência em Ladinagem e Furtividade.",
    prerequisite: "Int 1",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "12",
    name: "Oportunismo",
    description: "Uma vez por rodada, quando um inimigo adjacente sofre dano de um de seus aliados, você pode gastar 2 PM para fazer um ataque corpo a corpo contra este inimigo.",
    prerequisite: "6º nível de ladino.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "13",
    name: "Rolamento Defensivo",
    description: "Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica caído.",
    prerequisite: "treinado em Reflexos",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "14",
    name: "Roubo de Mana",
    description: "Quando você causa dano com um ataque furtivo, para cada $1d6$ de dano de seu ataque furtivo, você recebe 1 PM temporário e a criatura perde 1 ponto de mana (se tiver). Você só pode usar este poder uma vez por cena contra uma mesma criatura.",
    prerequisite: "Truque Mágico, 7º nível de ladino.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "15",
    name: "Saqueador de Tumbas",
    description: "Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de resistência contra elas. Além disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas (veja a perícia Ladinagem).",
    prerequisite: "Nenhum",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "16",
    name: "Sombra",
    description: "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10.",
    prerequisite: " treinado em Furtividade.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "17",
    name: "Truque Mágico",
    description: "Você aprende e pode lançar uma magia arcana de 1º círculo à sua escolha, pagando seu custo normal em PM. Seu atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "Int 1.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "18",
    name: "Velocidade Ladina",
    description: "Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno.",
    prerequisite: "Des 2, treinado em Iniciativa.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "19",
    name: "Veneno Persistente",
    description: "Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um)",
    prerequisite: "Veneno Potente, 8º nível de ladino.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "20",
    name: "Veneno Potente",
    description: "A CD para resistir aos venenos que você usa aumenta em +5.",
    prerequisite: "treinado em Ofício (alquimista).",
    origin: "tormenta20 - jogo do ano"
  },
];