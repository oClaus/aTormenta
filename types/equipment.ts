export interface InitialMoneyEntry {
  level: string; // Ex: "1º", "2º", "11º"
  money: string; // Ex: "4d6", "300", "19.000"
}

// Interface para as Categorias de Equipamentos (para o grid)
export interface EquipmentCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Caminho para o ícone ou emoji
  color: string; // Classes Tailwind para o gradiente de cor
  href: string; // Caminho para a subpágina (Ex: /equipamentos/armas)
}