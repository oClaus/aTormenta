import { Power } from "@/types/power";

export const powersVampiro: Power[] = [
  { id: "Cura Acelerada",
    name: "Cura Acelerada",
    description: "No início de cada um dos seus turnos, você pode gastar 1 PM para recuperar 5 PV. A partir do 11º nível a cura aumenta para 10 PV por PM gasto.",
    origin: "Bestiário de Arton"
  },
  { id: "Dominação Vampírica",
    name: "Dominação Vampírica",
    description: "Você pode gastar uma ação completa e 3 PM para sussurrar palavras de controle para um humanoide em alcance curto. O alvo fica confuso, enfeitiçado ou fascinado até o final da cena ou perde suas memórias da última hora, à sua escolha (Vontade CD Car evita). Uma criatura só pode ser alvo desta habilidade uma vez por cena. ",
    prerequisite: "Presença Majestosa.",
    origin: "Bestiário de Arton"
  },
  { id: "Drenar Sangue",
    name: "Drenar Sangue",
    description: "Você pode gastar uma ação padrão para drenar sangue de uma criatura viva que esteja agarrando. Você causa 2d6 pontos de dano de perfuração por patamar e recupera a mesma quantidade de PV. Drenar sangue dessa forma não conta como se alimentar.",
    origin: "Bestiário de Arton"
  },
  { id: "Forma de Lobo",
    name: "Forma de Lobo",
    description: "Você pode gastar uma ação padrão e 3 PM para se transformar em um lobo. Isso funciona como o efeito básico da Forma Selvagem Feroz, exceto que você se torna Médio (se já não for), recebe +3m em seu deslocamento e a arma natural recebida é uma mordida que causa 1d6 pontos de dano (se já tiver uma mordida, em vez disso, o dano dela aumenta em um passo).",
    origin: "Bestiário de Arton"
  },
  { id: "Forma de Morcego",
    name: "Forma de Morcego",
    description: "Você pode gastar uma ação padrão e 3 PM para se transformar em um morcego. Isso funciona como o efeito básico da Forma Selvagem Veloz, exceto que você se torna Minúsculo, seu deslocamento se torna 3m, você recebe deslocamento de voo 12m e não recebe uma arma natural, Por fim, a transformação termina caso você faça um ataque, lance uma magia ou sofra dano.",
    origin: "Bestiário de Arton"
  },
  { id: "Garras",
    name: "Garras",
    description: "Suas mãos são duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
    origin: "Bestiário de Arton"
  },
  { id: "Manto das Sombras",
    name: "Manto das Sombras",
    description: "Você pode lançar Invisibilidade, mas apenas em você. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
    prerequisite: "5º nível de personagem",
    origin: "Bestiário de Arton"
  },
  { id: "Passo Vampírico",
    name: "Passo Vampírico",
    description: "Você recebe +3m em seu deslocamento e deslocamento de escalada igual ao seu deslocamento padrão.",
    origin: "Bestiário de Arton"
  },
  { id: "Predador Sorrateiro",
    name: "Predador Sorrateiro",
    description: "Você recebe +5 em testes de Furtividade e não sofre penalidade de armadura nesta perícia.",
    origin: "Bestiário de Arton"
  },
  { id: "Presença Majestosa",
    name: "Presença Majestosa",
    description: "Você recebe a habilidade Presença Aristocrática. Se já possuir essa habilidade, seu custo diminui em –1 PM e a CD para resistir a ela aumenta em +2.",
    origin: "Bestiário de Arton"
  },
  { id: "Resiliência Sombria",
    name: "Resiliência Sombria",
    description: "Você recebe redução de dano 5/luz.",
    prerequisite: "Presença Majestosa, 5º nível de personagem",
    origin: "Bestiário de Arton"
  },
  
  
];