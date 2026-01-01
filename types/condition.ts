export interface Condition {
  id: string;
  name: string;
  description: string; // Conteúdo completo, incluindo sub-efeitos e formatação
  origin: string; // Origem da arma
  efeito?: string;
}