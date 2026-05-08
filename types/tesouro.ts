export interface RollEntry {
  roll: string;
  result: string;
}

export interface TreasureND {
  nd: string;
  dinheiro: RollEntry[];
  itens: RollEntry[];
}