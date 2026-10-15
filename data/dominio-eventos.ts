// data/dominio-eventos.ts
import { DomainEvent } from "@/types/dominio-eventos";

// Tabela 8-13: Eventos. Ordenados pela faixa de d% (do menor pro maior).

export const dominioEventos: DomainEvent[] = [
  {
    id: "ataque-de-dragao",
    name: "Ataque de Dragão",
    diceRange: "01-02",
    description:
      "Um dragão surge e despeja fúria flamejante sobre a terra. Fujam por suas vidas! O domínio perde um nível, uma construção aleatória e 1d6 unidades. O dragão então parte, deixando apenas um rastro de destruição. De acordo com o mestre, pode ser possível enfrentá-lo em uma aventura para impedir os efeitos deste evento. Porém, de acordo com o nível dos personagens, pode ser mais prudente fugir junto com os plebeus...",
  },
  {
    id: "invasores",
    name: "Invasores",
    diceRange: "03-07",
    description:
      'Uma companhia mercenária ou exército inimigo ataca o domínio (veja "Batalhas"). Eles têm Poder igual a 1d12 por nível do domínio (domínios mais ricos atraem mais cobiça) e seu líder tem Guerra igual a 2d6+10.',
  },
  {
    id: "monstro",
    name: "Monstro",
    diceRange: "08-11",
    description:
      "Um monstro, como uma serpe ou mantícora, ataca o domínio. Caçá-lo e matá-lo exige gastar uma ação de domínio e passar em um teste de Sobrevivência. Se você falhar, ou se não fizer nada, a popularidade diminui em uma categoria e o domínio perde uma construção aleatória, quando então o monstro vai embora, de bucho cheio.",
  },
  {
    id: "peste",
    name: "Peste",
    diceRange: "12-15",
    description:
      "Uma doença natural ou mágica assola o domínio. A popularidade baixa em uma categoria e você perde 1d3+1 unidades.",
  },
  {
    id: "fenomeno-natural",
    name: "Fenômeno Natural",
    diceRange: "16-20",
    description:
      "Um evento climático. O regente deve rolar 1d6: 1) desastre, como um tornado ou terremoto. O domínio perde 1 nível. 2-3) problema maior, como uma inundação ou incêndio. O domínio perde uma construção aleatória. 4-6) problema menor, como uma nevasca, desmoronamento, tempestade ou seca. Os ganhos do domínio diminuem em 1d6 LO neste turno.",
  },
  {
    id: "fenomeno-magico",
    name: "Fenômeno Mágico",
    diceRange: "21-22",
    description:
      "Um evento bizarro e sobrenatural. O regente deve rolar 1d6: 1) mortos vagam pela terra! Você não pode fazer ações de domínio neste turno. 2-3) uma comitiva feérica visita e traz o caos (troca bebês por duendes, faz as vacas ficarem inteligentes e atacarem os fazendeiros...). Você sofre –5 nas ações de domínio neste turno. 4-6) um bruxo amaldiçoa a terra. Você sofre –2 nas ações de domínio neste turno (e o leite azeda).",
  },
  {
    id: "questao-diplomatica",
    name: "Questão Diplomática",
    diceRange: "23-26",
    description:
      "Um emissário de outro reino exige algo do domínio. O mestre decide o que — tributo no valor de 2d6 LO, o empréstimo de 1d4 tropas por dois turnos, o uso de uma construção neste turno... Você tem três opções: aceitar a exigência; ignorar a exigência; ou tentar convencer o emissário que a exigência é descabida (exige gastar uma ação de domínio e fazer um teste de Diplomacia; se você passar, pode recusar a demanda sem consequências). Ignorar a exigência (ou falhar no teste de Diplomacia) pode acarretar ações hostis do outro reino — talvez até mesmo um ataque no próximo turno (veja o evento invasores).",
  },
  {
    id: "levante",
    name: "Levante",
    diceRange: "27-30",
    description:
      "A população se enfurece! A razão fica a cargo do mestre: o povo pode estar sendo manipulado por um aristocrata invejoso, enfeitiçado por um bruxo... A popularidade diminui em duas categorias (o que pode causar uma revolta).",
  },
  {
    id: "intriga",
    name: "Intriga",
    diceRange: "31-35",
    description:
      "A corte é envolvida em uma intriga. Um conselheiro está sendo chantageado, documentos importantes foram roubados... Acabar com a intriga exige gastar uma ação de domínio e passar em um teste de Enganação. Se você falhar, ou se não fizer nada, a corte e a popularidade diminuem em uma categoria.",
  },
  {
    id: "questao-de-justica",
    name: "Questão de Justiça",
    diceRange: "36-42",
    description:
      "Uma questão envolvendo a aplicação de leis precisa ser resolvida. Pode ser desde um fazendeiro colocando sua cerca nas terras do vizinho até o assassinato de um plebeu pelas mãos de um nobre que acredita poder sair incólume por ter sangue azul. Julgar a questão exige gastar uma ação de domínio e passar em um teste de Intuição ou Investigação. Se você falhar, ou se não fizer nada, a popularidade diminui em duas categorias.",
  },
  {
    id: "bandidos",
    name: "Bandidos",
    diceRange: "43-52",
    description:
      'Bandoleiros ou piratas roubam o povo. No final de cada turno, a popularidade diminui em uma categoria até os bandidos serem derrotados. Isso exige gastar uma ação de domínio para atacá-los com tropas (veja "Batalhas") e vencer o teste oposto. Os bandidos têm Poder igual a 2d4 + o nível do domínio e seu líder tem Guerra igual a 2d4+5.',
  },
  {
    id: "corrupcao",
    name: "Corrupção",
    diceRange: "53-56",
    description:
      "Sua corte é tomada por desonestidade e falcatruas. Os ganhos do domínio diminuem em 1d6 LO por turno até a corrupção ser desbaratada. Isso exige gastar uma ação de domínio e passar em um teste de Intuição ou Investigação. Se passar, a corte diminui em uma categoria (devido às demissões — ou execuções — necessárias), mas a corrupção acaba.",
  },
  {
    id: "questao-comercial",
    name: "Questão Comercial",
    diceRange: "57-61",
    description:
      "Um problema relacionado a comércio e economia, como uma disputa entre guildas, o sumiço de uma caravana ou o surgimento de contrabandistas. Resolver isso exige gastar uma ação de domínio e passar em um teste de Diplomacia. Se você falhar (ou se não fizer nada), os ganhos do domínio diminuem em 2d6 LO neste turno.",
  },
  {
    id: "saqueadores",
    name: "Saqueadores",
    diceRange: "62-70",
    description:
      "Como invasores, mas os saqueadores têm Poder igual a 1d8 por nível do domínio e seu líder tem Guerra igual a 2d4+10.",
  },
  {
    id: "nenhum-evento",
    name: "Nenhum Evento",
    diceRange: "71-90",
    description: "Nada de especial acontece neste turno.",
  },
  {
    id: "regalia",
    name: "Regalia",
    diceRange: "91-100",
    description:
      "Um evento favorável. O regente deve rolar 1d6: 1-2) clima bom melhora a colheita, o suserano presenteia o regente... (+1d6 LO neste turno); 3-4) um conselheiro tem uma boa ideia, os plebeus se unem para ajudar o domínio (+2 nos testes de ação de domínio neste turno); 5-6) um festival ocorre, um arco-íris mágico surge e deixa todos felizes (popularidade aumenta em uma categoria).",
  },
];
