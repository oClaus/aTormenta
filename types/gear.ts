// types/gear.ts

export interface Gear {
  id: string;
  name: string;
  description: string; // Para o card de visualização rápida
  origin: string; // Ex: "Tormenta20 - Jogo do Ano"
  
  // Dados da Tabela
  price: string; // Ex: "T$ 10" ou "T$ 0,1"
  spaces: string; // Ex: "0,5", "1", "—"
}