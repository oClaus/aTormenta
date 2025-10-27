export interface Origin {
  id: string;
  name: string;
  description: string;
  items: string[];
  benefits: string[];
  uniquePower: {
    name: string;
    description: string;
  };
  source: "Tormenta20 - Jogo do Ano" | "Dragão Brasil" | "Atlas de Arton" | string;
}