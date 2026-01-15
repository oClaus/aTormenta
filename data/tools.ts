import { Gear } from "@/types/gear";

// Tabela de Equipamento de Aventura
export const tool: Gear[] = [
  {
    id: "Coleção de Livros",
    name: "Coleção de Livros",
    description: "Uma pequena coleção de tomos e tratados sobre um assunto. Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido quando o item é comprado ou fabricado).",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 75",
    spaces: "1",
  },
  {
    id: "Equipamento de Viagem",
    name: "Equipamento de Viagem",
    description: "Um saco de lona contendo instrumentos úteis para sobreviver nos ermos, como pederneira (pedra para fazer fogo), panelas e talheres para cozinhar, anzól e linha para pescar e uma pequena pá. Um personagem sem este item sofre –5 em testes de Sobrevivência para fazer um acampamento. Não inclui saco de dormir ou barraca.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10",
    spaces: "1",
  },
  {
    id: "Estojo de Disfarces",
    name: "Estojo de Disfarces",
    description: "Um conjunto de cosméticos, tintas para cabelo e algumas próteses simples (como bigodes e narizes falsos). Um personagem sem este item sofre –5 em testes de Enganação para disfarce.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 50",
    spaces: "1",
  },
  {
    id: "Gazua",
    name: "Gazua",
    description: "Uma barra fina de ferro, com a ponta torta ou em forma de gancho. Um personagem sem este item sofre –5 em testes de Ladinagem para abrir fechaduras.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 5",
    spaces: "1",
  },
  {
    id: "Instrumentos de <Ofício>",
    name: "Instrumentos de <Ofício>",
    description: "Existe uma versão deste item para cada perícia de Ofício. Por exemplo, martelo, pregos e serrote para Ofício (carpinteiro), pergaminhos em branco, tinta e pena para Ofício (escriba) e assim por diante. Um personagem sem os instrumentos de seu Ofício sofre –5 nessa perícia.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 30",
    spaces: "1",
  },
  {
    id: "Luneta",
    name: "Luneta",
    description: "Este instrumento valioso consiste de um cilindro metálico com duas lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 100",
    spaces: "1",
  },
  {
    id: "Maleta de Medicamentos",
    name: "Maleta de Medicamentos",
    description: "Caixa de madeira com ervas, unguentos, bandagens e outros materiais úteis. Um personagem sem este item sofre –5 em Cura.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 50",
    spaces: "1",
  },
  {
    id: "Sela",
    name: "Sela",
    description: "Uma peça de couro e pelego colocada sobre o lombo da montaria, sobre a qual o cavaleiro se senta. Inclui arreios para conduzir o animal. Um personagem montado em uma montaria sem sela sofre –5 em testes de Cavalgar. Usada no animal, a sela não ocupa espaço de carga do personagem.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 20",
    spaces: "1",
  },
  {
    id: "apito-de-caca",
    name: "Apito de Caça",
    description: "Este pequeno apito fornece +1 em Adestramento e permite usar manejar animal com um parceiro não inteligente (Int –4 ou –5) como ação livre uma vez por rodada.",
    origin: "Herois de Arton",
    price: "T$ 6",
    spaces: "1"
  },
  {
    id: "baralho-marcado",
    name: "Baralho Marcado",
    description: "Um baralho com marcações sutis, que só o usuário é capaz de reconhecer. Uma inspeção casual não revela nada além de um baralho comum. Você recebe +2 em testes de Jogatina com cartas. Contudo, se rolar 1 natural em um teste de Jogatina com este baralho, você é descoberto, o que pode levar a uma bela briga de taverna...",
    origin: "Herois de Arton",
    price: "T$ 15",
    spaces: "1"
  },
  {
    id: "espelho-cirurgico",
    name: "Espelho Cirúrgico",
    description: "Uma haste de metal ou madeira com um espelho na ponta, dotada de mecanismos que permitem controlar o ângulo do reflexo a partir da outra extremidade. Muito usado por médicos de campo que só podem contar consigo mesmos para suturar seus ferimentos. Se estiver usando um espelho cirúrgico, você não sofre a penalidade de –5 em testes de Cura em si mesmo.",
    origin: "Herois de Arton",
    price: "T$ 12",
    spaces: "1"
  },
  {
    id: "estandarte",
    name: "Estandarte",
    description: "Um pedaço de tecido, geralmente retangular e com enfeites, com uma representação do brasão ou símbolo de uma família, senhor feudal ou deus. Montado em uma estrutura de madeira reforçada com metal, precisa ser empunhado com uma mão. Se você estiver empunhando um estandarte, seus capangas recebem +1 na Defesa e em rolagens de dano.",
    origin: "Herois de Arton",
    price: "T$ 15",
    spaces: "1"
  },
  {
    id: "estandarte-portatil",
    name: "Estandarte Portátil",
    description: "Igual ao estandarte, mas feito para ser usado nas costas ou preso à sela de uma montaria. Deixa as mãos livres. Contudo, se estiver preso às costas, impõe uma penalidade de armadura de –2 e, se estiver preso à montaria, conta como um item vestido dela.",
    origin: "Herois de Arton",
    price: "T$ 20",
    spaces: "1"
  },
  {
    id: "molde-pre-fabricado",
    name: "Molde Pré-Fabricado",
    description: "A maior parte das engenhocas usa alguns princípios básicos, modificados e personalizados por cada inventor. Um molde pré-fabricado é um conjunto de peças já montadas, presentes em diversos tipos de engenhocas. Existe um molde para cada escola de magias. Usar um molde pré-fabricado diminui o tempo de fabricação de uma engenhoca que simule uma magia da respectiva escola para três dias.",
    origin: "Herois de Arton",
    price: "T$ 500",
    spaces: "1"
  }

];