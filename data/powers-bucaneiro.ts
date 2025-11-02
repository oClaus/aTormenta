import { Power } from "@/types/power";

export const powersBucaneiro: Power[] = [
  {
    id: "1",
    name: "Abusar dos Fracos",
    description: "Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo.",
    prerequisite: "Flagelo dos Mares.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Amigos no Porto",
    description: "Quando chega em uma comunidade portuária, você pode fazer um teste de Carisma (CD 10). Se passar, encontra um amigo para o qual pode pedir um favor ou que pode ajudá-lo como parceiro veterano de um tipo à sua escolha por um dia.",
    prerequisite: "Car 1, 6º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aparar",
    description: "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 1 PM para fazer um teste de ataque com bônus igual ao seu nível (além do normal). Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder se estiver usando uma arma corpo a corpo leve ou ágil.",
    prerequisite: "Esgrimista.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Apostador",
    description: "Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 200 (CD 20), T$ 400 (CD 25), T$ 800 (CD 30), T$ 1.600 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor equivalente, a critério do mestre). Se falhar, perde esse mesmo o valor. A critério do mestre, o lugar onde você está pode limitar ou impossibilitar o uso deste poder. ",
    prerequisite: "treinado em Jogatina.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Ataque Acrobático",
    description: "Quando se aproxima de um inimigo com um salto ou pirueta (em termos de jogo, usando Atletismo ou Acrobacia para se mover) e o ataca no mesmo turno, você recebe +2 nesse teste de ataque e na rolagem de dano.",
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
    name: "Aventureiro Ávido",
    description: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o poder Surto Heroico, em vez disso seu custo diminui em –2 PM.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Bravata Audaz",
    description: "Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da princesa até o fim do baile. Se cumprir a bravata, seus PM aumentam em +2 por nível de bucaneiro até o fim da aventura.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Bravata Imprudente",
    description: "Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição à sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "En Garde",
    description: "Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma corpo a corpo leve ou ágil, você recebe +2 na margem de ameaça com essas armas e +2 na Defesa.",
    prerequisite: "Esgrimista.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Esgrimista",
    description: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Flagelo dos Mares",
    description: "Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos. ",
    prerequisite: "treinado em Intimidação.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Folião",
    description: "Você sabe fazer amizades durante festas, de noitadas em tavernas a bailes na corte. Nesses locais, você recebe +2 em testes de perícias de Carisma e a atitude de todas as pessoas em relação a você melhora em uma categoria.",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Grudar o Cano",
    description: "Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade de –5 no teste de ataque e aumenta seu dano em um passo.",
    prerequisite: "treinado em Luta, Pistoleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Pernas do Mar",
    description: "Você recebe +2 em Acrobacia e Atletismo. Além disso, quando está se equilibrando ou escalando, você não fica desprevenido e seu deslocamento não é reduzido à metade.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Pistoleiro",
    description: "Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Presença Paralisante",
    description: "Você soma seu Carisma em Iniciativa e, se for o primeiro na iniciativa, ganha uma ação padrão extra na primeira rodada.",
    prerequisite: "Car 1, 4º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Ripostar",
    description: "Quando usa a habilidade aparar e evita o ataque, você pode gastar 1 PM. Se fizer isso, pode fazer um ataque corpo a corpo imediato contra o inimigo que o atacou (se ele estiver em alcance).",
    prerequisite: "Aparar, 12º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Touché",
    description: "Quando se aproxima de um inimigo e o ataca com uma arma corpo a corpo leve ou ágil no mesmo turno, você pode gastar 2 PM para aumentar seu dano em um passo e receber +5 na margem de ameaça neste ataque.",
    prerequisite: "Esgrimista, 10º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  

  

  

  
];