export interface SpecificAccessory {
  id: string;
  name: string;
  description: string; // Conteúdo completo, incluindo sub-efeitos e formatação
  price: string;
  size: "Menor" | "Médio" | "Maior";
  origin: string; // Origem da arma
}

export interface Enchantment {
  id: string;
  name: string;
  description: string;
  origin: string; // Origem do encantamento (e.g., "Manual Básico", "Suplemento X")
}