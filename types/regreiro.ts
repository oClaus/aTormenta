// types/regreiro.ts

export interface RegreiroQA {
  id: string;
  question: string; // Pergunta enviada. Use \n para pular linha / criar parágrafos.
  answer: string;   // Resposta oficial do Tribunal. Use \n para pular linha / criar parágrafos.
  magazineNumber: number; // Apenas o número da edição, ex: 228 (a página escreve "Dragão Brasil - 228" sozinha)
}

// Formata o número da edição no rótulo completo.
export function formatMagazine(magazineNumber: number): string {
  return `Dragão Brasil - ${magazineNumber}`;
}