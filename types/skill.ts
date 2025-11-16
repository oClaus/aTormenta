// types/skill.ts

// Interface para as funções/usos de uma perícia
export interface SkillFunction {
  title: string; // Ex: Amortecer Queda (CD 15, Apenas Treinado).
  description: string; // O texto detalhado da função
}

// Interface principal para a Perícia
export interface Skill {
  id: string;
  name: string;
  attribute: string; // Ex: Des (Destreza), Car (Carisma)
  trainedOnly: boolean; // Se a perícia só pode ser usada se for treinada
  armorPenalty: boolean; // Se sofre penalidade de armadura
  description: string; // Descrição geral da perícia (primeiro parágrafo)
  functions: SkillFunction[]; // Lista de usos/funções da perícia
}

/**
 * Função auxiliar para formatar o status da perícia (Ex: Des • Treinada • Armadura)
 * @param skill A perícia a ser formatada
 * @returns A string formatada
 */
export function formatSkillStatus(skill: Skill): string {
    let status = `${skill.attribute}`;
    
    if (skill.trainedOnly) {
        status += " • Treinada";
    }
    
    if (skill.armorPenalty) {
        status += " • Armadura";
    }
    
    return status;
}