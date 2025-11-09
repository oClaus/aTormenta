import { Power } from "@/types/power";

export const powersNobre: Power[] = [
  {
    id: "1",
    name: "Armadura Brilhante",
    description: "Você pode usar seu Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso.",
    prerequisite: "8º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Autoridade Feudal",
    description: "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo à sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre).",
    prerequisite: "6º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Educação Privilegiada",
    description: "Você se torna treinado em duas perícias de nobre à sua escolha.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Estrategista",
    description: "Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu Carisma). No próximo turno do aliado, ele ganha uma ação de movimento.",
    prerequisite: "Int 1, treinado em Guerra, 6º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Favor",
    description: "Você pode usar sua influência para pedir favores a pessoas poderosas. Isso gasta 5 PM e uma hora de conversa e bajulação, ou mais, de acordo com o mestre, e funciona como o uso persuasão de Diplomacia. Porém, você pode pedir favores ainda mais caros, difíceis ou perigosos — um convite para uma festa particular, uma carona de barco até Galrasia ou mesmo acesso aos planos militares do reino. Se você falhar, não pode pedir o mesmo favor por pelo menos uma semana.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "General",
    description: "Quando você usa o poder Estrategista, aliados direcionados recebem $1d4$ PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM.",
    prerequisite: "Estrategista, 12º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Grito Tirânico",
    description: "Você pode usar Palavras Afiadas como uma ação completa, em vez de padrão. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto.",
    prerequisite: "8º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Inspirar Confiança",
    description: "Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode gastar 2 PM para fazer com que ele possa rolar esse teste novamente.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Inspirar Glória",
    description: "A presença de um nobre motiva as pessoas a realizarem grandes façanhas. Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado.",
    prerequisite: "Inspirar Confiança, 8º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Jogo da Corte",
    description: "Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia, Intuição ou Nobreza.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Liderar pelo Exemplo",
    description: "Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio.",
    prerequisite: "6º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Língua de Ouro",
    description: "Você pode gastar uma ação padrão e 4 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas.",
    prerequisite: "Língua de Prata, 8º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Língua de Prata",
    description: "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual à metade do seu nível.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Língua Rápida",
    description: "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Presença Majestosa",
    description: "Sua Presença Aristocrática passa a funcionar contra qualquer criatura com valor de Inteligência (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem Int). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena.",
    prerequisite: "16º nível de nobre.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Título",
    description: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de nobre (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte).",
    prerequisite: "Autoridade Feudal, 10º nível de nobre, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Voz Poderosa",
    description: "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
];