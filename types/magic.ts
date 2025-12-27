export interface Enchantment {
  id: string;
  name: string;
  description: string;
  origin: string; // Origem do encantamento (e.g., "Manual Básico", "Suplemento X")
}

export interface SpecificWeapon {
  id: string;
  name: string;
  description: string; // Conteúdo completo, incluindo sub-efeitos e formatação
  price: string;
  origin: string; // Origem da arma
}