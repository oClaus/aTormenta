export interface Partner {
  id: string;
  name: string;
  description: string; // Descrição geral do tipo de parceiro
  origin: string; // Origem da informação (Ex: "Tormenta20 - Jogo do Ano")
  
  // Benefícios por nível
  benefits: {
    iniciante: string;
    veterano: string;
    mestre: string;
  };
}