import { Power } from "@/types/power";

export const powersClerigo: Power[] = [
  {
    id: "1",
    name: "Abençoar Arma",
    description: "Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma ação de movimento e 3 PM para infundi-la com poder divino. Até o final da cena, a arma é considerada mágica e emite luz dourada ou púrpura (como uma tocha). Além disso, o dano da arma aumenta em um passo e você pode usar sua Sabedoria em testes de ataque e rolagens de dano com ela, em vez do atributo padrão (não cumulativo com efeitos que somam este atributo).",
    prerequisite: "",
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
    name: "Autoridade Eclesiástica",
    description: "Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de sua divindade.",
    prerequisite: "5º nível de clérigo, devoto de um deus maior.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Canalizar Energia Positiva/Negativa",
    description: "Você pode gastar uma ação padrão e PM para liberar uma onda de luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa) que afeta criaturas à sua escolha em alcance curto. Para cada PM que gastar, luz cura 1d6 PV em criaturas vivas e causa 1d6 pontos de dano de luz em mortos-vivos (Vontade CD Sab reduz o dano à metade). Trevas tem o efeito inverso — causa dano de trevas a criaturas vivas e cura mortos-vivos.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Canalizar Amplo",
    description: "Quando você usa a habilidade Canalizar Energia, pode gastar +2 PM para aumentar o alcance dela para médio.",
    prerequisite: "Canalizar Energia Positiva ou Negativa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Comunhão Vital",
    description: "Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Conhecimento Mágico",
    description: "Você aprende duas magias divinas de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Expulsar/Comandar Mortos-Vivos",
    description: "Você pode gastar uma ação padrão e 3 PM para expulsar (se sua divindade canaliza energia positiva) ou comandar (se canaliza energia negativa) todos os mortos-vivos em alcance curto. Mortos-vivos expulsos ficam apavorados por 1d6 rodadas. Mortos-vivos comandados não inteligentes (Int –4 ou menor) ficam sob suas ordens por um dia (até um limite de ND somados igual a seu nível +3; dar uma ordem a todos eles é uma ação de movimento) e mortos-vivos comandados inteligentes ficam fascinados por uma rodada. Mortos-vivos têm direito a um teste de Vontade (CD Sab) para evitar qualquer destes efeitos.",
    prerequisite: " Canalizar Energia Positiva ou Negativa",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Liturgia Mágica",
    description: "Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, a CD para resistir à sua próxima habilidade de clérigo (desde que usada até o final de seu próximo turno) aumenta em +2.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Magia Sagrada/Profana",
    description: "Quando lança uma magia divina que causa dano, você pode gastar +1 PM. Se fizer isso, muda o tipo de dano da magia para luz (se sua divindade canaliza energia positiva) ou trevas (se canaliza energia negativa).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Mestre Celebrante",
    description: "O número de pessoas que você afeta com uma missa aumenta em dez vezes e os benefícios que elas recebem dobram.",
    prerequisite: "qualquer poder de Missa, 12º nível de clérigo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Missa: Bênção da Vida",
    description: "Os participantes recebem pontos de vida temporários em um valor igual ao seu nível + sua Sabedoria.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Missa: Chamado às Armas",
    description: "Os participantes recebem +1 em testes de ataque e rolagens de dano.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Missa: Elevação do Espírito",
    description: "Os participantes recebem pontos de mana temporários em um valor igual à sua Sabedoria.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Missa: Escudo Divino",
    description: "Os participantes recebem +1 na Defesa e testes de resistência.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Missa: Superar as Limitações",
    description: "Cada participante recebe +1d6 num único teste à sua escolha e pode usá-lo mesmo após rolar o dado.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Prece de Combate",
    description: "Quando lança uma magia divina com tempo de conjuração de uma ação padrão em si mesmo, você pode gastar +2 PM para lançá-la como uma ação de movimento.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Símbolo Sagrado Energizado",
    description: "Você pode gastar uma ação de movimento e 1 PM para fazer uma prece e energizar seu símbolo sagrado até o fim da cena. Um símbolo sagrado energizado emite uma luz dourada ou prateada (se sua divindade canaliza energia positiva) ou púrpura ou avermelhada (se canaliza energia negativa) que ilumina como uma tocha. Enquanto você estiver empunhando um símbolo sagrado energizado, o custo em PM para lançar suas magias divinas diminui em 1.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
];