export type GodStatus = "normal" | "caido" | "menor";

export interface God {
  id: string;
  name: string;
  subtitle?: string;
  image: string | string[];
  status?: GodStatus; // "caido" ou "menor"

  otherNames?: string;      // NOVO
  areasOfInfluence?: string;// NOVO
  significantColors?: string;// NOVO
  motto?: string;           // NOVO

  history: string;
  beliefs: string;
  sacredSymbol: string;
  channelEnergy: string;
  preferredWeapon: string;
  devotees: string;
  grantedPowers: string[];
  obligationsRestrictions: string;

  motivations?: string;     // NOVO
  relationships?: string;   // NOVO
  churchAndClergy?: string; // NOVO
}

export function getStatusLabel(status?: GodStatus): string {
  switch (status) {
    case "caido":
      return "Caído";
    case "menor":
      return "Menor";
    case "normal":
      return "Panteão";
    default:
      return "";
  }
}

export function getStatusColor(status?: GodStatus): string {
  switch (status) {
    case "caido":
      return "bg-[#7f1d1d] border-red-900"; // Vermelho
    case "menor":
      return "bg-amber-700 border-amber-900"; // Âmbar
    case "normal":
    default:
      return "bg-purple-800 border-purple-950"; // Roxo para Panteão
  }
}