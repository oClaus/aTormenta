// types/weapon.ts

// Tipos de Proficiência
export type WeaponProficiency = "Simples" | "Marcial" | "Exótica" | "Fogo" ;

// Tipos de Empunhadura
export type WeaponGrip = "Leve" | "Uma Mão" | "Duas Mãos";

// Tipos de Propósito (Corpo a Corpo, Distância, Munição)
export type WeaponPurpose = "Corpo a Corpo" | "Distância" | "Munição";

// Tipos de Dano
export type DamageType = "Corte" | "Perfuração" | "Impacto";

// Interface para a Tabela de Dano de Armas (Damage Progression)
export interface DamageProgression {
  step: string; // Ex: "-2 Passos", "Normal"
  damage: string; // Ex: "1d2", "1d6"
}

// Interface para a Tabela de Armas (Weapon Stats)
export interface Weapon {
  purpose: WeaponPurpose;
  id: string;
  name: string;
  description: string; // Descrição curta para o card (com \n para quebra de linha)
  origin: string; // Ex: "Tormenta20 - Jogo do Ano", "Dragão Brasil"
  
  // Dados da Tabela 3-3
  proficiency: WeaponProficiency;
  grip: WeaponGrip;
  price: string; // Ex: "T$ 10", "T$ 15", "—"
  damage: string; // Ex: "1d6", "1d8", "1d6/1d6"
  critical: string; // Ex: "19", "x2", "x3"
  range: string; // Ex: "Curto", "Médio", "—"
  type: DamageType;
  spaces: number; // Espaços ocupados
}