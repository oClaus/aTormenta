export interface DangerItem {
  id: string;
  name: string;
  content: string; // Conteúdo completo do perigo, incluindo sub-itens e formatação Markdown
  category: string; // Categoria principal para agrupamento (ex: "Ambiental", "Armadilha", "Doença")
}