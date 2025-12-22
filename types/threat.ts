export interface Threat {
  id: string;
  name: string;
  tipo: string;      // Ex: "Monstro Grande"
  tamanho: string;
  papel: string;
  nd: string;        // Nível de Desafio
  description: string; // Descrição/História
  
  // Imagem (Opcional, só aparece no final do modal)
  image?: string;
  
  // Estatísticas Principais
  iniciativa: number;
  percepcao: number;
  defesa: number;
  pv: number;        // Pontos de Vida
  pm?: number;
  deslocamento: string;
  
  // Resistências
  fort: number;
  ref: number;
  von: number;
  resistenciaDano?: string; // Ex: "RD 5/Corte"
  
  // Atributos
  for: String;
  des: String;
  con: String;
  int: String;
  sab: String;
  car: String;
  
  // Ataques
  ataqueCorpoACorpo?: string;
  ataqueDistancia?: string;
  
  // Listas
  habilidades: string[];
  pericias: string[];     // Ex: ["Furtividade +10", "Iniciativa +5"]
  equipamentos: string[]; // Ex: ["Espada Longa"]
  
  tesouro: string;
  
  // Opcionais (Metadados)
  origin?: string; // De onde veio (Manual, Aventura, etc)
}