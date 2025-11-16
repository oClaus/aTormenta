import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    id: "acrobacia",
    name: "Acrobacia",
    attribute: "Des",
    trainedOnly: false, // Acrobacia pode ser usada sem ser treinada
    armorPenalty: true, // Sofre penalidade de armadura
    description: "Você consegue fazer proezas acrobáticas.",
    functions: [
      {
        title: "Amortecer Queda (CD 15, Apenas Treinado).",
        description: "Quando cai, você pode gastar uma reação e fazer um teste de Acrobacia para reduzir o dano. Se passar, reduz o dano da queda em 1d6, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Se reduzir o dano a zero, você cai de pé.",
      },
      {
        title: "Equilíbrio.",
        description: "Se estiver andando por superfícies precárias, você precisa fazer testes de Acrobacia para não cair. Cada ação de movimento exige um teste. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, cai. A CD é 10 para piso escorregadio, 15 para uma superfície estreita (como o topo de um muro) e 20 para uma superfície muito estreita (como uma corda esticada). Você pode sofrer –5 no teste para avançar seu deslocamento total. Quando está se equilibrando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Acrobacia; se falhar, cai.",
      },
      {
        title: "Escapar.",
        description: "Você pode escapar de amarras. A dificuldade varia: cordas (CD igual ao resultado do teste de Destreza de quem o amarrou +10), redes (CD 20), algemas (CD 30). Este uso gasta uma ação completa.",
      },
      {
        title: "Levantar-se Rapidamente (CD 20, Apenas Treinado).",
        description: "Se estiver caído, você pode fazer um teste de Acrobacia para ficar de pé. Você precisa ter uma ação de movimento disponível. Se passar no teste, se levanta como uma ação livre. Se falhar, gasta sua ação de movimento, mas continua caído.",
      },
      {
        title: "Passar por Espaço Apertado (CD 25, Apenas Treinado).",
        description: "Você pode se espremer por espaços estreitos, suficientes para criaturas uma categoria de tamanho menor. Você gasta uma ação completa e avança metade do deslocamento.",
      },
      {
        title: "Passar por Inimigo.",
        description: "Você pode atravessar um espaço ocupado por um inimigo como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Acrobacia, Iniciativa ou Luta do oponente (o que for melhor). Se você passar, atravessa o espaço; se falhar, não atravessa e sua ação de movimento termina. Um espaço ocupado por um inimigo conta como terreno difícil.",
      },
    ],
  },
  {
    id: "adestramento",
    name: "Adestramento",
    attribute: "Car",
    trainedOnly: true, // Adestramento só pode ser usada se for treinada
    armorPenalty: false, // Não sofre penalidade de armadura
    description: "Você sabe lidar com animais.",
    functions: [
      {
        title: "Acalmar Animal (CD 25).",
        description: "Você acalma um animal nervoso ou agressivo, permitindo controlar um cavalo assustado ou convencer um lobo a não atacá-lo. Este uso gasta uma ação completa.",
      },
      {
        title: "Manejar Animal (CD 15). ",
        description: "Você faz um animal realizar uma tarefa para a qual foi treinado (como “atacar”, “sentar”, “vigiar”...). Isso permite usar Adestramento como Pilotagem para veículos de tração animal. Este uso gasta uma ação de movimento.",
      },
    ],
  },
  {
    id: "atletismo",
    name: "Atletismo",
    attribute: "For",
    trainedOnly: false, 
    armorPenalty: false, 
    description: "Você pode realizar façanhas atléticas.",
    functions: [
      {
        title: "Corrida. ",
        description: "Gaste uma ação completa e faça um teste de Atletismo. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Assim, se somar 20 no teste, avança 20 quadrados de 1,5m. Você recebe um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua. Assim, um elfo (deslocamento 12m) recebe +4 em testes de Atletismo para correr, enquanto um anão (deslocamento 6m) sofre uma penalidade de –4. Você só pode correr em linha reta e não pode correr através de terreno difícil. Você pode correr por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, fica fatigado (cumulativo com novas falhas).",
      },
      {
        title: "Escalar. ",
        description: "Você pode subir superfícies inclinadas ou verticais. Gaste uma ação de movimento e faça um teste de Atletismo. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, você cai. A CD é 10 para superfícies com apoios para os pés e mãos (como o cordame de um navio), 15 para uma árvore, 20 para um muro com reentrâncias (como o de uma ruína) e 25 para um muro liso (como o de um castelo). Você pode sofrer –5 em seu teste para avançar seu deslocamento total. Quando está escalando, você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Atletismo; se falhar, você cai. Se um personagem adjacente a você estiver escalando e cair, você pode tentar pegá-lo. Faça um teste de Atletismo contra a CD da superfície +10. Se passar, segura o personagem. Se falhar por 5 ou mais, você também cai!",
      },
      {
        title: "Natação. ",
        description: "Se iniciar seu turno na água, você precisa gastar uma ação de movimento e fazer um teste de Atletismo. A CD é 10 para água calma, 15 para agitada e 20 ou mais para tempestuosa. Se passar, você pode avançar metade de seu deslocamento. Se falhar, consegue boiar, mas não avançar. Se falhar por 5 ou mais, você afunda. Se quiser avançar mais, pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo. Se você estiver submerso (seja por ter falhado no teste de Atletismo, seja por ter mergulhado de propósito), deve prender a respiração. Você pode prender a respiração por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, perde 3d6 pontos de vida por rodada até ser tirado da água ou morrer. Você sofre penalidade de armadura em testes de Atletismo para nadar.",
      },
      {
        title: "Saltar. ",
        description: "Você pode pular sobre buracos ou obstáculos ou alcançar algo elevado. Para um salto longo, a CD é 5 por quadrado de 1,5m (CD 10 para 3m, 15 para 4,5m, 20 para 6m e assim por diante). Para um salto em altura, a CD é 15 por quadrado de 1,5m (30 para 3m, 45 para 4,5m e assim por diante). Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10). Saltar é parte de seu movimento e não exige uma ação.",
      },
    ],
  },
  {
    id: "atuacao",
    name: "Atuação",
    attribute: "Car",
    trainedOnly: true, //  só pode ser usada se for treinada
    armorPenalty: false, // Sofre penalidade de armadura
    description: "Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.",
    functions: [
      {
        title: "Apresentação (CD 20). ",
        description: "Você pode se apresentar para ganhar dinheiro. Faça um teste de Atuação. Se passar, você recebe T$ 1d6, mais T$ 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Este uso leva um dia (ou noite...). Os valores recebidos pressupõem que você está se apresentando em um lugar propício, como o palco de uma taverna. De acordo com o mestre, você pode receber metade do valor se estiver em um lugar inadequado (como as ruas de uma cidade ou um acampamento militar) ou o dobro se estiver em um lugar especialmente propício (como um festival ou os salões de um palácio).",
      },
      {
        title: "Impressionar. ",
        description: "Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia. Se estiver tentando impressionar mais de uma pessoa, o mestre faz apenas um teste pela plateia, usando o melhor valor. Este uso leva de alguns minutos (canto ou dança) até algumas horas (apresentação teatral).",
      },
    ],
  },

];