import { Power } from "@/types/power";

export const powersCacador: Power[] = [
  {
    id: "1",
    name: "Ambidestria",
    description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    prerequisite: "Des 2",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Armadilha: Arataca",
    description: "A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Armadilha: Espinhos",
    description: "A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Armadilha: Laço",
    description: "A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Armadilha: Rede",
    description: "Todas as criaturas na área ficam enredadas e não podem sair da área. Uma vítima pode se libertar com uma ação padrão e um teste de Força ou Acrobacia (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil. Nesta armadilha você escolhe quantas criaturas precisam estar na área para ativá-la.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Armadilheiro",
    description: "Você soma sua Sabedoria no dano e na CD de suas armadilhas (cumulativo).",
    prerequisite: "Um poder de armadilha, 5º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Arqueiro",
    description: "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Sab 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Bote",
    description: "Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária.",
    prerequisite: "Ambidestria, 6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Camuflagem",
    description: "Você pode gastar 2 PM para se esconder mesmo sem camuflagem ou cobertura disponível.",
    prerequisite: "6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Chuva de Lâminas",
    description: "Uma vez por rodada, quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária.",
    prerequisite: "Des 4, Ambidestria, 12º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Companheiro Animal",
    description: "Você recebe um companheiro animal.",
    prerequisite: "Car 1, treinado em Adestramento.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Elo com a Natureza",
    description: "Você soma sua Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria).",
    prerequisite: "Sab 1, 3º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Emboscar",
    description: "Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.",
    prerequisite: "treinado em Furtividade.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Empatia Selvagem",
    description: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Escaramuça",
    description: "Quando se move 6m ou mais, você recebe +2 na Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada.",
    prerequisite: "Des 2, 6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Escaramuça Superior",
    description: "Quando usa Escaramuça, seus bônus aumentam para +5 na Defesa e Reflexos e $+1d12$ em rolagens de dano.",
    prerequisite: "Escaramuça, 12º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Espreitar",
    description: "Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Ervas Curativas",
    description: "Você pode gastar uma ação completa e uma quantidade de PM à sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Ímpeto",
    description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Inimigo de (Criatura)",
    description: "Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Olho do Falcão",
    description: "Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "23",
    name: "Ponto Fraco",
    description: "Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  
];