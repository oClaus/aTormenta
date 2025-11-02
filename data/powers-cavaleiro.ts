import { Power } from "@/types/power";

export const powersCavaleiro: Power[] = [
  {
    id: "1",
    name: "Armadura da Honra",
    description: "No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a seu nível + seu Carisma. Os PV temporários duram até o final da cena.",
    prerequisite: "",
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
    prerequisite: "6º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Desprezar os Covardes",
    description: "Você recebe redução de dano 5 se estiver caído, desprevenido ou flanqueado.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Escudeiro",
    description: "Você recebe os serviços de um escudeiro, um parceiro especial que cuida de seu equipamento. Suas armas fornecem +1 em rolagens de dano e sua armadura concede +1 na Defesa. Além disso, você pode pagar 1 PM para receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar um item ou trazer sua montaria. O escudeiro não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com um mês de trabalho.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Especialização em Armadura",
    description: "Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Bastião).",
    prerequisite: "12º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Estandarte",
    description: "Sua flâmula torna-se um símbolo de inspiração. No início de cada cena, você e todos os aliados que possam ver seu estandarte recebem um número de PM temporários igual ao seu Carisma (mínimo 1). Esses pontos temporários desaparecem no final da cena.",
    prerequisite: "Título, 14º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Etiqueta",
    description: "Você recebe +2 em Diplomacia ou Nobreza e pode gastar 1 PM para rolar novamente um teste recém realizado de uma dessas perícias.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Investida Destruidora",
    description: "Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta habilidade antes de rolar o ataque.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Montaria Corajosa",
    description: "Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça como parceiro).",
    prerequisite: "Montaria.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Pajem",
    description: "Você recebe os serviços de um pajem, um parceiro que o auxilia em pequenos afazeres. Você recebe +2 em Diplomacia, por estar sempre aprumado, e sua condição de descanso é uma categoria acima do padrão pela situação. O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com uma semana de trabalho.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Postura de Combate: Aríete Implacável ",
    description: "Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um construto ou objeto, causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Postura de Combate: Castigo de Ferro",
    description: "Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na criatura que o atacou.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Postura de Combate: Foco de Batalha",
    description: "Sempre que um inimigo atacá-lo, você recebe 1 PM temporário (cumulativos). Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Postura de Combate: Muralha Intransponível",
    description: "Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além disso, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumente esse bônus em +1. Por fim, enquanto mantiver esta postura, seu deslocamento é reduzido para 3m.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Postura de Combate: Provocação Petulante",
    description: "Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos em alcance curto devem fazer um teste de Vontade (CD Car). Se falharem, qualquer ação hostil que realizarem deve ter você como alvo (mas suas outras ações não têm esta restrição). Ações hostis incluem ataques e outras ações que causem dano e/ou condições negativas. Mental.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Postura de Combate: Torre Inabalável",
    description: "Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou mágica. Enquanto mantiver a postura, você não pode se deslocar, mas soma sua Constituição na Defesa e pode substituir testes de Reflexos e Vontade por testes de Fortitude.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Solidez",
    description: "Se estiver usando um escudo, você soma o bônus na Defesa recebido pelo escudo em testes de resistência.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Título",
    description: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de cavaleiro (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte).",
    prerequisite: "Autoridade Feudal, 10º nível de cavaleiro, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Torre Armada",
    description: "Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano contra esse inimigo até o fim de seu próximo turno.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  }
];