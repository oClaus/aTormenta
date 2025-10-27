import { Origin } from "@/types/origin";

export const origins: Origin[] = [
  {
    id: "1",
    name: "Acólito",
    description: "Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.",
    items: [
      "Símbolo Sagrado",
      "Traje de Sacerdote",
    ],
    benefits: [
      " Cura, Religião, Vontade (perícias);",
      " Medicina, Membro da Igreja, Vontade de Ferro (poderes).",
    ],
    uniquePower: {
      name: "Membro da Igreja",
      description: "Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "2",
    name: "Amaldiçoado",
    description: "Uma maldição ancestral segue sua linhagem, trazendo tanto desafios quanto poderes únicos.",
    items: [
      "Amuleto da Maldição",
      "Grimório Antigo"
    ],
    benefits: [
      "+2 em Misticismo",
      "Resistência a magia de maldição",
      "Visão do Sobrenatural"
    ],
    uniquePower: {
      name: "Olhar Maldito",
      description: "Você pode amaldiçoar um inimigo que possa ver. Ele sofre penalidade de -1 em todos os testes por 1 minuto."
    },
    source: "Dragão Brasil"
  },
  {
    id: "3",
    name: "Escolhido",
    description: "Você foi escolhido por uma divindade ou poder superior para cumprir um destino especial.",
    items: [
      "Arma Sagrada",
      "Armadura Brilhante",
      "Insígnia do Destino"
    ],
    benefits: [
      "+1 em todos os testes de ataque",
      "Imunidade a medo",
      "Liderança inspiradora"
    ],
    uniquePower: {
      name: "Destino Manifesto",
      description: "Uma vez por dia, você pode relançar um teste que falhou. Você deve usar o novo resultado."
    },
    source: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "4",
    name: "Exilado",
    description: "Você foi banido de sua terra natal e agora busca redenção ou vingança em terras estranhas.",
    items: [
      "Mapa do Exílio",
      "Carta de Banimento",
      "Ouro Roubado"
    ],
    benefits: [
      "+2 em Furtividade",
      "Conhecimento de múltiplas culturas",
      "Sobrevivência em ambientes hostis"
    ],
    uniquePower: {
      name: "Fantasma do Passado",
      description: "Você pode se tornar invisível por 1 rodada uma vez por dia. Você não pode atacar enquanto invisível."
    },
    source: "Atlas de Arton"
  },
  {
    id: "5",
    name: "Herdeiro",
    description: "Você é o herdeiro de uma linhagem nobre ou poderosa, carregando consigo o peso da herança.",
    items: [
      "Brasão da Família",
      "Anel de Herança",
      "Documento de Linhagem"
    ],
    benefits: [
      "+1 em Diplomacia",
      "Acesso a recursos familiares",
      "Reconhecimento em certos círculos"
    ],
    uniquePower: {
      name: "Privilégio de Sangue",
      description: "Uma vez por dia, você pode invocar o nome de sua família para obter vantagem em um teste de Diplomacia ou Intimidação."
    },
    source: "Tormenta20 - Jogo do Ano"
  }
];