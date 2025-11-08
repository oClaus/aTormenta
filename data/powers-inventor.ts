import { Power } from "@/types/power";

export const powersInventor: Power[] = [
  {
    id: "1",
    name: "Agite Antes de Usar",
    description: "Quando usa um preparado alquímico que cause dano, você pode gastar uma quantidade de PM à sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo.",
    prerequisite: "treinado em Ofício (alquimista).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Ajuste de Mira",
    description: " Você pode gastar uma ação padrão e uma quantidade de PM à sua escolha (limitado pela sua Inteligência) para aprimorar uma arma de ataque à distância. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.",
    prerequisite: "Balística.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Alquimista de Batalha",
    description: "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano.",
    prerequisite: "Alquimista Iniciado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Alquimista Iniciado",
    description: "Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Veja as regras de poções. ",
    prerequisite: "Int 1, Sab 1, treinado em Ofício (alquimista).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Armeiro",
    description: "Você recebe proficiência com armas marciais corpo a corpo. Quando empunha uma arma corpo a corpo, pode usar sua Inteligência em vez de Força nos testes de ataque e rolagens de dano.",
    prerequisite: "treinado em Luta e Ofício (armeiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Ativação Rápida",
    description: "Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, em vez disto.",
    prerequisite: "Engenhoqueiro, 7º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Autômato",
    description: "Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo à sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100.",
    prerequisite: "Engenhoqueiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Autômato Prototipado",
    description: "Você pode gastar uma ação padrão e 2 PM para ativar uma melhoria experimental em seu autômato. Role $1d6$. Em um resultado 2 a 6, você aumenta o nível de parceiro do autômato em um passo (até mestre), ou concede a ele a habilidade iniciante de outro de seus tipos, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca. ",
    prerequisite: "Autômato.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Balística",
    description: "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano). ",
    prerequisite: "treinado em Pontaria e Ofício (armeiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Blindagem",
    description: "Você pode usar sua Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso.",
    prerequisite: "Couraceiro, 8º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Cano Raiado",
    description: "Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça.",
    prerequisite: "Balística, 5º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Catalisador Instável",
    description: " Você pode gastar uma ação completa e 3 PM para fabricar um preparado alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimista), mas ele só dura até o fim da cena.",
    prerequisite: "Alquimista Iniciado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Chutes e Palavrões",
    description: "Uma vez por rodada, você pode pagar 1 PM para repetir um teste de Ofício (engenhoqueiro) recém realizado para ativar uma engenhoca.",
    prerequisite: "Engenhoqueiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Conhecimento de Fórmulas",
    description: "Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser.",
    prerequisite: "Alquimista Iniciado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Couraceiro",
    description: "Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode usar sua Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada).",
    prerequisite: "treinado em Ofício (armeiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Engenhoqueiro",
    description: "Você pode fabricar engenhocas. Veja as regras para isso. ",
    prerequisite: "Int 3, treinado em Ofício (engenhoqueiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Farmacêutico",
    description: "Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM à sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo.",
    prerequisite: "Sab 1, treinado em Ofício (alquimista).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Ferreiro",
    description: "Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo.",
    prerequisite: "Armeiro, 5º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Granadeiro",
    description: "Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar sua Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens.",
    prerequisite: "Alquimista de Batalha.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "21",
    name: "Homúnculo",
    description: "Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance longo e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho pode fazer. Um homúnculo é um parceiro ajudante iniciante. Você pode perder $1d6$ pontos de vida para seu homúnculo assumir uma forma capaz de protegê-lo e se tornar também um parceiro guardião iniciante até o fim da cena.",
    prerequisite: "Alquimista Iniciado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "22",
    name: "Invenção Potente",
    description: "Quando usa um item ou engenhoca fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "23",
    name: "Maestria em Perícia",
    description: "Escolha um número de perícias treinadas igual à sua Inteligência, exceto bônus temporários. Com essas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "24",
    name: "Manutenção Eficiente",
    description: "A quantidade de engenhocas que você pode manter aumenta em +3. Além disso, cada engenhoca passa a ocupar meio espaço.",
    prerequisite: "Engenhoqueiro, 5º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "25",
    name: "Mestre Alquimista",
    description: "Você pode fabricar poções com fórmulas que conheça de qualquer círculo.",
    prerequisite: "Int 3, Sab 3, Alquimista Iniciado, 10º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "26",
    name: "Mestre Cuca",
    description: "Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1.",
    prerequisite: "treinado em Ofício (cozinheiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "27",
    name: "Mistura Fervilhante",
    description: "Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele. ",
    prerequisite: "Alquimista Iniciado, 5º nível de inventor.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "28",
    name: "Oficina de Campo",
    description: "Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos aumentam seu bônus na Defesa em +1. Os benefícios duram um dia.",
    prerequisite: "treinado em Ofício (armeiro).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "29",
    name: "Pedra de Amolar",
    description: "Você pode gastar uma ação de movimento e uma quantidade de PM à sua escolha (limitado por sua Inteligência) para aprimorar uma arma corpo a corpo que esteja empunhando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.",
    prerequisite: "Armeiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "30",
    name: "Síntese Rápida",
    description: "Quando fabrica um item alquímico ou poção, você pode fabricar o dobro de doses no mesmo tempo (pagando o custo de matéria-prima de cada uma).",
    prerequisite: "Alquimista Iniciado.",
    origin: "Tormenta20 - Jogo do Ano"
  }

];