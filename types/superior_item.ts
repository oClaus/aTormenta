// types/superior_item.ts

// Tipos de itens que podem receber melhorias
export type ItemCategory = 
  "Arma" | 
  "Armadura" | 
  "Escudo" | 
  "Esotérico" | 
  "Vestuário" | 
  "Ferramenta" | 
  "Munição" | 
  "Qualquer";

export type MaterialType = 
  "Aço-Rubi" | 
  "Adamante" | 
  "Gelo Eterno" | 
  "Madeira Tollon" | 
  "Matéria Vermelha" | 
  "Mitral";

export type MaterialItemCategory = 
  "Arma" | 
  "Armadura Leve" | 
  "Armadura Pesada" | 
  "Escudo" | 
  "Esotéricos";

export interface MaterialPrice {
  itemCategory: MaterialItemCategory;
  "Aço-Rubi": string;
  "Adamante": string;
  "Gelo Eterno": string;
  "Madeira Tollon": string;
  "Matéria Vermelha": string;
  "Mitral": string;
}

// Tabela 3-7: Preço de Melhorias
export interface PriceImprovement {
  level: number; // Nível da melhoria (1 a 4)
  priceIncrease: string; // Aumento no Preço (Ex: "+ T$ 300")
  cdIncrease: string; // Aumento na CD (Ex: "+5")
}

// Tabela 3-8: Melhorias
export interface Improvement {
  id: string;
  name: string;
  effect: string;
  category: ItemCategory[]; // Onde a melhoria pode ser aplicada
  description: string; // Descrição detalhada para o card (AGORA OBRIGATÓRIO)
  origin?: string;
}