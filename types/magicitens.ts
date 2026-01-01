import { ElementType } from "react";


export interface EquipmentCategory {
  id: string;
  title: string;
  description: string;
  icon: ElementType; // Caminho para o ícone ou emoji
  color: string; // Classes Tailwind para o gradiente de cor
  href: string; // Caminho para a subpágina (Ex: /equipamentos/armas)
}