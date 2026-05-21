// types/tesouro.ts

export interface RollEntry {
  min: number;
  max: number;
  result: string;
}

export interface TreasureND {
  nd: string;
  dinheiro: RollEntry[];
  itens: RollEntry[];
}

export interface SubItem {
  min: number;
  max: number;
  result: string;
}

export interface CatEntry {
  min: number;
  max: number;
  label: string;
}

// Removido o [key: string]: unknown.
// O TypeScript aceitará atributos extras (como 'exemplos' ou 'preco') por inferência estrutural nativa.
export type AnyTableEntry =
  | { readonly min: number; readonly max: number; readonly result: string }
  | { readonly min: number; readonly max: number; readonly label: string };