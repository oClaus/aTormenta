import { Power } from "@/types/power";

export const powersCavaleiro: Power[] = [
  // Tormenta20 - Jogo do Ano
  { id: "Armadura da Honra",
    name: "Armadura da Honra",
    description: "No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a seu nível + seu Carisma. Os PV temporários duram até o final da cena.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Aumento de Atributo",
    name: "Aumento de Atributo",
    description: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Autoridade Feudal",
    name: "Autoridade Feudal",
    description: "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo à sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre).",
    prerequisite: "6º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Desprezar os Covardes",
    name: "Desprezar os Covardes",
    description: "Você recebe redução de dano 5 se estiver caído, desprevenido ou flanqueado.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Escudeiro",
    name: "Escudeiro",
    description: "Você recebe os serviços de um escudeiro, um parceiro especial que cuida de seu equipamento. Suas armas fornecem +1 em rolagens de dano e sua armadura concede +1 na Defesa. Além disso, você pode pagar 1 PM para receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar um item ou trazer sua montaria. O escudeiro não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com um mês de trabalho.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Especialização em Armadura",
    name: "Especialização em Armadura",
    description: "Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Bastião).",
    prerequisite: "12º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Estandarte",
    name: "Estandarte",
    description: "Sua flâmula torna-se um símbolo de inspiração. No início de cada cena, você e todos os aliados que possam ver seu estandarte recebem um número de PM temporários igual ao seu Carisma (mínimo 1). Esses pontos temporários desaparecem no final da cena.",
    prerequisite: "Título, 14º nível de cavaleiro.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Etiqueta",
    name: "Etiqueta",
    description: "Você recebe +2 em Diplomacia ou Nobreza e pode gastar 1 PM para rolar novamente um teste recém realizado de uma dessas perícias.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Investida Destruidora",
    name: "Investida Destruidora",
    description: "Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta habilidade antes de rolar o ataque.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Montaria Corajosa",
    name: "Montaria Corajosa",
    description: "Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça como parceiro).",
    prerequisite: "Montaria.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Pajem",
    name: "Pajem",
    description: "Você recebe os serviços de um pajem, um parceiro que o auxilia em pequenos afazeres. Você recebe +2 em Diplomacia, por estar sempre aprumado, e sua condição de descanso é uma categoria acima do padrão pela situação. O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com uma semana de trabalho.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Aríete Implacável",
    name: "Postura de Combate: Aríete Implacável ",
    description: "Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um construto ou objeto, causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Castigo de Ferro",
    name: "Postura de Combate: Castigo de Ferro",
    description: "Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na criatura que o atacou.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Foco de Batalha",
    name: "Postura de Combate: Foco de Batalha",
    description: "Sempre que um inimigo atacá-lo, você recebe 1 PM temporário (cumulativos). Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Muralha Intransponível",
    name: "Postura de Combate: Muralha Intransponível",
    description: "Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além disso, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumente esse bônus em +1. Por fim, enquanto mantiver esta postura, seu deslocamento é reduzido para 3m.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Provocação Petulante",
    name: "Postura de Combate: Provocação Petulante",
    description: "Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos em alcance curto devem fazer um teste de Vontade (CD Car). Se falharem, qualquer ação hostil que realizarem deve ter você como alvo (mas suas outras ações não têm esta restrição). Ações hostis incluem ataques e outras ações que causem dano e/ou condições negativas. Mental.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Postura de Combate: Torre Inabalável",
    name: "Postura de Combate: Torre Inabalável",
    description: "Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou mágica. Enquanto mantiver a postura, você não pode se deslocar, mas soma sua Constituição na Defesa e pode substituir testes de Reflexos e Vontade por testes de Fortitude.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Solidez",
    name: "Solidez",
    description: "Se estiver usando um escudo, você soma o bônus na Defesa recebido pelo escudo em testes de resistência.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Título",
    name: "Título",
    description: "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de cavaleiro (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte).",
    prerequisite: "Autoridade Feudal, 10º nível de cavaleiro, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano",
    origin: "Tormenta20 - Jogo do Ano"
  },
  { id: "Torre Armada",
    name: "Torre Armada",
    description: "Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano contra esse inimigo até o fim de seu próximo turno.",
    origin: "Tormenta20 - Jogo do Ano"
  },

  // Dragão Brasil
  { id: "Cavaleiro de Mim Mesmo",
    name: "Cavaleiro de Mim Mesmo",
    description: "Seu treinamento ultrapassa alguns limites da sua raça. Você pode escolher Combate Montado e Resistência Montada mesmo sem cumprir seus pré-requisitos. Além disso, se escolher Montaria como seu Caminho do Cavaleiro, você recebe os mesmos benefícios de um cavalo de guerra.",
    prerequisite: "centauro.",
    origin: "Dragão Brasil"
  },
  { id: "Desafio Divino",
    name: "Desafio Divino",
    description: "Sua ascendência assusta ou fascina seus inimigos. Uma vez por cena, o custo para usar Duelo diminui em –1 PM.",
    prerequisite: "suraggel.",
    origin: "Dragão Brasil"
  },
  { id: "Ginete de Javali",
    name: "Ginete de Javali",
    description: "Você é um dos poucos que aprendeu a montar uma espécie de enormes javalis, o orgulho da Guilda dos Provedores em Doherimm. Você recebe um javali doherita iniciante com o qual possui +2 em Adestramento e Cavalgar. Se escolher Montaria como seu Caminho do Cavaleiro, além dos benefícios da habilidade, você recebe +2 na Defesa enquanto estiver montado em seu javali.",
    prerequisite: "anão.",
    origin: "Dragão Brasil"
  },

  // Dragão Brasil - 200
  { id: "Estandarte do Dragão",
    name: "Estandarte do Dragão",
    description: "No início de cada cena, você e todos os aliados que possam ver seu estandarte podem jurar lealdade a um dragão como uma reação. Caso o façam, os PMs temporários recebidos por Estandarte são dobrados e sofrem –2 em testes de resistência contra habilidades de dragões.",
    prerequisite: "Coração de Dragão, Estandarte.",
    origin: "Dragão Brasil - 200"
  },
  { id: "Postura de Combate: Dragão Incansável",
    name: "Postura de Combate: Dragão Incansável",
    description: "Enquanto esta postura estiver ativa, você aumenta sua margem de crítico em dois. Sempre que obtém um acerto crítico, recupera 1 PM.",
    prerequisite: "Coração de Dragão.",
    origin: "Dragão Brasil - 200"
  },



  { id: "Armas da Cavalaria",
    name: "Armas da Cavalaria",
    description: "Você recebe +2 em testes de ataque e rolagens de dano com espadas longas e bastardas, escudos leves e pesados, lanças montadas e de justa, maças e alabardas. ",
    prerequisite: "5º nível de cavaleiro",
    origin: "Herois de Arton"
  },
  { id: "Cavaleiro das Paixões",
    name: "Cavaleiro das Paixões",
    description: "Você recebe +5 em testes de atributo para usar suas Paixões. ",
    prerequisite: "um poder de Paixão",
    origin: "Herois de Arton"
  },
  { id: "Cavaleiro Bandido",
    name: "Cavaleiro Bandido",
    description: "Você abandonou sua honra em favor de vitórias fáceis. Você perde as habilidades Código de Honra e Duelo, mas recebe Ataque Furtivo como se fosse um ladino do seu nível de cavaleiro.",
    prerequisite: "Código de Honra, Duelo",
    origin: "Herois de Arton"
  },
  { id: "Cavaleiro Sagrado",
    name: "Cavaleiro Sagrado",
    description: "Você recebe um poder de paladino cujos pré-requisitos cumpra, usando seu nível de cavaleiro como nível de paladino. ",
    prerequisite: "treinado em Religião, devoto de uma divindade que aceite paladinos",
    origin: "Herois de Arton"
  },
  { id: "Duelista Escudado",
    name: "Duelista Escudado",
    description: "Enquanto sua habilidade Duelo estiver ativa e você estiver empunhando um escudo, você recebe RD igual ao bônus concedido pela habilidade.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Duelo Irrecusável",
    name: "Duelo Irrecusável",
    description: "Enquanto sua habilidade Duelo estiver ativa, a criatura escolhida sofre uma penalidade em testes de ataque e rolagens de dano contra seus aliados igual ao bônus concedido pela habilidade.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Grão-Mestre",
    name: "Grão-Mestre",
    description: "Você é um cavaleiro lendário. Talvez seja um oficial de alto escalão — ou mesmo o líder — de uma ordem de cavalaria, talvez seja apenas um cavaleiro errante famoso no Reinado e além. Você recebe +5 em testes de Diplomacia e Nobreza e, quando ataca um inimigo contra o qual esteja recebendo os bônus de Duelo, ou quando faz uma investida, você causa dois dados de dano extras do mesmo tipo. ",
    prerequisite: "17º nível de cavaleiro",
    origin: "Herois de Arton"
  },
  { id: "Honra Compartilhada",
    name: "Honra Compartilhada",
    description: "Quando usa o poder Armadura da Honra, você pode fornecer seu benefício a todos os aliados em alcance curto. ",
    prerequisite: "Armadura da Honra",
    origin: "Herois de Arton"
  },
  { id: "Inércia do Aço",
    name: "Inércia do Aço",
    description: "Quando acerta um ataque com uma arma de duas mãos em uma criatura, você pode gastar 3 PM para causar metade do dano desse ataque a cada inimigo adjacente a essa criatura. ",
    prerequisite: "5º nível de cavaleiro",
    origin: "Herois de Arton"
  },
  { id: "Investida Convicta",
    name: "Investida Convicta",
    description: "Quando faz uma investida, você pode gastar 1 PM para somar seu Carisma nos testes de ataque e rolagens de dano dela.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Investida Defensiva",
    name: "Investida Defensiva",
    description: "Quando faz uma investida, você não sofre a penalidade de –2 na Defesa e seu deslocamento não ativa reações de inimigos (como por Ataque Reflexo).",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Mestre das Posturas",
    name: "Mestre das Posturas",
    description: "O custo para assumir uma postura de combate diminui em –1 PM e você pode assumir e manter duas posturas ao mesmo tempo. ",
    prerequisite: "dois poderes de postura, 11º nível de cavaleiro",
    origin: "Herois de Arton"
  },
  { id: "Postura de Combate: Armamento Pesado",
    name: "Postura de Combate: Armamento Pesado",
    description: "Para assumir esta postura, você precisa estar empunhando uma arma corpo a corpo de duas mãos. Você recebe +2 em Fortitude e em rolagens de dano com esta arma. Para cada PM adicional que você gastar quando assumir a postura, esse bônus aumenta em +1 (até um limite de +5). Além disso, quando acerta um ataque nesta postura, você pode empurrar o alvo 1,5m. Você precisa atacar todos os turnos para manter esta postura ativa.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Postura de Combate: Quebra-Magia",
    name: "Postura de Combate: Quebra-Magia",
    description: "Você recebe resistência a magia +2. Para cada PM adicional que você gastar quando assumir esta postura, esse bônus aumenta em +1. Além disso, uma vez por rodada, quando uma criatura em seu alcance usa uma habilidade mágica, você pode gastar 1 PM para fazer um ataque corpo a corpo contra ela.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Postura de Combate: Sequência Blindada",
    name: "Postura de Combate: Sequência Blindada",
    description: "Para assumir esta postura, você precisa estar vestindo armadura pesada. Quando faz a ação agredir, você pode fazer um ataque desarmado além de seus demais ataques.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Presença de Muralha",
    name: "Presença de Muralha",
    description: "Você pode gastar 1 PM para gerar uma aura com 9m de raio e duração sustentada. Cada inimigo que começar seu turno nessa área deve fazer um teste de Vontade (CD Car). Se falhar, seu deslocamento é reduzido à metade pela duração do efeito. Se passar, não é mais afetado por este efeito nesse dia. Medo.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Paixão: Amor",
    name: "Paixão: Amor",
    description: "Ao escolher esta Paixão, decida a quem ela vai se aplicar. Pode ser um personagem específico (como um amigo, parente ou interesse romântico) ou um grupo de pessoas (como sua família). Você pode evocar esta Paixão para extrair forças desse amor. Se passar, recupera 2d4 PM por ponto de bônus máximo que sua habilidade Duelo pode fornecer.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Paixão: Honra",
    name: "Paixão: Honra",
    description: "A principal virtude de um cavaleiro, a honra é o combustível de seus feitos. Você pode evocar esta Paixão para resistir aos mais severos ferimentos. Se passar, recupera 2d12 PV por ponto de bônus máximo que sua habilidade Duelo pode fornecer.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Paixão: Hospitalidade",
    name: "Paixão: Hospitalidade",
    description: "Para um cavaleiro, a hospitalidade vai além do abrigo físico: representa também o papel do cavaleiro como guardião daqueles ao seu redor. Você pode evocar esta Paixão para proteger seus aliados. Se passar, você emana uma aura de 6m de raio; dentro dela, você e seus aliados recebem um bônus na Defesa e em testes de resistência igual ao bônus máximo que sua habilidade Duelo pode fornecer.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
  { id: "Paixão: Lealdade",
    name: "Paixão: Lealdade",
    description: "Ao escolher esta Paixão, decida a quem sua lealdade será dedicada. Pode ser um nobre, uma organização, uma região etc. Você pode evocar esta Paixão para buscar forças nesse compromisso de fidelidade. Se passar, você recebe um bônus em testes de ataque e rolagens de dano igual ao bônus máximo que sua habilidade Duelo pode fornecer.",
    prerequisite: "",
    origin: "Herois de Arton"
  },
];