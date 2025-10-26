import { Power } from "@/types/power";

export const powersArcanista: Power[] = [
  {
    id: "1",
    name: "Arcano de Batalha",
    description: "Quando lança uma magia, você soma seu atributo-chave na rolagem de dano.",
    prerequisite: "Nenhum",
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
    name: "Fluxo de Mana",
    description: "Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente.",
    prerequisite: "10º nível de arcanista.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "4",
    name: "Foco Vital",
    description: "Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde PV igual ao valor excedente ou até ser destruído (se o foco for destruído, você sofre o dano excedente).",
    prerequisite: "Bruxo.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "5",
    name: "Mestre em Escola",
    description: "Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em –1 PM. ",
    prerequisite: "Especialista em Escola com a escola escolhida, 8º nível de arcanista.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "6",
    name: "Raio Poderoso",
    description: "Os dados de dano do seu Raio Arcano aumentam para d12 e o alcance dele aumenta para médio.",
    prerequisite: "Raio Arcano.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "7",
    name: "Especialista em Escola",
    description: "Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2.",
    prerequisite: "Bruxo ou Mago.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "8",
    name: "Caldeirão do Bruxo",
    description: "Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, pode criar poções de até 5º círculo.",
    prerequisite: "Bruxo, treinado em Ofício (alquimista).",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "9",
    name: "Conhecimento Mágico",
    description: "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "Nenhum",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "10",
    name: "Fortalecimento Arcano",
    description: "A CD para resistir a suas magias aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta em +2.",
    prerequisite: "5º nível de arcanista.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "11",
    name: "Herança Superior",
    description: "Você recebe a herança superior de sua linhagem sobrenatural.",
    prerequisite: "Herança Aprimorada, 11º nível de arcanista.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "12",
    name: "Poder Mágico",
    description: "Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante.",
    prerequisite: "Nenhnum",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "13",
    name: "Raio Elemental",
    description: "Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de ácido, eletricidade, fogo, frio ou trevas, à sua escolha. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo com o tipo de dano (veja a descrição das condições). Ácido: vulnerável por 1 rodada. Eletricidade: ofuscado por 1 rodada. Fogo: fica em chamas. Frio: lento por 1 rodada. Trevas: não pode curar PV por 1 rodada.",
    prerequisite: "Raio Arcano.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "14",
    name: "Contramágica Aprimorada",
    description: "Uma vez por rodada, você pode fazer uma contramágica como uma reação.",
    prerequisite: "Dissipar Magia.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "15",
    name: "Envolto em Mistério",
    description: "Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.",
    prerequisite: "Nenhum",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "16",
    name: "Herança Aprimorada",
    description: "Você recebe a herança aprimorada de sua linhagem sobrenatural.",
    prerequisite: "Feiticeiro, 6º nível de arcanista.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "17",
    name: "Magia Pungente",
    description: "Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.",
    prerequisite: "Nenhum.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "18",
    name: "Raio Arcano",
    description: "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias.",
    prerequisite: "Nenhum.",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "19",
    name: "Tinta do Mago",
    description: "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade.",
    prerequisite: "Mago, treinado em Ofício (escriba).",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "20",
    name: "Escriba Arcano",
    description: "Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500.",
    prerequisite: "Mago, treinado em Ofício (escriba).",
    origin: "Tormenta20 - jogo do ano"
  },
  {
    id: "21",
    name: "Familiar",
    description: "Você possui um animal de estimação mágico. Veja ao final da página sobre.",
    prerequisite: "Nenhum.",
    origin: "Tormenta20 - jogo do ano"
  },


];