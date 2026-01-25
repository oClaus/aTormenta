export interface Condition {
  id: string;
  name: string;
  description: string; // O conteúdo completo, incluindo o símbolo † se houver
  origin: string; // Ex: "Herois de Arton"
  efeito?: string; // Usado para categorizar: "Geral", "Arcanista", "Bárbaro", etc.
}