export interface Artifact {
  id: string;
  name: string;
  description: string; // Conteúdo completo, incluindo sub-efeitos e formatação
  origin: string; // Origem da arma
  image?: string;
}