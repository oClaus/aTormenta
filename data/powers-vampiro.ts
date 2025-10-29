import { Power } from "@/types/power";

export const powersVampiro: Power[] = [
  {
    id: "1",
    name: "Cura Acelerada",
    description: "No início de cada um dos seus turnos, você pode gastar 1 PM para recuperar 5 PV. A partir do 5º nível, você pode escolher esta bênção uma segunda vez para aumentar a cura para 10 PV por PM gasto",
    origin: "Dragão Brasil"
  },
  {
    id: "2",
    name: "Dominação Vampírica",
    description: "Você pode gastar uma ação completa e 3 PM para sussurrar palavras de controle para um humanoide em alcance curto. O alvo fica confuso, enfeitiçado ou fascinado até o final da cena ou perde suas memórias da última hora, à sua escolha (Vontade CD Car evita). Uma criatura só pode ser alvo desta habilidade uma vez por cena. ",
    prerequisite: "Presença Majestosa.",
    origin: "Dragão Brasil"
  },
  {
    id: "3",
    name: "Drenar Sangue",
    description: "Você pode gastar uma ação padrão para drenar sangue de uma criatura viva que esteja agarrando. Você causa 2d6 pontos de dano de perfuração por patamar e recupera a mesma quantidade de PV. Drenar sangue dessa forma conta como se alimentar (veja Dieta de Sangue ao final da página).",
    origin: "Dragão Brasil"
  },
  {
    id: "4",
    name: "Forma de Lobo",
    description: "Você pode gastar uma ação padrão e 3 PM para se transformar em um lobo. Isso conta como o efeito básico da Forma Selvagem Feroz; exceto que você se torna Médio (se já não for), recebe +3m em seu deslocamento e, no lugar da arma natural, recebe uma arma natural de mordida que causa 1d6 pontos de dano (se já tiver uma mordida, em vez disso o dano dela aumenta em um passo).",
    origin: "Dragão Brasil"
  },
  {
    id: "5",
    name: "Forma de Morcego",
    description: "Você pode gastar uma ação padrão e 3 PM para se transformar em um morcego. Você se torna Minúsculo (+5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de voo 12m. Seu equipamento é absorvido (retornando quando você volta ao normal) e suas outras estatísticas não são alteradas. A transformação dura quanto tempo você desejar, mas termina caso faça um ataque, lance uma magia ou sofra dano.",
    origin: "Dragão Brasil"
  },
  {
    id: "6",
    name: "Garras",
    description: "Suas mãos são duas armas naturais de garras (dano 1d6 cada, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com uma arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com uma das garras, desde que ela esteja livre e não tenha sido usada para atacar neste turno. Como alternativa, se tiver habilidades que exijam uma arma secundária (como Estilo de Duas Armas), você pode usá-las com suas garras.",
    origin: "Dragão Brasil"
  },
  {
    id: "7",
    name: "Manto das Sombras",
    description: "Você pode lançar Invisibilidade, mas apenas em você. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
    origin: "Dragão Brasil"
  },
  {
    id: "8",
    name: "Passo Vampírico",
    description: "Você recebe +3m de deslocamento e deslocamento de escalada igual ao seu deslocamento padrão.",
    origin: "Dragão Brasil"
  },
  {
    id: "9",
    name: "Presença Majestosa",
    description: "Você recebe a habilidade Presença Aristocrática. Se já possuir essa habilidade, seu custo diminui em –1 PM e a CD para resistir a ela aumenta em +2.",
    origin: "Dragão Brasil"
  },
  {
    id: "10",
    name: "Resiliência Sombria",
    description: "Você recebe redução de dano 5/luz.",
    prerequisite: "Presença Majestosa.",
    origin: "Dragão Brasil"
  },
  
  
];