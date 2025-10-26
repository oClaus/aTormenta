import { GameClass } from "@/types/class";

export const classes: GameClass[] = [
  {
  id: "1",
  name: "Arcanista",
  origin: "tormenta20 - jogo do ano",
  image: "/classes/arcanista.png",
  description: "O Arcanista é um mago que estuda a magia \n arcana através de rituais e fórmulas complexas.\nPossui grande poder mágico, mas é frágil em combate corpo a corpo.\nSeu conhecimento das artes arcanas o torna um aliado valioso em qualquer grupo.",
  famousExamples: [
    "Merlim",
    "Elara Lunastral",
    "Theron o Sábio"
  ],
  characteristics: {
    pvBase: "8 + Constituição",
    pvPerLevel: "2 + Constituição",
    pmPerLevel: "6 PM por nível"
  },
  skills: {
    mandatory: {
      skills: [
        "Misticismo (Int)",
        "Vontade (Sab)"
      ],
      description: "Você começa com as seguintes perícias"
    },
    optional: {
      skills: [
        "Conhecimento (Int)",
        "Diplomacia (Car)",
        "Enganação (Car)",
        "Guerra (Int)",
        "Iniciativa (Des)",
        "Intimidação (Car)",
        "Intuição (Sab)",
        "Investigação (Int)",
        "Nobreza (Int)",
        "Ofício (Int)",
        "Percepção (Sab)"
      ],
      count: 2,
      description: "Escolha mais 2 perícias"
    }
  },
  proficiency: "Nenhuma",
  abilities: [
    {
      name: "Magia Arcana",
      description: "Você pode lançar magias arcanas usando seus pontos de mana. Aprende novas magias ao subir de nível."
    },
    {
      name: "Foco Arcano",
      description: "Escolha um tipo de magia (Evocação, Abjuração, etc). Você recebe +1 na CD de resistência para esse tipo."
    },
    {
      name: "Lançamento Rápido",
      description: "Uma vez por combate, você pode lançar uma magia como ação livre em vez de ação padrão."
    }
  ],
  extras: [
    {
      title: "Familiares Arcanos",
      description: "Um familiar é uma criatura mágica. \n Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo..."
    }
  ]
    },
  {
  id: "2",
  name: "Guerreiro",
  origin: "tormenta20 - jogo do ano",
  image: "/classes/guerreiro.png",
  description: "O Guerreiro é um combatente experiente, treinado em armas e armaduras.\nPossui grande resistência e força, sendo excelente em combate corpo a corpo.\nÉ o protetor do grupo, capaz de absorver dano e proteger seus aliados.",
  famousExamples: [
    "Conan, o Bárbaro",
    "Aragorn",
    "Brienne de Tarth"
  ],
  characteristics: {
    pvBase: "12 + Constituição",
    pvPerLevel: "4 + Constituição",
    pmPerLevel: "0 PM por nível"
  },
  skills: {
    mandatory: {
      skills: [
        "Atletismo (For)",
        "Luta (For)"
      ],
      description: "Você começa com as seguintes perícias"
    },
    optional: {
      skills: [
        "Acrobacia (Des)",
        "Cavalaria (Des)",
        "Enganação (Car)",
        "Furtividade (Des)",
        "Guerra (Int)",
        "Iniciativa (Des)",
        "Intimidação (Car)",
        "Intuição (Sab)",
        "Investigação (Int)",
        "Nobreza (Int)",
        "Percepção (Sab)"
      ],
      count: 2,
      description: "Escolha mais 2 perícias"
    }
  },
  proficiency: "Todas as armas e armaduras",
  abilities: [
    {
      name: "Ataque Extra",
      description: "A partir do 5º nível, você pode fazer um ataque adicional por rodada."
    },
    {
      name: "Defesa Inabalável",
      description: "Você pode usar sua reação para reduzir o dano de um ataque em 1d6."
    }
  ]
}
];