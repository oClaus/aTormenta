// types/skill.ts

// Interface para a estrutura de tabelas
export interface SkillTable {
  headers: string[];
  rows: string[][];
}

// Interface para as funções/usos de uma perícia
export interface SkillFunction {
  title: string; 
  description: string; 
  table?: SkillTable; // Adicionado: Tabela opcional
  footer?: string;    // Adicionado: Texto opcional que vem abaixo da tabela
}

// Interface principal para a Perícia
export interface Skill {
  id: string;
  name: string;
  attribute: string; 
  trainedOnly: boolean; 
  armorPenalty: boolean; 
  description: string; 
  functions: SkillFunction[]; 
}

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