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
    default:
      return "";
  }
}

export function getStatusColor(status?: GodStatus): string {
  switch (status) {
    case "caido":
      return "from-red-600 to-red-900";
    case "menor":
      return "from-amber-600 to-amber-900";
    default:
      return "from-purple-600 to-purple-900";
  }
}