export interface ClassCharacteristics {
  pvBase: string; // Ex: "8 + Constituição"
  pvPerLevel: string; // Ex: "2 + Constituição"
  pmPerLevel: string; // Ex: "6 PM por nível"
}

export interface ClassSkills {
  mandatory: string[]; // Apenas a lista de perícias
  optional: {
    skills: string[];
    count: number; // Ex: 2
  };
}

export interface SubAbility {
  name: string; // Ex: "Bruxo"
  description: string; // Descrição completa da sub-opção
}

export interface ClassAbility {
  name: string; // Ex: "Caminho do Arcanista"
  description?: string; // Descrição geral (opcional)
  subAbilities?: SubAbility[]; // Sub-opções (opcional)
}

export interface ClassExtra {
  title: string;
  description: string; // Use \n para quebras de linha
}

export interface FamousExample {
  name: string;
  description: string;
}

export interface LevelProgression {
  level: number; // 1 a 20
  abilities: string; // Ex: "Caminhos do arcanista, magias (1º círculo)"
}

export interface GameClass {
  id: string;
  name: string;
  origin: "tormenta20 - jogo do ano" | "Dragão Brasil" | string;
  image: string;
  description: string;
  famousExamples?: string[];
  characteristics: ClassCharacteristics;
  skills: ClassSkills;
  proficiency: string;
  abilities: ClassAbility[];
  levelProgression: LevelProgression[];
  extras?: ClassExtra[];
}