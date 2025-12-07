export type AlchemyType = "Preparados" | "Catalisadores" | "Venenos";

export interface Alchemy {
  id: string;
  name: string;
  type: AlchemyType;
  description: string; // Para o card de visualização rápida
  origin: string; // Ex: "Tormenta20 - Jogo do Ano"
  price: string; // Ex: "T$ 5"
  spaces: string; // Ex: 2
}