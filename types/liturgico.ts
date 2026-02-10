export type LiturgicalType = "Acessório Maior" | "Acessório menor" | "Arma específica maior" | "Acessório médio" | "Armadura específica média" | "Arma específica média" | "Arma específica menor ";

export interface Liturgical {
  id: string;
  name: string;
  type: LiturgicalType;
  description: string; // Para o card de visualização rápida
  origin: string; // Ex: "Deuses de Arton"
  price: string; // Ex: "T$ 5"
}