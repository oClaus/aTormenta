export interface SpecificAccessory {
  id: string;
  name: string;
  description: string; // Conteúdo completo, incluindo sub-efeitos e formatação
  price: string;
  size: "Menor" | "Médio" | "Maior";
  origin: string; // Origem da arma
}