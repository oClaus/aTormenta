export interface ClassCharacteristics {
  pvBase: string; // Ex: "8 + Constituição"
  pvPerLevel: string; // Ex: "2 + Constituição"
  pmPerLevel: string; // Ex: "6 PM por nível"
}

export interface ClassSkills {
  mandatory: {
    skills: string[]; // Ex: ["Misticismo (Int)", "Vontade (Sab)"]
    description: string; // Ex: "Você começa com as seguintes perícias"
  };
  optional: {
    skills: string[]; // Ex: ["Conhecimento (Int)", "Diplomacia (Car)", ...]
    count: number; // Ex: 2
    description: string; // Ex: "Escolha mais 2 perícias"
  };
}

export interface ClassAbility {
  name: string;
  description: string;
}

export interface ClassExtra {
  title: string;
  description: string; // Use \n para quebras de linha
}

export interface FamousExample {
  name: string;
  description: string;
}

export interface GameClass {
  id: string;
  name: string;
  origin: "tormenta20 - jogo do ano" | "Dragão Brasil" | string;
  image: string;
  description: string;
  famousExamples?: string[]; // ← MUDADO: Apenas nomes
  characteristics: ClassCharacteristics;
  skills: ClassSkills; // ← MUDADO: Estrutura nova
  proficiency: string;
  abilities: ClassAbility[];
  extras?: ClassExtra[];
}