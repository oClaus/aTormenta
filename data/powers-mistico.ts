import { Power } from "@/types/power";
//#region Tormenta20 - Jogo do Ano
//#endregion
export const powersMistico: Power[] = [

  //#region Dragão Brasil - 199
  {
    id: "Absorver Elemento",
    name: "Absorver Elemento",
    description: "Uma vez por cena, quando está em contato com uma expressão natural do seu elemento, você pode gastar uma ação de movimento para absorver energia mágica dele. Você adquire uma quantidade de PM temporários igual ao círculo máximo de magia que pode lançar. Esses PM duram por uma cena.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Afinidade Maior",
    name: "Afinidade Maior",
    description: "Você escolhe um terceiro elemento para sua habilidade Afinidade.",
    prerequisite: "12º nível de místico, Afinidade Expandida.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Andar pelas Paredes",
    name: "Andar pelas Paredes",
    description: "Você recebe deslocamento de escalada igual ao seu deslocamento terrestre.",
    prerequisite: "Afinidade (terra).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Armadura Rochosa",
    name: "Armadura Rochosa",
    description: "Você pode gastar uma ação de movimento e 2 PM para moldar uma esfera de terra ou rocha que fica orbitando ao seu redor. Para cada círculo de magia além do 1º que puder lançar, você pode gastar +2 PM para moldar mais uma dessas esferas. Quando sofre dano, você pode gastar 1 esfera para receber RD 30 contra esse dano. Você também pode gastar uma ação de movimento e 1 esfera para causar 4d6 + Sabedoria pontos de dano de impacto em uma criatura em alcance curto (Ref CD Sab reduz à metade). As esferas permanecem ao seu redor até o fim da cena ou até serem usadas. Você precisa ter acesso a uma expressão de seu elemento para usar este poder.",
    prerequisite: "4º nível de místico, Afinidade (terra).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Aumento de Atributo",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Auréola Celeste",
    name: "Auréola Celeste",
    description: "Quando lança uma magia de abjuração ou que causa dano de luz, você pode gastar uma ação de movimento e PM para evocar uma auréola sobre a cabeça de um aliado em alcance curto. A auréola concede 5 PV temporários por PM gasto e +1 em testes de resistência e dura até o fim da cena ou até que os PV temporários sejam perdidos.",
    prerequisite: "Afinidade (luz).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Contramágica Elemental",
    name: "Contramágica Elemental",
    description: "Você aprende Dissipar Magia e soma sua Sabedoria em testes de Misticismo para usar usá-la contra magias do elemento ou da escola associada a sua Afinidade.",
    prerequisite: "6º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Corpo Elemental",
    name: "Corpo Elemental",
    description: "Uma vez por cena, você pode gastar uma ação de movimento para fortalecer seu físico com energia elemental. Você recebe 5 PV temporários para cada círculo de magias que pode lançar, ou o dobro disso se estiver em contato com uma expressão natural do seu elemento. Esses PV duram por uma cena.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame Absoluto",
    name: "Ditame Absoluto",
    description: "Você aprende uma magia de 5º círculo a sua escolha de qualquer escola que possa lançar. Além disso, recebe acesso ao 5º círculo de magias para todos os efeitos, exceto para magias que pode aprender.",
    prerequisite: "18º nível de místico, dois poderes de ditame.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame da Chuva",
    name: "Ditame da Chuva",
    description: "Você aprende a magia Área Escorregadia. No 6º nível, aprende Tempestade Divina e no 10º nível aprende Controlar Água.",
    prerequisite: "Afinidade (água).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame da Cura",
    name: "Ditame da Cura",
    description: "Você aprende a magia Curar Ferimentos. No 6º nível, aprende Purificação e no 10º nível aprende Sopro da Salvação.",
    prerequisite: "Afinidade (luz).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame da Manhã",
    name: "Ditame da Manhã",
    description: "Você aprende a magia Luz com todos os seus aprimoramentos, como se fosse um conjurador arcano e divino. No 6º nível, aprende Raio Solar e, no 10º nível, aprende Coluna de Chamas.",
    prerequisite: "Afinidade (fogo ou luz).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame da Montanha",
    name: "Ditame da Montanha",
    description: "Você aprende a magia Primor Atlético. No 10º nível, aprende Controlar Terra e no 14º nível aprende Terremoto.",
    prerequisite: "Afinidade (terra).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame da Profecia",
    name: "Ditame da Profecia",
    description: "Você aprende a magia Augúrio. No 10º nível, aprende Lendas & Histórias e Vidência. Se lançar Augúrio em contato com uma expressão natural do seu elemento de tamanho Grande ou maior, não há chance de falha.",
    prerequisite: "6º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame das Brumas",
    name: "Ditame das Brumas",
    description: "Você aprende a magia Névoa. No 6º nível, aprende Camuflagem Ilusória e Miasma Mefítico.",
    prerequisite: "Afinidade (água ou ar).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame das Chamas",
    name: "Ditame das Chamas",
    description: "Você aprende a magia Explosão de Chamas. No 6º nível, aprende Controlar Fogo e no 10º nível aprende Lança Ígnea de Aleph.",
    prerequisite: "Afinidade (fogo).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame do Breu",
    name: "Ditame do Breu",
    description: "Você aprende a magia Escuridão. No 10º nível, aprende Anular a Luz e Manto de Sombras.",
    prerequisite: "Afinidade (trevas).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame do Crepúsculo",
    name: "Ditame do Crepúsculo",
    description: "Você aprende as magias Consagrar e Profanar e, no 6º nível, aprende Crânio Voador de Vladislav.",
    prerequisite: "Afinidade (luz ou trevas).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame do Espadachim",
    name: "Ditame do Espadachim",
    description: "Você aprende a magia Concentração de Combate. No 6º nível, aprende Velocidade e, no 10º nível, aprende Transformação de Guerra.",
    prerequisite: "treinado em Luta.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame dos Portais",
    name: "Ditame dos Portais",
    description: "Você aprende Salto Dimensional. No 10º nível, aprende Teletransporte e, no 14º nível, aprende Viagem Planar.",
    prerequisite: "6º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Ditame dos Ventos",
    name: "Ditame dos Ventos",
    description: "Você aprende a magia Queda Suave. No 6º nível, aprende Controlar Ar e, no 14º nível, aprende Controlar o Clima.",
    prerequisite: "Afinidade (ar).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Disparo em Linha",
    name: "Disparo em Linha",
    description: "Quando usa Disparo Elemental, você pode gastar 2 PM para atingir vários alvos alinhados. Faça um ataque à distância e compare-o com a Defesa de cada inimigo em uma linha de 9m e então faça uma única rolagem de dano e aplique o resultado a cada alvo atingido.",
    prerequisite: "Disparo Elemental.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Disparo Elemental",
    name: "Disparo Elemental",
    description: "Você pode usar Ataque Elemental com armas de ataque à distância.",
    prerequisite: "treinado em Pontaria.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Elementalismo Marcial",
    name: "Elementalismo Marcial",
    description: "Quando usa Ataque Elemental, você pode gastar 2 PM para lançar uma magia que tenha tempo de execução de uma ação padrão ou menor, como uma ação livre.",
    prerequisite: "10º nível de místico, treinado em Luta.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Elemento Penetrante",
    name: "Elemento Penetrante",
    description: "Quando causa dano do tipo da sua Afinidade, você pode gastar uma quantidade de PM limitada pelo círculo máximo de magias que pode lançar. Para cada PM gasto dessa forma, você ignora até 10 pontos da redução de dano dos alvos.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Elemento Poderoso",
    name: "Elemento Poderoso",
    description: "A CD para resistir a suas habilidades de místico aumenta em +2.",
    prerequisite: "6º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Empuxo",
    name: "Empuxo",
    description: "Você pode caminhar sobre água e fluidos similares e ganha deslocamento de natação igual ao seu deslocamento terrestre.",
    prerequisite: "Afinidade (água ou ar).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Escavador",
    name: "Escavador",
    description: "Você recebe deslocamento de escavação igual a seu deslocamento terrestre.",
    prerequisite: "Afinidade (terra).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Estabilidade Terrena",
    name: "Estabilidade Terrena",
    description: "Você recebe um bônus igual ao círculo máximo de magias que pode lançar em testes para resistir a manobras de combate e a efeitos de movimento.",
    prerequisite: "Afinidade (terra).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Escudo Elemental",
    name: "Escudo Elemental",
    description: "Quando usa Ataque Elemental, para cada PM gasto você recebe +1 na Defesa e em testes de resistência por 1 rodada.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Flagelo Elemental",
    name: "Flagelo Elemental",
    description: "Quando usa Ataque Elemental você aumenta seu multiplicador de crítico em +1.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Golpe Ardente",
    name: "Golpe Ardente",
    description: "Quando você usa Ataque Elemental e acerta o ataque, o alvo fica em chamas (Reflexos CD Sab evita).",
    prerequisite: "Afinidade (fogo).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Golpe Cortante",
    name: "Golpe Cortante",
    description: "Quando você usa Ataque Elemental e acerta o ataque, o alvo fica sangrando (Reflexos CD Sab evita).",
    prerequisite: "Afinidade (ar).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Golpe Congelante",
    name: "Golpe Congelante",
    description: "Quando você usa Ataque Elemental e acerta o ataque, o alvo fica lento por 1 rodada (Reflexos CD Sab evita).",
    prerequisite: "Afinidade (água).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Golpe Ofuscante",
    name: "Golpe Ofuscante",
    description: "Quando você usa Ataque Elemental e acerta o ataque, o alvo fica cego por 1 rodada (Reflexos CD Sab evita).",
    prerequisite: "Afinidade (ar, fogo ou luz).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Golpe Pujante",
    name: "Golpe Pujante",
    description: "Quando você usa Ataque Elemental e acerta o ataque, o alvo fica caído (Reflexos CD Sab evita).",
    prerequisite: "Afinidade (água, terra ou trevas).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Hidratação",
    name: "Hidratação",
    description: "Quando lança uma magia de encantamento ou que cause dano de frio, você pode gastar PM para se hidratar. Para cada PM que gastar, você cura 5 PV.",
    prerequisite: "Afinidade (água).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Oito Nuvens",
    name: "Oito Nuvens",
    description: "Quando lança uma magia de ilusão ou que cause dano de eletricidade, você pode usar uma ação de movimento e gastar até 8 PM para ser rodeado por nuvens até o final da cena. Para cada PM gasto, você recebe uma nuvem, que concede +1 na Defesa. Além disso, se tiver pelo menos cinco nuvens, você recebe camuflagem leve. Sempre que um ataque contra você errar, uma nuvem é dissipada e o bônus na Defesa diminui em 1.",
    prerequisite: "Afinidade (ar).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Pacto Cooperativo",
    name: "Pacto Cooperativo",
    description: "Uma vez por rodada, você pode dar uma ordem para sua manifestação elemental como uma ação livre. Além disso, sua manifestação fornece bônus por flanquear contra um inimigo por rodada.",
    prerequisite: "Pacto Elemental.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Pacto Elemental",
    name: "Pacto Elemental",
    description: "Através de um ritual místico, você cria um vínculo mágico com uma manifestação elemental do mesmo tipo de sua Afinidade (veja nas Regras).",
    prerequisite: "6º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Pacto Mágico",
    name: "Pacto Mágico",
    description: "Você pode gastar uma ação de movimento para pedir que sua manifestação elemental busque uma magia em seu lugar. Você escolhe a magia quando faz o pedido, e pode pedir magias arcanas ou divinas, de qualquer escola, de um círculo ao qual tenha acesso. Uma vez ordenada, sua manifestação parte em busca da magia; encontrá-la demora um número de rodadas igual a 1d4 + o círculo da magia. Esse tempo aumenta em 2 rodadas se a magia for divina, e em 2 rodadas se for de uma escola à qual você não tem acesso. Ao final desse período, faça um teste de Misticismo (CD 15 + o círculo da magia; a cada novo pedido no mesmo dia aumenta a CD do teste em +5). Se você passar, a manifestação retorna e você aprende a magia por um dia. Se falhar, o parceiro se perde e só retorna no dia seguinte.",
    prerequisite: "Pacto Elemental.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Perícia Mística",
    name: "Perícia Mística",
    description: "Você aplica seu bônus de Tradição Oral à perícia extra recebida por sua Afinidade.",
    prerequisite: "3º nível de místico.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Propulsão",
    name: "Propulsão",
    description: "Você pode gastar 1 PM para adquirir deslocamento de voo 12m por uma rodada, mas cai se não encerrar seu movimento em uma superfície que sustente seu peso. No 10º nível, você aprende Voo.",
    prerequisite: "Afinidade (ar ou fogo).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Resistência Tenebrosa",
    name: "Resistência Tenebrosa",
    description: "Quando faz um teste de resistência, você pode gastar 1 PM para receber um bônus igual ao círculo máximo de magia que pode lançar.",
    prerequisite: "Afinidade (trevas).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Supernova",
    name: "Supernova",
    description: "Quando lança uma magia que causa dano de fogo, você pode gastar pontos de vida para deixar as chamas mais intensas. Para cada 5 PV que gastar (conta como perda de vida), você aumenta o dano da magia em +1d12.",
    prerequisite: "Afinidade (fogo).",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Sustento Primordial",
    name: "Sustento Primordial",
    description: "Quando descansa em uma área ocupada pela expressão natural de seu elemento, suas condições de descanso melhoram em um passo.",
    origin: "Dragão Brasil - 199"
  },
  {
    id: "Visão Noturna",
    name: "Visão Noturna",
    description: "Você recebe +2 em Percepção e visão no escuro. Se você já possui visão no escuro, seu alcance aumenta em um passo (de curto para médio, de médio para longo).",
    prerequisite: "Afinidade (trevas).",
    origin: "Dragão Brasil - 199"
  },
  //#endregion
  
];