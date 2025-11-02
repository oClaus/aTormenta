import { Power } from "@/types/power";

export const powersBardo: Power[] = [
  {
    id: "1",
    name: "Arte Mágica",
    description: "Enquanto você estiver sob efeito de sua Inspiração, a CD para resistir a suas habilidades de bardo aumenta em +2.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Aumentar Repertório",
    description: "Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Dança das Lâminas",
    description: "Quando você lança uma magia com execução de uma ação padrão, pode gastar 1 PM para fazer um ataque corpo a corpo como uma ação livre. ",
    prerequisite: "Esgrima Mágica, 10º nível de bardo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Esgrima Mágica",
    description: "Sua arte mescla esgrima e magia, transformando dança em golpes. Se estiver sob efeito de Inspiração, você pode substituir testes de Luta por testes de Atuação, mas apenas para ataques com armas corpo a corpo leves ou de uma mão.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Estrelato",
    description: "Suas apresentações o tornaram famoso, fazendo com que você seja reconhecido e bem tratado por aqueles que apreciam a arte. Por outro lado, pode ser difícil passar despercebido, especialmente em grandes cidades. Quando usa Atuação para impressionar uma plateia, o bônus recebido em perícias baseadas em Carisma aumenta para +5. ",
    prerequisite: "6º nível de bardo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Fascinar em Massa",
    description: "Quando usa Música: Balada Fascinante, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas à sua escolha no alcance da música (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura).",
    prerequisite: "Música: Balada Fascinante",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Golpe Elemental",
    description: "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo, pode gastar 1 PM para causar 1d6 de dano extra de ácido, eletricidade, fogo ou frio, à sua escolha. Para cada quatro níveis que possuir, pode gastar +1 PM para aumentar o dano em +1d6.",
    prerequisite: "Golpe Mágico",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Golpe Mágico",
    description: "Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários cumulativos. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena.",
    prerequisite: "Esgrima Mágica",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Inspiração Marcial",
    description: "Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de perícia).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Lendas e Histórias",
    description: "Você é um arquivo vivo de relatos, canções e folclore. Além de outros benefícios a critério do mestre, pode gastar 1 PM para rolar novamente um teste recém realizado de Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens mágicos.",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Manipular",
    description: "Você pode gastar 1 PM para fazer uma criatura fascinada por você ficar enfeitiçada até o fim da cena (Von CD Car anula). Se a criatura passar, fica imune a este efeito por um dia. Usar esta habilidade não conta como ameaça à criatura fascinada.",
    prerequisite: "Música: Balada Fascinante.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Manipular em Massa",
    description: "Quando usa Manipular, você pode gastar +2 PM. Se fizer isso, afeta todas as criaturas à sua escolha em alcance curto.",
    prerequisite: "Fascinar em Massa, Manipular, 10º nível de bardo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Música: Balada Fascinante",
    description: "Faça um teste de Atuação oposto pelo teste de Vontade de uma criatura no alcance. Se você passar, ela fica fascinada enquanto você se concentrar (uma ação padrão por rodada). Um alvo hostil ou envolvido em combate recebe +5 no teste de resistência e tem direito a um novo teste sempre que você se concentrar. Se a criatura passar, fica imune a este efeito por um dia.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Música: Canção Assustadora",
    description: "Faça um teste de Atuação oposto pelo teste de Vontade de cada criatura à sua escolha dentro do alcance (você faz um único teste). Alvos que falhem ficam abalados até o fim da cena. Alvos que passem ficam imunes a este efeito por um dia",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Música: Melodia Curativa",
    description: "Criaturas à sua escolha no alcance recuperam $1d6$ PV. Quando usa esta habilidade, você pode gastar mais pontos de mana. Para cada PM extra, aumente a cura em +1d6 PV.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Melodia Restauradora",
    description: "Quando você usa Música: Melodia Curativa, pode gastar +2 PM. Se fizer isso, escolha uma das condições a seguir: abalado, alquebrado, apavorado, atordoado, cego, confuso, enfeitiçado, esmorecido, exausto, fatigado, frustrado, pasmo ou surdo. Você remove a condição escolhida das criaturas afetadas pela música.",
    prerequisite: "Música: Melodia Curativa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Mestre dos Sussurros",
    description: "Você é dissimulado, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para interrogar ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, pode fazer esses testes em ambientes sociais (taverna, festival, corte...) sem custo e em apenas uma hora (em vez de um dia).",
    prerequisite: "Car 1, treinado em Enganação e Investigação.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Paródia",
    description: "Uma vez por rodada, quando vê outra criatura lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Prestidigitação",
    description: "Quando faz uma ação padrão, você pode aproveitar seus gestos para lançar uma magia com execução de ação completa ou menor. Faça um teste de Atuação (CD 15 + custo em PM da magia). Se passar, você lança a magia como uma ação livre. Se falhar, a magia não funciona, mas você gasta os PM mesmo assim. Outros personagens só percebem que você lançou uma magia com um teste de Misticismo (CD 20).",
    prerequisite: "6º nível de bardo.",
    origin: "Tormenta20 - Jogo do Ano"
  },

  

  
];