import { Armor, ArmorType } from "@/types/armors";

// Texto Introdutório (Para ser inserido diretamente no page.tsx)
export const armorIntroText = {
  title: "Armaduras & Escudos",
  sections: [
    {
      title: "Armaduras",
      content: `Armaduras são classificadas em **leves e pesadas**, de acordo com a sua facilidade de uso e mobilidade.`,
    },
    {
      title: "Armaduras Leves",
      content: `Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma **ação completa**.`,
    },
    {
      title: "Armaduras Pesadas",
      content: `Feitas de cota de malha ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, **você não aplica sua Destreza na Defesa** e tem seu **deslocamento reduzido em 3m**. Vestir ou remover uma armadura pesada **demora cinco minutos**. **Dormir de armadura pesada deixa você fatigado pelo dia**.`,
    },
    {
      title: "Escudos",
      content: `Existem escudos **leves** e **pesados**. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma **ação de movimento**.`,
    },
    {
      title: "Ataque com Escudo",
      content: `Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas **perde seu bônus na Defesa até seu próximo turno** se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos **não contam como armas**.`,
    },
    {
      title: "Penalidade por Não Proficiência",
      content: `Um personagem vestindo uma armadura ou empunhando escudo que não saiba usar aplica a **penalidade da armadura em todas as perícias baseadas em Força e Destreza**.`,
    },
    {
      title: "Características das Armaduras e Escudos",
      content: `
        **Preço.** Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.
        **Bônus na Defesa.** Cada armadura fornece um bônus na Defesa do usuário. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas **não dois escudos**.
        **Penalidade de Armadura.** Aplique a penalidade de armadura em testes de **Acrobacia, Furtividade e Ladinagem** (e em testes de **Atletismo para natação**). Penalidades de armaduras e escudos se acumulam.
        **Espaço.** Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.
      `,
    },
  ],
};

// Tabela 3-5: Armaduras & Escudos
export const armors: Armor[] = [
  // --- Armaduras Leves ---
  {
    id: "armadura-acolchoada",
    name: "Armadura acolchoada",
    type: "Leve",
    description: "A armadura mais básica, feita de tecido acolchoado. Oferece proteção mínima.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 5",
    defenseBonus: 1,
    armorPenalty: 0,
    spaces: 2,
  },
  {
    id: "armadura-de-couro",
    name: "Armadura de couro",
    type: "Leve",
    description: "Feita de couro curtido e endurecido. É a armadura leve mais comum.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 20",
    defenseBonus: 2,
    armorPenalty: 0,
    spaces: 2,
  },
  {
    id: "couro-batido",
    name: "Couro batido",
    type: "Leve",
    description: "Couro fervido em cera ou óleo para maior rigidez. Boa proteção para armadura leve.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 35",
    defenseBonus: 3,
    armorPenalty: -1,
    spaces: 2,
  },
  {
    id: "gibao-de-peles",
    name: "Gibão de peles",
    type: "Leve",
    description: "Feito de peles grossas e couro. Oferece boa proteção, mas é um pouco mais restritivo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 25",
    defenseBonus: 4,
    armorPenalty: -3,
    spaces: 2,
  },
  {
    id: "couraca",
    name: "Couraça",
    type: "Leve",
    description: "Placa de metal que protege o tronco, com o resto em couro. O máximo em armadura leve.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 500",
    defenseBonus: 5,
    armorPenalty: -4,
    spaces: 2,
  },
  // --- Armaduras Pesadas ---
  {
    id: "brunea",
    name: "Brunea",
    type: "Pesada",
    description: "Armadura de metal mais leve, feita de anéis costurados em couro.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 50",
    defenseBonus: 5,
    armorPenalty: -2,
    spaces: 5,
  },
  {
    id: "cota-de-malha",
    name: "Cota de malha",
    type: "Pesada",
    description: "Feita de milhares de anéis de metal interligados. Oferece excelente proteção.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 150",
    defenseBonus: 6,
    armorPenalty: -2,
    spaces: 5,
  },
  {
    id: "loriga-segmentada",
    name: "Loriga segmentada",
    type: "Pesada",
    description: "Feita de tiras de metal sobrepostas. Boa proteção e flexibilidade relativa.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 250",
    defenseBonus: 7,
    armorPenalty: -3,
    spaces: 5,
  },
  {
    id: "meia-armadura",
    name: "Meia armadura",
    type: "Pesada",
    description: "Combinação de cota de malha e placas de metal. Proteção superior.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 600",
    defenseBonus: 8,
    armorPenalty: -4,
    spaces: 5,
  },
  {
    id: "armadura-completa",
    name: "Armadura completa",
    type: "Pesada",
    description: "O auge da proteção. Placas de metal cobrem o corpo inteiro.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 3.000",
    defenseBonus: 10,
    armorPenalty: -5,
    spaces: 5,
  },
  // --- Escudos ---
  {
    id: "escudo-leve",
    name: "Escudo leve",
    type: "Escudo",
    description: "Pequeno e fácil de manusear. Pode ser usado com armas de uma mão.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 5",
    defenseBonus: 1,
    armorPenalty: -1,
    spaces: 1,
  },
  {
    id: "escudo-pesado",
    name: "Escudo pesado",
    type: "Escudo",
    description: "Grande e robusto. Oferece mais proteção, mas é mais restritivo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 15",
    defenseBonus: 2,
    armorPenalty: -2,
    spaces: 2,
  },
];