import { EquipmentCategory } from "@/types/magicitens";
import { 
  Swords, 
  Shield, 
  ScrollText, 
  Gem, 
  Flame 
} from "lucide-react";

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "armas",
    title: "Armas",
    description: "Espadas, machados e arcos imbuídos com poder arcano ou divino.",
    icon: Swords,
    color: "from-red-600 to-red-900", // Mantido para compatibilidade, mesmo se não usar direto
    href: "/itens-magicos/armas",
  },
  {
    id: "armaduras",
    title: "Armaduras & Escudos",
    description: "Proteções forjadas com encantamentos para defletir os golpes mais mortais.",
    icon: Shield,
    color: "from-blue-600 to-blue-900",
    href: "/itens-magicos/armaduras",
  },
  {
    id: "pocoes",
    title: "Poções & Pergaminhos",
    description: "Magias engarrafadas e escrituras antigas de uso único.",
    icon: ScrollText,
    color: "from-green-600 to-green-900",
    href: "/itens-magicos/pocoes",
  },
  {
    id: "acessorios",
    title: "Acessórios",
    description: "Anéis, amuletos, botas e capas que concedem poderes constantes.",
    icon: Gem,
    color: "from-purple-600 to-purple-900",
    href: "/itens-magicos/acessorios",
  },
  {
    id: "artefatos",
    title: "Artefatos",
    description: "Relíquias lendárias, únicas e de poder incomensurável.",
    icon: Flame, // Flame combina com a temática da Tormenta/Rubi
    color: "from-amber-600 to-amber-900",
    href: "/itens-magicos/artefatos",
  },
];