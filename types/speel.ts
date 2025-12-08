
export type SpellType = "Arcana" | "Divina" | "Universal";
export type SpellSchool = 
  "Abjuração" | 
  "Adivinhação" | 
  "Convocação" | 
  "Encantamento" | 
  "Evocação" | 
  "Ilusão" | 
  "Necromancia" | 
  "Transmutação";

export interface Spell {
  id: string;
  name: string;
  type: SpellType;
  school: SpellSchool;
  circle: number; // 1 a 5
  execution: string; // Ex: Padrão, Movimento, Reação
  range: string; // Ex: Curto, Médio, Longo, Pessoal
  target: string; // Ex: 1 Criatura, Área, Você
  duration: string; // Ex: Instantânea, 1 Rodada, Sustentada
  resistance: string; // Ex: Vontade, Fortitude, Reflexos, Nenhuma
  description: string; // Descrição principal da magia
  origin: string; // Origem da informação (Ex: "Tormenta20 - Jogo do Ano", "Dragão Brasil")
  
  // Opcional: Aprimoramentos
  enhancements?: {
    cost: string; // Ex: "+1 PM"
    effect: string;
  }[];
}