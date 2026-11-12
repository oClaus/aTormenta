// data/chefes-finais.ts
import { PowerSource, Emanation, ModularPart } from "@/types/chefe-final";

// --- Mestre da Fonte: Fontes de Poder ---

export const fontesDePoder: PowerSource[] = [
  {
    id: "engenhoca-alimentadora",
    name: "Engenhoca Alimentadora",
    text: "Um aparato mecânico que não pode ser movido, mas que ainda pode ser danificado ou sabotado. A engenhoca é um objeto com Defesa e valores de resistência iguais aos do chefe –10, 25/100/250/400 PV, RD 0/5/10/20, imunidade a dano psíquico e veneno, e é desabilitada quando seus PV são reduzidos a zero. É possível gastar uma ação completa para fazer um teste de Ladinagem ou Ofício (engenhoqueiro) para sabotar a engenhoca. Um sucesso faz com que ela perca uma quantidade de pontos de vida igual ao resultado do teste.",
  },
  {
    id: "fluxo-divino",
    name: "Fluxo Divino",
    text: "Uma concentração de poder dos deuses. Desabilitá-la requer interromper o fluxo desse poder, seja negociando com as divindades responsáveis ou desfazendo qualquer ritual usado para criá-la. Para isso, o grupo deve acumular 3 sucessos em testes de Religião ou Vontade, cada um feito como uma ação completa. Devotos da divindade em questão recebem +5 ou –5 no teste se, a critério do mestre, desabilitar o fluxo divino beneficiar ou contrariar a divindade. Além disso, um personagem com o poder Canalizar Energia Positiva/Negativa pode usá-lo, gastando 1/2/4/5 PM, para obter um sucesso automático em um dos testes (apenas uma vez por cena).",
  },
  {
    id: "furia-dos-ermos",
    name: "Fúria dos Ermos",
    text: "O poder da manifestação de energia vem de inúmeras criaturas do mundo natural — tantas, que seria impossível eliminar todas em pouco tempo. Entretanto, personagens acostumados com os caminhos da natureza podem convencê-las a abandonar o chefe, desabilitando seu poder. Para isso, o grupo precisa acumular 3 sucessos em testes de Adestramento ou Sobrevivência (um personagem com Empatia Selvagem recebe +5 nesse teste), cada um feito como uma ação completa.",
  },
  {
    id: "labirinto-da-mente",
    name: "Labirinto da Mente",
    text: "O efeito gerado pelo chefe é de natureza psíquica; ele pode ocorrer dentro da mente de cada criatura em sua área ou se manifestar sob a forma de ondas de energia mental. Em ambos os casos, para desabilitá-lo, o grupo precisa acumular 3 sucessos em testes de Diplomacia ou Intuição, cada um feito como uma ação completa. Alternativamente, um personagem pode usar uma habilidade que cause uma condição mental ou de medo (o labirinto da mente falha automaticamente em qualquer teste contra a habilidade); cada condição diferente causada conta como um sucesso.",
  },
  {
    id: "ruptura-planar",
    name: "Ruptura Planar",
    text: "A fonte de poder do chefe está em outro plano e é acessada por meio de uma ruptura na realidade. Desabilitar essa fonte requer que a ruptura seja fechada. Para isso, o grupo deve acumular 3 sucessos em testes de Conhecimento ou Misticismo, cada um feito como uma ação completa. As seguintes magias podem ser lançadas como parte de cada teste: Tranca Arcana, Dissipar Magia, Selo de Mana, Campo Antimagia e Buraco Negro. Fazer isso fornece um bônus no teste igual ao custo básico em PM da magia (mas ela não gera seus efeitos).",
  },
  {
    id: "vitimas-inconscientes",
    name: "Vítimas Inconscientes",
    text: "A manifestação de energia extrai seu poder de um grupo de criaturas inconscientes. Desabilitar isso requer reanimar as vítimas; o grupo deve acumular 3 sucessos em testes de Cura ou Investigação, cada um feito como uma ação completa. Um personagem pode também usar um efeito que cure 10/30/60/100 PV; isso conta como um sucesso em um teste. Alternativamente, os personagens podem causar 5/15/30/50 pontos de dano; fazer isso também conta como um sucesso, mas significa matar algumas das vítimas (o que pode acarretar outras consequências para os heróis).",
  },
];

// --- Mestre da Fonte: Emanações ---

export const emanacoes: Emanation[] = [
  {
    id: "campo-repulsor",
    name: "Campo Repulsor",
    description:
      "Pulsos de energia se opõem à aproximação de qualquer criatura, golpeando e empurrando aqueles que tentam avançar rumo ao chefe.",
    benefits:
      "O chefe recebe +5 na Defesa e, uma vez por rodada, pode lançar Campo de Força sem gastar PM (limite de PM igual ao seu ND). Ataques à distância contra o chefe sofrem uma penalidade de –5 e causam metade do dano, e personagens que tentam avançar na direção do chefe se deslocam à metade do movimento.",
    stages: [
      "Cada personagem sofre 1d6/2d6/3d6/5d6 pontos de dano e fica lento até o fim da cena ou até desabilitar a fonte de poder (Fortitude reduz à metade e evita a condição).",
      "Os heróis precisam fazer um teste estendido em grupo de Atletismo ou Fortitude (3 sucessos; um personagem lento sofre –2 em seu teste); em uma falha, cada personagem sofre 1d4/2d4/3d4/5d4 pontos de dano e, em uma falha total, os personagens sofrem uma penalidade de –2 em todos os testes. É possível substituir um dos testes por uma magia de teletransporte, como Salto Dimensional ou Teletransporte. Isso concede um sucesso automático, mas só pode ser feito uma vez no estágio.",
      "Cada personagem deve fazer dois testes de perícias diferentes, escolhidas entre Acrobacia, Atletismo, Fortitude ou Reflexos. Para cada falha, o personagem sofre 1d6/2d6/3d6/5d6 pontos de dano e perde um de seus itens empunhados ou vestidos (à sua escolha). Itens perdidos dessa forma são recuperados ao fim da cena.",
    ],
  },
  {
    id: "profanacao-mefitica",
    name: "Profanação Mefítica",
    description: "A área está impregnada de energia profana nociva.",
    benefits:
      "O chefe recebe imunidade a trevas e veneno. Além disso, sempre que uma criatura sofre dano do chefe ou falha em um teste de resistência dele, sofre uma penalidade cumulativa de –1 em todos os testes.",
    stages: [
      "Cada personagem perde 1d4/2d4/3d4/5d4 pontos de vida e fica enjoado (Fortitude reduz a perda à metade e evita a condição).",
      "Os personagens precisam fazer um teste estendido em grupo de Religião ou Vontade (3 sucessos; um personagem enjoado sofre –2 em seu teste); em uma falha, cada personagem reduz seus PV máximos em 1/2/5/10 e, em uma falha total, efeitos de cura aplicados sobre os personagens têm apenas metade do efeito. Um personagem pode lançar as magias Consagrar e Purificação no lugar de um teste (cada magia pode ser lançada dessa forma uma vez e conta como um sucesso). O efeito desse estágio conta como uma maldição.",
      "Cada personagem deve fazer três testes em qualquer combinação de Fortitude e Religião. Se falhar em um ou mais testes, o personagem sofre os seguintes efeitos (conforme a quantidade de falhas): fraco/debilitado/debilitado e vulnerável. O efeito deste estágio conta como uma doença.",
    ],
  },
  {
    id: "tempestade-energetica",
    name: "Tempestade Energética",
    description:
      "Ventos, precipitações e outras manifestações climáticas se abatem sobre a região, castigando aqueles em seu interior.",
    note: "A magia Resistência a Energia é particularmente útil contra esta emanação. A cada estágio, um personagem pode lançar essa magia para fornecer às criaturas afetadas um bônus de +5 nos testes de perícia do estágio.",
    benefits:
      "Inimigos do chefe na área sofrem –5 em testes de Percepção e de concentração para magias e em ataques à distância. Além disso, uma vez por rodada, o chefe pode gastar uma ação livre para disparar um raio de energia em uma criatura em alcance médio. A vítima sofre 3d6/6d6/9d6/12d6 (Reflexos reduz à metade).",
    stages: [
      "Cada personagem deve fazer um teste de resistência (escolha o tipo ao criar a tempestade energética). Se falhar, torna-se vulnerável ao tipo de dano da tempestade. Um personagem imune a este tipo de dano, em vez disso, perde essa imunidade.",
      "Os heróis precisam fazer um teste estendido em grupo de Acrobacia, Atletismo ou da perícia de resistência determinada no estágio 1 (5 sucessos); em uma falha, cada personagem sofre 1d6/2d6/3d6/5d6 pontos de dano.",
      "Cada personagem deve fazer três testes da perícia de resistência determinada no estágio 1. Se falhar em pelo menos dois desses testes, o personagem é recoberto por uma camada do elemento correspondente à emanação. Ele fica enredado e sofre –5 em testes de resistência contra efeitos que causam dano desse tipo.",
    ],
  },
  {
    id: "vortice-de-mana",
    name: "Vórtice de Mana",
    description: "Um campo de energia intangível varre a região, drenando aqueles em seu interior.",
    benefits:
      "O custo em PM das habilidades do chefe é reduzido em –1. Além disso, no início de cada turno do chefe durante o confronto final, cada personagem perde 1d4/1d4/2d4/2d4 PM; para cada resultado 4 nesses dados, o chefe recupera 10 PV.",
    stages: [
      "Os personagens devem fazer um teste estendido em grupo de Misticismo ou Vontade (3 sucessos); a cada falha, cada personagem perde 1/2/3/5 PM.",
      "Cada personagem deve fazer um teste de Misticismo ou Vontade. Se falhar, fica alquebrado.",
      "Cada personagem deve fazer três testes de Misticismo ou Vontade. Se falhar em pelo menos dois desses testes, seu mana se emaranha com seu corpo físico. Sempre que gastar ou perder PM, o personagem perde a mesma quantidade de PV.",
    ],
  },
];

// --- Vilão Modular: Partes ---

export const partesModulares: ModularPart[] = [
  {
    id: "aparato-sensorial",
    name: "Aparato Sensorial",
    description: "Diversos sensores, de antenas tecnológicas a olhos místicos, aprimoram a percepção do chefe.",
    abilities: [
      { name: "Sentidos Amplificados", text: "O chefe recebe +5 em Percepção e Percepção às Cegas (médio)." },
      {
        name: "Antecipar Ameaça",
        action: "Movimento",
        text: "O chefe escolhe uma criatura em alcance médio. Até o próximo turno do aparato sensorial, o chefe recebe +5 na Defesa e em testes de resistência contra o alvo.",
      },
      {
        name: "Travar Mira",
        action: "Padrão",
        text: "O chefe escolhe uma criatura em alcance médio. Até o próximo turno do aparato sensorial, sempre que fizer um teste de ataque contra o alvo, o chefe rola dois dados e usa o melhor resultado e, sempre que o alvo fizer um teste de resistência contra o chefe, rola dois dados e usa o pior resultado.",
      },
    ],
  },
  {
    id: "asas",
    name: "Asas",
    description:
      "O chefe possui um par de asas, móveis ou fixas, que permitem que ele voe. Alternativamente, se o chefe originalmente possuía asas, elas recebem um reforço que aumenta sua velocidade.",
    abilities: [
      {
        name: "Voo",
        text: "O chefe recebe deslocamento de voo igual ao dobro de seu deslocamento normal ou 15m (o que for maior). Se ele já possui deslocamento de voo, ele dobra (ou aumenta para 15m, o que for maior).",
      },
      {
        name: "Bater Asas",
        action: "Padrão",
        text: "O chefe bate suas asas, criando um deslocamento de vento que varre um cone de 9m. Isso funciona como a magia Sopro das Uivantes, exceto que o chefe não gasta PM (limite de PM igual ao seu ND original) e ele empurra qualquer criatura menor que ele próprio. Recarga (padrão).",
      },
      {
        name: "Investida Alada",
        action: "Completa",
        text: "O chefe faz uma investida voando. Ele causa +1d8/+2d6/+2d8/+2d12 pontos de dano e pode continuar se movendo após o ataque, até o limite de seu deslocamento.",
      },
      {
        name: "Movimentar-se",
        action: "Movimento",
        text: "O chefe percorre uma distância igual ao seu deslocamento de voo.",
      },
    ],
  },
  {
    id: "blindagem-reforcada",
    name: "Blindagem Reforçada",
    description: "Placas adicionais de armadura ou um campo de energia protegem o chefe contra ataques.",
    abilities: [
      {
        name: "Couraça Protetora",
        text: "Esta parte recebe +5 na Defesa, em testes de resistência e na RD e tem o dobro dos pontos de vida de uma parte normal, mas não fornece um turno extra ao chefe.",
      },
    ],
  },
  {
    id: "braco-adicional",
    name: "Braço Adicional",
    description:
      "O chefe possui um membro manipulador adicional, como um braço ou tentáculo. Esta parte pode ser escolhida até duas vezes.",
    abilities: [
      {
        name: "Empunhadura Extra",
        text: "O chefe pode empunhar um item de uma mão adicional (se tiver duas partes manipuladoras, pode empunhar dois itens de uma mão ou um item de duas mãos). Se quiser que ele empunhe uma arma, utilize as estatísticas de uma das armas em sua ficha.",
      },
      { name: "Ataque Extra", action: "Padrão", text: "O chefe faz um ataque com a arma empunhada com essa parte." },
      {
        name: "Manipular Item",
        action: "Movimento",
        text: "O chefe manipula um item que poderia ser manuseado com essa parte.",
      },
    ],
  },
  {
    id: "conjunto-propulsor",
    name: "Conjunto Propulsor",
    description:
      "O chefe possui um elemento que impulsiona seu deslocamento, que pode ser um reforço em seus membros locomotores ou uma forma independente de movimento.",
    abilities: [
      {
        name: "Movimento Acelerado",
        text: "O chefe ignora terreno difícil, e todas as suas formas de deslocamento aumentam em +6m.",
      },
      {
        name: "Atropelamento",
        action: "Completa",
        text: "O chefe percorre até o dobro do seu deslocamento. Ele pode passar pelo espaço ocupado de quaisquer inimigos menores que ele, mas não pode passar duas vezes pelo mesmo espaço. Criaturas atropeladas desta forma sofrem 2d6/2d8/3d10/4d12 pontos de dano e ficam caídas (Reflexos reduz à metade e evita a condição).",
      },
      {
        name: "Investida Agressiva",
        action: "Completa",
        text: "O chefe faz uma investida. Se acertar o ataque, ele causa +2d8/+2d10/+2d12/+4d12 pontos de dano.",
      },
      {
        name: "Movimentar-se",
        action: "Movimento",
        text: "O chefe percorre uma distância igual ao seu deslocamento.",
      },
    ],
  },
  {
    id: "disparador-acoplado",
    name: "Disparador Acoplado",
    description:
      "Uma arma de ataque à distância, ou outra forma de disparar projéteis, faz parte do arsenal do chefe.",
    abilities: [
      {
        name: "Mira Aprimorada",
        text: "Quando faz um ataque à distância, o chefe rola dois dados e usa o melhor resultado.",
      },
      {
        name: "Acumular Munição",
        action: "Movimento",
        text: "O chefe acumula energia para um disparo poderoso. Seu próximo disparo com esta parte causa dois dados extras de dano.",
      },
      {
        name: "Disparo Explosivo",
        action: "Completa",
        text: "O chefe dispara uma carga explosiva que afeta uma esfera com 6m de raio em alcance médio. Criaturas nessa área sofrem 2d6/4d6/6d6/10d6 pontos de dano (Reflexos reduz à metade). Recarga (movimento).",
      },
      {
        name: "Disparo Unificado",
        action: "Padrão",
        text: "O chefe ataca uma criatura em alcance médio. O alvo sofre 2d8/4d8/6d8/10d8 pontos de dano e fica caído (Reflexos reduz à metade e evita a condição).",
      },
    ],
  },
  {
    id: "emaranhado-tentacular",
    name: "Emaranhado Tentacular",
    description:
      "Vários tentáculos alongados se projetam a partir do chefe. Individualmente fracos, em conjunto eles agarram e atrapalham seus inimigos.",
    abilities: [
      {
        name: "Tentáculos Disruptivos",
        text: "Uma área de 9m de raio ao redor do chefe é considerada terreno difícil.",
      },
      {
        name: "Agarrar Aprimorado",
        action: "Movimento",
        text: "O chefe faz a manobra agarrar contra uma criatura em alcance curto. Seu teste é igual ao seu ataque corpo a corpo modificado por seu tamanho. O chefe pode manter até uma criatura por patamar agarrada dessa forma.",
      },
      {
        name: "Arremesso Tentacular",
        action: "Padrão",
        text: "Se começar o turno desta parte agarrando uma criatura menor que ele com seus tentáculos, o chefe a arremessa 1d6 x 1,5m em uma direção à sua escolha. A vítima fica caída e, se atingir algum obstáculo, sofre 1d6 pontos de dano de impacto para cada 1,5m que foi arremessada.",
      },
    ],
  },
  {
    id: "escudo-mental",
    name: "Escudo Mental",
    description: "A mente do chefe é protegida contra ataques psíquicos.",
    abilities: [
      { name: "Mente Protegida", text: "O chefe recebe +5 em Vontade e imunidade a efeitos mentais e dano psíquico." },
      {
        name: "Erguer Defesas",
        action: "Reação",
        text: "Uma vez por rodada, quando faz um teste de Vontade, o chefe rola dois dados e usa o melhor resultado. Se passar nesse teste, ele acumula uma carga psíquica.",
      },
      {
        name: "Rajada Mental",
        action: "Padrão",
        text: "O chefe dispara energia psíquica de seu escudo contra uma criatura em alcance médio. Isso funciona como a magia Adaga Mental, exceto que o chefe não gasta PM (limite de PM igual ao seu ND original). Quando usa esta habilidade, o chefe gasta quaisquer cargas psíquicas que tenha acumulado. Para cada carga gasta desta forma, ele causa +2d6 pontos de dano com a rajada. Recarga (movimento).",
      },
    ],
  },
  {
    id: "gerador-de-aura",
    name: "Gerador de Aura",
    description:
      "Graças a esta parte, o chefe consegue gerar uma aura ao seu redor. Isso pode ser uma nuvem gasosa, uma concentração de energia ou mesmo um enxame de criaturinhas mortais.",
    abilities: [
      {
        name: "Aura Obscurecente",
        text: "O chefe emana uma aura com 9m de raio. Dentro dela, todas as criaturas têm camuflagem leve (o chefe pode perceber normalmente dentro da própria aura).",
      },
      {
        name: "Pulso Agressivo",
        action: "Padrão",
        text: "A aura causa 2d6/4d6/6d6/10d6 pontos de dano em todos os inimigos em seu interior. Criaturas afetadas podem fazer um teste de resistência para reduzir esse dano à metade (escolha entre Fortitude, Reflexos ou Vontade, conforme apropriado à natureza da aura).",
      },
    ],
  },
  {
    id: "matriz-regeneradora",
    name: "Matriz Regeneradora",
    description:
      "Uma fonte de energia vital, ou um sistema de cura independente, permite que o chefe se recupere de ferimentos e condições prejudiciais.",
    abilities: [
      {
        name: "Fortalecimento Corporal",
        text: "Quando faz um teste de Fortitude, o chefe rola dois dados e usa o melhor resultado.",
      },
      {
        name: "Curar-se",
        action: "Padrão",
        text: "O chefe recupera 10/25/50/100 PV de uma de suas partes não desabilitada.",
      },
      {
        name: "Recuperar-se",
        action: "Movimento",
        text: "O chefe refaz um teste de resistência contra uma condição (como abalado, paralisado etc.) que o esteja afetando.",
      },
    ],
  },
  {
    id: "oubliette-portatil",
    name: "Oubliette Portátil",
    description:
      "O chefe possui alguma forma de aprisionar seus inimigos, seja uma jaula acoplada ou um bolsão mágico especial.",
    abilities: [
      {
        name: "Armadilha Cruel",
        text: "Ataques contra o oubliette tem 25% de chance de atingir, em vez dele, uma das criaturas engolidas. Um atacante pode aceitar uma penalidade de –5 em seu teste de ataque para evitar essa chance.",
      },
      {
        name: "Engolir",
        action: "Padrão",
        text: "O chefe usa a habilidade Engolir (p. 10). No início de cada um dos turnos do oubliette, a criatura engolida sofre 2d6/2d8/4d6/4d12 pontos de dano. Ela pode escapar causando um total de 10/25/50/75 pontos de dano ao interior do oubliette (Defesa 10/15/20/25, redução de dano 0). O chefe pode manter até uma criatura engolida por patamar.",
      },
    ],
  },
  {
    id: "projetor-sonoro",
    name: "Projetor Sonoro",
    description:
      "Este projetor permite que o chefe dispare pulsos sônicos capazes de machucar e enlouquecer seus inimigos.",
    abilities: [
      {
        name: "Zunido Constante",
        text: "O chefe emite uma aura de som agudo com 30m de raio. Inimigos nessa área ficam surdos.",
      },
      {
        name: "Pulso Sônico",
        action: "Padrão",
        text: "O chefe emite uma rajada sonora contra uma criatura ou um objeto em alcance curto. Isso funciona como a magia Despedaçar, exceto que o chefe não gasta PM (limite de PM igual ao seu ND original) e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Recarga (movimento).",
      },
      {
        name: "Ruptura Sonora",
        action: "Padrão",
        text: "O chefe emite um disparo sonoro concentrado contra uma criatura em alcance curto. A vítima perde 1d4/1d6/2d4/2d6 PM (Vontade reduz à metade).",
      },
    ],
  },
  {
    id: "reflexos-defensivos",
    name: "Reflexos Defensivos",
    description: "O chefe possui uma maneira de se esquivar de ataques e evitar efeitos prejudiciais.",
    abilities: [
      { name: "Blindagem", text: "Esta parte tem um bônus de +5 na Defesa." },
      { name: "Prontidão de Defesa", text: "O chefe recebe a habilidade Evasão e não pode ser flanqueado." },
      {
        name: "Manobra Defensiva",
        action: "Reação",
        text: "Uma vez por rodada, quando sofre um ataque, o chefe pode fazer com que o atacante role dois dados e use o pior resultado nesse ataque.",
      },
      {
        name: "Posicionar-se",
        action: "Movimento",
        text: "O chefe percorre até 6m; ele pode passar pelo espaço ocupado por inimigos sem testes, mas estes espaços contam como terreno difícil.",
      },
    ],
  },
];
