export interface Food {
  id: string;
  name: string;
  description: string;
  price: string;
  cd?: number;
  rarity: 
    | "comum" 
    | "incomum" 
    | "raro" 
    | "lendário" 
    | "final-fantasy"
    | "monstruosa";
  effects?: string;
}

