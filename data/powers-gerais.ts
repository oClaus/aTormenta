import { Power } from "@/types/power";

export const powersGerais: Power[] = [
  {
    id: "1",
    name: "Acuidade com Arma",
    description: "Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.",
    prerequisite: "Des 1",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "2",
    name: "Arma Secundária Grande",
    description: "Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.",
    prerequisite: "Estilo de Duas Armas.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Arremesso Potente",
    description: "Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.",
    prerequisite: "For 1, Estilo de Arremesso",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Arremesso Múltiplo",
    description: "Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.",
    prerequisite: " Des 1, Estilo de Arremesso.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Ataque com Escudo",
    description: "Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.",
    prerequisite: "Estilo de Arma e Escudo",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Ataque Pesado",
    description: "Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).",
    prerequisite: "Estilo de Duas Mãos.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Ataque Poderoso",
    description: "Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.",
    prerequisite: "For 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Ataque Preciso",
    description: "Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.",
    prerequisite: "Estilo de Uma Arma.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Bloqueio com Escudo",
    description: "Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.",
    prerequisite: "Estilo de Arma e Escudo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Carga de Cavalaria",
    description: "Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.",
    prerequisite: "Ginete",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Combate Defensivo",
    description: "Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa.",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Derrubar Aprimorado",
    description: "Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.",
    prerequisite: "Combate Defensivo",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Desarmar Aprimorado",
    description: "Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada).",
    prerequisite: "Combate Defensivo",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Disparo Preciso",
    description: "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.",
    prerequisite: "Estilo de Disparo ou Estilo de Arremesso.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Disparo Rápido",
    description: "Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    prerequisite: "Des 1, Estilo de Disparo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Empunhadura Poderosa",
    description: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, usar uma arma de uma categoria de tamanho maior impõe –5 nos testes de ataque).",
    prerequisite: "For 3.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Encouraçado",
    description: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.",
    prerequisite: "proficiência com armaduras pesadas.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Esquiva",
    description: "Você recebe +2 na Defesa e Reflexos.",
    prerequisite: "Des 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Estilo de Arma e Escudo",
    description: "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.",
    prerequisite: "treinado em Luta, proficiência com escudos.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Estilo de Arma Longa",
    description: "Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.",
    prerequisite: "For 1, treinado em Luta.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Estilo de Arremesso",
    description: "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.",
    prerequisite: "treinado em Pontaria.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Estilo de Disparo",
    description: "Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.",
    prerequisite: "treinado em Pontaria.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "23",
    name: "Estilo de Duas Armas",
    description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.",
    prerequisite: "Des 2, treinado em Luta.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "24",
    name: "Estilo de Duas Mãos",
    description: "Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.",
    prerequisite: "For 2, Treinado em Luta.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "25",
    name: "Estilo de Uma Arma",
    description: "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).",
    prerequisite: "treinado em Luta.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "26",
    name: "Estilo Desarmado",
    description: "Seus ataques desarmados causam $1d6$ pontos de dano e podem causar dano letal ou não letal (sem penalidades).",
    prerequisite: "treinado em Luta.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "27",
    name: "Fanático",
    description: "Seu deslocamento não é reduzido por usar armaduras pesadas.",
    prerequisite: "12º nível de personagem, Encouraçado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "28",
    name: "Finta Aprimorada",
    description: "Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.",
    prerequisite: "treinado em Enganação.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "29",
    name: "Foco em Arma",
    description: "Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
    prerequisite: "proficiência com a arma.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "30",
    name: "Ginete",
    description: "Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.",
    prerequisite: "treinado em Cavalgar.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "31",
    name: "Inexpugnável",
    description: "Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.",
    prerequisite: "Encouraçado, 6º nível de personagem.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "32",
    name: "Mira Apurada",
    description: "Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.",
    prerequisite: "Sab 1, Disparo Preciso.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "33",
    name: "Piqueiro",
    description: "Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra do mesmo tipo.",
    prerequisite: "Estilo de Arma Longa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "34",
    name: "Presença Aterradora",
    description: "Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas à sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.",
    prerequisite: "treinado em Intimidação.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "35",
    name: "Proficiência",
    description: "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "36",
    name: "Quebrar Aprimorado",
    description: "Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.",
    prerequisite: "Ataque Poderoso.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "37",
    name: "Reflexos de Combate",
    description: "Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.",
    prerequisite: "Des 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "38",
    name: "Saque Rápido",
    description: "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
    prerequisite: "treinado em Iniciativa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "39",
    name: "Trespassar",
    description: "Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.",
    prerequisite: "Ataque Poderoso.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "40",
    name: "Vitalidade",
    description: "Você recebe +1 PV por nível de personagem e +2 em Fortitude.",
    prerequisite: "Con 1.",
    origin: "Tormenta20 - Jogo do Ano"
  }
  

];