// types/gear.ts

export type GearCategory = 'Alimentação' | 'Bebida' | 'Ingrediente';

export interface Gear {
  id: string;
  name: string;
  description: string;
  origin: string;
  
  // Dados Básicos
  price: string;
  spaces: string;

  // Novos dados para Culinária Avançada
  category?: GearCategory; // Para separar nas tabelas
  ingredients?: string;    // Ex: "Carne, cogumelo, leite"
  cookingCost?: string;    // Custo para fabricar (Ex: "T$ 22")
  cookingDC?: string;      // Dificuldade do teste (Ex: "20")
}