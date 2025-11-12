// data/caracteristicas.ts

// Interface para a Tabela de Tamanho de Criaturas
export interface CreatureSize {
  category: string;
  examples: string;
  spaceAndReach: string;
  stealthAndManeuverModifier: string;
}

// Dados da Tabela 1-21: Tamanho de Criaturas
export const creatureSizeTable: CreatureSize[] = [
  {
    category: "Minúsculo",
    examples: "Falcão, rato, sílfide",
    spaceAndReach: "1,5m",
    stealthAndManeuverModifier: "+5 / -5",
  },
  {
    category: "Pequeno",
    examples: "Cão, goblin, hynne",
    spaceAndReach: "1,5m",
    stealthAndManeuverModifier: "+2 / -2",
  },
  {
    category: "Médio",
    examples: "Humano, anão, elfo",
    spaceAndReach: "1,5m",
    stealthAndManeuverModifier: "0",
  },
  {
    category: "Grande",
    examples: "Cavalo, ogro, serpe",
    spaceAndReach: "3m",
    stealthAndManeuverModifier: "-2 / +2",
  },
  {
    category: "Enorme",
    examples: "Ente, gigante, hidra",
    spaceAndReach: "4,5m",
    stealthAndManeuverModifier: "-5 / +5",
  },
  {
    category: "Colossal",
    examples: "Colosso, dragão, kraken",
    spaceAndReach: "9m",
    stealthAndManeuverModifier: "-10 / +10",
  },
];


// Nota de rodapé para a tabela
export const creatureSizeTableFootnote: string = "*Espaço ocupado pela criatura. \"3m\", por exemplo, significa que a criatura ocupa um espaço de 3m x 3m, ou seja, 2x2 quadrados num mapa.";