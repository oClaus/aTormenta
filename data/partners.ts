import { Partner } from "@/types/partner";

export const partners: Partner[] = [
  {
    id: "atirador",
    name: "Atirador",
    description: "Um arqueiro, besteiro ou outro combatente à distância.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Uma vez por rodada, você recebe +1d6 em uma rolagem de dano à distância.",
      veterano: "Muda para +1d10. Mestre: muda para +2d8.",
      mestre: "Muda para +2d8.",
    },
  },
  {
    id: "combatente",
    name: "Combatente",
    description: "Um bucaneiro, guerreiro, paladino ou animal de caça.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "+2 em testes de ataque.",
      veterano: "Muda para +3 em testes de ataque. Mestre: muda para +4 em testes de ataque e, uma vez por rodada, você pode gastar 5 PM para fazer um ataque extra.",
      mestre: "Muda para +4 em testes de ataque e, uma vez por rodada, você pode gastar 5 PM para fazer um ataque extra.",
    },
  },
  {
    id: "destruidor",
    name: "Destruidor",
    description: "Um arcanista ou inventor.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para causar 2d6 pontos de dano de ácido, eletricidade, fogo ou frio (de acordo com o parceiro) em um alvo em alcance curto.",
      veterano: "Como acima, mas você também pode gastar 2 PM para causar 4d6 pontos de dano.",
      mestre: "Como acima, mas você também pode gastar 4 PM para causar 6d6 pontos de dano em uma área de 6m de raio em alcance médio.",
    },
  },
  {
    id: "fortao",
    name: "Fortão",
    description: "Um bárbaro, lutador ou outro tipo que bate primeiro e pensa depois.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.",
      veterano: "Muda para +1d12.",
      mestre: "Muda para +3d6.",
    },
  },
  {
    id: "guardiao",
    name: "Guardião",
    description: "Um cavaleiro, cão de guarda ou outro NPC cuja função primária é proteger.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Você recebe +2 na Defesa.",
      veterano: "Muda para +3.",
      mestre: "Muda para +4 na Defesa e +2 em testes de resistência.",
    },
  },
  {
    id: "magivocador",
    name: "Magivocador",
    description: "Um conjurador especializado em magias ofensivas.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "O dano de suas magias aumenta em +1 dado do mesmo tipo.",
      veterano: "Como acima, e a CD para resistir a suas magias aumenta em +1.",
      mestre: "Como acima, mas dobra os bônus (para um total de +2 dados de dano e +2 na CD).",
    },
  },
  {
    id: "medico",
    name: "Médico",
    description: "Um clérigo, druida, herbalista ou outro NPC com capacidades curativas.",
    origin: "Tormenta20 - Jogo do Ano",
    benefits: {
      iniciante: "Uma vez por rodada você pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.",
      veterano: "Como acima, mas você pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial (como abalado ou fatigado).",
      mestre: "Como acima, mas você também pode gastar 5 PM para curar 6d8+6 PV.",
    },
  },
];