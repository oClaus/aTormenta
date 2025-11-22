import { InitialMoneyEntry, EquipmentCategory } from "@/types/equipment";


// Tabela 3-1: Dinheiro Inicial
export const initialMoneyTable: InitialMoneyEntry[] = [
  { level: "1º", money: "4d6" },
  { level: "2º", money: "300" },
  { level: "3º", money: "600" },
  { level: "4º", money: "1.000" },
  { level: "5º", money: "2.000" },
  { level: "6º", money: "3.000" },
  { level: "7º", money: "5.000" },
  { level: "8º", money: "7.000" },
  { level: "9º", money: "10.000" },
  { level: "10º", money: "13.000" },
  { level: "11º", money: "19.000" },
  { level: "12º", money: "27.000" },
  { level: "13º", money: "36.000" },
  { level: "14º", money: "49.000" },
  { level: "15º", money: "66.000" },
  { level: "16º", money: "88.000" },
  { level: "17º", money: "110.000" },
  { level: "18º", money: "150.000" },
  { level: "19º", money: "200.000" },
  { level: "20º", money: "260.000" },
];

// Categorias de Equipamentos (para o grid)
export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "armas",
    title: "Armas",
    description: "Espadas, machados, arcos e tudo que causa dano.",
    icon: "⚔️",
    color: "from-red-600 to-red-900",
    href: "/equipamentos/armas",
  },
];