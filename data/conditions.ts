import { Condition } from "@/types/condition";

export const conditions: Condition[] = [
  {
    id: "abalado",
    name: "Abalado",
    description: "O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Medo"
  },
  {
    id: "agarrado",
    name: "Agarrado",
    description: "O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "alquebrado",
    name: "Alquebrado",
    description: "O custo em pontos de mana das habilidades do personagem aumenta em +1.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "apavorado",
    name: "Apavorado",
    description: "O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Medo"
  },
  {
    id: "atordoado",
    name: "Atordoado",
    description: "O personagem fica desprevenido e não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "caido",
    name: "Caído",
    description: "O personagem sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições). Além disso, sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "cego",
    name: "Cego",
    description: "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  {
    id: "confuso",
    name: "Confuso",
    description: "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos:\n1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8;\n2 ou 3) Não pode fazer ações, e fica balbuciando incoerentemente;\n4 ou 5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano);\n6) A condição termina e pode agir normalmente.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "debilitado",
    name: "Debilitado",
    description: "O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "desprevenido",
    name: "Desprevenido",
    description: "O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "doente",
    name: "Doente",
    description: "Sob efeito de uma doença.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  {
    id: "em-chamas",
    name: "Em Chamas",
    description: "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "enfeiticado",
    name: "Enfeitiçado",
    description: "O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "enjoado",
    name: "Enjoado",
    description: "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro).",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  {
    id: "enredado",
    name: "Enredado",
    description: "O personagem fica lento, vulnerável e sofre –2 em testes de ataque.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "envenenado",
    name: "Envenenado",
    description: "O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Veneno"
  },
  {
    id: "esmorecido",
    name: "Esmorecido",
    description: "O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "exausto",
    name: "Exausto",
    description: "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Cansaço"
  },
  {
    id: "fascinado",
    name: "Fascinado",
    description: "Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "fatigado",
    name: "Fatigado",
    description: "O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Cansaço"
  },
  {
    id: "fraco",
    name: "Fraco",
    description: "O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "frustrado",
    name: "Frustrado",
    description: "O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "imovel",
    name: "Imóvel",
    description: "Todas as formas de deslocamento do personagem são reduzidas a 0m.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "inconsciente",
    name: "Inconsciente",
    description: "O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "indefeso",
    name: "Indefeso",
    description: "O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "lento",
    name: "Lento",
    description: "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "ofuscado",
    name: "Ofuscado",
    description: "O personagem sofre –2 em testes de ataque e de Percepção.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  {
    id: "paralisado",
    name: "Paralisado",
    description: "Fica imóvel e indefeso e só pode realizar ações puramente mentais.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "pasmo",
    name: "Pasmo",
    description: "Não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  {
    id: "petrificado",
    name: "Petrificado",
    description: "O personagem fica inconsciente e recebe redução de dano 8.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metamorfose"
  },
  {
    id: "sangrando",
    name: "Sangrando",
    description: "No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  {
    id: "sobrecarregado",
    name: "Sobrecarregado",
    description: "O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  {
    id: "surdo",
    name: "Surdo",
    description: "O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  {
    id: "surpreendido",
    name: "Surpreendido",
    description: "O personagem fica desprevenido e não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "vulneravel",
    name: "Vulnerável",
    description: "O personagem sofre –2 na Defesa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
];