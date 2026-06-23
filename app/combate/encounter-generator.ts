import { Threat } from "@/types/threat";

// ─────────────────────────────────────────────────────────────────────────────
// Gerador de Encontros Aleatórios
// Baseado no sistema de Orçamento de ND por Encontro (Tormenta 20, regra padrão)
// ─────────────────────────────────────────────────────────────────────────────

export type EncounterDifficulty = "facil" | "medio" | "dificil" | "mortal";

export const DIFFICULTY_LABELS: Record<EncounterDifficulty, { label: string; description: string; multiplier: number }> = {
  facil: { label: "Fácil", description: "Os personagens devem vencer sem gastar muitos recursos.", multiplier: 0.5 },
  medio: { label: "Médio", description: "Desafio equilibrado — gasta recursos, mas sem grande risco.", multiplier: 0.75 },
  dificil: { label: "Difícil", description: "Risco real de personagens caírem ou ficarem sem recursos.", multiplier: 1 },
  mortal: { label: "Mortal", description: "Risco real de morte. Use com moderação.", multiplier: 1.5 },
};

// Conversão de ND para "valor numérico de orçamento" (escala de XP/ND simplificada)
// Usa a mesma escala de ND→ordem já usada no restante do sistema (1/4=0.25 ... S+=22)
const ND_ORDER: Record<string, number> = {
  "1/4": 0.25, "1/2": 0.5, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
  "8": 8, "9": 9, "10": 10, "11": 11, "12": 12, "13": 13, "14": 14, "15": 15,
  "16": 16, "17": 17, "18": 18, "19": 19, "20": 20, "S": 21, "S+": 22,
};

const ndOrder = (nd: string): number => ND_ORDER[nd] ?? (parseFloat(nd) || 1);

/**
 * Orçamento de ND disponível para o encontro, baseado no ND médio dos personagens,
 * número de jogadores e dificuldade desejada.
 * Regra: grupo de 4 personagens de ND X pode enfrentar com segurança um total de
 * ND somado próximo a X (dificuldade média); ajusta proporcionalmente ao número
 * de jogadores e ao multiplicador de dificuldade.
 */
export const calculateNdBudget = (
  partyAvgNd: number,
  partySize: number,
  difficulty: EncounterDifficulty
): number => {
  const base = partyAvgNd * (partySize / 4);
  return Math.max(0.25, base * DIFFICULTY_LABELS[difficulty].multiplier * 2.5);
};

// ── Temas/Origens conhecidos — populados dinamicamente a partir do "tipo" das threats ──
export const extractAvailableTypes = (threats: Threat[]): string[] => {
  const set = new Set<string>();
  threats.forEach((t) => { if (t.tema) set.add(t.tema); });
  return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
};

export type CombatRoleFilter = "qualquer" | "solo" | "lacaio" | "especial";

export interface GeneratorFilters {
  ndMin: string;
  ndMax: string;
  types: string[]; // tipos selecionados; vazio = todos
  roleFilter: CombatRoleFilter;
  surpriseMe: boolean; // ignora todos os outros filtros, sorteia livremente
  partyAvgNd: number;
  partySize: number;
  difficulty: EncounterDifficulty;
  preferSingleStrongCreature: boolean; // tenta montar com 1 criatura forte (chefão) vs. vários fracos
}

export interface GeneratedEncounterEntry {
  threat: Threat;
  quantity: number;
}

export interface GeneratedEncounter {
  entries: GeneratedEncounterEntry[];
  totalNdUsed: number;
  ndBudget: number;
  difficulty: EncounterDifficulty;
}

const inferRoleFromPapel = (papel: string): CombatRoleFilter => {
  const p = papel.toLowerCase();
  if (p.includes("assecla") || p.includes("lacaio")) return "lacaio";
  if (p.includes("conjurador") || p.includes("trapaceiro")) return "especial";
  return "solo";
};

const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/**
 * Gera um encontro aleatório respeitando o orçamento de ND e os filtros informados.
 * Estratégia: embaralha o pool elegível e vai adicionando criaturas (com possível
 * repetição de quantidade para a mesma criatura) até estourar o orçamento,
 * removendo o último excesso se passar muito o limite.
 */
export const generateEncounter = (
  pool: Threat[],
  filters: GeneratorFilters
): GeneratedEncounter | null => {
  const ndBudget = calculateNdBudget(filters.partyAvgNd, filters.partySize, filters.difficulty);

  let eligible = pool;

  if (!filters.surpriseMe) {
    const ndMinOrder = ndOrder(filters.ndMin);
    const ndMaxOrder = ndOrder(filters.ndMax);
    eligible = eligible.filter((t) => {
      const order = ndOrder(t.nd);
      return order >= ndMinOrder && order <= ndMaxOrder;
    });

    if (filters.types.length > 0) {
      eligible = eligible.filter((t) => t.tema && filters.types.includes(t.tema));
    }

    if (filters.roleFilter !== "qualquer") {
      eligible = eligible.filter((t) => inferRoleFromPapel(t.papel) === filters.roleFilter);
    }
  }

  if (!eligible.length) return null;

  const shuffled = shuffle(eligible);
  const entries: GeneratedEncounterEntry[] = [];
  let totalUsed = 0;

  // Estratégia A: uma criatura forte (chefão) — busca a criatura de maior ND que caiba no orçamento
  if (filters.preferSingleStrongCreature && !filters.surpriseMe) {
    const sortedByNd = [...eligible].sort((a, b) => ndOrder(b.nd) - ndOrder(a.nd));
    const boss = sortedByNd.find((t) => ndOrder(t.nd) <= ndBudget);
    if (boss) {
      entries.push({ threat: boss, quantity: 1 });
      totalUsed += ndOrder(boss.nd);
      // Tenta complementar com 1-2 lacaios pequenos se sobrar orçamento
      const remaining = ndBudget - totalUsed;
      if (remaining > 0.5) {
        const smallOnes = shuffle(eligible.filter((t) => ndOrder(t.nd) <= remaining && t.id !== boss.id));
        for (const s of smallOnes) {
          const qty = Math.max(1, Math.floor((remaining - totalUsed + ndOrder(boss.nd)) / Math.max(0.25, ndOrder(s.nd))));
          const affordableQty = Math.max(1, Math.min(qty, Math.floor((ndBudget - totalUsed) / ndOrder(s.nd))));
          if (affordableQty >= 1 && totalUsed + ndOrder(s.nd) <= ndBudget) {
            entries.push({ threat: s, quantity: Math.min(affordableQty, 4) });
            totalUsed += ndOrder(s.nd) * Math.min(affordableQty, 4);
            break;
          }
        }
      }
      return { entries, totalNdUsed: Math.round(totalUsed * 100) / 100, ndBudget: Math.round(ndBudget * 100) / 100, difficulty: filters.difficulty };
    }
  }

  // Estratégia B (padrão / surpreenda-me): vai sorteando criaturas e empilhando quantidade
  // até estourar o orçamento, varia entre repetir a mesma criatura (grupo de lacaios)
  // ou somar criaturas diferentes (encontro variado).
  let attempts = 0;
  const maxAttempts = shuffled.length * 4;
  let cursor = 0;

  while (totalUsed < ndBudget * 0.95 && attempts < maxAttempts) {
    const candidate = shuffled[cursor % shuffled.length];
    cursor++;
    attempts++;
    const candidateNd = ndOrder(candidate.nd);
    if (candidateNd <= 0) continue;

    const remaining = ndBudget - totalUsed;
    if (candidateNd > remaining * 1.15) continue; // muito caro para o que falta

    const already = entries.find((e) => e.threat.id === candidate.id);
    if (already) {
      // tenta aumentar a quantidade dessa criatura em até +1, se couber
      if (candidateNd <= remaining) {
        already.quantity += 1;
        totalUsed += candidateNd;
      }
    } else {
      // decide quantidade inicial: criaturas fracas tendem a vir em grupo
      const maxAffordable = Math.max(1, Math.floor(remaining / candidateNd));
      const groupSize = candidateNd <= 1 ? Math.min(maxAffordable, 1 + Math.floor(Math.random() * 3)) : 1;
      const finalQty = Math.max(1, Math.min(groupSize, maxAffordable));
      entries.push({ threat: candidate, quantity: finalQty });
      totalUsed += candidateNd * finalQty;
    }

    if (entries.length >= 5) break; // limite de variedade de criaturas distintas
  }

  if (!entries.length) {
    // fallback: pelo menos 1 criatura, mesmo que ultrapasse levemente o orçamento
    const fallback = shuffled[0];
    entries.push({ threat: fallback, quantity: 1 });
    totalUsed = ndOrder(fallback.nd);
  }

  return {
    entries,
    totalNdUsed: Math.round(totalUsed * 100) / 100,
    ndBudget: Math.round(ndBudget * 100) / 100,
    difficulty: filters.difficulty,
  };
};