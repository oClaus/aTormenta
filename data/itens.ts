// data/itens.ts
import { SubItem } from "@/types/tesouro";

// ─── Tabela 8-3: Itens Diversos ──────────────────────────────────────────────

export const DIVERSO: SubItem[] = [
  { min: 1,   max: 2,   result: "Ácido" },
  { min: 3,   max: 4,   result: "Água benta" },
  { min: 5,   max: 5,   result: "Alaúde élfico" },
  { min: 6,   max: 6,   result: "Algemas" },
  { min: 7,   max: 8,   result: "Baça-de-fogo" },
  { min: 9,   max: 23,  result: "Bálsamo restaurador" },
  { min: 24,  max: 24,  result: "Bandana" },
  { min: 25,  max: 25,  result: "Bandoleira de poções" },
  { min: 26,  max: 30,  result: "Bomba" },
  { min: 31,  max: 31,  result: "Botas reforçadas" },
  { min: 32,  max: 32,  result: "Camisa bufante" },
  { min: 33,  max: 33,  result: "Capa esvoaçante" },
  { min: 34,  max: 34,  result: "Capa pesada" },
  { min: 35,  max: 35,  result: "Casaco longo" },
  { min: 36,  max: 36,  result: "Chapéu arcano" },
  { min: 37,  max: 38,  result: "Coleção de livros" },
  { min: 39,  max: 40,  result: "Cosmético" },
  { min: 41,  max: 42,  result: "Dente-de-dragão" },
  { min: 43,  max: 43,  result: "Enfeite de elmo" },
  { min: 44,  max: 44,  result: "Elixir do amor" },
  { min: 45,  max: 46,  result: "Equipamentos de viagem" },
  { min: 47,  max: 56,  result: "Essência de mana" },
  { min: 57,  max: 57,  result: "Estojo de disfarces" },
  { min: 58,  max: 58,  result: "Farrapos de ermitão" },
  { min: 59,  max: 59,  result: "Flauta mística" },
  { min: 60,  max: 66,  result: "Fogo alquímico" },
  { min: 67,  max: 67,  result: "Gorro de ervas" },
  { min: 68,  max: 69,  result: "Líquen lilás" },
  { min: 70,  max: 70,  result: "Luneta" },
  { min: 71,  max: 71,  result: "Luva de pelica" },
  { min: 72,  max: 73,  result: "Maleta de medicamentos" },
  { min: 74,  max: 74,  result: "Manopla" },
  { min: 75,  max: 75,  result: "Manto eclesiástico" },
  { min: 76,  max: 78,  result: "Mochila de aventureiro" },
  { min: 79,  max: 80,  result: "Musgo púrpura" },
  { min: 81,  max: 81,  result: "Organizador de pergaminhos" },
  { min: 82,  max: 83,  result: "Ossos de monstro" },
  { min: 84,  max: 85,  result: "Pó de cristal" },
  { min: 86,  max: 87,  result: "Pó de giz" },
  { min: 88,  max: 88,  result: "Pó do desaparecimento" },
  { min: 89,  max: 89,  result: "Robe místico" },
  { min: 90,  max: 91,  result: "Saco de sal" },
  { min: 92,  max: 92,  result: "Sapatos de camurça" },
  { min: 93,  max: 94,  result: "Seixo de âmbar" },
  { min: 95,  max: 95,  result: "Sela" },
  { min: 96,  max: 96,  result: "Tabardo" },
  { min: 97,  max: 97,  result: "Traje da corte" },
  { min: 98,  max: 99,  result: "Terra de cemitério" },
  { min: 100, max: 100, result: "Veste de seda" },
];

// ─── Tabela 8-4: Equipamento — Armas ─────────────────────────────────────────

export const EQUIPAMENTO_ARMA: SubItem[] = [
  { min: 1,   max: 2,   result: "Adaga" },
  { min: 3,   max: 4,   result: "Alabarda" },
  { min: 5,   max: 5,   result: "Alfange" },
  { min: 6,   max: 7,   result: "Arco curto" },
  { min: 8,   max: 10,  result: "Arco longo" },
  { min: 11,  max: 12,  result: "Arco médio" }, // removido — não consta na tab 8-4 oficial; mantido para compatibilidade
  { min: 13,  max: 13,  result: "Azagaia" },
  { min: 14,  max: 15,  result: "Besta leve" },
  { min: 16,  max: 16,  result: "Balas (20)" },
  { min: 17,  max: 18,  result: "Besta leve" },
  { min: 19,  max: 20,  result: "Besta pesada" },
  { min: 21,  max: 23,  result: "Bordão" },
  { min: 24,  max: 24,  result: "Chicote" },
  { min: 25,  max: 27,  result: "Cimitarra" },
  { min: 28,  max: 30,  result: "Clava" },
  { min: 31,  max: 31,  result: "Corrente de espinhos" },
  { min: 32,  max: 33,  result: "Espada bastarda" },
  { min: 34,  max: 38,  result: "Espada curta" },
  { min: 39,  max: 43,  result: "Espada longa" },
  { min: 44,  max: 46,  result: "Flechas (20)" },
  { min: 47,  max: 49,  result: "Florete" },
  { min: 50,  max: 51,  result: "Foice" },
  { min: 52,  max: 53,  result: "Funda" },
  { min: 54,  max: 55,  result: "Gadanho" },
  { min: 56,  max: 56,  result: "Katana" },
  { min: 57,  max: 59,  result: "Lança" },
  { min: 60,  max: 60,  result: "Lança montada" },
  { min: 61,  max: 63,  result: "Maça" },
  { min: 64,  max: 64,  result: "Machadinha" },
  { min: 65,  max: 67,  result: "Machado anão" },
  { min: 68,  max: 70,  result: "Machado de batalha" },
  { min: 71,  max: 73,  result: "Machado de guerra" },
  { min: 74,  max: 74,  result: "Machado táurico" },
  { min: 75,  max: 76,  result: "Mangual" },
  { min: 77,  max: 77,  result: "Marreta" },
  { min: 78,  max: 80,  result: "Martelo de guerra" },
  { min: 81,  max: 83,  result: "Montante" },
  { min: 84,  max: 84,  result: "Mosquete" },
  { min: 85,  max: 85,  result: "Pedras (20)" },
  { min: 86,  max: 88,  result: "Picadeta" },
  { min: 89,  max: 90,  result: "Pique" },
  { min: 91,  max: 91,  result: "Pistola" },
  { min: 92,  max: 92,  result: "Rede" },
  { min: 93,  max: 93,  result: "Tacape" },
  { min: 94,  max: 94,  result: "Tacape" },
  { min: 95,  max: 96,  result: "Tridente" },
  { min: 97,  max: 98,  result: "Tridente" },
  { min: 99,  max: 100, result: "Virotes (20)" },
];

// ─── Tabela 8-4: Equipamento — Armaduras ─────────────────────────────────────

export const EQUIPAMENTO_ARMADURA: SubItem[] = [
  { min: 1,   max: 5,   result: "Couro" },
  { min: 6,   max: 10,  result: "Bruneia" },
  { min: 11,  max: 25,  result: "Completa" },
  { min: 26,  max: 30,  result: "Cota de malha" },
  { min: 31,  max: 45,  result: "Couraça" },
  { min: 46,  max: 55,  result: "Couro batido" },
  { min: 56,  max: 65,  result: "Escudo leve" },
  { min: 66,  max: 80,  result: "Escudo pesado" },
  { min: 81,  max: 85,  result: "Gibão de peles" },
  { min: 86,  max: 90,  result: "Loriga segmentada" },
  { min: 91,  max: 100, result: "Meia armadura" },
];

// ─── Tabela 8-4: Equipamento — Esotérico ─────────────────────────────────────

export const EQUIPAMENTO_ESOTER: SubItem[] = [
  { min: 1,   max: 10,  result: "Bolsa de pó" },
  { min: 11,  max: 25,  result: "Cajado arcano" },
  { min: 26,  max: 35,  result: "Cetro elemental" },
  { min: 36,  max: 42,  result: "Costela de lich" },
  { min: 43,  max: 50,  result: "Dedo de ente" },
  { min: 51,  max: 55,  result: "Luva de ferro" },
  { min: 56,  max: 65,  result: "Medalhão de prata" },
  { min: 66,  max: 75,  result: "Orbe cristalino" },
  { min: 76,  max: 85,  result: "Tomo hermético" },
  { min: 86,  max: 100, result: "Varinha arcana" },
];

// ─── Categorias de Equipamento ────────────────────────────────────────────────
// 01-60 = Arma · 61-90 = Armadura · 91-100 = Esotérico

export const EQUIPAMENTO_CATEGORIAS = [
  { min: 1,  max: 60,  label: "Arma" },
  { min: 61, max: 90,  label: "Armadura" },
  { min: 91, max: 100, label: "Esotérico" },
] as const;

// ─── Tabela 8-5: Itens Superiores ────────────────────────────────────────────

export const SUPERIOR_ARMA: SubItem[] = [
  { min: 1,   max: 10,  result: "Atroz²" },
  { min: 11,  max: 13,  result: "Banhada a ouro" },
  { min: 14,  max: 23,  result: "Certeira" },
  { min: 24,  max: 26,  result: "Cravejada de gemas" },
  { min: 27,  max: 36,  result: "Cruel" },
  { min: 37,  max: 39,  result: "Discreta" },
  { min: 40,  max: 44,  result: "Equilibrada" },
  { min: 45,  max: 48,  result: "Harmonizada" },
  { min: 49,  max: 53,  result: "Injeção alquímica" },
  { min: 54,  max: 55,  result: "Macabra" },
  { min: 56,  max: 65,  result: "Maciça" },
  { min: 66,  max: 75,  result: "Material especial²" },
  { min: 76,  max: 80,  result: "Mira telescópica" },
  { min: 81,  max: 90,  result: "Precisa" },
  { min: 91,  max: 100, result: "Pungente¹" },
];

export const SUPERIOR_ARMADURA: SubItem[] = [
  { min: 1,   max: 15,  result: "Ajustada" },
  { min: 16,  max: 19,  result: "Banhada a ouro" },
  { min: 20,  max: 23,  result: "Cravejada de gemas" },
  { min: 24,  max: 28,  result: "Delicada" },
  { min: 29,  max: 32,  result: "Discreta" },
  { min: 33,  max: 37,  result: "Espinhos" },
  { min: 38,  max: 40,  result: "Macabra" },
  { min: 41,  max: 50,  result: "Material especial²" },
  { min: 51,  max: 55,  result: "Polida" },
  { min: 56,  max: 80,  result: "Reforçada" },
  { min: 81,  max: 90,  result: "Selada" },
  { min: 91,  max: 100, result: "Sob medida" },
];

export const SUPERIOR_ESOTER: SubItem[] = [
  { min: 1,   max: 4,   result: "Banhada a ouro" },
  { min: 5,   max: 19,  result: "Canalizador" },
  { min: 20,  max: 23,  result: "Cravejada de gemas" },
  { min: 24,  max: 27,  result: "Discreto" },
  { min: 28,  max: 42,  result: "Energético" },
  { min: 43,  max: 57,  result: "Harmonizado" },
  { min: 58,  max: 60,  result: "Macabro" },
  { min: 61,  max: 69,  result: "Material especial²" },
  { min: 70,  max: 85,  result: "Poderoso" },
  { min: 86,  max: 100, result: "Vigilante" },
];

// Categorias de Superior: 01-60 = Arma · 61-90 = Armadura · 91-100 = Esotérico
export const SUPERIOR_CATEGORIAS = [
  { min: 1,  max: 60,  label: "Arma" },
  { min: 61, max: 90,  label: "Armadura/Escudo" },
  { min: 91, max: 100, label: "Esotérico" },
] as const;