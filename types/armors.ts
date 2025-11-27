// types/armor.ts

export type ArmorType = "Leve" | "Pesada" | "Escudo";

export interface Armor {
  id: string;
  name: string;
  type: ArmorType;
  description: string; // Para o card de visualização rápida
  origin: string; // Ex: "Tormenta20 - Jogo do Ano"
  
  // Dados da Tabela 3-5
  price: string; // Ex: "T$ 5"
  defenseBonus: number; // Ex: +1
  armorPenalty: number; // Ex: 0 ou -1
  spaces: number; // Ex: 2
}