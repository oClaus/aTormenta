import { Power } from "@/types/power";

export const powersGeraisDestino: Power[] = [
  {
    id: "1",
    name: "Acrobático",
    description: "Você pode usar sua Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas. ",
    prerequisite: "Des 2.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Ao Sabor do Destino",
    description: "Confiando em suas próprias habilidades (ou em sua própria sorte), você abre mão de usar itens mágicos. Sua autoconfiança fornece diversos benefícios, de acordo com seu nível de personagem e a tabela no final da página. Os bônus não são cumulativos (os bônus em atributos e perícias devem ser aplicados num atributo ou perícia diferente a cada vez). Se você utilizar voluntariamente qualquer item mágico (exceto poções), perde o benefício deste poder até o fim da aventura. Você ainda pode lançar magias, receber magias benéficas ou beneficiar-se de itens usados por outros — por exemplo, pode “ir de carona” em um tapete voador, mas não pode você mesmo conduzi-lo. ",
    prerequisite: "6º nível de personagem.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "3",
    name: "Aparência Inofensiva",
    description: "A primeira criatura inteligente (Int –3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Atlético",
    description: "Você recebe +2 em Atletismo e +3m em seu deslocamento.",
    prerequisite: "For 2.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "5",
    name: "Atraente",
    description: "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "6",
    name: "Comandar",
    description: "Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "7",
    name: "Costas Largas",
    description: "Seu limite de carga aumenta em 5 espaços e você pode se beneficiar de um item vestido adicional.",
    prerequisite: "Con 1, For 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "8",
    name: "Foco em Perícia",
    description: "Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma).",
    prerequisite: " treinado na perícia escolhida.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "9",
    name: "Inventário Organizado",
    description: "Você soma sua Inteligência no limite de espaços que pode carregar. Para você, itens muito leves ou pequenos, que normalmente ocupam meio espaço, em vez disso ocupam 1/4 de espaço.",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "10",
    name: "Investigador",
    description: "Você recebe +2 em Investigação e soma sua Inteligência em Intuição.",
    prerequisite: "Int 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "11",
    name: "Lobo Solitário",
    description: "Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar Cura em si mesmo.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "12",
    name: "Medicina",
    description: "Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura. ",
    prerequisite: "Sab 1, treinado em Cura.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "13",
    name: "Parceiro",
    description: "Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Em termos de jogo, é um parceiro iniciante de um tipo à sua escolha (veja página de parceiros). O parceiro obedece às suas ordens e se arrisca para ajudá-lo, mas, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.",
    prerequisite: "treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 5º nível de personagem.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "14",
    name: "Sentidos Aguçados",
    description: "Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha. ",
    prerequisite: "Sab 1, treinado em Percepção.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "15",
    name: "Sortudo",
    description: "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "16",
    name: "Surto Heroico",
    description: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "17",
    name: "Torcida",
    description: "Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você. ",
    prerequisite: "Car 1.",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "18",
    name: "Treinamento em Perícia",
    description: "Você se torna treinado em uma perícia à sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.",
    prerequisite: "",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "19",
    name: "Venefício",
    description: "Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.",
    prerequisite: "treinado em Ofício (alquimista).",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "20",
    name: "Vontade de Ferro",
    description: "Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade. ",
    prerequisite: "Sab 1.",
    origin: "Tormenta20 - Jogo do Ano"
  }

];