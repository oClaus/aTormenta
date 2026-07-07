import { EquipmentCategory } from "@/types/magicitens";
import { 
  Gem, 
  Sparkle,
  Skull
} from "lucide-react";

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "acessorios",
    title: "Acessórios",
    description: "Anéis, amuletos, botas e capas que concedem poderes constantes.",
    icon: Gem,
    color: "from-purple-600 to-purple-900",
    href: "/itens-magicos/acessorios",
  },
  {
    id: "amaldicoados",
    title: "Amaldiçoados",
    description: "Objetos mágicos que receberam efeitos negativos.",
    icon: Skull,
    color: "from-amber-600 to-amber-900",
    href: "/itens-magicos/amaldicoados",
  },
];