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
 
export type EquipamentoCategoria = "arma" | "armadura" | "esoter";