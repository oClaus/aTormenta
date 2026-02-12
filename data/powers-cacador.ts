import { Power } from "@/types/power";

export const powersCacador: Power[] = [
  { id: "Ambidestria",
    name: "Ambidestria",
    description: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
    prerequisite: "Des 2",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilha: Arataca",
    name: "Armadilha: Arataca",
    description: "A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilha: Espinhos",
    name: "Armadilha: Espinhos",
    description: "A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilha: Laço",
    name: "Armadilha: Laço",
    description: "A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilha: Rede",
    name: "Armadilha: Rede",
    description: "Todas as criaturas na área ficam enredadas e não podem sair da área. Uma vítima pode se libertar com uma ação padrão e um teste de Força ou Acrobacia (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil. Nesta armadilha você escolhe quantas criaturas precisam estar na área para ativá-la.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilheiro",
    name: "Armadilheiro",
    description: "Você soma sua Sabedoria no dano e na CD de suas armadilhas (cumulativo).",
    prerequisite: "Um poder de armadilha, 5º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Arqueiro",
    name: "Arqueiro",
    description: "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível).",
    prerequisite: "Sab 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Aumento de Atributo",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Bote",
    name: "Bote",
    description: "Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária.",
    prerequisite: "Ambidestria, 6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Camuflagem",
    name: "Camuflagem",
    description: "Você pode gastar 2 PM para se esconder mesmo sem camuflagem ou cobertura disponível.",
    prerequisite: "6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Chuva de Lâminas",
    name: "Chuva de Lâminas",
    description: "Uma vez por rodada, quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária.",
    prerequisite: "Des 4, Ambidestria, 12º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Companheiro Animal",
    description: "Você recebe um companheiro animal.",
    prerequisite: "Car 1, treinado em Adestramento.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Elo com a Natureza",
    description: "Você soma sua Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria).",
    prerequisite: "Sab 1, 3º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Emboscar",
    description: "Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.",
    prerequisite: "treinado em Furtividade.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Empatia Selvagem",
    description: "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e persuasão.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Escaramuça",
    description: "Quando se move 6m ou mais, você recebe +2 na Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada.",
    prerequisite: "Des 2, 6º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Escaramuça Superior",
    description: "Quando usa Escaramuça, seus bônus aumentam para +5 na Defesa e Reflexos e +1d12 em rolagens de dano.",
    prerequisite: "Escaramuça, 12º nível de caçador.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Espreitar",
    description: "Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Ervas Curativas",
    description: "Você pode gastar uma ação completa e uma quantidade de PM à sua escolha (limitado por sua Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Ímpeto",
    name: "Ímpeto",
    description: "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Inimigo de (Criatura)",
    name: "Inimigo de (Criatura)",
    description: "Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Olho do Falcão",
    name: "Olho do Falcão",
    description: "Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Ponto Fraco",
    name: "Ponto Fraco",
    description: "Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Armadilha Alquímica",
    name: "Armadilha Alquímica",
    description: "Quando prepara uma armadilha, você pode gastar uma dose de um preparado alquímico. Se fizer isso, as criaturas afetadas pela armadilha também sofrem os efeitos desse preparado automaticamente. ",
    prerequisite: "Armadilheiro",
    origin: "Herois de Arton"
  },
  { id: "Avanço do Predador",
    name: "Avanço do Predador",
    description: "Uma vez por rodada, quando uma criatura marcada por sua Marca da Presa se afasta voluntariamente de você, você pode gastar 1 PM para se mover na direção dela (até o limite do seu deslocamento). ",
    prerequisite: "Ímpeto, 11° nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Batedor Marcial",
    name: "Batedor Marcial",
    description: "Você pode usar testes de Sobrevivência no lugar de testes de Guerra. Além disso, se passar em um teste para analisar terreno, além de quaisquer benefícios encontrados, na próxima vez que usar Marca da Presa nessa cena você recupera 1 PM.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Curandeiro dos Ermos",
    name: "Curandeiro dos Ermos",
    description: "Você pode usar Ervas Curativas como uma ação de movimento e os dados de cura dessa habilidade aumentam para d8. ",
    prerequisite: "Ervas Curativas",
    origin: "Herois de Arton"
  },
  { id: "Elo Com a Natureza Maior",
    name: "Elo Com a Natureza Maior",
    description: "Escolha duas magias entre Abençoar Alimentos, Acalmar Animal, Alarme, Aviso, Conjurar Armadilhas, Detectar Ameaças, Orientação ou Suporte Ambiental. Você aprende e pode lançar as magias escolhidas (atributo-chave Sabedoria) e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida do seu nível. Você pode escolher este poder mais vezes para magias diferentes. ",
    prerequisite: "Elo com a Natureza",
    origin: "Herois de Arton"
  },
  { id: "Explorador Viajado",
    name: "Explorador Viajado",
    description: "Você pode escolher dois tipos de terrenos extras para sua habilidade Explorador. Você pode escolher este poder mais vezes para tipos de terrenos adicionais. ",
    prerequisite: "5º nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Flecheiro",
    name: "Flecheiro",
    description: "Você pode usar Sobrevivência no lugar de Ofício para fabricar munições e pode fabricar munições com uma melhoria. ",
    prerequisite: "3° nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Golpe do Predador",
    name: "Golpe do Predador",
    description: "Se você causar dano em uma criatura analisada por sua Marca da Presa, ela fica sangrando. Se ela já estiver sangrando, a perda de vida por sangramento aumenta em um passo (cumulativo até um máximo de d12) e ela falha automaticamente em seu próximo teste de Constituição para remover essa condição.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Herói do Povo",
    name: "Herói do Povo",
    description: "Você recebe +2 na Defesa e em testes de resistência. Além disso, sempre que acertar um ataque em um vilão que esteja ameaçando pessoas comuns (um bandido assolando camponeses, um nobre tirano, um monstro devorando viajantes...), você recebe 2 PM temporários. Você pode receber um número máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena. ",
    prerequisite: "5º nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Identificar Presas",
    name: "Identificar Presas",
    description: "Você pode identificar criaturas como uma ação de movimento. Além disso, se passar nesse teste, para cada informação obtida você recebe +1 em rolagens de dano contra criaturas dessa espécie até o fim da cena.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Lâminas Guardiãs",
    name: "Lâminas Guardiãs",
    description: "Enquanto você estiver empunhando duas armas corpo a corpo, recebe +2 na Defesa e em testes de resistência contra inimigos em seu alcance natural. ",
    prerequisite: "Ambidestria, 5° nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Lanceiro",
    name: "Lanceiro",
    description: "Você recebe +2 em testes de ataque e rolagens de dano com lanças (exceto lanças montadas e de justa). Além disso, se estiver empunhando uma dessas armas com as duas mãos, seu dano com ela aumenta em um passo e ela é considerada uma arma alongada.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Pega!",
    name: "Pega!",
    description: "Você pode gastar uma ação de movimento e 1 PM para fazer a manobra agarrar contra uma criatura em alcance curto usando Adestramento em vez de Luta, usando seu companheiro animal para isso. Se o alvo estiver sob efeito de sua Marca da Presa, você soma os dados dessa habilidade como um bônus no teste. A criatura permanece agarrada até vencer um teste de manobra contra seu companheiro animal (como acima) ou até você mandar seu animal soltá-la (uma ação livre). ",
    prerequisite: "Companheiro Animal",
    origin: "Herois de Arton"
  },
  { id: "Primeiro Sangue",
    name: "Primeiro Sangue",
    description: "Na primeira rodada de cada combate, você recebe +2 em testes de ataque e todos os seus dados de dano aumentam em dois passos. ",
    prerequisite: "Emboscar",
    origin: "Herois de Arton"
  },
  { id: "Sequência Dilaceradora",
    name: "Sequência Dilaceradora",
    description: "Quando usa Ambidestria, se acertar ambos os ataques, você pode gastar 1 PM para causar +2d8 pontos de dano no segundo ataque. ",
    prerequisite: "Ambidestria, 11° nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Sequência do Predador",
    name: "Sequência do Predador",
    description: "Quando usa Ambidestria com armas que causam tipos de dano diferentes, se acertar ambos os ataques, você pode gastar 1 PM para fazer uma manobra entre desarmar, derrubar ou quebrar contra o mesmo alvo. ",
    prerequisite: "Ambidestria, 8° nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Sombra dos Ermos",
    name: "Sombra dos Ermos",
    description: "Você pode gastar uma ação de movimento e 1 PM para receber camuflagem leve com duração sustentada. ",
    prerequisite: "Camuflagem",
    origin: "Herois de Arton"
  },
  { id: "Tiro de Abate",
    name: "Tiro de Abate",
    description: "Quando usa a ação mirar, até o fim do turno você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância, e os dados extras de sua habilidade Marca da Presa também são multiplicados em caso de acerto crítico. ",
    prerequisite: "Sab 1, Espreitar",
    origin: "Herois de Arton"
  },
  { id: "Tiro Trespassante",
    name: "Tiro Trespassante",
    description: "Quando você faz um ataque à distância com uma arma de disparo e reduz os pontos de vida do alvo a 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura que esteja adiante na mesma linha, usando a mesma arma e munição do ataque original.",
    prerequisite: "Arqueiro",
    origin: "Herois de Arton"
  },
  { id: "Tempestade de Lâminas",
    name: "Tempestade de Lâminas",
    description: "Quando usa Chuva de Lâminas, você pode fazer um ataque adicional com sua arma secundária (para um total de quatro ataques na ação). ",
    prerequisite: "Chuva de Lâminas, 17º nível de caçador",
    origin: "Herois de Arton"
  },
  { id: "Tocaia Habilidosa",
    name: "Tocaia Habilidosa",
    description: "Sua Marca da Presa também fornece +1 na CD de suas habilidades contra a criatura marcada para cada PM gasto. Esse bônus dobra com a habilidade Inimigo.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Último Sangue",
    name: "Último Sangue",
    description: "Seus ataques contra criaturas sangrando causam um dado extra de dano do mesmo tipo. ",
    prerequisite: "5º nível de caçador",
    origin: "Herois de Arton"
  },
  
];