import { Condition } from "@/types/condition";

export const conditions: Condition[] = [
  // Tormenta20 - Jogo do Ano
  { id: "abalado",
    name: "Abalado",
    description: "O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Medo"
  },
  { id: "agarrado",
    name: "Agarrado",
    description: "O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "alquebrado",
    name: "Alquebrado",
    description: "O custo em pontos de mana das habilidades do personagem aumenta em +1.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "apavorado",
    name: "Apavorado",
    description: "O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Medo"
  },
  { id: "atordoado",
    name: "Atordoado",
    description: "O personagem fica desprevenido e não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "caido",
    name: "Caído",
    description: "O personagem sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições). Além disso, sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "cego",
    name: "Cego",
    description: "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  { id: "confuso",
    name: "Confuso",
    description: "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos:\n1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8;\n2 ou 3) Não pode fazer ações, e fica balbuciando incoerentemente;\n4 ou 5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano);\n6) A condição termina e pode agir normalmente.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "debilitado",
    name: "Debilitado",
    description: "O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "desprevenido",
    name: "Desprevenido",
    description: "O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "doente",
    name: "Doente",
    description: "Sob efeito de uma doença.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  { id: "em-chamas",
    name: "Em Chamas",
    description: "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas. ( Adição da Dragão Brasil: Se ficar arrefecido ou molhado, em vez disso perde as duas condições. Se ficar congelado, em vez disso perde as duas condições e fica arrefecido. )",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "enfeiticado",
    name: "Enfeitiçado",
    description: "O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "enjoado",
    name: "Enjoado",
    description: "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro).",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  { id: "enredado",
    name: "Enredado",
    description: "O personagem fica lento, vulnerável e sofre –2 em testes de ataque.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "envenenado",
    name: "Envenenado",
    description: "O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Veneno"
  },
  { id: "esmorecido",
    name: "Esmorecido",
    description: "O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "exausto",
    name: "Exausto",
    description: "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Cansaço"
  },
  { id: "fascinado",
    name: "Fascinado",
    description: "Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "fatigado",
    name: "Fatigado",
    description: "O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Cansaço"
  },
  { id: "fraco",
    name: "Fraco",
    description: "O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "frustrado",
    name: "Frustrado",
    description: "O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "imovel",
    name: "Imóvel",
    description: "Todas as formas de deslocamento do personagem são reduzidas a 0m.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "inconsciente",
    name: "Inconsciente",
    description: "O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "indefeso",
    name: "Indefeso",
    description: "O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "lento",
    name: "Lento",
    description: "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "ofuscado",
    name: "Ofuscado",
    description: "O personagem sofre –2 em testes de ataque e de Percepção.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  { id: "paralisado",
    name: "Paralisado",
    description: "Fica imóvel e indefeso e só pode realizar ações puramente mentais.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "pasmo",
    name: "Pasmo",
    description: "Não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Mental"
  },
  { id: "petrificado",
    name: "Petrificado",
    description: "O personagem fica inconsciente e recebe redução de dano 8.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metamorfose"
  },
  { id: "sangrando",
    name: "Sangrando",
    description: "No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Metabolismo"
  },
  { id: "sobrecarregado",
    name: "Sobrecarregado",
    description: "O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Movimento"
  },
  { id: "surdo",
    name: "Surdo",
    description: "O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.",
    origin: "Tormenta20 - Jogo do Ano",
    efeito: "Sentidos"
  },
  { id: "surpreendido",
    name: "Surpreendido",
    description: "O personagem fica desprevenido e não pode fazer ações.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "vulneravel",
    name: "Vulnerável",
    description: "O personagem sofre –2 na Defesa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  // Dragão Brasil
  { id: "abencoado",
    name: "Abençoado",
    description: "O personagem foi momentaneamente tocado por uma força divina, se torna imune a efeitos de metabolismo, metamorfose, trevas e veneno. Se ficar decaído, em vez disso perde as duas condições.",
    origin: "Dragão Brasil"
  },
  { id: "absorvendo",
    name: "Absorvendo",
    description: "O personagem recupera PV em uma quantidade igual à metade de todo dano que causa (limitado pelo nível).",
    origin: "Dragão Brasil"
  },
  { id: "alentado",
    name: "Alentado",
    description: "O personagem recebe +5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
    origin: "Dragão Brasil",
    efeito: "Mental"
  },
  { id: "arrefecido",
    name: "Arrefecido",
    description: "O personagem tem a temperatura corporal reduzida, tem seu movimento reduzido em –1,5m, não pode usar habilidades que exijam liberdade de movimentos e tem vulnerabilidade a frio, mas também recebe resistência a fogo +2. Se ficar molhado ou for arrefecido uma segunda vez, fica congelado. Se ficar em chamas enquanto estiver arrefecido, em vez disso perde as duas condições.",
    origin: "Dragão Brasil",
    efeito: "Metabolismo"
  },
  { id: "audacioso",
    name: "Audacioso",
    description: "O personagem recebe +2 em testes de perícia. Se ficar audacioso novamente, em vez disso fica intrépido.",
    origin: "Dragão Brasil",
    efeito: "Mental"
  },
  { id: "congelado",
    name: "Congelado",
    description: "O personagem é coberto por uma camada grossa de gelo que o deixa paralisado e concede vulnerabilidade a frio, mas também concede resistência a fogo +2 e imunidade a arrefecido, cansaço, eletrizado, enfeitiçado, medo, sangrando e veneno. Se ficar em chamas enquanto estiver congelado, perde as duas condições e fica arrefecido.",
    origin: "Dragão Brasil"
  },
  { id: "decaido",
    name: "Decaído",
    description: "O personagem sofre dano por efeitos mágicos de cura de luz, mas dano de trevas recupera seus PV. Em mortos-vivos, tem o efeito inverso (dano de trevas causa dano normal e efeitos mágicos de cura de luz recuperam PV). Se ficar abençoado, em vez disso perde as duas condições.",
    origin: "Dragão Brasil"
  },
  { id: "disposto",
    name: "Disposto",
    description: "O personagem recebe +2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar disposto novamente, em vez disso fica alentado.",
    origin: "Dragão Brasil",
    efeito: "Mental"
  },
  { id: "eletrificado",
    name: "Eletrificado",
    description: "O personagem tem correntes elétricas poderosas correndo pelo seu corpo. No início de seus turnos, sofre 1d6 pontos de dano de eletricidade. O personagem pode gastar uma ação padrão para descarregar a eletricidade ao tocar em metais ou no chão de terra. Se ficar molhado ou for eletrificado uma segunda vez, fica eletrizado.",
    origin: "Dragão Brasil"
  },
  { id: "eletrizado",
    name: "Eletrizado",
    description: "O personagem fica paralisado por uma corrente elétrica, o que concede vulnerabilidade a eletricidade, mas também resistência a ácido +2 e imunidade a cansaço, congelado, eletrificado, enfeitiçado, medo, sangrando e veneno. Esta condição permanece até o fim da cena ou até que o personagem tenha contato com um objeto livre de metal ou algum tipo de óleo (como pela magia Área Escorregadia), o que acontecer primeiro.",
    origin: "Dragão Brasil"
  },
  { id: "fedido",
    name: "Fedido",
    description: "O personagem sofre –5 em testes de Carisma e de perícias baseadas nesse atributo, pois está exalando um cheiro forte e é quase impossível ficar perto dele.",
    origin: "Dragão Brasil"
  },
  { id: "fortalecido",
    name: "Fortalecido",
    description: "O personagem recebe +2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fortalecido novamente, em vez disso fica vigoroso.",
    origin: "Dragão Brasil"
  },
  { id: "intrepido",
    name: "Intrépido",
    description: "O personagem sofre +5 em testes de perícias e recebe imunidade a medo.",
    origin: "Dragão Brasil"
  },
  { id: "leve",
    name: "Leve",
    description: "O personagem não aplica penalidade de armadura em testes de Acrobacia e Furtividade e seu deslocamento é aumentado em +3m.",
    origin: "Dragão Brasil",
    efeito: "Movimento"
  },
  { id: "molhado",
    name: "Molhado",
    description: "O personagem se torna vulnerável a eletricidade e frio, mas recebe resistência a fogo. Qualquer criatura fica molhada se estiver imersa ou em contato com uma superfície de água. Se ficar arrefecido, fica congelado. Se ficar eletrificado, fica eletrizado. Se ficar em chamas enquanto estiver molhado, em vez disso perde as duas condições.",
    origin: "Dragão Brasil"
  },
  { id: "poderoso",
    name: "Poderoso",
    description: "O custo em pontos de mana das habilidades do personagem diminui em –1.",
    origin: "Dragão Brasil",
    efeito: "Mental"
  },
  { id: "prevenido",
    name: "Prevenido",
    description: "O personagem recebe +2 na Defesa durante a primeira rodada de combate.",
    origin: "Dragão Brasil"
  },
  { id: "relaxado",
    name: "Relaxado",
    description: "O personagem fica fortalecido, prevenido e veloz durante uma rodada.",
    origin: "Dragão Brasil"
  },
  { id: "restaurando",
    name: "Restaurando",
    description: "O personagem recebe cura acelerada igual aos PV que recebe por nível da sua classe com mais níveis.",
    origin: "Dragão Brasil"
  },
  { id: "veloz",
    name: "Veloz",
    description: "Todas as formas de deslocamento do personagem são duplicadas (arredonde para baixo para o primeiro incremento de 1,5m) e ele recebe imunidade a efeitos negativos de movimento.",
    origin: "Dragão Brasil",
    efeito: "Movimento"
  },
  { id: "vigoroso",
    name: "Vigoroso",
    description: "O personagem recebe +5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos.",
    origin: "Dragão Brasil"
  }
];