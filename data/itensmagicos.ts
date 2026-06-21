import { EquipmentCategory } from "@/types/magicitens";
import { 
  Swords, 
  Shield, 
  ScrollText, 
  Gem, 
  Flame,
  Sparkle,
  Skull
} from "lucide-react";

export const equipmentCategories: EquipmentCategory[] = [
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
  {
    id: "esotericos",
    title: "Esotéricos",
    description: "Similar as Armas Mágicas.",
    icon: Sparkle,
    color: "from-amber-600 to-amber-900",
    href: "/itens-magicos/esotericos",
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