// Modificador fixo: { attribute: "con", modifier: 2 }
export interface AttributeModifier {
  attribute: "for" | "des" | "con" | "int" | "sab" | "car";
  modifier: number;
}

// Modificador flexível (string): "Escolha +1 em dois atributos diferentes"
export interface FlexibleAttributeModifier {
  description: string; // Ex: "Escolha +1 em dois atributos diferentes"
}

export interface Race {
  id: string;
  name: string;
  origin: "tormenta20 - jogo do ano" | "Dragão Brasil" | string;
  image: string;
  description: string; // Use \n para quebras de linha
  abilities: string[];
  // Pode ser um array de modificadores fixos OU um array com descrição flexível
  attributeModifiers: (AttributeModifier | FlexibleAttributeModifier)[];
  longevidade?: string;
  devotos?: string;
  extra?: string;
}

// Função auxiliar para verificar se é modificador fixo
export function isFixedModifier(mod: AttributeModifier | FlexibleAttributeModifier): mod is AttributeModifier {
  return 'attribute' in mod && 'modifier' in mod;
}

// Função auxiliar para verificar se é modificador flexível
export function isFlexibleModifier(mod: AttributeModifier | FlexibleAttributeModifier): mod is FlexibleAttributeModifier {
  return 'description' in mod && !('attribute' in mod);
}