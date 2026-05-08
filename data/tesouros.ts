import { TreasureND } from "@/types/tesouro";

export const tesouros: TreasureND[] = [
  {
    nd: "1/4",
    dinheiro: [
      { roll: "01-30", result: "—" },
      { roll: "31-70", result: "1d6x10 TC" },
      { roll: "71-95", result: "1d4x100 TC" },
      { roll: "96-100", result: "1d6x10 T$" }
    ],
    itens: [
      { roll: "01-50", result: "—" },
      { roll: "51-75", result: "Diverso" },
      { roll: "76-100", result: "Equipamento" }
    ]
  },
  {
    nd: "1/2",
    dinheiro: [
      { roll: "01-25", result: "—" },
      { roll: "26-70", result: "2d6x10 TC" },
      { roll: "71-95", result: "2d8x10 T$" },
      { roll: "96-100", result: "1d4x100 T$" }
    ],
    itens: [
      { roll: "01-45", result: "—" },
      { roll: "46-70", result: "Diverso" },
      { roll: "71-100", result: "Equipamento" }
    ]
  },
  {
    nd: "1",
    dinheiro: [
      { roll: "01-20", result: "—" },
      { roll: "21-70", result: "3d8x10 T$" },
      { roll: "71-95", result: "4d12x10 T$" },
      { roll: "96-100", result: "1 riqueza menor" }
    ],
    itens: [
      { roll: "01-40", result: "—" },
      { roll: "41-65", result: "Diverso" },
      { roll: "66-90", result: "Equipamento" },
      { roll: "91-100", result: "1 poção" }
    ]
  },
  {
    nd: "2",
    dinheiro: [
      { roll: "01-15", result: "—" },
      { roll: "16-55", result: "3d10x10 T$" },
      { roll: "56-85", result: "2d4x100 T$" },
      { roll: "86-95", result: "2d6+1x100 T$" },
      { roll: "96-100", result: "1 riqueza menor" }
    ],
    itens: [
      { roll: "01-30", result: "—" },
      { roll: "31-40", result: "Diverso" },
      { roll: "41-70", result: "Equipamento" },
      { roll: "71-90", result: "1 poção" },
      { roll: "91-100", result: "Superior (1 melhoria)" }
    ]
  }
];