export interface Partner {
  id: string;
  name: string;
  description: string; // Descrição geral do tipo de parceiro
  origin: string; // Origem da informação (Ex: "Tormenta20 - Jogo do Ano")

  // NOVO — opcional, parceiros antigos podem ficar sem categoria por enquanto
  category?: "arquetipo" | "especifico";

  // NOVO — preenchido apenas quando category === "especifico"
  // Ex: "Vilão derrotado na campanha 'Galhos que Nunca Soltam'"
  specificSource?: string;

  // Benefícios por nível
  benefits: {
    iniciante: string;
    veterano: string;
    mestre: string;
  };
}

export type PartnerCategory = NonNullable<Partner["category"]>;

export function formatPartnerCategory(category?: PartnerCategory): string | null {
  if (category === "especifico") return "Específico";
  if (category === "arquetipo") return "Arquétipo";
  return null;
}