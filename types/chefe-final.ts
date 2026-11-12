// types/chefe-final.ts

// Habilidade de uma parte do vilão modular
export interface FinalBossAbility {
  name: string;
  action?: string; // ex: "Padrão", "Movimento", "Completa", "Reação". Sem valor = habilidade passiva
  text: string;
}

// Fonte de poder (arquétipo Mestre da Fonte)
export interface PowerSource {
  id: string;
  name: string;
  text: string;
}

// Emanação (arquétipo Mestre da Fonte)
export interface Emanation {
  id: string;
  name: string;
  description: string;
  note?: string; // observação extra (ex: magia que ajuda contra a emanação)
  benefits: string;
  stages: [string, string, string]; // estágios 1, 2 e 3
}

// Parte (arquétipo Vilão Modular)
export interface ModularPart {
  id: string;
  name: string;
  description: string;
  abilities: FinalBossAbility[];
}
