import { Enchantment, SpecificWeapon } from "@/types/magic";

export const enchantments: Enchantment[] = [
    {
    id: "abafador",
    name: "Abafador",
    description: "O esotérico ergue uma barreira permeável ao redor do alvo da magia, diminuindo as capacidades dele. Se uma criatura falhar num teste de resistência contra uma magia sua, a CD das habilidades dela diminui em –2 por uma rodada.",
    origin: "Herois de Arton"
  },
  {
    id: "belico",
    name: "Bélico",
    description: "O esotérico se parece com uma arma. Por exemplo, se for uma varinha, pode ser comprido e pontiagudo como uma espada curta. Quando lança uma magia de dano, você causa +1d10 pontos de dano de essência.",
    origin: "Herois de Arton"
  },
  {
    id: "caridoso",
    name: "Caridoso",
    description: "O esotérico emana uma sensação de conforto e união. Quando você lança uma magia em um aliado e gasta pelo menos 1 PM, recebe 1 PM temporário para gastar em aprimoramentos na próxima magia que lançar nessa cena. Esse PM não conta no limite de gasto de pontos de mana.",
    origin: "Herois de Arton"
  },
  {
    id: "chocante",
    name: "Chocante",
    description: "O esotérico é adornado com topázios e emite o som de estalos elétricos. Suas magias que causam dano de eletricidade causam um dado extra de dano do mesmo tipo e deixam o alvo ofuscado por 1 rodada.",
    origin: "Herois de Arton"
  },
  {
    id: "clemente",
    name: "Clemente",
    description: "O esotérico vibra com energia positiva, como se estivesse ansioso para salvar vidas. Suas magias de cura curam um dado extra do mesmo tipo.",
    origin: "Herois de Arton"
  },
  {
    id: "contido",
    name: "Contido",
    description: "O esotérico suaviza efeitos destrutivos. Por exemplo, uma labareda infernal pode virar uma lufada de ar abafado que, em vez de carbonizar seu alvo, irá apenas fazê-lo desmaiar. Quando lança uma magia de dano, você pode gastar +1 PM para que ela cause dano não letal.",
    origin: "Herois de Arton"
  },
  {
    id: "embusteiro",
    name: "Embusteiro",
    description: "O esotérico tem a aparência de um item mundano de tamanho equivalente — um cajado arcano pode parecer uma vassoura, enquanto uma varinha pode parecer um cachimbo. Ele permite que você use o poder Magia Discreta (Tormenta20, p. 131). Se você já o possui, em vez disso o custo para usá-lo diminui em –1 PM e você pode somar seu Carisma na CD do teste de Misticismo para perceber que você lançou uma magia.",
    origin: "Herois de Arton"
  },
  {
    id: "emergencial",
    name: "Emergencial",
    description: "O esotérico está sempre vibrando, ansioso para agir. Se estiver empunhando este esotérico, uma vez por rodada, quando você ou um aliado em alcance curto sofre dano, você pode gastar 4 PM para lançar uma magia de cura na vítima desse dano como uma reação. Apenas magias com execução de ação de movimento, padrão ou completa podem ser lançadas dessa forma.",
    origin: "Herois de Arton"
  },
  {
    id: "encadeado",
    name: "Encadeado",
    description: "O esotérico impulsiona a energia mágica de seus feitiços, fazendo-a saltar para outros alvos. Uma vez por cena, quando você reduz os PV de um inimigo a 0 ou menos com uma magia, você pode causar metade do dano da magia a outro inimigo dentro do alcance original dela. O inimigo tem direito ao mesmo teste de resistência original e não sofre qualquer outro efeito da magia, apenas o dano.",
    origin: "Herois de Arton"
  },
  {
    id: "escultor",
    name: "Escultor",
    description: "O esotérico está sempre vertendo um pouco de argila. Quando você lança uma magia com efeito de cone ou linha, pode gastar 1 PM para mudar a área dessa magia de cone para linha ou vice-versa. O comprimento de um cone que se torna linha dobra e o de uma linha que se torna cone é reduzido a um terço (arredonde para baixo, como o normal; por exemplo, 9m se era 30m).",
    origin: "Herois de Arton"
  },
  {
    id: "frugal",
    name: "Frugal",
    description: "O esotérico pode inibir seu poder, enfraquecendo suas magias, mas poupando suas energias no processo. Quando você lança uma magia que exige um teste de resistência e afeta um ou mais inimigos, pode diminuir a CD da magia em –2. Se fizer isso, o custo da magia também é diminuído em –2 PM.",
    origin: "Herois de Arton"
  },
  {
    id: "glacial",
    name: "Glacial",
    description: "O esotérico é adornado com safiras e frio ao toque. Suas magias que causam dano de frio causam um dado extra de dano do mesmo tipo e deixam os alvos vulneráveis por 1 rodada.",
    origin: "Herois de Arton"
  },
  {
    id: "imperioso",
    name: "Imperioso",
    description: "O esotérico impõe sua vontade sobre suas criações. Quando você lança uma magia que exige que você gaste ações para comandar o efeito dela, como Conjurar Monstro ou Mão Poderosa de Talude, a ação que você gasta para emitir esse comando diminui em uma categoria (de ação completa para padrão, de padrão para movimento, de movimento para livre). Se a ação for reduzida para livre, você pode emitir apenas um comando como ação livre por rodada; os demais gastam ações de movimento.",
    origin: "Herois de Arton"
  },
  {
    id: "implacavel",
    name: "Implacável",
    description: "Quando você lança uma magia, pode gastar +2 PM para afetar um alvo contra o qual você não tenha linha de efeito. Você deve estar vendo o alvo ou tê-lo visto em seu último turno, e ele ainda precisa estar no alcance. Pré-requisito: outro encanto.",
    origin: "Herois de Arton"
  },
  {
    id: "incriminador",
    name: "Incriminador",
    description: "O esotérico é imbuído com energias enganadoras. Uma vez por cena, quando você lança uma magia, pode gastar 3 PM para criar uma ilusão que mostra a magia sendo lançada por outra criatura a sua escolha em alcance médio. Criaturas que identificarem a magia (veja Misticismo, em Tormenta20, p. 121) têm direito a um teste de Vontade (CD da magia) para desacreditar.",
    origin: "Herois de Arton"
  },
  {
    id: "inflamavel",
    name: "Inflamável",
    description: "O esotérico é adornado com rubis e quente ao toque. Suas magias que causam dano de fogo causam um dado extra de dano do mesmo tipo e deixam o alvo em chamas (se já fizerem isso, o dano causado por essa condição aumenta em +1d6).",
    origin: "Herois de Arton"
  },
  {
    id: "inquisidor",
    name: "Inquisidor",
    description: "O esotérico é marcado com o símbolo sagrado de um deus maior. Quando você lança uma magia divina contra uma criatura que não seja devota dessa divindade, a CD da magia aumenta em +1. Se possuir a habilidade de classe Devoto Fiel dessa divindade, em vez disso a CD aumenta em +2.",
    origin: "Herois de Arton"
  },
  {
    id: "insistente",
    name: "Insistente",
    description: "O esotérico emite um pulsar constante e ritmado. Quando você lança uma magia que causa dano por mais de uma rodada (como Flecha Ácida), os efeitos que normalmente só se aplicariam quando a magia é lançada (como Arcano de Batalha) se aplicam também à segunda rodada.",
    origin: "Herois de Arton"
  },
  {
    id: "khalmyrita",
    name: "Khalmyrita",
    description: "O esotérico está imbuído com a presença estável da Ordem. Quando lança uma magia com efeito variável, em vez de rolar os dados você pode escolher um valor igual à média da rolagem. Um esotérico khalmyrita não pode ser nímbico.",
    origin: "Herois de Arton"
  },
  {
    id: "majestoso",
    name: "Majestoso",
    description: "O esotérico possui um ornamento chamativo, como uma grande gema na ponta. A CD para resistir a suas magias arcanas aumenta em +1. Se você tiver a habilidade de classe Magias, em vez disso aumenta em +2. Pré-requisito: outro encanto.",
    origin: "Herois de Arton"
  },
  {
    id: "nimbico",
    name: "Nímbico",
    description: "O esotérico está imbuído com o poder delirante do Caos. Quando lança uma magia com efeito variável, você pode rolar novamente qualquer número de dados da rolagem original (limitado pelos seus PM atuais). Contudo, a cada resultado par numa dessas rolagens adicionais, você perde 1 PM. Um esotérico nímbico não pode ser khalmyrita.",
    origin: "Herois de Arton"
  },
  {
    id: "pulverizante",
    name: "Pulverizante",
    description: "O esotérico foi feito para a destruição, uma ferramenta de morte que não admite segundas chances ou arrependimento. Quando lança uma magia que reduz os PV de uma criatura a 0 ou menos, você pode gastar 2 PM para que a criatura seja desintegrada, restando apenas um fino pó. Qualquer equipamento que a criatura esteja carregando, vestindo ou empunhando também é desintegrado, exceto itens mágicos. Um esotérico pulverizante não pode ser contido. Pré-requisito: outro encanto.",
    origin: "Herois de Arton"
  },
  {
    id: "retaliador",
    name: "Retaliador",
    description: "Quando você evitar dano de um inimigo (na forma de RD) com o efeito de uma de suas magias, a CD da sua próxima magia de dano lançada até o fim do seu próximo turno aumenta em +1 para cada 10 pontos de dano evitado.",
    origin: "Herois de Arton"
  },
  {
    id: "sanguessuga",
    name: "Sanguessuga",
    description: "O esotérico possui entalhes de marfim pontiagudos, semelhantes a dentes caninos. Se você lançar uma magia e um ou mais inimigos falharem no teste de resistência contra ela, você recebe 10 PV temporários.",
    origin: "Herois de Arton"
  },
  {
    id: "traicoeiro",
    name: "Traiçoeiro",
    description: "O esotérico emite um sibilar baixo e constante. Se você lançar uma magia hostil e afetar um aliado, todas as criaturas afetadas pela magia (incluindo o aliado!) sofrem –2 em seus testes de resistência. O aliado não pode ter nenhum tipo de resistência ou imunidade contra o efeito da magia, nem se beneficiar dele de nenhuma forma, para este encanto funcionar — por exemplo, uma Bola de Fogo lançada contra um aliado com redução de fogo não ativa este efeito.",
    origin: "Herois de Arton"
  },
  {
    id: "verdugo",
    name: "Verdugo",
    description: "O esotérico retira poder da morte de seus inimigos. Na primeira vez em cada cena que você reduz um inimigo a 0 PV ou menos com uma magia lançada com este esotérico, o dano causado por suas magias aumenta em +1 por dado até o fim da cena.",
    origin: "Herois de Arton"
  }
];

export const specificWeapons: SpecificWeapon[] = [
{
    id: "cajado-das-mares",
    name: "Cajado das Marés",
    description: "Este cajado arcano glacial é feito de coral azul e conchas. Você recebe deslocamento de natação 9m (se já possui deslocamento de natação, ele aumenta em +3m). Além disso, você pode gastar uma ação de movimento e 2 PM para conjurar um redemoinho que empurra todos os inimigos adjacentes 4,5m para longe de você (Ref CD Int evita).",
    price: "27.000",
    origin: "Herois de Arton"
  },
  {
    id: "calice-sagrado",
    name: "Cálice Sagrado",
    description: "Este cálice pode ser luxuoso ou humilde — de ouro e adornado com gemas, ou de barro e feitio rústico —, conforme a divindade à qual foi consagrado. O custo de suas magias divinas diminui em –2 PM e todos os efeitos variáveis delas aumentam em +1 por dado.",
    price: "150.000",
    origin: "Herois de Arton"
  },
  {
    id: "relogio-do-arcanista",
    name: "Relógio do Arcanista",
    description: "Este relógio de bolso com corpo de prata possui símbolos arcanos no lugar de números em seu mostrador, e permite manipular o tempo necessário para lançar magias arcanas. Quando lança uma magia arcana com execução de movimento, padrão ou completa, você pode gastar +4 PM para lançá-la como uma ação livre. Se você possuir o poder Magia Acelerada, em vez disso o custo para usá-lo diminui em –2 PM.",
    price: "60.000",
    origin: "Herois de Arton"
  },
  {
    id: "varinha-milenar",
    name: "Varinha Milenar",
    description: "Um esotérico ancestral, que já foi usado por diversos arquimagos ao longo da história artoniana… e absorveu um pouco do poder de cada um deles. A varinha milenar conta como uma varinha arcana, mas aumenta a CD para resistir a suas magias arcanas em +4 e aumenta todos os dados de dano de suas magias arcanas em um passo. É um item poderoso, mas exigente: se um inimigo passar em um teste de resistência contra uma magia sua, você perde 1 PV por PM gasto na magia.",
    price: "200.000",
    origin: "Herois de Arton"
  }
];