// types/dominio-construcoes.ts

export type PericiaConstrucao =
  | "Nobreza"
  | "Guerra"
  | "Enganação"
  | "Religião"
  | "Misticismo";

export interface DomainConstruction {
  id: string;
  name: string;
  cost: number; // em LO
  pericia: PericiaConstrucao;
  benefit: string; // resumo curto, como aparece na tabela
  description: string; // texto completo da construção
  prerequisite?: string; // ex: "Forte", "Terreno floresta", "Bazar, Estrada"
}
