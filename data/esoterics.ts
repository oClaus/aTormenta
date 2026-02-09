import { Gear } from "@/types/gear";

// Tabela de Equipamento de Aventura
export const esoteric: Gear[] = [
  {
    id: "Bolsa de Pó",
    name: "Bolsa de Pó",
    description: "Uma bolsa com pó multicolorido, fabricado a partir das pétalas trituradas de flores que nascem apenas na Pondsmânia. Quando lança uma magia de encantamento ou ilusão, você recebe +2 PM para gastar em aprimoramentos.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 300",
    spaces: "1",
  },
  {
    id: "Cajado Arcano",
    name: "Cajado Arcano",
    description: "Um cajado típico, feito de madeira de boa qualidade e entalhado com runas. O limite de PM que você pode gastar em magias arcanas e a CD para resistir a elas aumentam em +1. Para fornecer seus benefícios, um cajado precisa ser empunhado com as duas mãos. Ele pode ser usado como arma, com as estatísticas de um bordão.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 1000",
    spaces: "2",
  },
  {
    id: "Cetro Elemental",
    name: "Cetro Elemental",
    description: "Este cetro possui uma pedra preciosa em sua ponta: esmeralda (ácido), topázio (eletricidade), rubi (fogo) ou safira (frio). Quando lança uma magia que causa dano do tipo da pedra, o dano aumenta em um dado do mesmo tipo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 750",
    spaces: "1",
  },
  {
    id: "Costela de Lich",
    name: "Costela de Lich",
    description: "Esta varinha é feita a partir do osso de um morto-vivo. Suas magias causam +1d6 pontos de dano de trevas. Se estiver empunhando esta varinha você não recupera PV por efeitos mágicos de cura.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 300",
    spaces: "1",
  },
  {
    id: "Dedo de Ente",
    name: "Dedo de Ente",
    description: "Uma varinha feita da madeira de uma árvore senciente. Sempre que gastar pelo menos 1 PM para lançar uma magia, role 1d4. Com um resultado 4, você recupera 1 PM.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 200",
    spaces: "1",
  },
  {
    id: "Luva de Ferro",
    name: "Luva de Ferro",
    description: "Um conjunto de dedais interligados por correntes. Suas magias arcanas pessoais que concedem bônus na Defesa ou em testes de resistências têm esse bônus aumentado em +1.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 150",
    spaces: "1",
  },
  {
    id: "Medalhão de Prata",
    name: "Medalhão de Prata",
    description: "Gravado com uma runa pessoal do conjurador, este medalhão de prata diminui em –1 PM o custo de magias de alcance pessoal.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 750",
    spaces: "1",
  },
  {
    id: "Orbe Cristalino",
    name: "Orbe Cristalino",
    description: "Esta esfera perfeita concentra seu poder mágico. O limite de PM que você pode gastar em magias arcanas aumenta em +1.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 750",
    spaces: "1",
  },
  {
    id: "Tomo Hermético",
    name: "Tomo Hermético",
    description: "Um livro de tratados que aumentam a sua compreensão sobre uma escola de magia específica. A CD para resistir a suas magias arcanas dessa escola aumenta em +2.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 1500",
    spaces: "1",
  },
  {
    id: "Varinha Arcana",
    name: "Varinha Arcana",
    description: "Uma varinha típica, feita de madeira de boa qualidade e entalhada com runas. A CD para resistir a suas magias arcanas aumenta em +1.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 100",
    spaces: "1",
  },
  {
    id: "compasso-mistico",
    name: "Compasso Místico",
    description: "Este compasso ostenta marcações geométricas combinadas com símbolos arcanos. Quando lança uma magia com efeito em área, você pode excluir um alvo da área afetada.",
    origin: "Herois de Arton",
    price: "T$ 600",
    spaces: "1"
  },
  {
    id: "flauta-convocadora",
    name: "Flauta Convocadora",
    description: "Esta réplica de flauta é esculpida em um único pedaço de cristal. Quando lança uma magia que conjura capangas, você conjura um capanga adicional do mesmo tipo.",
    origin: "Herois de Arton",
    price: "T$ 300",
    spaces: "1"
  },
  {
    id: "mandala-onirica",
    name: "Mandala Onírica",
    description: "Esta mandala é feita de delicados fios metálicos entrelaçados. Quando ao menos um inimigo falha no teste de Vontade de uma de suas magias, você recebe 1 PM temporário (limitado pelo total de PM gasto na magia).",
    origin: "Herois de Arton",
    price: "T$ 300",
    spaces: "1"
  },
  {
    id: "varinha-armamentista",
    name: "Varinha Armamentista",
    description: "Feita de metal ou marfim, esta varinha canaliza seu poder pessoal para a energia da magia. Aumenta o bônus de dano fornecido pelo poder Arcano de Batalha em +2.",
    origin: "Herois de Arton",
    price: "T$ 600",
    spaces: "1"
  },
  {
    id: "afiador-solar",
    name: "Afiador solar",
    description: "Esta pequena pedra de amolar canaliza luz para suas armas. Quando lança uma magia que tenha como alvo uma arma e que forneça dados adicionais de dano a ela, você pode mudar o tipo desse dano adicional para luz.",
    origin: "Deuses de Arton",
    price: "T$ 100",
    spaces: "1"
  },
  {
    id: "baculo-da-retribuicao",
    name: "Báculo da retribuição",
    description: "Este bastão longo possui uma ponta curva, geralmente adornada com um símbolo religioso. Sempre que gastar pelo menos 1 PM em uma magia de cura de luz, role 1d4. Com um resultado 4, além do normal, a magia recupera 1 PM de cada criatura curada.",
    origin: "Deuses de Arton",
    price: "T$ 200",
    spaces: "1"
  },
  {
    id: "contas-de-oracao",
    name: "Contas de oração",
    description: "Este item está presente em muitas religiões artonianas, consistindo de várias pequenas esferas, miçangas, conchas ou outros ornamentos parecidos, presos por um cordão. Elas têm a função de ajudar o devoto a contar as orações ou cânticos que já fez, assim auxiliando-o a se concentrar em suas orações. Aumenta seu limite de PM para magias divinas em +1.",
    origin: "Deuses de Arton",
    price: "T$ 500",
    spaces: "1"
  },
  {
    id: "estola",
    name: "Estola",
    description: "Uma faixa larga e comprida que sacerdotes usam em torno do pescoço. Cada estola é adornada com símbolos que remetem a uma magia divina específica, e o uso de um destes acessórios indica que o sacerdote está ocupado com algum dever eclesiástico ligado a essa magia. A CD para resistir à magia divina representada na estola aumenta em +2. Ao contrário de outros itens esotéricos, uma estola pode ser vestida em vez de empunhada.",
    origin: "Deuses de Arton",
    price: "T$ 150",
    spaces: "1"
  },
  {
    id: "frasco-purificador",
    name: "Frasco purificador",
    description: "Este pequeno vasilhame contém 10 doses de uma combinação de água e especiarias santificadas. Quando lança uma magia que tenha uma criatura como alvo, você pode gastar uma quantidade dessas doses (limitada por sua Sabedoria); para cada dose gasta, o alvo da magia também recupera 1d4 PV. Recarregar um frasco purificador é uma ação completa e consome 2 doses de água benta. Um frasco purificador só pode ser usado por devotos de divindades que canalizam energia positiva.",
    origin: "Deuses de Arton",
    price: "T$ 100",
    spaces: "1"
  },
  {
    id: "medalhao-afiado",
    name: "Medalhão afiado",
    description: "Um pequeno medalhão com bordas afiadas e a imagem de uma arma gravada. Quando você lança uma magia que fornece um bônus em testes de ataque, ela também fornece +1 na margem de ameaça desses ataques.",
    origin: "Deuses de Arton",
    price: "T$ 900",
    spaces: "1"
  },
  {
    id: "ostensorio-santificado",
    name: "Ostensório santificado",
    description: "Uma obra de arte dedicada ao deus, muitas vezes contendo uma relíquia. Escolha uma magia que você possa lançar. Seu custo diminui em –1 PM (cumulativo com outras reduções), mas somente se for lançada em devotos do seu deus.",
    origin: "Deuses de Arton",
    price: "T$ 750",
    spaces: "1"
  },
  {
    id: "rede-de-almas",
    name: "Rede de almas",
    description: "Esta pequena rede decorada com ossos só pode ser usada por devotos de divindades que canalizam energia negativa. Quando lança uma magia divina de trevas, para cada resultado máximo nos dados de dano da magia (incluindo dados maximizados), você recebe 1 PV temporário cumulativo.",
    origin: "Deuses de Arton",
    price: "T$ 600",
    spaces: "1"
  },
  {
    id: "turibulo-ungido",
    name: "Turíbulo ungido",
    description: "Um vaso ou incensário formado por um fornilho na ponta de uma corrente, onde se queimam ervas e incensos. Aumenta a área de suas magias em +1,5m (uma magia que afeta um raio de 3m passa a afetar um raio de 4,5m, por exemplo).",
    origin: "Deuses de Arton",
    price: "T$ 100",
    spaces: "1"
  }

 
];