// types/rule.ts

import React from 'react'; // Adicionado import

// 1. Estrutura para a Tabela de Dificuldades (Tabela 5-1)
export interface Difficulty {
  task: string; // Ex: Fácil, Média, Difícil
  cd: number | string; // Ex: 5, 10, 15, 40
  example: string; // Ex: Saber uma encosta íngreme (Atletismo)
}

// 2. Estrutura para as Seções de Regras (Acordeão)
export interface RuleSection {
  id: string;
  title: string; // Ex: TESTES, TESTES DE ATRIBUTO, TESTES COMUNS
  // Tipo alterado para aceitar JSX em vez de string Markdown
  content: React.ReactNode; 
}

export interface ExtendedTest {
  successes: number;
  complexity: string;
  example: string;
}

export interface SpecialSituation {
  condition: string;
  modifier: string;
}

export interface ObjectStat {
  example: string;
  size: string;
  def: number;
  rd: number;
  pv: number;
}

// Novas interfaces para Idades Variadas
export interface AgeGroup {
  name: string;
  age: string;
  modifiers: string;
}

export interface AgeComplication {
  name: string;
  effect: string;
}

export interface HeroicGoal {
  name: string;
  description: string;
  benefit: string;
  penalty: string;
  conclusion: string;
}

export interface GroupRole {
  name: string;
  description: string;
  benefit: string;
}