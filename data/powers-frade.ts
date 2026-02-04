import { Power } from "@/types/power";

export const powersFrade: Power[] = [
  {
    id: "Acelerar Sacrário",
    name: "Acelerar Sacrário",
    description: "Quando cria um sacrário, você pode gastar +2 PM para criá-lo como uma ação de movimento (em vez de uma ação padrão).",
    prerequisite: "5º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Ampliar Sacrário",
    name: "Ampliar Sacrário",
    description: "Você pode criar sacrários em alcance médio e eles passam a ocupar uma esfera de 6m de raio.",
    prerequisite: "10º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Aumento de Atributo",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    origin: "Deuses de Arton"
  },
  {
    id: "Autoridade Eclesiástica",
    name: "Autoridade Eclesiástica",
    description: "Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com sua divindade (veja a p. 22).",
    prerequisite: "5º nível de frade, devoto de um deus maior.",
    origin: "Deuses de Arton"
  },
  {
    id: "Bênção Fortalecedora",
    name: "Bênção Fortalecedora",
    description: "Quando você lança Bênção, os aliados abençoados recebem uma quantidade de PV temporários igual a 5 vezes o bônus em testes de ataque fornecido pela magia. Esses PV temporários duram enquanto a magia durar.",
    prerequisite: "Bênção.",
    origin: "Deuses de Arton"
  },
  {
    id: "Canto Monástico",
    name: "Canto Monástico",
    description: "Você pode gastar uma ação padrão e 1 PM para entoar um cântico religioso. Faça um teste de Atuação para ajudar (Tormenta20, p. 221). Seus aliados em alcance curto recebem um bônus igual ao bônus de ajuda em um teste de perícia feito até o fim da cena ou na CD para resistir a uma de suas habilidades usada até o fim da cena.",
    prerequisite: "treinado em Atuação.",
    origin: "Deuses de Arton"
  },
  {
    id: "Comunhão Vital",
    name: "Comunhão Vital",
    description: "Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original.",
    origin: "Deuses de Arton"
  },
  {
    id: "Copista",
    name: "Copista",
    description: "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, pode fabricar o dobro de pergaminhos ao mesmo tempo (pagando o custo de matéria-prima de ambos).",
    prerequisite: "treinado em Ofício (escriba).",
    origin: "Deuses de Arton"
  },
  {
    id: "Conhecimento Mágico",
    name: "Conhecimento Mágico",
    description: "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.",
    origin: "Deuses de Arton"
  },
  {
    id: "Cozinheiro da Abadia",
    name: "Cozinheiro da Abadia",
    description: "Quando prepara um prato especial, você pode combinar os efeitos de dois pratos. Você faz apenas um teste de Ofício, mas paga o custo de ambos.",
    prerequisite: "treinado em Ofício (cozinheiro).",
    origin: "Deuses de Arton"
  },
  {
    id: "Estudante Diligente",
    name: "Estudante Diligente",
    description: "No começo do dia você pode escolher uma perícia em que não seja treinado. Se fizer isso, até o fim do dia você sofre uma penalidade de –2 PM, mas pode fazer testes da perícia escolhida como se fosse treinado nela.",
    origin: "Deuses de Arton"
  },
  {
    id: "Fé e Razão",
    name: "Fé e Razão",
    description: "Quando usa uma habilidade de frade, você pode gastar uma quantidade de PM limitada por sua Inteligência. Se fizer isso, a CD dessa habilidade aumenta em +1 por PM gasto.",
    origin: "Deuses de Arton"
  },
  {
    id: "Mago Branco",
    name: "Mago Branco",
    description: "Suas magias de cura de luz custam –1 PM e curam +1 PV por dado de cura.",
    prerequisite: "3º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Memorizar Liturgia",
    name: "Memorizar Liturgia",
    description: "Uma vez por dia, você pode gastar 1 hora de estudo e um número de pergaminhos que contenham magias divinas igual ou menor que sua Inteligência. Até o fim do dia, você pode lançar as magias contidas nesses pergaminhos como se as conhecesse ou, se já conhecia a magia, você soma sua Inteligência no limite de PM para lançá-la.",
    prerequisite: "Copista, 8º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Ofício do Mosteiro",
    name: "Ofício do Mosteiro",
    description: "Você pode fabricar itens de vestuário com Ofício (artesão) e pode usar essa perícia para fabricar itens com uma melhoria.",
    prerequisite: "treinado em Ofício (artesão).",
    origin: "Deuses de Arton"
  },
  {
    id: "Psicografia",
    name: "Psicografia",
    description: "Seus textos recebem inspiração divina. Você pode fabricar pergaminhos de qualquer magia divina (mesmo uma que não conheça) de quaisquer círculos a que tenha acesso. A CD para fabricar um desses pergaminhos aumenta em +5.",
    prerequisite: "Copista, 5º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário da Erudição",
    name: "Sacrário da Erudição",
    description: "Quando lançam magias a partir de pergaminhos, você e seus aliados dentro do sacrário recebem +1 PM para gastar em aprimoramentos (mesmo que não conheçam a magia).",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário da Misericórdia",
    name: "Sacrário da Misericórdia",
    description: "No início dos seus turnos, cada criatura a sua escolha dentro do sacrário recupera uma quantidade de PV igual a 5 + sua Sabedoria. Este sacrário tem duração sustentada.",
    prerequisite: "5º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário da Resiliência",
    name: "Sacrário da Resiliência",
    description: "Você e seus aliados dentro do sacrário recebem +2 em testes de resistência e na Defesa. Quando cria este sacrário, você pode gastar mais PM para fortalecer seu efeito; para cada 2 PM adicionais gastos, o bônus concedido pelo sacrário aumenta em +1 (bônus máximo limitado pelo círculo máximo de magias que você pode lançar).",
    prerequisite: "5º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário da Solenidade",
    name: "Sacrário da Solenidade",
    description: "Criaturas dentro da área ficam sob condição terrível para lançar magias e sofrem –2 na Defesa. Quando cria este sacrário você pode gastar mais PM para fortalecer seu efeito; para cada 2 PM adicionais gastos, a penalidade causada pelo sacrário aumenta em 1 (penalidade máxima limitada pelo círculo máximo de magias que você pode lançar).",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário da Verdade",
    name: "Sacrário da Verdade",
    description: "Sempre que uma criatura na área passa em um teste de Acrobacia, Enganação, Furtividade ou Ladinagem, ou acerta um ataque contra uma criatura sob efeito de uma ou mais condições, ela sofre 2d6 pontos de dano psíquico por círculo de magia a que você tem acesso.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário das Sombras",
    name: "Sacrário das Sombras",
    description: "A área do sacrário é coberta por sombras; criaturas dentro dela recebem camuflagem leve e, se forem mortos-vivos, também recebem +2 na Defesa e em testes de perícia.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário do Compartilhamento",
    name: "Sacrário do Compartilhamento",
    description: "Este sacrário tem duração sustentada. Quando lança uma magia de 1º ou 2º círculo que tenha apenas você como alvo, se estiver em alcance curto deste sacrário você pode gastar 2 PM para que um aliado dentro dele receba o efeito básico dessa magia.",
    prerequisite: "7º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sacrário do Ocaso",
    name: "Sacrário do Ocaso",
    description: "Este sacrário é criado com 60 pontos de ocaso. No início de seus turnos, o sacrário perde 1d10 pontos de ocaso, e cada criatura dentro dele perde esse valor em PV. A perda de PV aumenta em +1d10 para cada círculo de magia que você possa lançar além do 1º. Quando cria o sacrário, você pode gastar mais PM para fortalecer seu efeito; para cada PM adicional gasto, o sacrário é criado com +20 pontos de ocaso. O sacrário desaparece quando seus pontos de ocaso terminam.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sermão da Celeridade",
    name: "Sermão da Celeridade",
    description: "Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado.",
    prerequisite: "8º nível de frade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Sermão da Égide",
    name: "Sermão da Égide",
    description: "Você pode gastar uma ação padrão e 3 PM para orar por proteção para uma criatura em alcance curto. Até o seu próximo turno, quando essa criatura sofrer dano, ela pode gastar essa proteção para reduzir esse dano à metade.",
    origin: "Deuses de Arton"
  },
  {
    id: "Teologia Aplicada",
    name: "Teologia Aplicada",
    description: "Escolha duas perícias. Quando faz um teste de uma dessas perícias (exceto testes de ataque), você pode gastar 1 PM para rolar novamente esse teste, usando Religião. Você pode escolher este poder outras vezes para perícias diferentes.",
    origin: "Deuses de Arton"
  },
  {
    id: "Transferir Sacrário",
    name: "Transferir Sacrário",
    description: "Você pode gastar uma ação de movimento e 1 PM para transferir um de seus sacrários no alcance em que você pode criá-lo para outro ponto no mesmo alcance.",
    origin: "Deuses de Arton"
  },
  {
    id: "Zelador dos Vinhedos",
    name: "Zelador dos Vinhedos",
    description: "Você pode usar Ofício (cozinheiro) para preparar poções de magias que você conheça e cujo alvo seja 1 criatura. As poções tomam a forma de bebidas e seguem as regras desses itens (Heróis de Arton, Capítulo 3), exceto que ingeri-las é uma ação padrão. A bebida pode ser comum ou especial. No segundo caso, a CD para fabricá-la aumenta em +5 e o custo aumenta conforme a bebida especial, mas consumi-la gera ambos os efeitos (da poção e da bebida especial).",
    prerequisite: "treinado em Ofício (cozinheiro).",
    origin: "Deuses de Arton"
  }
];