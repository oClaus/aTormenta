// ─────────────────────────────────────────────────────────────────────────────
// Tabelas 2-3 A/B/C: Parâmetros de Criaturas (Ameaças de Arton, p. 381-384)
// Fonte oficial para o Assistente Guiado de Criação/Ajuste de Ameaças
// ─────────────────────────────────────────────────────────────────────────────

export type CombatRole = "solo" | "lacaio" | "especial";

export interface CreatureParams {
  nd: string;          // "1/4", "1/2", "1", "2", ... "20", "S", "S+"
  ndOrder: number;      // valor numérico para ordenação/comparação (1/4=0.25, S=21, S+=22)
  patamar: "Iniciante" | "Veterano" | "Campeão" | "Lenda" | "L+";
  valorAtaque: number;
  danoMedio: number;
  defesa: number;
  resistenciaForte: number;  // 80%
  resistenciaMedia: number;  // 50%
  resistenciaFraca: number;  // 20%
  pv: number;
  cdEfeitoPadrao: number;
}

const ndToOrder = (nd: string): number => {
  if (nd === "1/4") return 0.25;
  if (nd === "1/2") return 0.5;
  if (nd === "S") return 21;
  if (nd === "S+") return 22;
  return parseInt(nd);
};

const patamarFor = (nd: string): CreatureParams["patamar"] => {
  const order = ndToOrder(nd);
  if (order <= 4) return "Iniciante";
  if (order <= 10) return "Veterano";
  if (order <= 16) return "Campeão";
  if (order <= 20) return "Lenda";
  return "L+";
};

const buildTable = (rows: [string, number, number, number, number, number, number, number, number][]): CreatureParams[] =>
  rows.map(([nd, valorAtaque, danoMedio, defesa, resistenciaForte, resistenciaMedia, resistenciaFraca, pv, cdEfeitoPadrao]) => ({
    nd,
    ndOrder: ndToOrder(nd),
    patamar: patamarFor(nd),
    valorAtaque,
    danoMedio,
    defesa,
    resistenciaForte,
    resistenciaMedia,
    resistenciaFraca,
    pv,
    cdEfeitoPadrao,
  }));

// ── Tabela 2-3 A: SOLOS ────────────────────────────────────────────────────
export const SOLO_TABLE: CreatureParams[] = buildTable([
  ["1/4", 6, 8, 11, 3, 0, -2, 7, 12],
  ["1/2", 7, 10, 14, 6, 3, -1, 15, 13],
  ["1", 9, 15, 16, 11, 5, 0, 35, 14],
  ["2", 12, 18, 19, 13, 7, 2, 70, 16],
  ["3", 14, 21, 21, 15, 9, 3, 105, 17],
  ["4", 16, 24, 23, 16, 10, 4, 140, 18],
  ["5", 17, 40, 24, 17, 11, 5, 200, 20],
  ["6", 20, 56, 27, 18, 12, 6, 240, 22],
  ["7", 24, 62, 31, 20, 14, 7, 280, 24],
  ["8", 26, 68, 33, 21, 15, 8, 320, 26],
  ["9", 27, 74, 34, 21, 15, 9, 360, 28],
  ["10", 29, 80, 36, 22, 16, 10, 400, 30],
  ["11", 34, 130, 41, 24, 18, 11, 550, 31],
  ["12", 36, 144, 43, 26, 20, 12, 600, 33],
  ["13", 37, 158, 44, 26, 20, 13, 650, 35],
  ["14", 39, 172, 46, 28, 22, 14, 700, 38],
  ["15", 43, 186, 50, 28, 22, 15, 750, 40],
  ["16", 46, 200, 53, 30, 24, 16, 800, 42],
  ["17", 47, 270, 54, 30, 24, 17, 1020, 44],
  ["18", 49, 288, 56, 32, 26, 18, 1080, 47],
  ["19", 52, 306, 59, 32, 26, 19, 1140, 47],
  ["20", 54, 324, 61, 34, 28, 20, 1200, 49],
  ["S", 58, 360, 65, 36, 30, 22, 2500, 51],
  ["S+", 65, 500, 70, 38, 33, 25, 4000, 55],
]);

// ── Tabela 2-3 B: LACAIOS ───────────────────────────────────────────────────
export const LACAIO_TABLE: CreatureParams[] = buildTable([
  ["1/4", 7, 9, 10, 2, 0, -1, 4, 12],
  ["1/2", 9, 11, 13, 5, 3, 0, 6, 13],
  ["1", 11, 17, 15, 10, 5, 1, 9, 14],
  ["2", 14, 21, 18, 12, 7, 3, 14, 16],
  ["3", 16, 24, 20, 14, 9, 4, 21, 17],
  ["4", 17, 32, 22, 15, 10, 5, 28, 18],
  ["5", 20, 56, 23, 16, 11, 6, 40, 20],
  ["6", 24, 62, 26, 17, 12, 7, 48, 22],
  ["7", 26, 68, 30, 19, 14, 8, 56, 24],
  ["8", 27, 74, 32, 20, 15, 9, 64, 26],
  ["9", 29, 80, 33, 20, 15, 10, 72, 28],
  ["10", 34, 105, 35, 21, 16, 11, 80, 30],
  ["11", 36, 144, 40, 23, 18, 12, 110, 31],
  ["12", 37, 158, 42, 25, 20, 13, 120, 33],
  ["13", 39, 172, 43, 25, 20, 14, 130, 35],
  ["14", 43, 186, 45, 27, 22, 15, 140, 38],
  ["15", 46, 200, 49, 27, 22, 16, 150, 40],
  ["16", 47, 235, 52, 29, 24, 17, 160, 42],
  ["17", 49, 288, 53, 29, 24, 18, 204, 44],
  ["18", 52, 306, 55, 31, 26, 19, 216, 47],
  ["19", 54, 324, 58, 31, 26, 20, 228, 47],
  ["20", 56, 344, 60, 33, 28, 21, 240, 49],
  ["S", 60, 385, 64, 35, 30, 23, 500, 51],
  ["S+", 67, 540, 69, 37, 33, 26, 800, 55],
]);

// ── Tabela 2-3 C: ESPECIAIS ──────────────────────────────────────────────────
export const ESPECIAL_TABLE: CreatureParams[] = buildTable([
  ["1/4", 4, 8, 11, 3, 0, -2, 5, 14],
  ["1/2", 5, 10, 12, 6, 3, -1, 11, 15],
  ["1", 7, 15, 14, 11, 5, 0, 25, 16],
  ["2", 10, 18, 17, 13, 7, 2, 49, 18],
  ["3", 12, 21, 19, 15, 9, 3, 74, 19],
  ["4", 14, 24, 21, 16, 10, 4, 98, 20],
  ["5", 15, 40, 22, 17, 11, 5, 140, 22],
  ["6", 18, 56, 25, 18, 12, 6, 168, 24],
  ["7", 22, 62, 29, 20, 14, 7, 196, 26],
  ["8", 24, 68, 31, 21, 15, 8, 224, 28],
  ["9", 25, 74, 32, 21, 15, 9, 252, 30],
  ["10", 27, 80, 34, 22, 16, 10, 280, 32],
  ["11", 32, 130, 39, 24, 18, 11, 385, 33],
  ["12", 34, 144, 41, 26, 20, 12, 420, 35],
  ["13", 35, 158, 42, 26, 20, 13, 455, 37],
  ["14", 37, 172, 44, 28, 22, 14, 490, 40],
  ["15", 41, 186, 48, 28, 22, 15, 525, 42],
  ["16", 44, 200, 51, 30, 24, 16, 560, 44],
  ["17", 45, 270, 52, 30, 24, 17, 714, 46],
  ["18", 47, 288, 54, 32, 26, 18, 756, 49],
  ["19", 50, 306, 57, 32, 26, 19, 798, 49],
  ["20", 52, 324, 59, 34, 28, 20, 840, 51],
  ["S", 55, 360, 63, 36, 30, 22, 1750, 55],
  ["S+", 60, 500, 67, 38, 33, 25, 2800, 60],
]);

export const TABLES_BY_ROLE: Record<CombatRole, CreatureParams[]> = {
  solo: SOLO_TABLE,
  lacaio: LACAIO_TABLE,
  especial: ESPECIAL_TABLE,
};

export const getParamsForNdAndRole = (nd: string, role: CombatRole): CreatureParams | undefined =>
  TABLES_BY_ROLE[role].find((p) => p.nd === nd);

export const ALL_ND_OPTIONS = SOLO_TABLE.map((p) => p.nd); // mesma lista de ND nas 3 tabelas

// ── Tabela 2-2: Deslocamentos de Criaturas (p. 379) ──────────────────────────
export type LocomotionForm = "bipede" | "quadrupede" | "voador" | "escalador" | "escavador" | "nadador";
export type CreatureSize = "Minúsculo" | "Pequeno" | "Médio" | "Grande" | "Enorme" | "Colossal";
export type SpeedTier = "Lento" | "Normal" | "Rápido";

interface SpeedRow {
  forma: LocomotionForm;
  faixaTamanho: "pequeno_menor" | "medio" | "grande_maior" | "fixo";
  lento: string;
  normal: string;
  rapido: string;
}

export const SPEED_TABLE: SpeedRow[] = [
  { forma: "bipede", faixaTamanho: "pequeno_menor", lento: "4,5m", normal: "6m", rapido: "9m" },
  { forma: "bipede", faixaTamanho: "medio", lento: "6m", normal: "9m", rapido: "12m" },
  { forma: "bipede", faixaTamanho: "grande_maior", lento: "9m", normal: "12m", rapido: "15m" },
  { forma: "quadrupede", faixaTamanho: "pequeno_menor", lento: "6m", normal: "9m", rapido: "12m" },
  { forma: "quadrupede", faixaTamanho: "medio", lento: "9m", normal: "12m", rapido: "15m" },
  { forma: "quadrupede", faixaTamanho: "grande_maior", lento: "12m", normal: "15m", rapido: "18m" },
  { forma: "voador", faixaTamanho: "pequeno_menor", lento: "12m", normal: "15m", rapido: "18m" },
  { forma: "voador", faixaTamanho: "medio", lento: "15m", normal: "18m", rapido: "24m" },
  { forma: "voador", faixaTamanho: "grande_maior", lento: "18m", normal: "24m", rapido: "36m" },
  { forma: "escalador", faixaTamanho: "fixo", lento: "4,5m", normal: "9m", rapido: "12m" },
  { forma: "escavador", faixaTamanho: "fixo", lento: "4,5m", normal: "6m", rapido: "9m" },
  { forma: "nadador", faixaTamanho: "fixo", lento: "9m", normal: "15m", rapido: "24m" },
];

// ── Papéis de combate: descrições para a etapa do wizard (p. 378) ───────────
export const ROLE_DESCRIPTIONS: Record<CombatRole, { label: string; description: string }> = {
  solo: {
    label: "Solo",
    description: "Estatísticas de combate equilibradas. Ideal para criaturas que lutam sozinhas ou liderando grupos de lacaios.",
  },
  lacaio: {
    label: "Lacaio",
    description: "Ataque e dano maiores, mas defesa mais baixa. Ideal para combatentes em grupo (bandos, soldados).",
  },
  especial: {
    label: "Especial",
    description: "Ataque e Defesa menores, mas CD de habilidades mais alta e mais habilidades por patamar. Ideal para conjuradores e trapaceiros.",
  },
};

// ── Funções (papéis narrativos): apenas para guiar o conceito, sem efeito numérico direto ──
export const CREATURE_FUNCTIONS = [
  { id: "combatente", label: "Combatente", suggestedRole: "solo" as CombatRole,
    description: "Eficiente em combate, especializada em causar e resistir a dano. Valores ofensivos e defensivos elevados." },
  { id: "conjurador", label: "Conjurador", suggestedRole: "especial" as CombatRole,
    description: "Usa magias/habilidades mágicas como principal forma de ataque. Ataque e dano baixos, mas efeitos em área e condições." },
  { id: "trapaceiro", label: "Trapaceiro", suggestedRole: "especial" as CombatRole,
    description: "Combina ataques e habilidades para confundir ou prejudicar oponentes, geralmente usando o ambiente." },
  { id: "assecla", label: "Assecla", suggestedRole: "lacaio" as CombatRole,
    description: "Criatura simples para ser usada em grande quantidade. Poucos PV e Defesa baixa, mas ataque e dano elevados." },
  { id: "capitao", label: "Capitão", suggestedRole: "solo" as CombatRole,
    description: "Planejado para liderar um grupo de asseclas. Combina combatente/conjurador/trapaceiro com bônus para aliados." },
  { id: "chefao", label: "Chefão", suggestedRole: "solo" as CombatRole,
    description: "Planejado para enfrentar os personagens sozinho. Várias habilidades de ataque, defesa e controle de campo." },
];

// ── Habilidades por patamar: regra geral (p. 382) ────────────────────────────
export const HABILIDADES_POR_PATAMAR: Record<CombatRole, { min: number; max: number }> = {
  solo: { min: 1, max: 2 },     // por patamar de desafio
  lacaio: { min: 1, max: 2 },
  especial: { min: 2, max: 3 },
};

// Patamares em ordem, com seus NDs associados, para calcular "quantos patamares" uma criatura atravessou
export const PATAMAR_ORDER: CreatureParams["patamar"][] = ["Iniciante", "Veterano", "Campeão", "Lenda", "L+"];

export const estimateHabilityCount = (role: CombatRole, patamar: CreatureParams["patamar"]): { min: number; max: number } => {
  const patamarIndex = PATAMAR_ORDER.indexOf(patamar) + 1; // 1-indexado: Iniciante=1
  const { min, max } = HABILIDADES_POR_PATAMAR[role];
  return { min: min * patamarIndex, max: max * patamarIndex };
};
