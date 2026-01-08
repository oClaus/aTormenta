import { Power } from "@/types/power";

export const powersBucaneiro: Power[] = [
  {
    id: "1",
    name: "Abusar dos Fracos",
    description: "Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo.",
    prerequisite: "Flagelo dos Mares.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Amigos no Porto",
    description: "Quando chega em uma comunidade portuária, você pode fazer um teste de Carisma (CD 10). Se passar, encontra um amigo para o qual pode pedir um favor ou que pode ajudá-lo como parceiro veterano de um tipo à sua escolha por um dia.",
    prerequisite: "Car 1, 6º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aparar",
    description: "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 1 PM para fazer um teste de ataque com bônus igual ao seu nível (além do normal). Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder se estiver usando uma arma corpo a corpo leve ou ágil.",
    prerequisite: "Esgrimista.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Apostador",
    description: "Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 200 (CD 20), T$ 400 (CD 25), T$ 800 (CD 30), T$ 1.600 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor equivalente, a critério do mestre). Se falhar, perde esse mesmo o valor. A critério do mestre, o lugar onde você está pode limitar ou impossibilitar o uso deste poder. ",
    prerequisite: "treinado em Jogatina.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Ataque Acrobático",
    description: "Quando se aproxima de um inimigo com um salto ou pirueta (em termos de jogo, usando Atletismo ou Acrobacia para se mover) e o ataca no mesmo turno, você recebe +2 nesse teste de ataque e na rolagem de dano.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Aventureiro Ávido",
    description: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o poder Surto Heroico, em vez disso seu custo diminui em –2 PM.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Bravata Audaz",
    description: "Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da princesa até o fim do baile. Se cumprir a bravata, seus PM aumentam em +2 por nível de bucaneiro até o fim da aventura.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Bravata Imprudente",
    description: "Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição à sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "En Garde",
    name: "En Garde",
    description: "Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma corpo a corpo leve ou ágil, você recebe +2 na margem de ameaça com essas armas e +2 na Defesa.",
    prerequisite: "Esgrimista.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Esgrimista",
    name: "Esgrimista",
    description: "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência nas rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Flagelo dos Mares",
    name: "Flagelo dos Mares",
    description: "Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos. ",
    prerequisite: "treinado em Intimidação.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Folião",
    name: "Folião",
    description: "Você sabe fazer amizades durante festas, de noitadas em tavernas a bailes na corte. Nesses locais, você recebe +2 em testes de perícias de Carisma e a atitude de todas as pessoas em relação a você melhora em uma categoria.",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Grudar o Cano",
    name: "Grudar o Cano",
    description: "Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade de –5 no teste de ataque e aumenta seu dano em um passo.",
    prerequisite: "treinado em Luta, Pistoleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Pernas do Mar",
    name: "Pernas do Mar",
    description: "Você recebe +2 em Acrobacia e Atletismo. Além disso, quando está se equilibrando ou escalando, você não fica desprevenido e seu deslocamento não é reduzido à metade.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Pistoleiro",
    name: "Pistoleiro",
    description: "Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Presença Paralisante",
    name: "Presença Paralisante",
    description: "Você soma seu Carisma em Iniciativa e, se for o primeiro na iniciativa, ganha uma ação padrão extra na primeira rodada.",
    prerequisite: "Car 1, 4º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Ripostar",
    name: "Ripostar",
    description: "Quando usa a habilidade aparar e evita o ataque, você pode gastar 1 PM. Se fizer isso, pode fazer um ataque corpo a corpo imediato contra o inimigo que o atacou (se ele estiver em alcance).",
    prerequisite: "Aparar, 12º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Touché",
    name: "Touché",
    description: "Quando se aproxima de um inimigo e o ataca com uma arma corpo a corpo leve ou ágil no mesmo turno, você pode gastar 2 PM para aumentar seu dano em um passo e receber +5 na margem de ameaça neste ataque.",
    prerequisite: "Esgrimista, 10º nível de bucaneiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Ardil Afiado",
    name: "Ardil Afiado",
    description: "Você pode usar Audácia em testes de manobra. Se fizer isso contra um oponente desprevenido, soma o dobro do Carisma no teste. ",
    prerequisite: "Car 1, treinado em Enganação",
    origin: "Herois de Arton"
  },
  { id: "Bloqueio Desconcertante",
    name: "Bloqueio Desconcertante",
    description: "Quando uma criatura erra um ataque corpo a corpo contra você, ou quando você bloqueia um ataque com Aparar, você pode gastar 1 PM. Se você fizer isso, a criatura fica desprevenida contra seu próximo ataque feito até o fim do seu próximo turno. ",
    prerequisite: "Esgrimista",
    origin: "Herois de Arton"
  },
  { id: "Bom de Trago",
    name: "Bom de Trago",
    description: "Uma vez por rodada, você pode ingerir uma bebida, preparado ou poção que esteja empunhando como uma ação livre.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Charme Cafajeste",
    name: "Charme Cafajeste",
    description: "Você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). A CD para resistir a esta habilidade aumenta em +2 para criaturas inamistosas e em +5 para criaturas hostis. Esta não é uma habilidade mágica e provém de sua habilidade de cativar seus adversários. ",
    prerequisite: "treinado em Enganação, 3º nível de bucaneiro",
    origin: "Herois de Arton"
  },
  { id: "Cobrir de Pólvora",
    name: "Cobrir de Pólvora",
    description: "Você pode gastar uma ação de movimento, 1 PM e uma bala de arma de fogo para cobrir uma criatura em alcance curto com uma pequena quantidade de pólvora. O alvo fica cego por 1 rodada (Ref CD Car evita) e, até o fim da cena, o próximo ataque contra ele causa +1d6 pontos de dano de fogo e deixa-o em chamas.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Cortejo de Espadas",
    name: "Cortejo de Espadas",
    description: "Quando você faz um teste de Acrobacia para passar por um inimigo, o espaço ocupado por esse inimigo não conta como terreno difícil e ele só pode usar Iniciativa para o teste oposto. Se você vencer esse teste, recebe +2 na Defesa e em Reflexos contra esse inimigo por 1 rodada. ",
    prerequisite: "treinado em Acrobacia",
    origin: "Herois de Arton"
  },
  { id: "Dançar nas Cordas",
    name: "Dançar nas Cordas",
    description: "Se você usar Ataque Acrobático tendo vencido um teste oposto para passar pelo espaço de um inimigo, os bônus fornecidos por esse poder aumentam para +5 e se aplicam a todos os seus ataques contra esse inimigo nessa rodada.",
    prerequisite: "Ataque Acrobático",
    origin: "Herois de Arton"
  },
  { id: "Entrada Triunfal",
    name: "Entrada Triunfal",
    description: "Se um combate começar e você for o primeiro na iniciativa, recebe uma quantidade de PV temporários igual à metade de seus PV máximos.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Esgrima Sambur",
    name: "Esgrima Sambur",
    description: "Se estiver empunhando duas armas corpo a corpo leves ou ágeis e fizer a ação agredir, você pode gastar 1 PM para fazer dois ataques, um com cada arma (se tiver Ambidestria ou Estilo de Duas Armas, em vez disso não sofre penalidade para usá-los). Além disso, se tiver o poder Aparar, pode usá-lo uma segunda vez na rodada. ",
    prerequisite: "Esgrimista",
    origin: "Herois de Arton"
  },
  { id: "Estampido Ensurdecedor",
    name: "Estampido Ensurdecedor",
    description: "Quando faz um ataque à distância com uma arma de fogo, você pode pagar 1 PM para deixar todas as criaturas adjacentes a você abaladas e surdas (Fort CD Car reduz a duração das condições para 1 rodada).",
    prerequisite: "Grudar o Cano",
    origin: "Herois de Arton"
  },
  { id: "Estocada no Flanco",
    name: "Estocada no Flanco",
    description: "Uma vez por rodada, quando vence um teste oposto para passar por um inimigo, você pode gastar 2 PM para fazer um ataque contra ele. Se você acertar o ataque e causar dano de corte ou perfuração, o inimigo fica sangrando. ",
    prerequisite: "Cortejo de Espadas",
    origin: "Herois de Arton"
  },
  { id: "Gole da Coragem",
    name: "Gole da Coragem",
    description: "Uma vez por cena, quando ingerir uma bebida, preparado ou poção, você recebe uma ação padrão adicional nesse turno.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Golpe Humilhante",
    name: "Golpe Humilhante",
    description: "Você pode gastar 2 PM para humilhar uma criatura em alcance curto. Até o fim da cena, sempre que você acertar um ataque nessa criatura, ela sofre uma penalidade de –1 na Defesa. A penalidade é cumulativa, limitada pelo seu Carisma e dura até o fim da cena.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Introdução Calorosa",
    name: "Introdução Calorosa",
    description: "Na primeira rodada de um combate, você pode gastar uma ação para se apresentar. Veja o quadro abaixo para os tipos de ação que você pode gastar e seus respectivos benefícios. Você recebe todos os benefícios das ações anteriores e eles duram até o fim da cena.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Lobo do Mar",
    name: "Lobo do Mar",
    description: "Você já viu quase todo o mundo e almeja ver o resto. Quando você chega a um lugar no qual nunca esteve, pelo resto da aventura o custo de Audácia diminui em –1 PM e você pode usá-la em testes de ataque (ambos nesse lugar). ",
    prerequisite: "17º nível de bucaneiro",
    origin: "Herois de Arton"
  },
  { id: "Lorotas da Terra e do Mar",
    name: "Lorotas da Terra e do Mar",
    description: "Você pode gastar 10 minutos para contar uma mentira sobre seu passado. Escolha uma cena de uma de suas aventuras e reconte-a de forma “criativa” para um NPC que não a testemunhou. Então faça um teste de Enganação (CD 15 + 5 para cada vez que usou este poder na mesma aventura). Se passar, pode usar um poder qualquer cujos pré-requisitos cumpra e que seja relacionado à sua mentira (a critério do mestre), até o fim do dia ou até usar este efeito novamente. Se falhar, não pode mais usar este efeito até o fim da aventura. ",
    prerequisite: "treinado em Enganação, 11º nível de bucaneiro",
    origin: "Herois de Arton"
  },
  { id: "Onda de Sangue",
    name: "Onda de Sangue",
    description: "Sempre que você deixa alguém sangrando, a perda de vida causada por sangramento aumenta em um passo (cumulativo até um máximo de d12) e a criatura falha automaticamente em seu próximo teste de Constituição para remover essa condição. ",
    prerequisite: "Estocada no Flanco",
    origin: "Herois de Arton"
  },
  { id: "Passo Das Ondas",
    name: "Passo Das Ondas",
    description: "Uma vez por rodada, quando acerta um ataque em um inimigo, você pode gastar 2 PM para se mover até a metade do seu deslocamento. Esse deslocamento ignora terreno difícil e não ativa reações dos inimigos (como pelo poder Ataque Reflexo). ",
    prerequisite: "Pernas do Mar",
    origin: "Herois de Arton"
  },
  { id: "Pirouette",
    name: "Pirouette",
    description: "Enquanto está sob efeito de En Garde, você pode gastar uma ação de movimento para receber +5 na Defesa por 1 rodada. ",
    prerequisite: "En Garde",
    origin: "Herois de Arton"
  },
  { id: "Remise",
    name: "Remise",
    description: "Enquanto está sob efeito de En Garde, uma vez por rodada, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional. ",
    prerequisite: "En Garde, 7º nível de bucaneiro",
    origin: "Herois de Arton"
  },
  { id: "Sucesso Atrai Sucesso",
    name: "Sucesso Atrai Sucesso",
    description: "Você pode gastar 2 PM para invocar uma onda de boa sorte. Sempre que fizer um acerto crítico em um inimigo, você recebe um bônus cumulativo de +2 nas rolagens de dano (limitado pelo seu Carisma) até o fim da cena.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  

  

  

  
];